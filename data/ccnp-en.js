window.QUIZ_BANK = [
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
  },
  {
    "question": "Look at this show ip bgp. Why is 10.1.1.2 the best path for 172.16.0.0 and not 10.1.1.3?",
    "options": [
      "Longer AS-path wins",
      "Local Preference 200 > 150 (after Weight, which is 0 on both)",
      "Higher MED wins",
      "Origin e is preferred over i"
    ],
    "correct": 1,
    "explanation": "Cisco best path: Weight (higher, local) → Local Pref (higher) → locally originated → AS-path (shorter) → origin (i < e < ?) → MED (lower)... Weight ties at 0; LocPrf 200 beats 150. Both paths are iBGP (i).",
    "difficulty": "Hard",
    "cli": "R1# show ip bgp\nBGP table version is 84, local router ID is 192.0.2.1\nStatus codes: s suppressed, d damped, h history, * valid, > best, i - internal\nOrigin codes: i - IGP, e - EGP, ? - incomplete\n\n   Network          Next Hop            Metric LocPrf Weight Path\n*> 10.0.0.0         203.0.113.2              0             0 65001 i\n*  10.0.0.0         198.51.100.2             0             0 65002 65001 i\n*>i172.16.0.0       10.1.1.2                 0    200      0 65010 i\n* i172.16.0.0       10.1.1.3                 0    150      0 65010 i"
  },
  {
    "question": "Look at this show ip ospf database. LSA 10.2.0.0 under Summary Net Link States is which type and who originates it?",
    "options": [
      "Type 1 Router LSA from 1.1.1.1",
      "Type 3 summary, originated by ABR 2.2.2.2 to advertise a network from another area",
      "Type 5 external from 9.9.9.9",
      "Type 4 ASBR-summary"
    ],
    "correct": 1,
    "explanation": "Summary Net Link States = Type 3, built by ABRs. Type-5 AS External are externals (here 8.8.8.0 from 9.9.9.9). Router Link States = Type 1. Type 4 would describe an ASBR, not network 10.2.0.0.",
    "difficulty": "Medium",
    "cli": "R1# show ip ospf database\n            OSPF Router with ID (1.1.1.1) (Process ID 1)\n\n                Router Link States (Area 0)\nLink ID         ADV Router      Age         Seq#       Checksum Link count\n1.1.1.1         1.1.1.1         412         0x8000001a 0x00A1B2 2\n2.2.2.2         2.2.2.2         388         0x80000018 0x00C3D4 3\n\n                Summary Net Link States (Area 0)\nLink ID         ADV Router      Age         Seq#       Checksum\n10.2.0.0        2.2.2.2         201         0x80000005 0x001122\n\n                Type-5 AS External Link States\nLink ID         ADV Router      Age         Seq#       Checksum Tag\n8.8.8.0         9.9.9.9         155         0x80000002 0x00ABCD 0"
  },
  {
    "question": "Look at this show ip eigrp topology. Is the path via 10.1.3.2 a feasible successor?",
    "options": [
      "No, because 3328 > 3072 (FD)",
      "Yes, because advertised distance 2816 is less than the successor FD (3072)",
      "No, because it is Active",
      "Yes, because reported metric 3328 is less than 2816"
    ],
    "correct": 1,
    "explanation": "Successor: via 10.1.1.2, FD=3072 (feasible distance = metric to the destination). Candidate via 10.1.3.2: (reported AD=2816, total FD=3328). Feasibility: AD 2816 < successor FD 3072 → it is an FS, but it is not installed (1 successor; variance 1). P = Passive, DUAL is stable.",
    "difficulty": "Hard",
    "cli": "R1# show ip eigrp topology\nEIGRP-IPv4 Topology Table for AS(100)/ID(1.1.1.1)\nCodes: P - Passive, A - Active, U - Update, Q - Query, R - Reply,\n       r - reply Status, s - sia Status\n\nP 10.2.2.0/24, 1 successors, FD is 3072\n        via 10.1.1.2 (3072/2816), GigabitEthernet0/0\n        via 10.1.3.2 (3328/2816), GigabitEthernet0/1"
  },
  {
    "question": "Look at this show bfd neighbors. What do State Up and RH/RS Up mean?",
    "options": [
      "The IGP is down but BFD lingered",
      "The BFD session is up and forwarding to those next hops is considered alive",
      "BFD runs only for IPv6",
      "LD/RD 1/1 means a loop was detected"
    ],
    "correct": 1,
    "explanation": "BFD Up lets OSPF/EIGRP/BGP react in milliseconds without waiting for dead timers. LD/RD are local/remote discriminators. Int is the session interface. Without BFD, Gi0/0 would use 10 s hellos / 40 s dead on OSPF broadcast.",
    "difficulty": "Medium",
    "cli": "R1# show bfd neighbors\nIPv4 Sessions\nNeighAddr                              LD/RD         RH/RS     State     Int\n10.1.1.2                             1/1             Up        Up        Gi0/0\n10.1.2.2                             2/5             Up        Up        Gi0/1"
  },
  {
    "question": "Look at this show ip vrf. What can you conclude?",
    "options": [
      "There is a single shared forwarding table",
      "Two VRF-Lite instances (CUST_A and CUST_B) with distinct RDs and non-overlapping interfaces",
      "MPLS TE is up on Lo10",
      "Both VRFs must use the same RD"
    ],
    "correct": 1,
    "explanation": "Each VRF has its own RIB/FIB. RD 65000:10 vs 65000:20 distinguishes prefixes if they are exported as VPNv4; in pure VRF-Lite the RD still identifies the VRF. Gi0/0 cannot belong to both VRFs at once.",
    "difficulty": "Medium",
    "cli": "R1# show ip vrf\n  Name                             Default RD          Protocols   Interfaces\n  CUST_A                           65000:10            ipv4        Gi0/0\n                                                               Lo10\n  CUST_B                           65000:20            ipv4        Gi0/1\n                                                               Lo20"
  },
  {
    "question": "Look at this show mpls forwarding-table. What does Pop Label mean for 10.1.1.0/24?",
    "options": [
      "The prefix is missing from the LFIB",
      "PHP: this router (penultimate) pops the transport label before handing the packet to the last hop",
      "The packet is dropped",
      "TE is mandatory"
    ],
    "correct": 1,
    "explanation": "Penultimate Hop Popping saves the egress PE from inspecting a label plus IP. Outgoing 22 = swap to label 22. No Label = native IP forwarding (no MPLS for that prefix).",
    "difficulty": "Medium",
    "cli": "R1# show mpls forwarding-table\nLocal      Outgoing   Prefix           Bytes Label   Outgoing   Next Hop\nLabel      Label      or Tunnel Id     Switched      interface\n16         Pop Label  10.1.1.0/24      0             Gi0/0      192.168.1.1\n17         22         10.2.2.0/24      18244         Gi0/1      192.168.2.1\n18         22         10.3.3.0/24      0             Gi0/1      192.168.2.1\n19         No Label   10.9.9.1/32      0             Gi0/0      192.168.1.1"
  },
  {
    "question": "Look at this show ip bgp summary. Which neighbor is not Established, and why is Idle inferred?",
    "options": [
      "10.1.1.2, because PfxRcd is 6",
      "198.51.100.2, State Idle and Up/Down never — TCP/BGP never established (ACL, AS, reachability, or missing neighbor)",
      "203.0.113.2, because AS 65001 is eBGP",
      "All of them are Established"
    ],
    "correct": 1,
    "explanation": "The State/PfxRcd column shows a prefix count if Established, or an FSM state (Idle, Active, OpenSent...). Idle + never = no session. 10.1.1.2 is iBGP (AS 65000=local) with 6 prefixes; 203.0.113.2 is eBGP with 4.",
    "difficulty": "Medium",
    "cli": "R1# show ip bgp summary\nBGP router identifier 192.0.2.1, local AS number 65000\nBGP table version is 84, main routing table version 84\n10 network entries using 1440 bytes of memory\n\nNeighbor        V         AS MsgRcvd MsgSent   TblVer  InQ OutQ Up/Down  State/PfxRcd\n10.1.1.2        4      65000    1204    1198       84    0    0 00:18:22        6\n203.0.113.2     4      65001     880     872       84    0    0 00:14:01        4\n198.51.100.2    4      65002       0       0        0    0    0 never    Idle"
  },
  {
    "question": "Look at this show ip pim rp mapping. How was the RP for 239.1.0.0/16 elected?",
    "options": [
      "BSR",
      "Auto-RP",
      "Anycast RP MSDP only",
      "IGMPv2 querier"
    ],
    "correct": 1,
    "explanation": "Info source elected via Auto-RP for 239.1.0.0/16 (RP 10.9.9.9). Group 224.0.0.0/4 uses BSR with RP 10.8.8.8. Auto-RP uses 224.0.1.39/40; BSR uses the BSR candidate in PIM. A static RP would show 'static'.",
    "difficulty": "Medium",
    "cli": "R1# show ip pim rp mapping\nPIM Group-to-RP Mappings\n\nGroup(s) 239.1.0.0/16\n  RP 10.9.9.9 (?), v2\n    Info source: 10.9.9.9 (?), elected via Auto-RP\n         Uptime: 02:14:11, expires: 00:02:44\nGroup(s) 224.0.0.0/4\n  RP 10.8.8.8 (?), v2\n    Info source: 10.8.8.8 (?), elected via BSR\n         Uptime: 01:02:09, expires: 00:01:58"
  },
  {
    "question": "Who originates OSPFv2 Type 2 (Network) LSAs and what do they describe?",
    "options": [
      "Every router, its P2P links",
      "The DR on a multiaccess segment: the list of routers on the segment and the mask",
      "The ASBR, external prefixes",
      "The ABR, a Type-7 default"
    ],
    "correct": 1,
    "explanation": "Type 2 exists only where there is a DR (broadcast/NBMA). The Link ID is the DR interface IP. Point-to-point has no Type 2. Type 1 describes the router's own links.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the Type 4 (ASBR-summary) LSA for?",
    "options": [
      "To advertise an intra-area prefix",
      "To let routers in other areas know how to reach an ASBR (ASBR Router ID, originated by the ABR)",
      "To replace Type 5 inside an NSSA",
      "To describe the DR"
    ],
    "correct": 1,
    "explanation": "Type 5 carries the external prefix, but the forwarding next hop may be an ASBR in another area. Type 4 gives the cost to that ASBR. NSSAs do not take Type 5: they use Type 7, translated to 5 at the ABR.",
    "difficulty": "Hard"
  },
  {
    "question": "What extra LSAs does an OSPF totally stubby (no-summary) area block versus a plain stub?",
    "options": [
      "Type 1 only",
      "Besides Type 4/5, also Type 3 summaries; the ABR injects only a Type 3 default",
      "Hellos only",
      "Mandatory Type 2 LSAs"
    ],
    "correct": 1,
    "explanation": "Stub: no Type 5 (and no Type 4). Totally stubby: no specific Type 3 either, only a default. NSSA: allows redistributed Type 7. Totally NSSA: NSSA plus no-summary. The backbone (area 0) is never stub.",
    "difficulty": "Hard"
  },
  {
    "question": "When do you use an OSPF virtual-link?",
    "options": [
      "To encrypt Type-5 LSAs",
      "To attach a discontiguous area to area 0 (or repair a split area 0) through a non-stub transit area",
      "To replace BFD",
      "Only in NSSAs"
    ],
    "correct": 1,
    "explanation": "Every area must touch the backbone. A virtual-link is a logical tunnel between ABRs across a regular area. It cannot cross stub/NSSA. The clean fix is to redesign so area 0 is contiguous.",
    "difficulty": "Hard"
  },
  {
    "question": "What is Stuck-in-Active (SIA) in EIGRP?",
    "options": [
      "A successor with FD 0",
      "The router stayed Active waiting for Query replies and the SIA timer expired with no reply from a neighbor",
      "The normal Passive state",
      "An OSPF 2-Way adjacency"
    ],
    "correct": 1,
    "explanation": "With no FS, DUAL sends Queries. If a neighbor never replies (bad WAN, MTU, CPU), the router declares SIA and resets that adjacency. Mitigation: stub, summarization, SIA timer, stable links.",
    "difficulty": "Hard"
  },
  {
    "question": "What does an EIGRP router configured as stub connected summary do?",
    "options": [
      "It becomes an OSPF ASBR",
      "It advertises only connected and summary and is not queried for destinations beyond the stub (reduces SIA)",
      "It disables DUAL",
      "It forces variance 128"
    ],
    "correct": 1,
    "explanation": "EIGRP stub is for branches: the hub does not send Queries to the stub asking about core networks. receive-only/static/redistributed are variants. It is not the same as an OSPF stub.",
    "difficulty": "Medium"
  },
  {
    "question": "EIGRP K-values must match between neighbors. Which Ks does the classic default use?",
    "options": [
      "K1 through K5 all set to 1",
      "K1=1 (bandwidth) and K3=1 (delay); K2=K4=K5=0",
      "K5=1 only",
      "K4=1 for MTU"
    ],
    "correct": 1,
    "explanation": "Classic metric ≈ 256 * (10^7/min_bw + sum_delay). K2 (load) and K4/K5 (reliability) are unused by default. Wide metrics (named mode) use 64 bits. K mismatch = no adjacency.",
    "difficulty": "Medium"
  },
  {
    "question": "In BGP, a lower MED (metric) means what, and where is it compared?",
    "options": [
      "A worse path; it is always compared across different ASes with no exception",
      "A better path; it is compared among routes from the same neighboring AS (unless bgp always-compare-med)",
      "It replaces Weight",
      "It is not in best path"
    ],
    "correct": 1,
    "explanation": "MED is optional non-transitive. Cisco by default compares MED only among paths from the same neighbor AS. always-compare-med compares across ASes (and can loop if inconsistent). A missing MED is treated as 0 by default (bgp bestpath med missing-as-worst flips that).",
    "difficulty": "Hard"
  },
  {
    "question": "What is BGP AS-path prepend for?",
    "options": [
      "To shorten the path so it always wins",
      "To advertise the prefix with your AS repeated, making the path longer for neighbors and steering inbound traffic away",
      "To erase the AS-path",
      "To force an iBGP full mesh"
    ],
    "correct": 1,
    "explanation": "Prepend is cheap inbound traffic engineering. Local Pref/Weight control outbound. Communities (no-export, local-AS) scale more cleanly. It does not break the AS; it only lengthens the path.",
    "difficulty": "Medium"
  },
  {
    "question": "Why configure neighbor x.x.x.x next-hop-self on iBGP at a PE/edge?",
    "options": [
      "To encrypt UPDATEs",
      "So the next hop of eBGP prefixes passed into iBGP is an address reachable in the AS IGP (the speaker itself)",
      "To disable the RR",
      "To set MED to 0"
    ],
    "correct": 1,
    "explanation": "eBGP leaves the next hop as the external peer, often unresolvable in the core. next-hop-self rewrites it to the iBGP peering address (loopback). On an RR it applies toward clients. Alternative: advertise the external next-hop /32 in the IGP (usually undesirable).",
    "difficulty": "Medium"
  },
  {
    "question": "What does the well-known community no-export mean?",
    "options": [
      "Do not advertise the prefix to any iBGP peer",
      "Do not advertise the prefix outside the AS (nor from a confederation to 'real' eBGP)",
      "Always prefer this path",
      "Same as Weight 65535"
    ],
    "correct": 1,
    "explanation": "no-export: stay inside the AS. no-advertise: do not advertise to any peer. local-AS: do not leave the confederation sub-AS. internet (default) may go to everyone. Communities are the ISP policy hook.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between a BGP route reflector and a confederation?",
    "options": [
      "There is no difference",
      "An RR relaxes iBGP split-horizon inside a cluster (clients/non-clients); a confederation splits the AS into sub-ASes with special eBGP between them",
      "Confederations work only with OSPF",
      "An RR requires MPLS"
    ],
    "correct": 1,
    "explanation": "Both avoid a full iBGP mesh. RR is simpler (cluster-id, originator-id against loops). A confederation (private 64512-65534) isolates policy per sub-AS and treats inter-sub-AS like eBGP for next-hop/MED. They can be combined.",
    "difficulty": "Hard"
  },
  {
    "question": "What is eBGP multihop?",
    "options": [
      "iBGP with TTL 1",
      "Allowing an eBGP session between addresses that are not directly adjacent by raising TTL (default eBGP TTL is 1)",
      "A type of LSA",
      "MPLS PHP"
    ],
    "correct": 1,
    "explanation": "Typical: peering between loopbacks across a shared IGP/connected network, or peering several hops away. disable-connected-check covers loopbacks on the same link. Risk: a large TTL widens the attack surface; BFD is still recommended.",
    "difficulty": "Medium"
  },
  {
    "question": "In an MPLS L3VPN, where does PHP (penultimate hop popping) happen?",
    "options": [
      "On the source CE",
      "On the router immediately before the egress PE, which pops the transport label (LDP/SR)",
      "Only on the BGP RR",
      "On the IPsec client"
    ],
    "correct": 1,
    "explanation": "The transport LSP is LDP (or SR). The penultimate hop pops so the egress PE looks only at the VPN label (or IP, with PHP vs explicit-null variations). explicit-null preserves EXP/TTL to the egress.",
    "difficulty": "Medium"
  },
  {
    "question": "LDP versus RSVP-TE in MPLS: which contrast is correct?",
    "options": [
      "LDP builds LSPs from the IGP RIB, hop by hop; RSVP-TE signals tunnels with bandwidth/path constraints",
      "RSVP-TE replaces the IGP",
      "LDP always requires TE",
      "Both use only UDP 179"
    ],
    "correct": 0,
    "explanation": "LDP rides beside the IGP (UDP 646 hello, TCP 646 session). RSVP-TE (and SR-TE) is for engineering: bandwidth, affinity, fast reroute. Many cores mix LDP at the edge with TE in the backbone, or move to Segment Routing.",
    "difficulty": "Medium"
  },
  {
    "question": "BFD echo mode versus asynchronous: what is the idea?",
    "options": [
      "Echo does not exist on Cisco",
      "Async: both peers send control packets; Echo: the peer loops the initiator's echo packet on the forwarding path",
      "Echo fully replaces the IGP",
      "Async runs only for IPv6"
    ],
    "correct": 1,
    "explanation": "Echo tests the neighbor data plane with less CPU on the peer. Not all hardware/IOS supports echo. 50x3 ms timers are common on LAN; WAN uses more conservative values. BFD is tied to IGP/BGP with fall-over bfd / bfd all-interfaces.",
    "difficulty": "Hard"
  },
  {
    "question": "In PBR, what is the difference between set ip next-hop and set interface?",
    "options": [
      "There is no difference",
      "set ip next-hop uses an IP (falling back to normal routing if unreachable, unless default); set interface forces that outbound iface (dangerous on multiaccess without ARP)",
      "set interface works only with BGP",
      "set ip next-hop ignores the route-map ACL"
    ],
    "correct": 1,
    "explanation": "PBR (ip policy route-map) matches ACLs/length/DSCP and steers before the RIB. set ip next-hop verify-availability plus tracking/BFD avoids black holes. set ip default next-hop applies only when the RIB has no route (except default).",
    "difficulty": "Medium"
  },
  {
    "question": "In Nexus vPC, what are the peer-link and peer-keepalive for?",
    "options": [
      "They are the same cable",
      "Peer-link syncs state (MCS, LACP, IGMP, BPDUs) between the two peers; keepalive (separate, often mgmt) detects dual-active if the peer-link fails",
      "Keepalive forwards server data-plane traffic",
      "Peer-link replaces IGP routing"
    ],
    "correct": 1,
    "explanation": "Servers see one EtherChannel toward two chassis. Without keepalive, a peer-link failure can split-brain (both active). Orphan ports attach to only one peer. STP is handled specially on vPC.",
    "difficulty": "Hard"
  },
  {
    "question": "What is an orphan port in a vPC?",
    "options": [
      "An LACP port bundled on both peers",
      "A port that attaches a device to only one of the vPC switches, not to the pair",
      "The peer-keepalive",
      "The peer-link native VLAN"
    ],
    "correct": 1,
    "explanation": "If the peer hosting the orphan fails, the device loses connectivity even if the other side's vPC is up. Mitigation: dual-attach (vPC) or orphan-port suspend. Peer-gateway / orphan-port may be needed for routed traffic.",
    "difficulty": "Hard"
  },
  {
    "question": "In LISP as used by SD-Access, what does the Map-Server/Map-Resolver do?",
    "options": [
      "It encapsulates VXLAN on the data plane of every edge",
      "Control plane: it stores EID→RLOC mappings and answers Map-Requests from ITR/ETR (edges)",
      "It replaces ISE",
      "It is vManage"
    ],
    "correct": 1,
    "explanation": "The ITR asks 'where is this EID?'; the MS/MR (control-plane node) replies with the ETR's RLOC. The data plane is VXLAN (UDP 4789) between RLOCs. Border nodes connect the fabric to the rest of the network.",
    "difficulty": "Medium"
  },
  {
    "question": "Which UDP port does VXLAN use in the data plane?",
    "options": [
      "4789",
      "5246",
      "179",
      "646"
    ],
    "correct": 0,
    "explanation": "VXLAN uses UDP 4789 (IANA). CAPWAP uses 5246/5247. BGP is 179. LDP is 646. The 24-bit VNI identifies the segment in the VXLAN header; EVPN (BGP AF) distributes MAC/IP (RT-2) and prefixes (RT-5).",
    "difficulty": "Medium"
  },
  {
    "question": "Inline SGT versus SXP in TrustSec/ISE: what is the difference?",
    "options": [
      "SXP encapsulates VXLAN; inline uses RADIUS",
      "Inline carries the tag in CMD/Cisco Meta Data hop by hop; SXP (TCP 64999) advertises IP-SGT out of band where the media cannot carry the tag",
      "Both require MPLS",
      "Inline exists only on Wi-Fi"
    ],
    "correct": 1,
    "explanation": "ISE classifies the user and pushes the SGT to the NAD (802.1X). Capable switches forward the tag. SXP fills gaps (WAN, third-party). Enforcement is SGACL at the destination. pxGrid shares context with firewalls.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the NETCONF candidate datastore for?",
    "options": [
      "To replace running immediately with no lock",
      "To edit a proposed config (edit-config) and then atomically commit to running, with lock and rollback",
      "To read SNMP MIBs only",
      "To store IOS.bin"
    ],
    "correct": 1,
    "explanation": "candidate plus commit lets you validate and apply all-or-nothing (confirmed-commit with automatic rollback). running-only devices edit live. RESTCONF uses the same YANG model over HTTP. Confirmed commit is the antidote to AAA/ACL lockouts.",
    "difficulty": "Hard"
  },
  {
    "question": "DMVPN Phase 1 versus Phase 3: which contrast is correct?",
    "options": [
      "Phase 1 already has direct spoke-to-spoke",
      "Phase 1 is hub-and-spoke (spokes do not build tunnels to each other); Phase 3 uses NHRP redirect/shortcut for spoke-to-spoke",
      "Phase 3 disables NHRP",
      "Phase 1 requires GETVPN"
    ],
    "correct": 1,
    "explanation": "Phase 2 allows spoke-to-spoke but needs full routing tables on spokes (hub summaries break it). Phase 3: the hub sends NHRP redirect, spokes install shortcuts; hub summaries work. IPsec profile + mGRE + NHRP are common to all phases.",
    "difficulty": "Medium"
  },
  {
    "question": "In GETVPN, what are the Key Server (KS) and Group Member (GM) roles?",
    "options": [
      "KS forwards the data plane; GM only runs the IGP",
      "KS distributes group SAs (GDOI/IKEv1) to GMs; GMs encrypt the original traffic while preserving the IP header (tunnel-less) on the private WAN",
      "GM is the BGP RR",
      "KS is a DMVPN spoke"
    ],
    "correct": 1,
    "explanation": "GETVPN (GDOI) fits private/MPLS WANs where the original IP header must remain for routing. TBAR (time-based anti-replay) and COOP KS (redundancy) are typical. It does not replace DMVPN on the public Internet (no group tunnel/NAT traversal).",
    "difficulty": "Hard"
  },
  {
    "question": "CoPP versus CPPr (Control Plane Protection): what is the nuance?",
    "options": [
      "They are the same feature with no difference",
      "CoPP applies a policy-map to the logical control-plane interface (aggregate); CPPr (host/transit/cef-exception) further splits CEF for extra granularity on classic IOS",
      "CPPr replaces the data plane",
      "CoPP exists only on NX-OS"
    ],
    "correct": 1,
    "explanation": "Both protect CPU from floods (TTL expiry, ICMP, SSH). Start from a Cisco-recommended policy and tune. Undercopping breaks BGP/OSPF; over-permitting lets DoS in. NX-OS uses copp profile.",
    "difficulty": "Hard"
  },
  {
    "question": "uRPF strict versus loose: what is the difference?",
    "options": [
      "Loose requires the source to match the ingress interface; strict only requires the prefix in the FIB",
      "Strict: the source reverse path must point at the ingress interface; loose: the source just has to exist in the FIB (any iface), useful with asymmetry",
      "Strict is IPv6 only",
      "Loose always drops the default"
    ],
    "correct": 1,
    "explanation": "ip verify unicast source reachable-via rx = strict; reachable-via any = loose. Strict is strong anti-spoofing at access; loose at the edge with asymmetric routing. allow-default and an exception ACL tune behavior.",
    "difficulty": "Medium"
  },
  {
    "question": "On a PIM-SM multiaccess segment, what is the Designated Router (DR) for?",
    "options": [
      "Electing the STP root",
      "Sending Registers to the RP (sources) and Join/Prune on behalf of local receivers (IGMP)",
      "Replacing BSR",
      "Encrypting multicast"
    ],
    "correct": 1,
    "explanation": "The PIM DR (highest IP, or priority) is the only router that registers sources and sends joins toward the RP. Do not confuse it with the OSPF DR. Assert elects the forwarder when several routers have the same group on a LAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the contrast between Auto-RP and BSR for RP discovery?",
    "options": [
      "BSR is Cisco-only; Auto-RP is IETF",
      "Auto-RP (Cisco, 224.0.1.39/40) advertises RPs via a mapping agent; BSR (RFC, PIM messages) elects a Bootstrap Router that floods the RP-set",
      "Both require MSDP",
      "Auto-RP works only with PIM-DM"
    ],
    "correct": 1,
    "explanation": "Auto-RP needs sparse-dense or auto-rp listener so groups 39/40 can flow. BSR is the standard and rides native PIM-SM. Anycast-RP (MSDP or RFC 4610) gives geographic RP redundancy.",
    "difficulty": "Medium"
  },
  {
    "question": "What is SPT switchover in PIM-SM?",
    "options": [
      "Switching from PIM-DM to BIDIR",
      "After the first packet arrives on the shared tree (*,G) toward the RP, the last-hop DR may send an (S,G) Join toward the source, taking the RP off the path",
      "Disabling IGMP snooping",
      "Electing a new BSR"
    ],
    "correct": 1,
    "explanation": "Cisco defaults to immediate switchover (spt-threshold 0). spt-threshold infinity keeps traffic on the shared tree (useful for brief sources). SSM (IGMPv3, 232/8) goes (S,G) with no RP.",
    "difficulty": "Hard"
  },
  {
    "question": "IS-IS in ENCOR campus/WAN: what do L1 versus L2 mean?",
    "options": [
      "L1 is eBGP; L2 is iBGP",
      "L1 is intra-area (station); L2 is the backbone between areas; L1/L2 sits at the border and leaks a default",
      "L2 runs IPv6 only",
      "L1 replaces BFD"
    ],
    "correct": 1,
    "explanation": "IS-IS has no OSPF-style area 0: the backbone is the contiguous set of L2 routers. NET is area + SysID + NSEL. Wide metric is required on modern networks. IS-IS is a common SR/LDP base in SPs.",
    "difficulty": "Hard"
  },
  {
    "question": "What do OSPFv3 Address Families (AF) on IOS-XE allow?",
    "options": [
      "Only a classic IPv6 process with no IPv4",
      "One OSPFv3 process carrying IPv6 and/or IPv4 (AFs), with adjacencies still on link-local",
      "Replacing BGP VPNv4",
      "Type-8 LSAs only"
    ],
    "correct": 1,
    "explanation": "Classic OSPFv3 was IPv6-only. AF (RFC 5838) carries IPv4 over OSPFv3. Adjacencies remain IPv6 link-local; router-id is still a 32-bit IPv4 value. Instance ID separates AFs.",
    "difficulty": "Medium"
  },
  {
    "question": "What is IPv6 RA Guard at the access layer for?",
    "options": [
      "Blocking DHCPv4",
      "Stopping a malicious host from sending Router Advertisements and impersonating an IPv6 gateway",
      "Replacing NDP",
      "Enabling IS-IS"
    ],
    "correct": 1,
    "explanation": "RA Guard (plus DHCPv6 Guard and ND inspection) is First-Hop Security. Access ports: host-mode (RAs dropped). Uplinks to routers: router-mode. Without it, a fake RA steals IPv6 traffic.",
    "difficulty": "Medium"
  },
  {
    "question": "What does IP Source Guard (ip verify source) rely on?",
    "options": [
      "The BGP table",
      "The DHCP snooping binding table (plus statics) to allow only the IP/MAC learned on that port",
      "NAT overload",
      "VTP"
    ],
    "correct": 1,
    "explanation": "IPSG filters on the data plane what DAI filters in ARP. Port-security covers MAC; together they close edge spoofing. It needs snooping enabled and trusted ports toward the DHCP server.",
    "difficulty": "Medium"
  },
  {
    "question": "In an SD-Access fabric, what is the border node versus the edge node?",
    "options": [
      "Border is Wi-Fi only; edge is MPLS only",
      "Edge connects endpoints (LISP ETR/ITR, anycast SVI); border connects the fabric to the outside world (fusion, DC, WAN, Internet)",
      "Both are vManage",
      "Edge is ISE"
    ],
    "correct": 1,
    "explanation": "Control-plane node = LISP MS/MR. Edge = access. Border = exit. WLC/FN attaches APs. ISE provides SGTs. Underlay is IGP/IS-IS plus VXLAN; overlay is VNs (macro-segmentation) plus SGTs (micro).",
    "difficulty": "Medium"
  },
  {
    "question": "In Cisco SD-WAN, what is a TLOC and who distributes OMP routes?",
    "options": [
      "A TLOC is a VLAN tag; OMP runs on vBond only",
      "A TLOC (Transport Locator) identifies a WAN Edge's attachment to a transport; vSmart distributes OMP (routes, TLOCs, policies) to the edges",
      "OMP replaces DTLS",
      "A TLOC is the vManage GUI"
    ],
    "correct": 1,
    "explanation": "vBond does initial orchestration/STUN. vManage is config/analytics. vSmart is the OMP control plane. WAN Edge (vEdge/cEdge) builds IPsec/GRE tunnels per TLOC (color, encaps, system-ip). App-aware routing uses per-tunnel SLA.",
    "difficulty": "Medium"
  },
  {
    "question": "In MST (802.1s), what is the IST (instance 0)?",
    "options": [
      "One instance per VLAN as in PVST+",
      "The instance that carries BPDUs for the region and maps VLANs not in other instances; it joins the region to the external CST",
      "An EtherChannel",
      "Root guard"
    ],
    "correct": 1,
    "explanation": "MST groups VLANs into a few instances (CPU load). Every switch in the region shares name, revision, and VLAN-instance map. IST (instance 0) is the CIST inside the region. PVST simulation runs at the boundaries.",
    "difficulty": "Hard"
  },
  {
    "question": "What is storm control on an access switch for?",
    "options": [
      "Electing the DR",
      "Rate-limiting unknown unicast, multicast, or broadcast on the port so a loop/storm cannot exhaust the domain",
      "Replacing CoPP in the core",
      "Translating VXLAN"
    ],
    "correct": 1,
    "explanation": "storm-control broadcast/multicast/unicast level X. It can shut or trap. It complements BPDU Guard and loop guard but does not replace STP. The level is pps or a percent of interface bandwidth.",
    "difficulty": "Medium"
  },
  {
    "question": "How does NBAR/AVC classify traffic in ENCOR QoS?",
    "options": [
      "By TCP port 80 only",
      "By application (DPI/signatures, PDLM/NAR), allowing marking/queuing of apps that use dynamic ports",
      "In MPLS EXP only",
      "Only in ISL frames"
    ],
    "correct": 1,
    "explanation": "match protocol in MQC uses NBAR. Useful for SaaS, RTP voice, and apps that do not fit an ACL. Performance: hardware offload on recent platforms. It does not replace trust-boundary classification when DSCP is already correct.",
    "difficulty": "Medium"
  },
  {
    "question": "What is hierarchical QoS (H-QoS) parent/child typically for?",
    "options": [
      "Disabling LLQ",
      "The parent shapes the interface/tunnel (ISP CIR); the child runs LLQ/CBWFQ inside that slice",
      "CoS marking only",
      "Replacing BFD"
    ],
    "correct": 1,
    "explanation": "On a subinterface or DMVPN, the parent shaper prevents bursting into the ISP policer; the child gives voice priority (priority) and bandwidth to other classes. Without a parent, the 1G physical TX ignores a 100M contract.",
    "difficulty": "Hard"
  },
  {
    "question": "How do the 3 MPLS EXP (Traffic Class) bits carry QoS in the core?",
    "options": [
      "They replace IP TTL",
      "They carry a class of service in the label; the PE maps DSCP↔EXP at ingress and the core applies PHB without inspecting IP",
      "They are the VXLAN VNI",
      "They exist only with IPv6 LDP"
    ],
    "correct": 1,
    "explanation": "Pipe vs uniform vs short-pipe models decide whether the original DSCP is restored at egress. PHP with implicit-null loses EXP at the last hop — hence explicit-null when the egress PE PHB matters.",
    "difficulty": "Medium"
  },
  {
    "question": "What is OSPF max-metric router-lsa (on-startup) for?",
    "options": [
      "Forcing the router to become DR",
      "Advertising Type-1 LSAs with maximum metric during boot/reload, steering transit away until iBGP/MPLS are ready",
      "Disabling BFD",
      "Turning the area into an NSSA"
    ],
    "correct": 1,
    "explanation": "It avoids transit black holes when IGP converges before BGP (wait-for-bgp). Alternatives: iBGP IGP delay, prefix-suppression, BFD. It is the analogue of the IS-IS overload bit.",
    "difficulty": "Medium"
  },
  {
    "question": "BGP synchronization on modern IOS is:",
    "options": [
      "Mandatory and enabled",
      "Off by default; when enabled, an iBGP prefix is installed in the RIB only if it is also known via the IGP",
      "A replacement for an RR",
      "Applicable to eBGP only"
    ],
    "correct": 1,
    "explanation": "The old rule avoided black holes in cores that did not run BGP on every hop. With MPLS/full-mesh/RR and label or full-BGP forwarding, synchronization is obsolete (no synchronization is the default).",
    "difficulty": "Medium"
  },
  {
    "question": "With OSPFv3 Address Families on IOS-XE, what can one process do?",
    "options": [
      "Only carry IPv4 static routes",
      "Exchange topology/LSAs for IPv6 and IPv4 under the OSPFv3 framework, with separate AFs",
      "Fully replace BGP on the Internet",
      "Disable NDP on every link"
    ],
    "correct": 1,
    "explanation": "OSPFv3 AF splits address-family ipv6 and ipv4 unicast. Adjacency is OSPFv3; which prefixes are advertised depends on the active AF.",
    "difficulty": "Hard"
  },
  {
    "question": "Why is a manual router-id common on pure IPv6 OSPFv3?",
    "options": [
      "Because the OSPF Router ID is still a 32-bit value and there may be no IPv4 interface to derive it from",
      "Because OSPFv3 requires a 128-bit IPv6 Router ID",
      "Because the Router ID must equal the MAC",
      "Because without a router-id STP cannot elect a root"
    ],
    "correct": 0,
    "explanation": "Even in IPv6-only networks the OSPF Router ID is 32 bits. With no IPv4 addresses, IOS may fail automatic RID election — set it with router-id A.B.C.D.",
    "difficulty": "Hard"
  },
  {
    "question": "In Cisco network automation, RESTCONF typically carries YANG data over what?",
    "options": [
      "SNMPv1 on UDP/161 only",
      "HTTP/HTTPS with JSON or XML payloads modeled in YANG",
      "Unauthenticated Telnet",
      "TFTP only"
    ],
    "correct": 1,
    "explanation": "RESTCONF exposes YANG datastores over HTTP/HTTPS (JSON/XML). NETCONF uses SSH/XML; gNMI is another path. SNMP remains separate for classic monitoring.",
    "difficulty": "Medium"
  },
  {
    "question": "QoS: with a 10 Mbps policer and a much larger burst, what typically happens to the excess (no shaping)?",
    "options": [
      "It is always queued forever with no loss",
      "It may be dropped or remarked per the policy (conform/exceed/violate) — policing does not smooth bursts like shaping",
      "It automatically becomes OSPF",
      "MTU increases to 9000"
    ],
    "correct": 1,
    "explanation": "Policing meters rate and drops/remarks excess; shaping delays (buffers) to smooth. A large burst under a policer means drops/remarks, not an infinite queue.",
    "difficulty": "Hard"
  },
  {
    "question": "In a Zero Trust architecture for enterprise network access, which statement is most accurate?",
    "options": [
      "Never trust by location: continuously authenticate/authorize and segment (least privilege), instead of ‘intranet = trusted’",
      "Automatically trust any host inside the firewall perimeter",
      "Disable 802.1X and use hubs only",
      "Replace BGP with static routes across the entire core"
    ],
    "correct": 0,
    "explanation": "Zero Trust removes implicit trust based on network location. It needs continuous identity, policy and segmentation — not ‘everything behind the firewall is safe’.",
    "difficulty": "Medium"
  },
  {
    "question": "SASE (Secure Access Service Edge) typically combines what?",
    "options": [
      "Only L2 switching at campus access",
      "WAN networking functions (e.g. SD-WAN) with security services preferably delivered from the cloud (SSE)",
      "Only single-mode fiber cables",
      "Only MST Spanning Tree"
    ],
    "correct": 1,
    "explanation": "SASE joins connectivity (often SD-WAN) and cloud security (SSE: SWG, CASB, ZTNA, etc.). It is not an STP protocol.",
    "difficulty": "Medium"
  },
  {
    "question": "RRM on a Cisco WLC — main goal?",
    "options": [
      "Compute the best BGP path using AS-path",
      "Replace OSPF in the campus core",
      "Dynamically tune AP channels/power (and related RF) to cut interference and improve RF",
      "Encrypt the control plane with MACsec between WAN routers"
    ],
    "correct": 2,
    "explanation": "Radio Resource Management optimizes RF (channel, TX power, etc.). It does not forward IP in the core or replace OSPF/BGP.",
    "difficulty": "Medium"
  },
  {
    "question": "Network assurance on ENCOR: Flexible NetFlow + IP SLA together mainly help with what?",
    "options": [
      "Only configuring LACP EtherChannel",
      "Removing any need for syslog",
      "Disabling CoPP on the control plane",
      "Flow visibility (NetFlow) plus active performance/availability tests (IP SLA) for diagnostics and baselines"
    ],
    "correct": 3,
    "explanation": "NetFlow/FNF = flow telemetry; IP SLA = active probes. Complementary for assurance; they do not replace logging or CoPP.",
    "difficulty": "Hard"
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
];
