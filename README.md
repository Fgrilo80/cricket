# Cricket

Base de perguntas do **Cisco Quiz** (CCST, CCNA, CCNP + **Cybersegurança**).

- Quiz: `index.html` → [GitHub Pages](https://fgrilo80.github.io/cricket/)
- Banco agregado: `cricket.json` (também em `data/`)
- Por certificação/língua: `data/{ccst|ccna|ccnp|cyber}-{pt|en}.{json,js}`

## Contagens (v3.2.1)

| Trilho | PT | EN |
|--------|----|----|
| CCST   | 196 | 196 |
| CCNA   | 202 | 202 |
| CCNP   | 197 | 197 |
| **Classic total** | | **1190** |
| Cyber  | 20 | 20 |
| **Grand total** | | **1230** |

## Cybersegurança (4.º trilho)

Chave JSON: `cyber` (alinhada com **CCST Cybersecurity**; espaço para crescer rumo a CyberOps Associate).

UI: **Cybersegurança** (PT) / **Cybersecurity** (EN). O trilho cobre CIA, phishing, firewall vs IDS/IPS, AAA, VPN IPsec/SSL, ransomware, Zero Trust, ISE/SecureX, hashing vs encriptação, MFA, defense in depth, segmentação, SIEM, MITRE ATT&CK, WAF, DNSSEC, SPF/DKIM/DMARC, EDR vs XDR, SOAR e threat hunting.

Mais perguntas virão — a arquitetura (schema, cartão, filtros, refresh remoto) já está ligada.

## Acrescentar perguntas

Edita `data/<cert>-<lang>.json` (e regenera o `.js` / `cricket.json`). Formato:

```json
{
  "question": "…",
  "options": ["A", "B", "C", "D"],
  "correct": 0,
  "explanation": "…",
  "difficulty": "Fácil"
}
```

URL de refresh (não alterar sem necessidade):
`https://raw.githubusercontent.com/Fgrilo80/cricket/main/cricket.json`
