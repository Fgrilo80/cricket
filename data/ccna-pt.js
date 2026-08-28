window.QUIZ_BANK = [
  {
    "question": "Qual é a função da camada de Transporte no modelo TCP/IP?",
    "options": [
      "Endereçamento lógico",
      "Entrega confiável de dados entre aplicações",
      "Roteamento de pacotes",
      "Transmissão física de bits"
    ],
    "correct": 1,
    "explanation": "A camada de Transporte (TCP/UDP) fornece entrega de dados entre aplicações, com TCP oferecendo confiabilidade.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual protocolo é usado para resolver nomes de domínio em endereços IP?",
    "options": [
      "ARP",
      "DNS",
      "DHCP",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "DNS (Domain Name System) traduz nomes de domínio legíveis para endereços IP.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é uma rota estática?",
    "options": [
      "Rota aprendida automaticamente por protocolo de roteamento",
      "Rota configurada manualmente pelo administrador",
      "Rota padrão",
      "Rota de backup"
    ],
    "correct": 1,
    "explanation": "Rotas estáticas são configuradas manualmente e não mudam automaticamente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre OSPF e EIGRP?",
    "options": [
      "OSPF é proprietário Cisco, EIGRP é aberto",
      "EIGRP usa algoritmo DUAL, OSPF usa Dijkstra",
      "Não há diferença",
      "OSPF é mais rápido que EIGRP"
    ],
    "correct": 1,
    "explanation": "EIGRP é protocolo proprietário Cisco com algoritmo DUAL. OSPF é aberto e usa algoritmo de Dijkstra (SPF).",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é NAT overload (PAT)?",
    "options": [
      "Tradução de um IP privado para um IP público",
      "Múltiplos IPs privados compartilhando um único IP público usando portas",
      "Tradução de portas",
      "Bloqueio de tráfego"
    ],
    "correct": 1,
    "explanation": "PAT (Port Address Translation) permite que múltiplos dispositivos internos compartilhem um IP público usando diferentes portas.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'ip route 0.0.0.0 0.0.0.0 192.168.1.1'?",
    "options": [
      "Configurar rota estática padrão",
      "Configurar rota para rede específica",
      "Apagar rota",
      "Mostrar rotas"
    ],
    "correct": 0,
    "explanation": "Este comando configura a rota estática padrão (default route) para o gateway 192.168.1.1.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é VLAN tagging (802.1Q)?",
    "options": [
      "Método para criptografar VLANs",
      "Inserção de tag em frames para identificar a VLAN de origem",
      "Protocolo de roteamento",
      "Tipo de switch"
    ],
    "correct": 1,
    "explanation": "802.1Q é o padrão IEEE para inserir uma tag de 4 bytes em frames Ethernet para identificar a VLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a porta padrão do protocolo HTTPS?",
    "options": [
      "80",
      "443",
      "22",
      "21"
    ],
    "correct": 1,
    "explanation": "HTTPS (HTTP Secure) usa a porta 443 por padrão.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um ACL (Access Control List)?",
    "options": [
      "Lista de endereços MAC",
      "Conjunto de regras para permitir ou negar tráfego",
      "Tabela de roteamento",
      "Configuração de VLAN"
    ],
    "correct": 1,
    "explanation": "ACLs são usadas para filtrar tráfego com base em critérios como IP de origem/destino, portas, etc.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do protocolo HSRP?",
    "options": [
      "Roteamento dinâmico",
      "Fornecer gateway redundante com IP virtual",
      "Balanceamento de carga",
      "VPN"
    ],
    "correct": 1,
    "explanation": "HSRP (Hot Standby Router Protocol) fornece redundância de gateway com um IP virtual compartilhado.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'frame tagging' em switches?",
    "options": [
      "Etiquetagem de frames para identificação de VLAN",
      "Criptografia de frames",
      "Fragmentação de frames",
      "Priorização de frames"
    ],
    "correct": 0,
    "explanation": "Frame tagging (802.1Q) adiciona uma tag ao frame para identificar a qual VLAN ele pertence.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a principal diferença entre roteador e switch L3?",
    "options": [
      "Roteador é mais rápido",
      "Switch L3 faz roteamento na camada 3 mas com hardware otimizado para switching",
      "Não há diferença",
      "Roteador não suporta VLANs"
    ],
    "correct": 1,
    "explanation": "Switches Layer 3 combinam funções de switching L2 com roteamento L3 em hardware ASIC, mais rápido que roteadores tradicionais.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é ' EtherChannel'?",
    "options": [
      "Protocolo de criptografia",
      "Tecnologia para agrupar múltiplas portas físicas em um único link lógico",
      "Tipo de VLAN",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "EtherChannel permite agregar links físicos para aumentar largura de banda e redundância (LACP ou PAgP).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show ip ospf neighbor'?",
    "options": [
      "Mostrar tabela de roteamento",
      "Mostrar vizinhos OSPF e seu estado",
      "Mostrar configuração de interface",
      "Mostrar logs"
    ],
    "correct": 1,
    "explanation": "Este comando exibe os vizinhos OSPF, estado da adjacência e informações de DR/BDR.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'prefix-list' em roteadores Cisco?",
    "options": [
      "Lista de prefixos IP para filtragem de rotas",
      "Lista de VLANs",
      "Lista de ACLs",
      "Lista de usuários"
    ],
    "correct": 0,
    "explanation": "Prefix-lists são usadas para filtrar rotas com base em prefixos de rede e comprimento de máscara.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'standard' e 'extended' ACL?",
    "options": [
      "Standard filtra apenas por IP de origem, extended por origem, destino, protocolo e porta",
      "Não há diferença",
      "Extended é mais simples",
      "Standard é mais seguro"
    ],
    "correct": 0,
    "explanation": "Standard ACLs (1-99) filtram apenas por IP de origem. Extended (100-199) oferecem filtragem mais granular.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'BGP' e para que é usado?",
    "options": [
      "Protocolo de roteamento interno",
      "Protocolo de roteamento externo usado na internet para troca de rotas entre AS",
      "Protocolo de backup",
      "Protocolo de segurança"
    ],
    "correct": 1,
    "explanation": "BGP (Border Gateway Protocol) é o protocolo de roteamento usado na internet para trocar rotas entre sistemas autônomos.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do comando 'ip nat inside source list 1 interface GigabitEthernet0/0 overload'?",
    "options": [
      "Configurar NAT estático",
      "Configurar PAT dinâmico usando ACL e interface",
      "Apagar NAT",
      "Mostrar NAT"
    ],
    "correct": 1,
    "explanation": "Este comando configura PAT (NAT overload) usando a ACL 1 e o IP da interface como endereço público.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'CEF' (Cisco Express Forwarding)?",
    "options": [
      "Protocolo de roteamento",
      "Tecnologia de encaminhamento de pacotes em hardware para alta performance",
      "Tipo de switch",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "CEF usa tabela FIB e adjacências para encaminhar pacotes em hardware, muito mais rápido que roteamento tradicional.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a porta padrão do protocolo Telnet?",
    "options": [
      "21",
      "22",
      "23",
      "80"
    ],
    "correct": 2,
    "explanation": "Telnet usa a porta 23 (inseguro, use SSH na 22).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'VRF' (Virtual Routing and Forwarding)?",
    "options": [
      "Tipo de VLAN",
      "Tecnologia que permite múltiplas tabelas de roteamento independentes no mesmo roteador",
      "Protocolo de VPN",
      "Tipo de firewall"
    ],
    "correct": 1,
    "explanation": "VRF permite criar instâncias de roteamento separadas no mesmo dispositivo físico, útil para segmentação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Spanning Tree PortFast'?",
    "options": [
      "Acelerar convergência de STP em portas de acesso",
      "Desabilitar STP",
      "Aumentar prioridade de porta",
      "Criar trunk"
    ],
    "correct": 0,
    "explanation": "PortFast coloca imediatamente portas de acesso em estado forwarding, pulando os estados listening/learning.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Anycast' em IPv6?",
    "options": [
      "Endereço único para múltiplos dispositivos",
      "Endereço que identifica o dispositivo mais próximo em um grupo",
      "Endereço de broadcast",
      "Endereço de multicast"
    ],
    "correct": 1,
    "explanation": "Anycast entrega o pacote para o dispositivo mais próximo (menor métrica) em um grupo de dispositivos com o mesmo endereço.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'RIPv2' e 'OSPF'?",
    "options": [
      "RIPv2 é link-state, OSPF é distance-vector",
      "RIPv2 tem limite de 15 hops, OSPF é hierárquico e escalável",
      "Não há diferença",
      "RIPv2 é mais seguro"
    ],
    "correct": 1,
    "explanation": "RIPv2 é distance-vector com limite de 15 hops. OSPF é link-state, hierárquico (áreas) e escalável para grandes redes.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'subinterface' em roteadores Cisco?",
    "options": [
      "Interface física",
      "Interface lógica criada em uma interface física para suportar múltiplas VLANs (router-on-a-stick)",
      "Interface de backup",
      "Interface wireless"
    ],
    "correct": 1,
    "explanation": "Subinterfaces permitem que um roteador único processe tráfego de múltiplas VLANs em uma única interface física (router-on-a-stick).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show ip nat translations'?",
    "options": [
      "Mostrar configuração de NAT",
      "Mostrar traduções NAT ativas",
      "Apagar traduções",
      "Mostrar ACLs"
    ],
    "correct": 1,
    "explanation": "Este comando exibe as traduções NAT/PAT atualmente ativas no roteador.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'GLBP' (Gateway Load Balancing Protocol)?",
    "options": [
      "Protocolo de roteamento",
      "Protocolo que fornece redundância e balanceamento de carga entre múltiplos gateways",
      "Tipo de ACL",
      "Protocolo de VPN"
    ],
    "correct": 1,
    "explanation": "GLBP fornece redundância de gateway com balanceamento de carga ativo-ativo usando múltiplos roteadores ativos.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'ip helper-address'?",
    "options": [
      "Configurar NAT",
      "Encaminhar broadcasts DHCP para um servidor DHCP remoto",
      "Configurar rota estática",
      "Ativar firewall"
    ],
    "correct": 1,
    "explanation": "ip helper-address permite que broadcasts DHCP de clientes sejam encaminhados para um servidor DHCP em outra rede.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'SDM' (Switching Database Manager) em switches Cisco?",
    "options": [
      "Gerenciador de VLANs",
      "Recurso que otimiza o uso de recursos de hardware (TCAM) para diferentes funções",
      "Protocolo de roteamento",
      "Tipo de memória"
    ],
    "correct": 1,
    "explanation": "SDM permite alocar recursos de hardware (TCAM) de forma otimizada para routing, security, etc.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'inside local' e 'inside global' em NAT?",
    "options": [
      "Inside local é o IP público, inside global é o IP privado",
      "Inside local é o IP privado interno, inside global é o IP público após tradução",
      "Não há diferença",
      "Inside local é o IP do servidor"
    ],
    "correct": 1,
    "explanation": "Inside local = IP original do host interno. Inside global = IP público usado na internet após NAT.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'BPDU Guard'?",
    "options": [
      "Protocolo de roteamento",
      "Recurso de segurança que desabilita porta se receber BPDU (evita loops)",
      "Tipo de VLAN",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "BPDU Guard desabilita automaticamente uma porta PortFast se ela receber um BPDU, prevenindo loops.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'debug ip packet'?",
    "options": [
      "Mostrar configuração",
      "Mostrar pacotes IP processados pelo roteador (cuidado: alto impacto)",
      "Apagar logs",
      "Reiniciar interface"
    ],
    "correct": 1,
    "explanation": "debug ip packet mostra detalhes de pacotes IP processados. Use com cuidado pois pode sobrecarregar o CPU.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'router-on-a-stick'?",
    "options": [
      "Roteador físico único",
      "Configuração onde um roteador usa subinterfaces para rotear entre múltiplas VLANs em uma única interface física",
      "Tipo de switch",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "Router-on-a-stick usa uma interface física com subinterfaces 802.1Q para rotear entre VLANs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a porta padrão do protocolo FTP?",
    "options": [
      "20/21",
      "22",
      "23",
      "80"
    ],
    "correct": 0,
    "explanation": "FTP usa porta 21 para controle e 20 para dados (modo ativo).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'PVST+' (Per-VLAN Spanning Tree Plus)?",
    "options": [
      "STP para todas as VLANs juntas",
      "Implementação Cisco de STP que executa uma instância de STP por VLAN",
      "Protocolo de balanceamento",
      "Tipo de trunk"
    ],
    "correct": 1,
    "explanation": "PVST+ executa uma instância separada de STP para cada VLAN, permitindo otimização por VLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'ip domain-lookup'?",
    "options": [
      "Ativar resolução DNS no roteador",
      "Desabilitar DNS",
      "Configurar servidor DNS",
      "Mostrar cache DNS"
    ],
    "correct": 0,
    "explanation": "ip domain-lookup habilita o roteador a resolver nomes de host via DNS.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'LACP' (Link Aggregation Control Protocol)?",
    "options": [
      "Protocolo de roteamento",
      "Protocolo padrão IEEE para negociação de EtherChannel",
      "Tipo de ACL",
      "Protocolo de segurança"
    ],
    "correct": 1,
    "explanation": "LACP é o protocolo padrão IEEE 802.3ad para formar EtherChannels dinamicamente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre 'active' e 'passive' em LACP?",
    "options": [
      "Active inicia a negociação, passive responde",
      "Não há diferença",
      "Passive é mais rápido",
      "Active é inseguro"
    ],
    "correct": 0,
    "explanation": "Active (modo ativo) inicia a negociação LACP. Passive (passivo) apenas responde a negociações.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'HSRP preemption'?",
    "options": [
      "Desabilitar HSRP",
      "Permitir que roteador com prioridade mais alta assuma o papel de active quando disponível",
      "Tipo de balanceamento",
      "Backup de configuração"
    ],
    "correct": 1,
    "explanation": "Preemption permite que um roteador com maior prioridade assuma automaticamente o papel de active quando volta a ficar disponível.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show spanning-tree vlan 10'?",
    "options": [
      "Mostrar configuração de VLAN 10",
      "Mostrar estado do STP para VLAN 10 (root bridge, portas, etc.)",
      "Mostrar ACLs da VLAN 10",
      "Mostrar NAT da VLAN 10"
    ],
    "correct": 1,
    "explanation": "Este comando exibe informações detalhadas do STP para a VLAN especificada.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'route-map' em roteadores Cisco?",
    "options": [
      "Mapa de VLANs",
      "Ferramenta poderosa para manipulação e filtragem de rotas com base em critérios complexos",
      "Tipo de ACL",
      "Protocolo de VPN"
    ],
    "correct": 1,
    "explanation": "Route-maps são usados para controle avançado de redistribuição de rotas, PBR e NAT.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'ip sla'?",
    "options": [
      "Configurar NAT",
      "Monitorar performance da rede (latência, jitter, perda) com testes sintéticos",
      "Configurar VPN",
      "Gerenciar usuários"
    ],
    "correct": 1,
    "explanation": "IP SLA permite criar testes de performance de rede para monitorar SLA e acionar ações.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'uRPF' (Unicast Reverse Path Forwarding)?",
    "options": [
      "Protocolo de roteamento",
      "Mecanismo de segurança que verifica se o IP de origem é alcançável pela interface de entrada",
      "Tipo de firewall",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "uRPF ajuda a prevenir spoofing verificando se o caminho de retorno para o IP de origem existe na interface de entrada.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'named' e 'numbered' ACL?",
    "options": [
      "Named é mais antigo",
      "Named ACL permite edição fácil e nomes descritivos, numbered é numérico",
      "Não há diferença",
      "Named é menos seguro"
    ],
    "correct": 1,
    "explanation": "Named ACLs usam nomes e permitem inserção/remoção de linhas específicas. Numbered são mais limitados.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'MPLS' (Multiprotocol Label Switching)?",
    "options": [
      "Protocolo de roteamento",
      "Tecnologia de comutação de rótulos para alta performance e VPNs",
      "Tipo de switch",
      "Método de NAT"
    ],
    "correct": 1,
    "explanation": "MPLS usa rótulos curtos para encaminhar pacotes em alta velocidade e suporta VPNs Layer 2/3.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do comando 'clear ip nat translation *'?",
    "options": [
      "Mostrar traduções",
      "Apagar todas as traduções NAT ativas",
      "Reiniciar NAT",
      "Configurar NAT"
    ],
    "correct": 1,
    "explanation": "Este comando limpa todas as traduções NAT atuais (útil após mudanças de configuração).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'sticky MAC' em port-security?",
    "options": [
      "MAC que nunca muda",
      "Recurso que aprende dinamicamente MACs e os salva na configuração running",
      "Tipo de VLAN",
      "Método de criptografia"
    ],
    "correct": 1,
    "explanation": "Sticky MAC aprende endereços MAC dinamicamente e os adiciona à configuração como estáticos.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'ip tcp window-size'?",
    "options": [
      "Configurar MTU",
      "Ajustar o tamanho da janela TCP para otimizar throughput",
      "Configurar porta",
      "Ativar firewall"
    ],
    "correct": 1,
    "explanation": "Permite ajustar o tamanho da janela TCP para melhorar performance em links de alta latência.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'DMVPN' (Dynamic Multipoint VPN)?",
    "options": [
      "VPN estática",
      "Tecnologia Cisco que permite VPNs dinâmicas hub-and-spoke com spoke-to-spoke direto",
      "Tipo de firewall",
      "Protocolo de roteamento"
    ],
    "correct": 1,
    "explanation": "DMVPN cria VPNs dinâmicas onde spokes podem se conectar diretamente entre si sem passar pelo hub.",
    "difficulty": "Difícil"
  }
];
