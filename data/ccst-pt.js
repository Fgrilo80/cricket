window.QUIZ_BANK = [
  {
    "question": "Qual é a principal função de um switch em uma rede local?",
    "options": [
      "Conectar dispositivos em diferentes redes",
      "Conectar dispositivos na mesma rede local usando endereços MAC",
      "Roteamento de pacotes entre redes",
      "Fornecer endereços IP dinamicamente"
    ],
    "correct": 1,
    "explanation": "Switches operam na Camada 2 (Data Link) do modelo OSI e usam endereços MAC para encaminhar frames dentro da mesma LAN.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que significa a sigla OSI?",
    "options": [
      "Open Systems Interconnection",
      "Online System Integration",
      "Operating System Interface",
      "Open Source Internet"
    ],
    "correct": 0,
    "explanation": "O modelo OSI (Open Systems Interconnection) é um modelo conceitual de 7 camadas usado para descrever como os dispositivos de rede se comunicam.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual camada do modelo OSI é responsável pelo endereçamento lógico e roteamento?",
    "options": [
      "Camada de Transporte",
      "Camada de Rede",
      "Camada de Enlace",
      "Camada Física"
    ],
    "correct": 1,
    "explanation": "A Camada de Rede (Camada 3) é responsável pelo endereçamento lógico (IP) e pelo roteamento de pacotes entre redes diferentes.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre um hub e um switch?",
    "options": [
      "Hub é mais rápido que switch",
      "Switch usa endereços MAC para encaminhar frames, hub envia para todos",
      "Hub é mais seguro que switch",
      "Não há diferença"
    ],
    "correct": 1,
    "explanation": "Hubs são dispositivos de camada 1 que replicam o sinal para todas as portas. Switches são inteligentes e usam tabela MAC.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um endereço IP privado?",
    "options": [
      "Endereço usado apenas na internet pública",
      "Endereço não roteável na internet e usado em redes locais",
      "Endereço atribuído automaticamente por DHCP",
      "Endereço de broadcast"
    ],
    "correct": 1,
    "explanation": "Endereços IP privados (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) não são roteáveis na internet e são usados em redes internas.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando Cisco IOS mostra a tabela de endereços MAC aprendidos?",
    "options": [
      "show ip route",
      "show mac address-table",
      "show interfaces",
      "show arp"
    ],
    "correct": 1,
    "explanation": "O comando 'show mac address-table' exibe a tabela de endereços MAC aprendidos pelo switch.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um VLAN?",
    "options": [
      "Uma rede física separada",
      "Uma rede lógica criada em um switch para segmentar tráfego",
      "Um protocolo de roteamento",
      "Um tipo de cabo"
    ],
    "correct": 1,
    "explanation": "VLANs (Virtual LANs) permitem segmentar logicamente uma rede física em múltiplas redes isoladas no mesmo switch.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a velocidade padrão de uma porta Ethernet Gigabit?",
    "options": [
      "10 Mbps",
      "100 Mbps",
      "1000 Mbps",
      "10 Gbps"
    ],
    "correct": 2,
    "explanation": "Ethernet Gigabit (1000BASE-T) opera a 1000 Mbps (1 Gbps).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que faz o comando 'ping'?",
    "options": [
      "Envia pacotes TCP",
      "Testa conectividade usando ICMP Echo Request/Reply",
      "Configura rotas estáticas",
      "Mostra a tabela ARP"
    ],
    "correct": 1,
    "explanation": "O comando ping usa o protocolo ICMP para testar a conectividade entre dois dispositivos.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a máscara de sub-rede padrão para uma rede Classe C?",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "correct": 2,
    "explanation": "Redes Classe C usam máscara padrão 255.255.255.0 (/24).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é PoE (Power over Ethernet)?",
    "options": [
      "Transmissão de dados em alta velocidade",
      "Fornecimento de energia elétrica através do cabo Ethernet",
      "Protocolo de segurança",
      "Tipo de fibra óptica"
    ],
    "correct": 1,
    "explanation": "PoE permite que dispositivos como câmeras IP e telefones IP recebam energia através do mesmo cabo Ethernet usado para dados.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual protocolo é usado para atribuição automática de endereços IP?",
    "options": [
      "DNS",
      "DHCP",
      "ARP",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) atribui automaticamente endereços IP e outras configurações de rede.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que significa duplex full?",
    "options": [
      "Comunicação em um único sentido",
      "Comunicação simultânea em ambos os sentidos",
      "Comunicação half-duplex",
      "Sem comunicação"
    ],
    "correct": 1,
    "explanation": "Full-duplex permite que os dispositivos transmitam e recebam dados simultaneamente, eliminando colisões.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do protocolo ARP?",
    "options": [
      "Resolver nome para IP",
      "Resolver IP para endereço MAC",
      "Roteamento de pacotes",
      "Criptografia de dados"
    ],
    "correct": 1,
    "explanation": "ARP (Address Resolution Protocol) mapeia endereços IP para endereços MAC na mesma rede local.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um default gateway?",
    "options": [
      "O primeiro dispositivo na rede",
      "O roteador que encaminha tráfego para fora da rede local",
      "Um servidor DNS",
      "Um switch gerenciável"
    ],
    "correct": 1,
    "explanation": "O default gateway é o dispositivo (geralmente um roteador) que encaminha pacotes destinados a redes externas.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual comando mostra as interfaces ativas em um roteador Cisco?",
    "options": [
      "show running-config",
      "show ip interface brief",
      "show version",
      "show clock"
    ],
    "correct": 1,
    "explanation": "O comando 'show ip interface brief' exibe um resumo rápido do status de todas as interfaces.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é uma colisão em uma rede Ethernet?",
    "options": [
      "Quando dois dispositivos enviam dados ao mesmo tempo em half-duplex",
      "Quando há falha de cabo",
      "Quando o switch está sobrecarregado",
      "Quando há loop na rede"
    ],
    "correct": 0,
    "explanation": "Colisões ocorrem em redes half-duplex quando dois dispositivos transmitem simultaneamente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função principal de um firewall?",
    "options": [
      "Aumentar a velocidade da rede",
      "Controlar o tráfego de entrada e saída com base em regras de segurança",
      "Atribuir endereços IP",
      "Conectar redes Wi-Fi"
    ],
    "correct": 1,
    "explanation": "Firewalls inspecionam e controlam o tráfego de rede com base em regras de segurança predefinidas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é SSID em uma rede wireless?",
    "options": [
      "Senha da rede",
      "Nome identificador da rede wireless",
      "Canal de frequência",
      "Tipo de criptografia"
    ],
    "correct": 1,
    "explanation": "SSID (Service Set Identifier) é o nome da rede wireless que os clientes veem ao procurar redes disponíveis.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual protocolo é usado para gerenciamento remoto seguro de dispositivos Cisco?",
    "options": [
      "Telnet",
      "SSH",
      "HTTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "SSH (Secure Shell) fornece acesso remoto criptografado e seguro, ao contrário do Telnet que é inseguro.",
    "difficulty": "Médio"
  },
  {
    "question": "O que significa 'crossover cable'?",
    "options": [
      "Cabo usado para conectar dois switches diretamente",
      "Cabo para conectar computador a switch",
      "Cabo de fibra óptica",
      "Cabo de alimentação"
    ],
    "correct": 0,
    "explanation": "Cabo crossover é usado para conectar dispositivos semelhantes (switch a switch ou PC a PC) diretamente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a porta padrão do protocolo HTTP?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "correct": 2,
    "explanation": "HTTP usa a porta 80 por padrão. HTTPS usa a porta 443.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um loopback interface?",
    "options": [
      "Interface física para testes",
      "Interface virtual que permanece sempre ativa",
      "Interface para conexão WAN",
      "Interface de gerenciamento"
    ],
    "correct": 1,
    "explanation": "Loopback é uma interface virtual que permanece sempre up/up e é usada para testes e gerenciamento.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'copy running-config startup-config'?",
    "options": [
      "Apagar a configuração",
      "Salvar a configuração atual na NVRAM",
      "Reiniciar o dispositivo",
      "Mostrar a configuração"
    ],
    "correct": 1,
    "explanation": "Este comando salva a configuração em execução (RAM) na configuração de inicialização (NVRAM).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é NAT (Network Address Translation)?",
    "options": [
      "Tradução de nomes de domínio",
      "Tradução de endereços IP privados para públicos",
      "Protocolo de roteamento",
      "Tipo de cabo"
    ],
    "correct": 1,
    "explanation": "NAT permite que múltiplos dispositivos em uma rede privada compartilhem um único endereço IP público.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre TCP e UDP?",
    "options": [
      "TCP é mais rápido que UDP",
      "TCP é orientado a conexão e confiável, UDP é sem conexão e mais rápido",
      "Não há diferença",
      "UDP é usado apenas para e-mail"
    ],
    "correct": 1,
    "explanation": "TCP oferece entrega confiável com controle de fluxo e retransmissão. UDP é mais rápido mas não garante entrega.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um trunk port em um switch?",
    "options": [
      "Porta que pertence a uma única VLAN",
      "Porta que transporta tráfego de múltiplas VLANs",
      "Porta de gerenciamento",
      "Porta PoE"
    ],
    "correct": 1,
    "explanation": "Trunk ports transportam tráfego de múltiplas VLANs entre switches usando tags 802.1Q.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando exibe a tabela de roteamento em um roteador Cisco?",
    "options": [
      "show ip route",
      "show interfaces",
      "show arp",
      "show clock"
    ],
    "correct": 0,
    "explanation": "O comando 'show ip route' exibe a tabela de roteamento com todas as rotas conhecidas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um endereço MAC?",
    "options": [
      "Endereço IP dinâmico",
      "Endereço físico único de 48 bits gravado no hardware de rede",
      "Endereço de rede lógica",
      "Senha de rede"
    ],
    "correct": 1,
    "explanation": "O endereço MAC é um identificador físico único de 48 bits atribuído pelo fabricante à interface de rede.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função do protocolo STP (Spanning Tree Protocol)?",
    "options": [
      "Aumentar a velocidade da rede",
      "Evitar loops em redes com switches redundantes",
      "Atribuir endereços IP",
      "Criptografar dados"
    ],
    "correct": 1,
    "explanation": "STP evita loops em redes com caminhos redundantes bloqueando portas redundantes.",
    "difficulty": "Médio"
  },
  {
    "question": "O que significa 'up/up' no status de uma interface Cisco?",
    "options": [
      "Interface administrativamente down",
      "Interface com problemas físicos",
      "Interface ativa e operacional em camadas 1 e 2",
      "Interface em manutenção"
    ],
    "correct": 2,
    "explanation": "'up/up' significa que a interface está ativa fisicamente (Layer 1) e logicamente (Layer 2).",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a porta padrão do protocolo SSH?",
    "options": [
      "21",
      "22",
      "23",
      "80"
    ],
    "correct": 1,
    "explanation": "SSH usa a porta 22 por padrão.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um broadcast domain?",
    "options": [
      "Grupo de dispositivos que podem se comunicar diretamente sem roteador",
      "Grupo de dispositivos que recebem broadcasts",
      "Rede sem fio",
      "Tipo de cabo"
    ],
    "correct": 1,
    "explanation": "Broadcast domain é o conjunto de dispositivos que recebem mensagens de broadcast enviadas por qualquer um deles.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando é usado para configurar uma interface com endereço IP?",
    "options": [
      "ip address 192.168.1.1 255.255.255.0",
      "interface ip 192.168.1.1",
      "set ip 192.168.1.1",
      "config ip 192.168.1.1"
    ],
    "correct": 0,
    "explanation": "O comando correto é 'ip address [IP] [máscara]' no modo de configuração de interface.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é WPA3 em redes wireless?",
    "options": [
      "Protocolo de roteamento",
      "Padrão de segurança wireless mais recente e seguro",
      "Tipo de antena",
      "Canal de frequência"
    ],
    "correct": 1,
    "explanation": "WPA3 é o padrão de segurança wireless mais recente, oferecendo melhor proteção contra ataques.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show version'?",
    "options": [
      "Mostrar a versão do IOS e informações do hardware",
      "Mostrar a configuração atual",
      "Reiniciar o dispositivo",
      "Apagar a NVRAM"
    ],
    "correct": 0,
    "explanation": "O comando 'show version' exibe a versão do software IOS, modelo do hardware e tempo de atividade.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um patch panel?",
    "options": [
      "Dispositivo para conexão física de cabos em um rack",
      "Tipo de switch",
      "Roteador wireless",
      "Servidor DHCP"
    ],
    "correct": 0,
    "explanation": "Patch panel é um dispositivo passivo que organiza e facilita as conexões de cabos em um rack de rede.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função do comando 'show interfaces status'?",
    "options": [
      "Mostrar o status de todas as interfaces",
      "Mostrar a configuração de VLAN",
      "Reiniciar o switch",
      "Apagar logs"
    ],
    "correct": 0,
    "explanation": "O comando 'show interfaces status' exibe o status operacional de todas as portas do switch.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre half-duplex e full-duplex?",
    "options": [
      "Half-duplex permite comunicação simultânea",
      "Full-duplex permite comunicação em um único sentido",
      "Half-duplex permite comunicação em um único sentido por vez",
      "Não há diferença"
    ],
    "correct": 2,
    "explanation": "Half-duplex permite comunicação em apenas um sentido por vez (com colisões). Full-duplex permite ambos os sentidos simultaneamente.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um console cable?",
    "options": [
      "Cabo Ethernet normal",
      "Cabo serial para acesso de linha de comando (CLI) em dispositivos Cisco",
      "Cabo de alimentação",
      "Cabo crossover"
    ],
    "correct": 1,
    "explanation": "Console cable (geralmente RJ45 para DB9) é usado para conexão serial direta ao dispositivo para configuração inicial via CLI.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual protocolo é usado para sincronização de tempo em redes?",
    "options": [
      "DNS",
      "NTP",
      "DHCP",
      "ARP"
    ],
    "correct": 1,
    "explanation": "NTP (Network Time Protocol) é usado para sincronizar relógios de dispositivos em rede com alta precisão.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um 'err-disabled' em uma interface Cisco?",
    "options": [
      "Interface normal",
      "Interface desabilitada por erro (ex: loop, violação de segurança)",
      "Interface em manutenção",
      "Interface PoE"
    ],
    "correct": 1,
    "explanation": "Err-disabled é um estado de proteção onde a interface é automaticamente desabilitada devido a erros como loops ou violação de port-security.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função principal de um Access Point wireless?",
    "options": [
      "Roteamento de pacotes",
      "Conectar dispositivos wireless à rede cabeada",
      "Atribuir endereços IP",
      "Filtrar tráfego"
    ],
    "correct": 1,
    "explanation": "Access Points (APs) permitem que dispositivos wireless se conectem à rede cabeada, atuando como bridge.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é CDP (Cisco Discovery Protocol)?",
    "options": [
      "Protocolo de roteamento",
      "Protocolo proprietário Cisco para descobrir dispositivos vizinhos",
      "Protocolo de segurança",
      "Protocolo de backup"
    ],
    "correct": 1,
    "explanation": "CDP permite que dispositivos Cisco descubram informações sobre dispositivos vizinhos diretamente conectados.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a máscara de sub-rede /24 em notação decimal?",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "correct": 0,
    "explanation": "/24 corresponde à máscara 255.255.255.0.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que acontece quando você usa o comando 'no shutdown' em uma interface?",
    "options": [
      "Desabilita a interface",
      "Habilita a interface (coloca em estado up)",
      "Reinicia a interface",
      "Apaga a configuração"
    ],
    "correct": 1,
    "explanation": "O comando 'no shutdown' habilita uma interface que estava administrativamente down.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função do comando 'reload'?",
    "options": [
      "Salvar configuração",
      "Reiniciar o dispositivo",
      "Apagar configuração",
      "Mostrar logs"
    ],
    "correct": 1,
    "explanation": "O comando 'reload' reinicia o dispositivo Cisco.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um 'management VLAN'?",
    "options": [
      "VLAN para tráfego de dados de usuários",
      "VLAN dedicada para gerenciamento do switch",
      "VLAN para voz",
      "VLAN para vídeo"
    ],
    "correct": 1,
    "explanation": "Management VLAN é usada para tráfego de gerenciamento (SSH, SNMP, etc.) e deve ser isolada por segurança.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a principal vantagem de usar switches gerenciáveis?",
    "options": [
      "São mais baratos",
      "Permitem configuração, VLANs, QoS e monitoramento",
      "São mais rápidos que não gerenciáveis",
      "Não precisam de energia"
    ],
    "correct": 1,
    "explanation": "Switches gerenciáveis oferecem recursos avançados como VLANs, QoS, SNMP, port-security e CLI.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'port-security' em switches Cisco?",
    "options": [
      "Recurso para limitar o número de endereços MAC por porta",
      "Protocolo de roteamento",
      "Tipo de cabo",
      "Método de criptografia"
    ],
    "correct": 0,
    "explanation": "Port-security permite restringir o acesso a uma porta com base em endereços MAC autorizados.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show cdp neighbors'?",
    "options": [
      "Mostrar vizinhos descobertos via CDP",
      "Mostrar tabela de roteamento",
      "Mostrar configuração de VLAN",
      "Mostrar logs do sistema"
    ],
    "correct": 0,
    "explanation": "O comando 'show cdp neighbors' exibe dispositivos Cisco vizinhos descobertos pelo CDP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um 'SFP' em equipamentos Cisco?",
    "options": [
      "Tipo de processador",
      "Módulo transceptor de fibra óptica ou cobre hot-swappable",
      "Protocolo de segurança",
      "Tipo de memória"
    ],
    "correct": 1,
    "explanation": "SFP (Small Form-factor Pluggable) é um módulo compacto hot-swappable para portas de fibra ou cobre.",
    "difficulty": "Médio"
  }
];
