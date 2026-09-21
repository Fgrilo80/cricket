# Cricket

Base de perguntas do **Cisco Quiz** (CCST, CCNA, CCNP + **Cybersegurança**).

- Quiz: `index.html` → [GitHub Pages](https://fgrilo80.github.io/cricket/)
- Banco agregado: `cricket.json` (também em `data/`)
- Por certificação/língua: `data/{ccst|ccna|ccnp|cyber}-{pt|en}.{json,js}`

## Contagens (v3.2)

| Trilho | PT | EN |
|--------|----|----|
| CCST   | 195 | 195 |
| CCNA   | 201 | 201 |
| CCNP   | 196 | 196 |
| **Classic total** | | **1184** |
| Cyber (starters) | 12 | 12 |
| **Grand total** | | **1208** |

## Cybersegurança (4.º trilho)

Chave JSON: `cyber` (alinhada com **CCST Cybersecurity**; espaço para crescer rumo a CyberOps Associate).

UI: **Cybersegurança** (PT) / **Cybersecurity** (EN). Starters cobrem CIA, phishing, firewall vs IDS/IPS, AAA, VPN IPsec/SSL, ransomware, Zero Trust, ISE/SecureX, hashing vs encriptação, MFA, defense in depth, segmentação.

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
