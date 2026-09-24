#!/usr/bin/env python3
"""Fail when the question bank shows a correct-answer length bias.

Rules (per certificate CCST, CCNA, CCNP and Cyber, each language separately
and pooled):

1. The correct option is the unique longest in more than 40% of questions.
2. Any question whose correct option is longer than 1.5× the median length
   of the other options.

Length is the Unicode code-point length of the option text.
"""

from __future__ import annotations

import sys
from collections import defaultdict

from option_length import (
    CERTS,
    LANGS,
    LENGTH_RATIO_MAX,
    UNIQUE_LONGEST_MAX,
    exceeds_ratio,
    is_unique_longest,
    length_ratio,
    load_bank,
    median_others,
    option_lengths,
    question_label,
    snippet,
)


def evaluate(bank: dict) -> tuple[list[str], list[str]]:
    """Return (summary lines, failure lines). Failures empty means pass."""
    summary: list[str] = []
    failures: list[str] = []
    ratio_offenders: list[str] = []

    pooled_questions: dict[str, list[tuple[str, int, dict]]] = defaultdict(list)

    for cert in CERTS:
        if cert not in bank:
            failures.append(f"missing certificate '{cert}' in cricket.json")
            continue
        for lang in LANGS:
            questions = bank[cert].get(lang)
            if not isinstance(questions, list):
                failures.append(f"missing {cert}/{lang} question list")
                continue
            unique = 0
            for index, question in enumerate(questions):
                pooled_questions[cert].append((lang, index, question))
                label = question_label(cert, lang, index)
                try:
                    correct_len, others = option_lengths(question)
                except (KeyError, IndexError, TypeError) as exc:
                    failures.append(f"{label}: malformed question ({exc})")
                    continue
                med = median_others(others)
                if is_unique_longest(question):
                    unique += 1
                if exceeds_ratio(question):
                    ratio = length_ratio(question)
                    qtext = snippet(str(question.get("question", "")))
                    correct = question["options"][question["correct"]]
                    ratio_offenders.append(
                        f"{label}: correct is {ratio:.2f}× median distractor "
                        f"(correct_len={correct_len}, median_others={med:.1f}, "
                        f"other_lens={others}) "
                        f"Q: {qtext} | correct: {snippet(correct, 110)}"
                    )
            n = len(questions)
            pct = (unique / n) if n else 1.0
            flag = "FAIL" if pct > UNIQUE_LONGEST_MAX else "ok"
            summary.append(
                f"{cert:6} {lang:3} n={n:4} unique_longest={unique:4} "
                f"({100 * pct:5.1f}%) threshold={100 * UNIQUE_LONGEST_MAX:.0f}% {flag}"
            )
            if pct > UNIQUE_LONGEST_MAX:
                failures.append(
                    f"{cert}/{lang}: correct option is the unique longest in "
                    f"{unique}/{n} questions ({100 * pct:.1f}% > "
                    f"{100 * UNIQUE_LONGEST_MAX:.0f}%)"
                )

        pool = pooled_questions.get(cert, [])
        if not pool:
            continue
        unique = sum(1 for _lang, _i, q in pool if is_unique_longest(q))
        n = len(pool)
        pct = unique / n
        flag = "FAIL" if pct > UNIQUE_LONGEST_MAX else "ok"
        summary.append(
            f"{cert:6} all n={n:4} unique_longest={unique:4} "
            f"({100 * pct:5.1f}%) threshold={100 * UNIQUE_LONGEST_MAX:.0f}% {flag}"
        )
        if pct > UNIQUE_LONGEST_MAX:
            failures.append(
                f"{cert}/all: correct option is the unique longest in "
                f"{unique}/{n} questions ({100 * pct:.1f}% > "
                f"{100 * UNIQUE_LONGEST_MAX:.0f}%)"
            )

    if ratio_offenders:
        failures.append(
            f"{len(ratio_offenders)} question(s) have correct length "
            f"> {LENGTH_RATIO_MAX:g}× the median length of the other options:"
        )
        failures.extend(ratio_offenders)
    return summary, failures


def main() -> int:
    bank = load_bank()
    summary, failures = evaluate(bank)
    print("Option-length lint")
    print(
        f"Rules: unique-longest ≤ {100 * UNIQUE_LONGEST_MAX:.0f}% per certificate "
        f"(each language and pooled); no question with correct > "
        f"{LENGTH_RATIO_MAX:g}× median(other options)."
    )
    print()
    for line in summary:
        print(line)
    print()
    if failures:
        print(f"FAILED ({len(failures)} finding(s))")
        for line in failures:
            print(line)
        return 1
    print("PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
