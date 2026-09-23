window.QUIZ_BANK = [
  {
    "question": "In the CIA triad of information security, what does Confidentiality mean?",
    "options": [
      "Ensuring systems are always available to authorized users",
      "Ensuring only authorized entities can access information, typically with access controls and encryption",
      "Ensuring data is not changed undetected, for example with hashes and signatures",
      "Ensuring network traffic always uses port 443"
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
      "A firewall only scans email attachments for malware; IDS/IPS only performs NAT",
      "Firewall and IDS are the same thing; IPS is just a Cisco brand name",
      "A firewall enforces allow/deny policy; IDS detects anomalies/signatures (alerts) and IPS can block inline",
      "IDS completely replaces AAA (Authentication, Authorization, Accounting)"
    ],
    "correct": 2,
    "explanation": "Firewalls control what passes based on policy. IDS monitors and alerts; IPS sits inline and can drop malicious traffic. They complement AAA rather than replace it.",
    "difficulty": "Medium"
  },
  {
    "question": "In the AAA model used in Cisco networks, what do Authentication, Authorization, and Accounting mean?",
    "options": [
      "Only encryption of site-to-site VPN links",
      "Only load balancing between wireless controllers",
      "Only automatic inventory of LAN switches",
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
      "IPsec only works on IPv6; SSL VPN only on IPv4",
      "SSL VPN always replaces OSPF routing in the core",
      "IPsec and SSL VPN are exactly the same protocol with different names"
    ],
    "correct": 0,
    "explanation": "IPsec (AH/ESP, IKE) protects IP traffic and is classic for site-to-site VPNs. SSL/TLS VPNs encapsulate user sessions and are common for remote access. Both can coexist depending on the use case.",
    "difficulty": "Medium"
  },
  {
    "question": "Which description correctly matches ransomware?",
    "options": [
      "Malware that encrypts the victim’s files and demands payment (ransom) to restore access",
      "A Cisco protocol used to sync NTP clocks",
      "An ACL that allows HTTPS only",
      "A type of multimode fiber optic cable"
    ],
    "correct": 0,
    "explanation": "Ransomware encrypts data and demands ransom. Related malware types include viruses, worms, trojans, spyware, and rootkits. Mitigations: offline backups, patching, MFA, email filtering, and least privilege.",
    "difficulty": "Easy"
  },
  {
    "question": "What is Zero Trust, in terms of network security principles?",
    "options": [
      "Automatically trust any device inside the corporate LAN",
      "Turn off all firewalls because the cloud is already secure",
      "Never trust by default: continuously verify identity, context, and posture before granting least-privilege access",
      "Use only shared passwords on access switches"
    ],
    "correct": 2,
    "explanation": "Zero Trust assumes the internal network is not an automatic trust zone. It requires strong authentication, contextual authorization, microsegmentation, and continuous verification (never trust, always verify).",
    "difficulty": "Medium"
  },
  {
    "question": "In the Cisco security ecosystem, what is the typical role of Cisco ISE (Identity Services Engine) versus a unified XDR/visibility platform such as SecureX (or successors)?",
    "options": [
      "ISE completely replaces BGP routing on the Internet",
      "ISE focuses on identity, access control (802.1X, guest, posture) and policy; SecureX-class platforms aggregate telemetry and orchestrate response across products",
      "SecureX is only a console cable; ISE is only a wallpaper theme",
      "Both exist solely to configure VLANs on unmanaged switches"
    ],
    "correct": 1,
    "explanation": "Cisco ISE is the AAA/NAC policy engine (802.1X, profiling, posture, guest). SecureX-class platforms integrate alerts and workflows across firewall, endpoint, email, and more. They complement each other in Cisco security architecture.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the fundamental difference between hashing and symmetric encryption?",
    "options": [
      "Hashing and encryption are always the same AES algorithm",
      "Encryption only works on Portuguese text; hashing only on English",
      "Hashing always increases data size; encryption always shrinks data to 128 bits",
      "Hashing is typically one-way (integrity/verification); symmetric encryption is reversible with the shared key (confidentiality)"
    ],
    "correct": 3,
    "explanation": "Hashes (SHA-256, etc.) are not reversed to recover the original — they support integrity and verification. Symmetric encryption (AES) encrypts and decrypts with the same key. Asymmetric crypto uses public/private key pairs.",
    "difficulty": "Medium"
  },
  {
    "question": "Why does multi-factor authentication (MFA) significantly reduce account-compromise risk?",
    "options": [
      "Because it removes the need for operating-system security patches",
      "Because it makes Wi-Fi automatically WPA3 with no configuration",
      "Because it replaces perimeter firewalls in every scenario",
      "Because it requires more than just a password (e.g., OTP app, token, biometrics), making stolen credentials harder to abuse"
    ],
    "correct": 3,
    "explanation": "MFA combines factors (knowledge, possession, inherence). Even with a leaked password, the attacker still needs the second factor. It is essential in Zero Trust and for privileged Cisco access — and it does not replace patching or firewalls.",
    "difficulty": "Easy"
  },
  {
    "question": "What is defense in depth in a network environment?",
    "options": [
      "Using one complex password for every device",
      "Relying only on endpoint antivirus and removing segmentation",
      "Applying multiple layers of controls (perimeter, network, identity, endpoint, data) so one failure does not compromise everything",
      "Disabling logs to improve performance"
    ],
    "correct": 2,
    "explanation": "Defense in depth stacks complementary controls: firewalls, segmentation, AAA/MFA, EDR, encryption, and monitoring. It reduces the impact of any single failure.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main cybersecurity benefit of network segmentation (e.g., VLANs, firewalls between zones)?",
    "options": [
      "Enlarging the broadcast domain so malware spreads faster",
      "Removing the need to update firmware",
      "Letting guests share the same management VLAN as routers",
      "Limiting lateral movement: a compromise in one zone does not automatically reach critical servers in another"
    ],
    "correct": 3,
    "explanation": "Segmentation (and microsegmentation) restricts east-west traffic. It isolates IoT/guest from management and data centers, aligned with Zero Trust and least privilege.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary purpose of a SIEM (Security Information and Event Management) platform?",
    "options": [
      "Replacing every endpoint antivirus agent with a single packet broker on the core switch",
      "Issuing public TLS certificates for internal servers without a private CA",
      "Collecting and correlating logs/events from many sources, detecting suspicious patterns, and supporting alerting and investigation",
      "Guaranteeing zero false positives by blocking all outbound DNS queries"
    ],
    "correct": 2,
    "explanation": "A SIEM aggregates logs and security events (firewalls, endpoints, identity, cloud, etc.), normalizes and correlates them, and helps analysts detect, alert on, and investigate incidents. It does not replace AV with a packet broker, does not act as a public CA for TLS, and cannot promise zero false positives by blindly blocking DNS.",
    "difficulty": "Easy"
  },
  {
    "question": "In cybersecurity, what is the MITRE ATT&CK framework mainly used for?",
    "options": [
      "A vendor-specific CLI syntax guide for configuring ASA access lists",
      "A knowledge base of adversary tactics and techniques (and related procedures) used to map detections, plan defenses, and communicate about threats in a common language",
      "A mandatory encryption algorithm that replaces AES in all TLS 1.3 handshakes",
      "A physical rack layout standard for data-center cabling density"
    ],
    "correct": 1,
    "explanation": "MITRE ATT&CK catalogs real-world adversary tactics (the “why”) and techniques (the “how”), often with procedure examples. Defenders use it to gap-analyze coverage, write detections, and discuss incidents consistently. It is not ASA CLI documentation, not a cipher that replaces AES, and not a cabling standard.",
    "difficulty": "Medium"
  },
  {
    "question": "What does a Web Application Firewall (WAF) primarily protect against?",
    "options": [
      "Application-layer attacks against HTTP/HTTPS apps (for example SQLi, XSS, and abuse of vulnerable URLs or APIs), by inspecting and filtering web requests",
      "Layer 1 cable cuts between the access switch and the end user PC",
      "Exhaustion of OSPF LSDB memory on core routers caused by too many Type 5 LSAs",
      "Battery failure in a UPS that powers the wireless controllers"
    ],
    "correct": 0,
    "explanation": "A WAF sits in front of web applications and inspects HTTP/S traffic to block or challenge common app-layer attacks such as SQL injection, cross-site scripting, and known bad request patterns. It does not fix physical cable cuts, OSPF LSDB sizing, or UPS batteries.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the primary purpose of DNSSEC?",
    "options": [
      "Encrypting each DNS query so the recursive resolver never sees the name being looked up (that is DNS over TLS or DNS over HTTPS, not DNSSEC)",
      "Replacing SPF so mail servers no longer need to check which hosts may send for a domain",
      "Digitally signing DNS data so validating resolvers can detect forged or tampered answers (authenticity and integrity), without hiding the query itself",
      "Automatically blocking every malware download on the endpoint"
    ],
    "correct": 2,
    "explanation": "DNSSEC adds digital signatures (RRSIG and DNSKEY records, chained with DS records in the parent) so a validating resolver can confirm that the data came from the authoritative zone and was not modified. Query confidentiality comes from DoT or DoH, not from DNSSEC. It does not replace email authentication or endpoint protection.",
    "difficulty": "Medium"
  },
  {
    "question": "Working together, what do SPF, DKIM, and DMARC do for email security?",
    "options": [
      "They encrypt the message body end to end so only the recipient can read it (that is S/MIME or PGP)",
      "SPF lists which servers may send for a domain, DKIM cryptographically signs the message, and DMARC tells receivers what to do when those checks fail and how to report — reducing spoofing of the visible From domain",
      "They scan attachments for ransomware inside the MTA using only TCP port 25",
      "They replace TLS on SMTP submission (port 587)"
    ],
    "correct": 1,
    "explanation": "SPF authorizes sending hosts in a DNS TXT record. DKIM signs selected headers and the body with a domain key published in DNS. DMARC requires the visible From domain to align with SPF and/or DKIM and publishes a policy (none, quarantine, or reject) plus reporting. Together they fight domain spoofing; they do not encrypt the message and they do not replace SMTP TLS.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main difference between EDR and XDR?",
    "options": [
      "EDR only encrypts disks; XDR only configures VLANs",
      "They are the same product; XDR is just the Cisco name for the same antivirus signature file",
      "EDR replaces the firewall; XDR replaces DNS",
      "EDR focuses on endpoint telemetry and response (processes, files, and host behavior); XDR correlates that with other sources such as network, email, identity, and cloud for a wider detection and response picture"
    ],
    "correct": 3,
    "explanation": "EDR (Endpoint Detection and Response) collects telemetry and supports response on endpoints. XDR (Extended Detection and Response) extends detection and response across control points, correlating endpoint data with network, email, cloud, and identity. Cisco XDR is an example of that broader model. Neither one, by itself, replaces the firewall or disk encryption.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a SOAR platform mainly used for?",
    "options": [
      "Security Orchestration, Automation, and Response: playbooks that automate and coordinate response steps across tools (tickets, firewall blocks, enrichment) so analysts handle repetitive incident work faster",
      "A routing protocol that replaces OSPF inside the data center",
      "A physical safe for storing firewall passwords",
      "A standard that forces every packet to be mirrored to a single SPAN port"
    ],
    "correct": 0,
    "explanation": "SOAR (orchestration, automation, and response) runs playbooks: enrich alerts, open cases, isolate hosts, block indicators, and notify teams. It complements a SIEM, which detects and stores events, rather than replacing routing or SPAN.",
    "difficulty": "Easy"
  },
  {
    "question": "In a security operations team, what is threat hunting?",
    "options": [
      "Waiting only for high-severity SIEM alerts and closing them without looking for related activity",
      "Turning logging off so an attacker cannot tell they were detected",
      "A proactive search through telemetry for adversary activity that automated detections may have missed, often guided by a hypothesis and by frameworks such as MITRE ATT&CK",
      "Replacing every preventive control (firewall, MFA, patching) with a weekly manual log review"
    ],
    "correct": 2,
    "explanation": "Threat hunting assumes some intrusions evade alerts. Hunters form a hypothesis (for example a technique from ATT&CK), query endpoint, network, or identity data, and turn findings into new detections. It complements SIEM and EDR; it does not replace prevention and it does not mean ignoring alerts.",
    "difficulty": "Medium"
  }
];
