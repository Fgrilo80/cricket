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
    "question": "Which Ethernet cable uses an RJ-45 connector?",
    "options": [
      "RG-59 coaxial",
      "UTP/STP twisted pair",
      "Multimode fiber",
      "V.35 serial"
    ],
    "correct": 1,
    "explanation": "Copper Ethernet uses twisted pair with RJ-45.",
    "difficulty": "Easy"
  },
  {
    "question": "Which device forwards based on destination IP?",
    "options": [
      "Hub",
      "L2 switch",
      "Router",
      "Repeater"
    ],
    "correct": 2,
    "explanation": "Routers connect different networks using destination IP.",
    "difficulty": "Easy"
  },
  {
    "question": "Which protocol maps hostnames to IPs?",
    "options": [
      "DHCP",
      "DNS",
      "ARP",
      "NAT"
    ],
    "correct": 1,
    "explanation": "DNS translates names to IP addresses.",
    "difficulty": "Easy"
  },
  {
    "question": "Can an unmanaged switch create VLANs?",
    "options": [
      "Yes, via CLI",
      "No, everything shares one broadcast domain",
      "Yes, via SNMP",
      "Only with PoE"
    ],
    "correct": 1,
    "explanation": "Unmanaged switches have no config and no VLANs.",
    "difficulty": "Easy"
  },
  {
    "question": "What is phishing?",
    "options": [
      "A Wi-Fi brute-force attack",
      "Deception to steal credentials or data, often via email",
      "An ICMP flood",
      "Port mirroring"
    ],
    "correct": 1,
    "explanation": "Phishing uses social engineering to steal data.",
    "difficulty": "Easy"
  },
  {
    "question": "Which cable transmits data with light?",
    "options": [
      "Cat6 UTP",
      "Fiber optic",
      "Coaxial",
      "USB"
    ],
    "correct": 1,
    "explanation": "Fiber uses light pulses and is immune to EMI.",
    "difficulty": "Easy"
  },
  {
    "question": "Why is SSH preferred over Telnet?",
    "options": [
      "It is faster",
      "It encrypts the management session",
      "It uses UDP",
      "It needs no IP"
    ],
    "correct": 1,
    "explanation": "SSH (port 22) is encrypted; Telnet is cleartext.",
    "difficulty": "Easy"
  },
  {
    "question": "Which OSI layer handles TCP/UDP segments?",
    "options": [
      "Network",
      "Transport",
      "Session",
      "Data link"
    ],
    "correct": 1,
    "explanation": "Layer 4 Transport is TCP and UDP.",
    "difficulty": "Medium"
  },
  {
    "question": "Which is a good password habit?",
    "options": [
      "Reuse one password everywhere",
      "Unique, long, and MFA when possible",
      "Share it in team chat",
      "Use only 4 digits"
    ],
    "correct": 1,
    "explanation": "Unique passwords plus MFA limit breach impact.",
    "difficulty": "Easy"
  },
  {
    "question": "Which Windows command shows the machine IP?",
    "options": [
      "ping",
      "ipconfig",
      "hostname -I",
      "show ip"
    ],
    "correct": 1,
    "explanation": "ipconfig or ipconfig /all shows Windows addresses.",
    "difficulty": "Easy"
  },
  {
    "question": "Which security incident should you report?",
    "options": [
      "Installing Windows updates",
      "An email asking for the boss password",
      "Changing the wallpaper",
      "Opening a browser"
    ],
    "correct": 1,
    "explanation": "Credential requests are phishing and must be reported.",
    "difficulty": "Easy"
  },
  {
    "question": "What do Cat5e/Cat6 describe?",
    "options": [
      "Fiber standards",
      "Twisted-pair cable categories and bandwidth",
      "Fiber connector types",
      "Wi-Fi channels"
    ],
    "correct": 1,
    "explanation": "UTP categories define performance.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the recommended maximum length of a copper twisted-pair (UTP) Ethernet cable?",
    "options": [
      "10 meters",
      "100 meters",
      "500 meters",
      "2 kilometers"
    ],
    "correct": 1,
    "explanation": "Ethernet standards limit a copper channel to 100 m (typically 90 m horizontal plus 10 m of patch cords) so attenuation and round-trip timing stay within spec. Longer runs need fiber or an intermediate switch.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the practical difference between T568A and T568B pinouts?",
    "options": [
      "T568A is only for fiber",
      "The orange and green pairs swap positions on pins 1-2 and 3-6",
      "T568B does not work at Gigabit speeds",
      "There is no electrical difference of any kind"
    ],
    "correct": 1,
    "explanation": "Both standards use the same four pairs; only the orange and green pairs are swapped. A cable terminated T568A on one end and T568B on the other is a crossover. T568B is the more common commercial choice in the US.",
    "difficulty": "Medium"
  },
  {
    "question": "When should single-mode fiber be preferred over multimode?",
    "options": [
      "Always in short office LANs",
      "For long-distance campus or WAN links using long-wavelength lasers",
      "Only when delivering PoE",
      "Never; multimode works at any distance"
    ],
    "correct": 1,
    "explanation": "Single-mode has a ~9 µm core and is driven by lasers, so chromatic dispersion stays low over tens of kilometers. Multimode (50/62.5 µm) is cheaper for short runs of a few hundred meters but is not the right choice for long-haul links.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Auto-MDIX do on an Ethernet port?",
    "options": [
      "Negotiates PoE power class",
      "Internally detects and corrects straight-through versus crossover cabling",
      "Disables Spanning Tree",
      "Assigns an IP address"
    ],
    "correct": 1,
    "explanation": "Auto-MDIX electronically crosses TX/RX pairs when needed, so a straight-through cable works for switch-to-switch, PC-to-PC, or switch-to-PC. On modern gear it is typically enabled together with speed/duplex autonegotiation.",
    "difficulty": "Easy"
  },
  {
    "question": "A PC without DHCP shows the address 169.254.23.10. What does that indicate?",
    "options": [
      "The default gateway was configured",
      "The host self-assigned an APIPA address because it did not receive a DHCP lease",
      "It is a valid public Internet address",
      "The cable is in loopback"
    ],
    "correct": 1,
    "explanation": "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. The OS picks an address there when DHCP fails, which allows limited local communication but no forwarding to other networks.",
    "difficulty": "Medium"
  },
  {
    "question": "How many usable host addresses are in an IPv4 /26 subnet?",
    "options": [
      "64",
      "62",
      "30",
      "126"
    ],
    "correct": 1,
    "explanation": "A /26 mask leaves 6 host bits: 2^6 = 64 total addresses. Subtract the network and broadcast addresses and 62 usable hosts remain.",
    "difficulty": "Medium"
  },
  {
    "question": "Which prefix identifies an IPv6 link-local address?",
    "options": [
      "2000::/3",
      "FE80::/10",
      "FF00::/8",
      "::1/128"
    ],
    "correct": 1,
    "explanation": "Link-local addresses start with FE80::/10 and are required on every IPv6 interface. They are used for NDP and same-link communication; routers do not forward them to other links.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the IPv6 loopback address?",
    "options": [
      "127.0.0.1",
      "::1",
      "FE80::1",
      "::"
    ],
    "correct": 1,
    "explanation": "::1/128 is the IPv6 loopback, equivalent to 127.0.0.1 in IPv4. Packets to ::1 never leave the host and are used to test the local IPv6 stack.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the primary function of ICMP?",
    "options": [
      "Assign IP addresses",
      "Carry network-layer control and diagnostic messages (echo, unreachable, and similar)",
      "Encrypt web sessions",
      "Negotiate VLANs"
    ],
    "correct": 1,
    "explanation": "ICMP (and ICMPv6) carries Layer 3 signaling: echo request/reply (ping), destination unreachable, time exceeded (used by traceroute), redirects, and more. It does not assign addresses or encrypt application data.",
    "difficulty": "Easy"
  },
  {
    "question": "How does traceroute discover each hop to the destination?",
    "options": [
      "It queries reverse DNS for every router",
      "It sends probes with increasing TTL and reads ICMP Time Exceeded replies",
      "It uses ARP at every hop across the Internet",
      "It opens a TCP port 80 session on each router"
    ],
    "correct": 1,
    "explanation": "Each probe starts with TTL 1, 2, 3, and so on. When TTL hits zero the router drops the packet and returns ICMP Time Exceeded; that source address identifies the hop. The destination typically answers with port unreachable or echo reply.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default port used by DNS?",
    "options": [
      "22",
      "53",
      "67",
      "80"
    ],
    "correct": 1,
    "explanation": "DNS uses port 53/UDP for typical queries and 53/TCP for zone transfers and large responses. Mixing it up with 67 (DHCP server), 22 (SSH), or 80 (HTTP) is a common troubleshooting mistake.",
    "difficulty": "Easy"
  },
  {
    "question": "What defines a collision domain in Ethernet?",
    "options": [
      "Every device that shares the same IP address",
      "The set of ports or media where one transmission can collide with another",
      "An entire VLAN",
      "Only the Wi-Fi segment"
    ],
    "correct": 1,
    "explanation": "On a hub, all ports share one collision domain. A switch creates a collision domain per port, and full duplex removes collisions altogether. That is different from a broadcast domain, which typically matches a VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is CSMA/CD?",
    "options": [
      "A routing protocol",
      "A half-duplex Ethernet media-access method: listen, transmit, and detect collisions",
      "A wireless encryption suite",
      "A type of optical fiber"
    ],
    "correct": 1,
    "explanation": "Carrier Sense Multiple Access with Collision Detection was used on shared Ethernet (hubs, half duplex). Switched full-duplex networks no longer need CSMA/CD because each side transmits on separate pairs or channels.",
    "difficulty": "Medium"
  },
  {
    "question": "What are the three RFC 1918 private IPv4 address ranges?",
    "options": [
      "1.0.0.0/8, 2.0.0.0/8, and 3.0.0.0/8",
      "10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16",
      "127.0.0.0/8, 169.254.0.0/16, and 224.0.0.0/4",
      "8.8.8.0/24, 1.1.1.0/24, and 9.9.9.0/24"
    ],
    "correct": 1,
    "explanation": "RFC 1918 reserves 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31), and 192.168.0.0/16 for internal use. Those prefixes are not forwarded on the public Internet; outbound access uses NAT or a proxy.",
    "difficulty": "Medium"
  },
  {
    "question": "What does CIDR stand for?",
    "options": [
      "Cisco Internal Device Register",
      "Classless Inter-Domain Routing — prefixes with variable masks instead of rigid A/B/C classes",
      "A type of coaxial cable",
      "A wireless authentication protocol"
    ],
    "correct": 1,
    "explanation": "CIDR dropped fixed classes (/8, /16, /24) and allows prefixes such as /22 or /13. That makes addressing and route summarization on the Internet and in LANs far more efficient.",
    "difficulty": "Medium"
  },
  {
    "question": "What is IPv4 address 127.0.0.1 used for?",
    "options": [
      "The Internet default gateway",
      "The host's own loopback, to test the local TCP/IP stack",
      "The LAN broadcast address",
      "The first APIPA address"
    ],
    "correct": 1,
    "explanation": "The entire 127.0.0.0/8 range is loopback; 127.0.0.1 is the address people actually use. Pinging it confirms the host IP stack works, regardless of cabling or the NIC.",
    "difficulty": "Easy"
  },
  {
    "question": "Which statement correctly describes unicast, broadcast, and multicast?",
    "options": [
      "Unicast goes to everyone; broadcast goes to one host",
      "Unicast: one destination; broadcast: everyone in the domain; multicast: a subscribed group",
      "Multicast replaces ARP",
      "Broadcast exists only in IPv6"
    ],
    "correct": 1,
    "explanation": "Unicast delivers to a single address. Broadcast (255.255.255.255 or the subnet broadcast) reaches every node in the broadcast domain. Multicast (224.0.0.0/4 or FF00::/8) is received only by hosts that joined the group.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the advantage of STP (Shielded Twisted Pair) over UTP?",
    "options": [
      "It always supports 100 km runs",
      "The foil or braid reduces electromagnetic interference (EMI)",
      "It is mandatory for Fast Ethernet",
      "It does not use an RJ-45 connector"
    ],
    "correct": 1,
    "explanation": "STP adds shielding that rejects EMI in industrial spaces, near motors, or next to elevators. It must be grounded correctly or the shield can make noise worse. UTP is sufficient in most offices.",
    "difficulty": "Easy"
  },
  {
    "question": "Approximately how much power does PoE+ (IEEE 802.3at) deliver at the PD?",
    "options": [
      "About 4 W",
      "About 15 W for 802.3af versus about 25–30 W for 802.3at",
      "100 W, but only on Fast Ethernet",
      "PoE+ does not deliver power"
    ],
    "correct": 1,
    "explanation": "802.3af (PoE) supplies up to 15.4 W at the PSE (~12.95 W at the PD). 802.3at (PoE+) raises that to 30 W at the PSE (~25.5 W at the PD), enough for many APs and PTZ cameras. 802.3bt (PoE++) goes higher still.",
    "difficulty": "Medium"
  },
  {
    "question": "Which Cisco command gives a quick summary of the IP status of every interface?",
    "options": [
      "show vlan brief",
      "show ip interface brief",
      "show mac address-table",
      "show spanning-tree"
    ],
    "correct": 1,
    "explanation": "show ip interface brief lists each interface with its IP, line status (up/down), and protocol status (up/down). It is the first Layer 3 troubleshooting command on a Cisco box.",
    "difficulty": "Easy"
  },
  {
    "question": "An Ethernet link is up but shows many CRC errors and poor performance. What is the most likely cause?",
    "options": [
      "An ACL blocking ICMP",
      "A duplex mismatch (one side half, the other full) or a damaged cable",
      "Missing DNS",
      "A different native VLAN on the PC"
    ],
    "correct": 1,
    "explanation": "A duplex mismatch causes late collisions, CRCs, and terrible throughput because one side transmits while the other is not expecting it. Bad cable, dirty SFPs, or EMI also produce CRCs. DNS or ACLs do not increment CRC counters.",
    "difficulty": "Medium"
  },
  {
    "question": "Which OSI layer deals with bits, voltages, connectors, and physical media?",
    "options": [
      "Layer 3 — Network",
      "Layer 1 — Physical",
      "Layer 4 — Transport",
      "Layer 7 — Application"
    ],
    "correct": 1,
    "explanation": "The Physical layer defines the medium (copper, fiber, radio), connectors, electrical or optical signaling, and bit timing. Cable, SFP, and PoE power problems are almost always Layer 1.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the correct TCP three-way handshake sequence?",
    "options": [
      "ACK, SYN, FIN",
      "SYN, SYN-ACK, ACK",
      "FIN, ACK, SYN",
      "RST, SYN, ACK"
    ],
    "correct": 1,
    "explanation": "The client sends SYN, the server replies SYN-ACK, and the client completes the handshake with ACK. Data transfer starts only after that. FIN begins teardown; RST aborts the session.",
    "difficulty": "Medium"
  },
  {
    "question": "Why is 'enable secret' preferred over 'enable password' in IOS?",
    "options": [
      "enable password uses AES-256 by default",
      "enable secret stores a one-way hash (MD5/type 5 or stronger); enable password is weak clear text or reversible type 7",
      "They are synonyms",
      "enable secret works only with Telnet"
    ],
    "correct": 1,
    "explanation": "enable password is legacy and may appear in clear text or type 7 (reversible). enable secret stores a one-way hash. Current IOS can use type 8/9 (scrypt/PBKDF2) with 'enable algorithm-type'.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the default VLAN on access ports of an unconfigured Cisco switch?",
    "options": [
      "VLAN 100",
      "VLAN 1",
      "VLAN 999",
      "VLAN 4094"
    ],
    "correct": 1,
    "explanation": "By default every port belongs to VLAN 1, which is also the native VLAN on 802.1Q trunks. Best practice moves user and management traffic off VLAN 1 to reduce hopping risk and mixed control traffic.",
    "difficulty": "Easy"
  },
  {
    "question": "What characterizes an access port on a switch?",
    "options": [
      "It carries every VLAN with 802.1Q tags",
      "It belongs to a single VLAN and sends untagged traffic to the host",
      "It works only when connected to routers",
      "It disables MAC learning"
    ],
    "correct": 1,
    "explanation": "An access port maps to one VLAN (switchport access vlan X). Frames toward the PC are untagged. Trunks, by contrast, tag VLANs for the neighbor (except the native VLAN).",
    "difficulty": "Medium"
  },
  {
    "question": "What is LLDP?",
    "options": [
      "A Cisco routing protocol",
      "An open IEEE 802.1AB protocol that advertises identity and capabilities to neighbors",
      "A type of ACL",
      "A wireless cipher"
    ],
    "correct": 1,
    "explanation": "LLDP is the open equivalent of CDP. It advertises chassis ID, port ID, hostname, and capabilities (including LLDP-MED for phones). It is the right choice in mixed-vendor plants where CDP is absent.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the classic Ethernet MTU (payload) in bytes?",
    "options": [
      "576",
      "1500",
      "9000",
      "64"
    ],
    "correct": 1,
    "explanation": "The standard Ethernet MTU is 1500 bytes of IP payload. Frames under 64 bytes are runts; jumbo frames (~9000) need end-to-end support. 576 is the IPv4 minimum reassembly MTU, not Ethernet.",
    "difficulty": "Easy"
  },
  {
    "question": "Why do copper cables routed next to electric motors fail more often?",
    "options": [
      "Copper melts at 5 V",
      "Electromagnetic interference (EMI) induces noise that raises CRCs and retransmissions",
      "Motors consume every MAC address",
      "Spanning Tree stops working"
    ],
    "correct": 1,
    "explanation": "Electromagnetic fields induce voltage on the pairs. That corrupts bits, increases CRC/input errors, and can drop the link. Mitigation is separation, shielded cable, fiber (immune to EMI), and proper grounding.",
    "difficulty": "Easy"
  },
  {
    "question": "How many bits are in an IEEE MAC address and how is it usually written?",
    "options": [
      "32 bits in dotted decimal",
      "48 bits in hexadecimal, typically six octets (for example 00:1A:2B:3C:4D:5E)",
      "128 bits like IPv6",
      "16 bits in binary"
    ],
    "correct": 1,
    "explanation": "The classic MAC is 48 bits: a 24-bit OUI (vendor) plus a 24-bit serial. It is written in hex. 64-bit MACs exist in some IEEE contexts, but Ethernet uses 48 bits.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the size of an IPv4 address and an IPv6 address?",
    "options": [
      "IPv4 16 bits, IPv6 32 bits",
      "IPv4 32 bits, IPv6 128 bits",
      "Both are 64 bits",
      "IPv4 128 bits, IPv6 32 bits"
    ],
    "correct": 1,
    "explanation": "IPv4 uses 32 bits (dotted decimal). IPv6 uses 128 bits (eight hexadecimal groups). That space is what enables SLAAC, multiple addresses per interface, and a practical end to public IPv4 exhaustion.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the default subnet mask of a Class A network?",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "correct": 1,
    "explanation": "Class A (1.0.0.0–126.0.0.0) uses /8, or 255.0.0.0. Class B is /16 and Class C is /24. Modern networks think in CIDR, but classful masks still show up on exams and legacy gear.",
    "difficulty": "Easy"
  },
  {
    "question": "Which TCP port does classic SMTP use for mail transfer between servers?",
    "options": [
      "110",
      "25",
      "143",
      "443"
    ],
    "correct": 1,
    "explanation": "SMTP uses port 25 between MTAs. Authenticated client submission is usually 587 (submission) or 465 (SMTPS). 110 is POP3, 143 is IMAP, and 443 is HTTPS.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the correct order of the DHCP DORA process?",
    "options": [
      "Request, Offer, Discover, Ack",
      "Discover, Offer, Request, Ack",
      "Ack, Discover, Offer, Request",
      "Offer, Ack, Discover, Request"
    ],
    "correct": 1,
    "explanation": "The client broadcasts DHCPDISCOVER; the server answers with DHCPOFFER; the client commits with DHCPREQUEST; the server confirms with DHCPACK and the lease becomes active. Without that exchange the host falls back to APIPA.",
    "difficulty": "Medium"
  },
  {
    "question": "Why does Wi-Fi use CSMA/CA instead of CSMA/CD?",
    "options": [
      "Because radio is inherently full duplex",
      "Stations cannot transmit and detect a collision at the same time on one channel, so they avoid collisions (NAV, RTS/CTS, backoff)",
      "CSMA/CD is IPv6-only",
      "Only because IEEE banned CSMA/CD for no reason"
    ],
    "correct": 1,
    "explanation": "On a shared half-duplex medium the sender's own radio is saturated, so it cannot 'hear a collision' the way shared copper can. 802.11 uses collision avoidance: carrier sense, IFS gaps, random backoff, and optionally RTS/CTS.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a typical difference between 2.4 GHz and 5 GHz Wi-Fi?",
    "options": [
      "5 GHz always goes through walls better",
      "2.4 GHz travels farther and handles obstacles better, but has fewer non-overlapping channels and more interference",
      "2.4 GHz exists only in 802.11ac",
      "Range is identical"
    ],
    "correct": 1,
    "explanation": "Lower frequencies penetrate better and reach farther; 2.4 GHz has only three non-overlapping channels (1, 6, 11) and suffers Bluetooth/microwave noise. 5 GHz (and 6 GHz) offers more spectrum and throughput at shorter range.",
    "difficulty": "Medium"
  },
  {
    "question": "IEEE 802.11ax is commercially known as which Wi-Fi generation?",
    "options": [
      "Wi-Fi 4",
      "Wi-Fi 6",
      "Wi-Fi 5",
      "Bluetooth 5"
    ],
    "correct": 1,
    "explanation": "802.11ax is Wi-Fi 6 (and 6E in the 6 GHz band). It adds OFDMA, TWT, and 1024-QAM for better efficiency in dense environments. Wi-Fi 5 is 802.11ac; Wi-Fi 4 is 802.11n.",
    "difficulty": "Medium"
  },
  {
    "question": "When connectivity fails, what should you check first in a layered approach?",
    "options": [
      "BGP policy",
      "Layer 1: cable, LEDs, SFP, power, and physical interface state",
      "QoS policies",
      "802.1X certificates"
    ],
    "correct": 1,
    "explanation": "Without a physical signal (dark LED, broken cable, missing SFP, administratively down interface) nothing above it works. Confirming Layer 1 avoids hours of pointless OSPF or DNS debugging.",
    "difficulty": "Easy"
  },
  {
    "question": "In which scenario is optical fiber clearly preferable to copper UTP?",
    "options": [
      "A 1-meter patch from PC to switch",
      "A long run, a between-building link, or a high-EMI environment where copper would exceed 100 m or pick up noise",
      "PoE power for a desk phone",
      "A router console connection"
    ],
    "correct": 1,
    "explanation": "Fiber ignores EMI, does not conduct electricity (avoiding building-to-building ground loops), and spans kilometers. Copper remains right for PoE and short runs up to 100 m. The console uses serial/USB, not Ethernet.",
    "difficulty": "Easy"
  },
  {
    "question": "Which command displays the currently active configuration in RAM on a Cisco device?",
    "options": [
      "show startup-config",
      "show running-config",
      "show flash:",
      "show version only"
    ],
    "correct": 1,
    "explanation": "running-config is the RAM copy the device is actually using. startup-config lives in NVRAM and is read at boot. Changes to running-config are lost on reload unless you save them with copy run start.",
    "difficulty": "Easy"
  },
  {
    "question": "How do you tell User EXEC from Privilege EXEC in IOS?",
    "options": [
      "User uses '#', Privilege uses '>'",
      "User EXEC shows '>' and limited commands; Privilege EXEC shows '#' after 'enable' and allows advanced show/debug and configuration",
      "There is no difference",
      "Privilege EXEC exists only on firewalls"
    ],
    "correct": 1,
    "explanation": "The '>' prompt is User EXEC (ping, some shows). The enable command (with the secret) raises you to '#' Privilege EXEC, from which you enter configuration terminal. Splitting these levels is the basis of CLI access control.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the default HTTPS port and how does it differ from HTTP?",
    "options": [
      "80, and it uses Telnet",
      "443, and it encrypts the session with TLS; HTTP on 80 is clear text",
      "22, and it uses SSH",
      "53, and it uses DNSSEC"
    ],
    "correct": 1,
    "explanation": "HTTPS wraps HTTP in TLS on port 443, protecting confidentiality and integrity. HTTP on 80 is unencrypted — credentials and cookies travel in the clear. Device management should prefer HTTPS/SSH over HTTP/Telnet.",
    "difficulty": "Easy"
  },
  {
    "question": "In subnet 192.168.10.0/24, what is the broadcast address?",
    "options": [
      "192.168.10.0",
      "192.168.10.255",
      "192.168.10.1",
      "192.168.255.255"
    ],
    "correct": 1,
    "explanation": "With /24, all 8 host bits set to 1 yield .255. .0 is the network address; .1–.254 are hosts. Traffic to 192.168.10.255 is delivered to every node in that broadcast domain.",
    "difficulty": "Medium"
  },
  {
    "question": "Compared with Cat5e, Cat6 cabling is mainly intended for what?",
    "options": [
      "Serial console only",
      "Better crosstalk immunity and 10GBASE-T support over short runs (typically up to 55 m)",
      "Replacing all metro fiber",
      "Delivering 100 W without PoE"
    ],
    "correct": 1,
    "explanation": "Cat6 has tighter crosstalk specs through 250 MHz and supports 10GBASE-T on short channels. Cat5e is fine for 1 Gb/s at 100 m. Cat6A extends 10 Gb/s to a full 100 m.",
    "difficulty": "Medium"
  },
  {
    "question": "Which optical connector is most common on modern SFP/SFP+ transceivers?",
    "options": [
      "Coaxial BNC",
      "LC (Lucent Connector), small and latched",
      "Serial DB-9",
      "Telephone RJ-11"
    ],
    "correct": 1,
    "explanation": "SFPs almost always use duplex LC. SC is older and larger (still seen on GBICs and some panels). ST is a legacy bayonet. BNC is coaxial; DB-9 is a serial console; RJ-11 is analog phone.",
    "difficulty": "Medium"
  },
  {
    "question": "A user can ping the server by IP but the browser cannot open the site by name. What is the most likely cause?",
    "options": [
      "The cable is broken",
      "DNS failure (missing, wrong, or filtered DNS server)",
      "The switch has no PoE",
      "STP blocked ICMP"
    ],
    "correct": 1,
    "explanation": "A successful IP ping proves Layers 1–3 to the server. Using the name requires DNS (port 53). Checking ipconfig/ifconfig, the configured DNS server, and nslookup/dig isolates the issue in seconds.",
    "difficulty": "Medium"
  },
  {
    "question": "A straight-through Ethernet cable typically connects which devices?",
    "options": [
      "PC to PC, or switch to switch, without Auto-MDIX",
      "PC to switch, or router to switch (MDI to MDI-X)",
      "Cisco consoles only",
      "Multimode fiber only"
    ],
    "correct": 1,
    "explanation": "A straight-through cable keeps the same pinout on both ends and connects MDI (NIC/router) to MDI-X (switch/hub). Classic PC-PC or switch-switch links used crossovers; modern Auto-MDIX makes the cable type almost irrelevant.",
    "difficulty": "Easy"
  },
  {
    "question": "How many collision domains does a 24-port Ethernet switch create in full duplex?",
    "options": [
      "1",
      "2",
      "12",
      "24"
    ],
    "correct": 3,
    "explanation": "Each switch port is its own collision domain. Full duplex eliminates actual collisions, but the per-port isolation remains: 24 ports = 24 domains. A 24-port hub would be a single collision domain.",
    "difficulty": "Medium"
  },
  {
    "question": "What bounds an IPv4 broadcast domain on a classic LAN?",
    "options": [
      "Each copper cable",
      "A VLAN or a router (L3) interface",
      "Each hub port",
      "The source MAC address"
    ],
    "correct": 1,
    "explanation": "Layer-2 broadcasts (ff:ff:ff:ff:ff:ff) stay inside a VLAN. A router (or SVI/L3) does not forward them between networks, so each VLAN/subnet is one broadcast domain.",
    "difficulty": "Medium"
  },
  {
    "question": "In the OSI model, what are the PDUs of the Transport, Network, Data Link, and Physical layers called?",
    "options": [
      "Packet, frame, segment, bit",
      "Segment, packet, frame, bits",
      "Frame, segment, packet, cell",
      "Datagram, cell, frame, segment"
    ],
    "correct": 1,
    "explanation": "Common convention: L4 segment (TCP) or datagram (UDP), L3 packet, L2 frame, L1 bits. Encapsulation adds headers as data moves down the stack.",
    "difficulty": "Medium"
  },
  {
    "question": "Which OSI layer is responsible for HTTP, DNS, and SMTP?",
    "options": [
      "Transport",
      "Application",
      "Network",
      "Data Link"
    ],
    "correct": 1,
    "explanation": "HTTP, DNS, and SMTP are application protocols. In TCP/IP the Application layer also covers OSI session and presentation functions.",
    "difficulty": "Easy"
  },
  {
    "question": "The Internet layer of the TCP/IP model maps mainly to which OSI layer?",
    "options": [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ],
    "correct": 2,
    "explanation": "The Internet layer handles IP, ICMP, and routing — OSI Network (L3) functions. Data Link plus Physical map to Network Access/Link.",
    "difficulty": "Easy"
  },
  {
    "question": "How many usable IPv4 host addresses are in a /30 subnet?",
    "options": [
      "0",
      "2",
      "4",
      "6"
    ],
    "correct": 1,
    "explanation": "A /30 has 2 host bits: 4 addresses total. Subtract network and broadcast and 2 hosts remain — typical on router-to-router point-to-point links.",
    "difficulty": "Medium"
  },
  {
    "question": "Why is an IPv4 /31 sometimes used on point-to-point links?",
    "options": [
      "To provide 30 user hosts",
      "To use both addresses without reserving network/broadcast (RFC 3021)",
      "Only on Wi-Fi",
      "It replaces IPv6 link-local"
    ],
    "correct": 1,
    "explanation": "RFC 3021 allows /31 on point-to-point links: both addresses are usable, avoiding the waste of a /30. It is not for broadcast LANs.",
    "difficulty": "Hard"
  },
  {
    "question": "Which prefix identifies a typical IPv6 global unicast (GUA) address?",
    "options": [
      "FE80::/10",
      "FF00::/8",
      "2000::/3",
      "FC00::/7"
    ],
    "correct": 2,
    "explanation": "Current GUAs sit in 2000::/3 (often starting with 2 or 3). FE80::/10 is link-local, FF00::/8 multicast, FC00::/7 unique-local (practically fd00::/8).",
    "difficulty": "Medium"
  },
  {
    "question": "Which prefix identifies IPv6 multicast?",
    "options": [
      "2000::/3",
      "FE80::/10",
      "FF00::/8",
      "::1/128"
    ],
    "correct": 2,
    "explanation": "All IPv6 multicast starts with FF. Examples: FF02::1 all-nodes link-local, FF02::2 all-routers. IPv6 has no broadcast; multicast is used instead.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the IPv6 address :: (two colons only) represent?",
    "options": [
      "Loopback",
      "Link-local all-nodes",
      "The unspecified address",
      "All-routers multicast"
    ],
    "correct": 2,
    "explanation": ":: is the unspecified address (::/128), used as a source before a host has an address. Loopback is ::1. Do not assign :: to an interface.",
    "difficulty": "Medium"
  },
  {
    "question": "Wi-Fi 5 corresponds to which IEEE standard?",
    "options": [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.11be"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 4 = 802.11n, Wi-Fi 5 = 802.11ac (mainly 5 GHz), Wi-Fi 6 = 802.11ax, Wi-Fi 7 = 802.11be.",
    "difficulty": "Easy"
  },
  {
    "question": "Which 20 MHz channels in 2.4 GHz are the classic non-overlapping set?",
    "options": [
      "1, 2, and 3",
      "1, 6, and 11",
      "3, 8, and 13",
      "5, 10, and 14"
    ],
    "correct": 1,
    "explanation": "On 2.4 GHz, channels 1, 6, and 11 (25 MHz apart) are the classic choice to minimize overlap. Adjacent channels interfere with each other.",
    "difficulty": "Medium"
  },
  {
    "question": "A kitchen microwave usually degrades which Wi-Fi band the most?",
    "options": [
      "5 GHz",
      "6 GHz",
      "2.4 GHz",
      "Optical fiber"
    ],
    "correct": 2,
    "explanation": "Many microwave ovens radiate noise around 2.4 GHz. The 5/6 GHz bands sit elsewhere and suffer less from this interference (but have shorter range).",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main risk of an open (no password) Wi-Fi network?",
    "options": [
      "DHCP stops working",
      "Others on the same BSS can capture unencrypted traffic",
      "Channels 1, 6, and 11 shut down",
      "The AP stops sending beacons"
    ],
    "correct": 1,
    "explanation": "With no Layer-2 encryption, anyone associated (and sometimes even a passive listener) can read frames. Use WPA2/WPA3 and, on public Wi-Fi, a VPN.",
    "difficulty": "Easy"
  },
  {
    "question": "What characterizes a ransomware attack?",
    "options": [
      "It sends DNS spam",
      "It encrypts the victim's files and demands a ransom for the key",
      "It only changes the SSID",
      "It is always an unplugged cable"
    ],
    "correct": 1,
    "explanation": "Ransomware is malware that encrypts data and demands payment. Mitigation: offline backups, patching, mail filtering, and not opening untrusted attachments. Paying is not the recommended fix.",
    "difficulty": "Easy"
  },
  {
    "question": "An unknown 'technician' calls the help desk asking for the administrator password. This is mainly:",
    "options": [
      "An STP failure",
      "Social engineering",
      "A PoE problem",
      "NAT overload"
    ],
    "correct": 1,
    "explanation": "Social engineering targets people, not protocol bugs. Never give credentials over the phone without a verification procedure. Report the incident.",
    "difficulty": "Medium"
  },
  {
    "question": "Leaving the factory password on a home router is dangerous because:",
    "options": [
      "NAT stops translating",
      "Public default credentials let anyone on the network reach admin access",
      "Cat6 can no longer negotiate Gigabit",
      "DHCP can only offer APIPA"
    ],
    "correct": 1,
    "explanation": "Vendors publish defaults (admin/admin, and similar). Any Wi-Fi client or exposed WAN can use them. Change them at install time and disable weak WPS.",
    "difficulty": "Easy"
  },
  {
    "question": "Look at this ping output. What does the result indicate?",
    "options": [
      "The destination is unreachable at Layer 3",
      "There is IP connectivity to 8.8.8.8, with low RTT and 0% loss",
      "DNS failed",
      "The cable is in half duplex"
    ],
    "correct": 1,
    "explanation": "Four successful ICMP echoes, 0% loss, and ~12 ms RTT show IP reachability to the destination. It does not prove HTTP or DNS; it only tests ICMP echo.",
    "difficulty": "Easy",
    "cli": "PC> ping 8.8.8.8\nPinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\nReply from 8.8.8.8: bytes=32 time=11ms TTL=117\nReply from 8.8.8.8: bytes=32 time=13ms TTL=117\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\n\nPing statistics for 8.8.8.8:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 11ms, Maximum = 13ms, Average = 12ms"
  },
  {
    "question": "Look at this traceroute. What do the asterisks at hop 4 mean?",
    "options": [
      "The destination replied successfully",
      "That hop did not return ICMP Time Exceeded in time (filter, loss, or no reply)",
      "The PC cable is broken",
      "Traceroute always uses TCP port 80"
    ],
    "correct": 1,
    "explanation": "Each hop is probed with an increasing TTL. If the router does not send Time Exceeded (ICMP policy, firewall, or loss), you see * * *. Later hops may still reach the destination.",
    "difficulty": "Medium",
    "cli": "PC> tracert 203.0.113.10\nTracing route to 203.0.113.10 over a maximum of 30 hops\n\n  1    <1 ms    <1 ms    <1 ms  192.168.1.1\n  2     4 ms     4 ms     5 ms  10.20.0.1\n  3    12 ms    11 ms    12 ms  198.51.100.1\n  4     *        *        *\n  5    28 ms    27 ms    29 ms  203.0.113.10\n\nTrace complete."
  },
  {
    "question": "A user can ping the LAN gateway but cannot ping 8.8.8.8. What is the most likely cause?",
    "options": [
      "A hidden SSID",
      "WAN/NAT forwarding failure or a missing/wrong default route on the path",
      "The switch has no MAC table",
      "The cable is Cat6 instead of Cat5e"
    ],
    "correct": 1,
    "explanation": "A ping to the gateway proves local L2/L3. Failure to a public IP points to WAN, NAT, an edge firewall, or a missing default route — not DNS (an IP was used).",
    "difficulty": "Medium"
  },
  {
    "question": "Two PCs in the same VLAN share the same IPv4 address. What symptom is typical?",
    "options": [
      "STP elects two roots",
      "Intermittent loss, duplicate-IP messages, and unstable ARP",
      "PoE turns off",
      "The trunk becomes half duplex"
    ],
    "correct": 1,
    "explanation": "Duplicate IPs cause ARP conflicts: traffic flaps between the two MACs. Windows reports an IP address conflict. Each host in the VLAN needs a unique IPv4 address.",
    "difficulty": "Medium"
  },
  {
    "question": "A switch-port link LED is dark. What should the help desk check first?",
    "options": [
      "Reformat the PC",
      "Check the cable, connector seating, and whether the far end has power/link",
      "Change spanning tree to MST",
      "Enable BGP"
    ],
    "correct": 1,
    "explanation": "No link light means Layer 1 is down. Confirm cable, port, and only then speed/duplex. Layer-3 issues (IP/DNS) come after a link exists.",
    "difficulty": "Easy"
  },
  {
    "question": "When a switch receives a unicast frame whose destination MAC is not yet in the CAM table, what does it do?",
    "options": [
      "Always drops the frame",
      "Floods the frame out the VLAN's ports except the incoming port",
      "Converts the frame to multicast 224.0.0.1",
      "Sends it only to the default gateway"
    ],
    "correct": 1,
    "explanation": "Unknown unicast flooding: the switch treats an unknown destination as needing to reach the whole VLAN. Once it sees the source MAC on a reply, it records the port in the CAM.",
    "difficulty": "Medium"
  },
  {
    "question": "Which DNS record maps a hostname to an IPv6 address?",
    "options": [
      "A",
      "AAAA",
      "MX",
      "PTR"
    ],
    "correct": 1,
    "explanation": "A maps name→IPv4; AAAA (quad-A) maps name→IPv6; MX is mail; PTR is reverse (IP→name).",
    "difficulty": "Medium"
  },
  {
    "question": "What is nslookup (or dig) used for in troubleshooting?",
    "options": [
      "To negotiate EtherChannel",
      "To query DNS and see whether a name resolves to the expected IP",
      "To encrypt HTTPS traffic",
      "To assign VLANs to ports"
    ],
    "correct": 1,
    "explanation": "nslookup/dig query a DNS resolver. If ping to an IP works but the name fails, the problem is DNS, not the WAN.",
    "difficulty": "Easy"
  },
  {
    "question": "A PC can reach others in the same VLAN but not the Internet, and the default gateway field is empty. What is missing?",
    "options": [
      "A second SSID",
      "The default gateway/route to leave the local subnet",
      "A crossover cable to the switch",
      "Disabling ARP"
    ],
    "correct": 1,
    "explanation": "Intra-VLAN traffic needs no gateway. For other networks the host sends to the default gateway (the VLAN's router/SVI). With no gateway, only the local subnet is reachable.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the essential difference between running-config and startup-config on a Cisco device?",
    "options": [
      "There is no difference",
      "Running is in RAM (active); startup is in NVRAM and is applied at boot",
      "Startup always lives in the IOS flash image",
      "Running exists only on switches, not routers"
    ],
    "correct": 1,
    "explanation": "RAM changes are lost on reload unless you copy running-config startup-config. show running-config is the live config; show startup-config is the saved one.",
    "difficulty": "Easy"
  },
  {
    "question": "Compared with Cat6, Cat6A cabling is mainly intended for what?",
    "options": [
      "Analog telephony only",
      "10GBASE-T up to 100 m with better alien-crosstalk control",
      "Always replacing single-mode fiber in the WAN",
      "PoE power without data pairs"
    ],
    "correct": 1,
    "explanation": "Cat6 often limits 10 Gb/s to short channels (~55 m in some cases). Cat6A is designed for 10GBASE-T at 100 m. Cat5e typically tops out at 1 Gb/s over 100 m.",
    "difficulty": "Medium"
  },
  {
    "question": "IPv4 address 255.255.255.255 is:",
    "options": [
      "A loopback unicast",
      "The limited broadcast of the local subnet",
      "All-routers multicast",
      "The first host of every /24"
    ],
    "correct": 1,
    "explanation": "255.255.255.255 is not forwarded by routers. It is the local limited broadcast. A /24 directed broadcast would be, for example, 192.168.1.255.",
    "difficulty": "Medium"
  },
  {
    "question": "IPv4 address 224.0.0.1 is used as:",
    "options": [
      "Directed broadcast",
      "All-hosts multicast on the local segment",
      "The RFC 1918 default gateway",
      "APIPA"
    ],
    "correct": 1,
    "explanation": "224.0.0.0/24 are link-local multicasts (not forwarded). 224.0.0.1 = all hosts; 224.0.0.2 = all routers; 224.0.0.5/6 = OSPF; 224.0.0.10 = EIGRP.",
    "difficulty": "Medium"
  },
  {
    "question": "Which metric describes delay variation between packets and is critical for voice?",
    "options": [
      "Bandwidth",
      "Jitter",
      "MTU",
      "OUI"
    ],
    "correct": 1,
    "explanation": "Jitter is latency variation. Voice is sensitive to jitter and loss; use a jitter buffer and QoS (EF). Bandwidth is capacity; latency is average delay.",
    "difficulty": "Medium"
  },
  {
    "question": "What do the first 24 bits of an IEEE MAC address identify?",
    "options": [
      "The native VLAN",
      "The manufacturer's OUI (organizationally unique identifier)",
      "The default gateway",
      "The cable type"
    ],
    "correct": 1,
    "explanation": "A 48-bit MAC splits into a 24-bit OUI (vendor) and a 24-bit device identifier. The U/L and I/G bits in the first octet have special meaning.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a denial-of-service (DoS) attack on a network?",
    "options": [
      "Encrypting files for ransom",
      "Exhausting resources (CPU, bandwidth, sessions) so legitimate service fails",
      "Translating private IPs to public ones",
      "Electing the root bridge"
    ],
    "correct": 1,
    "explanation": "DoS (and distributed DDoS) makes a service unavailable by overload. Mitigation: ACLs, rate-limit, edge anti-DDoS, CoPP on routers. It is not ransomware.",
    "difficulty": "Easy"
  },
  {
    "question": "Least privilege for help-desk access means:",
    "options": [
      "Everyone shares the enable secret",
      "Each account has only the permissions required for the role",
      "Always disable the firewall",
      "Use Telnet instead of SSH"
    ],
    "correct": 1,
    "explanation": "Least privilege reduces the blast radius of a compromised account. On Cisco devices use AAA (RADIUS/TACACS+) with per-user privileges, not a shared enable password.",
    "difficulty": "Easy"
  },
  {
    "question": "On Windows, ipconfig /all shows the DHCP server. Why is that useful?",
    "options": [
      "To compute OSPF cost",
      "To see who issued the lease and whether the address is static or dynamic",
      "To view the switch MAC table",
      "To enable PortFast"
    ],
    "correct": 1,
    "explanation": "DHCP Server plus lease obtained/expires distinguish a dynamic IP from a static one. An unexpected server can indicate rogue DHCP.",
    "difficulty": "Medium"
  },
  {
    "question": "About how many watts does classic IEEE 802.3af PoE deliver at the PD?",
    "options": [
      "4 W",
      "15.4 W at the PSE / ~12.95 W at the PD",
      "60 W",
      "90 W"
    ],
    "correct": 1,
    "explanation": "802.3af (PoE): 15.4 W at the PSE, about 12.95 W at the PD after cable loss. 802.3at (PoE+) ~30/25.5 W. 802.3bt (Type 3/4) rises to 60/90 W.",
    "difficulty": "Medium"
  },
  {
    "question": "When do you prefer traceroute over a simple ping?",
    "options": [
      "To encrypt traffic",
      "To see which hops the path fails at or where latency jumps",
      "To assign VLANs",
      "To negotiate duplex"
    ],
    "correct": 1,
    "explanation": "Ping tests one destination. Traceroute lists the path (expired TTL) and shows whether the failure is LAN, ISP WAN, or the remote server.",
    "difficulty": "Easy"
  },
  {
    "question": "Is hiding the SSID (not broadcasting the network name) a strong defense?",
    "options": [
      "Yes, it equals WPA3-Enterprise",
      "No: the SSID still appears in data frames and gives a false sense of security",
      "Yes, it blocks all association",
      "It only works on 6 GHz"
    ],
    "correct": 1,
    "explanation": "SSID-less beacons do not hide the network from anyone capturing probes or data. Use WPA2/WPA3 and 802.1X for real control. A hidden SSID still annoys legitimate clients.",
    "difficulty": "Medium"
  },
  {
    "question": "A DHCP Discover is sent as:",
    "options": [
      "Unicast to 8.8.8.8",
      "Broadcast (source 0.0.0.0, destination 255.255.255.255) because the client has no IP yet",
      "OSPF multicast 224.0.0.5",
      "IPv6 anycast"
    ],
    "correct": 1,
    "explanation": "In DORA, Discover and Request are broadcasts. The client uses 0.0.0.0 as the source. Offer and Ack come from the server (sometimes also as broadcasts).",
    "difficulty": "Medium"
  },
  {
    "question": "Why do DHCP, DNS queries, and NTP use UDP instead of TCP?",
    "options": [
      "UDP always guarantees retransmission",
      "They are short transactions that do not need a reliable session; less overhead",
      "UDP encrypts automatically",
      "TCP cannot use port 53"
    ],
    "correct": 1,
    "explanation": "UDP is connectionless with low overhead. The application handles retries (DHCP re-sends Discover; DNS can retry or query another server). DNS zone transfers may use TCP.",
    "difficulty": "Medium"
  },
  {
    "question": "Which statement best describes encapsulation going down the OSI model?",
    "options": [
      "Each layer strips the lower-layer header",
      "Each layer adds its header (and sometimes a trailer) to the upper-layer data",
      "Only the physical layer adds headers",
      "The switch always strips IP and the router always strips MAC"
    ],
    "correct": 1,
    "explanation": "The application hands data to L4, which adds TCP/UDP, L3 adds IP, L2 adds the Ethernet header and FCS, L1 serializes bits. On the way up, headers are removed.",
    "difficulty": "Medium"
  },
  {
    "question": "On a 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 network, traffic to the public Internet normally requires:",
    "options": [
      "A hub only",
      "NAT/PAT or publicly routable addresses, plus a default gateway",
      "Disabling ARP",
      "Changing every MAC to FF:FF:FF:FF:FF:FF"
    ],
    "correct": 1,
    "explanation": "RFC 1918 is not routable on the Internet. The CPE/router performs PAT to a public IP, or you use IPv6 GUA. Without a gateway and without translation, private addresses do not leave.",
    "difficulty": "Easy"
  },
  {
    "question": "Wi-Fi 4 corresponds to which IEEE standard?",
    "options": [
      "802.11a",
      "802.11g",
      "802.11n",
      "802.11ac"
    ],
    "correct": 2,
    "explanation": "802.11n (Wi-Fi 4) introduced MIMO and 40 MHz and operates on 2.4 and 5 GHz. 802.11g is 2.4 GHz-only at 54 Mb/s; 802.11ac is Wi-Fi 5.",
    "difficulty": "Easy"
  },
  {
    "question": "A toner/cable tester at the help desk is mainly used to:",
    "options": [
      "Configure OSPF",
      "Identify the pair/port on the patch panel and detect opens, shorts, or crossed pairs",
      "Upgrade IOS",
      "Generate SSH keys"
    ],
    "correct": 1,
    "explanation": "Layer-1 tools: a toner/probe finds the cable in the panel; a tester checks continuity and wire map. It does not replace ping/DNS, but it avoids hours chasing the wrong pair.",
    "difficulty": "Easy"
  },
  {
    "question": "On public networks (cafe, airport), which habit reduces interception risk?",
    "options": [
      "Disable the laptop firewall",
      "Use VPN/HTTPS and avoid sensitive work on open portals without encryption",
      "Change the MAC to ff:ff:ff:ff:ff:ff",
      "Force half duplex"
    ],
    "correct": 1,
    "explanation": "Public Wi-Fi may be open or shared. VPNs encrypt to the concentrator; HTTPS protects the site. Avoid banking on captive portals without visible TLS.",
    "difficulty": "Easy"
  },
  {
    "question": "A ping to an IPv6 fe80:: address on Windows fails without a zone. What is missing?",
    "options": [
      "An APIPA address",
      "The zone/interface identifier (fe80::x%eth0 / %13), because link-local is not unique on the node",
      "A GRE tunnel",
      "Disabling NDP"
    ],
    "correct": 1,
    "explanation": "Link-local exists on every interface. Without %zone the OS does not know which NIC to use. ping fe80::1%Ethernet or -6 with a zone id.",
    "difficulty": "Hard"
  }
];
