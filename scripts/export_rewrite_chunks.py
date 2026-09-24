#!/usr/bin/env python3
"""Export PT/EN pairs that fail the 1.5× rule into rewrite chunks."""

from __future__ import annotations

import json
import sys
from pathlib import Path

from option_length import CERTS, LANGS, ROOT, exceeds_ratio, is_unique_longest, load_bank

OUT_DIR = ROOT / ".rewrite-work" / "chunks"
# About 30% of edited pairs stay unique-longest (still within the ratio cap)
# so the finished bank sits near the random baseline instead of inverting the bias.
UNIQUE_SHARE = 0.30
CHUNK_SIZE = 10


def main() -> int:
    bank = load_bank()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUT_DIR.glob("*.json"):
        old.unlink()

    manifest = []
    for cert in CERTS:
        pt = bank[cert]["pt"]
        en = bank[cert]["en"]
        edited = []
        untouched_unique = {"pt": 0, "en": 0}
        for index, (qpt, qen) in enumerate(zip(pt, en)):
            if exceeds_ratio(qpt) or exceeds_ratio(qen):
                edited.append(index)
            else:
                if is_unique_longest(qpt):
                    untouched_unique["pt"] += 1
                if is_unique_longest(qen):
                    untouched_unique["en"] += 1
        n = len(pt)
        # Pick a share that keeps both languages near 30% unique-longest.
        target = int(round(UNIQUE_SHARE * n))
        room = min(target - untouched_unique["pt"], target - untouched_unique["en"])
        room = max(0, min(room, len(edited)))
        # Very short keys cannot be strictly longest without crossing 1.5×.
        eligible = [
            index
            for index in edited
            if len(pt[index]["options"][pt[index]["correct"]]) >= 16
            and len(en[index]["options"][en[index]["correct"]]) >= 16
        ]
        allow = set(eligible[:room])
        items = []
        for index in edited:
            items.append(
                {
                    "index": index,
                    "allow_unique_longest": index in allow,
                    "pt": pt[index],
                    "en": en[index],
                }
            )
        print(
            f"{cert}: edit {len(edited)} pairs, allow_unique {len(allow)}, "
            f"untouched unique pt={untouched_unique['pt']} en={untouched_unique['en']}, "
            f"projected unique pt={untouched_unique['pt'] + len(allow)}/{n} "
            f"({100 * (untouched_unique['pt'] + len(allow)) / n:.1f}%) "
            f"en={untouched_unique['en'] + len(allow)}/{n} "
            f"({100 * (untouched_unique['en'] + len(allow)) / n:.1f}%)"
        )
        for part, start in enumerate(range(0, len(items), CHUNK_SIZE)):
            chunk_items = items[start : start + CHUNK_SIZE]
            name = f"{cert}-{part:02d}.json"
            payload = {"cert": cert, "part": part, "items": chunk_items}
            path = OUT_DIR / name
            path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            manifest.append(
                {
                    "file": name,
                    "cert": cert,
                    "pairs": len(chunk_items),
                    "indices": [item["index"] for item in chunk_items],
                }
            )
    (OUT_DIR / "_manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"wrote {len(manifest)} chunks to {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
