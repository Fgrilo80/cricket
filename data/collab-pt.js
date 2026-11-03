window.QUIZ_BANK = [
  {
    "question": "Que oferta da Cisco dá chamadas baseadas no Unified CM alojadas pela Cisco numa cloud privada dedicada?",
    "options": [
      "Cisco Unity Express em routers de filial",
      "Só o Webex Calling multi-tenant",
      "Webex Calling Dedicated Instance",
      "Um único CUBE local com SRST"
    ],
    "correct": 2,
    "explanation": "O Dedicated Instance corre o UCM, Unity Connection e Expressway próprios do cliente nos centros de dados Webex, gerido pela Cisco/parceiro e integrado com o Webex.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.a"
  },
  {
    "question": "Que ferramenta se usa para dimensionar uma implementação Cisco Collaboration (servidores e VM)?",
    "options": [
      "O Expressway Configuration Wizard",
      "A Collaboration Sizing Tool",
      "A ferramenta Call Flow do RTMT",
      "A página Analytics do Webex Control Hub"
    ],
    "correct": 1,
    "explanation": "A Cisco Collaboration Sizing Tool (com as orientações de virtualização) estima nós e tamanhos de OVA a partir de utilizadores, equipamentos e tráfego.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.b"
  },
  {
    "question": "Uma chamada G.711 sobre Ethernet usa cerca de quanta largura de banda por sentido, incluindo o overhead L2 (pacotes de 20 ms)?",
    "options": [
      "Cerca de 87 kb/s",
      "Cerca de 8 kb/s",
      "Exatamente 64 kb/s",
      "Cerca de 300 kb/s"
    ],
    "correct": 0,
    "explanation": "64 kb/s de carga mais cabeçalhos RTP/UDP/IP (40 B) e Ethernet (18 B) a 50 pps dão cerca de 87 kb/s; o G.729 é cerca de 31 kb/s.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "1.1.c"
  },
  {
    "question": "Que codec de áudio é de banda larga, adapta o débito e é muito usado pelo Webex e pelos endpoints modernos?",
    "options": [
      "G.723.1",
      "G.711 µ-law",
      "G.729a",
      "Opus"
    ],
    "correct": 3,
    "explanation": "O Opus suporta de banda estreita a banda total, débito variável e resiliência a perdas; o G.711 é de banda estreita a 64 kb/s.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.d"
  },
  {
    "question": "Como dá o Unified CM redundância de processamento de chamadas aos telefones?",
    "options": [
      "Um único publisher que trata de todos os registos",
      "Um CM group com subscribers primário e de reserva",
      "Só um par HSRP de servidores TFTP",
      "Um segundo cluster com os mesmos endereços IP"
    ],
    "correct": 1,
    "explanation": "O Unified CM group do device pool define a ordem dos subscribers; os telefones registam-se no primeiro e passam para o seguinte em caso de falha.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.e"
  },
  {
    "question": "Que funcionalidade do UCM faz cópia da configuração do cluster para recuperação de desastres?",
    "options": [
      "Disaster Recovery System (DRS)",
      "Exportação do Bulk Administration Tool",
      "Recolha de traces do RTMT",
      "CDR Analysis and Reporting"
    ],
    "correct": 0,
    "explanation": "O DRS faz cópia da base de dados do publisher e dos componentes para um servidor SFTP e repõe-nos após uma reconstrução.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.f"
  },
  {
    "question": "Porque se usa SRTP nos endpoints de colaboração?",
    "options": [
      "Cifra os media de voz e vídeo",
      "Cifra só a sinalização SIP",
      "Comprime cabeçalhos RTP em ligações WAN",
      "Autentica utilizadores no LDAP"
    ],
    "correct": 0,
    "explanation": "O SRTP protege a confidencialidade e integridade dos media; o TLS protege a sinalização SIP, que também leva as chaves SRTP (SDES).",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.1.h"
  },
  {
    "question": "Qual é o papel principal do Expressway-C e Expressway-E em conjunto?",
    "options": [
      "Travessia de firewall para remoto e B2B",
      "Alojar caixas de voicemail para utilizadores remotos",
      "Substituir o UCM como agente de controlo de chamadas",
      "Funcionar como servidor TFTP do cluster"
    ],
    "correct": 0,
    "explanation": "O Expressway-E na DMZ e o Expressway-C no interior criam uma traversal zone, permitindo Mobile and Remote Access (MRA) e chamadas B2B sem VPN.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.2"
  },
  {
    "question": "Para que se usa normalmente o CUBE?",
    "options": [
      "Um controlador sem fios para telefones IP",
      "Um elemento de fronteira SIP para trunks",
      "Um servidor de presença para chat e estado",
      "Um diretório LDAP de utilizadores"
    ],
    "correct": 1,
    "explanation": "O Cisco Unified Border Element em routers IOS XE demarca trunks SIP: interoperabilidade, segurança, normalização e tratamento de media.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.2"
  },
  {
    "question": "Numa atualização de um cluster UCM, que nó é atualizado primeiro?",
    "options": [
      "Sempre o nó só de TFTP",
      "Qualquer subscriber do grupo",
      "O publisher",
      "Todos os nós em paralelo de uma vez"
    ],
    "correct": 2,
    "explanation": "O publisher é atualizado primeiro, depois os subscribers (em grupos), e depois faz-se o switch version no publisher antes dos subscribers.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "1.3"
  },
  {
    "question": "O SSO SAML do UCM falha com um erro de asserção relacionado com o tempo. O que se deve verificar primeiro?",
    "options": [
      "A CSS da linha do utilizador",
      "O phone button template",
      "O NTP no UCM e no IdP",
      "A ordem da route list"
    ],
    "correct": 2,
    "explanation": "As asserções SAML têm janelas de validade; a diferença de relógio entre o UCM e o fornecedor de identidade faz que sejam rejeitadas.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "1.4.a"
  },
  {
    "question": "Porque deve o certificado do Expressway-E ser assinado por uma CA pública?",
    "options": [
      "Permite aos telefones saltar o TFTP",
      "Os clientes de fora têm de confiar nele",
      "As CA públicas dão chaves mais compridas",
      "O Expressway-C exige-o para o LDAP"
    ],
    "correct": 1,
    "explanation": "Os clientes MRA e os parceiros B2B validam o certificado do Expressway-E; os SAN têm de incluir o domínio MRA e outros nomes necessários.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.4.b"
  },
  {
    "question": "O que melhora o OAuth com refresh tokens para os utilizadores da Webex App no UCM?",
    "options": [
      "Maior resolução de vídeo nas chamadas",
      "Menos pedidos de password",
      "Descarga mais rápida dos ficheiros TFTP",
      "Criação automática do plano de marcação"
    ],
    "correct": 1,
    "explanation": "Os clientes recebem tokens de acesso e de refresh após autenticar, por isso voltam a ligar-se (também por MRA) sem reintroduzir credenciais.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.4.c"
  },
  {
    "question": "Um trunk SIP TLS para o CUBE falha durante o handshake. Qual é uma causa comum?",
    "options": [
      "O DTMF está definido como KPML",
      "O trunk usa G.711 em vez de G.729",
      "O route pattern não tem partição",
      "A CA do par não é de confiança"
    ],
    "correct": 3,
    "explanation": "Cada lado tem de confiar na cadeia de certificados do outro (e os nomes têm de coincidir se forem verificados); caso contrário o handshake TLS falha.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "1.4.d"
  },
  {
    "question": "As chamadas entre dois telefones seguros não mostram cadeado e usam RTP. Qual é uma razão provável?",
    "options": [
      "Os telefones têm o Opus desligado",
      "Os telefones usam o toque errado",
      "As chamadas passam por um hunt pilot",
      "A sinalização não usa TLS"
    ],
    "correct": 3,
    "explanation": "As chaves SRTP trocam-se na sinalização; se esta não estiver cifrada (TLS) o sistema volta ao RTP.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.4.e"
  },
  {
    "question": "Que registo DNS permite à Webex App e aos clientes MRA descobrirem o Expressway a partir da internet?",
    "options": [
      "Registo PTR de cada telefone",
      "Registo A do servidor TFTP",
      "SRV _collab-edge._tls",
      "Registo MX do domínio"
    ],
    "correct": 2,
    "explanation": "Os clientes externos procuram _collab-edge._tls.<domínio>; internamente procuram _cisco-uds._tcp para encontrar o UCM.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.5.a"
  },
  {
    "question": "Que opção DHCP dá aos telefones IP Cisco o endereço do servidor TFTP?",
    "options": [
      "Opção 43",
      "Opção 150",
      "Opção 82",
      "Opção 66 só para Cisco"
    ],
    "correct": 1,
    "explanation": "A opção 150 indica um ou mais servidores TFTP para os telefones Cisco (a opção 66 é o nome TFTP único padrão).",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.5.d"
  },
  {
    "question": "Como aprende um telefone IP a sua VLAN de voz a partir de um switch Cisco?",
    "options": [
      "Mensagens SIP REGISTER",
      "Opção 150 de DHCP",
      "O ficheiro de config TFTP",
      "CDP ou LLDP-MED"
    ],
    "correct": 3,
    "explanation": "O switch anuncia a VLAN de voz por CDP (ou LLDP-MED); o telefone etiqueta o seu tráfego e pede DHCP nessa VLAN.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.5.e"
  },
  {
    "question": "Os utilizadores não conseguem entrar no Self Care com as passwords do AD, mas a sincronização funciona. O que falta?",
    "options": [
      "O perfil de voicemail do utilizador",
      "Agenda de sincronização do diretório LDAP",
      "Uma partição na linha",
      "Autenticação LDAP no UCM"
    ],
    "correct": 3,
    "explanation": "A sincronização LDAP importa os utilizadores; a autenticação LDAP também tem de estar ativa para o UCM validar as passwords no AD.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "1.5.c"
  },
  {
    "question": "O que permite o self-provisioning no UCM?",
    "options": [
      "Os utilizadores criam route patterns no Self Care",
      "Os telefones escolhem o seu próprio número",
      "Os utilizadores associam o telefone por IVR",
      "Os telefones descarregam firmware da internet"
    ],
    "correct": 2,
    "explanation": "Com auto-registo e um IVR de self-provisioning, os utilizadores autenticam-se com PIN e o telefone é criado pelo seu perfil/templates.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.1.b"
  },
  {
    "question": "Que ferramenta do UCM acrescenta centenas de telefones e utilizadores a partir de ficheiros CSV?",
    "options": [
      "Bulk Administration Tool",
      "Dialed Number Analyzer",
      "Real-Time Monitoring Tool",
      "Disaster Recovery System"
    ],
    "correct": 0,
    "explanation": "O BAT usa templates e ficheiros CSV para inserir, alterar ou apagar telefones, utilizadores e linhas em massa.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.1.c"
  },
  {
    "question": "Como se pode integrar um telefone com um código de ativação?",
    "options": [
      "O código é enviado na opção 150 de DHCP",
      "O administrador escreve o MAC no Expressway",
      "O telefone procura o UCM na rede",
      "O utilizador escreve o código no telefone"
    ],
    "correct": 3,
    "explanation": "Os códigos de ativação evitam introduzir MAC: o telefone contacta o serviço de ativação (ou o UCM) com o código e recebe a configuração, também por MRA.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.1.d"
  },
  {
    "question": "Que resposta SIP indica que o telefone chamado está a tocar?",
    "options": [
      "100 Trying",
      "200 OK",
      "180 Ringing",
      "486 Busy Here"
    ],
    "correct": 2,
    "explanation": "O 100 Trying é progresso salto a salto, o 180/183 indica toque/early media, o 200 OK atende; o 486 significa ocupado.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.2.a"
  },
  {
    "question": "Uma chamada SIP é atendida mas cai ao fim de cerca de 30 segundos. Qual é uma causa típica?",
    "options": [
      "O DTMF usa RFC 2833",
      "O INVITE não tem corpo SDP",
      "O telefone não está registado",
      "O ACK nunca chega"
    ],
    "correct": 3,
    "explanation": "Sem ACK, o lado que atendeu retransmite o 200 OK e termina após o temporizador (~32 s), muitas vezes por NAT/firewall ou problemas de encaminhamento.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "2.2.a"
  },
  {
    "question": "O que descreve a linha 'm=' do SDP?",
    "options": [
      "O nome apresentado do chamador",
      "Tipo de media, porta e codecs",
      "O endereço do servidor SIP",
      "A duração da chamada"
    ],
    "correct": 1,
    "explanation": "m=audio 16384 RTP/AVP 0 101 dá o tipo de media, a porta RTP, o perfil de transporte e os payload types; o c= dá o IP.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.2.b"
  },
  {
    "question": "Como são enviados os dígitos DTMF com o RFC 2833/4733?",
    "options": [
      "Como mensagens SIP INFO",
      "Como telephone events RTP",
      "Só como tons de áudio na banda",
      "Como subscrições KPML"
    ],
    "correct": 1,
    "explanation": "O RFC 2833/4733 leva o DTMF como payload RTP (normalmente o tipo 101), negociado no SDP; o SIP INFO e o KPML são métodos de sinalização.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.2.c"
  },
  {
    "question": "Como coloca normalmente um telefone SIP uma chamada em espera?",
    "options": [
      "Uma resposta 486 ao par",
      "Um BYE seguido de um novo INVITE",
      "Um REGISTER com expires=0",
      "Um re-INVITE com sendonly"
    ],
    "correct": 3,
    "explanation": "A espera é um re-INVITE que muda a direção dos media; depois pode entrar a música de espera; retomar envia um re-INVITE com sendrecv.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "2.2.d"
  },
  {
    "question": "Que método SIP se usa numa transferência?",
    "options": [
      "SUBSCRIBE",
      "REFER",
      "OPTIONS",
      "PRACK"
    ],
    "correct": 1,
    "explanation": "O REFER pede ao transferido que ligue para o destino (com Replaces na transferência assistida); o NOTIFY informa o progresso.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "2.2.d"
  },
  {
    "question": "Um telefone SIP mostra 'A registar' e nunca se regista no UCM. Qual é uma causa comum?",
    "options": [
      "O equipamento não está configurado",
      "A route list tem membros a mais",
      "A CSS do telefone não tem a partição PSTN",
      "A música de espera está desligada"
    ],
    "correct": 0,
    "explanation": "O registo precisa do equipamento no UCM (ou auto-registo), TFTP/config corretos e, se usado, credenciais digest certas; veja o RTMT e os logs do telefone.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "2.3"
  },
  {
    "question": "No UCM, que elemento decide a que partições um equipamento chamador pode chegar?",
    "options": [
      "Calling search space",
      "Media resource group",
      "Device pool",
      "Region entre sites"
    ],
    "correct": 0,
    "explanation": "Uma CSS é uma lista ordenada de partições; a CSS da linha e a do equipamento combinam-se (a da linha primeiro) no encaminhamento.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.1"
  },
  {
    "question": "Dois route patterns coincidem com um número marcado: 9.1XXX e 9.1[2-9]XX. Qual é escolhido para 91234?",
    "options": [
      "Ambos, em round-robin",
      "9.1XXX",
      "9.1[2-9]XX",
      "Nenhum; a chamada falha"
    ],
    "correct": 2,
    "explanation": "O UCM escolhe a coincidência mais próxima (mais específica): [2-9] corresponde a 8 valores contra 10 do X, por isso ganha 9.1[2-9]XX.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "3.1"
  },
  {
    "question": "Que definição do UCM ajuda a evitar fraude telefónica por reencaminhamento para números internacionais?",
    "options": [
      "Uma CSS de forward restrita",
      "Mais largura de banda na região",
      "Ativar o auto-registo",
      "Usar só G.711 nos trunks"
    ],
    "correct": 0,
    "explanation": "Restringir a CSS do Call Forward All (e bloquear padrões internacionais, usar FAC e horários) impede reencaminhar para números caros.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.2"
  },
  {
    "question": "Qual é a diferença entre um route group e uma route list?",
    "options": [
      "Um route group aponta para route patterns",
      "São o mesmo objeto no UCM",
      "A list ordena grupos de equipamentos",
      "Uma route list contém telefones"
    ],
    "correct": 2,
    "explanation": "Route pattern → route list (route groups por ordem, com local route group) → route group (gateways/trunks por ordem com algoritmo de distribuição).",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.3.a"
  },
  {
    "question": "Num plano de marcação globalizado, onde é normalizado o número chamado para +E.164?",
    "options": [
      "No softkey template do telefone",
      "Só no dial peer POTS do gateway",
      "Em translation patterns",
      "Na região do device pool"
    ],
    "correct": 2,
    "explanation": "O encaminhamento globalizado normaliza os números à entrada (translation patterns, transformações chamada/chamador) e localiza-os à saída.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "3.3.b"
  },
  {
    "question": "O que permite o local route group (LRG)?",
    "options": [
      "Atribuir telefones a partições",
      "Encaminhar todas as chamadas para um só local",
      "Desligar as route lists de cada site",
      "Um padrão, gateway local por site"
    ],
    "correct": 3,
    "explanation": "O LRG associa-se por device pool, por isso um único route pattern +E.164 envia as chamadas pelo gateway local do chamador sem padrões por local.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "3.3.c"
  },
  {
    "question": "Como se configura o encaminhamento por hora do dia no UCM?",
    "options": [
      "Uma tarefa cron no publisher",
      "Time schedules nas partições",
      "Uma definição no firmware do telefone",
      "Um algoritmo de distribuição do route group"
    ],
    "correct": 1,
    "explanation": "Os time schedules feitos de time periods atribuem-se a partições; fora do horário, os padrões dessa partição não são alcançáveis.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.3.d"
  },
  {
    "question": "O que é um forced authorization code (FAC)?",
    "options": [
      "Um código para certas chamadas",
      "Um PIN da caixa de voicemail",
      "Uma chave de licença do trunk",
      "Uma regra de negociação de codecs"
    ],
    "correct": 0,
    "explanation": "O FAC num route pattern exige um código de nível de autorização antes de certas chamadas (p. ex. internacionais) avançarem e regista-o nos CDR.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.3.f"
  },
  {
    "question": "Porque se ativa 'Urgent Priority' num route pattern de emergência como o 112?",
    "options": [
      "Ignora todas as partições",
      "Dá mais QoS às chamadas de emergência",
      "Encaminha sem esperar",
      "Grava a chamada para revisão"
    ],
    "correct": 2,
    "explanation": "A urgent priority termina a recolha de dígitos em sobreposição, por isso o 112 encaminha de imediato mesmo que existam padrões como 112X.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.3.g"
  },
  {
    "question": "Que ferramenta do UCM mostra como seria encaminhado um número marcado a partir de um equipamento?",
    "options": [
      "Cisco Unified Reporting",
      "Bulk Administration Tool",
      "Disaster Recovery System",
      "Dialed Number Analyzer"
    ],
    "correct": 3,
    "explanation": "O DNA simula a análise de dígitos com a CSS do equipamento chamador e mostra os padrões coincidentes, transformações e o caminho escolhido.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.4"
  },
  {
    "question": "Que API do UCM é baseada em SOAP e se usa para provisionar utilizadores, telefones e linhas?",
    "options": [
      "JTAPI",
      "UDS",
      "CTI",
      "AXL"
    ],
    "correct": 3,
    "explanation": "O AXL (Administrative XML) é uma API SOAP/XML com autenticação básica para provisionamento; o UDS é uma API REST sobretudo para dados de utilizadores/equipamentos.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.5"
  },
  {
    "question": "O que faz o MWI para uma caixa de correio do Unity Connection?",
    "options": [
      "Acende a luz de mensagens",
      "Grava a saudação do utilizador",
      "Transcreve o voicemail para texto",
      "Define o tamanho máximo da caixa"
    ],
    "correct": 0,
    "explanation": "O Unity Connection sinaliza o UCM (pela integração SIP/SCCP, com DN de MWI on/off) para acender o indicador quando há mensagens novas.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.6.a"
  },
  {
    "question": "Como se integra hoje mais frequentemente o Unity Connection com o UCM?",
    "options": [
      "Um gateway analógico",
      "Só portas de voicemail SCCP",
      "Gatekeeper H.323",
      "Um trunk SIP"
    ],
    "correct": 3,
    "explanation": "Uma integração por trunk SIP aponta o voicemail pilot do UCM para o Unity Connection; as portas SCCP são a opção antiga.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.6.b"
  },
  {
    "question": "No Unity Connection, o que decide que call handler atende uma chamada recebida?",
    "options": [
      "As routing rules",
      "A CSS do telefone",
      "A route list no UCM",
      "O device pool da porta"
    ],
    "correct": 0,
    "explanation": "As routing rules verificam condições (número chamador/marcado, porta, horário) e enviam chamadas diretas ou reencaminhadas para um call handler, interview handler ou conversa.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.6.c"
  },
  {
    "question": "Como se dá acesso por funções a uma equipa de helpdesk na administração do UCM?",
    "options": [
      "Um segundo nó publisher",
      "Partições separadas para cada admin",
      "Um device pool diferente",
      "Access control groups"
    ],
    "correct": 3,
    "explanation": "Os utilizadores (locais ou LDAP) entram em access control groups cujas funções definem direitos de leitura/alteração nas páginas do UCM.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "3.7.b"
  },
  {
    "question": "Que comando de dial peer ativa o DTMF relay RFC 2833 num dial peer SIP do CUBE?",
    "options": [
      "dtmf-relay cisco-rtp sip",
      "dtmf-relay h245-alphanumeric",
      "dtmf-relay rtp-nte",
      "codec dtmf inband"
    ],
    "correct": 2,
    "explanation": "O rtp-nte envia named telephone events no RTP; sip-kpml e sip-notify são opções de sinalização; o h245 é para H.323.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.1.a"
  },
  {
    "question": "Uma voice translation rule é rule 1 /^0\\(.*\\)/ /+351\\1/. O que faz a 0211234567?",
    "options": [
      "Muda-o para +3510211234567",
      "Muda-o para +351211234567",
      "Deixa-o igual",
      "Apaga todos os dígitos"
    ],
    "correct": 1,
    "explanation": "A regex identifica o 0 inicial, captura o resto e substitui por +351 seguido dos dígitos capturados.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "4.1.b"
  },
  {
    "question": "Como se aplica uma voice translation rule às chamadas de um dial peer?",
    "options": [
      "Num translation profile",
      "Diretamente com 'rule' no peer",
      "Só através de um SIP profile",
      "Através da codec class"
    ],
    "correct": 0,
    "explanation": "As regras ficam numa voice translation-rule; um voice translation-profile refere-as para números chamado/chamador e associa-se ao dial peer.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.1.b"
  },
  {
    "question": "O que define uma voice class codec no CUBE?",
    "options": [
      "Codecs a oferecer, por ordem",
      "O número de DSP de cada codec",
      "A largura de banda da ligação WAN",
      "O método DTMF do trunk"
    ],
    "correct": 0,
    "explanation": "A voice class codec N lista as preferências de codecs; o dial peer refere-a para o CUBE oferecer/aceitar codecs por essa ordem.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.1.c"
  },
  {
    "question": "Qual é a diferença entre dial peers POTS e VoIP?",
    "options": [
      "Os POTS são só para chamadas de fax",
      "POTS: portas de voz; VoIP: destinos IP",
      "Os VoIP são só para telefones analógicos",
      "Não há diferença prática"
    ],
    "correct": 1,
    "explanation": "Os dial peers POTS usam 'port' (FXS/FXO/E1/T1); os VoIP usam session target (IP/DNS/server group) e session protocol.",
    "difficulty": "Fácil",
    "exam": "clcor",
    "domain": "4.1.d"
  },
  {
    "question": "Como deteta o CUBE que um par de trunk SIP está em baixo e deixa de lhe enviar chamadas?",
    "options": [
      "Keepalive SIP OPTIONS no dial peer",
      "Monitorizando sessões BFD para o ITSP",
      "Esperando que o ITSP envie um BYE",
      "Verificando o estado da DSP farm"
    ],
    "correct": 0,
    "explanation": "A voice class sip-options-keepalive põe o dial peer em busy-out quando os OPTIONS não têm resposta, e passa a usar outro peer/membro do server group.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "4.1.e"
  },
  {
    "question": "O que dá uma voice class server-group no CUBE?",
    "options": [
      "Balanceamento de DSP",
      "Um cluster de routers CUBE",
      "Vários destinos por peer",
      "Uma lista de servidores LDAP"
    ],
    "correct": 2,
    "explanation": "Um server group lista IP de destino com preferência ou round-robin, referido por session server-group no dial peer.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.1.e"
  },
  {
    "question": "Uma chamada recebida no CUBE coincide com o dial peer de entrada errado. Que comando ajuda a coincidir por um URI ou IP?",
    "options": [
      "dtmf-relay rtp-nte",
      "destination-pattern no peer POTS",
      "codec preference 1 g711ulaw",
      "incoming uri via"
    ],
    "correct": 3,
    "explanation": "A coincidência de entrada pode usar incoming uri (from/to/via/request) com uma voice class uri, ou números chamado/chamador; o 'show dial-peer voice summary' e o debug ccsip ajudam.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "O que permite mudar um SIP profile no CUBE?",
    "options": [
      "A tabela de encaminhamento do router",
      "O firmware DSP dos codecs",
      "Normalização de cabeçalhos SIP",
      "O temporizador de registo dos telefones"
    ],
    "correct": 2,
    "explanation": "As voice class sip-profiles acrescentam, mudam ou removem cabeçalhos SIP/SDP para interoperar com operadores; aplicam-se por dial peer ou globalmente.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "Porque usar voice class tenants num CUBE com vários trunks?",
    "options": [
      "Para isolar DSP por cliente",
      "Definições SIP por operador",
      "Para faturar cada departamento",
      "Para licenciar cada dial peer"
    ],
    "correct": 1,
    "explanation": "Os tenants agrupam definições SIP globais (bind, registrar, credenciais, temporizadores) por operador, para cada trunk ter a sua configuração.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "Que recurso de media IOS XE é preciso para conferências ou transcodificação com codecs diferentes?",
    "options": [
      "Uma porta do Unity Connection",
      "Um trunk SIP extra",
      "Recursos de DSP farm",
      "Um route group"
    ],
    "correct": 2,
    "explanation": "Os perfis DSP farm (conferência, transcodificação, MTP) registam-se no UCM como recursos de media e usam os DSP do router.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "4.3"
  },
  {
    "question": "Que aplicações compõem o Webex Suite para os utilizadores finais?",
    "options": [
      "Só provisionamento de telefones IP",
      "Só salas de videoconferência",
      "Chamadas, reuniões, mensagens",
      "Só agentes de contact centre"
    ],
    "correct": 2,
    "explanation": "O Webex Suite junta chamadas, reuniões, mensagens, webinars, sondagens e mais na Webex App e nos equipamentos.",
    "difficulty": "Fácil",
    "exam": "clcor",
    "domain": "5.1"
  },
  {
    "question": "No Webex Calling, como é encaminhada uma chamada de um utilizador para um número externo quando o local usa um Local Gateway?",
    "options": [
      "Pelo trunk LGW do local",
      "Diretamente do telefone para o ITSP",
      "Pelo operador móvel do utilizador",
      "Através do Unity Connection"
    ],
    "correct": 0,
    "explanation": "O Webex Calling encaminha as chamadas PSTN pela ligação de cada local (Cisco PSTN, CCP, ou nas instalações por um trunk Local Gateway).",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "5.2"
  },
  {
    "question": "Que funcionalidade do Webex Calling impede os utilizadores de fazer chamadas internacionais?",
    "options": [
      "Políticas de gravação",
      "Mascaramento de números",
      "Permissões de chamada",
      "Definições de Caller ID"
    ],
    "correct": 2,
    "explanation": "As permissões de chamadas por local ou utilizador permitem/bloqueiam tipos de chamada (internacionais, premium) e podem exigir códigos de autorização.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.3"
  },
  {
    "question": "No Webex Calling, o que é um local (location)?",
    "options": [
      "Um site com números e PSTN",
      "Um equipamento de sala de reuniões",
      "A morada de casa de um utilizador",
      "Uma função de admin do Control Hub"
    ],
    "correct": 0,
    "explanation": "Os locais definem a morada de emergência, fuso horário, números, ligação PSTN e definições de marcação interna para utilizadores e equipamentos.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.4.b"
  },
  {
    "question": "No Webex Calling, como se relacionam trunks e route groups?",
    "options": [
      "Os route groups substituem os dial plans",
      "Os trunks contêm route groups",
      "São o mesmo tipo de objeto",
      "Route groups agrupam trunks"
    ],
    "correct": 3,
    "explanation": "Os trunks ligam a Local Gateways; os route groups combinam trunks com prioridades; os dial plans ou locais apontam depois para um trunk ou route group.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "5.4.e"
  },
  {
    "question": "Para que se usa um dial plan do Webex Calling?",
    "options": [
      "Enviar padrões para trunks PBX",
      "Atribuir números a utilizadores",
      "Gravar as chamadas externas",
      "Mudar os toques de cada local"
    ],
    "correct": 0,
    "explanation": "Os dial plans contêm padrões (números da empresa) encaminhados para um trunk/route group, deixando os utilizadores Webex chegar a números do UCM ou PBX locais.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "5.4.f"
  },
  {
    "question": "Onde se gerem as definições do site Webex Meetings, como o áudio por omissão e a gravação?",
    "options": [
      "Na admin do Unity Connection",
      "Na página web de cada telefone",
      "No route plan do UCM",
      "No Control Hub"
    ],
    "correct": 3,
    "explanation": "Os sites de reuniões configuram-se no Control Hub (antigo Site Admin): áudio, gravação, segurança e privilégios dos utilizadores.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.5"
  },
  {
    "question": "Que definição do Control Hub pode impedir os utilizadores de partilhar ficheiros nas mensagens Webex com organizações externas?",
    "options": [
      "Permissões de chamadas",
      "Definições de mensagens",
      "Bloqueio do site de reuniões",
      "Directory Connector"
    ],
    "correct": 1,
    "explanation": "As definições de mensagens do Control Hub incluem comunicação externa, restrições de partilha de ficheiros, retenção e funcionalidades Pro Pack/Extended Security.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.6"
  },
  {
    "question": "Que tipo de API expõe o Webex aos programadores?",
    "options": [
      "REST com JSON",
      "Só SOAP/XML",
      "MIB SNMP",
      "CLI por Telnet"
    ],
    "correct": 0,
    "explanation": "As API Webex em webexapis.com são REST com corpos JSON, mais SDK e webhooks.",
    "difficulty": "Fácil",
    "exam": "clcor",
    "domain": "5.7.a"
  },
  {
    "question": "Como atua uma integração em nome de um utilizador Webex?",
    "options": [
      "A password do utilizador em cada chamada",
      "Um token de acesso OAuth 2.0",
      "Um token de bot partilhado por todos",
      "Uma chave de API no URL"
    ],
    "correct": 1,
    "explanation": "As integrações usam o fluxo authorization code do OAuth com scopes; os bots têm token próprio; as service apps usam tokens autorizados pelo admin.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.7.b"
  },
  {
    "question": "Como notifica um webhook Webex a sua aplicação?",
    "options": [
      "Um ciclo de consulta no seu código",
      "Um HTTP POST a cada evento",
      "Um trunk SIP para o Webex",
      "Um relatório do Control Hub"
    ],
    "correct": 1,
    "explanation": "Regista-se um webhook (resource + event + targetUrl); o Webex chama o seu endpoint quando, por exemplo, é criada uma mensagem.",
    "difficulty": "Fácil",
    "exam": "clcor",
    "domain": "5.7.c"
  },
  {
    "question": "Como podem os utilizadores ser provisionados automaticamente no Control Hub a partir de um fornecedor de identidade como o Entra ID?",
    "options": [
      "CDR",
      "Traps SNMP",
      "SCIM",
      "Ficheiros TFTP"
    ],
    "correct": 2,
    "explanation": "O SCIM 2.0 a partir do Entra ID/Okta cria e atualiza utilizadores; o Directory Connector sincroniza a partir do AD local. As funções RBAC controlam os direitos de admin.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "5.8"
  },
  {
    "question": "O que dá o Webex Cloud-Connected UC (CCUC) ao UCM local?",
    "options": [
      "Uma ligação PSTN gratuita por site",
      "Mudar todos os utilizadores para Webex Calling",
      "Visão cloud dos clusters UCM",
      "Substituir o Unity Connection"
    ],
    "correct": 2,
    "explanation": "O CCUC liga clusters UCM ao Control Hub para analítica, gestão de certificados, informação de atualizações e outros serviços cloud.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.9"
  },
  {
    "question": "Que Webex Hybrid Service permite aos utilizadores agendar reuniões Webex a partir do calendário Exchange/Microsoft 365?",
    "options": [
      "Hybrid Data Security",
      "Hybrid Calendar",
      "Video Mesh",
      "Só Hybrid Directory"
    ],
    "correct": 1,
    "explanation": "O Hybrid Calendar integra calendários Exchange, Microsoft 365 ou Google para pôr botões de entrada (OBTP) e agendar com @webex.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.10"
  },
  {
    "question": "O que faz o Webex Video Mesh?",
    "options": [
      "Grava as chamadas no local",
      "Cifra mensagens com chaves locais",
      "Sincroniza utilizadores do AD com a cloud",
      "Mantém media de reuniões no local"
    ],
    "correct": 3,
    "explanation": "Os nós Video Mesh alojam localmente os media das reuniões para poupar largura de banda internet e melhorar a qualidade, em cascata com a cloud quando preciso.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "5.10"
  },
  {
    "question": "Uma chamada tem áudio só num sentido. Qual é a causa mais comum?",
    "options": [
      "O codec é G.711 em vez de G.722",
      "RTP bloqueado num sentido",
      "O telefone tem o toque errado",
      "A CSS do utilizador está errada"
    ],
    "correct": 1,
    "explanation": "A sinalização funciona mas o RTP não chega a um lado: falta de rotas, ACL, problemas de NAT/ALG ou endereço de media errado no SDP.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "6.1"
  },
  {
    "question": "Os utilizadores falam de áudio entrecortado nas horas de ponta na WAN. Qual é a causa provável?",
    "options": [
      "Os telefones usam o nome de VLAN errado",
      "Faltam registos DNS SRV",
      "Perdas e jitter por congestionamento",
      "A sincronização LDAP está atrasada"
    ],
    "correct": 2,
    "explanation": "O congestionamento sem QoS causa perdas e atraso variável; verifique descartes nas interfaces, filas e estatísticas RTP (jitter/perdas) nos telefones.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "6.1"
  },
  {
    "question": "Que marcações DSCP se recomendam para os media de voz e a sinalização de chamadas?",
    "options": [
      "Default (0) para os dois tipos",
      "AF41 para voz, EF para sinalização",
      "CS1 para voz, CS7 para sinalização",
      "EF voz, CS3 sinalização"
    ],
    "correct": 3,
    "explanation": "A base de QoS da Cisco usa EF para os media de voz, CS3 para a sinalização e AF41 para vídeo interativo.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "6.2"
  },
  {
    "question": "Porque é mais difícil o QoS de voz em Wi-Fi do que em ligações com fios?",
    "options": [
      "Airtime partilhado e filas WMM",
      "O Wi-Fi não leva DSCP de todo",
      "A rede sem fios só suporta G.729",
      "Os AP não podem usar VLAN"
    ],
    "correct": 0,
    "explanation": "O WMM mapeia DSCP/UP em categorias de acesso; a contenção, as retransmissões e o roaming acrescentam jitter, por isso desenhe cobertura, CAC e roaming rápido.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "6.2"
  },
  {
    "question": "Onde se define normalmente a fronteira de confiança para um telefone IP Cisco com um PC atrás?",
    "options": [
      "Na placa de rede do PC",
      "No telefone IP",
      "Só no router da WAN",
      "No operador de internet"
    ],
    "correct": 1,
    "explanation": "O switch de acesso estende a confiança ao telefone (por CDP); o telefone remarca o tráfego do PC, por isso as marcações do próprio PC não são de confiança.",
    "difficulty": "Médio",
    "exam": "clcor",
    "domain": "6.3"
  },
  {
    "question": "Que configuração cria uma fila de baixa latência para voz numa interface WAN IOS XE?",
    "options": [
      "police 64000; match any; service-policy input na LAN",
      "class-map match dscp ef; policy-map bandwidth remaining; service-policy input",
      "access-list 101 permit udp; ip route; interface priority",
      "class-map match dscp ef; policy-map class priority; service-policy output"
    ],
    "correct": 3,
    "explanation": "O LLQ usa o comando 'priority' na classe do policy-map (estrito e policiado), aplicado à saída com service-policy output.",
    "difficulty": "Difícil",
    "exam": "clcor",
    "domain": "6.4"
  }
];
