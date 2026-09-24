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
  }
];
