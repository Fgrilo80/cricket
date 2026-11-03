window.QUIZ_BANK = [
  {
    "question": "Which Cisco offering provides Unified CM-based calling hosted by Cisco as a dedicated private cloud?",
    "options": [
      "Cisco Unity Express on branch routers",
      "Webex Calling multi-tenant only",
      "Webex Calling Dedicated Instance",
      "A single on-prem CUBE with SRST"
    ],
    "correct": 2,
    "explanation": "Dedicated Instance runs a customer's own UCM, Unity Connection and Expressway in Webex data centres, managed by Cisco/partner and integrated with Webex.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.a"
  },
  {
    "question": "Which tool is used to size a Cisco Collaboration deployment (servers and VMs)?",
    "options": [
      "The Expressway Configuration Wizard",
      "The Collaboration Sizing Tool",
      "The RTMT Call Flow tool",
      "The Webex Control Hub Analytics page"
    ],
    "correct": 1,
    "explanation": "The Cisco Collaboration Sizing Tool (with the Virtualization guidance) estimates nodes and OVA sizes from users, devices and traffic.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.b"
  },
  {
    "question": "A G.711 call over Ethernet uses about how much bandwidth per direction, including L2 overhead (20 ms packets)?",
    "options": [
      "About 87 kb/s",
      "About 8 kb/s",
      "Exactly 64 kb/s",
      "About 300 kb/s"
    ],
    "correct": 0,
    "explanation": "64 kb/s payload plus RTP/UDP/IP (40 B) and Ethernet (18 B) headers at 50 pps gives roughly 87 kb/s; G.729 is about 31 kb/s.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "1.1.c"
  },
  {
    "question": "Which audio codec is wideband, adapts its bit rate and is widely used by Webex and modern endpoints?",
    "options": [
      "G.723.1",
      "G.711 µ-law",
      "G.729a",
      "Opus"
    ],
    "correct": 3,
    "explanation": "Opus supports narrowband to fullband, variable bit rate and loss resilience; G.711 is narrowband 64 kb/s.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.d"
  },
  {
    "question": "How does Unified CM provide call processing redundancy for phones?",
    "options": [
      "A single publisher that handles all registration",
      "A CM group of ordered subscribers",
      "An HSRP pair of TFTP servers only",
      "A second cluster with the same IP addresses"
    ],
    "correct": 1,
    "explanation": "The device pool's Unified CM group gives the order of subscribers; phones register to the first and fail over to the next.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.e"
  },
  {
    "question": "Which UCM feature backs up the cluster configuration for disaster recovery?",
    "options": [
      "Disaster Recovery System (DRS)",
      "Bulk Administration Tool export",
      "RTMT trace collection",
      "CDR Analysis and Reporting"
    ],
    "correct": 0,
    "explanation": "DRS backs up the publisher database and components to an SFTP server and restores them after a rebuild.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.f"
  },
  {
    "question": "Why is SRTP used on collaboration endpoints?",
    "options": [
      "It encrypts the voice and video media",
      "It encrypts the SIP signalling only",
      "It compresses RTP headers on WAN links",
      "It authenticates users to LDAP"
    ],
    "correct": 0,
    "explanation": "SRTP protects media confidentiality and integrity; TLS protects SIP signalling, which also carries the SRTP keys (SDES).",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.1.h"
  },
  {
    "question": "What is the main role of Expressway-C and Expressway-E together?",
    "options": [
      "Firewall traversal for remote and B2B",
      "Hosting voicemail boxes for remote users",
      "Replacing UCM as the call control agent",
      "Acting as the cluster's TFTP server"
    ],
    "correct": 0,
    "explanation": "Expressway-E in the DMZ and Expressway-C inside build a traversal zone, enabling Mobile and Remote Access (MRA) and B2B calling without VPN.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.2"
  },
  {
    "question": "What is CUBE typically used for?",
    "options": [
      "A wireless controller for IP phones",
      "A SIP border element for trunks",
      "A presence server for chat and status",
      "An LDAP directory for all users"
    ],
    "correct": 1,
    "explanation": "Cisco Unified Border Element on IOS XE routers demarcates SIP trunks: interworking, security, normalisation and media handling.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.2"
  },
  {
    "question": "In a UCM cluster upgrade, which node is upgraded first?",
    "options": [
      "The TFTP-only node always",
      "Any subscriber in the group",
      "The publisher",
      "All nodes in parallel at once"
    ],
    "correct": 2,
    "explanation": "The publisher is upgraded first, then subscribers (in groups), then a switch version on the publisher before the subscribers.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "1.3"
  },
  {
    "question": "SAML SSO for UCM fails with a time-related assertion error. What should be checked first?",
    "options": [
      "The CSS of the user's line",
      "The phone button template",
      "NTP on UCM and the IdP",
      "The route list order"
    ],
    "correct": 2,
    "explanation": "SAML assertions have validity windows; clock skew between UCM and the identity provider makes them rejected.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "1.4.a"
  },
  {
    "question": "Why should the Expressway-E certificate be signed by a public CA?",
    "options": [
      "It lets phones skip TFTP download",
      "Outside clients must trust it",
      "Public CAs give longer key lengths",
      "Expressway-C requires it for LDAP"
    ],
    "correct": 1,
    "explanation": "MRA clients and B2B partners validate the Expressway-E certificate; SANs must include the MRA domain and other required names.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.4.b"
  },
  {
    "question": "What does OAuth with refresh tokens improve for Webex App users on UCM?",
    "options": [
      "Higher video resolution on calls",
      "Fewer password prompts",
      "Faster TFTP file download",
      "Automatic dial plan creation"
    ],
    "correct": 1,
    "explanation": "Clients get access and refresh tokens after authenticating, so they reconnect (including over MRA) without re-entering credentials.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.4.c"
  },
  {
    "question": "A TLS SIP trunk to CUBE fails during the handshake. Which is a common cause?",
    "options": [
      "DTMF is set to KPML",
      "The trunk uses G.711 instead of G.729",
      "The route pattern has no partition",
      "The peer's CA is not trusted"
    ],
    "correct": 3,
    "explanation": "Each side must trust the other's certificate chain (and names must match if checked); otherwise the TLS handshake fails.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "1.4.d"
  },
  {
    "question": "Calls between two secure phones show no lock icon and use RTP. What is a likely reason?",
    "options": [
      "The phones have Opus disabled",
      "The phones use the wrong ringtone",
      "The calls route through a hunt pilot",
      "Signalling is not using TLS"
    ],
    "correct": 3,
    "explanation": "SRTP keys are exchanged in signalling; if signalling is not encrypted (TLS) the system falls back to RTP.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.4.e"
  },
  {
    "question": "Which DNS record lets Webex App and MRA clients discover Expressway from the internet?",
    "options": [
      "PTR record for each phone",
      "A record for the TFTP server",
      "SRV _collab-edge._tls",
      "MX record of the domain"
    ],
    "correct": 2,
    "explanation": "External clients look up _collab-edge._tls.<domain>; internally they look up _cisco-uds._tcp to find UCM.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.5.a"
  },
  {
    "question": "Which DHCP option gives Cisco IP phones the TFTP server address?",
    "options": [
      "Option 43",
      "Option 150",
      "Option 82",
      "Option 66 only for Cisco"
    ],
    "correct": 1,
    "explanation": "Option 150 lists one or more TFTP servers for Cisco phones (option 66 is the standard single TFTP name).",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.5.d"
  },
  {
    "question": "How does an IP phone learn its voice VLAN from a Cisco switch?",
    "options": [
      "SIP REGISTER messages",
      "DHCP option 150",
      "The TFTP config file",
      "CDP or LLDP-MED"
    ],
    "correct": 3,
    "explanation": "The switch advertises the voice VLAN with CDP (or LLDP-MED); the phone then tags its traffic and requests DHCP in that VLAN.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.5.e"
  },
  {
    "question": "Phone users cannot log in to Self Care with their AD passwords, but sync works. What is missing?",
    "options": [
      "The user's voicemail profile",
      "LDAP directory sync schedule",
      "A partition on the line",
      "LDAP authentication in UCM"
    ],
    "correct": 3,
    "explanation": "LDAP sync imports users; LDAP authentication must also be enabled so UCM checks passwords against AD.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "1.5.c"
  },
  {
    "question": "What does self-provisioning in UCM allow?",
    "options": [
      "Users create route patterns in Self Care",
      "Phones choose their own directory number",
      "Users claim a phone via an IVR",
      "Phones download firmware from the internet"
    ],
    "correct": 2,
    "explanation": "With auto-registration and a self-provisioning IVR, users authenticate with a PIN and the phone is built from their user profile/templates.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.1.b"
  },
  {
    "question": "Which UCM tool adds hundreds of phones and users from CSV files?",
    "options": [
      "Bulk Administration Tool",
      "Dialed Number Analyzer",
      "Real-Time Monitoring Tool",
      "Disaster Recovery System"
    ],
    "correct": 0,
    "explanation": "BAT uses templates and CSV files to insert, update or delete phones, users and lines in bulk.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.1.c"
  },
  {
    "question": "How can a phone be onboarded with an activation code?",
    "options": [
      "The code is sent in DHCP option 150",
      "The admin types the MAC into Expressway",
      "The phone scans the network for UCM",
      "The user types the code on the phone"
    ],
    "correct": 3,
    "explanation": "Activation codes avoid entering MACs: the phone contacts the activation service (or UCM) with the code and gets its config, including over MRA.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.1.d"
  },
  {
    "question": "Which SIP response indicates the called phone is ringing?",
    "options": [
      "100 Trying",
      "200 OK",
      "180 Ringing",
      "486 Busy Here"
    ],
    "correct": 2,
    "explanation": "100 Trying is hop-by-hop progress, 180/183 indicate ringing/early media, 200 OK answers; 486 means busy.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.2.a"
  },
  {
    "question": "A SIP call is answered but drops after about 30 seconds. What is a typical cause?",
    "options": [
      "DTMF uses RFC 2833 payloads",
      "The INVITE has no SDP body",
      "The phone is not registered",
      "The ACK never arrives"
    ],
    "correct": 3,
    "explanation": "Without the ACK, the answering side retransmits 200 OK and tears down after timer expiry (~32 s), often due to NAT/firewall or routing issues.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "2.2.a"
  },
  {
    "question": "What does the SDP 'm=' line describe?",
    "options": [
      "The caller's display name",
      "Media type, port, codecs",
      "The SIP server address",
      "The total call duration"
    ],
    "correct": 1,
    "explanation": "m=audio 16384 RTP/AVP 0 101 gives media type, RTP port, transport profile and payload types; c= gives the IP.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.2.b"
  },
  {
    "question": "How are DTMF digits sent with RFC 2833/4733?",
    "options": [
      "As SIP INFO messages",
      "As RTP telephone events",
      "As in-band audio tones only",
      "As KPML subscriptions"
    ],
    "correct": 1,
    "explanation": "RFC 2833/4733 carries DTMF as RTP payload (commonly type 101), negotiated in SDP; SIP INFO and KPML are signalling methods.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.2.c"
  },
  {
    "question": "How does a SIP phone usually place a call on hold?",
    "options": [
      "A 486 response to the peer",
      "A BYE followed by a new INVITE",
      "A REGISTER with expires=0",
      "A re-INVITE with sendonly"
    ],
    "correct": 3,
    "explanation": "Hold is a re-INVITE changing the media direction; music on hold may then be inserted; resume sends a re-INVITE with sendrecv.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "2.2.d"
  },
  {
    "question": "Which SIP method is used for a transfer?",
    "options": [
      "SUBSCRIBE",
      "REFER",
      "OPTIONS",
      "PRACK"
    ],
    "correct": 1,
    "explanation": "REFER asks the transferee to call the target (with Replaces for attended transfer); NOTIFY reports progress.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "2.2.d"
  },
  {
    "question": "A SIP phone shows 'Registering' and never registers to UCM. Which is a common cause?",
    "options": [
      "The device is not configured",
      "The route list has too many members",
      "The phone's CSS lacks the PSTN partition",
      "Music on hold is disabled"
    ],
    "correct": 0,
    "explanation": "Registration needs the device in UCM (or auto-registration), correct TFTP/config and, if used, matching digest credentials; check RTMT and phone logs.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "2.3"
  },
  {
    "question": "In UCM, which element decides which partitions a calling device can reach?",
    "options": [
      "Calling search space",
      "Media resource group",
      "Device pool",
      "Region between sites"
    ],
    "correct": 0,
    "explanation": "A CSS is an ordered list of partitions; the line CSS and device CSS are combined (line first) for call routing.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.1"
  },
  {
    "question": "Two route patterns match a dialled number: 9.1XXX and 9.1[2-9]XX. Which one is chosen for 91234?",
    "options": [
      "Both, in round-robin",
      "9.1XXX",
      "9.1[2-9]XX",
      "Neither; the call fails"
    ],
    "correct": 2,
    "explanation": "UCM picks the closest (most specific) match: [2-9] matches 8 values versus 10 for X, so 9.1[2-9]XX wins.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "3.1"
  },
  {
    "question": "Which UCM setting helps prevent toll fraud through call forward to international numbers?",
    "options": [
      "A restricted forward CSS",
      "A larger region bandwidth",
      "Enabling auto-registration",
      "Using G.711 only on trunks"
    ],
    "correct": 0,
    "explanation": "Restricting the Call Forward All CSS (and blocking international patterns, using FAC and time-of-day) stops users forwarding to expensive numbers.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.2"
  },
  {
    "question": "What is the difference between a route group and a route list?",
    "options": [
      "A route group points to route patterns",
      "They are the same object in UCM",
      "A list orders groups of devices",
      "A route list contains phones"
    ],
    "correct": 2,
    "explanation": "Route pattern → route list (ordered route groups, with local route group) → route group (ordered gateways/trunks with distribution algorithm).",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.3.a"
  },
  {
    "question": "In a globalized dial plan, where is a called number normalised to +E.164?",
    "options": [
      "In the phone's softkey template",
      "On the gateway's POTS dial peer only",
      "In translation patterns on ingress",
      "In the device pool's region"
    ],
    "correct": 2,
    "explanation": "Globalized call routing localises/normalises numbers at ingress (translation patterns, called/calling transformations) and localises at egress.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "3.3.b"
  },
  {
    "question": "What does the local route group (LRG) allow?",
    "options": [
      "Assigning phones to partitions",
      "Routing all calls to a single site",
      "Disabling route lists for each site",
      "One pattern, local gateway per site"
    ],
    "correct": 3,
    "explanation": "LRG is bound per device pool, so a single +E.164 route pattern sends calls out the caller's local gateway without per-site patterns.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "3.3.c"
  },
  {
    "question": "How is time-of-day routing configured in UCM?",
    "options": [
      "A cron job on the publisher",
      "Time schedules on partitions",
      "A setting in the phone's firmware",
      "A route group distribution algorithm"
    ],
    "correct": 1,
    "explanation": "Time schedules made of time periods are assigned to partitions; outside the schedule, patterns in that partition are not reachable.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.3.d"
  },
  {
    "question": "What is a forced authorization code (FAC)?",
    "options": [
      "A code for some call types",
      "A PIN for the voicemail box",
      "A licence key for the trunk",
      "A codec negotiation rule"
    ],
    "correct": 0,
    "explanation": "FAC on a route pattern requires an authorisation level code before calls (e.g. international) proceed and logs it in CDRs.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.3.f"
  },
  {
    "question": "Why is 'Urgent Priority' set on an emergency route pattern such as 112?",
    "options": [
      "It bypasses all partitions",
      "It gives emergency calls higher QoS",
      "It routes without waiting",
      "It records the call for review"
    ],
    "correct": 2,
    "explanation": "Urgent priority stops digit collection on overlap, so 112 routes immediately even if longer patterns like 112X exist.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.3.g"
  },
  {
    "question": "Which UCM tool shows how a dialled number would be routed from a given device?",
    "options": [
      "Cisco Unified Reporting",
      "Bulk Administration Tool",
      "Disaster Recovery System",
      "Dialed Number Analyzer"
    ],
    "correct": 3,
    "explanation": "DNA simulates digit analysis using the calling device's CSS and shows matched patterns, transformations and the route chosen.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.4"
  },
  {
    "question": "Which UCM API is SOAP-based and used to provision users, phones and lines?",
    "options": [
      "JTAPI",
      "UDS",
      "CTI",
      "AXL"
    ],
    "correct": 3,
    "explanation": "AXL (Administrative XML) is a SOAP/XML API with basic authentication for provisioning; UDS is a REST API mainly for user/device data.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.5"
  },
  {
    "question": "What does MWI do for a Unity Connection mailbox?",
    "options": [
      "Lights the message lamp",
      "Records the user's greeting",
      "Transcribes voicemail to text",
      "Sets the maximum mailbox size"
    ],
    "correct": 0,
    "explanation": "Unity Connection signals UCM (via the SIP/SCCP integration MWI on/off DNs) to light the indicator when there are new messages.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.6.a"
  },
  {
    "question": "How is Unity Connection most commonly integrated with UCM today?",
    "options": [
      "An analog gateway",
      "SCCP voicemail ports only",
      "H.323 gatekeeper",
      "A SIP trunk"
    ],
    "correct": 3,
    "explanation": "A SIP trunk integration points UCM's voicemail pilot to Unity Connection; SCCP ports are the legacy option.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.6.b"
  },
  {
    "question": "In Unity Connection, what decides which call handler answers an incoming call?",
    "options": [
      "Routing rules",
      "The phone's CSS",
      "The route list in UCM",
      "The device pool of the port"
    ],
    "correct": 0,
    "explanation": "Routing rules match conditions (calling/dialled number, port, schedule) and send direct or forwarded calls to a call handler, interview handler or conversation.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.6.c"
  },
  {
    "question": "How is role-based access given to a helpdesk team in UCM administration?",
    "options": [
      "A second publisher node",
      "Separate partitions for each admin",
      "A different device pool",
      "Access control groups"
    ],
    "correct": 3,
    "explanation": "Users (local or LDAP) are added to access control groups whose roles define read/update rights on UCM pages.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "3.7.b"
  },
  {
    "question": "Which dial peer command enables RFC 2833 DTMF relay on a CUBE SIP dial peer?",
    "options": [
      "dtmf-relay cisco-rtp sip",
      "dtmf-relay h245-alphanumeric",
      "dtmf-relay rtp-nte",
      "codec dtmf inband"
    ],
    "correct": 2,
    "explanation": "rtp-nte sends named telephone events in RTP; sip-kpml and sip-notify are signalling options; h245 is for H.323.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.1.a"
  },
  {
    "question": "A voice translation rule is written as rule 1 /^0\\(.*\\)/ /+351\\1/. What does it do to 0211234567?",
    "options": [
      "Changes it to +3510211234567",
      "Changes it to +351211234567",
      "Leaves it unchanged",
      "Deletes all digits"
    ],
    "correct": 1,
    "explanation": "The regex matches a leading 0, captures the rest and replaces it with +351 followed by the captured digits.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "4.1.b"
  },
  {
    "question": "How is a voice translation rule applied to calls on a dial peer?",
    "options": [
      "Through a translation profile",
      "Directly with 'rule' on the peer",
      "Via a SIP profile only",
      "Through the codec class"
    ],
    "correct": 0,
    "explanation": "Rules live in a voice translation-rule; a voice translation-profile references them for called/calling numbers and is attached to the dial peer.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.1.b"
  },
  {
    "question": "What does a voice class codec list on CUBE define?",
    "options": [
      "Ordered codecs to offer",
      "The DSP count for each codec",
      "The bandwidth of the WAN link",
      "The trunk's DTMF method"
    ],
    "correct": 0,
    "explanation": "voice class codec N lists codec preferences; the dial peer references it so CUBE offers/accepts codecs in that order.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.1.c"
  },
  {
    "question": "What is the difference between POTS and VoIP dial peers?",
    "options": [
      "POTS peers are only for fax calls",
      "POTS: voice ports; VoIP: IP targets",
      "VoIP peers are only for analog phones",
      "There is no practical difference"
    ],
    "correct": 1,
    "explanation": "POTS dial peers use 'port' (FXS/FXO/E1/T1); VoIP dial peers use session target (IP/DNS/server group) and session protocol.",
    "difficulty": "Easy",
    "exam": "clcor",
    "domain": "4.1.d"
  },
  {
    "question": "How does CUBE detect that a SIP trunk peer is down and stop sending calls to it?",
    "options": [
      "SIP OPTIONS keepalive",
      "Monitoring BFD sessions to the ITSP",
      "Waiting for the ITSP to send a BYE",
      "Checking the DSP farm status"
    ],
    "correct": 0,
    "explanation": "voice class sip-options-keepalive marks the dial peer busy-out when OPTIONS get no response, so another peer/server group member is used.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "4.1.e"
  },
  {
    "question": "What does a voice class server-group provide on CUBE?",
    "options": [
      "Load balancing of DSPs",
      "A cluster of CUBE routers",
      "Many targets per peer",
      "A list of LDAP servers"
    ],
    "correct": 2,
    "explanation": "A server group lists destination IPs with preference or round-robin hunting, referenced by session server-group on the dial peer.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.1.e"
  },
  {
    "question": "An inbound call to CUBE matches the wrong inbound dial peer. Which command helps match by a specific URI or IP?",
    "options": [
      "dtmf-relay rtp-nte",
      "destination-pattern on the POTS peer",
      "codec preference 1 g711ulaw",
      "incoming uri via"
    ],
    "correct": 3,
    "explanation": "Inbound matching can use incoming uri (from/to/via/request) with a voice class uri, or incoming called/calling numbers; 'show dial-peer voice summary' and debug ccsip help.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "What does a SIP profile on CUBE let you change?",
    "options": [
      "The router's routing table",
      "The codec DSP firmware",
      "SIP header normalisation",
      "The phone registration timer"
    ],
    "correct": 2,
    "explanation": "voice class sip-profiles add, modify or remove SIP/SDP headers to interoperate with providers; they are applied per dial peer or globally.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "Why use voice class tenants on a multi-trunk CUBE?",
    "options": [
      "To isolate DSPs per customer",
      "Per-provider SIP settings",
      "To bill each department",
      "To license each dial peer"
    ],
    "correct": 1,
    "explanation": "Tenants group global SIP settings (bind, registrar, credentials, timers) per provider so each trunk has its own configuration.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.2"
  },
  {
    "question": "Which IOS XE media resource is needed for conferencing or transcoding with mixed codecs?",
    "options": [
      "A Unity Connection port",
      "An extra SIP trunk",
      "DSP farm resources",
      "A route group"
    ],
    "correct": 2,
    "explanation": "DSP farm profiles (conference, transcode, MTP) register to UCM as media resources and use the router's DSPs.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "4.3"
  },
  {
    "question": "Which apps make up the Webex Suite for end users?",
    "options": [
      "Only IP phone provisioning",
      "Only video conferencing rooms",
      "Calling, meetings, messaging",
      "Only contact centre agents"
    ],
    "correct": 2,
    "explanation": "The Webex Suite combines calling, meetings, messaging, webinars, polling and more in the Webex App and devices.",
    "difficulty": "Easy",
    "exam": "clcor",
    "domain": "5.1"
  },
  {
    "question": "In Webex Calling, how is a call from a user to an external number routed when the location uses a Local Gateway?",
    "options": [
      "Via the location's LGW trunk",
      "Directly from the phone to the ITSP",
      "Through the user's mobile carrier",
      "Through Unity Connection"
    ],
    "correct": 0,
    "explanation": "Webex Calling routes PSTN calls per location connection (Cisco PSTN, CCP, or premises-based via a Local Gateway trunk).",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "5.2"
  },
  {
    "question": "Which Webex Calling feature limits users from placing international calls?",
    "options": [
      "Call recording policies",
      "Number masking per user",
      "Calling permissions",
      "Caller ID settings"
    ],
    "correct": 2,
    "explanation": "Calling permissions per location or user allow/block call types (international, premium) and can require authorisation codes.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.3"
  },
  {
    "question": "In Webex Calling, what is a location?",
    "options": [
      "A site with numbers and PSTN",
      "A meeting room device group",
      "A user's home address",
      "A Control Hub admin role"
    ],
    "correct": 0,
    "explanation": "Locations define emergency address, time zone, numbers, PSTN connection and internal dialling settings for users and devices.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.4.b"
  },
  {
    "question": "In Webex Calling, how do trunks and route groups relate?",
    "options": [
      "Route groups replace dial plans",
      "Trunks contain route groups",
      "They are the same object type",
      "Route groups bundle trunks"
    ],
    "correct": 3,
    "explanation": "Trunks connect to Local Gateways; route groups combine trunks with priorities; dial plans or locations then point to a trunk or route group.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "5.4.e"
  },
  {
    "question": "What is a Webex Calling dial plan used for?",
    "options": [
      "Sending patterns to PBX trunks",
      "Assigning numbers to users",
      "Recording all external calls",
      "Changing ringtones per location"
    ],
    "correct": 0,
    "explanation": "Dial plans contain patterns (enterprise numbers) routed to a trunk/route group, letting Webex users reach on-prem UCM or PBX numbers.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "5.4.f"
  },
  {
    "question": "Where are Webex Meetings site settings such as default audio and recording managed?",
    "options": [
      "In Unity Connection admin",
      "On each phone's web page",
      "In the UCM route plan",
      "In Control Hub"
    ],
    "correct": 3,
    "explanation": "Meeting sites are configured in Control Hub (formerly Site Admin): audio, recording, security and user privileges.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.5"
  },
  {
    "question": "Which Control Hub setting can stop users sharing files in Webex messaging with external organisations?",
    "options": [
      "Calling permissions",
      "Messaging settings",
      "Meeting site lock",
      "Directory Connector"
    ],
    "correct": 1,
    "explanation": "Control Hub messaging settings include external communication, file sharing restrictions, retention and Pro Pack/Extended Security features.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.6"
  },
  {
    "question": "What kind of API does Webex expose for developers?",
    "options": [
      "REST and JSON",
      "SOAP/XML only",
      "SNMP MIBs only",
      "Telnet CLI only"
    ],
    "correct": 0,
    "explanation": "Webex APIs at webexapis.com are RESTful with JSON bodies, plus SDKs and webhooks.",
    "difficulty": "Easy",
    "exam": "clcor",
    "domain": "5.7.a"
  },
  {
    "question": "How does an integration act on behalf of a Webex user?",
    "options": [
      "The user's password in each call",
      "An OAuth 2.0 access token",
      "A shared bot token for everyone",
      "An API key in the URL"
    ],
    "correct": 1,
    "explanation": "Integrations use OAuth authorisation code grant with scopes; bots have their own token; service apps use admin-authorised tokens.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.7.b"
  },
  {
    "question": "How does a Webex webhook notify your application?",
    "options": [
      "A polling loop in your code",
      "An HTTP POST on each event",
      "A SIP trunk to Webex",
      "A scheduled Control Hub report"
    ],
    "correct": 1,
    "explanation": "You register a webhook (resource + event + targetUrl); Webex calls your endpoint when, for example, a message is created.",
    "difficulty": "Easy",
    "exam": "clcor",
    "domain": "5.7.c"
  },
  {
    "question": "How can users be provisioned into Control Hub automatically from an identity provider like Entra ID?",
    "options": [
      "CDR exports",
      "SNMP traps",
      "SCIM",
      "TFTP"
    ],
    "correct": 2,
    "explanation": "SCIM 2.0 from Entra ID/Okta creates and updates users; Directory Connector syncs from on-prem AD. RBAC roles control admin rights.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "5.8"
  },
  {
    "question": "What does Webex Cloud-Connected UC (CCUC) provide for on-prem UCM?",
    "options": [
      "A free PSTN connection for sites",
      "Moving all users to Webex Calling",
      "Cloud insight into UCM clusters",
      "Replacing Unity Connection"
    ],
    "correct": 2,
    "explanation": "CCUC connects UCM clusters to Control Hub for analytics, certificate management, upgrades insight and other cloud services.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.9"
  },
  {
    "question": "Which Webex Hybrid Service lets on-prem users schedule Webex meetings from their Exchange/Microsoft 365 calendar?",
    "options": [
      "Hybrid Data Security",
      "Hybrid Calendar",
      "Video Mesh",
      "Hybrid Directory only"
    ],
    "correct": 1,
    "explanation": "Hybrid Calendar integrates Exchange, Microsoft 365 or Google calendars to add join buttons (OBTP) and @webex scheduling.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.10"
  },
  {
    "question": "What does Webex Video Mesh do?",
    "options": [
      "Records all calls on-prem",
      "Encrypts messages with local keys",
      "Syncs AD users to the cloud",
      "Keeps meeting media on-prem"
    ],
    "correct": 3,
    "explanation": "Video Mesh nodes host meeting media locally to save internet bandwidth and improve quality, cascading to the cloud when needed.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "5.10"
  },
  {
    "question": "A call has one-way audio. What is the most common cause?",
    "options": [
      "The codec is G.711 instead of G.722",
      "RTP blocked in one direction",
      "The phone has the wrong ringtone",
      "The user's CSS is wrong"
    ],
    "correct": 1,
    "explanation": "Signalling works but RTP cannot reach one side: missing routes, ACLs, NAT/ALG issues or a wrong media address in SDP.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "6.1"
  },
  {
    "question": "Users report choppy audio during busy hours on the WAN. What is the likely cause?",
    "options": [
      "Phones use the wrong VLAN name",
      "DNS SRV records are missing",
      "Loss and jitter from congestion",
      "The LDAP sync is delayed"
    ],
    "correct": 2,
    "explanation": "Congestion without QoS causes drops and variable delay; check interface drops, queues and RTP stats (jitter/loss) on phones.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "6.1"
  },
  {
    "question": "Which DSCP markings are recommended for voice media and call signalling?",
    "options": [
      "Default (0) for both types",
      "AF41 for voice, EF for signalling",
      "CS1 for voice, CS7 for signalling",
      "EF voice, CS3 signalling"
    ],
    "correct": 3,
    "explanation": "Cisco QoS baseline uses EF for voice bearer, CS3 for signalling and AF41 for interactive video.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "6.2"
  },
  {
    "question": "Why is QoS on Wi-Fi for voice harder than on wired links?",
    "options": [
      "Shared airtime and WMM queues",
      "Wi-Fi does not carry DSCP at all",
      "Wireless only supports G.729",
      "APs cannot use VLANs"
    ],
    "correct": 0,
    "explanation": "WMM maps DSCP/UP to access categories; contention, retries and roaming add jitter, so design for coverage, CAC and fast roaming.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "6.2"
  },
  {
    "question": "Where is the trust boundary usually set for a Cisco IP phone with a PC behind it?",
    "options": [
      "At the PC's network card",
      "At the IP phone",
      "At the WAN router only",
      "At the internet provider"
    ],
    "correct": 1,
    "explanation": "The access switch extends trust to the phone (via CDP); the phone re-marks PC traffic, so the PC's own markings are not trusted.",
    "difficulty": "Medium",
    "exam": "clcor",
    "domain": "6.3"
  },
  {
    "question": "Which configuration creates a low-latency queue for voice on an IOS XE WAN interface?",
    "options": [
      "police 64000; match any; service-policy input on LAN",
      "class-map match dscp ef; policy-map bandwidth remaining; service-policy input",
      "access-list 101 permit udp; ip route; interface priority",
      "class-map match dscp ef; policy-map class priority; service-policy output"
    ],
    "correct": 3,
    "explanation": "LLQ uses the 'priority' command in the policy-map class (strict and policed), applied outbound with service-policy output.",
    "difficulty": "Hard",
    "exam": "clcor",
    "domain": "6.4"
  }
];
