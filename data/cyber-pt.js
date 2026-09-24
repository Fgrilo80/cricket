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
    "difficulty": "Fácil"
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
    "difficulty": "Fácil"
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
    "difficulty": "Médio"
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
    "difficulty": "Fácil"
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
    "difficulty": "Médio"
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
    "difficulty": "Fácil"
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
    "difficulty": "Médio"
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
    "difficulty": "Médio"
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
    "difficulty": "Médio"
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
    "difficulty": "Fácil"
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
    "difficulty": "Fácil"
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
    "difficulty": "Médio"
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
    "difficulty": "Easy"
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
    "difficulty": "Medium"
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
    "difficulty": "Easy"
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
    "difficulty": "Médio"
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
    "difficulty": "Médio"
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
    "difficulty": "Médio"
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
    "difficulty": "Fácil"
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
    "difficulty": "Médio"
  }
];
