"""Bank-level length-bias lint. Fails with the script's question list."""

from __future__ import annotations

import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class OptionLengthBiasTest(unittest.TestCase):
    def test_unique_longest_and_ratio_caps(self) -> None:
        script = ROOT / "scripts" / "lint_option_length.py"
        completed = subprocess.run(
            [sys.executable, str(script)],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        if completed.returncode != 0:
            self.fail(completed.stdout + completed.stderr)


if __name__ == "__main__":
    unittest.main()
