#!/usr/bin/env python3
"""Validate one rewritten question-pair chunk against length and fidelity rules.

Usage:
  python3 scripts/validate_rewrite_chunk.py INPUT.json OUTPUT.json
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

from option_length import median_others

# Official lint fails only when correct > 1.5× median(others).
# Longer answers must sit further inside that line so one edit cannot flip them.
RATIO_HARD = 1.5
RATIO_LONG = 1.35
MIN_RATIO_LONG = 0.80
MAX_DISTRACTOR_RATIO = 1.25


def problems_for_question(original: dict, updated: dict, allow_unique: bool, lang: str) -> list[str]:
    errs: list[str] = []
    if updated.get("question", original["question"]) != original["question"]:
        errs.append(f"{lang}: question text changed")
    if updated.get("correct", original["correct"]) != original["correct"]:
        errs.append(f"{lang}: correct index changed")
    if updated.get("difficulty", original["difficulty"]) != original["difficulty"]:
        errs.append(f"{lang}: difficulty changed")

    options = updated.get("options")
    if not isinstance(options, list) or len(options) != 4:
        return errs + [f"{lang}: options must be a list of 4 strings"]
    if any(not isinstance(opt, str) or not opt.strip() for opt in options):
        errs.append(f"{lang}: empty or non-string option")
        return errs
    if len({opt.strip() for opt in options}) != 4:
        errs.append(f"{lang}: options are not unique")

    correct_i = original["correct"]
    old_correct = original["options"][correct_i]
    new_correct = options[correct_i]
    # Correct text stays verbatim in the batch rewrite. Over-long answers are
    # shortened in a separate pass so the technical claim is not paraphrased.
    if new_correct != old_correct:
        errs.append(f"{lang}: correct option must be copied verbatim")

    explanation = updated.get("explanation", "")
    if not isinstance(explanation, str) or len(explanation.strip()) < 40:
        errs.append(f"{lang}: explanation missing or too short")
    elif len(explanation) < 0.55 * len(original.get("explanation", "")):
        errs.append(f"{lang}: explanation was cut too far")

    for opt in options:
        low = opt.lower()
        if "lorem ipsum" in low or "preenchimento" in low or "padding" in low:
            errs.append(f"{lang}: option looks padded: {opt[:60]}")
        words = [
            w.lower()
            for w in re.findall(r"[A-Za-zÀ-ÿ]{3,}", opt)
        ]
        if len(words) >= 12:
            top_word, top_n = Counter(words).most_common(1)[0]
            if top_n >= 6 and top_n > len(words) * 0.4 and top_word not in {"type", "vlan", "ip"}:
                errs.append(f"{lang}: option repeats '{top_word}' too often: {opt[:70]}")
        if re.search(r"(.)\1{6,}", opt):
            errs.append(f"{lang}: option has character padding: {opt[:60]}")

    lens = [len(opt) for opt in options]
    cl = lens[correct_i]
    others = [n for i, n in enumerate(lens) if i != correct_i]
    med = median_others(others)
    ratio_cap = RATIO_LONG if cl >= 40 else RATIO_HARD
    if med <= 0 or cl > ratio_cap * med:
        errs.append(
            f"{lang}: ratio {cl / med if med else float('inf'):.2f} exceeds {ratio_cap} "
            f"(correct_len={cl}, other_lens={others})"
        )
    if cl >= 40:
        too_short = [n for n in others if n < int(cl * MIN_RATIO_LONG)]
        too_long = [n for n in others if n > int(cl * MAX_DISTRACTOR_RATIO) + 4]
        if too_short:
            errs.append(
                f"{lang}: distractor(s) shorter than {MIN_RATIO_LONG:.0%} of correct "
                f"(correct_len={cl}, other_lens={others})"
            )
        if too_long:
            errs.append(
                f"{lang}: distractor(s) longer than {MAX_DISTRACTOR_RATIO:.0%} of correct "
                f"(correct_len={cl}, other_lens={others})"
            )
    elif cl >= 12:
        floor = max(1, int(cl * 0.72))
        if min(others) < floor:
            errs.append(
                f"{lang}: distractors still too short "
                f"(correct_len={cl}, other_lens={others}, floor={floor})"
            )
    if allow_unique:
        if not (cl > max(others)):
            errs.append(
                f"{lang}: this item is flagged allow_unique_longest; "
                f"correct must be strictly longest (correct_len={cl}, other_lens={others})"
            )
    else:
        if cl > max(others):
            errs.append(
                f"{lang}: correct is unique longest; lengthen a distractor to match or exceed it "
                f"(correct_len={cl}, other_lens={others})"
            )
    return errs


def validate(src: dict, out: dict) -> list[str]:
    errs: list[str] = []
    if out.get("cert") != src.get("cert"):
        errs.append("cert field mismatch")
    src_items = src["items"]
    out_items = out.get("items")
    if not isinstance(out_items, list) or len(out_items) != len(src_items):
        return errs + ["output items missing or wrong length"]
    for src_item, out_item in zip(src_items, out_items):
        idx = src_item["index"]
        if out_item.get("index") != idx:
            errs.append(f"index mismatch, expected {idx}")
            continue
        allow = bool(src_item["allow_unique_longest"])
        for lang in ("pt", "en"):
            updated = out_item.get(lang)
            if not isinstance(updated, dict):
                errs.append(f"#{idx} {lang}: missing object")
                continue
            merged = dict(src_item[lang])
            merged.update(updated)
            for msg in problems_for_question(src_item[lang], merged, allow, f"#{idx} {lang}"):
                errs.append(msg)
    return errs


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: validate_rewrite_chunk.py INPUT.json OUTPUT.json", file=sys.stderr)
        return 2
    src = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    out = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
    errs = validate(src, out)
    if errs:
        print(f"FAILED {len(errs)} problem(s)")
        for err in errs:
            print(err)
        return 1
    print(f"PASSED {src['cert']} {len(src['items'])} pairs")
    return 0


if __name__ == "__main__":
    sys.exit(main())
