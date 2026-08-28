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
];
