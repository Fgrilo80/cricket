# Changelog — Cricket / Cisco Quiz (web)

## v4.2.0 — 2026-11-03

- **Fase 3 (novos quizzes):** 5 trilhos novos e 8 quizzes por exame. Todas as perguntas novas são pares PT/EN originais, com explicação, `exam` e `domain` do blueprint atual.
  - **Automação** (`automation`): CCNA Automation 200-901 CCNAAUTO (`ccnaauto`, **71**) e CCNP Automation AUTOCOR 350-901 v2.0 (`autocor`, **76**). São os sucessores do DevNet.
  - **Wireless** (`wireless`): WLSD 300-110 (`wlsd`, **65**) e WLSI 300-120 (`wlsi`, **67**). Substituem o ENWLSD 300-425 e o ENWLSI 300-430, retirados.
  - **SD-WAN e SD-Access** (`sdx`): ENSDWI 300-415 (`ensdwi`, **78**) e SD-Access segundo o ENSLD 300-420, tópicos 2.4–2.5 (`sda`, **70**). Não existe um exame SD-Access próprio.
  - **Data Center** (`dc`): DCCOR 350-601 v1.2 (`dccor`, **77**).
  - **Colaboração** (`collab`): CLCOR 350-801 v2.0 (`clcor`, **78**).
- Os quizzes podem também tirar perguntas `ccna`/`ccnp` existentes que receberam `exam`/`domain` (só acrescentos, 27 perguntas). Isto é feito pelo campo novo `alsoFrom` no catálogo. O `index.html` carrega esses trilhos e junta-os no pool (`poolFor`).
- Totais por língua: automation 138 · wireless 125 · sdx 148 · dc 68 · collab 76. Total do site: **2642 → 3752**.
- Compatibilidade: `ccst`/`ccna`/`ccnp`/`cyber` mantêm o formato (só ganharam campos opcionais). Nenhuma pergunta nova tem `topic`. O catálogo passa a `4.2.0`. Detalhes e URLs em `docs/quiz-blueprints-phase3.md`.
- Validação: lint `question-bank-length` e unittest OK. Paridade PT/EN OK. Semelhança < 0.8 com o banco existente.
- `app-version.json` **não** foi alterado.

## v4.1.0 — 2026-11-03

- **Fase 2 (novos quizzes):** 5 quizzes novos. Todas as perguntas novas são pares PT/EN originais, com explicação e domínio do blueprint.
  - **CCST Networking (100-150)** (`ccst-net`): é uma vista do trilho `ccst`. 205 perguntas existentes foram etiquetadas com `exam`/`domain` e entraram +40 pares para cobrir lacunas. **245** por língua.
  - **CCNP Enterprise ENCOR (350-401 v1.2)** (`encor`): é uma vista do trilho `ccnp`. 132 perguntas existentes foram etiquetadas e entraram +41 pares. **173** por língua.
  - **CCST IT Support (100-140)**: trilho novo `ccstit`, com **81** por língua.
  - **IIoT e redes industriais**: trilho novo `iiot`, com **82** por língua.
  - **Field Support** (cenários de terreno): trilho novo `field`, com **77** por língua.
- Totais por língua: CCST 227 → 267 · CCNA 238 · CCNP 232 → 273 · Cyber 303 · IIoT 82 · CCST IT 81 · Field 77. Total do site: **2000 → 2642**.
- Compatibilidade: `ccst`/`ccna`/`ccnp`/`cyber` mantêm o mesmo formato (a app 1.2.11 ignora as chaves novas). Nenhuma pergunta nova tem `topic`. O catálogo passa a `4.1.0` com os novos `tracks` e os quizzes `ccst-net` e `encor`. Detalhes e URLs dos blueprints em `docs/quiz-blueprints-phase2.md`.
- Validação: lint `question-bank-length` e unittest OK. Paridade PT/EN (tamanho e índice correto) OK.
- `app-version.json` **não** foi alterado: continua com bankTotal 2000 e só deve ser atualizado no sync aprovado.

## v4.0.0 — 2026-11-03

- **Cyber split (phase 1):** o trilho `cyber` mantém-se (app 1.2.11 continua compatível) e cada pergunta ganha campos opcionais `exam`, `topic` e `domain`.
- Novos quizzes no site (vistas filtradas, sem duplicar perguntas), definidos em `data/quiz-catalog.js` para se poderem acrescentar mais trilhos depois:
  - Exames: CCST Cybersecurity (100-160), CyberOps/Cybersecurity Associate (200-201), CCNP Security SCOR (350-701 v2.0)
  - Temas: Ameaças e ataques · Criptografia e PKI · Firewalls/IPS/VPN · Endpoints · Identidade e acesso · Logs/IR · Rede e cloud · Risco/conformidade
- Banco Cyber: **137 → 303** por língua (+166 pares PT/EN originais). Total do site: **1668 → 2000**.
- Contagens por exame (por língua): CCST Cyber 93 · CBROPS 111 · SCOR 99.
- Validação: schema/parity PT-EN, lint `question-bank-length` e unittest OK.
- `app-version.json`: bankTotal 2000 · bankClassic 1394 · bankCyber 606. Catálogo para a app em `data/quiz-catalog.json`.
- Blueprints consultados em `/workspace/quiz-cyber-split-2026-11-03/blueprints.md`.

## v3.9.0 — 2026-11-03

- Publicados **6 pares** PT/EN dos rascunhos diários de 2 Nov 2026 (6 gerados, nenhum removido).
- Novos temas: conflito de IP estático / gama DHCP (CCST), SVI Vlan20 down/down sem VLAN ou portas ativas (CCNA), route-map BGP de entrada com deny implícito e `permit 20` vazio (CCNP), eventos 4771 0x18 / password spraying (Cyber), Word → `mshta` HTA remoto → PowerShell codificado (Cyber), evento 4648 com credenciais de Domain Admin + C$ (Cyber).
- Totais: CCST 227, CCNA 238, CCNP 232, Cyber 137 (PT = EN). Clássicos **1394**. Cyber **274**. Banco **1668**.
- Viés de comprimento: resposta correta estritamente mais longa em 22,5% do banco (limite 40% por certificação), 0 perguntas acima de 1,5× a mediana.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.8.0 — 2026-11-01

- Publicados **6 pares** PT/EN dos rascunhos diários de 1 Nov 2026 (6 gerados, nenhum removido).
- Novos temas: reserva DHCP para impressora (CCST), `switchport trunk allowed vlan` sem `add` (CCNA), `network` do BGP com match exato / rota para Null0 (CCNP), evento 1102 (Cyber), `rundll32 comsvcs.dll MiniDump` do LSASS (Cyber), eventos 4720 + 4732 (Cyber).
- Totais: CCST 226, CCNA 237, CCNP 231, Cyber 134 (PT = EN). Clássicos **1388**. Cyber **268**. Banco **1656**.
- Viés de comprimento: resposta correta estritamente mais longa em 22,6% do banco (limite 40% por certificação), 0 perguntas acima de 1,5× a mediana.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.7.0 — 2026-10-31

- Publicados **5 pares** PT/EN dos rascunhos diários de 31 Out 2026 (6 gerados, 1 removido por tema duplicado do live).
- Removido (já coberto no live): `ipconfig /release` + `/renew` (31 Out, CCST #209, mesma pergunta e mesma resposta).
- Dificuldade PT normalizada em 3 rascunhos de 31 Out («Média» → «Médio»).
- Totais: CCST 225, CCNA 236, CCNP 230, Cyber 131 (PT = EN). Clássicos **1382**. Cyber **262**. Banco **1644**.
- Viés de comprimento: resposta correta estritamente mais longa em 22,8% do banco (limite 40% por certificação), 0 perguntas acima de 1,5× a mediana.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.6.0 — 2026-10-31

- Publicados **12 pares** PT/EN dos rascunhos diários de 29 e 30 Out 2026 (12 gerados, nenhum removido).
- Dificuldade PT normalizada em 3 rascunhos de 30 Out («Média» → «Médio»).
- Totais: CCST 225, CCNA 235, CCNP 229, Cyber 128 (PT = EN). Clássicos **1378**. Cyber **256**. Banco **1634**.
- Viés de comprimento: resposta correta estritamente mais longa em 22,9% do banco (limite 40% por certificação), 0 perguntas acima de 1,5× a mediana.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.5.0 — 2026-10-27

- Publicados **18 pares** PT/EN dos rascunhos diários de 25 a 27 Out 2026 (18 gerados, nenhum removido).
- Totais: CCST 223, CCNA 233, CCNP 227, Cyber 122 (PT = EN). Clássicos **1366**. Cyber **244**. Banco **1610**.
- Viés de comprimento: resposta correta estritamente mais longa em 23,3% do banco (limite 40% por certificação), 0 perguntas acima de 1,5× a mediana.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.4.0 — 2026-10-25

- Publicados **62 pares** PT/EN dos rascunhos diários de 13 a 24 Out 2026 (72 gerados, 10 pares removidos por tema duplicado do live).
- Removidos (já cobertos no live): BGP AS-path prepending (18 Out), OSPF NSSA Type-7→5 (22 Out, CCNP #74), EIGRP stub/SIA (22 Out, CCNP #120), BGP route dampening (15 Out, CCNP #197), limpar/inspecionar conector de fibra (18 Out, CCST #211), canais 1/6/11 a 2,4 GHz (19 Out, CCST #119), APC vs UPC (22 Out, CCST #192), LED de link apagado (23 Out, CCST #129), conflito de IP duplicado (24 Out, CCST #128), certutil como LOLBin (18 Out, Cyber #32).
- Totais: CCST 220, CCNA 230, CCNP 224, Cyber 113 (PT = EN). Clássicos **1348**. Cyber **226**. Banco **1574**.
- App Flutter permanece **1.2.11+13**; `app-version.json` atualiza só `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.3.0 — 2026-10-12

- Publicados **110 pares** PT/EN dos rascunhos diários de 23 Set a 12 Out 2026 (120 gerados, 10 pares removidos por tema duplicado).
- Duplicados entre rascunhos: certificate pinning (fica 26 Set; sai 8 Out) e crimper vs punch-down (fica o crimper de 6 Out; sai o punch-down de 9 Out).
- Duplicados contra o live: uRPF, EIGRP stub, DHCP snooping+DAI, SOAR vs SIEM, shaping vs policing, autonegotiation/duplex mismatch, NSSA Type 7→5 e native VLAN mismatch.
- Dificuldade PT normalizada nas 18 perguntas live que ainda tinham Easy/Medium/Hard (Fácil/Médio/Difícil). O mesmo mapa foi aplicado aos rascunhos.
- Totais: CCST 213, CCNA 219, CCNP 215, Cyber 78 (PT = EN). Clássicos **1294**. Cyber **156**. Banco **1450**.
- App Flutter permanece **1.2.10+12**; `app-version.json` atualiza `bankTotal` / `bankClassic` / `bankCyber`. O refresh OTA continua por SHA-256 do `cricket.json`.

## v3.2.1 — 2026-09-23

- Publicados **6 pares** de 2026-09-22: CCST port security, CCNA NHRP/DMVPN, CCNP route-map, Cyber SIEM, MITRE ATT&CK e WAF.
- Trilho **cyber** +**5 pares**: DNSSEC, SPF/DKIM/DMARC, EDR vs XDR, SOAR e threat hunting.
- Totais: CCST 196, CCNA 202, CCNP 197, Cyber 20 (PT = EN). Clássicos **1190**. Cyber **40**. Banco **1230**.
- App Flutter permanece **1.2.7**; `app-version.json` `bankTotal` **1230** para o refresh OTA do banco.

## v3.2 — 2026-09-21

- Publicadas **42 pares** pendentes (dias 14, 15, 17–21) → trilhos clássicos **1184** (CCST 195, CCNA 201, CCNP 196 × PT/EN).
- Novo trilho **`cyber`** (Cybersegurança / Cybersecurity) com **12** pares starter (24 perguntas).
- Total no banco: **1208**. UI: 4.º cartão, contagens e DB Info atualizados.
- `app-version.json` → app Flutter **1.2.7**.

## v3.1 — 2026-09-13 (aprox.)

- Banco 1100; banner v3.1; `app-version.json` 1.2.6.
