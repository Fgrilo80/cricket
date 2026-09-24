window.QUIZ_BANK = [
  {
    "question": "Qual é a principal função de um switch em uma rede local?",
    "options": [
      "Ligar equipamentos de redes IP distintas através de um router",
      "Conectar dispositivos na mesma rede local usando endereços MAC",
      "Encaminhar pacotes IP entre redes usando a tabela de rotas",
      "Entregar endereços IP dinamicamente com um servidor DHCP"
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
      "O hub transmite mais rápido que o switch porque não consulta MAC",
      "Switch usa endereços MAC para encaminhar frames, hub envia para todos",
      "O hub é mais seguro que o switch porque isola o tráfego por porta",
      "Não existe diferença prática entre hub e switch no encaminhamento"
    ],
    "correct": 1,
    "explanation": "Hubs são dispositivos de camada 1 que replicam o sinal para todas as portas. Switches são inteligentes e usam tabela MAC.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um endereço IP privado?",
    "options": [
      "Endereço público roteável usado só na internet global",
      "Endereço não roteável na internet é usado em redes locais",
      "Endereço IPv4 entregue automaticamente via servidor DHCP",
      "Endereço de broadcast enviado a todos os hosts da LAN"
    ],
    "correct": 1,
    "explanation": "Endereços IP privados (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) não são roteáveis na internet e são usados em redes internas.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando Cisco IOS mostra a tabela de endereços MAC aprendidos?",
    "options": [
      "comando show ip route",
      "show mac address-table",
      "show interfaces brief",
      "comando IOS show arp"
    ],
    "correct": 1,
    "explanation": "O comando 'show mac address-table' exibe a tabela de endereços MAC aprendidos pelo switch.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um VLAN?",
    "options": [
      "Uma rede física separada por cabos e switches próprios",
      "Uma rede lógica criada em um switch para segmentar tráfego",
      "Um protocolo de encaminhamento como OSPF entre routers",
      "Um tipo de cabo de cobre usado nas portas do switch"
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
    "explanation": "Ethernet Gigabit em cobre (1000BASE-T) opera a 1000 Mbps (1 Gbps) em Cat5e/Cat6. Não é Fast Ethernet (100 Mbps) nem 10 Gbps.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que faz o comando 'ping'?",
    "options": [
      "Envia pacotes TCP para testar a porta de um host",
      "Testa conectividade usando ICMP Echo Request/Reply",
      "Configura rotas estáticas com o comando ip route",
      "Mostra a tabela ARP e os mapas de IP para MAC"
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
    "explanation": "Redes IPv4 Classe C usam máscara padrão 255.255.255.0 (/24): 24 bits de rede e 8 de host. Classe A é /8 e Classe B é /16.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é PoE (Power over Ethernet)?",
    "options": [
      "Transmissão de dados em alta velocidade no cabo de rede",
      "Fornecimento de energia elétrica através do cabo Ethernet",
      "Protocolo de segurança que cifra o tráfego Ethernet",
      "Tipo de fibra óptica que leva luz por longas distâncias"
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
    "question": "Qual é a função do protocolo ARP?",
    "options": [
      "DNS: resolver nome para IP",
      "Resolver IP para endereço MAC",
      "Encaminhar pacotes na rede",
      "Cifrar dados no cabo da LAN"
    ],
    "correct": 1,
    "explanation": "ARP (Address Resolution Protocol) mapeia endereços IP para endereços MAC na mesma rede local.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um default gateway?",
    "options": [
      "O primeiro host ligado quando a rede local é criada",
      "O router que encaminha tráfego para fora da rede local",
      "Um servidor DNS que traduz nomes de host para IP",
      "Um switch gerenciável que comuta frames pela MAC"
    ],
    "correct": 1,
    "explanation": "O default gateway é o dispositivo (geralmente um router) que encaminha pacotes destinados a redes externas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é uma colisão em uma rede Ethernet?",
    "options": [
      "Quando dois dispositivos enviam dados ao mesmo tempo em half-duplex",
      "Quando o cabo Ethernet falha e o link físico da porta cai",
      "Quando o switch fica sobrecarregado e descarta frames na porta",
      "Quando um loop de camada 2 faz o broadcast circular na LAN"
    ],
    "correct": 0,
    "explanation": "Colisões ocorrem em redes half-duplex quando dois dispositivos transmitem simultaneamente.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função principal de um firewall?",
    "options": [
      "Aumentar a velocidade da rede aplicando uma política de banda",
      "Controlar o tráfego de entrada e saída com base em regras de segurança",
      "Atribuir endereços IP aos hosts por meio do protocolo DHCP",
      "Conectar redes Wi-Fi separadas como um ponto de acesso sem fio"
    ],
    "correct": 1,
    "explanation": "Firewalls inspecionam e controlam o tráfego de rede com base em regras de segurança predefinidas.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é SSID em uma rede wireless?",
    "options": [
      "Senha secreta da rede wireless",
      "Nome identificador da rede wireless",
      "Canal de frequência do rádio Wi-Fi",
      "Tipo de criptografia dos quadros"
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
      "Cabo direto usado para ligar um PC ao switch",
      "Cabo de fibra óptica usado em links longos",
      "Cabo de alimentação que leva energia ao switch"
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
    "explanation": "HTTP usa a porta TCP 80 por padrão; HTTPS (HTTP sobre TLS) usa a 443. Não confundir com DNS (53), SSH (22) ou Telnet (23).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um loopback interface?",
    "options": [
      "Interface física usada só em testes locais",
      "Interface virtual que permanece sempre ativa",
      "Interface serial usada na conexão WAN",
      "Interface física exclusiva à gerência local"
    ],
    "correct": 1,
    "explanation": "Loopback é uma interface virtual que permanece sempre up/up e é usada para testes e gerenciamento.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'copy running-config startup-config'?",
    "options": [
      "Zerar a configuração salva na NVRAM",
      "Salvar a configuração atual na NVRAM",
      "Recarregar roteador e reiniciar IOS",
      "Mostrar a configuração ativa da RAM"
    ],
    "correct": 1,
    "explanation": "Este comando salva a configuração em execução (RAM) na configuração de inicialização (NVRAM).",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é NAT (Network Address Translation)?",
    "options": [
      "Tradução de nomes de domínio para endereços IP",
      "Tradução de endereços IP privados para públicos",
      "Protocolo que encaminha rotas entre redes IP",
      "Tipo de cabo de par trançado usado na LAN"
    ],
    "correct": 1,
    "explanation": "NAT permite que múltiplos dispositivos em uma rede privada compartilhem um único endereço IP público.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença entre TCP e UDP?",
    "options": [
      "TCP é mais rápido que o UDP porque confirma cada segmento enviado",
      "TCP é orientado a conexão e confiável, UDP é sem conexão e mais rápido",
      "TCP e UDP funcionam do mesmo modo e garantem a mesma entrega",
      "UDP é usado apenas para enviar e-mail, como tráfego SMTP na porta 25"
    ],
    "correct": 1,
    "explanation": "TCP oferece entrega confiável com controle de fluxo e retransmissão. UDP é mais rápido mas não garante entrega.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um trunk port em um switch?",
    "options": [
      "Porta de acesso que pertence a uma única VLAN",
      "Porta que transporta tráfego de múltiplas VLANs",
      "Porta de gerência usada ao configurar o switch",
      "Porta PoE que entrega energia a um telefone IP"
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
      "Endereço IP dinâmico atribuído pelo servidor DHCP",
      "Endereço físico único de 48 bits gravado no hardware de rede",
      "Endereço lógico da rede, definido na camada 3 do IP",
      "Senha da rede sem fio pedida ao cliente ao conectar"
    ],
    "correct": 1,
    "explanation": "O endereço MAC é um identificador físico único de 48 bits atribuído pelo fabricante à interface de rede.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função do protocolo STP (Spanning Tree Protocol)?",
    "options": [
      "Elevar a velocidade dos links entre switches",
      "Evitar loops em redes com switches redundantes",
      "Atribuir endereços IP aos hosts via DHCP",
      "Criptografar os dados que passam nos switches"
    ],
    "correct": 1,
    "explanation": "STP evita loops em redes com caminhos redundantes bloqueando portas redundantes.",
    "difficulty": "Médio"
  },
  {
    "question": "O que significa 'up/up' no status de uma interface Cisco?",
    "options": [
      "Interface em shutdown administrativo (down)",
      "Interface com falha física na camada 1 (down)",
      "Interface ativa e operacional em camadas 1 e 2",
      "Interface marcada em manutenção pelo operador"
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
    "explanation": "O SSH usa a porta TCP 22 por padrão e cifra a sessão de gestão. Telnet usa 23 em claro; HTTPS é 443.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um broadcast domain?",
    "options": [
      "Hosts que trocam só unicast sem usar router",
      "Grupo de dispositivos que recebem broadcasts",
      "Apenas uma rede sem fio no padrão 802.11",
      "Tipo de cabo de cobre ou de fibra óptica"
    ],
    "correct": 1,
    "explanation": "Broadcast domain é o conjunto de dispositivos que recebem mensagens de broadcast enviadas por qualquer um deles.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual comando é usado para configurar uma interface com endereço IP?",
    "options": [
      "ip address 192.168.1.1 255.255.255.0",
      "interface ip 192.168.1.1 no IOS",
      "set ip 192.168.1.1 de outro sistema",
      "config ip 192.168.1.1 no modo EXEC"
    ],
    "correct": 0,
    "explanation": "O comando correto é 'ip address [IP] [máscara]' no modo de configuração de interface.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é WPA3 em redes wireless?",
    "options": [
      "Protocolo de encaminhamento como OSPF ou o RIP",
      "Padrão de segurança wireless mais recente e seguro",
      "Tipo de antena externa usada no ponto de acesso",
      "Canal de frequência de rádio, como o canal 6"
    ],
    "correct": 1,
    "explanation": "WPA3 é o padrão de segurança wireless mais recente, oferecendo melhor proteção contra ataques.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show version'?",
    "options": [
      "Mostrar a versão do IOS e informações do hardware",
      "Mostrar a running-config salva na memória RAM",
      "Reiniciar o equipamento com o comando reload",
      "Apagar a NVRAM com erase startup-config"
    ],
    "correct": 0,
    "explanation": "O comando 'show version' exibe a versão do software IOS, modelo do hardware e tempo de atividade.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um patch panel?",
    "options": [
      "Dispositivo para conexão física de cabos em um rack",
      "Tipo de switch que comuta quadros Ethernet na LAN",
      "Router wireless que encaminha pacotes entre redes",
      "Servidor DHCP que entrega endereços IP aos hosts"
    ],
    "correct": 0,
    "explanation": "Patch panel é um dispositivo passivo que organiza e facilita as conexões de cabos em um rack de rede.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a função do comando 'show interfaces status'?",
    "options": [
      "Mostrar o status de todas as interfaces",
      "Exibir as VLANs pelo comando show vlan",
      "Reiniciar o switch pelo comando reload",
      "Apagar logs pelo comando clear logging"
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
      "Cabo Ethernet direto (straight-through) para ligar o PC ao switch",
      "Cabo serial para acesso de linha de comando (CLI) em dispositivos Cisco",
      "Cabo de alimentação que leva energia elétrica ao equipamento",
      "Cabo crossover usado para ligar dois switches ou dois PCs"
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
      "Interface no estado normal, encaminhando quadros sem erro",
      "Interface desabilitada por erro (ex: loop, violação de segurança)",
      "Interface colocada em manutenção manual pelo operador",
      "Interface PoE que fornece energia elétrica ao dispositivo"
    ],
    "correct": 1,
    "explanation": "Err-disabled é um estado de proteção onde a interface é automaticamente desabilitada devido a erros como loops ou violação de port-security.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função principal de um Access Point wireless?",
    "options": [
      "Encaminhar pacotes IP entre sub-redes",
      "Conectar dispositivos wireless à rede cabeada",
      "Atribuir endereços IP aos hosts pelo DHCP",
      "Filtrar o tráfego com regras de uma ACL"
    ],
    "correct": 1,
    "explanation": "Access Points (APs) permitem que dispositivos wireless se conectem à rede cabeada, atuando como bridge.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é CDP (Cisco Discovery Protocol)?",
    "options": [
      "Protocolo de encaminhamento que troca rotas entre vizinhos",
      "Protocolo proprietário Cisco para descobrir dispositivos vizinhos",
      "Protocolo de segurança que cifra o tráfego entre switches",
      "Protocolo de backup que copia a configuração para um servidor"
    ],
    "correct": 1,
    "explanation": "CDP permite que dispositivos Cisco descubram informações sobre dispositivos vizinhos diretamente conectados.",
    "difficulty": "Médio"
  },
  {
    "question": "O que acontece quando você usa o comando 'no shutdown' em uma interface?",
    "options": [
      "Desabilita a interface usando shutdown",
      "Habilita a interface (coloca em estado up)",
      "Reinicia a interface recarregando o link",
      "Apaga a configuração gravada da interface"
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
    "explanation": "O comando reload reinicia o dispositivo Cisco (IOS). Não é write memory, não apaga a startup-config e não é só um reset de interface.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é um 'management VLAN'?",
    "options": [
      "VLAN de dados para o tráfego dos usuários",
      "VLAN dedicada para gerenciamento do switch",
      "VLAN de voz reservada aos telefones IP",
      "VLAN de vídeo para streams de câmeras IP"
    ],
    "correct": 1,
    "explanation": "Management VLAN é usada para tráfego de gerenciamento (SSH, SNMP, etc.) e deve ser isolada por segurança.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a principal vantagem de usar switches gerenciáveis?",
    "options": [
      "São mais baratos que modelos não gerenciáveis",
      "Permitem configuração, VLANs, QoS e monitoramento",
      "Comutam mais rápido que modelos não gerenciáveis",
      "Não precisam de energia elétrica para funcionar"
    ],
    "correct": 1,
    "explanation": "Switches gerenciáveis oferecem recursos avançados como VLANs, QoS, SNMP, port-security e CLI.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é 'port-security' em switches Cisco?",
    "options": [
      "Recurso para limitar o número de endereços MAC por porta",
      "Protocolo de encaminhamento que anuncia rotas na porta",
      "Tipo de cabo usado ao ligar o host à porta do switch",
      "Método de criptografia do tráfego que sai da porta"
    ],
    "correct": 0,
    "explanation": "Port-security permite restringir o acesso a uma porta com base em endereços MAC autorizados.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a função do comando 'show cdp neighbors'?",
    "options": [
      "Mostrar vizinhos descobertos via CDP",
      "Mostrar tabela IP de encaminhamento",
      "Mostrar a configuração de cada VLAN",
      "Mostrar os logs do sistema IOS"
    ],
    "correct": 0,
    "explanation": "O comando 'show cdp neighbors' exibe dispositivos Cisco vizinhos descobertos pelo CDP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um 'SFP' em equipamentos Cisco?",
    "options": [
      "Tipo de processador interno dos switches Cisco",
      "Módulo transceptor de fibra óptica ou cobre hot-swappable",
      "Protocolo de segurança que autentica portas de fibra",
      "Tipo de memória flash que guarda a imagem do IOS"
    ],
    "correct": 1,
    "explanation": "SFP (Small Form-factor Pluggable) é um módulo compacto hot-swappable para portas de fibra ou cobre.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual cabo Ethernet usa conector RJ-45?",
    "options": [
      "Coaxial RG-59 (BNC)",
      "Par trançado UTP/STP",
      "Fibra multimodo LC",
      "Serial V.35 (M34)"
    ],
    "correct": 1,
    "explanation": "Ethernet em cobre usa tipicamente par trançado terminado em RJ-45. Fibra usa conectores óticos (ex.: LC/SC), não RJ-45 no caminho ótico.",
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
    "explanation": "Os routers encaminham entre redes IP diferentes com base no IP de destino na tabela de rotas. Switches encaminham na LAN com base no MAC.",
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
    "explanation": "O DNS traduz nomes legíveis em endereços IP (e o inverso). Não é DHCP (atribuição de endereços) nem NAT (tradução de endereços).",
    "difficulty": "Fácil"
  },
  {
    "question": "Um switch unmanaged permite criar VLANs?",
    "options": [
      "Sim, criando VLANs pela CLI do switch",
      "Não, tudo fica no mesmo domínio de broadcast",
      "Sim, configurando VLANs por SNMP remoto",
      "Só se as portas tiverem alimentação PoE"
    ],
    "correct": 1,
    "explanation": "Switches unmanaged são plug-and-play: sem CLI/GUI, sem VLANs nem afinação de STP. Switches managed suportam VLANs, segurança e monitorização.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que é phishing?",
    "options": [
      "Ataque de força bruta que testa senhas na rede Wi-Fi",
      "Engano para obter credenciais ou dados, muitas vezes por email",
      "Inundação ICMP que satura o alvo com echo requests",
      "Espelhamento de portas que copia quadros para análise"
    ],
    "correct": 1,
    "explanation": "Phishing usa engenharia social para induzir a revelar credenciais ou abrir links maliciosos. Por si só não é um exploit de buffer overflow.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual cabo transmite dados por luz?",
    "options": [
      "Par UTP Cat6",
      "Fibra ótica",
      "Cabo coaxial",
      "Cabo USB 2.0"
    ],
    "correct": 1,
    "explanation": "A fibra ótica transporta dados em pulsos de luz e é imune a interferência eletromagnética (EMI). Cobre pode sofrer EMI; wireless sofre ruído RF.",
    "difficulty": "Fácil"
  },
  {
    "question": "SSH é preferível a Telnet porque?",
    "options": [
      "É mais rápido no login",
      "Cifra a sessão de gestão",
      "Envia a sessão por UDP",
      "Funciona sem camada IP"
    ],
    "correct": 1,
    "explanation": "SSH (TCP 22) cifra sessões CLI remotas; Telnet (TCP 23) envia credenciais e tráfego em claro e deve evitar-se em produção.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual camada OSI trata de segmentos TCP/UDP?",
    "options": [
      "A Rede (L3)",
      "Transporte",
      "Sessão (L5)",
      "Enlace (L2)"
    ],
    "correct": 1,
    "explanation": "A camada OSI 4 (Transporte) trata segmentos extremo-a-extremo com TCP (fiável) e UDP (sem conexão). A 3 é encaminhamento IP; a 2 são tramas/MAC.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é um bom hábito de palavra-passe?",
    "options": [
      "Reutilizar a mesma em todos os sites",
      "Única, longa e com MFA quando possível",
      "Partilhar a palavra-passe no chat",
      "Usar apenas quatro dígitos numéricos"
    ],
    "correct": 1,
    "explanation": "Passwords únicas e fortes mais MFA reduzem o impacto de roubo de credenciais. Partilhar uma password ou desativar atualizações aumenta o risco.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual comando Windows mostra o IP da máquina?",
    "options": [
      "ping",
      "ipconfig",
      "hostname -I",
      "show ip"
    ],
    "correct": 1,
    "explanation": "No Windows, ipconfig (ou ipconfig /all) mostra IP, máscara, gateway e DNS. Em Linux/macOS usa-se tipicamente ip addr ou ifconfig.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual incidente de segurança deves reportar?",
    "options": [
      "Aplicar atualizações do Windows",
      "Email a pedir a password do chefe",
      "Mudar o papel de parede do PC",
      "Abrir o browser no computador"
    ],
    "correct": 1,
    "explanation": "Pedidos inesperados de credenciais por email/chat são phishing clássico: verificar por outro canal e reportar ao IT/SOC. Não enviar passwords.",
    "difficulty": "Fácil"
  },
  {
    "question": "Cat5e/Cat6 descrevem o que?",
    "options": [
      "Normas de fibra ótica e o alcance ótico máximo",
      "Categorias de cabo de par trançado e largura de banda",
      "Tipos de conector de fibra ótica, como LC ou SC",
      "Canais de Wi-Fi nas bandas de 2,4 GHz e de 5 GHz"
    ],
    "correct": 1,
    "explanation": "A categoria UTP (Cat5e, Cat6, etc.) define os limites de desempenho do cabo (velocidade/frequência). O conector sozinho não define a categoria.",
    "difficulty": "Médio"
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
      "O T568A serve somente para terminar conectores de fibra",
      "Os pares laranja e verde trocam de posição nos pinos 1-2 e 3-6",
      "O T568B deixa de funcionar quando a ligação é Gigabit",
      "Não existe diferença elétrica nenhuma entre os pinos 1-8"
    ],
    "correct": 1,
    "explanation": "Ambos os padrões usam os mesmos quatro pares; apenas os pares laranja e verde estão invertidos. Um cabo com T568A numa ponta e T568B na outra é crossover. Em instalações modernas o T568B é o mais comum nos EUA.",
    "difficulty": "Médio"
  },
  {
    "question": "Quando se deve preferir fibra monomodo em vez de multimodo?",
    "options": [
      "Sempre nas LANs curtas de escritório com transceivers baratos",
      "Para longas distâncias (campus/WAN) com laser de comprimento de onda longo",
      "Apenas quando a fibra tem de alimentar o equipamento por PoE",
      "Nunca, porque a fibra multimodo chega a qualquer distância pedida"
    ],
    "correct": 1,
    "explanation": "Fibra monomodo tem núcleo estreito (~9 µm) e usa laser; a dispersão é baixa, permitindo dezenas de km. Multimodo (50/62,5 µm) é mais barata em transceivers de curta distância (até algumas centenas de metros) mas não escala bem em longas ligações.",
    "difficulty": "Médio"
  },
  {
    "question": "O que faz a função Auto-MDIX numa porta Ethernet?",
    "options": [
      "Negocia a classe de potência PoE nessa porta Ethernet",
      "Deteta e corrige internamente cabo straight-through vs crossover",
      "Desativa o protocolo Spanning Tree na porta do switch",
      "Atribui um endereço IPv4 ao host que está ligado à porta"
    ],
    "correct": 1,
    "explanation": "Auto-MDIX cruza eletronicamente os pares de TX/RX quando necessário, pelo que um cabo straight-through funciona entre switch-switch, PC-PC ou switch-PC. Em equipamento moderno o Auto-MDIX está normalmente ativo com auto-negociação.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um PC sem DHCP mostra o endereço 169.254.23.10. O que isso indica?",
    "options": [
      "O gateway padrão foi configurado à mão no próprio host",
      "O host atribuiu um endereço APIPA porque não recebeu lease DHCP",
      "Trata-se de um endereço público encaminhável na Internet",
      "O cabo de rede ficou em loopback físico na própria porta"
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
      "Atribuir endereços IP dinâmicos aos hosts da LAN, como faz um servidor DHCP local",
      "Transportar mensagens de controlo e diagnóstico da camada de rede (ex.: echo, unreachable)",
      "Criptografar sessões web com TLS para que o HTTPS proteja os dados da aplicação",
      "Negociar e propagar VLANs entre switches com o VTP em modo servidor ou cliente"
    ],
    "correct": 1,
    "explanation": "ICMP (e ICMPv6) transporta sinalização da camada 3: echo request/reply (ping), destination unreachable, time exceeded (usado pelo traceroute), redirect, etc. Não atribui endereços nem cifra dados de aplicação.",
    "difficulty": "Fácil"
  },
  {
    "question": "Como é que o traceroute descobre cada salto até ao destino?",
    "options": [
      "Consulta o DNS reverso (registos PTR) de todos os routers para achar o salto",
      "Envia sondas com TTL crescente e lê as respostas ICMP Time Exceeded",
      "Usa pedidos ARP em cada hop da Internet para obter o MAC do router seguinte",
      "Abre uma sessão TCP completa na porta 80 de cada router e lê o banner HTTP"
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
      "Todos os dispositivos que partilham o mesmo endereço IP dentro da sub-rede",
      "O conjunto de portas/meios onde uma transmissão pode colidir com outra",
      "Uma VLAN inteira, com todas as portas de acesso e os troncos dessa VLAN",
      "Apenas o segmento Wi-Fi das estações ligadas a um único ponto de acesso"
    ],
    "correct": 1,
    "explanation": "Num hub, todas as portas formam um único domínio de colisão. Um switch cria um domínio de colisão por porta (full-duplex elimina colisões). Isto é distinto do domínio de broadcast, que coincide tipicamente com a VLAN.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é CSMA/CD?",
    "options": [
      "Um protocolo de routing da camada 3, como OSPF ou RIP, que escolhe o melhor caminho na rede",
      "Método de acesso ao meio em Ethernet half-duplex: escuta, transmite e deteta colisões",
      "Criptografia wireless, como WPA2 ou WPA3, que protege o tráfego das redes Wi-Fi",
      "Um tipo de fibra ótica monomodo usado em ligações de longa distância entre os edifícios"
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
      "Cisco Internal Device Register — registo interno dos equipamentos Cisco instalados na rede",
      "Classless Inter-Domain Routing — prefixos com máscara variável em vez de classes A/B/C rígidas",
      "Um tipo de cabo coaxial fino, como o 10BASE2, usado na Ethernet antiga de barramento partilhado",
      "Protocolo de autenticação wireless, como o WPA2-Enterprise com 802.1X e um servidor RADIUS"
    ],
    "correct": 1,
    "explanation": "CIDR abandonou as classes fixas (/8, /16, /24) e permite prefixos como /22 ou /13. Isso torna o endereçamento e o sumarização na Internet (e nas LANs) muito mais eficientes.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve o endereço IPv4 127.0.0.1?",
    "options": [
      "Gateway padrão da Internet, usado pelo host para sair da LAN para a WAN",
      "Loopback do próprio host, para testar a stack TCP/IP local",
      "Broadcast da LAN, que entrega a trama a todos os hosts da mesma sub-rede",
      "Primeiro endereço APIPA, dado ao host se o servidor DHCP não responde"
    ],
    "correct": 1,
    "explanation": "Toda a gama 127.0.0.0/8 é loopback; 127.0.0.1 é o mais usado. Um ping a 127.0.0.1 confirma que a stack IP da máquina está operacional, independentemente do cabo ou do NIC.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual afirmação descreve corretamente unicast, broadcast e multicast?",
    "options": [
      "Unicast vai para todos os hosts; broadcast entrega o pacote apenas a um destino",
      "Unicast: um destino; broadcast: todos no domínio; multicast: um grupo inscrito",
      "Multicast substitui o ARP e resolve o MAC de unicast IPv4 sem usar broadcast",
      "Broadcast só existe em IPv6 e não tem equivalente nas redes IPv4 clássicas"
    ],
    "correct": 1,
    "explanation": "Unicast entrega a um único endereço. Broadcast (255.255.255.255 ou o broadcast da sub-rede) chega a todos os nós do domínio de broadcast. Multicast (224.0.0.0/4 ou FF00::/8) entrega apenas aos recetores que aderiram ao grupo.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a vantagem do cabo STP (Shielded Twisted Pair) face ao UTP?",
    "options": [
      "Suporta sempre ligações de 100 km, como se fosse fibra ótica de longo alcance",
      "A malha/folha metálica reduz interferência eletromagnética (EMI)",
      "É obrigatório para Fast Ethernet, porque o UTP não transporta 100 Mb/s",
      "Não precisa de conector RJ-45 e termina apenas em fichas coaxiais do tipo BNC"
    ],
    "correct": 1,
    "explanation": "STP adiciona blindagem que rejeita EMI em ambientes industriais, junto a motores ou elevadores. Exige ligação correta à terra; caso contrário a blindagem pode piorar o ruído. UTP basta na maioria dos escritórios.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a potência aproximada disponível em PoE+ (IEEE 802.3at) na porta PD?",
    "options": [
      "cerca de 4 W no PD, dado como o teto de potência do PoE+ 802.3at",
      "cerca de 15 W (802.3af) vs cerca de 25–30 W em 802.3at",
      "100 W apenas em Fast Ethernet e nenhuma energia em ligações Gigabit",
      "PoE+ não fornece energia; limita-se a negociar a velocidade do link"
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
      "ACL a bloquear ICMP, o que faz subir os CRC quando os pings são descartados",
      "Mismatch de duplex (um lado half, outro full) ou cabo danificado",
      "DNS em falta no host, que corrompe as tramas Ethernet e aumenta os erros CRC",
      "VLAN nativa diferente no PC, que desalinha o 802.1Q e provoca erros de CRC"
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
      "enable password cifra a palavra-passe com AES-256 de raiz, em vez de texto claro ou do tipo 7 reversível",
      "enable secret guarda um hash (MD5/tipo 5 ou mais forte); enable password fica em texto fraco ou tipo 7 reversível",
      "enable secret e enable password são sinónimos e gravam a mesma credencial da mesma forma no running-config",
      "enable secret só autentica sessões Telnet e é ignorado na consola, no SSH e no acesso local ao próprio equipamento"
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
      "Transporta todas as VLANs com etiquetas 802.1Q para o vizinho, tal como um trunk",
      "Pertence a uma única VLAN e envia tráfego untagged para o host",
      "Só funciona quando a porta está ligada a um router e nunca a um host",
      "Desativa o MAC learning e deixa de atualizar a tabela CAM dessa porta"
    ],
    "correct": 1,
    "explanation": "Uma access port mapeia para uma VLAN (switchport access vlan X). O frame para o PC não leva tag 802.1Q. Trunks, pelo contrário, marcam as VLANs para o vizinho (exceto a native).",
    "difficulty": "Médio"
  },
  {
    "question": "O que é o LLDP?",
    "options": [
      "Protocolo de routing proprietário da Cisco que anuncia rotas entre routers vizinhos na rede",
      "Protocolo aberto (IEEE 802.1AB) para anunciar identidade e capacidades a vizinhos",
      "Um tipo de ACL que filtra pacotes pelo endereço IP de origem e pelo número da porta",
      "Uma cifra de wireless, como o WPA2-PSK, que protege os frames 802.11 transmitidos no ar"
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
      "O cobre do par entrançado derrete com apenas 5 V induzidos pelo motor elétrico ao lado",
      "Interferência eletromagnética (EMI) induz ruído que aumenta CRC e retransmissões",
      "Os motores elétricos consomem todos os endereços MAC guardados na tabela CAM do switch",
      "O STP deixa de convergir porque o motor anula os BPDUs recebidos nessa porta de cobre"
    ],
    "correct": 1,
    "explanation": "Campos eletromagnéticos induzem tensão nos pares. Isso corrompe bits, sobe CRC/input errors e pode derrubar o link. A mitigação é afastamento, cabo blindado, fibra (imune a EMI) e boa terra.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quantos bits tem um endereço MAC IEEE e como se escreve habitualmente?",
    "options": [
      "32 bits escritos em decimal pontuado, no mesmo formato usado por um endereço IPv4",
      "48 bits em hexadecimal, frequentemente 6 octetos (ex.: 00:1A:2B:3C:4D:5E)",
      "128 bits em hexadecimal, como um endereço IPv6, com grupos separados por dois pontos",
      "16 bits escritos apenas em binário, com dois octetos e sem qualquer notação hexadecimal"
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
      "Porque o rádio Wi-Fi é full-duplex por natureza e a estação consegue transmitir e detetar a colisão ao mesmo tempo nesse canal",
      "Estações não conseguem transmitir e detetar colisão ao mesmo tempo no mesmo canal; por isso evitam colisões (NAV, RTS/CTS, backoff)",
      "Porque o CSMA/CD é exclusivo do IPv6 e não faz parte da Ethernet partilhada nem do método de acesso ao meio nas redes 802.11",
      "Apenas porque a IEEE proibiu o CSMA/CD no padrão 802.11 sem qualquer razão técnica ligada ao meio rádio local partilhado e half-duplex"
    ],
    "correct": 1,
    "explanation": "Num meio half-duplex partilhado, o recetor do próprio emissor fica saturado — não dá para 'ouvir a colisão' como no cobre partilhado. 802.11 usa collision avoidance: carrier sense, intervalos IFS, backoff aleatório e opcionalmente RTS/CTS.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é uma diferença típica entre 2,4 GHz e 5 GHz em Wi-Fi?",
    "options": [
      "5 GHz atravessa paredes e obstáculos sempre melhor do que 2,4 GHz e chega mais longe no interior dos edifícios",
      "2,4 GHz propaga-se mais longe e atravessa obstáculos melhor, mas tem menos canais não sobrepostos e mais interferência",
      "2,4 GHz só existe no padrão 802.11ac e não está disponível no 802.11b, no 802.11g nem no 802.11n",
      "Não há diferença de alcance nem de penetração em obstáculos entre 2,4 GHz e 5 GHz nas mesmas condições reais de instalação"
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
      "A configuração BGP e as rotas eBGP anunciadas pelo vizinho externo",
      "Camada 1: cabo, LEDs, SFP, energia e estado físico da interface",
      "As políticas de QoS e a marcação DSCP na interface de saída",
      "Os certificados 802.1X e a autenticação RADIUS do cliente final"
    ],
    "correct": 1,
    "explanation": "Sem sinal físico (LED apagado, cabo partido, SFP ausente, interface administratively down) nada nas camadas superiores funciona. Confirmar Camada 1 evita horas a depurar OSPF ou DNS em vão.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em que cenário a fibra ótica é claramente preferível ao cobre UTP?",
    "options": [
      "Um patch de 1 metro entre o PC e o switch, no mesmo bastidor e sem interferência eletromagnética forte",
      "Ligação longa, entre edifícios, ou ambiente com forte EMI, onde o cobre excede 100 m ou capta ruído",
      "A alimentação PoE de um telefone de secretária, que precisa de energia elétrica entregue pelo cabo de cobre",
      "A ligação de consola de um router, feita com cabo série ou USB e sem qualquer trama Ethernet no meio"
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
      "User EXEC usa o prompt '#' e Privilege EXEC usa '>', invertendo os dois níveis reais de acesso da linha de comandos do Cisco IOS",
      "User EXEC mostra '>' e comandos limitados; Privilege EXEC mostra '#' após 'enable' e permite show/debug avançados e configuração",
      "Não existe diferença de prompt nem de comandos permitidos entre o modo User EXEC e o modo Privilege EXEC na CLI do IOS",
      "Privilege EXEC só existe em firewalls ASA e não está disponível em routers nem em switches que correm o software IOS"
    ],
    "correct": 1,
    "explanation": "O prompt '>' é User EXEC (pings, alguns shows). O comando enable (com secret) sobe para '#' Privilege EXEC, de onde se entra em configuration terminal. Separar estes níveis é a base do controlo de acesso CLI.",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é a porta padrão do HTTPS e o que o distingue do HTTP?",
    "options": [
      "80, e usa Telnet em claro na sessão web, sem qualquer TLS",
      "443, e cifra a sessão com TLS; HTTP na 80 vai em claro",
      "22, e cifra a sessão web com SSH, em vez de TLS na porta 443",
      "53, e autentica a sessão web com DNSSEC, em vez de TLS"
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
      "Servir apenas como consola série RJ-45, sem tramas Ethernet e sem 10GBASE-T",
      "Melhor imunidade a diafonia e suporte a 10GBASE-T em distâncias curtas (tipicamente até 55 m)",
      "Substituir toda a fibra metropolitana, incluindo as ligações longas de operador e os sistemas DWDM",
      "Alimentar 100 W nos pares de dados sem PoE, fora de qualquer norma de potência IEEE 802.3"
    ],
    "correct": 1,
    "explanation": "Cat6 tem especificações mais apertadas de crosstalk até 250 MHz e permite 10GBASE-T em canais curtos. Cat5e chega bem a 1 Gb/s em 100 m. Cat6A estende 10 Gb/s aos 100 m.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual conetor ótico é o mais comum em transceivers SFP/SFP+ modernos?",
    "options": [
      "BNC coaxial de baioneta, usado no 10BASE2 de 50 ohm",
      "LC (Lucent Connector), pequeno e com trava",
      "DB-9 série, de consola RS-232, sem fibra ótica",
      "RJ-11 telefónico, de par único, para linha analógica"
    ],
    "correct": 1,
    "explanation": "SFP usa quase sempre duplex LC. SC é mais antigo e maior (ainda visto em GBIC/patch panels). ST é baioneta legado. BNC é coaxial; DB-9 é consola série; RJ-11 é telefone.",
    "difficulty": "Médio"
  },
  {
    "question": "Um utilizador faz ping ao IP do servidor com sucesso mas o browser não abre o site pelo nome. Qual é a causa mais provável?",
    "options": [
      "O cabo do PC ao switch está partido na camada física",
      "Falha de DNS (servidor DNS em falta, errado ou filtrado)",
      "O switch sem PoE impede o browser de abrir o site pelo nome",
      "O STP bloqueou o ICMP na porta de acesso do utilizador"
    ],
    "correct": 1,
    "explanation": "Ping por IP prova Camadas 1–3 até ao servidor. Resolver o nome exige DNS (porta 53). Verificar ipconfig/ifconfig, o servidor DNS configurado e um nslookup/dig isola o problema em segundos.",
    "difficulty": "Médio"
  },
  {
    "question": "Um cabo Ethernet straight-through (direto) liga tipicamente que dispositivos?",
    "options": [
      "PC a PC, ou switch a switch, sem Auto-MDIX (MDI a MDI)",
      "PC a switch, ou router a switch (MDI a MDI-X)",
      "Apenas consolas Cisco com cabo rollover RJ-45",
      "Apenas fibra multimodo com conetores LC duplex"
    ],
    "correct": 1,
    "explanation": "O cabo direto mantém a pinagem igual nas duas pontas e liga MDI (NIC/router) a MDI-X (switch/hub). PC-PC ou switch-switch clássicos usavam crossover; o Auto-MDIX moderno torna o tipo quase irrelevante.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quantos domínios de colisão cria um switch Ethernet de 24 portas em full-duplex?",
    "options": [
      "1 domínio de colisão, como se as 24 portas fossem um hub",
      "2 domínios de colisão, um para cada sentido do full-duplex",
      "12 domínios de colisão, só metade das portas do switch",
      "24"
    ],
    "correct": 3,
    "explanation": "Cada porta de switch é um domínio de colisão próprio. Em full-duplex as colisões deixam de ocorrer, mas o isolamento por porta mantém-se: 24 portas = 24 domínios. Um hub de 24 portas seria um único domínio.",
    "difficulty": "Médio"
  },
  {
    "question": "O que delimita um domínio de broadcast IPv4 numa LAN clássica?",
    "options": [
      "Cada cabo de cobre entre o PC e o switch de acesso",
      "Uma VLAN ou uma interface de router (L3)",
      "Cada porta de um hub, isolando o broadcast local",
      "O endereço MAC de origem da trama de broadcast"
    ],
    "correct": 1,
    "explanation": "Broadcasts L2 (ff:ff:ff:ff:ff:ff) ficam dentro da VLAN. Um router (ou SVI/L3) não reencaminha broadcasts entre redes, por isso cada VLAN/sub-rede é um domínio de broadcast.",
    "difficulty": "Médio"
  },
  {
    "question": "No modelo OSI, como se chamam as PDUs das camadas Transporte, Rede, Enlace e Física?",
    "options": [
      "Pacote, frame, segmento, bit",
      "Segmento, pacote, frame, bits",
      "Frame, segmento, pacote, célula",
      "Datagrama, célula, frame, segmento"
    ],
    "correct": 1,
    "explanation": "Convenção comum: L4 segmento (TCP) ou datagrama (UDP), L3 pacote, L2 frame, L1 bits. A encapsulação adiciona cabeçalhos ao descer as camadas.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual camada OSI é responsável por HTTP, DNS e SMTP?",
    "options": [
      "Transporte",
      "Aplicação",
      "Rede",
      "Enlace"
    ],
    "correct": 1,
    "explanation": "HTTP, DNS e SMTP são protocolos de aplicação. No TCP/IP a camada de Aplicação absorve também sessão e apresentação do OSI.",
    "difficulty": "Fácil"
  },
  {
    "question": "A camada Internet do modelo TCP/IP corresponde principalmente a que camada OSI?",
    "options": [
      "Física",
      "Enlace",
      "Rede",
      "Transporte"
    ],
    "correct": 2,
    "explanation": "A camada Internet trata de IP, ICMP e encaminhamento — funções da camada de Rede (L3) do OSI. Enlace+Física mapeiam para Network Access/Link.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quantos endereços IPv4 de host utilizáveis há numa sub-rede /30?",
    "options": [
      "0",
      "2",
      "4",
      "6"
    ],
    "correct": 1,
    "explanation": "Uma /30 tem 2 bits de host: 4 endereços no total. Reservam-se rede e broadcast, restam 2 hosts — típico em ligações ponto-a-ponto entre routers.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que se usa por vezes uma IPv4 /31 em ligações ponto-a-ponto?",
    "options": [
      "Para ter 30 hosts de utilizador numa LAN clássica com broadcast",
      "Para usar os dois endereços sem reservar rede/broadcast (RFC 3021)",
      "Só em Wi-Fi, para o ponto de acesso falar com um único cliente associado",
      "Substitui o endereço IPv6 link-local fe80:: em cada interface do router"
    ],
    "correct": 1,
    "explanation": "O RFC 3021 permite /31 em links ponto-a-ponto: os dois endereços são utilizáveis, poupando o desperdício da /30. Não é para LANs com broadcast.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual prefixo identifica um endereço IPv6 global unicast (GUA) típico?",
    "options": [
      "FE80::/10",
      "FF00::/8",
      "2000::/3",
      "FC00::/7"
    ],
    "correct": 2,
    "explanation": "Os GUA atuais estão em 2000::/3 (começam frequentemente por 2 ou 3). FE80::/10 é link-local, FF00::/8 multicast, FC00::/7 unique local (fd00::/8 na prática).",
    "difficulty": "Médio"
  },
  {
    "question": "Qual prefixo identifica multicast IPv6?",
    "options": [
      "2000::/3",
      "FE80::/10",
      "FF00::/8",
      "::1/128"
    ],
    "correct": 2,
    "explanation": "Todo o multicast IPv6 começa por FF. Exemplos: FF02::1 all-nodes link-local, FF02::2 all-routers. Não há broadcast IPv6; usa-se multicast.",
    "difficulty": "Médio"
  },
  {
    "question": "O que representa o endereço IPv6 :: (dois dois-pontos só)?",
    "options": [
      "Loopback do host, o mesmo papel do endereço ::1",
      "Link-local de todos os nós, o multicast ff02::1",
      "Endereço não especificado (unspecified)",
      "Multicast all-routers, o grupo ff02::2 na ligação"
    ],
    "correct": 2,
    "explanation": ":: é o endereço unspecified (::/128), usado como origem antes de o host ter endereço. Loopback é ::1. Não se atribui :: a uma interface.",
    "difficulty": "Médio"
  },
  {
    "question": "Wi-Fi 5 corresponde a que padrão IEEE?",
    "options": [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.11be"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 4 = 802.11n, Wi-Fi 5 = 802.11ac (sobretudo 5 GHz), Wi-Fi 6 = 802.11ax, Wi-Fi 7 = 802.11be.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quais canais de 20 MHz em 2,4 GHz são os clássicos sem sobreposição?",
    "options": [
      "1, 2 e 3",
      "1, 6 e 11",
      "3, 8 e 13",
      "5, 10 e 14"
    ],
    "correct": 1,
    "explanation": "Em 2,4 GHz os canais 1, 6 e 11 (espaçados 25 MHz) são a escolha clássica para minimizar sobreposição. Canais adjacentes interferem uns com os outros.",
    "difficulty": "Médio"
  },
  {
    "question": "Um micro-ondas na sala de estar costuma degradar sobretudo que banda Wi-Fi?",
    "options": [
      "5 GHz",
      "6 GHz",
      "2,4 GHz",
      "Fibra ótica"
    ],
    "correct": 2,
    "explanation": "Muitos micro-ondas emitem ruído em torno de 2,4 GHz. A banda de 5/6 GHz está noutro intervalo e sofre menos desta interferência (mas tem menos alcance).",
    "difficulty": "Fácil"
  },
  {
    "question": "Qual é o risco principal de uma rede Wi-Fi aberta (sem palavra-passe)?",
    "options": [
      "O DHCP deixa de funcionar e o cliente fica sem endereço",
      "Terceiros na mesma BSS podem capturar tráfego não cifrado",
      "Os canais 1, 6 e 11 fecham e o AP perde a banda de 2,4 GHz",
      "O AP deixa de emitir beacon e desaparece do varrimento do cliente"
    ],
    "correct": 1,
    "explanation": "Sem encriptação de camada 2, quem estiver associado (ou por vezes mesmo à escuta) pode ler frames. Use WPA2/WPA3 e, em redes públicas, um VPN.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que caracteriza um ataque de ransomware?",
    "options": [
      "Envia spam DNS para encher a cache do resolvedor da vítima",
      "Cifra ficheiros da vítima e exige resgate para a chave",
      "Só altera o SSID da rede sem fios da vítima, sem mais efeito",
      "É sempre um cabo desligado na porta do switch da vítima"
    ],
    "correct": 1,
    "explanation": "Ransomware é malware que cifra dados e pede pagamento. Mitigação: backups offline, atualizações, filtros de correio e não abrir anexos duvidosos. Não se deve treinar o pagamento como solução.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um 'técnico' desconhecido liga para o help-desk a pedir a palavra-passe do administrador. Isto é sobretudo:",
    "options": [
      "Falha de STP",
      "Engenharia social",
      "Um problema de PoE",
      "NAT overload"
    ],
    "correct": 1,
    "explanation": "Engenharia social explora pessoas, não bugs de protocolo. Nunca se revelam credenciais por telefone sem procedimento de verificação. Reporta-se o incidente.",
    "difficulty": "Médio"
  },
  {
    "question": "Deixar a palavra-passe de fábrica num router doméstico é perigoso porque:",
    "options": [
      "O NAT deixa de traduzir os endereços privados da LAN para o IP público da WAN",
      "Credenciais públicas permitem acesso de administração a quem chegar à rede",
      "O cabo Cat6 deixa de negociar Gigabit entre o router e o computador",
      "O DHCP do router só oferece endereços APIPA da rede 169.254.0.0/16"
    ],
    "correct": 1,
    "explanation": "Fabricantes publicam defaults (admin/admin, etc.). Qualquer cliente Wi-Fi ou WAN exposta pode usá-las. Altera-se na instalação e desativa-se WPS fraco.",
    "difficulty": "Fácil"
  },
  {
    "question": "Olha para este output de ping. O que indica o resultado?",
    "options": [
      "O destino 8.8.8.8 está inalcançável na camada 3, sem eco ICMP",
      "Há conectividade IP até 8.8.8.8, com RTT baixo e 0% de perda",
      "O DNS falhou ao resolver o destino antes de enviar o eco ICMP",
      "O cabo do PC está em half-duplex e limita o enlace a 100 Mb/s"
    ],
    "correct": 1,
    "explanation": "Quatro ecos ICMP respondidos, 0% loss e RTT ~12 ms mostram alcance IP até ao destino. Isto não prova HTTP/DNS; só ICMP echo.",
    "difficulty": "Fácil",
    "cli": "PC> ping 8.8.8.8\nPinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\nReply from 8.8.8.8: bytes=32 time=11ms TTL=117\nReply from 8.8.8.8: bytes=32 time=13ms TTL=117\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\n\nPing statistics for 8.8.8.8:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 11ms, Maximum = 13ms, Average = 12ms"
  },
  {
    "question": "Olha para este traceroute. O que significam os asteriscos no salto 4?",
    "options": [
      "O destino 203.0.113.10 respondeu com sucesso e sem perda às três sondas ICMP do salto 4",
      "Esse salto não devolveu ICMP Time Exceeded a tempo (filtro, perda ou sem resposta)",
      "O cabo do PC está partido, logo nenhuma sonda do salto 4 consegue voltar",
      "O traceroute usa sempre TCP na porta 80 para sondar cada salto do caminho"
    ],
    "correct": 1,
    "explanation": "Cada salto recebe um probe com TTL crescente. Se o router não enviar Time Exceeded (política ICMP, firewall, perda), vê-se * * *. O traceroute pode mesmo assim chegar ao destino nos saltos seguintes.",
    "difficulty": "Médio",
    "cli": "PC> tracert 203.0.113.10\nTracing route to 203.0.113.10 over a maximum of 30 hops\n\n  1    <1 ms    <1 ms    <1 ms  192.168.1.1\n  2     4 ms     4 ms     5 ms  10.20.0.1\n  3    12 ms    11 ms    12 ms  198.51.100.1\n  4     *        *        *\n  5    28 ms    27 ms    29 ms  203.0.113.10\n\nTrace complete."
  },
  {
    "question": "Um utilizador pinga o gateway da LAN mas não pinga 8.8.8.8. Qual causa é a mais provável?",
    "options": [
      "Um SSID oculto impede o cliente de se associar à rede sem fios",
      "Falha de encaminhamento WAN/NAT ou default gateway errado no caminho",
      "O switch não tem tabela MAC e deixa de encaminhar os frames da VLAN local",
      "O cabo é Cat6 em vez de Cat5e e por isso corta o acesso à WAN"
    ],
    "correct": 1,
    "explanation": "Ping ao gateway prova L2/L3 local. Falha para um IP público aponta para WAN, NAT, firewall de perímetro ou rota default em falta — não para DNS (usou-se um IP).",
    "difficulty": "Médio"
  },
  {
    "question": "Dois PCs na mesma VLAN têm o mesmo endereço IPv4. Qual sintoma é típico?",
    "options": [
      "O STP elege dois roots na VLAN e bloqueia portas de acesso",
      "Perdas intermitentes, mensagens de duplicate IP e ARP instável",
      "O PoE desliga-se nas portas de acesso onde estão esses dois PCs",
      "O tronco 802.1Q passa a half-duplex entre os dois switches"
    ],
    "correct": 1,
    "explanation": "IPs duplicados geram conflitos ARP: o tráfego oscila entre os dois MACs. Windows mostra 'IP address conflict'. Cada host na VLAN precisa de um IPv4 único.",
    "difficulty": "Médio"
  },
  {
    "question": "O LED de link de uma porta de switch está apagado. Qual deve ser o primeiro passo de help-desk?",
    "options": [
      "Formatar o disco do PC e reinstalar o sistema operativo antes de testar o cabo",
      "Verificar cabo, inserção do conetor e se o outro extremo tem energia/link",
      "Mudar o spanning-tree de PVST para MST em todos os switches da LAN",
      "Ativar o BGP no switch para anunciar o prefixo da VLAN afetada"
    ],
    "correct": 1,
    "explanation": "Sem link light não há camada 1. Confirma-se cabo, porta, speed/duplex só depois de haver link. Problemas L3 (IP/DNS) vêm a seguir.",
    "difficulty": "Fácil"
  },
  {
    "question": "Quando um switch recebe um frame unicast cujo MAC de destino ainda não está na tabela CAM, o que faz?",
    "options": [
      "Descarta sempre o frame unicast porque o MAC de destino não está na CAM",
      "Inunda (flood) o frame pelas portas da VLAN, exceto a de entrada",
      "Converte o frame num multicast IP 224.0.0.1 dirigido a toda a VLAN",
      "Envia o frame apenas ao default gateway, pela porta do router"
    ],
    "correct": 1,
    "explanation": "Unknown unicast flooding: o switch trata o destino desconhecido como se precisasse de chegar a toda a VLAN. Assim que vê o MAC de origem numa resposta, grava a porta na CAM.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual registo DNS traduz um nome de host para um endereço IPv6?",
    "options": [
      "A, que mapeia o nome de host apenas para um endereço IPv4",
      "AAAA",
      "MX, que indica o servidor de correio responsável pelo domínio",
      "PTR, que faz a resolução inversa de um endereço IP para o nome"
    ],
    "correct": 1,
    "explanation": "A mapeia nome→IPv4; AAAA (quad-A) mapeia nome→IPv6; MX é correio; PTR é o inverso (IP→nome).",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve o comando nslookup (ou dig) no troubleshooting?",
    "options": [
      "Negociar um EtherChannel LACP entre o switch e o servidor de ficheiros",
      "Consultar o DNS e ver se um nome resolve para o IP esperado",
      "Cifrar o tráfego HTTPS com TLS no browser do utilizador",
      "Atribuir VLANs de acesso às portas do switch de acesso"
    ],
    "correct": 1,
    "explanation": "nslookup/dig interrogam um resolvedor DNS. Se o ping a um IP funciona mas o nome falha, o problema é DNS, não a WAN.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um PC comunica com outros da mesma VLAN mas não com a Internet, e o default gateway está em branco. O que falta?",
    "options": [
      "Um segundo SSID no ponto de acesso da rede sem fios",
      "A rota/default gateway para sair da sub-rede local",
      "Um cabo crossover do PC até à porta de acesso do switch",
      "Desativar o ARP na placa de rede para sair da sub-rede"
    ],
    "correct": 1,
    "explanation": "Tráfego intra-VLAN não precisa de gateway. Para outras redes o host envia ao default gateway (router/SVI da VLAN). Sem gateway, só a sub-rede local.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é a diferença essencial entre running-config e startup-config num dispositivo Cisco?",
    "options": [
      "Não há diferença: running-config e startup-config são o mesmo ficheiro",
      "Running está na RAM (ativa); startup está na NVRAM e aplica-se no boot",
      "A startup-config está sempre dentro da imagem IOS gravada na flash",
      "A running-config só existe em switches e nunca é usada em routers"
    ],
    "correct": 1,
    "explanation": "Alterações na RAM perdem-se no reload se não se fizer copy running-config startup-config. show running-config vê o ativo; show startup-config vê o guardado.",
    "difficulty": "Fácil"
  },
  {
    "question": "O cabo Cat6A, relativamente ao Cat6, destina-se sobretudo a quê?",
    "options": [
      "Só telefonia analógica, em pares de voz, sem dados Ethernet",
      "10GBASE-T em até 100 m com melhor controlo de alien crosstalk",
      "Substituir sempre a fibra monomodo nas ligações WAN de longo alcance",
      "Só alimentação PoE, sem pares de dados para o tráfego Ethernet"
    ],
    "correct": 1,
    "explanation": "Cat6 costuma limitar 10 Gb/s a distâncias curtas (~55 m em alguns canais). Cat6A foi desenhado para 10GBASE-T a 100 m. Cat5e fica-se tipicamente por 1 Gb/s a 100 m.",
    "difficulty": "Médio"
  },
  {
    "question": "O endereço IPv4 255.255.255.255 é:",
    "options": [
      "Um unicast de loopback, como o 127.0.0.1 do próprio host",
      "Broadcast limitado (limited broadcast) da sub-rede local",
      "Multicast all-routers em 224.0.0.2 para todos os routers",
      "O primeiro host utilizável de qualquer sub-rede IPv4 /24"
    ],
    "correct": 1,
    "explanation": "255.255.255.255 não é encaminhado por routers. É o broadcast local. O broadcast dirigido de uma /24 seria, por exemplo, 192.168.1.255.",
    "difficulty": "Médio"
  },
  {
    "question": "O endereço IPv4 224.0.0.1 é usado como:",
    "options": [
      "Broadcast dirigido ao último endereço da sub-rede",
      "Multicast all-hosts no segmento local",
      "O gateway padrão privado descrito na RFC 1918",
      "Um endereço APIPA de autoconfiguração link-local"
    ],
    "correct": 1,
    "explanation": "224.0.0.0/24 são multicasts locais de link (não são encaminhados). 224.0.0.1 = all hosts; 224.0.0.2 = all routers; 224.0.0.5/6 = OSPF; 224.0.0.10 = EIGRP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual métrica descreve a variação do atraso entre pacotes, crítica para voz?",
    "options": [
      "A largura de banda da ligação",
      "Jitter",
      "O MTU, tamanho de cada trama",
      "O OUI do fabricante no MAC"
    ],
    "correct": 1,
    "explanation": "Jitter é a variação da latência. A voz é sensível a jitter e perda; usa-se jitter buffer e QoS (EF). Largura de banda é capacidade; latência é atraso médio.",
    "difficulty": "Médio"
  },
  {
    "question": "Os primeiros 24 bits de um endereço MAC IEEE identificam o quê?",
    "options": [
      "A VLAN nativa configurada na porta de acesso do switch",
      "O OUI do fabricante (organizationally unique identifier)",
      "O endereço IPv4 do default gateway da sub-rede local",
      "O tipo de cabo físico, como par entrançado ou fibra ótica"
    ],
    "correct": 1,
    "explanation": "Um MAC de 48 bits divide-se em OUI (24 bits, fabricante) e identificador de dispositivo (24 bits). O bit U/L e o bit I/G no primeiro octeto têm significado especial.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um ataque de negação de serviço (DoS) numa rede?",
    "options": [
      "Cifrar os ficheiros da vítima no disco e exigir um resgate em dinheiro para os repor",
      "Esgotar recursos (CPU, largura de banda, sessões) para impedir o serviço legítimo",
      "Traduzir endereços IPv4 privados em endereços públicos no router de perímetro",
      "Eleger o root bridge do STP escolhendo o switch com o menor Bridge ID do domínio"
    ],
    "correct": 1,
    "explanation": "DoS (e DDoS distribuído) torna o serviço indisponível por sobrecarga. Mitigação: ACLs, rate-limit, anti-DDoS no perímetro, CoPP nos routers. Não é ransomware.",
    "difficulty": "Fácil"
  },
  {
    "question": "O princípio do menor privilégio no acesso de help-desk significa:",
    "options": [
      "Todas as contas de help-desk partilham o mesmo enable secret",
      "Cada conta só tem as permissões necessárias à função",
      "Desativar sempre o firewall na estação de trabalho do help-desk",
      "Gerir os equipamentos por Telnet em claro em vez de usar SSH"
    ],
    "correct": 1,
    "explanation": "Least privilege reduz o impacto de uma conta comprometida. Em Cisco usa-se AAA (RADIUS/TACACS+) com privilégios por utilizador, não uma password enable partilhada.",
    "difficulty": "Fácil"
  },
  {
    "question": "No Windows, ipconfig /all mostra o servidor DHCP. Para que serve essa informação?",
    "options": [
      "Calcular o custo OSPF da interface a partir da sua largura de banda",
      "Saber quem atribuiu o lease e se o endereço é estático ou dinâmico",
      "Consultar a tabela de endereços MAC aprendidos no switch de acesso",
      "Ativar o PortFast na porta de acesso do switch onde este PC está ligado"
    ],
    "correct": 1,
    "explanation": "DHCP Server e DHCP Lease Obtained/Expires distinguem um IP dinâmico de um estático. Se o servidor for inesperado, pode haver rogue DHCP.",
    "difficulty": "Médio"
  },
  {
    "question": "Aproximadamente quantos watts entrega o PoE clássico IEEE 802.3af na porta PD?",
    "options": [
      "Só 4 W no PD, o máximo do 802.3af",
      "15,4 W na PSE / ~12,95 W no PD",
      "60 W no PD, o máximo do 802.3af",
      "90 W no PD, o máximo do 802.3af"
    ],
    "correct": 1,
    "explanation": "802.3af (PoE): 15,4 W na PSE, cerca de 12,95 W no PD após perdas no cabo. 802.3at (PoE+) ~30/25,5 W. 802.3bt (Type 3/4) sobe a 60/90 W.",
    "difficulty": "Médio"
  },
  {
    "question": "Quando se prefere traceroute a um simples ping?",
    "options": [
      "Para cifrar o tráfego salto a salto, como se o traceroute fosse uma VPN",
      "Para ver por que saltos o caminho falha ou onde sobe a latência",
      "Para atribuir VLANs de acesso em cada salto mostrado pelo traceroute",
      "Para negociar duplex e velocidade em cada interface ao longo do caminho"
    ],
    "correct": 1,
    "explanation": "Ping testa um destino. Traceroute lista o caminho (TTL expirado) e ajuda a ver se a falha é LAN, WAN do ISP ou o servidor remoto.",
    "difficulty": "Fácil"
  },
  {
    "question": "Ocultar o SSID (não difundir o nome da rede) é uma defesa forte?",
    "options": [
      "Sim, ocultar o SSID equivale a autenticar a rede com WPA3-Enterprise e 802.1X",
      "Não: o SSID ainda vai nos frames de dados e dá uma falsa sensação de segurança",
      "Sim, impede qualquer associação, mesmo que o cliente já conheça o nome da WLAN",
      "Só funciona em 6 GHz, onde o beacon sem nome bloqueia por completo a associação"
    ],
    "correct": 1,
    "explanation": "Beacons sem SSID não escondem a rede de quem captura probes/data. Use WPA2/WPA3 e 802.1X quando precisar de controlo real. Hidden SSID ainda complica o cliente legítimo.",
    "difficulty": "Médio"
  },
  {
    "question": "Um pedido DHCP Discover é enviado como:",
    "options": [
      "Unicast direto para 8.8.8.8, o DNS público da Google, logo nesse DHCP Discover inicial",
      "Broadcast (origem 0.0.0.0, destino 255.255.255.255) porque o cliente ainda não tem IP",
      "Multicast OSPF para 224.0.0.5 (AllSPFRouters), enviado como um hello de router",
      "Anycast IPv6 ao servidor DHCP, ainda antes de o cliente ter um endereço GUA"
    ],
    "correct": 1,
    "explanation": "No DORA, Discover e Request são broadcasts. O cliente usa 0.0.0.0 como origem. Offer e Ack vêm do servidor (por vezes também em broadcast).",
    "difficulty": "Médio"
  },
  {
    "question": "Porque é que UDP é usado por DHCP, DNS (queries) e NTP em vez de TCP?",
    "options": [
      "Porque o UDP garante retransmissão obrigatória de cada datagrama que se perde",
      "São transações curtas que não precisam de sessão fiável; menos overhead",
      "Porque o UDP cifra automaticamente o payload, ao contrário do TCP em claro",
      "Porque o TCP não pode usar a porta 53, reservada apenas a datagramas UDP"
    ],
    "correct": 1,
    "explanation": "UDP é connectionless e de baixo overhead. A aplicação trata de retries (DHCP reenvia Discover; DNS pode repetir ou ir a outro servidor). Transferências de zona DNS podem usar TCP.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual afirmação descreve melhor a encapsulação ao descer o modelo OSI?",
    "options": [
      "Cada camada remove o cabeçalho da camada de baixo antes de continuar a passar os dados",
      "Cada camada adiciona o seu cabeçalho (e por vezes trailer) aos dados da camada superior",
      "Só a camada física adiciona cabeçalhos; as camadas 2, 3 e 4 só reencaminham o payload",
      "O switch remove sempre o IP e o router remove sempre o MAC enquanto se desce o modelo OSI"
    ],
    "correct": 1,
    "explanation": "A aplicação passa dados a L4, que adiciona o cabeçalho TCP/UDP, L3 adiciona IP, L2 adiciona cabeçalho e FCS Ethernet, L1 serializa bits. Na subida, os cabeçalhos são retirados.",
    "difficulty": "Médio"
  },
  {
    "question": "Numa rede 10.0.0.0/8, 172.16.0.0/12 ou 192.168.0.0/16 o tráfego para a Internet pública exige normalmente:",
    "options": [
      "Apenas um hub no meio, que já leva os endereços privados RFC 1918 até à Internet",
      "NAT/PAT ou endereços publicamente encaminháveis, mais um default gateway",
      "Desativar o ARP em todos os hosts, para o tráfego privado sair sem resolução de L2",
      "Mudar todos os MACs para FF:FF:FF:FF:FF:FF e usar esse broadcast no lugar do NAT"
    ],
    "correct": 1,
    "explanation": "RFC 1918 não é encaminhável na Internet. O CPE/router faz PAT para um IP público, ou usa-se IPv6 GUA. Sem gateway e sem tradução, os privados não saem.",
    "difficulty": "Fácil"
  },
  {
    "question": "Wi-Fi 4 corresponde a que padrão IEEE?",
    "options": [
      "802.11a",
      "802.11g",
      "802.11n",
      "802.11ac"
    ],
    "correct": 2,
    "explanation": "802.11n (Wi-Fi 4) introduziu MIMO e 40 MHz e opera em 2,4 e 5 GHz. 802.11g é só 2,4 GHz a 54 Mb/s; 802.11ac é Wi-Fi 5.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um toner/cable tester no help-desk serve sobretudo para:",
    "options": [
      "Configurar OSPF e anunciar as redes do patch panel dentro do processo de routing",
      "Identificar o par/porta no patch panel e detetar cabo aberto, curto ou cruzado",
      "Atualizar o IOS do switch a partir do tom do cabo e da imagem guardada no tester",
      "Gerar chaves SSH no switch depois de mapear o par certo no painel de ligações"
    ],
    "correct": 1,
    "explanation": "Ferramentas de camada 1: toner (probe) acha o cabo no painel; tester certifica continuidade e mapa de fios. Não substitui ping/DNS, mas evita horas a caçar o par errado.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em redes públicas (café, aeroporto), qual hábito reduz o risco de interceptação?",
    "options": [
      "Desativar o firewall do portátil para o portal cativo deixar de inspecionar o tráfego",
      "Usar VPN/HTTPS e evitar portais abertos para trabalho sensível sem cifrar",
      "Trocar o MAC para ff:ff:ff:ff:ff:ff para o ponto de acesso não seguir a sessão",
      "Forçar half-duplex na interface sem fios para encurtar a janela de interceção"
    ],
    "correct": 1,
    "explanation": "Wi-Fi público pode ser aberto ou partilhado. VPN cifram até ao concentrador; HTTPS protege o sítio. Evite operações bancárias em portais cativos sem TLS visível.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um ping a um endereço fe80:: de IPv6 no Windows falha sem zona. O que falta?",
    "options": [
      "Um endereço APIPA 169.254.x.x na mesma placa de rede, para o fe80:: ficar globalmente encaminhável",
      "O identificador de zona/interface (fe80::x%eth0 / %13), porque link-local não é único no nó",
      "Um túnel GRE até ao alvo fe80::, pois o link-local só atravessa a rede se estiver encapsulado",
      "Desativar o NDP nessa interface, já que o Neighbor Discovery é quem bloqueia o ping ao fe80::"
    ],
    "correct": 1,
    "explanation": "Link-local existe em todas as interfaces. Sem %zone o SO não sabe por que NIC enviar. ping fe80::1%Ethernet  ou -6 com zone id.",
    "difficulty": "Difícil"
  },
  {
    "question": "Num cabo UTP com mapa de fios 1-2 abertos e 3-6 ok, que velocidade Ethernet é mais provável e porquê?",
    "options": [
      "10 Gb/s, porque o 10GBASE-T só precisa de dois pares e ignora os outros dois",
      "100 Mb/s (Fast Ethernet) possível; Gigabit precisa dos quatro pares",
      "Só a fibra monomodo pode funcionar, porque o Fast Ethernet não existe em cobre UTP",
      "Nenhuma velocidade Ethernet funciona se algum par do mapa de fios estiver aberto"
    ],
    "correct": 1,
    "explanation": "10/100BASE-TX usa sobretudo os pares 1-2 e 3-6. 1000BASE-T exige os quatro pares. Um tester a mostrar apenas dois pares bons aponta tipicamente para Fast Ethernet, não Gigabit.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um AP anuncia Wi-Fi 6E. Que banda adicional fica disponível relativamente ao Wi-Fi 6 clássico?",
    "options": [
      "Apenas a banda de 900 MHz, típica de LoRa, e não os 6 GHz do Wi-Fi 6E",
      "A banda de 6 GHz (além de 2,4 e/ou 5 GHz, conforme o rádio)",
      "Só Bluetooth LE em 2,4 GHz, sem acrescentar a banda Wi-Fi de 6 GHz",
      "Apenas infravermelho IrDA, sem espectro rádio extra face ao Wi-Fi 6"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 6E é 802.11ax na banda de 6 GHz. Oferece mais espectro e canais largos com menos interferência herdada de 2,4/5 GHz, mas alcance tipicamente menor e clientes têm de ser 6E.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em troubleshooting CCST, o PC tem IP, gateway e DNS corretos, ping ao gateway ok, mas HTTPS a um site falha e HTTP na porta 80 também. Ping a 8.8.8.8 falha. Qual hipótese é a mais sólida?",
    "options": [
      "Falha só do certificado TLS no browser, sem problema de caminho IP",
      "Problema de encaminhamento/WAN/firewall a montante do gateway local",
      "Cabo de consola do switch desligado, o que corta a saída WAN do PC",
      "O STP elegeu o PC como root bridge e bloqueou o caminho para a Internet"
    ],
    "correct": 1,
    "explanation": "L3 local está ok (IP/gateway/ping LAN). Falha para IPs públicos indica caminho WAN, NAT ou firewall de perímetro — não DNS (usou-se IP) nem só TLS.",
    "difficulty": "Difícil"
  },
  {
    "question": "Qual afirmação sobre PoE IEEE 802.3bt (Type 3/4) é a mais correta para suporte técnico?",
    "options": [
      "Entrega no máximo 15,4 W na PSE, como o 802.3af Type 1, sem subir para Type 3 nem Type 4",
      "Permite potências mais altas (até cerca de 60 W / 90 W na PSE) para APs e câmaras exigentes",
      "Só funciona em fibra monomodo, porque o 802.3bt não alimenta os pares de cobre de um cabo UTP",
      "Substitui sempre a fonte externa do PD, mesmo sem classificação PSE-PD nem negociação LLDP"
    ],
    "correct": 1,
    "explanation": "802.3bt (PoE++) sobe a potência face a af/at. Continua a haver classificação/negociação PSE-PD; um PD incompatível ou cabo mau pode ficar sem energia suficiente.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um switch mostra a porta em err-disabled após ligar um hub barato em cascata. Qual causa CCST é plausível?",
    "options": [
      "DNS em falta no PC: sem resolução de nomes, o switch coloca a porta de acesso em err-disabled",
      "Proteção (ex.: BPDU Guard / loop / link flap) desativou a porta ao detetar condição de erro",
      "O cabo Cat6 não suporta Fast Ethernet, por isso o switch passa essa porta a err-disabled",
      "Um SFP de fibra foi inserido na tomada RJ-45 e o switch marcou a porta como err-disabled"
    ],
    "correct": 1,
    "explanation": "Err-disabled é estado de proteção. Hubs e loops geram BPDUs inesperados, colisões ou flaps; com BPDU Guard ou storm control a porta pode ir a err-disabled. Recupera-se com shutdown / no shutdown após corrigir a causa.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em IPv6, um host tem só FE80::/10 e consegue pingar vizinhos no mesmo enlace, mas não abre sites na Internet. O que falta tipicamente?",
    "options": [
      "Um endereço GUA (ou ULA+NAT64) e um default router via RA/DHCPv6",
      "Obrigatoriamente um endereço IPv4 APIPA 169.254, pois a Internet IPv6 usa essa gama",
      "Desativar o NDP no host para o tráfego sair do enlace sem GUA nem router",
      "Trocar o MAC do host para ff:ff:ff:ff:ff:ff para o router aceitar o IPv6"
    ],
    "correct": 0,
    "explanation": "Link-local serve no enlace. Tráfego off-link precisa de GUA (2000::/3) ou mecanismo de tradução, mais um router default aprendido por Router Advertisement ou DHCPv6.",
    "difficulty": "Difícil"
  },
  {
    "question": "O que distingue Wi-Fi 6E de Wi-Fi 6 (802.11ax) em termos de espectro?",
    "options": [
      "6E remove a banda de 5 GHz e fica só em 2,4 GHz",
      "6E acrescenta operação na banda de 6 GHz",
      "6E é apenas um nome comercial para 802.11ac",
      "6E obriga a usar WEP"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 6 e 6E partilham a física 802.11ax; o “E” (Extension) refere-se ao uso da banda de 6 GHz, com mais canais largos e menos ruído legado.",
    "difficulty": "Médio"
  },
  {
    "question": "Um cliente antigo só 802.11ac (Wi-Fi 5) consegue associar-se a um SSID exclusivo 6 GHz de um AP Wi-Fi 6E?",
    "options": [
      "Sim, automaticamente via DFS, que dá rádio 6 GHz a um cliente só 802.11ac",
      "Não: precisa de rádio e driver compatíveis com 6 GHz / 6E",
      "Sim, se o canal de 6 GHz for 1, 6 ou 11, como no plano de 2,4 GHz",
      "Só se desativar o WPA3: o cliente 802.11ac associa ao SSID só de 6 GHz"
    ],
    "correct": 1,
    "explanation": "A banda de 6 GHz exige hardware 6E no cliente. Dispositivos Wi-Fi 5/6 sem rádio 6 GHz continuam nas bandas 2,4/5 GHz do AP, se existirem.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual vantagem típica da banda de 6 GHz em ambientes densos de escritório?",
    "options": [
      "Maior penetração em paredes espessas do que a banda de 2,4 GHz no mesmo escritório",
      "Mais espectro limpo e canais largos com menos redes legado a interferir",
      "Elimina a autenticação WPA no SSID, porque a banda de 6 GHz é aberta por definição",
      "Funciona sem antenas no AP nem no cliente, pois o espectro de 6 GHz dispensa RF"
    ],
    "correct": 1,
    "explanation": "6 GHz oferece canais novos e menos ocupados; a penetração é em geral pior que 2,4 GHz. Planeia-se mais APs e cobertura, não só débito de pico.",
    "difficulty": "Médio"
  },
  {
    "question": "Num switch de acesso, a porta Gi1/0/12 fica em estado err-disabled e o syslog mostra %PM-4-ERR_DISABLE: bpduguard. Qual é a causa mais provável?",
    "options": [
      "O cabo UTP tem só 2 pares ligados, e a mensagem bpduguard indica essa falha de cablagem",
      "Foi ligado um switch/hub (ou PC com bridging) que enviou BPDUs numa porta de acesso com BPDU Guard",
      "O PoE excede o orçamento do PSU e o IOS regista %PM-4-ERR_DISABLE: bpduguard por falta de potência",
      "O DNS do cliente está em falta e o switch coloca Gi1/0/12 em err-disabled por essa causa"
    ],
    "correct": 1,
    "explanation": "BPDU Guard desativa (err-disable) portas de acesso que recebem BPDUs — típico quando alguém liga outro switch. Recuperação: corrigir a topologia e fazer errdisable recovery ou shut/no shut.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um AP Wi-Fi 6E exige WPA3 na banda de 6 GHz. O cliente só tem WPA2. O que acontece no SSID só-6 GHz?",
    "options": [
      "Associa com WEP automaticamente, porque o AP recua de WPA3 para WEP na banda de 6 GHz",
      "Não associa: 6 GHz exige WPA3 (SAE); o cliente tem de ser 6E e WPA3",
      "Associa se o canal de 6 GHz for DFS, mesmo com o cliente limitado apenas a WPA2",
      "Funciona só com IPv6: o cliente WPA2 associa ao SSID de 6 GHz quando usa IPv6"
    ],
    "correct": 1,
    "explanation": "Na banda de 6 GHz o Wi-Fi Alliance exige WPA3. Clientes só-WPA2 ficam de fora desse SSID (podem usar 2,4/5 GHz se o AP anunciar SSIDs nessas bandas).",
    "difficulty": "Difícil"
  },
  {
    "question": "Ferramenta de cabo: mapa OK, mas certificação falha em NEXT elevado entre pares. Qual interpretação CCST é a mais correta?",
    "options": [
      "O switch de acesso está sem PoE, e essa falta de energia faz o certificador falhar o teste de NEXT",
      "Há diafonia excessiva (pares mal torcidos/terminação má); tipicamente não passa Cat5e/Cat6",
      "O DNS do cliente está errado, e essa resolução falhada é o que o teste de cabo reporta como NEXT elevado",
      "É só um problema de VLAN de acesso no switch, sem defeito de torção, terminação ou diafonia nos pares"
    ],
    "correct": 1,
    "explanation": "NEXT (near-end crosstalk) alto indica interferência entre pares — terminacão má, destorção excessiva ou cabo danificado. Re-terminar ou substituir o cabo; não é um sintoma de VLAN/DNS.",
    "difficulty": "Difícil"
  },
  {
    "question": "PC obtém IP via DHCP, ping ao gateway falha, e `arp -a` não mostra o MAC do gateway. Qual passo de troubleshooting é o mais útil a seguir?",
    "options": [
      "Mudar só o tema do Windows, tratando a falta de ARP do gateway como um problema de aspeto do ambiente de trabalho",
      "Verificar L2 no segmento (cabo/VLAN/porta err-disabled/ARP) antes de culpar DNS ou a Internet",
      "Desativar o IPv6 em todos os hosts da empresa, partindo do princípio que o IPv6 bloqueia o ARP do gateway",
      "Atualizar o firmware da impressora de rede, como se o ping ao gateway falhasse por causa do driver de impressão"
    ],
    "correct": 1,
    "explanation": "Sem ARP do gateway não há L2 até ao default gateway. Confirma cabo, VLAN correta, estado da porta e se o gateway está no mesmo broadcast domain — DNS/HTTP só depois.",
    "difficulty": "Difícil"
  },
  {
    "question": "PoE: um AP Class 4 (802.3at) não liga num switch só 802.3af. Qual é a explicação mais correta?",
    "options": [
      "O SSID do ponto de acesso está errado, e essa falha de Wi-Fi impede o AP Class 4 de negociar e receber PoE",
      "802.3af (~15,4 W) pode ser insuficiente para Class 4/at (~30 W); precisa de PSE at/bt ou injector adequado",
      "Falta uma rota estática no AP, e sem essa rota o switch só 802.3af recusa alimentar o rádio Class 4",
      "O cabo Cat6 não transporta PoE, por isso um AP Class 4 fica sem energia mesmo ligado a um PSE 802.3at"
    ],
    "correct": 1,
    "explanation": "Tipo/classe PoE limita a potência. Dispositivos at/bt em portas só-af podem não negociar potência suficiente. Cat5e/Cat6 transportam PoE; o limite é o PSE.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um utilizador liga-se ao Wi-Fi certo, recebe IP, mas o portal cativo não abre e a Internet falha. Ping a 8.8.8.8 funciona. Qual hipótese CCST é a mais plausível?",
    "options": [
      "Falha total de Layer 1 no AP, que derruba o rádio e impede qualquer quadro Wi-Fi, incluindo o ping a 8.8.8.8",
      "Problema de DNS ou de redirecionamento HTTP do portal (resolução/nome), não de encaminhamento IP básico",
      "O switch perdeu todas as VLANs nativas, isolando o SSID e cortando o encaminhamento IP até ao 8.8.8.8",
      "O cabo do core ficou preso a 10 Mbps, e essa velocidade sozinha impede o portal cativo e a navegação web"
    ],
    "correct": 1,
    "explanation": "Ping a um IP público OK indica encaminhamento básico. Portais cativos dependem de DNS/HTTP redirect — DNS errado, HTTPS estrito ou bloqueio do domínio do portal são causas típicas.",
    "difficulty": "Difícil"
  },
  {
    "question": "Em troubleshooting, `ipconfig` mostra APIPA 169.254.x.x. O que isto indica tipicamente num PC Ethernet corporativo?",
    "options": [
      "O DHCP funcionou e atribuiu o endereço público 169.254, válido para sair à Internet pelo gateway",
      "O cliente não obteve lease DHCP (sem servidor/relay/VLAN/cabo) e auto-configurou link-local IPv4",
      "A sessão BGP do ISP caiu, e o PC passou a 169.254 porque o BGP deixou de anunciar a rota por omissão",
      "O Wi-Fi 6E passou a ser obrigatório, e sem rádio 6E o PC Ethernet só consegue obter 169.254.x.x"
    ],
    "correct": 1,
    "explanation": "169.254.0.0/16 é APIPA: o host desistiu do DHCP. Verifica cabo, VLAN de acesso, interface up, servidor DHCP e ip helper-address no gateway da VLAN.",
    "difficulty": "Difícil"
  },
  {
    "question": "Um telefone IP PoE liga-se, mas o PC atrás do telefone (passthrough) não tem rede. O telefone tem voz OK. Qual verificação é a mais relevante?",
    "options": [
      "Aumentar só a potência do rádio Wi-Fi do telefone, porque o PC em passthrough depende da cobertura sem fios local",
      "VLAN de dados no switch (e no telefone), cabo PC↔telefone, e se a porta está em access/trunk com voice VLAN correta",
      "Desativar o Spanning Tree em todo o campus, porque a voz a funcionar prova que o STP bloqueia apenas a VLAN de dados",
      "Mudar o hostname do router de borda, porque o PC atrás do telefone chega à rede pelo nome desse router"
    ],
    "correct": 1,
    "explanation": "Telefone+PC no mesmo cabo usa voice VLAN + data VLAN (ou multi-VLAN no telefone). Voz OK com dados mortos aponta para VLAN de dados/cabo PC ou config do telefone — não para Wi-Fi.",
    "difficulty": "Difícil"
  },
  {
    "question": "Como um host IPv6 tipicamente obtém o prefixo de rede com SLAAC?",
    "options": [
      "Apenas via relay DHCPv4, que entrega o prefixo IPv6 dentro do lease",
      "A partir do Router Advertisement (RA) enviado pelo router",
      "Só com DNS inverso (PTR), que devolve ao host o prefixo de rede IPv6",
      "Por ARP em broadcast, com o router a responder o prefixo IPv6 da LAN"
    ],
    "correct": 1,
    "explanation": "Com SLAAC, o host usa informações do Router Advertisement (ICMPv6) do router local para saber o prefixo e parâmetros; pode combinar com EUI-64/privacy.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual prática reduz melhor o risco de phishing no email corporativo?",
    "options": [
      "Desativar todas as atualizações do SO para o cliente de email ignorar o phishing",
      "Verificar remetente/URL e usar MFA; reportar mensagens suspeitas",
      "Partilhar passwords só por chat interno, para um colega validar os links",
      "Abrir todos os anexos .exe na sandbox do utilizador, sem confirmar remetente ou URL"
    ],
    "correct": 1,
    "explanation": "Phishing explora confiança humana: validar remetente e links, MFA e reportar ao SOC/IT são controlos práticos de primeira linha.",
    "difficulty": "Fácil"
  },
  {
    "question": "Porque ativar STP PortFast numa porta de acesso para um PC ou impressora?",
    "options": [
      "Para eleger essa porta como root bridge do STP, fazendo o PC ou a impressora originar as BPDUs da rede",
      "Para saltar listening/learning, passar a forwarding mais depressa e evitar atrasos de DHCP/arranque",
      "Para desativar o BPDU filtering em todo o campus e deixar cada switch aceitar BPDUs em todas as portas",
      "Para forçar o link de acesso a half duplex, baixando a velocidade e criando um domínio de colisão no PC"
    ],
    "correct": 1,
    "explanation": "PortFast (edge) salta listening/learning em portas de host para forwarding imediato. Combina com BPDU Guard; nunca uses PortFast em links para switches.",
    "difficulty": "Médio"
  },
  {
    "question": "Um link de cobre mostra erros CRC/input e late collisions depois de um lado ficar em 100/full manual. Qual é a causa mais provável?",
    "options": [
      "Mismatch de área OSPF nos extremos, o que gera CRC e late collisions",
      "TTL de DNS demasiado baixo, o que gera CRC e late collisions no link",
      "Mismatch de duplex (o outro lado ainda em auto/half)",
      "Community SNMP errada, o que faz a porta contar CRC e late collisions"
    ],
    "correct": 2,
    "explanation": "Fixar speed/duplex num extremo enquanto o outro faz auto-negociação costuma criar mismatch de duplex: CRC, runts e late collisions sob carga.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é que o `switchport port-security` protege principalmente numa porta de acesso?",
    "options": [
      "AS-path prepending BGP feito por peers upstream para alongar o AS-path que anunciam",
      "Flaps de vizinhos OSPF provocados por mismatch de MTU nas interfaces de camada 3",
      "Endereços MAC não autorizados nessa porta (limite/learn sticky e ação de violação)",
      "Envenenamento de cache DNS no resolver, com respostas forjadas aos pedidos de nomes"
    ],
    "correct": 2,
    "explanation": "Port security limita quais MACs podem usar uma porta de acesso (estático, dinâmico ou sticky). Em violação pode protect, restrict ou shutdown — controlo L2 básico para hosts finais.",
    "difficulty": "Fácil"
  },
  {
    "question": "O DHCP snooping num switch de acesso serve principalmente para:",
    "options": [
      "Aceitar ofertas DHCP só de portas trusted (normalmente uplinks para o servidor real) e descartar respostas DHCP rogue",
      "Substituir o DHCP por endereçamento estático em todo o campus, dando a cada host um IP fixo e nenhum lease dinâmico atribuído",
      "Forçar automaticamente todos os clientes para uma private VLAN isolada, sem qualquer comunicação com o resto da LAN",
      "Encriptar todos os pacotes DHCP com IPsec entre o cliente e o servidor, cobrindo Discover, Offer, Request e Ack"
    ],
    "correct": 0,
    "explanation": "DHCP snooping cria uma binding table e só trata portas trusted configuradas como servidores DHCP válidos. Ofertas rogue em portas untrusted são descartadas, reduzindo MITM e gateway errado.",
    "difficulty": "Médio"
  },
  {
    "question": "No VTP clássico da Cisco, o que faz o modo Transparent?",
    "options": [
      "Apaga todas as VLANs locais e força todos os switches do domínio para o modo Client",
      "Só anuncia VLANs aprendidas via RADIUS e ignora as criadas na base de dados local",
      "Reencaminha anúncios VTP mas não atualiza a sua própria base de VLANs com eles",
      "Encripta automaticamente todos os trunks VLAN com MACsec, sem precisar de uma chave manual"
    ],
    "correct": 2,
    "explanation": "Um switch VTP Transparent retransmite mensagens VTP nos trunks, mas mantém a base de VLANs local e não aprende nem propaga alterações no domínio VTP. Server cria/altera; Client sincroniza a partir do Server.",
    "difficulty": "Médio"
  },
  {
    "question": "No STP, que bridge se torna a root bridge da spanning tree?",
    "options": [
      "O switch com o Bridge ID mais baixo (prioridade + MAC), após comparar Bridge IDs",
      "Sempre o switch com mais portas de acesso, mesmo que o seu Bridge ID seja o mais alto",
      "O primeiro switch a arrancar na VLAN, mesmo que a sua prioridade STP seja a mais alta",
      "Só um router multilayer pode ser root; um switch de camada 2 nunca é eleito para root"
    ],
    "correct": 0,
    "explanation": "O STP elege a root pelo Bridge ID mais baixo: prioridade configurada (default 32768) mais o MAC do switch. Prioridade mais baixa ganha; em empate, o MAC mais baixo. As root ports apontam para essa root.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em equipamentos Cisco, para que se usa mais habitualmente o TFTP?",
    "options": [
      "Encriptar sessões de gestão ponta a ponta como o SSH, com troca de chaves Diffie-Hellman e cifra de toda a sessão CLI",
      "Substituir o OSPF como protocolo de routing interno e passar a anunciar todas as rotas da tabela de routing do router",
      "Autenticar clientes wireless com certificados digitais validados por um servidor RADIUS da empresa, em cada associação",
      "Transferência simples de imagens IOS e ficheiros de configuração (UDP 69), sem autenticação nem encriptação nativas"
    ],
    "correct": 3,
    "explanation": "O TFTP (Trivial File Transfer Protocol) usa UDP 69 e serve sobretudo para copiar imagens IOS e configs running/startup de/para um servidor. É leve, mas sem autenticação nem encriptação; use só em redes de gestão confiáveis. O FTP acrescenta login e TCP; SCP/SFTP são mais seguros quando disponíveis.",
    "difficulty": "Fácil"
  },
  {
    "question": "O que permite tipicamente configurar ip helper-address numa interface de router?",
    "options": [
      "Transforma o router num servidor DHCP que inventa leases localmente, sem qualquer servidor remoto",
      "DHCP relay: reencaminha broadcasts DHCP dos clientes como unicast para um servidor DHCP remoto",
      "Desativa permanentemente todos os broadcasts nessa VLAN, incluindo ARP e pedidos DHCP",
      "Só traduz Neighbor Discovery IPv6 para ARP IPv4 e não reencaminha mensagens DHCP"
    ],
    "correct": 1,
    "explanation": "ip helper-address ativa DHCP relay (entre outros helpers UDP): o router recebe o broadcast DHCP do cliente na LAN e reenvia-o em unicast para o IP do servidor DHCP, permitindo clientes e servidor em sub-redes diferentes. O router não inventa leases a menos que também esteja configurado como servidor DHCP.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é um access point rogue (rogue AP) num ambiente wireless?",
    "options": [
      "Um WLC Cisco oficial que só serve SSIDs de convidados e está registado na gestão wireless central da empresa",
      "Um AP licenciado e homologado que usa sempre WPA3-Enterprise e está registado e autorizado no controlador wireless",
      "Um AP não autorizado ligado à rede cabeada (ou a emitir perto), que pode criar riscos de segurança e interferência",
      "Qualquer AP que use a banda de 2,4 GHz em vez de 5 GHz, mesmo quando esse access point está autorizado na rede"
    ],
    "correct": 2,
    "explanation": "Um rogue AP é um access point wireless não autorizado—muitas vezes ligado a um switch corporativo por um utilizador, ou um evil twin de um atacante. Pode contornar NAC/802.1X, expor tráfego e interferir no plano RF. Controllers e WIDS/WIPS ajudam a detetar e conter rogues; esconder o SSID não os impede.",
    "difficulty": "Fácil"
  },
  {
    "question": "Em wireless 802.1X (WPA2/WPA3-Enterprise), como é que o EAP-TLS autentica tipicamente o cliente em comparação com o PEAP?",
    "options": [
      "O EAP-TLS usa certificado do cliente (e normalmente do servidor); o PEAP costuma encapsular um método interno com palavra-passe (ex. MSCHAPv2) dentro de um túnel TLS até ao RADIUS",
      "O EAP-TLS só partilha um único PSK para todo o SSID, como o WPA2-Personal clássico, sem certificado de cliente e sem abrir qualquer túnel TLS até ao servidor RADIUS externo da empresa",
      "O PEAP exige um certificado do cliente em cada estação e o EAP-TLS nunca usa certificados, nem no cliente nem no servidor de autenticação RADIUS",
      "Ambos desativam o RADIUS e autenticam só com a base de utilizadores local do AP, sem MSCHAPv2, sem túnel TLS e sem qualquer certificado digital do cliente"
    ],
    "correct": 0,
    "explanation": "O EAP-TLS baseia-se em certificados: o cliente apresenta um certificado (e valida o servidor). O PEAP cria um túnel TLS até ao servidor de autenticação e costuma correr um método interno com palavra-passe (ex. MSCHAPv2), por isso os clientes precisam mais de credenciais do que de certificados. Ambos usam 802.1X com backend RADIUS (ex. ISE); nenhum é um PSK partilhado.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que serve principalmente o Cisco CleanAir numa rede wireless?",
    "options": [
      "Substituir o CAPWAP por um mesh proprietário só na banda de 900 MHz, sem túneis de regresso para o WLC",
      "Desativar permanentemente todos os clientes não-Wi-Fi sem um AP, impedindo esses clientes de se associarem à WLAN",
      "Detetar e classificar interferentes RF não-Wi-Fi (micro-ondas, Bluetooth, jammers) para o RRM/IT os mitigar",
      "Cifrar por omissão todos os frames de gestão com WEP, em vez de classificar interferentes no espectro de RF"
    ],
    "correct": 2,
    "explanation": "O CleanAir usa análise de espectro em APs capazes para identificar fontes de interferência não-Wi-Fi que degradam a WLAN. Controllers/Catalyst Center mostram interferentes e podem impulsionar alterações de RRM (canal/potência). Não substitui WPA3, CAPWAP nem esconder o SSID.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é o objetivo principal do IEEE 802.11r (Fast Transition / Fast BSS Transition) para clientes Wi-Fi?",
    "options": [
      "Acelerar o roaming entre APs ao reduzir o tempo gasto a reautenticar durante uma transição de BSS",
      "Forçar todos os SSIDs a usar só a banda de 2,4 GHz e desligar por completo o rádio de 5 GHz em cada AP",
      "Substituir o DHCP por endereços APIPA estáticos sempre que o cliente faz roam de um AP para outro",
      "Desligar a encriptação sempre que o cliente muda de AP, deixando o tráfego de dados da sessão em claro"
    ],
    "correct": 0,
    "explanation": "O 802.11r (FT) permite ao cliente concluir passos de handshake de chaves de forma a encurtar o tempo de roam entre APs no mesmo domínio de mobilidade—importante para voz/vídeo. Não remove a encriptação, não altera o DHCP nem limita a banda a 2,4 GHz. O 802.11k/v costuma complementar o FT com neighbor reports e roaming assistido.",
    "difficulty": "Médio"
  },
  {
    "question": "Num desenho wireless de convidados Cisco com auto-anchor (guest anchor), qual é o papel do controlador foreign face ao anchor?",
    "options": [
      "O foreign termina o SSID de convidados localmente na WLC do campus e nunca faz túnel CAPWAP/EoIP até ao anchor; o anchor só guarda leases DHCP offline, sem VLAN de guest nem saída para a Internet na DMZ",
      "Ambos os controladores têm de estar no mesmo edifício e partilhar um único IP de gestão, senão os convidados não associam ao SSID nem formam o túnel de mobilidade entre o campus e a DMZ",
      "O foreign é onde o cliente associa; o tráfego de convidados é tunelado (tipicamente CAPWAP/EoIP) até ao anchor na DMZ, que aplica a VLAN/política de guest e muitas vezes a saída para a Internet",
      "O anchor só trata a banda de 2,4 GHz dos clientes de convidados na DMZ; o foreign só trata a de 5 GHz no campus, e nenhum dos dois tunela o tráfego da outra banda para a Internet"
    ],
    "correct": 2,
    "explanation": "O auto-anchor (guest anchor) mantém os clientes de convidados associados a APs/WLCs no campus (foreign) e tunela o tráfego para um WLC anchor numa zona DMZ/firewall. O anchor coloca os convidados na VLAN de guest e tipicamente dá Internet sem acesso à LAN interna. Não é uma divisão por banda, e o foreign não termina simplesmente o tráfego de guest localmente.",
    "difficulty": "Médio"
  },
  {
    "question": "O que pretende um ataque de DHCP starvation numa LAN, e que funcionalidade no switch costuma mitigá-lo?",
    "options": [
      "Esgotar o pool de IPs do servidor DHCP pedindo muitos leases (muitas vezes com MACs falsificados) para os clientes legítimos não obterem endereço; mitigar com DHCP snooping (e muitas vezes port-security / limites de taxa)",
      "Encher a tabela CAM do switch com MACs falsos até o switch se comportar como hub e inundar todas as portas de acesso da VLAN; mitigar só com PortFast do spanning-tree nas portas de acesso, sem DHCP snooping nem limites de taxa de DHCP",
      "Cifrar todas as mensagens DHCP Offer com WEP para os clientes não renovarem o lease nem obterem endereço; mitigar desativando o DHCP relay (ip helper-address) nos routers da LAN, sem ativar DHCP snooping",
      "Forçar todos os clientes a usar APIPA 169.254.x.x permanentemente, sem qualquer lease do servidor DHCP; mitigar desligando o ARP no switch de acesso para bloquear respostas e impedir a renovação"
    ],
    "correct": 0,
    "explanation": "O DHCP starvation satura Discover/Request (frequentemente com muitos MACs de cliente falsificados) para o pool do servidor acabar e utilizadores reais não obterem lease. O DHCP snooping limita portas untrusted e constrói a binding table; port-security e rate limiting de DHCP também ajudam. CAM overflow é outro ataque (MAC flooding). Desativar DHCP relay ou ARP não é a mitigação.",
    "difficulty": "Médio"
  },
  {
    "question": "Qual é uma diferença prática entre CDP e LLDP ao descobrir vizinhos num switch ou router?",
    "options": [
      "O CDP só funciona em links de fibra óptica; o LLDP só funciona em cobre de par trançado, por isso um vizinho em porta RJ-45 nunca é descoberto pelo CDP nem anuncia as suas capacidades",
      "O CDP é proprietário Cisco e vem ativo por omissão em muitos equipamentos Cisco; o LLDP é um padrão aberto IEEE 802.1AB usado para descoberta de vizinhos multi-fornecedor",
      "O LLDP elege o designated router do OSPF no segmento; o CDP elege a root bridge do STP, e nenhum dos dois anuncia a identidade nem as capacidades do vizinho no enlace local",
      "Ambos os protocolos cifram toda a tabela de vizinhos com IPsec por omissão, por isso os anúncios CDP e LLDP não se conseguem capturar num SPAN nem inspecionar em claro no analisador"
    ],
    "correct": 1,
    "explanation": "O CDP (Cisco Discovery Protocol) é proprietário e costuma estar ligado por omissão em equipamento Cisco. O LLDP (IEEE 802.1AB) é neutro quanto ao fabricante e preferível em ambientes mistos. Ambos anunciam identidade e capacidades no enlace; nenhum elege papéis OSPF/STP nem cifra a base de vizinhos com IPsec por omissão.",
    "difficulty": "Fácil"
  },
  {
    "question": "Um técnico monta um cabo de rede Ethernet copper straight-through segundo as normas TIA-568. Qual afirmação está correta?",
    "options": [
      "Straight-through significa sempre que os pinos 1–8 num extremo mapeiam de forma aleatória para 8–1 no outro",
      "É obrigatório usar TIA-568A num extremo e TIA-568B no outro para fazer um cabo straight-through",
      "Os jumpers de fibra OM4 LC-LC seguem o mesmo código de cores TIA-568A/B do cobre Cat6",
      "Os dois extremos usam a mesma norma de pinout (ambos TIA-568A ou ambos TIA-568B); misturar A num extremo e B no outro cria um crossover"
    ],
    "correct": 3,
    "explanation": "Um cabo straight-through termina os dois extremos com a mesma cablagem TIA-568 (A-A ou B-B). Misturar 568A num extremo e 568B no outro produz um crossover (pares TX/RX trocados). Mapeamento aleatório invertido não define straight-through, e os jumpers de fibra não usam o esquema de cores 568A/B do cobre.",
    "difficulty": "Médio"
  },
  {
    "question": "Para que se usa tipicamente o 802.1Q tunneling (Q-in-Q / double tagging)?",
    "options": [
      "Cifrar cada trama Ethernet com IPsec entre dois PCs de acesso na mesma VLAN de utilizador, sem etiqueta VLAN de serviço exterior e sem preservar os IDs VLAN interiores do cliente através da rede do fornecedor",
      "Substituir o Spanning Tree por uma única root bridge em todo o campus e na rede do fornecedor, sem acrescentar uma etiqueta VLAN de serviço exterior para transportar as VLANs etiquetadas do cliente",
      "Transportar o tráfego etiquetado em VLAN do cliente através da rede do fornecedor, adicionando uma etiqueta VLAN de serviço exterior, para que os IDs VLAN interiores do cliente se preservem de ponta a ponta",
      "Forçar todas as portas de acesso para a mesma native VLAN do SVI de gestão do switch, sem double tagging e sem manter os IDs VLAN interiores do cliente intactos de ponta a ponta no fornecedor"
    ],
    "correct": 2,
    "explanation": "O Q-in-Q (estilo IEEE 802.1ad com double tagging) permite ao fornecedor de serviço embrulhar as tramas 802.1Q do cliente com uma etiqueta exterior. O fornecedor comuta com base na VLAN exterior; as etiquetas interiores do cliente mantêm-se intactas no handoff metro/WAN. Não é cifra IPsec, não substitui o STP e não força todas as portas de acesso para a VLAN de gestão.",
    "difficulty": "Médio"
  },
  {
    "question": "O que é que o IEEE 802.11w (Protected Management Frames / PMF) protege num BSS Wi-Fi?",
    "options": [
      "Tramas de gestão unicast selecionadas (como deauthentication e disassociation), para um atacante não as forjar facilmente e expulsar clientes",
      "Apenas o broadcast do SSID em cada beacon, tornando a rede num SSID oculto por omissão, sem proteger as tramas unicast de deauthentication nem de disassociation",
      "Todo o túnel CAPWAP entre o AP e o WLC com uma segunda camada IPsec, sem proteger as tramas de gestão unicast como deauthentication e disassociation no BSS",
      "Pacotes DHCP Offer no uplink com fio do AP, sem qualquer proteção às tramas de gestão unicast de deauthentication e disassociation enviadas no BSS Wi-Fi"
    ],
    "correct": 0,
    "explanation": "O 802.11w acrescenta proteção criptográfica a certas tramas de gestão (nomeadamente deauth/disassoc), reduzindo ataques de desconexão forjada. Não esconde o SSID por si, não envolve o CAPWAP em IPsec extra e não protege o DHCP com fio no uplink do AP. O WPA3 exige PMF; o WPA2 pode ativá-lo opcionalmente.",
    "difficulty": "Médio"
  },
  {
    "question": "No Wi-Fi (802.11), para que se usa principalmente a Dynamic Frequency Selection (DFS) nos 5 GHz (e 6 GHz onde for exigido)?",
    "options": [
      "Forçar todos os clientes a fazer roam para 2,4 GHz sempre que o RSSI desça abaixo de −70 dBm, sem detetar radar nem abandonar os canais regulamentados de 5 GHz",
      "Detetar radar e outros ocupantes regulamentados para o AP abandonar ou evitar esses canais, o que pode implicar uma espera CAC ou uma mudança de canal",
      "Encriptar frames de gestão com AES-CCMP para que os beacons não possam ser falsificados, sem detetar radar nem obrigar o AP a uma espera CAC ou mudança de canal",
      "Substituir o CSMA/CA por um plano TDMA agendado em todos os APs, sem espera de Channel Availability Check nem mudança de canal quando aparece radar"
    ],
    "correct": 1,
    "explanation": "A DFS (Dynamic Frequency Selection) permite aos APs usar canais 5/6 GHz partilhados com radar meteorológico e outros serviços só se detetarem incumbentes e saírem do canal quando exigido. Isso costuma implicar um Channel Availability Check (CAC) antes de usar o canal e uma possível mudança de canal em operação. Não é band steering, não é 802.11w PMF, e não é um agendador TDMA.",
    "difficulty": "Medium"
  },
  {
    "question": "Qual é a diferença prática entre os polimentos de conector de fibra UPC e APC?",
    "options": [
      "UPC é só para fibra multimodo e APC só para monomodo; misturá-los funciona sempre do ponto de vista ótico, sem perda por desalinhamento da face polida",
      "O APC acrescenta uma férula metálica que duplica a potência de lançamento face ao UPC, sem mudar o ângulo da face nem reduzir o return loss para o laser",
      "UPC e APC diferem apenas na cor do boot de alívio de tensão, com a mesma geometria da face, por isso acoplá-los nunca causa perda elevada nem risco de dano",
      "O APC tem face angular que reflete a luz para o cladding, reduzindo o return loss; o UPC é plano (ultra polish) e não deve ser acoplado a APC"
    ],
    "correct": 3,
    "explanation": "UPC (Ultra Physical Contact) tem face polida plana; APC (Angled Physical Contact) tem tipicamente ~8° de ângulo para a reflexão ir para o cladding em vez de voltar para o laser — importante em ligações analógicas/PON e muitas monomodo. APC e UPC não se devem acoplar: o desalinhamento geométrico causa perda elevada e possível dano. A cor do boot costuma indicar (verde APC, azul UPC), mas a cor sozinha não define o polimento, e o estilo não é “só multimodo vs só monomodo”.",
    "difficulty": "Medium"
  },
  {
    "question": "Face ao PoE mais antigo (IEEE 802.3af/at), o que é que o IEEE 802.3bt (Type 3/Type 4, muitas vezes chamado PoE++) permite principalmente numa porta de switch compatível?",
    "options": [
      "Alimentar dispositivos apenas em portas SFP de fibra, em vez de cobre RJ-45, sem aumentar a potência entregue nos pares de um cabo Ethernet e sem orçamento Type 3 ou Type 4 no PSE",
      "Substituir os pares de dados por condutores DC dedicados para que as tramas Ethernet já não partilhem o cabo, sem subir o orçamento de potência no PSE para câmaras, APs ou thin clients",
      "Entregar potência substancialmente maior (cerca de ~60 W Type 3 / ~90 W Type 4 no PSE) usando mais pares, para dispositivos como câmaras PTZ, access points e thin clients",
      "Negociar adjacência de encaminhamento Layer 3 nos mesmos pares que transportam alimentação DC, sem entregar cerca de 60 W ou 90 W a câmaras PTZ, access points ou thin clients"
    ],
    "correct": 2,
    "explanation": "O IEEE 802.3bt alarga o Power over Ethernet além do 802.3af (~15 W) e 802.3at/PoE+ (~30 W), usando mais pares e orçamentos mais altos (tipicamente ~60 W Type 3 e ~90 W Type 4 no equipamento que fornece energia). Continua em cabos Ethernet de cobre com dados e energia a partilhar pares após negociação — não é SFP de fibra, não é “só DC em vez de dados”, e não é um protocolo de routing.",
    "difficulty": "Medium"
  },
  {
    "question": "No Wi-Fi 6 (802.11ax), qual é o objetivo principal do OFDMA (Orthogonal Frequency-Division Multiple Access)?",
    "options": [
      "Dividir um canal em resource units para o AP servir vários clientes na mesma oportunidade de transmissão com alocações mais pequenas e agendadas, melhorando a eficiência com muitas tramas curtas",
      "Forçar todos os clientes a um único spatial stream para o MU-MIMO nunca ser usado no BSS, sem dividir o canal em resource units agendadas para várias estações na mesma oportunidade de transmissão",
      "Substituir o WPA3 por um conjunto de cifras antigo baseado em WEP para endpoints IoT de baixa potência, sem resource units e sem servir vários clientes na mesma oportunidade de transmissão do AP",
      "Estender a banda de 2,4 GHz a canais de 80 MHz idênticos ao VHT80 dos 5 GHz em todos os APs, sem dividir o canal em resource units mais pequenas e agendadas para tramas curtas"
    ],
    "correct": 0,
    "explanation": "O OFDMA divide um canal Wi-Fi em resource units (RUs) mais pequenas para que uma oportunidade de TX/RX do AP possa endereçar várias estações com alocações dimensionadas — útil em ambientes densos com muitas tramas curtas. Complementa (não desativa) o MU-MIMO; não tem a ver com a escolha de cifras WEP/WPA3; e não cria canais de 80 MHz em 2,4 GHz como o VHT80 nos 5 GHz.",
    "difficulty": "Medium"
  },
  {
    "question": "Num switch de acesso Cisco, qual é o objetivo principal do port security numa interface?",
    "options": [
      "Encriptar todas as tramas na porta com MACsec para que switches não autorizados não formem EtherChannel, sem limitar os endereços MAC de origem permitidos nessa interface",
      "Limitar que endereços MAC podem enviar tráfego nessa porta (e definir o que acontece em violação), para reduzir a ligação de endpoints não autorizados",
      "Substituir o STP por uma blacklist de aprendizagem MAC que desativa permanentemente as VLANs no uplink quando um MAC desconhecido aparece na porta de acesso",
      "Forçar a porta a operar apenas como interface Layer 3 encaminhada com máscara /30, sem limitar os endereços MAC que podem enviar tráfego nessa interface de acesso"
    ],
    "correct": 1,
    "explanation": "O port security associa uma porta de acesso a um conjunto limitado de MACs de origem permitidos (estáticos, sticky ou aprendizagem dinâmica até um máximo) e aplica uma ação de violação (protect, restrict ou shutdown). Serve para controlar que endpoints podem usar a porta — não é encriptação MACsec de todas as tramas, não desativa STP/VLANs no uplink, e não transforma a porta numa routed /30.",
    "difficulty": "Easy"
  }
];
