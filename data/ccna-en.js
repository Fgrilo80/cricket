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
    "question": "With auto-cost reference-bandwidth 100000 (Mb/s), what is the OSPF cost of a 100 Mb/s FastEthernet interface?",
    "options": [
      "1",
      "10",
      "100",
      "1000"
    ],
    "correct": 3,
    "explanation": "Cost = reference-bandwidth / interface bandwidth. 100000 / 100 = 1000. The classic cost of 1 applies only with the default reference of 100 Mb/s.",
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
  },
  {
    "question": "Look at this show ip route. What is the next hop for 10.2.2.0/24 and which protocol installed the route?",
    "options": [
      "10.1.1.3, static",
      "10.1.1.2, OSPF (AD 110)",
      "203.0.113.1, default",
      "connected on Gi0/0"
    ],
    "correct": 1,
    "explanation": "The line O 10.2.2.0/24 [110/2] via 10.1.1.2 is OSPF (code O), AD 110, metric 2. 10.3.3.0/24 is static via 10.1.1.3. The S* default points to 203.0.113.1.",
    "difficulty": "Medium",
    "cli": "R1# show ip route\nCodes: L - local, C - connected, S - static, R - RIP, B - BGP\n       D - EIGRP, O - OSPF, IA - OSPF inter area\n       E1 - OSPF external type 1, E2 - OSPF external type 2\nGateway of last resort is 203.0.113.1 to network 0.0.0.0\n\n      10.0.0.0/8 is variably subnetted, 5 subnets, 3 masks\nC        10.1.1.0/24 is directly connected, GigabitEthernet0/0\nL        10.1.1.1/32 is directly connected, GigabitEthernet0/0\nO        10.2.2.0/24 [110/2] via 10.1.1.2, 00:12:44, GigabitEthernet0/0\nS        10.3.3.0/24 [1/0] via 10.1.1.3\nS*    0.0.0.0/0 [1/0] via 203.0.113.1"
  },
  {
    "question": "Look at this show ip ospf neighbor. What does 2WAY/DROTHER for neighbor 4.4.4.4 mean?",
    "options": [
      "The FULL adjacency failed and the link is down",
      "On multiaccess Ethernet, DROTHER neighbors stay 2-Way with each other; FULL is only with DR/BDR",
      "Hellos are mismatched and the session will reset",
      "It is the normal state on point-to-point serial"
    ],
    "correct": 1,
    "explanation": "On broadcast segments you go FULL only with the DR and BDR. Two DRTHERs remain 2-Way (they see hellos, they do not exchange the DD database). On serial, FULL/ - with no DR and priority 0.",
    "difficulty": "Hard",
    "cli": "R1# show ip ospf neighbor\nNeighbor ID     Pri   State           Dead Time   Address         Interface\n1.1.1.1           1   FULL/DR         00:00:38    10.1.1.1        GigabitEthernet0/0\n2.2.2.2           1   FULL/BDR        00:00:35    10.1.1.2        GigabitEthernet0/0\n4.4.4.4           1   2WAY/DROTHER    00:00:32    10.1.1.4        GigabitEthernet0/0\n3.3.3.3           0   FULL/  -        00:00:39    10.1.2.2        Serial0/0/0"
  },
  {
    "question": "Look at this show vlan brief. Which user-defined VLAN still has no access ports?",
    "options": [
      "VLAN 10 USERS",
      "VLAN 20 VOICE",
      "VLAN 30 SERVERS",
      "VLAN 1 default"
    ],
    "correct": 2,
    "explanation": "SERVERS (30) is active but the Ports column is empty. VLAN 10 has Gi1/0/1-3, VLAN 20 has Gi1/0/4, VLAN 1 has Gi1/0/5-6. VLAN 100 NATIVE is also empty, but the question asks for the servers VLAN; 30 is SERVERS.",
    "difficulty": "Easy",
    "cli": "SW1# show vlan brief\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi1/0/5, Gi1/0/6\n10   USERS                            active    Gi1/0/1, Gi1/0/2, Gi1/0/3\n20   VOICE                            active    Gi1/0/4\n30   SERVERS                          active\n100  NATIVE                           active\n1002 fddi-default                     act/unsup"
  },
  {
    "question": "Look at this show etherchannel summary. What can you conclude about Po1?",
    "options": [
      "The channel is down (flag D) and uses PAgP",
      "It is an in-use L2 EtherChannel (SU), LACP, with 2 bundled (P) ports",
      "Only one port is active; the other is Hot-standby",
      "It is an L3 port-channel (flag R) with no protocol"
    ],
    "correct": 1,
    "explanation": "Po1(SU): S = Layer 2, U = in use. Protocol LACP. Gi1/0/1(P) and Gi1/0/2(P) are bundled. PAgP would show as PAgP in the Protocol column.",
    "difficulty": "Medium",
    "cli": "SW1# show etherchannel summary\nFlags:  D - down        P - bundled in port-channel\n        I - stand-alone s - suspended\n        H - Hot-standby (LACP only)\n        R - Layer3      S - Layer2\n        U - in use\nNumber of channel-groups in use: 1\nNumber of aggregators:           1\n\nGroup  Port-channel  Protocol    Ports\n------+-------------+-----------+-----------------------------------------------\n1      Po1(SU)         LACP      Gi1/0/1(P)   Gi1/0/2(P)"
  },
  {
    "question": "Look at this show ip nat translations. What is the Inside local of the TCP flow to 192.0.2.80:443?",
    "options": [
      "203.0.113.5:40221",
      "10.10.10.8:44352",
      "192.0.2.80:443",
      "10.10.10.9:51100"
    ],
    "correct": 1,
    "explanation": "Inside local is the real internal host IP:port (10.10.10.8:44352). Inside global is the public IP:port after PAT (203.0.113.5:40221). Outside local/global here match the public server.",
    "difficulty": "Medium",
    "cli": "R1# show ip nat translations\nPro Inside global      Inside local       Outside local      Outside global\ntcp 203.0.113.5:40221  10.10.10.8:44352   192.0.2.80:443     192.0.2.80:443\ntcp 203.0.113.5:40222  10.10.10.9:51100   198.51.100.10:80   198.51.100.10:80\nicmp 203.0.113.5:3     10.10.10.8:3       8.8.8.8:3          8.8.8.8:3"
  },
  {
    "question": "Look at this show spanning-tree vlan 10. What role does this switch have, and what does Gi1/0/24 P2p Edge mean?",
    "options": [
      "It is root secondary; Edge means blocking",
      "This switch is the root; P2p Edge is an edge (PortFast) port in forwarding",
      "It does not run STP; Edge is the native trunk",
      "It is backup root; Edge means loop-inconsistent"
    ],
    "correct": 1,
    "explanation": "'This bridge is the root' and Root ID = Bridge ID. Priority 24586 = 24576 + sys-id-ext 10. Gi1/0/24 Type P2p Edge = RSTP edge (PortFast) designated and FWD.",
    "difficulty": "Medium",
    "cli": "SW1# show spanning-tree vlan 10\nVLAN0010\n  Spanning tree enabled protocol rstp\n  Root ID    Priority    24586\n             Address     0011.2233.4455\n             This bridge is the root\n             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec\n  Bridge ID  Priority    24586  (priority 24576 sys-id-ext 10)\n             Address     0011.2233.4455\nInterface           Role Sts Cost      Prio.Nbr Type\nGi1/0/1             Desg FWD 4         128.1    P2p\nGi1/0/24            Desg FWD 4         128.24   P2p Edge"
  },
  {
    "question": "Look at this show ip interface brief. What is the status of GigabitEthernet0/1 and of GigabitEthernet0/2?",
    "options": [
      "Both up/up",
      "Gi0/1 administratively down/down (shutdown); Gi0/2 up/down (far-end L1/L2 missing)",
      "Gi0/1 up/down; Gi0/2 shutdown",
      "Both administratively down"
    ],
    "correct": 1,
    "explanation": "administratively down = shutdown command. up/down = interface enabled but line protocol down (cable, clock, keepalives, line protocol). Loopback0 and Gi0/0 are up/up.",
    "difficulty": "Medium",
    "cli": "R1# show ip interface brief\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     10.1.1.1        YES NVRAM  up                    up\nGigabitEthernet0/1     10.2.2.1        YES NVRAM  administratively down down\nGigabitEthernet0/2     10.3.3.1        YES NVRAM  up                    down\nLoopback0              1.1.1.1         YES NVRAM  up                    up"
  },
  {
    "question": "Look at this show access-lists. Host 10.1.1.50 opens HTTPS to 8.8.8.8. What happens?",
    "options": [
      "It is permitted by ACE 10 (SSH)",
      "It is denied by ACE 30 (deny tcp eq 443) and hits that line",
      "It is permitted by ACE 40 before the deny statements",
      "The ACL ignores HTTPS because it has no UDP"
    ],
    "correct": 1,
    "explanation": "ACEs are evaluated top-down. 10 only permits SSH to 10.9.9.9. 20 denies HTTP, 30 denies HTTPS to any — matching 10.1.1.50→8.8.8.8:443. ACE 40 permit ip any any is never reached for this flow. An implicit deny exists at the end, but 30 already decides.",
    "difficulty": "Hard",
    "cli": "R1# show access-lists\nExtended IP access list BLOCK_WEB\n    10 permit tcp 10.1.1.0 0.0.0.255 host 10.9.9.9 eq 22\n    20 deny   tcp 10.1.1.0 0.0.0.255 any eq 80\n    30 deny   tcp 10.1.1.0 0.0.0.255 any eq 443\n    40 permit ip any any"
  },
  {
    "question": "Look at this show standby brief. What is the HSRP virtual IP and this router's state?",
    "options": [
      "10.1.1.3, Standby",
      "10.1.1.1, Active with preempt (Pri 110)",
      "10.1.1.1, Listen",
      "local, Init"
    ],
    "correct": 1,
    "explanation": "Virtual IP 10.1.1.1, State Active, P = preempt, priority 110. The Standby is 10.1.1.3. Hosts use 10.1.1.1 as their gateway.",
    "difficulty": "Medium",
    "cli": "R1# show standby brief\n                     P indicates configured to preempt\n                     |\nInterface   Grp  Pri P State   Active          Standby         Virtual IP\nGi0/0       1    110 P Active  local           10.1.1.3        10.1.1.1"
  },
  {
    "question": "Look at this show ip dhcp snooping binding. What is this table used for on the switch?",
    "options": [
      "The OSPF neighbor list",
      "IP-MAC-VLAN-port bindings learned from DHCP; the database for DAI and IP Source Guard",
      "The unknown-unicast CAM",
      "NAT translations"
    ],
    "correct": 1,
    "explanation": "DHCP snooping records leases seen on untrusted ports (plus optional statics). DAI and IPSG consult this binding table to filter ARP and IP spoofing.",
    "difficulty": "Medium",
    "cli": "SW1# show ip dhcp snooping binding\nMacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface\n00:11:22:33:44:55   10.10.10.20      86234       dhcp-snooping  10    GigabitEthernet1/0/8\n00:AA:BB:CC:DD:EE   10.10.10.21      85012       dhcp-snooping  10    GigabitEthernet1/0/9\nTotal number of bindings: 2"
  },
  {
    "question": "On an 802.1Q trunk, what happens to native-VLAN traffic?",
    "options": [
      "It is always dropped",
      "It crosses untagged, unlike the other allowed VLANs",
      "It is forced to VLAN 1 even if native is 99",
      "It is ISL-encapsulated"
    ],
    "correct": 1,
    "explanation": "Native-VLAN frames go untagged. Other allowed VLANs carry a 4-byte tag. Mismatched native VLANs at the two ends cause VLAN hopping/mis-mapping. Cisco recommends an unused native VLAN plus vlan dot1q tag native.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a voice VLAN (switchport voice vlan) for on an access port?",
    "options": [
      "To replace 802.1X",
      "To let the IP phone sit in a tagged VLAN (typically 802.1Q) while the PC uses the untagged access VLAN",
      "To disable PoE",
      "To build an EtherChannel with the phone"
    ],
    "correct": 1,
    "explanation": "The phone acts as a mini-switch: voice frames leave tagged on the voice VLAN; the PC on the same port uses the untagged access VLAN. CDP/LLDP can tell the phone its voice VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "In RSTP (802.1w), which state replaces classic 802.1D blocking?",
    "options": [
      "Listening",
      "Discarding",
      "Learning only",
      "Disabled only"
    ],
    "correct": 1,
    "explanation": "RSTP has Discarding, Learning, and Forwarding. Discarding covers 802.1D disabled/blocking/listening: it does not forward frames. Convergence uses sync/proposal instead of long timers.",
    "difficulty": "Medium"
  },
  {
    "question": "Do two switches with PAgP auto on both ends form an EtherChannel?",
    "options": [
      "Yes, auto/auto is the recommended pair",
      "No: auto/auto does not start negotiation; one end needs desirable (or on/on with no protocol)",
      "Yes, but only with LACP",
      "No, because PAgP requires MST"
    ],
    "correct": 1,
    "explanation": "PAgP: desirable initiates, auto waits. auto+auto = no channel. LACP: active initiates, passive waits; active+active or active+passive work, passive+passive does not. on/on forces a channel with no LACP/PAgP (dangerous if configs differ).",
    "difficulty": "Hard"
  },
  {
    "question": "Which LACP combination forms a channel?",
    "options": [
      "passive + passive",
      "active + active, or active + passive",
      "auto + auto",
      "desirable + auto in LACP only"
    ],
    "correct": 1,
    "explanation": "LACP active sends PDUs; passive only replies. At least one end must be active. auto/desirable are PAgP modes, not LACP.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the OSPF command passive-interface GigabitEthernet0/0 do?",
    "options": [
      "It shuts the interface at Layer 3",
      "It advertises that interface's network but sends no hellos and forms no adjacency on it",
      "It forces the router to be DR",
      "It filters Type-5 LSAs"
    ],
    "correct": 1,
    "explanation": "Useful on user LANs: the subnet appears in OSPF but a PC will not attempt an adjacency. passive-interface default plus no passive-interface on transit links is a common pattern.",
    "difficulty": "Medium"
  },
  {
    "question": "How do you originate a default route in OSPF from an ASBR that already has a default in the RIB?",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 null0 only",
      "default-information originate (and optionally always if the default is not in the RIB)",
      "network 0.0.0.0 255.255.255.255 area 0",
      "ip ospf priority 0"
    ],
    "correct": 1,
    "explanation": "default-information originate injects a Type-5 (or Type-7 in NSSA) LSA for 0.0.0.0/0 if a default exists in the RIB. The always keyword originates even without that route.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the practical difference between SVI inter-VLAN routing and router-on-a-stick?",
    "options": [
      "SVIs work only with IPv6",
      "SVI: the L3 switch routes on in-chassis SVIs; ROAS: an external router uses subinterfaces on a trunk",
      "ROAS does not need 802.1Q",
      "There is no forwarding difference"
    ],
    "correct": 1,
    "explanation": "SVI (interface vlan X) plus ip routing on an MLS is the modern campus design. ROAS uses an 802.1Q trunk to a router with encapsulation dot1Q subinterfaces. Both split broadcast domains; SVIs scale better.",
    "difficulty": "Medium"
  },
  {
    "question": "Where should a numbered standard ACL usually be placed?",
    "options": [
      "As close to the source as possible, because it filters only the destination",
      "As close to the destination as possible, because it filters only source IP",
      "Always on the OSPF ASBR",
      "Only on the NTP server"
    ],
    "correct": 1,
    "explanation": "A standard ACL (1-99, 1300-1999) matches source only. Near the source it would cut traffic to other destinations too. Extended (100-199) filters source+destination+L4 and is placed near the source.",
    "difficulty": "Medium"
  },
  {
    "question": "Every IPv4 ACL in IOS ends with which implicit rule?",
    "options": [
      "permit ip any any",
      "deny ip any any (implicit deny)",
      "permit icmp any any",
      "deny tcp any any eq 80"
    ],
    "correct": 1,
    "explanation": "If no ACE matches, the packet is dropped. That is why a 'block a little' ACL needs permit ip any any at the end. An empty ACL applied to an interface can block everything.",
    "difficulty": "Easy"
  },
  {
    "question": "In Cisco NAT, which interfaces are marked ip nat inside and ip nat outside?",
    "options": [
      "Inside = public Internet; outside = LAN",
      "Inside = the internal domain (addresses to translate); outside = the public/external side",
      "Both keywords are aliases for shutdown",
      "They are used only with IPv6"
    ],
    "correct": 1,
    "explanation": "Inside local/global and outside local/global come from these marks. Typical PAT: LAN = inside, WAN = outside, ip nat inside source list ... interface <WAN> overload.",
    "difficulty": "Medium"
  },
  {
    "question": "What does 1:1 static NAT (ip nat inside source static) do?",
    "options": [
      "Many privates share one public IP via ports",
      "It maps a fixed inside local to a fixed inside global, permanently",
      "It translates MAC only",
      "It replaces ARP"
    ],
    "correct": 1,
    "explanation": "Static NAT is bidirectional and predictable — typical for publishing a server. PAT/overload multiplexes many internals onto one IP. A dynamic pool translates 1:1 from a set, with no guarantee of the same global.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference among port-security violation modes protect, restrict, and shutdown?",
    "options": [
      "They are identical",
      "protect drops silently; restrict drops and increments counters/SNMP; shutdown err-disables the port",
      "shutdown only logs and does not close the port",
      "protect elects the STP root"
    ],
    "correct": 1,
    "explanation": "The default is shutdown (err-disabled until shutdown/no shutdown or errdisable recovery). restrict notifies; protect is the quietest and the worst for troubleshooting.",
    "difficulty": "Hard"
  },
  {
    "question": "What does errdisable recovery cause psecure-violation do?",
    "options": [
      "It disables port-security forever",
      "It automatically re-enables ports err-disabled by port-security after an interval (default 300 s)",
      "It turns the port into a trunk",
      "It clears the NAT table"
    ],
    "correct": 1,
    "explanation": "Useful so PCs are not left down forever after a MAC flap. The timer is set with errdisable recovery interval. The cause must be listed for recovery.",
    "difficulty": "Medium"
  },
  {
    "question": "In 802.1X, what are the three classic roles?",
    "options": [
      "Root, designated, blocked",
      "Supplicant (client), authenticator (switch/AP), authentication server (RADIUS/ISE)",
      "DR, BDR, DROTHER",
      "ITR, ETR, MS"
    ],
    "correct": 1,
    "explanation": "The switch is the EAP authenticator (EAPoL on the port, RADIUS toward the backend). The PC is the supplicant. ISE/NPS is the server. MAB covers devices with no 802.1X client.",
    "difficulty": "Medium"
  },
  {
    "question": "In a Cisco lightweight architecture, what is CAPWAP split MAC?",
    "options": [
      "The AP and WLC share MAC functions: the AP handles real-time (beacon/ACK) and the WLC handles management/association/802.1X",
      "The client MAC is split in half",
      "It replaces 802.11 with pure Ethernet",
      "It is a type of EtherChannel"
    ],
    "correct": 1,
    "explanation": "CAPWAP (UDP 5246 control, 5247 data) tunnels between AP and WLC. Split MAC leaves time-sensitive functions on the AP and centralizes policy on the WLC. FlexConnect can switch data locally.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a key difference between an autonomous AP and a lightweight AP?",
    "options": [
      "Autonomous APs have no radio",
      "Autonomous keeps SSID/config on the AP itself; lightweight gets config from a WLC via CAPWAP",
      "Lightweight cannot use 802.1X",
      "Autonomous always requires DNA Center"
    ],
    "correct": 1,
    "explanation": "Autonomous IOS APs are managed one by one. Lightweight (CAPWAP) scales with a WLC: SSID, RF, roaming, and AAA are centralized. Mobility Express/embedded WLC is a middle ground.",
    "difficulty": "Medium"
  },
  {
    "question": "Which IPv6 multicast address is all-nodes on the local link?",
    "options": [
      "FF02::2",
      "FF02::1",
      "FF02::5",
      "FF02::9"
    ],
    "correct": 1,
    "explanation": "FF02::1 = all nodes (like 224.0.0.1). FF02::2 = all routers. FF02::5/6 = OSPFv3. FF02::9 = RIPng. FF02::1:2 = DHCPv6 relay. There is no IPv6 broadcast.",
    "difficulty": "Medium"
  },
  {
    "question": "In IPv6 NDP, what are Neighbor Solicitation and Neighbor Advertisement for?",
    "options": [
      "They replace OSPF Hello",
      "They resolve IPv6→MAC (ARP equivalent) and detect duplicates (DAD)",
      "They assign a GUA prefix by themselves with no RA",
      "They encrypt link traffic"
    ],
    "correct": 1,
    "explanation": "NS (ICMPv6 type 135) asks who has an IPv6 address; NA (136) replies. DAD sends NS for the address being claimed. RS/RA (133/134) support SLAAC and the default gateway.",
    "difficulty": "Medium"
  },
  {
    "question": "What does SNMPv3 authPriv provide compared with SNMPv2c?",
    "options": [
      "Cleartext community strings, like v2c",
      "Authentication and encryption of messages (user + priv)",
      "It replaces NTP",
      "Traps only, never GET"
    ],
    "correct": 1,
    "explanation": "v2c uses a community (effectively noAuthNoPriv). v3: noAuthNoPriv, authNoPriv (MD5/SHA), and authPriv (typically AES). Prefer authPriv and tight views. Informs (v2/v3) are ACKed; traps are not.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between an SNMP trap and an SNMP inform?",
    "options": [
      "Traps use TCP; informs always use UDP",
      "A trap is unacknowledged; an inform expects an ACK and is retried on failure",
      "Informs exist only in SNMPv1",
      "Traps encrypt and informs do not"
    ],
    "correct": 1,
    "explanation": "Both are agent-to-NMS notifications. Inform (v2c/v3) is reliable; a trap can be lost. The cost is more load on the agent and the NMS.",
    "difficulty": "Medium"
  },
  {
    "question": "In Cisco syslog, severity 7 means what?",
    "options": [
      "emergencies",
      "alerts",
      "debugging",
      "critical"
    ],
    "correct": 2,
    "explanation": "0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging. logging trap debugging is noisy; do not leave 7 in production without a filter.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between DSCP and CoS in QoS marking?",
    "options": [
      "They are the same 3-bit field",
      "CoS is 3 bits in the 802.1Q tag (L2); DSCP is 6 bits in IP (L3) and survives routers",
      "DSCP exists only in ISL frames",
      "CoS replaces IP precedence in IPv6 only"
    ],
    "correct": 1,
    "explanation": "CoS (PCP) is lost when the 802.1Q tag is stripped. DSCP (e.g. EF 46, AF41) lives in the IP header. Trust boundary: classify/mark closest to the source and trust DSCP in the core.",
    "difficulty": "Medium"
  },
  {
    "question": "RESTCONF on IOS-XE typically uses which transport and base URI?",
    "options": [
      "Telnet and /soap",
      "HTTPS (TCP 443) and /restconf (YANG in JSON or XML)",
      "TFTP and /rpc",
      "SNMP and /mib"
    ],
    "correct": 1,
    "explanation": "RESTCONF maps HTTP GET/POST/PUT/PATCH/DELETE onto YANG datastores. NETCONF uses SSH 830 and XML RPC. AAA and certificates protect both.",
    "difficulty": "Medium"
  },
  {
    "question": "In a controller-based (SDN) network, what does the northbound API connect?",
    "options": [
      "The controller to devices via OpenFlow/NETCONF only",
      "Applications/orchestration to the controller (intent requests)",
      "Two spines to each other",
      "Only CAPWAP from AP to WLC"
    ],
    "correct": 1,
    "explanation": "Northbound: apps → controller (REST). Southbound: controller → network devices (NETCONF, RESTCONF, OpenFlow, CLI/SSH). The data plane remains on the switches.",
    "difficulty": "Medium"
  },
  {
    "question": "Which multicast address and virtual MAC does HSRP version 2 (IPv4) use?",
    "options": [
      "224.0.0.2 and 0000.0c07.acXX",
      "224.0.0.102 and 0000.0c9f.fXXX",
      "224.0.0.18 and 0000.5e00.01XX",
      "224.0.0.10 and 0000.0c07.acXX"
    ],
    "correct": 1,
    "explanation": "HSRPv1: 224.0.0.2 and MAC 0000.0c07.acXX (XX = group 0-255). HSRPv2: 224.0.0.102 and MAC 0000.0c9f.fXXX (groups to 4095) plus IPv6 hellos. VRRP: 224.0.0.18 and 0000.5e00.01XX.",
    "difficulty": "Hard"
  },
  {
    "question": "A VRRP trait that distinguishes it from classic HSRP is:",
    "options": [
      "Only Cisco implements it",
      "The VIP can be a router's real interface IP (master owns that address); it is an IETF standard",
      "It never elects a master",
      "It always uses a GLBP AVG"
    ],
    "correct": 1,
    "explanation": "HSRP is Cisco proprietary and the VIP is always an extra IP. VRRP (RFC) lets the master use its interface IP as the VIP. GLBP (Cisco) load-shares with multiple AVFs.",
    "difficulty": "Hard"
  },
  {
    "question": "In GLBP, what is the AVG versus the AVF?",
    "options": [
      "AVG only does NAT; AVF only does STP",
      "AVG answers ARP for the VIP and assigns virtual MACs; AVFs forward the hosts' traffic",
      "AVF elects the STP root; AVG is STP backup",
      "There is no difference"
    ],
    "correct": 1,
    "explanation": "One Active Virtual Gateway owns the VIP and hands out virtual MACs (round-robin/weighted). Several Active Virtual Forwarders actually forward. That yields per-host load balancing, not only a passive standby.",
    "difficulty": "Hard"
  },
  {
    "question": "How does Cisco IOS choose between two OSPF routes for the same prefix at the same cost?",
    "options": [
      "It uses only the oldest one",
      "It installs both and equal-cost load-balances (CEF), up to the maximum-paths limit",
      "It always prefers the higher Router ID",
      "It drops them and uses RIP"
    ],
    "correct": 1,
    "explanation": "ECMP: several RIB/FIB entries for the same prefix/cost. maximum-paths caps the count. If costs differ, only the lower-cost route remains. AD only breaks ties across different protocols.",
    "difficulty": "Medium"
  },
  {
    "question": "What are the default administrative distances of eBGP, internal EIGRP, OSPF, RIP, and iBGP?",
    "options": [
      "20, 90, 110, 120, 200",
      "110, 90, 20, 120, 200",
      "90, 20, 110, 120, 1",
      "20, 110, 90, 200, 120"
    ],
    "correct": 0,
    "explanation": "eBGP 20, internal EIGRP 90, IGRP 100, OSPF 110, IS-IS 115, RIP 120, external EIGRP 170, iBGP 200, unknown 255. Static is 1, connected is 0. Lowest AD wins in the RIB.",
    "difficulty": "Medium"
  },
  {
    "question": "If the RIB has 10.1.0.0/16 via OSPF and 10.1.1.0/24 via static, which route does a packet to 10.1.1.50 use?",
    "options": [
      "The OSPF /16, because AD 110 is irrelevant here",
      "The static /24, by longest-match (more specific prefix)",
      "Load-balance across both",
      "Drop, route conflict"
    ],
    "correct": 1,
    "explanation": "Longest prefix match is the first forwarding criterion. AD and metric apply only among routes for the same prefix. The /24 wins over the /16 for 10.1.1.50.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a recursive static route in IOS?",
    "options": [
      "A route whose next-hop IP the router must still resolve via another RIB route (it does not point at an interface)",
      "A route that deletes itself",
      "A default originated in OSPF",
      "A NAT route"
    ],
    "correct": 0,
    "explanation": "ip route 10.0.0.0 255.0.0.0 192.0.2.1 requires 192.0.2.1 to be reachable (typically connected or IGP). Fully specified: ip route ... 192.0.2.1 GigabitEthernet0/0 also sets the outgoing interface.",
    "difficulty": "Medium"
  },
  {
    "question": "WPA3-Personal uses which mechanism instead of the classic WPA2 PSK handshake?",
    "options": [
      "40-bit WEP",
      "SAE (Simultaneous Authentication of Equals), resistant to offline dictionary attacks",
      "Open System only",
      "Mandatory TKIP"
    ],
    "correct": 1,
    "explanation": "SAE (Dragonfly) performs a password handshake without exposing a hash that can be attacked offline like the 4-way PSK. WPA3-Enterprise has an optional 192-bit suite. WPA2-Enterprise remains 802.1X/EAP.",
    "difficulty": "Medium"
  },
  {
    "question": "How do you distinguish the data, control, and management planes on a router?",
    "options": [
      "They are the same CPU queue",
      "Data: packet forwarding (CEF/TCAM); control: protocols (OSPF/BGP/ARP); management: SSH/SNMP/NETCONF",
      "The control plane exists only on L2 switches",
      "The management plane is EtherChannel"
    ],
    "correct": 1,
    "explanation": "CoPP protects the control plane. Out-of-band (mgmt VRF) isolates management. The data plane should keep forwarding even if SSH fails. Mixing the planes is a classic design mistake.",
    "difficulty": "Medium"
  },
  {
    "question": "What is EtherChannel hashing (for example src-dst-ip) for?",
    "options": [
      "Electing the OSPF DR",
      "Choosing which bundle member each flow uses, while keeping per-flow packet order",
      "Replacing STP on the bundle",
      "Translating NAT"
    ],
    "correct": 1,
    "explanation": "A flow (same hash) stays on one port so TCP is not reordered. Without IP/port diversity, a single member can saturate. L3/L4 hashing spreads better than source-MAC alone.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between Root Guard and BPDU Guard?",
    "options": [
      "There is no difference",
      "BPDU Guard err-disables an edge port if any BPDU is received; Root Guard stops that port becoming root port (superior BPDU)",
      "Root Guard works only with LACP",
      "BPDU Guard elects the root"
    ],
    "correct": 1,
    "explanation": "BPDU Guard: access/PortFast — an unauthorized switch shuts the port. Root Guard: edge-facing uplinks — superior BPDUs are ignored and the port goes root-inconsistent, preserving the designated root.",
    "difficulty": "Medium"
  },
  {
    "question": "How does Ansible mainly apply playbooks to Cisco devices?",
    "options": [
      "A permanent agent on every IOS device",
      "Agentless over SSH/NETCONF from a control node, with inventory and ios_* modules",
      "SNMP SET only",
      "Telnet only with no inventory"
    ],
    "correct": 1,
    "explanation": "Ansible installs no agent on IOS. Inventory lists hosts; modules (ios_config, ios_command, ios_facts) use SSH. Classic Puppet/Chef use an agent. YAML describes desired state.",
    "difficulty": "Medium"
  },
  {
    "question": "What is authenticated NTP (ntp authenticate / ntp trusted-key) for?",
    "options": [
      "To raise stratum to 16",
      "To ensure the router accepts time only from servers with a valid symmetric key, avoiding a fake clock",
      "To replace DNS",
      "To encrypt all user traffic"
    ],
    "correct": 1,
    "explanation": "Fake NTP can break certificates, logs, and Kerberos. Symmetric keys (or the rare NTPv4 Autokey) authenticate the server. Stratum 16 = unsynchronized. Prefer internal stratum 1/2 sources.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the fundamental difference between OSPFv2 and OSPFv3?",
    "options": [
      "OSPFv3 only runs on L2 switches",
      "OSPFv2 routes IPv4; OSPFv3 was designed for IPv6 (and can do IPv4 AF on modern platforms)",
      "OSPFv3 uses TCP instead of IP",
      "There is no protocol difference at all"
    ],
    "correct": 1,
    "explanation": "OSPFv2 is for IPv4. OSPFv3 (RFC 5340) carries LSAs for IPv6; on IOS-XE, Address Families can also carry IPv4 in an OSPFv3 process.",
    "difficulty": "Medium"
  },
  {
    "question": "In OSPFv3, how is adjacency enabled differently from classic OSPFv2 IPv4 “network” statements?",
    "options": [
      "Only via loopback 127.0.0.1",
      "Per-interface activation (ipv6 ospf / ospfv3) plus a Router ID; not the same IPv4 network mask command style",
      "Only via multiprotocol BGP",
      "Only via SNMP"
    ],
    "correct": 1,
    "explanation": "OSPFv3 is enabled on IPv6 interfaces under an OSPFv3 process. A 32-bit Router ID is still required and is often set manually when no IPv4 interface exists.",
    "difficulty": "Medium"
  },
  {
    "question": "Which IPv6 multicast does OSPFv3 use for AllSPFRouters on the link?",
    "options": [
      "FF02::1",
      "FF02::5",
      "FF02::A",
      "FF02::1:2"
    ],
    "correct": 1,
    "explanation": "OSPFv3 uses FF02::5 (AllSPFRouters) and FF02::6 (AllDRouters), the IPv6 link-local multicast analogs of OSPFv2’s 224.0.0.5/6.",
    "difficulty": "Hard"
  },
  {
    "question": "`show ip interface brief` shows Serial0/0/0 as administratively down / down. What is typically missing?",
    "options": [
      "Only configure BGP",
      "The interface is shut down — need `no shutdown` (plus IP/encapsulation if required)",
      "The console cable is reversed",
      "NTP is out of sync"
    ],
    "correct": 1,
    "explanation": "administratively down means the interface is in shutdown. `no shutdown` moves it toward up/down or up/up depending on line protocol.",
    "difficulty": "Medium",
    "cli": true
  },
  {
    "question": "In `show etherchannel summary`, a port shows as `(I)` independent. What does that mean?",
    "options": [
      "The EtherChannel is perfect on every member",
      "That port is not in the bundle (LACP/PAgP mismatch or bundling failed)",
      "Native VLAN is 1 everywhere",
      "STP is disabled"
    ],
    "correct": 1,
    "explanation": "Flags like (I) Independent mean the port did not join the port-channel — often LACP mode mismatch, VLAN, speed/duplex, or inconsistent member config.",
    "difficulty": "Hard",
    "cli": true
  },
  {
    "question": "Which information does `show cdp neighbors detail` NOT provide directly?",
    "options": [
      "Neighbor hostname and platform",
      "Neighbor management IP (if advertised)",
      "The full remote AS BGP table",
      "Local and remote interfaces for the link"
    ],
    "correct": 2,
    "explanation": "CDP/LLDP give L2 adjacency / management identity (ID, platform, IPs, capabilities). Full BGP tables come from `show ip bgp` / BGP sessions, not CDP.",
    "difficulty": "Medium",
    "cli": true
  },
  {
    "question": "In the CCNA 200-301 v1.1 blueprint, Generative AI and Predictive AI mainly fall under which knowledge domain?",
    "options": [
      "Automation and Programmability (and AI-assisted ops/management concepts)",
      "Security Fundamentals only (15%)",
      "IP Connectivity only (25%)",
      "Network Access only (STP)"
    ],
    "correct": 0,
    "explanation": "Cisco places AI/ML with Automation and Programmability (~10%). It does not replace OSPF/STP fundamentals.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a practical contrast between Generative AI and Predictive AI in network operations?",
    "options": [
      "Generative AI works only offline; Predictive AI only in public cloud",
      "Predictive AI estimates trends/anomalies from data; Generative AI creates new text/code/suggestions from prompts",
      "They are absolute synonyms in the Cisco blueprint",
      "Generative AI fully replaces the OSPF protocol"
    ],
    "correct": 1,
    "explanation": "Predictive: forecasting and anomaly detection. Generative: creating content/configs/explanations. Neither replaces routing protocols.",
    "difficulty": "Medium"
  },
  {
    "question": "Machine Learning on a network assurance platform (e.g. telemetry analysis) is typically used to:",
    "options": [
      "Replace spanning tree on the access layer",
      "Automatically assign public IPv4 addresses to every host",
      "Learn baseline patterns and flag deviations/anomalies earlier than static thresholds alone",
      "Encrypt switch-to-switch frames with WEP"
    ],
    "correct": 2,
    "explanation": "ML builds baselines and spots anomalies (latency, drops, Wi-Fi clients). It does not change L2/L3 forwarding or replace STP/OSPF.",
    "difficulty": "Medium"
  },
  {
    "question": "On current CCNA, Terraform appears under Infrastructure as Code. How does it typically differ from Ansible at a conceptual exam level?",
    "options": [
      "Terraform only manages Windows; Ansible only routers",
      "Terraform uses only Telnet; Ansible uses only SNMP",
      "Chef and Puppet are mandatory again and replace Terraform",
      "Terraform declares desired infrastructure state (often cloud/API); Ansible is mainly procedural device configuration automation"
    ],
    "correct": 3,
    "explanation": "Recent blueprints emphasize Terraform and dropped Chef/Puppet name-dropping. Terraform = declarative IaC; Ansible = playbooks, often agentless over SSH/API.",
    "difficulty": "Hard"
  },
  {
    "question": "BPDU Filter on an access port — typical effect?",
    "options": [
      "Stops sending/receiving BPDUs on that port (behavior distinct from BPDU Guard)",
      "Forces the port to always become root bridge",
      "Automatically enables PortFast on every trunk",
      "Permanently converts the native VLAN to VLAN 1"
    ],
    "correct": 0,
    "explanation": "BPDU Filter suppresses BPDUs on the interface. BPDU Guard err-disables on received BPDUs. Different features — a classic exam trap.",
    "difficulty": "Hard"
  },
  {
    "question": "Northbound API of an SDN controller: which authentication approach is common for modern REST (CCNA concept)?",
    "options": [
      "Static ARP only on the client",
      "Tokens (e.g. Bearer/OAuth2) or API keys over HTTPS — not cleartext credentials over HTTP",
      "Public SNMP community only",
      "Shared WEP between controller and switch"
    ],
    "correct": 1,
    "explanation": "Controller REST APIs use HTTPS plus tokens/OAuth/API keys. SNMP communities and WEP are not the modern northbound auth model.",
    "difficulty": "Medium"
  },
  {
    "question": "Containers and VRFs on CCNA: which statement is most accurate?",
    "options": [
      "A container is the same thing as a VRF in IOS",
      "VRFs exist only on L2 switches with no IP",
      "Containers isolate processes/apps on a host; VRFs isolate forwarding tables on a device — virtualization at different layers",
      "Containers necessarily replace the BGP protocol"
    ],
    "correct": 2,
    "explanation": "Blueprint virtualization covers hosts (VMs/containers) and network (VRF). Different technologies; BGP remains independent.",
    "difficulty": "Medium"
  },
  {
    "question": "Cloud device management on CCNA typically means what for an admin?",
    "options": [
      "Spanning tree is no longer needed on campus",
      "Every switch becomes a Layer 1 hub",
      "IPv6 is forbidden on the LAN",
      "Centralized management/monitoring off-site (needing connectivity and access control to the cloud console), without removing the need for correct local L2/L3"
    ],
    "correct": 3,
    "explanation": "Cloud management centralizes inventory/config/telemetry, but local VLANs, routing, STP and security still must work.",
    "difficulty": "Easy"
  }
];
