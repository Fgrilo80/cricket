#!/usr/bin/env python3
"""Print length-bias stats in the same shape as the pre-change measurement."""

from __future__ import annotations

import statistics
import sys

from option_length import CERTS, LANGS, exceeds_ratio, is_unique_longest, length_ratio, load_bank


def among_longest(question: dict) -> bool:
    from option_length import option_lengths

    correct_len, others = option_lengths(question)
    if not others:
        return True
    return correct_len >= max(others)


def row(cert: str, lang: str, questions: list[dict]) -> str:
    n = len(questions)
    if n == 0:
        return f"{cert:6} {lang:4} n={0:4}"
    strict = sum(1 for q in questions if is_unique_longest(q))
    among = sum(1 for q in questions if among_longest(q))
    gt = sum(1 for q in questions if exceeds_ratio(q))
    ratios = [length_ratio(q) for q in questions]
    over = "YES" if (strict / n) > 0.40 else "no"
    return (
        f"{cert:6} {lang:4} {n:5}  {100 * strict / n:6.1f}%  {100 * among / n:6.1f}%  "
        f"{100 * gt / n:6.1f}%  {gt:6}  {statistics.mean(ratios):5.2f}  "
        f"{statistics.median(ratios):5.2f}  {over}"
    )


def main() -> int:
    bank = load_bank()
    print(
        f"{'cert':6} {'lang':4} {'n':>5}  {'%strict':>7}  {'%among':>7}  "
        f"{'%>1.5x':>7}  {'n>1.5x':>6}  {'meanR':>5}  {'medR':>5}  >40%?"
    )
    classic: list[dict] = []
    everything: list[dict] = []
    for cert in CERTS:
        for lang in LANGS:
            questions = bank[cert][lang]
            print(row(cert, lang, questions))
            everything.extend(questions)
            if cert != "cyber":
                classic.extend(questions)
        pooled = bank[cert]["pt"] + bank[cert]["en"]
        print(row(cert, "all", pooled))
    print(row("classic", "all", classic))
    print(row("ALL", "all", everything))
    return 0


if __name__ == "__main__":
    sys.exit(main())
