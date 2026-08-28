window.QUIZ_BANK = [
  {
    "question": "What is the primary function of a switch in a local network?",
    "options": [
      "Connect devices in different networks",
      "Connect devices in the same local network using MAC addresses",
      "Route packets between networks",
      "Dynamically provide IP addresses"
    ],
    "correct": 1,
    "explanation": "Switches operate at Layer 2 (Data Link) of the OSI model and use MAC addresses to forward frames within the same LAN.",
    "difficulty": "Easy"
  },
  {
    "question": "What does the acronym OSI stand for?",
    "options": [
      "Open Systems Interconnection",
      "Online System Integration",
      "Operating System Interface",
      "Open Source Internet"
    ],
    "correct": 0,
    "explanation": "The OSI (Open Systems Interconnection) model is a conceptual 7-layer model used to describe how network devices communicate.",
    "difficulty": "Easy"
  },
  {
    "question": "Which layer of the OSI model is responsible for logical addressing and routing?",
    "options": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "correct": 1,
    "explanation": "The Network Layer (Layer 3) is responsible for logical addressing (IP) and routing packets between different networks.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between a hub and a switch?",
    "options": [
      "Hub is faster than switch",
      "Switch uses MAC addresses to forward frames, hub sends to all ports",
      "Hub is more secure than switch",
      "There is no difference"
    ],
    "correct": 1,
    "explanation": "Hubs are Layer 1 devices that replicate the signal to all ports. Switches are intelligent and use a MAC table.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a private IP address?",
    "options": [
      "Address used only on the public internet",
      "Non-routable address on the internet used in local networks",
      "Address automatically assigned by DHCP",
      "Broadcast address"
    ],
    "correct": 1,
    "explanation": "Private IP addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routable on the internet and are used in internal networks.",
    "difficulty": "Medium"
  },
  {
    "question": "Which Cisco IOS command shows the learned MAC address table?",
    "options": [
      "show ip route",
      "show mac address-table",
      "show interfaces",
      "show arp"
    ],
    "correct": 1,
    "explanation": "The 'show mac address-table' command displays the MAC address table learned by the switch.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a VLAN?",
    "options": [
      "A physically separate network",
      "A logical network created on a switch to segment traffic",
      "A routing protocol",
      "A type of cable"
    ],
    "correct": 1,
    "explanation": "VLANs (Virtual LANs) allow logical segmentation of a physical network into multiple isolated networks on the same switch.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the standard speed of a Gigabit Ethernet port?",
    "options": [
      "10 Mbps",
      "100 Mbps",
      "1000 Mbps",
      "10 Gbps"
    ],
    "correct": 2,
    "explanation": "Gigabit Ethernet (1000BASE-T) operates at 1000 Mbps (1 Gbps).",
    "difficulty": "Easy"
  },
  {
    "question": "What does the 'ping' command do?",
    "options": [
      "Sends TCP packets",
      "Tests connectivity using ICMP Echo Request/Reply",
      "Configures static routes",
      "Shows the ARP table"
    ],
    "correct": 1,
    "explanation": "The ping command uses the ICMP protocol to test connectivity between two devices.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the default subnet mask for a Class C network?",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "correct": 2,
    "explanation": "Class C networks use the default mask 255.255.255.0 (/24).",
    "difficulty": "Easy"
  },
  {
    "question": "What is PoE (Power over Ethernet)?",
    "options": [
      "High-speed data transmission",
      "Supplying electrical power through the Ethernet cable",
      "Security protocol",
      "Type of fiber optic"
    ],
    "correct": 1,
    "explanation": "PoE allows devices like IP cameras and VoIP phones to receive power through the same Ethernet cable used for data.",
    "difficulty": "Medium"
  },
  {
    "question": "Which protocol is used for automatic IP address assignment?",
    "options": [
      "DNS",
      "DHCP",
      "ARP",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configurations.",
    "difficulty": "Easy"
  },
  {
    "question": "What does full duplex mean?",
    "options": [
      "Communication in one direction only",
      "Simultaneous communication in both directions",
      "Half-duplex communication",
      "No communication"
    ],
    "correct": 1,
    "explanation": "Full-duplex allows devices to transmit and receive data simultaneously, eliminating collisions.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the ARP protocol?",
    "options": [
      "Resolve name to IP",
      "Resolve IP to MAC address",
      "Route packets",
      "Encrypt data"
    ],
    "correct": 1,
    "explanation": "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on the local network.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a default gateway?",
    "options": [
      "The first device on the network",
      "The router that forwards traffic outside the local network",
      "A DNS server",
      "A manageable switch"
    ],
    "correct": 1,
    "explanation": "The default gateway is the device (usually a router) that forwards packets destined for external networks.",
    "difficulty": "Easy"
  },
  {
    "question": "Which command shows active interfaces on a Cisco router?",
    "options": [
      "show running-config",
      "show ip interface brief",
      "show version",
      "show clock"
    ],
    "correct": 1,
    "explanation": "The 'show ip interface brief' command displays a quick summary of the status of all interfaces.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a collision in an Ethernet network?",
    "options": [
      "When two devices send data at the same time in half-duplex",
      "When there is a cable failure",
      "When the switch is overloaded",
      "When there is a loop in the network"
    ],
    "correct": 0,
    "explanation": "Collisions occur in half-duplex networks when two devices transmit simultaneously.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary function of a firewall?",
    "options": [
      "Increase network speed",
      "Control inbound and outbound traffic based on security rules",
      "Assign IP addresses",
      "Connect Wi-Fi networks"
    ],
    "correct": 1,
    "explanation": "Firewalls inspect and control network traffic based on predefined security rules.",
    "difficulty": "Easy"
  },
  {
    "question": "What is SSID in a wireless network?",
    "options": [
      "Network password",
      "Wireless network identifier name",
      "Frequency channel",
      "Encryption type"
    ],
    "correct": 1,
    "explanation": "SSID (Service Set Identifier) is the name of the wireless network that clients see when scanning for available networks.",
    "difficulty": "Easy"
  },
  {
    "question": "Which protocol is used for secure remote management of Cisco devices?",
    "options": [
      "Telnet",
      "SSH",
      "HTTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "SSH (Secure Shell) provides encrypted and secure remote access, unlike insecure Telnet.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a 'crossover cable' used for?",
    "options": [
      "Connecting two switches directly",
      "Connecting a computer to a switch",
      "Fiber optic cable",
      "Power cable"
    ],
    "correct": 0,
    "explanation": "Crossover cable is used to connect similar devices (switch to switch or PC to PC) directly.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default port for the HTTP protocol?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "correct": 2,
    "explanation": "HTTP uses port 80 by default. HTTPS uses port 443.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a loopback interface?",
    "options": [
      "Physical interface for testing",
      "Virtual interface that remains always active",
      "WAN connection interface",
      "Management interface"
    ],
    "correct": 1,
    "explanation": "Loopback is a virtual interface that remains always up/up and is used for testing and management.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the command 'copy running-config startup-config' do?",
    "options": [
      "Erase the configuration",
      "Save the current configuration to NVRAM",
      "Restart the device",
      "Show the configuration"
    ],
    "correct": 1,
    "explanation": "This command saves the running configuration (RAM) to the startup configuration (NVRAM).",
    "difficulty": "Easy"
  },
  {
    "question": "What is NAT (Network Address Translation)?",
    "options": [
      "Domain name translation",
      "Translation of private IP addresses to public",
      "Routing protocol",
      "Type of cable"
    ],
    "correct": 1,
    "explanation": "NAT allows multiple devices on a private network to share a single public IP address.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between TCP and UDP?",
    "options": [
      "TCP is faster than UDP",
      "TCP is connection-oriented and reliable, UDP is connectionless and faster",
      "There is no difference",
      "UDP is only used for email"
    ],
    "correct": 1,
    "explanation": "TCP provides reliable delivery with flow control and retransmission. UDP is faster but does not guarantee delivery.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a trunk port on a switch?",
    "options": [
      "Port that belongs to a single VLAN",
      "Port that carries traffic from multiple VLANs",
      "Management port",
      "PoE port"
    ],
    "correct": 1,
    "explanation": "Trunk ports carry traffic from multiple VLANs between switches using 802.1Q tags.",
    "difficulty": "Medium"
  },
  {
    "question": "Which command displays the routing table on a Cisco router?",
    "options": [
      "show ip route",
      "show interfaces",
      "show arp",
      "show clock"
    ],
    "correct": 0,
    "explanation": "The 'show ip route' command displays the routing table with all known routes.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a MAC address?",
    "options": [
      "Dynamic IP address",
      "Unique 48-bit physical address burned into network hardware",
      "Logical network address",
      "Network password"
    ],
    "correct": 1,
    "explanation": "A MAC address is a unique 48-bit physical identifier assigned by the manufacturer to the network interface.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the function of the STP (Spanning Tree Protocol)?",
    "options": [
      "Increase network speed",
      "Prevent loops in networks with redundant switches",
      "Assign IP addresses",
      "Encrypt data"
    ],
    "correct": 1,
    "explanation": "STP prevents loops in networks with redundant paths by blocking redundant ports.",
    "difficulty": "Medium"
  },
  {
    "question": "What does 'up/up' mean in the status of a Cisco interface?",
    "options": [
      "Administratively down interface",
      "Interface with physical problems",
      "Active and operational interface at Layers 1 and 2",
      "Interface under maintenance"
    ],
    "correct": 2,
    "explanation": "'up/up' means the interface is physically active (Layer 1) and logically operational (Layer 2).",
    "difficulty": "Easy"
  },
  {
    "question": "What is the default port for the SSH protocol?",
    "options": [
      "21",
      "22",
      "23",
      "80"
    ],
    "correct": 1,
    "explanation": "SSH uses port 22 by default.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a broadcast domain?",
    "options": [
      "Group of devices that can communicate directly without a router",
      "Group of devices that receive broadcasts",
      "Wireless network",
      "Type of cable"
    ],
    "correct": 1,
    "explanation": "A broadcast domain is the set of devices that receive broadcast messages sent by any of them.",
    "difficulty": "Medium"
  },
  {
    "question": "Which command is used to configure an interface with an IP address?",
    "options": [
      "ip address 192.168.1.1 255.255.255.0",
      "interface ip 192.168.1.1",
      "set ip 192.168.1.1",
      "config ip 192.168.1.1"
    ],
    "correct": 0,
    "explanation": "The correct command is 'ip address [IP] [mask]' in interface configuration mode.",
    "difficulty": "Medium"
  },
  {
    "question": "What is WPA3 in wireless networks?",
    "options": [
      "Routing protocol",
      "Latest and most secure wireless security standard",
      "Type of antenna",
      "Frequency channel"
    ],
    "correct": 1,
    "explanation": "WPA3 is the latest wireless security standard, offering better protection against attacks.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the 'show version' command?",
    "options": [
      "Show IOS version and hardware information",
      "Show current configuration",
      "Restart the device",
      "Erase NVRAM"
    ],
    "correct": 0,
    "explanation": "The 'show version' command displays the IOS software version, hardware model, and uptime.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a patch panel?",
    "options": [
      "Device for physical cable connections in a rack",
      "Type of switch",
      "Wireless router",
      "DHCP server"
    ],
    "correct": 0,
    "explanation": "A patch panel is a passive device that organizes and facilitates cable connections in a network rack.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the difference between half-duplex and full-duplex?",
    "options": [
      "Half-duplex allows simultaneous communication",
      "Full-duplex allows communication in one direction only",
      "Half-duplex allows communication in one direction at a time",
      "There is no difference"
    ],
    "correct": 2,
    "explanation": "Half-duplex allows communication in only one direction at a time (with collisions). Full-duplex allows both directions simultaneously.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a console cable?",
    "options": [
      "Normal Ethernet cable",
      "Serial cable for command line (CLI) access on Cisco devices",
      "Power cable",
      "Crossover cable"
    ],
    "correct": 1,
    "explanation": "Console cable (usually RJ45 to DB9) is used for direct serial connection to the device for initial CLI configuration.",
    "difficulty": "Easy"
  },
  {
    "question": "Which protocol is used for time synchronization in networks?",
    "options": [
      "DNS",
      "NTP",
      "DHCP",
      "ARP"
    ],
    "correct": 1,
    "explanation": "NTP (Network Time Protocol) is used to synchronize device clocks on a network with high precision.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'err-disabled' on a Cisco interface?",
    "options": [
      "Normal interface",
      "Interface disabled due to error (e.g. loop, security violation)",
      "Interface under maintenance",
      "PoE interface"
    ],
    "correct": 1,
    "explanation": "Err-disabled is a protective state where the interface is automatically disabled due to errors like loops or port-security violations.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary function of a wireless Access Point?",
    "options": [
      "Packet routing",
      "Connect wireless devices to the wired network",
      "Assign IP addresses",
      "Filter traffic"
    ],
    "correct": 1,
    "explanation": "Access Points (APs) allow wireless devices to connect to the wired network, acting as a bridge.",
    "difficulty": "Easy"
  },
  {
    "question": "What is CDP (Cisco Discovery Protocol)?",
    "options": [
      "Routing protocol",
      "Cisco proprietary protocol to discover neighboring devices",
      "Security protocol",
      "Backup protocol"
    ],
    "correct": 1,
    "explanation": "CDP allows Cisco devices to discover information about directly connected neighboring devices.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the /24 subnet mask in decimal notation?",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "correct": 0,
    "explanation": "/24 corresponds to the mask 255.255.255.0.",
    "difficulty": "Easy"
  },
  {
    "question": "What happens when you use the 'no shutdown' command on an interface?",
    "options": [
      "Disables the interface",
      "Enables the interface (puts it in up state)",
      "Restarts the interface",
      "Erases the configuration"
    ],
    "correct": 1,
    "explanation": "The 'no shutdown' command enables an interface that was administratively down.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the function of the 'reload' command?",
    "options": [
      "Save configuration",
      "Restart the device",
      "Erase configuration",
      "Show logs"
    ],
    "correct": 1,
    "explanation": "The 'reload' command restarts the Cisco device.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a 'management VLAN'?",
    "options": [
      "VLAN for user data traffic",
      "VLAN dedicated to switch management",
      "VLAN for voice",
      "VLAN for video"
    ],
    "correct": 1,
    "explanation": "Management VLAN is used for management traffic (SSH, SNMP, etc.) and should be isolated for security.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main advantage of using manageable switches?",
    "options": [
      "They are cheaper",
      "They allow configuration, VLANs, QoS and monitoring",
      "They are faster than unmanaged",
      "They don't need power"
    ],
    "correct": 1,
    "explanation": "Manageable switches offer advanced features like VLANs, QoS, SNMP, port-security and CLI.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'port-security' on Cisco switches?",
    "options": [
      "Feature to limit the number of MAC addresses per port",
      "Routing protocol",
      "Type of cable",
      "Encryption method"
    ],
    "correct": 0,
    "explanation": "Port-security allows restricting access to a port based on authorized MAC addresses.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the 'show cdp neighbors' command?",
    "options": [
      "Show neighbors discovered via CDP",
      "Show routing table",
      "Show VLAN configuration",
      "Show system logs"
    ],
    "correct": 0,
    "explanation": "The 'show cdp neighbors' command displays neighboring Cisco devices discovered by CDP.",
    "difficulty": "Medium"
  },
  {
    "question": "What is an 'SFP' in Cisco equipment?",
    "options": [
      "Type of processor",
      "Hot-swappable fiber optic or copper transceiver module",
      "Security protocol",
      "Type of memory"
    ],
    "correct": 1,
    "explanation": "SFP (Small Form-factor Pluggable) is a compact hot-swappable module for fiber or copper ports.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the command 'show interfaces status' do?",
    "options": [
      "Show status of all interfaces",
      "Show VLAN configuration",
      "Restart the switch",
      "Clear logs"
    ],
    "correct": 0,
    "explanation": "The 'show interfaces status' command displays the operational status of all switch ports.",
    "difficulty": "Medium"
  }
];
