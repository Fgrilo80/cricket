# Cisco Quiz — Fase 2: blueprints consultados (3 Nov 2026)

Todas as perguntas são originais (escritas de raiz). Os temas abaixo foram verificados nas páginas oficiais a 3 Nov 2026.

## (b) CCST IT Support — 100-140
Fonte oficial: https://learningnetwork.cisco.com/s/ccst-it-support-exam-topics
Também: https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-it-support.html ·
https://certiport.pearsonvue.com/Certifications/Cisco/Certified-Support-Technician/Certify.aspx
Exame de 50 min. Domínios (sem pesos publicados):
1. IT Support Job Tasks and Responsibilities — filas, gestão do tempo, ticketing, SLA, KPI; documentação da interação; processo de resolução de problemas (definir, recolher, causa provável, plano, implementar, observar, repetir, documentar).
2. Hardware Issues — segurança (choque, ESD, fogo); ferramentas de informação (Task Manager, System Information, Event Viewer, ipconfig; Activity Monitor, About This Mac, System Settings, Console, ifconfig); portas/cabos (HDMI, USB-C, DVI, DisplayPort, VGA, USB-A/B/Micro, série, RJ-45, UTP/STP, energia, Thunderbolt 3/4, conversores); componentes (CPU, motherboard, RAM, placas, SATA/SSD/NVMe/M.2, Device Manager, e-waste); problemas de hardware (energia, requisitos de app, Device Manager, LEDs, firmware).
3. Connectivity and Resource Access Issues — AD, Entra ID, AWS IAM; MFA; mapear partilhas SMB e cloud; gpupdate; reset de passwords; grupos de segurança/distribuição; permissões; periféricos (impressoras, fila, toner, encravamentos, fax, headsets, webcams, Webex Desk Pro…); conectividade (LAN vs WLAN, DNS, DHCP/APIPA, DHCPv6/link-local, gateway, SSID, ipconfig/ifconfig, tracert, ping, nslookup, netstat, ping6, traceroute6, iproute2 `ip addr`/`ss`, firewall).
4. Operating System and Application Issues — Windows (ecrãs, BitLocker, updates, cache, Task Manager, OneDrive, arranque/Safe Mode, energia, acessibilidade); macOS (permissões, discos externos, AirDrop, Activity Monitor, iCloud/Time Machine); mobile (iOS/Android, carregamento, email, MDM); virtualização/cloud (AWS, Azure, GCP, VMs, hypervisors, modelos cloud); aplicações (loja aprovada, fontes não fidedignas).
5. Common Threats and Preventions — phishing, malware, spam, acessos não autorizados, spoofing; scan de malware; passwords; engenharia social contra o help desk; dados confidenciais/proprietários/PII.
6. Job Tools — acesso remoto (RDP, Remote Assistance, Webex, TeamViewer, VNC…); pesquisa com IA (limites, ética, privacidade, preditiva vs generativa), motores de busca, fóruns, KB.

## (c) CCST Networking — 100-150
Fonte oficial: https://learningnetwork.cisco.com/s/ccst-networking-exam-topics
Também: https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html ·
Cisco Press (v1.1 = "N/A", sem revisão de blueprint): https://www.ciscopress.com/promotions/new-cisco-certifications-142035
Domínios:
1. Standards and Concepts — 1.1 OSI/TCP-IP, frames/pacotes, endereçamento; 1.2 largura de banda vs throughput, latência, speed test vs iPerf; 1.3 LAN/WAN/MAN/CAN/PAN/WLAN e topologias; 1.4 cloud vs on-prem (público/privado/híbrido, SaaS/PaaS/IaaS, trabalho remoto); 1.5 TCP vs UDP, FTP, SFTP, TFTP, HTTP(S), DHCP, DNS, ICMP, NTP.
2. Addressing and Subnet Formats — 2.1 privado vs público, classes, NAT; 2.2 sub-redes IPv4, notação /, máscara, broadcast; 2.3 IPv6 tipos e prefixos.
3. Endpoints and Media Types — 3.1 cabos e conectores (fibra, cobre, coax, RJ-45, RJ-11); 3.2 Wi-Fi vs celular vs cabo, interferência, 2.4/5/6 GHz, licenciado vs não licenciado; 3.3 endpoints (IoT, PCs, móveis, IP phone, impressora, servidor); 3.4 conectividade em Windows/Linux/macOS/Android/iOS, utilitários, definições Wi-Fi.
4. Infrastructure — 4.1 LEDs de estado; 4.2 diagrama → cablagem, rack, energia; 4.3 portas (consola, série, fibra, Ethernet, SFP, USB, PoE); 4.4 routing básico (gateway, L2 vs L3, local vs remoto); 4.5 switching (tabela MAC, filtragem MAC, VLAN).
5. Diagnosing Problems — 5.1 metodologia, ticketing, documentação, prioridade; 5.2 captura Wireshark e .pcap; 5.3 ping, ipconfig/ifconfig/ip, tracert/traceroute, nslookup, efeito de firewalls; 5.4 RDP/SSH/Telnet, VPN, emuladores de terminal, consola, NMS, Meraki, scripts; 5.5 comandos show (run, cdp neighbors, ip int brief, ip route, version, inventory, switch, mac address-table, interface(s), interface status), níveis de privilégio, ajuda e autocompletar.
6. Security — 6.1 firewalls (portas/protocolos, regras permit/deny); 6.2 CIA, AAA, MFA, cifra, certificados, complexidade de passwords, AD, ameaças (spam, phishing, malware, DoS); 6.3 WPA/WPA2/WPA3, Personal vs Enterprise.

Decisão: o trilho existente `ccst` JÁ é CCST Networking (título "Cisco Certified Support Technician", conteúdos de rede). Não foi duplicado: cada pergunta dentro do blueprint 100-150 recebeu `exam: "ccst-net"` + `domain`, as que saem do âmbito (STP root, VTP, Q-in-Q, 802.11r/w, DFS, CleanAir, DHCP snooping…) ficam no trilho mas sem `exam`, e acrescentaram-se pares novos só nas lacunas (1.2, 1.3, 1.4, 1.5 FTP/SFTP, 3.1 RJ-11/coax, 3.2 celular, 3.3 endpoints, 3.4 Linux/macOS/móvel, 4.1–4.4, 5.1, 5.2 Wireshark, 5.4, 5.5, 6.1–6.3).

## (a) IIoT e redes industriais
Fontes:
- Antigo CCNA Industrial 200-601 IMINS2 (reformado; objetivos oficiais arquivados): https://comptiaonlinetraining.com/2015/11/200-601-imins2-managing-industrial-networks-for-manufacturing-with-cisco-technologies/ e brochura do curso IMINS2: https://www.techlan.it/wp-content/uploads/2018/02/Academy-brochure-CCNA-INDUSTRIAL-IMINS2-2page.pdf
  Domínios: 1 IP Networking (enterprise vs industrial, QoS, resiliência, tipos de switch, multicast, NAT, routing estático, STP/REP/Flex Links/EtherChannel, alarmes); 2 CIP (ligações, producer/consumer, implícita/explícita, CIP Motion/Safety/Sync, DLR, multicast, RPI, PTP 1588); 3 PROFINET (VLAN 0, LLDP, GSD, PROFIsafe, dispositivos/conformance classes, RT/IRT, DHCP/DCP, anéis/MRP, QoS L2, alarmes); 4 Segurança (defesa em profundidade, hardening, segmentação, ACL/firewall/VLAN entre zonas); 5 Wireless industrial; troubleshooting.
- NetAcad Industrial Networking Essentials (17 módulos, IT/OT, protocolos IACS, Packet Tracer): https://www.netacad.com/authoring-resources/courses/ff9e491c-49be-4734-803e-a79e6e83dab1/aa1a518a-2766-4ee5-ae06-0533e065406d/en-US/assets/Industrial%20Networking%20Essentials%20and%20Cisco%20Packet%20Tracer%209.0.0_en-US_1746661669445.pdf · esboço: https://zsl.gliwice.pl/wp-content/uploads/2026/01/industrial-networing-essentials-info.pdf
- NetAcad Introduction to IoT and Digital Transformation / IoT Fundamentals: https://www.classcentral.com/course/cisco-networking-academy-introduction-to-iot-and-digital-transformation-534147 · https://cisco.tu.kielce.pl/uploads/en_iotf_curr_overview_2.0.pdf
- Cisco CVD "Networking and Security in Industrial Automation Environments" (Purdue/ISA-95, IEC 62443 zonas e condutas, IDMZ nível 3.5, REP/HSR/PRP, PTP perfis Default/Power/Telecom/802.1AS, IEC 61850 GOOSE/SV/MMS, Cyber Vision, NetFlow): https://www.cisco.com/c/en/us/td/docs/solutions/Verticals/Industrial_Automation/IA_Horizontal/DG/Industrial-AutomationDG/Industrial-AutomationDG.html
- Cisco/Rockwell CPwE CIP Security (zonas/condutas IEC 62443): https://www.cisco.com/c/en/us/td/docs/solutions/Verticals/CPwE/5-1/CIP_Security/DIG/CPwE_CIPSec_CVD/CPwE_CIPSec_Chap2.html
Modbus TCP/RTU não estava nos objetivos 200-601, mas está nos protocolos IACS da CVD (tabela 4) e do curso INE — foi incluído.
Domínios usados no quiz (`domain`): 1 IT vs OT/IIoT · 2 Purdue/ISA-95/IDMZ · 3 Protocolos (Modbus, EtherNet/IP-CIP, PROFINET, OPC UA, MQTT, IEC 61850, DNP3) · 4 Switching industrial e resiliência (REP, DLR, MRP, PRP/HSR, topologias, IE switches, QoS, multicast/IGMP, NAT L2) · 5 Tempo (PTP/NTP) · 6 Segurança OT — normas e desenho (IEC 62443: zonas/condutas, SL, FR, partes, SIS) · 7 Segurança OT — operação (acesso remoto de fornecedores, visibilidade/Cyber Vision, data diodes, USB, allow-listing, contenção, ameaças como Triton) · 8 Wireless/IoT (LoRaWAN, Zigbee, WirelessHART, 5G, edge/fog).

## (d) Modo Field Support (cenários práticos)
Não há exame Cisco dedicado; alinhado com CCST Networking 3.1/4.1–4.3/5.3 e CCST IT Support 2.1/2.3, mais documentação Cisco de terreno:
- Cisco — Inspection and Cleaning Procedures for Fiber-Optic Connections: https://www.cisco.com/c/en/us/support/docs/optical/synchronous-digital-hierarchy-sdh/51834-cleanfiber2.html
- Cisco — Troubleshoot Power over Ethernet on Catalyst 9000: https://www.cisco.com/c/en/us/support/docs/switches/catalyst-9200-series-switches/215636-troubleshooting-power-over-ethernet-poe.html
- Cisco — Deploying 90W UPOE+ (802.3bt classe 8): https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-9300-series-switches/guide-c07-744813.html
- Cisco — Configuring PoE (Catalyst 9400): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9400/software/release/17-5/configuration_guide/int_hw/b_175_int_and_hw_9400_cg/configuring_poe.html
- Cisco Transceiver Module Group (TMG) Compatibility Matrix: https://tmgmatrix.cisco.com/
Temas (`domain`): 1 Cobre (T568A/B, falhas de cravação, testadores, certificação, blindagem) · 2 Fibra (tipos, conectores, polaridade, OTDR, power meter, orçamento óptico, limpeza) · 3 Patch panel, rotulagem e bastidor · 4 SFP/transceivers e compatibilidade · 5 PoE (classes, orçamento, LLDP) · 6 VLAN/trunk/duplex no terreno · 7 Método e segurança no terreno.

## (e) CCNP Enterprise ENCOR — 350-401 v1.2
Fonte oficial: https://learningnetwork.cisco.com/s/encor-exam-topics
PDF oficial (Cisco Public): https://learningcontent.cisco.com/documents/marketing/exam-topics/350-401-ENCORE-v1.2.pdf
Curso: https://www.cisco.com/site/us/en/learn/training-certifications/training/courses/encor.html · Plano: https://learningnetwork.cisco.com/s/ccnp-enterprise
Exame de 120 min; Specialist – Enterprise Core; core de CCNP Enterprise e CCIE EI. Na v1.2 o wireless saiu do blueprint.
1. Architecture (15%) — 1.1 desenho (2/3 camadas, fabric, cloud; HA: redundância, FHRP, SSO); 1.2 Catalyst SD-WAN (control/data plane, benefícios/limitações); 1.3 SD-Access (control/data plane, interoperação com campus tradicional); 1.4 interpretar QoS.
2. Virtualization (10%) — 2.1 hypervisor tipo 1/2, VM, switching virtual; 2.2 VRF, GRE e IPsec; 2.3 LISP, VXLAN.
3. Infrastructure (30%) — 3.1 L2: trunking 802.1Q estático/dinâmico, EtherChannel estático/dinâmico, RSTP/MST, root guard, BPDU guard; 3.2 L3: EIGRP vs OSPF, OSPFv2/v3 (multiárea, sumarização, filtragem, p2p/broadcast, passive-interface), eBGP direto (best path, vizinhos), PBR; 3.3 IP services: NTP/PTP, NAT/PAT, HSRP/VRRP, multicast (RPF, PIM SM, IGMPv2/v3, SSM, bidir, MSDP).
4. Network Assurance (10%) — 4.1 debugs/conditional debugs, traceroute, ping, SNMP, syslog; 4.2 Flexible NetFlow; 4.3 SPAN/RSPAN/ERSPAN; 4.4 IP SLA; 4.5 Catalyst Center (workflows tradicionais e com IA); 4.6 NETCONF/RESTCONF.
5. Security (20%) — 5.1 linhas, utilizadores locais, AAA; 5.2 ACL, CoPP; 5.3 segurança de REST API; 5.4 threat defense, endpoint security, NGFW, TrustSec, MACsec.
6. Automation and AI (15%) — 6.1 Python; 6.2 JSON; 6.3 YANG; 6.4 APIs de Catalyst Center e SD-WAN Manager; 6.5 códigos de resposta REST e payloads (Catalyst Center, RESTCONF); 6.6 applet EEM; 6.7 orquestração com agente vs sem agente.

Decisão: o trilho `ccnp` existente mistura ENCOR com ENARSI/SPCOR/DC/wireless/produtos. As perguntas que cabem na v1.2 recebem `exam: "encor"` + `domain` (subtópico, ex. "3.2.c"); as restantes (MPLS L3VPN, iBGP/RR, DMVPN/GETVPN, wireless, ACI/UCS/vPC, catálogo de produtos, etc.) ficam no trilho sem `exam`. Pares novos só nas lacunas: 1.1 (2/3 camadas, fabric, cloud, FHRP), 2.1 (hypervisors, VM, vSwitch), 3.1.a/b (DTP, EtherChannel LACP/PAgP), 3.1.c (RSTP, root guard, BPDU guard), 3.2.b (passive-interface, sumarização), 3.3.a–d (NTP/PTP, NAT/PAT, HSRP/VRRP, IGMPv3/SSM/bidir), 4.1 (conditional debug, SNMP, syslog), 4.2–4.4 (configuração), 5.1–5.3, 6.1–6.7.

## Como os novos quizzes entram no banco (v4.1.0)

- `cricket.json` mantém `ccst`, `ccna`, `ccnp` e `cyber` no topo, com o mesmo formato de pergunta. A app 1.2.11 só lê essas quatro chaves (`certKeys`) e ignora chaves desconhecidas, por isso continua a funcionar.
- Trilhos novos no topo do `cricket.json`: `ccstit` (CCST IT Support, `exam: "ccst-it"` + `domain`), `iiot` (`domain` 1–8) e `field` (`domain` 1–7). Nenhuma pergunta nova tem `topic`, porque a app 1.2.11 usa `topic` para os chips de tema.
- Quizzes filtrados no catálogo (`data/quiz-catalog.json`, mesmo formato dos quizzes cyber): `ccst-net` (parent `ccst`, `filter: {exam: "ccst-net"}`) e `encor` (parent `ccnp`, `filter: {exam: "encor"}`). As perguntas existentes que cabem no blueprint receberam `exam` + `domain`; as que ficam fora do âmbito continuam no trilho, sem `exam`.
- A app 1.3 (que lê o catálogo e usa `bankTrackKeys`) mostra os trilhos extra que vierem com perguntas. Para ficarem com ícone e cor próprios, falta mapear `iiot`/`ccstit`/`field` em `cert_card.dart`, `theme.dart` e `l10n.dart`, ou ler `labelPt`/`labelEn` dos `tracks` do catálogo.
