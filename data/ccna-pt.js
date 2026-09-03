window.QUIZ_BANK = [
  {
    "question": "Qual é a função da camada de Transporte no modelo TCP/IP?",
    "options": [
      "Endereçamento lógico",
      "Entrega confiável de dados entre aplicações",
      "Encaminhamento de pacotes",
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
      "Rota aprendida automaticamente por protocolo de encaminhamento",
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
      "Protocolo de encaminhamento",
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
      "Tabela de encaminhamento",
      "Configuração de VLAN"
    ],
    "correct": 1,
    "explanation": "ACLs são usadas para filtrar tráfego com base em critérios como IP de origem/destino, portas, etc.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do protocolo HSRP?",
    "options": [
      "Encaminhamento dinâmico",
      "Fornecer gateway redundante com IP virtual",
      "Balanceamento de carga",
      "VPN"
    ],
    "correct": 1,
    "explanation": "HSRP (Hot Standby Router Protocol) fornece redundância de gateway com um IP virtual compartilhado.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a principal diferença entre router e switch L3?",
    "options": [
      "Router é mais rápido",
      "Switch L3 faz encaminhamento na camada 3 mas com hardware otimizado para switching",
      "Não há diferença",
      "Router não suporta VLANs"
    ],
    "correct": 1,
    "explanation": "Switches Layer 3 combinam funções de switching L2 com encaminhamento L3 em hardware ASIC, mais rápido que roteadores tradicionais.",
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
      "Mostrar tabela de encaminhamento",
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
      "Protocolo de encaminhamento interno",
      "Protocolo de encaminhamento externo usado na internet para troca de rotas entre AS",
      "Protocolo de backup",
      "Protocolo de segurança"
    ],
    "correct": 1,
    "explanation": "BGP (Border Gateway Protocol) é o protocolo de encaminhamento usado na internet para trocar rotas entre sistemas autônomos.",
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
      "Protocolo de encaminhamento",
      "Tecnologia de encaminhamento de pacotes em hardware para alta performance",
      "Tipo de switch",
      "Método de backup"
    ],
    "correct": 1,
    "explanation": "CEF usa tabela FIB e adjacências para encaminhar pacotes em hardware, muito mais rápido que encaminhamento tradicional.",
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
      "Tecnologia que permite múltiplas tabelas de encaminhamento independentes no mesmo router",
      "Protocolo de VPN",
      "Tipo de firewall"
    ],
    "correct": 1,
    "explanation": "VRF permite criar instâncias de encaminhamento separadas no mesmo dispositivo físico, útil para segmentação.",
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
    "explanation": "Subinterfaces permitem que um router único processe tráfego de múltiplas VLANs em uma única interface física (router-on-a-stick).",
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
    "explanation": "Este comando exibe as traduções NAT/PAT atualmente ativas no router.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'GLBP' (Gateway Load Balancing Protocol)?",
    "options": [
      "Protocolo de encaminhamento",
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
      "Protocolo de encaminhamento",
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
      "Protocolo de encaminhamento",
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
      "Mostrar pacotes IP processados pelo router (cuidado: alto impacto)",
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
      "Router físico único",
      "Configuração onde um router usa subinterfaces para rotear entre múltiplas VLANs em uma única interface física",
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
      "Ativar resolução DNS no router",
      "Desabilitar DNS",
      "Configurar servidor DNS",
      "Mostrar cache DNS"
    ],
    "correct": 0,
    "explanation": "ip domain-lookup habilita o router a resolver nomes de host via DNS.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'LACP' (Link Aggregation Control Protocol)?",
    "options": [
      "Protocolo de encaminhamento",
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
      "Permitir que router com prioridade mais alta assuma o papel de active quando disponível",
      "Tipo de balanceamento",
      "Backup de configuração"
    ],
    "correct": 1,
    "explanation": "Preemption permite que um router com maior prioridade assuma automaticamente o papel de active quando volta a ficar disponível.",
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
      "Protocolo de encaminhamento",
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
      "Protocolo de encaminhamento",
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
      "Protocolo de encaminhamento"
    ],
    "correct": 1,
    "explanation": "DMVPN cria VPNs dinâmicas onde spokes podem se conectar diretamente entre si sem passar pelo hub.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual comando cria a VLAN 20 num switch Cisco?",
    "options": [
      "vlan 20",
      "switchport access vlan 20",
      "interface vlan 20",
      "encapsulation dot1q 20"
    ],
    "correct": 0,
    "explanation": "No modo VLAN, 'vlan 20' cria a VLAN.",
    "difficulty": "Fácil"
  },
  {
    "question": "Para uma porta de acesso na VLAN 20 usa-se:",
    "options": [
      "switchport mode trunk",
      "switchport access vlan 20",
      "no switchport",
      "ip routing"
    ],
    "correct": 1,
    "explanation": "switchport access vlan 20 (com mode access) PoE a porta na VLAN 20.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual protocolo nativo Cisco negocia EtherChannel?",
    "options": [
      "LACP",
      "PAgP",
      "STP",
      "VTP"
    ],
    "correct": 1,
    "explanation": "PAgP é Cisco; LACP é o padrão IEEE 802.3ad.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPFv2 usa que endereços para hellos em Ethernet?",
    "options": [
      "Broadcast 255.255.255.255",
      "Multicast 224.0.0.5 e 224.0.0.6",
      "Unicast só para o DR",
      "FF02::5 apenas"
    ],
    "correct": 1,
    "explanation": "Hellos AllSPFRouters 224.0.0.5; DR/BDR também 224.0.0.6.",
    "difficulty": "Médio"
  },
  {
    "question": "DHCP snooping protege contra:",
    "options": [
      "Loops STP",
      "Servidores DHCP ilegítimos",
      "Tempestades de broadcast",
      "Rotas OSPF falsas"
    ],
    "correct": 1,
    "explanation": "Marca portas trusted/untrusted e bloqueia ofertas DHCP falsas.",
    "difficulty": "Médio"
  },
  {
    "question": "Onde se deve colocar uma ACL estendida, em regra?",
    "options": [
      "O mais perto do destino",
      "O mais perto da origem",
      "Só no core",
      "Em todos os PCs"
    ],
    "correct": 1,
    "explanation": "Perto da origem evita tráfego indesejado a atravessar a rede.",
    "difficulty": "Médio"
  },
  {
    "question": "NTP serve para:",
    "options": [
      "Traduzir nomes",
      "Sincronizar relógios na rede",
      "Medir jitter WAN",
      "Cifrar syslog"
    ],
    "correct": 1,
    "explanation": "NTP alinha o tempo dos dispositivos.",
    "difficulty": "Fácil"
  },
  {
    "question": "SNMP GET faz o que?",
    "options": [
      "Configura o dispositivo",
      "Le um objeto MIB do agente",
      "Envia um trap",
      "Reinicia a interface"
    ],
    "correct": 1,
    "explanation": "GET consulta o agente; SET altera; traps são notificações.",
    "difficulty": "Médio"
  },
  {
    "question": "QoS classification acontece onde, de preferência?",
    "options": [
      "Só no ISP",
      "O mais perto da origem (edge)",
      "Apenas no core MPLS",
      "No DNS"
    ],
    "correct": 1,
    "explanation": "Classificar no edge permite marcar DSCP cedo.",
    "difficulty": "Médio"
  },
  {
    "question": "CDP e LLDP servem para:",
    "options": [
      "Eleger o DR OSPF",
      "Descobrir vizinhos e capacidades no enlace",
      "Cifrar trunks",
      "Traduzir NAT"
    ],
    "correct": 1,
    "explanation": "Protocolos de descoberta L2: CDP Cisco, LLDP padrão.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um endereço IPv6 link-local começa tipicamente por:",
    "options": [
      "2001:",
      "fe80::/10",
      "ff00::/8",
      "::1"
    ],
    "correct": 1,
    "explanation": "Link-local FE80::/10 e obrigatório em cada interface IPv6.",
    "difficulty": "Médio"
  },
  {
    "question": "RESTCONF usa que formato de dados com frequência?",
    "options": [
      "YAML só",
      "JSON ou XML sobre HTTP",
      "CSV",
      "Protobuf obrigatório"
    ],
    "correct": 1,
    "explanation": "RESTCONF expoe YANG via HTTP, geralmente JSON ou XML.",
    "difficulty": "Médio"
  },
  {
    "question": "JSON distingue-se de XML por:",
    "options": [
      "Ser binário",
      "Ser mais leve, com pares chave-valor",
      "Não suportar arrays",
      "Exigir DTD"
    ],
    "correct": 1,
    "explanation": "JSON e texto simples com objetos e arrays, comum em APIs.",
    "difficulty": "Fácil"
  },
  {
    "question": "Ansible liga-se a dispositivos Cisco principalmente via:",
    "options": [
      "Agente instalado no IOS",
      "SSH (agentless) e por vezes NETCONF",
      "Só SNMP",
      "Telnet obrigatório"
    ],
    "correct": 1,
    "explanation": "Ansible e agentless: SSH/NETCONF, playbooks YAML.",
    "difficulty": "Médio"
  },
  {
    "question": "A wildcard mask 0.0.0.255 equivale a:",
    "options": [
      "/16",
      "/24",
      "/8",
      "/32"
    ],
    "correct": 1,
    "explanation": "0.0.0.255 casa os últimos 8 bits: prefixo /24.",
    "difficulty": "Médio"
  },
  {
    "question": "Com auto-cost reference-bandwidth 100000 (Mb/s), qual é o custo OSPF de uma FastEthernet 100 Mb/s?",
    "options": [
      "1",
      "10",
      "100",
      "1000"
    ],
    "correct": 3,
    "explanation": "Custo = reference-bandwidth / bandwidth da interface. 100000 / 100 = 1000. O custo clássico 1 só se aplica com a referência omissa de 100 Mb/s.",
    "difficulty": "Médio"
  },
  {
    "question": "Um trunk 802.1Q transporta:",
    "options": [
      "Uma só VLAN",
      "Várias VLANs com tag, exceto a nativa sem tag",
      "Apenas a VLAN 1",
      "Só tráfego de gestão"
    ],
    "correct": 1,
    "explanation": "dot1q etiqueta VLANs; a native vai untagged.",
    "difficulty": "Médio"
  },
  {
    "question": "SSID num WLAN é:",
    "options": [
      "A chave WPA3",
      "O nome da rede wireless visível aos clientes",
      "O canal DFS",
      "O BSSID só"
    ],
    "correct": 1,
    "explanation": "SSID identifica a rede; BSSID e o MAC do AP.",
    "difficulty": "Fácil"
  },
  {
    "question": "WPA3-Enterprise autentica tipicamente com:",
    "options": [
      "PSK só",
      "802.1X/EAP e um servidor RADIUS",
      "WEP de 128 bits",
      "Telnet"
    ],
    "correct": 1,
    "explanation": "Enterprise usa 802.1X com RADIUS, não um PSK partilhado.",
    "difficulty": "Médio"
  },
  {
    "question": "O primeiro passo de troubleshooting quando o site não abre na LAN é muitas vezes:",
    "options": [
      "Trocar o core",
      "Verificar IP, máscara, gateway e DNS no cliente",
      "Desligar OSPF",
      "Reset de fábrica ao ISP"
    ],
    "correct": 1,
    "explanation": "Config IP do host elimina a maioria dos casos.",
    "difficulty": "Fácil"
  },
  {
    "question": "Syslog severity 0 significa:",
    "options": [
      "Informational",
      "Emergency (mais grave)",
      "Debug",
      "Notice"
    ],
    "correct": 1,
    "explanation": "0 emergency a 7 debug; quanto menor, mais grave.",
    "difficulty": "Médio"
  },
  {
    "question": "Um WLC usa CAPWAP para:",
    "options": [
      "Substituir OSPF",
      "Tunelar e controlar APs lightweight",
      "Cifrar discos",
      "Fazer NAT"
    ],
    "correct": 1,
    "explanation": "CAPWAP é o túnel de controlo/dados entre WLC e APs.",
    "difficulty": "Médio"
  },
  {
    "question": "IPv6 GUA global unicast começa frequentemente por:",
    "options": [
      "fe80:",
      "2000::/3 (ex.: 2001:)",
      "ff02:",
      "::1"
    ],
    "correct": 1,
    "explanation": "Globais atuais estão em 2000::/3, p.ex. 2001:db8::/32.",
    "difficulty": "Médio"
  },
  {
    "question": "O comando show ip route O significa rotas:",
    "options": [
      "Estáticas",
      "OSPF",
      "Conectadas",
      "BGP"
    ],
    "correct": 1,
    "explanation": "Código O = OSPF na tabela de encaminhamento.",
    "difficulty": "Fácil"
  },
  {
    "question": "Uma porta switchport mode access aceita tags 802.1Q?",
    "options": [
      "Sim, todas as VLANs",
      "Não: só a VLAN de acesso, untagged",
      "Só a VLAN 1 tagged",
      "Só se PortFast estiver on"
    ],
    "correct": 1,
    "explanation": "Access ports esperam frames untagged da VLAN atribuída.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a distância administrativa predefinida do OSPF no Cisco IOS?",
    "options": [
      "90",
      "110",
      "120",
      "20"
    ],
    "correct": 1,
    "explanation": "OSPF interno tem AD 110. EIGRP interno é 90, RIP 120, eBGP 20, estática 1 e connected 0. O IOS prefere a menor AD quando o prefixo é igual.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é uma rota estática flutuante?",
    "options": [
      "Uma rota com AD menor que a primária para ganhar sempre",
      "Uma rota de backup com AD maior que a primária, usada só se a primária desaparecer",
      "Uma rota OSPF na tabela",
      "Um default route obrigatório"
    ],
    "correct": 1,
    "explanation": "Configura-se o mesmo prefixo com next-hop de backup e AD elevado (ex.: 250). Enquanto a rota primária existir, a flutuante fica fora da RIB.",
    "difficulty": "Médio"
  },
  {
    "question": "Como o router escolhe entre várias rotas para o mesmo destino?",
    "options": [
      "Sempre a rota mais antiga",
      "A correspondência de prefixo mais longa; se empatar, menor AD; se empatar, melhor métrica",
      "Sempre OSPF",
      "A rota com maior máscara perde"
    ],
    "correct": 1,
    "explanation": "O lookup IP usa longest-prefix match. Só depois entra AD e métrica. Uma /24 ganha a uma /16 mesmo que a /16 venha de um protocolo com melhor AD.",
    "difficulty": "Difícil"
  },
  {
    "question": "Numa rede OSPF multiacesso Ethernet, quem é eleito DR?",
    "options": [
      "O router com o Router ID mais baixo sempre",
      "O de maior prioridade OSPF; em empate, o de maior Router ID",
      "O primeiro a arrancar nunca perde",
      "O que tiver mais Loopbacks"
    ],
    "correct": 1,
    "explanation": "A prioridade (0–255, omissão 1) decide; prioridade 0 impede DR/BDR. Empate usa o Router ID mais alto. O DR origina o LSA Type 2.",
    "difficulty": "Médio"
  },
  {
    "question": "Quais são os temporizadores Hello e Dead predefinidos do OSPF em Ethernet broadcast?",
    "options": [
      "Hello 30 s, Dead 120 s",
      "Hello 10 s, Dead 40 s",
      "Hello 1 s, Dead 3 s",
      "Hello 60 s, Dead 180 s"
    ],
    "correct": 1,
    "explanation": "Em broadcast e ponto-a-ponto o Hello é 10 s e o Dead é 4×Hello (40 s). Em NBMA o Hello predefinido é 30 s. Os vizinhos têm de concordar nestes valores.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se calcula o custo OSPF predefinido no IOS clássico?",
    "options": [
      "Custo = bandwidth em kb/s",
      "Custo = reference-bandwidth / bandwidth da interface (omissão 100 Mb/s)",
      "Custo = delay EIGRP",
      "Custo = hop count"
    ],
    "correct": 1,
    "explanation": "Com reference-bandwidth 100 Mb/s, FastEthernet custa 1. Em redes modernas sobe-se auto-cost reference-bandwidth para distinguir 1/10/40 Gb/s.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual wildcard mask corresponde à sub-rede 172.16.8.0/22 num network statement OSPF?",
    "options": [
      "0.0.0.255",
      "0.0.3.255",
      "255.255.252.0",
      "0.0.7.255"
    ],
    "correct": 1,
    "explanation": "Máscara /22 = 255.255.252.0; a wildcard é o inverso bit a bit: 0.0.3.255. 0.0.0.255 é /24 e 0.0.7.255 é /21.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a ordem de escolha do OSPF Router ID se router-id não estiver configurado?",
    "options": [
      "MAC da porta Gi0/0",
      "Router-id manual; senão o IPv4 mais alto de uma Loopback up; senão o IPv4 mais alto de uma interface física up",
      "Sempre 1.1.1.1",
      "O endereço da management VLAN"
    ],
    "correct": 1,
    "explanation": "O RID é um IPv4 de 32 bits. Configurar router-id é a prática recomendada. Mudar o RID exige clear ip ospf process.",
    "difficulty": "Médio"
  },
  {
    "question": "Como é eleita a root bridge no STP/RSTP?",
    "options": [
      "Maior prioridade, depois maior MAC",
      "Menor Bridge ID: prioridade (omissão 32768) + MAC; o valor mais baixo ganha",
      "O switch com mais VLANs",
      "O primeiro a enviar BPDU"
    ],
    "correct": 1,
    "explanation": "Priority configurável em passos de 4096. spanning-tree vlan X root primary ajusta a prioridade para este switch ganhar.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual papel extra o RSTP (802.1w) introduz face ao STP clássico (802.1D)?",
    "options": [
      "Apenas root e designated",
      "Alternate e backup, papéis de descarte prontos a transitar sem timers de 30–50 s",
      "DR e BDR",
      "Listen e learn como papéis finais"
    ],
    "correct": 1,
    "explanation": "RSTP usa root, designated, alternate e backup. A convergência é em segundos (proposal/agreement), não nos 50 s do 802.1D.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz Root Guard numa porta?",
    "options": [
      "Desliga PortFast",
      "Coloca a porta em root-inconsistent se chegar um BPDU superior, impedindo que um switch a jusante se torne root",
      "Força a porta a ser root port",
      "Activa Loop Guard"
    ],
    "correct": 1,
    "explanation": "Usa-se em portas de edge para a core onde um switch de utilizador não deve ganhar a eleição. É complementar ao BPDU Guard.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se desactiva a negociação DTP num trunk Cisco?",
    "options": [
      "switchport mode access",
      "switchport nonegotiate (com modo trunk ou access estático)",
      "no spanning-tree",
      "shutdown vlan 1"
    ],
    "correct": 1,
    "explanation": "DTP (dynamic auto/desirable) pode formar trunks indesejados. A prática é modo trunk ou access estático mais nonegotiate.",
    "difficulty": "Médio"
  },
  {
    "question": "O que acontece se dois extremos de um trunk 802.1Q tiverem native VLANs diferentes?",
    "options": [
      "Nada; o tráfego tagged resolve tudo",
      "Tráfego untagged é interpretado em VLANs distintas e o CDP reporta native VLAN mismatch",
      "O trunk cai imediatamente sempre",
      "O STP desliga-se"
    ],
    "correct": 1,
    "explanation": "Frames da native VLAN vão sem tag. Se um lado pensa VLAN 1 e o outro VLAN 99, o untagged cruza VLANs.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual comando limita as VLANs permitidas num trunk?",
    "options": [
      "switchport access vlan 10",
      "switchport trunk allowed vlan 10,20,30",
      "vlan dot1q tag native",
      "spanning-tree vlan 10"
    ],
    "correct": 1,
    "explanation": "Por omissão um trunk permite 1-4094. Restringir reduz flooding e risco. Use allowed vlan add/remove para ajustar.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é uma SVI (Switch Virtual Interface) num switch L3?",
    "options": [
      "Uma subinterface de router-on-a-stick apenas",
      "A interface vlan X, um endpoint L3 interno para a VLAN, usada em encaminhamento inter-VLAN no switch",
      "Um Port-channel",
      "Um SFP"
    ],
    "correct": 1,
    "explanation": "interface vlan 10 com IP, mais ip routing, permite que o switch encaminhe entre VLANs sem router-on-a-stick.",
    "difficulty": "Médio"
  },
  {
    "question": "Em DHCP snooping, que portas devem ser trusted?",
    "options": [
      "Todas as portas de acesso de PCs",
      "Portas rumo a servidores DHCP legitimos e uplinks/trunks para esses servidores",
      "Nenhuma; o snooping não usa trust",
      "Apenas portas com PortFast"
    ],
    "correct": 1,
    "explanation": "ip dhcp snooping vlan X; nas portas de servidor/uplink: ip dhcp snooping trust. Portas untrusted bloqueiam DHCPOFFER/ACK falsos.",
    "difficulty": "Médio"
  },
  {
    "question": "O Dynamic ARP Inspection (DAI) valida ARP com base em que?",
    "options": [
      "Na tabela OSPF",
      "Na binding table do DHCP snooping (IP-MAC-porta-VLAN)",
      "No DNS",
      "Na native VLAN"
    ],
    "correct": 1,
    "explanation": "DAI intercepta ARP em portas untrusted e compara IP/MAC com a base do snooping. ARP spoofing é descartado.",
    "difficulty": "Difícil"
  },
  {
    "question": "No 802.1X, qual é o papel do switch de acesso?",
    "options": [
      "Supplicant",
      "Authenticator, que rele EAPOL e envia RADIUS ao servidor de autenticação (ex.: ISE)",
      "Servidor RADIUS em si",
      "Somente DHCP relay"
    ],
    "correct": 1,
    "explanation": "O PC e o supplicant, o switch o authenticator e o ISE/NPS o authentication server. Até autenticar, a porta pode ficar restrita.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual afirmação distingue VRRP de HSRP?",
    "options": [
      "VRRP e só IPv6",
      "VRRP e padrão IETF; HSRP e proprietario Cisco; ambos fornecem gateway virtual",
      "HSRP não tem prioridade",
      "VRRP não elege master"
    ],
    "correct": 1,
    "explanation": "HSRP usa MAC 0000.0c07.acXX; VRRP usa 0000.5e00.01XX e pode partilhar o IP real do master como virtual.",
    "difficulty": "Médio"
  },
  {
    "question": "Como um host IPv6 obtém endereço com SLAAC?",
    "options": [
      "Só com DHCPv4",
      "Recebe RA (ICMPv6) com prefixo; gera o Interface ID e faz DAD via Neighbor Solicitation",
      "O router atribui a porta TCP",
      "Usa ARP classico"
    ],
    "correct": 1,
    "explanation": "O RA traz prefixo, MTU e lifetime. O host monta o GUA, testa DAD e pode ainda usar DHCPv6 consoante os flags M/O do RA.",
    "difficulty": "Médio"
  },
  {
    "question": "No EUI-64, o que se faz ao MAC de 48 bits para formar o Interface ID?",
    "options": [
      "Copia-se sem alteração",
      "Insere-se FFFE no meio e inverte-se o bit U/L (7.o bit do primeiro octeto)",
      "Acrescenta-se só ::1",
      "Usa-se o IPv4 embebido"
    ],
    "correct": 1,
    "explanation": "00:1A:2B:3C:4D:5E vira 021A:2BFF:FE3C:4D5E (bit U/L flipped). Muitos SO preferem privacy addresses aleatorios.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual prefixo identifica endereços IPv6 Unique Local (ULA)?",
    "options": [
      "2000::/3",
      "FC00::/7 (na prática fd00::/8)",
      "FE80::/10",
      "FF00::/8"
    ],
    "correct": 1,
    "explanation": "ULA (RFC 4193) e o analogo privado do RFC 1918. Global unicast e 2000::/3, link-local FE80::/10 e multicast FF00::/8.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que todas as áreas OSPF devem ligar-se a área 0?",
    "options": [
      "Porque a área 0 tem prioridade STP",
      "Para garantir um grafo sem loops de sumarização; o SPF inter-área passa sempre pelo backbone",
      "A área 0 e a única que corre Hello",
      "Não e obrigatório em NSSA"
    ],
    "correct": 1,
    "explanation": "ABRs ligam áreas não-backbone a área 0. Virtual-links existem para remendar topologias que quebram esta regra.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a distância administrativa predefinida de uma rota estática no IOS?",
    "options": [
      "0",
      "1",
      "90",
      "110"
    ],
    "correct": 1,
    "explanation": "Connected=0, static=1, eBGP=20, EIGRP=90, OSPF=110, RIP=120, iBGP=200. Uma estática ganha a OSPF para o mesmo prefixo salvo floating AD.",
    "difficulty": "Fácil"
  },
  {
    "question": "No syslog Cisco, que número de severity corresponde a warnings?",
    "options": [
      "0",
      "4",
      "7",
      "6"
    ],
    "correct": 1,
    "explanation": "0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging. logging trap 4 envia warning e pior.",
    "difficulty": "Médio"
  },
  {
    "question": "O que significa um servidor NTP stratum 1?",
    "options": [
      "Esta 15 saltos abaixo da UTC",
      "Esta ligado a uma referência de tempo autoritativa (GPS, relogio atomico) e serve os stratum 2",
      "E um cliente Windows",
      "Não pode autenticar NTP"
    ],
    "correct": 1,
    "explanation": "Stratum 0 e a fonte (GPS/atomico). Stratum 1 sincroniza com stratum 0. Stratum 16 significa não sincronizado.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual diferença chave entre TACACS+ e RADIUS no acesso a CLI?",
    "options": [
      "RADIUS usa TCP 49 e separa autorização",
      "TACACS+ usa TCP 49 e separa autenticação, autorização e accounting; RADIUS usa UDP e combina auth+authz",
      "Não há diferença",
      "TACACS+ não cifra a password"
    ],
    "correct": 1,
    "explanation": "Para administração de dispositivos Cisco prefere-se TACACS+ (autorização comando a comando). RADIUS e o padrão em 802.1X/Wi-Fi/VPN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença central entre rede tradicional e rede controller-based (SDN)?",
    "options": [
      "SDN elimina todos os switches",
      "O plano de controlo e logicamente centralizado no controlador; os dispositivos ficam sobretudo no plano de dados, com APIs northbound/southbound",
      "SDN não usa IP",
      "O controlador substitui o cabeamento"
    ],
    "correct": 1,
    "explanation": "Southbound (NETCONF, OpenFlow, gNMI) programa os nos; northbound (REST) oferece intenção as aplicações. Catalyst Center e o exemplo campus no CCNA.",
    "difficulty": "Médio"
  },
  {
    "question": "Num fabric spine-leaf, como se ligam os switches?",
    "options": [
      "Em anel STP classico",
      "Cada leaf liga-se a todos os spines; leafs não se ligam entre si; ECMP no underlay",
      "Só um uplink por leaf",
      "Spines ligam-se a servidores"
    ],
    "correct": 1,
    "explanation": "Qualquer leaf alcanca qualquer outra em dois hops, sem loops L2 no underlay (L3). Servidores e APs ligam-se aos leafs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre hipervisor Tipo 1 e Tipo 2?",
    "options": [
      "Não existe Tipo 1",
      "Tipo 1 (bare-metal, ex.: ESXi, Hyper-V, KVM) corre no hardware; Tipo 2 (hosted, ex.: VirtualBox) corre sobre um SO anfitrião",
      "Tipo 2 e sempre mais rápido em datacenter",
      "Tipo 1 só virtualiza redes"
    ],
    "correct": 1,
    "explanation": "Tipo 1 e o padrão de datacenter/NFV (CSR, CAT8000v, ASAv). Tipo 2 serve labs no portátil.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual DSCP é o PHB Expedited Forwarding (EF), típico de voz?",
    "options": [
      "CS0 / 0",
      "EF / 46 (101110)",
      "AF41 / 34",
      "CS6 / 48"
    ],
    "correct": 1,
    "explanation": "EF (DSCP 46) pede baixa latência e jitter: LLQ na WAN. AF e four-class assurance; CS6/CS7 são controlo de rede.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre policing e shaping em QoS?",
    "options": [
      "São sinonimos",
      "Policing descarta ou re-marca tráfego acima da taxa; shaping enfileira o excesso para suavizar bursts, introduzindo atraso",
      "Shaping só existe em STP",
      "Policing aumenta a largura de banda"
    ],
    "correct": 1,
    "explanation": "Na borda da WAN o shaping evita drops no ISP. Policing protege o nucleo mas pode descartar. Ambos usam token bucket.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um ataque de overflow da CAM (MAC flooding) e como se mitiga?",
    "options": [
      "Envenenar DNS",
      "Encher a tabela MAC com endereços falsos para o switch floodar unicast como broadcast; mitiga-se com port-security",
      "Desligar OSPF",
      "Usar NAT"
    ],
    "correct": 1,
    "explanation": "Ferramentas tipo macof saturam a TCAM. O switch passa a floodar frames unicast para todas as portas da VLAN. Port-security limita o abuso.",
    "difficulty": "Médio"
  },
  {
    "question": "Observe este show ip route. Qual é o próximo salto para 10.2.2.0/24 e de que protocolo vem a rota?",
    "options": [
      "10.1.1.3, estática",
      "10.1.1.2, OSPF (AD 110)",
      "203.0.113.1, default",
      "conectado em Gi0/0"
    ],
    "correct": 1,
    "explanation": "A linha O 10.2.2.0/24 [110/2] via 10.1.1.2 é OSPF (código O), AD 110, métrica 2. 10.3.3.0/24 é estática via 10.1.1.3. A default S* vai para 203.0.113.1.",
    "difficulty": "Médio",
    "cli": "R1# show ip route\nCodes: L - local, C - connected, S - static, R - RIP, B - BGP\n       D - EIGRP, O - OSPF, IA - OSPF inter area\n       E1 - OSPF external type 1, E2 - OSPF external type 2\nGateway of last resort is 203.0.113.1 to network 0.0.0.0\n\n      10.0.0.0/8 is variably subnetted, 5 subnets, 3 masks\nC        10.1.1.0/24 is directly connected, GigabitEthernet0/0\nL        10.1.1.1/32 is directly connected, GigabitEthernet0/0\nO        10.2.2.0/24 [110/2] via 10.1.1.2, 00:12:44, GigabitEthernet0/0\nS        10.3.3.0/24 [1/0] via 10.1.1.3\nS*    0.0.0.0/0 [1/0] via 203.0.113.1"
  },
  {
    "question": "Observe este show ip ospf neighbor. O que indica o estado 2WAY/DROTHER do vizinho 4.4.4.4?",
    "options": [
      "A adjacência FULL falhou e o link está down",
      "Em Ethernet multiacesso, vizinhos DROTHER ficam 2-Way entre si; FULL só com DR/BDR",
      "O Hello está mismatched e a sessão vai resetar",
      "É o estado normal em point-to-point serial"
    ],
    "correct": 1,
    "explanation": "No broadcast, só se forma FULL com o DR e o BDR. Dois DROTHER permanecem 2-Way (viram hellos, não pedem LSA database um ao outro). No serial, FULL/ - sem DR, pri 0.",
    "difficulty": "Difícil",
    "cli": "R1# show ip ospf neighbor\nNeighbor ID     Pri   State           Dead Time   Address         Interface\n1.1.1.1           1   FULL/DR         00:00:38    10.1.1.1        GigabitEthernet0/0\n2.2.2.2           1   FULL/BDR        00:00:35    10.1.1.2        GigabitEthernet0/0\n4.4.4.4           1   2WAY/DROTHER    00:00:32    10.1.1.4        GigabitEthernet0/0\n3.3.3.3           0   FULL/  -        00:00:39    10.1.2.2        Serial0/0/0"
  },
  {
    "question": "Observe este show vlan brief. Qual VLAN definida pelo utilizador ainda não tem portas de acesso?",
    "options": [
      "VLAN 10 USERS",
      "VLAN 20 VOICE",
      "VLAN 30 SERVERS",
      "VLAN 1 default"
    ],
    "correct": 2,
    "explanation": "SERVERS (30) está active mas a coluna Ports está vazia. VLAN 10 tem Gi1/0/1-3, VLAN 20 tem Gi1/0/4, VLAN 1 tem Gi1/0/5-6. VLAN 100 NATIVE também está vazia, mas a pergunta pede a de servidores; 30 é a resposta listada como SERVERS.",
    "difficulty": "Fácil",
    "cli": "SW1# show vlan brief\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi1/0/5, Gi1/0/6\n10   USERS                            active    Gi1/0/1, Gi1/0/2, Gi1/0/3\n20   VOICE                            active    Gi1/0/4\n30   SERVERS                          active\n100  NATIVE                           active\n1002 fddi-default                     act/unsup"
  },
  {
    "question": "Observe este show etherchannel summary. O que se pode concluir sobre Po1?",
    "options": [
      "O canal está down (flag D) e usa PAgP",
      "É um EtherChannel L2 em uso (SU), protocolo LACP, com 2 portas bundled (P)",
      "Só uma porta está ativa; a outra é Hot-standby",
      "É um port-channel L3 (flag R) sem protocolo"
    ],
    "correct": 1,
    "explanation": "Po1(SU): S = Layer 2, U = in use. Protocol LACP. Gi1/0/1(P) e Gi1/0/2(P) estão bundled. PAgP apareceria como PAgP na coluna Protocol.",
    "difficulty": "Médio",
    "cli": "SW1# show etherchannel summary\nFlags:  D - down        P - bundled in port-channel\n        I - stand-alone s - suspended\n        H - Hot-standby (LACP only)\n        R - Layer3      S - Layer2\n        U - in use\nNumber of channel-groups in use: 1\nNumber of aggregators:           1\n\nGroup  Port-channel  Protocol    Ports\n------+-------------+-----------+-----------------------------------------------\n1      Po1(SU)         LACP      Gi1/0/1(P)   Gi1/0/2(P)"
  },
  {
    "question": "Observe este show ip nat translations. Qual é o Inside local do fluxo TCP para 192.0.2.80:443?",
    "options": [
      "203.0.113.5:40221",
      "10.10.10.8:44352",
      "192.0.2.80:443",
      "10.10.10.9:51100"
    ],
    "correct": 1,
    "explanation": "Inside local é o IP:porta reais do host interno (10.10.10.8:44352). Inside global é o IP público:porta após PAT (203.0.113.5:40221). Outside local/global coincidem aqui com o servidor público.",
    "difficulty": "Médio",
    "cli": "R1# show ip nat translations\nPro Inside global      Inside local       Outside local      Outside global\ntcp 203.0.113.5:40221  10.10.10.8:44352   192.0.2.80:443     192.0.2.80:443\ntcp 203.0.113.5:40222  10.10.10.9:51100   198.51.100.10:80   198.51.100.10:80\nicmp 203.0.113.5:3     10.10.10.8:3       8.8.8.8:3          8.8.8.8:3"
  },
  {
    "question": "Observe este show spanning-tree vlan 10. Qual papel tem este switch, e o que indica Gi1/0/24 P2p Edge?",
    "options": [
      "É root secondary; Edge significa blocking",
      "Este switch é o root; P2p Edge é porta de extremo (PortFast) em forwarding",
      "Não participa no STP; Edge é trunk nativo",
      "É backup root; Edge significa loop-inconsistent"
    ],
    "correct": 1,
    "explanation": "'This bridge is the root' e Root ID = Bridge ID. Priority 24586 = 24576 + sys-id-ext 10. Gi1/0/24 Type P2p Edge = RSTP edge (PortFast) designada e FWD.",
    "difficulty": "Médio",
    "cli": "SW1# show spanning-tree vlan 10\nVLAN0010\n  Spanning tree enabled protocol rstp\n  Root ID    Priority    24586\n             Address     0011.2233.4455\n             This bridge is the root\n             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec\n  Bridge ID  Priority    24586  (priority 24576 sys-id-ext 10)\n             Address     0011.2233.4455\nInterface           Role Sts Cost      Prio.Nbr Type\nGi1/0/1             Desg FWD 4         128.1    P2p\nGi1/0/24            Desg FWD 4         128.24   P2p Edge"
  },
  {
    "question": "Observe este show ip interface brief. Qual é o estado de GigabitEthernet0/1 e o de GigabitEthernet0/2?",
    "options": [
      "Ambas up/up",
      "Gi0/1 administratively down/down (shutdown); Gi0/2 up/down (L1/L2 em falta no outro extremo)",
      "Gi0/1 up/down; Gi0/2 shutdown",
      "Ambas administratively down"
    ],
    "correct": 1,
    "explanation": "administratively down = comando shutdown. up/down = interface enabled mas protocol down (cabo, relógio, keepalives, protocolo de linha). Loopback0 e Gi0/0 estão up/up.",
    "difficulty": "Médio",
    "cli": "R1# show ip interface brief\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     10.1.1.1        YES NVRAM  up                    up\nGigabitEthernet0/1     10.2.2.1        YES NVRAM  administratively down down\nGigabitEthernet0/2     10.3.3.1        YES NVRAM  up                    down\nLoopback0              1.1.1.1         YES NVRAM  up                    up"
  },
  {
    "question": "Observe este show access-lists. Um host 10.1.1.50 abre HTTPS para 8.8.8.8. O que acontece?",
    "options": [
      "É permitido pela ACE 10 (SSH)",
      "É negado pela ACE 30 (deny tcp eq 443) e conta no hit-count dessa linha",
      "É permitido pela ACE 40 antes das denies",
      "A ACL ignora HTTPS porque não tem UDP"
    ],
    "correct": 1,
    "explanation": "As ACEs são avaliadas top-down. 10 só permite SSH para 10.9.9.9. 20 nega HTTP, 30 nega HTTPS para any — casa com 10.1.1.50→8.8.8.8:443. A 40 permit ip any any nunca é alcançada para este fluxo. Há implicit deny no fim, mas a 30 já decide.",
    "difficulty": "Difícil",
    "cli": "R1# show access-lists\nExtended IP access list BLOCK_WEB\n    10 permit tcp 10.1.1.0 0.0.0.255 host 10.9.9.9 eq 22\n    20 deny   tcp 10.1.1.0 0.0.0.255 any eq 80\n    30 deny   tcp 10.1.1.0 0.0.0.255 any eq 443\n    40 permit ip any any"
  },
  {
    "question": "Observe este show standby brief. Qual é o IP virtual HSRP e o estado deste router?",
    "options": [
      "10.1.1.3, Standby",
      "10.1.1.1, Active com preempt (Pri 110)",
      "10.1.1.1, Listen",
      "local, Init"
    ],
    "correct": 1,
    "explanation": "Virtual IP 10.1.1.1, State Active, P = preempt, prioridade 110. O Standby é 10.1.1.3. Hosts usam 10.1.1.1 como gateway.",
    "difficulty": "Médio",
    "cli": "R1# show standby brief\n                     P indicates configured to preempt\n                     |\nInterface   Grp  Pri P State   Active          Standby         Virtual IP\nGi0/0       1    110 P Active  local           10.1.1.3        10.1.1.1"
  },
  {
    "question": "Observe este show ip dhcp snooping binding. Para que serve esta tabela no switch?",
    "options": [
      "Lista de vizinhos OSPF",
      "Bindings IP-MAC-VLAN-porta aprendidos de DHCP; base para DAI e IP Source Guard",
      "A CAM de unicast desconhecidos",
      "Traduções NAT"
    ],
    "correct": 1,
    "explanation": "DHCP snooping grava leases vistos em portas untrusted (e estáticos opcionais). DAI e IPSG consultam esta binding table para filtrar ARP e IP spoofing.",
    "difficulty": "Médio",
    "cli": "SW1# show ip dhcp snooping binding\nMacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface\n00:11:22:33:44:55   10.10.10.20      86234       dhcp-snooping  10    GigabitEthernet1/0/8\n00:AA:BB:CC:DD:EE   10.10.10.21      85012       dhcp-snooping  10    GigabitEthernet1/0/9\nTotal number of bindings: 2"
  },
  {
    "question": "Num tronco 802.1Q, o que acontece ao tráfego da native VLAN?",
    "options": [
      "É sempre descartado",
      "Atravessa sem tag 802.1Q (untagged), ao contrário das outras VLANs permitidas",
      "Usa obrigatoriamente VLAN 1 mesmo se a nativa for 99",
      "É encapsulado ISL"
    ],
    "correct": 1,
    "explanation": "Frames da native VLAN vão untagged. As restantes VLANs permitidas levam tag de 4 bytes. Native VLANs diferentes nos dois extremos causam VLAN hopping / mis-mapping. Cisco recomenda native VLAN unused + vlan dot1q tag native.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve a voice VLAN (switchport voice vlan) numa porta de acesso?",
    "options": [
      "Substituir o 802.1X",
      "Permitir que o telefone IP fique numa VLAN tagged (tipicamente 802.1Q) e o PC na access VLAN untagged",
      "Desligar o PoE",
      "Criar um EtherChannel com o telefone"
    ],
    "correct": 1,
    "explanation": "O telefone atua como mini-switch: frames de voz saem tagged na voice VLAN; o PC na mesma porta usa a access VLAN untagged. CDP/LLDP pode avisar o telefone da VLAN de voz.",
    "difficulty": "Médio"
  },
  {
    "question": "No RSTP (802.1w), o estado que substitui o blocking do 802.1D clássico é:",
    "options": [
      "Listening",
      "Discarding",
      "Learning apenas",
      "Disabled apenas"
    ],
    "correct": 1,
    "explanation": "RSTP tem Discarding, Learning e Forwarding. Discarding cobre disabled/blocking/listening do 802.1D: não reencaminha frames. A convergência usa sync/proposal em vez de timers longos.",
    "difficulty": "Médio"
  },
  {
    "question": "Dois switches com PAgP em modo auto em ambas as pontas formam EtherChannel?",
    "options": [
      "Sim, auto/auto é a combinação recomendada",
      "Não: auto/auto não inicia a negociação; precisa desirable num extremo (ou on/on sem protocolo)",
      "Sim, mas só com LACP",
      "Não, porque PAgP exige MST"
    ],
    "correct": 1,
    "explanation": "PAgP: desirable inicia, auto espera. auto+auto = sem canal. LACP: active inicia, passive espera; active+active ou active+passive funcionam, passive+passive não. mode on/on força canal sem LACP/PAgP (perigoso se configs divergem).",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual combinação LACP estabelece um canal?",
    "options": [
      "passive + passive",
      "active + active, ou active + passive",
      "auto + auto",
      "desirable + auto apenas em LACP"
    ],
    "correct": 1,
    "explanation": "LACP active envia PDUs; passive só responde. Pelo menos um extremo tem de ser active. auto/desirable são modos PAgP, não LACP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz o comando passive-interface GigabitEthernet0/0 em OSPF?",
    "options": [
      "Desliga a interface no sentido L3",
      "Anuncia a rede dessa interface mas não envia hellos nem forma adjacências nela",
      "Torna o router DR obrigatório",
      "Filtra LSA tipo 5"
    ],
    "correct": 1,
    "explanation": "Útil em LANs de utilizadores: a sub-rede aparece no OSPF mas um PC não tenta adjacência. passive-interface default + no passive-interface nos links de transit é um padrão comum.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se origina uma default route no OSPF a partir de um ASBR que já tem rota default na RIB?",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 null0 apenas",
      "default-information originate (e optionally always se a default não estiver na RIB)",
      "network 0.0.0.0 255.255.255.255 área 0",
      "ip ospf priority 0"
    ],
    "correct": 1,
    "explanation": "default-information originate injeta LSA Type-5 (ou Type-7 em NSSA) de 0.0.0.0/0 se existir uma default na RIB. A keyword always origina mesmo sem essa rota.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença prática entre inter-VLAN routing por SVI e router-on-a-stick?",
    "options": [
      "SVI só funciona com IPv6",
      "SVI: o switch L3 encaminha nas SVIs do próprio chassis; ROAS: um router externo usa subinterfaces num tronco",
      "ROAS não precisa de 802.1Q",
      "Não há diferença de encaminhamento"
    ],
    "correct": 1,
    "explanation": "SVI (interface vlan X) + ip routing no MLS é o desenho campus atual. ROAS usa um tronco 802.1Q para um router com subinterfaces encapsulation dot1Q. Ambos separam broadcast domains; o SVI escala melhor.",
    "difficulty": "Médio"
  },
  {
    "question": "Onde se deve colocar, em regra, uma ACL standard numerada?",
    "options": [
      "O mais perto da origem, porque filtra só o destino",
      "O mais perto do destino, porque filtra apenas o IP de origem",
      "Sempre no ASBR OSPF",
      "Só no servidor NTP"
    ],
    "correct": 1,
    "explanation": "Standard ACL (1-99, 1300-1999) casa só origem. Perto da origem cortaria tráfego a mais destinos. Extended (100-199) filtra origem+destino+L4 e coloca-se perto da origem.",
    "difficulty": "Médio"
  },
  {
    "question": "Toda a ACL IPv4 no IOS termina com que regra implícita?",
    "options": [
      "permit ip any any",
      "deny ip any any (implicit deny)",
      "permit icmp any any",
      "deny tcp any any eq 80"
    ],
    "correct": 1,
    "explanation": "Se nenhuma ACE casar, o pacote é descartado. Por isso uma ACL de 'bloqueio pontual' precisa de um permit ip any any no fim. ACLs vazias aplicadas a uma interface podem bloquear tudo.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em NAT Cisco, que interfaces se marcam com ip nat inside e ip nat outside?",
    "options": [
      "Inside = Internet pública; outside = LAN",
      "Inside = domínio da rede interna (IPs a traduzir); outside = lado público/externo",
      "Ambas as keywords são sinónimos de shutdown",
      "Só se usam em IPv6"
    ],
    "correct": 1,
    "explanation": "Inside local/global e outside local/global derivam destas marcas. PAT típico: LAN = inside, WAN = outside, ip nat inside source list ... interface <WAN> overload.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz um NAT estático 1:1 (ip nat inside source static)?",
    "options": [
      "Muitos privados partilham um público via portas",
      "Mapeia um inside local fixo para um inside global fixo, sempre",
      "Traduz só o MAC",
      "Substitui o ARP"
    ],
    "correct": 1,
    "explanation": "Static NAT é bidirecional e previsível — típico para publicar um servidor. PAT/overload multiplexa muitos internos num IP. Dynamic pool traduz 1:1 a partir de um conjunto, sem garantia do mesmo global.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre os violation modes de port-security: protect, restrict e shutdown?",
    "options": [
      "São idênticos",
      "protect descarta silenciosamente; restrict descarta e incrementa contadores/snmp; shutdown PoE a porta em err-disabled",
      "shutdown só gera syslog e não fecha a porta",
      "protect elege o root STP"
    ],
    "correct": 1,
    "explanation": "O default é shutdown (err-disabled até shutdown/no shutdown ou errdisable recovery). restrict notifica; protect é o mais silencioso e pior para troubleshooting.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que faz errdisable recovery cause psecure-violation?",
    "options": [
      "Desativa port-security para sempre",
      "Reabilita automaticamente portas err-disabled por port-security após um intervalo (omissão 300 s)",
      "Converte a porta em tronco",
      "Limpa a tabela NAT"
    ],
    "correct": 1,
    "explanation": "Útil para não deixar PCs eternamente down após um flap de MAC. O intervalo configura-se com errdisable recovery interval. A causa tem de estar na lista de recovery.",
    "difficulty": "Médio"
  },
  {
    "question": "No 802.1X, quais são os três papéis clássicos?",
    "options": [
      "Root, designated, blocked",
      "Supplicant (cliente), authenticator (switch/AP), authentication server (RADIUS/ISE)",
      "DR, BDR, DROTHER",
      "ITR, ETR, MS"
    ],
    "correct": 1,
    "explanation": "O switch é authenticator EAP (EAPoL na porta, RADIUS no backend). O PC é supplicant. ISE/NPS é o servidor. MAB cobre dispositivos sem 802.1X.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa arquitetura Cisco lightweight, o que é o split MAC do CAPWAP?",
    "options": [
      "O AP e o WLC partilham funções MAC: o AP trata tempo-real (beacon/ACK) e o WLC gestão/associação/802.1X",
      "O MAC do cliente é dividido ao meio",
      "Substitui o 802.11 por Ethernet puro",
      "É um tipo de EtherChannel"
    ],
    "correct": 1,
    "explanation": "CAPWAP (UDP 5246 controlo, 5247 dados) tunela entre AP e WLC. Split MAC deixa o AP com funções time-sensitive e centraliza policy no WLC. FlexConnect pode comutar dados localmente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual diferença chave entre AP autónomo e AP lightweight?",
    "options": [
      "Autónomo não tem rádio",
      "Autónomo tem a config/SSID no próprio AP; lightweight obtém config do WLC via CAPWAP",
      "Lightweight não pode usar 802.1X",
      "Autónomo exige sempre DNA Center"
    ],
    "correct": 1,
    "explanation": "Autonomous IOS AP gere-se um a um. Lightweight (CAPWAP) escala com WLC: SSID, RF, roaming e AAA centralizados. Mobility Express/embedded WLC é um meio-termo.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual endereço IPv6 multicast representa all-nodes no link local?",
    "options": [
      "FF02::2",
      "FF02::1",
      "FF02::5",
      "FF02::9"
    ],
    "correct": 1,
    "explanation": "FF02::1 = all nodes (como 224.0.0.1). FF02::2 = all routers. FF02::5/6 = OSPFv3. FF02::9 = RIPng. FF02::1:2 = DHCPv6 relay. Não existe broadcast IPv6.",
    "difficulty": "Médio"
  },
  {
    "question": "No NDP IPv6, para que servem Neighbor Solicitation e Neighbor Advertisement?",
    "options": [
      "Substituem o OSPF Hello",
      "Resolvem IPv6→MAC (equivalente ao ARP) e detetam duplicados (DAD)",
      "Atribuem o prefixo GUA sozinhos sem RA",
      "Cifram o tráfego do link"
    ],
    "correct": 1,
    "explanation": "NS (ICMPv6 type 135) pergunta quem tem um IPv6; NA (136) responde. DAD envia NS para o próprio endereço tentado. RS/RA (133/134) servem SLAAC e default gateway.",
    "difficulty": "Médio"
  },
  {
    "question": "SNMPv3 authPriv oferece o quê, relativamente a SNMPv2c?",
    "options": [
      "Só community strings em claro, como v2c",
      "Autenticação e cifração das mensagens (utilizador + priv)",
      "Substitui o NTP",
      "Só traps, nunca GET"
    ],
    "correct": 1,
    "explanation": "v2c usa community (noAuthNoPriv de facto). v3: noAuthNoPriv, authNoPriv (MD5/SHA) e authPriv (mais AES). Preferir authPriv e views restritas. Informs (v2/v3) têm ACK; traps não.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre SNMP trap e SNMP inform?",
    "options": [
      "Trap usa TCP; inform usa UDP sempre",
      "Trap é não confirmado; inform espera ACK e é retransmitido se falhar",
      "Inform só existe em SNMPv1",
      "Trap cifra e inform não"
    ],
    "correct": 1,
    "explanation": "Ambos são notificações do agente para o NMS. Inform (v2c/v3) é fiável; trap pode perder-se. O custo é mais carga no agente e no NMS.",
    "difficulty": "Médio"
  },
  {
    "question": "No syslog Cisco, o severity 7 corresponde a quê?",
    "options": [
      "emergencies",
      "alerts",
      "debugging",
      "critical"
    ],
    "correct": 2,
    "explanation": "0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging. logging trap/debugging aumenta volume; não se deixa 7 em produção sem filtro.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre DSCP e CoS no marking de QoS?",
    "options": [
      "São o mesmo campo de 3 bits",
      "CoS são 3 bits no tag 802.1Q (L2); DSCP são 6 bits no IP (L3) e atravessam routers",
      "DSCP só existe em frames ISL",
      "CoS substitui o IP precedence em IPv6 apenas"
    ],
    "correct": 1,
    "explanation": "CoS (PCP) perde-se quando o tag 802.1Q é retirado. DSCP (p.ex. EF 46, AF41) vai no cabeçalho IP. Trust boundary: classificar/marcar o mais perto da origem e confiar DSCP no núcleo.",
    "difficulty": "Médio"
  },
  {
    "question": "RESTCONF no IOS-XE usa tipicamente que transporte e URI base?",
    "options": [
      "Telnet e /soap",
      "HTTPS (TCP 443) e /restconf (YANG em JSON ou XML)",
      "TFTP e /rpc",
      "SNMP e /mib"
    ],
    "correct": 1,
    "explanation": "RESTCONF mapeia HTTP GET/POST/PUT/PATCH/DELETE em datastores YANG. NETCONF usa SSH 830 e XML RPC. AAA e certificados protegem ambos.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa rede controller-based (SDN), a API northbound liga o quê?",
    "options": [
      "O controlador aos dispositivos via OpenFlow/NETCONF apenas",
      "Aplicações/orquestração ao controlador (pedido de intent)",
      "Dois spines entre si",
      "O CAPWAP do AP ao WLC apenas"
    ],
    "correct": 1,
    "explanation": "Northbound: apps → controller (REST). Southbound: controller → network devices (NETCONF, RESTCONF, OpenFlow, CLI/SSH). O plano de dados continua nos switches.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual endereço multicast e MAC virtual usa o HSRP versão 2 (IPv4)?",
    "options": [
      "224.0.0.2 e 0000.0c07.acXX",
      "224.0.0.102 e 0000.0c9f.fXXX",
      "224.0.0.18 e 0000.5e00.01XX",
      "224.0.0.10 e 0000.0c07.acXX"
    ],
    "correct": 1,
    "explanation": "HSRPv1: 224.0.0.2 e MAC 0000.0c07.acXX (XX = grupo 0-255). HSRPv2: 224.0.0.102 e MAC 0000.0c9f.fXXX (grupos até 4095) + hello IPv6. VRRP: 224.0.0.18 e 0000.5e00.01XX.",
    "difficulty": "Difícil"
  },
  {
    "question": "Uma característica do VRRP que o distingue do HSRP clássico é:",
    "options": [
      "Só Cisco o implementa",
      "O VIP pode ser o IP real de um dos routers (master dono do endereço); é padrão IETF",
      "Não elege master",
      "Usa sempre GLBP AVG"
    ],
    "correct": 1,
    "explanation": "HSRP é Cisco proprietary e o VIP é sempre um IP extra. VRRP (RFC) permite que o master use o seu IP de interface como VIP. GLBP (Cisco) faz load-share com vários AVF.",
    "difficulty": "Difícil"
  },
  {
    "question": "No GLBP, qual é o papel do AVG versus AVF?",
    "options": [
      "AVG só faz NAT; AVF só faz STP",
      "AVG responde ARP do VIP e atribui MACs virtuais; AVFs encaminham o tráfego dos hosts",
      "AVF elege o root; AVG é backup STP",
      "Não há diferença"
    ],
    "correct": 1,
    "explanation": "Active Virtual Gateway (um) gere o VIP e distribui virtual MACs por round-robin/weighted. Active Virtual Forwarders (vários) encaminham. Assim há load balancing por host, não só standby passivo.",
    "difficulty": "Difícil"
  },
  {
    "question": "Como o Cisco IOS escolhe entre duas rotas OSPF de igual prefixo e igual custo?",
    "options": [
      "Usa só a mais antiga",
      "Instala ambas e faz equal-cost load balancing (CEF), até ao máximo de paths",
      "Prefere sempre a de maior Router ID",
      "Descarta-as e usa RIP"
    ],
    "correct": 1,
    "explanation": "ECMP: várias entradas na RIB/FIB com o mesmo prefixo/custo. maximum-paths limita o número. Se os custos diferem, fica só a de menor custo. AD só desempata protocolos diferentes.",
    "difficulty": "Médio"
  },
  {
    "question": "Quais são as distâncias administrativas predefinidas de eBGP, EIGRP interno, OSPF, RIP e iBGP?",
    "options": [
      "20, 90, 110, 120, 200",
      "110, 90, 20, 120, 200",
      "90, 20, 110, 120, 1",
      "20, 110, 90, 200, 120"
    ],
    "correct": 0,
    "explanation": "eBGP 20, EIGRP interno 90, IGRP 100, OSPF 110, IS-IS 115, RIP 120, EIGRP externo 170, iBGP 200, unknown 255. Estática 1, connected 0. Menor AD ganha na RIB.",
    "difficulty": "Médio"
  },
  {
    "question": "Se a RIB tem 10.1.0.0/16 via OSPF e 10.1.1.0/24 via estática, um pacote para 10.1.1.50 usa qual rota?",
    "options": [
      "A OSPF /16, porque AD 110 é irrelevante aqui",
      "A estática /24, por longest-match (prefixo mais específico)",
      "Load-balance entre as duas",
      "Descarta, conflito de rotas"
    ],
    "correct": 1,
    "explanation": "Longest prefix match é o primeiro critério de encaminhamento. AD e métrica só se aplicam a rotas do mesmo prefixo. /24 ganha a /16 para 10.1.1.50.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é uma rota estática recursiva no IOS?",
    "options": [
      "Uma rota com next-hop IP que o router ainda tem de resolver via outra rota da RIB (não aponta para interface)",
      "Uma rota que se apaga sozinha",
      "Uma default originada no OSPF",
      "Uma rota NAT"
    ],
    "correct": 0,
    "explanation": "ip route 10.0.0.0 255.0.0.0 192.0.2.1 exige que 192.0.2.1 seja alcançável (tipicamente via connected ou IGP). Fully specified: ip route ... 192.0.2.1 GigabitEthernet0/0 resolve também a interface de saída.",
    "difficulty": "Médio"
  },
  {
    "question": "WPA3-Personal usa que mecanismo em vez do PSK handshake clássico do WPA2?",
    "options": [
      "WEP de 40 bits",
      "SAE (Simultaneous Authentication of Equals), resistente a ataques offline de dicionário",
      "Só Open System",
      "TKIP obrigatório"
    ],
    "correct": 1,
    "explanation": "SAE (Dragonfly) faz handshake de palavra-passe sem expor um hash atacável offline como o 4-way PSK. WPA3-Enterprise usa 192-bit suite opcional. WPA2-Enterprise continua 802.1X/EAP.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se distinguem o data plane, o control plane e o management plane num router?",
    "options": [
      "São a mesma CPU queue",
      "Data: encaminhamento de pacotes (CEF/TCAM); control: protocolos (OSPF/BGP/ARP); management: SSH/SNMP/NETCONF",
      "Control plane só existe em switches L2",
      "Management plane é o EtherChannel"
    ],
    "correct": 1,
    "explanation": "CoPP protege o control plane. Fora de banda (mgmt VRF) isola o management. O data plane deve continuar mesmo se o SSH falhar. Confundir os planos é um erro clássico de desenho.",
    "difficulty": "Médio"
  },
  {
    "question": "O hashing de EtherChannel (src-dst-ip, por exemplo) serve para quê?",
    "options": [
      "Eleger o DR OSPF",
      "Escolher em que membro do bundle cada fluxo é enviado, mantendo a ordem dos pacotes do fluxo",
      "Substituir o STP no bundle",
      "Traduzir NAT"
    ],
    "correct": 1,
    "explanation": "Um fluxo (mesmo hash) fica numa porta para não reordenar TCP. Sem diversidade de IP/porta, um único membro pode saturar. L3/L4 hashing espalha melhor que só src-mac.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre Root Guard e BPDU Guard?",
    "options": [
      "Não há diferença",
      "BPDU Guard err-disable a porta de extremo se receber qualquer BPDU; Root Guard impede que essa porta se torne root port (superior BPDU)",
      "Root Guard só funciona com LACP",
      "BPDU Guard elege o root"
    ],
    "correct": 1,
    "explanation": "BPDU Guard: access/PortFast — um switch não autorizado desliga a porta. Root Guard: uplinks para a borda — BPDUs superiores são ignoradas e a porta vai root-inconsistent, preservando a root designada.",
    "difficulty": "Médio"
  },
  {
    "question": "Ansible aplica playbooks a dispositivos Cisco sobretudo de que forma?",
    "options": [
      "Agente permanente em cada IOS",
      "Agentless via SSH/NETCONF a partir de um control node, com inventário e módulos ios_*",
      "Somente SNMP SET",
      "Somente Telnet sem inventário"
    ],
    "correct": 1,
    "explanation": "Ansible não instala agente no IOS. O inventário lista hosts; os módulos (ios_config, ios_command, ios_facts) usam SSH. Puppet/Chef clássicos usam agente. YAML descreve o estado desejado.",
    "difficulty": "Médio"
  },
  {
    "question": "NTP autenticado (ntp authenticate / ntp trusted-key) serve para quê?",
    "options": [
      "Aumentar o stratum para 16",
      "Garantir que o router só aceita tempo de servidores com chave simétrica válida, evitando relógio falso",
      "Substituir o DNS",
      "Cifrar todo o tráfego de utilizador"
    ],
    "correct": 1,
    "explanation": "Um NTP falso pode falhar certs, logs e Kerberos. Chaves simétricas (ou NTPv4 Autokey, raro) autenticam o servidor. Stratum 16 = unsynchronized. Prefira fontes internas stratum 1/2.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença fundamental entre OSPFv2 e OSPFv3?",
    "options": [
      "OSPFv3 só corre em switches L2",
      "OSPFv2 encaminha IPv4; OSPFv3 foi desenhado para IPv6 (e pode fazer AF para IPv4 em plataformas modernas)",
      "OSPFv3 usa TCP em vez de IP",
      "Não há qualquer diferença de protocolo"
    ],
    "correct": 1,
    "explanation": "OSPFv2 é para IPv4. OSPFv3 (RFC 5340) transporta LSAs para IPv6; em IOS-XE, Address Families permitem também IPv4 sobre o processo OSPFv3.",
    "difficulty": "Médio"
  },
  {
    "question": "Em OSPFv3, a adjacência forma-se com base em quê, de forma distinta do “network” IPv4 clássico do OSPFv2?",
    "options": [
      "Apenas no endereço de loopback 127.0.0.1",
      "Ativação por interface (ipv6 ospf / ospfv3) e Router ID; não se usa o comando network com máscaras IPv4 da mesma forma",
      "Só via BGP multiprotocol",
      "Exclusivamente por SNMP"
    ],
    "correct": 1,
    "explanation": "Em OSPFv3 configura-se o processo e ativa-se nas interfaces IPv6. O Router ID (32 bits) continua obrigatório; muitas vezes define-se manualmente se não houver interfaces IPv4.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual multicast IPv6 usa OSPFv3 para AllSPFRouters no link?",
    "options": [
      "FF02::1",
      "FF02::5",
      "FF02::A",
      "FF02::1:2"
    ],
    "correct": 1,
    "explanation": "OSPFv3 usa FF02::5 (AllSPFRouters) e FF02::6 (AllDRouters), análogos a 224.0.0.5/6 do OSPFv2, mas em IPv6 link-local multicast.",
    "difficulty": "Difícil"
  },
  {
    "question": "A saída de `show ip interface brief` mostra Serial0/0/0 como administratively down / down. O que falta tipicamente?",
    "options": [
      "Só configurar BGP",
      "A interface está em shutdown — falta `no shutdown` (além de IP/encapsulamento se necessário)",
      "O cabo de consola está invertido",
      "O NTP está dessincronizado"
    ],
    "correct": 1,
    "explanation": "administratively down significa shutdown na interface. `no shutdown` traz para up/down ou up/up conforme o protocolo de linha.",
    "difficulty": "Médio",
    "cli": true
  },
  {
    "question": "Em `show etherchannel summary`, uma porta aparece como `(I)` independente. O que isto indica?",
    "options": [
      "O EtherChannel está perfeito em todas as portas",
      "Essa porta não faz parte do bundle (config/mismatch LACP/PAgP ou bundling falhou)",
      "A VLAN nativa é 1 em todo o lado",
      "O STP está desligado"
    ],
    "correct": 1,
    "explanation": "Flags como (I) Independent significam que a porta não entrou no port-channel — tipicamente mismatch de modo LACP, VLANs, velocidade/duplex ou config inconsistente.",
    "difficulty": "Difícil",
    "cli": true
  },
  {
    "question": "Que informação `show cdp neighbors detail` NÃO fornece diretamente?",
    "options": [
      "Hostname e plataforma do vizinho",
      "Endereço IP de gestão do vizinho (se anunciado)",
      "A tabela completa de rotas BGP do AS remoto",
      "Interface local e remota da ligação"
    ],
    "correct": 2,
    "explanation": "CDP/LLDP dão adjacência L2/L3 de gestão (ID, plataforma, IPs, capabilities). Tabelas BGP completas vêm de `show ip bgp` / sessão BGP, não de CDP.",
    "difficulty": "Médio",
    "cli": true
  },
  {
    "question": "No blueprint CCNA 200-301 v1.1, Generative AI e Predictive AI entram sobretudo em que domínio de conhecimento?",
    "options": [
      "Automation and Programmability (e conceitos de gestão/operação assistida por AI)",
      "Só em Security Fundamentals (15%)",
      "Só em IP Connectivity (25%)",
      "Só em Network Access (STP)"
    ],
    "correct": 0,
    "explanation": "Cisco posicionou AI/ML e automação no domínio de Automation and Programmability (~10%), alinhado com operação e gestão de rede modernas — não substitui OSPF/STP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual contraste prático entre Generative AI e Predictive AI num contexto de operações de rede?",
    "options": [
      "Generative AI só funciona offline; Predictive AI só em cloud pública",
      "Predictive AI estima tendências/anomalias a partir de dados; Generative AI produz texto/código/sugestões novas a partir de prompts",
      "São sinónimos absolutos no blueprint Cisco",
      "Generative AI substitui completamente o protocolo OSPF"
    ],
    "correct": 1,
    "explanation": "Predictive: forecasting e deteção (capacidade, falhas). Generative: criar conteúdo/configurações/explicações. Ambos aparecem no discurso do CCNA v1.1; nenhum substitui protocolos de encaminhamento.",
    "difficulty": "Médio"
  },
  {
    "question": "Machine Learning numa plataforma de assurance de rede (ex.: análise de telemetria) serve tipicamente para quê?",
    "options": [
      "Substituir o spanning-tree no acesso",
      "Atribuir automaticamente endereços IPv4 públicos a todos os hosts",
      "Aprender padrões de baseline e destacar desvios/anomalias mais cedo do que limiares estáticos sozinhos",
      "Cifrar frames entre switches com WEP"
    ],
    "correct": 2,
    "explanation": "ML em assurance usa histórico para baseline e anomalias (latência, drops, clientes Wi-Fi). Não altera L2/L3 de encaminhamento nem substitui STP/OSPF.",
    "difficulty": "Médio"
  },
  {
    "question": "No CCNA atual, Terraform entra no tema de Infrastructure as Code. O que o distingue tipicamente de Ansible num exame conceptual?",
    "options": [
      "Terraform só gere Windows; Ansible só routers",
      "Terraform usa apenas Telnet; Ansible usa só SNMP",
      "Chef e Puppet voltaram a ser obrigatórios e substituem Terraform",
      "Terraform declara o estado desejado da infraestrutura (often cloud/API); Ansible é sobretudo procedural/automação de configuração em dispositivos"
    ],
    "correct": 3,
    "explanation": "Blueprint recente enfatiza Terraform e removeu Chef/Puppet como nomes a memorizar. Terraform = IaC declarativo (estado); Ansible = playbooks/automação tipicamente agentless via SSH/API.",
    "difficulty": "Difícil"
  },
  {
    "question": "BPDU Filter numa porta de acesso — qual efeito típico?",
    "options": [
      "Impede o envio/receção de BPDUs nessa porta (comportamento distinto de BPDU Guard)",
      "Força a porta a ser sempre root bridge",
      "Ativa automaticamente PortFast em todas as portas trunk",
      "Converte a VLAN nativa em VLAN 1 de forma permanente"
    ],
    "correct": 0,
    "explanation": "BPDU Filter suprime BPDUs na interface. BPDU Guard, por contraste, err-disable se receber BPDU. São features diferentes; misturá-las é erro clássico de exame.",
    "difficulty": "Difícil"
  },
  {
    "question": "API northbound dum controlador SDN: qual método de autenticação é comum em REST modernas (conceito CCNA)?",
    "options": [
      "Apenas ARP estático no cliente",
      "Tokens (ex.: Bearer/OAuth2) ou chaves de API sobre HTTPS — não credenciais em claro em HTTP",
      "Somente community SNMP pública",
      "WEP partilhado entre controlador e switch"
    ],
    "correct": 1,
    "explanation": "APIs REST de controladores usam HTTPS + autenticação (tokens/OAuth/API keys). SNMP communities e WEP não são o modelo de API northbound moderno.",
    "difficulty": "Médio"
  },
  {
    "question": "Containers e VRFs no CCNA: qual afirmação é a mais correta?",
    "options": [
      "Um container é o mesmo que uma VRF no IOS",
      "VRFs só existem em switches L2 sem IP",
      "Containers isolam processos/apps no host; VRFs isolam tabelas de encaminhamento no dispositivo — conceitos de virtualização em camadas diferentes",
      "Containers substituem necessariamente o protocolo BGP"
    ],
    "correct": 2,
    "explanation": "Virtualização no blueprint cobre hosts (VMs/containers) e rede (VRF). Não são a mesma tecnologia; BGP continua independente.",
    "difficulty": "Médio"
  },
  {
    "question": "Cloud device management no CCNA (ex.: gestão de dispositivos via cloud) implica tipicamente o quê para o admin?",
    "options": [
      "Que o spanning-tree deixa de ser necessário no campus",
      "Que todos os switches passam a ser Layer 1 hubs",
      "Que IPv6 fica proibido na LAN",
      "Gestão/monitorização centralizada fora do site (com conectividade e controlo de acesso à consola cloud), sem eliminar a necessidade de L2/L3 locais corretos"
    ],
    "correct": 3,
    "explanation": "Gestão cloud centraliza inventário/config/telemetria, mas a rede local (VLANs, routing, STP, segurança) continua a ter de funcionar. Não desliga fundamentos.",
    "difficulty": "Fácil"
  }
];
