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
  }
];
