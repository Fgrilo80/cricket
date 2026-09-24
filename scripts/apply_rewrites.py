#!/usr/bin/env python3
"""Merge validated rewrite chunks into data/<cert>-<lang>.json and rebuild."""

from __future__ import annotations

import json
import sys
from pathlib import Path

from option_length import CERTS, LANGS, ROOT
from rebuild_bank import load_splits, write_outputs
from validate_rewrite_chunk import validate

CHUNK_DIR = ROOT / ".rewrite-work" / "chunks"
OUT_DIR = ROOT / ".rewrite-work" / "out"


def main() -> int:
    outputs = sorted(OUT_DIR.glob("*.json"))
    if not outputs:
        print(f"no outputs in {OUT_DIR}", file=sys.stderr)
        return 1
    bank = load_splits()
    applied = 0
    for path in outputs:
        out = json.loads(path.read_text(encoding="utf-8"))
        src_path = CHUNK_DIR / path.name
        src = json.loads(src_path.read_text(encoding="utf-8"))
        errs = validate(src, out)
        if errs:
            print(f"REFUSING {path.name}: {len(errs)} validation errors", file=sys.stderr)
            for err in errs[:12]:
                print(f"  {err}", file=sys.stderr)
            return 1
        cert = src["cert"]
        for src_item, out_item in zip(src["items"], out["items"]):
            index = src_item["index"]
            for lang in LANGS:
                question = bank[cert][lang][index]
                updated = out_item[lang]
                question["options"] = updated["options"]
                if "explanation" in updated:
                    question["explanation"] = updated["explanation"]
            applied += 1
    write_outputs(bank)
    print(f"applied {applied} pairs from {len(outputs)} chunks and rebuilt bank files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
