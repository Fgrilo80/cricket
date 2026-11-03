window.QUIZ_BANK = [
  {
    "question": "Nos switches Nexus, que comando tem de ser introduzido antes de se poder configurar OSPF?",
    "options": [
      "feature ospf",
      "router ospf enable-all",
      "ip routing ospf",
      "install license ospf"
    ],
    "correct": 0,
    "explanation": "O NX-OS é modular: as features (ospf, bgp, pim, vpc, lacp, interface-vlan…) têm de ser ativadas antes de os seus comandos aparecerem.",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "1.1.a"
  },
  {
    "question": "Numa fabric VXLAN EVPN, para que se usa o MP-BGP?",
    "options": [
      "Eleger a root bridge do spanning tree",
      "Criar a adjacência do underlay só em cada ligação física",
      "Levar rotas MAC/IP de anfitriões na família EVPN",
      "Sincronizar as tabelas MAC dos pares vPC"
    ],
    "correct": 2,
    "explanation": "O MP-BGP L2VPN EVPN anuncia rotas MAC/IP de anfitriões (tipo 2) e de prefixos (tipo 5) entre VTEP, normalmente com os spines como route reflectors.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.1.b"
  },
  {
    "question": "Que modo PIM se usa normalmente no underlay VXLAN flood-and-learn ou EVPN para tráfego BUM?",
    "options": [
      "Sem multicast; o BUM é sempre descartado",
      "PIM dense mode a inundar todas as interfaces",
      "PIM sparse mode com anycast RP nos spines",
      "PIM nas portas de acesso para os servidores"
    ],
    "correct": 2,
    "explanation": "A replicação multicast do BUM usa PIM-SM (ou bidir) no underlay, com anycast RP nos spines; a replicação na entrada é a alternativa.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.1.c"
  },
  {
    "question": "Dois switches Nexus num par vPC correm HSRP. Como é tratado o tráfego para o MAC virtual?",
    "options": [
      "A peer link do vPC leva-o todo",
      "Só o par HSRP ativo encaminha, o outro descarta",
      "Os dois pares encaminham-no (ativo-ativo)",
      "O HSRP não é suportado com vPC"
    ],
    "correct": 2,
    "explanation": "Com vPC, o standby também encaminha os pacotes enviados para o vMAC HSRP, por isso os dois pares encaminham e a peer link não é usada para isso.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.1.d"
  },
  {
    "question": "Que elemento do vPC leva as mensagens de heartbeat para detetar uma situação dual-active?",
    "options": [
      "A própria peer link do vPC",
      "A ligação peer-keepalive",
      "O port channel membro para o anfitrião",
      "A ACL da VRF de gestão"
    ],
    "correct": 1,
    "explanation": "O peer-keepalive (muitas vezes pela mgmt0) verifica se o par está vivo; a peer link leva o controlo (CFS) e algum tráfego de dados.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "A peer link do vPC falha mas o keepalive continua ativo. O que faz o par secundário?",
    "options": [
      "Suspende as suas portas membro vPC",
      "Passa a primário e mantém todas as portas vPC ativas",
      "Reinicia para voltar a entrar no domínio",
      "Desliga a ligação keepalive"
    ],
    "correct": 0,
    "explanation": "Para evitar split brain, o secundário suspende as suas portas membro vPC (e SVI) enquanto o primário continua a encaminhar.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "O que dá o Rapid PVST+ em relação ao PVST+ clássico?",
    "options": [
      "Uma única árvore para todas as VLAN da fabric",
      "Convergência mais rápida com RSTP por VLAN",
      "Encaminhamento camada 3 entre VLAN",
      "Negociação LACP automática"
    ],
    "correct": 1,
    "explanation": "O Rapid PVST+ corre uma instância 802.1w por VLAN, com proposal/agreement para convergência abaixo do segundo em ligações ponto a ponto.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "Que modo LACP nos dois lados faz com que não se forme port channel?",
    "options": [
      "on / on",
      "active / active",
      "active / passive (with rate fast)",
      "passive / passive"
    ],
    "correct": 3,
    "explanation": "Pelo menos um lado tem de estar em active para enviar LACPDU; passive-passive nunca negoceia. O 'on' é estático e não usa LACP.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "O que faz um VTEP numa fabric VXLAN?",
    "options": [
      "Encapsula e desencapsula tráfego VXLAN",
      "Corre a eleição da root do spanning tree",
      "Atribui VSAN às portas Fibre Channel",
      "Guarda a base de dados de configuração do APIC"
    ],
    "correct": 0,
    "explanation": "Os VXLAN Tunnel Endpoints (interfaces NVE dos leafs) mapeiam VLAN para VNI e acrescentam os cabeçalhos UDP/IP exteriores para os VTEP remotos.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Em VXLAN EVPN, o que dá o distributed anycast gateway?",
    "options": [
      "Um router central para todas as sub-redes",
      "O mesmo gateway em todos os leafs",
      "HSRP entre dois spines",
      "Um gateway só nos border leafs"
    ],
    "correct": 1,
    "explanation": "Cada leaf é o gateway de primeiro salto dos anfitriões locais com o mesmo anycast MAC (fabric forwarding), dando encaminhamento ótimo e mobilidade.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Que tipo de rota EVPN anuncia prefixos IP (p. ex. rotas externas) para a fabric?",
    "options": [
      "Tipo 4",
      "Tipo 2",
      "Tipo 3",
      "Tipo 5"
    ],
    "correct": 3,
    "explanation": "O tipo 2 leva MAC/IP de anfitriões, o tipo 3 multicast inclusivo (BUM), o tipo 4 o segmento Ethernet, o tipo 5 rotas de prefixos IP.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Porque se usa ARP suppression em VXLAN EVPN?",
    "options": [
      "Passa o processamento ARP para os spines",
      "Bloqueia todo o ARP para travar ataques de spoofing",
      "Substitui o endereçamento IP por encaminhamento só por MAC",
      "O leaf responde ao ARP com dados EVPN"
    ],
    "correct": 3,
    "explanation": "Com as associações MAC/IP aprendidas pelas rotas tipo 2, o leaf local responde aos pedidos ARP em vez de os inundar pela fabric.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Como descobre uma fabric ACI novos switches leaf e spine?",
    "options": [
      "Através do vCenter",
      "CLI manual em cada switch com IP estático",
      "DHCP a partir do router WAN",
      "Descoberta por LLDP e registo no APIC"
    ],
    "correct": 3,
    "explanation": "Os switches são encontrados por LLDP e DHCP a partir do APIC (VLAN infra/pool TEP); o administrador regista-os com IDs e nomes de nó.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.4.a"
  },
  {
    "question": "Nas access policies do ACI, que objeto liga uma VLAN pool a um domínio?",
    "options": [
      "O subject do contrato",
      "A sub-rede do bridge domain",
      "O domínio",
      "A VRF do tenant"
    ],
    "correct": 2,
    "explanation": "Os domínios referem VLAN pools e ligam-se a AAEP; os AAEP associam-se a interface policy groups para as VLAN serem permitidas nas portas.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.4.b"
  },
  {
    "question": "Uma static port binding de uma EPG falha com uma falha de 'VLAN inválida'. Qual é uma causa provável?",
    "options": [
      "A VLAN falta na VLAN pool",
      "O bridge domain não tem sub-rede",
      "O contrato não tem filtro",
      "A VRF está em modo unenforced"
    ],
    "correct": 0,
    "explanation": "A cadeia interface → policy group → AAEP → domínio → VLAN pool tem de incluir a VLAN, e a EPG tem de estar associada a esse domínio.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.4.b"
  },
  {
    "question": "O que faz a integração VMM do ACI com o vCenter?",
    "options": [
      "Mapeia EPG para port groups num VDS",
      "Move máquinas virtuais entre anfitriões automaticamente",
      "Instala o ESXi nos switches leaf",
      "Faz cópia da base de dados do vCenter para o APIC"
    ],
    "correct": 0,
    "explanation": "O APIC cria um VDS no vCenter; cada EPG associada ao domínio VMM aparece como port group, com atribuição dinâmica de VLAN.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.4.c"
  },
  {
    "question": "No ACI, um leaf recebe um pacote para um IP de destino desconhecido na mesma VRF. Para onde é enviado por omissão?",
    "options": [
      "Para o proxy dos spines",
      "Inundado para todos os leafs da fabric",
      "Descartado de imediato no leaf",
      "Para o APIC fazer a consulta"
    ],
    "correct": 0,
    "explanation": "Os leafs enviam o unicast desconhecido para o TEP de proxy anycast dos spines; os spines têm a base de dados COOP e encaminham para o leaf certo.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.5"
  },
  {
    "question": "No modelo de cloud do NIST, que modelo de serviço dá ao cliente máquinas virtuais, gerindo ele o sistema operativo?",
    "options": [
      "PaaS",
      "SaaS",
      "IaaS",
      "Só FaaS"
    ],
    "correct": 2,
    "explanation": "O IaaS fornece computação, armazenamento e rede; o cliente gere o SO e as aplicações. O PaaS acrescenta o runtime; o SaaS entrega a aplicação completa.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.6"
  },
  {
    "question": "Que modelo de implementação do NIST é usado em exclusivo por uma organização, no local ou fora?",
    "options": [
      "Cloud privada",
      "Cloud pública",
      "Cloud comunitária",
      "Cloud híbrida"
    ],
    "correct": 0,
    "explanation": "A cloud privada é de uma organização; a comunitária é partilhada por organizações com interesses comuns; a híbrida combina duas ou mais.",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "1.6"
  },
  {
    "question": "Que funcionalidade do NX-OS permite atualizar um switch Nexus com o mínimo de interrupção do plano de dados?",
    "options": [
      "Apagar a configuração de arranque",
      "ISSU",
      "Reiniciar para o prompt do loader",
      "Substituir primeiro a supervisora"
    ],
    "correct": 1,
    "explanation": "O ISSU atualiza o plano de controlo enquanto o plano de dados continua a encaminhar (em plataformas/caminhos suportados); verifique antes a compatibilidade.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "1.7.a"
  },
  {
    "question": "O que é o EPLD num switch Nexus?",
    "options": [
      "Uma licença para portas extra no chassis",
      "Um protocolo de encaminhamento para ligações de centro de dados",
      "Lógica de hardware atualizada à parte",
      "O processo de eleição do primário vPC"
    ],
    "correct": 2,
    "explanation": "Os Electronic Programmable Logic Devices têm funções de hardware; as imagens EPLD atualizam-se à parte e normalmente exigem reinício.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.7.b"
  },
  {
    "question": "Como se aplicam correções individuais no NX-OS sem atualização completa?",
    "options": [
      "Editando só a configuração em uso",
      "Voltando à versão anterior",
      "Patches SMU",
      "Reinstalando a BIOS do switch"
    ],
    "correct": 2,
    "explanation": "Os SMU instalam-se com 'install add / activate / commit' para corrigir defeitos específicos da versão em uso.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.7.c"
  },
  {
    "question": "Que funcionalidade do NX-OS permite voltar a um instantâneo de configuração anterior?",
    "options": [
      "write erase and reload the switch",
      "copy startup-config tftp",
      "Checkpoint e rollback",
      "reload in 10 with save"
    ],
    "correct": 2,
    "explanation": "O 'checkpoint' guarda a configuração em uso; 'rollback running-config checkpoint NOME' repõe-na (atomic, best-effort ou stop-at-first-failure).",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.8"
  },
  {
    "question": "Que funcionalidade copia tráfego de portas de origem para uma porta de destino de um analisador?",
    "options": [
      "CFS",
      "NetFlow",
      "LLDP",
      "SPAN"
    ],
    "correct": 3,
    "explanation": "O SPAN espelha pacotes (o ERSPAN envia-os por GRE para um analisador remoto); o NetFlow exporta registos de fluxos, não pacotes.",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "1.9"
  },
  {
    "question": "Qual é uma vantagem da telemetria em streaming baseada em modelos face à consulta SNMP?",
    "options": [
      "Não precisa de nenhum coletor externo",
      "Usa menos modelos YANG por equipamento",
      "Só funciona em ligações série antigas",
      "Os equipamentos enviam os dados"
    ],
    "correct": 3,
    "explanation": "A telemetria envia dados estruturados (gRPC/gNMI, caminhos YANG) periodicamente ou por mudança, em escala e com pouca latência.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.10"
  },
  {
    "question": "O que oferece o Nexus Dashboard para um centro de dados?",
    "options": [
      "Só uma ferramenta de zoning Fibre Channel",
      "Só um gestor de chassis de servidores blade",
      "Uma plataforma de serviços para fabrics",
      "Um substituto do NX-OS"
    ],
    "correct": 2,
    "explanation": "O Nexus Dashboard aloja serviços como Fabric Controller, Insights e Orchestrator para gerir e analisar fabrics NX-OS e ACI.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "1.11"
  },
  {
    "question": "Como podem ser geridos os servidores rack Cisco UCS C-Series?",
    "options": [
      "CIMC, Intersight ou UCSM",
      "Só pela interface do APIC da fabric",
      "Só por cabo de consola série",
      "Através das peer links do vPC"
    ],
    "correct": 0,
    "explanation": "O CIMC dá gestão standalone; os servidores também se podem ligar a Fabric Interconnects (UCSM ou Intersight Managed Mode) ou ao Intersight standalone.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.1"
  },
  {
    "question": "Porque usar pools de MAC, WWN e UUID nos service profiles UCS?",
    "options": [
      "As identidades seguem o perfil",
      "Aceleram o CPU e a memória",
      "Substituem as VLAN na fabric",
      "Licenciam o servidor no UCS Manager"
    ],
    "correct": 0,
    "explanation": "Computação sem estado: as identidades vêm de pools do perfil, por isso um perfil pode passar para outra blade sem mudar a configuração a montante.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.2.a"
  },
  {
    "question": "Qual é a diferença entre um template de service profile initial e um updating no UCS Manager?",
    "options": [
      "Os initial atualizam os perfis em cada alteração",
      "Os updating propagam as alterações",
      "São idênticos em todas as versões",
      "Os updating não podem usar pools"
    ],
    "correct": 1,
    "explanation": "Os perfis de um template updating ficam ligados e herdam as alterações (que podem reiniciar servidores); os initial só criam os perfis uma vez.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "2.2.b"
  },
  {
    "question": "No UCS, o que é um vHBA?",
    "options": [
      "Uma definição do controlador RAID",
      "Uma NIC Ethernet virtual com um MAC",
      "Um controlador de armazenamento do hipervisor",
      "Um adaptador FC virtual com um WWPN"
    ],
    "correct": 3,
    "explanation": "Os vHBA definem-se no service profile, recebem WWNN/WWPN de pools e ligam-se às VSAN através dos Fabric Interconnects.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.2.d"
  },
  {
    "question": "Uma blade UCS tem de arrancar de um LUN da SAN. O que é preciso no service profile?",
    "options": [
      "Uma boot policy com alvos SAN",
      "Uma local disk policy com qualquer configuração",
      "Uma BIOS policy que desliga a virtualização",
      "Uma lista de vNIC vazia"
    ],
    "correct": 0,
    "explanation": "A boot policy indica o vHBA e o WWPN/LUN do alvo; o zoning e o LUN masking no armazenamento têm de permitir o iniciador.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "2.2.e"
  },
  {
    "question": "O que é o Intersight Managed Mode (IMM) para UCS X-Series?",
    "options": [
      "Gerir servidores só pelo CIMC local",
      "O Intersight a gerir FI e servidores",
      "Um modo ACI para os switches leaf",
      "Um modo de firmware de arrays de armazenamento"
    ],
    "correct": 1,
    "explanation": "No IMM, o Intersight gere FI, chassis e servidores com pools, políticas e server profiles; o UCS X-Series exige-o (sem UCSM).",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.3"
  },
  {
    "question": "O que garante um host firmware package no UCS?",
    "options": [
      "Criação automática de VLAN nos uplinks",
      "Velocidades de DIMM maiores",
      "Versões de firmware consistentes",
      "Ativação de licenças para cada blade"
    ],
    "correct": 2,
    "explanation": "Os firmware packages (ou as políticas de firmware do Intersight) definem as versões de BIOS, adaptador e controlador aplicadas ao associar o perfil.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.4"
  },
  {
    "question": "Que tipo de cópia de segurança do UCS Manager pode repor todo o sistema num par de Fabric Interconnects substituído?",
    "options": [
      "Ficheiro de tech-support",
      "Só exportação da configuração lógica",
      "Exportação do registo de eventos",
      "Full state backup"
    ],
    "correct": 3,
    "explanation": "O full state é um instantâneo binário para recuperação de desastres; as exportações all-configuration, logical e system são XML para importar definições.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.5"
  },
  {
    "question": "Como pode capturar tráfego da vNIC de um servidor UCS para análise?",
    "options": [
      "Exportar um full state backup",
      "Ativar registo de debug na BIOS",
      "Usar a consola KVM do servidor",
      "Uma sessão de traffic monitoring no FI"
    ],
    "correct": 3,
    "explanation": "As sessões de traffic monitoring do UCS Manager espelham o tráfego de vNIC/vHBA ou de uplinks para uma porta de destino no FI.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "2.6"
  },
  {
    "question": "O que é uma VSAN nos switches Cisco MDS e Nexus?",
    "options": [
      "Um domínio vPC para portas de armazenamento",
      "Uma VLAN que leva só tráfego iSCSI",
      "Um volume de um array de discos",
      "Uma fabric SAN virtual"
    ],
    "correct": 3,
    "explanation": "As VSAN isolam fabrics Fibre Channel no mesmo hardware; cada uma corre os seus serviços (FSPF, zoning, servidor de nomes).",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "3.1.i"
  },
  {
    "question": "Durante a inicialização de uma fabric Fibre Channel, o que faz o principal switch?",
    "options": [
      "Guarda os dados de todos os membros de zonas",
      "Atribui domain IDs aos switches",
      "Cifra todas as tramas FC",
      "Elege o primário do vPC"
    ],
    "correct": 1,
    "explanation": "A seleção do principal switch faz-se por VSAN; atribui domain IDs, que formam o primeiro byte de cada FCID.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.a"
  },
  {
    "question": "Quais são as três partes de um FCID?",
    "options": [
      "VSAN, VLAN e porta",
      "Domínio, área e porta",
      "WWNN, WWPN e LUN",
      "Local, bastidor e ranhura"
    ],
    "correct": 1,
    "explanation": "O FCID de 24 bits é domínio (switch), área e porta; é atribuído no login na fabric (FLOGI).",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.c"
  },
  {
    "question": "Para que serve o zoning numa SAN Fibre Channel?",
    "options": [
      "Atribuir FCID aos anfitriões",
      "Limitar que iniciadores veem que alvos",
      "Agregar ISL num port channel",
      "Definir o MTU dos uplinks da VSAN"
    ],
    "correct": 1,
    "explanation": "As zonas (normalmente um iniciador e um alvo, ou smart zoning) limitam a comunicação; os zonesets ativam-se por VSAN.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.e"
  },
  {
    "question": "O que acrescenta o enhanced zoning em relação ao basic zoning?",
    "options": [
      "Um bloqueio de alterações na fabric",
      "Zonas que abrangem várias VSAN",
      "Cifra dos membros das zonas",
      "LUN masking automático nos arrays"
    ],
    "correct": 0,
    "explanation": "O enhanced zoning usa um bloqueio de sessão para só um administrador editar de cada vez e depois aplica de forma atómica; o basic pode sobrepor alterações.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "3.1.e"
  },
  {
    "question": "Que comando mostra os equipamentos registados no servidor de nomes Fibre Channel?",
    "options": [
      "show zone active",
      "show flogi interface status",
      "show fcns database",
      "show vsan membership"
    ],
    "correct": 2,
    "explanation": "A base de dados FCNS lista FCID, WWPN e tipos FC4 da VSAN; o 'show flogi database' lista os logins locais.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.f"
  },
  {
    "question": "Porque usar device aliases numa fabric MDS?",
    "options": [
      "Substituir as zonas por VSAN",
      "Encaminhamento mais rápido das tramas FC",
      "Mais buffer credits em cada ISL",
      "Nomes para WWPN, partilhados por CFS"
    ],
    "correct": 3,
    "explanation": "Os device aliases ligam nomes a pWWN e são distribuídos por toda a fabric via CFS, para as zonas serem legíveis e fáceis de atualizar quando as HBA mudam.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.g"
  },
  {
    "question": "O que faz o modo NPV num Fabric Interconnect UCS ou num switch Nexus?",
    "options": [
      "Bloqueia todos os FLOGI dos anfitriões",
      "Transforma o switch num switch FC completo",
      "Passa os logins dos hosts ao core",
      "Corre FSPF até ao core"
    ],
    "correct": 2,
    "explanation": "Em NPV o switch de periferia passa os FLOGI como FDISC a um core com NPIV, evitando gastar domain IDs e problemas de interoperabilidade.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "3.1.h"
  },
  {
    "question": "O que tem de estar ativo no switch core para os switches de periferia em NPV se ligarem?",
    "options": [
      "feature lacp",
      "feature npv",
      "só feature fport-channel-trunk",
      "feature npiv"
    ],
    "correct": 3,
    "explanation": "O NPIV deixa uma porta F aceitar vários logins de portas N (FDISC); o core precisa de NPIV enquanto a periferia corre NPV.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.h"
  },
  {
    "question": "Porque agregar ISL entre dois switches MDS num SAN port channel?",
    "options": [
      "Mais largura de banda e resiliência",
      "Para juntar duas VSAN numa",
      "Para desligar o zoning entre os switches",
      "Para atribuir novos domain IDs"
    ],
    "correct": 0,
    "explanation": "Um SAN port channel aparece como um único ISL lógico: o tráfego é balanceado e a falha de um membro não provoca reconvergência FSPF.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.b"
  },
  {
    "question": "O que faz o CFS nos switches MDS e Nexus?",
    "options": [
      "Comprime as tramas FC em ligações longas",
      "Partilha configuração entre switches",
      "Cria VSAN automaticamente",
      "Monitoriza as ventoinhas do chassis"
    ],
    "correct": 1,
    "explanation": "O Cisco Fabric Services distribui e bloqueia configuração (device alias, NTP, port security, etc.) por toda a fabric.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.1.d"
  },
  {
    "question": "Que protocolo leva comandos SCSI por uma rede TCP/IP normal?",
    "options": [
      "iSCSI",
      "FCoE",
      "NFS",
      "FSPF"
    ],
    "correct": 0,
    "explanation": "O iSCSI usa TCP 3260; o FCoE leva tramas FC diretamente sobre Ethernet sem perdas; o NFS é armazenamento ao nível de ficheiros.",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "3.2"
  },
  {
    "question": "Qual é a diferença principal entre armazenamento NFS e iSCSI?",
    "options": [
      "O NFS precisa de switches Fibre Channel",
      "O NFS é ficheiro; o iSCSI é bloco",
      "O iSCSI só corre em InfiniBand",
      "São o mesmo protocolo"
    ],
    "correct": 1,
    "explanation": "O NFS é um sistema de ficheiros de rede (NAS); o iSCSI dá ao anfitrião um dispositivo de blocos que ele próprio formata.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.2"
  },
  {
    "question": "O que se deve verificar antes de uma atualização de software sem interrupção num MDS?",
    "options": [
      "Que todas as zonas estão desativadas",
      "A saída do 'show install all impact'",
      "Que todos os ISL estão desligados",
      "Que a base de dados FCNS foi limpa"
    ],
    "correct": 1,
    "explanation": "O 'show install all impact' indica se os módulos atualizam sem impacto; supervisoras duplas e versões compatíveis permitem atualizar sem interrupção.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "3.3"
  },
  {
    "question": "Que funcionalidade do MDS analisa o desempenho de I/O SCSI/NVMe por fluxo?",
    "options": [
      "SAN Analytics",
      "Port security",
      "Device alias",
      "Zone merge"
    ],
    "correct": 0,
    "explanation": "O SAN Analytics (com o SAN Insights no Nexus Dashboard) inspeciona tramas em módulos suportados e mostra latência, IOPS e erros por iniciador-alvo-LUN.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "3.4"
  },
  {
    "question": "O que faz o Embedded Event Manager (EEM) no NX-OS?",
    "options": [
      "Balanceia tráfego pelos ISL",
      "Atualiza o software todas as semanas",
      "Executa ações em eventos definidos",
      "Sincroniza a configuração vPC com o par"
    ],
    "correct": 2,
    "explanation": "Os applets EEM identificam eventos (syslog, contadores, CLI) e executam ações como comandos CLI ou scripts.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.1.a"
  },
  {
    "question": "Que funcionalidade do NX-OS corre tarefas (como cópias da configuração) a horas definidas?",
    "options": [
      "EEM tracking",
      "Scheduler",
      "Checkpoint",
      "POAP"
    ],
    "correct": 1,
    "explanation": "A feature scheduler define jobs e horários (p. ex. copiar todos os dias a running-config para um servidor).",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.1.b"
  },
  {
    "question": "Qual é a diferença entre a Bash shell e a Guest Shell no NX-OS?",
    "options": [
      "São o mesmo ambiente com outros nomes",
      "A Guest Shell é um contentor isolado",
      "A Guest Shell precisa de servidor externo",
      "A Bash só corre scripts Python 2"
    ],
    "correct": 1,
    "explanation": "A Bash dá acesso Linux nativo ao switch; a Guest Shell é um contentor LXC baseado em CentOS para correr aplicações e Python com segurança.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.1.c"
  },
  {
    "question": "O que permite o NX-API CLI a um script?",
    "options": [
      "Ler traps SNMP do switch",
      "Substituir o NX-OS por Linux",
      "Configurar só as definições da BIOS",
      "Enviar CLI por HTTPS e receber JSON"
    ],
    "correct": 3,
    "explanation": "O NX-API (feature nxapi) aceita pedidos JSON-RPC/ins_api com comandos show ou config e devolve saída estruturada.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.1.d"
  },
  {
    "question": "O Python no próprio equipamento NX-OS usa que módulo para correr comandos CLI?",
    "options": [
      "requests",
      "netmiko",
      "paramiko",
      "cli"
    ],
    "correct": 3,
    "explanation": "O módulo cli local dá cli(), clid() (JSON) e clip(); ferramentas externas como o netmiko usam SSH.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.1.e"
  },
  {
    "question": "Porque é o Ansible popular na automação de redes de centro de dados?",
    "options": [
      "Precisa de um agente em cada switch",
      "Não usa agentes e usa playbooks YAML",
      "Só funciona com servidores UCS",
      "Compila os playbooks para firmware"
    ],
    "correct": 1,
    "explanation": "O Ansible liga-se aos equipamentos com network_cli ou httpapi (p. ex. coleções cisco.nxos, cisco.aci), usando módulos idempotentes.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.2.a"
  },
  {
    "question": "O que faz o POAP num switch Nexus novo?",
    "options": [
      "Cria uma peer link vPC com o vizinho",
      "Entra automaticamente numa fabric ACI",
      "Usa DHCP para obter imagem e config",
      "Corre o Terraform a partir da bootflash"
    ],
    "correct": 2,
    "explanation": "O Power-On Auto Provisioning usa opções DHCP para encontrar um servidor de scripts, e depois o script obtém a imagem e a configuração.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "4.2.c"
  },
  {
    "question": "O que faz o passo 'plan' do Terraform com o provider ACI?",
    "options": [
      "Faz primeiro cópia do APIC",
      "Aplica todas as alterações de uma vez",
      "Apaga e recria o tenant",
      "Mostra as alterações previstas"
    ],
    "correct": 3,
    "explanation": "O terraform plan compara o estado pretendido com o estado/objetos reais; depois o apply cria, altera ou destrói recursos.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.2.f"
  },
  {
    "question": "Que interfaces permitem automatizar o Cisco Intersight?",
    "options": [
      "Só pedidos SNMP get",
      "Só a interface web",
      "API REST, SDK e Terraform",
      "Só a consola série de cada servidor"
    ],
    "correct": 2,
    "explanation": "O Intersight expõe uma interface REST OpenAPI com chaves de API, SDK, um provider Terraform e módulos Ansible.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "4.2.g"
  },
  {
    "question": "Porque precisam os clusters de treino de IA/ML de funcionalidades Ethernet sem perdas como PFC e ECN?",
    "options": [
      "O tráfego RoCEv2 sofre com perdas",
      "As GPU só usam Fibre Channel",
      "Precisam de spanning tree em todas as ligações",
      "Para reduzir a tabela MAC dos leafs"
    ],
    "correct": 0,
    "explanation": "O RDMA over Converged Ethernet espera não haver perdas; o PFC pausa por prioridade e o ECN/DCQCN sinaliza congestionamento antes das perdas.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "4.3"
  },
  {
    "question": "Que protocolo é preferido no AAA de administração de equipamentos por poder autorizar cada comando?",
    "options": [
      "TACACS+",
      "RADIUS",
      "LDAP",
      "SNMPv2c"
    ],
    "correct": 0,
    "explanation": "O TACACS+ separa autenticação, autorização e contabilização e suporta autorização por comando.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "5.1.a"
  },
  {
    "question": "No ACI, o que tem de existir para duas EPG comunicarem?",
    "options": [
      "Um contrato entre elas",
      "Um ID de VLAN partilhado",
      "A mesma sub-rede IP",
      "Uma rota estática"
    ],
    "correct": 0,
    "explanation": "O ACI funciona por lista branca: uma EPG fornece e outra consome um contrato cujos subjects e filtros permitem o tráfego.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "5.1.b"
  },
  {
    "question": "O que permite a microssegmentação (uSeg EPG) no ACI?",
    "options": [
      "Cifrar toda a fabric",
      "Dividir um leaf em dois switches",
      "Agrupar endpoints por atributos",
      "Criar VSAN para as VM"
    ],
    "correct": 2,
    "explanation": "As uSeg EPG classificam endpoints por atributos (IP, MAC, nome da VM, SO…) para a política se aplicar mesmo dentro do mesmo BD/port group.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "5.1.b"
  },
  {
    "question": "Que funcionalidade de first-hop security bloqueia servidores DHCP falsos nas portas de acesso?",
    "options": [
      "Storm control",
      "DHCP snooping",
      "BPDU guard",
      "UDLD"
    ],
    "correct": 1,
    "explanation": "O DHCP snooping só confia nas portas de uplink para mensagens de servidor e cria a tabela de associações usada pelo DAI e pelo IP Source Guard.",
    "difficulty": "Fácil",
    "exam": "dccor",
    "domain": "5.1.c"
  },
  {
    "question": "Porque configurar uma keychain nos protocolos de encaminhamento do NX-OS?",
    "options": [
      "Para acelerar a convergência",
      "Para cifrar dados dos utilizadores",
      "Para guardar passwords locais",
      "Para rodar chaves de autenticação"
    ],
    "correct": 3,
    "explanation": "As keychains têm várias chaves com validades de envio/aceitação, permitindo trocar sem impacto a autenticação de OSPF, EIGRP, BGP ou HSRP.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "5.1.d"
  },
  {
    "question": "O que dá o MACsec numa ligação entre dois switches Nexus?",
    "options": [
      "Túneis IPsec de ponta a ponta",
      "Cifra da ligação na camada 2",
      "Proteção de DHCP na ligação",
      "Negociação LACP mais rápida"
    ],
    "correct": 1,
    "explanation": "O MACsec (802.1AE) cifra as tramas em cada ligação à velocidade da linha, com chaves do MKA (chave pré-partilhada ou 802.1X).",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "5.1.e"
  },
  {
    "question": "O que faz o port security num switch MDS?",
    "options": [
      "Cria zonas automaticamente",
      "Cifra todas as tramas FC",
      "Limita a largura de banda dos ISL",
      "Liga WWN a portas"
    ],
    "correct": 3,
    "explanation": "O port security restringe que equipamentos (pWWN/nWWN/sWWN) podem fazer login em que interfaces; os logins indevidos são rejeitados.",
    "difficulty": "Médio",
    "exam": "dccor",
    "domain": "5.3.a"
  },
  {
    "question": "Em que difere o fabric binding do port security no MDS?",
    "options": [
      "Cifra o tráfego dos ISL",
      "Controla os anfitriões nas portas F",
      "Controla que switches entram",
      "Substitui o zoning da VSAN"
    ],
    "correct": 2,
    "explanation": "O fabric binding autoriza os WWN (e domain IDs) de switches em portas E/TE, impedindo switches não autorizados de se juntarem à fabric.",
    "difficulty": "Difícil",
    "exam": "dccor",
    "domain": "5.3.c"
  }
];
