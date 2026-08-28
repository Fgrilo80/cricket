window.CRICKET_DB = {
  "ccst": {
    "pt": [
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
      }
    ],
    "en": [
      {
        "question": "What is the primary function of a switch in a local network?",
        "options": [
          "Connect devices in different networks",
          "Connect devices in the same local network using MAC addresses",
          "Route packets between networks",
          "Dynamically provide IP addresses"
        ],
        "correct": 1,
        "explanation": "Switches operate at Layer 2 (Data Link) of the OSI model and use MAC addresses to forward frames within the same LAN.",
        "difficulty": "Easy"
      },
      {
        "question": "What does the acronym OSI stand for?",
        "options": [
          "Open Systems Interconnection",
          "Online System Integration",
          "Operating System Interface",
          "Open Source Internet"
        ],
        "correct": 0,
        "explanation": "The OSI (Open Systems Interconnection) model is a conceptual 7-layer model used to describe how network devices communicate.",
        "difficulty": "Easy"
      },
      {
        "question": "Which layer of the OSI model is responsible for logical addressing and routing?",
        "options": [
          "Transport Layer",
          "Network Layer",
          "Data Link Layer",
          "Physical Layer"
        ],
        "correct": 1,
        "explanation": "The Network Layer (Layer 3) is responsible for logical addressing (IP) and routing packets between different networks.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between a hub and a switch?",
        "options": [
          "Hub is faster than switch",
          "Switch uses MAC addresses to forward frames, hub sends to all ports",
          "Hub is more secure than switch",
          "There is no difference"
        ],
        "correct": 1,
        "explanation": "Hubs are Layer 1 devices that replicate the signal to all ports. Switches are intelligent and use a MAC table.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a private IP address?",
        "options": [
          "Address used only on the public internet",
          "Non-routable address on the internet used in local networks",
          "Address automatically assigned by DHCP",
          "Broadcast address"
        ],
        "correct": 1,
        "explanation": "Private IP addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routable on the internet and are used in internal networks.",
        "difficulty": "Medium"
      },
      {
        "question": "Which Cisco IOS command shows the learned MAC address table?",
        "options": [
          "show ip route",
          "show mac address-table",
          "show interfaces",
          "show arp"
        ],
        "correct": 1,
        "explanation": "The 'show mac address-table' command displays the MAC address table learned by the switch.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a VLAN?",
        "options": [
          "A physically separate network",
          "A logical network created on a switch to segment traffic",
          "A routing protocol",
          "A type of cable"
        ],
        "correct": 1,
        "explanation": "VLANs (Virtual LANs) allow logical segmentation of a physical network into multiple isolated networks on the same switch.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the standard speed of a Gigabit Ethernet port?",
        "options": [
          "10 Mbps",
          "100 Mbps",
          "1000 Mbps",
          "10 Gbps"
        ],
        "correct": 2,
        "explanation": "Gigabit Ethernet (1000BASE-T) operates at 1000 Mbps (1 Gbps).",
        "difficulty": "Easy"
      },
      {
        "question": "What does the 'ping' command do?",
        "options": [
          "Sends TCP packets",
          "Tests connectivity using ICMP Echo Request/Reply",
          "Configures static routes",
          "Shows the ARP table"
        ],
        "correct": 1,
        "explanation": "The ping command uses the ICMP protocol to test connectivity between two devices.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the default subnet mask for a Class C network?",
        "options": [
          "255.0.0.0",
          "255.255.0.0",
          "255.255.255.0",
          "255.255.255.255"
        ],
        "correct": 2,
        "explanation": "Class C networks use the default mask 255.255.255.0 (/24).",
        "difficulty": "Easy"
      },
      {
        "question": "What is PoE (Power over Ethernet)?",
        "options": [
          "High-speed data transmission",
          "Supplying electrical power through the Ethernet cable",
          "Security protocol",
          "Type of fiber optic"
        ],
        "correct": 1,
        "explanation": "PoE allows devices like IP cameras and VoIP phones to receive power through the same Ethernet cable used for data.",
        "difficulty": "Medium"
      },
      {
        "question": "Which protocol is used for automatic IP address assignment?",
        "options": [
          "DNS",
          "DHCP",
          "ARP",
          "ICMP"
        ],
        "correct": 1,
        "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configurations.",
        "difficulty": "Easy"
      },
      {
        "question": "What does full duplex mean?",
        "options": [
          "Communication in one direction only",
          "Simultaneous communication in both directions",
          "Half-duplex communication",
          "No communication"
        ],
        "correct": 1,
        "explanation": "Full-duplex allows devices to transmit and receive data simultaneously, eliminating collisions.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the ARP protocol?",
        "options": [
          "Resolve name to IP",
          "Resolve IP to MAC address",
          "Route packets",
          "Encrypt data"
        ],
        "correct": 1,
        "explanation": "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on the local network.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a default gateway?",
        "options": [
          "The first device on the network",
          "The router that forwards traffic outside the local network",
          "A DNS server",
          "A manageable switch"
        ],
        "correct": 1,
        "explanation": "The default gateway is the device (usually a router) that forwards packets destined for external networks.",
        "difficulty": "Easy"
      },
      {
        "question": "Which command shows active interfaces on a Cisco router?",
        "options": [
          "show running-config",
          "show ip interface brief",
          "show version",
          "show clock"
        ],
        "correct": 1,
        "explanation": "The 'show ip interface brief' command displays a quick summary of the status of all interfaces.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a collision in an Ethernet network?",
        "options": [
          "When two devices send data at the same time in half-duplex",
          "When there is a cable failure",
          "When the switch is overloaded",
          "When there is a loop in the network"
        ],
        "correct": 0,
        "explanation": "Collisions occur in half-duplex networks when two devices transmit simultaneously.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the primary function of a firewall?",
        "options": [
          "Increase network speed",
          "Control inbound and outbound traffic based on security rules",
          "Assign IP addresses",
          "Connect Wi-Fi networks"
        ],
        "correct": 1,
        "explanation": "Firewalls inspect and control network traffic based on predefined security rules.",
        "difficulty": "Easy"
      },
      {
        "question": "What is SSID in a wireless network?",
        "options": [
          "Network password",
          "Wireless network identifier name",
          "Frequency channel",
          "Encryption type"
        ],
        "correct": 1,
        "explanation": "SSID (Service Set Identifier) is the name of the wireless network that clients see when scanning for available networks.",
        "difficulty": "Easy"
      },
      {
        "question": "Which protocol is used for secure remote management of Cisco devices?",
        "options": [
          "Telnet",
          "SSH",
          "HTTP",
          "FTP"
        ],
        "correct": 1,
        "explanation": "SSH (Secure Shell) provides encrypted and secure remote access, unlike insecure Telnet.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a 'crossover cable' used for?",
        "options": [
          "Connecting two switches directly",
          "Connecting a computer to a switch",
          "Fiber optic cable",
          "Power cable"
        ],
        "correct": 0,
        "explanation": "Crossover cable is used to connect similar devices (switch to switch or PC to PC) directly.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the default port for the HTTP protocol?",
        "options": [
          "21",
          "22",
          "80",
          "443"
        ],
        "correct": 2,
        "explanation": "HTTP uses port 80 by default. HTTPS uses port 443.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a loopback interface?",
        "options": [
          "Physical interface for testing",
          "Virtual interface that remains always active",
          "WAN connection interface",
          "Management interface"
        ],
        "correct": 1,
        "explanation": "Loopback is a virtual interface that remains always up/up and is used for testing and management.",
        "difficulty": "Medium"
      },
      {
        "question": "What does the command 'copy running-config startup-config' do?",
        "options": [
          "Erase the configuration",
          "Save the current configuration to NVRAM",
          "Restart the device",
          "Show the configuration"
        ],
        "correct": 1,
        "explanation": "This command saves the running configuration (RAM) to the startup configuration (NVRAM).",
        "difficulty": "Easy"
      },
      {
        "question": "What is NAT (Network Address Translation)?",
        "options": [
          "Domain name translation",
          "Translation of private IP addresses to public",
          "Routing protocol",
          "Type of cable"
        ],
        "correct": 1,
        "explanation": "NAT allows multiple devices on a private network to share a single public IP address.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between TCP and UDP?",
        "options": [
          "TCP is faster than UDP",
          "TCP is connection-oriented and reliable, UDP is connectionless and faster",
          "There is no difference",
          "UDP is only used for email"
        ],
        "correct": 1,
        "explanation": "TCP provides reliable delivery with flow control and retransmission. UDP is faster but does not guarantee delivery.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a trunk port on a switch?",
        "options": [
          "Port that belongs to a single VLAN",
          "Port that carries traffic from multiple VLANs",
          "Management port",
          "PoE port"
        ],
        "correct": 1,
        "explanation": "Trunk ports carry traffic from multiple VLANs between switches using 802.1Q tags.",
        "difficulty": "Medium"
      },
      {
        "question": "Which command displays the routing table on a Cisco router?",
        "options": [
          "show ip route",
          "show interfaces",
          "show arp",
          "show clock"
        ],
        "correct": 0,
        "explanation": "The 'show ip route' command displays the routing table with all known routes.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a MAC address?",
        "options": [
          "Dynamic IP address",
          "Unique 48-bit physical address burned into network hardware",
          "Logical network address",
          "Network password"
        ],
        "correct": 1,
        "explanation": "A MAC address is a unique 48-bit physical identifier assigned by the manufacturer to the network interface.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the function of the STP (Spanning Tree Protocol)?",
        "options": [
          "Increase network speed",
          "Prevent loops in networks with redundant switches",
          "Assign IP addresses",
          "Encrypt data"
        ],
        "correct": 1,
        "explanation": "STP prevents loops in networks with redundant paths by blocking redundant ports.",
        "difficulty": "Medium"
      },
      {
        "question": "What does 'up/up' mean in the status of a Cisco interface?",
        "options": [
          "Administratively down interface",
          "Interface with physical problems",
          "Active and operational interface at Layers 1 and 2",
          "Interface under maintenance"
        ],
        "correct": 2,
        "explanation": "'up/up' means the interface is physically active (Layer 1) and logically operational (Layer 2).",
        "difficulty": "Easy"
      },
      {
        "question": "What is the default port for the SSH protocol?",
        "options": [
          "21",
          "22",
          "23",
          "80"
        ],
        "correct": 1,
        "explanation": "SSH uses port 22 by default.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a broadcast domain?",
        "options": [
          "Group of devices that can communicate directly without a router",
          "Group of devices that receive broadcasts",
          "Wireless network",
          "Type of cable"
        ],
        "correct": 1,
        "explanation": "A broadcast domain is the set of devices that receive broadcast messages sent by any of them.",
        "difficulty": "Medium"
      },
      {
        "question": "Which command is used to configure an interface with an IP address?",
        "options": [
          "ip address 192.168.1.1 255.255.255.0",
          "interface ip 192.168.1.1",
          "set ip 192.168.1.1",
          "config ip 192.168.1.1"
        ],
        "correct": 0,
        "explanation": "The correct command is 'ip address [IP] [mask]' in interface configuration mode.",
        "difficulty": "Medium"
      },
      {
        "question": "What is WPA3 in wireless networks?",
        "options": [
          "Routing protocol",
          "Latest and most secure wireless security standard",
          "Type of antenna",
          "Frequency channel"
        ],
        "correct": 1,
        "explanation": "WPA3 is the latest wireless security standard, offering better protection against attacks.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the 'show version' command?",
        "options": [
          "Show IOS version and hardware information",
          "Show current configuration",
          "Restart the device",
          "Erase NVRAM"
        ],
        "correct": 0,
        "explanation": "The 'show version' command displays the IOS software version, hardware model, and uptime.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a patch panel?",
        "options": [
          "Device for physical cable connections in a rack",
          "Type of switch",
          "Wireless router",
          "DHCP server"
        ],
        "correct": 0,
        "explanation": "A patch panel is a passive device that organizes and facilitates cable connections in a network rack.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the difference between half-duplex and full-duplex?",
        "options": [
          "Half-duplex allows simultaneous communication",
          "Full-duplex allows communication in one direction only",
          "Half-duplex allows communication in one direction at a time",
          "There is no difference"
        ],
        "correct": 2,
        "explanation": "Half-duplex allows communication in only one direction at a time (with collisions). Full-duplex allows both directions simultaneously.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a console cable?",
        "options": [
          "Normal Ethernet cable",
          "Serial cable for command line (CLI) access on Cisco devices",
          "Power cable",
          "Crossover cable"
        ],
        "correct": 1,
        "explanation": "Console cable (usually RJ45 to DB9) is used for direct serial connection to the device for initial CLI configuration.",
        "difficulty": "Easy"
      },
      {
        "question": "Which protocol is used for time synchronization in networks?",
        "options": [
          "DNS",
          "NTP",
          "DHCP",
          "ARP"
        ],
        "correct": 1,
        "explanation": "NTP (Network Time Protocol) is used to synchronize device clocks on a network with high precision.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'err-disabled' on a Cisco interface?",
        "options": [
          "Normal interface",
          "Interface disabled due to error (e.g. loop, security violation)",
          "Interface under maintenance",
          "PoE interface"
        ],
        "correct": 1,
        "explanation": "Err-disabled is a protective state where the interface is automatically disabled due to errors like loops or port-security violations.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the primary function of a wireless Access Point?",
        "options": [
          "Packet routing",
          "Connect wireless devices to the wired network",
          "Assign IP addresses",
          "Filter traffic"
        ],
        "correct": 1,
        "explanation": "Access Points (APs) allow wireless devices to connect to the wired network, acting as a bridge.",
        "difficulty": "Easy"
      },
      {
        "question": "What is CDP (Cisco Discovery Protocol)?",
        "options": [
          "Routing protocol",
          "Cisco proprietary protocol to discover neighboring devices",
          "Security protocol",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "CDP allows Cisco devices to discover information about directly connected neighboring devices.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the /24 subnet mask in decimal notation?",
        "options": [
          "255.255.255.0",
          "255.255.0.0",
          "255.0.0.0",
          "255.255.255.255"
        ],
        "correct": 0,
        "explanation": "/24 corresponds to the mask 255.255.255.0.",
        "difficulty": "Easy"
      },
      {
        "question": "What happens when you use the 'no shutdown' command on an interface?",
        "options": [
          "Disables the interface",
          "Enables the interface (puts it in up state)",
          "Restarts the interface",
          "Erases the configuration"
        ],
        "correct": 1,
        "explanation": "The 'no shutdown' command enables an interface that was administratively down.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the function of the 'reload' command?",
        "options": [
          "Save configuration",
          "Restart the device",
          "Erase configuration",
          "Show logs"
        ],
        "correct": 1,
        "explanation": "The 'reload' command restarts the Cisco device.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a 'management VLAN'?",
        "options": [
          "VLAN for user data traffic",
          "VLAN dedicated to switch management",
          "VLAN for voice",
          "VLAN for video"
        ],
        "correct": 1,
        "explanation": "Management VLAN is used for management traffic (SSH, SNMP, etc.) and should be isolated for security.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the main advantage of using manageable switches?",
        "options": [
          "They are cheaper",
          "They allow configuration, VLANs, QoS and monitoring",
          "They are faster than unmanaged",
          "They don't need power"
        ],
        "correct": 1,
        "explanation": "Manageable switches offer advanced features like VLANs, QoS, SNMP, port-security and CLI.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'port-security' on Cisco switches?",
        "options": [
          "Feature to limit the number of MAC addresses per port",
          "Routing protocol",
          "Type of cable",
          "Encryption method"
        ],
        "correct": 0,
        "explanation": "Port-security allows restricting access to a port based on authorized MAC addresses.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the 'show cdp neighbors' command?",
        "options": [
          "Show neighbors discovered via CDP",
          "Show routing table",
          "Show VLAN configuration",
          "Show system logs"
        ],
        "correct": 0,
        "explanation": "The 'show cdp neighbors' command displays neighboring Cisco devices discovered by CDP.",
        "difficulty": "Medium"
      },
      {
        "question": "What is an 'SFP' in Cisco equipment?",
        "options": [
          "Type of processor",
          "Hot-swappable fiber optic or copper transceiver module",
          "Security protocol",
          "Type of memory"
        ],
        "correct": 1,
        "explanation": "SFP (Small Form-factor Pluggable) is a compact hot-swappable module for fiber or copper ports.",
        "difficulty": "Medium"
      },
      {
        "question": "What does the command 'show interfaces status' do?",
        "options": [
          "Show status of all interfaces",
          "Show VLAN configuration",
          "Restart the switch",
          "Clear logs"
        ],
        "correct": 0,
        "explanation": "The 'show interfaces status' command displays the operational status of all switch ports.",
        "difficulty": "Medium"
      },
      {
        "question": "Which Ethernet cable uses an RJ-45 connector?",
        "options": [
          "RG-59 coaxial",
          "UTP/STP twisted pair",
          "Multimode fiber",
          "V.35 serial"
        ],
        "correct": 1,
        "explanation": "Copper Ethernet uses twisted pair with RJ-45.",
        "difficulty": "Easy"
      },
      {
        "question": "What does ping do?",
        "options": [
          "Shows the MAC table",
          "Tests ICMP reachability to a destination",
          "Opens Telnet",
          "Lists OSPF routes"
        ],
        "correct": 1,
        "explanation": "ping sends ICMP Echo Requests and waits for replies.",
        "difficulty": "Easy"
      },
      {
        "question": "Which device forwards based on destination IP?",
        "options": [
          "Hub",
          "L2 switch",
          "Router",
          "Repeater"
        ],
        "correct": 2,
        "explanation": "Routers connect different networks using destination IP.",
        "difficulty": "Easy"
      },
      {
        "question": "What mask is /24?",
        "options": [
          "255.255.0.0",
          "255.255.255.0",
          "255.255.255.252",
          "255.0.0.0"
        ],
        "correct": 1,
        "explanation": "/24 means 24 network bits: 255.255.255.0.",
        "difficulty": "Easy"
      },
      {
        "question": "What is DHCP for?",
        "options": [
          "Name resolution",
          "Assigning IP, mask, gateway, and DNS",
          "Encrypting HTTP",
          "MAC filtering"
        ],
        "correct": 1,
        "explanation": "DHCP auto-configures IP clients.",
        "difficulty": "Easy"
      },
      {
        "question": "Which protocol maps hostnames to IPs?",
        "options": [
          "DHCP",
          "DNS",
          "ARP",
          "NAT"
        ],
        "correct": 1,
        "explanation": "DNS translates names to IP addresses.",
        "difficulty": "Easy"
      },
      {
        "question": "What does ARP discover?",
        "options": [
          "A route to another network",
          "The MAC for an IP on the local LAN",
          "The NTP server",
          "The native VLAN"
        ],
        "correct": 1,
        "explanation": "ARP maps a local IP to a MAC.",
        "difficulty": "Medium"
      },
      {
        "question": "Can an unmanaged switch create VLANs?",
        "options": [
          "Yes, via CLI",
          "No, everything shares one broadcast domain",
          "Yes, via SNMP",
          "Only with PoE"
        ],
        "correct": 1,
        "explanation": "Unmanaged switches have no config and no VLANs.",
        "difficulty": "Easy"
      },
      {
        "question": "Which tool shows the hop-by-hop path to a destination?",
        "options": [
          "ipconfig",
          "traceroute / tracert",
          "netstat -a",
          "arp -a"
        ],
        "correct": 1,
        "explanation": "traceroute (tracert on Windows) lists hops to the destination.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a PC default gateway?",
        "options": [
          "A public DNS",
          "The LAN router used to reach other networks",
          "The print server",
          "The loopback address"
        ],
        "correct": 1,
        "explanation": "The default gateway is the local router for off-net traffic.",
        "difficulty": "Easy"
      },
      {
        "question": "Wi-Fi 6 maps to which IEEE standard?",
        "options": [
          "802.11n",
          "802.11ac",
          "802.11ax",
          "802.3af"
        ],
        "correct": 2,
        "explanation": "Wi-Fi 6 is 802.11ax.",
        "difficulty": "Medium"
      },
      {
        "question": "Which TCP port does HTTPS use?",
        "options": [
          "80",
          "443",
          "22",
          "25"
        ],
        "correct": 1,
        "explanation": "HTTPS uses TCP 443.",
        "difficulty": "Easy"
      },
      {
        "question": "What is phishing?",
        "options": [
          "A Wi-Fi brute-force attack",
          "Deception to steal credentials or data, often via email",
          "An ICMP flood",
          "Port mirroring"
        ],
        "correct": 1,
        "explanation": "Phishing uses social engineering to steal data.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a firewall for?",
        "options": [
          "Assigning IPs",
          "Filtering traffic according to security rules",
          "DNS translation",
          "PoE power"
        ],
        "correct": 1,
        "explanation": "Firewalls allow or deny traffic based on policy.",
        "difficulty": "Easy"
      },
      {
        "question": "Which cable transmits data with light?",
        "options": [
          "Cat6 UTP",
          "Fiber optic",
          "Coaxial",
          "USB"
        ],
        "correct": 1,
        "explanation": "Fiber uses light pulses and is immune to EMI.",
        "difficulty": "Easy"
      },
      {
        "question": "What is 127.0.0.1 used for?",
        "options": [
          "Internet gateway",
          "Testing the local TCP/IP stack (loopback)",
          "DHCP server",
          "APIPA address"
        ],
        "correct": 1,
        "explanation": "Loopback tests the host own IP stack.",
        "difficulty": "Easy"
      },
      {
        "question": "A 169.254.x.x address on Windows usually means?",
        "options": [
          "A public IP",
          "APIPA: DHCP failed",
          "A multicast address",
          "Loopback"
        ],
        "correct": 1,
        "explanation": "APIPA (169.254/16) is used when DHCP does not answer.",
        "difficulty": "Medium"
      },
      {
        "question": "What does PoE do?",
        "options": [
          "Encrypt traffic",
          "Power devices over the Ethernet cable",
          "Aggregate links",
          "Translate VLANs"
        ],
        "correct": 1,
        "explanation": "PoE powers APs, cameras, and phones over UTP.",
        "difficulty": "Easy"
      },
      {
        "question": "Why is SSH preferred over Telnet?",
        "options": [
          "It is faster",
          "It encrypts the management session",
          "It uses UDP",
          "It needs no IP"
        ],
        "correct": 1,
        "explanation": "SSH (port 22) is encrypted; Telnet is cleartext.",
        "difficulty": "Easy"
      },
      {
        "question": "Which OSI layer handles TCP/UDP segments?",
        "options": [
          "Network",
          "Transport",
          "Session",
          "Data link"
        ],
        "correct": 1,
        "explanation": "Layer 4 Transport is TCP and UDP.",
        "difficulty": "Medium"
      },
      {
        "question": "What is an access point for?",
        "options": [
          "WAN routing",
          "Connecting Wi-Fi clients to the wired LAN",
          "Assigning AS numbers",
          "Terminating MPLS"
        ],
        "correct": 1,
        "explanation": "An AP bridges wireless clients onto Ethernet.",
        "difficulty": "Easy"
      },
      {
        "question": "Which is a good password habit?",
        "options": [
          "Reuse one password everywhere",
          "Unique, long, and MFA when possible",
          "Share it in team chat",
          "Use only 4 digits"
        ],
        "correct": 1,
        "explanation": "Unique passwords plus MFA limit breach impact.",
        "difficulty": "Easy"
      },
      {
        "question": "What does a patch panel do?",
        "options": [
          "Runs OSPF",
          "Organizes and terminates cabling at a central point",
          "Encrypts Wi-Fi",
          "Auto-assigns VLANs"
        ],
        "correct": 1,
        "explanation": "Patch panels concentrate structured cabling.",
        "difficulty": "Easy"
      },
      {
        "question": "How many bits are in IPv6?",
        "options": [
          "32",
          "64",
          "128",
          "256"
        ],
        "correct": 2,
        "explanation": "IPv6 addresses are 128 bits.",
        "difficulty": "Easy"
      },
      {
        "question": "Which Windows command shows the machine IP?",
        "options": [
          "ping",
          "ipconfig",
          "hostname -I",
          "show ip"
        ],
        "correct": 1,
        "explanation": "ipconfig or ipconfig /all shows Windows addresses.",
        "difficulty": "Easy"
      },
      {
        "question": "Compared with a switch, an Ethernet hub:",
        "options": [
          "Is more secure",
          "Shares one collision domain; a switch splits it per port",
          "Routes IP",
          "Runs OSPF"
        ],
        "correct": 1,
        "explanation": "Hubs are L1 and share collisions; L2 switches isolate per port.",
        "difficulty": "Medium"
      },
      {
        "question": "Which protocol uses UDP port 53?",
        "options": [
          "HTTP",
          "DNS",
          "SMTP",
          "FTP"
        ],
        "correct": 1,
        "explanation": "DNS uses UDP/TCP 53.",
        "difficulty": "Easy"
      },
      {
        "question": "Which security incident should you report?",
        "options": [
          "Installing Windows updates",
          "An email asking for the boss password",
          "Changing the wallpaper",
          "Opening a browser"
        ],
        "correct": 1,
        "explanation": "Credential requests are phishing and must be reported.",
        "difficulty": "Easy"
      },
      {
        "question": "What do Cat5e/Cat6 describe?",
        "options": [
          "Fiber standards",
          "Twisted-pair cable categories and bandwidth",
          "Fiber connector types",
          "Wi-Fi channels"
        ],
        "correct": 1,
        "explanation": "UTP categories define performance.",
        "difficulty": "Medium"
      },
      {
        "question": "Which is a private RFC 1918 IPv4 address?",
        "options": [
          "8.8.8.8",
          "192.168.1.10",
          "1.1.1.1",
          "255.255.255.255"
        ],
        "correct": 1,
        "explanation": "192.168.0.0/16 is private, along with 10/8 and 172.16/12.",
        "difficulty": "Easy"
      }
    ]
  },
  "ccna": {
    "pt": [
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
        "explanation": "switchport access vlan 20 (com mode access) põe a porta na VLAN 20.",
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
        "question": "Em STP, o root bridge é eleito por:",
        "options": [
          "Maior prioridade numérica",
          "Menor Bridge ID (prioridade + MAC)",
          "Maior número de VLANs",
          "Maior uptime"
        ],
        "correct": 1,
        "explanation": "Ganha o menor Bridge ID: prioridade (default 32768) depois MAC.",
        "difficulty": "Médio"
      },
      {
        "question": "PortFast numa porta de acesso serve para:",
        "options": [
          "Desligar STP",
          "Passar já para forwarding, evitando atraso em PCs",
          "Eleger o root",
          "Negociar trunk"
        ],
        "correct": 1,
        "explanation": "PortFast salta listening/learning em portas de extremo.",
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
        "question": "Uma rota estática default em Cisco é:",
        "options": [
          "ip route 0.0.0.0 0.0.0.0 <next-hop ou exit>",
          "ip default-network 0.0.0.0",
          "ip route 255.255.255.255",
          "router default"
        ],
        "correct": 0,
        "explanation": "A default route é 0.0.0.0/0 para next-hop ou interface.",
        "difficulty": "Fácil"
      },
      {
        "question": "NAT overload (PAT) faz o que?",
        "options": [
          "Um IP público por cada privado, 1:1",
          "Muitos privados partilham um ou poucos IPs públicos via portas",
          "Traduz só IPv6",
          "Desliga o firewall"
        ],
        "correct": 1,
        "explanation": "PAT usa portas L4 para multiplexar muitos internos num IP público.",
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
        "question": "Uma ACL estendida filtra com base em:",
        "options": [
          "Só IP de origem",
          "Origem, destino, protocolo e portas",
          "Só MAC",
          "Só VLAN"
        ],
        "correct": 1,
        "explanation": "ACLs extended permitem critérios L3/L4 finos.",
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
        "question": "HSRP oferece o que aos hosts?",
        "options": [
          "Um MAC/IP virtual de gateway redundante",
          "Balanceamento por fluxo OSPF",
          "Tradução NAT",
          "Um servidor DHCP"
        ],
        "correct": 0,
        "explanation": "HSRP partilha um VIP; um router e active, outro standby.",
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
        "explanation": "GET consulta o agente; SET altera; traps são notificacoes.",
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
          "Ser binario",
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
        "question": "Dynamic ARP Inspection usa que base de dados?",
        "options": [
          "A tabela OSPF",
          "A binding table do DHCP snooping",
          "O arquivo VTP",
          "O CAM aging"
        ],
        "correct": 1,
        "explanation": "DAI valida ARP contra as bindings DHCP snooping.",
        "difficulty": "Difícil"
      },
      {
        "question": "BPDU Guard numa porta PortFast:",
        "options": [
          "Ignora BPDUs",
          "Errdisable a porta se receber uma BPDU",
          "Elege o root",
          "Ativa LACP"
        ],
        "correct": 1,
        "explanation": "Um switch ligado por engano desliga a porta de extremo.",
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
        "question": "OSPF cost de FastEthernet 100 Mb/s com referência 100000 é:",
        "options": [
          "1",
          "10",
          "100",
          "1000"
        ],
        "correct": 0,
        "explanation": "Custo = ref/bw = 100000/100000 = 1.",
        "difficulty": "Médio"
      },
      {
        "question": "Um trunk 802.1Q transporta:",
        "options": [
          "Uma só VLAN",
          "Várias VLANs com tag, exceto a nativa sem tag",
          "Apenas a VLAN 1",
          "Só tráfego de gestao"
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
      }
    ],
    "en": [
      {
        "question": "What is the function of the Transport layer in the TCP/IP model?",
        "options": [
          "Logical addressing",
          "Reliable data delivery between applications",
          "Packet routing",
          "Physical bit transmission"
        ],
        "correct": 1,
        "explanation": "The Transport layer (TCP/UDP) provides data delivery between applications, with TCP offering reliability.",
        "difficulty": "Medium"
      },
      {
        "question": "Which protocol is used to resolve domain names to IP addresses?",
        "options": [
          "ARP",
          "DNS",
          "DHCP",
          "ICMP"
        ],
        "correct": 1,
        "explanation": "DNS (Domain Name System) translates human-readable domain names to IP addresses.",
        "difficulty": "Easy"
      },
      {
        "question": "What is a static route?",
        "options": [
          "Route learned automatically by a routing protocol",
          "Route manually configured by the administrator",
          "Default route",
          "Backup route"
        ],
        "correct": 1,
        "explanation": "Static routes are manually configured and do not change automatically.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between OSPF and EIGRP?",
        "options": [
          "OSPF is Cisco proprietary, EIGRP is open",
          "EIGRP uses DUAL algorithm, OSPF uses Dijkstra",
          "There is no difference",
          "OSPF is faster than EIGRP"
        ],
        "correct": 1,
        "explanation": "EIGRP is Cisco proprietary with DUAL algorithm. OSPF is open standard and uses Dijkstra's algorithm (SPF).",
        "difficulty": "Hard"
      },
      {
        "question": "What is NAT overload (PAT)?",
        "options": [
          "Translation of one private IP to one public IP",
          "Multiple private IPs sharing one public IP using ports",
          "Port translation",
          "Traffic blocking"
        ],
        "correct": 1,
        "explanation": "PAT (Port Address Translation) allows multiple internal devices to share one public IP using different ports.",
        "difficulty": "Medium"
      },
      {
        "question": "What does the command 'ip route 0.0.0.0 0.0.0.0 192.168.1.1' do?",
        "options": [
          "Configure static default route",
          "Configure route to specific network",
          "Delete route",
          "Show routes"
        ],
        "correct": 0,
        "explanation": "This command configures the static default route (gateway of last resort) to 192.168.1.1.",
        "difficulty": "Medium"
      },
      {
        "question": "What is VLAN tagging (802.1Q)?",
        "options": [
          "Method to encrypt VLANs",
          "Inserting a tag into frames to identify the source VLAN",
          "Routing protocol",
          "Type of switch"
        ],
        "correct": 1,
        "explanation": "802.1Q is the IEEE standard for inserting a 4-byte tag into Ethernet frames to identify the VLAN.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the default port for the HTTPS protocol?",
        "options": [
          "80",
          "443",
          "22",
          "21"
        ],
        "correct": 1,
        "explanation": "HTTPS (HTTP Secure) uses port 443 by default.",
        "difficulty": "Easy"
      },
      {
        "question": "What is an ACL (Access Control List)?",
        "options": [
          "MAC address list",
          "Set of rules to permit or deny traffic",
          "Routing table",
          "VLAN configuration"
        ],
        "correct": 1,
        "explanation": "ACLs are used to filter traffic based on criteria such as source/destination IP, ports, etc.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the HSRP protocol?",
        "options": [
          "Dynamic routing",
          "Provide redundant gateway with virtual IP",
          "Load balancing",
          "VPN"
        ],
        "correct": 1,
        "explanation": "HSRP (Hot Standby Router Protocol) provides gateway redundancy with a shared virtual IP.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'frame tagging' in switches?",
        "options": [
          "Tagging frames for VLAN identification",
          "Frame encryption",
          "Frame fragmentation",
          "Frame prioritization"
        ],
        "correct": 0,
        "explanation": "Frame tagging (802.1Q) adds a tag to the frame to identify which VLAN it belongs to.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the main difference between a router and a Layer 3 switch?",
        "options": [
          "Router is faster",
          "Layer 3 switch performs Layer 3 routing but with hardware optimized for switching",
          "There is no difference",
          "Router does not support VLANs"
        ],
        "correct": 1,
        "explanation": "Layer 3 switches combine L2 switching with L3 routing in ASIC hardware, much faster than traditional routers.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'EtherChannel'?",
        "options": [
          "Encryption protocol",
          "Technology to bundle multiple physical ports into a single logical link",
          "Type of VLAN",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "EtherChannel allows aggregation of physical links to increase bandwidth and provide redundancy (LACP or PAgP).",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the command 'show ip ospf neighbor'?",
        "options": [
          "Show routing table",
          "Show OSPF neighbors and their state",
          "Show interface configuration",
          "Show logs"
        ],
        "correct": 1,
        "explanation": "This command displays OSPF neighbors, adjacency state, and DR/BDR information.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a 'prefix-list' on Cisco routers?",
        "options": [
          "IP prefix list for route filtering",
          "VLAN list",
          "ACL list",
          "User list"
        ],
        "correct": 0,
        "explanation": "Prefix-lists are used to filter routes based on network prefixes and mask length.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'standard' and 'extended' ACL?",
        "options": [
          "Standard filters only by source IP, extended by source, destination, protocol and port",
          "There is no difference",
          "Extended is simpler",
          "Standard is more secure"
        ],
        "correct": 0,
        "explanation": "Standard ACLs (1-99) filter only by source IP. Extended ACLs (100-199) offer more granular filtering.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'BGP' and what is it used for?",
        "options": [
          "Internal routing protocol",
          "External routing protocol used on the internet to exchange routes between AS",
          "Backup protocol",
          "Security protocol"
        ],
        "correct": 1,
        "explanation": "BGP (Border Gateway Protocol) is the routing protocol used on the internet to exchange routes between autonomous systems.",
        "difficulty": "Hard"
      },
      {
        "question": "What does the command 'ip nat inside source list 1 interface GigabitEthernet0/0 overload' do?",
        "options": [
          "Configure static NAT",
          "Configure dynamic PAT using ACL and interface",
          "Delete NAT",
          "Show NAT"
        ],
        "correct": 1,
        "explanation": "This command configures PAT (NAT overload) using ACL 1 and the interface IP as the public address.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'CEF' (Cisco Express Forwarding)?",
        "options": [
          "Routing protocol",
          "Hardware packet forwarding technology for high performance",
          "Type of switch",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "CEF uses FIB table and adjacencies to forward packets in hardware, much faster than traditional routing.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the default port for the Telnet protocol?",
        "options": [
          "21",
          "22",
          "23",
          "80"
        ],
        "correct": 2,
        "explanation": "Telnet uses port 23 (insecure, use SSH on port 22 instead).",
        "difficulty": "Easy"
      },
      {
        "question": "What is 'VRF' (Virtual Routing and Forwarding)?",
        "options": [
          "Type of VLAN",
          "Technology that allows multiple independent routing tables on the same router",
          "VPN protocol",
          "Type of firewall"
        ],
        "correct": 1,
        "explanation": "VRF allows creating separate routing instances on the same physical device, useful for segmentation.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Spanning Tree PortFast'?",
        "options": [
          "Speed up STP convergence on access ports",
          "Disable STP",
          "Increase port priority",
          "Create trunk"
        ],
        "correct": 0,
        "explanation": "PortFast immediately puts access ports into forwarding state, skipping listening/learning states.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Anycast' in IPv6?",
        "options": [
          "Unique address for multiple devices",
          "Address that identifies the nearest device in a group",
          "Broadcast address",
          "Multicast address"
        ],
        "correct": 1,
        "explanation": "Anycast delivers the packet to the nearest device (lowest metric) in a group sharing the same address.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'RIPv2' and 'OSPF'?",
        "options": [
          "RIPv2 is link-state, OSPF is distance-vector",
          "RIPv2 has a 15-hop limit, OSPF is hierarchical and scalable",
          "There is no difference",
          "RIPv2 is more secure"
        ],
        "correct": 1,
        "explanation": "RIPv2 is distance-vector with a 15-hop limit. OSPF is link-state, hierarchical (areas), and scalable for large networks.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a 'subinterface' on Cisco routers?",
        "options": [
          "Physical interface",
          "Logical interface created on a physical interface to support multiple VLANs (router-on-a-stick)",
          "Backup interface",
          "Wireless interface"
        ],
        "correct": 1,
        "explanation": "Subinterfaces allow a single router to process traffic from multiple VLANs on one physical interface (router-on-a-stick).",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the command 'show ip nat translations'?",
        "options": [
          "Show NAT configuration",
          "Show active NAT translations",
          "Delete translations",
          "Show ACLs"
        ],
        "correct": 1,
        "explanation": "This command displays the currently active NAT/PAT translations on the router.",
        "difficulty": "Easy"
      },
      {
        "question": "What is 'GLBP' (Gateway Load Balancing Protocol)?",
        "options": [
          "Routing protocol",
          "Protocol that provides redundancy and load balancing between multiple gateways",
          "Type of ACL",
          "VPN protocol"
        ],
        "correct": 1,
        "explanation": "GLBP provides gateway redundancy with active-active load balancing using multiple active routers.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'ip helper-address'?",
        "options": [
          "Configure NAT",
          "Forward DHCP broadcasts to a remote DHCP server",
          "Configure static route",
          "Enable firewall"
        ],
        "correct": 1,
        "explanation": "ip helper-address allows DHCP broadcasts from clients to be forwarded to a DHCP server on another network.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'SDM' (Switching Database Manager) on Cisco switches?",
        "options": [
          "VLAN manager",
          "Feature that optimizes hardware resource usage (TCAM) for different functions",
          "Routing protocol",
          "Type of memory"
        ],
        "correct": 1,
        "explanation": "SDM allows optimized allocation of hardware resources (TCAM) for routing, security, etc.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'inside local' and 'inside global' in NAT?",
        "options": [
          "Inside local is public IP, inside global is private IP",
          "Inside local is internal private IP, inside global is public IP after translation",
          "There is no difference",
          "Inside local is server IP"
        ],
        "correct": 1,
        "explanation": "Inside local = original IP of internal host. Inside global = public IP used on the internet after NAT.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'BPDU Guard'?",
        "options": [
          "Routing protocol",
          "Security feature that disables port if it receives a BPDU (prevents loops)",
          "Type of VLAN",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "BPDU Guard automatically disables a PortFast port if it receives a BPDU, preventing loops.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the command 'debug ip packet'?",
        "options": [
          "Show configuration",
          "Show IP packets processed by the router (use with caution: high impact)",
          "Clear logs",
          "Restart interface"
        ],
        "correct": 1,
        "explanation": "debug ip packet shows details of IP packets being processed. Use with caution as it can overload the CPU.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'router-on-a-stick'?",
        "options": [
          "Single physical router",
          "Configuration where a router uses subinterfaces to route between multiple VLANs on a single physical interface",
          "Type of switch",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "Router-on-a-stick uses one physical interface with 802.1Q subinterfaces to route between VLANs.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the default port for the FTP protocol?",
        "options": [
          "20/21",
          "22",
          "23",
          "80"
        ],
        "correct": 0,
        "explanation": "FTP uses port 21 for control and 20 for data (active mode).",
        "difficulty": "Easy"
      },
      {
        "question": "What is 'PVST+' (Per-VLAN Spanning Tree Plus)?",
        "options": [
          "STP for all VLANs together",
          "Cisco implementation of STP that runs one STP instance per VLAN",
          "Load balancing protocol",
          "Type of trunk"
        ],
        "correct": 1,
        "explanation": "PVST+ runs a separate STP instance for each VLAN, allowing per-VLAN optimization.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'ip domain-lookup'?",
        "options": [
          "Enable DNS resolution on the router",
          "Disable DNS",
          "Configure DNS server",
          "Show DNS cache"
        ],
        "correct": 0,
        "explanation": "ip domain-lookup enables the router to resolve hostnames via DNS.",
        "difficulty": "Easy"
      },
      {
        "question": "What is 'LACP' (Link Aggregation Control Protocol)?",
        "options": [
          "Routing protocol",
          "IEEE standard protocol for EtherChannel negotiation",
          "Type of ACL",
          "Security protocol"
        ],
        "correct": 1,
        "explanation": "LACP is the IEEE 802.3ad standard protocol for dynamically forming EtherChannels.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between 'active' and 'passive' in LACP?",
        "options": [
          "Active initiates negotiation, passive responds",
          "There is no difference",
          "Passive is faster",
          "Active is insecure"
        ],
        "correct": 0,
        "explanation": "Active mode initiates LACP negotiation. Passive mode only responds to negotiations.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'HSRP preemption'?",
        "options": [
          "Disable HSRP",
          "Allow higher priority router to take over active role when available",
          "Type of load balancing",
          "Configuration backup"
        ],
        "correct": 1,
        "explanation": "Preemption allows a higher priority router to automatically assume the active role when it becomes available again.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of the command 'show spanning-tree vlan 10'?",
        "options": [
          "Show VLAN 10 configuration",
          "Show STP state for VLAN 10 (root bridge, ports, etc.)",
          "Show ACLs for VLAN 10",
          "Show NAT for VLAN 10"
        ],
        "correct": 1,
        "explanation": "This command displays detailed STP information for the specified VLAN.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a 'route-map' on Cisco routers?",
        "options": [
          "VLAN map",
          "Powerful tool for route manipulation and filtering based on complex criteria",
          "Type of ACL",
          "VPN protocol"
        ],
        "correct": 1,
        "explanation": "Route-maps are used for advanced route redistribution control, PBR, and NAT.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'ip sla'?",
        "options": [
          "Configure NAT",
          "Monitor network performance (latency, jitter, loss) with synthetic tests",
          "Configure VPN",
          "Manage users"
        ],
        "correct": 1,
        "explanation": "IP SLA allows creating synthetic performance tests to monitor SLAs and trigger actions.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'uRPF' (Unicast Reverse Path Forwarding)?",
        "options": [
          "Routing protocol",
          "Security mechanism that verifies if source IP is reachable via incoming interface",
          "Type of firewall",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "uRPF helps prevent spoofing by verifying that a return path to the source IP exists via the incoming interface.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'named' and 'numbered' ACL?",
        "options": [
          "Named is older",
          "Named ACL allows easy editing and descriptive names, numbered is numeric",
          "There is no difference",
          "Named is less secure"
        ],
        "correct": 1,
        "explanation": "Named ACLs use names and allow insertion/removal of specific lines. Numbered ACLs are more limited.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'MPLS' (Multiprotocol Label Switching)?",
        "options": [
          "Routing protocol",
          "Label switching technology for high performance and VPNs",
          "Type of switch",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "MPLS uses short labels to forward packets at high speed and supports Layer 2/3 VPNs.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of the command 'clear ip nat translation *'?",
        "options": [
          "Show translations",
          "Clear all active NAT translations",
          "Restart NAT",
          "Configure NAT"
        ],
        "correct": 1,
        "explanation": "This command clears all current NAT translations (useful after configuration changes).",
        "difficulty": "Easy"
      },
      {
        "question": "What is 'sticky MAC' in port-security?",
        "options": [
          "MAC that never changes",
          "Feature that dynamically learns MACs and saves them to running-config",
          "Type of VLAN",
          "Encryption method"
        ],
        "correct": 1,
        "explanation": "Sticky MAC learns MAC addresses dynamically and adds them to the configuration as static entries.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'ip tcp window-size'?",
        "options": [
          "Configure MTU",
          "Adjust TCP window size to optimize throughput",
          "Configure port",
          "Enable firewall"
        ],
        "correct": 1,
        "explanation": "Allows adjusting the TCP window size to improve performance on high-latency links.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'DMVPN' (Dynamic Multipoint VPN)?",
        "options": [
          "Static VPN",
          "Cisco technology that enables dynamic hub-and-spoke VPNs with direct spoke-to-spoke tunnels",
          "Type of firewall",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "DMVPN creates dynamic VPNs where spokes can connect directly to each other without going through the hub.",
        "difficulty": "Hard"
      },
      {
        "question": "Which command creates VLAN 20 on a Cisco switch?",
        "options": [
          "vlan 20",
          "switchport access vlan 20",
          "interface vlan 20",
          "encapsulation dot1q 20"
        ],
        "correct": 0,
        "explanation": "In VLAN config mode, 'vlan 20' creates the VLAN.",
        "difficulty": "Easy"
      },
      {
        "question": "To put an access port in VLAN 20 use:",
        "options": [
          "switchport mode trunk",
          "switchport access vlan 20",
          "no switchport",
          "ip routing"
        ],
        "correct": 1,
        "explanation": "switchport access vlan 20 with mode access assigns VLAN 20.",
        "difficulty": "Easy"
      },
      {
        "question": "Which native Cisco protocol negotiates EtherChannel?",
        "options": [
          "LACP",
          "PAgP",
          "STP",
          "VTP"
        ],
        "correct": 1,
        "explanation": "PAgP is Cisco-proprietary; LACP is IEEE 802.3ad.",
        "difficulty": "Medium"
      },
      {
        "question": "In STP, the root bridge is elected by:",
        "options": [
          "Highest numeric priority",
          "Lowest Bridge ID (priority + MAC)",
          "Most VLANs",
          "Highest uptime"
        ],
        "correct": 1,
        "explanation": "Lowest Bridge ID wins: priority then MAC.",
        "difficulty": "Medium"
      },
      {
        "question": "PortFast on an access port is used to:",
        "options": [
          "Disable STP",
          "Move immediately to forwarding, avoiding PC delay",
          "Elect the root",
          "Negotiate a trunk"
        ],
        "correct": 1,
        "explanation": "PortFast skips listening/learning on edge ports.",
        "difficulty": "Medium"
      },
      {
        "question": "OSPFv2 hellos on Ethernet use which addresses?",
        "options": [
          "Broadcast 255.255.255.255",
          "Multicast 224.0.0.5 and 224.0.0.6",
          "Unicast to the DR only",
          "FF02::5 only"
        ],
        "correct": 1,
        "explanation": "Hellos go to 224.0.0.5; DR/BDR also 224.0.0.6.",
        "difficulty": "Medium"
      },
      {
        "question": "A Cisco IPv4 default static route is:",
        "options": [
          "ip route 0.0.0.0 0.0.0.0 <next-hop or exit>",
          "ip default-network 0.0.0.0",
          "ip route 255.255.255.255",
          "router default"
        ],
        "correct": 0,
        "explanation": "The default route is 0.0.0.0/0 to a next-hop or exit interface.",
        "difficulty": "Easy"
      },
      {
        "question": "What does NAT overload (PAT) do?",
        "options": [
          "One public IP per private host, 1:1",
          "Many privates share one or few public IPs via ports",
          "Translates IPv6 only",
          "Disables the firewall"
        ],
        "correct": 1,
        "explanation": "PAT multiplexes many internals onto a public IP using L4 ports.",
        "difficulty": "Medium"
      },
      {
        "question": "DHCP snooping protects against:",
        "options": [
          "STP loops",
          "Rogue DHCP servers",
          "Broadcast storms",
          "Fake OSPF routes"
        ],
        "correct": 1,
        "explanation": "It marks trusted/untrusted ports and drops bogus DHCP offers.",
        "difficulty": "Medium"
      },
      {
        "question": "An extended ACL filters based on:",
        "options": [
          "Source IP only",
          "Source, destination, protocol, and ports",
          "MAC only",
          "VLAN only"
        ],
        "correct": 1,
        "explanation": "Extended ACLs allow fine L3/L4 matching.",
        "difficulty": "Medium"
      },
      {
        "question": "Where should an extended ACL usually be placed?",
        "options": [
          "Closest to the destination",
          "Closest to the source",
          "Core only",
          "On every PC"
        ],
        "correct": 1,
        "explanation": "Near the source stops unwanted traffic from crossing the network.",
        "difficulty": "Medium"
      },
      {
        "question": "What does HSRP give hosts?",
        "options": [
          "A virtual MAC/IP for a redundant gateway",
          "Per-flow OSPF balancing",
          "NAT translation",
          "A DHCP server"
        ],
        "correct": 0,
        "explanation": "HSRP shares a VIP; one router is active, another standby.",
        "difficulty": "Medium"
      },
      {
        "question": "NTP is used to:",
        "options": [
          "Resolve names",
          "Synchronize clocks across the network",
          "Measure WAN jitter",
          "Encrypt syslog"
        ],
        "correct": 1,
        "explanation": "NTP aligns device time.",
        "difficulty": "Easy"
      },
      {
        "question": "What does an SNMP GET do?",
        "options": [
          "Configures the device",
          "Reads a MIB object from the agent",
          "Sends a trap",
          "Resets an interface"
        ],
        "correct": 1,
        "explanation": "GET queries the agent; SET changes; traps notify.",
        "difficulty": "Medium"
      },
      {
        "question": "Where should QoS classification happen, preferably?",
        "options": [
          "Only at the ISP",
          "Closest to the source (edge)",
          "Only in the MPLS core",
          "On DNS"
        ],
        "correct": 1,
        "explanation": "Classify at the edge so DSCP can be set early.",
        "difficulty": "Medium"
      },
      {
        "question": "CDP and LLDP are used to:",
        "options": [
          "Elect the OSPF DR",
          "Discover neighbors and link capabilities",
          "Encrypt trunks",
          "Translate NAT"
        ],
        "correct": 1,
        "explanation": "L2 discovery protocols: CDP Cisco, LLDP standard.",
        "difficulty": "Easy"
      },
      {
        "question": "An IPv6 link-local address typically starts with:",
        "options": [
          "2001:",
          "fe80::/10",
          "ff00::/8",
          "::1"
        ],
        "correct": 1,
        "explanation": "Link-local FE80::/10 is required on every IPv6 interface.",
        "difficulty": "Medium"
      },
      {
        "question": "RESTCONF often uses which data format?",
        "options": [
          "YAML only",
          "JSON or XML over HTTP",
          "CSV",
          "Protobuf only"
        ],
        "correct": 1,
        "explanation": "RESTCONF exposes YANG over HTTP, usually JSON or XML.",
        "difficulty": "Medium"
      },
      {
        "question": "JSON differs from XML by:",
        "options": [
          "Being binary",
          "Being lighter, with key-value pairs",
          "Not supporting arrays",
          "Requiring a DTD"
        ],
        "correct": 1,
        "explanation": "JSON is simple text with objects and arrays, common in APIs.",
        "difficulty": "Easy"
      },
      {
        "question": "Ansible reaches Cisco devices mainly via:",
        "options": [
          "An agent on IOS",
          "SSH (agentless) and sometimes NETCONF",
          "SNMP only",
          "Required Telnet"
        ],
        "correct": 1,
        "explanation": "Ansible is agentless: SSH/NETCONF with YAML playbooks.",
        "difficulty": "Medium"
      },
      {
        "question": "Dynamic ARP Inspection uses which database?",
        "options": [
          "The OSPF table",
          "The DHCP snooping binding table",
          "The VTP file",
          "CAM aging"
        ],
        "correct": 1,
        "explanation": "DAI checks ARP against DHCP snooping bindings.",
        "difficulty": "Hard"
      },
      {
        "question": "BPDU Guard on a PortFast port:",
        "options": [
          "Ignores BPDUs",
          "Err-disables the port if a BPDU is received",
          "Elects the root",
          "Enables LACP"
        ],
        "correct": 1,
        "explanation": "A rogue switch shuts the edge port.",
        "difficulty": "Medium"
      },
      {
        "question": "Wildcard mask 0.0.0.255 equals:",
        "options": [
          "/16",
          "/24",
          "/8",
          "/32"
        ],
        "correct": 1,
        "explanation": "0.0.0.255 matches the last 8 bits: a /24 prefix.",
        "difficulty": "Medium"
      },
      {
        "question": "OSPF cost of 100 Mb/s FastEthernet with reference 100000 is:",
        "options": [
          "1",
          "10",
          "100",
          "1000"
        ],
        "correct": 0,
        "explanation": "Cost = ref/bw = 100000/100000 = 1.",
        "difficulty": "Medium"
      },
      {
        "question": "An 802.1Q trunk carries:",
        "options": [
          "Only one VLAN",
          "Multiple tagged VLANs, except the untagged native",
          "VLAN 1 only",
          "Management traffic only"
        ],
        "correct": 1,
        "explanation": "dot1q tags VLANs; the native VLAN is untagged.",
        "difficulty": "Medium"
      },
      {
        "question": "An SSID on a WLAN is:",
        "options": [
          "The WPA3 key",
          "The wireless network name seen by clients",
          "The DFS channel",
          "The BSSID only"
        ],
        "correct": 1,
        "explanation": "SSID names the network; BSSID is the AP radio MAC.",
        "difficulty": "Easy"
      },
      {
        "question": "WPA3-Enterprise typically authenticates with:",
        "options": [
          "PSK only",
          "802.1X/EAP and a RADIUS server",
          "128-bit WEP",
          "Telnet"
        ],
        "correct": 1,
        "explanation": "Enterprise uses 802.1X with RADIUS, not a shared PSK.",
        "difficulty": "Medium"
      },
      {
        "question": "A first LAN troubleshooting step when the site will not open is often:",
        "options": [
          "Replace the core",
          "Check the client IP, mask, gateway, and DNS",
          "Disable OSPF",
          "Factory-reset the ISP"
        ],
        "correct": 1,
        "explanation": "Host IP config catches most cases.",
        "difficulty": "Easy"
      },
      {
        "question": "Syslog severity 0 means:",
        "options": [
          "Informational",
          "Emergency (most severe)",
          "Debug",
          "Notice"
        ],
        "correct": 1,
        "explanation": "0 emergency to 7 debug; lower is more severe.",
        "difficulty": "Medium"
      },
      {
        "question": "A WLC uses CAPWAP to:",
        "options": [
          "Replace OSPF",
          "Tunnel and control lightweight APs",
          "Encrypt disks",
          "Perform NAT"
        ],
        "correct": 1,
        "explanation": "CAPWAP is the control/data tunnel between WLC and APs.",
        "difficulty": "Medium"
      },
      {
        "question": "IPv6 global unicast often starts with:",
        "options": [
          "fe80:",
          "2000::/3 (e.g. 2001:)",
          "ff02:",
          "::1"
        ],
        "correct": 1,
        "explanation": "Current globals sit in 2000::/3, e.g. 2001:db8::/32.",
        "difficulty": "Medium"
      },
      {
        "question": "The show ip route code O means routes from:",
        "options": [
          "Static",
          "OSPF",
          "Connected",
          "BGP"
        ],
        "correct": 1,
        "explanation": "Code O = OSPF in the routing table.",
        "difficulty": "Easy"
      },
      {
        "question": "Does switchport mode access accept 802.1Q tags?",
        "options": [
          "Yes, all VLANs",
          "No: only the access VLAN, untagged",
          "Only tagged VLAN 1",
          "Only if PortFast is on"
        ],
        "correct": 1,
        "explanation": "Access ports expect untagged frames of the assigned VLAN.",
        "difficulty": "Medium"
      }
    ]
  },
  "ccnp": {
    "pt": [
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
    ],
    "en": [
      {
        "question": "What is the main difference between OSPFv2 and OSPFv3?",
        "options": [
          "OSPFv3 supports only IPv4",
          "OSPFv3 is designed for IPv6 and uses link-local addresses for adjacencies",
          "There is no difference",
          "OSPFv3 is slower"
        ],
        "correct": 1,
        "explanation": "OSPFv3 was redesigned for IPv6, uses link-local addresses to form adjacencies, and supports multiple addresses per interface.",
        "difficulty": "Hard"
      },
      {
        "question": "What is a 'BGP route reflector' and what is its function?",
        "options": [
          "Device that reflects BGP routes to reduce full-mesh sessions",
          "Type of firewall",
          "Backup protocol",
          "DNS server"
        ],
        "correct": 0,
        "explanation": "A Route Reflector allows a router to reflect BGP routes learned from one client to other clients, reducing the number of required IBGP sessions.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'EIGRP named mode'?",
        "options": [
          "Legacy configuration mode",
          "Modern mode that allows hierarchical configuration and named EIGRP for multiple instances",
          "Type of ACL",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "EIGRP named mode allows more organized configuration, support for multiple instances, and advanced features like wide metrics.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'SD-WAN' and how does it differ from traditional WAN?",
        "options": [
          "Same as MPLS",
          "Software-defined approach to WAN management with intelligent overlay, zero-touch provisioning, and application-aware traffic optimization",
          "Type of switch",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "SD-WAN uses an intelligent overlay over any underlay (MPLS, internet, LTE) with centralized management and application-based policies.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco DNA Center'?",
        "options": [
          "Traditional device management",
          "Intent-based automation and network management platform with analytics and assurance",
          "Type of router",
          "DHCP server"
        ],
        "correct": 1,
        "explanation": "DNA Center provides intent-based automation, automated discovery, policies, and analytics for enterprise networks.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'FlexVPN'?",
        "options": [
          "Static VPN",
          "Flexible IKEv2-based framework for site-to-site and remote access VPNs with high scalability",
          "Type of firewall",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "FlexVPN is an IKEv2-based solution that unifies different VPN types into a single flexible configuration.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'PIM-SM' and 'PIM-DM'?",
        "options": [
          "PIM-SM is dense mode, PIM-DM is sparse mode",
          "PIM-SM uses a rendezvous point and is efficient for sparse groups, PIM-DM floods and prunes",
          "There is no difference",
          "PIM-DM is more secure"
        ],
        "correct": 1,
        "explanation": "PIM-SM (Sparse Mode) uses an RP and is efficient for few receivers. PIM-DM (Dense Mode) floods the network and prunes branches without receivers.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'EVPN' (Ethernet VPN) in VXLAN environments?",
        "options": [
          "Type of VLAN",
          "Control plane technology for VXLAN that uses BGP to distribute MAC/IP information",
          "Routing protocol",
          "Type of switch"
        ],
        "correct": 1,
        "explanation": "EVPN uses BGP as the control plane for VXLAN, enabling efficient distribution of MACs, IPs, and VTEP information.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'NetFlow' and 'Flexible NetFlow'?",
        "options": [
          "Routing protocol",
          "Traffic flow monitoring technology for analysis, billing, and security",
          "Type of ACL",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "NetFlow collects flow data for traffic analysis, anomaly detection, and network planning.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Cisco TrustSec' and 'SGT'?",
        "options": [
          "Encryption protocol",
          "Security architecture based on tags (Security Group Tags) for identity-based access control",
          "Type of firewall",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "TrustSec uses SGTs (Security Group Tags) to classify traffic and apply identity-based access policies, independent of IP.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'IPsec' in VPNs?",
        "options": [
          "Encrypt traffic at the application layer",
          "Provide network-layer security (confidentiality, integrity, authentication) for VPNs",
          "Type of routing",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "IPsec operates at the network layer, providing encryption, authentication, and integrity for VPN tunnels.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'AnyConnect' from Cisco?",
        "options": [
          "Routing protocol",
          "Secure remote access VPN client with SSL/TLS and IPsec support",
          "Type of switch",
          "DHCP server"
        ],
        "correct": 1,
        "explanation": "Cisco AnyConnect is the modern VPN client that supports SSL VPN and IPsec with advanced mobility features.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of a 'Wireless LAN Controller (WLC)'?",
        "options": [
          "Wireless router",
          "Centralized device that manages multiple Access Points, roaming, security, and RF",
          "Type of switch",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "WLC centralizes AP management, enables fast roaming, security policies, and RF optimization.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'CAPWAP'?",
        "options": [
          "Routing protocol",
          "Protocol used by WLC to control and manage Access Points (replaces LWAPP)",
          "Type of VLAN",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "CAPWAP (Control and Provisioning of Wireless Access Points) is the standard protocol for communication between WLC and APs.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Cisco ISE' (Identity Services Engine)?",
        "options": [
          "DHCP server",
          "Centralized identity-based access control platform, 802.1X, profiling, and policy enforcement",
          "Type of router",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "ISE provides NAC (Network Access Control), 802.1X, guest access, device profiling, and dynamic policies.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'SD-Access' from Cisco?",
        "options": [
          "Traditional access",
          "Software-defined access architecture with fabric overlay, underlay, and identity-based policies",
          "Type of switch",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "SD-Access creates a network fabric with VXLAN/EVPN overlay, automated underlay, and SGT-based policies.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'RESTCONF' and 'NETCONF'?",
        "options": [
          "Routing protocols",
          "APIs and protocols for programmatic automation and configuration of network devices",
          "Type of firewall",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "NETCONF/RESTCONF enable programmatic configuration and management of devices using YANG models.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Ansible' in Cisco network automation?",
        "options": [
          "Programming language",
          "Agentless automation tool that uses YAML playbooks to configure devices via SSH/NETCONF",
          "Type of switch",
          "VPN protocol"
        ],
        "correct": 1,
        "explanation": "Ansible is an open-source agentless tool that uses playbooks to automate network configuration in an idempotent way.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between 'PBR' (Policy Based Routing) and normal routing?",
        "options": [
          "PBR is faster",
          "PBR allows routing traffic based on policies (ACL, QoS, application) instead of only destination",
          "There is no difference",
          "PBR is less secure"
        ],
        "correct": 1,
        "explanation": "PBR enables routing decisions based on criteria beyond destination IP, such as source, application, or marking.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'MPLS L3 VPN'?",
        "options": [
          "Point-to-point VPN",
          "Technology that allows multiple customers to share MPLS infrastructure with route isolation via VRF",
          "Type of switch",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "MPLS L3 VPN uses VRFs on PE routers to isolate routes of different customers while sharing the MPLS infrastructure.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'BFD' (Bidirectional Forwarding Detection)?",
        "options": [
          "Routing protocol",
          "Fast failure detection mechanism on links to accelerate routing protocol convergence",
          "Type of ACL",
          "NAT method"
        ],
        "correct": 1,
        "explanation": "BFD provides sub-second failure detection, allowing routing protocols to react much faster.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco Umbrella'?",
        "options": [
          "Local firewall",
          "Cloud-based security service that blocks malicious domains, C2, and phishing via DNS",
          "Type of router",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "Umbrella is a cloud DNS security service that blocks threats before they reach the network.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Stealthwatch' (now Secure Network Analytics)?",
        "options": [
          "Antivirus",
          "Network Detection and Response (NDR) solution that uses machine learning to detect threats and anomalies",
          "Type of switch",
          "DHCP server"
        ],
        "correct": 1,
        "explanation": "Stealthwatch analyzes network flow to detect anomalous behavior and advanced threats.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco Secure Firewall' (formerly Firepower)?",
        "options": [
          "Simple router",
          "Next-Generation Firewall (NGFW) with IPS, URL filtering, malware protection, and ISE integration",
          "Type of switch",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "Secure Firewall is an NGFW with deep inspection, IPS, application control, and integration with other Cisco security solutions.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'ThousandEyes'?",
        "options": [
          "Local monitoring",
          "Internet observability platform that monitors application and network performance end-to-end",
          "Type of firewall",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "ThousandEyes provides end-to-end visibility into user experience and network/internet performance.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Intent-Based Networking'?",
        "options": [
          "Traditional networking",
          "Approach where you define the 'what' (intent) and the network automatically configures the 'how'",
          "Type of switch",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "Intent-Based Networking allows administrators to declare business intents and the network automatically translates them into policies and configurations.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco DNA Assurance'?",
        "options": [
          "Configuration backup",
          "Analytics and proactive troubleshooting with machine learning and real-time telemetry",
          "Type of router",
          "DNS server"
        ],
        "correct": 1,
        "explanation": "DNA Assurance uses telemetry, ML, and analytics to identify issues before they affect users and suggest fixes.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Zero Trust Security' in Cisco architecture?",
        "options": [
          "Trust all internal devices",
          "Never trust, always verify - microsegmentation, continuous identity, and least privilege",
          "Type of firewall",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "Zero Trust assumes nothing is trusted by default and applies continuous verification, microsegmentation, and least-privilege policies.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the difference between 'underlay' and 'overlay' in SD-WAN/SD-Access?",
        "options": [
          "Underlay is the physical overlay",
          "Underlay is the physical infrastructure (MPLS, internet), overlay is the virtual network (VXLAN, DMVPN) built on top",
          "There is no difference",
          "Overlay is slower"
        ],
        "correct": 1,
        "explanation": "Underlay = physical underlying network. Overlay = logical virtual network built on top of the underlay for abstraction and services.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco vManage' in SD-WAN?",
        "options": [
          "Physical router",
          "Centralized management controller for policies and orchestration of the entire SD-WAN solution",
          "Type of switch",
          "DHCP server"
        ],
        "correct": 1,
        "explanation": "vManage is the centralized dashboard for management, configuration, policies, and monitoring of the entire SD-WAN fabric.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'AppQoE' in SD-WAN?",
        "options": [
          "Firewall",
          "Application optimization with application awareness, intelligent QoS, and packet loss correction",
          "Type of router",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "AppQoE provides application performance optimization with application awareness and correction techniques.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco Umbrella SIG'?",
        "options": [
          "Local firewall",
          "Cloud Secure Internet Gateway that combines DNS security, firewall, CASB, and DLP",
          "Type of switch",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "Umbrella SIG is a cloud secure internet gateway that protects remote and on-premises users.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Cisco Secure Access'?",
        "options": [
          "Traditional VPN",
          "SASE (Secure Access Service Edge) solution that combines networking and security in the cloud",
          "Type of router",
          "DNS server"
        ],
        "correct": 1,
        "explanation": "Secure Access is Cisco's SASE solution that provides secure access to any application from anywhere.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco XDR' (Extended Detection and Response)?",
        "options": [
          "Traditional antivirus",
          "Platform that correlates telemetry from multiple sources (endpoint, network, cloud, email) for advanced threat detection",
          "Type of firewall",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "XDR correlates data from multiple sources for advanced threat detection and response with automation.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco Talos'?",
        "options": [
          "DHCP server",
          "Cisco's global threat intelligence team that powers all Cisco security solutions",
          "Type of switch",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "Talos is Cisco's threat intelligence team that provides real-time data to all Cisco security solutions.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Cisco Duo'?",
        "options": [
          "Routing protocol",
          "Multi-factor authentication (MFA) and adaptive access solution with device health verification",
          "Type of switch",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "Duo provides MFA, device health verification, and adaptive access to protect logins.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Cisco Secure Endpoint' (formerly AMP for Endpoints)?",
        "options": [
          "Traditional antivirus",
          "Advanced endpoint protection with malware detection, EDR, and XDR integration",
          "Type of router",
          "DNS server"
        ],
        "correct": 1,
        "explanation": "Secure Endpoint offers real-time protection, threat detection, and response on endpoints.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Cisco Secure Email' (formerly ESA)?",
        "options": [
          "Email client",
          "Secure email gateway with spam, phishing, malware protection, and DLP",
          "Type of switch",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "Secure Email is Cisco's secure email gateway with advanced protection against email threats.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Cisco Secure Web Appliance' (formerly WSA)?",
        "options": [
          "Simple proxy",
          "Secure Web Gateway with URL filtering, malware scanning, DLP, and application control",
          "Type of router",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "Secure Web Appliance protects web traffic with URL filtering, antimalware, and usage policies.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Cisco Meraki'?",
        "options": [
          "Traditional Cisco solution",
          "Cloud-managed networking platform with unified dashboard, zero-touch provisioning, and analytics",
          "Type of firewall",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "Meraki offers switches, APs, firewalls, and cameras 100% cloud-managed with a simple yet powerful dashboard.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the function of 'Cisco Intersight'?",
        "options": [
          "Network management",
          "Hybrid infrastructure management platform (data center, edge, cloud) with automation",
          "Type of switch",
          "DHCP server"
        ],
        "correct": 1,
        "explanation": "Intersight provides unified management, automation, and insights for Cisco UCS, HyperFlex, and more infrastructure.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco ACI' (Application Centric Infrastructure)?",
        "options": [
          "Traditional networking",
          "SDN solution for data centers with leaf-spine fabric, application-based policies, and automation",
          "Type of switch",
          "Backup protocol"
        ],
        "correct": 1,
        "explanation": "ACI is Cisco's SDN solution for data centers with VXLAN fabric, APIC controller, and application-centric policies.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco Nexus Dashboard'?",
        "options": [
          "Simple switch",
          "Management and automation platform for data center with Nexus Dashboard and services",
          "Type of router",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "Nexus Dashboard provides unified management, automation, and services for ACI and NX-OS fabrics.",
        "difficulty": "Hard"
      },
      {
        "question": "What is 'Cisco HyperFlex'?",
        "options": [
          "Traditional server",
          "Hyperconverged infrastructure (HCI) solution with integrated storage, compute, and networking",
          "Type of switch",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "HyperFlex is Cisco's HCI solution with distributed storage, high availability, and simplified management.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco UCS' (Unified Computing System)?",
        "options": [
          "Standalone server",
          "Server platform (blade/rack) with unified management, stateless computing, and automation",
          "Type of switch",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "UCS integrates compute, networking, and storage with centralized management and stateless service profiles.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco Intersight Workload Optimizer'?",
        "options": [
          "Backup tool",
          "AI-powered workload optimization solution for placement, scaling, and cost in hybrid environments",
          "Type of switch",
          "Routing protocol"
        ],
        "correct": 1,
        "explanation": "Intersight Workload Optimizer uses AI to optimize workload placement, scaling, and costs across hybrid clouds.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco AppDynamics'?",
        "options": [
          "Network monitoring",
          "Application observability platform with APM, business transactions, and analytics",
          "Type of switch",
          "Firewall"
        ],
        "correct": 1,
        "explanation": "AppDynamics provides full-stack visibility into application performance, from code to user experience.",
        "difficulty": "Medium"
      },
      {
        "question": "What is 'Cisco Full-Stack Observability'?",
        "options": [
          "Traditional monitoring",
          "Unified approach that correlates data from network, applications, infrastructure, and user experience",
          "Type of router",
          "Backup method"
        ],
        "correct": 1,
        "explanation": "Full-Stack Observability correlates telemetry across the entire stack for proactive troubleshooting and optimization.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the function of 'Cisco ThousandEyes' in SD-WAN?",
        "options": [
          "Firewall",
          "Internet and application performance monitoring to optimize SD-WAN decisions",
          "Type of switch",
          "DNS server"
        ],
        "correct": 1,
        "explanation": "ThousandEyes provides insights into internet and application performance so SD-WAN can make intelligent decisions.",
        "difficulty": "Medium"
      },
      {
        "question": "In OSPF, LSA type 1 describes:",
        "options": [
          "External routes",
          "The router and its intra-area links",
          "The area summary",
          "An ASBR in another AS"
        ],
        "correct": 1,
        "explanation": "Type 1 Router LSA describes the router's links in the area.",
        "difficulty": "Medium"
      },
      {
        "question": "OSPF LSA type 3 is generated by:",
        "options": [
          "All routers",
          "The ABR, as an inter-area summary",
          "The ASBR only",
          "The Ethernet DR"
        ],
        "correct": 1,
        "explanation": "Type 3 Network Summary is created by the ABR.",
        "difficulty": "Medium"
      },
      {
        "question": "OSPF LSA type 5 represents:",
        "options": [
          "Intra-area links",
          "External routes injected into OSPF",
          "NSSA summary",
          "IPv6 only"
        ],
        "correct": 1,
        "explanation": "Type 5 AS-External comes from the ASBR (NSSA uses type 7).",
        "difficulty": "Medium"
      },
      {
        "question": "An OSPF stub area blocks which LSAs?",
        "options": [
          "Type 1 and 2",
          "Type 5 (externals); the ABR injects a default",
          "All type 3 LSAs",
          "Hello packets"
        ],
        "correct": 1,
        "explanation": "Stub does not receive type 5; the ABR advertises 0.0.0.0.",
        "difficulty": "Hard"
      },
      {
        "question": "The EIGRP successor is:",
        "options": [
          "The backup route in the topology table",
          "The primary route in the routing table (lowest FD)",
          "The neighbor with the worst metric",
          "An LSA type 1"
        ],
        "correct": 1,
        "explanation": "Successor is the best route (feasible distance).",
        "difficulty": "Medium"
      },
      {
        "question": "An EIGRP feasible successor requires:",
        "options": [
          "AD > successor FD",
          "Advertised Distance < successor FD (feasibility condition)",
          "The same BGP AS",
          "LSA type 5"
        ],
        "correct": 1,
        "explanation": "The candidate's AD must be less than the current route's FD.",
        "difficulty": "Hard"
      },
      {
        "question": "BGP path selection: after Weight and Local Pref, a common next criterion is:",
        "options": [
          "MED",
          "Shortest AS-Path",
          "Oldest path",
          "Router-ID"
        ],
        "correct": 1,
        "explanation": "Typical order: Weight, Local Pref, locally originated, shortest AS-Path...",
        "difficulty": "Hard"
      },
      {
        "question": "BGP Weight is:",
        "options": [
          "An IETF transitive attribute",
          "Cisco-proprietary, local to the router, higher is better (default 32768 for originated)",
          "The same as MED",
          "Sent to eBGP peers"
        ],
        "correct": 1,
        "explanation": "Weight never leaves the router; higher wins.",
        "difficulty": "Hard"
      },
      {
        "question": "In iBGP, a higher Local Preference means:",
        "options": [
          "A worse path",
          "Preferred for exiting the AS",
          "Used on eBGP only",
          "It replaces AS-Path"
        ],
        "correct": 1,
        "explanation": "High Local Pref chooses the AS exit point.",
        "difficulty": "Medium"
      },
      {
        "question": "Default eBGP session TTL is:",
        "options": [
          "255",
          "1",
          "64",
          "15"
        ],
        "correct": 1,
        "explanation": "eBGP assumes directly connected peers (TTL 1) unless ebgp-multihop.",
        "difficulty": "Medium"
      },
      {
        "question": "iBGP does not re-advertise iBGP prefixes to other iBGP peers. The classic fix is:",
        "options": [
          "AS-Path prepend",
          "iBGP full mesh or route reflectors / confederations",
          "OSPF default",
          "LSA type 5"
        ],
        "correct": 1,
        "explanation": "iBGP split horizon needs a full mesh or RRs.",
        "difficulty": "Hard"
      },
      {
        "question": "A route-reflector client receives:",
        "options": [
          "eBGP routes only",
          "Routes reflected by the RR, without a client full mesh",
          "Type 3 LSAs only",
          "Inverted MED"
        ],
        "correct": 1,
        "explanation": "The RR relaxes the iBGP mesh among clients.",
        "difficulty": "Hard"
      },
      {
        "question": "VRF-Lite is used to:",
        "options": [
          "Encrypt the control plane",
          "Separate forwarding tables on the same PE/CE without requiring MPLS",
          "Replace STP",
          "IPv6 only"
        ],
        "correct": 1,
        "explanation": "VRFs isolate routing/forwarding; Lite means no MP-BGP/MPLS.",
        "difficulty": "Hard"
      },
      {
        "question": "In MPLS label stacking, the top label is:",
        "options": [
          "The L3VPN service label at the bottom",
          "The one the LSR uses for the next hop (transport/IGP)",
          "The CE MAC",
          "DSCP"
        ],
        "correct": 1,
        "explanation": "Top label = transport; bottom (S=1) = VPN service.",
        "difficulty": "Hard"
      },
      {
        "question": "LDP distributes:",
        "options": [
          "BGP prefixes",
          "MPLS labels for IGP prefixes",
          "VLANs",
          "PKI certificates"
        ],
        "correct": 1,
        "explanation": "LDP maps FECs (prefixes) to labels.",
        "difficulty": "Medium"
      },
      {
        "question": "BFD (Bidirectional Forwarding Detection) is used to:",
        "options": [
          "Replace OSPF",
          "Detect forwarding failures in milliseconds, independent of the IGP",
          "Elect the DR",
          "Encrypt GRE"
        ],
        "correct": 1,
        "explanation": "BFD gives OSPF/EIGRP/BGP fast failure detection.",
        "difficulty": "Medium"
      },
      {
        "question": "IP SLA on a Cisco router can:",
        "options": [
          "Compile IOS",
          "Measure latency/jitter/availability and react with tracking",
          "Replace AAA",
          "Create VLANs"
        ],
        "correct": 1,
        "explanation": "SLA probes plus object tracking for PBR/HSRP/static routes.",
        "difficulty": "Medium"
      },
      {
        "question": "PBR (Policy-Based Routing) steers traffic based on:",
        "options": [
          "The RIB only",
          "Route-maps (ACL, DSCP, length) rather than destination alone",
          "The STP root",
          "LLDP"
        ],
        "correct": 1,
        "explanation": "PBR sets ip next-hop from policy matches.",
        "difficulty": "Medium"
      },
      {
        "question": "StackWise / StackWise Virtual aggregates:",
        "options": [
          "Wireless APs",
          "Switches into one logical control plane",
          "BGP sessions",
          "MPLS VRFs"
        ],
        "correct": 1,
        "explanation": "The stack is one logical switch with SSO/NSF.",
        "difficulty": "Medium"
      },
      {
        "question": "vPC (Nexus) allows:",
        "options": [
          "Two switches to appear as one to STP/LACP without being a single supervisor",
          "Replacing OSPF",
          "FCoE only",
          "Disabling BPDU Guard"
        ],
        "correct": 0,
        "explanation": "vPC is a multi-chassis port-channel without a full stack.",
        "difficulty": "Hard"
      },
      {
        "question": "SD-Access control plane typically uses:",
        "options": [
          "STP only",
          "LISP to map identity (EID) to location (RLOC)",
          "RIP v1",
          "VTP v3 only"
        ],
        "correct": 1,
        "explanation": "LISP + VXLAN + ISE in the SDA fabric.",
        "difficulty": "Hard"
      },
      {
        "question": "A VXLAN VNI identifies:",
        "options": [
          "A local VLAN only",
          "The overlay (L2/L3) segment in the fabric",
          "The BGP ASN",
          "DSCP"
        ],
        "correct": 1,
        "explanation": "VNI is the VXLAN overlay identifier.",
        "difficulty": "Medium"
      },
      {
        "question": "ISE at the access layer uses 802.1X to:",
        "options": [
          "Encrypt OSPF",
          "Authenticate user/device and apply dACL/SGT",
          "Elect the STP root",
          "Translate NAT64"
        ],
        "correct": 1,
        "explanation": "ISE is the RADIUS policy engine for TrustSec/SDA.",
        "difficulty": "Medium"
      },
      {
        "question": "An SGT (Scalable Group Tag) in TrustSec is:",
        "options": [
          "An OSPF number",
          "A group tag for identity-based policy",
          "A native VLAN",
          "A BGP community"
        ],
        "correct": 1,
        "explanation": "SGTs classify users; SGACLs filter between groups.",
        "difficulty": "Hard"
      },
      {
        "question": "NETCONF typically carries YANG over:",
        "options": [
          "Telnet",
          "SSH (port 830)",
          "HTTP only",
          "SNMP v2"
        ],
        "correct": 1,
        "explanation": "NETCONF/SSH on 830; RESTCONF uses HTTPS.",
        "difficulty": "Medium"
      },
      {
        "question": "A YANG model describes:",
        "options": [
          "STP topology",
          "Structure and constraints of config/state data",
          "MAC ACLs only",
          "Spanning tree"
        ],
        "correct": 1,
        "explanation": "YANG is the modeling language for NETCONF/RESTCONF.",
        "difficulty": "Medium"
      },
      {
        "question": "DMVPN Phase 3 allows:",
        "options": [
          "Hub-and-spoke only, no shortcuts",
          "NHRP redirect/shortcut for direct spoke-to-spoke",
          "IPsec transport without GRE only",
          "Required OSPFv2"
        ],
        "correct": 1,
        "explanation": "Phase 3: NHRP redirect builds a direct spoke-to-spoke tunnel.",
        "difficulty": "Hard"
      },
      {
        "question": "GETVPN (GDOI) is designed for:",
        "options": [
          "The public Internet with NAT",
          "Private WAN (MPLS) with group IPsec while preserving original headers",
          "Wi-Fi only",
          "IPv6 link-local"
        ],
        "correct": 1,
        "explanation": "GETVPN uses a key server; IPs stay the same, good on MPLS.",
        "difficulty": "Hard"
      },
      {
        "question": "FlexVPN on IOS-XE is based on:",
        "options": [
          "L2TP only",
          "IKEv2 (with virtual templates)",
          "Aggressive IKEv1 only",
          "PPTP"
        ],
        "correct": 1,
        "explanation": "FlexVPN unifies DMVPN/EasyVPN/RA on IKEv2.",
        "difficulty": "Hard"
      },
      {
        "question": "CoPP (Control Plane Policing) protects:",
        "options": [
          "The user data plane",
          "The control-plane CPU by rate-limiting traffic to processes (e.g. SSH, routing)",
          "The CAM only",
          "PoE"
        ],
        "correct": 1,
        "explanation": "CoPP applies QoS/ACL to destined-to-box traffic.",
        "difficulty": "Hard"
      },
      {
        "question": "uRPF (unicast RPF) mitigates:",
        "options": [
          "DHCP starvation",
          "Source IP spoofing by checking the source would be routable on the interface",
          "STP loops",
          "BFD drops"
        ],
        "correct": 1,
        "explanation": "Strict/loose uRPF drops sources inconsistent with the RIB.",
        "difficulty": "Hard"
      },
      {
        "question": "PIM Sparse Mode uses an RP for:",
        "options": [
          "Electing the OSPF DR",
          "The initial shared tree (*,G) before the SPT (S,G)",
          "NAT translation",
          "DSCP marking"
        ],
        "correct": 1,
        "explanation": "PIM-SM: join the RP, then it may switch to the shortest-path tree.",
        "difficulty": "Hard"
      },
      {
        "question": "Anycast RP (MSDP) solves:",
        "options": [
          "A single RP with no redundancy",
          "Multicast RP redundancy/load-share across boxes or domains",
          "IPv6 ND only",
          "VTP pruning"
        ],
        "correct": 1,
        "explanation": "Several RPs share an IP; MSDP syncs source-active state.",
        "difficulty": "Hard"
      },
      {
        "question": "QoS LLQ (Low Latency Queue) is typically for:",
        "options": [
          "Bulk backup",
          "Real-time voice/video (priority queue)",
          "Best-effort HTTP",
          "Routing updates only"
        ],
        "correct": 1,
        "explanation": "The priority command is LLQ, with a policer so it cannot starve the link.",
        "difficulty": "Medium"
      },
      {
        "question": "WRED avoids:",
        "options": [
          "BGP blackholing",
          "Global tail drop by dropping probabilistically by DSCP before the queue is full",
          "RIP loops",
          "NTP failure"
        ],
        "correct": 1,
        "explanation": "WRED is weighted early drop; it protects TCP flows.",
        "difficulty": "Hard"
      }
    ]
  }
};
