#!/usr/bin/env python3
"""Regenerate data/*.js and the aggregated cricket.json files from data/*-*.json.

The per-certificate JSON files are the edit source. This rewrites:

- data/<cert>-<lang>.js
- data/cricket.json
- cricket.json (repo root, same document)
- data/cricket.js
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from option_length import CERTS, LANGS, ROOT

DATA = ROOT / "data"


def dumps(obj) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2) + "\n"


def render_js(obj) -> str:
    return "window.QUIZ_BANK = " + json.dumps(obj, ensure_ascii=False, indent=2) + ";\n"


def load_splits() -> dict:
    bank: dict = {}
    for cert in CERTS:
        bank[cert] = {}
        for lang in LANGS:
            path = DATA / f"{cert}-{lang}.json"
            with path.open(encoding="utf-8") as fh:
                bank[cert][lang] = json.load(fh)
    return bank


def write_outputs(bank: dict) -> None:
    for cert in CERTS:
        for lang in LANGS:
            questions = bank[cert][lang]
            (DATA / f"{cert}-{lang}.json").write_text(dumps(questions), encoding="utf-8")
            (DATA / f"{cert}-{lang}.js").write_text(render_js(questions), encoding="utf-8")
    text = dumps(bank)
    (DATA / "cricket.json").write_text(text, encoding="utf-8")
    (ROOT / "cricket.json").write_text(text, encoding="utf-8")
    (DATA / "cricket.js").write_text(render_js(bank), encoding="utf-8")


def main() -> int:
    bank = load_splits()
    write_outputs(bank)
    print("rebuilt cricket.json, data/cricket.json, data/cricket.js and per-cert js")
    return 0


if __name__ == "__main__":
    sys.exit(main())
