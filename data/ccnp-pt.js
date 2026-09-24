window.QUIZ_BANK = [
  {
    "question": "Qual é a principal diferença entre OSPFv2 e OSPFv3?",
    "options": [
      "OSPFv3 suporta apenas IPv4 e forma adjacências com endereços globais",
      "OSPFv3 é projetado para IPv6 e usa endereços link-local para adjacências",
      "Não há diferença: OSPFv2 e OSPFv3 usam o mesmo formato de pacote",
      "OSPFv3 é mais lento porque inunda LSAs só em multicast IPv4"
    ],
    "correct": 1,
    "explanation": "OSPFv3 foi redesenhado para IPv6, usa endereços link-local para formar adjacências e suporta múltiplos endereços por interface.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'BGP route reflector' e qual sua função?",
    "options": [
      "Dispositivo que reflete rotas BGP para reduzir sessões full-mesh",
      "Firewall que inspeciona sessões BGP e bloqueia o full-mesh",
      "Protocolo de backup que espelha a tabela BGP após a falha",
      "Servidor DNS que resolve next hops BGP em nomes de host"
    ],
    "correct": 0,
    "explanation": "Route Reflector permite que um router reflita rotas BGP aprendidas de um cliente para outros clientes, reduzindo o número de sessões IBGP necessárias.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'EIGRP named mode'?",
    "options": [
      "Modo legado de configuração do EIGRP, anterior ao modo clássico por número de AS",
      "Modo moderno que permite configuração hierárquica e named EIGRP para múltiplas instâncias",
      "Tipo de ACL nomeada que filtra as atualizações EIGRP por instância e métrica",
      "Método de NAT que traduz os endereços entre instâncias EIGRP nomeadas distintas"
    ],
    "correct": 1,
    "explanation": "EIGRP named mode permite configuração mais organizada, suporte a múltiplas instâncias e recursos avançados como wide metrics.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'SD-WAN' e como difere de WAN tradicional?",
    "options": [
      "A mesma tecnologia que o MPLS, usando os mesmos LSPs de transporte estáticos e nenhum overlay sobre a internet pública ou LTE",
      "Abordagem baseada em software para gerenciamento de WAN com overlay inteligente, zero-touch provisioning e otimização de tráfego",
      "Tipo de switch de campus que só comuta frames WAN locais, sem overlay, sem zero-touch e sem otimização",
      "Protocolo de encaminhamento que escolhe um único caminho MPLS estático entre as filiais e ignora os outros underlays"
    ],
    "correct": 1,
    "explanation": "SD-WAN usa overlay inteligente sobre qualquer underlay (MPLS, internet, LTE), com gerenciamento centralizado e políticas baseadas em aplicação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco DNA Center'?",
    "options": [
      "Gerenciamento tradicional de dispositivos via CLI, sem intenção nem analytics",
      "Plataforma de automação e gerenciamento de rede baseada em intenção com analytics e assurance",
      "Tipo de router de borda que encaminha o tráfego campus com políticas locais",
      "Servidor DHCP que entrega endereços IPv4 e opções aos clientes da rede do campus"
    ],
    "correct": 1,
    "explanation": "DNA Center fornece automação baseada em intenção, descoberta automática, políticas e analytics para redes enterprise.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'PIM-SM' e 'PIM-DM'?",
    "options": [
      "PIM-SM é o dense mode e inunda a rede; PIM-DM é o sparse mode e usa um RP",
      "PIM-SM usa rendezvous point e é eficiente para grupos esparsos, PIM-DM inunda e poda",
      "Não há diferença: ambos usam o mesmo RP e o mesmo ciclo flood-and-prune",
      "PIM-DM é mais seguro porque autentica os joins com MD5 antes de inundar"
    ],
    "correct": 1,
    "explanation": "PIM-SM (Sparse Mode) usa RP e é eficiente para poucos receptores. PIM-DM (Dense Mode) inunda a rede e poda branches sem receptores.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'EVPN' (Ethernet VPN) em ambientes VXLAN?",
    "options": [
      "Tipo de VLAN estendida que encapsula os frames Ethernet no switch sem usar BGP",
      "Tecnologia de controle plano para VXLAN que usa BGP para distribuir informações de MAC/IP",
      "Protocolo de encaminhamento de dados que substitui o BGP dentro do fabric VXLAN",
      "Tipo de switch leaf que aprende os endereços MAC só por flood-and-learn no underlay"
    ],
    "correct": 1,
    "explanation": "EVPN usa BGP como control plane para VXLAN, permitindo distribuição eficiente de MACs, IPs e informações de VTEP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'NetFlow' e 'Flexible NetFlow'?",
    "options": [
      "Protocolo de encaminhamento que escolhe rotas a partir dos fluxos exportados",
      "Tecnologia de monitoramento de fluxo de tráfego para análise, billing e segurança",
      "Tipo de ACL que filtra pacotes segundo o cache de fluxos do roteador",
      "Método de backup que copia o cache de fluxos para restaurar o encaminhamento"
    ],
    "correct": 1,
    "explanation": "NetFlow coleta dados de fluxo para análise de tráfego, detecção de anomalias e planejamento de rede.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco TrustSec' e 'SGT'?",
    "options": [
      "Protocolo de criptografia que cifra frames com MACsec e não classifica o tráfego por SGT",
      "Arquitetura de segurança baseada em tags (Security Group Tags) para controle de acesso baseado em identidade",
      "Tipo de firewall de perímetro que filtra somente por endereço IP e ignora as tags de grupo",
      "Método de NAT que traduz endereços e reescreve os SGTs entre zonas de segurança distintas"
    ],
    "correct": 1,
    "explanation": "TrustSec usa SGTs (Security Group Tags) para classificar tráfego e aplicar políticas de acesso baseadas em identidade, independentemente de IP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'IPsec' em VPNs?",
    "options": [
      "Criptografar o tráfego na camada de aplicação, como o TLS protege as sessões",
      "Fornecer segurança em nível de rede (confidencialidade, integridade, autenticação) para VPNs",
      "Tipo de encaminhamento que escolhe o túnel da VPN sem cifrar e sem autenticar",
      "Protocolo de backup que comuta o túnel da VPN quando o enlace principal cai"
    ],
    "correct": 1,
    "explanation": "IPsec opera na camada de rede, fornecendo criptografia, autenticação e integridade para túneis VPN.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'AnyConnect' da Cisco?",
    "options": [
      "Protocolo de encaminhamento OSPF que anuncia prefixos",
      "Cliente VPN remoto seguro com suporte a SSL/TLS e IPsec",
      "Modelo de switch que comuta quadros pelo MAC aprendido",
      "Servidor DHCP que atribui IPv4 e opções aos clientes"
    ],
    "correct": 1,
    "explanation": "Cisco AnyConnect é o cliente VPN moderno que suporta SSL VPN e IPsec com recursos avançados de mobilidade.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Wireless LAN Controller (WLC)'?",
    "options": [
      "Router wireless doméstico que faz NAT dos clientes Wi-Fi da LAN para um link WAN",
      "Dispositivo centralizado que gerência múltiplos Access Points, roaming, segurança e RF",
      "Switch de acesso que aprende endereços MAC e encaminha quadros Ethernet na VLAN",
      "Firewall com estado que inspeciona sessões TCP e descarta o tráfego conforme a ACL"
    ],
    "correct": 1,
    "explanation": "WLC centraliza o gerenciamento de APs, permite roaming rápido, políticas de segurança e otimização de RF.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'CAPWAP'?",
    "options": [
      "Protocolo de encaminhamento OSPF que inunda LSAs e calcula o caminho mais curto",
      "Protocolo usado por WLC para controlar e gerenciar Access Points (substitui LWAPP)",
      "Tipo de VLAN que isola domínios de broadcast num trunk entre switches de acesso",
      "Método de NAT que traduz endereços IPv4 privados para um endereço público"
    ],
    "correct": 1,
    "explanation": "CAPWAP (Control and Provisioning of Wireless Access Points) é o protocolo padrão para comunicação entre WLC e APs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco ISE' (Identity Services Engine)?",
    "options": [
      "Servidor DHCP que concede endereços IPv4, máscara e gateway aos clientes da LAN local",
      "Plataforma centralizada de controle de acesso baseado em identidade, 802.1X, profiling e políticas",
      "Tipo de router de borda que encaminha pacotes IP entre a LAN e a WAN pela tabela de rotas",
      "Firewall com estado que inspeciona sessões e bloqueia pacotes por assinatura de ataque"
    ],
    "correct": 1,
    "explanation": "ISE fornece NAC (Network Access Control), 802.1X, guest access, profiling de dispositivos e políticas dinâmicas.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'SD-Access' da Cisco?",
    "options": [
      "Acesso tradicional que fixa uma VLAN por usuário na porta do switch de acesso, sem fabric nem overlay",
      "Arquitetura de rede definida por software com fabric overlay, underlay e políticas baseadas em identidade",
      "Modelo de switch de campus que só comuta quadros em hardware, sem overlay nem política de identidade",
      "Protocolo de backup que copia a running-config para um servidor TFTP num horário previamente agendado"
    ],
    "correct": 1,
    "explanation": "SD-Access cria uma fabric de rede com overlay VXLAN/EVPN, underlay automatizado e políticas baseadas em SGT.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Ansible' na automação de rede Cisco?",
    "options": [
      "Linguagem de programação compilada que o equipamento executa localmente como um agente residente",
      "Ferramenta de automação agentless que usa playbooks YAML para configurar dispositivos via SSH/NETCONF",
      "Modelo de switch de acesso que aprende endereços MAC e comuta quadros só dentro da VLAN",
      "Protocolo de VPN IPsec que cifra um túnel entre dois sites e autentica os pares com PSK"
    ],
    "correct": 1,
    "explanation": "Ansible é uma ferramenta open-source agentless que usa playbooks para automatizar configuração de rede de forma idempotente.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'MPLS L3 VPN'?",
    "options": [
      "VPN ponto a ponto com um único túnel IPsec entre exatamente dois sites e sem compartilhar o core",
      "Tecnologia que permite múltiplos clientes compartilharem infraestrutura MPLS com isolamento de rotas via VRF",
      "Modelo de switch de campus que aprende endereços MAC e comuta quadros Ethernet apenas dentro da VLAN",
      "Protocolo de backup que envia a running-config para um servidor TFTP num horário previamente agendado"
    ],
    "correct": 1,
    "explanation": "MPLS L3 VPN usa VRFs no PE para isolar rotas de diferentes clientes enquanto compartilham a infraestrutura MPLS.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Umbrella'?",
    "options": [
      "Firewall local na LAN que inspeciona cada pacote em hardware antes de encaminhar",
      "Serviço de segurança na nuvem que bloqueia domínios maliciosos, C2 e phishing via DNS",
      "Tipo de router de borda que encaminha pacotes entre LAN e WAN pela tabela de rotas",
      "Protocolo de backup que copia a running-config do equipamento para um servidor TFTP"
    ],
    "correct": 1,
    "explanation": "Umbrella é um serviço DNS security na nuvem que bloqueia ameaças antes que cheguem à rede.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Stealthwatch' (agora Secure Network Analytics)?",
    "options": [
      "Antivírus de endpoint que varre arquivos no host e coloca o malware em quarentena por assinatura",
      "Solução de Network Detection and Response (NDR) que usa machine learning para detectar ameaças e anomalias",
      "Modelo de switch de acesso que aprende endereços MAC e comuta quadros Ethernet apenas dentro da VLAN",
      "Servidor DHCP que concede endereços IPv4, máscara e gateway aos clientes da sub-rede local"
    ],
    "correct": 1,
    "explanation": "Stealthwatch analisa fluxo de rede para detectar comportamentos anormais e ameaças avançadas.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Secure Firewall' (antigo Firepower)?",
    "options": [
      "Router simples que só encaminha pacotes pelo IP de destino, sem inspeção de conteúdo nem IPS",
      "Next-Generation Firewall (NGFW) com IPS, URL filtering, malware protection e integração com ISE",
      "Modelo de switch de acesso que aprende endereços MAC e comuta quadros apenas dentro da VLAN",
      "Protocolo de backup que copia a running-config para um servidor TFTP num horário agendado"
    ],
    "correct": 1,
    "explanation": "Secure Firewall é um NGFW com inspeção profunda, IPS, controle de aplicações e integração com outras soluções de segurança Cisco.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Intent-Based Networking'?",
    "options": [
      "Rede tradicional configurada à mão em cada dispositivo, sem declarar intenção de negócio",
      "Abordagem onde você define o 'o que' (intenção) e a rede automaticamente configura o 'como'",
      "Tipo de switch de campus que apenas comuta quadros na camada 2, sem políticas de intenção",
      "Protocolo de encaminhamento que escolhe o próximo salto por métricas de custo e caminho"
    ],
    "correct": 1,
    "explanation": "Intent-Based Networking permite que administradores declarem intenções de negócio e a rede traduza automaticamente em políticas e configurações.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco DNA Assurance'?",
    "options": [
      "Backup de configuração dos equipamentos, guardado para restauração após uma falha",
      "Analytics e troubleshooting proativo com machine learning e telemetria em tempo real",
      "Tipo de router de borda que só encaminha pacotes entre a WAN e a LAN local",
      "Servidor DNS que traduz nomes de host em endereços IP para os clientes da rede"
    ],
    "correct": 1,
    "explanation": "DNA Assurance usa telemetria, ML e analytics para identificar problemas antes que afetem usuários e sugerir correções.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Zero Trust Security' na arquitetura Cisco?",
    "options": [
      "Confiar em todos os dispositivos internos apenas porque já estão na rede da empresa",
      "Nunca confiar, sempre verificar - microsegmentação, identidade contínua e menor privilégio",
      "Tipo de firewall de perímetro que filtra portas apenas na borda externa da rede",
      "Método de backup que copia configurações e imagens de IOS para um servidor remoto"
    ],
    "correct": 1,
    "explanation": "Zero Trust assume que nada é confiável por padrão e aplica verificação contínua, microsegmentação e políticas de menor privilégio.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'underlay' e 'overlay' em SD-WAN/SD-Access?",
    "options": [
      "Underlay é o overlay físico: a mesma rede virtual apenas instalada em hardware de campus e filial",
      "Underlay é a infraestrutura física (MPLS, internet), overlay é a rede virtual (VXLAN, DMVPN) construída sobre ela",
      "Não há diferença: underlay e overlay são o mesmo plano, com o mesmo endereçamento e encaminhamento",
      "Overlay é mais lento por definição em qualquer transporte, inclusive com comutação em taxa de linha"
    ],
    "correct": 1,
    "explanation": "Underlay = rede física subjacente. Overlay = rede virtual lógica construída sobre o underlay para abstração e serviços.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco vManage' em SD-WAN?",
    "options": [
      "Router físico de borda que encaminha o tráfego de dados das filiais na fabric SD-WAN",
      "Controlador centralizado de gerenciamento, políticas e orquestração de toda a solução SD-WAN",
      "Tipo de switch de campus que comuta o tráfego LAN das filiais dentro da fabric SD-WAN",
      "Servidor DHCP que entrega endereços IP, máscara e gateway aos clientes das filiais"
    ],
    "correct": 1,
    "explanation": "vManage é o painel centralizado para gerenciamento, configuração, políticas e monitoramento de toda a fabric SD-WAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'AppQoE' em SD-WAN?",
    "options": [
      "Firewall de perímetro que inspeciona sessões e bloqueia tráfego segundo zonas e políticas de acesso",
      "Otimização de aplicação com reconhecimento de aplicação, QoS inteligente e correção de perda de pacotes",
      "Tipo de router de filial que apenas encaminha pacotes entre a LAN local e o circuito WAN",
      "Protocolo de backup que replica a configuração do edge para um repositório remoto agendado"
    ],
    "correct": 1,
    "explanation": "AppQoE fornece otimização de performance de aplicações com reconhecimento de aplicação e técnicas de correção.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Umbrella SIG'?",
    "options": [
      "Firewall local na borda da LAN que só filtra tráfego, sem serviços de nuvem",
      "Secure Internet Gateway na nuvem que combina DNS security, firewall, CASB e DLP",
      "Tipo de switch de acesso que só comuta quadros Ethernet no campus local",
      "Método de backup que replica políticas e logs para um servidor interno"
    ],
    "correct": 1,
    "explanation": "Umbrella SIG é um gateway de internet seguro na nuvem que protege usuários remotos e locais.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Access'?",
    "options": [
      "VPN tradicional de acesso remoto, com concentrador local e túneis IPsec estáticos",
      "Solução SASE (Secure Access Service Edge) que combina networking e segurança na nuvem",
      "Tipo de router de borda que só encaminha pacotes entre a LAN e o circuito WAN",
      "Servidor DNS interno que resolve nomes de host para os endereços IP da empresa"
    ],
    "correct": 1,
    "explanation": "Secure Access é a solução SASE da Cisco que fornece acesso seguro a qualquer aplicação de qualquer lugar.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco XDR' (Extended Detection and Response)?",
    "options": [
      "Antivírus tradicional que só varre arquivos locais no endpoint em busca de assinaturas de malware já conhecidas",
      "Plataforma que correlaciona telemetria de múltiplas fontes (endpoint, rede, cloud, email) para detecção avançada de ameaças",
      "Tipo de firewall de perímetro que bloqueia portas e protocolos só na borda externa da rede corporativa",
      "Método de backup que copia logs de segurança e imagens de disco para um repositório remoto já agendado"
    ],
    "correct": 1,
    "explanation": "XDR correlaciona dados de múltiplas fontes para detecção e resposta a ameaças avançadas com automação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco Talos'?",
    "options": [
      "Servidor DHCP que distribui endereços IP, máscara e gateway aos clientes locais",
      "Inteligência de ameaças global da Cisco que alimenta todas as soluções de segurança",
      "Tipo de switch de campus que comuta quadros Ethernet apenas na camada de acesso",
      "Protocolo de encaminhamento que calcula rotas e o próximo salto entre roteadores"
    ],
    "correct": 1,
    "explanation": "Talos é a equipe de inteligência de ameaças da Cisco que fornece dados em tempo real para todas as soluções de segurança Cisco.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Duo'?",
    "options": [
      "Protocolo de encaminhamento que troca prefixos com vizinhos OSPF e calcula a árvore SPF",
      "Solução de autenticação multifator (MFA) e acesso adaptativo com verificação de dispositivo",
      "Família de switch de acesso que comuta frames Ethernet por VLAN usando spanning tree",
      "Firewall de perímetro que inspeciona sessões e aplica uma política de filtragem de tráfego"
    ],
    "correct": 1,
    "explanation": "Duo fornece MFA, verificação de saúde do dispositivo e acesso adaptativo para proteger logins.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Endpoint' (antigo AMP for Endpoints)?",
    "options": [
      "Antivírus tradicional só com assinaturas locais, sem EDR nem correlação XDR",
      "Proteção avançada de endpoint com detecção de malware, EDR e integração com XDR",
      "Família de router de borda que encaminha pacotes IP e anuncia rotas pelo BGP",
      "Servidor DNS autoritativo que resolve nomes de host e publica zonas internas"
    ],
    "correct": 1,
    "explanation": "Secure Endpoint oferece proteção em tempo real, detecção de ameaças e resposta em endpoints.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Secure Email' (antigo ESA)?",
    "options": [
      "Cliente de e-mail do usuário que redige, envia e lê mensagens no endpoint",
      "Gateway de e-mail seguro com proteção contra spam, phishing, malware e DLP",
      "Família de switch de acesso que comuta frames Ethernet por VLAN e STP",
      "Protocolo de backup que copia arquivos e agendas de jobs entre servidores"
    ],
    "correct": 1,
    "explanation": "Secure Email é o gateway de e-mail seguro da Cisco com proteção avançada contra ameaças de e-mail.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Web Appliance' (antigo WSA)?",
    "options": [
      "Proxy simples que só encaminha HTTP, sem filtragem de URL nem scanning de malware",
      "Secure Web Gateway com URL filtering, malware scanning, DLP e controle de aplicações",
      "Família de router WAN que encaminha pacotes IP e estabelece sessões de BGP",
      "Firewall de perímetro que inspeciona sessões L3/L4 e aplica listas de acesso"
    ],
    "correct": 1,
    "explanation": "Secure Web Appliance protege o tráfego web com filtragem de URL, antimalware e políticas de uso.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Meraki'?",
    "options": [
      "Solução Cisco tradicional gerenciada por CLI local, sem dashboard unificado na nuvem",
      "Plataforma de rede gerenciada na nuvem com dashboard unificado, zero-touch e analytics",
      "Tipo de firewall de perímetro que só inspeciona sessões e filtra pacotes IP",
      "Protocolo de encaminhamento que anuncia prefixos aos vizinhos e escolhe a rota"
    ],
    "correct": 1,
    "explanation": "Meraki oferece switches, APs, firewalls e câmeras gerenciados 100% na nuvem com dashboard simples e poderoso.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Intersight'?",
    "options": [
      "Plataforma de gerenciamento de rede campus que só aplica VLAN, STP e políticas de QoS",
      "Plataforma de gerenciamento de infraestrutura híbrida (data center, edge, cloud) com automação",
      "Família de switch de data center que só comuta frames Ethernet num fabric leaf-spine",
      "Servidor DHCP que concede endereços IPv4, opções e reservas aos clientes da LAN"
    ],
    "correct": 1,
    "explanation": "Intersight fornece gerenciamento unificado, automação e insights para infraestrutura Cisco UCS, HyperFlex e mais.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco ACI' (Application Centric Infrastructure)?",
    "options": [
      "Rede tradicional com VLANs manuais e spanning tree, sem fabric SDN nem contratos de aplicação",
      "Solução SDN para data center com fabric leaf-spine, políticas baseadas em aplicação e automação",
      "Família de switch de acesso de campus que só comuta frames Ethernet por VLAN e STP",
      "Protocolo de backup que replica volumes e agendas de jobs entre servidores do data center"
    ],
    "correct": 1,
    "explanation": "ACI é a solução SDN da Cisco para data centers com fabric VXLAN, APIC controller e políticas baseadas em aplicação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco Nexus Dashboard'?",
    "options": [
      "Switch simples de camada 2 que só encaminha frames Ethernet dentro de uma única VLAN",
      "Plataforma de gerenciamento e automação para data center com Nexus Dashboard e services",
      "Família de router de borda que encaminha pacotes IP e anuncia rotas BGP externas",
      "Firewall de perímetro que inspeciona sessões e aplica política de filtragem do tráfego"
    ],
    "correct": 1,
    "explanation": "Nexus Dashboard fornece gerenciamento unificado, automação e serviços para fabrics ACI e NX-OS.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco HyperFlex'?",
    "options": [
      "Servidor tradicional isolado, com discos locais e sem storage distribuído entre os nós",
      "Solução hyperconverged infrastructure (HCI) com storage, compute e networking integrados",
      "Família de switch de acesso que comuta frames Ethernet por VLAN com spanning tree",
      "Protocolo de encaminhamento que troca prefixos com vizinhos e calcula o melhor caminho"
    ],
    "correct": 1,
    "explanation": "HyperFlex é a solução HCI da Cisco com storage distribuído, alta disponibilidade e gerenciamento simplificado.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco UCS' (Unified Computing System)?",
    "options": [
      "Servidor standalone isolado, com configuração local e sem service profile stateless",
      "Plataforma de servidores blade/rack com gerenciamento unificado, stateless computing e automação",
      "Família de switch de data center que só comuta frames Ethernet num fabric leaf-spine",
      "Firewall de perímetro que inspeciona sessões L3/L4 e aplica listas de controle de acesso"
    ],
    "correct": 1,
    "explanation": "UCS integra compute, networking e storage com gerenciamento centralizado e profiles de serviço stateless.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Intersight Workload Optimizer'?",
    "options": [
      "Ferramenta de backup que copia VMs entre nuvens híbridas sem otimizar placement ou custo",
      "Solução de otimização de workload com AI para placement, scaling e custo em ambientes híbridos",
      "Tipo de switch de data center que classifica tráfego de workload por DSCP e VLAN no fabric",
      "Protocolo de encaminhamento dos prefixos de workload entre os sites de uma nuvem híbrida"
    ],
    "correct": 1,
    "explanation": "Intersight Workload Optimizer usa AI para otimizar placement, scaling e custos de workloads em nuvens híbridas.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco AppDynamics'?",
    "options": [
      "Monitoramento de rede via SNMP e NetFlow para mapear a topologia física do campus",
      "Plataforma de observabilidade de aplicações com APM, business transactions e analytics",
      "Tipo de switch Catalyst que aplica QoS nas portas de acesso da camada de distribuição",
      "Firewall que inspeciona sessões e bloqueia aplicações conforme a zona de segurança"
    ],
    "correct": 1,
    "explanation": "AppDynamics fornece visibilidade completa de performance de aplicações, desde código até experiência do usuário.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Full-Stack Observability'?",
    "options": [
      "Monitoramento tradicional em silos, com ferramentas separadas de rede e aplicação sem correlação",
      "Abordagem unificada que correlaciona dados de rede, aplicações, infraestrutura e experiência do usuário",
      "Tipo de router de borda que anuncia prefixos BGP e aplica políticas de rota entre o campus e a WAN",
      "Método de backup que agenda cópias de configuração e de imagens de VM para um repositório central"
    ],
    "correct": 1,
    "explanation": "Full-Stack Observability correlaciona telemetria de toda a stack para troubleshooting e otimização proativa.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco ThousandEyes' em SD-WAN?",
    "options": [
      "Firewall de borda que filtra sessões SD-WAN por zona e bloqueia aplicações",
      "Monitoramento de internet e performance de aplicações para otimizar decisões de SD-WAN",
      "Tipo de switch de acesso que termina as VLANs do site e entrega o tráfego ao edge",
      "Servidor DNS autoritativo que resolve nomes internos do site antes do túnel SD-WAN"
    ],
    "correct": 1,
    "explanation": "ThousandEyes fornece insights de performance de internet e aplicações para que o SD-WAN tome decisões inteligentes.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF LSA tipo 3 é gerado por:",
    "options": [
      "Todos os routers internos",
      "ABR, como summary inter-área",
      "Somente pelo ASBR local",
      "O DR Ethernet do segmento"
    ],
    "correct": 1,
    "explanation": "LSAs OSPFv2 Type 3 (Network Summary) são gerados pelos ABR para anunciar prefixos inter-área. Não são LSA Type 1 de router.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF LSA tipo 5 representa:",
    "options": [
      "Apenas os links intra-área OSPF",
      "Rotas externas injetadas no OSPF",
      "Summary Type 3 dentro da NSSA",
      "Apenas prefixos IPv6 do OSPFv3"
    ],
    "correct": 1,
    "explanation": "LSAs Type 5 AS-External são originados por ASBRs para rotas redistribuídas no OSPF; NSSA usa Type 7 traduzido para Type 5 pelo ABR.",
    "difficulty": "Médio"
  },
  {
    "question": "Uma área OSPF stub bloqueia que LSAs?",
    "options": [
      "Os LSAs de tipo 1 e 2 internos da área",
      "Tipo 5 (externas); o ABR injeta default",
      "Todos os LSAs tipo 3 de summary do ABR",
      "Pacotes Hello trocados entre vizinhos"
    ],
    "correct": 1,
    "explanation": "Uma área stub bloqueia externas Type 5; o ABR injeta uma default (0.0.0.0) para os routers stub alcançarem o exterior.",
    "difficulty": "Difícil"
  },
  {
    "question": "EIGRP successor é:",
    "options": [
      "Rota de backup na topology table (feasible successor)",
      "A rota primária na tabela de encaminhamento (FD mínima)",
      "O vizinho que anuncia a pior métrica composta do EIGRP",
      "Um LSA tipo 1 de router, como no OSPF, e não uma rota"
    ],
    "correct": 1,
    "explanation": "No EIGRP, o successor é o melhor caminho (menor feasible distance) instalado na RIB; feasible successors são backups sem loop.",
    "difficulty": "Médio"
  },
  {
    "question": "BGP path selection: depois de Weight e Local Pref, o próximo critério comum é:",
    "options": [
      "O menor valor MED",
      "AS-Path mais curto",
      "Rota mais antiga",
      "O menor Router-ID"
    ],
    "correct": 1,
    "explanation": "A ordem clássica BGP best-path começa pelo Weight mais alto, depois Local Preference, originadas localmente, AS_PATH mais curto, etc.",
    "difficulty": "Difícil"
  },
  {
    "question": "BGP Weight é:",
    "options": [
      "Atributo transitivo da IETF anunciado entre ASes e herdado pelos vizinhos",
      "Cisco-proprietary, local ao router, maior e melhor (default 32768 originadas)",
      "Igual ao MED: menor valor é melhor e segue anunciado para os peers eBGP",
      "Enviado aos peers eBGP no UPDATE para influenciar a entrada de tráfego no AS"
    ],
    "correct": 1,
    "explanation": "O Weight BGP é específico Cisco, local ao router e nunca anunciado; um Weight mais alto ganha primeiro na seleção de caminho.",
    "difficulty": "Difícil"
  },
  {
    "question": "Local Preference no iBGP: valor maior significa:",
    "options": [
      "Um caminho pior de saída",
      "Preferido para sair do AS",
      "Válido só em peers eBGP",
      "Substitui o AS-Path iBGP"
    ],
    "correct": 1,
    "explanation": "Local Preference mais alta influencia o caminho preferido para sair do AS local; é anunciada no iBGP, ao contrário do Weight.",
    "difficulty": "Médio"
  },
  {
    "question": "eBGP TTL de sessão por omissão é:",
    "options": [
      "255",
      "1",
      "64",
      "15"
    ],
    "correct": 1,
    "explanation": "Peers eBGP assumem TTL 1 (diretamente ligados). ebgp-multihop (ou TTL Security) é necessário para sessões eBGP multihop.",
    "difficulty": "Médio"
  },
  {
    "question": "iBGP não reanuncia prefixos iBGP a outros iBGP. A solução clássica é:",
    "options": [
      "AS-Path prepend para reanunciar as rotas iBGP",
      "Full mesh iBGP ou route reflectors / confederations",
      "Uma rota default OSPF entre os peers iBGP do AS",
      "LSA tipo 5 do OSPF a transportar prefixos iBGP"
    ],
    "correct": 1,
    "explanation": "iBGP não reanuncia a outros peers iBGP rotas aprendidas via iBGP (split horizon); por isso precisa de full mesh ou route reflectors/confederações.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um route reflector cliente recebe:",
    "options": [
      "Só rotas eBGP aprendidas de peers externos ao AS",
      "Rotas refletidas do RR, sem full mesh entre clientes",
      "Apenas os LSAs OSPF tipo 3 de resumo inter-área",
      "O MED invertido pelo route reflector nas rotas iBGP"
    ],
    "correct": 1,
    "explanation": "Um route reflector reflete rotas iBGP entre clientes para o AS evitar full mesh iBGP, mantendo atributos de prevenção de loops.",
    "difficulty": "Difícil"
  },
  {
    "question": "VRF-Lite serve para:",
    "options": [
      "Cifrar o plano de controlo das sessões de routing entre PEs",
      "Separar tabelas de encaminhamento no mesmo PE/CE sem MPLS obrigatório",
      "Substituir o STP no cálculo da topologia ativa da camada 2",
      "Isolar só o encaminhamento IPv6, sem manter tabela IPv4 no CE"
    ],
    "correct": 1,
    "explanation": "VRFs separam tabelas de encaminhamento por tenant; VRF-Lite faz isso sem exigir MP-BGP/MPLS no núcleo.",
    "difficulty": "Difícil"
  },
  {
    "question": "MPLS label stacking: a etiqueta do topo é:",
    "options": [
      "A etiqueta de serviço L3VPN que fica no fundo",
      "A que o LSR usa para o next hop (transport/IGP)",
      "O endereço MAC da CE no topo da pilha MPLS",
      "O valor DSCP usado como etiqueta MPLS de topo"
    ],
    "correct": 1,
    "explanation": "Em MPLS VPN, o rótulo de cima é tipicamente de transporte (IGP/LDP/SR) e o de baixo (S=1) é o rótulo de serviço VPN.",
    "difficulty": "Difícil"
  },
  {
    "question": "LDP distribui:",
    "options": [
      "Prefixos BGP aprendidos no AS",
      "Etiquetas MPLS para prefixos IGP",
      "VLANs do domínio de switching",
      "Certificados PKI entre os LSR"
    ],
    "correct": 1,
    "explanation": "O LDP distribui rótulos ligados a FECs (normalmente prefixos IPv4) para os LSR construírem LSPs.",
    "difficulty": "Médio"
  },
  {
    "question": "BFD (Bidirectional Forwarding Detection) serve para:",
    "options": [
      "Substituir o OSPF na adjacência e no cálculo SPF do IGP local",
      "Detetar falhas de forwarding em milissegundos, independente do IGP",
      "Eleger o DR e o BDR em cada segmento OSPF multiacesso da área",
      "Cifrar os túneis GRE com as chaves usadas no plano de dados"
    ],
    "correct": 1,
    "explanation": "O BFD deteta falhas no plano de encaminhamento em subsegundo; OSPF, EIGRP ou BGP usam-no para derrubar vizinhos depressa.",
    "difficulty": "Médio"
  },
  {
    "question": "IP SLA num router Cisco pode:",
    "options": [
      "Compilar a imagem de IOS dentro do próprio router Cisco",
      "Medir latência/jitter/availability e reagir com tracking",
      "Substituir AAA na autenticação dos acessos ao router",
      "Criar VLANs de acesso e atribuir portas no switch"
    ],
    "correct": 1,
    "explanation": "Probes IP SLA medem alcançabilidade/latência; object tracking pode conduzir PBR, prioridade HSRP/VRRP ou resiliência de rotas estáticas.",
    "difficulty": "Médio"
  },
  {
    "question": "PBR (Policy-Based Routing) desvia tráfego com base em:",
    "options": [
      "Apenas o prefixo de destino já instalado na tabela RIB",
      "Route-maps (ACL, DSCP, comprimento) em vez da só destinação",
      "A bridge raiz eleita pelo STP nesse segmento de acesso",
      "Os vizinhos e as capacidades que o LLDP anuncia na porta"
    ],
    "correct": 1,
    "explanation": "Policy-Based Routing (PBR) pode definir ip next-hop (ou interface) com base em matches de route-map em vez de só o lookup da RIB.",
    "difficulty": "Médio"
  },
  {
    "question": "StackWise / StackWise Virtual agrega:",
    "options": [
      "APs wireless num único plano de controlo do site",
      "Switches num só plano de controlo lógico",
      "Sessões BGP agregadas num speaker lógico do AS",
      "VRFs MPLS fundidas numa só tabela de encaminhamento"
    ],
    "correct": 1,
    "explanation": "Um stack de switches opera como um switch lógico com plano de controlo sincronizado (muitas vezes SSO/NSF) e IP de gestão partilhado.",
    "difficulty": "Médio"
  },
  {
    "question": "vPC (Nexus) permite:",
    "options": [
      "Dois switches a parecer um ao STP/LACP sem ser um só supervisor",
      "Substituir o OSPF como protocolo de encaminhamento entre os peers Nexus",
      "Transportar só FCoE, sem Ethernet de dados nem LACP para os hosts",
      "Desligar o BPDU Guard nas portas de acesso e de borda do par vPC"
    ],
    "correct": 0,
    "explanation": "vPC (Nexus) apresenta um EtherChannel multi-chassis aos dispositivos a jusante sem exigir um domínio clássico de stack.",
    "difficulty": "Difícil"
  },
  {
    "question": "SD-Access control plane usa tipicamente:",
    "options": [
      "Apenas o STP, para bloquear loops, sem mapa de EID para RLOC",
      "LISP para mapear identidade (EID) a localização (RLOC)",
      "O RIPv1 classful, a anunciar os identificadores de endpoint da fabric",
      "Somente o VTP versão 3, a propagar VLANs como plano de controlo"
    ],
    "correct": 1,
    "explanation": "A fabric Cisco SD-Access combina tipicamente LISP no controlo, VXLAN no overlay de dados e ISE para política/identidade.",
    "difficulty": "Difícil"
  },
  {
    "question": "ISE no acesso usa 802.1X para:",
    "options": [
      "Cifrar as adjacências OSPF do acesso com autenticação MD5",
      "Autenticar utilizador/dispositivo e aplicar dACL/SGT",
      "Eleger o root do STP segundo o voto do suplicante 802.1X",
      "Traduzir IPv6 para IPv4 com NAT64 na porta de acesso"
    ],
    "correct": 1,
    "explanation": "O Cisco ISE é o motor RADIUS/política para 802.1X, TrustSec e SDA—autoriza utilizadores/dispositivos e entrega política.",
    "difficulty": "Médio"
  },
  {
    "question": "SGT (Scalable Group Tag) no TrustSec é:",
    "options": [
      "Um número de processo ou de área OSPF guardado na LSDB do router",
      "Uma etiqueta de grupo para políticas baseadas em identidade",
      "A VLAN nativa do trunk 802.1Q para o tráfego sem etiqueta",
      "Uma community BGP, standard ou extended, anunciada aos peers"
    ],
    "correct": 1,
    "explanation": "Security Group Tags (SGTs) classificam utilizadores/dispositivos; SGACLs aplicam regras entre grupos independentemente só do IP.",
    "difficulty": "Difícil"
  },
  {
    "question": "NETCONF transporta YANG tipicamente sobre:",
    "options": [
      "Telnet (porta 23)",
      "SSH (porta 830)",
      "HTTP só (porta 80)",
      "SNMP v2 (porta 161)"
    ],
    "correct": 1,
    "explanation": "NETCONF corre tipicamente sobre SSH na TCP 830; RESTCONF usa HTTPS. Ambos gerem configuração/estado modelado em YANG.",
    "difficulty": "Médio"
  },
  {
    "question": "Um modelo YANG descreve:",
    "options": [
      "Só a topologia STP ativa, com root, custos e portas em blocking",
      "Estrutura e constraints dos dados de configuração/estado",
      "Apenas ACLs MAC de camada 2, sem dados de configuração ou estado",
      "O protocolo spanning-tree e a eleição da bridge raiz por BPDUs"
    ],
    "correct": 1,
    "explanation": "YANG é a linguagem de modelação de dados usada por NETCONF/RESTCONF para descrever configuração e estado—não é um transporte.",
    "difficulty": "Médio"
  },
  {
    "question": "DMVPN Phase 3 permite:",
    "options": [
      "Apenas hub-and-spoke permanente, sem atalhos NHRP entre spokes",
      "NHRP redirect/shortcut para spoke-to-spoke direto",
      "Somente IPsec em modo transport, sem túnel GRE multiponto",
      "Exigir OSPFv2 como único protocolo de routing na rede DMVPN"
    ],
    "correct": 1,
    "explanation": "No DMVPN Phase 3, NHRP redirect/shortcut permite aos spokes criar túneis diretos spoke-to-spoke em vez de passar pelo hub.",
    "difficulty": "Difícil"
  },
  {
    "question": "FlexVPN no IOS-XE baseia-se em:",
    "options": [
      "Apenas L2TP, sem IKEv2 nem VTI",
      "IKEv2 (com templates virtuais)",
      "Só IKEv1 agressivo, sem IKEv2",
      "PPTP com MS-CHAPv2, sem IKEv2"
    ],
    "correct": 1,
    "explanation": "FlexVPN é a framework Cisco baseada em IKEv2 que unifica VPN site-to-site, estilos tipo DMVPN e remote-access.",
    "difficulty": "Difícil"
  },
  {
    "question": "CoPP (Control Plane Policing) protege:",
    "options": [
      "O data plane de utilizador, ao policiar o tráfego de trânsito entre portas",
      "O CPU do control plane limitando tráfego a processos (ex. SSH, routing)",
      "Apenas a CAM/TCAM de encaminhamento, sem limitar o CPU do route processor",
      "A alimentação PoE das portas de acesso, cortando a potência em excesso"
    ],
    "correct": 1,
    "explanation": "Control Plane Policing (CoPP) aplica políticas QoS/ACL ao tráfego destinado ao route processor, protegendo protocolos que consomem CPU.",
    "difficulty": "Difícil"
  },
  {
    "question": "uRPF (unicast RPF) mitiga:",
    "options": [
      "DHCP starvation, ao limitar os DISCOVER com MACs falsificados em cada porta de acesso",
      "Spoofing de IP de origem, verificando se a origem seria encaminhável pela interface",
      "Loops de STP, colocando portas redundantes em blocking com base nas BPDUs recebidas",
      "Quedas de sessões BFD, aumentando o intervalo de hello e o multiplicador de deteção"
    ],
    "correct": 1,
    "explanation": "uRPF (strict ou loose) descarta pacotes cuja origem é inconsistente com a RIB/FIB—mitiga origens falsificadas.",
    "difficulty": "Difícil"
  },
  {
    "question": "PIM Sparse Mode usa RP para:",
    "options": [
      "Eleger o Designated Router do OSPF em cada segmento multiacesso",
      "Árvore partilhada inicial (*,G) antes de SPT (S,G)",
      "Traduzir endereços NAT entre a fonte multicast e os recetores",
      "Marcar o DSCP dos pacotes multicast que passam no RP"
    ],
    "correct": 1,
    "explanation": "Em PIM-SM os recetores fazem join via Rendezvous Point primeiro; o tráfego pode depois mudar para a shortest-path tree (SPT) até à fonte.",
    "difficulty": "Difícil"
  },
  {
    "question": "Anycast RP (MSDP) resolve:",
    "options": [
      "Manter um único RP sem redundância e sem partilha de carga multicast",
      "Redundância/load-share de RPs multicast entre domínios ou boxes",
      "Apenas Neighbor Discovery IPv6, sem trocar estado source-active entre RPs",
      "Fazer VTP pruning das VLANs sem recetores multicast nos trunks de acesso"
    ],
    "correct": 1,
    "explanation": "Anycast RP permite a vários RPs partilharem um endereço para redundância; o MSDP troca frequentemente estado source-active entre RPs.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual LSA OSPFv2 descreve os links de um router dentro da área?",
    "options": [
      "Type 5 AS-external",
      "Type 1 Router LSA",
      "Type 4 ASBR-summary",
      "Type 3 Network-summary"
    ],
    "correct": 1,
    "explanation": "Type 1 é gerado por cada router e floodado só na área. Type 2 é do DR, Type 3 do ABR, Type 5 do ASBR, Type 4 aponta para o ASBR.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre uma área OSPF stub e uma NSSA?",
    "options": [
      "Não há diferença prática: stub e NSSA bloqueiam o mesmo conjunto de LSA externas e o ABR não injecta default em nenhuma das duas",
      "Stub bloqueia LSA 5 e o ABR injecta default; NSSA permite LSA 7 (externas da área) que o ABR traduz para LSA 5",
      "A área stub permite BGP nativo entre os routers da área, ao passo que a NSSA bloqueia todas as sessões BGP e qualquer rota externa",
      "A NSSA não tem ABR: as LSA Type 7 ficam confinadas à área e nenhum router de fronteira as traduz para LSA Type 5 no backbone"
    ],
    "correct": 1,
    "explanation": "Totally stubby bloqueia também LSA 3 (excepto default). Escolhe-se NSSA quando há um ASBR (redistribuição) dentro da área de borda.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a ordem inicial do BGP Best Path Cisco após next-hop reachable?",
    "options": [
      "MED mais baixo em primeiro lugar e Weight mais alto apenas a seguir, antes de Local Preference, AS-PATH e origin",
      "Highest Weight; depois highest Local Preference; locally originated; shortest AS-PATH; origin; lowest MED",
      "Escolher sempre o peer eBGP ou iBGP com o endereço IP mais alto, ignorando Weight, Local Preference e AS-PATH",
      "Depois do next-hop só o AS-PATH conta: vence sempre o caminho com menos sistemas autónomos e os restantes atributos são ignorados"
    ],
    "correct": 1,
    "explanation": "Weight (local ao router) é o primeiro desempate Cisco. Local Pref (omissão 100) é o primeiro atributo anunciado em iBGP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual atributo BGP não é anunciado a outros routers?",
    "options": [
      "Local Preference",
      "Weight",
      "AS-PATH",
      "MED"
    ],
    "correct": 1,
    "explanation": "Weight é local à caixa Cisco e nunca sai em UPDATE. Local Pref viaja em iBGP. AS-PATH e MED viajam em eBGP.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa MPLS L3VPN, para que servem RD e RT?",
    "options": [
      "RD e RT são o mesmo valor de community BGP e desempenham exactamente a mesma função de importação no VRF",
      "RD torna o prefixo único no BGP VPNv4; RT (extended community) controla import/export entre VRFs",
      "O RD cifra o payload do cliente no pacote MPLS antes de este atravessar o core do fornecedor de serviço",
      "O RT substitui o IGP do cliente e passa a ser o único protocolo que preenche a tabela de encaminhamento do VRF"
    ],
    "correct": 1,
    "explanation": "O mesmo IPv4 em dois clientes precisa de RDs diferentes. RTs definem a política de import/export. Um VRF pode importar vários RTs (extranet).",
    "difficulty": "Difícil"
  },
  {
    "question": "O que caracteriza VRF-lite relativamente a MPLS VPN?",
    "options": [
      "Exige sempre LDP e uma etiqueta MPLS em cada salto, incluindo nos acessos, para isolar as tabelas de VRF",
      "Segrega tabelas de encaminhamento no mesmo equipamento sem labels MPLS; os links levam um subinterface/VLAN por VRF",
      "Não permite IPs sobrepostos: cada VRF tem de usar prefixos IPv4 diferentes, senão o encaminhamento no equipamento falha",
      "Só funciona com BGP dentro de cada VRF e recusa OSPF, EIGRP, RIPv2 ou rotas estáticas por VRF"
    ],
    "correct": 1,
    "explanation": "VRF-lite é multi-VRF de campus/WAN: vrf definition, ip vrf forwarding na SVI, routing por VRF, sem core MPLS. Overlapping IPs são permitidos.",
    "difficulty": "Médio"
  },
  {
    "question": "Em EIGRP, o que é um Feasible Successor?",
    "options": [
      "A rota que está sempre activa na FIB como caminho principal do router, mesmo sem nunca cumprir a Feasibility Condition do DUAL",
      "Uma rota de backup que passa a Feasibility Condition (AD do anunciante < FD da successor) e pode entrar sem recomputar DUAL",
      "Um vizinho EIGRP que permanece no estado INIT e ainda não trocou updates de topologia nem formou adjacência",
      "Uma rota com distância administrativa 255, que o EIGRP instala na tabela como backup sem consultar o successor"
    ],
    "correct": 1,
    "explanation": "Successor = caminho usado (menor FD). Sem FS, uma falha dispara active query. Variance permite load-balance desigual com FS.",
    "difficulty": "Difícil"
  },
  {
    "question": "Para que serve o comando EIGRP variance?",
    "options": [
      "Altera os K-values da métrica EIGRP (K1 até K5) e obriga os vizinhos a recalcular bandwidth, delay e reliability",
      "Permite load-balancing de custo desigual entre successor e feasible successors cujo FD cabe em FD_min × variance",
      "Desliga o split horizon de EIGRP na interface, voltando a anunciar pela mesma ligação as rotas aprendidas nela",
      "Muda o número do sistema autónomo EIGRP no router e mantém as adjacências só quando o vizinho usa o novo AS"
    ],
    "correct": 1,
    "explanation": "Variance 1 (omissão) = só equal-cost. Variance 2 instala FS com métrica até 2× a do successor. K-values têm de coincidir nos vizinhos.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual vantagem principal do MST (802.1s) face ao Rapid PVST+?",
    "options": [
      "O MST corre sempre uma árvore distinta por VLAN, como o Rapid PVST+, e não agrupa várias VLANs na mesma instância",
      "MST mapeia muitas VLANs para poucos instances, reduzindo BPDUs e CPU em redes com centenas de VLANs",
      "O MST não tem root bridge: nem o IST nem qualquer MSTI elege um bridge raiz dentro da região",
      "O MST só trabalha com hubs partilhados e não forma spanning tree em switches com ligações ponto-a-ponto"
    ],
    "correct": 1,
    "explanation": "Rapid PVST+ = uma instância por VLAN. MST agrupa VLANs em IST/MSTI com região (nome, revision, mapa). O digest tem de coincidir na região.",
    "difficulty": "Médio"
  },
  {
    "question": "O que detecta o UDLD?",
    "options": [
      "Loops de STP em cobre, em todos os casos, mesmo quando o link é bidireccional e ambos os lados recebem tramas",
      "Um link unidireccional (TX de um lado sem RX no outro) que o STP pode não ver e criar forwarding loops",
      "Apenas falhas de Hello OSPF entre vizinhos de routing, sem verificar se o TX de um lado chega ao RX do outro",
      "Erros de CRC só em jumbo frames, deixando de lado links de fibra em que um sentido deixou de receber"
    ],
    "correct": 1,
    "explanation": "UDLD envia frames e espera eco do peer. Modo normal gera syslog; aggressive errdisable. Complementa STP Loop Guard. Típico em fibra.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz Loop Guard no STP?",
    "options": [
      "Faz o mesmo que o BPDU Guard: coloca a porta PortFast em err-disable assim que recebe um BPDU de outro switch na camada de acesso",
      "Impede que uma porta non-designated passe a designated forwarding se os BPDUs pararem, evitando loop por unidireccionalidade",
      "Força PortFast em todas as portas de acesso para saltarem listening e learning e passarem logo a forwarding",
      "Elege o root bridge comparando o Bridge ID e a priority para escolher o switch raiz da spanning tree"
    ],
    "correct": 1,
    "explanation": "Se BPDUs cessam, STP classico assume que o designated desapareceu e a porta pode forwarding. Loop Guard poe loop-inconsistent até os BPDUs regressarem.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a relação entre SSO e NSF num chassis Cisco com dual RP?",
    "options": [
      "NSF grava a running-config no RP standby e o SSO não replica a configuração nem o estado de nenhum protocolo de routing interno",
      "SSO replica o estado do control plane ao RP standby; NSF mantem CEF forwarding durante o switchover com graceful restart",
      "São o mesmo feature de NAT, que traduz os endereços internos para externos durante o switchover do RP",
      "SSO desliga a FIB e interrompe o encaminhamento CEF no data plane até o RP standby concluir o arranque"
    ],
    "correct": 1,
    "explanation": "SSO + NSF/GR permitem failover de supervisor em segundos sem perder adjacências se o peer entender GR. ISSU apoia-se nisto.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é LLQ (Low Latency Queuing) num policy-map de QoS?",
    "options": [
      "WRED em todas as classes do policy-map, a descartar pacotes cedo segundo o DSCP antes de a fila encher",
      "Uma priority queue (normalmente EF/voz) servida primeiro, combinada com CBWFQ nas demais classes",
      "Somente policing da class-default, a limitar a taxa do best-effort sem qualquer fila de prioridade",
      "Um tipo de STP que elege a root bridge e bloqueia portas redundantes para evitar loops na camada 2"
    ],
    "correct": 1,
    "explanation": "priority reserva um policer implicito para não esgotar o link. As outras classes usam bandwidth (CBWFQ). Não se poe bulk na priority.",
    "difficulty": "Médio"
  },
  {
    "question": "O valor DSCP EF 46 em binário de 6 bits é?",
    "options": [
      "001010",
      "101110",
      "111000",
      "000000"
    ],
    "correct": 1,
    "explanation": "EF = 101110 = 46 decimal. CoS 802.1p de voz costuma ser 5, que mapeia para EF na borda.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve WRED (Weighted Random Early Detection)?",
    "options": [
      "Aumentar sempre a janela TCP de todos os fluxos para encher a fila de saída sem qualquer descarte antecipado",
      "Descartar probabilisticamente pacotes antes da fila encher, por precedencia/DSCP, evitando tail-drop sincronizado de fluxos TCP",
      "Cifrar os pacotes dentro da fila de saída, por classe DSCP, para impedir o slow start sincronizado do TCP",
      "Substituir o LLQ, retirando a priority queue de voz EF e servindo todas as classes só com descarte aleatório ponderado por DSCP"
    ],
    "correct": 1,
    "explanation": "Tail drop enche a fila e varios TCP entram em slow start ao mesmo tempo. WRED comeca a descartar cedo nos fluxos menos prioritarios. Não se aplica a voz.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença fundamental entre um túnel GRE puro e GRE over IPsec?",
    "options": [
      "GRE puro cifra o payload com AES-256 no protocolo IP 47 e dá confidencialidade sem ESP, sem IKE e sem qualquer associação IPsec",
      "GRE encapsula qualquer protocolo mas vai em claro; IPsec acrescenta confidencialidade/integridade, normalmente em modo tunnel",
      "IPsec não pode transportar OSPF, nem sobre GRE nem numa VTI, porque o ESP só aceita unicast estático entre peers",
      "GRE exige certificados digitais sempre, no túnel puro e no GRE over IPsec, para autenticar cada peer IKE"
    ],
    "correct": 1,
    "explanation": "GRE sozinho: protocolo 47, sem crypto. IPsec (ESP proto 50) cifra. Para IGP sobre VPN usa-se GRE/IPsec, VTI, FlexVPN ou DMVPN. Baixar MTU/MSS.",
    "difficulty": "Médio"
  },
  {
    "question": "Que vantagem principal o IKEv2 tem sobre o IKEv1?",
    "options": [
      "IKEv2 exige mais mensagens que o main mode do IKEv1, normalmente nove trocas em vez de quatro",
      "Menos round-trips, NAT traversal nativo, EAP, MOBIKE e melhor rekey; o IKEv1 e o modelo legado",
      "IKEv2 não autentica os peers; só negoceia as chaves de cifra e deixa a identidade por verificar",
      "IKEv1 suporta EAP nativo na autenticação e o IKEv2 não, ficando limitado a uma pre-shared key"
    ],
    "correct": 1,
    "explanation": "IKEv2 usa menos mensagens que o main mode IKEv1 (comummente 4 vs 9) e é a base do FlexVPN Cisco. Por si só não é L2TP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que distingue GETVPN das VPNs de túnel tipo DMVPN?",
    "options": [
      "GETVPN usa GRE obrigatório para criar o overlay entre os group members antes de aplicar as chaves GDOI",
      "GETVPN cifra tráfego nativo (sem overlay de túnel) com chaves de grupo GDOI; preserva o cabeçalho IP original",
      "GETVPN não usa IPsec; protege o tráfego só com o protocolo GDOI, sem encapsulamento ESP nem chaves TEK",
      "GETVPN é só para a Internet pública sem IGP, porque esconde os endereços IP originais de cada host num túnel GRE"
    ],
    "correct": 1,
    "explanation": "Key server distribui KEKs/TEKs via GDOI. Os GMs cifram ESP mas mantem src/dst originais. Ideal em WAN privada; não atravessa NAT como DMVPN.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é MACsec (IEEE 802.1AE)?",
    "options": [
      "Cifra de camada 3 ponta-a-ponta entre os hosts, sem proteger cada salto Ethernet",
      "Cifra hop-by-hop da camada 2 entre portas, com chaves via MKA (802.1X)",
      "Um tipo de GRE que encapsula o frame Ethernet noutro pacote IP para atravessar routers",
      "Substitui o BGP ao anunciar prefixos e escolher o melhor caminho entre ASes"
    ],
    "correct": 1,
    "explanation": "Util em links entre switches do datacenter/campus para confidencialidade no cabo. Não substitui IPsec WAN.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é MAB (MAC Authentication Bypass) no acesso 802.1X?",
    "options": [
      "Um tipo de EtherChannel que agrega as portas de acesso e autentica o bundle pelo MAC do switch vizinho",
      "Fallback que autentica o dispositivo pelo MAC via RADIUS quando não há supplicant 802.1X",
      "Cifra MACsec obrigatória em cada porta de acesso, com chaves MKA, antes de qualquer autenticação",
      "Um protocolo de routing que anuncia o MAC do host como prefixo e escolhe o next-hop no acesso"
    ],
    "correct": 1,
    "explanation": "A ordem típica: 802.1X, depois MAB, depois WebAuth. MAB e fraco (MAC spoofable); usa-se com profiling e dACL/SGT.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é ERSPAN relativamente a SPAN/RSPAN?",
    "options": [
      "É SPAN só local, a copiar os frames para uma porta de destino na mesma switch sem sair do chassis",
      "Encapsula tráfego monitorizado em GRE/IP para um analisador em outra rede L3, atravessando routers",
      "É exclusivo de hubs, que repetem cada frame em todas as portas por não terem tabela de endereços MAC",
      "Substitui o NetFlow, exportando contadores de fluxos por UDP para um coletor em vez de cópias dos frames"
    ],
    "correct": 1,
    "explanation": "SPAN: mesma switch. RSPAN: VLAN dedicada através de trunks L2. ERSPAN: GRE/IP, chega a um destination em outro subnet.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é model-driven telemetry em IOS-XE/NX-OS?",
    "options": [
      "Polling SNMP em pull a cada cinco minutos, sem subscrição YANG nem streaming periódico ou on-change por gRPC",
      "Streaming de dados YANG (periodic ou on-change) via gRPC/gNMI/NETCONF para colectores, em vez de pull SNMP",
      "Um substituto de syslog em ASCII que só envia texto de eventos e não faz stream de dados operacionais modelados em YANG",
      "Somente accounting de CLI, que regista os comandos introduzidos pelo operador e não publica estado operacional em YANG"
    ],
    "correct": 1,
    "explanation": "Subscrições apontam a paths YANG. Cadencia de segundos e notificações on-change dão visibilidade que o SNMP não escala.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é YANG no contexto de programabilidade de rede?",
    "options": [
      "Um protocolo de transporte que move a configuração entre o controlador e o equipamento de rede",
      "Uma linguagem de modelação de dados (config e estado) usada por NETCONF/RESTCONF/gNMI",
      "Um cipher IPsec que cifra o tráfego de gestão trocado entre o controlador e o router",
      "Um tipo de LSA OSPF que anuncia os prefixos externos e a métrica associada no domínio"
    ],
    "correct": 1,
    "explanation": "Modulos Cisco-IOS-XE-native e openconfig-interfaces descrevem folhas e tipos. O encoding pode ser XML ou JSON. Sem YANG, NETCONF não tem schema.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual contraste prático entre NETCONF e RESTCONF?",
    "options": [
      "RESTCONF usa só SSH e aplica sempre um lock XML ao datastore, sem verbos HTTP, sem corpo JSON e sem sessão HTTPS",
      "NETCONF corre sobre SSH com datastores (running/candidate) e RPC XML; RESTCONF mapeia YANG para HTTP/HTTPS com JSON ou XML",
      "NETCONF é HTTP nativo e altera o datastore running com GET, PATCH e PUT, sem abrir sessão SSH e sem enviar qualquer RPC XML",
      "RESTCONF não autentica o cliente, ignora certificados e palavras-passe, e aceita qualquer pedido HTTP anónimo ao datastore"
    ],
    "correct": 1,
    "explanation": "NETCONF: edit-config, locks, candidate+commit. RESTCONF: GET /restconf/data/... mais simples para apps web. gNMI e a terceira via.",
    "difficulty": "Médio"
  },
  {
    "question": "No LISP, o que são EID e RLOC?",
    "options": [
      "O mesmo endereço WAN, usado em simultâneo como identidade do host e como localização do xTR no underlay LISP",
      "EID e a identidade do host/prefixo; RLOC e a localização (loopback do xTR) usada para encapsular no underlay",
      "RLOC é a VLAN nativa do trunk 802.1Q, o identificador do tráfego não etiquetado que atravessa o fabric LISP",
      "EID substitui o DNS e resolve nomes de host directamente para endereços IP, sem consultar o map-server do LISP"
    ],
    "correct": 1,
    "explanation": "Map-resolver/map-server resolvem EID para RLOC. xTR encapsula. E o plano de controlo de SD-Access com VXLAN no data plane.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que identifica um segmento VXLAN no data plane?",
    "options": [
      "O VLAN ID de 12 bits apenas, transportado no cabeçalho 802.1Q, sem qualquer campo VNI de 24 bits",
      "O VNI (VXLAN Network Identifier) de 24 bits no cabeçalho VXLAN, UDP destino 4789",
      "O DSCP EF do cabeçalho IP exterior, usado como identificador do segmento VXLAN",
      "O Router ID OSPF do VTEP, anunciado no underlay e usado como identificador do segmento"
    ],
    "correct": 1,
    "explanation": "24 bits ~ 16 milhoes de segmentos (face a 4094 VLANs). VTEPs encapsulam Ethernet em UDP/IP. EVPN distribui mapeamentos MAC/IP para VTEP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é anycast gateway num fabric VXLAN/EVPN ou SD-Access?",
    "options": [
      "Um HSRP clássico com dois IPs diferentes, um activo e um standby, eleito entre um par de routers de distribuição",
      "O mesmo IP e MAC de SVI configurados em todos os leafs, para o default gateway estar sempre no leaf local",
      "Um servidor DNS anycast só, que responde às consultas de nomes a partir do leaf mais próximo do cliente",
      "Um RR BGP que elege o gateway anycast e anuncia o IP virtual apenas a partir do leaf que ficou activo"
    ],
    "correct": 1,
    "explanation": "O host ARP o gateway e o leaf local responde. Evita trombone routing via um HSRP central. O underlay assegura reachability entre leafs.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual diferença de temporizadores e DR entre OSPF point-to-point e broadcast?",
    "options": [
      "Ambos elegem DR/BDR e usam Hello de 30 segundos e Dead de 120, tanto na rede point-to-point como na broadcast",
      "P2P: sem DR/BDR, Hello 10 s, adjacência FULL directa; broadcast: elege DR/BDR, Hello 10 s, FULL só com DR/BDR",
      "Broadcast não envia pacotes Hello e forma a adjacência FULL apenas com DBD, LSU e LSAck periódicos entre vizinhos",
      "P2P usa, por omissão, Hello de 30 segundos e Dead de 120 segundos, o temporizador das redes NBMA e point-to-multipoint"
    ],
    "correct": 1,
    "explanation": "ip ospf network point-to-point em Ethernet p2p (links /31) evita eleição inútil. Mismatch de network type impede adjacência.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que servem BGP communities?",
    "options": [
      "Substituir o AS-PATH por completo, apagando a lista de sistemas autónomos da rota e deixando apenas a community como atributo",
      "Tags opcionais que viajam com a rota para aplicar politica (local-pref, filter, no-export) noutro ponto do AS ou no peering",
      "Cifrar os UPDATEs BGP de ponta a ponta, usando a community para proteger os atributos de caminho em vez de MD5, TCP-AO ou TLS",
      "Eleger o route reflector do cluster, comparando communities e escolhendo o reflector que anuncia o valor numérico mais baixo"
    ],
    "correct": 1,
    "explanation": "Well-known: no-export, no-advertise, internet, local-AS. Route-maps set/match community. E o instrumento de politica de transito e de cliente.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é Loop-Free Alternate (LFA) em IP FRR?",
    "options": [
      "Um tipo de LSA 5 externo, que o OSPF inunda em todo o domínio para anunciar o prefixo de backup com uma métrica do tipo 2",
      "Um next-hop de backup pre-computado que não reintroduce o prefixo no router protegido, permitindo convergir em menos de 50 ms",
      "Uma community BGP opcional que marca o prefixo para o vizinho aumentar o local-pref e desviar o tráfego de trânsito pelo backup",
      "Um modo de Spanning Tree, como RSTP ou MST, que bloqueia a porta alternativa até o caminho principal para a raiz falhar"
    ],
    "correct": 1,
    "explanation": "O IGP calcula um vizinho cujo caminho para o prefixo não passa pelo primary. Remote LFA/TI-LFA cobre os casos sem LFA local. BFD detecta a falha.",
    "difficulty": "Difícil"
  },
  {
    "question": "Como se organizam Private VLANs (PVLAN)?",
    "options": [
      "Uma VLAN por endereço MAC apenas, criada dinamicamente no switch quando o host obtém o primeiro endereço por DHCP",
      "Uma VLAN primaria e VLANs secundarias isolated (só com o promiscuous) ou community (falam entre si e com o promiscuous)",
      "Todas as portas da VLAN são promiscuous e podem falar livremente com qualquer host da primária e de todas as secundárias",
      "PVLAN substitui o VXLAN no fabric, encapsulando cada trama Ethernet em UDP para isolar os inquilinos no underlay IP"
    ],
    "correct": 1,
    "explanation": "O porto promiscuous (gateway/firewall) ve todos. Isolated não falam entre hosts. Community isola grupos. Util em alojamento partilhado.",
    "difficulty": "Médio"
  },
  {
    "question": "O que caracteriza um AP em modo FlexConnect vs Local mode?",
    "options": [
      "FlexConnect obriga todo o tráfego de cliente do SSID a ir ao WLC por CAPWAP, sem comutação local mesmo com a WAN da filial operacional",
      "Em FlexConnect o AP pode comutar SSID localmente e sobreviver se o CAPWAP ao WLC cair; Local mode faz central switching no WLC",
      "Local mode não usa CAPWAP para controlo nem para dados: o AP comuta o SSID sozinho no campus e ignora o registo no WLC",
      "FlexConnect não autentica clientes 802.1X nem PSK e aceita qualquer estação no SSID sem servidor local e sem o WLC"
    ],
    "correct": 1,
    "explanation": "Filiais com WAN fraca usam FlexConnect: DHCP/data locais. Local/centrally switched e o campus. O WLC continua a gerir RRM quando o túnel esta up.",
    "difficulty": "Médio"
  },
  {
    "question": "Quais funções principais o RRM executa num WLC?",
    "options": [
      "Só cifra frames WPA3 dos clientes e não ajusta a potência, o canal nem a cobertura do grupo de APs",
      "TPC (potência), DCA (escolha de canal) e coverage hole detection, ajustando a RF do grupo de APs",
      "Atribui endereços DHCP IPv4 aos clientes wireless em vez de escolher canal e potência dos APs",
      "Substitui o Cisco ISE na autenticação 802.1X e na autorização, dispensando o RADIUS do WLC"
    ],
    "correct": 1,
    "explanation": "O WLC mede neighbours (NDP), evita co-channel interference, sobe/baixa dBm e cobre buracos. Sem RRM, canais e potência ficam estáticos.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz IGMP snooping num switch?",
    "options": [
      "Bloqueia todo o multicast IP na VLAN, incluindo os joins IGMP e o tráfego que devia seguir para o router querier",
      "Observa joins/leaves IGMP e encaminha multicast IP só para as portas com recetores (e o router/querier)",
      "Converte o multicast IP em túneis GRE entre as portas de acesso e o uplink, ignorando por completo os joins IGMP",
      "Activa PIM-DM em todas as portas de acesso e faz flood denso de (S,G) sem restringir o envio aos recetores IGMP"
    ],
    "correct": 1,
    "explanation": "Sem snooping o switch trata multicast como broadcast na VLAN. Com snooping mais querier poupa-se uplink. MLD snooping e o equivalente IPv6.",
    "difficulty": "Médio"
  },
  {
    "question": "Observe este show ip bgp. Porque é 10.1.1.2 o best path de 172.16.0.0 e não 10.1.1.3?",
    "options": [
      "O AS-path mais longo ganha, logo 10.1.1.2 é escolhido para 172.16.0.0",
      "Local Preference 200 > 150 (depois de Weight, que está 0 em ambos)",
      "O MED mais alto ganha e a métrica de 10.1.1.2 bate a de 10.1.1.3",
      "O origin e é preferido a i, e esse critério elege 10.1.1.2 como melhor caminho"
    ],
    "correct": 1,
    "explanation": "Cisco best path: Weight (maior, local) → Local Pref (maior) → locally originated → AS-path (mais curto) → origin (i < e < ?) → MED (menor)... Aqui Weight empata em 0; LocPrf 200 vence 150. Os dois são iBGP (i).",
    "difficulty": "Difícil",
    "cli": "R1# show ip bgp\nBGP table version is 84, local router ID is 192.0.2.1\nStatus codes: s suppressed, d damped, h history, * valid, > best, i - internal\nOrigin codes: i - IGP, e - EGP, ? - incomplete\n\n   Network          Next Hop            Metric LocPrf Weight Path\n*> 10.0.0.0         203.0.113.2              0             0 65001 i\n*  10.0.0.0         198.51.100.2             0             0 65002 65001 i\n*>i172.16.0.0       10.1.1.2                 0    200      0 65010 i\n* i172.16.0.0       10.1.1.3                 0    150      0 65010 i"
  },
  {
    "question": "Observe este show ip ospf database. O LSA 10.2.0.0 em Summary Net Link States é de que tipo e quem o origina?",
    "options": [
      "Type 1 Router LSA de 1.1.1.1, a listar os links do próprio router dentro da Area 0",
      "Type 3 summary, originado pelo ABR 2.2.2.2 para anunciar uma rede de outra área",
      "Type 5 externo de 9.9.9.9, a anunciar 10.2.0.0 como rota AS-external fora do OSPF",
      "Type 4 ASBR-summary, a identificar o ASBR 9.9.9.9 em vez da rede 10.2.0.0 na Area 0"
    ],
    "correct": 1,
    "explanation": "Summary Net Link States = Type 3, gerados por ABRs. Type-5 AS External são os externos (aqui 8.8.8.0 de 9.9.9.9). Router Link States = Type 1. Type 4 descreveria um ASBR, não uma rede 10.2.0.0.",
    "difficulty": "Médio",
    "cli": "R1# show ip ospf database\n            OSPF Router with ID (1.1.1.1) (Process ID 1)\n\n                Router Link States (Area 0)\nLink ID         ADV Router      Age         Seq#       Checksum Link count\n1.1.1.1         1.1.1.1         412         0x8000001a 0x00A1B2 2\n2.2.2.2         2.2.2.2         388         0x80000018 0x00C3D4 3\n\n                Summary Net Link States (Area 0)\nLink ID         ADV Router      Age         Seq#       Checksum\n10.2.0.0        2.2.2.2         201         0x80000005 0x001122\n\n                Type-5 AS External Link States\nLink ID         ADV Router      Age         Seq#       Checksum Tag\n8.8.8.0         9.9.9.9         155         0x80000002 0x00ABCD 0"
  },
  {
    "question": "Observe este show ip eigrp topology. O caminho via 10.1.3.2 é feasible successor?",
    "options": [
      "Não, porque a distância 3328 excede a FD 3072 e 10.1.3.2 não é feasible successor",
      "Sim, porque a advertised distance 2816 é menor que a FD do successor (3072)",
      "Não, porque 10.2.2.0/24 está Active e o DUAL ainda procura um successor",
      "Sim, porque a métrica reportada 3328 é menor que 2816 e passa a feasibility"
    ],
    "correct": 1,
    "explanation": "Successor: via 10.1.1.2, FD=3072 (feasible distance = métrica até ao destino). Candidato via 10.1.3.2: (RD/AD reported=2816, FD total=3328). Feasibility: AD 2816 < successor FD 3072 → é FS, mas não está instalado (1 successor; variance 1). P = Passive, DUAL estável.",
    "difficulty": "Difícil",
    "cli": "R1# show ip eigrp topology\nEIGRP-IPv4 Topology Table for AS(100)/ID(1.1.1.1)\nCodes: P - Passive, A - Active, U - Update, Q - Query, R - Reply,\n       r - reply Status, s - sia Status\n\nP 10.2.2.0/24, 1 successors, FD is 3072\n        via 10.1.1.2 (3072/2816), GigabitEthernet0/0\n        via 10.1.3.2 (3328/2816), GigabitEthernet0/1"
  },
  {
    "question": "Observe este show bfd neighbors. O que indica State Up / RH/RS Up?",
    "options": [
      "O IGP está down, mas o BFD ficou residual em Up e não indica que o next-hop está vivo",
      "A sessão BFD está estabelecida e o forwarding para esses next-hops é considerado vivo",
      "BFD só corre em IPv6, logo estas sessões IPv4 do show bfd neighbors não contam como Up",
      "LD/RD 1/1 significa que o BFD detetou um loop de encaminhamento entre os dois vizinhos"
    ],
    "correct": 1,
    "explanation": "BFD Up permite ao OSPF/EIGRP/BGP reagir em milissegundos sem esperar dead timers. LD/RD são discriminators locais/remotos. Int = interface da sessão. Sem BFD, Gi0/0 usaria hellos de 10 s / dead 40 s em OSPF broadcast.",
    "difficulty": "Médio",
    "cli": "R1# show bfd neighbors\nIPv4 Sessions\nNeighAddr                              LD/RD         RH/RS     State     Int\n10.1.1.2                             1/1             Up        Up        Gi0/0\n10.1.2.2                             2/5             Up        Up        Gi0/1"
  },
  {
    "question": "Observe este show ip vrf. O que se pode concluir?",
    "options": [
      "Há um único espaço de encaminhamento partilhado por CUST_A e CUST_B neste router",
      "Dois VRF-Lite (CUST_A e CUST_B) com RDs distintos e interfaces não sobrepostas",
      "MPLS TE está ativo em Lo10, com um túnel de engenharia de tráfego no VRF CUST_A",
      "Os dois VRFs têm de usar o mesmo RD, logo 65000:10 e 65000:20 são inválidos"
    ],
    "correct": 1,
    "explanation": "Cada VRF tem a sua RIB/FIB. RD 65000:10 vs 65000:20 distingue prefixos se forem exportados para VPNv4; em VRF-Lite puro o RD ainda identifica o VRF. Gi0/0 não pode pertencer aos dois VRFs ao mesmo tempo.",
    "difficulty": "Médio",
    "cli": "R1# show ip vrf\n  Name                             Default RD          Protocols   Interfaces\n  CUST_A                           65000:10            ipv4        Gi0/0\n                                                               Lo10\n  CUST_B                           65000:20            ipv4        Gi0/1\n                                                               Lo20"
  },
  {
    "question": "Observe este show mpls forwarding-table. O que significa Pop Label para 10.1.1.0/24?",
    "options": [
      "O prefixo 10.1.1.0/24 não está no LFIB e por isso não existe etiqueta local nem saída",
      "PHP: este router (penúltimo) remove a etiqueta de transporte antes de entregar ao último hop",
      "O pacote para 10.1.1.0/24 é descartado, porque Pop Label significa o descarte da etiqueta e do IP",
      "Há um serviço de TE obrigatório em 10.1.1.0/24 e Pop Label identifica um túnel de engenharia"
    ],
    "correct": 1,
    "explanation": "Penultimate Hop Popping evita que o egress PE tenha de olhar para um label e para o IP. Outgoing 22 = swap para a etiqueta 22. No Label = encaminhamento IP nativo (sem MPLS nesse prefixo).",
    "difficulty": "Médio",
    "cli": "R1# show mpls forwarding-table\nLocal      Outgoing   Prefix           Bytes Label   Outgoing   Next Hop\nLabel      Label      or Tunnel Id     Switched      interface\n16         Pop Label  10.1.1.0/24      0             Gi0/0      192.168.1.1\n17         22         10.2.2.0/24      18244         Gi0/1      192.168.2.1\n18         22         10.3.3.0/24      0             Gi0/1      192.168.2.1\n19         No Label   10.9.9.1/32      0             Gi0/0      192.168.1.1"
  },
  {
    "question": "Observe este show ip bgp summary. Qual vizinho não tem sessão Established e porquê se infere Idle?",
    "options": [
      "10.1.1.2 não está Established, porque PfxRcd 6 é um código numérico de Idle e não a contagem de prefixos recebidos",
      "198.51.100.2, State Idle e Up/Down never — TCP/BGP nunca estabeleceu (ACL, AS, reachability ou neighbor em falta)",
      "203.0.113.2 não está Established, porque AS 65001 é eBGP e um peer eBGP permanece sempre Idle neste show ip bgp",
      "Todos os vizinhos estão Established, e o Idle de 198.51.100.2 é só a contagem de prefixos recebidos desse peer"
    ],
    "correct": 1,
    "explanation": "Coluna State/PfxRcd mostra o número de prefixos se Established, ou o estado FSM (Idle, Active, OpenSent...). Idle + never = sem sessão. 10.1.1.2 é iBGP (AS 65000=local) com 6 prefixos; 203.0.113.2 é eBGP com 4.",
    "difficulty": "Médio",
    "cli": "R1# show ip bgp summary\nBGP router identifier 192.0.2.1, local AS number 65000\nBGP table version is 84, main routing table version 84\n10 network entries using 1440 bytes of memory\n\nNeighbor        V         AS MsgRcvd MsgSent   TblVer  InQ OutQ Up/Down  State/PfxRcd\n10.1.1.2        4      65000    1204    1198       84    0    0 00:18:22        6\n203.0.113.2     4      65001     880     872       84    0    0 00:14:01        4\n198.51.100.2    4      65002       0       0        0    0    0 never    Idle"
  },
  {
    "question": "Observe este show ip pim rp mapping. Como foi eleito o RP de 239.1.0.0/16?",
    "options": [
      "BSR",
      "Auto-RP",
      "Anycast RP MSDP apenas",
      "IGMPv2 querier"
    ],
    "correct": 1,
    "explanation": "Info source elected via Auto-RP para 239.1.0.0/16 (RP 10.9.9.9). O grupo 224.0.0.0/4 usa BSR com RP 10.8.8.8. Auto-RP usa 224.0.1.39/40; BSR usa o candidato BSR no PIM. Estático seria 'static' na linha.",
    "difficulty": "Médio",
    "cli": "R1# show ip pim rp mapping\nPIM Group-to-RP Mappings\n\nGroup(s) 239.1.0.0/16\n  RP 10.9.9.9 (?), v2\n    Info source: 10.9.9.9 (?), elected via Auto-RP\n         Uptime: 02:14:11, expires: 00:02:44\nGroup(s) 224.0.0.0/4\n  RP 10.8.8.8 (?), v2\n    Info source: 10.8.8.8 (?), elected via BSR\n         Uptime: 01:02:09, expires: 00:01:58"
  },
  {
    "question": "O LSA OSPFv2 Type 2 (Network) é gerado por quem e descreve o quê?",
    "options": [
      "Cada router, descrevendo os seus links point-to-point no próprio LSA Type 2",
      "O DR do segmento multiacesso, a lista de routers no segmento e a máscara",
      "O ASBR, anunciando prefixos externos Type 5 no lugar do Network LSA",
      "O ABR, injetando um default Type 7 de NSSA como se fosse o Type 2"
    ],
    "correct": 1,
    "explanation": "Type 2 só existe onde há DR (broadcast/NBMA). O Link ID é o IP da interface do DR. Em point-to-point não há Type 2. Type 1 descreve os links do próprio router.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve o LSA Type 4 (ASBR-summary)?",
    "options": [
      "Anunciar um prefixo intra-área do Type 1, como se o Type 4 descrevesse os links locais do próprio router",
      "Permitir que routers noutras áreas saibam como alcançar um ASBR (Router ID do ASBR, gerado pelo ABR)",
      "Substituir o Type 5 dentro da NSSA, transportando os prefixos externos que só o Type 7 pode levar",
      "Descrever o DR do segmento multiacesso e a lista de routers, função que pertence ao LSA Type 2"
    ],
    "correct": 1,
    "explanation": "Type 5 tem o prefixo externo mas o next-hop de forwarding pode ser um ASBR noutra área. Type 4 dá o custo até esse ASBR. Em NSSAs o Type 5 não entra: usa-se Type 7, traduzido para 5 no ABR.",
    "difficulty": "Difícil"
  },
  {
    "question": "Uma área OSPF totally stubby (no-summary) bloqueia o quê, relativamente a uma stub simples?",
    "options": [
      "Só os LSA Type 1 de router, deixando os Type 3 de summary inter-área a entrar na área",
      "Além dos Type 4/5, também os Type 3 de summary; o ABR injeta apenas um default Type 3",
      "Só os Hellos OSPF, sem bloquear Type 3, Type 4 nem Type 5 que continuam a circular",
      "Os LSA Type 2 obrigatórios do DR, em vez de bloquear os summaries Type 3 inter-área"
    ],
    "correct": 1,
    "explanation": "Stub: sem Type 5 (nem Type 4). Totally stubby: também sem Type 3 específicos, só default. NSSA: permite Type 7 redistribuídos. Totally NSSA: NSSA + no-summary. Área de transit (0) nunca é stub.",
    "difficulty": "Difícil"
  },
  {
    "question": "Quando se usa um virtual-link OSPF?",
    "options": [
      "Para cifrar os LSA Type 5 externos enquanto atravessam a área de trânsito não-stub entre os ABRs do virtual-link",
      "Para ligar uma área discontiguous à área 0 (ou costurar área 0 partida) através de uma área de transit não-stub",
      "Para substituir o BFD na deteção de falhas de vizinhança OSPF entre os ABRs que terminam o virtual-link",
      "Só em áreas NSSA, onde o virtual-link atravessa a NSSA para unir uma área 0 que ficou partida em duas"
    ],
    "correct": 1,
    "explanation": "Toda a área deve tocar na backbone. Virtual-link é um túnel lógico entre ABRs através de uma área regular. Não atravessa stub/NSSA. A solução limpa é redesenhar para que a área 0 seja contígua.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é Stuck-in-Active (SIA) no EIGRP?",
    "options": [
      "Um successor com feasible distance 0, instalado na RIB sem o router chegar a ficar Active por Queries",
      "O router ficou Active à espera de replies a um Query e o SIA-timer expirou sem resposta de um vizinho",
      "O estado normal Passive, em que o DUAL já escolheu successor e não envia Queries aos vizinhos EIGRP",
      "Uma adjacência OSPF em estado 2-Way entre o DR e um DROTHER num segmento broadcast multiacesso"
    ],
    "correct": 1,
    "explanation": "Sem FS, DUAL envia Queries. Se um vizinho não responde (WAN má, MTU, CPU), o router declara SIA e reset a adjacência com esse peer. Mitigação: stub, summarization, SIA-timer, boa estabilidade de links.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que faz um router EIGRP configurado como stub connected summary?",
    "options": [
      "Torna-se um ASBR OSPF e passa a originar um LSA Type 5 para cada prefixo EIGRP redistribuído a partir do stub",
      "Anuncia apenas connected e summary e não é consultado com Queries para destinos além do stub (reduz SIA)",
      "Desliga o DUAL nesse router stub, deixando de calcular successor e feasible successor locais",
      "Obriga variance 128 no stub, aceitando caminhos com métrica até 128 vezes a do successor"
    ],
    "correct": 1,
    "explanation": "EIGRP stub é para sucursais: o hub não envia Queries para o stub a perguntar por redes do core. receive-only/static/redistributed são variantes. Não é o mesmo que OSPF stub.",
    "difficulty": "Médio"
  },
  {
    "question": "Os K-values EIGRP têm de coincidir entre vizinhos. O default clássico usa quais K?",
    "options": [
      "K1 a K5 todos a 1, incluindo load e reliability",
      "K1=1 (bandwidth) e K3=1 (delay); K2=K4=K5=0",
      "Só K5=1, usando reliability e ignorando bandwidth",
      "K4=1 para MTU, tratando a MTU como componente da métrica"
    ],
    "correct": 1,
    "explanation": "Métrica clássica ≈ 256 * (10^7/min_bw + sum_delay). K2 (load) e K4/K5 (reliability) não entram no default. Wide metrics (named mode) usam 64 bits. K mismatch = sem adjacência.",
    "difficulty": "Médio"
  },
  {
    "question": "No BGP, um MED (metric) menor significa o quê, e onde se compara?",
    "options": [
      "Pior caminho; compara-se sempre entre ASes diferentes, sem qualquer exceção de neighbor AS",
      "Melhor caminho; compara-se entre rotas do mesmo AS vizinho (salvo bgp always-compare-med)",
      "Substitui o Weight local do router como primeiro critério do best path da Cisco",
      "Não entra no best path da Cisco, sendo ignorado mesmo quando os neighbor AS coincidem"
    ],
    "correct": 1,
    "explanation": "MED é opcional non-transitive. O default Cisco só compara MED de paths do mesmo neighbor AS. always-compare-med compara entre ASes (pode causar loops se não for consistente). Missing MED trata-se como 0 por omissão (bgp bestpath med missing-as-worst inverte).",
    "difficulty": "Difícil"
  },
  {
    "question": "Para que serve AS-path prepend no BGP?",
    "options": [
      "Encurtar o AS-path retirando os ASNs repetidos, para esse prefixo ganhar sempre o best path nos vizinhos eBGP",
      "Anunciar o prefixo com o próprio AS repetido, tornando o path mais longo para os vizinhos e desviando entrada",
      "Apagar o AS-path completo de cada UPDATE BGP, deixando o prefixo anunciado sem nenhum ASN",
      "Forçar um full mesh de sessões iBGP entre todos os speakers do AS, em vez de route reflectors"
    ],
    "correct": 1,
    "explanation": "Prepend é engenharia de tráfego inbound barata. Local Pref/Weight controlam saída. Communities (no-export, local-AS) são mais limpas em escala. Não viola o AS, só alonga.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque se configura neighbor x.x.x.x next-hop-self em iBGP num PE/edge?",
    "options": [
      "Para cifrar cada UPDATE BGP enviado a cada vizinho iBGP, protegendo o next-hop e os atributos de path desse prefixo",
      "Para que o next-hop dos prefixos eBGP passados a iBGP seja um endereço alcançável no IGP do AS (o próprio speaker)",
      "Para desligar o route reflector nesse PE, impedindo que os clientes iBGP recebam as rotas refletidas",
      "Para igualar o MED a 0 em todos os prefixos eBGP antes de os anunciar aos vizinhos iBGP do AS"
    ],
    "correct": 1,
    "explanation": "eBGP deixa o next-hop no peer externo, muitas vezes não resolvível no core. next-hop-self reescreve para o peering iBGP (loopback). Em RR aplica-se aos clientes. Alternativa: anunciar o /32 do next-hop externo no IGP (não costuma ser desejável).",
    "difficulty": "Médio"
  },
  {
    "question": "A community well-known no-export significa o quê?",
    "options": [
      "Não anunciar o prefixo a nenhum peer iBGP do AS, como se no-export fosse no-advertise",
      "Não anunciar o prefixo para fora do AS (nem confederação para eBGP 'verdadeiro')",
      "Prefira sempre este path no best-path, como se no-export fosse preferência absoluta",
      "Igual a Weight 65535, o máximo local da Cisco, que escolhe o caminho só neste router"
    ],
    "correct": 1,
    "explanation": "no-export: fica no AS. no-advertise: não anunciar a nenhum peer. local-AS: não sair da sub-AS de confederação. Internet (default) pode ir a toda a gente. Communities são o gancho de policy do ISP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre um route reflector e uma confederação BGP?",
    "options": [
      "Não há diferença alguma: o route reflector e a confederação só renomeiam o AS e deixam o full mesh iBGP e o split-horizon exatamente iguais",
      "RR relaxa o split-horizon iBGP num cluster (clientes/non-clients); confederação parte o AS em sub-ASes com eBGP especial entre elas",
      "Confederação só funciona com OSPF como IGP interno e não cria sub-ASes quando o interior usa IS-IS, EIGRP ou rotas estáticas",
      "RR exige MPLS e LDP no core: sem etiqueta de transporte o cluster recusa os clientes e não reflete as rotas iBGP"
    ],
    "correct": 1,
    "explanation": "Ambos evitam o full mesh iBGP. RR é mais simples (cluster-id, originator-id contra loops). Confederação (64512-65534 privadas) isola policy por sub-AS e usa next-hop/MED como eBGP entre sub-ASes. Podem combinar-se.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é eBGP multihop?",
    "options": [
      "iBGP com TTL 1, obrigando cada peer interno a estar no mesmo segmento L2 porque o pacote expira no primeiro salto",
      "Permitir sessão eBGP entre endereços que não são diretamente adjacentes, subindo o TTL (omissão eBGP TTL=1)",
      "Um tipo de LSA do OSPF que anuncia o vizinho eBGP, o TTL da sessão e o AS remoto aos routers da área",
      "PHP no MPLS: a sessão eBGP faz pop da etiqueta de transporte no penúltimo hop para subir o TTL"
    ],
    "correct": 1,
    "explanation": "Típico: peering entre loopbacks através de um IGP/connected compartilhado, ou peering por vários hops. disable-connected-check cobre o caso loopback no mesmo link. Risco: TTL grande alarga a superfície; BFD ainda é recomendado.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa MPLS L3VPN, PHP (penultimate hop popping) ocorre onde?",
    "options": [
      "No CE de origem, que faz pop da etiqueta de transporte LDP antes de o pacote entrar no PE de ingresso",
      "No router imediatamente antes do PE de egress, que faz pop da etiqueta de transporte (LDP/SR)",
      "Só no RR BGP, que remove a etiqueta VPN ao refletir o prefixo VPNv4 para os outros PE",
      "No cliente IPsec, que decifra o túnel e faz pop da etiqueta de transporte no último hop do LSP"
    ],
    "correct": 1,
    "explanation": "O LSP de transporte é LDP (ou SR). O penúltimo hop faz pop para o PE de egress olhar só para a etiqueta VPN (ou IP em PHP+explicit-null variações). explicit-null preserva EXP/TTL até ao egress.",
    "difficulty": "Médio"
  },
  {
    "question": "LDP vs RSVP-TE em MPLS: qual contraste correto?",
    "options": [
      "LDP estabelece LSPs segundo a RIB IGP, hop-by-hop; RSVP-TE sinaliza tunnels com restrições de banda/caminho",
      "RSVP-TE substitui o IGP: OSPF e IS-IS deixam de correr e cada túnel descobre a topologia sem anúncios de link-state",
      "LDP exige sempre TE, com reserva de banda e afinidade, e sem essas restrições não instala nenhum LSP",
      "Ambos usam apenas UDP 179, a mesma porta do BGP, nos hellos de descoberta e na sessão de sinalização"
    ],
    "correct": 0,
    "explanation": "LDP anda ao lado do IGP (lib/hello UDP 646, sessão TCP 646). RSVP-TE (e SR-TE) serve engenharia: bandwidth, affinity, fast reroute. Muitos cores misturam LDP no access e TE no backbone, ou passam a Segment Routing.",
    "difficulty": "Médio"
  },
  {
    "question": "BFD echo mode versus asynchronous: qual a ideia?",
    "options": [
      "Echo não existe em Cisco: o IOS implementa só o modo asynchronous e descarta qualquer pacote echo recebido na sessão BFD",
      "Async: os dois peers enviam control packets; Echo: o peer faz loopback do pacote echo do iniciador na forwarding path",
      "Echo substitui o IGP por completo, anuncia as rotas e calcula o shortest path no lugar do OSPF ou do IS-IS",
      "Async só corre em IPv6, com link-local; em IPv4 o BFD limita-se ao modo echo e não envia control packets"
    ],
    "correct": 1,
    "explanation": "Echo testa o data plane do vizinho com menos CPU no peer. Nem todos os hardware/IOS suportam echo. Timers 50x3 ms são comuns em LAN; WAN usa valores mais conservadores. BFD e IGP/BGP ligam-se com 'fall-over bfd' / 'bfd all-interfaces'.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em PBR, qual é a diferença entre set ip next-hop e set interface?",
    "options": [
      "Não há diferença operacional: set ip next-hop e set interface escolhem o mesmo próximo salto e a mesma saída, e os dois fazem fallback para o routing normal se o destino estiver em baixo",
      "set ip next-hop usa um IP (com fallback para routing normal se inalcançável, salvo default); set interface força a saída por essa iface (perigoso em multiacesso sem ARP)",
      "set interface só funciona com BGP; com OSPF, EIGRP ou rotas estáticas o route-map ignora a cláusula e o tráfego segue sempre a rota que a RIB já escolheu",
      "set ip next-hop ignora a ACL do route-map e desvia todo o tráfego recebido na interface, incluindo pacotes que não casam com nenhuma linha de match da policy"
    ],
    "correct": 1,
    "explanation": "PBR (ip policy route-map) casa ACLs/length/DSCP e desvia antes da RIB. set ip next-hop verify-availability + tracking/BFD evita blackhole. set ip default next-hop só se a RIB não tiver rota (exceto default).",
    "difficulty": "Médio"
  },
  {
    "question": "Num vPC Nexus, para que servem o peer-link e o peer-keepalive?",
    "options": [
      "São o mesmo cabo: peer-link e keepalive partilham um EtherChannel e, se esse cabo cair, os dois peers ficam active sem ninguém detetar o dual-active",
      "Peer-link sincroniza estado (MCS, LACP, IGMP, BPDUs) entre os dois peers; keepalive (link separado, mgmt) deteta dual-active se o peer-link falhar",
      "Keepalive encaminha o tráfego de data plane dos servidores entre os dois chassis, incluindo frames L2 e o fluxo das portas ligadas só a um peer",
      "Peer-link substitui o routing IGP e passa a anunciar as rotas entre os dois Nexus, em vez de OSPF, IS-IS ou EIGRP, para o tráfego routed"
    ],
    "correct": 1,
    "explanation": "Os servers veem um EtherChannel para dois chassis. Sem keepalive, um peer-link down pode levar a split-brain (ambos active). Orphan ports são portas que só ligam a um peer. STP é filtrado de forma especial no vPC.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é uma orphan port num vPC?",
    "options": [
      "Uma porta LACP em bundle nos dois peers, com membros ativos em cada chassis do domínio vPC",
      "Uma porta que liga um dispositivo apenas a um dos switches vPC, não ao par",
      "O peer-keepalive, a porta órfã que liga um host só ao endereço de gestão do outro switch",
      "A VLAN nativa do peer-link, contada como orphan port porque o CFS fica num único chassis"
    ],
    "correct": 1,
    "explanation": "Se o peer onde a orphan está falha, o dispositivo perde conectividade mesmo que o vPC do outro lado esteja up. Mitigação: dual-attach (vPC) ou orphan-port suspend. Peer-gateway / orphan-port podem ser necessários para routed traffic.",
    "difficulty": "Difícil"
  },
  {
    "question": "No LISP usado pelo SD-Access, o Map-Server/Map-Resolver faz o quê?",
    "options": [
      "Encapsula VXLAN no data plane de todos os edges, em UDP 4789, entre os RLOCs de cada par",
      "Control plane: guarda mapeamentos EID→RLOC e responde a Map-Requests dos ITR/ETR (edges)",
      "Substitui o ISE: autentica 802.1X, aplica a SGT e o fabric deixa de consultar o RADIUS",
      "É o vManage, o controlador de templates SD-WAN, e não o Map-Server do fabric SD-Access"
    ],
    "correct": 1,
    "explanation": "ITR pergunta 'onde está este EID?'; MS/MR (control plane node) responde o RLOC do ETR. Data plane é VXLAN (UDP 4789) entre RLOCs. Border nodes ligam o fabric ao resto da rede.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual porta UDP usa o VXLAN no data plane?",
    "options": [
      "4789",
      "5246",
      "179",
      "646"
    ],
    "correct": 0,
    "explanation": "VXLAN usa UDP 4789 (IANA). CAPWAP usa 5246/5247. BGP 179. LDP 646. O VNI de 24 bits identifica o segmento no header VXLAN; EVPN (BGP AF) distribui MAC/IP (RT-2) e prefixos (RT-5).",
    "difficulty": "Médio"
  },
  {
    "question": "SGT inline versus SXP no TrustSec/ISE: qual a diferença?",
    "options": [
      "O SXP encapsula os frames Ethernet de dados em VXLAN entre os NADs; o inline limita-se ao SGT no Access-Accept RADIUS e não o transporta no quadro",
      "Inline transporta o tag no CMD/Cisco Meta Data do frame hop-by-hop; SXP (TCP 64999) propaga IP-SGT out-of-band onde o média não carrega o tag",
      "Tanto o tagging inline como o SXP exigem um núcleo MPLS com labels de transporte para levar o SGT entre os switches de acesso",
      "O tagging inline do SGT existe apenas em Wi-Fi, dentro do CAPWAP até ao WLC, e não se aplica a Ethernet comutada no campus"
    ],
    "correct": 1,
    "explanation": "ISE classifica o utilizador e manda o SGT ao NAD (802.1X). Switches capable reencaminham o tag. SXP preenche gaps (WAN, terceiros). Enforcement: SGACL no destino. pxGrid partilha contexto com firewalls.",
    "difficulty": "Difícil"
  },
  {
    "question": "O datastore candidate do NETCONF serve para quê?",
    "options": [
      "Substituir de imediato o running, sem lock nem commit, aplicando cada edit-config direto na configuração ativa do equipamento",
      "Editar uma config proposta (edit-config) e depois commit atómico para running, com lock e rollback",
      "Servir só para ler MIBs SNMP com get-bulk, sem qualquer operação de escrita de dados YANG no equipamento",
      "Guardar a imagem IOS.bin na flash do equipamento, como repositório de software e não como configuração YANG"
    ],
    "correct": 1,
    "explanation": "candidate + commit permite validar e aplicar tudo-ou-nada (confirmed-commit com rollback automático). running-only devices editam direto. RESTCONF tem o mesmo modelo YANG mas HTTP. Confirmed commit é o antídoto a lockouts de AAA/ACL.",
    "difficulty": "Difícil"
  },
  {
    "question": "DMVPN Phase 1 versus Phase 3: qual contraste correto?",
    "options": [
      "A Phase 1 já constrói túneis spoke-to-spoke diretos, com resolução NHRP entre spokes e sem o tráfego de dados passar pelo hub",
      "Phase 1 é hub-and-spoke (spokes não constroem túneis entre si); Phase 3 usa NHRP redirect/shortcut para spoke-to-spoke",
      "A Phase 3 desliga o NHRP no hub e nos spokes e passa a resolver os túneis só com rotas estáticas, sem mensagens redirect",
      "A Phase 1 exige GETVPN com GDOI por baixo do mGRE para cifrar o tráfego, em vez de um perfil IPsec no túnel"
    ],
    "correct": 1,
    "explanation": "Phase 2 permite spoke-to-spoke mas com tabelas de routing full nos spokes (summaries no hub quebram). Phase 3: hub manda NHRP redirect, spokes instalam shortcut; summaries no hub funcionam. IPsec profile + mGRE + NHRP são comuns às fases.",
    "difficulty": "Médio"
  },
  {
    "question": "No GETVPN, quais são os papéis de Key Server (KS) e Group Member (GM)?",
    "options": [
      "O KS encaminha o data plane cifrado entre os sites da WAN privada; o GM limita-se a correr o IGP e não aplica a cifra GDOI ao tráfego dos utilizadores",
      "KS distribui SA de grupo (GDOI/IKEv1) aos GMs; os GMs cifram o tráfego original preservando IP header (tunnel-less) na WAN privada",
      "O GM é o route reflector BGP da WAN, que reflete os prefixos do grupo aos outros membros e fica de fora da cifra do tráfego",
      "O KS é um spoke DMVPN que regista o seu túnel no hub via NHRP e não distribui as chaves de grupo aos membros"
    ],
    "correct": 1,
    "explanation": "GETVPN (GDOI) serve WANs MPLS/privadas onde o header IP original deve permanecer para routing. TBAR (time-based anti-replay) e COOP KS (redundância) são típicos. Não substitui DMVPN na Internet pública (não há túnel/NAT traversal de grupo).",
    "difficulty": "Difícil"
  },
  {
    "question": "CoPP versus CPPr (Control Plane Protection): qual a nuance?",
    "options": [
      "CoPP e CPPr são apenas dois nomes do mesmo feature no IOS clássico e no IOS-XE, sem diferença de policy-map, de subinterfaces ou de granularidade no plano de controlo",
      "CoPP aplica um policy-map à interface lógica control-plane (agregado); CPPr (host/transit/cef-exception) subdivide o CEF para granularidade extra no IOS clássico",
      "O CPPr substitui o data plane CEF por uma policy aplicada na CPU, passando o tráfego de utilizador a ser encaminhado no control-plane em vez do hardware",
      "O CoPP só existe em plataformas NX-OS, onde se escolhe um copp profile, e não pode ser configurado na interface control-plane do IOS clássico nem do IOS-XE"
    ],
    "correct": 1,
    "explanation": "Ambos protegem a CPU de floods (TTL expiry, ICMP, SSH). Comece por copiar a policy Cisco-recommended e afinar. Undercopping quebra BGP/OSPF; overpermitting deixa o DoS entrar. NX-OS usa copp profile.",
    "difficulty": "Difícil"
  },
  {
    "question": "uRPF strict versus loose: qual a diferença?",
    "options": [
      "Loose: o reverse path da origem tem de apontar à interface de entrada; strict: basta o prefixo existir na FIB, em qualquer iface, mesmo com assimetria",
      "Strict: o reverse path da origem tem de apontar para a interface de entrada; loose: basta a origem existir na FIB (qualquer iface), útil em assimetria",
      "O modo strict do uRPF existe apenas para IPv6 e não se aplica a pacotes IPv4 recebidos na interface de entrada do router de borda",
      "O modo loose descarta sempre os pacotes cuja única rota é a default, e nem allow-default nem uma ACL de exceção alteram esse descarte"
    ],
    "correct": 1,
    "explanation": "ip verify unicast source reachable-via rx = strict; reachable-via any = loose. Strict é o anti-spoofing forte em access; loose no edge com routing assimétrico. allow-default e ACL de exceção afinam o comportamento.",
    "difficulty": "Médio"
  },
  {
    "question": "Em PIM-SM num segmento multiacesso, o Designated Router (DR) serve para quê?",
    "options": [
      "Eleger o root do STP no segmento, pela menor bridge ID, para construir a árvore de comutação da LAN",
      "Enviar Register para o RP (fontes) e Join/Prune em nome dos receivers locais (IGMP)",
      "Substituir o BSR e difundir sozinho o RP-set de PIM-SM por todo o domínio multicast",
      "Cifrar o multicast do segmento com IPsec antes de o reencaminhar em direção ao RP"
    ],
    "correct": 1,
    "explanation": "O DR PIM (maior IP, ou prioridade) é o único a registar fontes e a enviar joins para o RP. Não confundir com DR OSPF. Assert elege o forwarder quando há vários routers com o mesmo grupo na LAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é o contraste entre Auto-RP e BSR para descoberta de RP?",
    "options": [
      "O BSR é proprietário da Cisco e só corre em IOS; o Auto-RP é o método padrão IETF, descrito numa RFC, para anunciar o RP aos routers PIM",
      "Auto-RP (Cisco, 224.0.1.39/40) anuncia RPs via mapping agent; BSR (RFC, mensagens PIM) elege um Bootstrap Router que difunde o RP-set",
      "Tanto o Auto-RP como o BSR exigem sessões MSDP entre os RPs candidatos para anunciar o mapping e eleger o router de bootstrap",
      "O Auto-RP só funciona com PIM-DM, porque o mapping agent depende do flooding denso e não opera quando o modo é sparse"
    ],
    "correct": 1,
    "explanation": "Auto-RP precisa que os sparse-dense ou auto-rp listener permitam os grupos 39/40. BSR é padrão e atravessa PIM-SM nativo. Anycast-RP (MSDP ou RFC 4610) dá redundância geográfica do RP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é o SPT switchover no PIM-SM?",
    "options": [
      "Mudar o modo PIM do router de PIM-DM para PIM-BIDIR assim que o primeiro pacote do grupo chega pela árvore partilhada (*,G) com raiz no RP, sem Join (S,G)",
      "Depois de receber o primeiro pacote via shared tree (*,G) rumo ao RP, o last-hop DR pode enviar (S,G) Join direto à fonte, abandonando o RP no caminho",
      "Desligar o IGMP snooping em todos os switches de acesso para o last-hop deixar de receber o tráfego do grupo pela shared tree (*,G) do RP",
      "Eleger um novo Bootstrap Router no domínio e voltar a difundir o RP-set completo quando o tráfego abandona a shared tree (*,G) em direção à fonte"
    ],
    "correct": 1,
    "explanation": "O default Cisco faz switchover imediato (spt-threshold 0). spt-threshold infinity mantém o tráfego no shared tree (útil se a fonte é breve). SSM (IGMPv3, 232/8) vai direto (S,G) sem RP.",
    "difficulty": "Difícil"
  },
  {
    "question": "IS-IS em campus/WAN ENCOR: L1 versus L2 significa o quê?",
    "options": [
      "L1 corresponde a sessões eBGP entre sistemas autónomos; L2 corresponde a iBGP dentro do mesmo AS, com o next-hop inalterado",
      "L1 é intra-área (estação); L2 é backbone entre áreas; L1/L2 vive na fronteira e faz route leaking do default",
      "O nível L2 só transporta prefixos IPv6, e o endereçamento IPv4 fica limitado aos routers que operam apenas como L1",
      "O nível L1 substitui o BFD, passando a detetar falhas de enlace sem hellos IS-IS e sem sessões BFD dedicadas no router"
    ],
    "correct": 1,
    "explanation": "IS-IS não usa área 0 à la OSPF: o backbone é o conjunto de routers L2 contíguos. NET (área + SysID + NSEL). Métrica wide é obrigatória em redes modernas. IS-IS é base habitual de SR/LDP em SP.",
    "difficulty": "Difícil"
  },
  {
    "question": "OSPFv3 Address Families (AF) no IOS-XE permitem o quê?",
    "options": [
      "Só um processo OSPFv3 clássico de IPv6, sem address family IPv4 e sem anunciar prefixos IPv4",
      "Um processo OSPFv3 a transportar IPv6 e/ou IPv4 (AFs), com adjacências ainda em link-local",
      "Substituir o BGP VPNv4 no PE, levando os prefixos VPN apenas pelo OSPFv3 em vez de MP-BGP",
      "Anunciar apenas LSAs Type 8 (Link-LSA) e deixar de usar os LSAs Type 9 para os prefixos da área"
    ],
    "correct": 1,
    "explanation": "OSPFv3 clássico era só IPv6. AF (RFC 5838) leva IPv4 sobre OSPFv3. Adjacências continuam IPv6 link-local; router-id ainda é IPv4 de 32 bits. Instance ID separa AFs.",
    "difficulty": "Médio"
  },
  {
    "question": "IPv6 RA Guard no acesso serve para quê?",
    "options": [
      "Bloquear DHCPv4 Discover e Offer na porta de acesso, sem inspecionar Router Advertisements IPv6",
      "Impedir que um host malicioso anuncie Router Advertisements e se faça passar por gateway IPv6",
      "Substituir o NDP, deixando de usar NS/NA e passando a resolver vizinhos IPv6 apenas por ARP",
      "Ativar o IS-IS na porta de acesso para formar adjacências com o host e anunciar o gateway por LSP"
    ],
    "correct": 1,
    "explanation": "RA Guard (e DHCPv6 Guard, ND inspection) são First-Hop Security. Portas de acesso: host-mode (RAs drop). Uplinks para routers: router-mode. Sem isto, um RA falso desvia o tráfego IPv6.",
    "difficulty": "Médio"
  },
  {
    "question": "IP Source Guard (ip verify source) apoia-se em quê?",
    "options": [
      "Na tabela BGP do router de borda, filtrando prefixos eBGP antes de os instalar na RIB da VLAN de acesso",
      "Na binding table do DHCP snooping (e statics) para permitir só o IP/MAC aprendido naquela porta",
      "No NAT overload (PAT) da interface de saída, traduzindo o IP de origem antes de o encaminhar para a WAN",
      "No VTP, que propaga nome, revisão e mapa de VLANs para autorizar o IP e o MAC aprendidos na porta"
    ],
    "correct": 1,
    "explanation": "IPSG filtra no data plane o que DAI filtra no ARP. Port-security cobre o MAC; juntos fecham spoofing na borda. Exige snooping ativo e portas trusted rumo ao servidor DHCP.",
    "difficulty": "Médio"
  },
  {
    "question": "Num fabric SD-Access, qual é o papel do border node versus do edge node?",
    "options": [
      "O border node só termina clientes Wi-Fi e o edge só comuta labels MPLS, sem LISP ETR/ITR nem VXLAN no fabric SD-Access",
      "Edge conecta endpoints (LISP ETR/ITR, anycast SVI); border liga o fabric ao mundo exterior (fusion, DC, WAN, Internet)",
      "Ambos são o vManage: orquestram a política central e não encaminham endpoints nem saem para fusion, DC ou WAN",
      "O edge node é o próprio servidor ISE, que autentica 802.1X e emite os SGTs no lugar do switch de acesso do fabric"
    ],
    "correct": 1,
    "explanation": "Control plane node = MS/MR LISP. Edge = access. Border = exit. WLC/FN liga APs. ISE dá SGT. Underlay é IGP/IS-IS + VXLAN; overlay são VN (macro-segmentação) + SGTs (micro).",
    "difficulty": "Médio"
  },
  {
    "question": "No Cisco SD-WAN, o que é um TLOC e quem distribui as rotas OMP?",
    "options": [
      "TLOC é só uma tag de VLAN 802.1Q no underlay; o OMP corre apenas no vBond e nunca é distribuído pelo vSmart aos WAN Edges da rede",
      "TLOC (Transport Locator) identifica a ligação de um WAN Edge a um transport; o vSmart distribui OMP (rotas, TLOCs, políticas) aos edges",
      "O OMP substitui por completo o DTLS, cifrando sozinho a sessão de controlo e eliminando o túnel DTLS entre cada WAN Edge e o respetivo vSmart",
      "O TLOC é a interface gráfica do vManage, onde se desenha a topologia, e não identifica a ligação de transporte de um WAN Edge"
    ],
    "correct": 1,
    "explanation": "vBond faz orquestração/STUN inicial. vManage = config/analytics. vSmart = control plane OMP. WAN Edge (vEdge/cEdge) forma túneis IPsec/GRE por TLOC (cor, encaps, system-ip). App-aware routing usa SLA dos túneis.",
    "difficulty": "Médio"
  },
  {
    "question": "MST (802.1s): o que é a IST (instance 0)?",
    "options": [
      "A IST é uma instância STP por cada VLAN, como no PVST+, e não a instância única partilhada por todos os switches da região MST",
      "A instância que corre BPDUs para a região e mapeia VLANs não noutros instances; liga a região ao CST exterior",
      "A IST é um EtherChannel que agrega os uplinks da região MST e transporta todas as VLANs num único bundle negociado por LACP",
      "A IST é o root guard na fronteira da região, aplicado para impedir que um switch externo se torne o root bridge do CST"
    ],
    "correct": 1,
    "explanation": "MST agrupa VLANs em poucas instâncias (carga de CPU). Todos os switches da região partilham nome, revisão e mapa VLAN-instance. IST (instance 0) é o 'CIST' dentro da região. PVST simulation nas fronteiras.",
    "difficulty": "Difícil"
  },
  {
    "question": "Storm control num switch de acesso serve para quê?",
    "options": [
      "Eleger o DR OSPF na porta de acesso, comparando a prioridade e o router-id dos vizinhos ligados",
      "Rate-limitar unicast desconhecido, multicast ou broadcast na porta, evitando que um loop/storm esgote o domínio",
      "Substituir o CoPP no core, policando o tráfego para a CPU do route processor em vez do storm na porta de acesso",
      "Traduzir VNIs VXLAN para VLANs 802.1Q no acesso, encapsulando e desencapsulando o overlay no switch"
    ],
    "correct": 1,
    "explanation": "storm-control broadcast/multicast/unicast level X. Pode shutdown ou trap. Complementa BPDU Guard e loop guard mas não substitui STP. Nível em pps ou % da interface.",
    "difficulty": "Médio"
  },
  {
    "question": "NBAR/AVC em QoS ENCOR classifica tráfego como?",
    "options": [
      "Só pela porta TCP 80, sem DPI nem assinaturas, tratando qualquer porta dinâmica como tráfego desconhecido",
      "Por aplicação (DPI/signatures, PDLM/NAR), permitindo marking/queuing de apps que usam portas dinâmicas",
      "Só no campo MPLS EXP de 3 bits, sem identificar a aplicação nem classificar pacotes IP nativos no acesso",
      "Apenas em frames ISL, lendo o cabeçalho de trunk Cisco e ignorando 802.1Q, IP e as portas da aplicação"
    ],
    "correct": 1,
    "explanation": "match protocol na MQC usa NBAR. Útil para SaaS, voice RTP, e apps que não cabem numa ACL. Performance: offload em hardware recente. Não substitui a classificação na trust boundary quando o DSCP já vem correto.",
    "difficulty": "Médio"
  },
  {
    "question": "Hierarchical QoS (H-QoS) parent/child serve tipicamente para quê?",
    "options": [
      "Desligar o LLQ na policy child, para a voz partilhar a fila CBWFQ sem a priority queue",
      "O parent faz shape da interface/túnel (CIR do ISP); o child faz LLQ/CBWFQ dentro dessa fatia",
      "Só marcar o CoS 802.1p na trama de saída, sem shape no parent nem filas LLQ/CBWFQ no child",
      "Substituir o BFD na interface, detetando a queda do vizinho pelo shaper em vez dos hellos de liveness"
    ],
    "correct": 1,
    "explanation": "Numa subinterface ou DMVPN, o parent shaper evita burst contra o policer do ISP; o child dá prioridade à voz (priority) e bandwidth às classes. Sem parent, o TX da interface física (1G) ignora o contrato de 100M.",
    "difficulty": "Difícil"
  },
  {
    "question": "MPLS EXP (Traffic Class) de 3 bits mapeia QoS no núcleo como?",
    "options": [
      "Substituem o campo IP TTL: os 3 bits de EXP passam a contar os saltos no label e o TTL do pacote IP deixa de ser decrementado",
      "Carrega uma classe de serviço no label; o PE copia/mapeia DSCP↔EXP na entrada e o núcleo faz PHB sem olhar para o IP",
      "São o VNI do VXLAN, um campo de 24 bits no cabeçalho UDP 4789, e não os 3 bits de classe de serviço do label MPLS",
      "Só existem quando o LDP anuncia labels IPv6, e ficam ausentes nos LSPs IPv4 e em qualquer LSP de MPLS clássico"
    ],
    "correct": 1,
    "explanation": "Pipe vs uniform vs short-pipe models definem se o DSCP original se restaura no egress. PHP com implicit-null perde EXP no último hop — daí explicit-null quando o PHB no PE de egress importa.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF max-metric router-lsa (on-startup) usa-se para quê?",
    "options": [
      "Forçar o router a vencer a eleição de DR/BDR no segmento, ignorando a prioridade OSPF e o router-id",
      "Anunciar o LSA Type 1 com métrica máxima durante o boot/reload, desviando o trânsito até os iBGP/MPLS estarem prontos",
      "Desligar o BFD nas adjacências OSPF durante o arranque, para que a deteção de falha deixe de ser subsegundo",
      "Converter a área OSPF deste router numa NSSA durante o boot, passando a originar LSA Type 7 em vez de LSA Type 5 externos"
    ],
    "correct": 1,
    "explanation": "Evita blackholes de transito quando o IGP converge antes do BGP (wait-for-bgp). Alternativas: iBGP IGP delay, prefix-suppression, BFD. É o análogo ISIS overload bit.",
    "difficulty": "Médio"
  },
  {
    "question": "A sincronização BGP (synchronization) no IOS moderno está:",
    "options": [
      "Obrigatória e ligada por omissão no IOS moderno, forçando a verificação de sincronização em cada sessão BGP",
      "Desligada por omissão; quando ligada, um prefixo iBGP só entra na RIB se também for conhecido via IGP",
      "Um substituto do route reflector, eliminando o full-mesh iBGP ao reflectir os prefixos entre os clientes",
      "Aplicável só a sessões eBGP, ignorando os prefixos iBGP e a exigência de os conhecer também pelo IGP"
    ],
    "correct": 1,
    "explanation": "A regra antiga evitava blackholes em cores que não corriam BGP em todos os hops. Com MPLS/full-mesh/RR e forwarding por labels ou full BGP, synchronization é obsoleta (no synchronization default).",
    "difficulty": "Médio"
  },
  {
    "question": "Em OSPFv3 com Address Families no IOS-XE, o que permite um único processo?",
    "options": [
      "Apenas transportar rotas estáticas IPv4, sem LSAs nem prefixos OSPF de IPv6 no mesmo processo",
      "Trocar topologia/LSAs para IPv6 e IPv4 sob o mesmo framework OSPFv3, com AF separadas",
      "Substituir totalmente o BGP na Internet, anunciando a tabela global só com LSAs OSPFv3 de uma AF",
      "Desativar o NDP em todos os enlaces IPv6, dispensando o Neighbor Discovery com a AF ipv4 ativa"
    ],
    "correct": 1,
    "explanation": "OSPFv3 AF separa address-family ipv6 e ipv4 unicast. A sessão/adjacência é OSPFv3; os prefixos anunciados dependem da AF ativa.",
    "difficulty": "Difícil"
  },
  {
    "question": "Porque é comum configurar manualmente o router-id em OSPFv3 puro IPv6?",
    "options": [
      "Porque o Router ID OSPF continua a ser um valor de 32 bits e pode não haver interface IPv4 de onde o derivar",
      "Porque o OSPFv3 exige um Router ID IPv6 de 128 bits, copiado do endereço global da própria interface de loopback",
      "Porque o Router ID tem de ser igual ao MAC da interface, em 48 bits, para construir o LSA Type 1",
      "Porque sem router-id o STP não elege root bridge, já que o bridge ID do switch depende desse valor OSPF"
    ],
    "correct": 0,
    "explanation": "Mesmo em IPv6-only, o OSPF Router ID é 32 bits. Sem endereços IPv4, o IOS pode falhar a eleição automática do RID — define-se com router-id A.B.C.D.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em automação de rede Cisco, RESTCONF tipicamente transporta dados YANG sobre o quê?",
    "options": [
      "Só SNMPv1 em UDP/161, com traps e MIBs, sem HTTP nem YANG",
      "HTTP/HTTPS com payloads JSON ou XML modelados em YANG",
      "Telnet sem autenticação na porta 23, em claro e sem YANG",
      "Apenas TFTP em UDP/69, para copiar a config, sem API REST"
    ],
    "correct": 1,
    "explanation": "RESTCONF expõe datastores YANG via HTTP/HTTPS (JSON/XML). NETCONF usa SSH/XML; gNMI é outro caminho. SNMP continua separado para monitorização clássica.",
    "difficulty": "Médio"
  },
  {
    "question": "QoS: numa política com policing a 10 Mbps e tráfego burst muito acima, o que acontece ao excesso tipicamente (sem shaping)?",
    "options": [
      "É sempre colocado numa fila infinita de saída sem perda, como se o policer fosse um shaper que bufferiza todo o excesso",
      "Pode ser dropado ou remarcado conforme a polícia (conform/exceed/violate) — policing não suaviza o burst como o shaping",
      "Converte-se automaticamente em LSAs OSPF Type 1, redistribuindo o burst excedente para o processo de routing",
      "Aumenta o MTU da interface para 9000 bytes, para que o burst caiba num único jumbo frame sem ser dropado"
    ],
    "correct": 1,
    "explanation": "Policing mede a taxa e dropa/remarca excesso; shaping atrasa (bufferiza) para suavizar. Burst grande com police ⇒ drops/remark, não fila infinita.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em arquitetura Zero Trust aplicada a acesso à rede enterprise, qual ideia central é a mais correta?",
    "options": [
      "Nunca confiar por localização: autenticar/autorizar continuamente e segmentar (least privilege), em vez de ‘intranet = confiável’",
      "Confiar automaticamente em qualquer host dentro do perímetro do firewall, tratando a intranet como zona segura sem nova autenticação",
      "Desativar o 802.1X no acesso e usar só hubs, para que qualquer porta partilhe o mesmo domínio de broadcast sem identidade",
      "Substituir o BGP por rotas estáticas em todo o core, eliminando políticas dinâmicas e o plano de controlo entre os routers"
    ],
    "correct": 0,
    "explanation": "Zero Trust remove a confiança implícita pela localização de rede. Exige identidade, política e segmentação contínuas — não ‘tudo atrás do firewall é seguro’.",
    "difficulty": "Médio"
  },
  {
    "question": "SASE (Secure Access Service Edge) combina tipicamente o quê?",
    "options": [
      "Só switching L2 no acesso do campus, com VLANs e trunks 802.1Q, sem SD-WAN nem segurança entregue na cloud",
      "Funções de rede WAN (ex.: SD-WAN) com serviços de segurança entregues preferencialmente na cloud (SSE)",
      "Apenas cabos de fibra monomodo entre filiais, como meio físico, sem funções de WAN nem serviços SSE",
      "Somente Spanning Tree MST no campus, a calcular instâncias e root bridges em vez de SD-WAN e de SSE"
    ],
    "correct": 1,
    "explanation": "SASE une conectividade (muitas vezes SD-WAN) e segurança cloud (SSE: SWG, CASB, ZTNA, etc.). Não é um protocolo STP.",
    "difficulty": "Médio"
  },
  {
    "question": "RRM num WLC Cisco — qual objetivo principal?",
    "options": [
      "Calcular o melhor caminho BGP pelo AS-path, escolhendo a rota de trânsito com menos sistemas autónomos",
      "Substituir o OSPF no core do campus, passando o encaminhamento IP interno para o algoritmo de RRM do WLC",
      "Ajustar dinamicamente canais/potência (e relacionados) dos APs para reduzir interferência e melhorar RF",
      "Cifrar o plano de controlo com MACsec entre routers WAN, protegendo OSPF e BGP no enlace com 802.1AE"
    ],
    "correct": 2,
    "explanation": "Radio Resource Management otimiza RF (canal, TX power, etc.). Não encaminha IP no core nem substitui OSPF/BGP.",
    "difficulty": "Médio"
  },
  {
    "question": "Network assurance no ENCOR: Flexible NetFlow + IP SLA juntos ajudam sobretudo a quê?",
    "options": [
      "Só a configurar EtherChannel LACP no acesso, negociando os bundles e as portas membro sem telemetria de fluxos",
      "Eliminar a necessidade de syslog, porque os registos de eventos passam a ser substituídos só por amostras de NetFlow",
      "Desativar o CoPP no control plane, retirando a política que limita o tráfego destinado ao CPU do router",
      "Visibilidade de fluxos (NetFlow) e testes ativos de desempenho/disponibilidade (IP SLA) para diagnóstico e baseline"
    ],
    "correct": 3,
    "explanation": "NetFlow/FNF = telemetria de fluxos; IP SLA = probes ativos (latência/jitter/reachability). Complementares em assurance; não substituem logging nem CoPP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em OSPF, o LSA tipo 1 descreve:",
    "options": [
      "Rotas externas injetadas por um ASBR como LSA tipo 5",
      "O router e os seus links intra-area",
      "O resumo inter-área anunciado pelo ABR num LSA tipo 3",
      "Um ASBR noutro sistema autónomo, alcançado por LSA tipo 4"
    ],
    "correct": 1,
    "explanation": "LSAs OSPFv2 Type 1 (Router) descrevem os links do router dentro da área e são inundados só nessa área.",
    "difficulty": "Médio"
  },
  {
    "question": "Feasible successor EIGRP exige:",
    "options": [
      "Uma AD maior que a FD do successor, invertendo a condição de viabilidade",
      "Advertised Distance < FD do successor (condicao de viabilidade)",
      "O mesmo sistema autónomo BGP exigido entre os dois vizinhos EIGRP",
      "Um LSA OSPF de tipo 5 externo para esse mesmo prefixo de destino"
    ],
    "correct": 1,
    "explanation": "Feasible successor EIGRP: a advertised distance do vizinho tem de ser menor que a feasible distance do successor (condição de feasibility).",
    "difficulty": "Difícil"
  },
  {
    "question": "VXLAN VNI identifica:",
    "options": [
      "Apenas o ID da VLAN local mapeada no switch de acesso",
      "O segmento overlay (L2/L3) no fabric",
      "O número de sistema autónomo BGP configurado no leaf",
      "A marcação DSCP transportada no cabeçalho IP externo"
    ],
    "correct": 1,
    "explanation": "O VXLAN Network Identifier (VNI) identifica o segmento overlay L2/L3 no fabric—não é só o ID de VLAN local nem um ASN BGP.",
    "difficulty": "Médio"
  },
  {
    "question": "GETVPN (GDOI) e pensado para:",
    "options": [
      "A Internet pública com NAT, que reescreve o IP de origem ao longo do caminho",
      "WAN privada (MPLS) com grupo IPsec e headers originais preservados",
      "Apenas Wi-Fi, sem um overlay IPsec de grupo a proteger a WAN privada",
      "Tráfego IPv6 link-local, confinado ao segmento e nunca encaminhado"
    ],
    "correct": 1,
    "explanation": "GETVPN usa um key server para distribuir chaves; os cabeçalhos IP originais mantêm-se visíveis, o que serve núcleos MPLS que encaminham pelo IP real.",
    "difficulty": "Difícil"
  },
  {
    "question": "QoS LLQ (Low Latency Queue) e tipicamente para:",
    "options": [
      "Backups em massa na fila de baixa prioridade do CBWFQ",
      "Voz/video em tempo real (priority queue)",
      "HTTP best-effort na class-default, sem fila estrita",
      "Só updates de routing, sem voz nem vídeo em tempo real"
    ],
    "correct": 1,
    "explanation": "Numa policy-map, priority ativa LLQ (prioridade estrita) para uma classe e costuma ter policer para a voz não esgotar as outras filas.",
    "difficulty": "Médio"
  },
  {
    "question": "WRED evita:",
    "options": [
      "O blackholing de BGP quando a sessão do vizinho cai e o prefixo sai da Loc-RIB",
      "Tail drop global, descendo probabilistico segundo DSCP antes da fila cheia",
      "Loops de RIP por contagem até ao infinito numa atualização distance-vector",
      "A falha de NTP que deixa os relógios dos routers dessincronizados no domínio"
    ],
    "correct": 1,
    "explanation": "WRED descarta pacotes cedo com limiares por classe/peso para sinalizar congestão TCP antes de a fila fazer tail-drop total.",
    "difficulty": "Difícil"
  },
  {
    "question": "Numa fabric Cisco SD-WAN, o que identifica um TLOC?",
    "options": [
      "Apenas o system-IP do vEdge, omitindo a cor do transporte e o encapsulamento",
      "A combinação de system-IP, cor (color) e encapsulamento (ex.: ipsec/gre)",
      "Apenas o site-ID definido no vManage, sem system-IP, cor nem encapsulamento",
      "O endereço MAC da interface de transporte, em vez de system-IP, cor e encapsulamento"
    ],
    "correct": 1,
    "explanation": "Um TLOC (Transport Locator) é identificado por system-IP + color + encapsulation; é assim que o controlo/ overlay referencia um transport.",
    "difficulty": "Difícil"
  },
  {
    "question": "Numa rede iBGP com route reflectors, qual é o efeito principal de configurar um cliente sob um RR?",
    "options": [
      "O cliente deixa de precisar de quaisquer sessões eBGP com pares externos",
      "O RR pode refletir rotas iBGP entre clientes sem full-mesh iBGP",
      "O RR desativa automaticamente a agregação de rotas no processo BGP",
      "Os clientes passam a preferir sempre as rotas eBGP aprendidas a partir do RR"
    ],
    "correct": 1,
    "explanation": "Route reflectors permitem escalar iBGP: o RR reflete rotas aprendidas de clientes para outros clientes/não-clientes, evitando o full-mesh.",
    "difficulty": "Médio"
  },
  {
    "question": "Como é que LLQ difere de CBWFQ simples para voz em tempo real?",
    "options": [
      "LLQ elimina todo o policing da rede, desligando o policer implícito da classe priority e os shape rates das restantes classes CBWFQ na policy-map de saída",
      "LLQ acrescenta uma fila strict-priority para a voz sair à frente das classes CBWFQ (muitas vezes com policer a limitar a banda priority)",
      "O CBWFQ simples prefere sempre a voz face ao LLQ, despachando a class-default à frente da fila strict-priority mesmo com o enlace de saída congestionado",
      "O LLQ só funciona em Frame Relay, porque a fila strict-priority exige mapas FRTS e não pode ser aplicada em Ethernet nem noutros encapsulamentos de interface"
    ],
    "correct": 1,
    "explanation": "LLQ = CBWFQ mais uma fila priority. Voz/vídeo ficam com baixa latência; um policer na priority evita que a classe priority esgote as outras filas.",
    "difficulty": "Difícil"
  },
  {
    "question": "No Cisco Catalyst Center (DNA Center) Assurance, os client health scores servem sobretudo para:",
    "options": [
      "Substituir automaticamente o OSPF por rotas estáticas no plano de controlo do campus, sem qualquer revisão do operador",
      "Ver problemas de onboarding, conectividade e experiência de aplicações de clientes wired/wireless ao longo do tempo",
      "Desativar os coletores NetFlow que exportam os fluxos de tráfego dos switches de acesso e dos pontos de acesso wireless",
      "Forçar todos os pontos de acesso para Monitor Mode, retirando esses rádios do serviço de clientes wireless"
    ],
    "correct": 1,
    "explanation": "Assurance agrega telemetria (onboarding, RSSI, DHCP/AAA, app experience) em health de cliente/dispositivo para troubleshooting de tendências e falhas — não para reescrever routing.",
    "difficulty": "Médio"
  },
  {
    "question": "A Model-Driven Telemetry (MDT) com gRPC/dial-out é preferida ao polling SNMP clássico principalmente porque:",
    "options": [
      "Faz stream contínuo (push) de dados modelados em YANG subscritos, com menos overhead e updates estruturados mais ricos do que SNMP GETs repetidos",
      "Só funciona em interfaces Frame Relay, porque o dial-out gRPC exige DLCI e LMI para exportar modelos YANG em vez de correr sobre Ethernet ou IP",
      "Substitui o BGP no control plane por notificações YANG, deixando de anunciar prefixos e passando a usar só subscriptions gRPC como protocolo de routing",
      "Elimina a necessidade de qualquer collector ou subscription, publicando a telemetria YANG em broadcast local sem destino gRPC dial-out nem modelo subscrito"
    ],
    "correct": 0,
    "explanation": "MDT usa modelos YANG e subscriptions (muitas vezes gRPC dial-out ou dial-in) para enviar telemetria aos collectors. Face ao polling SNMP, há updates contínuos e estruturados, com menos chatter e melhor escala para assurance moderna.",
    "difficulty": "Difícil"
  },
  {
    "question": "O IEEE 802.11ax (Wi-Fi 6) melhora a eficiência WLAN em alta densidade principalmente com:",
    "options": [
      "Desativar canais DFS em todos os domínios regulatórios, retirando o espectro dinâmico de 5 GHz para servir clientes sem agendamento de airtime",
      "Substituir o CAPWAP apenas por bridging Layer-2 simples entre o AP e o WLC, eliminando o túnel de controlo e de dados da WLAN centralizada",
      "OFDMA, melhorias MU-MIMO, BSS coloring e Target Wake Time para servir mais clientes com menos contenção de airtime",
      "Exigir encriptação WEP obrigatória em todos os SSIDs, com chaves RC4 partilhadas, como método para reduzir contenção de airtime na WLAN densa"
    ],
    "correct": 2,
    "explanation": "802.11ax foca eficiência em ambientes densos: OFDMA agenda resource units multi-utilizador, MU-MIMO melhorado, BSS coloring reduz impacto de interferência co-canal e TWT poupa energia nos clientes. Não é abandonar CAPWAP nem usar WEP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a principal razão operacional para usar ERSPAN em vez de SPAN local?",
    "options": [
      "Encapsular o tráfego espelhado em GRE e enviá-lo pela rede IP até um analisador remoto",
      "Encriptar o plano de controlo com IPsec por omissão, protegendo BPDUs e adjacências em vez das cópias",
      "Substituir a amostragem NetFlow por completo, sem exportar fluxos e usando o espelho como contabilidade",
      "Desativar o STP na VLAN monitorizada, parando as BPDUs dessa VLAN antes de as copiar para o analisador"
    ],
    "correct": 0,
    "explanation": "ERSPAN (Encapsulated Remote SPAN) encapsula frames espelhados em GRE para um analisador central receber cópias de switches noutros pontos do fabric IP. SPAN local fica no mesmo switch; RSPAN usa uma VLAN.",
    "difficulty": "Difícil"
  },
  {
    "question": "No FlexConnect wireless Cisco, o que consegue o local switching num AP de branch remoto?",
    "options": [
      "Obriga todos os frames do utilizador a regressar ao WLC pelo túnel CAPWAP de dados antes de poderem sair na LAN local do branch",
      "Desativa todos os SSIDs do AP assim que o túnel CAPWAP cai, mesmo com switching e autenticação locais já configurados no branch",
      "Faz bridge do tráfego de cliente para a VLAN wired local no AP (quando configurado), mesmo com caminho ao WLC limitado",
      "Converte o AP remoto num route reflector BGP completo, refletindo as rotas iBGP do branch para cada cliente wireless associado"
    ],
    "correct": 2,
    "explanation": "FlexConnect (H-REAP) com local switching deixa o AP fazer bridge do tráfego de cliente para uma VLAN local do branch, evitando hairpin no WAN até ao controller. Central switching envia os dados ao WLC; há opções locais para falha de WAN.",
    "difficulty": "Difícil"
  },
  {
    "question": "Contra o que protege o IPv6 RA Guard num switch de acesso?",
    "options": [
      "Bloqueia para sempre todo o tráfego IPv6 na porta de acesso, permitindo apenas DHCPv6 e descartando dados, ND e mensagens SLAAC",
      "Filtra Router Advertisements rogue nas portas de acesso para só portas trusted poderem anunciar prefixos/gateways",
      "Substitui o SLAAC por endereçamento estático obrigatório em todos os hosts, recusando Router Advertisements legítimos nas portas trusted",
      "Encripta automaticamente o Neighbor Discovery com IPsec em cada porta de acesso, cifrando RS, RA, NS e NA sem filtrar anúncios rogue"
    ],
    "correct": 1,
    "explanation": "O RA Guard (IPv6 First Hop Security) descarta Router Advertisements inesperados em portas de acesso untrusted, impedindo dispositivos rogue de anunciar prefixos ou gateways falsos. Portas trusted (uplink/router) podem enviar RAs. Complementa DHCPv6 Guard e ND inspection.",
    "difficulty": "Difícil"
  },
  {
    "question": "No Cisco SD-WAN, qual é o papel principal do orquestrador vBond?",
    "options": [
      "É o único que reencaminha todos os pacotes de dados do utilizador no underlay, em vez dos edges falarem entre si",
      "Substitui todos os routers de edge WAN por bridges de Camada 2, eliminando OMP, TLOCs e o overlay entre sites",
      "Só guarda registos NetFlow dos WAN Edges para compliance, sem autenticar equipamentos nem fazer onboarding",
      "Autentica e apresenta os WAN Edge ao overlay (vSmart/vManage), permitindo o onboarding seguro"
    ],
    "correct": 3,
    "explanation": "O vBond é o orquestrador: os WAN Edges autenticam-se primeiro nele; depois o vBond indica como chegar ao vSmart (controlo) e ao vManage (gestão). O data plane fica entre edges (muitas vezes com IPsec); o vSmart distribui política de controlo via OMP. O vBond é crítico no bring-up zero-touch e na ajuda com NAT.",
    "difficulty": "Difícil"
  },
  {
    "question": "No Cisco ACI, o que é um Endpoint Group (EPG)?",
    "options": [
      "Um grupo de endpoints (VMs, bare metal, contentores, etc.) que partilham o mesmo tratamento de política—tipicamente mapeados a um segmento VLAN/VXLAN dentro de um Bridge Domain",
      "O switch spine físico que substitui o cluster de controladores APIC, assumindo sozinho a gestão do fabric e a programação da política de todos os tenants e aplicações",
      "Uma community BGP que o ACI copia sem alterações para todos os WAN edges, marcando as rotas do L3Out em vez de agrupar endpoints que devem receber o mesmo tratamento de política",
      "Um template de sampler NetFlow guardado só no border leaf, usado para exportar fluxos do L3Out e não para reunir VMs, bare metal ou contentores sob a mesma política"
    ],
    "correct": 0,
    "explanation": "Um EPG é o objeto de política fundamental para endpoints que devem ser tratados da mesma forma. Os endpoints de um EPG ficam sob um Bridge Domain (e hierarquia VRF/tenant). A comunicação entre EPGs controla-se com contracts (provided/consumed), não só por partilharem um BD. O APIC continua a ser o controlador; os spines são underlay do fabric, não EPGs.",
    "difficulty": "Difícil"
  },
  {
    "question": "No Cisco ACI, como é que dois EPGs comunicam normalmente de forma segura e orientada a políticas?",
    "options": [
      "Inundam sempre todo o tráfego no underlay, sem filters nem contracts, assim que os dois EPGs partilham apenas o nome do mesmo tenant no fabric",
      "Só se ambos os EPGs forem configurados como vizinhos OSPF no mesmo loopback, trocando LSAs de rede em vez de usar contracts, subjects e filters",
      "Através de contracts: um EPG fornece (provides) um contract e o outro consome-o (consumes), permitindo tráfego específico (filters) entre eles",
      "Ativando o Root Guard PVST+ clássico em todos os downlinks dos leafs, para a eleição STP abrir o tráfego entre EPGs sem qualquer contract"
    ],
    "correct": 2,
    "explanation": "O ACI usa um modelo de whitelist entre EPGs: os contracts definem que tráfego é permitido (filters/subjects). Um EPG provider oferece o contract; um consumer consome-o. Partilhar só um Bridge Domain não abre acesso East-West arbitrário. É política application-centric, não só ACLs de VLAN clássicas nem funcionalidades de STP.",
    "difficulty": "Difícil"
  },
  {
    "question": "No Cisco ACI, de que é que um Bridge Domain (BD) é principalmente responsável?",
    "options": [
      "Ser o constructo de encaminhamento L2 (âmbito de broadcast/unknown unicast/multicast) ao qual os EPGs se ligam, muitas vezes com subnet/gateway SVI",
      "Terminar todas as sessões BGP apenas com peers SPINE externos, tratando o Bridge Domain como um AS de trânsito que anuncia rotas fora do fabric ACI",
      "Substituir o cluster de controladores APIC por um único leaf switch, que passa a ser o único ponto de gestão do fabric, do tenant e dos EPGs",
      "Cifrar os contracts do tenant com WPA3-Personal, aplicando SAE em cada Bridge Domain para proteger o tráfego East-West entre os EPGs ligados"
    ],
    "correct": 0,
    "explanation": "O Bridge Domain é o constructo de Camada 2 no ACI: âmbito de flooding, muitas vezes com a subnet/gateway dos EPGs ligados. Os EPGs classificam endpoints; os contracts controlam a política entre EPGs; os VRFs separam contextos L3. O BD não é o APIC, não é só peering BGP nos spines e não é uma cifra wireless.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve o Guest Shell no Cisco IOS XE?",
    "options": [
      "Uma substituição da TCAM de hardware em todos os switches Catalyst, passando o encaminhamento de pacotes a depender só de scripts Python no contentor",
      "Um SSID wireless definido no IOS XE que desativa permanentemente o 802.1X e deixa a WLAN aberta, sem contentor Linux nem execução de Python",
      "Um ambiente contentor Linux/CentOS no equipamento para correr scripts Python, pacotes yum e ferramentas de automação em paralelo com o IOS XE",
      "Uma community BGP configurada no IOS XE que define sempre a Local Preference a 0 nas rotas aprendidas, sem correr scripts Python nem pacotes yum"
    ],
    "correct": 2,
    "explanation": "O Guest Shell é um contentor Linux on-box (muitas vezes baseado em CentOS) no IOS XE onde podes correr Python, instalar pacotes e usar comandos guestshell/run para automação sem sair do equipamento. Complementa EEM/Python on-box, mas não substitui a TCAM, não redefine SSIDs nem define communities BGP por si.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que se usa principalmente o Cisco pyATS na automatização e operação de redes?",
    "options": [
      "Como framework Python de testes e validação (muitas vezes com Genie) para interpretar o estado dos equipamentos, correr verificações e regredir alterações de rede com segurança",
      "Substituir o IGP do underlay por um protocolo de routing proprietário só em Python em todos os PE, retirando OSPF, IS-IS e BGP de cada router de borda do fabric antes da convergência",
      "Como o único GUI suportado para configurar contracts, EPGs, filters e tenants ACI dentro do APIC, publicando a política do fabric em vez de correr testes",
      "Como substituto do RADIUS na autenticação 802.1X em wireless, validando o EAP do cliente, o certificado do supplicant e a VLAN atribuída ao SSID"
    ],
    "correct": 0,
    "explanation": "O pyATS (muitas vezes com parsers/modelos Genie) é o framework Python da Cisco para testes automatizados de rede: ligar a dispositivos, capturar/interpretar estado operacional, fazer diff before/after e construir suites reutilizáveis para CI/CD ou janelas de mudança. Não é um protocolo de routing, não é o GUI de contracts ACI, nem substitui RADIUS/802.1X.",
    "difficulty": "Médio"
  },
  {
    "question": "No Cisco ISE, o que é que uma avaliação de posture (posture assessment) tipicamente verifica antes (ou como parte) de conceder acesso total à rede?",
    "options": [
      "Apenas se a porta do switch está em err-disable por causa do BPDU Guard, tratando esse estado da porta como o único critério de posture antes de autorizar a VLAN de acesso completa ao endpoint, sem olhar para o antivírus ou os patches do SO",
      "Apenas o area ID OSPF configurado no portátil do utilizador, como se a conformidade de posture dependesse do processo de routing do endpoint e não do antivírus, dos patches ou da encriptação",
      "Se o endpoint cumpre a política de segurança (por exemplo estado do antivírus, nível de patches do SO, encriptação de disco ou um agente obrigatório), para dispositivos não conformes poderem ser colocados em quarentena ou remediação",
      "Se o nome do SSID está escondido, o que por si só prova que o cliente é de confiança, dispensando antivírus, patches do SO, encriptação de disco, firewall local e qualquer agente de posture"
    ],
    "correct": 2,
    "explanation": "A posture do ISE avalia a saúde/conformidade do endpoint que se liga (via módulo de posture do AnyConnect/secure client ou similar) face à política—AV, patches, firewall, encriptação, etc. Hosts não conformes podem receber VLAN/ACL restrita e portal de remediação. Não tem a ver com err-disable por BPDU Guard, area IDs OSPF em portáteis, nem com esconder o SSID.",
    "difficulty": "Médio"
  },
  {
    "question": "No Cisco SD-Access, qual é o papel principal do Control Plane Node?",
    "options": [
      "Termina todo o DHCP e NAT de utilizadores de cada edge switch apenas em hardware, sem alojar o LISP Map-Server nem resolver mapeamentos EID-to-RLOC no fabric",
      "Aloja a função LISP Map-Server/Map-Resolver: os edge nodes registam mapeamentos EID-to-RLOC dos endpoints e consultam o control plane para localizar destinos no fabric",
      "Substitui o Spanning Tree inundando cada MAC desconhecido para todo o underlay, em vez de os edge nodes consultarem o control plane LISP para localizar destinos no fabric",
      "É apenas uma GUI de gestão e nunca participa no data nem no control plane, deixando o registo e a resolução EID-to-RLOC inteiramente ao Catalyst Center"
    ],
    "correct": 1,
    "explanation": "O SD-Access usa LISP no control plane do fabric. Os Control Plane Nodes atuam como Map-Server/Map-Resolver: os edge registam EIDs (endpoints) para RLOCs (locators edge/border) e resolvem EIDs remotos antes do encapsulamento VXLAN. Não são appliances de DHCP/NAT, não inundam MACs desconhecidos como Ethernet clássico, e não são só uma GUI (o Catalyst Center/DNA Center é o orquestrador).",
    "difficulty": "Difícil"
  },
  {
    "question": "Num zone-based policy firewall (ZBFW) Cisco IOS, como é controlado o tráfego entre interfaces?",
    "options": [
      "Todas as interfaces têm de estar na VLAN 1, e as ACLs nas linhas VTY filtram o tráfego de trânsito, sem atribuir security zones nem aplicar zone-pairs com policy-maps de inspeção, como se o firewall zonal não existisse no IOS",
      "O ZBFW só inspeciona joins PIM multicast e ignora unicast TCP/UDP, pelo que sessões entre a zone inside e a zone outside não são classificadas, permitidas nem inspecionadas, mesmo com a política de inspect ativa",
      "Configura-se só ip inspect CBAC globalmente; as zones são ignoradas quando o NAT está ativo, e nenhum zone-pair com class-map controla o tráfego entre as interfaces de origem e de destino",
      "As interfaces são atribuídas a security zones; um zone-pair com policy-map (class-maps) define o que é inspecionado/permitido entre a zone de origem e a de destino (tráfego intra-zone tipicamente permitido por omissão)"
    ],
    "correct": 3,
    "explanation": "O ZBFW agrupa interfaces em zones. Tráfego inter-zone exige um zone-pair explícito e uma policy (class-map/policy-map) que permite/inspeciona fluxos da zone origem para a destino. Tráfego na mesma zone costuma ser permitido sem zone-pair. Não se limita a PIM, não depende de ACLs VTY para forwarding de trânsito, e distingue-se de desenhos só com CBAC clássico por interface.",
    "difficulty": "Médio"
  },
  {
    "question": "Num ambiente Cisco ISE / RADIUS, para que serve o Change of Authorization (CoA)?",
    "options": [
      "Substituir permanentemente o TACACS+ pelo RADIUS em todos os logins CLI dos equipamentos, usando o CoA como único método de autenticação e de autorização de administradores através do servidor ISE",
      "Descarregar a imagem IOS do switch por TFTP após cada sessão 802.1X bem-sucedida, tratando o CoA como o mecanismo de upgrade de software do NAD e não de autorização",
      "Permitir que o servidor de políticas envie uma atualização a uma sessão já autenticada (por exemplo reautenticar, terminar, ou mudar VLAN/ACL/SGT) sem esperar pelo próximo login do cliente",
      "Eleger a root bridge do STP com base no shared secret do RADIUS, fazendo do CoA o critério de prioridade de bridge e de custo de caminho no domínio L2 do switch de acesso"
    ],
    "correct": 2,
    "explanation": "O CoA (autorização dinâmica RFC 5176) permite ao ISE/RADIUS enviar mensagens não solicitadas ao NAD para que uma sessão ativa seja reautenticada, desligada ou receba um novo resultado de autorização (VLAN, dACL, SGT, etc.). Não é uma política de substituição do TACACS, não descarrega imagens IOS e não tem relação com a eleição da root STP.",
    "difficulty": "Médio"
  },
  {
    "question": "Que problema é que o Cisco OTV (Overlay Transport Virtualization) resolve principalmente?",
    "options": [
      "Estender VLANs / segmentos Ethernet de Camada 2 através de um DCI de Camada 3, contendo o STP e reduzindo flooding face a um stretch L2 ingénuo",
      "Substituir o BGP por um IGP underlay proprietário só Cisco no core da Internet, em vez de estender VLANs de Camada 2 sobre um DCI IP",
      "Fornecer Power over Ethernet a servidores numa fabric leaf-spine, alimentando hosts em vez de estender segmentos Ethernet através do DCI de Camada 3",
      "Cifrar consultas DNS entre resolvers recursivos e servidores autoritativos, sem estender VLANs nem conter os domínios STP no DCI"
    ],
    "correct": 0,
    "explanation": "O OTV é um overlay de encaminhamento MAC usado para estender VLANs entre data centers sobre transporte IP, com mecanismos que ajudam a conter domínios STP e a controlar flooding ARP/unknown unicast face a um link L2 esticado simples. Não é um IGP underlay da Internet, não é PoE e não cifra DNS.",
    "difficulty": "Médio"
  },
  {
    "question": "No BGP, o que permite principalmente o Graceful Restart (muitas vezes associado a NSF nas plataformas Cisco) durante um restart do plano de controlo?",
    "options": [
      "Converter automaticamente todas as sessões eBGP em iBGP para remover o número de AS, em vez de preservar a FIB e as rotas stale durante o restart do plano de controlo do BGP",
      "Preservar o forwarding (FIB) e pedir aos peers que mantenham rotas marcadas como stale até o speaker em restart recuperar e atualizar o RIB, reduzindo perda de tráfego",
      "Forçar cada peer a limpar toda a tabela BGP e reconvergir do zero por consistência, descartando as rotas marcadas stale e o forwarding já instalado na FIB",
      "Substituir o keepalive TCP por deteção só com BFD e apagar todos os labels MPLS, em vez de manter o forwarding enquanto o speaker em restart recupera o RIB"
    ],
    "correct": 1,
    "explanation": "O BGP Graceful Restart / NSF mantém o plano de dados a fazer forwarding enquanto o plano de controlo reinicia. Os peers retêm rotas stale durante um timer de restart; após a recuperação, End-of-RIB e updates refrescam o estado. Não converte eBGP em iBGP, e o objetivo é evitar uma tempestade destrutiva de reconvergência, não forçá-la.",
    "difficulty": "Hard"
  },
  {
    "question": "Numa implementação Cisco Secure Firewall (antigo Firepower), qual é o papel principal do FMC (Firewall Management Center)?",
    "options": [
      "Servir de default gateway e fronteira NAT de todas as VLANs de acesso no campus, encaminhando o tráfego de utilizador em vez de publicar políticas nos sensores Firepower",
      "Terminar todos os túneis IPsec site-to-site para os sensores de ameaças nunca verem tráfego encriptado, atuando como hub de VPN obrigatório de cada peer remoto",
      "Substituir o ISE na autenticação 802.1X das portas de acesso dos switches, emitindo VLAN, dACL e SGT no lugar do servidor de políticas",
      "Gestão centralizada de políticas, eventos e dispositivos dos sensores Secure Firewall / threat defense geridos (publicar políticas, recolher eventos, coordenar updates)"
    ],
    "correct": 3,
    "explanation": "O FMC é o gestor: cria e publica políticas de access control / intrusion / malware, inventaria dispositivos e agrega eventos/saúde. Os sensores (FTD/Secure Firewall) ficam no caminho de dados. O FMC não é o default gateway do campus, não é um hub IPsec obrigatório para todos os túneis, e não substitui o ISE no 802.1X das portas de switch.",
    "difficulty": "Medium"
  },
  {
    "question": "Num fabric VXLAN, o que representam um VTEP e um VNI?",
    "options": [
      "O VTEP é o endpoint do túnel VXLAN que encapsula/desencapsula tramas; o VNI (VXLAN Network Identifier) é o ID de segmento de 24 bits que separa redes Layer 2 do overlay",
      "O VTEP é apenas um endereço de grupo multicast, e o VNI é o process ID OSPF do underlay, sem encapsular tramas Ethernet nem separar segmentos do overlay de Camada 2 EVPN",
      "O VNI é o número de série físico do switch, e o VTEP é um shared secret RADIUS, sem papel de endpoint de túnel VXLAN nem de identificador de segmento",
      "Ambos os termos significam a mesma coisa: a porta UDP de destino exterior 4789, sem distinguir o endpoint que encapsula do identificador de 24 bits"
    ],
    "correct": 0,
    "explanation": "Um VTEP (VXLAN Tunnel Endpoint) fica na borda do overlay — muitas vezes num leaf ou hipervisor — e faz encapsulação/desencapsulação VXLAN. O VNI é um identificador de 24 bits que distingue segmentos do overlay (papel análogo a um VLAN ID, com espaço muito maior). Multicast/routing do underlay pode ajudar na replicação BUM, mas isso não é a definição de VTEP nem de VNI; nenhum é número de série, segredo RADIUS, ou apenas UDP/4789.",
    "difficulty": "Medium"
  },
  {
    "question": "No Cisco SD-WAN (arquitetura Viptela), que trio de papéis corresponde melhor a vManage, vSmart e vBond?",
    "options": [
      "vManage = ASIC de encaminhamento data-plane em cada WAN Edge; vSmart = servidor DHCP do underlay para os túneis IPsec; vBond = wireless controller do campus para os APs, sem UI de gestão, sem políticas OMP e sem onboarding dos WAN Edge",
      "vManage = só o IGP do underlay (OSPF ou BGP) entre transportos; vSmart = gateway NAT de saída de cada site; vBond = coletor syslog dos edges e dos controladores, sem orquestração central, sem routing OMP do overlay e sem autenticação inicial",
      "vManage = gestão/orquestração centralizada (UI e config); vSmart = plano de controlo, políticas e inteligência de routing do overlay; vBond = facilitador inicial de autenticação/orquestração que ajuda a integrar dispositivos no overlay",
      "Os três appliances encaminham pacotes de utilizador no data plane de cada site e nunca participam no controlo ou na gestão, deixando políticas centralizadas, templates de dispositivo e o onboarding seguro aos routers WAN Edge"
    ],
    "correct": 2,
    "explanation": "No split clássico de controladores Cisco SD-WAN: o vManage é o sistema de gestão/orquestração (GUI, templates, monitorização); o vSmart trata da inteligência de controlo do overlay e políticas centralizadas; o vBond ajuda no onboarding/autenticação segura dos WAN Edge e a apontá-los para o resto do fabric. Os routers Edge (vEdge/cEdge) levam o data plane — não os três controladores como forwarders de pacotes.",
    "difficulty": "Medium"
  },
  {
    "question": "No Cisco IOS/IOS XE, para que se usa mais frequentemente um route map?",
    "options": [
      "Corresponder rotas ou tráfego com condições (prefix lists, ACLs, métricas, tags, etc.) e depois aplicar ações set — por exemplo em redistribuição, PBR ou manipulação de atributos BGP",
      "Substituir completamente a FIB por uma lista estática de endereços MAC aprendidos de vizinhos CDP, usada pelo data plane para encaminhar quadros no lugar da tabela CEF",
      "Terminar sessões SSL/TLS no route processor para que todos os pacotes sejam desencriptados em software no próprio RP, antes de qualquer lookup na CEF ou de programar a adjacência de saída",
      "Eleger o Designated Router OSPF em segmentos broadcast quando os hello timers diferem, escolhendo o vizinho cujo dead interval anunciado no pacote hello é o maior"
    ],
    "correct": 0,
    "explanation": "Um route map é uma lista sequenciada de cláusulas match/set. Usa-se muito para controlar redistribuição (que prefixos, com que métrica/tag), policy-based routing e alterações de atributos BGP. Não substitui a FIB/MAC, não é offload SSL no RP, e não é o mecanismo de eleição do DR no OSPF.",
    "difficulty": "Medium"
  }
];
