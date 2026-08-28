window.QUIZ_BANK = [
  {
    "question": "Qual é a principal diferença entre OSPFv2 e OSPFv3?",
    "options": [
      "OSPFv3 suporta apenas IPv4",
      "OSPFv3 é projetado para IPv6 e usa endereços link-local para adjacências",
      "Não há diferença",
      "OSPFv3 é mais lento"
    ],
    "correct": 1,
    "explanation": "OSPFv3 foi redesenhado para IPv6, usa endereços link-local para formar adjacências e suporta múltiplos endereços por interface.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'BGP route reflector' e qual sua função?",
    "options": [
      "Dispositivo que reflete rotas BGP para reduzir sessões full-mesh",
      "Tipo de firewall",
      "Protocolo de backup",
      "Servidor DNS"
    ],
    "correct": 0,
    "explanation": "Route Reflector permite que um router reflita rotas BGP aprendidas de um cliente para outros clientes, reduzindo o número de sessões IBGP necessárias.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'EIGRP named mode'?",
    "options": [
      "Modo legado de configuração",
      "Modo moderno que permite configuração hierárquica e named EIGRP para múltiplas instâncias",
      "Tipo de ACL",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "EIGRP named mode permite configuração mais organizada, suporte a múltiplas instâncias e recursos avançados como wide metrics.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'SD-WAN' e como difere de WAN tradicional?",
    "options": [
      "Mesma coisa que MPLS",
      "Abordagem baseada em software para gerenciamento de WAN com overlay inteligente, zero-touch provisioning e otimização de tráfego",
      "Tipo de switch",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "SD-WAN usa overlay inteligente sobre qualquer underlay (MPLS, internet, LTE), com gerenciamento centralizado e políticas baseadas em aplicação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco DNA Center'?",
    "options": [
      "Gerenciamento tradicional de dispositivos",
      "Plataforma de automação e gerenciamento de rede baseada em intenção com analytics e assurance",
      "Tipo de router",
      "Servidor DHCP"
    ],
    "correct": 1,
    "explanation": "DNA Center fornece automação baseada em intenção, descoberta automática, políticas e analytics para redes enterprise.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'FlexVPN'?",
    "options": [
      "VPN estática",
      "Framework flexível baseado em IKEv2 para VPNs site-to-site e remote access com alta escalabilidade",
      "Tipo de firewall",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "FlexVPN é uma solução baseada em IKEv2 que unifica diferentes tipos de VPN em uma única configuração flexível.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'PIM-SM' e 'PIM-DM'?",
    "options": [
      "PIM-SM é dense mode, PIM-DM é sparse mode",
      "PIM-SM usa rendezvous point e é eficiente para grupos esparsos, PIM-DM inunda e poda",
      "Não há diferença",
      "PIM-DM é mais seguro"
    ],
    "correct": 1,
    "explanation": "PIM-SM (Sparse Mode) usa RP e é eficiente para poucos receptores. PIM-DM (Dense Mode) inunda a rede e poda branches sem receptores.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'EVPN' (Ethernet VPN) em ambientes VXLAN?",
    "options": [
      "Tipo de VLAN",
      "Tecnologia de controle plano para VXLAN que usa BGP para distribuir informações de MAC/IP",
      "Protocolo de encaminhamento",
      "Tipo de switch"
    ],
    "correct": 1,
    "explanation": "EVPN usa BGP como control plane para VXLAN, permitindo distribuição eficiente de MACs, IPs e informações de VTEP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'NetFlow' e 'Flexible NetFlow'?",
    "options": [
      "Protocolo de encaminhamento",
      "Tecnologia de monitoramento de fluxo de tráfego para análise, billing e segurança",
      "Tipo de ACL",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "NetFlow coleta dados de fluxo para análise de tráfego, detecção de anomalias e planejamento de rede.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco TrustSec' e 'SGT'?",
    "options": [
      "Protocolo de criptografia",
      "Arquitetura de segurança baseada em tags (Security Group Tags) para controle de acesso baseado em identidade",
      "Tipo de firewall",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "TrustSec usa SGTs (Security Group Tags) para classificar tráfego e aplicar políticas de acesso baseadas em identidade, independentemente de IP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'IPsec' em VPNs?",
    "options": [
      "Criptografar tráfego em nível de aplicação",
      "Fornecer segurança em nível de rede (confidencialidade, integridade, autenticação) para VPNs",
      "Tipo de encaminhamento",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "IPsec opera na camada de rede, fornecendo criptografia, autenticação e integridade para túneis VPN.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'AnyConnect' da Cisco?",
    "options": [
      "Protocolo de encaminhamento",
      "Cliente VPN remoto seguro com suporte a SSL/TLS e IPsec",
      "Tipo de switch",
      "Servidor DHCP"
    ],
    "correct": 1,
    "explanation": "Cisco AnyConnect é o cliente VPN moderno que suporta SSL VPN e IPsec com recursos avançados de mobilidade.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Wireless LAN Controller (WLC)'?",
    "options": [
      "Router wireless",
      "Dispositivo centralizado que gerencia múltiplos Access Points, roaming, segurança e RF",
      "Tipo de switch",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "WLC centraliza o gerenciamento de APs, permite roaming rápido, políticas de segurança e otimização de RF.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'CAPWAP'?",
    "options": [
      "Protocolo de encaminhamento",
      "Protocolo usado por WLC para controlar e gerenciar Access Points (substitui LWAPP)",
      "Tipo de VLAN",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "CAPWAP (Control and Provisioning of Wireless Access Points) é o protocolo padrão para comunicação entre WLC e APs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco ISE' (Identity Services Engine)?",
    "options": [
      "Servidor DHCP",
      "Plataforma centralizada de controle de acesso baseado em identidade, 802.1X, profiling e políticas",
      "Tipo de router",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "ISE fornece NAC (Network Access Control), 802.1X, guest access, profiling de dispositivos e políticas dinâmicas.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'SD-Access' da Cisco?",
    "options": [
      "Acesso tradicional",
      "Arquitetura de rede definida por software com fabric overlay, underlay e políticas baseadas em identidade",
      "Tipo de switch",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "SD-Access cria uma fabric de rede com overlay VXLAN/EVPN, underlay automatizado e políticas baseadas em SGT.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'RESTCONF' e 'NETCONF'?",
    "options": [
      "Protocolos de encaminhamento",
      "APIs e protocolos para automação e configuração programática de dispositivos de rede",
      "Tipo de firewall",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "NETCONF/RESTCONF permitem configuração e gerenciamento programático de dispositivos usando YANG models.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Ansible' na automação de rede Cisco?",
    "options": [
      "Linguagem de programação",
      "Ferramenta de automação agentless que usa playbooks YAML para configurar dispositivos via SSH/NETCONF",
      "Tipo de switch",
      "Protocolo de VPN"
    ],
    "correct": 1,
    "explanation": "Ansible é uma ferramenta open-source agentless que usa playbooks para automatizar configuração de rede de forma idempotente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre 'PBR' (Policy Based Routing) e encaminhamento normal?",
    "options": [
      "PBR é mais rápido",
      "PBR permite rotear tráfego com base em políticas (ACL, QoS, aplicação) em vez de apenas destino",
      "Não há diferença",
      "PBR é menos seguro"
    ],
    "correct": 1,
    "explanation": "PBR permite decisões de encaminhamento baseadas em critérios além do IP de destino, como origem, aplicação ou marcação.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'MPLS L3 VPN'?",
    "options": [
      "VPN ponto a ponto",
      "Tecnologia que permite múltiplos clientes compartilharem infraestrutura MPLS com isolamento de rotas via VRF",
      "Tipo de switch",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "MPLS L3 VPN usa VRFs no PE para isolar rotas de diferentes clientes enquanto compartilham a infraestrutura MPLS.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'BFD' (Bidirectional Forwarding Detection)?",
    "options": [
      "Protocolo de encaminhamento",
      "Mecanismo rápido de detecção de falhas em links para acelerar convergência de protocolos de encaminhamento",
      "Tipo de ACL",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "BFD fornece detecção de falhas em milissegundos, permitindo que protocolos de encaminhamento reajam muito mais rápido.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Umbrella'?",
    "options": [
      "Firewall local",
      "Serviço de segurança na nuvem que bloqueia domínios maliciosos, C2 e phishing via DNS",
      "Tipo de router",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "Umbrella é um serviço DNS security na nuvem que bloqueia ameaças antes que cheguem à rede.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Stealthwatch' (agora Secure Network Analytics)?",
    "options": [
      "Antivírus",
      "Solução de Network Detection and Response (NDR) que usa machine learning para detectar ameaças e anomalias",
      "Tipo de switch",
      "Servidor DHCP"
    ],
    "correct": 1,
    "explanation": "Stealthwatch analisa fluxo de rede para detectar comportamentos anormais e ameaças avançadas.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Secure Firewall' (antigo Firepower)?",
    "options": [
      "Router simples",
      "Next-Generation Firewall (NGFW) com IPS, URL filtering, malware protection e integração com ISE",
      "Tipo de switch",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "Secure Firewall é um NGFW com inspeção profunda, IPS, controle de aplicações e integração com outras soluções de segurança Cisco.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do ' ThousandEyes'?",
    "options": [
      "Monitoramento local",
      "Plataforma de observabilidade de internet que monitora performance de aplicações e rede de ponta a ponta",
      "Tipo de firewall",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "ThousandEyes fornece visibilidade de ponta a ponta da experiência do usuário e performance de rede/internet.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Intent-Based Networking'?",
    "options": [
      "Rede tradicional",
      "Abordagem onde você define o 'o que' (intenção) e a rede automaticamente configura o 'como'",
      "Tipo de switch",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "Intent-Based Networking permite que administradores declarem intenções de negócio e a rede traduza automaticamente em políticas e configurações.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco DNA Assurance'?",
    "options": [
      "Backup de configuração",
      "Analytics e troubleshooting proativo com machine learning e telemetria em tempo real",
      "Tipo de router",
      "Servidor DNS"
    ],
    "correct": 1,
    "explanation": "DNA Assurance usa telemetria, ML e analytics para identificar problemas antes que afetem usuários e sugerir correções.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Zero Trust Security' na arquitetura Cisco?",
    "options": [
      "Confiar em todos os dispositivos internos",
      "Nunca confiar, sempre verificar - microsegmentação, identidade contínua e menor privilégio",
      "Tipo de firewall",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "Zero Trust assume que nada é confiável por padrão e aplica verificação contínua, microsegmentação e políticas de menor privilégio.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'underlay' e 'overlay' em SD-WAN/SD-Access?",
    "options": [
      "Underlay é o overlay físico",
      "Underlay é a infraestrutura física (MPLS, internet), overlay é a rede virtual (VXLAN, DMVPN) construída sobre ela",
      "Não há diferença",
      "Overlay é mais lento"
    ],
    "correct": 1,
    "explanation": "Underlay = rede física subjacente. Overlay = rede virtual lógica construída sobre o underlay para abstração e serviços.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco vManage' em SD-WAN?",
    "options": [
      "Router físico",
      "Controlador centralizado de gerenciamento, políticas e orquestração de toda a solução SD-WAN",
      "Tipo de switch",
      "Servidor DHCP"
    ],
    "correct": 1,
    "explanation": "vManage é o painel centralizado para gerenciamento, configuração, políticas e monitoramento de toda a fabric SD-WAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'AppQoE' em SD-WAN?",
    "options": [
      "Firewall",
      "Otimização de aplicação com reconhecimento de aplicação, QoS inteligente e correção de perda de pacotes",
      "Tipo de router",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "AppQoE fornece otimização de performance de aplicações com reconhecimento de aplicação e técnicas de correção.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Umbrella SIG'?",
    "options": [
      "Firewall local",
      "Secure Internet Gateway na nuvem que combina DNS security, firewall, CASB e DLP",
      "Tipo de switch",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "Umbrella SIG é um gateway de internet seguro na nuvem que protege usuários remotos e locais.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Access'?",
    "options": [
      "VPN tradicional",
      "Solução SASE (Secure Access Service Edge) que combina networking e segurança na nuvem",
      "Tipo de router",
      "Servidor DNS"
    ],
    "correct": 1,
    "explanation": "Secure Access é a solução SASE da Cisco que fornece acesso seguro a qualquer aplicação de qualquer lugar.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco XDR' (Extended Detection and Response)?",
    "options": [
      "Antivírus tradicional",
      "Plataforma que correlaciona telemetria de múltiplas fontes (endpoint, rede, cloud, email) para detecção avançada de ameaças",
      "Tipo de firewall",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "XDR correlaciona dados de múltiplas fontes para detecção e resposta a ameaças avançadas com automação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco Talos'?",
    "options": [
      "Servidor DHCP",
      "Inteligência de ameaças global da Cisco que alimenta todas as soluções de segurança",
      "Tipo de switch",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "Talos é a equipe de inteligência de ameaças da Cisco que fornece dados em tempo real para todas as soluções de segurança Cisco.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Duo'?",
    "options": [
      "Protocolo de encaminhamento",
      "Solução de autenticação multifator (MFA) e acesso adaptativo com verificação de dispositivo",
      "Tipo de switch",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "Duo fornece MFA, verificação de saúde do dispositivo e acesso adaptativo para proteger logins.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Endpoint' (antigo AMP for Endpoints)?",
    "options": [
      "Antivírus tradicional",
      "Proteção avançada de endpoint com detecção de malware, EDR e integração com XDR",
      "Tipo de router",
      "Servidor DNS"
    ],
    "correct": 1,
    "explanation": "Secure Endpoint oferece proteção em tempo real, detecção de ameaças e resposta em endpoints.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Secure Email' (antigo ESA)?",
    "options": [
      "Cliente de e-mail",
      "Gateway de e-mail seguro com proteção contra spam, phishing, malware e DLP",
      "Tipo de switch",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "Secure Email é o gateway de e-mail seguro da Cisco com proteção avançada contra ameaças de e-mail.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Secure Web Appliance' (antigo WSA)?",
    "options": [
      "Proxy simples",
      "Secure Web Gateway com URL filtering, malware scanning, DLP e controle de aplicações",
      "Tipo de router",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "Secure Web Appliance protege o tráfego web com filtragem de URL, antimalware e políticas de uso.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Meraki'?",
    "options": [
      "Solução tradicional Cisco",
      "Plataforma de rede gerenciada na nuvem com dashboard unificado, zero-touch e analytics",
      "Tipo de firewall",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "Meraki oferece switches, APs, firewalls e câmeras gerenciados 100% na nuvem com dashboard simples e poderoso.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'Cisco Intersight'?",
    "options": [
      "Gerenciamento de rede",
      "Plataforma de gerenciamento de infraestrutura híbrida (data center, edge, cloud) com automação",
      "Tipo de switch",
      "Servidor DHCP"
    ],
    "correct": 1,
    "explanation": "Intersight fornece gerenciamento unificado, automação e insights para infraestrutura Cisco UCS, HyperFlex e mais.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco ACI' (Application Centric Infrastructure)?",
    "options": [
      "Rede tradicional",
      "Solução SDN para data center com fabric leaf-spine, políticas baseadas em aplicação e automação",
      "Tipo de switch",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "ACI é a solução SDN da Cisco para data centers com fabric VXLAN, APIC controller e políticas baseadas em aplicação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco Nexus Dashboard'?",
    "options": [
      "Switch simples",
      "Plataforma de gerenciamento e automação para data center com Nexus Dashboard e services",
      "Tipo de router",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "Nexus Dashboard fornece gerenciamento unificado, automação e serviços para fabrics ACI e NX-OS.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco HyperFlex'?",
    "options": [
      "Servidor tradicional",
      "Solução hyperconverged infrastructure (HCI) com storage, compute e networking integrados",
      "Tipo de switch",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "HyperFlex é a solução HCI da Cisco com storage distribuído, alta disponibilidade e gerenciamento simplificado.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco UCS' (Unified Computing System)?",
    "options": [
      "Servidor standalone",
      "Plataforma de servidores blade/rack com gerenciamento unificado, stateless computing e automação",
      "Tipo de switch",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "UCS integra compute, networking e storage com gerenciamento centralizado e profiles de serviço stateless.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'Cisco Intersight Workload Optimizer'?",
    "options": [
      "Ferramenta de backup",
      "Solução de otimização de workload com AI para placement, scaling e custo em ambientes híbridos",
      "Tipo de switch",
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "Intersight Workload Optimizer usa AI para otimizar placement, scaling e custos de workloads em nuvens híbridas.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco AppDynamics'?",
    "options": [
      "Monitoramento de rede",
      "Plataforma de observabilidade de aplicações com APM, business transactions e analytics",
      "Tipo de switch",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "AppDynamics fornece visibilidade completa de performance de aplicações, desde código até experiência do usuário.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Cisco Full-Stack Observability'?",
    "options": [
      "Monitoramento tradicional",
      "Abordagem unificada que correlaciona dados de rede, aplicações, infraestrutura e experiência do usuário",
      "Tipo de router",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "Full-Stack Observability correlaciona telemetria de toda a stack para troubleshooting e otimização proativa.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Cisco ThousandEyes' em SD-WAN?",
    "options": [
      "Firewall",
      "Monitoramento de internet e performance de aplicações para otimizar decisões de SD-WAN",
      "Tipo de switch",
      "Servidor DNS"
    ],
    "correct": 1,
    "explanation": "ThousandEyes fornece insights de performance de internet e aplicações para que o SD-WAN tome decisões inteligentes.",
    "difficulty": "Médio"
  },
  {
    "question": "Em OSPF, o LSA tipo 1 descreve:",
    "options": [
      "Rotas externas",
      "O router e os seus links intra-área",
      "A summary de área",
      "O ASBR noutro AS"
    ],
    "correct": 1,
    "explanation": "Type 1 Router LSA descreve links do router na área.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF LSA tipo 3 é gerado por:",
    "options": [
      "Todos os routers",
      "ABR, como summary inter-área",
      "ASBR só",
      "O DR Ethernet"
    ],
    "correct": 1,
    "explanation": "Type 3 Network Summary é criado pelo ABR.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF LSA tipo 5 representa:",
    "options": [
      "Links intra-área",
      "Rotas externas injetadas no OSPF",
      "Summary NSSA",
      "Apenas IPv6"
    ],
    "correct": 1,
    "explanation": "Type 5 AS-External vem do ASBR (exceto NSSA que usa tipo 7).",
    "difficulty": "Médio"
  },
  {
    "question": "Uma área OSPF stub bloqueia que LSAs?",
    "options": [
      "Tipo 1 e 2",
      "Tipo 5 (externas); o ABR injeta default",
      "Todos os LSA 3",
      "Hello packets"
    ],
    "correct": 1,
    "explanation": "Stub não recebe LSA 5; o ABR anuncia 0.0.0.0.",
    "difficulty": "Difícil"
  },
  {
    "question": "EIGRP successor é:",
    "options": [
      "A rota de backup na topology table",
      "A rota primária na tabela de encaminhamento (FD mínima)",
      "O vizinho com pior métrica",
      "Um LSA tipo 1"
    ],
    "correct": 1,
    "explanation": "Successor é a melhor rota (feasible distance).",
    "difficulty": "Médio"
  },
  {
    "question": "Feasible successor EIGRP exige:",
    "options": [
      "AD > FD do successor",
      "Advertised Distance < FD do successor (condicao de viabilidade)",
      "Mesmo AS BGP",
      "LSA tipo 5"
    ],
    "correct": 1,
    "explanation": "AD do candidato tem de ser menor que a FD da rota em uso.",
    "difficulty": "Difícil"
  },
  {
    "question": "BGP path selection: depois de Weight e Local Pref, o próximo critério comum é:",
    "options": [
      "MED",
      "AS-Path mais curto",
      "Oldest path",
      "Router-ID"
    ],
    "correct": 1,
    "explanation": "Ordem típica: Weight, Local Pref, locally originated, shortest AS-Path...",
    "difficulty": "Difícil"
  },
  {
    "question": "BGP Weight é:",
    "options": [
      "Um atributo transitivo da IETF",
      "Cisco-proprietary, local ao router, maior e melhor (default 32768 originadas)",
      "Igual ao MED",
      "Enviado aos eBGP peers"
    ],
    "correct": 1,
    "explanation": "Weight não sai do router; maior vence.",
    "difficulty": "Difícil"
  },
  {
    "question": "Local Preference no iBGP: valor maior significa:",
    "options": [
      "Pior caminho",
      "Preferido para sair do AS",
      "Só usado em eBGP",
      "Substitui o AS-Path"
    ],
    "correct": 1,
    "explanation": "Local Pref alto escolhe o exit point do AS.",
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
    "explanation": "eBGP assume peers diretamente ligados (TTL 1) salvo ebgp-multihop.",
    "difficulty": "Médio"
  },
  {
    "question": "iBGP não reanuncia prefixos iBGP a outros iBGP. A solução clássica é:",
    "options": [
      "AS-Path prepend",
      "Full mesh iBGP ou route reflectors / confederations",
      "OSPF default",
      "LSA tipo 5"
    ],
    "correct": 1,
    "explanation": "Split horizon iBGP exige malha completa ou RR.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um route reflector cliente recebe:",
    "options": [
      "Só rotas eBGP",
      "Rotas refletidas do RR, sem full mesh entre clientes",
      "Apenas LSA 3",
      "MED invertido"
    ],
    "correct": 1,
    "explanation": "O RR relaxa a malha iBGP entre clientes.",
    "difficulty": "Difícil"
  },
  {
    "question": "VRF-Lite serve para:",
    "options": [
      "Cifrar control plane",
      "Separar tabelas de encaminhamento no mesmo PE/CE sem MPLS obrigatório",
      "Substituir STP",
      "Só IPv6"
    ],
    "correct": 1,
    "explanation": "VRFs isolam routing/forwarding; Lite = sem MP-BGP/MPLS.",
    "difficulty": "Difícil"
  },
  {
    "question": "MPLS label stacking: a etiqueta do topo é:",
    "options": [
      "A do serviço L3VPN no fundo",
      "A que o LSR usa para o next hop (transport/IGP)",
      "O MAC da CE",
      "O DSCP"
    ],
    "correct": 1,
    "explanation": "Top label = transporte; bottom (S=1) = serviço VPN.",
    "difficulty": "Difícil"
  },
  {
    "question": "LDP distribui:",
    "options": [
      "Prefixos BGP",
      "Etiquetas MPLS para prefixos IGP",
      "VLANs",
      "Certificados PKI"
    ],
    "correct": 1,
    "explanation": "LDP mapeia FEC (prefixos) a labels.",
    "difficulty": "Médio"
  },
  {
    "question": "BFD (Bidirectional Forwarding Detection) serve para:",
    "options": [
      "Substituir OSPF",
      "Detetar falhas de forwarding em milissegundos, independente do IGP",
      "Eleger o DR",
      "Cifrar GRE"
    ],
    "correct": 1,
    "explanation": "BFD da failure detection rápida a OSPF/EIGRP/BGP.",
    "difficulty": "Médio"
  },
  {
    "question": "IP SLA num router Cisco pode:",
    "options": [
      "Compilar IOS",
      "Medir latência/jitter/availability e reagir com tracking",
      "Substituir AAA",
      "Criar VLANs"
    ],
    "correct": 1,
    "explanation": "SLA probes + object tracking para PBR/HSRP/static.",
    "difficulty": "Médio"
  },
  {
    "question": "PBR (Policy-Based Routing) desvia tráfego com base em:",
    "options": [
      "Só a tabela RIB",
      "Route-maps (ACL, DSCP, comprimento) em vez da só destinação",
      "STP root",
      "LLDP"
    ],
    "correct": 1,
    "explanation": "PBR usa set ip next-hop segundo match de políticas.",
    "difficulty": "Médio"
  },
  {
    "question": "StackWise / StackWise Virtual agrega:",
    "options": [
      "APs wireless",
      "Switches num só plano de controlo lógico",
      "Sessões BGP",
      "VRFs MPLS"
    ],
    "correct": 1,
    "explanation": "Stack cria um switch lógico com SSO/NSF.",
    "difficulty": "Médio"
  },
  {
    "question": "vPC (Nexus) permite:",
    "options": [
      "Dois switches a parecer um ao STP/LACP sem ser um só supervisor",
      "Substituir OSPF",
      "Só FCoE",
      "Desligar BPDU Guard"
    ],
    "correct": 0,
    "explanation": "vPC = port-channel multi-chassis sem stack completo.",
    "difficulty": "Difícil"
  },
  {
    "question": "SD-Access control plane usa tipicamente:",
    "options": [
      "Só STP",
      "LISP para mapear identidade (EID) a localização (RLOC)",
      "RIP v1",
      "VTP v3 só"
    ],
    "correct": 1,
    "explanation": "LISP + VXLAN + ISE no fabric SDA.",
    "difficulty": "Difícil"
  },
  {
    "question": "VXLAN VNI identifica:",
    "options": [
      "Uma VLAN local só",
      "O segmento overlay (L2/L3) no fabric",
      "O ASN BGP",
      "O DSCP"
    ],
    "correct": 1,
    "explanation": "VNI é o identificador do overlay VXLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "ISE no acesso usa 802.1X para:",
    "options": [
      "Cifrar OSPF",
      "Autenticar utilizador/dispositivo e aplicar dACL/SGT",
      "Eleger root STP",
      "Traduzir NAT64"
    ],
    "correct": 1,
    "explanation": "ISE é o policy engine RADIUS do TrustSec/SDA.",
    "difficulty": "Médio"
  },
  {
    "question": "SGT (Scalable Group Tag) no TrustSec é:",
    "options": [
      "Um número OSPF",
      "Uma etiqueta de grupo para políticas baseadas em identidade",
      "Uma VLAN nativa",
      "Um community BGP"
    ],
    "correct": 1,
    "explanation": "SGTs classificam utilizadores; SGACL filtra entre grupos.",
    "difficulty": "Difícil"
  },
  {
    "question": "NETCONF transporta YANG tipicamente sobre:",
    "options": [
      "Telnet",
      "SSH (porta 830)",
      "HTTP só",
      "SNMP v2"
    ],
    "correct": 1,
    "explanation": "NETCONF/SSH na 830; RESTCONF usa HTTPS.",
    "difficulty": "Médio"
  },
  {
    "question": "Um modelo YANG descreve:",
    "options": [
      "A topologia STP",
      "Estrutura e constraints dos dados de configuração/estado",
      "Só ACLs MAC",
      "O spanning-tree"
    ],
    "correct": 1,
    "explanation": "YANG é a linguagem de modelação para NETCONF/RESTCONF.",
    "difficulty": "Médio"
  },
  {
    "question": "DMVPN Phase 3 permite:",
    "options": [
      "Só hub-and-spoke sem atalhos",
      "NHRP redirect/shortcut para spoke-to-spoke direto",
      "Apenas IPsec transport sem GRE",
      "OSPFv2 obrigatório"
    ],
    "correct": 1,
    "explanation": "Phase 3: NHRP redirect cria túnel direto entre spokes.",
    "difficulty": "Difícil"
  },
  {
    "question": "GETVPN (GDOI) é pensado para:",
    "options": [
      "Internet pública com NAT",
      "WAN privada (MPLS) com grupo IPsec e headers originais preservados",
      "Só Wi-Fi",
      "IPv6 link-local"
    ],
    "correct": 1,
    "explanation": "GETVPN usa key server; não muda IPs, bom em MPLS.",
    "difficulty": "Difícil"
  },
  {
    "question": "FlexVPN no IOS-XE baseia-se em:",
    "options": [
      "L2TP só",
      "IKEv2 (com templates virtuais)",
      "IKEv1 agressivo só",
      "PPTP"
    ],
    "correct": 1,
    "explanation": "FlexVPN unifica DMVPN/EasyVPN/RA em IKEv2.",
    "difficulty": "Difícil"
  },
  {
    "question": "CoPP (Control Plane Policing) protege:",
    "options": [
      "O data plane de utilizador",
      "O CPU do control plane limitando tráfego a processos (ex. SSH, routing)",
      "Só o CAM",
      "O Põe"
    ],
    "correct": 1,
    "explanation": "CoPP aplica QoS/ACL ao tráfego destined-to-box.",
    "difficulty": "Difícil"
  },
  {
    "question": "uRPF (unicast RPF) mitiga:",
    "options": [
      "DHCP starvation",
      "Spoofing de IP de origem, verificando se a origem seria encaminhável pela interface",
      "Loops STP",
      "Drops de BFD"
    ],
    "correct": 1,
    "explanation": "Strict/loose uRPF descarta origens inconsistentes com a RIB.",
    "difficulty": "Difícil"
  },
  {
    "question": "PIM Sparse Mode usa RP para:",
    "options": [
      "Eleger o DR OSPF",
      "Árvore partilhada inicial (*,G) antes de SPT (S,G)",
      "Traduzir NAT",
      "Marcar DSCP"
    ],
    "correct": 1,
    "explanation": "PIM-SM: join ao RP; depois pode mudar para shortest-path tree.",
    "difficulty": "Difícil"
  },
  {
    "question": "Anycast RP (MSDP) resolve:",
    "options": [
      "Um só RP sem redundância",
      "Redundância/load-share de RPs multicast entre dominios ou boxes",
      "Só IPv6 ND",
      "VTP pruning"
    ],
    "correct": 1,
    "explanation": "Vários RPs com o mesmo IP; MSDP sincroniza source-active.",
    "difficulty": "Difícil"
  },
  {
    "question": "QoS LLQ (Low Latency Queue) e tipicamente para:",
    "options": [
      "Bulk backup",
      "Voz/vídeo em tempo real (priority queue)",
      "Best-effort HTTP",
      "Routing updates só"
    ],
    "correct": 1,
    "explanation": "priority command = LLQ, com policer para não esgotar o link.",
    "difficulty": "Médio"
  },
  {
    "question": "WRED evita:",
    "options": [
      "Blackholing BGP",
      "Tail drop global, descendo probabilístico segundo DSCP antes da fila cheia",
      "Loops RIP",
      "Falha de NTP"
    ],
    "correct": 1,
    "explanation": "WRED faz early drop ponderado; protege fluxos TCP.",
    "difficulty": "Difícil"
  }
];
