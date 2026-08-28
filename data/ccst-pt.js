window.QUIZ_BANK = [
  {
    "question": "Qual é a principal função de um switch em uma rede local?",
    "options": [
      "Conectar dispositivos em diferentes redes",
      "Conectar dispositivos na mesma rede local usando endereços MAC",
      "Encaminhamento de pacotes entre redes",
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
    "question": "Qual camada do modelo OSI é responsável pelo endereçamento lógico e encaminhamento?",
    "options": [
      "Camada de Transporte",
      "Camada de Rede",
      "Camada de Enlace",
      "Camada Física"
    ],
    "correct": 1,
    "explanation": "A Camada de Rede (Camada 3) é responsável pelo endereçamento lógico (IP) e pelo encaminhamento de pacotes entre redes diferentes.",
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
      "Um protocolo de encaminhamento",
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
    "explanation": "Ethernet Gigabit (1000Base-T) opera a 1000 Mbps (1 Gbps).",
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
    "question": "O que é Põe (Power over Ethernet)?",
    "options": [
      "Transmissão de dados em alta velocidade",
      "Fornecimento de energia elétrica através do cabo Ethernet",
      "Protocolo de segurança",
      "Tipo de fibra óptica"
    ],
    "correct": 1,
    "explanation": "Põe permite que dispositivos como câmeras IP e telefones IP recebam energia através do mesmo cabo Ethernet usado para dados.",
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
      "Encaminhamento de pacotes",
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
      "O router que encaminha tráfego para fora da rede local",
      "Um servidor DNS",
      "Um switch gerenciável"
    ],
    "correct": 1,
    "explanation": "O default gateway é o dispositivo (geralmente um router) que encaminha pacotes destinados a redes externas.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual comando mostra as interfaces ativas em um router Cisco?",
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
      "Protocolo de encaminhamento",
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
      "Porta Põe"
    ],
    "correct": 1,
    "explanation": "Trunk ports transportam tráfego de múltiplas VLANs entre switches usando tags 802.1Q.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando exibe a tabela de encaminhamento em um router Cisco?",
    "options": [
      "show ip route",
      "show interfaces",
      "show arp",
      "show clock"
    ],
    "correct": 0,
    "explanation": "O comando 'show ip route' exibe a tabela de encaminhamento com todas as rotas conhecidas.",
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
      "Grupo de dispositivos que podem se comunicar diretamente sem router",
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
      "Protocolo de encaminhamento",
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
      "Router wireless",
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
      "Interface Põe"
    ],
    "correct": 1,
    "explanation": "Err-disabled é um estado de proteção onde a interface é automaticamente desabilitada devido a erros como loops ou violação de port-security.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função principal de um Access Point wireless?",
    "options": [
      "Encaminhamento de pacotes",
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
      "Protocolo de encaminhamento",
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
      "Protocolo de encaminhamento",
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
      "Mostrar tabela de encaminhamento",
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
  },
  {
    "question": "Qual cabo Ethernet usa conector RJ-45?",
    "options": [
      "Coaxial RG-59",
      "Par trançado UTP/STP",
      "Fibra multimodo",
      "Serial V.35"
    ],
    "correct": 1,
    "explanation": "Ethernet em cobre usa par trançado terminado em RJ-45.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual dispositivo encaminha com base no IP de destino?",
    "options": [
      "Hub",
      "Switch L2",
      "Router",
      "Repetidor"
    ],
    "correct": 2,
    "explanation": "Routers ligam redes diferentes usando o endereço IP de destino.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual e a máscara de uma rede /24?",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.252",
      "255.0.0.0"
    ],
    "correct": 1,
    "explanation": "/24 são 24 bits de rede: 255.255.255.0.",
    "difficulty": "Fácil"
  },
  {
    "question": "Para que serve o DHCP?",
    "options": [
      "Traduz nomes em IP",
      "Atribui IP, máscara, gateway e DNS",
      "Cifra HTTP",
      "Filtra MAC"
    ],
    "correct": 1,
    "explanation": "DHCP configura automaticamente os clientes IP.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual protocolo resolve nomes de host para IP?",
    "options": [
      "DHCP",
      "DNS",
      "ARP",
      "NAT"
    ],
    "correct": 1,
    "explanation": "DNS traduz nomes em endereços IP.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que o ARP descobre?",
    "options": [
      "A rota para outra rede",
      "O MAC de um IP na mesma LAN",
      "O servidor NTP",
      "A VLAN nativa"
    ],
    "correct": 1,
    "explanation": "ARP obtem o MAC local correspondente a um IP.",
    "difficulty": "Médio"
  },
  {
    "question": "Um switch unmanaged permite criar VLANs?",
    "options": [
      "Sim, via CLI",
      "Não, tudo fica no mesmo dominio de broadcast",
      "Sim, via SNMP",
      "Só com Põe"
    ],
    "correct": 1,
    "explanation": "Switches unmanaged não tem configuração nem VLANs.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual ferramenta mostra o caminho até um destino?",
    "options": [
      "ipconfig",
      "traceroute / tracert",
      "netstat -a",
      "arp -a"
    ],
    "correct": 1,
    "explanation": "traceroute ou tracert lista os saltos até ao destino.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual e o gateway predefinido de um PC?",
    "options": [
      "O DNS público",
      "O router da LAN por onde sai o tráfego para outras redes",
      "O servidor de impressao",
      "O endereço de loopback"
    ],
    "correct": 1,
    "explanation": "O default gateway e o router local para tráfego off-net.",
    "difficulty": "Fácil"
  },
  {
    "question": "Wi-Fi 6 corresponde a que padrão IEEE?",
    "options": [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.3af"
    ],
    "correct": 2,
    "explanation": "Wi-Fi 6 e 802.11ax.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual porta TCP usa o HTTPS?",
    "options": [
      "80",
      "443",
      "22",
      "25"
    ],
    "correct": 1,
    "explanation": "HTTPS usa TCP 443.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que e phishing?",
    "options": [
      "Ataque de forca bruta ao Wi-Fi",
      "Engano para obter credenciais ou dados, muitas vezes por email",
      "Inundacao ICMP",
      "Espelhamento de portas"
    ],
    "correct": 1,
    "explanation": "Phishing usa engenharia social para roubar dados.",
    "difficulty": "Fácil"
  },
  {
    "question": "Para que serve um firewall?",
    "options": [
      "Atribuir IPs",
      "Filtrar tráfego segundo regras de seguranca",
      "Traduzir DNS",
      "Alimentar Põe"
    ],
    "correct": 1,
    "explanation": "Firewalls permitem ou bloqueiam tráfego com base em política.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual cabo transmite dados por luz?",
    "options": [
      "UTP Cat6",
      "Fibra otica",
      "Coaxial",
      "USB"
    ],
    "correct": 1,
    "explanation": "Fibra otica usa pulsos de luz, imune a EMI.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que e um dominio de broadcast?",
    "options": [
      "Um túnel VPN",
      "O conjunto de dispositivos que recebem um frame de broadcast",
      "Uma ACL",
      "Um canal Wi-Fi"
    ],
    "correct": 1,
    "explanation": "Broadcasts L2 ficam dentro do dominio VLAN/switch.",
    "difficulty": "Médio"
  },
  {
    "question": "127.0.0.1 e usado para que?",
    "options": [
      "Gateway da Internet",
      "Testar a stack TCP/IP local (loopback)",
      "Servidor DHCP",
      "Endereço APIPA"
    ],
    "correct": 1,
    "explanation": "Loopback testa a pilha IP da própria maquina.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um endereço 169.254.x.x em Windows costuma indicar?",
    "options": [
      "IP público",
      "APIPA: falhou o DHCP",
      "Endereço de multicast",
      "IP de loopback"
    ],
    "correct": 1,
    "explanation": "APIPA (169.254/16) aparece quando o DHCP não responde.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual e a função do Põe?",
    "options": [
      "Cifrar o tráfego",
      "Alimentar dispositivos pelo cabo Ethernet",
      "Agregar links",
      "Traduzir VLANs"
    ],
    "correct": 1,
    "explanation": "Põe alimenta APs, cameras e telefones pelo UTP.",
    "difficulty": "Fácil"
  },
  {
    "question": "SSH e preferivel a Telnet porque?",
    "options": [
      "E mais rapido",
      "Cifra a sessão de gestao",
      "Usa UDP",
      "Não precisa de IP"
    ],
    "correct": 1,
    "explanation": "SSH (porta 22) cifra; Telnet envia texto em claro.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual camada OSI trata de segmentos TCP/UDP?",
    "options": [
      "Rede",
      "Transporte",
      "Sessão",
      "Enlace"
    ],
    "correct": 1,
    "explanation": "A camada 4 Transporte usa TCP e UDP.",
    "difficulty": "Médio"
  },
  {
    "question": "Um AP (access point) serve para que?",
    "options": [
      "Encaminhar entre WAN",
      "Ligar clientes Wi-Fi a LAN cablada",
      "Atribuir AS numbers",
      "Terminar MPLS"
    ],
    "correct": 1,
    "explanation": "O AP faz a ponte entre wireless e a LAN Ethernet.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual e um bom habito de palavra-passe?",
    "options": [
      "Reutilizar a mesma em todos os sites",
      "Única, longa e com MFA quando possivel",
      "Partilhar no chat da equipa",
      "Usar só 4 digitos"
    ],
    "correct": 1,
    "explanation": "Palavras-passe unicas e MFA reduzem o impacto de fugas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que faz um patch panel?",
    "options": [
      "Encaminha OSPF",
      "Organiza e termina cablagem num ponto central",
      "Cifra Wi-Fi",
      "Atribui VLANs automaticamente"
    ],
    "correct": 1,
    "explanation": "Patch panels concentram a cablagem estruturada.",
    "difficulty": "Fácil"
  },
  {
    "question": "IPv6 tem quantos bits?",
    "options": [
      "32",
      "64",
      "128",
      "256"
    ],
    "correct": 2,
    "explanation": "IPv6 usa endereços de 128 bits.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual comando Windows mostra o IP da maquina?",
    "options": [
      "ping",
      "ipconfig",
      "hostname -I",
      "show ip"
    ],
    "correct": 1,
    "explanation": "ipconfig ou ipconfig /all mostra endereços no Windows.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um hub Ethernet em relacao a um switch:",
    "options": [
      "E mais seguro",
      "Partilha um dominio de colisao; o switch separa por porta",
      "Encaminha IP",
      "Suporta OSPF"
    ],
    "correct": 1,
    "explanation": "Hubs são L1 e partilham colisoes; switches L2 isolam por porta.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual protocolo usa a porta UDP 53?",
    "options": [
      "HTTP",
      "DNS",
      "SMTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "DNS usa UDP/TCP 53.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual incidente de seguranca deves reportar?",
    "options": [
      "Atualizar o Windows",
      "Email a pedir a password do chefe",
      "Mudar o fundo do ambiente de trabalho",
      "Abrir o browser"
    ],
    "correct": 1,
    "explanation": "Pedidos de credenciais são phishing e devem ser reportados.",
    "difficulty": "Fácil"
  },
  {
    "question": "Cat5e/Cat6 descrevem o que?",
    "options": [
      "Normas de fibra",
      "Categorias de cabo de par trançado e largura de banda",
      "Tipos de conector de fibra",
      "Canais Wi-Fi"
    ],
    "correct": 1,
    "explanation": "Categorias UTP definem desempenho.",
    "difficulty": "Médio"
  },
  {
    "question": "Um endereço IPv4 privado RFC 1918 é:",
    "options": [
      "8.8.8.8",
      "192.168.1.10",
      "1.1.1.1",
      "255.255.255.255"
    ],
    "correct": 1,
    "explanation": "192.168.0.0/16 e bloco privado, com 10/8 e 172.16/12.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é o comprimento máximo recomendado de um cabo de par trançado de cobre (UTP) em Ethernet?",
    "options": [
      "10 metros",
      "100 metros",
      "500 metros",
      "2 quilômetros"
    ],
    "correct": 1,
    "explanation": "A norma Ethernet limita o canal de cobre a 100 m (90 m de horizontal + 10 m de patch cords) para manter o orçamento de atenuação e o tempo de ida e volta. Distâncias maiores exigem fibra ou um repetidor/switch intermediário.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a principal diferença prática entre as pinagens T568A e T568B?",
    "options": [
      "T568A é só para fibra",
      "Os pares laranja e verde trocam de posição nos pinos 1-2 e 3-6",
      "T568B não funciona em Gigabit",
      "Não há qualquer diferença elétrica"
    ],
    "correct": 1,
    "explanation": "Ambos os padrões usam os mesmos quatro pares; apenas os pares laranja e verde estão invertidos. Um cabo com T568A numa ponta e T568B na outra é crossover. Em instalações modernas o T568B é o mais comum nos EUA.",
    "difficulty": "Médio"
  },
  {
    "question": "Quando se deve preferir fibra monomodo em vez de multimodo?",
    "options": [
      "Sempre em LANs de escritório curtas",
      "Para longas distâncias (campus/WAN) com laser de comprimento de onda longo",
      "Apenas para PoE",
      "Nunca; multimodo chega a qualquer distância"
    ],
    "correct": 1,
    "explanation": "Fibra monomodo tem núcleo estreito (~9 µm) e usa laser; a dispersão é baixa, permitindo dezenas de km. Multimodo (50/62,5 µm) é mais barata em transceivers de curta distância (até algumas centenas de metros) mas não escala bem em longas ligações.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz a função Auto-MDIX numa porta Ethernet?",
    "options": [
      "Negocia a velocidade PoE",
      "Deteta e corrige internamente cabo straight-through vs crossover",
      "Desativa o STP",
      "Atribui um endereço IP"
    ],
    "correct": 1,
    "explanation": "Auto-MDIX cruza eletronicamente os pares de TX/RX quando necessário, pelo que um cabo straight-through funciona entre switch-switch, PC-PC ou switch-PC. Em equipamento moderno o Auto-MDIX está normalmente ativo com auto-negociação.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um PC sem DHCP mostra o endereço 169.254.23.10. O que isso indica?",
    "options": [
      "O gateway padrão foi configurado",
      "O host atribuiu um endereço APIPA porque não recebeu lease DHCP",
      "É um endereço público válido",
      "O cabo está em loopback"
    ],
    "correct": 1,
    "explanation": "169.254.0.0/16 é a gama APIPA (Automatic Private IP Addressing). O sistema operacional escolhe um endereço nessa gama quando o DHCP falha, permitindo comunicação local limitada mas sem encaminhamento para outras redes.",
    "difficulty": "Médio"
  },
  {
    "question": "Quantos endereços de host utilizáveis existem numa sub-rede IPv4 /26?",
    "options": [
      "64",
      "62",
      "30",
      "126"
    ],
    "correct": 1,
    "explanation": "Uma máscara /26 deixa 6 bits de host: 2^6 = 64 endereços no total. Reservam-se o endereço de rede e o de broadcast, restando 62 hosts utilizáveis.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual prefixo identifica um endereço IPv6 link-local?",
    "options": [
      "2000::/3",
      "FE80::/10",
      "FF00::/8",
      "::1/128"
    ],
    "correct": 1,
    "explanation": "Endereços link-local começam por FE80::/10 e são obrigatórios em cada interface IPv6. Servem para NDP e comunicação no mesmo enlace; os routers não os encaminham para outros links.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é o endereço de loopback IPv6?",
    "options": [
      "127.0.0.1",
      "::1",
      "FE80::1",
      "::"
    ],
    "correct": 1,
    "explanation": "::1/128 é o loopback IPv6, equivalente a 127.0.0.1 em IPv4. Pacotes para ::1 nunca saem da máquina e servem para testar a stack IPv6 local.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função principal do ICMP?",
    "options": [
      "Atribuir endereços IP",
      "Transportar mensagens de controlo e diagnóstico da camada de rede (ex.: echo, unreachable)",
      "Criptografar sessões web",
      "Negociar VLANs"
    ],
    "correct": 1,
    "explanation": "ICMP (e ICMPv6) transporta sinalização da camada 3: echo request/reply (ping), destination unreachable, time exceeded (usado pelo traceroute), redirect, etc. Não atribui endereços nem cifra dados de aplicação.",
    "difficulty": "Fácil"
  },
  {
    "question": "Como é que o traceroute descobre cada salto até ao destino?",
    "options": [
      "Consulta o DNS reverso de todos os routers",
      "Envia sondas com TTL crescente e lê as respostas ICMP Time Exceeded",
      "Usa ARP em cada hop da Internet",
      "Abre uma sessão TCP porta 80 em cada router"
    ],
    "correct": 1,
    "explanation": "Cada sonda parte com TTL 1, 2, 3… Quando o TTL chega a zero, o router descarta o pacote e devolve ICMP Time Exceeded. O endereço de origem dessa mensagem identifica o salto. No destino chega uma resposta (porta unreachable ou echo reply).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a porta padrão do DNS?",
    "options": [
      "22",
      "53",
      "67",
      "80"
    ],
    "correct": 1,
    "explanation": "DNS usa a porta 53/UDP para consultas típicas e 53/TCP para transferências de zona e respostas grandes. Confundi-la com 67 (DHCP servidor), 22 (SSH) ou 80 (HTTP) é um erro comum de troubleshooting.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que define um domínio de colisão em Ethernet?",
    "options": [
      "Todos os dispositivos que partilham o mesmo endereço IP",
      "O conjunto de portas/meios onde uma transmissão pode colidir com outra",
      "Uma VLAN inteira",
      "Apenas o segmento Wi-Fi"
    ],
    "correct": 1,
    "explanation": "Num hub, todas as portas formam um único domínio de colisão. Um switch cria um domínio de colisão por porta (full-duplex elimina colisões). Isto é distinto do domínio de broadcast, que coincide tipicamente com a VLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é CSMA/CD?",
    "options": [
      "Um protocolo de routing",
      "Método de acesso ao meio em Ethernet half-duplex: escuta, transmite e deteta colisões",
      "Criptografia wireless",
      "Um tipo de fibra"
    ],
    "correct": 1,
    "explanation": "Carrier Sense Multiple Access with Collision Detection era usado em Ethernet partilhada (hubs, half-duplex). Hoje as redes switched full-duplex não precisam de CSMA/CD porque cada lado transmite em pares/canais distintos.",
    "difficulty": "Médio"
  },
  {
    "question": "Quais são as três gamas de endereços IPv4 privados definidas no RFC 1918?",
    "options": [
      "1.0.0.0/8, 2.0.0.0/8 e 3.0.0.0/8",
      "10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16",
      "127.0.0.0/8, 169.254.0.0/16 e 224.0.0.0/4",
      "8.8.8.0/24, 1.1.1.0/24 e 9.9.9.0/24"
    ],
    "correct": 1,
    "explanation": "RFC 1918 reserva 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31) e 192.168.0.0/16 para uso interno. Estes prefixos não são encaminhados na Internet pública; a saída usa NAT ou um proxy.",
    "difficulty": "Médio"
  },
  {
    "question": "O que significa CIDR?",
    "options": [
      "Cisco Internal Device Register",
      "Classless Inter-Domain Routing — prefixos com máscara variável em vez de classes A/B/C rígidas",
      "Um tipo de cabo coaxial",
      "Protocolo de autenticação wireless"
    ],
    "correct": 1,
    "explanation": "CIDR abandonou as classes fixas (/8, /16, /24) e permite prefixos como /22 ou /13. Isso torna o endereçamento e o sumarização na Internet (e nas LANs) muito mais eficientes.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve o endereço IPv4 127.0.0.1?",
    "options": [
      "Gateway padrão da Internet",
      "Loopback do próprio host, para testar a stack TCP/IP local",
      "Broadcast da LAN",
      "Primeiro endereço APIPA"
    ],
    "correct": 1,
    "explanation": "Toda a gama 127.0.0.0/8 é loopback; 127.0.0.1 é o mais usado. Um ping a 127.0.0.1 confirma que a stack IP da máquina está operacional, independentemente do cabo ou do NIC.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual afirmação descreve corretamente unicast, broadcast e multicast?",
    "options": [
      "Unicast vai para todos; broadcast só para um",
      "Unicast: um destino; broadcast: todos no domínio; multicast: um grupo inscrito",
      "Multicast substitui o ARP",
      "Broadcast só existe em IPv6"
    ],
    "correct": 1,
    "explanation": "Unicast entrega a um único endereço. Broadcast (255.255.255.255 ou o broadcast da sub-rede) chega a todos os nós do domínio de broadcast. Multicast (224.0.0.0/4 ou FF00::/8) entrega apenas aos recetores que aderiram ao grupo.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a vantagem do cabo STP (Shielded Twisted Pair) face ao UTP?",
    "options": [
      "Suporta sempre 100 km",
      "A malha/folha metálica reduz interferência eletromagnética (EMI)",
      "É obrigatório para Fast Ethernet",
      "Não precisa de conector RJ-45"
    ],
    "correct": 1,
    "explanation": "STP adiciona blindagem que rejeita EMI em ambientes industriais, junto a motores ou elevadores. Exige ligação correta à terra; caso contrário a blindagem pode piorar o ruído. UTP basta na maioria dos escritórios.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a potência aproximada disponível em PoE+ (IEEE 802.3at) na porta PD?",
    "options": [
      "cerca de 4 W",
      "cerca de 15 W (802.3af) vs cerca de 25–30 W em 802.3at",
      "100 W apenas em Fast Ethernet",
      "PoE+ não fornece energia"
    ],
    "correct": 1,
    "explanation": "802.3af (PoE) entrega até 15,4 W no PSE (~12,95 W no PD). 802.3at (PoE+) sobe para 30 W no PSE (~25,5 W no PD), o bastante para APs e câmaras PTZ. 802.3bt (PoE++) vai ainda mais alto.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando Cisco dá um resumo rápido do estado IP de todas as interfaces?",
    "options": [
      "show vlan brief",
      "show ip interface brief",
      "show mac address-table",
      "show spanning-tree"
    ],
    "correct": 1,
    "explanation": "show ip interface brief lista cada interface com IP, estado de linha (up/down) e protocolo (up/down). É o primeiro comando de troubleshooting de Camada 3 numa caixa Cisco.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um link Ethernet está up mas com muitos CRC errors e desempenho baixo. Qual causa é mais provável?",
    "options": [
      "ACL a bloquear ICMP",
      "Mismatch de duplex (um lado half, outro full) ou cabo danificado",
      "DNS em falta",
      "VLAN nativa diferente no PC"
    ],
    "correct": 1,
    "explanation": "Duplex mismatch gera colisões tardias, CRC e throughput péssimo porque um lado transmite quando o outro não espera. Cabo mau, SFP sujo ou EMI também produzem CRC. DNS ou ACLs não incrementam contadores CRC.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual camada do modelo OSI trata de bits, voltagens, conectores e meios físicos?",
    "options": [
      "Camada 3 — Rede",
      "Camada 1 — Física",
      "Camada 4 — Transporte",
      "Camada 7 — Aplicação"
    ],
    "correct": 1,
    "explanation": "A Camada Física define o meio (cobre, fibra, rádio), conectores, sinalização elétrica/ótica e bit timing. Problemas de cabo, SFP ou potência PoE são quase sempre Camada 1.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a sequência correta do three-way handshake TCP?",
    "options": [
      "ACK, SYN, FIN",
      "SYN, SYN-ACK, ACK",
      "FIN, ACK, SYN",
      "RST, SYN, ACK"
    ],
    "correct": 1,
    "explanation": "O cliente envia SYN, o servidor responde SYN-ACK e o cliente fecha o handshake com ACK. Só depois começa a transferência de dados. FIN inicia o encerramento; RST aborta a sessão.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque se prefere 'enable secret' a 'enable password' no IOS?",
    "options": [
      "enable password usa AES-256 de raiz",
      "enable secret guarda um hash (MD5/tipo 5 ou mais forte); enable password fica em texto fraco ou tipo 7 reversível",
      "São sinónimos",
      "enable secret só funciona com Telnet"
    ],
    "correct": 1,
    "explanation": "enable password é legado e pode aparecer em claro ou com cifração tipo 7 (reversível). enable secret armazena um hash unidirecional. Em IOS recente usa-se ainda type 8/9 (scrypt/PBKDF2) via 'enable algorithm-type'.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a VLAN predefinida nas portas de acesso de um switch Cisco não configurado?",
    "options": [
      "VLAN 100",
      "VLAN 1",
      "VLAN 999",
      "VLAN 4094"
    ],
    "correct": 1,
    "explanation": "Por omissão todas as portas pertencem à VLAN 1, que também é a native VLAN de trunks 802.1Q. Boas práticas movem dados e gestão para fora da VLAN 1 para reduzir risco de hopping e tráfego de controlo misturado.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que caracteriza uma porta de acesso (access port) num switch?",
    "options": [
      "Transporta todas as VLANs com tags 802.1Q",
      "Pertence a uma única VLAN e envia tráfego untagged para o host",
      "Só funciona com routers",
      "Desativa o MAC learning"
    ],
    "correct": 1,
    "explanation": "Uma access port mapeia para uma VLAN (switchport access vlan X). O frame para o PC não leva tag 802.1Q. Trunks, pelo contrário, marcam as VLANs para o vizinho (exceto a native).",
    "difficulty": "Médio"
  },
  {
    "question": "O que é o LLDP?",
    "options": [
      "Protocolo de routing Cisco",
      "Protocolo aberto (IEEE 802.1AB) para anunciar identidade e capacidades a vizinhos",
      "Um tipo de ACL",
      "Cifra de wireless"
    ],
    "correct": 1,
    "explanation": "LLDP é o equivalente aberto ao CDP. Permite descobrir fabricante, hostname, port ID e capacidades (incluindo LLDP-MED para telefones). Útil em ambientes multi-vendor onde o CDP não existe.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é o MTU Ethernet clássico (payload) em bytes?",
    "options": [
      "576",
      "1500",
      "9000",
      "64"
    ],
    "correct": 1,
    "explanation": "O MTU padrão de Ethernet é 1500 bytes de payload IP. Frames menores que 64 bytes são runts; frames jumbo (~9000) exigem suporte ponta-a-ponta. 576 é o IPv4 minimum reassembly MTU, não o Ethernet.",
    "difficulty": "Fácil"
  },
  {
    "question": "Porque é que cabos de cobre mal afastados de motores elétricos falham mais vezes?",
    "options": [
      "O cobre derrete com 5 V",
      "Interferência eletromagnética (EMI) induz ruído que aumenta CRC e retransmissões",
      "Motores consomem todos os endereços MAC",
      "STP deixa de funcionar"
    ],
    "correct": 1,
    "explanation": "Campos eletromagnéticos induzem tensão nos pares. Isso corrompe bits, sobe CRC/input errors e pode derrubar o link. A mitigação é afastamento, cabo blindado, fibra (imune a EMI) e boa terra.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quantos bits tem um endereço MAC IEEE e como se escreve habitualmente?",
    "options": [
      "32 bits em decimal pontuado",
      "48 bits em hexadecimal, frequentemente 6 octetos (ex.: 00:1A:2B:3C:4D:5E)",
      "128 bits como IPv6",
      "16 bits em binário"
    ],
    "correct": 1,
    "explanation": "O MAC clássico tem 48 bits: 24 bits de OUI (fabricante) + 24 bits de série. Representa-se em hex. Endereços MAC-64 existem em alguns contextos IEEE, mas Ethernet usa 48 bits.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é o tamanho de um endereço IPv4 e de um endereço IPv6?",
    "options": [
      "IPv4 16 bits, IPv6 32 bits",
      "IPv4 32 bits, IPv6 128 bits",
      "Ambos 64 bits",
      "IPv4 128 bits, IPv6 32 bits"
    ],
    "correct": 1,
    "explanation": "IPv4 usa 32 bits (notação decimal pontuada). IPv6 usa 128 bits (oito grupos hexadecimais). O espaço IPv6 é o que permite SLAAC, múltiplos endereços por interface e o fim prático do esgotamento de IPv4 público.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a máscara de sub-rede predefinida de uma rede Classe A?",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "correct": 1,
    "explanation": "Classe A (1.0.0.0–126.0.0.0) usa /8, ou 255.0.0.0. Classe B é /16 e Classe C /24. Em redes modernas pensa-se em CIDR, mas as máscaras de classe ainda aparecem em exames e em equipamento legado.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual porta TCP usa o SMTP para envio clássico de correio entre servidores?",
    "options": [
      "110",
      "25",
      "143",
      "443"
    ],
    "correct": 1,
    "explanation": "SMTP usa a porta 25 entre MTAs. Submissão autenticada de clientes costuma ser 587 (submission) ou 465 (SMTPS). 110 é POP3, 143 é IMAP e 443 é HTTPS.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a ordem correta do processo DORA do DHCP?",
    "options": [
      "Request, Offer, Discover, Ack",
      "Discover, Offer, Request, Ack",
      "Ack, Discover, Offer, Request",
      "Offer, Ack, Discover, Request"
    ],
    "correct": 1,
    "explanation": "O cliente faz broadcast DHCPDISCOVER; o servidor responde DHCPOFFER; o cliente escolhe com DHCPREQUEST; o servidor confirma com DHCPACK e o lease fica ativo. Sem este diálogo o host cai em APIPA.",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que Wi-Fi usa CSMA/CA em vez de CSMA/CD?",
    "options": [
      "Porque o rádio é full-duplex por natureza",
      "Estações não conseguem transmitir e detetar colisão ao mesmo tempo no mesmo canal; por isso evitam colisões (NAV, RTS/CTS, backoff)",
      "CSMA/CD é exclusivo de IPv6",
      "Apenas porque a IEEE o proibiu sem razão"
    ],
    "correct": 1,
    "explanation": "Num meio half-duplex partilhado, o recetor do próprio emissor fica saturado — não dá para 'ouvir a colisão' como no cobre partilhado. 802.11 usa collision avoidance: carrier sense, intervalos IFS, backoff aleatório e opcionalmente RTS/CTS.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é uma diferença típica entre 2,4 GHz e 5 GHz em Wi-Fi?",
    "options": [
      "5 GHz atravessa paredes sempre melhor",
      "2,4 GHz propaga-se mais longe e atravessa obstáculos melhor, mas tem menos canais não sobrepostos e mais interferência",
      "2,4 GHz só existe em 802.11ac",
      "Não há diferença de alcance"
    ],
    "correct": 1,
    "explanation": "Frequências mais baixas penetram melhor e chegam mais longe; 2,4 GHz só tem três canais não sobrepostos (1, 6, 11) e sofre de Bluetooth/micro-ondas. 5 GHz (e 6 GHz) oferece mais espectro e débito, com menor alcance.",
    "difficulty": "Médio"
  },
  {
    "question": "O padrão 802.11ax é comercialmente conhecido como?",
    "options": [
      "Wi-Fi 4",
      "Wi-Fi 6",
      "Wi-Fi 5",
      "Bluetooth 5"
    ],
    "correct": 1,
    "explanation": "802.11ax = Wi-Fi 6 (e 6E na banda de 6 GHz). Introduz OFDMA, TWT e 1024-QAM para melhor eficiência em ambientes densos. Wi-Fi 5 é 802.11ac; Wi-Fi 4 é 802.11n.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa avaria de conectividade, qual deve ser o primeiro ponto a verificar segundo a abordagem por camadas?",
    "options": [
      "Configuração BGP",
      "Camada 1: cabo, LEDs, SFP, energia e estado físico da interface",
      "Políticas de QoS",
      "Certificados 802.1X"
    ],
    "correct": 1,
    "explanation": "Sem sinal físico (LED apagado, cabo partido, SFP ausente, interface administratively down) nada nas camadas superiores funciona. Confirmar Camada 1 evita horas a depurar OSPF ou DNS em vão.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em que cenário a fibra ótica é claramente preferível ao cobre UTP?",
    "options": [
      "Patch de 1 metro entre PC e switch",
      "Ligação longa, entre edifícios, ou ambiente com forte EMI, onde o cobre excede 100 m ou capta ruído",
      "Alimentação PoE de um telefone",
      "Console de um router"
    ],
    "correct": 1,
    "explanation": "Fibra ignora EMI, não conduz eletricidade (evita loops de terra entre edifícios) e alcança km. Cobre continua certo para PoE e runs curtos até 100 m. A consola usa cabo série/USB, não Ethernet.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual comando mostra a configuração atualmente ativa na RAM de um dispositivo Cisco?",
    "options": [
      "show startup-config",
      "show running-config",
      "show flash:",
      "show version apenas"
    ],
    "correct": 1,
    "explanation": "running-config é a configuração em RAM, a que o dispositivo está a usar. startup-config está em NVRAM e só é lida no boot. Alterações em running-config perdem-se no reload se não forem gravadas com copy run start.",
    "difficulty": "Fácil"
  },
  {
    "question": "Como se distingue o modo User EXEC do Privilege EXEC no IOS?",
    "options": [
      "User usa '#', Privilege usa '>'",
      "User EXEC mostra '>' e comandos limitados; Privilege EXEC mostra '#' após 'enable' e permite show/debug avançados e configuração",
      "Não existe diferença",
      "Privilege EXEC só existe em firewalls"
    ],
    "correct": 1,
    "explanation": "O prompt '>' é User EXEC (pings, alguns shows). O comando enable (com secret) sobe para '#' Privilege EXEC, de onde se entra em configuration terminal. Separar estes níveis é a base do controlo de acesso CLI.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a porta padrão do HTTPS e o que o distingue do HTTP?",
    "options": [
      "80, e usa Telnet",
      "443, e cifra a sessão com TLS; HTTP na 80 vai em claro",
      "22, e usa SSH",
      "53, e usa DNSSEC"
    ],
    "correct": 1,
    "explanation": "HTTPS encapsula HTTP sobre TLS na porta 443, protegendo confidencialidade e integridade. HTTP na 80 não cifra — credenciais e cookies viajam visíveis. Em gestão de equipamento deve preferir-se HTTPS/SSH a HTTP/Telnet.",
    "difficulty": "Fácil"
  },
  {
    "question": "Numa sub-rede 192.168.10.0/24, qual é o endereço de broadcast?",
    "options": [
      "192.168.10.0",
      "192.168.10.255",
      "192.168.10.1",
      "192.168.255.255"
    ],
    "correct": 1,
    "explanation": "Com /24 os 8 bits de host a 1 dão .255. O .0 é o endereço de rede; .1–.254 são hosts. Enviar para 192.168.10.255 entrega o frame a todos os nós desse domínio de broadcast.",
    "difficulty": "Médio"
  },
  {
    "question": "O cabo Cat6, relativamente ao Cat5e, destina-se sobretudo a quê?",
    "options": [
      "Apenas consola série",
      "Melhor imunidade a diafonia e suporte a 10GBASE-T em distâncias curtas (tipicamente até 55 m)",
      "Substituir toda a fibra metropolitana",
      "Alimentar 100 W sem PoE"
    ],
    "correct": 1,
    "explanation": "Cat6 tem especificações mais apertadas de crosstalk até 250 MHz e permite 10GBASE-T em canais curtos. Cat5e chega bem a 1 Gb/s em 100 m. Cat6A estende 10 Gb/s aos 100 m.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual conetor ótico é o mais comum em transceivers SFP/SFP+ modernos?",
    "options": [
      "BNC coaxial",
      "LC (Lucent Connector), pequeno e com trava",
      "DB-9 série",
      "RJ-11 telefónico"
    ],
    "correct": 1,
    "explanation": "SFP usa quase sempre duplex LC. SC é mais antigo e maior (ainda visto em GBIC/patch panels). ST é baioneta legado. BNC é coaxial; DB-9 é consola série; RJ-11 é telefone.",
    "difficulty": "Médio"
  },
  {
    "question": "Um utilizador faz ping ao IP do servidor com sucesso mas o browser não abre o site pelo nome. Qual é a causa mais provável?",
    "options": [
      "O cabo está partido",
      "Falha de DNS (servidor DNS em falta, errado ou filtrado)",
      "O switch não tem PoE",
      "STP bloqueou o ICMP"
    ],
    "correct": 1,
    "explanation": "Ping por IP prova Camadas 1–3 até ao servidor. Resolver o nome exige DNS (porta 53). Verificar ipconfig/ifconfig, o servidor DNS configurado e um nslookup/dig isola o problema em segundos.",
    "difficulty": "Médio"
  }
];
