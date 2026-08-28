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
      },
      {
        "question": "What is the recommended maximum length of a copper twisted-pair (UTP) Ethernet cable?",
        "options": [
          "10 meters",
          "100 meters",
          "500 meters",
          "2 kilometers"
        ],
        "correct": 1,
        "explanation": "Ethernet standards limit a copper channel to 100 m (typically 90 m horizontal plus 10 m of patch cords) so attenuation and round-trip timing stay within spec. Longer runs need fiber or an intermediate switch.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the practical difference between T568A and T568B pinouts?",
        "options": [
          "T568A is only for fiber",
          "The orange and green pairs swap positions on pins 1-2 and 3-6",
          "T568B does not work at Gigabit speeds",
          "There is no electrical difference of any kind"
        ],
        "correct": 1,
        "explanation": "Both standards use the same four pairs; only the orange and green pairs are swapped. A cable terminated T568A on one end and T568B on the other is a crossover. T568B is the more common commercial choice in the US.",
        "difficulty": "Medium"
      },
      {
        "question": "When should single-mode fiber be preferred over multimode?",
        "options": [
          "Always in short office LANs",
          "For long-distance campus or WAN links using long-wavelength lasers",
          "Only when delivering PoE",
          "Never; multimode works at any distance"
        ],
        "correct": 1,
        "explanation": "Single-mode has a ~9 µm core and is driven by lasers, so chromatic dispersion stays low over tens of kilometers. Multimode (50/62.5 µm) is cheaper for short runs of a few hundred meters but is not the right choice for long-haul links.",
        "difficulty": "Medium"
      },
      {
        "question": "What does Auto-MDIX do on an Ethernet port?",
        "options": [
          "Negotiates PoE power class",
          "Internally detects and corrects straight-through versus crossover cabling",
          "Disables Spanning Tree",
          "Assigns an IP address"
        ],
        "correct": 1,
        "explanation": "Auto-MDIX electronically crosses TX/RX pairs when needed, so a straight-through cable works for switch-to-switch, PC-to-PC, or switch-to-PC. On modern gear it is typically enabled together with speed/duplex autonegotiation.",
        "difficulty": "Easy"
      },
      {
        "question": "A PC without DHCP shows the address 169.254.23.10. What does that indicate?",
        "options": [
          "The default gateway was configured",
          "The host self-assigned an APIPA address because it did not receive a DHCP lease",
          "It is a valid public Internet address",
          "The cable is in loopback"
        ],
        "correct": 1,
        "explanation": "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. The OS picks an address there when DHCP fails, which allows limited local communication but no forwarding to other networks.",
        "difficulty": "Medium"
      },
      {
        "question": "How many usable host addresses are in an IPv4 /26 subnet?",
        "options": [
          "64",
          "62",
          "30",
          "126"
        ],
        "correct": 1,
        "explanation": "A /26 mask leaves 6 host bits: 2^6 = 64 total addresses. Subtract the network and broadcast addresses and 62 usable hosts remain.",
        "difficulty": "Medium"
      },
      {
        "question": "Which prefix identifies an IPv6 link-local address?",
        "options": [
          "2000::/3",
          "FE80::/10",
          "FF00::/8",
          "::1/128"
        ],
        "correct": 1,
        "explanation": "Link-local addresses start with FE80::/10 and are required on every IPv6 interface. They are used for NDP and same-link communication; routers do not forward them to other links.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the IPv6 loopback address?",
        "options": [
          "127.0.0.1",
          "::1",
          "FE80::1",
          "::"
        ],
        "correct": 1,
        "explanation": "::1/128 is the IPv6 loopback, equivalent to 127.0.0.1 in IPv4. Packets to ::1 never leave the host and are used to test the local IPv6 stack.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the primary function of ICMP?",
        "options": [
          "Assign IP addresses",
          "Carry network-layer control and diagnostic messages (echo, unreachable, and similar)",
          "Encrypt web sessions",
          "Negotiate VLANs"
        ],
        "correct": 1,
        "explanation": "ICMP (and ICMPv6) carries Layer 3 signaling: echo request/reply (ping), destination unreachable, time exceeded (used by traceroute), redirects, and more. It does not assign addresses or encrypt application data.",
        "difficulty": "Easy"
      },
      {
        "question": "How does traceroute discover each hop to the destination?",
        "options": [
          "It queries reverse DNS for every router",
          "It sends probes with increasing TTL and reads ICMP Time Exceeded replies",
          "It uses ARP at every hop across the Internet",
          "It opens a TCP port 80 session on each router"
        ],
        "correct": 1,
        "explanation": "Each probe starts with TTL 1, 2, 3, and so on. When TTL hits zero the router drops the packet and returns ICMP Time Exceeded; that source address identifies the hop. The destination typically answers with port unreachable or echo reply.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the default port used by DNS?",
        "options": [
          "22",
          "53",
          "67",
          "80"
        ],
        "correct": 1,
        "explanation": "DNS uses port 53/UDP for typical queries and 53/TCP for zone transfers and large responses. Mixing it up with 67 (DHCP server), 22 (SSH), or 80 (HTTP) is a common troubleshooting mistake.",
        "difficulty": "Easy"
      },
      {
        "question": "What defines a collision domain in Ethernet?",
        "options": [
          "Every device that shares the same IP address",
          "The set of ports or media where one transmission can collide with another",
          "An entire VLAN",
          "Only the Wi-Fi segment"
        ],
        "correct": 1,
        "explanation": "On a hub, all ports share one collision domain. A switch creates a collision domain per port, and full duplex removes collisions altogether. That is different from a broadcast domain, which typically matches a VLAN.",
        "difficulty": "Medium"
      },
      {
        "question": "What is CSMA/CD?",
        "options": [
          "A routing protocol",
          "A half-duplex Ethernet media-access method: listen, transmit, and detect collisions",
          "A wireless encryption suite",
          "A type of optical fiber"
        ],
        "correct": 1,
        "explanation": "Carrier Sense Multiple Access with Collision Detection was used on shared Ethernet (hubs, half duplex). Switched full-duplex networks no longer need CSMA/CD because each side transmits on separate pairs or channels.",
        "difficulty": "Medium"
      },
      {
        "question": "What are the three RFC 1918 private IPv4 address ranges?",
        "options": [
          "1.0.0.0/8, 2.0.0.0/8, and 3.0.0.0/8",
          "10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16",
          "127.0.0.0/8, 169.254.0.0/16, and 224.0.0.0/4",
          "8.8.8.0/24, 1.1.1.0/24, and 9.9.9.0/24"
        ],
        "correct": 1,
        "explanation": "RFC 1918 reserves 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31), and 192.168.0.0/16 for internal use. Those prefixes are not forwarded on the public Internet; outbound access uses NAT or a proxy.",
        "difficulty": "Medium"
      },
      {
        "question": "What does CIDR stand for?",
        "options": [
          "Cisco Internal Device Register",
          "Classless Inter-Domain Routing — prefixes with variable masks instead of rigid A/B/C classes",
          "A type of coaxial cable",
          "A wireless authentication protocol"
        ],
        "correct": 1,
        "explanation": "CIDR dropped fixed classes (/8, /16, /24) and allows prefixes such as /22 or /13. That makes addressing and route summarization on the Internet and in LANs far more efficient.",
        "difficulty": "Medium"
      },
      {
        "question": "What is IPv4 address 127.0.0.1 used for?",
        "options": [
          "The Internet default gateway",
          "The host's own loopback, to test the local TCP/IP stack",
          "The LAN broadcast address",
          "The first APIPA address"
        ],
        "correct": 1,
        "explanation": "The entire 127.0.0.0/8 range is loopback; 127.0.0.1 is the address people actually use. Pinging it confirms the host IP stack works, regardless of cabling or the NIC.",
        "difficulty": "Easy"
      },
      {
        "question": "Which statement correctly describes unicast, broadcast, and multicast?",
        "options": [
          "Unicast goes to everyone; broadcast goes to one host",
          "Unicast: one destination; broadcast: everyone in the domain; multicast: a subscribed group",
          "Multicast replaces ARP",
          "Broadcast exists only in IPv6"
        ],
        "correct": 1,
        "explanation": "Unicast delivers to a single address. Broadcast (255.255.255.255 or the subnet broadcast) reaches every node in the broadcast domain. Multicast (224.0.0.0/4 or FF00::/8) is received only by hosts that joined the group.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the advantage of STP (Shielded Twisted Pair) over UTP?",
        "options": [
          "It always supports 100 km runs",
          "The foil or braid reduces electromagnetic interference (EMI)",
          "It is mandatory for Fast Ethernet",
          "It does not use an RJ-45 connector"
        ],
        "correct": 1,
        "explanation": "STP adds shielding that rejects EMI in industrial spaces, near motors, or next to elevators. It must be grounded correctly or the shield can make noise worse. UTP is sufficient in most offices.",
        "difficulty": "Easy"
      },
      {
        "question": "Approximately how much power does PoE+ (IEEE 802.3at) deliver at the PD?",
        "options": [
          "About 4 W",
          "About 15 W for 802.3af versus about 25–30 W for 802.3at",
          "100 W, but only on Fast Ethernet",
          "PoE+ does not deliver power"
        ],
        "correct": 1,
        "explanation": "802.3af (PoE) supplies up to 15.4 W at the PSE (~12.95 W at the PD). 802.3at (PoE+) raises that to 30 W at the PSE (~25.5 W at the PD), enough for many APs and PTZ cameras. 802.3bt (PoE++) goes higher still.",
        "difficulty": "Medium"
      },
      {
        "question": "Which Cisco command gives a quick summary of the IP status of every interface?",
        "options": [
          "show vlan brief",
          "show ip interface brief",
          "show mac address-table",
          "show spanning-tree"
        ],
        "correct": 1,
        "explanation": "show ip interface brief lists each interface with its IP, line status (up/down), and protocol status (up/down). It is the first Layer 3 troubleshooting command on a Cisco box.",
        "difficulty": "Easy"
      },
      {
        "question": "An Ethernet link is up but shows many CRC errors and poor performance. What is the most likely cause?",
        "options": [
          "An ACL blocking ICMP",
          "A duplex mismatch (one side half, the other full) or a damaged cable",
          "Missing DNS",
          "A different native VLAN on the PC"
        ],
        "correct": 1,
        "explanation": "A duplex mismatch causes late collisions, CRCs, and terrible throughput because one side transmits while the other is not expecting it. Bad cable, dirty SFPs, or EMI also produce CRCs. DNS or ACLs do not increment CRC counters.",
        "difficulty": "Medium"
      },
      {
        "question": "Which OSI layer deals with bits, voltages, connectors, and physical media?",
        "options": [
          "Layer 3 — Network",
          "Layer 1 — Physical",
          "Layer 4 — Transport",
          "Layer 7 — Application"
        ],
        "correct": 1,
        "explanation": "The Physical layer defines the medium (copper, fiber, radio), connectors, electrical or optical signaling, and bit timing. Cable, SFP, and PoE power problems are almost always Layer 1.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the correct TCP three-way handshake sequence?",
        "options": [
          "ACK, SYN, FIN",
          "SYN, SYN-ACK, ACK",
          "FIN, ACK, SYN",
          "RST, SYN, ACK"
        ],
        "correct": 1,
        "explanation": "The client sends SYN, the server replies SYN-ACK, and the client completes the handshake with ACK. Data transfer starts only after that. FIN begins teardown; RST aborts the session.",
        "difficulty": "Medium"
      },
      {
        "question": "Why is 'enable secret' preferred over 'enable password' in IOS?",
        "options": [
          "enable password uses AES-256 by default",
          "enable secret stores a one-way hash (MD5/type 5 or stronger); enable password is weak clear text or reversible type 7",
          "They are synonyms",
          "enable secret works only with Telnet"
        ],
        "correct": 1,
        "explanation": "enable password is legacy and may appear in clear text or type 7 (reversible). enable secret stores a one-way hash. Current IOS can use type 8/9 (scrypt/PBKDF2) with 'enable algorithm-type'.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the default VLAN on access ports of an unconfigured Cisco switch?",
        "options": [
          "VLAN 100",
          "VLAN 1",
          "VLAN 999",
          "VLAN 4094"
        ],
        "correct": 1,
        "explanation": "By default every port belongs to VLAN 1, which is also the native VLAN on 802.1Q trunks. Best practice moves user and management traffic off VLAN 1 to reduce hopping risk and mixed control traffic.",
        "difficulty": "Easy"
      },
      {
        "question": "What characterizes an access port on a switch?",
        "options": [
          "It carries every VLAN with 802.1Q tags",
          "It belongs to a single VLAN and sends untagged traffic to the host",
          "It works only when connected to routers",
          "It disables MAC learning"
        ],
        "correct": 1,
        "explanation": "An access port maps to one VLAN (switchport access vlan X). Frames toward the PC are untagged. Trunks, by contrast, tag VLANs for the neighbor (except the native VLAN).",
        "difficulty": "Medium"
      },
      {
        "question": "What is LLDP?",
        "options": [
          "A Cisco routing protocol",
          "An open IEEE 802.1AB protocol that advertises identity and capabilities to neighbors",
          "A type of ACL",
          "A wireless cipher"
        ],
        "correct": 1,
        "explanation": "LLDP is the open equivalent of CDP. It advertises chassis ID, port ID, hostname, and capabilities (including LLDP-MED for phones). It is the right choice in mixed-vendor plants where CDP is absent.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the classic Ethernet MTU (payload) in bytes?",
        "options": [
          "576",
          "1500",
          "9000",
          "64"
        ],
        "correct": 1,
        "explanation": "The standard Ethernet MTU is 1500 bytes of IP payload. Frames under 64 bytes are runts; jumbo frames (~9000) need end-to-end support. 576 is the IPv4 minimum reassembly MTU, not Ethernet.",
        "difficulty": "Easy"
      },
      {
        "question": "Why do copper cables routed next to electric motors fail more often?",
        "options": [
          "Copper melts at 5 V",
          "Electromagnetic interference (EMI) induces noise that raises CRCs and retransmissions",
          "Motors consume every MAC address",
          "Spanning Tree stops working"
        ],
        "correct": 1,
        "explanation": "Electromagnetic fields induce voltage on the pairs. That corrupts bits, increases CRC/input errors, and can drop the link. Mitigation is separation, shielded cable, fiber (immune to EMI), and proper grounding.",
        "difficulty": "Easy"
      },
      {
        "question": "How many bits are in an IEEE MAC address and how is it usually written?",
        "options": [
          "32 bits in dotted decimal",
          "48 bits in hexadecimal, typically six octets (for example 00:1A:2B:3C:4D:5E)",
          "128 bits like IPv6",
          "16 bits in binary"
        ],
        "correct": 1,
        "explanation": "The classic MAC is 48 bits: a 24-bit OUI (vendor) plus a 24-bit serial. It is written in hex. 64-bit MACs exist in some IEEE contexts, but Ethernet uses 48 bits.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the size of an IPv4 address and an IPv6 address?",
        "options": [
          "IPv4 16 bits, IPv6 32 bits",
          "IPv4 32 bits, IPv6 128 bits",
          "Both are 64 bits",
          "IPv4 128 bits, IPv6 32 bits"
        ],
        "correct": 1,
        "explanation": "IPv4 uses 32 bits (dotted decimal). IPv6 uses 128 bits (eight hexadecimal groups). That space is what enables SLAAC, multiple addresses per interface, and a practical end to public IPv4 exhaustion.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the default subnet mask of a Class A network?",
        "options": [
          "255.255.255.0",
          "255.0.0.0",
          "255.255.0.0",
          "255.255.255.255"
        ],
        "correct": 1,
        "explanation": "Class A (1.0.0.0–126.0.0.0) uses /8, or 255.0.0.0. Class B is /16 and Class C is /24. Modern networks think in CIDR, but classful masks still show up on exams and legacy gear.",
        "difficulty": "Easy"
      },
      {
        "question": "Which TCP port does classic SMTP use for mail transfer between servers?",
        "options": [
          "110",
          "25",
          "143",
          "443"
        ],
        "correct": 1,
        "explanation": "SMTP uses port 25 between MTAs. Authenticated client submission is usually 587 (submission) or 465 (SMTPS). 110 is POP3, 143 is IMAP, and 443 is HTTPS.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the correct order of the DHCP DORA process?",
        "options": [
          "Request, Offer, Discover, Ack",
          "Discover, Offer, Request, Ack",
          "Ack, Discover, Offer, Request",
          "Offer, Ack, Discover, Request"
        ],
        "correct": 1,
        "explanation": "The client broadcasts DHCPDISCOVER; the server answers with DHCPOFFER; the client commits with DHCPREQUEST; the server confirms with DHCPACK and the lease becomes active. Without that exchange the host falls back to APIPA.",
        "difficulty": "Medium"
      },
      {
        "question": "Why does Wi-Fi use CSMA/CA instead of CSMA/CD?",
        "options": [
          "Because radio is inherently full duplex",
          "Stations cannot transmit and detect a collision at the same time on one channel, so they avoid collisions (NAV, RTS/CTS, backoff)",
          "CSMA/CD is IPv6-only",
          "Only because IEEE banned CSMA/CD for no reason"
        ],
        "correct": 1,
        "explanation": "On a shared half-duplex medium the sender's own radio is saturated, so it cannot 'hear a collision' the way shared copper can. 802.11 uses collision avoidance: carrier sense, IFS gaps, random backoff, and optionally RTS/CTS.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a typical difference between 2.4 GHz and 5 GHz Wi-Fi?",
        "options": [
          "5 GHz always goes through walls better",
          "2.4 GHz travels farther and handles obstacles better, but has fewer non-overlapping channels and more interference",
          "2.4 GHz exists only in 802.11ac",
          "Range is identical"
        ],
        "correct": 1,
        "explanation": "Lower frequencies penetrate better and reach farther; 2.4 GHz has only three non-overlapping channels (1, 6, 11) and suffers Bluetooth/microwave noise. 5 GHz (and 6 GHz) offers more spectrum and throughput at shorter range.",
        "difficulty": "Medium"
      },
      {
        "question": "IEEE 802.11ax is commercially known as which Wi-Fi generation?",
        "options": [
          "Wi-Fi 4",
          "Wi-Fi 6",
          "Wi-Fi 5",
          "Bluetooth 5"
        ],
        "correct": 1,
        "explanation": "802.11ax is Wi-Fi 6 (and 6E in the 6 GHz band). It adds OFDMA, TWT, and 1024-QAM for better efficiency in dense environments. Wi-Fi 5 is 802.11ac; Wi-Fi 4 is 802.11n.",
        "difficulty": "Medium"
      },
      {
        "question": "When connectivity fails, what should you check first in a layered approach?",
        "options": [
          "BGP policy",
          "Layer 1: cable, LEDs, SFP, power, and physical interface state",
          "QoS policies",
          "802.1X certificates"
        ],
        "correct": 1,
        "explanation": "Without a physical signal (dark LED, broken cable, missing SFP, administratively down interface) nothing above it works. Confirming Layer 1 avoids hours of pointless OSPF or DNS debugging.",
        "difficulty": "Easy"
      },
      {
        "question": "In which scenario is optical fiber clearly preferable to copper UTP?",
        "options": [
          "A 1-meter patch from PC to switch",
          "A long run, a between-building link, or a high-EMI environment where copper would exceed 100 m or pick up noise",
          "PoE power for a desk phone",
          "A router console connection"
        ],
        "correct": 1,
        "explanation": "Fiber ignores EMI, does not conduct electricity (avoiding building-to-building ground loops), and spans kilometers. Copper remains right for PoE and short runs up to 100 m. The console uses serial/USB, not Ethernet.",
        "difficulty": "Easy"
      },
      {
        "question": "Which command displays the currently active configuration in RAM on a Cisco device?",
        "options": [
          "show startup-config",
          "show running-config",
          "show flash:",
          "show version only"
        ],
        "correct": 1,
        "explanation": "running-config is the RAM copy the device is actually using. startup-config lives in NVRAM and is read at boot. Changes to running-config are lost on reload unless you save them with copy run start.",
        "difficulty": "Easy"
      },
      {
        "question": "How do you tell User EXEC from Privilege EXEC in IOS?",
        "options": [
          "User uses '#', Privilege uses '>'",
          "User EXEC shows '>' and limited commands; Privilege EXEC shows '#' after 'enable' and allows advanced show/debug and configuration",
          "There is no difference",
          "Privilege EXEC exists only on firewalls"
        ],
        "correct": 1,
        "explanation": "The '>' prompt is User EXEC (ping, some shows). The enable command (with the secret) raises you to '#' Privilege EXEC, from which you enter configuration terminal. Splitting these levels is the basis of CLI access control.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the default HTTPS port and how does it differ from HTTP?",
        "options": [
          "80, and it uses Telnet",
          "443, and it encrypts the session with TLS; HTTP on 80 is clear text",
          "22, and it uses SSH",
          "53, and it uses DNSSEC"
        ],
        "correct": 1,
        "explanation": "HTTPS wraps HTTP in TLS on port 443, protecting confidentiality and integrity. HTTP on 80 is unencrypted — credentials and cookies travel in the clear. Device management should prefer HTTPS/SSH over HTTP/Telnet.",
        "difficulty": "Easy"
      },
      {
        "question": "In subnet 192.168.10.0/24, what is the broadcast address?",
        "options": [
          "192.168.10.0",
          "192.168.10.255",
          "192.168.10.1",
          "192.168.255.255"
        ],
        "correct": 1,
        "explanation": "With /24, all 8 host bits set to 1 yield .255. .0 is the network address; .1–.254 are hosts. Traffic to 192.168.10.255 is delivered to every node in that broadcast domain.",
        "difficulty": "Medium"
      },
      {
        "question": "Compared with Cat5e, Cat6 cabling is mainly intended for what?",
        "options": [
          "Serial console only",
          "Better crosstalk immunity and 10GBASE-T support over short runs (typically up to 55 m)",
          "Replacing all metro fiber",
          "Delivering 100 W without PoE"
        ],
        "correct": 1,
        "explanation": "Cat6 has tighter crosstalk specs through 250 MHz and supports 10GBASE-T on short channels. Cat5e is fine for 1 Gb/s at 100 m. Cat6A extends 10 Gb/s to a full 100 m.",
        "difficulty": "Medium"
      },
      {
        "question": "Which optical connector is most common on modern SFP/SFP+ transceivers?",
        "options": [
          "Coaxial BNC",
          "LC (Lucent Connector), small and latched",
          "Serial DB-9",
          "Telephone RJ-11"
        ],
        "correct": 1,
        "explanation": "SFPs almost always use duplex LC. SC is older and larger (still seen on GBICs and some panels). ST is a legacy bayonet. BNC is coaxial; DB-9 is a serial console; RJ-11 is analog phone.",
        "difficulty": "Medium"
      },
      {
        "question": "A user can ping the server by IP but the browser cannot open the site by name. What is the most likely cause?",
        "options": [
          "The cable is broken",
          "DNS failure (missing, wrong, or filtered DNS server)",
          "The switch has no PoE",
          "STP blocked ICMP"
        ],
        "correct": 1,
        "explanation": "A successful IP ping proves Layers 1–3 to the server. Using the name requires DNS (port 53). Checking ipconfig/ifconfig, the configured DNS server, and nslookup/dig isolates the issue in seconds.",
        "difficulty": "Medium"
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
          "Nenhuma; o snooping nao usa trust",
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
        "explanation": "DAI intercepta ARP em portas untrusted e compara IP/MAC com a base do snooping. ARP spoofing e descartado.",
        "difficulty": "Difícil"
      },
      {
        "question": "No 802.1X, qual e o papel do switch de acesso?",
        "options": [
          "Supplicant",
          "Authenticator, que rele EAPOL e envia RADIUS ao servidor de autenticacao (ex.: ISE)",
          "Servidor RADIUS em si",
          "Somente DHCP relay"
        ],
        "correct": 1,
        "explanation": "O PC e o supplicant, o switch o authenticator e o ISE/NPS o authentication server. Ate autenticar, a porta pode ficar restrita.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual afirmacao distingue VRRP de HSRP?",
        "options": [
          "VRRP e so IPv6",
          "VRRP e padrao IETF; HSRP e proprietario Cisco; ambos fornecem gateway virtual",
          "HSRP nao tem prioridade",
          "VRRP nao elege master"
        ],
        "correct": 1,
        "explanation": "HSRP usa MAC 0000.0c07.acXX; VRRP usa 0000.5e00.01XX e pode partilhar o IP real do master como virtual.",
        "difficulty": "Médio"
      },
      {
        "question": "Como um host IPv6 obtem endereco com SLAAC?",
        "options": [
          "So com DHCPv4",
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
          "Copia-se sem alteracao",
          "Insere-se FFFE no meio e inverte-se o bit U/L (7.o bit do primeiro octeto)",
          "Acrescenta-se so ::1",
          "Usa-se o IPv4 embebido"
        ],
        "correct": 1,
        "explanation": "00:1A:2B:3C:4D:5E vira 021A:2BFF:FE3C:4D5E (bit U/L flipped). Muitos SO preferem privacy addresses aleatorios.",
        "difficulty": "Difícil"
      },
      {
        "question": "Qual prefixo identifica enderecos IPv6 Unique Local (ULA)?",
        "options": [
          "2000::/3",
          "FC00::/7 (na pratica fd00::/8)",
          "FE80::/10",
          "FF00::/8"
        ],
        "correct": 1,
        "explanation": "ULA (RFC 4193) e o analogo privado do RFC 1918. Global unicast e 2000::/3, link-local FE80::/10 e multicast FF00::/8.",
        "difficulty": "Médio"
      },
      {
        "question": "Porque e que todas as areas OSPF devem ligar-se a area 0?",
        "options": [
          "Porque a area 0 tem prioridade STP",
          "Para garantir um grafo sem loops de sumarizacao; o SPF inter-area passa sempre pelo backbone",
          "A area 0 e a unica que corre Hello",
          "Nao e obrigatorio em NSSA"
        ],
        "correct": 1,
        "explanation": "ABRs ligam areas nao-backbone a area 0. Virtual-links existem para remendar topologias que quebram esta regra.",
        "difficulty": "Difícil"
      },
      {
        "question": "Qual e a distancia administrativa predefinida de uma rota estatica no IOS?",
        "options": [
          "0",
          "1",
          "90",
          "110"
        ],
        "correct": 1,
        "explanation": "Connected=0, static=1, eBGP=20, EIGRP=90, OSPF=110, RIP=120, iBGP=200. Uma estatica ganha a OSPF para o mesmo prefixo salvo floating AD.",
        "difficulty": "Fácil"
      },
      {
        "question": "No syslog Cisco, que numero de severity corresponde a warnings?",
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
          "Esta ligado a uma referencia de tempo autoritativa (GPS, relogio atomico) e serve os stratum 2",
          "E um cliente Windows",
          "Nao pode autenticar NTP"
        ],
        "correct": 1,
        "explanation": "Stratum 0 e a fonte (GPS/atomico). Stratum 1 sincroniza com stratum 0. Stratum 16 significa nao sincronizado.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual diferenca chave entre TACACS+ e RADIUS no acesso a CLI?",
        "options": [
          "RADIUS usa TCP 49 e separa autorizacao",
          "TACACS+ usa TCP 49 e separa autenticacao, autorizacao e accounting; RADIUS usa UDP e combina auth+authz",
          "Nao ha diferenca",
          "TACACS+ nao cifra a password"
        ],
        "correct": 1,
        "explanation": "Para administracao de dispositivos Cisco prefere-se TACACS+ (autorizacao comando a comando). RADIUS e o padrao em 802.1X/Wi-Fi/VPN.",
        "difficulty": "Médio"
      },
      {
        "question": "Em APIs REST usadas na automacao CCNA, o que descreve melhor JSON?",
        "options": [
          "Uma linguagem de programacao",
          "Um formato textual de dados com objectos chave/valor, arrays e tipos simples, muito usado em RESTCONF e controladores",
          "Um protocolo de transporte",
          "Um tipo de ACL"
        ],
        "correct": 1,
        "explanation": "JSON e o payload tipico de REST. Chaves entre aspas, objectos {}, listas []. XML continua em NETCONF classico.",
        "difficulty": "Fácil"
      },
      {
        "question": "Qual e a diferenca central entre rede tradicional e rede controller-based (SDN)?",
        "options": [
          "SDN elimina todos os switches",
          "O plano de controlo e logicamente centralizado no controlador; os dispositivos ficam sobretudo no plano de dados, com APIs northbound/southbound",
          "SDN nao usa IP",
          "O controlador substitui o cabeamento"
        ],
        "correct": 1,
        "explanation": "Southbound (NETCONF, OpenFlow, gNMI) programa os nos; northbound (REST) oferece intencao as aplicacoes. Catalyst Center e o exemplo campus no CCNA.",
        "difficulty": "Médio"
      },
      {
        "question": "Num fabric spine-leaf, como se ligam os switches?",
        "options": [
          "Em anel STP classico",
          "Cada leaf liga-se a todos os spines; leafs nao se ligam entre si; ECMP no underlay",
          "So um uplink por leaf",
          "Spines ligam-se a servidores"
        ],
        "correct": 1,
        "explanation": "Qualquer leaf alcanca qualquer outra em dois hops, sem loops L2 no underlay (L3). Servidores e APs ligam-se aos leafs.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual e a diferenca entre hipervisor Tipo 1 e Tipo 2?",
        "options": [
          "Nao existe Tipo 1",
          "Tipo 1 (bare-metal, ex.: ESXi, Hyper-V, KVM) corre no hardware; Tipo 2 (hosted, ex.: VirtualBox) corre sobre um SO anfitriao",
          "Tipo 2 e sempre mais rapido em datacenter",
          "Tipo 1 so virtualiza redes"
        ],
        "correct": 1,
        "explanation": "Tipo 1 e o padrao de datacenter/NFV (CSR, CAT8000v, ASAv). Tipo 2 serve labs no portatil.",
        "difficulty": "Fácil"
      },
      {
        "question": "Qual DSCP e o PHB Expedited Forwarding (EF), tipico de voz?",
        "options": [
          "CS0 / 0",
          "EF / 46 (101110)",
          "AF41 / 34",
          "CS6 / 48"
        ],
        "correct": 1,
        "explanation": "EF (DSCP 46) pede baixa latencia e jitter: LLQ na WAN. AF e four-class assurance; CS6/CS7 sao controlo de rede.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual e a diferenca entre policing e shaping em QoS?",
        "options": [
          "Sao sinonimos",
          "Policing descarta ou re-marca trafego acima da taxa; shaping enfileira o excesso para suavizar bursts, introduzindo atraso",
          "Shaping so existe em STP",
          "Policing aumenta a largura de banda"
        ],
        "correct": 1,
        "explanation": "Na borda da WAN o shaping evita drops no ISP. Policing protege o nucleo mas pode descartar. Ambos usam token bucket.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e um ataque de overflow da CAM (MAC flooding) e como se mitiga?",
        "options": [
          "Envenenar DNS",
          "Encher a tabela MAC com enderecos falsos para o switch floodar unicast como broadcast; mitiga-se com port-security",
          "Desligar OSPF",
          "Usar NAT"
        ],
        "correct": 1,
        "explanation": "Ferramentas tipo macof saturam a TCAM. O switch passa a floodar frames unicast para todas as portas da VLAN. Port-security limita o abuso.",
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
      },
      {
        "question": "What is the default administrative distance of OSPF in Cisco IOS?",
        "options": [
          "90",
          "110",
          "120",
          "20"
        ],
        "correct": 1,
        "explanation": "Internal OSPF has AD 110. Internal EIGRP is 90, RIP 120, eBGP 20, static 1, and connected 0. IOS prefers the lowest AD when the prefix is identical.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a floating static route?",
        "options": [
          "A route with a lower AD than the primary so it always wins",
          "A backup route with a higher AD than the primary, used only if the primary disappears",
          "An OSPF route in the table",
          "A mandatory default route"
        ],
        "correct": 1,
        "explanation": "You configure the same prefix with a backup next hop and a high AD (for example 250). While the primary exists, the floating route stays out of the RIB.",
        "difficulty": "Medium"
      },
      {
        "question": "How does a router choose among several routes to the same destination?",
        "options": [
          "Always the oldest route",
          "Longest prefix match; if tied, lowest AD; if still tied, best metric",
          "Always OSPF",
          "The route with the longer mask always loses"
        ],
        "correct": 1,
        "explanation": "IP lookup uses longest-prefix match first. Only then do AD and metric matter. A /24 beats a /16 even if the /16 comes from a protocol with a better AD.",
        "difficulty": "Hard"
      },
      {
        "question": "On an OSPF multiaccess Ethernet network, who is elected DR?",
        "options": [
          "Always the router with the lowest Router ID",
          "The router with the highest OSPF priority; if tied, the highest Router ID",
          "Whoever booted first never loses",
          "Whoever has the most Loopbacks"
        ],
        "correct": 1,
        "explanation": "Priority (0–255, default 1) decides; priority 0 makes a router ineligible. A tie uses the highest Router ID. The DR originates the Type 2 LSA.",
        "difficulty": "Medium"
      },
      {
        "question": "What are the default OSPF Hello and Dead timers on broadcast Ethernet?",
        "options": [
          "Hello 30 s, Dead 120 s",
          "Hello 10 s, Dead 40 s",
          "Hello 1 s, Dead 3 s",
          "Hello 60 s, Dead 180 s"
        ],
        "correct": 1,
        "explanation": "On broadcast and point-to-point, Hello is 10 s and Dead is 4×Hello (40 s). On NBMA the default Hello is 30 s. Neighbors must agree on these values.",
        "difficulty": "Medium"
      },
      {
        "question": "How is default OSPF cost calculated in classic IOS?",
        "options": [
          "Cost = bandwidth in kb/s",
          "Cost = reference bandwidth / interface bandwidth (default 100 Mb/s)",
          "Cost = EIGRP delay",
          "Cost = hop count"
        ],
        "correct": 1,
        "explanation": "With a 100 Mb/s reference, FastEthernet costs 1. Modern networks raise auto-cost reference-bandwidth so 1/10/40 Gb/s links differ.",
        "difficulty": "Medium"
      },
      {
        "question": "Which wildcard mask matches subnet 172.16.8.0/22 in an OSPF network statement?",
        "options": [
          "0.0.0.255",
          "0.0.3.255",
          "255.255.252.0",
          "0.0.7.255"
        ],
        "correct": 1,
        "explanation": "A /22 mask is 255.255.252.0; the wildcard is the bitwise inverse: 0.0.3.255. 0.0.0.255 is /24 and 0.0.7.255 is /21.",
        "difficulty": "Hard"
      },
      {
        "question": "How is the OSPF Router ID chosen if router-id is not configured?",
        "options": [
          "The MAC of Gi0/0",
          "Manual router-id; else highest IPv4 on an up Loopback; else highest IPv4 on an up physical interface",
          "Always 1.1.1.1",
          "The management VLAN address"
        ],
        "correct": 1,
        "explanation": "The RID is a 32-bit IPv4 value. Setting router-id is recommended. Changing it requires clear ip ospf process.",
        "difficulty": "Medium"
      },
      {
        "question": "How is the STP/RSTP root bridge elected?",
        "options": [
          "Highest priority, then highest MAC",
          "Lowest Bridge ID: priority (default 32768) plus MAC; the lowest value wins",
          "The switch with the most VLANs",
          "The first switch to send a BPDU"
        ],
        "correct": 1,
        "explanation": "Priority is set in steps of 4096. spanning-tree vlan X root primary lowers priority so this switch wins.",
        "difficulty": "Medium"
      },
      {
        "question": "Which extra roles does RSTP (802.1w) add versus classic STP (802.1D)?",
        "options": [
          "Only root and designated",
          "Alternate and backup, discarding roles that can transition without 30–50 s timers",
          "DR and BDR",
          "Listen and learn as final roles"
        ],
        "correct": 1,
        "explanation": "RSTP uses root, designated, alternate, and backup. Convergence is in seconds (proposal/agreement), not the 50 s of 802.1D.",
        "difficulty": "Medium"
      },
      {
        "question": "What does Root Guard do on a port?",
        "options": [
          "Disables PortFast",
          "Puts the port in root-inconsistent if a superior BPDU arrives, stopping a downstream switch from becoming root",
          "Forces the port to be the root port",
          "Enables Loop Guard"
        ],
        "correct": 1,
        "explanation": "Use it on edge ports toward the core where a user switch must not win the election. It complements BPDU Guard.",
        "difficulty": "Medium"
      },
      {
        "question": "How do you disable DTP negotiation on a Cisco trunk?",
        "options": [
          "switchport mode access",
          "switchport nonegotiate (with a static trunk or access mode)",
          "no spanning-tree",
          "shutdown vlan 1"
        ],
        "correct": 1,
        "explanation": "DTP (dynamic auto/desirable) can form unwanted trunks. Best practice is static trunk or access mode plus nonegotiate.",
        "difficulty": "Medium"
      },
      {
        "question": "What happens if the two ends of an 802.1Q trunk use different native VLANs?",
        "options": [
          "Nothing; tagged traffic fixes it",
          "Untagged traffic is interpreted in different VLANs and CDP reports a native VLAN mismatch",
          "The trunk always goes down immediately",
          "STP turns itself off"
        ],
        "correct": 1,
        "explanation": "Native-VLAN frames are untagged. If one side assumes VLAN 1 and the other VLAN 99, untagged traffic crosses VLANs.",
        "difficulty": "Hard"
      },
      {
        "question": "Which command limits the VLANs allowed on a trunk?",
        "options": [
          "switchport access vlan 10",
          "switchport trunk allowed vlan 10,20,30",
          "vlan dot1q tag native",
          "spanning-tree vlan 10"
        ],
        "correct": 1,
        "explanation": "By default a trunk allows 1-4094. Pruning the list reduces flooding and risk. Use allowed vlan add/remove to adjust.",
        "difficulty": "Easy"
      },
      {
        "question": "What is an SVI (Switch Virtual Interface) on a Layer 3 switch?",
        "options": [
          "A router-on-a-stick subinterface only",
          "interface vlan X, an internal Layer 3 endpoint for that VLAN, used for inter-VLAN routing on the switch",
          "A Port-channel",
          "An SFP"
        ],
        "correct": 1,
        "explanation": "interface vlan 10 with an IP, plus ip routing, lets the switch route between VLANs without router-on-a-stick.",
        "difficulty": "Medium"
      },
      {
        "question": "With DHCP snooping, which ports should be trusted?",
        "options": [
          "Every PC access port",
          "Ports toward legitimate DHCP servers and the uplinks/trunks to those servers",
          "None; snooping does not use trust",
          "Only PortFast ports"
        ],
        "correct": 1,
        "explanation": "Enable ip dhcp snooping vlan X; on server/uplink ports set ip dhcp snooping trust. Untrusted ports drop fake DHCPOFFER/ACK.",
        "difficulty": "Medium"
      },
      {
        "question": "What does Dynamic ARP Inspection (DAI) validate ARP against?",
        "options": [
          "The OSPF table",
          "The DHCP snooping binding table (IP-MAC-port-VLAN)",
          "DNS",
          "The native VLAN"
        ],
        "correct": 1,
        "explanation": "DAI intercepts ARP on untrusted ports and checks IP/MAC against the snooping database. Spoofed ARP is dropped.",
        "difficulty": "Hard"
      },
      {
        "question": "In 802.1X, what role does the access switch play?",
        "options": [
          "Supplicant",
          "Authenticator, which relays EAPOL and sends RADIUS to the authentication server (e.g. ISE)",
          "The RADIUS server itself",
          "DHCP relay only"
        ],
        "correct": 1,
        "explanation": "The PC is the supplicant, the switch is the authenticator, and ISE/NPS is the authentication server. Until then the port may stay restricted.",
        "difficulty": "Medium"
      },
      {
        "question": "Which statement distinguishes VRRP from HSRP?",
        "options": [
          "VRRP is IPv6-only",
          "VRRP is an IETF standard; HSRP is Cisco proprietary; both provide a virtual gateway",
          "HSRP has no priority",
          "VRRP does not elect a master"
        ],
        "correct": 1,
        "explanation": "HSRP uses MAC 0000.0c07.acXX; VRRP uses 0000.5e00.01XX and may share the master's real IP as the virtual IP.",
        "difficulty": "Medium"
      },
      {
        "question": "How does an IPv6 host get an address with SLAAC?",
        "options": [
          "Only with DHCPv4",
          "It receives an RA (ICMPv6) with a prefix, builds an Interface ID, and runs DAD via Neighbor Solicitation",
          "The router assigns a TCP port",
          "It uses classic ARP"
        ],
        "correct": 1,
        "explanation": "The RA carries prefix, MTU, and lifetime. The host builds a GUA, runs DAD, and may still use DHCPv6 depending on the RA M/O flags.",
        "difficulty": "Medium"
      },
      {
        "question": "In EUI-64, what is done to a 48-bit MAC to form the Interface ID?",
        "options": [
          "It is copied unchanged",
          "FFFE is inserted in the middle and the U/L bit (7th bit of the first octet) is flipped",
          "::1 is simply appended",
          "Embedded IPv4 is used"
        ],
        "correct": 1,
        "explanation": "00:1A:2B:3C:4D:5E becomes 021A:2BFF:FE3C:4D5E (U/L bit flipped). Many OSes prefer random privacy addresses.",
        "difficulty": "Hard"
      },
      {
        "question": "Which prefix identifies IPv6 Unique Local Addresses (ULA)?",
        "options": [
          "2000::/3",
          "FC00::/7 (in practice fd00::/8)",
          "FE80::/10",
          "FF00::/8"
        ],
        "correct": 1,
        "explanation": "ULA (RFC 4193) is the private analogue of RFC 1918. Global unicast is 2000::/3, link-local is FE80::/10, and multicast is FF00::/8.",
        "difficulty": "Medium"
      },
      {
        "question": "Why must every OSPF area connect to area 0?",
        "options": [
          "Because area 0 has STP priority",
          "To keep summarization loop-free; inter-area SPF always transits the backbone",
          "Area 0 is the only area that sends Hellos",
          "It is not required for NSSA"
        ],
        "correct": 1,
        "explanation": "ABRs attach non-backbone areas to area 0. Virtual links exist to patch topologies that break this rule.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the default administrative distance of a static route in IOS?",
        "options": [
          "0",
          "1",
          "90",
          "110"
        ],
        "correct": 1,
        "explanation": "Connected=0, static=1, eBGP=20, EIGRP=90, OSPF=110, RIP=120, iBGP=200. A static therefore beats OSPF for the same prefix unless you raise its AD.",
        "difficulty": "Easy"
      },
      {
        "question": "In Cisco syslog, which severity number is warnings?",
        "options": [
          "0",
          "4",
          "7",
          "6"
        ],
        "correct": 1,
        "explanation": "0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging. logging trap 4 sends warning and worse.",
        "difficulty": "Medium"
      },
      {
        "question": "What does an NTP stratum 1 server mean?",
        "options": [
          "It is 15 hops below UTC",
          "It is attached to an authoritative time reference (GPS, atomic clock) and serves stratum 2 clients",
          "It is a Windows client",
          "It cannot authenticate NTP"
        ],
        "correct": 1,
        "explanation": "Stratum 0 is the reference (GPS/atomic). Stratum 1 syncs to stratum 0. Stratum 16 means unsynchronized.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a key difference between TACACS+ and RADIUS for CLI access?",
        "options": [
          "RADIUS uses TCP 49 and separates authorization",
          "TACACS+ uses TCP 49 and separates authentication, authorization, and accounting; RADIUS uses UDP and combines auth+authz",
          "There is no difference",
          "TACACS+ does not encrypt the password"
        ],
        "correct": 1,
        "explanation": "Cisco device administration prefers TACACS+ (per-command authorization). RADIUS is the standard for 802.1X/Wi-Fi/VPN.",
        "difficulty": "Medium"
      },
      {
        "question": "In REST APIs used in CCNA automation, what best describes JSON?",
        "options": [
          "A programming language",
          "A textual data format of key/value objects, arrays, and simple types, widely used with RESTCONF and controllers",
          "A transport protocol",
          "A type of ACL"
        ],
        "correct": 1,
        "explanation": "JSON is the typical REST payload. Keys are quoted, objects use {}, lists use []. XML remains common in classic NETCONF.",
        "difficulty": "Easy"
      },
      {
        "question": "What is the core difference between traditional networking and controller-based (SDN) networking?",
        "options": [
          "SDN eliminates every switch",
          "The control plane is logically centralized in a controller; devices are mostly data-plane, with northbound/southbound APIs",
          "SDN does not use IP",
          "The controller replaces cabling"
        ],
        "correct": 1,
        "explanation": "Southbound (NETCONF, OpenFlow, gNMI) programs the nodes; northbound (REST) exposes intent to applications. Catalyst Center is the campus example in CCNA.",
        "difficulty": "Medium"
      },
      {
        "question": "In a spine-leaf fabric, how are switches connected?",
        "options": [
          "In a classic STP ring",
          "Every leaf connects to every spine; leafs do not connect to each other; ECMP in the underlay",
          "Only one uplink per leaf",
          "Spines connect to servers"
        ],
        "correct": 1,
        "explanation": "Any leaf reaches any other in two hops with no underlay L2 loops (L3). Servers and APs attach to leafs.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between Type 1 and Type 2 hypervisors?",
        "options": [
          "Type 1 does not exist",
          "Type 1 (bare-metal, e.g. ESXi, Hyper-V, KVM) runs on hardware; Type 2 (hosted, e.g. VirtualBox) runs on a host OS",
          "Type 2 is always faster in the datacenter",
          "Type 1 only virtualizes networks"
        ],
        "correct": 1,
        "explanation": "Type 1 is the datacenter/NFV standard (CSR, CAT8000v, ASAv). Type 2 is for laptop labs.",
        "difficulty": "Easy"
      },
      {
        "question": "Which DSCP is the Expedited Forwarding (EF) PHB, typical for voice?",
        "options": [
          "CS0 / 0",
          "EF / 46 (101110)",
          "AF41 / 34",
          "CS6 / 48"
        ],
        "correct": 1,
        "explanation": "EF (DSCP 46) asks for low latency and jitter: LLQ on the WAN. AF is four-class assurance; CS6/CS7 are network control.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between policing and shaping in QoS?",
        "options": [
          "They are synonyms",
          "Policing drops or re-marks traffic above the rate; shaping queues the excess to smooth bursts, adding delay",
          "Shaping exists only in STP",
          "Policing increases bandwidth"
        ],
        "correct": 1,
        "explanation": "At the WAN edge, shaping avoids drops in the ISP. Policing protects the core but may drop. Both use a token bucket.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a CAM (MAC flooding) overflow attack and how is it mitigated?",
        "options": [
          "DNS poisoning",
          "Filling the MAC table with fake addresses so the switch floods unicast as broadcast; mitigate with port-security",
          "Disabling OSPF",
          "Using NAT"
        ],
        "correct": 1,
        "explanation": "Tools such as macof saturate TCAM. The switch then floods unicast frames out every port in the VLAN. Port-security limits the abuse.",
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
          "Nenhuma",
          "Stub bloqueia LSA 5 e o ABR injecta default; NSSA permite LSA 7 (externas da área) que o ABR traduz para LSA 5",
          "Stub permite BGP nativo",
          "NSSA não tem ABR"
        ],
        "correct": 1,
        "explanation": "Totally stubby bloqueia também LSA 3 (excepto default). Escolhe-se NSSA quando há um ASBR (redistribuição) dentro da área de borda.",
        "difficulty": "Difícil"
      },
      {
        "question": "Qual é a ordem inicial do BGP Best Path Cisco após next-hop reachable?",
        "options": [
          "MED, depois Weight",
          "Highest Weight; depois highest Local Preference; locally originated; shortest AS-PATH; origin; lowest MED",
          "Sempre o peer com maior IP",
          "Só AS-PATH conta"
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
          "São o mesmo valor community",
          "RD torna o prefixo único no BGP VPNv4; RT (extended community) controla import/export entre VRFs",
          "RD cifra o payload",
          "RT substitui o IGP"
        ],
        "correct": 1,
        "explanation": "O mesmo IPv4 em dois clientes precisa de RDs diferentes. RTs definem a política de import/export. Um VRF pode importar vários RTs (extranet).",
        "difficulty": "Difícil"
      },
      {
        "question": "O que caracteriza VRF-lite relativamente a MPLS VPN?",
        "options": [
          "Exige sempre LDP",
          "Segrega tabelas de encaminhamento no mesmo equipamento sem labels MPLS; os links levam um subinterface/VLAN por VRF",
          "Não permite overlapping IPs",
          "Só funciona com BGP"
        ],
        "correct": 1,
        "explanation": "VRF-lite é multi-VRF de campus/WAN: vrf definition, ip vrf forwarding na SVI, routing por VRF, sem core MPLS. Overlapping IPs são permitidos.",
        "difficulty": "Médio"
      },
      {
        "question": "Em EIGRP, o que é um Feasible Successor?",
        "options": [
          "A rota activa na FIB sempre",
          "Uma rota de backup que passa a Feasibility Condition (AD do anunciante < FD da successor) e pode entrar sem recomputar DUAL",
          "Um vizinho em INIT",
          "Uma rota com AD 255"
        ],
        "correct": 1,
        "explanation": "Successor = caminho usado (menor FD). Sem FS, uma falha dispara active query. Variance permite load-balance desigual com FS.",
        "difficulty": "Difícil"
      },
      {
        "question": "Para que serve o comando EIGRP variance?",
        "options": [
          "Altera os K-values",
          "Permite load-balancing de custo desigual entre successor e feasible successors cujo FD cabe em FD_min × variance",
          "Desliga o split horizon",
          "Muda o AS"
        ],
        "correct": 1,
        "explanation": "Variance 1 (omissão) = só equal-cost. Variance 2 instala FS com métrica até 2× a do successor. K-values têm de coincidir nos vizinhos.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual vantagem principal do MST (802.1s) face ao Rapid PVST+?",
        "options": [
          "MST corre um tree por VLAN sempre",
          "MST mapeia muitas VLANs para poucos instances, reduzindo BPDUs e CPU em redes com centenas de VLANs",
          "MST não tem root",
          "MST só trabalha com hubs"
        ],
        "correct": 1,
        "explanation": "Rapid PVST+ = uma instância por VLAN. MST agrupa VLANs em IST/MSTI com região (nome, revision, mapa). O digest tem de coincidir na região.",
        "difficulty": "Médio"
      },
      {
        "question": "O que detecta o UDLD?",
        "options": [
          "Loops de STP em cobre sempre",
          "Um link unidireccional (TX de um lado sem RX no outro) que o STP pode não ver e criar forwarding loops",
          "Falhas de OSPF Hello apenas",
          "CRC em jumbo frames"
        ],
        "correct": 1,
        "explanation": "UDLD envia frames e espera eco do peer. Modo normal gera syslog; aggressive errdisable. Complementa STP Loop Guard. Típico em fibra.",
        "difficulty": "Médio"
      },
      {
        "question": "O que faz Loop Guard no STP?",
        "options": [
          "Igual a BPDU Guard",
          "Impede que uma porta non-designated passe a designated forwarding se os BPDUs pararem, evitando loop por unidireccionalidade",
          "Forca PortFast",
          "Elege o root"
        ],
        "correct": 1,
        "explanation": "Se BPDUs cessam, STP classico assume que o designated desapareceu e a porta pode forwarding. Loop Guard poe loop-inconsistent ate os BPDUs regressarem.",
        "difficulty": "Difícil"
      },
      {
        "question": "Qual e a relacao entre SSO e NSF num chassis Cisco com dual RP?",
        "options": [
          "NSF grava a config; SSO nao",
          "SSO replica o estado do control plane ao RP standby; NSF mantem CEF forwarding durante o switchover com graceful restart",
          "Sao o mesmo feature de NAT",
          "SSO desliga a FIB"
        ],
        "correct": 1,
        "explanation": "SSO + NSF/GR permitem failover de supervisor em segundos sem perder adjacencias se o peer entender GR. ISSU apoia-se nisto.",
        "difficulty": "Difícil"
      },
      {
        "question": "O que e LLQ (Low Latency Queuing) num policy-map de QoS?",
        "options": [
          "WRED em todas as classes",
          "Uma priority queue (normalmente EF/voz) servida primeiro, combinada com CBWFQ nas demais classes",
          "Somente policing de default class",
          "Um tipo de STP"
        ],
        "correct": 1,
        "explanation": "priority reserva um policer implicito para nao esgotar o link. As outras classes usam bandwidth (CBWFQ). Nao se poe bulk na priority.",
        "difficulty": "Médio"
      },
      {
        "question": "O valor DSCP EF 46 em binario de 6 bits e?",
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
          "Aumentar o window TCP sempre",
          "Descartar probabilisticamente pacotes antes da fila encher, por precedencia/DSCP, evitando tail-drop sincronizado de fluxos TCP",
          "Cifrar a fila",
          "Substituir LLQ"
        ],
        "correct": 1,
        "explanation": "Tail drop enche a fila e varios TCP entram em slow start ao mesmo tempo. WRED comeca a descartar cedo nos fluxos menos prioritarios. Nao se aplica a voz.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual e a diferenca fundamental entre um tunel GRE puro e GRE over IPsec?",
        "options": [
          "GRE puro cifra com AES",
          "GRE encapsula qualquer protocolo mas vai em claro; IPsec acrescenta confidencialidade/integridade, normalmente em modo tunnel",
          "IPsec nao pode transportar OSPF",
          "GRE exige certificados sempre"
        ],
        "correct": 1,
        "explanation": "GRE sozinho: protocolo 47, sem crypto. IPsec (ESP proto 50) cifra. Para IGP sobre VPN usa-se GRE/IPsec, VTI, FlexVPN ou DMVPN. Baixar MTU/MSS.",
        "difficulty": "Médio"
      },
      {
        "question": "Que vantagem principal o IKEv2 tem sobre o IKEv1?",
        "options": [
          "IKEv2 exige mais mensagens",
          "Menos round-trips, NAT traversal nativo, EAP, MOBIKE e melhor rekey; o IKEv1 e o modelo legado",
          "IKEv2 nao autentica",
          "IKEv1 suporta EAP e o IKEv2 nao"
        ],
        "correct": 1,
        "explanation": "IKEv2 usa 4 mensagens contra 9 do main mode. FlexVPN da Cisco assenta em IKEv2.",
        "difficulty": "Médio"
      },
      {
        "question": "O que distingue GETVPN das VPNs de tunel tipo DMVPN?",
        "options": [
          "GETVPN usa GRE obrigatorio",
          "GETVPN cifra trafego nativo (sem overlay de tunel) com chaves de grupo GDOI; preserva o cabecalho IP original",
          "GETVPN nao usa IPsec",
          "GETVPN e so para Internet publica sem IGP"
        ],
        "correct": 1,
        "explanation": "Key server distribui KEKs/TEKs via GDOI. Os GMs cifram ESP mas mantem src/dst originais. Ideal em WAN privada; nao atravessa NAT como DMVPN.",
        "difficulty": "Difícil"
      },
      {
        "question": "O que e MACsec (IEEE 802.1AE)?",
        "options": [
          "Cifra de camada 3 ponta-a-ponta",
          "Cifra hop-by-hop da camada 2 entre portas, com chaves via MKA (802.1X)",
          "Um tipo de GRE",
          "Substitui BGP"
        ],
        "correct": 1,
        "explanation": "Util em links entre switches do datacenter/campus para confidencialidade no cabo. Nao substitui IPsec WAN.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e MAB (MAC Authentication Bypass) no acesso 802.1X?",
        "options": [
          "Um tipo de EtherChannel",
          "Fallback que autentica o dispositivo pelo MAC via RADIUS quando nao ha supplicant 802.1X",
          "Cifra MACsec obrigatoria",
          "Um protocolo de routing"
        ],
        "correct": 1,
        "explanation": "A ordem tipica: 802.1X, depois MAB, depois WebAuth. MAB e fraco (MAC spoofable); usa-se com profiling e dACL/SGT.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e ERSPAN relativamente a SPAN/RSPAN?",
        "options": [
          "E SPAN so local",
          "Encapsula trafego monitorizado em GRE/IP para um analisador em outra rede L3, atravessando routers",
          "E exclusivo de hubs",
          "Substitui NetFlow"
        ],
        "correct": 1,
        "explanation": "SPAN: mesma switch. RSPAN: VLAN dedicada atraves de trunks L2. ERSPAN: GRE/IP, chega a um destination em outro subnet.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e model-driven telemetry em IOS-XE/NX-OS?",
        "options": [
          "Polling SNMP a cada 5 minutos apenas",
          "Streaming de dados YANG (periodic ou on-change) via gRPC/gNMI/NETCONF para colectores, em vez de pull SNMP",
          "Um substitute de syslog em ASCII",
          "Somente CLI accounting"
        ],
        "correct": 1,
        "explanation": "Subscricoes apontam a paths YANG. Cadencia de segundos e notificacoes on-change dao visibilidade que o SNMP nao escala.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e YANG no contexto de programabilidade de rede?",
        "options": [
          "Um protocolo de transporte",
          "Uma linguagem de modelacao de dados (config e estado) usada por NETCONF/RESTCONF/gNMI",
          "Um cipher IPsec",
          "Um tipo de LSA OSPF"
        ],
        "correct": 1,
        "explanation": "Modulos Cisco-IOS-XE-native e openconfig-interfaces descrevem folhas e tipos. O encoding pode ser XML ou JSON. Sem YANG, NETCONF nao tem schema.",
        "difficulty": "Médio"
      },
      {
        "question": "Qual contraste pratico entre NETCONF e RESTCONF?",
        "options": [
          "RESTCONF usa so SSH e XML datastore lock sempre",
          "NETCONF corre sobre SSH com datastores (running/candidate) e RPC XML; RESTCONF mapeia YANG para HTTP/HTTPS com JSON ou XML",
          "NETCONF e HTTP nativo",
          "RESTCONF nao autentica"
        ],
        "correct": 1,
        "explanation": "NETCONF: edit-config, locks, candidate+commit. RESTCONF: GET /restconf/data/... mais simples para apps web. gNMI e a terceira via.",
        "difficulty": "Médio"
      },
      {
        "question": "No LISP, o que sao EID e RLOC?",
        "options": [
          "O mesmo endereco WAN",
          "EID e a identidade do host/prefixo; RLOC e a localizacao (loopback do xTR) usada para encapsular no underlay",
          "RLOC e a VLAN nativa",
          "EID substitui o DNS"
        ],
        "correct": 1,
        "explanation": "Map-resolver/map-server resolvem EID para RLOC. xTR encapsula. E o plano de controlo de SD-Access com VXLAN no data plane.",
        "difficulty": "Difícil"
      },
      {
        "question": "O que identifica um segmento VXLAN no data plane?",
        "options": [
          "O VLAN ID de 12 bits apenas",
          "O VNI (VXLAN Network Identifier) de 24 bits no cabecalho VXLAN, UDP destino 4789",
          "O DSCP EF",
          "O Router ID OSPF"
        ],
        "correct": 1,
        "explanation": "24 bits ~ 16 milhoes de segmentos (face a 4094 VLANs). VTEPs encapsulam Ethernet em UDP/IP. EVPN distribui mapeamentos MAC/IP para VTEP.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e anycast gateway num fabric VXLAN/EVPN ou SD-Access?",
        "options": [
          "Um HSRP classico com dois IPs diferentes",
          "O mesmo IP e MAC de SVI configurados em todos os leafs, para o default gateway estar sempre no leaf local",
          "Um servidor DNS anycast so",
          "Um RR BGP"
        ],
        "correct": 1,
        "explanation": "O host ARP o gateway e o leaf local responde. Evita trombone routing via um HSRP central. O underlay assegura reachability entre leafs.",
        "difficulty": "Difícil"
      },
      {
        "question": "Qual diferenca de temporizadores e DR entre OSPF point-to-point e broadcast?",
        "options": [
          "Ambos elegem DR e Hello 30",
          "P2P: sem DR/BDR, Hello 10 s, adjacencia FULL directa; broadcast: elege DR/BDR, Hello 10 s, FULL so com DR/BDR",
          "Broadcast nao envia Hello",
          "P2P usa Hello 30 s"
        ],
        "correct": 1,
        "explanation": "ip ospf network point-to-point em Ethernet p2p (links /31) evita eleicao inutil. Mismatch de network type impede adjacencia.",
        "difficulty": "Médio"
      },
      {
        "question": "Para que servem BGP communities?",
        "options": [
          "Substituir o AS-PATH",
          "Tags opcionais que viajam com a rota para aplicar politica (local-pref, filter, no-export) noutro ponto do AS ou no peering",
          "Cifrar UPDATEs",
          "Eleger o RR"
        ],
        "correct": 1,
        "explanation": "Well-known: no-export, no-advertise, internet, local-AS. Route-maps set/match community. E o instrumento de politica de transito e de cliente.",
        "difficulty": "Médio"
      },
      {
        "question": "O que e Loop-Free Alternate (LFA) em IP FRR?",
        "options": [
          "Um tipo de LSA 5",
          "Um next-hop de backup pre-computado que nao reintroduce o prefixo no router protegido, permitindo convergir em menos de 50 ms",
          "Uma community BGP",
          "Um modo STP"
        ],
        "correct": 1,
        "explanation": "O IGP calcula um vizinho cujo caminho para o prefixo nao passa pelo primary. Remote LFA/TI-LFA cobre os casos sem LFA local. BFD detecta a falha.",
        "difficulty": "Difícil"
      },
      {
        "question": "Como se organizam Private VLANs (PVLAN)?",
        "options": [
          "Uma VLAN por MAC apenas",
          "Uma VLAN primaria e VLANs secundarias isolated (so com o promiscuous) ou community (falam entre si e com o promiscuous)",
          "Todas as portas sao promiscuous",
          "PVLAN substitui VXLAN"
        ],
        "correct": 1,
        "explanation": "O porto promiscuous (gateway/firewall) ve todos. Isolated nao falam entre hosts. Community isola grupos. Util em alojamento partilhado.",
        "difficulty": "Médio"
      },
      {
        "question": "O que caracteriza um AP em modo FlexConnect vs Local mode?",
        "options": [
          "FlexConnect obriga todo o trafego a ir ao WLC",
          "Em FlexConnect o AP pode comutar SSID localmente e sobreviver se o CAPWAP ao WLC cair; Local mode faz central switching no WLC",
          "Local mode nao usa CAPWAP",
          "FlexConnect nao autentica"
        ],
        "correct": 1,
        "explanation": "Filiais com WAN fraca usam FlexConnect: DHCP/data locais. Local/centrally switched e o campus. O WLC continua a gerir RRM quando o tunel esta up.",
        "difficulty": "Médio"
      },
      {
        "question": "Quais funcoes principais o RRM executa num WLC?",
        "options": [
          "So cifra WPA3",
          "TPC (potencia), DCA (escolha de canal) e coverage hole detection, ajustando a RF do grupo de APs",
          "Atribui IPs DHCP",
          "Substitui o ISE"
        ],
        "correct": 1,
        "explanation": "O WLC mede neighbours (NDP), evita co-channel interference, sobe/baixa dBm e cobre buracos. Sem RRM, canais e potencia ficam estaticos.",
        "difficulty": "Médio"
      },
      {
        "question": "O que faz IGMP snooping num switch?",
        "options": [
          "Bloqueia todo o multicast",
          "Observa joins/leaves IGMP e encaminha multicast IP so para as portas com recetores (e o router/querier)",
          "Converte multicast em GRE",
          "Activa PIM-DM em todas as portas"
        ],
        "correct": 1,
        "explanation": "Sem snooping o switch trata multicast como broadcast na VLAN. Com snooping mais querier poupa-se uplink. MLD snooping e o equivalente IPv6.",
        "difficulty": "Médio"
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
      },
      {
        "question": "Which OSPFv2 LSA describes a router's links inside the area?",
        "options": [
          "Type 5 AS-external",
          "Type 1 Router LSA",
          "Type 4 ASBR-summary",
          "Type 3 Network-summary"
        ],
        "correct": 1,
        "explanation": "Type 1 is originated by every router and flooded only in the area. Type 2 is from the DR, Type 3 from the ABR, Type 5 from the ASBR.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the difference between an OSPF stub area and an NSSA?",
        "options": [
          "None",
          "Stub blocks Type 5 LSAs and the ABR injects a default; NSSA allows Type 7 (externals from the area) which the ABR translates to Type 5",
          "Stub allows native BGP",
          "NSSA has no ABR"
        ],
        "correct": 1,
        "explanation": "Totally stubby also blocks Type 3 except a default. Choose NSSA when an ASBR (redistribution) sits inside the edge area.",
        "difficulty": "Hard"
      },
      {
        "question": "What is the initial Cisco BGP Best Path order after next-hop reachability?",
        "options": [
          "MED, then Weight",
          "Highest Weight; then highest Local Preference; locally originated; shortest AS-PATH; origin; lowest MED",
          "Always the peer with the highest IP",
          "Only AS-PATH matters"
        ],
        "correct": 1,
        "explanation": "Weight (local to the router) is Cisco's first tie-breaker. Local Pref (default 100) is the first attribute advertised in iBGP.",
        "difficulty": "Hard"
      },
      {
        "question": "Which BGP attribute is not advertised to other routers?",
        "options": [
          "Local Preference",
          "Weight",
          "AS-PATH",
          "MED"
        ],
        "correct": 1,
        "explanation": "Weight is local to the Cisco box and never leaves in an UPDATE. Local Pref travels in iBGP. AS-PATH and MED travel in eBGP.",
        "difficulty": "Medium"
      },
      {
        "question": "In an MPLS L3VPN, what are RD and RT for?",
        "options": [
          "They are the same community value",
          "RD makes the prefix unique in VPNv4 BGP; RT (extended community) controls import/export among VRFs",
          "RD encrypts the payload",
          "RT replaces the IGP"
        ],
        "correct": 1,
        "explanation": "The same IPv4 in two customers needs different RDs. RTs define import/export policy. A VRF can import several RTs (extranet).",
        "difficulty": "Hard"
      },
      {
        "question": "How does VRF-lite differ from MPLS VPN?",
        "options": [
          "It always requires LDP",
          "It separates forwarding tables on the same box without MPLS labels; inter-box links carry one subinterface/VLAN per VRF",
          "It forbids overlapping IPs",
          "It works only with BGP"
        ],
        "correct": 1,
        "explanation": "VRF-lite is campus/WAN multi-VRF: vrf definition, ip vrf forwarding on the SVI, per-VRF routing, no MPLS core. Overlapping IPs are allowed.",
        "difficulty": "Medium"
      },
      {
        "question": "In EIGRP, what is a Feasible Successor?",
        "options": [
          "Always the route in the FIB",
          "A backup route that passes the Feasibility Condition (neighbor AD < successor FD) and can be installed without a DUAL recomputation",
          "A neighbor in INIT",
          "A route with AD 255"
        ],
        "correct": 1,
        "explanation": "Successor = the path in use (lowest FD). Without an FS, a failure goes active and queries. Variance allows unequal-cost load balancing with FS.",
        "difficulty": "Hard"
      },
      {
        "question": "What does the EIGRP variance command do?",
        "options": [
          "It changes K-values",
          "It allows unequal-cost load balancing among the successor and feasible successors whose FD fits in FD_min × variance",
          "It disables split horizon",
          "It changes the AS"
        ],
        "correct": 1,
        "explanation": "Variance 1 (default) is equal-cost only. Variance 2 installs FS routes with metric up to 2× the successor. K-values must match on neighbors.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the main advantage of MST (802.1s) over Rapid PVST+?",
        "options": [
          "MST always runs one tree per VLAN",
          "MST maps many VLANs onto a few instances, cutting BPDUs and CPU when hundreds of VLANs exist",
          "MST has no root",
          "MST only works with hubs"
        ],
        "correct": 1,
        "explanation": "Rapid PVST+ = one instance per VLAN. MST groups VLANs into IST/MSTI with a region (name, revision, map). The digest must match in the region.",
        "difficulty": "Medium"
      },
      {
        "question": "What does UDLD detect?",
        "options": [
          "Always STP loops on copper",
          "A unidirectional link (TX on one side with no RX on the other) that STP may miss, creating a forwarding loop",
          "OSPF Hello failures only",
          "CRC on jumbo frames"
        ],
        "correct": 1,
        "explanation": "UDLD sends frames and expects the peer to echo them. Normal mode syslogs; aggressive errdisables. It complements STP Loop Guard. Typical on fiber.",
        "difficulty": "Medium"
      },
      {
        "question": "What does STP Loop Guard do?",
        "options": [
          "The same as BPDU Guard",
          "It prevents a non-designated port from becoming designated forwarding if BPDUs stop, avoiding a unidirectional loop",
          "It forces PortFast",
          "It elects the root"
        ],
        "correct": 1,
        "explanation": "If BPDUs stop, classic STP assumes the designated bridge is gone and may forward. Loop Guard puts the port loop-inconsistent until BPDUs return.",
        "difficulty": "Hard"
      },
      {
        "question": "How do SSO and NSF relate on a Cisco chassis with dual RP?",
        "options": [
          "NSF saves the config; SSO does not",
          "SSO replicates control-plane state to the standby RP; NSF keeps CEF forwarding during switchover with graceful restart",
          "They are the same NAT feature",
          "SSO disables the FIB"
        ],
        "correct": 1,
        "explanation": "SSO + NSF/GR allow supervisor failover in seconds without dropping adjacencies if the peer understands GR. ISSU builds on this.",
        "difficulty": "Hard"
      },
      {
        "question": "What is LLQ (Low Latency Queuing) in a QoS policy-map?",
        "options": [
          "WRED on every class",
          "A priority queue (usually EF/voice) served first, combined with CBWFQ for the other classes",
          "Default-class policing only",
          "A type of STP"
        ],
        "correct": 1,
        "explanation": "priority implies a policer so voice cannot starve the link. Other classes use bandwidth (CBWFQ). Do not put bulk traffic in priority.",
        "difficulty": "Medium"
      },
      {
        "question": "DSCP EF 46 as a 6-bit binary value is?",
        "options": [
          "001010",
          "101110",
          "111000",
          "000000"
        ],
        "correct": 1,
        "explanation": "EF = 101110 = 46 decimal. Voice 802.1p CoS is usually 5, mapped to EF at the edge.",
        "difficulty": "Medium"
      },
      {
        "question": "What is WRED (Weighted Random Early Detection) for?",
        "options": [
          "Always increasing the TCP window",
          "Dropping packets probabilistically before the queue fills, by precedence/DSCP, avoiding synchronized TCP tail drops",
          "Encrypting the queue",
          "Replacing LLQ"
        ],
        "correct": 1,
        "explanation": "Tail drop fills the queue and many TCPs hit slow start together. WRED starts dropping earlier on lower-priority flows. Do not apply it to voice.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the fundamental difference between plain GRE and GRE over IPsec?",
        "options": [
          "Plain GRE encrypts with AES",
          "GRE encapsulates any protocol but is clear text; IPsec adds confidentiality/integrity, usually in tunnel mode",
          "IPsec cannot carry OSPF",
          "GRE always requires certificates"
        ],
        "correct": 1,
        "explanation": "GRE alone is protocol 47 with no crypto. IPsec (ESP proto 50) encrypts. For IGP over VPN use GRE/IPsec, VTI, FlexVPN or DMVPN. Lower MTU/MSS.",
        "difficulty": "Medium"
      },
      {
        "question": "What is the main advantage of IKEv2 over IKEv1?",
        "options": [
          "IKEv2 needs more messages",
          "Fewer round-trips, native NAT traversal, EAP, MOBIKE, and better rekey; IKEv1 is the legacy model",
          "IKEv2 does not authenticate",
          "IKEv1 supports EAP and IKEv2 does not"
        ],
        "correct": 1,
        "explanation": "IKEv2 uses 4 messages versus 9 in main mode. Cisco FlexVPN is built on IKEv2.",
        "difficulty": "Medium"
      },
      {
        "question": "What distinguishes GETVPN from tunnel VPNs such as DMVPN?",
        "options": [
          "GETVPN requires GRE",
          "GETVPN encrypts native traffic (no tunnel overlay) with GDOI group keys; it preserves the original IP header",
          "GETVPN does not use IPsec",
          "GETVPN is only for public Internet without an IGP"
        ],
        "correct": 1,
        "explanation": "A key server distributes KEKs/TEKs via GDOI. GMs encapsulate ESP but keep original src/dst. Ideal on a private WAN; it does not traverse NAT like DMVPN.",
        "difficulty": "Hard"
      },
      {
        "question": "What is MACsec (IEEE 802.1AE)?",
        "options": [
          "End-to-end Layer 3 encryption",
          "Hop-by-hop Layer 2 encryption between ports, with keys via MKA (802.1X)",
          "A type of GRE",
          "A BGP replacement"
        ],
        "correct": 1,
        "explanation": "Useful on datacenter/campus switch links for confidentiality on the wire. It does not replace WAN IPsec.",
        "difficulty": "Medium"
      },
      {
        "question": "What is MAB (MAC Authentication Bypass) in 802.1X access?",
        "options": [
          "A type of EtherChannel",
          "A fallback that authenticates the device by MAC via RADIUS when no 802.1X supplicant is present",
          "Mandatory MACsec encryption",
          "A routing protocol"
        ],
        "correct": 1,
        "explanation": "Typical order: 802.1X, then MAB, then WebAuth. MAB is weak (MACs are spoofable); combine it with profiling and dACL/SGT.",
        "difficulty": "Medium"
      },
      {
        "question": "What is ERSPAN compared with SPAN/RSPAN?",
        "options": [
          "It is local SPAN only",
          "It encapsulates monitored traffic in GRE/IP toward an analyzer on another L3 network, crossing routers",
          "It is hub-only",
          "It replaces NetFlow"
        ],
        "correct": 1,
        "explanation": "SPAN: same switch. RSPAN: a dedicated VLAN across L2 trunks. ERSPAN: GRE/IP, reaches a destination in another subnet.",
        "difficulty": "Medium"
      },
      {
        "question": "What is model-driven telemetry on IOS-XE/NX-OS?",
        "options": [
          "SNMP polling every 5 minutes only",
          "Streaming of YANG data (periodic or on-change) via gRPC/gNMI/NETCONF to collectors, instead of SNMP pull",
          "An ASCII syslog substitute",
          "CLI accounting only"
        ],
        "correct": 1,
        "explanation": "Subscriptions target YANG paths. Second-level cadence and on-change notifications give visibility SNMP cannot scale.",
        "difficulty": "Medium"
      },
      {
        "question": "What is YANG in network programmability?",
        "options": [
          "A transport protocol",
          "A data modeling language (config and state) used by NETCONF/RESTCONF/gNMI",
          "An IPsec cipher",
          "A type of OSPF LSA"
        ],
        "correct": 1,
        "explanation": "Modules such as Cisco-IOS-XE-native and openconfig-interfaces describe leaves and types. Encoding may be XML or JSON. Without YANG, NETCONF has no schema.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a practical contrast between NETCONF and RESTCONF?",
        "options": [
          "RESTCONF uses only SSH and always XML datastore lock",
          "NETCONF runs over SSH with datastores (running/candidate) and XML RPCs; RESTCONF maps YANG to HTTP/HTTPS with JSON or XML",
          "NETCONF is native HTTP",
          "RESTCONF does not authenticate"
        ],
        "correct": 1,
        "explanation": "NETCONF: edit-config, locks, candidate+commit. RESTCONF: GET /restconf/data/... is simpler for web apps. gNMI is the third path.",
        "difficulty": "Medium"
      },
      {
        "question": "In LISP, what are EID and RLOC?",
        "options": [
          "The same WAN address",
          "EID is the host/prefix identity; RLOC is the location (xTR loopback) used to encapsulate on the underlay",
          "RLOC is the native VLAN",
          "EID replaces DNS"
        ],
        "correct": 1,
        "explanation": "Map-resolver/map-server resolve EID to RLOC. xTRs encapsulate. This is the SD-Access control plane with VXLAN as the data plane.",
        "difficulty": "Hard"
      },
      {
        "question": "What identifies a VXLAN segment in the data plane?",
        "options": [
          "The 12-bit VLAN ID only",
          "The 24-bit VNI (VXLAN Network Identifier) in the VXLAN header, destination UDP 4789",
          "DSCP EF",
          "The OSPF Router ID"
        ],
        "correct": 1,
        "explanation": "24 bits ~ 16 million segments (versus 4094 VLANs). VTEPs encapsulate Ethernet in UDP/IP. EVPN distributes MAC/IP to VTEP mappings.",
        "difficulty": "Medium"
      },
      {
        "question": "What is an anycast gateway in a VXLAN/EVPN or SD-Access fabric?",
        "options": [
          "Classic HSRP with two different IPs",
          "The same SVI IP and MAC configured on every leaf, so the default gateway is always on the local leaf",
          "An anycast DNS server only",
          "A BGP RR"
        ],
        "correct": 1,
        "explanation": "The host ARPs the gateway and the local leaf answers. That avoids trombone routing through a central HSRP pair. The underlay provides leaf-to-leaf reachability.",
        "difficulty": "Hard"
      },
      {
        "question": "What timer and DR difference exists between OSPF point-to-point and broadcast?",
        "options": [
          "Both elect a DR and use Hello 30",
          "P2P: no DR/BDR, Hello 10 s, direct FULL adjacency; broadcast: elects DR/BDR, Hello 10 s, FULL only with DR/BDR",
          "Broadcast sends no Hellos",
          "P2P uses Hello 30 s"
        ],
        "correct": 1,
        "explanation": "ip ospf network point-to-point on Ethernet p2p (/31 links) avoids a useless election. A network-type mismatch blocks adjacency.",
        "difficulty": "Medium"
      },
      {
        "question": "What are BGP communities used for?",
        "options": [
          "Replacing AS-PATH",
          "Optional tags that travel with the route so policy (local-pref, filter, no-export) can be applied elsewhere in the AS or at a peering",
          "Encrypting UPDATEs",
          "Electing the RR"
        ],
        "correct": 1,
        "explanation": "Well-known: no-export, no-advertise, internet, local-AS. Route-maps set/match community. This is the transit and customer policy tool.",
        "difficulty": "Medium"
      },
      {
        "question": "What is a Loop-Free Alternate (LFA) in IP FRR?",
        "options": [
          "A Type 5 LSA",
          "A precomputed backup next hop that does not reconverge the prefix through the protected router, allowing sub-50 ms repair",
          "A BGP community",
          "An STP mode"
        ],
        "correct": 1,
        "explanation": "The IGP finds a neighbor whose path to the prefix does not go through the primary. Remote LFA/TI-LFA covers cases with no local LFA. BFD detects the failure.",
        "difficulty": "Hard"
      },
      {
        "question": "How are Private VLANs (PVLAN) organized?",
        "options": [
          "One VLAN per MAC only",
          "One primary VLAN plus secondary isolated VLANs (talk only to promiscuous) or community VLANs (talk among themselves and to promiscuous)",
          "Every port is promiscuous",
          "PVLAN replaces VXLAN"
        ],
        "correct": 1,
        "explanation": "The promiscuous port (gateway/firewall) sees everyone. Isolated hosts do not talk to each other. Community groups hosts. Useful in shared hosting.",
        "difficulty": "Medium"
      },
      {
        "question": "What characterizes a FlexConnect AP versus Local mode?",
        "options": [
          "FlexConnect forces all traffic to the WLC",
          "In FlexConnect the AP can switch an SSID locally and survive if CAPWAP to the WLC dies; Local mode uses central switching at the WLC",
          "Local mode does not use CAPWAP",
          "FlexConnect does not authenticate"
        ],
        "correct": 1,
        "explanation": "Branches with a weak WAN use FlexConnect: local DHCP/data. Local/centrally switched is the campus model. The WLC still manages RRM while the tunnel is up.",
        "difficulty": "Medium"
      },
      {
        "question": "Which main functions does RRM run on a WLC?",
        "options": [
          "It only encrypts WPA3",
          "TPC (power), DCA (channel selection), and coverage hole detection, tuning RF across the AP group",
          "It assigns DHCP addresses",
          "It replaces ISE"
        ],
        "correct": 1,
        "explanation": "The WLC measures neighbors (NDP), avoids co-channel interference, raises/lowers dBm, and covers holes. Without RRM, channels and power stay static.",
        "difficulty": "Medium"
      },
      {
        "question": "What does IGMP snooping do on a switch?",
        "options": [
          "It blocks all multicast",
          "It watches IGMP joins/leaves and forwards IP multicast only to ports with receivers (and the router/querier)",
          "It converts multicast to GRE",
          "It enables PIM-DM on every port"
        ],
        "correct": 1,
        "explanation": "Without snooping the switch treats multicast as VLAN broadcast. With snooping plus a querier you save the uplink. MLD snooping is the IPv6 equivalent.",
        "difficulty": "Medium"
      }
    ]
  }
};
