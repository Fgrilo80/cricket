window.QUIZ_BANK = [
  {
    "question": "Qual é a função da camada de Transporte no modelo TCP/IP?",
    "options": [
      "Endereçamento lógico IP dos hosts na rede",
      "Entrega confiável de dados entre aplicações",
      "Encaminhamento de pacotes IP entre redes",
      "Transmissão física de bits no cabo de rede"
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
    "explanation": "Uma rota por omissão (0.0.0.0/0) é usada quando nenhuma rota mais específica corresponde; costuma ser estática ou aprendida como gateway of last resort.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é uma rota estática?",
    "options": [
      "Rota aprendida sozinha pelo protocolo OSPF",
      "Rota configurada manualmente pelo administrador",
      "Rota padrão 0.0.0.0/0 usada para todo tráfego",
      "Rota de backup que OSPF instala se o link cair"
    ],
    "correct": 1,
    "explanation": "Rotas estáticas são configuradas manualmente e mantêm-se até serem alteradas ou removidas; não recalculam sozinhas como OSPF/EIGRP quando a topologia muda.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre OSPF e EIGRP?",
    "options": [
      "OSPF é da Cisco e o EIGRP é padrão aberto",
      "EIGRP usa algoritmo DUAL, OSPF usa Dijkstra",
      "OSPF e EIGRP usam o mesmo algoritmo SPF",
      "OSPF converge sempre mais rápido que EIGRP"
    ],
    "correct": 1,
    "explanation": "EIGRP é protocolo proprietário Cisco com algoritmo DUAL. OSPF é aberto e usa algoritmo de Dijkstra (SPF).",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é NAT overload (PAT)?",
    "options": [
      "Tradução fixa de um IP privado para um único endereço público",
      "Múltiplos IPs privados compartilhando um único IP público usando portas",
      "Tradução apenas das portas de destino rumo a servidores internos",
      "Bloqueio do tráfego de saída que não corresponde a uma ACL"
    ],
    "correct": 1,
    "explanation": "PAT (Port Address Translation) permite que múltiplos dispositivos internos compartilhem um IP público usando diferentes portas.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'ip route 0.0.0.0 0.0.0.0 192.168.1.1'?",
    "options": [
      "Configurar rota estática padrão",
      "Rota estática à rede 10.10.1.0",
      "Apagar a rota estática padrão",
      "Listar rotas via show ip route"
    ],
    "correct": 0,
    "explanation": "Este comando configura a rota estática padrão (default route) para o gateway 192.168.1.1.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é VLAN tagging (802.1Q)?",
    "options": [
      "Método que cifra os frames das VLANs num link tronco",
      "Inserção de tag em frames para identificar a VLAN de origem",
      "Protocolo de encaminhamento que anuncia o ID da VLAN",
      "Tipo de switch limitado a reencaminhar uma só VLAN"
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
    "explanation": "HTTPS usa TCP 443 com TLS para cifrar HTTP. HTTP simples é 80; não confundir com SSH (22) nem com portas DNS/SMTP comuns.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um ACL (Access Control List)?",
    "options": [
      "Lista de MACs permitidos na segurança de porta",
      "Conjunto de regras para permitir ou negar tráfego",
      "Tabela de encaminhamento com o próximo salto IP",
      "Ajuste de VLANs e das portas de acesso no switch"
    ],
    "correct": 1,
    "explanation": "ACLs são usadas para filtrar tráfego com base em critérios como IP de origem/destino, portas, etc.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do protocolo HSRP?",
    "options": [
      "Encaminhamento dinâmico de rotas via OSPF",
      "Fornecer gateway redundante com IP virtual",
      "Repartir pacotes entre os routers do HSRP",
      "Túnel VPN cifrado entre routers da filial"
    ],
    "correct": 1,
    "explanation": "HSRP (Hot Standby Router Protocol) fornece redundância de gateway com um IP virtual compartilhado.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a principal diferença entre router e switch L3?",
    "options": [
      "O router é mais rápido porque encaminha cada pacote em software na CPU",
      "Switch L3 faz encaminhamento na camada 3 mas com hardware otimizado para switching",
      "Router e switch L3 encaminham do mesmo modo e no mesmo tipo de hardware",
      "O router não aceita VLANs e rejeita trunks 802.1Q nas suas interfaces"
    ],
    "correct": 1,
    "explanation": "Switches Layer 3 combinam funções de switching L2 com encaminhamento L3 em hardware ASIC, mais rápido que roteadores tradicionais.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é ' EtherChannel'?",
    "options": [
      "Protocolo que cifra os frames Ethernet trocados entre dois switches",
      "Tecnologia para agrupar múltiplas portas físicas em um único link lógico",
      "Tipo de VLAN que separa as portas de acesso no mesmo switch local",
      "Método de NAT que junta vários IPs privados num único IP público"
    ],
    "correct": 1,
    "explanation": "EtherChannel permite agregar links físicos para aumentar largura de banda e redundância (LACP ou PAgP).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show ip ospf neighbor'?",
    "options": [
      "Listar rotas IP via show ip route",
      "Mostrar vizinhos OSPF e seu estado",
      "Mostrar config OSPF da interface",
      "Mostrar o buffer local de syslog"
    ],
    "correct": 1,
    "explanation": "Este comando exibe os vizinhos OSPF, estado da adjacência e informações de DR/BDR.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'prefix-list' em roteadores Cisco?",
    "options": [
      "Lista de prefixos IP para filtragem de rotas",
      "Lista de VLANs que filtra portas de acesso",
      "Lista de ACLs que filtram o tráfego IP",
      "Lista de usuários locais para autenticação"
    ],
    "correct": 0,
    "explanation": "Prefix-lists são usadas para filtrar rotas com base em prefixos de rede e comprimento de máscara.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'standard' e 'extended' ACL?",
    "options": [
      "Standard filtra apenas por IP de origem, extended por origem, destino, protocolo e porta",
      "Não há diferença: standard e extended filtram os mesmos campos de origem e destino",
      "Extended é mais simples: compara só o IP de origem e ignora destino, protocolo e porta",
      "Standard é mais seguro pois inspeciona origem, destino, protocolo e estado da sessão"
    ],
    "correct": 0,
    "explanation": "Standard ACLs (1-99) filtram apenas por IP de origem. Extended (100-199) oferecem filtragem mais granular.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'BGP' e para que é usado?",
    "options": [
      "Protocolo de encaminhamento interno, como o OSPF, usado apenas dentro de um AS",
      "Protocolo de encaminhamento externo usado na internet para troca de rotas entre AS",
      "Protocolo de backup que só anuncia rotas quando o IGP principal para de funcionar",
      "Protocolo de segurança que cifra o tráfego de dados e autentica cada pacote IP"
    ],
    "correct": 1,
    "explanation": "BGP (Border Gateway Protocol) é o protocolo de encaminhamento usado na internet para trocar rotas entre sistemas autônomos.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do comando 'ip nat inside source list 1 interface GigabitEthernet0/0 overload'?",
    "options": [
      "Configurar NAT estático um-para-um fixo",
      "Configurar PAT dinâmico usando ACL e interface",
      "Apagar as traduções NAT com clear ip nat",
      "Ver tabela NAT com show ip nat translations"
    ],
    "correct": 1,
    "explanation": "Este comando configura PAT (NAT overload) usando a ACL 1 e o IP da interface como endereço público.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'CEF' (Cisco Express Forwarding)?",
    "options": [
      "Protocolo de encaminhamento que troca LSAs e calcula a árvore SPF",
      "Tecnologia de encaminhamento de pacotes em hardware para alta performance",
      "Modelo de switch de camada 2 que só comuta quadros Ethernet",
      "Método de backup que grava a running-config na memória NVRAM"
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
    "explanation": "Telnet usa TCP 23 e é texto claro; prefira SSH na TCP 22 para gestão. A porta 23 não é HTTP nem HTTPS.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'VRF' (Virtual Routing and Forwarding)?",
    "options": [
      "Tipo de VLAN que isola o broadcast no switch sem criar uma tabela de rotas própria",
      "Tecnologia que permite múltiplas tabelas de encaminhamento independentes no mesmo router",
      "Protocolo de VPN que cifra túneis IPsec e autentica os sites remotos da empresa",
      "Tipo de firewall que aplica zonas e políticas para filtrar o tráfego entre redes"
    ],
    "correct": 1,
    "explanation": "VRF permite criar instâncias de encaminhamento separadas no mesmo dispositivo físico, útil para segmentação.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'Spanning Tree PortFast'?",
    "options": [
      "Acelerar convergência de STP em portas de acesso",
      "Desligar o STP na porta e ignorar os BPDUs",
      "Aumentar a prioridade STP da porta no switch",
      "Criar um trunk 802.1Q nessa porta de acesso"
    ],
    "correct": 0,
    "explanation": "PortFast coloca imediatamente portas de acesso em estado forwarding, pulando os estados listening/learning.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'Anycast' em IPv6?",
    "options": [
      "Endereço único de vários hosts, entregue a todos eles",
      "Endereço que identifica o dispositivo mais próximo em um grupo",
      "Endereço de broadcast IPv6 enviado a todos os nós do link",
      "Endereço multicast do bloco FF00::/8 entregue a todo o grupo"
    ],
    "correct": 1,
    "explanation": "Anycast entrega o pacote para o dispositivo mais próximo (menor métrica) em um grupo de dispositivos com o mesmo endereço.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'RIPv2' e 'OSPF'?",
    "options": [
      "RIPv2 é link-state com áreas e OSPF é distance-vector",
      "RIPv2 tem limite de 15 hops, OSPF é hierárquico e escalável",
      "Não há diferença: ambos são distance-vector de 15 hops",
      "RIPv2 é mais seguro pois cifra as rotas e o OSPF não"
    ],
    "correct": 1,
    "explanation": "RIPv2 é distance-vector com limite de 15 hops. OSPF é link-state, hierárquico (áreas) e escalável para grandes redes.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'subinterface' em roteadores Cisco?",
    "options": [
      "Interface física do chassis, sem encapsulamento 802.1Q nem divisão de VLANs no link",
      "Interface lógica criada em uma interface física para suportar múltiplas VLANs (router-on-a-stick)",
      "Interface de backup que só entra em serviço se a porta física principal falhar",
      "Interface wireless do router, destinada apenas a clientes Wi-Fi da rede local"
    ],
    "correct": 1,
    "explanation": "Subinterfaces permitem que um router único processe tráfego de múltiplas VLANs em uma única interface física (router-on-a-stick).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show ip nat translations'?",
    "options": [
      "Ver a configuração do NAT",
      "Mostrar traduções NAT ativas",
      "Apagar traduções NAT ativas",
      "Mostrar ACLs usadas no NAT"
    ],
    "correct": 1,
    "explanation": "show ip nat translations mostra a tabela ativa de traduções NAT/PAT (bindings inside↔outside). Não é a tabela de encaminhamento.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'GLBP' (Gateway Load Balancing Protocol)?",
    "options": [
      "Protocolo de encaminhamento que anuncia rotas entre roteadores, como o OSPF faz",
      "Protocolo que fornece redundância e balanceamento de carga entre múltiplos gateways",
      "Tipo de ACL, numerada ou nomeada, que filtra pacotes pelo IP de origem",
      "Protocolo de VPN que cifra o tráfego entre sites remotos, como o IPsec"
    ],
    "correct": 1,
    "explanation": "GLBP fornece redundância de gateway com balanceamento de carga ativo-ativo usando múltiplos roteadores ativos.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'ip helper-address'?",
    "options": [
      "Configurar NAT de endereços privados para IP público",
      "Encaminhar broadcasts DHCP para um servidor DHCP remoto",
      "Configurar rota estática com rede, máscara e next-hop",
      "Ativar firewall para bloquear tráfego de entrada"
    ],
    "correct": 1,
    "explanation": "ip helper-address permite que broadcasts DHCP de clientes sejam encaminhados para um servidor DHCP em outra rede.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'SDM' (Switching Database Manager) em switches Cisco?",
    "options": [
      "Gerenciador de VLANs que cria, nomeia e atribui portas de acesso no switch",
      "Recurso que otimiza o uso de recursos de hardware (TCAM) para diferentes funções",
      "Protocolo de encaminhamento que calcula rotas com o algoritmo de Dijkstra",
      "Tipo de memória volátil onde o switch guarda a running-config em uso"
    ],
    "correct": 1,
    "explanation": "SDM permite alocar recursos de hardware (TCAM) de forma otimizada para routing, security, etc.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'inside local' e 'inside global' em NAT?",
    "options": [
      "Inside local é o IP público na Internet e inside global é o IP privado",
      "Inside local é o IP privado interno, inside global é o IP público após tradução",
      "Não há diferença: inside local e inside global designam o mesmo endereço",
      "Inside local é o IP do servidor externo de destino, fora da tabela de NAT"
    ],
    "correct": 1,
    "explanation": "Inside local = IP original do host interno. Inside global = IP público usado na internet após NAT.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'BPDU Guard'?",
    "options": [
      "Protocolo de encaminhamento que anuncia rotas e elege vizinhos no OSPF",
      "Recurso de segurança que desabilita porta se receber BPDU (evita loops)",
      "Tipo de VLAN que isola portas e impede o tráfego direto entre os hosts",
      "Método de backup que envia a startup-config para um servidor TFTP"
    ],
    "correct": 1,
    "explanation": "BPDU Guard desabilita automaticamente uma porta PortFast se ela receber um BPDU, prevenindo loops.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'debug ip packet'?",
    "options": [
      "Mostrar a running-config guardada na memória do router",
      "Mostrar pacotes IP processados pelo router (cuidado: alto impacto)",
      "Apagar os logs armazenados no buffer de logging do router",
      "Reiniciar a interface e derrubar o link por alguns segundos"
    ],
    "correct": 1,
    "explanation": "debug ip packet mostra detalhes de pacotes IP processados. Use com cuidado pois pode sobrecarregar o CPU.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'router-on-a-stick'?",
    "options": [
      "Um router físico isolado, identificado apenas pelo chassis e pelas portas físicas de hardware",
      "Configuração onde um router usa subinterfaces para rotear entre múltiplas VLANs em uma única interface física",
      "Tipo de switch multicamada que encaminha frames entre VLANs sem precisar de um router externo",
      "Método de NAT em que vários hosts internos compartilham um IP público usando portas TCP"
    ],
    "correct": 1,
    "explanation": "Router-on-a-stick usa uma interface física com subinterfaces 802.1Q para rotear entre VLANs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a porta padrão do protocolo FTP?",
    "options": [
      "20/21",
      "TCP 22, porta padrão do SSH",
      "TCP 23, porta padrão do Telnet",
      "TCP 80, porta padrão do HTTP"
    ],
    "correct": 0,
    "explanation": "O controlo FTP é TCP 21; em modo ativo os dados usam frequentemente TCP 20. Em ambientes atuais é comum modo passivo com portas de dados dinâmicas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'PVST+' (Per-VLAN Spanning Tree Plus)?",
    "options": [
      "STP com uma única instância comum aplicada a todas as VLANs juntas",
      "Implementação Cisco de STP que executa uma instância de STP por VLAN",
      "Protocolo de balanceamento de carga entre gateways, sem usar STP",
      "Tipo de trunk 802.1Q que leva várias VLANs no mesmo link físico"
    ],
    "correct": 1,
    "explanation": "PVST+ executa uma instância separada de STP para cada VLAN, permitindo otimização por VLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'ip domain-lookup'?",
    "options": [
      "Ativar resolução DNS no router",
      "Desabilitar DNS neste router",
      "Definir o servidor DNS usado",
      "Mostrar o cache DNS do router"
    ],
    "correct": 0,
    "explanation": "ip domain-lookup permite ao router resolver nomes via DNS (servidor configurado). no ip domain-lookup desativa esse comportamento.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'LACP' (Link Aggregation Control Protocol)?",
    "options": [
      "Protocolo de encaminhamento que anuncia rotas RIP",
      "Protocolo padrão IEEE para negociação de EtherChannel",
      "Tipo de ACL que filtra pacotes só pelo IP de origem",
      "Protocolo de segurança que cifra tráfego como IPsec"
    ],
    "correct": 1,
    "explanation": "Uma ACL standard corresponde só ao IP de origem; coloca-se perto do destino quando possível. ACLs extended fazem match L3/L4 e costumam ir perto da origem.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre 'active' e 'passive' em LACP?",
    "options": [
      "Active inicia a negociação, passive responde",
      "Não há diferença: os modos LACP agem igual",
      "Passive é mais rápido na formação do canal",
      "Active é inseguro e não autentica o vizinho"
    ],
    "correct": 0,
    "explanation": "Active (modo ativo) inicia a negociação LACP. Passive (passivo) apenas responde a negociações.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'HSRP preemption'?",
    "options": [
      "Desabilitar o HSRP na interface e remover o endereço IP virtual do grupo",
      "Permitir que router com prioridade mais alta assuma o papel de active quando disponível",
      "Tipo de balanceamento que reparte tráfego entre vários routers HSRP ativos",
      "Backup de configuração que grava a running-config do router HSRP na NVRAM"
    ],
    "correct": 1,
    "explanation": "Preemption permite que um router com maior prioridade assuma automaticamente o papel de active quando volta a ficar disponível.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show spanning-tree vlan 10'?",
    "options": [
      "Mostrar a configuração da VLAN 10, com nome, portas e estado",
      "Mostrar estado do STP para VLAN 10 (root bridge, portas, etc.)",
      "Mostrar as ACLs da VLAN 10, com cada linha de filtragem",
      "Mostrar o NAT da VLAN 10 no router de borda da rede"
    ],
    "correct": 1,
    "explanation": "show spanning-tree vlan <id> mostra papel/estado STP, root bridge e custos dessa VLAN. Não é a tabela de endereços MAC.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'route-map' em roteadores Cisco?",
    "options": [
      "Mapa de VLANs que associa cada ID de VLAN às portas de acesso do switch",
      "Ferramenta poderosa para manipulação e filtragem de rotas com base em critérios complexos",
      "Tipo de ACL numerada que permite ou nega pacotes apenas pelo IP de origem",
      "Protocolo de VPN que cifra o tráfego entre sites remotos, no estilo do IPsec"
    ],
    "correct": 1,
    "explanation": "Route-maps são usados para controle avançado de redistribuição de rotas, PBR e NAT.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do 'ip sla'?",
    "options": [
      "Configurar NAT para traduzir endereços privados em um IP público de saída",
      "Monitorar performance da rede (latência, jitter, perda) com testes sintéticos",
      "Configurar uma VPN IPsec para cifrar o tráfego entre dois sites remotos",
      "Gerenciar usuários locais, com senhas e níveis de privilégio no router"
    ],
    "correct": 1,
    "explanation": "IP SLA permite criar testes de performance de rede para monitorar SLA e acionar ações.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'uRPF' (Unicast Reverse Path Forwarding)?",
    "options": [
      "Protocolo de encaminhamento que anuncia as rotas e escolhe o melhor caminho",
      "Mecanismo de segurança que verifica se o IP de origem é alcançável pela interface de entrada",
      "Tipo de firewall que inspeciona sessões e bloqueia tráfego não solicitado",
      "Método de backup que copia a configuração do router para um servidor remoto"
    ],
    "correct": 1,
    "explanation": "uRPF ajuda a prevenir spoofing verificando se o caminho de retorno para o IP de origem existe na interface de entrada.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a diferença entre 'named' e 'numbered' ACL?",
    "options": [
      "Named é mais antigo e surgiu antes das ACLs numbered de 1 a 99",
      "Named ACL permite edição fácil e nomes descritivos, numbered é numérico",
      "Não há diferença: named e numbered filtram e editam-se igual",
      "Named é menos seguro porque ignora a máscara e a ordem das linhas"
    ],
    "correct": 1,
    "explanation": "Named ACLs usam nomes e permitem inserção/remoção de linhas específicas. Numbered são mais limitados.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'MPLS' (Multiprotocol Label Switching)?",
    "options": [
      "Protocolo de encaminhamento que calcula rotas por uma métrica",
      "Tecnologia de comutação de rótulos para alta performance e VPNs",
      "Tipo de switch que encaminha os frames só pela tabela MAC",
      "Método de NAT que traduz endereços privados para um IP público"
    ],
    "correct": 1,
    "explanation": "MPLS usa rótulos curtos para encaminhar pacotes em alta velocidade e suporta VPNs Layer 2/3.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual é a função do comando 'clear ip nat translation *'?",
    "options": [
      "Listar traduções NAT ativas no ecrã",
      "Apagar todas as traduções NAT ativas",
      "Reiniciar o processo NAT do router",
      "Definir NAT estático numa interface"
    ],
    "correct": 1,
    "explanation": "Este comando limpa todas as traduções NAT atuais (útil após mudanças de configuração).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é 'sticky MAC' em port-security?",
    "options": [
      "Endereço MAC de hardware que permanece imutável e nunca muda na porta",
      "Recurso que aprende dinamicamente MACs e os salva na configuração running",
      "Tipo de VLAN que isola as portas de acesso sem aprender endereços MAC",
      "Método de criptografia que cifra frames Ethernet na porta do switch"
    ],
    "correct": 1,
    "explanation": "Sticky MAC aprende endereços MAC dinamicamente e os adiciona à configuração como estáticos.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do 'ip tcp window-size'?",
    "options": [
      "Configurar o MTU da interface e fragmentar pacotes IP",
      "Ajustar o tamanho da janela TCP para otimizar throughput",
      "Configurar a porta TCP de escuta de um serviço local",
      "Ativar o firewall de zona para filtrar sessões TCP"
    ],
    "correct": 1,
    "explanation": "Permite ajustar o tamanho da janela TCP para melhorar performance em links de alta latência.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que é 'DMVPN' (Dynamic Multipoint VPN)?",
    "options": [
      "VPN estática site-to-site com túneis IPsec definidos à mão em cada peer remoto",
      "Tecnologia Cisco que permite VPNs dinâmicas hub-and-spoke com spoke-to-spoke direto",
      "Tipo de firewall que inspeciona sessões e bloqueia todo o tráfego não solicitado",
      "Protocolo de encaminhamento que anuncia prefixos IP entre vizinhos, como o OSPF"
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
    "explanation": "Em configuração global, vlan 20 cria (ou entra) a VLAN 20 na base de VLANs. A atribuição à porta access é um comando switchport separado.",
    "difficulty": "Fácil"
  },
  {
    "question": "Para uma porta de acesso na VLAN 20 usa-se:",
    "options": [
      "switchport mode trunk",
      "switchport access vlan 20",
      "no switchport (routed)",
      "ip routing no router"
    ],
    "correct": 1,
    "explanation": "switchport mode access e switchport access vlan 20 colocam a porta na VLAN 20 sem tag. O modo trunk transporta várias VLANs com tags.",
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
    "explanation": "PAgP é proprietário Cisco para negociar EtherChannel; LACP (IEEE 802.3ad/802.1AX) é a alternativa standard. on força o bundle sem negociação.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPFv2 usa que endereços para hellos em Ethernet?",
    "options": [
      "Broadcast para 255.255.255.255",
      "Multicast 224.0.0.5 e 224.0.0.6",
      "Unicast só para o DR eleito",
      "Apenas o FF02::5 do OSPFv3"
    ],
    "correct": 1,
    "explanation": "Hellos OSPF vão para AllSPFRouters 224.0.0.5; DR/BDR também escutam AllDRouters 224.0.0.6. Não é o mesmo que 224.0.0.10 do EIGRP.",
    "difficulty": "Médio"
  },
  {
    "question": "DHCP snooping protege contra:",
    "options": [
      "Loops de STP na camada 2",
      "Servidores DHCP ilegítimos",
      "Tempestades de broadcast",
      "Rotas OSPF falsas na LAN"
    ],
    "correct": 1,
    "explanation": "DHCP Snooping constrói uma tabela de bindings e marca portas trusted/untrusted para descartar ofertas DHCP falsas vindas de clientes.",
    "difficulty": "Médio"
  },
  {
    "question": "Onde se deve colocar uma ACL estendida, em regra?",
    "options": [
      "Mais perto do destino",
      "O mais perto da origem",
      "Só no núcleo da rede",
      "Em cada PC da rede"
    ],
    "correct": 1,
    "explanation": "Coloque ACLs extended perto da origem para descartar tráfego indesejado cedo e poupar largura de banda; ACLs standard costumam ir perto do destino.",
    "difficulty": "Médio"
  },
  {
    "question": "NTP serve para:",
    "options": [
      "Traduzir nomes de host DNS",
      "Sincronizar relógios na rede",
      "Medir jitter nos links WAN",
      "Cifrar mensagens de syslog"
    ],
    "correct": 1,
    "explanation": "O NTP (Network Time Protocol) sincroniza os relógios entre dispositivos para que logs, certificados e autenticação (ex.: Kerberos) partilhem uma base temporal comum. Não é DNS, não é sonda de jitter, nem encriptação para syslog.",
    "difficulty": "Fácil"
  },
  {
    "question": "SNMP GET faz o que?",
    "options": [
      "Faz SET num objeto MIB",
      "Le um objeto MIB do agente",
      "Envia um trap SNMP ao NMS",
      "Reinicia a interface L2"
    ],
    "correct": 1,
    "explanation": "SNMP GET lê objetos MIB no agente; SET altera-os; traps/informs notificam o NMS. Não é exportação NetFlow.",
    "difficulty": "Médio"
  },
  {
    "question": "QoS classification acontece onde, de preferência?",
    "options": [
      "Só no router de borda do ISP",
      "O mais perto da origem (edge)",
      "Apenas dentro do núcleo MPLS",
      "No servidor DNS da empresa"
    ],
    "correct": 1,
    "explanation": "Classifique/marque o tráfego o mais perto possível da borda (acesso) para o DSCP/CoS ser definido cedo e respeitado no caminho.",
    "difficulty": "Médio"
  },
  {
    "question": "CDP e LLDP servem para:",
    "options": [
      "Eleger o router designado do OSPF",
      "Descobrir vizinhos e capacidades no enlace",
      "Cifrar as tramas nos trunks 802.1Q",
      "Traduzir endereços IP com NAT estático"
    ],
    "correct": 1,
    "explanation": "CDP é descoberta de vizinhos proprietária Cisco; LLDP é o standard IEEE 802.1AB. Ambos anunciam identidade de dispositivo/porta em L2.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um endereço IPv6 link-local começa tipicamente por:",
    "options": [
      "2001::/16, prefixo típico de unicast global",
      "fe80::/10",
      "ff00::/8, prefixo de multicast do IPv6",
      "::1, endereço de loopback do próprio host"
    ],
    "correct": 1,
    "explanation": "Endereços IPv6 link-local em FE80::/10 são obrigatórios em cada interface IPv6 para neighbor discovery e vários protocolos de controlo.",
    "difficulty": "Médio"
  },
  {
    "question": "RESTCONF usa que formato de dados com frequência?",
    "options": [
      "Apenas YAML, sem JSON",
      "JSON ou XML sobre HTTP",
      "Ficheiros CSV por FTP",
      "Só Protobuf, sem XML"
    ],
    "correct": 1,
    "explanation": "RESTCONF expõe dados modelados em YANG sobre HTTP(S), tipicamente em JSON ou XML—alternativa amigável a HTTP face a NETCONF/SSH.",
    "difficulty": "Médio"
  },
  {
    "question": "JSON distingue-se de XML por:",
    "options": [
      "Ser um formato binário compacto",
      "Ser mais leve, com pares chave-valor",
      "Não suportar listas nem arrays",
      "Exigir um DTD para ser válido"
    ],
    "correct": 1,
    "explanation": "JSON é um formato de texto leve com objetos e arrays, muito usado em APIs REST. Não é um protocolo de encaminhamento nem o próprio YANG.",
    "difficulty": "Fácil"
  },
  {
    "question": "Ansible liga-se a dispositivos Cisco principalmente via:",
    "options": [
      "Um agente permanente no IOS",
      "SSH (agentless) e por vezes NETCONF",
      "Apenas polling SNMP ao IOS",
      "Telnet obrigatório para o IOS"
    ],
    "correct": 1,
    "explanation": "Ansible é tipicamente agentless: o nó de controlo envia playbooks YAML via SSH/WinRM/NETCONF. Não é sobretudo um poller SNMP.",
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
    "explanation": "O wildcard 0.0.0.255 significa ‘corresponder o último octeto’—equivalente a um prefixo /24 em match OSPF/ACL.",
    "difficulty": "Médio"
  },
  {
    "question": "Com auto-cost reference-bandwidth 100000 (Mb/s), qual é o custo OSPF de uma FastEthernet 100 Mb/s?",
    "options": [
      "1, o custo OSPF desta FastEthernet",
      "10, o custo OSPF desta FastEthernet",
      "100, o custo OSPF desta FastEthernet",
      "1000"
    ],
    "correct": 3,
    "explanation": "Custo = reference-bandwidth / bandwidth da interface. 100000 / 100 = 1000. O custo clássico 1 só se aplica com a referência omissa de 100 Mb/s.",
    "difficulty": "Médio"
  },
  {
    "question": "Um trunk 802.1Q transporta:",
    "options": [
      "Uma só VLAN de acesso, sempre sem tag",
      "Várias VLANs com tag, exceto a nativa sem tag",
      "Apenas a VLAN 1, nativa ou etiquetada",
      "Apenas tráfego de gestão, como CDP e SSH"
    ],
    "correct": 1,
    "explanation": "802.1Q etiqueta tramas com VLAN ID nos trunks; a VLAN nativa vai/recebe sem tag. ISL é uma alternativa Cisco antiga.",
    "difficulty": "Médio"
  },
  {
    "question": "SSID num WLAN é:",
    "options": [
      "A chave WPA3 que cifra o tráfego dos clientes",
      "O nome da rede wireless visível aos clientes",
      "O canal DFS que a rádio do AP escolhe na banda",
      "Apenas o BSSID, e não o nome da rede wireless"
    ],
    "correct": 1,
    "explanation": "O SSID é o nome legível da WLAN; o BSSID é o MAC da rádio do AP que identifica aquele BSS.",
    "difficulty": "Fácil"
  },
  {
    "question": "WPA3-Enterprise autentica tipicamente com:",
    "options": [
      "Só uma PSK partilhada por todos os clientes",
      "802.1X/EAP e um servidor RADIUS",
      "WEP de 128 bits na autenticação",
      "Telnet para autenticar o cliente"
    ],
    "correct": 1,
    "explanation": "WPA2/WPA3-Enterprise usa 802.1X com servidor RADIUS por utilizador; PSK (personal) partilha uma passphrase para todos os clientes.",
    "difficulty": "Médio"
  },
  {
    "question": "O primeiro passo de troubleshooting quando o site não abre na LAN é muitas vezes:",
    "options": [
      "Trocar o switch de core antes de qualquer teste",
      "Verificar IP, máscara, gateway e DNS no cliente",
      "Desligar o OSPF em todos os routers da LAN",
      "Fazer reset de fábrica no equipamento do ISP"
    ],
    "correct": 1,
    "explanation": "Quando um host não alcança nada, verifique primeiro IP, máscara, gateway e DNS locais—a maioria das falhas é má configuração no host.",
    "difficulty": "Fácil"
  },
  {
    "question": "Syslog severity 0 significa:",
    "options": [
      "Informational (nível syslog 6)",
      "Emergency (mais grave)",
      "Debug (nível syslog 7)",
      "Notice (nível syslog 5)"
    ],
    "correct": 1,
    "explanation": "A severidade syslog vai de 0 (emergencies) a 7 (debugging); números mais baixos são mais graves. O filtro usa muitas vezes um limiar de severidade.",
    "difficulty": "Médio"
  },
  {
    "question": "Um WLC usa CAPWAP para:",
    "options": [
      "Substituir o OSPF no encaminhamento IP",
      "Tunelar e controlar APs lightweight",
      "Cifrar os discos locais do controlador",
      "Fazer NAT entre a WLAN e a rede LAN"
    ],
    "correct": 1,
    "explanation": "CAPWAP cria o túnel de controlo (e muitas vezes de dados) entre AP lightweight e WLC. Substituiu o LWAPP antigo nas arquiteturas Cisco.",
    "difficulty": "Médio"
  },
  {
    "question": "IPv6 GUA global unicast começa frequentemente por:",
    "options": [
      "fe80:, prefixo link-local",
      "2000::/3 (ex.: 2001:)",
      "ff02:, prefixo multicast",
      "::1, endereço de loopback"
    ],
    "correct": 1,
    "explanation": "Unicast global IPv6 atual está em 2000::/3 (ex.: prefixo de documentação 2001:db8::/32). FE80::/10 é link-local, não global.",
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
    "explanation": "Em show ip route, o código O marca rotas aprendidas por OSPF. S é estática, C ligada, B BGP, D EIGRP—não confundir as letras.",
    "difficulty": "Fácil"
  },
  {
    "question": "Uma porta switchport mode access aceita tags 802.1Q?",
    "options": [
      "Sim, tramas com tag de todas as VLANs",
      "Não: só a VLAN de acesso, untagged",
      "Só a VLAN 1 e somente se vier tagged",
      "Só quando PortFast está ativo na porta"
    ],
    "correct": 1,
    "explanation": "Portas access pertencem a uma VLAN e esperam tramas sem tag. Tramas etiquetadas costumam pertencer a trunks.",
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
      "Uma rota com AD menor que a primária, escolhida sempre para ganhar o encaminhamento",
      "Uma rota de backup com AD maior que a primária, usada só se a primária desaparecer",
      "Uma rota OSPF que o processo instala na tabela de encaminhamento do router",
      "Um default route obrigatório, instalado sempre na RIB qualquer que seja o AD"
    ],
    "correct": 1,
    "explanation": "Configura-se o mesmo prefixo com next-hop de backup e AD elevado (ex.: 250). Enquanto a rota primária existir, a flutuante fica fora da RIB.",
    "difficulty": "Médio"
  },
  {
    "question": "Como o router escolhe entre várias rotas para o mesmo destino?",
    "options": [
      "Sempre a rota mais antiga que já se encontra instalada na tabela de encaminhamento",
      "A correspondência de prefixo mais longa; se empatar, menor AD; se empatar, melhor métrica",
      "Sempre a rota OSPF, mesmo quando o prefixo é mais curto ou a distância administrativa é pior",
      "A rota com a máscara mais longa perde sempre para a rota de prefixo mais curto"
    ],
    "correct": 1,
    "explanation": "O lookup IP usa longest-prefix match. Só depois entra AD e métrica. Uma /24 ganha a uma /16 mesmo que a /16 venha de um protocolo com melhor AD.",
    "difficulty": "Difícil"
  },
  {
    "question": "Numa rede OSPF multiacesso Ethernet, quem é eleito DR?",
    "options": [
      "Sempre o router com o Router ID mais baixo, sem olhar à prioridade",
      "O de maior prioridade OSPF; em empate, o de maior Router ID",
      "O primeiro router a arrancar, que nunca perde o papel de DR",
      "O router que tem o maior número de interfaces Loopback"
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
      "Custo = o valor de bandwidth da interface em kb/s, sem qualquer divisão",
      "Custo = reference-bandwidth / bandwidth da interface (omissão 100 Mb/s)",
      "Custo = o delay acumulado do EIGRP ao longo de todo o caminho",
      "Custo = o número de saltos até ao destino, como faz o RIP"
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
      "O endereço MAC da Gi0/0, convertido em 32 bits e usado como Router ID antes de qualquer IPv4 de interface",
      "Router-id manual; senão o IPv4 mais alto de uma Loopback up; senão o IPv4 mais alto de uma interface física up",
      "Sempre o valor fixo 1.1.1.1, mesmo que existam Loopbacks ou interfaces físicas up com outros endereços IPv4 do router",
      "O endereço IPv4 da VLAN de gestão, mesmo quando uma Loopback up tem um IPv4 mais alto do que essa VLAN"
    ],
    "correct": 1,
    "explanation": "O RID é um IPv4 de 32 bits. Configurar router-id é a prática recomendada. Mudar o RID exige clear ip ospf process.",
    "difficulty": "Médio"
  },
  {
    "question": "Como é eleita a root bridge no STP/RSTP?",
    "options": [
      "Maior prioridade numérica e, em empate, o maior MAC, mesmo com um Bridge ID mais alto",
      "Menor Bridge ID: prioridade (omissão 32768) + MAC; o valor mais baixo ganha",
      "O switch com mais VLANs activas na base local, ignorando a prioridade e o MAC",
      "O primeiro switch a enviar um BPDU, sem comparar a prioridade nem o endereço MAC"
    ],
    "correct": 1,
    "explanation": "Priority configurável em passos de 4096. spanning-tree vlan X root primary ajusta a prioridade para este switch ganhar.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual papel extra o RSTP (802.1w) introduz face ao STP clássico (802.1D)?",
    "options": [
      "Apenas os papéis root e designated, sem alternate nem backup como papéis extra do RSTP 802.1w",
      "Alternate e backup, papéis de descarte prontos a transitar sem timers de 30–50 s",
      "Os papéis DR e BDR do OSPF, eleitos por prioridade e Router ID entre os switches da mesma VLAN",
      "Listen e learn como papéis finais e estáveis da porta, em vez de estados transitórios do STP"
    ],
    "correct": 1,
    "explanation": "RSTP usa root, designated, alternate e backup. A convergência é em segundos (proposal/agreement), não nos 50 s do 802.1D.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz Root Guard numa porta?",
    "options": [
      "Desliga o PortFast nessa porta de acesso e impede a transição rápida da porta para o estado forwarding",
      "Coloca a porta em root-inconsistent se chegar um BPDU superior, impedindo que um switch a jusante se torne root",
      "Força a porta a tornar-se root port assim que recebe um BPDU, mesmo que esse BPDU seja inferior ao da root bridge",
      "Activa o Loop Guard na mesma porta e passa-a a loop-inconsistent quando deixam de chegar BPDUs do vizinho"
    ],
    "correct": 1,
    "explanation": "Usa-se em portas de edge para a core onde um switch de utilizador não deve ganhar a eleição. É complementar ao BPDU Guard.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se desactiva a negociação DTP num trunk Cisco?",
    "options": [
      "switchport mode access, que desliga o DTP e mantém o trunk dinâmico",
      "switchport nonegotiate (com modo trunk ou access estático)",
      "no spanning-tree, que desactiva o STP em vez da negociação DTP",
      "shutdown vlan 1, que desliga a VLAN 1 em vez do DTP no trunk"
    ],
    "correct": 1,
    "explanation": "DTP (dynamic auto/desirable) pode formar trunks indesejados. A prática é modo trunk ou access estático mais nonegotiate.",
    "difficulty": "Médio"
  },
  {
    "question": "O que acontece se dois extremos de um trunk 802.1Q tiverem native VLANs diferentes?",
    "options": [
      "Nada de errado ocorre; o tráfego com tag 802.1Q corrige sozinho a diferença de native VLAN",
      "Tráfego untagged é interpretado em VLANs distintas e o CDP reporta native VLAN mismatch",
      "O trunk 802.1Q cai de imediato e fica down até as native VLANs dos dois lados ficarem iguais",
      "O STP desliga-se nas duas pontas e deixa de enviar BPDUs nesse enlace trunk"
    ],
    "correct": 1,
    "explanation": "Frames da native VLAN vão sem tag. Se um lado pensa VLAN 1 e o outro VLAN 99, o untagged cruza VLANs.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual comando limita as VLANs permitidas num trunk?",
    "options": [
      "switchport access vlan 10, só a VLAN de acesso",
      "switchport trunk allowed vlan 10,20,30",
      "vlan dot1q tag native, marca a VLAN nativa",
      "spanning-tree vlan 10, o STP só dessa VLAN"
    ],
    "correct": 1,
    "explanation": "Por omissão um trunk permite 1-4094. Restringir reduz flooding e risco. Use allowed vlan add/remove para ajustar.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é uma SVI (Switch Virtual Interface) num switch L3?",
    "options": [
      "Uma subinterface de router-on-a-stick no router, com dot1Q, e não um endpoint L3 criado no próprio switch",
      "A interface vlan X, um endpoint L3 interno para a VLAN, usada em encaminhamento inter-VLAN no switch",
      "Um Port-channel que agrega várias ligações físicas e não serve de gateway L3 para a VLAN",
      "Um módulo SFP de fibra ou cobre que apenas fornece o meio físico da porta do switch"
    ],
    "correct": 1,
    "explanation": "interface vlan 10 com IP, mais ip routing, permite que o switch encaminhe entre VLANs sem router-on-a-stick.",
    "difficulty": "Médio"
  },
  {
    "question": "Em DHCP snooping, que portas devem ser trusted?",
    "options": [
      "Todas as portas de acesso de PCs, para que esses hosts possam enviar DHCPOFFER e DHCPACK",
      "Portas rumo a servidores DHCP legitimos e uplinks/trunks para esses servidores",
      "Nenhuma porta; o DHCP snooping não classifica interfaces como trusted nem como untrusted",
      "Apenas as portas com PortFast, porque o PortFast marca automaticamente essa porta como trusted"
    ],
    "correct": 1,
    "explanation": "ip dhcp snooping vlan X; nas portas de servidor/uplink: ip dhcp snooping trust. Portas untrusted bloqueiam DHCPOFFER/ACK falsos.",
    "difficulty": "Médio"
  },
  {
    "question": "O Dynamic ARP Inspection (DAI) valida ARP com base em que?",
    "options": [
      "Na tabela OSPF, comparando o IP do ARP com o next-hop",
      "Na binding table do DHCP snooping (IP-MAC-porta-VLAN)",
      "No DNS, resolvendo o nome do host antes de aceitar o ARP",
      "Na native VLAN, só se a VLAN nativa dos dois lados coincidir"
    ],
    "correct": 1,
    "explanation": "DAI intercepta ARP em portas untrusted e compara IP/MAC com a base do snooping. ARP spoofing é descartado.",
    "difficulty": "Difícil"
  },
  {
    "question": "No 802.1X, qual é o papel do switch de acesso?",
    "options": [
      "O switch de acesso atua como supplicant e inicia o EAPOL em nome do PC, em vez de autenticar a porta",
      "Authenticator, que rele EAPOL e envia RADIUS ao servidor de autenticação (ex.: ISE)",
      "O switch é o próprio servidor RADIUS, como o ISE, e valida credenciais sem reencaminhar o EAPOL",
      "O switch faz somente relay de DHCP, reencaminha Discover e Request, e não trata EAPOL nem fala RADIUS"
    ],
    "correct": 1,
    "explanation": "O PC e o supplicant, o switch o authenticator e o ISE/NPS o authentication server. Até autenticar, a porta pode ficar restrita.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual afirmação distingue VRRP de HSRP?",
    "options": [
      "VRRP é só IPv6 e não cria um gateway virtual IPv4, ao contrário do HSRP proprietário da Cisco",
      "VRRP e padrão IETF; HSRP e proprietario Cisco; ambos fornecem gateway virtual",
      "HSRP não tem prioridade; o router ativo não se elege por um valor configurado entre 1 e 255",
      "VRRP não elege master; todos os routers do grupo anunciam e usam o IP virtual em simultâneo"
    ],
    "correct": 1,
    "explanation": "HSRP usa MAC 0000.0c07.acXX; VRRP usa 0000.5e00.01XX e pode partilhar o IP real do master como virtual.",
    "difficulty": "Médio"
  },
  {
    "question": "Como um host IPv6 obtém endereço com SLAAC?",
    "options": [
      "Só com DHCPv4, que entrega ao host o endereço IPv6, o comprimento do prefixo e o gateway predefinido",
      "Recebe RA (ICMPv6) com prefixo; gera o Interface ID e faz DAD via Neighbor Solicitation",
      "O router atribui uma porta TCP ao host e grava esse número como Interface ID dentro do anúncio",
      "Usa ARP clássico em broadcast Ethernet para aprender o prefixo e confirmar o endereço no enlace"
    ],
    "correct": 1,
    "explanation": "O RA traz prefixo, MTU e lifetime. O host monta o GUA, testa DAD e pode ainda usar DHCPv6 consoante os flags M/O do RA.",
    "difficulty": "Médio"
  },
  {
    "question": "No EUI-64, o que se faz ao MAC de 48 bits para formar o Interface ID?",
    "options": [
      "Copia-se o MAC de 48 bits tal como está, e esse bloco passa inteiro a ser o Interface ID",
      "Insere-se FFFE no meio e inverte-se o bit U/L (7.o bit do primeiro octeto)",
      "Acrescenta-se apenas ::1 ao prefixo anunciado, e o Interface ID fica esse sufixo",
      "Usa-se o IPv4 embebido nos últimos 32 bits, como num IPv4-mapped, e ignora-se o MAC"
    ],
    "correct": 1,
    "explanation": "00:1A:2B:3C:4D:5E vira 021A:2BFF:FE3C:4D5E (bit U/L flipped). Muitos SO preferem privacy addresses aleatorios.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual prefixo identifica endereços IPv6 Unique Local (ULA)?",
    "options": [
      "2000::/3 (unicast global público)",
      "FC00::/7 (na prática fd00::/8)",
      "FE80::/10 (link-local do enlace)",
      "FF00::/8 (prefixo de multicast)"
    ],
    "correct": 1,
    "explanation": "ULA (RFC 4193) e o analogo privado do RFC 1918. Global unicast e 2000::/3, link-local FE80::/10 e multicast FF00::/8.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que todas as áreas OSPF devem ligar-se a área 0?",
    "options": [
      "Porque a área 0 recebe a prioridade STP mais alta e é eleita raiz de todas as outras áreas OSPF",
      "Para garantir um grafo sem loops de sumarização; o SPF inter-área passa sempre pelo backbone",
      "A área 0 é a única que envia Hello; as restantes não formam adjacências nem trocam LSA entre si",
      "Não é obrigatório em NSSA, que fica fora do backbone e não precisa de ABR nem de virtual-link"
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
      "Está 15 saltos abaixo da UTC, perto do limite da hierarquia NTP e longe do relógio de referência",
      "Esta ligado a uma referência de tempo autoritativa (GPS, relogio atomico) e serve os stratum 2",
      "É um cliente Windows à espera de hora, sem GPS nem relógio atómico e sem servir clientes stratum 2",
      "Não pode autenticar NTP: o stratum 1 envia a hora em claro e recusa chaves de autenticação MD5 ou SHA"
    ],
    "correct": 1,
    "explanation": "Stratum 0 e a fonte (GPS/atomico). Stratum 1 sincroniza com stratum 0. Stratum 16 significa não sincronizado.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual diferença chave entre TACACS+ e RADIUS no acesso a CLI?",
    "options": [
      "RADIUS usa TCP 49 e separa a autorização por comando; o TACACS+ usa UDP e junta autenticação com autorização",
      "TACACS+ usa TCP 49 e separa autenticação, autorização e accounting; RADIUS usa UDP e combina auth+authz",
      "Não há diferença: ambos usam UDP, cifram apenas a password e tratam autenticação e autorização no mesmo passo",
      "TACACS+ não cifra a password; o corpo TCP 49 segue em claro e só o RADIUS esconde a credencial do utilizador"
    ],
    "correct": 1,
    "explanation": "Para administração de dispositivos Cisco prefere-se TACACS+ (autorização comando a comando). RADIUS e o padrão em 802.1X/Wi-Fi/VPN.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença central entre rede tradicional e rede controller-based (SDN)?",
    "options": [
      "SDN elimina todos os switches físicos do campus: o controlador reencaminha cada pacote sozinho e os equipamentos deixam de ter um plano de dados próprio",
      "O plano de controlo e logicamente centralizado no controlador; os dispositivos ficam sobretudo no plano de dados, com APIs northbound/southbound",
      "SDN não usa IP: o controlador programa apenas fluxos de camada 2 e os hosts deixam de precisar de endereços, rotas ou gateways",
      "O controlador substitui o cabeamento: os links físicos desaparecem e os switches passam a ligar-se uns aos outros só pela API northbound"
    ],
    "correct": 1,
    "explanation": "Southbound (NETCONF, OpenFlow, gNMI) programa os nos; northbound (REST) oferece intenção as aplicações. Catalyst Center e o exemplo campus no CCNA.",
    "difficulty": "Médio"
  },
  {
    "question": "Num fabric spine-leaf, como se ligam os switches?",
    "options": [
      "Em anel STP clássico, em que cada switch bloqueia uma porta para cortar o loop de camada 2 no fabric",
      "Cada leaf liga-se a todos os spines; leafs não se ligam entre si; ECMP no underlay",
      "Só um uplink por leaf, preso a um único spine, sem ECMP e sem caminhos paralelos no underlay",
      "Os spines ligam-se aos servidores e os leafs apenas unem os spines, sem portas viradas para os hosts"
    ],
    "correct": 1,
    "explanation": "Qualquer leaf alcanca qualquer outra em dois hops, sem loops L2 no underlay (L3). Servidores e APs ligam-se aos leafs.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre hipervisor Tipo 1 e Tipo 2?",
    "options": [
      "Não existe hipervisor Tipo 1 na classificação; apenas o Tipo 2 hosted, como o VirtualBox, corre sobre um SO anfitrião no portátil",
      "Tipo 1 (bare-metal, ex.: ESXi, Hyper-V, KVM) corre no hardware; Tipo 2 (hosted, ex.: VirtualBox) corre sobre um SO anfitrião",
      "O Tipo 2 hosted, como o VirtualBox sobre um SO anfitrião, é sempre mais rápido em datacenter do que o Tipo 1 bare-metal, como ESXi ou KVM",
      "O Tipo 1 bare-metal, como ESXi, Hyper-V ou KVM, só virtualiza redes e não executa máquinas virtuais de servidor no hardware físico"
    ],
    "correct": 1,
    "explanation": "Tipo 1 e o padrão de datacenter/NFV (CSR, CAT8000v, ASAv). Tipo 2 serve labs no portátil.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual DSCP é o PHB Expedited Forwarding (EF), típico de voz?",
    "options": [
      "CS0 / 0 (000000)",
      "EF / 46 (101110)",
      "AF41 / 34 (100010)",
      "CS6 / 48 (110000)"
    ],
    "correct": 1,
    "explanation": "EF (DSCP 46) pede baixa latência e jitter: LLQ na WAN. AF e four-class assurance; CS6/CS7 são controlo de rede.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre policing e shaping em QoS?",
    "options": [
      "Policing e shaping são sinónimos em QoS: ambos descartam de imediato o excesso acima da taxa e nenhum deles enfileira bursts",
      "Policing descarta ou re-marca tráfego acima da taxa; shaping enfileira o excesso para suavizar bursts, introduzindo atraso",
      "O shaping só existe no Spanning Tree, onde atrasa BPDUs acima da taxa; o policing não se aplica a filas de saída na interface WAN",
      "O policing aumenta a largura de banda disponível ao re-marcar o excesso acima da taxa, em vez de o descartar ou de o atrasar na fila"
    ],
    "correct": 1,
    "explanation": "Na borda da WAN o shaping evita drops no ISP. Policing protege o nucleo mas pode descartar. Ambos usam token bucket.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um ataque de overflow da CAM (MAC flooding) e como se mitiga?",
    "options": [
      "Envenenar a cache DNS com respostas falsas para desviar nomes de host; a mitigação típica é validar as respostas com DNSSEC",
      "Encher a tabela MAC com endereços falsos para o switch floodar unicast como broadcast; mitiga-se com port-security",
      "Desligar o processo OSPF no switch para esvaziar a tabela MAC e impedir que o unicast passe a ser enviado como broadcast",
      "Usar NAT de origem na VLAN para traduzir os MAC falsos e impedir que a tabela CAM do switch fique cheia de endereços"
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
      "A adjacência FULL com 4.4.4.4 falhou e Gi0/0 está down, pois 2WAY indica vizinho inalcançável",
      "Em Ethernet multiacesso, vizinhos DROTHER ficam 2-Way entre si; FULL só com DR/BDR",
      "Os Hellos estão mismatched no timer com 4.4.4.4 e a sessão OSPF vai resetar em 2WAY/DROTHER",
      "É o estado normal num serial point-to-point, em que os vizinhos ficam 2WAY/DROTHER e não FULL"
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
      "Po1 está down (flag D) e o protocolo de negociação mostrado é PAgP, não LACP",
      "É um EtherChannel L2 em uso (SU), protocolo LACP, com 2 portas bundled (P)",
      "Só Gi1/0/1 está bundled (P); Gi1/0/2 está Hot-standby (H) e não encaminha",
      "É um port-channel L3 (flag R) e Protocol está vazio, sem LACP nem PAgP"
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
      "Este switch é root secondary; P2p Edge em Gi1/0/24 significa uma porta blocking no RSTP",
      "Este switch é o root; P2p Edge é porta de extremo (PortFast) em forwarding",
      "Este switch não corre STP na VLAN 10; P2p Edge em Gi1/0/24 indica só o trunk nativo",
      "Este switch é backup root; P2p Edge em Gi1/0/24 significa o estado loop-inconsistent"
    ],
    "correct": 1,
    "explanation": "'This bridge is the root' e Root ID = Bridge ID. Priority 24586 = 24576 + sys-id-ext 10. Gi1/0/24 Type P2p Edge = RSTP edge (PortFast) designada e FWD.",
    "difficulty": "Médio",
    "cli": "SW1# show spanning-tree vlan 10\nVLAN0010\n  Spanning tree enabled protocol rstp\n  Root ID    Priority    24586\n             Address     0011.2233.4455\n             This bridge is the root\n             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec\n  Bridge ID  Priority    24586  (priority 24576 sys-id-ext 10)\n             Address     0011.2233.4455\nInterface           Role Sts Cost      Prio.Nbr Type\nGi1/0/1             Desg FWD 4         128.1    P2p\nGi1/0/24            Desg FWD 4         128.24   P2p Edge"
  },
  {
    "question": "Observe este show ip interface brief. Qual é o estado de GigabitEthernet0/1 e o de GigabitEthernet0/2?",
    "options": [
      "GigabitEthernet0/1 e GigabitEthernet0/2 estão ambas up/up, com linha e protocolo activos como a Gi0/0",
      "Gi0/1 administratively down/down (shutdown); Gi0/2 up/down (L1/L2 em falta no outro extremo)",
      "Gi0/1 está up/down por falta de L1/L2 no outro extremo; Gi0/2 está administratively down/down pelo shutdown",
      "GigabitEthernet0/1 e GigabitEthernet0/2 estão ambas administratively down/down, desligadas por shutdown"
    ],
    "correct": 1,
    "explanation": "administratively down = comando shutdown. up/down = interface enabled mas protocol down (cabo, relógio, keepalives, protocolo de linha). Loopback0 e Gi0/0 estão up/up.",
    "difficulty": "Médio",
    "cli": "R1# show ip interface brief\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     10.1.1.1        YES NVRAM  up                    up\nGigabitEthernet0/1     10.2.2.1        YES NVRAM  administratively down down\nGigabitEthernet0/2     10.3.3.1        YES NVRAM  up                    down\nLoopback0              1.1.1.1         YES NVRAM  up                    up"
  },
  {
    "question": "Observe este show access-lists. Um host 10.1.1.50 abre HTTPS para 8.8.8.8. O que acontece?",
    "options": [
      "É permitido pela ACE 10, que casa este HTTPS para 8.8.8.8 com o permit tcp eq 22 (SSH)",
      "É negado pela ACE 30 (deny tcp eq 443) e conta no hit-count dessa linha",
      "É permitido pela ACE 40 (permit ip any any), avaliada antes dos deny de HTTP e de HTTPS",
      "A ACL ignora este HTTPS para 8.8.8.8 porque BLOCK_WEB não tem ACE UDP na porta 443"
    ],
    "correct": 1,
    "explanation": "As ACEs são avaliadas top-down. 10 só permite SSH para 10.9.9.9. 20 nega HTTP, 30 nega HTTPS para any — casa com 10.1.1.50→8.8.8.8:443. A 40 permit ip any any nunca é alcançada para este fluxo. Há implicit deny no fim, mas a 30 já decide.",
    "difficulty": "Difícil",
    "cli": "R1# show access-lists\nExtended IP access list BLOCK_WEB\n    10 permit tcp 10.1.1.0 0.0.0.255 host 10.9.9.9 eq 22\n    20 deny   tcp 10.1.1.0 0.0.0.255 any eq 80\n    30 deny   tcp 10.1.1.0 0.0.0.255 any eq 443\n    40 permit ip any any"
  },
  {
    "question": "Observe este show standby brief. Qual é o IP virtual HSRP e o estado deste router?",
    "options": [
      "10.1.1.3, Standby, sem preempt (Pri baixa)",
      "10.1.1.1, Active com preempt (Pri 110)",
      "10.1.1.1, Listen, sem Active e sem preempt",
      "local, Init, sem IP virtual HSRP no grupo 1"
    ],
    "correct": 1,
    "explanation": "Virtual IP 10.1.1.1, State Active, P = preempt, prioridade 110. O Standby é 10.1.1.3. Hosts usam 10.1.1.1 como gateway.",
    "difficulty": "Médio",
    "cli": "R1# show standby brief\n                     P indicates configured to preempt\n                     |\nInterface   Grp  Pri P State   Active          Standby         Virtual IP\nGi0/0       1    110 P Active  local           10.1.1.3        10.1.1.1"
  },
  {
    "question": "Observe este show ip dhcp snooping binding. Para que serve esta tabela no switch?",
    "options": [
      "A lista de vizinhos OSPF, com router-id, estado de adjacência e a interface de cada peer",
      "Bindings IP-MAC-VLAN-porta aprendidos de DHCP; base para DAI e IP Source Guard",
      "A CAM de unicast desconhecido, que inunda o frame quando o MAC de destino ainda não foi aprendido",
      "As traduções NAT do router, que mapeiam endereços inside local para endereços inside global"
    ],
    "correct": 1,
    "explanation": "DHCP snooping grava leases vistos em portas untrusted (e estáticos opcionais). DAI e IPSG consultam esta binding table para filtrar ARP e IP spoofing.",
    "difficulty": "Médio",
    "cli": "SW1# show ip dhcp snooping binding\nMacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface\n00:11:22:33:44:55   10.10.10.20      86234       dhcp-snooping  10    GigabitEthernet1/0/8\n00:AA:BB:CC:DD:EE   10.10.10.21      85012       dhcp-snooping  10    GigabitEthernet1/0/9\nTotal number of bindings: 2"
  },
  {
    "question": "Num tronco 802.1Q, o que acontece ao tráfego da native VLAN?",
    "options": [
      "É sempre descartado no tronco, mesmo com a native VLAN permitida e igual nos dois lados",
      "Atravessa sem tag 802.1Q (untagged), ao contrário das outras VLANs permitidas",
      "Usa obrigatoriamente a VLAN 1 no tronco, mesmo quando a native VLAN configurada no switch é a 99",
      "É encapsulado em ISL, com cabeçalho proprietário de 26 bytes e um FCS adicional no tronco"
    ],
    "correct": 1,
    "explanation": "Frames da native VLAN vão untagged. As restantes VLANs permitidas levam tag de 4 bytes. Native VLANs diferentes nos dois extremos causam VLAN hopping / mis-mapping. Cisco recomenda native VLAN unused + vlan dot1q tag native.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve a voice VLAN (switchport voice vlan) numa porta de acesso?",
    "options": [
      "Substituir o 802.1X na porta de acesso, dispensando o RADIUS e o suplicante do PC ligado ao telefone",
      "Permitir que o telefone IP fique numa VLAN tagged (tipicamente 802.1Q) e o PC na access VLAN untagged",
      "Desligar o PoE na porta de acesso para cortar a alimentação do telefone IP e deixar só o tráfego de dados",
      "Criar um EtherChannel com o telefone, agregando as portas de voz e de dados num único canal lógico"
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
      "Sim, auto/auto é a combinação PAgP recomendada, porque ambos os extremos esperam e mesmo assim negociam o canal",
      "Não: auto/auto não inicia a negociação; precisa desirable num extremo (ou on/on sem protocolo)",
      "Sim, mas só com LACP: o par auto/auto forma EtherChannel apenas quando o LACP active também está ativo",
      "Não, porque o PAgP exige MST: sem Multiple Spanning Tree o modo auto nem inicia a negociação do canal"
    ],
    "correct": 1,
    "explanation": "PAgP: desirable inicia, auto espera. auto+auto = sem canal. LACP: active inicia, passive espera; active+active ou active+passive funcionam, passive+passive não. mode on/on força canal sem LACP/PAgP (perigoso se configs divergem).",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual combinação LACP estabelece um canal?",
    "options": [
      "passive + passive também estabelece o canal",
      "active + active, ou active + passive",
      "auto + auto também estabelece o canal LACP",
      "desirable + auto estabelece canal só em LACP"
    ],
    "correct": 1,
    "explanation": "LACP active envia PDUs; passive só responde. Pelo menos um extremo tem de ser active. auto/desirable são modos PAgP, não LACP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz o comando passive-interface GigabitEthernet0/0 em OSPF?",
    "options": [
      "Desliga a interface na camada 3, deixando-a administrativamente down e sem encaminhar IP",
      "Anuncia a rede dessa interface mas não envia hellos nem forma adjacências nela",
      "Torna este router o DR obrigatório na rede, fixando a prioridade OSPF no valor máximo",
      "Filtra os LSA de tipo 5, retirando as rotas externas da LSDB antes do cálculo SPF"
    ],
    "correct": 1,
    "explanation": "Útil em LANs de utilizadores: a sub-rede aparece no OSPF mas um PC não tenta adjacência. passive-interface default + no passive-interface nos links de transit é um padrão comum.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se origina uma default route no OSPF a partir de um ASBR que já tem rota default na RIB?",
    "options": [
      "Só o comando ip route 0.0.0.0 0.0.0.0 null0, sem default-information originate no processo OSPF",
      "default-information originate (e optionally always se a default não estiver na RIB)",
      "O comando network 0.0.0.0 255.255.255.255 area 0, que anuncia a rota default 0.0.0.0/0 na área",
      "O comando ip ospf priority 0 na interface do ASBR, para o router passar a originar a default"
    ],
    "correct": 1,
    "explanation": "default-information originate injeta LSA Type-5 (ou Type-7 em NSSA) de 0.0.0.0/0 se existir uma default na RIB. A keyword always origina mesmo sem essa rota.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença prática entre inter-VLAN routing por SVI e router-on-a-stick?",
    "options": [
      "A SVI só encaminha entre VLANs com IPv6; em IPv4 o switch L3 não faz routing e exige router-on-a-stick",
      "SVI: o switch L3 encaminha nas SVIs do próprio chassis; ROAS: um router externo usa subinterfaces num tronco",
      "O router-on-a-stick separa as VLANs numa interface física sem tronco 802.1Q, tags ou subinterfaces",
      "Não há diferença prática de encaminhamento: a SVI e o router-on-a-stick usam o mesmo router e o mesmo tronco"
    ],
    "correct": 1,
    "explanation": "SVI (interface vlan X) + ip routing no MLS é o desenho campus atual. ROAS usa um tronco 802.1Q para um router com subinterfaces encapsulation dot1Q. Ambos separam broadcast domains; o SVI escala melhor.",
    "difficulty": "Médio"
  },
  {
    "question": "Onde se deve colocar, em regra, uma ACL standard numerada?",
    "options": [
      "O mais perto da origem, porque a ACL standard filtra só o IP de destino",
      "O mais perto do destino, porque filtra apenas o IP de origem",
      "Sempre no ASBR do OSPF, qualquer que seja o tráfego que a ACL pretende filtrar",
      "Só no servidor NTP, para bloquear os clientes que não estão sincronizados"
    ],
    "correct": 1,
    "explanation": "Standard ACL (1-99, 1300-1999) casa só origem. Perto da origem cortaria tráfego a mais destinos. Extended (100-199) filtra origem+destino+L4 e coloca-se perto da origem.",
    "difficulty": "Médio"
  },
  {
    "question": "Toda a ACL IPv4 no IOS termina com que regra implícita?",
    "options": [
      "permit ip any any (permit implícito)",
      "deny ip any any (implicit deny)",
      "permit icmp any any (permit implícito)",
      "deny tcp any any eq 80 (só o HTTP)"
    ],
    "correct": 1,
    "explanation": "Se nenhuma ACE casar, o pacote é descartado. Por isso uma ACL de 'bloqueio pontual' precisa de um permit ip any any no fim. ACLs vazias aplicadas a uma interface podem bloquear tudo.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em NAT Cisco, que interfaces se marcam com ip nat inside e ip nat outside?",
    "options": [
      "Inside marca a Internet pública; outside marca a LAN com os IPs privados a traduzir",
      "Inside = domínio da rede interna (IPs a traduzir); outside = lado público/externo",
      "As keywords ip nat inside e ip nat outside são apenas sinónimos do comando shutdown",
      "ip nat inside e ip nat outside só se aplicam a interfaces IPv6 e nunca a IPv4"
    ],
    "correct": 1,
    "explanation": "Inside local/global e outside local/global derivam destas marcas. PAT típico: LAN = inside, WAN = outside, ip nat inside source list ... interface <WAN> overload.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz um NAT estático 1:1 (ip nat inside source static)?",
    "options": [
      "Muitos endereços privados partilham um IP público multiplexando as portas",
      "Mapeia um inside local fixo para um inside global fixo, sempre",
      "Traduz só o MAC de origem e deixa o endereço IPv4 inside local intacto",
      "Substitui o ARP na LAN e deixa de resolver endereços IP para endereços MAC"
    ],
    "correct": 1,
    "explanation": "Static NAT é bidirecional e previsível — típico para publicar um servidor. PAT/overload multiplexa muitos internos num IP. Dynamic pool traduz 1:1 a partir de um conjunto, sem garantia do mesmo global.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre os violation modes de port-security: protect, restrict e shutdown?",
    "options": [
      "protect, restrict e shutdown são modos idênticos: os três descartam o quadro em silêncio e põem a porta em err-disabled",
      "protect descarta silenciosamente; restrict descarta e incrementa contadores/snmp; shutdown PoE a porta em err-disabled",
      "O modo shutdown só gera uma mensagem de syslog da violação e não fecha a porta nem a coloca no estado err-disabled",
      "O modo protect elege este switch como root bridge do STP quando um endereço MAC desconhecido viola o limite da porta"
    ],
    "correct": 1,
    "explanation": "O default é shutdown (err-disabled até shutdown/no shutdown ou errdisable recovery). restrict notifica; protect é o mais silencioso e pior para troubleshooting.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que faz errdisable recovery cause psecure-violation?",
    "options": [
      "Desativa para sempre o port-security em todas as portas de acesso e impede novas violações de endereço MAC",
      "Reabilita automaticamente portas err-disabled por port-security após um intervalo (omissão 300 s)",
      "Converte a porta que ficou err-disabled num tronco 802.1Q e passa a permitir todas as VLANs ativas",
      "Limpa a tabela de traduções NAT do router e apaga os mapeamentos estáticos de inside local para global"
    ],
    "correct": 1,
    "explanation": "Útil para não deixar PCs eternamente down após um flap de MAC. O intervalo configura-se com errdisable recovery interval. A causa tem de estar na lista de recovery.",
    "difficulty": "Médio"
  },
  {
    "question": "No 802.1X, quais são os três papéis clássicos?",
    "options": [
      "Root, designated e blocked são os três papéis clássicos do 802.1X na porta de acesso",
      "Supplicant (cliente), authenticator (switch/AP), authentication server (RADIUS/ISE)",
      "DR, BDR e DROTHER são os três papéis clássicos do 802.1X entre os routers do OSPF",
      "ITR, ETR e MS são os três papéis clássicos do 802.1X no plano de controlo do LISP"
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
      "O AP autónomo não tem rádio Wi-Fi e limita-se a reencaminhar frames Ethernet com fios",
      "Autónomo tem a config/SSID no próprio AP; lightweight obtém config do WLC via CAPWAP",
      "O AP lightweight não pode usar 802.1X nem RADIUS para autenticar os clientes sem fios",
      "O AP autónomo exige sempre o DNA Center para gravar o SSID e a restante configuração"
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
      "Substituem o Hello do OSPFv3 e mantêm as adjacências de vizinhos no link",
      "Resolvem IPv6→MAC (equivalente ao ARP) e detetam duplicados (DAD)",
      "Atribuem sozinhos o prefixo GUA ao host, sem nenhum Router Advertisement",
      "Cifram todo o tráfego IPv6 do link com IPsec antes de o quadro sair"
    ],
    "correct": 1,
    "explanation": "NS (ICMPv6 type 135) pergunta quem tem um IPv6; NA (136) responde. DAD envia NS para o próprio endereço tentado. RS/RA (133/134) servem SLAAC e default gateway.",
    "difficulty": "Médio"
  },
  {
    "question": "SNMPv3 authPriv oferece o quê, relativamente a SNMPv2c?",
    "options": [
      "Só community strings em claro, como no SNMPv2c, sem utilizador nem cifra",
      "Autenticação e cifração das mensagens (utilizador + priv)",
      "Substitui o NTP e sincroniza o relógio de cada dispositivo gerido",
      "Só envia traps e nunca responde a GET, GET-NEXT ou SET do NMS"
    ],
    "correct": 1,
    "explanation": "v2c usa community (noAuthNoPriv de facto). v3: noAuthNoPriv, authNoPriv (MD5/SHA) e authPriv (mais AES). Preferir authPriv e views restritas. Informs (v2/v3) têm ACK; traps não.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre SNMP trap e SNMP inform?",
    "options": [
      "O trap usa TCP na porta 162; o inform usa sempre UDP nessa porta e nunca TCP",
      "Trap é não confirmado; inform espera ACK e é retransmitido se falhar",
      "O inform só existe no SNMPv1 e foi retirado tanto no SNMPv2c como no SNMPv3",
      "O trap cifra a PDU SNMP com priv e o inform segue sempre em claro, sem cifra"
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
      "DSCP e CoS são o mesmo campo de 3 bits, copiado sem alteração do tag 802.1Q para o IP",
      "CoS são 3 bits no tag 802.1Q (L2); DSCP são 6 bits no IP (L3) e atravessam routers",
      "O DSCP só existe dentro de frames ISL e desaparece quando o tronco passa a usar 802.1Q",
      "O CoS substitui o IP precedence apenas no IPv6 e não marca o campo PCP do tag 802.1Q"
    ],
    "correct": 1,
    "explanation": "CoS (PCP) perde-se quando o tag 802.1Q é retirado. DSCP (p.ex. EF 46, AF41) vai no cabeçalho IP. Trust boundary: classificar/marcar o mais perto da origem e confiar DSCP no núcleo.",
    "difficulty": "Médio"
  },
  {
    "question": "RESTCONF no IOS-XE usa tipicamente que transporte e URI base?",
    "options": [
      "Telnet (TCP 23) e /soap, como se o RESTCONF fosse um serviço SOAP",
      "HTTPS (TCP 443) e /restconf (YANG em JSON ou XML)",
      "TFTP (UDP 69) e /rpc, tratando o RESTCONF como uma cópia XML",
      "SNMP (UDP 161) e /mib, lendo OIDs em vez de um datastore YANG"
    ],
    "correct": 1,
    "explanation": "RESTCONF mapeia HTTP GET/POST/PUT/PATCH/DELETE em datastores YANG. NETCONF usa SSH 830 e XML RPC. AAA e certificados protegem ambos.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa rede controller-based (SDN), a API northbound liga o quê?",
    "options": [
      "O controlador aos dispositivos apenas via OpenFlow ou NETCONF (southbound)",
      "Aplicações/orquestração ao controlador (pedido de intent)",
      "Dois spines ligados entre si, como um enlace de fabric e não uma API",
      "Apenas o túnel CAPWAP do AP até ao WLC, no acesso wireless"
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
      "Só a Cisco o implementa, tratando o VRRP como protocolo proprietário igual ao HSRP",
      "O VIP pode ser o IP real de um dos routers (master dono do endereço); é padrão IETF",
      "Não elege master; todos os routers do grupo VRRP encaminham em simultâneo, sem eleição",
      "Usa sempre o AVG do GLBP para repartir os fluxos por vários forwarders virtuais"
    ],
    "correct": 1,
    "explanation": "HSRP é Cisco proprietary e o VIP é sempre um IP extra. VRRP (RFC) permite que o master use o seu IP de interface como VIP. GLBP (Cisco) faz load-share com vários AVF.",
    "difficulty": "Difícil"
  },
  {
    "question": "No GLBP, qual é o papel do AVG versus AVF?",
    "options": [
      "O AVG limita-se a fazer NAT de origem; o AVF limita-se a calcular a spanning tree do switch",
      "AVG responde ARP do VIP e atribui MACs virtuais; AVFs encaminham o tráfego dos hosts",
      "O AVF elege o root bridge do STP; o AVG fica só como backup STP desse domínio",
      "Não há diferença de papel: AVG e AVF são idênticos e ambos encaminham o VIP"
    ],
    "correct": 1,
    "explanation": "Active Virtual Gateway (um) gere o VIP e distribui virtual MACs por round-robin/weighted. Active Virtual Forwarders (vários) encaminham. Assim há load balancing por host, não só standby passivo.",
    "difficulty": "Difícil"
  },
  {
    "question": "Como o Cisco IOS escolhe entre duas rotas OSPF de igual prefixo e igual custo?",
    "options": [
      "Usa só a rota OSPF mais antiga na tabela e ignora a outra de igual custo OSPF",
      "Instala ambas e faz equal-cost load balancing (CEF), até ao máximo de paths",
      "Prefere sempre a rota anunciada pelo Router ID OSPF numericamente maior",
      "Descarta as duas rotas OSPF e passa a encaminhar esse prefixo só por RIP"
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
      "A OSPF /16, porque a AD 110 é irrelevante perante a rota estática",
      "A estática /24, por longest-match (prefixo mais específico)",
      "Faz load-balance entre a OSPF /16 e a estática /24 para esse pacote",
      "Descarta o pacote, por conflito entre a rota OSPF /16 e a estática"
    ],
    "correct": 1,
    "explanation": "Longest prefix match é o primeiro critério de encaminhamento. AD e métrica só se aplicam a rotas do mesmo prefixo. /24 ganha a /16 para 10.1.1.50.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é uma rota estática recursiva no IOS?",
    "options": [
      "Uma rota com next-hop IP que o router ainda tem de resolver via outra rota da RIB (não aponta para interface)",
      "Uma rota estática que se apaga sozinha da RIB assim que expira um temporizador de inatividade",
      "Uma rota default 0.0.0.0/0 originada pelo próprio OSPF através de default-information originate",
      "Uma rota instalada pelo NAT para traduzir o endereço IP de origem de cada fluxo de saída que atravessa o router"
    ],
    "correct": 0,
    "explanation": "ip route 10.0.0.0 255.0.0.0 192.0.2.1 exige que 192.0.2.1 seja alcançável (tipicamente via connected ou IGP). Fully specified: ip route ... 192.0.2.1 GigabitEthernet0/0 resolve também a interface de saída.",
    "difficulty": "Médio"
  },
  {
    "question": "WPA3-Personal usa que mecanismo em vez do PSK handshake clássico do WPA2?",
    "options": [
      "WEP de 40 bits com RC4, o mecanismo de chave partilhada do Wi-Fi anterior ao WPA",
      "SAE (Simultaneous Authentication of Equals), resistente a ataques offline de dicionário",
      "Só autenticação Open System, sem palavra-passe na associação 802.11 do cliente",
      "TKIP obrigatório com Michael, a cifra legada do WPA que o WPA3-Personal continua a exigir"
    ],
    "correct": 1,
    "explanation": "SAE (Dragonfly) faz handshake de palavra-passe sem expor um hash atacável offline como o 4-way PSK. WPA3-Enterprise usa 192-bit suite opcional. WPA2-Enterprise continua 802.1X/EAP.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se distinguem o data plane, o control plane e o management plane num router?",
    "options": [
      "São a mesma fila da CPU: os planos data, control e management partilham um único processamento no próprio router",
      "Data: encaminhamento de pacotes (CEF/TCAM); control: protocolos (OSPF/BGP/ARP); management: SSH/SNMP/NETCONF",
      "O control plane existe apenas em switches de camada 2; um router não executa OSPF, BGP nem ARP",
      "O management plane é o EtherChannel, que agrupa interfaces para levar o tráfego de gestão SSH"
    ],
    "correct": 1,
    "explanation": "CoPP protege o control plane. Fora de banda (mgmt VRF) isola o management. O data plane deve continuar mesmo se o SSH falhar. Confundir os planos é um erro clássico de desenho.",
    "difficulty": "Médio"
  },
  {
    "question": "O hashing de EtherChannel (src-dst-ip, por exemplo) serve para quê?",
    "options": [
      "Eleger o DR e o BDR de OSPF entre os routers vizinhos que partilham o mesmo segmento",
      "Escolher em que membro do bundle cada fluxo é enviado, mantendo a ordem dos pacotes do fluxo",
      "Substituir por completo o STP no bundle, de modo a eliminar loops sem spanning tree",
      "Traduzir NAT, reescrevendo o endereço IP de origem de cada fluxo que cai no mesmo hash do bundle"
    ],
    "correct": 1,
    "explanation": "Um fluxo (mesmo hash) fica numa porta para não reordenar TCP. Sem diversidade de IP/porta, um único membro pode saturar. L3/L4 hashing espalha melhor que só src-mac.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre Root Guard e BPDU Guard?",
    "options": [
      "Não há diferença operacional: Root Guard e BPDU Guard tratam qualquer BPDU da mesma forma e desligam a mesma porta de acesso em err-disable",
      "BPDU Guard err-disable a porta de extremo se receber qualquer BPDU; Root Guard impede que essa porta se torne root port (superior BPDU)",
      "Root Guard só funciona com LACP ativo, porque depende do bundle EtherChannel para reconhecer BPDUs e bloquear a porta",
      "BPDU Guard elege o root bridge ao aceitar o BPDU superior e promover essa porta de acesso a root port do domínio"
    ],
    "correct": 1,
    "explanation": "BPDU Guard: access/PortFast — um switch não autorizado desliga a porta. Root Guard: uplinks para a borda — BPDUs superiores são ignoradas e a porta vai root-inconsistent, preservando a root designada.",
    "difficulty": "Médio"
  },
  {
    "question": "Ansible aplica playbooks a dispositivos Cisco sobretudo de que forma?",
    "options": [
      "Agente permanente em cada IOS, que puxa o playbook localmente sem SSH nem inventário central",
      "Agentless via SSH/NETCONF a partir de um control node, com inventário e módulos ios_*",
      "Somente SNMP SET a partir do control node, sem SSH, NETCONF ou módulos ios_*",
      "Somente Telnet sem inventário, sem módulos ios_* e sem sessão SSH ou NETCONF"
    ],
    "correct": 1,
    "explanation": "Ansible não instala agente no IOS. O inventário lista hosts; os módulos (ios_config, ios_command, ios_facts) usam SSH. Puppet/Chef clássicos usam agente. YAML descreve o estado desejado.",
    "difficulty": "Médio"
  },
  {
    "question": "NTP autenticado (ntp authenticate / ntp trusted-key) serve para quê?",
    "options": [
      "Aumentar o stratum para 16 de propósito, deixando o router dessincronizado e a ignorar servidores NTP válidos",
      "Garantir que o router só aceita tempo de servidores com chave simétrica válida, evitando relógio falso",
      "Substituir o DNS, traduzindo nomes de host em endereços IP com a mesma chave simétrica do NTP",
      "Cifrar todo o tráfego de utilizador que atravessa o router, usando a chave NTP como segredo IPsec"
    ],
    "correct": 1,
    "explanation": "Um NTP falso pode falhar certs, logs e Kerberos. Chaves simétricas (ou NTPv4 Autokey, raro) autenticam o servidor. Stratum 16 = unsynchronized. Prefira fontes internas stratum 1/2.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença fundamental entre OSPFv2 e OSPFv3?",
    "options": [
      "OSPFv3 só corre em switches L2, sem processo de routing e sem suporte em routers que encaminham IPv6",
      "OSPFv2 encaminha IPv4; OSPFv3 foi desenhado para IPv6 (e pode fazer AF para IPv4 em plataformas modernas)",
      "OSPFv3 usa TCP em vez de IP para as adjacências, abandonando o protocolo 89 e os hellos multicast",
      "Não há qualquer diferença de protocolo: OSPFv2 e OSPFv3 partilham os mesmos LSAs, endereços e o comando network"
    ],
    "correct": 1,
    "explanation": "OSPFv2 é para IPv4. OSPFv3 (RFC 5340) transporta LSAs para IPv6; em IOS-XE, Address Families permitem também IPv4 sobre o processo OSPFv3.",
    "difficulty": "Médio"
  },
  {
    "question": "Em OSPFv3, a adjacência forma-se com base em quê, de forma distinta do “network” IPv4 clássico do OSPFv2?",
    "options": [
      "Apenas no endereço de loopback 127.0.0.1, sem ativar OSPFv3 nas interfaces IPv6 nem definir manualmente o Router ID de 32 bits",
      "Ativação por interface (ipv6 ospf / ospfv3) e Router ID; não se usa o comando network com máscaras IPv4 da mesma forma",
      "Só via BGP multiprotocol, que anuncia os prefixos IPv6 e forma a adjacência OSPF no lugar dos hellos",
      "Exclusivamente por SNMP, com traps que descobrem vizinhos e substituem ipv6 ospf e o Router ID"
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
      "Só configurar BGP no vizinho, porque administratively down indica que a sessão BGP ainda não abriu",
      "A interface está em shutdown — falta `no shutdown` (além de IP/encapsulamento se necessário)",
      "O cabo de consola está invertido, o que deixa Serial0/0/0 em shutdown até se trocar o rollover",
      "O NTP está dessincronizado, e o relógio errado mantém a série em administratively down"
    ],
    "correct": 1,
    "explanation": "administratively down significa shutdown na interface. `no shutdown` traz para up/down ou up/up conforme o protocolo de linha.",
    "difficulty": "Médio",
    "cli": true
  },
  {
    "question": "Em `show etherchannel summary`, uma porta aparece como `(I)` independente. O que isto indica?",
    "options": [
      "O EtherChannel está perfeito em todas as portas: (I) confirma que o membro já entrou no bundle",
      "Essa porta não faz parte do bundle (config/mismatch LACP/PAgP ou bundling falhou)",
      "A VLAN nativa é 1 em todo o lado, e a flag (I) só regista essa VLAN nativa no trunk",
      "O STP está desligado nessa porta, e (I) significa independente do spanning-tree, não do bundle"
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
      "Só em Security Fundamentals (15%), onde a IA substitui AAA, firewalls e o controlo de acesso",
      "Só em IP Connectivity (25%), como substituto de OSPF, EIGRP e do encaminhamento IPv4",
      "Só em Network Access (STP), limitado a eleger a root bridge com Predictive AI no acesso"
    ],
    "correct": 0,
    "explanation": "Cisco posicionou AI/ML e automação no domínio de Automation and Programmability (~10%), alinhado com operação e gestão de rede modernas — não substitui OSPF/STP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual contraste prático entre Generative AI e Predictive AI num contexto de operações de rede?",
    "options": [
      "Generative AI só funciona offline no portátil do operador; Predictive AI só existe em cloud pública e nunca analisa o campus local",
      "Predictive AI estima tendências/anomalias a partir de dados; Generative AI produz texto/código/sugestões novas a partir de prompts",
      "São sinónimos absolutos no blueprint Cisco: ambos só geram texto e nenhum estima tendências ou anomalias a partir de dados",
      "Generative AI substitui completamente o protocolo OSPF, calculando sozinha as rotas IPv4 sem LSAs, vizinhos ou área"
    ],
    "correct": 1,
    "explanation": "Predictive: forecasting e deteção (capacidade, falhas). Generative: criar conteúdo/configurações/explicações. Ambos aparecem no discurso do CCNA v1.1; nenhum substitui protocolos de encaminhamento.",
    "difficulty": "Médio"
  },
  {
    "question": "Machine Learning numa plataforma de assurance de rede (ex.: análise de telemetria) serve tipicamente para quê?",
    "options": [
      "Substituir o spanning-tree no acesso, elegendo a root bridge e bloqueando portas sem trocar BPDUs",
      "Atribuir automaticamente endereços IPv4 públicos a todos os hosts, no lugar do DHCP local e do NAT da borda",
      "Aprender padrões de baseline e destacar desvios/anomalias mais cedo do que limiares estáticos sozinhos",
      "Cifrar frames entre switches com WEP, usando o modelo de assurance como chave partilhada no trunk"
    ],
    "correct": 2,
    "explanation": "ML em assurance usa histórico para baseline e anomalias (latência, drops, clientes Wi-Fi). Não altera L2/L3 de encaminhamento nem substitui STP/OSPF.",
    "difficulty": "Médio"
  },
  {
    "question": "No CCNA atual, Terraform entra no tema de Infrastructure as Code. O que o distingue tipicamente de Ansible num exame conceptual?",
    "options": [
      "Terraform só gere servidores Windows com agente local instalado; Ansible só configura routers Cisco pela CLI e ignora cloud e o estado",
      "Terraform só altera dispositivos por Telnet em claro; Ansible só lê e escreve MIBs SNMP, sem playbooks, sem SSH e sem API declarativa",
      "Chef e Puppet voltaram a ser obrigatórios no exame CCNA atual e substituem por completo o Terraform como única ferramenta de Infrastructure as Code",
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
      "Força essa porta de acesso a ser sempre o root bridge, ignorando o Bridge ID dos outros switches",
      "Ativa automaticamente PortFast em todas as portas trunk, incluindo as ligações entre switches",
      "Converte de forma permanente a VLAN nativa da porta para a VLAN 1, mesmo com outra VLAN nativa"
    ],
    "correct": 0,
    "explanation": "BPDU Filter suprime BPDUs na interface. BPDU Guard, por contraste, err-disable se receber BPDU. São features diferentes; misturá-las é erro clássico de exame.",
    "difficulty": "Difícil"
  },
  {
    "question": "API northbound dum controlador SDN: qual método de autenticação é comum em REST modernas (conceito CCNA)?",
    "options": [
      "Apenas uma entrada de ARP estático no cliente da API, sem token, chave ou HTTPS para o controlador",
      "Tokens (ex.: Bearer/OAuth2) ou chaves de API sobre HTTPS — não credenciais em claro em HTTP",
      "Somente a community SNMP pública em claro, como única credencial da API REST northbound do controlador",
      "WEP partilhado com chave estática entre o controlador SDN e o switch, em vez de tokens sobre HTTPS"
    ],
    "correct": 1,
    "explanation": "APIs REST de controladores usam HTTPS + autenticação (tokens/OAuth/API keys). SNMP communities e WEP não são o modelo de API northbound moderno.",
    "difficulty": "Médio"
  },
  {
    "question": "Containers e VRFs no CCNA: qual afirmação é a mais correta?",
    "options": [
      "Um container Linux no host é o mesmo objeto que uma VRF no IOS: ambos existem apenas para isolar a tabela de encaminhamento IP do router",
      "As VRFs só existem em switches de Layer 2 sem qualquer endereço IP e sem tabela de routing, e por isso nunca separam o encaminhamento",
      "Containers isolam processos/apps no host; VRFs isolam tabelas de encaminhamento no dispositivo — conceitos de virtualização em camadas diferentes",
      "Os containers substituem necessariamente o protocolo BGP e passam a anunciar sozinhos todas as rotas entre os routers da rede sem abrir sessões BGP"
    ],
    "correct": 2,
    "explanation": "Virtualização no blueprint cobre hosts (VMs/containers) e rede (VRF). Não são a mesma tecnologia; BGP continua independente.",
    "difficulty": "Médio"
  },
  {
    "question": "Cloud device management no CCNA (ex.: gestão de dispositivos via cloud) implica tipicamente o quê para o admin?",
    "options": [
      "Que o spanning-tree deixa de ser necessário em todo o campus, porque a consola cloud deteta e remove sozinha qualquer loop de Layer 2 entre os switches",
      "Que todos os switches geridos a partir da cloud passam a funcionar apenas como hubs de Layer 1, sem comutação de tramas, sem VLANs e sem routing local",
      "Que o IPv6 fica proibido em toda a LAN de acesso no momento em que o inventário, a configuração e a telemetria dos switches e dos routers passam para a consola cloud",
      "Gestão/monitorização centralizada fora do site (com conectividade e controlo de acesso à consola cloud), sem eliminar a necessidade de L2/L3 locais corretos"
    ],
    "correct": 3,
    "explanation": "Gestão cloud centraliza inventário/config/telemetria, mas a rede local (VLANs, routing, STP, segurança) continua a ter de funcionar. Não desliga fundamentos.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em STP, o root bridge e eleito por:",
    "options": [
      "A maior prioridade numérica do Bridge ID, sem o MAC",
      "Menor Bridge ID (prioridade + MAC)",
      "O switch com o maior número de VLANs ativas",
      "O maior uptime contínuo desde o último arranque"
    ],
    "correct": 1,
    "explanation": "O STP elege o root pelo Bridge ID mais baixo: prioridade (omissão 32768) e depois MAC. Prioridade mais baixa ganha face a só um MAC menor.",
    "difficulty": "Médio"
  },
  {
    "question": "PortFast numa porta de acesso serve para:",
    "options": [
      "Desligar o STP nessa porta de acesso e no resto do switch",
      "Passar ja para forwarding, evitando atraso em PCs",
      "Eleger essa porta de acesso como root bridge da VLAN",
      "Negociar um trunk 802.1Q com o computador ligado à porta"
    ],
    "correct": 1,
    "explanation": "PortFast faz a porta de extremo (access) ir para forwarding sem esperar os timers completos de listening/learning—use com BPDU Guard.",
    "difficulty": "Médio"
  },
  {
    "question": "Uma rota estatica default em Cisco e:",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 <next-hop ou exit>",
      "ip default-network 0.0.0.0, sem next-hop nem saída",
      "ip route 255.255.255.255 como rota estática de omissão",
      "router default no modo de configuração global do IOS"
    ],
    "correct": 0,
    "explanation": "A rota por omissão 0.0.0.0/0 corresponde a qualquer destino sem prefixo melhor; o next-hop ou interface de saída aponta para o gateway of last resort.",
    "difficulty": "Fácil"
  },
  {
    "question": "NAT overload (PAT) faz o que?",
    "options": [
      "Um IP público exclusivo por cada host privado, em mapa estático 1:1",
      "Muitos privados partilham um ou poucos IPs publicos via portas",
      "Traduz somente endereços IPv6, sem mapear portas TCP ou UDP",
      "Desliga o firewall do router e deixa de filtrar o tráfego traduzido"
    ],
    "correct": 1,
    "explanation": "PAT (NAT overload) mapeia muitos hosts internos para um (ou poucos) IP(s) público(s) traduzindo portas L4. Não é só NAT estático 1:1.",
    "difficulty": "Médio"
  },
  {
    "question": "Uma ACL estendida filtra com base em:",
    "options": [
      "Só o endereço IP de origem, como numa ACL standard",
      "Origem, destino, protocolo e portas",
      "Só os endereços MAC de origem e de destino da trama",
      "Só o número da VLAN de acesso configurada na porta"
    ],
    "correct": 1,
    "explanation": "ACLs extended podem corresponder a protocolo, IP origem/destino e portas L4—mais granulares que ACLs standard (só IP de origem).",
    "difficulty": "Médio"
  },
  {
    "question": "HSRP oferece o que aos hosts?",
    "options": [
      "Um MAC/IP virtual de gateway redundante",
      "Balanceamento OSPF por fluxo em caminhos de custo igual",
      "Tradução NAT de endereços privados para públicos",
      "Um servidor DHCP que atribui endereços IP aos hosts"
    ],
    "correct": 0,
    "explanation": "HSRP fornece um IP/MAC virtual; um router é Active a encaminhar e outro Standby pronto a assumir em falha.",
    "difficulty": "Médio"
  },
  {
    "question": "Dynamic ARP Inspection usa que base de dados?",
    "options": [
      "A tabela de topologia OSPF com as LSAs aprendidas",
      "A binding table do DHCP snooping",
      "O arquivo da base de dados VTP do switch",
      "O temporizador de aging da tabela CAM do switch"
    ],
    "correct": 1,
    "explanation": "Dynamic ARP Inspection valida ARP contra a tabela de bindings do DHCP Snooping para impedir spoofing ARP em portas untrusted.",
    "difficulty": "Difícil"
  },
  {
    "question": "BPDU Guard numa porta PortFast:",
    "options": [
      "Ignora as BPDUs recebidas e mantém a porta forwarding",
      "Errdisable a porta se receber uma BPDU",
      "Elege o switch vizinho como root bridge do STP",
      "Ativa o LACP para formar um EtherChannel na porta"
    ],
    "correct": 1,
    "explanation": "BPDU Guard põe a porta PortFast em err-disable se receber uma BPDU—protege contra um switch indevido. Não elege o root STP.",
    "difficulty": "Médio"
  },
  {
    "question": "OSPF cost de FastEthernet 100 Mb/s com referencia 100000 e:",
    "options": [
      "1",
      "10",
      "100",
      "1000"
    ],
    "correct": 0,
    "explanation": "Com bandwidth de referência OSPF 100 Mbps (histórico), um link a 100 Mbps tem custo 1 (ref/bw). Velocidades maiores exigem subir a referência.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa política de QoS numa interface de saída, o que faz o comando `priority` numa class-map de voz?",
    "options": [
      "Garante largura de banda proporcional a todas as classes da policy, sem criar uma fila estrita",
      "Cria uma fila de prioridade estrita (LLQ) para essa classe, com limite policed",
      "Desativa o WRED de descarte antecipado nessa interface de saída para todas as classes",
      "Marca todos os pacotes como DSCP EF, independentemente da class-map em que foram classificados"
    ],
    "correct": 1,
    "explanation": "O `priority` ativa Low Latency Queuing (LLQ): fila prioritária para a classe (tipicamente voz), normalmente com um policer para não esgotar a interface.",
    "difficulty": "Médio"
  },
  {
    "question": "Entre um AP lightweight e um WLC, qual afirmação sobre CAPWAP está correta?",
    "options": [
      "O tráfego de dados do cliente nunca passa pelo WLC em modo local",
      "CAPWAP usa DTLS para o túnel de controlo entre AP e WLC",
      "CAPWAP só funciona em Layer 2 e não atravessa routers",
      "O AP guarda localmente todas as políticas WLAN sem contacto com o WLC"
    ],
    "correct": 1,
    "explanation": "CAPWAP estabelece um túnel de controlo protegido com DTLS entre o AP lightweight e o WLC; o túnel de dados pode ser encapsulado à parte conforme o modo.",
    "difficulty": "Médio"
  },
  {
    "question": "No EIGRP, um feasible successor é uma rota de backup que:",
    "options": [
      "Tem o advertised distance (AD) mais alto de todas as rotas desse prefixo que estão na tabela de topologia do EIGRP",
      "Cumpre a condição de viabilidade (reported distance < feasible distance do successor) e pode substituir o successor sem query",
      "Tem de ser aprendida sempre através do OSPF e só depois redistribuída no processo EIGRP para poder ficar como uma rota de backup",
      "Só é instalada e usada depois de o BGP terminar a convergência, quando o caminho eBGP já está estável na tabela de routing"
    ],
    "correct": 1,
    "explanation": "Feasible successors cumprem RD < FD do successor atual, por isso são backups free-loop e assumem de imediato sem queries DUAL.",
    "difficulty": "Difícil"
  },
  {
    "question": "O estado de interface `Administratively down / down` significa na maioria das vezes:",
    "options": [
      "Só o cabo de rede está desligado e o line protocol ficou down",
      "A interface foi desligada com o comando `shutdown`",
      "O STP bloqueou a porta no papel alternate, sem comando shutdown",
      "Uma ACL negou todo o tráfego IP, mas a interface continua up"
    ],
    "correct": 1,
    "explanation": "Administratively down significa shutdown na interface. Protocolo down com falha up/up é cabo, speed ou problemas L1/L2 — não é o mesmo que admin down.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em comparação com HSRP, qual é uma característica definidora do VRRP em routers Cisco?",
    "options": [
      "O VRRP exige sempre o weighting do GLBP em cada grupo para escolher o forwarder ativo que envia o tráfego",
      "O VRRP substitui por completo o OSPF na LAN e elimina a necessidade de qualquer outro protocolo de routing",
      "O VRRP só pode correr em switches de Camada 2 puros e nunca em routers Cisco com interfaces routed",
      "O VRRP é um protocolo FHRP open standard (RFC); o IP virtual pode ser um IP real da interface do master"
    ],
    "correct": 3,
    "explanation": "VRRP (RFC) é FHRP baseado em standard. Ao contrário do HSRP clássico, o IP virtual VRRP pode ser um IP do router master. HSRP é proprietário Cisco; GLBP acrescenta balanceamento ativo-ativo.",
    "difficulty": "Médio"
  },
  {
    "question": "Uma área OSPF stub é configurada para que:",
    "options": [
      "Communities BGP substituam todos os LSAs OSPF dentro da área",
      "LSAs externas Type 5 sejam bloqueadas e o ABR injete tipicamente uma rota default em alternativa",
      "Só sejam inundadas externas Type 5 e todos os LSA Type 1/2 sejam descartados",
      "A área tenha de conter o ASBR que origina todas as rotas externas"
    ],
    "correct": 1,
    "explanation": "Áreas stub mantêm a LSDB mais pequena: sem LSA Type 5 (externas). O ABR costuma injetar default para os routers internos chegarem ao exterior. Totally stubby também bloqueia Type 3 inter-área (Cisco).",
    "difficulty": "Difícil"
  },
  {
    "question": "Na Camada 3, que campo se usa habitualmente para marcar pacotes para classificação QoS ponta a ponta?",
    "options": [
      "Apenas os bits CoS 802.1Q, que sobrevivem inalterados em cada hop routed até ao destino",
      "O tamanho da janela TCP, tratado como marca de QoS ponta a ponta dentro do cabeçalho IP",
      "O opcode ARP, que define a prioridade QoS do pacote em cada router ao longo do caminho",
      "DSCP no cabeçalho IP (ToS/Traffic Class); CoS é Camada 2 em trunks 802.1Q"
    ],
    "correct": 3,
    "explanation": "O DSCP (Differentiated Services Code Point) no cabeçalho IP marca pacotes para QoS em redes routed. O CoS 802.1Q (PCP) é marcação L2 no trunk e não se preserva depois do frame ser routed.",
    "difficulty": "Médio"
  },
  {
    "question": "Como se relaciona o IPFIX com o NetFlow clássico nas plataformas Cisco?",
    "options": [
      "IPFIX é só uma extensão do protocolo CDP na Camada 2 dos switches e não exporta flows nem metadados de conversas para um coletor",
      "IPFIX (RFC 7011) é a evolução padronizada IETF da exportação de flows; o NetFlow v9 inspirou-o e muitos exporters falam ambos",
      "IPFIX substitui as LSAs do OSPF por registos de flow e deixa de fazer o flooding da link-state database para os vizinhos OSPF",
      "IPFIX desativa o CEF no router Cisco e obriga ao process-switching de todos os pacotes que são encaminhados pelas interfaces"
    ],
    "correct": 1,
    "explanation": "IPFIX é o standard IETF para exportar informação de flows, muito baseado nos templates do NetFlow v9. Os vendors costumam suportar coletores NetFlow e IPFIX; ambos exportam metadados das conversas, não o payload completo.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve uma floating static route?",
    "options": [
      "Rota estática de backup com administrative distance maior que o caminho principal, instalada só se a rota preferida falhar",
      "Rota estática que ganha sempre ao OSPF porque o administrative distance estático é infinito e nunca perde a preferência na tabela",
      "Rota que faz load-balance igual com todos os protocolos dinâmicos por omissão, sem ser preciso alterar o administrative distance",
      "Host route (/32) que só pode apontar para a interface null0 de descarte e nunca para um endereço IP de next hop"
    ],
    "correct": 0,
    "explanation": "Uma floating static configura-se com administrative distance maior que a rota principal (ex.: AD estático 1 elevado para 210 para o OSPF AD 110 ganhar). Fica fora da tabela até a rota preferida desaparecer e então assume o backup. Não ganha ao OSPF se mantiveres o AD estático default de 1.",
    "difficulty": "Médio"
  },
  {
    "question": "Num segmento OSPF multi-access (Ethernet), como se escolhem o Designated Router (DR) e o Backup DR (BDR)?",
    "options": [
      "Sempre o router com o process ID OSPF mais baixo no segmento, sem usar a prioridade da interface nem o Router ID",
      "Só o router que tem uma default route estática, mesmo que a prioridade OSPF da interface seja zero e o Router ID baixo",
      "Ganha a maior prioridade de interface OSPF; em empate, o Router ID mais alto (o BDR é o seguinte)",
      "Round-robin entre todos os vizinhos a cada intervalo Hello, mudando quem é o DR e quem é o BDR em cada ciclo"
    ],
    "correct": 2,
    "explanation": "Em redes broadcast multi-access o OSPF elege DR e BDR para reduzir flooding de adjacências. Ganha a maior prioridade de interface (0–255; 0 = inelegível); empates resolvem-se com o Router ID mais alto. Os outros routers formam full adjacency sobretudo com DR/BDR (DROTHER).",
    "difficulty": "Médio"
  },
  {
    "question": "Na máquina de estados do vizinho BGP, que estado significa que a sessão está totalmente ativa e se podem trocar rotas?",
    "options": [
      "Idle — o BGP desativou permanentemente o vizinho e já não tenta nova sessão TCP nem Open",
      "Active — o BGP só escuta a porta TCP e nunca envia mensagens Open a esse vizinho",
      "Connect — o TCP está em baixo, por isso as mensagens UPDATE são inundadas para todos os peers",
      "Established — a sessão TCP e a troca BGP Open tiveram sucesso; seguem-se KEEPALIVE/UPDATE"
    ],
    "correct": 3,
    "explanation": "Os vizinhos BGP avançam Idle → Connect → OpenSent → OpenConfirm → Established (Active é um caminho de retry/listen quando o Connect falha). Só Established significa que o peering está ativo e se podem anunciar prefixos. Em show ip bgp summary, um número em State/PfxRcd costuma significar Established; Idle/Active/OpenSent indicam que ainda não está up.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é o objetivo da Duplicate Address Detection (DAD) em IPv6 antes de um host usar um endereço unicast?",
    "options": [
      "Encriptar o Neighbor Discovery com IPsec por omissão em todas as LANs, antes de o host poder usar qualquer endereço unicast no link",
      "Verificar que nenhum outro nó no link já usa o endereço candidato, enviando um Neighbor Solicitation para esse endereço",
      "Pedir um prefixo global exclusivamente a um servidor DHCPv6 e ignorar os Router Advertisements recebidos no link, sem enviar Neighbor Solicitation",
      "Converter todos os endereços link-local em anycast públicos na Internet e anunciá-los para fora do segmento como prefixo global"
    ],
    "correct": 1,
    "explanation": "A DAD envia um NS (ICMPv6 tipo 135) para o endereço tentativo com origem não especificada (::). Se outro nó responder com NA, o endereço está duplicado e não deve ser usado. A DAD aplica-se a link-local e a endereços globalmente únicos (incluindo SLAAC ou DHCPv6). Por si só não encripta o ND nem substitui os RAs.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que um operador usa AS-path prepending nos anúncios BGP para um ISP?",
    "options": [
      "Para cifrar por omissão as mensagens BGP UPDATE com IPsec em cada anúncio de prefixo enviado ao ISP neste peering, criando essa SA IPsec",
      "Para forçar o vizinho permanentemente para o estado Idle, cortando o peering BGP e impedindo qualquer troca posterior de prefixos",
      "Para substituir métricas OSPF por hop count dentro da LAN, fazendo cada router interno preferir o caminho OSPF com menos saltos",
      "Para fazer um caminho parecer mais longo (menos preferido) e influenciar engenharia de tráfego de entrada / como os outros chegam até si"
    ],
    "correct": 3,
    "explanation": "O AS-path prepending repete o teu número de AS no AS_PATH para que ASes externos vejam um caminho mais longo e tipicamente prefiram outro link. Influencia a seleção de caminho de entrada; não é encriptação, não põe o peer em Idle por si e não tem a ver com métricas OSPF na LAN. Local Preference e MED cobrem outras necessidades de engenharia de tráfego.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é que o Unicast Reverse Path Forwarding (uRPF) verifica numa interface de router?",
    "options": [
      "Que o MAC de destino de cada trama é igual ao BIA do router antes de aceitar o hello OSPF e formar a adjacência nessa interface do segmento",
      "Que o IP de origem dos pacotes de entrada seria alcançável por essa mesma interface (anti-spoofing), usando o modo de verificação FIB/RPF",
      "Que todos os pacotes de entrada têm a marcação DSCP EF e são descartados quando o campo de QoS traz qualquer outro valor",
      "Que os peers BGP estão todos em Established antes de encaminhar qualquer tráfego LAN que chegue a essa interface do router"
    ],
    "correct": 1,
    "explanation": "O uRPF descarta (ou alerta sobre) pacotes cujo endereço de origem não seria encaminhado de volta pela interface de chegada—mitiga spoofing de IP. O modo strict exige o melhor caminho por essa interface; o loose só exige que a origem exista na FIB. Não é um filtro de DSCP, MAC nem de estado BGP para o encaminhamento LAN.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que os engenheiros de rede configuram redistribuição de rotas entre dois protocolos de encaminhamento (por exemplo OSPF e EIGRP)?",
    "options": [
      "Para substituir a tabela MAC de cada router por LSAs OSPF, apagando as entradas CAM aprendidas nas portas de acesso e no uplink e passando o switching para a LSDB",
      "Para forçar o BGP a usar só a distância administrativa por omissão do RIP (120) em todas as rotas, ignorando o valor 20 do eBGP e o valor 200 do iBGP",
      "Para cifrar automaticamente todas as atualizações de routing com IPsec sempre que dois IGPs se encontram na fronteira entre OSPF e EIGRP, sem qualquer route-map e sem seed metric",
      "Para injetar rotas aprendidas num domínio de routing noutro, para os prefixos serem alcançáveis através das fronteiras de protocolo (com cuidado com loops, métricas e filtragem)"
    ],
    "correct": 3,
    "explanation": "A redistribuição copia/transforma rotas de um protocolo para outro (ex. OSPF ↔ EIGRP, ou um IGP para BGP) para redes em domínios diferentes ficarem alcançáveis. É preciso controlar métricas iniciais (seed), distância administrativa, route-maps/filtros e risco de loops (incluindo redistribuição mútua). Não reescreve tabelas CAM, não força o AD do BGP para o do RIP, nem cifra magicamente as atualizações.",
    "difficulty": "Médio"
  },
  {
    "question": "No routing distance-vector (por exemplo RIP clássico), o que é que a regra de split-horizon evita?",
    "options": [
      "Usar mais do que um caminho de custo igual ao mesmo tempo (ECMP), mesmo quando duas rotas RIP têm a mesma métrica",
      "Anunciar uma rota de volta pela mesma interface pela qual foi aprendida, o que ajuda a limitar loops de routing simples",
      "Enviar quaisquer pacotes Hello em segmentos broadcast, incluindo os que manteriam a vizinhança distance-vector nesse link",
      "Aprender rotas por omissão via DHCP em interfaces LAN, instalando o default gateway oferecido pelo servidor DHCP"
    ],
    "correct": 1,
    "explanation": "O split-horizon diz: não anuncies uma rota de volta para o vizinho/interface que te ensinou essa rota. Isso bloqueia um padrão comum de loop entre dois routers em protocolos distance-vector. Poison reverse é uma técnica relacionada (anunciar a rota de volta como inalcançável). Split-horizon não tem a ver com ECMP, Hellos estilo OSPF nem defaults DHCP.",
    "difficulty": "Médio"
  },
  {
    "question": "Num EtherChannel de um switch Cisco, o que é que o algoritmo de load-balancing (hash) decide principalmente?",
    "options": [
      "Qual membro do bundle encaminha um determinado fluxo, com base em campos como MAC ou IP de origem/destino (e opcionalmente portas), para distribuir o tráfego pelo canal",
      "Se o EtherChannel negoceia exclusivamente com LACP ou com PAgP, escolhendo o protocolo do bundle a partir do hash de MAC ou de IP de cada fluxo que entra",
      "A prioridade de root bridge STP de todas as VLANs no canal, calculada a partir do hash de MAC ou IP de origem e de destino de cada fluxo que atravessa o bundle físico do switch",
      "O ID da VLAN nativa que tem de ser usada em todas as portas membro, derivado do mesmo hash de MAC ou de IP que reparte os fluxos pelo canal lógico"
    ],
    "correct": 0,
    "explanation": "O load-balancing do EtherChannel faz hash de campos selecionados do pacote (muitas vezes MAC src/dst, IP src/dst ou portas L4) para escolher um membro físico por fluxo. Não escolhe LACP vs PAgP, não define a prioridade de root STP nem a VLAN nativa — isso é configuração aparte.",
    "difficulty": "Médio"
  },
  {
    "question": "No EIGRP, qual é a relação entre Reported Distance (RD), Feasible Distance (FD) e um feasible successor?",
    "options": [
      "A Reported Distance é sempre igual à largura de banda da interface em kb/s; a Feasible Distance só é usada pelo OSPF e não entra na escolha do successor EIGRP",
      "Um feasible successor é qualquer vizinho que anuncia métrica infinita (poison reverse), e essa rota inalcançável fica logo como backup sem verificar a condição de viabilidade do protocolo EIGRP",
      "Um vizinho só pode ser feasible successor se a sua Reported Distance for menor do que a Feasible Distance do successor (condição de viabilidade), fornecendo um caminho de backup sem loops",
      "A Feasible Distance é o hop count do RIP; a Reported Distance é o valor MED do BGP copiado para o EIGRP, e o successor escolhe-se apenas por esse MED anunciado"
    ],
    "correct": 2,
    "explanation": "A FD é a melhor métrica conhecida para chegar a um prefixo via o successor. A RD é a métrica que um vizinho anuncia para esse prefixo (a distância dele ao destino). A condição de viabilidade (RD < FD do successor) garante um backup sem loops—o feasible successor—utilizável de imediato se o successor falhar. A RD não é só bandwidth, e a FD não é hop count do RIP nem MED do BGP.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em IPsec, qual é a diferença principal entre tunnel mode e transport mode?",
    "options": [
      "O tunnel mode só funciona com AH; o transport mode só funciona com ESP, e usar o outro protocolo de segurança nesse modo faz a associação de segurança IPsec falhar durante a negociação",
      "O transport mode cifra todo o pacote IP original, incluindo o cabeçalho exterior usado para o encaminhamento na Internet entre os dois gateways da VPN",
      "Ambos os modos acrescentam sempre um cabeçalho GRE extra antes do ESP, e sem esse GRE o IPsec não consegue autenticar nem cifrar o tráfego entre os pares",
      "O tunnel mode encapsula o pacote IP original (novo cabeçalho IP exterior); o transport mode protege sobretudo o payload e deixa o cabeçalho IP original no sítio para o encaminhamento"
    ],
    "correct": 3,
    "explanation": "O tunnel mode embrulha o pacote IP original e acrescenta um novo cabeçalho IP exterior (típico em VPN site-to-site). O transport mode protege o payload (e normalmente deixa o cabeçalho IP original visível para o routing), o que é comum em proteção host-to-host. Tanto AH como ESP podem usar-se em qualquer modo; nenhum modo exige GRE por definição.",
    "difficulty": "Médio"
  },
  {
    "question": "Num Cisco wireless LAN controller, qual é o objetivo do Band Select (band steering)?",
    "options": [
      "Forçar todos os clientes apenas para a banda de 6 GHz no WLC, mesmo que o cliente seja 802.11n e não tenha rádio Wi-Fi 6E para emitir nessa banda",
      "Incentivar clientes dual-band a preferir 5 GHz (quando adequado) em vez de congestionar os 2,4 GHz, atrasando as respostas a probes em 2,4 GHz",
      "Substituir o CAPWAP por uma bridge Ethernet de Camada 2 permanente entre o AP e o WLC, eliminando o túnel de controlo e o de dados",
      "Desativar o OFDM em 5 GHz no rádio do AP para que só clientes DSSS, como estações 802.11b a 1 ou 2 Mb/s, se possam associar"
    ],
    "correct": 1,
    "explanation": "O Band Select (band steering) empurra clientes dual-band para 5 GHz, respondendo mais lentamente (ou não de imediato) a probes em 2,4 GHz, reduzindo a congestão nessa banda. Não coloca clientes legacy em 6 GHz, não substitui o CAPWAP e não desativa OFDM em 5 GHz.",
    "difficulty": "Médio"
  },
  {
    "question": "Num EtherChannel Cisco, que combinação de modos LACP forma com sucesso um canal entre dois switches?",
    "options": [
      "Um lado active e o outro passive (ou ambos active); o LACP negoceia o bundle",
      "Um lado on (estático) e o outro desirable (palavra-chave só PAgP numa porta LACP)",
      "Um lado auto e o outro auto sem troca de PDUs LACP",
      "Um lado passive e o outro passive, porque ambos esperam indefinidamente que o peer inicie"
    ],
    "correct": 0,
    "explanation": "O LACP (IEEE 802.3ad/802.1AX) usa active (inicia) e passive (responde). Active+passive ou active+active formam canal; passive+passive não. A palavra-chave on é EtherChannel estático sem negociação LACP. desirable/auto são modos PAgP, não LACP.",
    "difficulty": "Medium"
  },
  {
    "question": "Em que se baseia o Path MTU Discovery (PMTUD) para descobrir o menor MTU ao longo de um caminho IPv4?",
    "options": [
      "ICMP Echo Request periódicos com exatamente 1500 bytes, gerados em cada hop de router ao longo de todo o caminho IPv4 até ao destino",
      "O TCP anunciar sempre uma window de 536 bytes em cada sessão para a fragmentação IPv4 nunca ser necessária em nenhum hop do caminho",
      "Enviar pacotes com o bit DF (Don't Fragment) e usar mensagens ICMP Fragmentation Needed quando um hop tiver de os descartar",
      "Forçar todas as interfaces de túnel a fazer clamp do TCP MSS para 40 bytes abaixo do MTU físico da interface WAN local de cada router"
    ],
    "correct": 2,
    "explanation": "O PMTUD clássico em IPv4 envia pacotes com DF. Se um hop tiver MTU menor, descarta o pacote e deve devolver ICMP Type 3 Code 4 (Fragmentation Needed) com o next-hop MTU para o emissor baixar o path MTU. Reduzir a window TCP ou fazer sempre clamp MSS para valores minúsculos não é o mecanismo do PMTUD (embora o clamp de MSS seja um workaround operacional quando o ICMP é filtrado).",
    "difficulty": "Medium"
  },
  {
    "question": "Em OSPF multi-área, porque é que a Area 0 (backbone) tem de existir e estar corretamente ligada?",
    "options": [
      "Porque o OSPF recusa eleger um Designated Router e um Backup Designated Router fora da Area 0 em qualquer segmento multi-acesso broadcast ou NBMA, deixando os vizinhos presos para sempre no estado 2-Way",
      "Porque a Area 0 é o único sítio do domínio onde são permitidas chaves de autenticação OSPF, em texto simples, com MD5 ou com SHA, em qualquer interface do router",
      "Porque as LSA Type 1 (Router) só são inundadas dentro da Area 0 e nunca são originadas, aceites ou retransmitidas dentro de qualquer área não-backbone do domínio OSPF",
      "Porque as áreas não-backbone trocam rotas inter-área através da Area 0 (ou de um virtual-link); sem um backbone contíguo, as áreas podem ficar particionadas do resto do domínio OSPF"
    ],
    "correct": 3,
    "explanation": "O desenho hierárquico OSPF exige que todas as áreas se liguem (diretamente ou via virtual link) à Area 0 para as rotas inter-área resumidas pelos ABR permanecerem sem loops e alcançáveis. Um backbone em falta ou partido isola áreas umas das outras. A eleição DR/BDR é comportamento de segmento multi-acesso, não “só na Area 0”; a autenticação não está limitada à Area 0; as LSA Type 1 ficam intra-área em todas as áreas — isso não explica sozinho a necessidade do backbone.",
    "difficulty": "Medium"
  },
  {
    "question": "No Hot Standby Router Protocol (HSRP), que papéis têm os routers Active e Standby para um IP virtual usado como default gateway?",
    "options": [
      "Ambos os routers encaminham tráfego de utilizador em ECMP active-active, partilhando sempre o mesmo MAC virtual em igualdade em cada trama enviada pelos clientes",
      "O router Active detém o IP/MAC virtual e encaminha o tráfego desse grupo; o Standby está pronto a assumir se o Active falhar, após deteção baseada em Hellos",
      "O router Standby faz sempre NAT dos endereços IPv4 dos clientes enquanto o Active só responde a pedidos ARP dirigidos ao IP virtual do grupo HSRP",
      "O HSRP elege um Designated Router e um Backup Designated Router exatamente como o OSPF faz numa LAN multi-acesso, em broadcast ou em NBMA"
    ],
    "correct": 1,
    "explanation": "O HSRP clássico é redundância first-hop active/standby: um Active encaminha para o IP virtual (e MAC virtual associado), enquanto um Standby monitoriza Hellos e assume o papel active em falha. Por omissão não é ECMP active-active (isso aproxima-se mais do modelo do GLBP), não é uma divisão de funções NAT, e não é a eleição DR/BDR do OSPF.",
    "difficulty": "Easy"
  },
  {
    "question": "Num desenho Cisco DMVPN Phase 2/3, qual é o papel principal do NHRP (Next Hop Resolution Protocol)?",
    "options": [
      "Encriptar os payloads spoke-to-spoke com um perfil IPsec separado em cada túnel direto, perfil que substitui completamente o IKEv2 e dispensa por completo a negociação de chaves",
      "Anunciar tabelas BGP completas da Internet a partir de cada spoke para o hub, para que os spokes nunca precisem de formar um túnel DMVPN para comunicarem diretamente entre si",
      "Atuar como o IGP do underlay que substitui por completo o OSPF ou o EIGRP nas interfaces WAN físicas e calcula sozinho o caminho entre cada spoke e o hub",
      "Permitir que os spokes resolvam dinamicamente os endereços de túnel (NBMA) uns dos outros para formarem túneis spoke-to-spoke diretos em vez de enviar todo o tráfego pelo hub"
    ],
    "correct": 3,
    "explanation": "O NHRP é o serviço de mapeamento no DMVPN: os spokes registam o endereço público/NBMA no hub (NHS) e podem consultar mapeamentos para criar túneis spoke-to-spoke sob procura. O IPsec/IKEv2 continua a proteger os túneis; o NHRP não substitui o IGP do underlay nas ligações físicas, e não serve para despejar tabelas BGP da Internet no overlay.",
    "difficulty": "Medium"
  }
];
