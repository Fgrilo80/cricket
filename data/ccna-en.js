window.QUIZ_BANK = [
  {
    "question": "What is the function of the Transport layer in the TCP/IP model?",
    "options": [
      "Logical addressing",
      "Reliable data delivery between applications",
      "Packet routing",
      "Physical bit transmission"
    ],
    "correct": 1,
    "explanation": "The Transport layer (TCP/UDP) provides data delivery between applications, with TCP offering reliability.",
    "difficulty": "Medium"
  },
  {
    "question": "Which protocol is used to resolve domain names to IP addresses?",
    "options": [
      "ARP",
      "DNS",
      "DHCP",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "DNS (Domain Name System) translates human-readable domain names to IP addresses.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a static route?",
    "options": [
      "Route learned automatically by a routing protocol",
      "Route manually configured by the administrator",
      "Default route",
      "Backup route"
    ],
    "correct": 1,
    "explanation": "Static routes are manually configured and do not change automatically.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between OSPF and EIGRP?",
    "options": [
      "OSPF is Cisco proprietary, EIGRP is open",
      "EIGRP uses DUAL algorithm, OSPF uses Dijkstra",
      "There is no difference",
      "OSPF is faster than EIGRP"
    ],
    "correct": 1,
    "explanation": "EIGRP is Cisco proprietary with DUAL algorithm. OSPF is open standard and uses Dijkstra's algorithm (SPF).",
    "difficulty": "Hard"
  },
  {
    "question": "What is NAT overload (PAT)?",
    "options": [
      "Translation of one private IP to one public IP",
      "Multiple private IPs sharing one public IP using ports",
      "Port translation",
      "Traffic blocking"
    ],
    "correct": 1,
    "explanation": "PAT (Port Address Translation) allows multiple internal devices to share one public IP using different ports.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the command 'ip route 0.0.0.0 0.0.0.0 192.168.1.1' do?",
    "options": [
      "Configure static default route",
      "Configure route to specific network",
      "Delete route",
      "Show routes"
    ],
    "correct": 0,
    "explanation": "This command configures the static default route (gateway of last resort) to 192.168.1.1.",
    "difficulty": "Medium"
  },
  {
    "question": "What is VLAN tagging (802.1Q)?",
    "options": [
      "Method to encrypt VLANs",
      "Inserting a tag into frames to identify the source VLAN",
      "Routing protocol",
      "Type of switch"
    ],
    "correct": 1,
    "explanation": "802.1Q is the IEEE standard for inserting a 4-byte tag into Ethernet frames to identify the VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default port for the HTTPS protocol?",
    "options": [
      "80",
      "443",
      "22",
      "21"
    ],
    "correct": 1,
    "explanation": "HTTPS (HTTP Secure) uses port 443 by default.",
    "difficulty": "Easy"
  },
  {
    "question": "What is an ACL (Access Control List)?",
    "options": [
      "MAC address list",
      "Set of rules to permit or deny traffic",
      "Routing table",
      "VLAN configuration"
    ],
    "correct": 1,
    "explanation": "ACLs are used to filter traffic based on criteria such as source/destination IP, ports, etc.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the HSRP protocol?",
    "options": [
      "Dynamic routing",
      "Provide redundant gateway with virtual IP",
      "Load balancing",
      "VPN"
    ],
    "correct": 1,
    "explanation": "HSRP (Hot Standby Router Protocol) provides gateway redundancy with a shared virtual IP.",
    "difficulty": "Hard"
  },
  {
    "question": "What is 'frame tagging' in switches?",
    "options": [
      "Tagging frames for VLAN identification",
      "Frame encryption",
      "Frame fragmentation",
      "Frame prioritization"
    ],
    "correct": 0,
    "explanation": "Frame tagging (802.1Q) adds a tag to the frame to identify which VLAN it belongs to.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main difference between a router and a Layer 3 switch?",
    "options": [
      "Router is faster",
      "Layer 3 switch performs Layer 3 routing but with hardware optimized for switching",
      "There is no difference",
      "Router does not support VLANs"
    ],
    "correct": 1,
    "explanation": "Layer 3 switches combine L2 switching with L3 routing in ASIC hardware, much faster than traditional routers.",
    "difficulty": "Hard"
  },
  {
    "question": "What is 'EtherChannel'?",
    "options": [
      "Encryption protocol",
      "Technology to bundle multiple physical ports into a single logical link",
      "Type of VLAN",
      "NAT method"
    ],
    "correct": 1,
    "explanation": "EtherChannel allows aggregation of physical links to increase bandwidth and provide redundancy (LACP or PAgP).",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the command 'show ip ospf neighbor'?",
    "options": [
      "Show routing table",
      "Show OSPF neighbors and their state",
      "Show interface configuration",
      "Show logs"
    ],
    "correct": 1,
    "explanation": "This command displays OSPF neighbors, adjacency state, and DR/BDR information.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a 'prefix-list' on Cisco routers?",
    "options": [
      "IP prefix list for route filtering",
      "VLAN list",
      "ACL list",
      "User list"
    ],
    "correct": 0,
    "explanation": "Prefix-lists are used to filter routes based on network prefixes and mask length.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the difference between 'standard' and 'extended' ACL?",
    "options": [
      "Standard filters only by source IP, extended by source, destination, protocol and port",
      "There is no difference",
      "Extended is simpler",
      "Standard is more secure"
    ],
    "correct": 0,
    "explanation": "Standard ACLs (1-99) filter only by source IP. Extended ACLs (100-199) offer more granular filtering.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'BGP' and what is it used for?",
    "options": [
      "Internal routing protocol",
      "External routing protocol used on the internet to exchange routes between AS",
      "Backup protocol",
      "Security protocol"
    ],
    "correct": 1,
    "explanation": "BGP (Border Gateway Protocol) is the routing protocol used on the internet to exchange routes between autonomous systems.",
    "difficulty": "Hard"
  },
  {
    "question": "What does the command 'ip nat inside source list 1 interface GigabitEthernet0/0 overload' do?",
    "options": [
      "Configure static NAT",
      "Configure dynamic PAT using ACL and interface",
      "Delete NAT",
      "Show NAT"
    ],
    "correct": 1,
    "explanation": "This command configures PAT (NAT overload) using ACL 1 and the interface IP as the public address.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'CEF' (Cisco Express Forwarding)?",
    "options": [
      "Routing protocol",
      "Hardware packet forwarding technology for high performance",
      "Type of switch",
      "Backup method"
    ],
    "correct": 1,
    "explanation": "CEF uses FIB table and adjacencies to forward packets in hardware, much faster than traditional routing.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the default port for the Telnet protocol?",
    "options": [
      "21",
      "22",
      "23",
      "80"
    ],
    "correct": 2,
    "explanation": "Telnet uses port 23 (insecure, use SSH on port 22 instead).",
    "difficulty": "Easy"
  },
  {
    "question": "What is 'VRF' (Virtual Routing and Forwarding)?",
    "options": [
      "Type of VLAN",
      "Technology that allows multiple independent routing tables on the same router",
      "VPN protocol",
      "Type of firewall"
    ],
    "correct": 1,
    "explanation": "VRF allows creating separate routing instances on the same physical device, useful for segmentation.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the function of 'Spanning Tree PortFast'?",
    "options": [
      "Speed up STP convergence on access ports",
      "Disable STP",
      "Increase port priority",
      "Create trunk"
    ],
    "correct": 0,
    "explanation": "PortFast immediately puts access ports into forwarding state, skipping listening/learning states.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'Anycast' in IPv6?",
    "options": [
      "Unique address for multiple devices",
      "Address that identifies the nearest device in a group",
      "Broadcast address",
      "Multicast address"
    ],
    "correct": 1,
    "explanation": "Anycast delivers the packet to the nearest device (lowest metric) in a group sharing the same address.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the difference between 'RIPv2' and 'OSPF'?",
    "options": [
      "RIPv2 is link-state, OSPF is distance-vector",
      "RIPv2 has a 15-hop limit, OSPF is hierarchical and scalable",
      "There is no difference",
      "RIPv2 is more secure"
    ],
    "correct": 1,
    "explanation": "RIPv2 is distance-vector with a 15-hop limit. OSPF is link-state, hierarchical (areas), and scalable for large networks.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a 'subinterface' on Cisco routers?",
    "options": [
      "Physical interface",
      "Logical interface created on a physical interface to support multiple VLANs (router-on-a-stick)",
      "Backup interface",
      "Wireless interface"
    ],
    "correct": 1,
    "explanation": "Subinterfaces allow a single router to process traffic from multiple VLANs on one physical interface (router-on-a-stick).",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the command 'show ip nat translations'?",
    "options": [
      "Show NAT configuration",
      "Show active NAT translations",
      "Delete translations",
      "Show ACLs"
    ],
    "correct": 1,
    "explanation": "This command displays the currently active NAT/PAT translations on the router.",
    "difficulty": "Easy"
  },
  {
    "question": "What is 'GLBP' (Gateway Load Balancing Protocol)?",
    "options": [
      "Routing protocol",
      "Protocol that provides redundancy and load balancing between multiple gateways",
      "Type of ACL",
      "VPN protocol"
    ],
    "correct": 1,
    "explanation": "GLBP provides gateway redundancy with active-active load balancing using multiple active routers.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the function of 'ip helper-address'?",
    "options": [
      "Configure NAT",
      "Forward DHCP broadcasts to a remote DHCP server",
      "Configure static route",
      "Enable firewall"
    ],
    "correct": 1,
    "explanation": "ip helper-address allows DHCP broadcasts from clients to be forwarded to a DHCP server on another network.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'SDM' (Switching Database Manager) on Cisco switches?",
    "options": [
      "VLAN manager",
      "Feature that optimizes hardware resource usage (TCAM) for different functions",
      "Routing protocol",
      "Type of memory"
    ],
    "correct": 1,
    "explanation": "SDM allows optimized allocation of hardware resources (TCAM) for routing, security, etc.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the difference between 'inside local' and 'inside global' in NAT?",
    "options": [
      "Inside local is public IP, inside global is private IP",
      "Inside local is internal private IP, inside global is public IP after translation",
      "There is no difference",
      "Inside local is server IP"
    ],
    "correct": 1,
    "explanation": "Inside local = original IP of internal host. Inside global = public IP used on the internet after NAT.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'BPDU Guard'?",
    "options": [
      "Routing protocol",
      "Security feature that disables port if it receives a BPDU (prevents loops)",
      "Type of VLAN",
      "Backup method"
    ],
    "correct": 1,
    "explanation": "BPDU Guard automatically disables a PortFast port if it receives a BPDU, preventing loops.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the command 'debug ip packet'?",
    "options": [
      "Show configuration",
      "Show IP packets processed by the router (use with caution: high impact)",
      "Clear logs",
      "Restart interface"
    ],
    "correct": 1,
    "explanation": "debug ip packet shows details of IP packets being processed. Use with caution as it can overload the CPU.",
    "difficulty": "Hard"
  },
  {
    "question": "What is 'router-on-a-stick'?",
    "options": [
      "Single physical router",
      "Configuration where a router uses subinterfaces to route between multiple VLANs on a single physical interface",
      "Type of switch",
      "NAT method"
    ],
    "correct": 1,
    "explanation": "Router-on-a-stick uses one physical interface with 802.1Q subinterfaces to route between VLANs.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default port for the FTP protocol?",
    "options": [
      "20/21",
      "22",
      "23",
      "80"
    ],
    "correct": 0,
    "explanation": "FTP uses port 21 for control and 20 for data (active mode).",
    "difficulty": "Easy"
  },
  {
    "question": "What is 'PVST+' (Per-VLAN Spanning Tree Plus)?",
    "options": [
      "STP for all VLANs together",
      "Cisco implementation of STP that runs one STP instance per VLAN",
      "Load balancing protocol",
      "Type of trunk"
    ],
    "correct": 1,
    "explanation": "PVST+ runs a separate STP instance for each VLAN, allowing per-VLAN optimization.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of 'ip domain-lookup'?",
    "options": [
      "Enable DNS resolution on the router",
      "Disable DNS",
      "Configure DNS server",
      "Show DNS cache"
    ],
    "correct": 0,
    "explanation": "ip domain-lookup enables the router to resolve hostnames via DNS.",
    "difficulty": "Easy"
  },
  {
    "question": "What is 'LACP' (Link Aggregation Control Protocol)?",
    "options": [
      "Routing protocol",
      "IEEE standard protocol for EtherChannel negotiation",
      "Type of ACL",
      "Security protocol"
    ],
    "correct": 1,
    "explanation": "LACP is the IEEE 802.3ad standard protocol for dynamically forming EtherChannels.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between 'active' and 'passive' in LACP?",
    "options": [
      "Active initiates negotiation, passive responds",
      "There is no difference",
      "Passive is faster",
      "Active is insecure"
    ],
    "correct": 0,
    "explanation": "Active mode initiates LACP negotiation. Passive mode only responds to negotiations.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'HSRP preemption'?",
    "options": [
      "Disable HSRP",
      "Allow higher priority router to take over active role when available",
      "Type of load balancing",
      "Configuration backup"
    ],
    "correct": 1,
    "explanation": "Preemption allows a higher priority router to automatically assume the active role when it becomes available again.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the command 'show spanning-tree vlan 10'?",
    "options": [
      "Show VLAN 10 configuration",
      "Show STP state for VLAN 10 (root bridge, ports, etc.)",
      "Show ACLs for VLAN 10",
      "Show NAT for VLAN 10"
    ],
    "correct": 1,
    "explanation": "This command displays detailed STP information for the specified VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a 'route-map' on Cisco routers?",
    "options": [
      "VLAN map",
      "Powerful tool for route manipulation and filtering based on complex criteria",
      "Type of ACL",
      "VPN protocol"
    ],
    "correct": 1,
    "explanation": "Route-maps are used for advanced route redistribution control, PBR, and NAT.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the function of 'ip sla'?",
    "options": [
      "Configure NAT",
      "Monitor network performance (latency, jitter, loss) with synthetic tests",
      "Configure VPN",
      "Manage users"
    ],
    "correct": 1,
    "explanation": "IP SLA allows creating synthetic performance tests to monitor SLAs and trigger actions.",
    "difficulty": "Hard"
  },
  {
    "question": "What is 'uRPF' (Unicast Reverse Path Forwarding)?",
    "options": [
      "Routing protocol",
      "Security mechanism that verifies if source IP is reachable via incoming interface",
      "Type of firewall",
      "Backup method"
    ],
    "correct": 1,
    "explanation": "uRPF helps prevent spoofing by verifying that a return path to the source IP exists via the incoming interface.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the difference between 'named' and 'numbered' ACL?",
    "options": [
      "Named is older",
      "Named ACL allows easy editing and descriptive names, numbered is numeric",
      "There is no difference",
      "Named is less secure"
    ],
    "correct": 1,
    "explanation": "Named ACLs use names and allow insertion/removal of specific lines. Numbered ACLs are more limited.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'MPLS' (Multiprotocol Label Switching)?",
    "options": [
      "Routing protocol",
      "Label switching technology for high performance and VPNs",
      "Type of switch",
      "NAT method"
    ],
    "correct": 1,
    "explanation": "MPLS uses short labels to forward packets at high speed and supports Layer 2/3 VPNs.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the function of the command 'clear ip nat translation *'?",
    "options": [
      "Show translations",
      "Clear all active NAT translations",
      "Restart NAT",
      "Configure NAT"
    ],
    "correct": 1,
    "explanation": "This command clears all current NAT translations (useful after configuration changes).",
    "difficulty": "Easy"
  },
  {
    "question": "What is 'sticky MAC' in port-security?",
    "options": [
      "MAC that never changes",
      "Feature that dynamically learns MACs and saves them to running-config",
      "Type of VLAN",
      "Encryption method"
    ],
    "correct": 1,
    "explanation": "Sticky MAC learns MAC addresses dynamically and adds them to the configuration as static entries.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of 'ip tcp window-size'?",
    "options": [
      "Configure MTU",
      "Adjust TCP window size to optimize throughput",
      "Configure port",
      "Enable firewall"
    ],
    "correct": 1,
    "explanation": "Allows adjusting the TCP window size to improve performance on high-latency links.",
    "difficulty": "Hard"
  },
  {
    "question": "What is 'DMVPN' (Dynamic Multipoint VPN)?",
    "options": [
      "Static VPN",
      "Cisco technology that enables dynamic hub-and-spoke VPNs with direct spoke-to-spoke tunnels",
      "Type of firewall",
      "Routing protocol"
    ],
    "correct": 1,
    "explanation": "DMVPN creates dynamic VPNs where spokes can connect directly to each other without going through the hub.",
    "difficulty": "Hard"
  },
  {
    "question": "Which command creates VLAN 20 on a Cisco switch?",
    "options": [
      "vlan 20",
      "switchport access vlan 20",
      "interface vlan 20",
      "encapsulation dot1q 20"
    ],
    "correct": 0,
    "explanation": "In VLAN config mode, 'vlan 20' creates the VLAN.",
    "difficulty": "Easy"
  },
  {
    "question": "To put an access port in VLAN 20 use:",
    "options": [
      "switchport mode trunk",
      "switchport access vlan 20",
      "no switchport",
      "ip routing"
    ],
    "correct": 1,
    "explanation": "switchport access vlan 20 with mode access assigns VLAN 20.",
    "difficulty": "Easy"
  },
  {
    "question": "Which native Cisco protocol negotiates EtherChannel?",
    "options": [
      "LACP",
      "PAgP",
      "STP",
      "VTP"
    ],
    "correct": 1,
    "explanation": "PAgP is Cisco-proprietary; LACP is IEEE 802.3ad.",
    "difficulty": "Medium"
  },
  {
    "question": "In STP, the root bridge is elected by:",
    "options": [
      "Highest numeric priority",
      "Lowest Bridge ID (priority + MAC)",
      "Most VLANs",
      "Highest uptime"
    ],
    "correct": 1,
    "explanation": "Lowest Bridge ID wins: priority then MAC.",
    "difficulty": "Medium"
  },
  {
    "question": "PortFast on an access port is used to:",
    "options": [
      "Disable STP",
      "Move immediately to forwarding, avoiding PC delay",
      "Elect the root",
      "Negotiate a trunk"
    ],
    "correct": 1,
    "explanation": "PortFast skips listening/learning on edge ports.",
    "difficulty": "Medium"
  },
  {
    "question": "OSPFv2 hellos on Ethernet use which addresses?",
    "options": [
      "Broadcast 255.255.255.255",
      "Multicast 224.0.0.5 and 224.0.0.6",
      "Unicast to the DR only",
      "FF02::5 only"
    ],
    "correct": 1,
    "explanation": "Hellos go to 224.0.0.5; DR/BDR also 224.0.0.6.",
    "difficulty": "Medium"
  },
  {
    "question": "A Cisco IPv4 default static route is:",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 <next-hop or exit>",
      "ip default-network 0.0.0.0",
      "ip route 255.255.255.255",
      "router default"
    ],
    "correct": 0,
    "explanation": "The default route is 0.0.0.0/0 to a next-hop or exit interface.",
    "difficulty": "Easy"
  },
  {
    "question": "What does NAT overload (PAT) do?",
    "options": [
      "One public IP per private host, 1:1",
      "Many privates share one or few public IPs via ports",
      "Translates IPv6 only",
      "Disables the firewall"
    ],
    "correct": 1,
    "explanation": "PAT multiplexes many internals onto a public IP using L4 ports.",
    "difficulty": "Medium"
  },
  {
    "question": "DHCP snooping protects against:",
    "options": [
      "STP loops",
      "Rogue DHCP servers",
      "Broadcast storms",
      "Fake OSPF routes"
    ],
    "correct": 1,
    "explanation": "It marks trusted/untrusted ports and drops bogus DHCP offers.",
    "difficulty": "Medium"
  },
  {
    "question": "An extended ACL filters based on:",
    "options": [
      "Source IP only",
      "Source, destination, protocol, and ports",
      "MAC only",
      "VLAN only"
    ],
    "correct": 1,
    "explanation": "Extended ACLs allow fine L3/L4 matching.",
    "difficulty": "Medium"
  },
  {
    "question": "Where should an extended ACL usually be placed?",
    "options": [
      "Closest to the destination",
      "Closest to the source",
      "Core only",
      "On every PC"
    ],
    "correct": 1,
    "explanation": "Near the source stops unwanted traffic from crossing the network.",
    "difficulty": "Medium"
  },
  {
    "question": "What does HSRP give hosts?",
    "options": [
      "A virtual MAC/IP for a redundant gateway",
      "Per-flow OSPF balancing",
      "NAT translation",
      "A DHCP server"
    ],
    "correct": 0,
    "explanation": "HSRP shares a VIP; one router is active, another standby.",
    "difficulty": "Medium"
  },
  {
    "question": "NTP is used to:",
    "options": [
      "Resolve names",
      "Synchronize clocks across the network",
      "Measure WAN jitter",
      "Encrypt syslog"
    ],
    "correct": 1,
    "explanation": "NTP aligns device time.",
    "difficulty": "Easy"
  },
  {
    "question": "What does an SNMP GET do?",
    "options": [
      "Configures the device",
      "Reads a MIB object from the agent",
      "Sends a trap",
      "Resets an interface"
    ],
    "correct": 1,
    "explanation": "GET queries the agent; SET changes; traps notify.",
    "difficulty": "Medium"
  },
  {
    "question": "Where should QoS classification happen, preferably?",
    "options": [
      "Only at the ISP",
      "Closest to the source (edge)",
      "Only in the MPLS core",
      "On DNS"
    ],
    "correct": 1,
    "explanation": "Classify at the edge so DSCP can be set early.",
    "difficulty": "Medium"
  },
  {
    "question": "CDP and LLDP are used to:",
    "options": [
      "Elect the OSPF DR",
      "Discover neighbors and link capabilities",
      "Encrypt trunks",
      "Translate NAT"
    ],
    "correct": 1,
    "explanation": "L2 discovery protocols: CDP Cisco, LLDP standard.",
    "difficulty": "Easy"
  },
  {
    "question": "An IPv6 link-local address typically starts with:",
    "options": [
      "2001:",
      "fe80::/10",
      "ff00::/8",
      "::1"
    ],
    "correct": 1,
    "explanation": "Link-local FE80::/10 is required on every IPv6 interface.",
    "difficulty": "Medium"
  },
  {
    "question": "RESTCONF often uses which data format?",
    "options": [
      "YAML only",
      "JSON or XML over HTTP",
      "CSV",
      "Protobuf only"
    ],
    "correct": 1,
    "explanation": "RESTCONF exposes YANG over HTTP, usually JSON or XML.",
    "difficulty": "Medium"
  },
  {
    "question": "JSON differs from XML by:",
    "options": [
      "Being binary",
      "Being lighter, with key-value pairs",
      "Not supporting arrays",
      "Requiring a DTD"
    ],
    "correct": 1,
    "explanation": "JSON is simple text with objects and arrays, common in APIs.",
    "difficulty": "Easy"
  },
  {
    "question": "Ansible reaches Cisco devices mainly via:",
    "options": [
      "An agent on IOS",
      "SSH (agentless) and sometimes NETCONF",
      "SNMP only",
      "Required Telnet"
    ],
    "correct": 1,
    "explanation": "Ansible is agentless: SSH/NETCONF with YAML playbooks.",
    "difficulty": "Medium"
  },
  {
    "question": "Dynamic ARP Inspection uses which database?",
    "options": [
      "The OSPF table",
      "The DHCP snooping binding table",
      "The VTP file",
      "CAM aging"
    ],
    "correct": 1,
    "explanation": "DAI checks ARP against DHCP snooping bindings.",
    "difficulty": "Hard"
  },
  {
    "question": "BPDU Guard on a PortFast port:",
    "options": [
      "Ignores BPDUs",
      "Err-disables the port if a BPDU is received",
      "Elects the root",
      "Enables LACP"
    ],
    "correct": 1,
    "explanation": "A rogue switch shuts the edge port.",
    "difficulty": "Medium"
  },
  {
    "question": "Wildcard mask 0.0.0.255 equals:",
    "options": [
      "/16",
      "/24",
      "/8",
      "/32"
    ],
    "correct": 1,
    "explanation": "0.0.0.255 matches the last 8 bits: a /24 prefix.",
    "difficulty": "Medium"
  },
  {
    "question": "OSPF cost of 100 Mb/s FastEthernet with reference 100000 is:",
    "options": [
      "1",
      "10",
      "100",
      "1000"
    ],
    "correct": 0,
    "explanation": "Cost = ref/bw = 100000/100000 = 1.",
    "difficulty": "Medium"
  },
  {
    "question": "An 802.1Q trunk carries:",
    "options": [
      "Only one VLAN",
      "Multiple tagged VLANs, except the untagged native",
      "VLAN 1 only",
      "Management traffic only"
    ],
    "correct": 1,
    "explanation": "dot1q tags VLANs; the native VLAN is untagged.",
    "difficulty": "Medium"
  },
  {
    "question": "An SSID on a WLAN is:",
    "options": [
      "The WPA3 key",
      "The wireless network name seen by clients",
      "The DFS channel",
      "The BSSID only"
    ],
    "correct": 1,
    "explanation": "SSID names the network; BSSID is the AP radio MAC.",
    "difficulty": "Easy"
  },
  {
    "question": "WPA3-Enterprise typically authenticates with:",
    "options": [
      "PSK only",
      "802.1X/EAP and a RADIUS server",
      "128-bit WEP",
      "Telnet"
    ],
    "correct": 1,
    "explanation": "Enterprise uses 802.1X with RADIUS, not a shared PSK.",
    "difficulty": "Medium"
  },
  {
    "question": "A first LAN troubleshooting step when the site will not open is often:",
    "options": [
      "Replace the core",
      "Check the client IP, mask, gateway, and DNS",
      "Disable OSPF",
      "Factory-reset the ISP"
    ],
    "correct": 1,
    "explanation": "Host IP config catches most cases.",
    "difficulty": "Easy"
  },
  {
    "question": "Syslog severity 0 means:",
    "options": [
      "Informational",
      "Emergency (most severe)",
      "Debug",
      "Notice"
    ],
    "correct": 1,
    "explanation": "0 emergency to 7 debug; lower is more severe.",
    "difficulty": "Medium"
  },
  {
    "question": "A WLC uses CAPWAP to:",
    "options": [
      "Replace OSPF",
      "Tunnel and control lightweight APs",
      "Encrypt disks",
      "Perform NAT"
    ],
    "correct": 1,
    "explanation": "CAPWAP is the control/data tunnel between WLC and APs.",
    "difficulty": "Medium"
  },
  {
    "question": "IPv6 global unicast often starts with:",
    "options": [
      "fe80:",
      "2000::/3 (e.g. 2001:)",
      "ff02:",
      "::1"
    ],
    "correct": 1,
    "explanation": "Current globals sit in 2000::/3, e.g. 2001:db8::/32.",
    "difficulty": "Medium"
  },
  {
    "question": "The show ip route code O means routes from:",
    "options": [
      "Static",
      "OSPF",
      "Connected",
      "BGP"
    ],
    "correct": 1,
    "explanation": "Code O = OSPF in the routing table.",
    "difficulty": "Easy"
  },
  {
    "question": "Does switchport mode access accept 802.1Q tags?",
    "options": [
      "Yes, all VLANs",
      "No: only the access VLAN, untagged",
      "Only tagged VLAN 1",
      "Only if PortFast is on"
    ],
    "correct": 1,
    "explanation": "Access ports expect untagged frames of the assigned VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default administrative distance of OSPF in Cisco IOS?",
    "options": [
      "90",
      "110",
      "120",
      "20"
    ],
    "correct": 1,
    "explanation": "Internal OSPF has AD 110. Internal EIGRP is 90, RIP 120, eBGP 20, static 1, and connected 0. IOS prefers the lowest AD when the prefix is identical.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a floating static route?",
    "options": [
      "A route with a lower AD than the primary so it always wins",
      "A backup route with a higher AD than the primary, used only if the primary disappears",
      "An OSPF route in the table",
      "A mandatory default route"
    ],
    "correct": 1,
    "explanation": "You configure the same prefix with a backup next hop and a high AD (for example 250). While the primary exists, the floating route stays out of the RIB.",
    "difficulty": "Medium"
  },
  {
    "question": "How does a router choose among several routes to the same destination?",
    "options": [
      "Always the oldest route",
      "Longest prefix match; if tied, lowest AD; if still tied, best metric",
      "Always OSPF",
      "The route with the longer mask always loses"
    ],
    "correct": 1,
    "explanation": "IP lookup uses longest-prefix match first. Only then do AD and metric matter. A /24 beats a /16 even if the /16 comes from a protocol with a better AD.",
    "difficulty": "Hard"
  },
  {
    "question": "On an OSPF multiaccess Ethernet network, who is elected DR?",
    "options": [
      "Always the router with the lowest Router ID",
      "The router with the highest OSPF priority; if tied, the highest Router ID",
      "Whoever booted first never loses",
      "Whoever has the most Loopbacks"
    ],
    "correct": 1,
    "explanation": "Priority (0–255, default 1) decides; priority 0 makes a router ineligible. A tie uses the highest Router ID. The DR originates the Type 2 LSA.",
    "difficulty": "Medium"
  },
  {
    "question": "What are the default OSPF Hello and Dead timers on broadcast Ethernet?",
    "options": [
      "Hello 30 s, Dead 120 s",
      "Hello 10 s, Dead 40 s",
      "Hello 1 s, Dead 3 s",
      "Hello 60 s, Dead 180 s"
    ],
    "correct": 1,
    "explanation": "On broadcast and point-to-point, Hello is 10 s and Dead is 4×Hello (40 s). On NBMA the default Hello is 30 s. Neighbors must agree on these values.",
    "difficulty": "Medium"
  },
  {
    "question": "How is default OSPF cost calculated in classic IOS?",
    "options": [
      "Cost = bandwidth in kb/s",
      "Cost = reference bandwidth / interface bandwidth (default 100 Mb/s)",
      "Cost = EIGRP delay",
      "Cost = hop count"
    ],
    "correct": 1,
    "explanation": "With a 100 Mb/s reference, FastEthernet costs 1. Modern networks raise auto-cost reference-bandwidth so 1/10/40 Gb/s links differ.",
    "difficulty": "Medium"
  },
  {
    "question": "Which wildcard mask matches subnet 172.16.8.0/22 in an OSPF network statement?",
    "options": [
      "0.0.0.255",
      "0.0.3.255",
      "255.255.252.0",
      "0.0.7.255"
    ],
    "correct": 1,
    "explanation": "A /22 mask is 255.255.252.0; the wildcard is the bitwise inverse: 0.0.3.255. 0.0.0.255 is /24 and 0.0.7.255 is /21.",
    "difficulty": "Hard"
  },
  {
    "question": "How is the OSPF Router ID chosen if router-id is not configured?",
    "options": [
      "The MAC of Gi0/0",
      "Manual router-id; else highest IPv4 on an up Loopback; else highest IPv4 on an up physical interface",
      "Always 1.1.1.1",
      "The management VLAN address"
    ],
    "correct": 1,
    "explanation": "The RID is a 32-bit IPv4 value. Setting router-id is recommended. Changing it requires clear ip ospf process.",
    "difficulty": "Medium"
  },
  {
    "question": "How is the STP/RSTP root bridge elected?",
    "options": [
      "Highest priority, then highest MAC",
      "Lowest Bridge ID: priority (default 32768) plus MAC; the lowest value wins",
      "The switch with the most VLANs",
      "The first switch to send a BPDU"
    ],
    "correct": 1,
    "explanation": "Priority is set in steps of 4096. spanning-tree vlan X root primary lowers priority so this switch wins.",
    "difficulty": "Medium"
  },
  {
    "question": "Which extra roles does RSTP (802.1w) add versus classic STP (802.1D)?",
    "options": [
      "Only root and designated",
      "Alternate and backup, discarding roles that can transition without 30–50 s timers",
      "DR and BDR",
      "Listen and learn as final roles"
    ],
    "correct": 1,
    "explanation": "RSTP uses root, designated, alternate, and backup. Convergence is in seconds (proposal/agreement), not the 50 s of 802.1D.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Root Guard do on a port?",
    "options": [
      "Disables PortFast",
      "Puts the port in root-inconsistent if a superior BPDU arrives, stopping a downstream switch from becoming root",
      "Forces the port to be the root port",
      "Enables Loop Guard"
    ],
    "correct": 1,
    "explanation": "Use it on edge ports toward the core where a user switch must not win the election. It complements BPDU Guard.",
    "difficulty": "Medium"
  },
  {
    "question": "How do you disable DTP negotiation on a Cisco trunk?",
    "options": [
      "switchport mode access",
      "switchport nonegotiate (with a static trunk or access mode)",
      "no spanning-tree",
      "shutdown vlan 1"
    ],
    "correct": 1,
    "explanation": "DTP (dynamic auto/desirable) can form unwanted trunks. Best practice is static trunk or access mode plus nonegotiate.",
    "difficulty": "Medium"
  },
  {
    "question": "What happens if the two ends of an 802.1Q trunk use different native VLANs?",
    "options": [
      "Nothing; tagged traffic fixes it",
      "Untagged traffic is interpreted in different VLANs and CDP reports a native VLAN mismatch",
      "The trunk always goes down immediately",
      "STP turns itself off"
    ],
    "correct": 1,
    "explanation": "Native-VLAN frames are untagged. If one side assumes VLAN 1 and the other VLAN 99, untagged traffic crosses VLANs.",
    "difficulty": "Hard"
  },
  {
    "question": "Which command limits the VLANs allowed on a trunk?",
    "options": [
      "switchport access vlan 10",
      "switchport trunk allowed vlan 10,20,30",
      "vlan dot1q tag native",
      "spanning-tree vlan 10"
    ],
    "correct": 1,
    "explanation": "By default a trunk allows 1-4094. Pruning the list reduces flooding and risk. Use allowed vlan add/remove to adjust.",
    "difficulty": "Easy"
  },
  {
    "question": "What is an SVI (Switch Virtual Interface) on a Layer 3 switch?",
    "options": [
      "A router-on-a-stick subinterface only",
      "interface vlan X, an internal Layer 3 endpoint for that VLAN, used for inter-VLAN routing on the switch",
      "A Port-channel",
      "An SFP"
    ],
    "correct": 1,
    "explanation": "interface vlan 10 with an IP, plus ip routing, lets the switch route between VLANs without router-on-a-stick.",
    "difficulty": "Medium"
  },
  {
    "question": "With DHCP snooping, which ports should be trusted?",
    "options": [
      "Every PC access port",
      "Ports toward legitimate DHCP servers and the uplinks/trunks to those servers",
      "None; snooping does not use trust",
      "Only PortFast ports"
    ],
    "correct": 1,
    "explanation": "Enable ip dhcp snooping vlan X; on server/uplink ports set ip dhcp snooping trust. Untrusted ports drop fake DHCPOFFER/ACK.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Dynamic ARP Inspection (DAI) validate ARP against?",
    "options": [
      "The OSPF table",
      "The DHCP snooping binding table (IP-MAC-port-VLAN)",
      "DNS",
      "The native VLAN"
    ],
    "correct": 1,
    "explanation": "DAI intercepts ARP on untrusted ports and checks IP/MAC against the snooping database. Spoofed ARP is dropped.",
    "difficulty": "Hard"
  },
  {
    "question": "In 802.1X, what role does the access switch play?",
    "options": [
      "Supplicant",
      "Authenticator, which relays EAPOL and sends RADIUS to the authentication server (e.g. ISE)",
      "The RADIUS server itself",
      "DHCP relay only"
    ],
    "correct": 1,
    "explanation": "The PC is the supplicant, the switch is the authenticator, and ISE/NPS is the authentication server. Until then the port may stay restricted.",
    "difficulty": "Medium"
  },
  {
    "question": "Which statement distinguishes VRRP from HSRP?",
    "options": [
      "VRRP is IPv6-only",
      "VRRP is an IETF standard; HSRP is Cisco proprietary; both provide a virtual gateway",
      "HSRP has no priority",
      "VRRP does not elect a master"
    ],
    "correct": 1,
    "explanation": "HSRP uses MAC 0000.0c07.acXX; VRRP uses 0000.5e00.01XX and may share the master's real IP as the virtual IP.",
    "difficulty": "Medium"
  },
  {
    "question": "How does an IPv6 host get an address with SLAAC?",
    "options": [
      "Only with DHCPv4",
      "It receives an RA (ICMPv6) with a prefix, builds an Interface ID, and runs DAD via Neighbor Solicitation",
      "The router assigns a TCP port",
      "It uses classic ARP"
    ],
    "correct": 1,
    "explanation": "The RA carries prefix, MTU, and lifetime. The host builds a GUA, runs DAD, and may still use DHCPv6 depending on the RA M/O flags.",
    "difficulty": "Medium"
  },
  {
    "question": "In EUI-64, what is done to a 48-bit MAC to form the Interface ID?",
    "options": [
      "It is copied unchanged",
      "FFFE is inserted in the middle and the U/L bit (7th bit of the first octet) is flipped",
      "::1 is simply appended",
      "Embedded IPv4 is used"
    ],
    "correct": 1,
    "explanation": "00:1A:2B:3C:4D:5E becomes 021A:2BFF:FE3C:4D5E (U/L bit flipped). Many OSes prefer random privacy addresses.",
    "difficulty": "Hard"
  },
  {
    "question": "Which prefix identifies IPv6 Unique Local Addresses (ULA)?",
    "options": [
      "2000::/3",
      "FC00::/7 (in practice fd00::/8)",
      "FE80::/10",
      "FF00::/8"
    ],
    "correct": 1,
    "explanation": "ULA (RFC 4193) is the private analogue of RFC 1918. Global unicast is 2000::/3, link-local is FE80::/10, and multicast is FF00::/8.",
    "difficulty": "Medium"
  },
  {
    "question": "Why must every OSPF area connect to area 0?",
    "options": [
      "Because area 0 has STP priority",
      "To keep summarization loop-free; inter-area SPF always transits the backbone",
      "Area 0 is the only area that sends Hellos",
      "It is not required for NSSA"
    ],
    "correct": 1,
    "explanation": "ABRs attach non-backbone areas to area 0. Virtual links exist to patch topologies that break this rule.",
    "difficulty": "Hard"
  },
  {
    "question": "What is the default administrative distance of a static route in IOS?",
    "options": [
      "0",
      "1",
      "90",
      "110"
    ],
    "correct": 1,
    "explanation": "Connected=0, static=1, eBGP=20, EIGRP=90, OSPF=110, RIP=120, iBGP=200. A static therefore beats OSPF for the same prefix unless you raise its AD.",
    "difficulty": "Easy"
  },
  {
    "question": "In Cisco syslog, which severity number is warnings?",
    "options": [
      "0",
      "4",
      "7",
      "6"
    ],
    "correct": 1,
    "explanation": "0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging. logging trap 4 sends warning and worse.",
    "difficulty": "Medium"
  },
  {
    "question": "What does an NTP stratum 1 server mean?",
    "options": [
      "It is 15 hops below UTC",
      "It is attached to an authoritative time reference (GPS, atomic clock) and serves stratum 2 clients",
      "It is a Windows client",
      "It cannot authenticate NTP"
    ],
    "correct": 1,
    "explanation": "Stratum 0 is the reference (GPS/atomic). Stratum 1 syncs to stratum 0. Stratum 16 means unsynchronized.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a key difference between TACACS+ and RADIUS for CLI access?",
    "options": [
      "RADIUS uses TCP 49 and separates authorization",
      "TACACS+ uses TCP 49 and separates authentication, authorization, and accounting; RADIUS uses UDP and combines auth+authz",
      "There is no difference",
      "TACACS+ does not encrypt the password"
    ],
    "correct": 1,
    "explanation": "Cisco device administration prefers TACACS+ (per-command authorization). RADIUS is the standard for 802.1X/Wi-Fi/VPN.",
    "difficulty": "Medium"
  },
  {
    "question": "In REST APIs used in CCNA automation, what best describes JSON?",
    "options": [
      "A programming language",
      "A textual data format of key/value objects, arrays, and simple types, widely used with RESTCONF and controllers",
      "A transport protocol",
      "A type of ACL"
    ],
    "correct": 1,
    "explanation": "JSON is the typical REST payload. Keys are quoted, objects use {}, lists use []. XML remains common in classic NETCONF.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the core difference between traditional networking and controller-based (SDN) networking?",
    "options": [
      "SDN eliminates every switch",
      "The control plane is logically centralized in a controller; devices are mostly data-plane, with northbound/southbound APIs",
      "SDN does not use IP",
      "The controller replaces cabling"
    ],
    "correct": 1,
    "explanation": "Southbound (NETCONF, OpenFlow, gNMI) programs the nodes; northbound (REST) exposes intent to applications. Catalyst Center is the campus example in CCNA.",
    "difficulty": "Medium"
  },
  {
    "question": "In a spine-leaf fabric, how are switches connected?",
    "options": [
      "In a classic STP ring",
      "Every leaf connects to every spine; leafs do not connect to each other; ECMP in the underlay",
      "Only one uplink per leaf",
      "Spines connect to servers"
    ],
    "correct": 1,
    "explanation": "Any leaf reaches any other in two hops with no underlay L2 loops (L3). Servers and APs attach to leafs.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between Type 1 and Type 2 hypervisors?",
    "options": [
      "Type 1 does not exist",
      "Type 1 (bare-metal, e.g. ESXi, Hyper-V, KVM) runs on hardware; Type 2 (hosted, e.g. VirtualBox) runs on a host OS",
      "Type 2 is always faster in the datacenter",
      "Type 1 only virtualizes networks"
    ],
    "correct": 1,
    "explanation": "Type 1 is the datacenter/NFV standard (CSR, CAT8000v, ASAv). Type 2 is for laptop labs.",
    "difficulty": "Easy"
  },
  {
    "question": "Which DSCP is the Expedited Forwarding (EF) PHB, typical for voice?",
    "options": [
      "CS0 / 0",
      "EF / 46 (101110)",
      "AF41 / 34",
      "CS6 / 48"
    ],
    "correct": 1,
    "explanation": "EF (DSCP 46) asks for low latency and jitter: LLQ on the WAN. AF is four-class assurance; CS6/CS7 are network control.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between policing and shaping in QoS?",
    "options": [
      "They are synonyms",
      "Policing drops or re-marks traffic above the rate; shaping queues the excess to smooth bursts, adding delay",
      "Shaping exists only in STP",
      "Policing increases bandwidth"
    ],
    "correct": 1,
    "explanation": "At the WAN edge, shaping avoids drops in the ISP. Policing protects the core but may drop. Both use a token bucket.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a CAM (MAC flooding) overflow attack and how is it mitigated?",
    "options": [
      "DNS poisoning",
      "Filling the MAC table with fake addresses so the switch floods unicast as broadcast; mitigate with port-security",
      "Disabling OSPF",
      "Using NAT"
    ],
    "correct": 1,
    "explanation": "Tools such as macof saturate TCAM. The switch then floods unicast frames out every port in the VLAN. Port-security limits the abuse.",
    "difficulty": "Medium"
  }
];
