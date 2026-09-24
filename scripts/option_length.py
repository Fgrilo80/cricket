"""Shared length-bias measurements for the Cisco Quiz question bank.

Length is the Python ``len`` of the option string (Unicode code points).
The median of the other options uses ``statistics.median`` (for the usual
three distractors, that is the middle value).

A question is "unique longest" when the correct option is strictly longer
than every other option. The bank fails when, for any certificate and
language, that happens on more than 40% of questions, or when any question's
correct option is longer than 1.5× the median length of the others.
"""

from __future__ import annotations

import json
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK_PATH = ROOT / "cricket.json"
CERTS = ("ccst", "ccna", "ccnp", "cyber")
LANGS = ("pt", "en")

UNIQUE_LONGEST_MAX = 0.40
LENGTH_RATIO_MAX = 1.5


def load_bank(path: Path | None = None) -> dict:
    with (path or BANK_PATH).open(encoding="utf-8") as fh:
        return json.load(fh)


def option_lengths(question: dict) -> tuple[int, list[int]]:
    options = question["options"]
    correct = question["correct"]
    correct_len = len(options[correct])
    others = [len(opt) for i, opt in enumerate(options) if i != correct]
    return correct_len, others


def median_others(others: list[int]) -> float:
    if not others:
        return 0.0
    return float(statistics.median(others))


def length_ratio(question: dict) -> float:
    correct_len, others = option_lengths(question)
    med = median_others(others)
    if med <= 0:
        return float("inf")
    return correct_len / med


def is_unique_longest(question: dict) -> bool:
    correct_len, others = option_lengths(question)
    if not others:
        return True
    return correct_len > max(others)


def exceeds_ratio(question: dict, limit: float = LENGTH_RATIO_MAX) -> bool:
    correct_len, others = option_lengths(question)
    med = median_others(others)
    if med <= 0:
        return True
    return correct_len > limit * med


def snippet(text: str, limit: int = 90) -> str:
    text = " ".join(text.split())
    if len(text) <= limit:
        return text
    return text[: limit - 1] + "…"


def question_label(cert: str, lang: str, index: int) -> str:
    return f"{cert}/{lang}#{index}"
