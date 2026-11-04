# Cisco Quiz — Fase 3: blueprints consultados (3 Nov 2026)

Todas as perguntas novas são originais (escritas de raiz), em pares PT/EN com o mesmo índice correto, `exam` e `domain`. Os temas foram verificados nas páginas e PDFs oficiais da Cisco a 3 Nov 2026. O campo `domain` usa a numeração do blueprint (ex.: `2.3.a`).

Contexto (mudanças da Cisco em 2026):
- O DevNet foi renomeado para **CCNA/CCNP Automation** (3 Fev 2026): https://learningnetwork.cisco.com/s/a-new-era-for-cisco-certifications
- O **ENWLSD 300-425** e o **ENWLSI 300-430** foram retirados a 18 Mar 2026 e substituídos por **WLSD 300-110** e **WLSI 300-120**, com um core novo **WLCOR 350-101**: https://learningnetwork.cisco.com/s/new-wireless-certifications · https://www.cisco.com/site/us/en/learn/training-certifications/exams/retired.html
- **Não existe exame SD-Access.** O 300-440 é ENCC (cloud). O SD-Access é avaliado nos tópicos 2.4/2.5 do **ENSLD 300-420 v1.1** (e em partes do ENCOR), por isso o quiz `sda` segue esses tópicos.

| Quiz (`exam`) | Trilho | Exame / versão | Fonte oficial | Por língua (novas + reutilizadas) |
|---|---|---|---|---|
| `ccnaauto` | `automation` | 200-901 CCNAAUTO v1.1 | https://learningnetwork.cisco.com/s/ccnaauto-exam-topics | 71 (64 + 7) |
| `autocor` | `automation` | 350-901 AUTOCOR v2.0 | https://learningnetwork.cisco.com/s/autocor-exam-topics | 76 (74 + 2) |
| `wlsd` | `wireless` | 300-110 WLSD v1.2 | https://learningnetwork.cisco.com/s/wlsd-exam-topics | 65 (60 + 5) |
| `wlsi` | `wireless` | 300-120 WLSI v1.2 | https://learningnetwork.cisco.com/s/wlsi-exam-topics | 67 (65 + 2) |
| `wlcor` | `wireless` | 350-101 WLCOR v1.0 | https://learningnetwork.cisco.com/s/wlcor-exam-topics · https://learningcontent.cisco.com/documents/marketing/exam-topics/350-101-WLCOR-v1.0.pdf | 70 (70 + 0) — v4.4.0 |
| `ensdwi` | `sdx` | 300-415 ENSDWI v1.2 | https://learningnetwork.cisco.com/s/ensdwi-exam-topics | 78 (78 + 0) |
| `sda` | `sdx` | 300-420 ENSLD v1.1, tópicos 2.4–2.5 | https://learningnetwork.cisco.com/s/ensld-exam-topics | 70 (70 + 0) |
| `dccor` | `dc` | 350-601 DCCOR v1.2 | https://learningcontent.cisco.com/documents/marketing/exam-topics/350-601-DCCOR-v1.2.pdf · https://learningnetwork.cisco.com/s/dccor-exam-topics | 77 (68 + 9) |
| `clcor` | `collab` | 350-801 CLCOR v2.0 | https://learningcontent.cisco.com/documents/marketing/exam-topics/350-801-CLCOR-v2.0.pdf · https://learningnetwork.cisco.com/s/clcor-exam-topics | 78 (76 + 2) |

## Domínios por exame

- **CCNAAUTO 200-901 v1.1:** 1.0 Software Development and Design (15%) · 2.0 Understanding and Using APIs (20%) · 3.0 Cisco Platforms and Development (15%) · 4.0 Application Deployment and Security (15%) · 5.0 Infrastructure and Automation (20%) · 6.0 Network Fundamentals (15%).
- **AUTOCOR 350-901 v2.0:** 1.0 Network Automation (30%: Ansible, Terraform, RESTCONF/YANG, Python, escolha da abordagem, REST com paginação/auth/rate limit) · 2.0 Infrastructure as Code (30%: Git, CI/CD, testes, NetDevOps) · 3.0 Operations (telemetria, observabilidade, troubleshooting) · 4.0 AI in Automation.
- **WLSD 300-110 v1.2:** 1.0 Wireless Site Survey (25%) · 2.0 Wired and Wireless Infrastructure (30%) · 3.0 Mobility (25%) · 4.0 WLAN High Availability (20%).
- **WLSI 300-120 v1.2:** 1.0 FlexConnect (15%) · 2.0 QoS on a Wireless Network (10%) · 3.0 Multicast (10%) · 4.0 Location Services (10%) · 5.0 Advanced Location Services (10%) · 6.0 Security for Wireless Client Connectivity (20%) · 7.0 Monitoring (15%) · 8.0 Device Hardening (10%).
- **ENSDWI 300-415 v1.2:** 1.0 Architecture (20%) · 2.0 Controller Deployment (15%) · 3.0 Router Deployment (20%) · 4.0 Policies (20%) · 5.0 Security and Quality of Service (15%) · 6.0 Management and Operations (10%). Nota: o blueprint ainda usa os nomes vManage/vBond/vSmart. As perguntas usam os nomes atuais (Manager/Validator/Controller) e referem os antigos quando ajuda. A numeração do PDF tem uma irregularidade em 3.5/3.6, que foi seguida tal como está.
- **ENSLD 300-420 v1.1 (só SD-Access):** 2.4 SD-Access architecture (underlay, overlay, control e management plane, controller layer, fabric roles: edge/border/control-plane/intermediate, fabric-in-a-box, extended nodes, transit SD-Access vs IP) · 2.5 SD-Access fabric design considerations for wired and wireless access (overlay/fabric design, controller design, segmentation macro/micro com VN/SGT, underlay, sem STP, eficiência de L2, wireless fabric e over-the-top).
- **DCCOR 350-601 v1.2:** 1.0 Network (25%) · 2.0 Compute (25%) · 3.0 Storage Network (20%) · 4.0 Automation and Artificial Intelligence (15%) · 5.0 Security (15%).
- **CLCOR 350-801 v2.0:** 1.0 Infrastructure and Design (15%) · 2.0 Protocols and Endpoints (10%) · 3.0 On-Premises Call Control (30%) · 4.0 Voice Gateways and Session Border Controllers (10%) · 5.0 Cloud and Hybrid Services (25%) · 6.0 Media and QoS (10%). Nota: o tópico 3.5 diz "Cisco USM APIs" (ambíguo); as perguntas tratam-no como as APIs de gestão do UCM (AXL/UDS).

## Reutilização de perguntas existentes (só acrescentos)

Algumas perguntas dos trilhos `ccna`/`ccnp` que cabem mesmo no blueprint receberam `exam` + `domain` (sem mudar nenhum outro campo). O quiz junta-as através de `alsoFrom` no catálogo:

- `ccnaauto` ← ccna 139 (3.8), 140 (5.2), 152 (5.6), 163 (5.6), 165 (2.7); ccnp 185 (3.6), 186 (5.3)
- `autocor` ← ccnp 94, 176 (3.1)
- `wlsd` ← ccnp 105, 164 (2.3.a), 177 (2.5); ccna 196, 211 (2.5)
- `wlsi` ← ccnp 104, 179 (1.1)
- `dccor` ← ccnp 35 (2.6), 36 (1.4), 37 (1.11), 39 (2.1), 61/133 (1.2), 182/184 (1.4), 215 (1.3)
- `clcor` ← ccna 177 (6.4), 138 (6.3)

Ficaram de fora: ccnp 38, 43 e 191 (encaixe fraco), ccnp 132 e 183 (sobrepõem-se a perguntas novas do DCCOR sobre vPC keepalive e contratos EPG) e ccna 131 (a chave parece errada: CAPWAP split MAC, `correct: 1` mas a certa é a opção 0; fica para decisão).
