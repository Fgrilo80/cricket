window.QUIZ_BANK = [
  {
    "question": "Que componente do Catalyst SD-WAN (antigo vBond) autentica primeiro os equipamentos e ajuda na travessia de NAT?",
    "options": [
      "SD-WAN Controller",
      "SD-WAN Manager, que também guarda todos os templates",
      "SD-WAN Validator",
      "O router WAN Edge que funciona como hub da sua região"
    ],
    "correct": 2,
    "explanation": "O Validator (vBond) é o plano de orquestração: primeiro contacto, autentica os componentes, informa-os dos restantes e ajuda atrás de NAT.",
    "difficulty": "Fácil",
    "exam": "ensdwi",
    "domain": "1.1.a"
  },
  {
    "question": "Porque deve o Validator ter normalmente um IP público (ou NAT estático 1:1)?",
    "options": [
      "Funciona como gateway por omissão de cada LAN",
      "Encaminha todo o tráfego de dados dos utilizadores entre locais",
      "Guarda as licenças de todos os routers edge",
      "Todos os edges e controladores têm de o alcançar primeiro"
    ],
    "correct": 3,
    "explanation": "Todos os componentes se ligam ao Validator para entrar; não pode ficar atrás de um tipo de NAT que bloqueie ligações de entrada.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.a"
  },
  {
    "question": "Que componente dá a interface gráfica, os templates e a monitorização da fabric?",
    "options": [
      "SD-WAN Validator, através do seu portal web",
      "SD-WAN Manager (vManage)",
      "SD-WAN Controller (vSmart)",
      "O próprio servidor HTTP do WAN Edge local"
    ],
    "correct": 1,
    "explanation": "O Manager é o plano de gestão: configuração, templates/config groups, políticas, monitorização e API.",
    "difficulty": "Fácil",
    "exam": "ensdwi",
    "domain": "1.1.b"
  },
  {
    "question": "O que faz o SD-WAN Controller (vSmart)?",
    "options": [
      "Encaminha o tráfego dos utilizadores entre filiais",
      "Corre OMP e aplica a política de controlo",
      "Aloja a interface gráfica dos administradores",
      "Atribui endereços IP aos clientes de todas as LAN das filiais"
    ],
    "correct": 1,
    "explanation": "O Controller é o plano de controlo: recebe rotas OMP e TLOC dos edges, aplica política e reflete-as. Não encaminha dados.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.c"
  },
  {
    "question": "Que protocolo corre entre os WAN Edge e os Controllers para trocar rotas, TLOC e chaves?",
    "options": [
      "BFD",
      "OMP",
      "OSPF",
      "VRRP"
    ],
    "correct": 1,
    "explanation": "O Overlay Management Protocol corre dentro das ligações de controlo DTLS/TLS e leva rotas OMP, rotas TLOC e rotas de serviço.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.c"
  },
  {
    "question": "Que três valores identificam um TLOC?",
    "options": [
      "Nome do anfitrião, número de série e modelo",
      "Site ID, VPN e próximo salto",
      "System IP, cor e encapsulamento",
      "IP público, IP privado e porta"
    ],
    "correct": 2,
    "explanation": "Um TLOC (transport locator) é o conjunto system-IP, cor e encapsulamento (IPsec ou GRE); os outros atributos vão com ele.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.c (i)"
  },
  {
    "question": "O que é uma rota OMP (vRoute)?",
    "options": [
      "Uma sessão BFD entre dois edges",
      "Uma rota estática para o Validator no transporte",
      "Um prefixo da LAN com o TLOC como próximo salto",
      "Uma rota usada só pela interface do Manager"
    ],
    "correct": 2,
    "explanation": "Os edges aprendem prefixos da LAN (ligados, estáticos, OSPF, BGP) e anunciam-nos em OMP com o(s) TLOC de origem como próximo salto.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.c (ii)"
  },
  {
    "question": "Que encapsulamento é usado por omissão nos túneis do plano de dados entre WAN Edge?",
    "options": [
      "Etiquetas MPLS",
      "GRE sem cifra",
      "VXLAN",
      "IPsec"
    ],
    "correct": 3,
    "explanation": "Os edges constroem túneis IPsec por omissão; o GRE pode ser usado onde não é preciso cifra ou em algum encadeamento de serviços.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.d (i)"
  },
  {
    "question": "O que faz o BFD nos túneis SD-WAN?",
    "options": [
      "Distribui as chaves de cifra entre os vários controladores",
      "Verifica estado e qualidade do caminho",
      "Atribui cores às interfaces de transporte",
      "Anuncia prefixos da LAN para o OMP"
    ],
    "correct": 1,
    "explanation": "As sondas BFD correm em todos os túneis para detetar falhas e recolher os dados de SLA usados no application-aware routing.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.1.d (ii)"
  },
  {
    "question": "O que acrescenta o Multi-Region Fabric a uma SD-WAN grande?",
    "options": [
      "Uma instância Manager separada para cada filial",
      "Uma única full mesh plana de todos os edges do mundo",
      "Regiões unidas por uma região core",
      "Substituir o OMP por BGP entre todos os edges"
    ],
    "correct": 2,
    "explanation": "O MRF divide o overlay em regiões de acesso e uma região core; os border routers ligam-nas, o que escala e permite transportes diferentes por região.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "1.1.e"
  },
  {
    "question": "Que plataformas podem funcionar como WAN Edge do Catalyst SD-WAN?",
    "options": [
      "Catalyst 8000 e routers ISR em modo controller",
      "Só appliances de segurança Meraki MX",
      "Switches de acesso Catalyst 9300",
      "Só routers virtuais numa cloud pública"
    ],
    "correct": 0,
    "explanation": "Os equipamentos IOS XE SD-WAN (Catalyst 8200/8300/8500, 8000V, ISR 1000/4000) correm em modo controller; o vEdge é antigo.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.2"
  },
  {
    "question": "O que faz o Cloud OnRamp for SaaS para o Microsoft 365?",
    "options": [
      "Aloja uma cópia do Microsoft 365 em cada filial",
      "Sonda caminhos e usa a melhor saída",
      "Cifra todo o correio com o seu próprio certificado SD-WAN",
      "Bloqueia o tráfego Microsoft 365 nas ligações DIA"
    ],
    "correct": 1,
    "explanation": "Mede perdas e latência até à aplicação SaaS pelo DIA local e por locais gateway, e encaminha o tráfego pelo melhor caminho.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.3.a"
  },
  {
    "question": "O que automatiza o Cloud OnRamp for IaaS (multicloud)?",
    "options": [
      "Gateways de cloud que ligam a fabric às VPC/VNet",
      "A compra de créditos de cloud pública",
      "A migração de servidores para a AWS",
      "Os registos DNS de todas as aplicações SaaS das filiais"
    ],
    "correct": 0,
    "explanation": "Implementa e liga routers de cloud (p. ex. Catalyst 8000V ou transit gateways) para as cargas na cloud entrarem nos segmentos SD-WAN.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.3.b"
  },
  {
    "question": "Qual é o objetivo do Cloud OnRamp for Colocation?",
    "options": [
      "Criar um segundo cluster Manager no colocation",
      "Mudar os routers das filiais para um bastidor de colocation",
      "Vender largura de banda de colocation sobrante a parceiros",
      "Alojar serviços de rede virtuais num hub de colocation"
    ],
    "correct": 3,
    "explanation": "Usa servidores CSP e switches Cisco num local de colocation para correr VNF encadeadas (routers, firewalls) perto das clouds e dos utilizadores.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "1.3.c"
  },
  {
    "question": "O Cloud OnRamp Multicloud Interconnect é usado com fornecedores como Equinix ou Megaport. O que oferece?",
    "options": [
      "Ligações sem fios de reserva para as filiais",
      "Trânsito internet gratuito para todas as filiais da rede",
      "Uma substituição do BFD nas ligações de cloud",
      "Ligações privadas às clouds pelo fornecedor"
    ],
    "correct": 3,
    "explanation": "Automatiza Interconnect Gateways na fabric do fornecedor e ligações privadas a AWS, Azure ou Google, e de local a local pelo fornecedor.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "1.3.d"
  },
  {
    "question": "Qual é hoje a forma mais comum de implementar os controladores Catalyst SD-WAN?",
    "options": [
      "No painel Meraki",
      "Em cada um dos routers de filial",
      "Dentro dos nós ISE do cliente",
      "Na cloud, alojados pela Cisco"
    ],
    "correct": 3,
    "explanation": "A Cisco (ou um parceiro) aloja Manager, Validator e Controllers na cloud, o que dá arranque rápido e operação gerida; também é possível no local.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.1"
  },
  {
    "question": "Que hipervisores podem alojar controladores SD-WAN no local?",
    "options": [
      "A Guest Shell do router",
      "Só Microsoft Hyper-V",
      "Docker Desktop num portátil",
      "VMware ESXi e KVM"
    ],
    "correct": 3,
    "explanation": "Os controladores são fornecidos como imagens OVA/qcow2 para ESXi e KVM, e também existem em clouds públicas (AWS, Azure).",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.2.a"
  },
  {
    "question": "Ao instalar controladores no local, que definições têm de ser configuradas em cada um antes de entrar na fabric?",
    "options": [
      "Só um nome de anfitrião e uma rota por omissão na VPN 0",
      "System IP, site ID, organização, Validator",
      "Os temporizadores OMP e intervalos BFD",
      "Um perfil WLAN e um RF profile"
    ],
    "correct": 1,
    "explanation": "Cada controlador precisa de system-ip, site-id, organization-name, endereço do vbond e uma interface de transporte na VPN 0, mais certificados.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "2.2.b"
  },
  {
    "question": "Como se escala o SD-WAN Manager para muitos equipamentos e se torna redundante?",
    "options": [
      "Mais sessões BFD por túnel",
      "Um segundo Validator no mesmo local",
      "Um cluster de nós Manager",
      "Um MTU maior na VPN 0"
    ],
    "correct": 2,
    "explanation": "Os clusters Manager (tipicamente 3 ou 6 nós) repartem carga e dados; Validators e Controllers escalam acrescentando instâncias.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.2.c"
  },
  {
    "question": "A quantos Controllers se liga por omissão cada WAN Edge?",
    "options": [
      "Um, sem opção de mudar",
      "Dois (max-control-connections)",
      "Todos os Controllers do overlay",
      "Nenhum, só usa o Validator"
    ],
    "correct": 1,
    "explanation": "Por omissão os edges mantêm duas ligações de controlo por transporte a Controllers diferentes, para redundância; é ajustável.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.2.c"
  },
  {
    "question": "Porque tem o número de série de um WAN Edge de estar na lista de equipamentos do Manager antes de ele entrar?",
    "options": [
      "Diz ao router que VLAN da LAN deve criar",
      "Define a velocidade da ligação WAN do equipamento",
      "Escolhe a cor de cada TLOC",
      "Só são aceites equipamentos da lista"
    ],
    "correct": 3,
    "explanation": "A lista autorizada de séries/chassis é sincronizada do portal Plug and Play e enviada aos Validators e Controllers; equipamentos desconhecidos são rejeitados.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.3"
  },
  {
    "question": "Os controladores deixam de se autenticar entre si depois de ser introduzida uma nova CA empresarial. Qual é a causa provável?",
    "options": [
      "O graceful restart do OMP está desligado",
      "A nova CA raiz falta em alguns nós",
      "O multiplicador BFD está demasiado baixo nos hubs",
      "A cor na VPN 0 é 'default'"
    ],
    "correct": 1,
    "explanation": "Com certificados empresariais, cada controlador e edge tem de confiar na cadeia da CA raiz; caso contrário a autenticação DTLS/TLS falha.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "2.3"
  },
  {
    "question": "Que comando num WAN Edge IOS XE mostra o estado das ligações de controlo DTLS?",
    "options": [
      "show interface status",
      "show sdwan omp routes summary",
      "show sdwan control connections",
      "show crypto pki trustpoints"
    ],
    "correct": 2,
    "explanation": "O show sdwan control connections (e control local-properties, connection-history) mostra os pares, o estado e os erros.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.4"
  },
  {
    "question": "O show sdwan control connection-history mostra o erro CRTVERFL. Para onde aponta?",
    "options": [
      "O OMP não tem rotas",
      "O MTU do túnel é demasiado pequeno para os dados",
      "Falha no certificado",
      "A cor do TLOC é inválida"
    ],
    "correct": 2,
    "explanation": "O CRTVERFL é uma falha de verificação de certificado (p. ex. raiz não fiável, expirado ou série errada); verifique os certificados e a hora (NTP).",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "2.4"
  },
  {
    "question": "Um edge novo não consegue chegar ao Validator pelo FQDN. O que deve verificar primeiro?",
    "options": [
      "O mapa de QoS no túnel",
      "A área OSPF do lado da LAN",
      "O DNS e as rotas na VPN 0",
      "A política de firewall na VPN 10"
    ],
    "correct": 2,
    "explanation": "As ligações de controlo partem da VPN 0 (transporte); o edge precisa de rota e de DNS a funcionar para resolver e chegar ao Validator.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "2.4"
  },
  {
    "question": "Como encontra os seus controladores, com zero-touch, um WAN Edge novo numa ligação internet com DHCP?",
    "options": [
      "Procura na internet portas SD-WAN abertas",
      "Espera que um engenheiro escreva a config na consola",
      "Pergunta ao PnP Connect, que lhe indica o Validator",
      "Copia a config do edge mais próximo por Bluetooth"
    ],
    "correct": 2,
    "explanation": "ZTP/PnP: o equipamento obtém endereço, chega ao devicehelper/cloud PnP, aprende o Validator e a organização e depois descarrega a config.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.1.a"
  },
  {
    "question": "Quando se usa um bootstrap (ficheiro de config gerado) em vez de ZTP?",
    "options": [
      "Quando o PnP não está acessível",
      "Quando o equipamento tem mais de duas ligações WAN",
      "Quando o equipamento corre uma versão antiga de BFD",
      "Quando o local usa OSPF na LAN"
    ],
    "correct": 0,
    "explanation": "Um ficheiro bootstrap do Manager (em USB ou flash) dá as definições iniciais de transporte e identidade onde o ZTP não é possível.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.1.a"
  },
  {
    "question": "Porque instalar dois WAN Edge num centro de dados ou hub regional?",
    "options": [
      "Para evitar usar Controllers",
      "Para duplicar o número de rotas OMP por prefixo",
      "Porque cada edge só suporta uma VPN",
      "Redundância e capacidade"
    ],
    "correct": 3,
    "explanation": "Os hubs agregam muitos túneis; edges duplos com encaminhamento no lado LAN (BGP/OSPF, VRRP) dão resiliência e escala.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.1.b"
  },
  {
    "question": "Uma filial tem dois edges, cada um só com um dos dois circuitos WAN. Como podem os dois edges usar ambos os circuitos?",
    "options": [
      "TLOC extension entre os dois edges",
      "Graceful restart do OMP nos circuitos",
      "Um segundo Validator na filial",
      "Cloud OnRamp for SaaS num dos edges"
    ],
    "correct": 0,
    "explanation": "A TLOC extension liga os routers para cada um construir túneis sobre o circuito terminado no par.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "3.2.a"
  },
  {
    "question": "O que são túneis on-demand (dinâmicos) em SD-WAN?",
    "options": [
      "Túneis entre spokes criados quando é preciso",
      "Túneis que mudam de cor a cada hora",
      "Túneis só entre controladores",
      "Túneis de reserva que usam só a ligação 4G/LTE"
    ],
    "correct": 0,
    "explanation": "Com túneis on-demand, os spokes usam o hub por omissão e criam túneis diretos quando há tráfego, poupando recursos em equipamentos pequenos.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.2.b"
  },
  {
    "question": "Dois edges usam cores 'privadas' (mpls) de um lado e 'públicas' (biz-internet) do outro. Quando usam os túneis IP públicos?",
    "options": [
      "Nunca, os túneis usam sempre IP privados",
      "Quando há uma cor pública envolvida",
      "Só quando há restrict nas duas cores",
      "Só para tráfego na VPN 0"
    ],
    "correct": 1,
    "explanation": "Os edges usam endereços privados (antes do NAT) entre cores privadas e endereços públicos (depois do NAT) quando há uma cor pública.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "3.2.c"
  },
  {
    "question": "O que faz a palavra-chave 'restrict' numa cor de TLOC?",
    "options": [
      "Limita a ligação a 10 Mb/s",
      "Bloqueia todas as ligações de controlo nessa ligação",
      "Para o BFD nessa cor",
      "Túneis só para a mesma cor"
    ],
    "correct": 3,
    "explanation": "O restrict impede túneis para outras cores, por exemplo mantendo o tráfego MPLS só entre TLOC MPLS.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.2.c"
  },
  {
    "question": "Como escolhe o OMP a melhor rota quando vários edges anunciam o mesmo prefixo?",
    "options": [
      "Ganha o edge com o número de série mais alto",
      "Preferência, preferência do TLOC, origem",
      "A primeira rota aprendida fica para sempre",
      "O OMP escolhe uma ao acaso a cada minuto"
    ],
    "correct": 1,
    "explanation": "O melhor caminho OMP compara preferência, preferência do TLOC, tipo de origem e métrica, entre outros; a política de controlo pode mudar estes atributos.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.3"
  },
  {
    "question": "Por omissão, que rotas da LAN anuncia um edge para o OMP?",
    "options": [
      "Nenhuma até se aplicar uma política",
      "Só rotas BGP e OSPF",
      "Rotas ligadas e estáticas",
      "Só a rota por omissão"
    ],
    "correct": 2,
    "explanation": "As ligadas e estáticas são redistribuídas por omissão; OSPF, BGP e EIGRP têm de ser ativados no OMP advertise.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.3"
  },
  {
    "question": "Porque definir uma TLOC preference mais alta na cor MPLS num hub?",
    "options": [
      "Cifra o túnel MPLS duas vezes",
      "Os locais remotos preferem esse TLOC",
      "Dá mais largura de banda à ligação MPLS",
      "Desliga o TLOC de internet"
    ],
    "correct": 1,
    "explanation": "A preferência do TLOC influencia a escolha do caminho OMP nos edges remotos; maior é preferido.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.4"
  },
  {
    "question": "No SD-WAN Manager, como se constrói um device template a partir de feature templates?",
    "options": [
      "É criado automaticamente pelo Validator depois do ZTP",
      "É um único ficheiro de texto copiado do router de outro fabricante",
      "Junta feature templates (system, VPN, interfaces, routing)",
      "Contém só o número de série e a licença do equipamento"
    ],
    "correct": 2,
    "explanation": "Os device templates referem feature templates; os valores próprios de cada equipamento entram por variáveis ao associar.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.5"
  },
  {
    "question": "Quando usaria um CLI add-on template?",
    "options": [
      "Para enviar uma imagem de firmware a todos os edges ao mesmo tempo",
      "Para substituir o OMP por um protocolo de encaminhamento só por CLI",
      "Para alguns comandos que nenhum feature template suporta",
      "Para criar o pedido de assinatura de certificado do Validator"
    ],
    "correct": 2,
    "explanation": "O CLI add-on acrescenta CLI pura a um device template de features, evitando um template CLI completo para pequenas lacunas.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.5"
  },
  {
    "question": "Uma filial tem dois edges a servir uma LAN. Que protocolo dá aos anfitriões um único gateway por omissão?",
    "options": [
      "Cloud OnRamp for SaaS com um local gateway",
      "OMP na VPN de serviço entre os dois edges",
      "BFD",
      "VRRP"
    ],
    "correct": 3,
    "explanation": "O VRRP nas interfaces do lado de serviço dá um gateway virtual; pode seguir o estado do OMP ou de interfaces.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.5.a"
  },
  {
    "question": "Um edge hub aprende rotas OSPF do centro de dados e tem de as anunciar às filiais. O que é preciso?",
    "options": [
      "Configurar OSPF na VPN 512 para o Manager o ver",
      "Nada, as rotas OSPF vão para o OMP por omissão com todas as LSA",
      "Correr OSPF entre todos os edges pelas ligações internet",
      "Anunciar o OSPF para o OMP na VPN de serviço"
    ],
    "correct": 3,
    "explanation": "O OSPF tem de ser redistribuído para o OMP (omp advertise ospf) nessa VPN; e o OMP para o OSPF no sentido inverso.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "3.5.b"
  },
  {
    "question": "Os edges redistribuem OMP para BGP num centro de dados que também tem routers CE MPLS. O que evita um ciclo de encaminhamento?",
    "options": [
      "Etiquetas de rota ou communities BGP com filtros",
      "Aumentar o intervalo hello do BFD em todos os túneis do overlay",
      "Desligar o graceful restart do OMP no hub",
      "Usar GRE em vez de IPsec em todos os túneis"
    ],
    "correct": 0,
    "explanation": "A redistribuição mútua em vários pontos precisa de etiquetas/communities (ou SoO, AS-path) para as rotas do overlay não voltarem.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "3.5.c"
  },
  {
    "question": "Onde se pode usar EIGRP num edge Catalyst SD-WAN?",
    "options": [
      "Só na VPN 0 para chegar ao Validator pela internet",
      "Como protocolo do overlay entre todos os edges em vez do OMP",
      "No lado de serviço, redistribuído para o OMP",
      "Só entre os nós do cluster Manager"
    ],
    "correct": 2,
    "explanation": "O EIGRP é suportado nas VPN de serviço IOS XE SD-WAN e pode ser anunciado para o OMP como o OSPF ou o BGP.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.5.d"
  },
  {
    "question": "Como é tratado o multicast no overlay Catalyst SD-WAN?",
    "options": [
      "O multicast não é suportado em nenhuma versão SD-WAN",
      "Cada edge inunda o multicast para todos os outros edges em todas as VPN",
      "Replicadores copiam o tráfego para os edges dos recetores",
      "O Controller encaminha ele próprio os dados multicast"
    ],
    "correct": 2,
    "explanation": "Os edges correm PIM no lado de serviço; o OMP sinaliza as adesões e replicadores designados reduzem a carga de replicação na origem.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "3.6"
  },
  {
    "question": "O que são os configuration groups no SD-WAN Manager?",
    "options": [
      "Um modelo mais recente feito de feature profiles",
      "Uma lista de administradores autorizados a mudar definições do overlay",
      "Grupos de sessões BFD que partilham temporizadores",
      "A lista de números de série autorizados do Validator"
    ],
    "correct": 0,
    "explanation": "Os configuration groups (com perfis system, transport, service e policy) e os workflows guiados simplificam o antigo modelo de templates.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "3.7"
  },
  {
    "question": "Onde se aplica uma política de controlo centralizada?",
    "options": [
      "No Controller, às rotas OMP e TLOC",
      "Na interface LAN de cada edge como lista de acesso para todo o tráfego",
      "No Validator para a travessia de NAT",
      "Na página de login da interface do Manager"
    ],
    "correct": 0,
    "explanation": "As políticas de controlo correm nos Controllers e mudam que rotas OMP/TLOC são anunciadas a que locais, criando topologias como hub-and-spoke.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.1"
  },
  {
    "question": "Uma política de controlo hub-and-spoke define o TLOC das rotas dos spokes como o hub. Qual é o efeito?",
    "options": [
      "O tráfego entre spokes passa pelo hub",
      "Os spokes perdem todas as rotas para o centro de dados e entre si",
      "O BFD para em todos os túneis para o hub",
      "O hub passa a ser o Validator da região"
    ],
    "correct": 0,
    "explanation": "Ao definir o TLOC de próximo salto (ou filtrar os TLOC dos spokes), os spokes chegam uns aos outros pelo hub em vez de túneis diretos.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "4.1"
  },
  {
    "question": "Sobre o que atua uma política de dados centralizada?",
    "options": [
      "Só as rotas OMP refletidas pelo Controller para os locais",
      "Tráfego identificado por portas ou DSCP",
      "As cópias de segurança da base de dados do Manager",
      "Os certificados dos edges"
    ],
    "correct": 1,
    "explanation": "As políticas de dados definem-se no Controller mas aplicam-se nos edges: identificam campos dos pacotes e descartam, mudam o próximo salto, TLOC, NAT, etc.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.2"
  },
  {
    "question": "Que tipo de política se configura no próprio edge, como uma ACL de interface ou QoS?",
    "options": [
      "Política de pertença a VPN",
      "Política de controlo centralizada enviada por OMP a todos os locais",
      "Política de application-aware routing no Validator",
      "Política localizada"
    ],
    "correct": 3,
    "explanation": "As políticas localizadas (ACL, QoS, políticas de rotas) associam-se aos device templates/config groups e correm localmente.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.2"
  },
  {
    "question": "O que é uma VPN no Catalyst SD-WAN?",
    "options": [
      "Um único túnel entre dois edges",
      "Um cliente IPsec de acesso remoto para portáteis em viagem",
      "Um segmento como uma VRF, etiquetado no plano de dados",
      "Um grupo de utilizadores do Manager com o mesmo papel"
    ],
    "correct": 2,
    "explanation": "As VPN de serviço (1–511 etc.) são tabelas de encaminhamento isoladas; a etiqueta VPN viaja nos pacotes para os segmentos ficarem separados de ponta a ponta.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.3.a"
  },
  {
    "question": "Que VPN está reservada para o lado do transporte (WAN)?",
    "options": [
      "VPN 65535",
      "VPN 512, também usada na porta de gestão fora de banda",
      "VPN 1",
      "VPN 0"
    ],
    "correct": 3,
    "explanation": "A VPN 0 é o transporte; a VPN 512 é a gestão fora de banda; as VPN de serviço levam o tráfego dos utilizadores.",
    "difficulty": "Fácil",
    "exam": "ensdwi",
    "domain": "4.3.a"
  },
  {
    "question": "O tráfego de convidados (VPN 20) só deve chegar à internet pelo centro de dados, nunca a outras VPN. Que abordagem serve?",
    "options": [
      "Usar a mesma VPN para convidados e funcionários com uma ACL",
      "Pôr os convidados na VPN 0 para partilharem a interface de transporte",
      "Desligar o BFD da VPN 20 em todas as filiais",
      "Uma política de topologia para a VPN 20 até ao hub do DC"
    ],
    "correct": 3,
    "explanation": "Topologias por VPN (hub-and-spoke na VPN 20) mais a separação das VPN dão isolamento; a fuga de rotas só acontece se for configurada.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "4.3.b"
  },
  {
    "question": "O que faz o application-aware routing?",
    "options": [
      "Escolhe túneis que cumprem a classe SLA da aplicação",
      "Atribui automaticamente uma VPN separada a cada aplicação",
      "Bloqueia aplicações que não estão na lista",
      "Comprime o tráfego das aplicações"
    ],
    "correct": 0,
    "explanation": "O AAR usa as medições BFD de perdas, latência e jitter contra classes SLA e muda o tráfego quando um caminho falha o SLA.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.4"
  },
  {
    "question": "Nenhum caminho cumpre a classe SLA de voz. O que acontece com uma política AAR por omissão sem 'strict'?",
    "options": [
      "O tráfego continua a usar um caminho disponível",
      "O tráfego de voz é descartado na filial até um caminho recuperar",
      "O edge reinicia para repor o BFD",
      "O Controller bloqueia todas as rotas OMP desse local"
    ],
    "correct": 0,
    "explanation": "Sem strict, o tráfego volta aos caminhos disponíveis (ou à cor de reserva configurada); com strict é descartado.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "4.4"
  },
  {
    "question": "O que melhora o Enhanced AAR em relação ao AAR clássico?",
    "options": [
      "Deteção de SLA mais rápida com dados inline",
      "Elimina a necessidade de classes SLA em todas as políticas",
      "Corre no Validator em vez dos edges",
      "Desliga o BFD para poupar largura de banda"
    ],
    "correct": 0,
    "explanation": "O Enhanced AAR usa medições inline no plano de dados para deteção abaixo do segundo; o Predictive Path Recommendations usa analítica para sugerir melhores preferências.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "4.4"
  },
  {
    "question": "Como se faz normalmente o acesso direto à internet (DIA) numa filial?",
    "options": [
      "Levar todos os fluxos primeiro ao centro de dados por IPsec",
      "NAT na VPN 0 com rota ou política",
      "Desligar os túneis IPsec nessa filial",
      "Usar a VPN 512 para o tráfego dos utilizadores"
    ],
    "correct": 1,
    "explanation": "O DIA ativa NAT na interface da VPN 0 e envia para lá o tráfego escolhido com uma rota NAT na VPN de serviço ou uma política de dados centralizada.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "4.5"
  },
  {
    "question": "O que faz a inserção de serviços (service chaining)?",
    "options": [
      "Insere a interface do Manager em cada router de filial como contentor",
      "Encaminha tráfego escolhido por uma firewall ou IPS",
      "Acrescenta um segundo Controller em cada região",
      "Substitui o OMP por rotas estáticas"
    ],
    "correct": 1,
    "explanation": "Os edges anunciam serviços (FW, IDS, netsvc) em OMP; as políticas fazem o tráfego passar por eles, muitas vezes num hub.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.1"
  },
  {
    "question": "O que é a application-aware enterprise firewall dos edges SD-WAN?",
    "options": [
      "Uma firewall só na cloud que precisa de SIG em todas as ligações",
      "Uma firewall stateful por zonas que identifica aplicações",
      "Uma ACL sem estado aplicada na interface da VPN 0",
      "Uma firewall que só inspeciona as mensagens OMP"
    ],
    "correct": 1,
    "explanation": "É a firewall por zonas do IOS XE com identificação de aplicações NBAR, configurada como política de segurança no Manager.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.2.a"
  },
  {
    "question": "Onde correm o IPS, a filtragem de URL e o AMP num edge IOS XE SD-WAN?",
    "options": [
      "Numa imagem virtual de segurança (contentor UTD)",
      "No Validator, que inspeciona todo o tráfego de todos os locais",
      "Nos nós do cluster Manager no centro de dados",
      "No processo BFD do plano de dados"
    ],
    "correct": 0,
    "explanation": "O UTD (baseado em Snort) corre como contentor no router; a imagem tem de corresponder à versão IOS XE e a plataforma precisa de memória suficiente.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.2.b"
  },
  {
    "question": "Uma política de filtragem de URL bloqueia sites de apostas. Como são classificados os sites?",
    "options": [
      "Por reputação web e categoria",
      "Pelo endereço IP de origem de cada utilizador na LAN",
      "Pela cor do TLOC",
      "Pelas etiquetas das rotas OMP"
    ],
    "correct": 0,
    "explanation": "A filtragem de URL usa categorias e pontuações de reputação Talos, com listas de permitir/bloquear para exceções.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.2.c"
  },
  {
    "question": "O que faz o AMP num edge SD-WAN?",
    "options": [
      "Cifra o tráfego de gestão entre o edge e o Manager",
      "Mede a latência para o AAR em todos os túneis",
      "Verifica a reputação de ficheiros e bloqueia malware",
      "Atribui classes de QoS ao tráfego de voz"
    ],
    "correct": 2,
    "explanation": "O Advanced Malware Protection procura os hashes dos ficheiros na cloud e pode enviar ficheiros desconhecidos para análise no Threat Grid.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.2.d"
  },
  {
    "question": "Porque ativar o proxy SSL/TLS nos edges com IPS e filtragem de URL?",
    "options": [
      "Para cifrar as sondas BFD, que por omissão vão em texto simples",
      "Para inspecionar dentro dos fluxos cifrados",
      "Para substituir o IPsec no overlay",
      "Para acelerar as ligações de controlo"
    ],
    "correct": 1,
    "explanation": "A maior parte do tráfego é HTTPS; o proxy decifra (com uma CA em que os clientes confiam) para o UTD inspecionar, e volta a cifrar.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.2.e"
  },
  {
    "question": "Como se integra o TrustSec com o Catalyst SD-WAN?",
    "options": [
      "Não é suportado em nenhum edge",
      "Substituindo cada VPN por um SGT separado na base de dados do Manager",
      "Usando SGT como cores de TLOC",
      "SGT levados inline pelo overlay"
    ],
    "correct": 3,
    "explanation": "Os edges podem propagar o SGT no plano de dados (ou aprendê-lo por SXP) e aplicar políticas por identidade (SGACL, firewall).",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.2.f"
  },
  {
    "question": "Como funciona a segurança DNS do Umbrella num edge SD-WAN?",
    "options": [
      "O Umbrella substitui o BFD",
      "O edge resolve cada nome localmente a partir de uma lista de domínios",
      "O Validator responde a todas as consultas DNS",
      "O edge redireciona as consultas DNS para o Umbrella"
    ],
    "correct": 3,
    "explanation": "O edge interceta o DNS (DNS redirect) e envia-o ao Umbrella com a identidade do equipamento/VPN, bloqueando domínios maliciosos.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.3.a"
  },
  {
    "question": "Como enviam os edges das filiais o tráfego internet para um Secure Internet Gateway (SIG)?",
    "options": [
      "Só levando o tráfego ao centro de dados e daí para um servidor proxy",
      "Túneis IPsec/GRE automáticos até ao SIG",
      "Mudando o servidor DNS de cada PC",
      "Pelo OMP até ao Controller"
    ],
    "correct": 1,
    "explanation": "Os templates/features SIG criam túneis para o Umbrella/Secure Access ou SIG de terceiros, e rotas/políticas enviam lá o tráfego.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.3.b"
  },
  {
    "question": "Quantas filas de encaminhamento usa um edge IOS XE Catalyst SD-WAN para QoS numa interface?",
    "options": [
      "Oito (a fila 0 é de baixa latência)",
      "Duas, uma para controlo e outra para todos os outros dados",
      "Dezasseis por interface de túnel",
      "Uma fila partilhada por todas as classes"
    ],
    "correct": 0,
    "explanation": "Há oito filas; a fila 0 é a LLQ e as outras partilham largura de banda por peso; os class maps ligam as classes às filas.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.4.a"
  },
  {
    "question": "Que método de filas protege a voz com uma fila de prioridade estrita?",
    "options": [
      "FIFO",
      "Weighted random early detection aplicado à fila por omissão",
      "LLQ",
      "Round-robin entre túneis"
    ],
    "correct": 2,
    "explanation": "O Low Latency Queuing serve primeiro a fila de prioridade (policiada para evitar fome), as outras recebem partes CBWFQ.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.4.b"
  },
  {
    "question": "Uma filial tem uma porta de 100 Mb/s mas um contrato internet de 20 Mb/s. O que é preciso para o QoS funcionar?",
    "options": [
      "Marcar todo o tráfego como EF",
      "Policing do tráfego de entrada a 100 Mb/s nas interfaces LAN",
      "Um multiplicador BFD mais alto",
      "Shaping para 20 Mb/s"
    ],
    "correct": 3,
    "explanation": "Sem shaping a fila forma-se na rede do operador; o shaping ao contrato faz as filas do edge terem efeito.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.4.c"
  },
  {
    "question": "O que faz um policer ao tráfego acima da sua taxa?",
    "options": [
      "Descarta-o ou remarca-o",
      "Guarda-o até a ligação estar livre e depois envia-o por ordem",
      "Envia-o por outra VPN",
      "Cifra-o outra vez"
    ],
    "correct": 0,
    "explanation": "O policing não usa fila: o excesso é descartado ou remarcado; o shaping guarda-o em fila.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.4.d"
  },
  {
    "question": "Para onde é copiado o DSCP do tráfego do overlay para o operador o poder respeitar?",
    "options": [
      "Para lado nenhum, perde-se",
      "Para os atributos das rotas OMP de cada um dos prefixos",
      "Para o ID da sessão BFD",
      "Para o cabeçalho exterior IPsec/GRE"
    ],
    "correct": 3,
    "explanation": "Os edges copiam (ou reescrevem) o DSCP interior no cabeçalho exterior do túnel para o transporte aplicar o seu QoS.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.4.e"
  },
  {
    "question": "Que problema resolve o per-tunnel QoS num hub?",
    "options": [
      "Spokes que excedem o número de rotas OMP permitidas pelo Controller",
      "Um hub a saturar ligações pequenas dos spokes",
      "Sessões BFD que falham à noite",
      "Falhas de DNS"
    ],
    "correct": 1,
    "explanation": "O per-tunnel QoS faz shaping de cada túnel hub-spoke à largura de banda do spoke; o adaptive QoS ajusta o shaper à capacidade medida.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.4.f"
  },
  {
    "question": "O que faz a otimização TCP do AppQoE?",
    "options": [
      "Faz proxy de TCP para melhorar ligações com muito atraso",
      "Converte todas as sessões TCP em UDP para serem enviadas mais depressa",
      "Bloqueia as retransmissões TCP",
      "Limita o TCP a uma sessão por utilizador"
    ],
    "correct": 0,
    "explanation": "A otimização TCP termina e volta a criar o TCP com melhor controlo de congestionamento (BBR), ajudando caminhos com muita latência ou perdas.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.5.a"
  },
  {
    "question": "Como poupa o DRE largura de banda WAN?",
    "options": [
      "Envia referências em vez de dados repetidos",
      "Retira da rede os utilizadores duplicados",
      "Remove os pacotes BFD dos túneis",
      "Desliga a cifra para reduzir os cabeçalhos"
    ],
    "correct": 0,
    "explanation": "O Data Redundancy Elimination guarda padrões de bytes nos dois lados e troca blocos repetidos por assinaturas curtas.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.5.b"
  },
  {
    "question": "Um local de voz tem duas ligações de má qualidade. Que funcionalidade AppQoE envia cada pacote pelas duas?",
    "options": [
      "Forward error correction com pacotes de paridade numa única ligação",
      "Packet duplication",
      "Otimização TCP",
      "DRE"
    ],
    "correct": 1,
    "explanation": "O packet duplication envia cópias por dois túneis e descarta a duplicada no destino, escondendo as perdas de um caminho.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.5.c"
  },
  {
    "question": "O que faz o FEC num túnel com perdas?",
    "options": [
      "Comprime os cabeçalhos dos pacotes no túnel",
      "Cifra os pacotes uma segunda vez com uma chave nova",
      "Muda o tráfego para outra cor de TLOC",
      "Acrescenta paridade para reconstruir pacotes perdidos"
    ],
    "correct": 3,
    "explanation": "O Forward Error Correction envia um pacote de paridade por grupo para o recetor recuperar um pacote perdido sem retransmissão.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "5.5.d"
  },
  {
    "question": "O que é o AppNav no desenho AppQoE?",
    "options": [
      "O controlador que envia fluxos aos nós de serviço",
      "Uma funcionalidade GPS que coloca cada filial num mapa global",
      "Um substituto do OMP em hubs grandes",
      "Um tema gráfico no painel do Manager"
    ],
    "correct": 0,
    "explanation": "Os controladores AppNav intercetam e distribuem fluxos para nós de serviço (externos ou internos) que fazem otimização TCP e DRE.",
    "difficulty": "Difícil",
    "exam": "ensdwi",
    "domain": "5.5.e"
  },
  {
    "question": "Como podem os administradores do SD-WAN Manager ser autenticados num servidor central?",
    "options": [
      "Com chaves BFD",
      "Só contas locais criadas em cada router edge na VPN 512",
      "RADIUS, TACACS+ ou SSO",
      "Com o número de série do certificado"
    ],
    "correct": 2,
    "explanation": "O Manager suporta utilizadores locais, RADIUS/TACACS+ e SSO SAML, com grupos de utilizadores para RBAC.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "6.1"
  },
  {
    "question": "Onde se verificam no SD-WAN Manager as perdas, latência e jitter dos túneis de um local?",
    "options": [
      "Administration > Settings > Alarms",
      "Configuration > Certificates do edge e dos controladores",
      "Monitor > Devices > Tunnel / App Route",
      "Maintenance > Software Repository"
    ],
    "correct": 2,
    "explanation": "As páginas de monitorização do equipamento mostram túneis, estatísticas AAR (app route), interfaces e eventos por equipamento.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "6.2"
  },
  {
    "question": "Como se autentica uma ferramenta externa na API REST do SD-WAN Manager?",
    "options": [
      "Uma community SNMPv1 enviada em cada pedido à API",
      "Cookie de sessão com um token XSRF",
      "Uma chave BFD",
      "Não é precisa autenticação"
    ],
    "correct": 1,
    "explanation": "Um POST a j_security_check devolve o JSESSIONID; um GET a /dataservice/client/token dá o X-XSRF-TOKEN para alterações (versões recentes também aceitam tokens).",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "6.3"
  },
  {
    "question": "Como atualiza o SD-WAN Manager o software dos edges com segurança?",
    "options": [
      "Carregar, ativar e reverter se o contacto se perder",
      "Copiar a imagem a cada edge por TFTP e reiniciar todos ao mesmo tempo",
      "O Validator atualiza os edges ao acaso",
      "O software não pode ser atualizado a partir do Manager"
    ],
    "correct": 0,
    "explanation": "As imagens vão para o repositório; os equipamentos instalam e depois ativam; se não chegarem ao Manager dentro do temporizador, revertem.",
    "difficulty": "Médio",
    "exam": "ensdwi",
    "domain": "6.4"
  },
  {
    "question": "Que componente automatiza e gere uma fabric SD-Access?",
    "options": [
      "Catalyst Center",
      "Catalyst SD-WAN Validator na cloud",
      "Painel Meraki",
      "Prime Infrastructure 1.x"
    ],
    "correct": 0,
    "explanation": "O Catalyst Center (antigo DNA Center) provisiona o underlay e o overlay, a política e a assurance; o ISE dá identidade e política.",
    "difficulty": "Fácil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que protocolo é o plano de controlo de uma fabric SD-Access?",
    "options": [
      "LISP",
      "OSPF numa só área em todos os nós da fabric",
      "OMP",
      "VTP"
    ],
    "correct": 0,
    "explanation": "O LISP mapeia identificadores de endpoint (EID) para localizadores (RLOC); os nós da fabric registam e consultam o nó de controlo (map server/resolver). O BGP EVPN é uma opção mais recente.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que encapsulamento forma o plano de dados SD-Access?",
    "options": [
      "Só trunks 802.1Q",
      "IPsec em modo transporte entre cada par de nós",
      "MPLS",
      "VXLAN"
    ],
    "correct": 3,
    "explanation": "O VXLAN-GPO leva a VN (VNI) e a etiqueta de grupo (SGT) no cabeçalho entre os nós da fabric.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que tecnologia leva a política (quem fala com quem) no SD-Access?",
    "options": [
      "Números de porta nas ACL configuradas à mão em cada switch",
      "SGT do Cisco TrustSec",
      "Etiquetas OSPF",
      "Opção 82 de DHCP"
    ],
    "correct": 1,
    "explanation": "Os SGT são atribuídos pelo ISE na autenticação, levados no VXLAN e aplicados com SGACL (política por grupos).",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Qual é o desenho de underlay recomendado para o SD-Access?",
    "options": [
      "Um desenho GRE hub-and-spoke até ao core",
      "Um grande domínio de camada 2 com spanning tree em todas as ligações",
      "Só rotas estáticas entre os switches",
      "Uma rede routed de camada 3, muitas vezes IS-IS"
    ],
    "correct": 3,
    "explanation": "O underlay é acesso routed com loopbacks alcançáveis; o LAN Automation cria um underlay IS-IS; também funciona OSPF/IS-IS manual.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que faz o LAN Automation do Catalyst Center?",
    "options": [
      "Atualiza o firmware dos pontos de acesso",
      "Escreve a matriz SGACL no ISE para cada par de grupos",
      "Descobre switches novos e cria o underlay",
      "Cria portais de convidados para visitas"
    ],
    "correct": 2,
    "explanation": "Com um equipamento semente e PnP, integra switches, atribui endereços e configura IS-IS e multicast para o underlay.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Qual é o papel de um nó fabric edge?",
    "options": [
      "Corre o ISE",
      "Liga a fabric à WAN e ao centro de dados por handoffs eBGP",
      "Guarda só a base de dados de anfitriões",
      "Liga endpoints e regista-os"
    ],
    "correct": 3,
    "explanation": "Os edge nodes são os switches de acesso: autenticam endpoints, registam os EID no nó de controlo e encapsulam o tráfego.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Qual é o papel do nó de plano de controlo?",
    "options": [
      "O WLC de todos os AP da fabric",
      "O equipamento que aloja o anycast gateway de cada endpoint do piso",
      "A base de dados de anfitriões (MS/MR)",
      "O servidor NTP dos nós da fabric"
    ],
    "correct": 2,
    "explanation": "Guarda os mapeamentos EID-RLOC e responde às consultas dos nós edge e border; é muitas vezes colocado junto com o border.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que faz um nó fabric border?",
    "options": [
      "Autentica cada endpoint com fios por 802.1X nas portas de acesso",
      "Liga a fabric a redes externas",
      "Aloja a interface do Catalyst Center",
      "Atribui SGT"
    ],
    "correct": 1,
    "explanation": "Os border nodes são o gateway entre a fabric e o exterior (borders internos ou externos), entregando as VN (muitas vezes eBGP por VRF) e traduzindo a política.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que é o anycast gateway no SD-Access?",
    "options": [
      "O mesmo IP/MAC de gateway em cada edge",
      "Um único router para onde os edge nodes encaminham por túnel GRE",
      "Um par HSRP a correr nos border nodes",
      "Um relay DHCP configurado no ISE"
    ],
    "correct": 0,
    "explanation": "Cada edge node aloja o mesmo IP/MAC de SVI para uma sub-rede, por isso os endpoints podem mover-se para qualquer lado sem mudar de gateway.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Com o que contribui o ISE numa fabric SD-Access?",
    "options": [
      "O protocolo de encaminhamento do underlay de todos os switches da fabric",
      "Autenticação e atribuição de SGT",
      "O encapsulamento VXLAN",
      "O map server"
    ],
    "correct": 1,
    "explanation": "O ISE autentica (802.1X/MAB), atribui VN/SGT, guarda a matriz de política por grupos e integra-se com o Catalyst Center por pxGrid/ERS.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Onde se aplicam normalmente as SGACL no SD-Access?",
    "options": [
      "No Catalyst Center",
      "No border de entrada do operador internet antes da firewall",
      "Só no WLC",
      "No fabric edge de saída"
    ],
    "correct": 3,
    "explanation": "A política aplica-se à saída, onde o SGT de destino é conhecido; o SGT de origem chega no cabeçalho VXLAN.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Como dá o SD-Access macro-segmentação?",
    "options": [
      "SGT dentro de uma única tabela de encaminhamento para todo o campus",
      "Redes virtuais",
      "Port security nas portas edge",
      "Private VLANs em cada switch"
    ],
    "correct": 1,
    "explanation": "As VN são domínios de encaminhamento separados (VRF); o tráfego entre elas tem de passar por um equipamento de fusão ou firewall. Os SGT dão micro-segmentação dentro de uma VN.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Duas VN (Funcionários e IoT) precisam de alguns serviços partilhados como DHCP e DNS. Qual é um desenho comum?",
    "options": [
      "Usar o mesmo SGT para os dois grupos",
      "Pôr servidores DHCP e DNS em cada VN como cópias em cada edge node",
      "Juntar as duas VN numa única VN",
      "Um equipamento de fusão faz fuga de rotas"
    ],
    "correct": 3,
    "explanation": "Os serviços partilhados ficam normalmente fora da fabric; um equipamento de fusão faz fuga de rotas entre VRF (ou o border faz fuga seletiva).",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Como entram os endpoints sem fios numa fabric SD-Access (fabric wireless)?",
    "options": [
      "Os AP levam o tráfego em VXLAN até ao edge",
      "Os AP criam túneis CAPWAP que levam todos os dados ao WLC do centro de dados",
      "Os AP funcionam como border nodes",
      "Os AP não suportam fabric"
    ],
    "correct": 0,
    "explanation": "Na fabric wireless, o WLC trata do plano de controlo (CAPWAP) e regista os clientes no LISP, enquanto os dados vão em VXLAN do AP ao edge.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Onde se têm de ligar os AP da fabric?",
    "options": [
      "À internet através de uma firewall",
      "A qualquer switch fora da fabric com trunk para o WLC",
      "Só ao border node do site",
      "Diretamente aos edge nodes"
    ],
    "correct": 3,
    "explanation": "Os AP da fabric ligam-se aos edge nodes (ou extended nodes) na INFRA VN para criarem túneis VXLAN até ao edge.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que é um extended node no SD-Access?",
    "options": [
      "Um switch pequeno que estende a fabric",
      "Um switch que corre o plano de controlo LISP completo de todo o campus",
      "Um segundo appliance Catalyst Center",
      "Um nó de serviço de políticas do ISE"
    ],
    "correct": 0,
    "explanation": "Os extended nodes (p. ex. Catalyst IE ou switches compactos) ligam-se a um edge por 802.1Q e deixam os equipamentos IoT/industriais entrar na fabric; a política aplica-se no edge.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Porque usa o SD-Access o flooding de camada 2 só quando ativado por pool?",
    "options": [
      "Para poupar licenças",
      "Porque o VXLAN não consegue levar tramas broadcast em caso algum",
      "Porque o ARP não é usado",
      "Para reduzir o broadcast na fabric"
    ],
    "correct": 3,
    "explanation": "Por omissão a fabric transforma o ARP em unicast usando o plano de controlo; o flooding de camada 2 (por multicast no underlay) só se ativa para aplicações que precisam de broadcast.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "No SD-Access, qual é a diferença entre underlay e overlay?",
    "options": [
      "São dois nomes do mesmo processo OSPF",
      "O underlay leva o tráfego dos utilizadores; o overlay só gestão",
      "O underlay é a rede routed; o overlay são as VN",
      "O overlay é usado só para sem fios"
    ],
    "correct": 2,
    "explanation": "O underlay dá alcance entre os RLOC dos nós; os overlays (VN) correm por cima em VXLAN, independentes da topologia física.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Um endpoint passa de um edge node para outro. Como atualiza a fabric o encaminhamento?",
    "options": [
      "O servidor DHCP dá um novo IP",
      "O spanning tree volta a convergir em todo o campus",
      "O novo edge regista o EID",
      "O border inunda ARP para todos os edges"
    ],
    "correct": 2,
    "explanation": "O novo edge regista o EID no nó de controlo, que avisa o edge anterior (away table), e os nós remotos atualizam por SMR.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que acrescenta a Assurance do Catalyst Center a uma fabric SD-Access?",
    "options": [
      "Cifra de todo o tráfego VXLAN entre os nós da fabric",
      "Pontuações de saúde e problemas",
      "SGT adicionais para cada cliente",
      "Encaminhamento do underlay entre nós"
    ],
    "correct": 1,
    "explanation": "A Assurance recolhe telemetria e dá a saúde da rede, clientes e aplicações, com remediação guiada e path trace.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que é um fabric site?",
    "options": [
      "Uma implementação de ISE com dois nós",
      "Só um switch de acesso provisionado pelo LAN Automation",
      "Qualquer edifício com cobertura Wi-Fi",
      "Uma fabric com controlo e border próprios"
    ],
    "correct": 3,
    "explanation": "Um fabric site tem os seus próprios nós edge, de controlo e border; vários sites ligam-se com SD-Access transit.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que significa Fabric in a Box (FiaB)?",
    "options": [
      "Só um WLC embebido num switch",
      "Um bastidor pré-montado com Catalyst Center, ISE e todos os switches",
      "Uma fabric virtual alojada na cloud",
      "Um switch como border, plano de controlo e edge"
    ],
    "correct": 3,
    "explanation": "A FiaB serve locais pequenos: um único switch (ou stack) faz as três funções da fabric, opcionalmente com wireless embebido.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que papel tem o WLC na fabric wireless?",
    "options": [
      "Encaminha todos os dados dos clientes sem fios até ao border em CAPWAP",
      "Plano de controlo de AP e clientes, sem dados",
      "Substitui o nó de plano de controlo",
      "Nenhum, o WLC não é usado"
    ],
    "correct": 1,
    "explanation": "O WLC da fabric gere AP e RF, autentica clientes e atualiza o nó de controlo com a localização dos clientes sem fios.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Porque precisa o SD-Access de baixa latência entre o WLC, os AP da fabric e o plano de controlo?",
    "options": [
      "Porque o WLC replica o multicast da fabric",
      "Porque o LISP só corre em ligações mais rápidas do que 100 Gb/s",
      "Pede cerca de 20 ms de RTT entre WLC e AP",
      "Porque o ISE corre dentro do WLC"
    ],
    "correct": 2,
    "explanation": "A wireless em modo fabric exige o WLC perto dos AP (tipicamente RTT ≤20 ms), porque a entrada dos clientes atualiza o plano de controlo da fabric em tempo real.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que cuidado de MTU se aplica ao underlay SD-Access?",
    "options": [
      "Manter 1500 em todo o lado; o VXLAN não acrescenta nada",
      "Baixar o MTU para 1400 em todas as portas de clientes",
      "Subir o MTU (cerca de 9100) pelo overhead VXLAN",
      "Usar um MTU diferente por rede virtual"
    ],
    "correct": 2,
    "explanation": "O VXLAN acrescenta 50 bytes; o underlay deve usar MTU jumbo para as tramas de 1500 bytes não serem fragmentadas. O LAN Automation define 9100.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Porque deve cada nó da fabric ter um loopback /32 anunciado no underlay?",
    "options": [
      "É exigido pela opção 43 de DHCP dos AP",
      "É o anycast gateway usado por todos os clientes",
      "É o RLOC do nó para o VXLAN",
      "Substitui a VLAN de gestão nas portas de acesso"
    ],
    "correct": 2,
    "explanation": "O Loopback0 /32 é o localizador; o underlay tem de levar rotas de anfitrião (sem sumarização que esconda os RLOC) para seguir o alcance.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Quantos nós de plano de controlo se recomendam por fabric site para resiliência?",
    "options": [
      "Um, porque o LISP não consegue replicar a sua base de dados",
      "Dois",
      "Quatro, um por edifício em todos os casos",
      "Um por edge node, junto em cada switch de acesso"
    ],
    "correct": 1,
    "explanation": "Implementam-se dois nós de controlo; os edges registam-se nos dois, por isso qualquer um responde. Sites grandes podem usar mais (até seis com LISP pub/sub).",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Qual é a diferença entre border interno e border externo?",
    "options": [
      "Interno: redes conhecidas; externo: rota por omissão para fora",
      "Os borders internos correm nos switches de acesso; os externos no WLC",
      "Não há diferença em nenhuma versão",
      "Os borders externos só ligam clientes sem fios"
    ],
    "correct": 0,
    "explanation": "Os borders internos importam prefixos específicos (p. ex. DC, serviços partilhados); os externos são o gateway de último recurso (internet/desconhecido). Um border 'anywhere' faz as duas coisas.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Como entrega normalmente um border node as VN ao equipamento de fusão?",
    "options": [
      "Túneis GRE até ao WLC por cada VN",
      "Uma única sessão OSPF que leva todas as VN na tabela global",
      "Uma sessão eBGP VRF-lite por VN",
      "Só rotas estáticas na tabela global"
    ],
    "correct": 2,
    "explanation": "O Catalyst Center automatiza o IP transit: uma subinterface/SVI por VN com eBGP para o par, o que mantém a separação de VRF fora da fabric.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Os SGT têm de ser mantidos quando o tráfego sai da fabric por um IP transit. O que os pode levar?",
    "options": [
      "O campo DSCP de cada pacote, reescrito pelo border",
      "Etiquetagem inline ou SXP",
      "O ID da VLAN da subinterface",
      "Não podem sair da fabric de todo"
    ],
    "correct": 1,
    "explanation": "Com IP transit o cabeçalho VXLAN é retirado; o SGT pode manter-se com etiquetagem inline (CMD) no handoff ou trocado como mapeamentos IP-SGT por SXP/pxGrid.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Para que serve o SD-Access transit?",
    "options": [
      "Ligar fabric sites mantendo VXLAN/SGT",
      "Ligar a fabric ao operador internet com IP simples",
      "Ligar os AP ao WLC através de uma WAN",
      "Substituir o ISE entre sites"
    ],
    "correct": 0,
    "explanation": "O SD-Access transit (LISP pub/sub com nós de controlo de trânsito) leva VXLAN nativo com VN e SGT de ponta a ponta entre sites, normalmente por um core metro ou de campus.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Quando é o SD-WAN um transit melhor entre fabric sites do que o SD-Access transit?",
    "options": [
      "Quando não há ISE implementado em lado nenhum",
      "Sites no mesmo edifício com fibra escura entre eles",
      "Quando há menos de dez edge nodes",
      "Sites ligados por ligações WAN"
    ],
    "correct": 3,
    "explanation": "Através de uma WAN, o SD-WAN transit (integrado com o Catalyst SD-WAN) leva VN e SGT pelo overlay SD-WAN; o SD-Access transit precisa de muita largura de banda, pouca latência e MTU jumbo.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que ferramenta de segmentação deve separar funcionários de prestadores na mesma VN?",
    "options": [
      "Uma definição extra de MTU",
      "Uma VN separada para cada utilizador",
      "Um novo fabric site para prestadores",
      "SGT diferentes com uma SGACL"
    ],
    "correct": 3,
    "explanation": "Dentro de uma VN, a micro-segmentação por SGT e política por grupos é mais simples do que criar mais VN; as VN servem para isolamento total.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Porque se deve manter pequeno o número de redes virtuais?",
    "options": [
      "Cada VN acrescenta VRF, handoffs e fuga de rotas",
      "As VN não podem levar mais de um SGT em nenhuma versão",
      "Cada VN exige um Catalyst Center separado",
      "As VN desligam a rede sem fios"
    ],
    "correct": 0,
    "explanation": "Cada VN precisa de uma VRF em todos os nós, de um handoff no border e muitas vezes de fuga na fusão; use VN para isolamento forte e SGT para política mais fina.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que VN é usada por omissão para os AP da fabric e os extended nodes?",
    "options": [
      "DEFAULT_VN, partilhada com todos os endpoints com fios",
      "INFRA_VN",
      "GUEST_VN",
      "Uma VN nova por AP"
    ],
    "correct": 1,
    "explanation": "A INFRA_VN está na tabela de encaminhamento global e leva a infraestrutura dos AP e extended nodes; a DEFAULT_VN é uma VN de utilizadores.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Um site precisa de 40 000 endpoints. Que fator mais limita o desenho?",
    "options": [
      "Limites das tabelas de anfitriões",
      "O número de SSID em cada AP",
      "O MTU configurado nas portas de clientes",
      "O comprimento dos nomes das VLAN"
    ],
    "correct": 0,
    "explanation": "A escala depende dos limites das plataformas para entradas de anfitriões no plano de controlo, tabelas dos edges, VN e SGACL; sites grandes podem precisar de vários sites ou de nós de controlo dedicados.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "O que é wireless over-the-top (OTT) num site SD-Access?",
    "options": [
      "Um WLC alojado na cloud acedido pela internet",
      "AP que funcionam como fabric edge nodes com VXLAN",
      "CAPWAP levado por cima da fabric",
      "Clientes sem fios sem qualquer SSID"
    ],
    "correct": 2,
    "explanation": "O OTT mantém o modelo centralizado tradicional: o controlo e os dados CAPWAP passam pela fabric como tráfego normal, sem política da fabric para os clientes sem fios.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Quando se pode escolher wireless OTT em vez de fabric wireless?",
    "options": [
      "Em migração ou quando o WLC está longe demais",
      "Quando o site precisa de política SGT para os clientes sem fios",
      "Quando os AP se ligam diretamente aos edge nodes",
      "Quando a latência ao WLC é inferior a 5 ms"
    ],
    "correct": 0,
    "explanation": "O OTT serve migrações, modelos de AP/WLC não suportados ou latência alta ao WLC; a fabric wireless dá a mesma política e mobilidade que a rede com fios.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que vantagem dá a fabric wireless em comparação com o OTT?",
    "options": [
      "São precisos menos AP por piso",
      "Todo o tráfego passa sempre pelo WLC do centro de dados",
      "Não é preciso WLC nenhum",
      "A mesma política VN/SGT para cabo e sem fios"
    ],
    "correct": 3,
    "explanation": "Os clientes sem fios ficam registados na fabric e o tráfego é distribuído no edge, usando a mesma segmentação e anycast gateway da rede com fios.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Como é suportado o multicast do overlay no SD-Access?",
    "options": [
      "Só através do WLC no centro de dados",
      "O multicast é convertido em broadcast em todos os edge nodes",
      "Replicação na origem ou nativa",
      "Não é suportado no overlay"
    ],
    "correct": 2,
    "explanation": "O multicast no overlay usa PIM na VN com RP; é transportado por replicação na origem (cópias unicast) ou multicast nativo no underlay, mais eficiente.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Onde se coloca normalmente o ponto de encontro (RP) do multicast no overlay?",
    "options": [
      "Dentro do PAN do ISE",
      "Em cada equipamento cliente",
      "Nos border nodes",
      "No AP"
    ],
    "correct": 2,
    "explanation": "Os RP do PIM-SM no overlay ficam normalmente nos borders (ou externos), eventualmente com anycast RP e MSDP para redundância.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que funcionalidade do underlay é precisa quando se usa multicast nativo ou flooding de camada 2?",
    "options": [
      "Spanning tree em cada ligação routed",
      "PIM e multicast no underlay",
      "Um SSID por VN",
      "802.1X nos uplinks"
    ],
    "correct": 1,
    "explanation": "O multicast nativo e o flooding de camada 2 mapeiam grupos do overlay para grupos multicast do underlay, por isso o underlay precisa de PIM (muitas vezes SSM ou ASM com RP).",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Um site tem switches tradicionais que não podem ser edge nodes. O que se pode usar para migrar aos poucos?",
    "options": [
      "Trocar todos os switches na mesma noite",
      "Um handoff de camada 2 no border",
      "Pôr os switches antigos na INFRA_VN como edges",
      "Ativar o VTP pruning"
    ],
    "correct": 1,
    "explanation": "O handoff de camada 2 no border estende uma sub-rede da fabric para uma VLAN tradicional, para os anfitriões dos dois lados partilharem a sub-rede durante a migração.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Porque se recomenda uma ligação routed dedicada entre border nodes?",
    "options": [
      "É precisa para o ISE funcionar com os borders",
      "Leva o tráfego DHCP dos clientes",
      "Dá caminho se um border perder uplinks",
      "Substitui o nó de plano de controlo"
    ],
    "correct": 2,
    "explanation": "Uma ligação iBGP/IGP entre o par deixa um border chegar às redes externas pelo outro se o seu handoff falhar, evitando buracos negros.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que template de autenticação de portas oferece o Catalyst Center para manter os endpoints a funcionar durante a introdução do 802.1X?",
    "options": [
      "WPA3 nas portas com fios",
      "Closed authentication sem alternativa",
      "Nenhuma autenticação em todas as portas para sempre",
      "Open authentication (modo monitor)"
    ],
    "correct": 3,
    "explanation": "Os templates open/low-impact deixam passar tráfego durante a autenticação, para as falhas serem visíveis sem cortes; o modo closed aplica-se depois.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Onde se deve colocar o servidor DHCP e o que tem o edge de fazer pelos clientes da fabric?",
    "options": [
      "Fora; o edge faz relay com opção 82",
      "Em cada edge node como servidor DHCP local",
      "Dentro de cada ponto de acesso do piso",
      "Só no nó de plano de controlo"
    ],
    "correct": 0,
    "explanation": "Os edges fazem relay de DHCP (anycast gateway) e acrescentam a opção 82 com informação do RLOC, para a resposta voltar ao edge certo pelo border.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que modelo de política no Catalyst Center define que grupos podem comunicar?",
    "options": [
      "ACL por porta escritas em cada switch",
      "Matriz de política por grupos",
      "Route maps OSPF nos borders",
      "Lista de prioridade de SSID no WLC"
    ],
    "correct": 1,
    "explanation": "A matriz de política por grupos (SGT de origem × SGT de destino) é criada no Catalyst Center e enviada ao ISE, que descarrega as SGACL para os nós que as aplicam.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Porque é arriscado como primeiro passo um 'deny' por omissão entre SGT?",
    "options": [
      "Fluxos precisos desconhecidos falham",
      "Porque as SGACL não podem ter entradas de permitir",
      "Porque o ISE não envia regras de negar",
      "Porque o VXLAN descarta duas vezes o tráfego negado"
    ],
    "correct": 0,
    "explanation": "Uma matriz com negar por omissão exige conhecer todos os fluxos necessários; a maioria começa com permitir mais registo/analítica e depois aperta.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "O que se deve verificar antes de escolher modelos de switch para as funções SD-Access?",
    "options": [
      "A matriz de compatibilidade por função",
      "Só o número de portas de acesso",
      "A cor do chassis e do painel frontal",
      "Se o switch tem porta de consola"
    ],
    "correct": 0,
    "explanation": "Cada versão indica as plataformas suportadas e a escala por função (edge, border, plano de controlo, extended node) e os modelos de WLC/AP suportados.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "O que significa SD-Access nas redes de campus da Cisco?",
    "options": [
      "Secure Data Access para locais WAN",
      "Software-Defined Access",
      "Switched Domain Access",
      "Standard Distribution Access layer"
    ],
    "correct": 1,
    "explanation": "O SD-Access é a fabric de campus baseada em intenção da Cisco, automatizada pelo Catalyst Center com política do ISE.",
    "difficulty": "Fácil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Em termos de LISP, o que é um EID?",
    "options": [
      "O endereço IP do loopback do nó da fabric",
      "A identidade IP ou MAC do endpoint",
      "A soma de verificação do cabeçalho VXLAN",
      "Uma chave de licença do Catalyst Center"
    ],
    "correct": 1,
    "explanation": "Os Endpoint Identifiers são endereços de anfitriões; os Routing Locators (RLOC) são os endereços dos nós da fabric onde esses anfitriões estão.",
    "difficulty": "Fácil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Numa fabric SD-Access, a que se refere o routing locator (RLOC)?",
    "options": [
      "O número SGT atribuído a um grupo",
      "O endereço MAC do próprio endpoint",
      "O endereço do nó atrás do qual está o host",
      "O nome de uma rede virtual"
    ],
    "correct": 2,
    "explanation": "Os RLOC são endereços do underlay (normalmente o Loopback0) usados como extremos dos túneis VXLAN.",
    "difficulty": "Fácil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Na política SD-Access, o que é um SGT e o que significa a sigla?",
    "options": [
      "Security (scalable) Group Tag",
      "Switch Gateway Table entry",
      "Segment Group Tunnel identifier",
      "Static Gateway Translation"
    ],
    "correct": 0,
    "explanation": "Uma Security Group Tag (também chamada scalable group tag) é um valor de 16 bits que identifica um grupo de utilizadores ou equipamentos.",
    "difficulty": "Fácil",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que campo do cabeçalho VXLAN leva o SGT no SD-Access?",
    "options": [
      "O campo VNI",
      "O campo TTL do IP exterior de cada pacote",
      "A porta UDP de destino",
      "O Group Policy ID do VXLAN-GPO"
    ],
    "correct": 3,
    "explanation": "O VXLAN Group Policy Option acrescenta um Group Policy ID de 16 bits; o VNI de 24 bits identifica a VN ou o segmento L2.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Um utilizador com fios liga-se e autentica-se por 802.1X. Que equipamento diz ao edge que VN e SGT usar?",
    "options": [
      "O border node através de uma atualização eBGP",
      "O ISE, na autorização RADIUS",
      "O nó de plano de controlo",
      "O servidor DHCP"
    ],
    "correct": 1,
    "explanation": "O ISE devolve a VLAN/pool (mapeada para uma VN) e o SGT no resultado da autorização; depois o edge regista o endpoint.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Um edge node precisa de enviar tráfego para um destino desconhecido fora da fabric. Para onde o envia?",
    "options": [
      "Para todos os edge nodes como trama broadcast",
      "Para o border externo",
      "De volta para o edge de origem",
      "Para o WLC do piso"
    ],
    "correct": 1,
    "explanation": "Se o plano de controlo não tem mapeamento, o edge usa o border externo como caminho por omissão (proxy) para chegar a redes fora da fabric.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Que fluxo do Catalyst Center associa pools IP às VN num site?",
    "options": [
      "Painel de saúde da Assurance",
      "Gestão de imagens de software dos switches",
      "Host onboarding / associação VN-pool",
      "Backup and restore"
    ],
    "correct": 2,
    "explanation": "Em Provision > Fabric Sites, o host onboarding liga pools IP a VN, define templates de autenticação e atribui portas.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Porque é importante a integração pxGrid entre o Catalyst Center e o ISE?",
    "options": [
      "Partilha grupos, política e contexto",
      "É o transporte dos dados VXLAN",
      "Corre o map server do LISP",
      "Atribui endereços IP aos clientes"
    ],
    "correct": 0,
    "explanation": "O Catalyst Center usa ERS/pxGrid para ler e escrever SGT, políticas e contexto de endpoints no ISE, mantendo uma fonte única.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "Dois fabric sites partilham uma sub-rede de uma aplicação antiga através de um core de campus com MTU jumbo. Que transit mantém VN e SGT?",
    "options": [
      "SD-Access transit",
      "IP transit só com rotas estáticas",
      "SD-WAN transit pela internet",
      "Nenhum transit é possível"
    ],
    "correct": 0,
    "explanation": "O SD-Access transit mantém VXLAN nativo com VN e SGT entre sites por um core de alto desempenho.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Qual é um local comum para uma firewall num desenho SD-Access para tráfego entre VN?",
    "options": [
      "Entre o edge e o cliente",
      "Dentro de cada rádio dos pontos de acesso",
      "Só no nó de plano de controlo",
      "Para lá do border, como fusão"
    ],
    "correct": 3,
    "explanation": "Uma firewall a fazer de fusão (ou atrás do border) inspeciona o tráfego entre VN e para serviços partilhados ou para a internet.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Porque se configuram VLAN/pools críticas nas portas dos edges?",
    "options": [
      "Para desligar o 802.1X de vez",
      "Para dar Wi-Fi mais rápido aos convidados",
      "Para permitir spanning tree nas portas edge",
      "O acesso continua com o ISE em baixo"
    ],
    "correct": 3,
    "explanation": "Se os servidores RADIUS estiverem inacessíveis, a autorização crítica coloca os endpoints numa pool/VN definida para o negócio continuar.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Anfitriões silenciosos (p. ex. impressoras que nunca enviam primeiro) causam problemas de alcance. Que funcionalidade ajuda?",
    "options": [
      "Retirar o anycast gateway",
      "Baixar o MTU do underlay",
      "Flooding L2 nessa pool",
      "Desligar o LISP nos edge nodes"
    ],
    "correct": 2,
    "explanation": "Como a fabric aprende os anfitriões quando falam, os silenciosos podem ser desconhecidos; o flooding L2 deixa o ARP chegar-lhes (ou registo estático).",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Onde devem ficar o Catalyst Center e o ISE em relação aos fabric sites?",
    "options": [
      "Dentro de cada fabric edge como contentores",
      "Num bloco de serviços partilhados",
      "Nos pontos de acesso de cada piso",
      "Só na internet pública"
    ],
    "correct": 1,
    "explanation": "São componentes de gestão/política alcançados pelo underlay ou por um border; não fazem parte do caminho de dados da fabric.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "O Catalyst Center fica inacessível durante um dia. O que acontece a uma fabric SD-Access a funcionar?",
    "options": [
      "O tráfego continua; param as alterações",
      "Todos os túneis VXLAN caem de uma vez",
      "Os clientes perdem os SGT e a VN",
      "O underlay deixa de encaminhar"
    ],
    "correct": 0,
    "explanation": "O Catalyst Center é o plano de gestão; os planos de controlo, dados e política continuam a correr nos nós e no ISE.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que desenho de switches de acesso serve melhor a redundância dos edges SD-Access para os endpoints?",
    "options": [
      "Só mesh sem fios entre pisos",
      "Um único switch com um uplink",
      "Hubs em cadeia em cada piso",
      "Stacks com dois uplinks"
    ],
    "correct": 3,
    "explanation": "Os endpoints ligam-se a um edge; stacks (ou StackWise Virtual na distribuição) com dois uplinks routed dão resiliência.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Um switch de distribuição entre edges e borders não corre funções da fabric. Que afirmação o descreve?",
    "options": [
      "Um nó que termina o CAPWAP",
      "Um nó que guarda a base de dados LISP",
      "Um nó intermédio que só encaminha underlay",
      "Um nó que corre o ISE para a fabric"
    ],
    "correct": 2,
    "explanation": "Os nós intermédios (p. ex. distribuição/core) só encaminham tráfego do underlay; não encapsulam VXLAN nem precisam de funções da fabric.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Uma VN de convidados tem de usar um caminho internet separado. Que desenho é típico?",
    "options": [
      "Um SSID separado sem associação a VN",
      "Convidados na mesma VN dos funcionários",
      "VN de convidados entregue a uma firewall própria",
      "Convidados encaminhados pelo plano de controlo"
    ],
    "correct": 2,
    "explanation": "A VN de convidados é entregue no border (ou num border/plano de controlo de convidados dedicado) a uma firewall DMZ para acesso internet isolado.",
    "difficulty": "Difícil",
    "exam": "sda",
    "domain": "2.5"
  },
  {
    "question": "Que protocolo pode substituir opcionalmente o LISP como plano de controlo SD-Access nas versões recentes?",
    "options": [
      "RIPv2 with authentication",
      "BGP EVPN",
      "HSRP version 2",
      "VTP version 3"
    ],
    "correct": 1,
    "explanation": "As versões recentes do Catalyst Center suportam uma fabric baseada em BGP EVPN, além do plano de controlo LISP clássico.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.4"
  },
  {
    "question": "O que contém uma SGACL?",
    "options": [
      "Regras entre dois grupos",
      "Uma lista de VLAN por porta de acesso",
      "O mapa de endereços RLOC",
      "Entradas da tabela de encaminhamento da VN"
    ],
    "correct": 0,
    "explanation": "Uma SGACL é uma ACL (p. ex. permit tcp 443, deny ip) aplicada ao tráfego de um SGT de origem para um SGT de destino.",
    "difficulty": "Médio",
    "exam": "sda",
    "domain": "2.5"
  }
];
