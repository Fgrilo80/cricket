window.QUIZ_BANK = [
  {
    "question": "What is the primary function of a switch in a local network?",
    "options": [
      "Connect hosts that sit on separate IP networks via a router",
      "Connect devices in the same local network using MAC addresses",
      "Forward IP packets between networks using a routing table",
      "Hand out IPv4 addresses dynamically from a DHCP server"
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
      "A hub sends frames faster than a switch by skipping the MAC lookup",
      "Switch uses MAC addresses to forward frames, hub sends to all ports",
      "A hub is more secure than a switch since it isolates each port",
      "There is no practical difference between a hub and a switch"
    ],
    "correct": 1,
    "explanation": "Hubs are Layer 1 devices that replicate the signal to all ports. Switches are intelligent and use a MAC table.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a private IP address?",
    "options": [
      "A public routable address used only on the global internet",
      "Non-routable address on the internet used in local networks",
      "An IPv4 address handed out automatically by a DHCP server",
      "The broadcast address sent to every host on the local LAN"
    ],
    "correct": 1,
    "explanation": "Private IP addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routable on the internet and are used in internal networks.",
    "difficulty": "Medium"
  },
  {
    "question": "Which Cisco IOS command shows the learned MAC address table?",
    "options": [
      "command show ip route",
      "show mac address-table",
      "show interfaces brief",
      "IOS command show arp"
    ],
    "correct": 1,
    "explanation": "The 'show mac address-table' command displays the MAC address table learned by the switch.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a VLAN?",
    "options": [
      "A physical network split by its own cables and switches",
      "A logical network created on a switch to segment traffic",
      "A routing protocol such as OSPF running between routers",
      "A copper cable type used on the switch access ports"
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
    "explanation": "Gigabit Ethernet over copper (1000BASE-T) runs at 1000 Mbps (1 Gbps) on Cat5e/Cat6. It is not Fast Ethernet (100 Mbps) and not 10 Gbps.",
    "difficulty": "Easy"
  },
  {
    "question": "What does the 'ping' command do?",
    "options": [
      "Sends TCP packets to test a port on the host",
      "Tests connectivity using ICMP Echo Request/Reply",
      "Sets static routes with the ip route command",
      "Shows the ARP table and its IP to MAC mappings"
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
    "explanation": "IPv4 Class C defaults to mask 255.255.255.0 (/24): 24 network bits and 8 host bits. Class A is /8 and Class B is /16.",
    "difficulty": "Easy"
  },
  {
    "question": "What is PoE (Power over Ethernet)?",
    "options": [
      "High-speed data transmission over the Ethernet cable",
      "Supplying electrical power through the Ethernet cable",
      "A security protocol that encrypts Ethernet traffic",
      "A fiber-optic type that carries light over distance"
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
      "DNS: resolve name to IP",
      "Resolve IP to MAC address",
      "Route packets on the LAN",
      "Encrypt data on the LAN"
    ],
    "correct": 1,
    "explanation": "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on the local network.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a default gateway?",
    "options": [
      "The first host linked when the local network is created",
      "The router that forwards traffic outside the local network",
      "A DNS server that translates host names into IP addresses",
      "A managed switch that only forwards frames by MAC table"
    ],
    "correct": 1,
    "explanation": "The default gateway is the device (usually a router) that forwards packets destined for external networks.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a collision in an Ethernet network?",
    "options": [
      "When two devices send data at the same time in half-duplex",
      "When an Ethernet cable fails and the physical link drops",
      "When the switch is overloaded and drops frames on a port",
      "When a Layer 2 loop makes broadcasts circle the LAN"
    ],
    "correct": 0,
    "explanation": "Collisions occur in half-duplex networks when two devices transmit simultaneously.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary function of a firewall?",
    "options": [
      "Increase network speed by applying a bandwidth policy",
      "Control inbound and outbound traffic based on security rules",
      "Assign IP addresses to hosts through the DHCP protocol",
      "Connect separate Wi-Fi networks as a wireless access point"
    ],
    "correct": 1,
    "explanation": "Firewalls inspect and control network traffic based on predefined security rules.",
    "difficulty": "Easy"
  },
  {
    "question": "What is SSID in a wireless network?",
    "options": [
      "Secret password of the WLAN",
      "Wireless network identifier name",
      "Radio frequency channel in use",
      "Encryption type used on frames"
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
      "Straight cable, PC to a switch",
      "Fiber cable used for long links",
      "Power cord feeding the switch"
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
    "explanation": "HTTP uses TCP port 80 by default; HTTPS (HTTP over TLS) uses TCP 443. Do not confuse with DNS (53), SSH (22), or Telnet (23).",
    "difficulty": "Easy"
  },
  {
    "question": "What is a loopback interface?",
    "options": [
      "Physical interface used only in local tests",
      "Virtual interface that remains always active",
      "Serial interface used for the WAN link",
      "Physical interface only for management"
    ],
    "correct": 1,
    "explanation": "Loopback is a virtual interface that remains always up/up and is used for testing and management.",
    "difficulty": "Medium"
  },
  {
    "question": "What does the command 'copy running-config startup-config' do?",
    "options": [
      "Erase the saved configuration in NVRAM",
      "Save the current configuration to NVRAM",
      "Reload the router and restart the IOS",
      "Show the running configuration in RAM"
    ],
    "correct": 1,
    "explanation": "This command saves the running configuration (RAM) to the startup configuration (NVRAM).",
    "difficulty": "Easy"
  },
  {
    "question": "What is NAT (Network Address Translation)?",
    "options": [
      "Translation of host names into IP addresses",
      "Translation of private IP addresses to public",
      "Routing protocol sharing paths between LANs",
      "Twisted-pair cable type used inside the LAN"
    ],
    "correct": 1,
    "explanation": "NAT allows multiple devices on a private network to share a single public IP address.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the difference between TCP and UDP?",
    "options": [
      "TCP is faster than UDP because it confirms every segment sent",
      "TCP is connection-oriented and reliable, UDP is connectionless and faster",
      "TCP and UDP work the same way and guarantee the same delivery",
      "UDP is used only to send email, such as SMTP traffic on port 25"
    ],
    "correct": 1,
    "explanation": "TCP provides reliable delivery with flow control and retransmission. UDP is faster but does not guarantee delivery.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a trunk port on a switch?",
    "options": [
      "Access port that belongs to a single VLAN",
      "Port that carries traffic from multiple VLANs",
      "Management port used to configure the switch",
      "PoE port that supplies power to an IP phone"
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
    "explanation": "show ip route lists the IP routing table: connected, static, and dynamic routes with codes, next hops, and metrics. It is not the ARP or MAC table.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a MAC address?",
    "options": [
      "A dynamic IP address assigned by the DHCP server",
      "Unique 48-bit physical address burned into network hardware",
      "Logical network address, such as an IPv4 at layer 3",
      "Wireless network password requested when a client joins"
    ],
    "correct": 1,
    "explanation": "A MAC address is a unique 48-bit physical identifier assigned by the manufacturer to the network interface.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the function of the STP (Spanning Tree Protocol)?",
    "options": [
      "Increase the speed of links between switches",
      "Prevent loops in networks with redundant switches",
      "Assign IP addresses to hosts by using DHCP",
      "Encrypt the data that passes on the switches"
    ],
    "correct": 1,
    "explanation": "STP prevents loops in networks with redundant paths by blocking redundant ports.",
    "difficulty": "Medium"
  },
  {
    "question": "What does 'up/up' mean in the status of a Cisco interface?",
    "options": [
      "Interface shut down by an administrative command",
      "Interface with a Layer 1 physical link failure",
      "Active and operational interface at Layers 1 and 2",
      "Interface placed into maintenance by an operator"
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
    "explanation": "SSH listens on TCP port 22 by default and encrypts management sessions. Telnet uses 23 in cleartext; HTTPS is 443.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a broadcast domain?",
    "options": [
      "Unicast hosts that talk with no router",
      "Group of devices that receive broadcasts",
      "Merely an 802.11 wireless network",
      "A cable type, such as copper or fiber"
    ],
    "correct": 1,
    "explanation": "A broadcast domain is the set of devices that receive broadcast messages sent by any of them.",
    "difficulty": "Medium"
  },
  {
    "question": "Which command is used to configure an interface with an IP address?",
    "options": [
      "ip address 192.168.1.1 255.255.255.0",
      "interface ip 192.168.1.1 on IOS",
      "set ip 192.168.1.1 from another OS",
      "config ip 192.168.1.1 in EXEC mode"
    ],
    "correct": 0,
    "explanation": "The correct command is 'ip address [IP] [mask]' in interface configuration mode.",
    "difficulty": "Medium"
  },
  {
    "question": "What is WPA3 in wireless networks?",
    "options": [
      "A routing protocol such as OSPF or RIPv2",
      "Latest and most secure wireless security standard",
      "An external antenna type on the access point",
      "A radio frequency channel, such as channel 6"
    ],
    "correct": 1,
    "explanation": "WPA3 is the latest wireless security standard, offering better protection against attacks.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the 'show version' command?",
    "options": [
      "Show IOS version and hardware information",
      "Show the running-config stored in RAM",
      "Reload the device and reboot the IOS",
      "Erase NVRAM with erase startup-config"
    ],
    "correct": 0,
    "explanation": "The 'show version' command displays the IOS software version, hardware model, and uptime.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a patch panel?",
    "options": [
      "Device for physical cable connections in a rack",
      "A switch type that forwards Ethernet frames",
      "A wireless router that routes IP packets",
      "A DHCP server that leases addresses to hosts"
    ],
    "correct": 0,
    "explanation": "A patch panel is a passive device that organizes and facilitates cable connections in a network rack.",
    "difficulty": "Easy"
  },
  {
    "question": "What does the command 'show interfaces status' do?",
    "options": [
      "Show status of all interfaces",
      "Display VLANs with show vlan",
      "Reboot the switch via reload",
      "Clear logs via clear logging"
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
      "Straight-through Ethernet cable linking a PC to a switch",
      "Serial cable for command line (CLI) access on Cisco devices",
      "Power cord that feeds electrical power to the device",
      "Crossover cable used to link two switches or two PCs"
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
      "A normal interface forwarding frames with no error",
      "Interface disabled due to error (e.g. loop, security violation)",
      "An interface placed into maintenance by the operator",
      "A PoE interface that supplies power to the endpoint"
    ],
    "correct": 1,
    "explanation": "Err-disabled is a protective state where the interface is automatically disabled due to errors like loops or port-security violations.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary function of a wireless Access Point?",
    "options": [
      "Route IP packets between separate subnets",
      "Connect wireless devices to the wired network",
      "Assign IP addresses to hosts using DHCP",
      "Filter traffic using rules from an ACL"
    ],
    "correct": 1,
    "explanation": "Access Points (APs) allow wireless devices to connect to the wired network, acting as a bridge.",
    "difficulty": "Easy"
  },
  {
    "question": "What is CDP (Cisco Discovery Protocol)?",
    "options": [
      "Routing protocol that exchanges routes between neighbors",
      "Cisco proprietary protocol to discover neighboring devices",
      "Security protocol that encrypts traffic between switches",
      "Backup protocol that copies the configuration to a server"
    ],
    "correct": 1,
    "explanation": "CDP allows Cisco devices to discover information about directly connected neighboring devices.",
    "difficulty": "Medium"
  },
  {
    "question": "What happens when you use the 'no shutdown' command on an interface?",
    "options": [
      "Disables the interface using shutdown",
      "Enables the interface (puts it in up state)",
      "Restarts the interface, reloading its link",
      "Erases the saved interface configuration"
    ],
    "correct": 1,
    "explanation": "no shutdown administratively enables an interface that was shut down (status administratively down). It does not configure IP or speed by itself.",
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
    "explanation": "reload reboots the Cisco device (IOS). It is not write memory, not erase startup-config, and not a soft interface reset.",
    "difficulty": "Easy"
  },
  {
    "question": "What is a 'management VLAN'?",
    "options": [
      "VLAN for users' data traffic",
      "VLAN dedicated to switch management",
      "Voice VLAN reserved for IP phones",
      "Video VLAN for IP camera streams"
    ],
    "correct": 1,
    "explanation": "Management VLAN is used for management traffic (SSH, SNMP, etc.) and should be isolated for security.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main advantage of using manageable switches?",
    "options": [
      "They are cheaper than unmanaged switch models",
      "They allow configuration, VLANs, QoS and monitoring",
      "They switch faster than unmanaged switch models",
      "They don't need electrical power to operate"
    ],
    "correct": 1,
    "explanation": "Manageable switches offer advanced features like VLANs, QoS, SNMP, port-security and CLI.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 'port-security' on Cisco switches?",
    "options": [
      "Feature to limit the number of MAC addresses per port",
      "Routing protocol that advertises routes on the port",
      "Cable type used to link the host to the switch port",
      "Encryption method for the traffic leaving the port"
    ],
    "correct": 0,
    "explanation": "Port-security allows restricting access to a port based on authorized MAC addresses.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the function of the 'show cdp neighbors' command?",
    "options": [
      "Show neighbors discovered via CDP",
      "Show the IP routing table",
      "Show configuration of each VLAN",
      "Show the IOS system logs"
    ],
    "correct": 0,
    "explanation": "The 'show cdp neighbors' command displays neighboring Cisco devices discovered by CDP.",
    "difficulty": "Medium"
  },
  {
    "question": "What is an 'SFP' in Cisco equipment?",
    "options": [
      "Internal processor type used in Cisco switches",
      "Hot-swappable fiber optic or copper transceiver module",
      "Security protocol that authenticates fiber ports",
      "Flash memory type that stores the IOS image"
    ],
    "correct": 1,
    "explanation": "SFP (Small Form-factor Pluggable) is a compact hot-swappable module for fiber or copper ports.",
    "difficulty": "Medium"
  },
  {
    "question": "Which Ethernet cable uses an RJ-45 connector?",
    "options": [
      "RG-59 coaxial (BNC)",
      "UTP/STP twisted pair",
      "Multimode fiber LC",
      "V.35 serial (M34)"
    ],
    "correct": 1,
    "explanation": "Copper Ethernet typically uses twisted-pair cabling terminated on RJ-45. Fiber uses optical connectors (e.g. LC/SC), not RJ-45 for the optical path.",
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
    "explanation": "Routers forward between different IP networks using the destination IP in the routing table. Switches forward within a LAN using MAC addresses.",
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
    "explanation": "DNS resolves human-readable names to IP addresses (and reverse lookups). It is not DHCP (address assignment) and not NAT (address translation).",
    "difficulty": "Easy"
  },
  {
    "question": "Can an unmanaged switch create VLANs?",
    "options": [
      "Yes, by creating VLANs via the switch CLI",
      "No, everything shares one broadcast domain",
      "Yes, configuring VLANs over remote SNMP",
      "Only if the ports are supplied with PoE"
    ],
    "correct": 1,
    "explanation": "Unmanaged switches are plug-and-play: no CLI/GUI config, no VLANs or STP tuning. Managed switches support VLANs, security, and monitoring.",
    "difficulty": "Easy"
  },
  {
    "question": "What is phishing?",
    "options": [
      "Brute-force attack that tests passwords on the Wi-Fi",
      "Deception to steal credentials or data, often via email",
      "ICMP flood saturating the target with echo requests",
      "Port mirroring that copies frames for analysis"
    ],
    "correct": 1,
    "explanation": "Phishing tricks users (social engineering) into revealing credentials or clicking malicious links. It is not a buffer overflow exploit by itself.",
    "difficulty": "Easy"
  },
  {
    "question": "Which cable transmits data with light?",
    "options": [
      "Cat6 UTP pair",
      "Fiber optic",
      "Coaxial cable",
      "USB 2.0 cable"
    ],
    "correct": 1,
    "explanation": "Optical fiber carries data as light pulses and is immune to electromagnetic interference (EMI). Copper can pick up EMI; wireless can suffer RF noise.",
    "difficulty": "Easy"
  },
  {
    "question": "Why is SSH preferred over Telnet?",
    "options": [
      "It is faster during the login",
      "It encrypts the management session",
      "It sends the session over UDP",
      "It works without an IP layer"
    ],
    "correct": 1,
    "explanation": "SSH (TCP 22) encrypts remote CLI sessions; Telnet (TCP 23) sends credentials and traffic in cleartext and should be avoided on production gear.",
    "difficulty": "Easy"
  },
  {
    "question": "Which OSI layer handles TCP/UDP segments?",
    "options": [
      "Network (L3)",
      "Transport",
      "Session (L5)",
      "Data link L2"
    ],
    "correct": 1,
    "explanation": "OSI Layer 4 (Transport) provides end-to-end segments via TCP (reliable) and UDP (connectionless). Layer 3 is IP routing; Layer 2 is frames/MAC.",
    "difficulty": "Medium"
  },
  {
    "question": "Which is a good password habit?",
    "options": [
      "Reuse one password on every site",
      "Unique, long, and MFA when possible",
      "Share the password in team chat",
      "Stick to only four numeric digits"
    ],
    "correct": 1,
    "explanation": "Unique strong passwords plus MFA reduce the blast radius of credential theft. Sharing one password or disabling updates increases risk.",
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
    "explanation": "On Windows, ipconfig (or ipconfig /all) shows IP, mask, gateway, and DNS. On Linux/macOS you typically use ip addr or ifconfig.",
    "difficulty": "Easy"
  },
  {
    "question": "Which security incident should you report?",
    "options": [
      "Installing routine Windows updates",
      "An email asking for the boss password",
      "Changing the desktop wallpaper",
      "Opening the web browser locally"
    ],
    "correct": 1,
    "explanation": "Unexpected credential requests in email/chat are classic phishing: verify independently and report to IT/SOC. Do not reply with passwords.",
    "difficulty": "Easy"
  },
  {
    "question": "What do Cat5e/Cat6 describe?",
    "options": [
      "Optical fiber standards and signal reach",
      "Twisted-pair cable categories and bandwidth",
      "Fiber connector types such as LC and SC",
      "Wi-Fi channels in the 2.4 and 5 GHz bands"
    ],
    "correct": 1,
    "explanation": "UTP category (Cat5e, Cat6, etc.) defines cable performance limits (speed/frequency). Connector type alone does not set the category rating.",
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
      "T568A applies only when terminating fiber-optic cables",
      "The orange and green pairs swap positions on pins 1-2 and 3-6",
      "T568B cannot carry Gigabit Ethernet across those pairs",
      "The pinouts have no electrical difference on any pin"
    ],
    "correct": 1,
    "explanation": "Both standards use the same four pairs; only the orange and green pairs are swapped. A cable terminated T568A on one end and T568B on the other is a crossover. T568B is the more common commercial choice in the US.",
    "difficulty": "Medium"
  },
  {
    "question": "When should single-mode fiber be preferred over multimode?",
    "options": [
      "Always for short office LANs that use the cheaper optics",
      "For long-distance campus or WAN links using long-wavelength lasers",
      "Only when the fiber link is also supposed to deliver PoE",
      "Never, because multimode fiber can cover any distance asked"
    ],
    "correct": 1,
    "explanation": "Single-mode has a ~9 µm core and is driven by lasers, so chromatic dispersion stays low over tens of kilometers. Multimode (50/62.5 µm) is cheaper for short runs of a few hundred meters but is not the right choice for long-haul links.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Auto-MDIX do on an Ethernet port?",
    "options": [
      "Negotiates the PoE power class offered on that Ethernet port",
      "Internally detects and corrects straight-through versus crossover cabling",
      "Disables the Spanning Tree protocol running on that switch port",
      "Assigns an IPv4 address to the device attached to that port"
    ],
    "correct": 1,
    "explanation": "Auto-MDIX electronically crosses TX/RX pairs when needed, so a straight-through cable works for switch-to-switch, PC-to-PC, or switch-to-PC. On modern gear it is typically enabled together with speed/duplex autonegotiation.",
    "difficulty": "Easy"
  },
  {
    "question": "A PC without DHCP shows the address 169.254.23.10. What does that indicate?",
    "options": [
      "The default gateway address was configured manually on that host",
      "The host self-assigned an APIPA address because it did not receive a DHCP lease",
      "It is a valid public address that is routed across the Internet",
      "The Ethernet cable is placed in a physical loopback at that port"
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
      "Assign dynamic IP addresses to LAN hosts, which is the job of a DHCP server",
      "Carry network-layer control and diagnostic messages (echo, unreachable, and similar)",
      "Encrypt web sessions with TLS so that HTTPS protects application data in transit",
      "Negotiate and propagate VLANs between switches with VTP in server or client mode"
    ],
    "correct": 1,
    "explanation": "ICMP (and ICMPv6) carries Layer 3 signaling: echo request/reply (ping), destination unreachable, time exceeded (used by traceroute), redirects, and more. It does not assign addresses or encrypt application data.",
    "difficulty": "Easy"
  },
  {
    "question": "How does traceroute discover each hop to the destination?",
    "options": [
      "It queries reverse DNS PTR records on every router to discover the next hop",
      "It sends probes with increasing TTL and reads ICMP Time Exceeded replies",
      "It uses ARP requests at every Internet hop to learn the next router's MAC",
      "It opens a full TCP port 80 session on each router and reads the HTTP banner"
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
      "Every device that shares the same IP address inside one local IPv4 subnet",
      "The set of ports or media where one transmission can collide with another",
      "An entire VLAN, including every access port and trunk that carries that VLAN",
      "Only the Wi-Fi segment of the stations joined to a single access point"
    ],
    "correct": 1,
    "explanation": "On a hub, all ports share one collision domain. A switch creates a collision domain per port, and full duplex removes collisions altogether. That is different from a broadcast domain, which typically matches a VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What is CSMA/CD?",
    "options": [
      "A Layer 3 routing protocol, such as OSPF or RIP, that selects the best path across the network",
      "A half-duplex Ethernet media-access method: listen, transmit, and detect collisions",
      "A wireless encryption suite, such as WPA2 or WPA3, that ciphers Wi-Fi traffic on the air",
      "A type of single-mode optical fiber used for long-distance links between two buildings"
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
      "Cisco Internal Device Register — an internal inventory of Cisco devices installed on the network",
      "Classless Inter-Domain Routing — prefixes with variable masks instead of rigid A/B/C classes",
      "A type of thin coaxial cable, such as 10BASE2, used on older shared-bus Ethernet networks",
      "A wireless authentication protocol, such as WPA2-Enterprise with IEEE 802.1X and RADIUS"
    ],
    "correct": 1,
    "explanation": "CIDR dropped fixed classes (/8, /16, /24) and allows prefixes such as /22 or /13. That makes addressing and route summarization on the Internet and in LANs far more efficient.",
    "difficulty": "Medium"
  },
  {
    "question": "What is IPv4 address 127.0.0.1 used for?",
    "options": [
      "The Internet default gateway used to leave the LAN for the WAN",
      "The host's own loopback, to test the local TCP/IP stack",
      "The LAN broadcast address that reaches every host on the same subnet",
      "The first APIPA address, assigned when DHCP does not answer"
    ],
    "correct": 1,
    "explanation": "The entire 127.0.0.0/8 range is loopback; 127.0.0.1 is the address people actually use. Pinging it confirms the host IP stack works, regardless of cabling or the NIC.",
    "difficulty": "Easy"
  },
  {
    "question": "Which statement correctly describes unicast, broadcast, and multicast?",
    "options": [
      "Unicast goes to every host on the LAN; broadcast delivers the packet to only one destination",
      "Unicast: one destination; broadcast: everyone in the domain; multicast: a subscribed group",
      "Multicast replaces ARP and resolves IPv4 unicast MAC addresses without using broadcast",
      "Broadcast exists only in IPv6 and has no equivalent on classic IPv4 networks at all"
    ],
    "correct": 1,
    "explanation": "Unicast delivers to a single address. Broadcast (255.255.255.255 or the subnet broadcast) reaches every node in the broadcast domain. Multicast (224.0.0.0/4 or FF00::/8) is received only by hosts that joined the group.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the advantage of STP (Shielded Twisted Pair) over UTP?",
    "options": [
      "It always supports 100 km runs, as if the cable were long-haul fiber",
      "The foil or braid reduces electromagnetic interference (EMI)",
      "It is mandatory for Fast Ethernet, because UTP cannot carry 100 Mb/s",
      "It does not use an RJ-45 connector and ends only on coaxial BNC plugs"
    ],
    "correct": 1,
    "explanation": "STP adds shielding that rejects EMI in industrial spaces, near motors, or next to elevators. It must be grounded correctly or the shield can make noise worse. UTP is sufficient in most offices.",
    "difficulty": "Easy"
  },
  {
    "question": "Approximately how much power does PoE+ (IEEE 802.3at) deliver at the PD?",
    "options": [
      "About 4 W at the PD, given as the power ceiling of PoE+ (802.3at)",
      "About 15 W for 802.3af versus about 25–30 W for 802.3at",
      "100 W, but only on Fast Ethernet, with no power on Gigabit links",
      "PoE+ does not deliver power; it only negotiates the link speed"
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
      "An ACL blocking ICMP, which raises CRC counters when ping packets are dropped",
      "A duplex mismatch (one side half, the other full) or a damaged cable",
      "Missing DNS on the host, which corrupts Ethernet frames and increases CRC errors",
      "A different native VLAN on the PC, which misaligns 802.1Q and causes CRC errors"
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
      "enable password encrypts the password with AES-256 by default, instead of clear text or reversible type 7",
      "enable secret stores a one-way hash (MD5/type 5 or stronger); enable password is weak clear text or reversible type 7",
      "enable secret and enable password are synonyms and store the same credential the same way in running-config",
      "enable secret authenticates only inbound Telnet sessions and is ignored on the console, on SSH, and on local CLI access"
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
      "It carries every VLAN with 802.1Q tags toward the neighbor, just like a trunk port",
      "It belongs to a single VLAN and sends untagged traffic to the host",
      "It works only when the port is connected to a router and never to a host",
      "It disables MAC learning and stops updating the CAM table on that port"
    ],
    "correct": 1,
    "explanation": "An access port maps to one VLAN (switchport access vlan X). Frames toward the PC are untagged. Trunks, by contrast, tag VLANs for the neighbor (except the native VLAN).",
    "difficulty": "Medium"
  },
  {
    "question": "What is LLDP?",
    "options": [
      "A Cisco proprietary routing protocol that advertises routes between neighboring routers on the LAN",
      "An open IEEE 802.1AB protocol that advertises identity and capabilities to neighbors",
      "A type of ACL that filters packets by source IP address and by destination port number",
      "A wireless cipher, such as WPA2-PSK, that protects 802.11 frames sent over the air"
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
      "The twisted-pair copper melts at only 5 V induced by the electric motor running beside the cable",
      "Electromagnetic interference (EMI) induces noise that raises CRCs and retransmissions",
      "Electric motors consume every MAC address stored in the neighboring switch CAM table",
      "Spanning Tree stops converging because the motor cancels the BPDUs received on that copper port"
    ],
    "correct": 1,
    "explanation": "Electromagnetic fields induce voltage on the pairs. That corrupts bits, increases CRC/input errors, and can drop the link. Mitigation is separation, shielded cable, fiber (immune to EMI), and proper grounding.",
    "difficulty": "Easy"
  },
  {
    "question": "How many bits are in an IEEE MAC address and how is it usually written?",
    "options": [
      "32 bits written in dotted decimal, in the same format used by an IPv4 address",
      "48 bits in hexadecimal, typically six octets (for example 00:1A:2B:3C:4D:5E)",
      "128 bits in hexadecimal, like an IPv6 address, with groups separated by colons",
      "16 bits written only in binary, as two octets and with no hexadecimal notation at all"
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
      "Because Wi-Fi radio is inherently full duplex and a station can transmit and detect a collision at the same time on that channel",
      "Stations cannot transmit and detect a collision at the same time on one channel, so they avoid collisions (NAV, RTS/CTS, backoff)",
      "Because CSMA/CD belongs only to IPv6 and is not part of shared Ethernet or of the medium-access method on 802.11 wireless LANs",
      "Only because the IEEE banned CSMA/CD inside the 802.11 standard with no technical reason tied to the shared half-duplex radio medium"
    ],
    "correct": 1,
    "explanation": "On a shared half-duplex medium the sender's own radio is saturated, so it cannot 'hear a collision' the way shared copper can. 802.11 uses collision avoidance: carrier sense, IFS gaps, random backoff, and optionally RTS/CTS.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a typical difference between 2.4 GHz and 5 GHz Wi-Fi?",
    "options": [
      "5 GHz always passes through walls and obstacles better than 2.4 GHz and reaches farther inside office buildings",
      "2.4 GHz travels farther and handles obstacles better, but has fewer non-overlapping channels and more interference",
      "2.4 GHz exists only in the 802.11ac standard and is not available in 802.11b, 802.11g, or 802.11n",
      "There is no difference in range or in obstacle penetration between 2.4 GHz and 5 GHz under the same site conditions"
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
      "The BGP configuration and the eBGP routes advertised by the external neighbor",
      "Layer 1: cable, LEDs, SFP, power, and physical interface state",
      "The QoS policies and the DSCP marking applied on the outbound interface",
      "The 802.1X certificates and the end client's RADIUS authentication result"
    ],
    "correct": 1,
    "explanation": "Without a physical signal (dark LED, broken cable, missing SFP, administratively down interface) nothing above it works. Confirming Layer 1 avoids hours of pointless OSPF or DNS debugging.",
    "difficulty": "Easy"
  },
  {
    "question": "In which scenario is optical fiber clearly preferable to copper UTP?",
    "options": [
      "A 1-meter patch from the PC to the switch, in the same rack and without any strong electromagnetic interference",
      "A long run, a between-building link, or a high-EMI environment where copper would exceed 100 m or pick up noise",
      "PoE power for a desk phone, which needs electrical power delivered over the copper cable to the handset",
      "A router console connection made with a serial or USB cable and with no Ethernet frame on that link"
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
      "User EXEC uses the '#' prompt and Privilege EXEC uses '>', reversing the two real access levels of the IOS command line",
      "User EXEC shows '>' and limited commands; Privilege EXEC shows '#' after 'enable' and allows advanced show/debug and configuration",
      "There is no difference in the prompt or in the allowed commands between User EXEC mode and Privilege EXEC on the Cisco IOS command line",
      "Privilege EXEC exists only on ASA firewalls and is not available on routers or on switches that run Cisco IOS software"
    ],
    "correct": 1,
    "explanation": "The '>' prompt is User EXEC (ping, some shows). The enable command (with the secret) raises you to '#' Privilege EXEC, from which you enter configuration terminal. Splitting these levels is the basis of CLI access control.",
    "difficulty": "Easy"
  },
  {
    "question": "What is the default HTTPS port and how does it differ from HTTP?",
    "options": [
      "80, and it uses cleartext Telnet for the web session, without any TLS",
      "443, and it encrypts the session with TLS; HTTP on 80 is clear text",
      "22, and it encrypts the web session with SSH, instead of TLS on port 443",
      "53, and it authenticates the web session with DNSSEC, instead of TLS"
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
      "Serving only as an RJ-45 serial console, with no Ethernet frames and no 10GBASE-T",
      "Better crosstalk immunity and 10GBASE-T support over short runs (typically up to 55 m)",
      "Replacing all metropolitan fiber, including the long carrier links and the DWDM systems",
      "Delivering 100 W on the data pairs without PoE, outside any IEEE 802.3 power standard"
    ],
    "correct": 1,
    "explanation": "Cat6 has tighter crosstalk specs through 250 MHz and supports 10GBASE-T on short channels. Cat5e is fine for 1 Gb/s at 100 m. Cat6A extends 10 Gb/s to a full 100 m.",
    "difficulty": "Medium"
  },
  {
    "question": "Which optical connector is most common on modern SFP/SFP+ transceivers?",
    "options": [
      "Coaxial BNC bayonet used on 50-ohm 10BASE2 coax",
      "LC (Lucent Connector), small and latched",
      "Serial DB-9, for an RS-232 console, with no fiber",
      "Telephone RJ-11, one pair, for an analog phone line"
    ],
    "correct": 1,
    "explanation": "SFPs almost always use duplex LC. SC is older and larger (still seen on GBICs and some panels). ST is a legacy bayonet. BNC is coaxial; DB-9 is a serial console; RJ-11 is analog phone.",
    "difficulty": "Medium"
  },
  {
    "question": "A user can ping the server by IP but the browser cannot open the site by name. What is the most likely cause?",
    "options": [
      "The cable from the PC to the switch is broken at Layer 1",
      "DNS failure (missing, wrong, or filtered DNS server)",
      "A switch without PoE stops the browser from opening the site by name",
      "STP blocked only ICMP on the user's access port"
    ],
    "correct": 1,
    "explanation": "A successful IP ping proves Layers 1–3 to the server. Using the name requires DNS (port 53). Checking ipconfig/ifconfig, the configured DNS server, and nslookup/dig isolates the issue in seconds.",
    "difficulty": "Medium"
  },
  {
    "question": "A straight-through Ethernet cable typically connects which devices?",
    "options": [
      "PC to PC, or switch to switch, without Auto-MDIX (MDI to MDI)",
      "PC to switch, or router to switch (MDI to MDI-X)",
      "Cisco consoles only, using a rollover RJ-45 cable",
      "Multimode fiber only, with duplex LC connectors"
    ],
    "correct": 1,
    "explanation": "A straight-through cable keeps the same pinout on both ends and connects MDI (NIC/router) to MDI-X (switch/hub). Classic PC-PC or switch-switch links used crossovers; modern Auto-MDIX makes the cable type almost irrelevant.",
    "difficulty": "Easy"
  },
  {
    "question": "How many collision domains does a 24-port Ethernet switch create in full duplex?",
    "options": [
      "1 collision domain, as if all 24 ports were one hub",
      "2 collision domains, one for each direction of full duplex",
      "12 collision domains, only half of the switch ports",
      "24"
    ],
    "correct": 3,
    "explanation": "Each switch port is its own collision domain. Full duplex eliminates actual collisions, but the per-port isolation remains: 24 ports = 24 domains. A 24-port hub would be a single collision domain.",
    "difficulty": "Medium"
  },
  {
    "question": "What bounds an IPv4 broadcast domain on a classic LAN?",
    "options": [
      "Each copper cable between the PC and the access switch",
      "A VLAN or a router (L3) interface",
      "Each hub port, isolating that port's local broadcast",
      "The source MAC address of the broadcast frame"
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
      "To provide 30 user hosts on a classic LAN that uses broadcast",
      "To use both addresses without reserving network/broadcast (RFC 3021)",
      "Only on Wi-Fi, so the access point talks with a single associated client",
      "It replaces the IPv6 link-local fe80:: address on every router interface"
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
      "Host loopback, the same role as the address ::1",
      "Link-local all-nodes, the multicast address ff02::1",
      "The unspecified address",
      "All-routers multicast, the group ff02::2 on the link"
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
      "DHCP stops working and the client is left without an address",
      "Others on the same BSS can capture unencrypted traffic",
      "Channels 1, 6, and 11 shut down and the AP loses the 2.4 GHz band",
      "The AP stops sending beacons and disappears from client scans"
    ],
    "correct": 1,
    "explanation": "With no Layer-2 encryption, anyone associated (and sometimes even a passive listener) can read frames. Use WPA2/WPA3 and, on public Wi-Fi, a VPN.",
    "difficulty": "Easy"
  },
  {
    "question": "What characterizes a ransomware attack?",
    "options": [
      "It sends DNS spam to fill the victim's resolver cache",
      "It encrypts the victim's files and demands a ransom for the key",
      "It only changes the victim's Wi-Fi SSID and has no other effect",
      "It is always an unplugged cable on the victim's switch port"
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
      "NAT stops translating private LAN addresses into the public WAN address",
      "Public default credentials let anyone on the network reach admin access",
      "The Cat6 cable can no longer negotiate Gigabit with the computer",
      "The router's DHCP can only offer APIPA addresses in 169.254.0.0/16"
    ],
    "correct": 1,
    "explanation": "Vendors publish defaults (admin/admin, and similar). Any Wi-Fi client or exposed WAN can use them. Change them at install time and disable weak WPS.",
    "difficulty": "Easy"
  },
  {
    "question": "Look at this ping output. What does the result indicate?",
    "options": [
      "The destination 8.8.8.8 is unreachable at Layer 3, with no ICMP echo",
      "There is IP connectivity to 8.8.8.8, with low RTT and 0% loss",
      "DNS failed to resolve the target before the ICMP echo was sent",
      "The PC cable is in half duplex and limits the link to 100 Mb/s"
    ],
    "correct": 1,
    "explanation": "Four successful ICMP echoes, 0% loss, and ~12 ms RTT show IP reachability to the destination. It does not prove HTTP or DNS; it only tests ICMP echo.",
    "difficulty": "Easy",
    "cli": "PC> ping 8.8.8.8\nPinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\nReply from 8.8.8.8: bytes=32 time=11ms TTL=117\nReply from 8.8.8.8: bytes=32 time=13ms TTL=117\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\n\nPing statistics for 8.8.8.8:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 11ms, Maximum = 13ms, Average = 12ms"
  },
  {
    "question": "Look at this traceroute. What do the asterisks at hop 4 mean?",
    "options": [
      "The destination 203.0.113.10 replied successfully and with no loss to all three probes at hop 4",
      "That hop did not return ICMP Time Exceeded in time (filter, loss, or no reply)",
      "The PC cable is broken, so none of the probes sent at hop 4 can return",
      "Traceroute always uses TCP port 80 to probe every hop along the path"
    ],
    "correct": 1,
    "explanation": "Each hop is probed with an increasing TTL. If the router does not send Time Exceeded (ICMP policy, firewall, or loss), you see * * *. Later hops may still reach the destination.",
    "difficulty": "Medium",
    "cli": "PC> tracert 203.0.113.10\nTracing route to 203.0.113.10 over a maximum of 30 hops\n\n  1    <1 ms    <1 ms    <1 ms  192.168.1.1\n  2     4 ms     4 ms     5 ms  10.20.0.1\n  3    12 ms    11 ms    12 ms  198.51.100.1\n  4     *        *        *\n  5    28 ms    27 ms    29 ms  203.0.113.10\n\nTrace complete."
  },
  {
    "question": "A user can ping the LAN gateway but cannot ping 8.8.8.8. What is the most likely cause?",
    "options": [
      "A hidden SSID stops the client from associating to the wireless LAN",
      "WAN/NAT forwarding failure or a missing/wrong default route on the path",
      "The switch has no MAC table and stops forwarding frames across the VLAN",
      "The cable is Cat6 instead of Cat5e and therefore blocks WAN access"
    ],
    "correct": 1,
    "explanation": "A ping to the gateway proves local L2/L3. Failure to a public IP points to WAN, NAT, an edge firewall, or a missing default route — not DNS (an IP was used).",
    "difficulty": "Medium"
  },
  {
    "question": "Two PCs in the same VLAN share the same IPv4 address. What symptom is typical?",
    "options": [
      "STP elects two roots in the VLAN and blocks access ports",
      "Intermittent loss, duplicate-IP messages, and unstable ARP",
      "PoE turns off on the access ports where those two PCs sit",
      "The 802.1Q trunk becomes half duplex between the two switches"
    ],
    "correct": 1,
    "explanation": "Duplicate IPs cause ARP conflicts: traffic flaps between the two MACs. Windows reports an IP address conflict. Each host in the VLAN needs a unique IPv4 address.",
    "difficulty": "Medium"
  },
  {
    "question": "A switch-port link LED is dark. What should the help desk check first?",
    "options": [
      "Reformat the PC disk and reinstall the operating system before testing the cable",
      "Check the cable, connector seating, and whether the far end has power/link",
      "Change spanning tree from PVST to MST on every switch in the LAN",
      "Enable BGP on the switch so it advertises the affected VLAN prefix"
    ],
    "correct": 1,
    "explanation": "No link light means Layer 1 is down. Confirm cable, port, and only then speed/duplex. Layer-3 issues (IP/DNS) come after a link exists.",
    "difficulty": "Easy"
  },
  {
    "question": "When a switch receives a unicast frame whose destination MAC is not yet in the CAM table, what does it do?",
    "options": [
      "Always drops the unicast frame because the destination MAC is absent from the CAM",
      "Floods the frame out the VLAN's ports except the incoming port",
      "Converts the frame into IP multicast 224.0.0.1 aimed at the whole VLAN",
      "Sends the frame only to the default gateway, out the router port"
    ],
    "correct": 1,
    "explanation": "Unknown unicast flooding: the switch treats an unknown destination as needing to reach the whole VLAN. Once it sees the source MAC on a reply, it records the port in the CAM.",
    "difficulty": "Medium"
  },
  {
    "question": "Which DNS record maps a hostname to an IPv6 address?",
    "options": [
      "A, which maps the hostname only to an IPv4 address",
      "AAAA",
      "MX, which names the mail server responsible for the domain",
      "PTR, which reverse-resolves an IP address back to a name"
    ],
    "correct": 1,
    "explanation": "A maps name→IPv4; AAAA (quad-A) maps name→IPv6; MX is mail; PTR is reverse (IP→name).",
    "difficulty": "Medium"
  },
  {
    "question": "What is nslookup (or dig) used for in troubleshooting?",
    "options": [
      "To negotiate an LACP EtherChannel between the switch and the file server",
      "To query DNS and see whether a name resolves to the expected IP",
      "To encrypt HTTPS traffic with TLS in the user's web browser",
      "To assign access VLANs to ports on the access switch"
    ],
    "correct": 1,
    "explanation": "nslookup/dig query a DNS resolver. If ping to an IP works but the name fails, the problem is DNS, not the WAN.",
    "difficulty": "Easy"
  },
  {
    "question": "A PC can reach others in the same VLAN but not the Internet, and the default gateway field is empty. What is missing?",
    "options": [
      "A second SSID on the access point of the wireless LAN",
      "The default gateway/route to leave the local subnet",
      "A crossover cable from the PC to the switch access port",
      "Disabling ARP on the NIC so traffic can leave the subnet"
    ],
    "correct": 1,
    "explanation": "Intra-VLAN traffic needs no gateway. For other networks the host sends to the default gateway (the VLAN's router/SVI). With no gateway, only the local subnet is reachable.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the essential difference between running-config and startup-config on a Cisco device?",
    "options": [
      "There is no difference: running-config and startup-config are the same file",
      "Running is in RAM (active); startup is in NVRAM and is applied at boot",
      "Startup-config always lives inside the IOS image stored in flash",
      "Running-config exists only on switches and is never used on routers"
    ],
    "correct": 1,
    "explanation": "RAM changes are lost on reload unless you copy running-config startup-config. show running-config is the live config; show startup-config is the saved one.",
    "difficulty": "Easy"
  },
  {
    "question": "Compared with Cat6, Cat6A cabling is mainly intended for what?",
    "options": [
      "Analog telephony only, on voice pairs, with no Ethernet data",
      "10GBASE-T up to 100 m with better alien-crosstalk control",
      "Always replacing single-mode fiber on long-distance WAN links",
      "PoE power only, with no data pairs left for Ethernet traffic"
    ],
    "correct": 1,
    "explanation": "Cat6 often limits 10 Gb/s to short channels (~55 m in some cases). Cat6A is designed for 10GBASE-T at 100 m. Cat5e typically tops out at 1 Gb/s over 100 m.",
    "difficulty": "Medium"
  },
  {
    "question": "IPv4 address 255.255.255.255 is:",
    "options": [
      "A loopback unicast such as 127.0.0.1 on the host itself",
      "The limited broadcast of the local subnet",
      "All-routers multicast at 224.0.0.2 for every router",
      "The first usable host of every IPv4 /24 subnet"
    ],
    "correct": 1,
    "explanation": "255.255.255.255 is not forwarded by routers. It is the local limited broadcast. A /24 directed broadcast would be, for example, 192.168.1.255.",
    "difficulty": "Medium"
  },
  {
    "question": "IPv4 address 224.0.0.1 is used as:",
    "options": [
      "A directed broadcast to the subnet's last address",
      "All-hosts multicast on the local segment",
      "The private default gateway defined by RFC 1918",
      "An APIPA address from link-local autoconfiguration"
    ],
    "correct": 1,
    "explanation": "224.0.0.0/24 are link-local multicasts (not forwarded). 224.0.0.1 = all hosts; 224.0.0.2 = all routers; 224.0.0.5/6 = OSPF; 224.0.0.10 = EIGRP.",
    "difficulty": "Medium"
  },
  {
    "question": "Which metric describes delay variation between packets and is critical for voice?",
    "options": [
      "The bandwidth of the link",
      "Jitter",
      "The MTU, size of each frame",
      "The OUI, vendor ID in the MAC"
    ],
    "correct": 1,
    "explanation": "Jitter is latency variation. Voice is sensitive to jitter and loss; use a jitter buffer and QoS (EF). Bandwidth is capacity; latency is average delay.",
    "difficulty": "Medium"
  },
  {
    "question": "What do the first 24 bits of an IEEE MAC address identify?",
    "options": [
      "The native VLAN configured on the switch access port",
      "The manufacturer's OUI (organizationally unique identifier)",
      "The IPv4 address of the default gateway for the local subnet",
      "The physical cable type, such as twisted pair or fiber optic"
    ],
    "correct": 1,
    "explanation": "A 48-bit MAC splits into a 24-bit OUI (vendor) and a 24-bit device identifier. The U/L and I/G bits in the first octet have special meaning.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a denial-of-service (DoS) attack on a network?",
    "options": [
      "Encrypting the victim's files on disk and demanding a ransom to restore them",
      "Exhausting resources (CPU, bandwidth, sessions) so legitimate service fails",
      "Translating private IPv4 addresses into public ones on the perimeter router",
      "Electing the STP root bridge by picking the switch with the lowest Bridge ID"
    ],
    "correct": 1,
    "explanation": "DoS (and distributed DDoS) makes a service unavailable by overload. Mitigation: ACLs, rate-limit, edge anti-DDoS, CoPP on routers. It is not ransomware.",
    "difficulty": "Easy"
  },
  {
    "question": "Least privilege for help-desk access means:",
    "options": [
      "Every help-desk account shares the same enable secret",
      "Each account has only the permissions required for the role",
      "Always disable the firewall on the help-desk workstation",
      "Manage the devices with clear-text Telnet instead of using SSH"
    ],
    "correct": 1,
    "explanation": "Least privilege reduces the blast radius of a compromised account. On Cisco devices use AAA (RADIUS/TACACS+) with per-user privileges, not a shared enable password.",
    "difficulty": "Easy"
  },
  {
    "question": "On Windows, ipconfig /all shows the DHCP server. Why is that useful?",
    "options": [
      "To compute the OSPF cost of the interface from the bandwidth of that link",
      "To see who issued the lease and whether the address is static or dynamic",
      "To view the MAC address table learned on the access switch",
      "To enable PortFast on the switch access port that this PC is connected to"
    ],
    "correct": 1,
    "explanation": "DHCP Server plus lease obtained/expires distinguish a dynamic IP from a static one. An unexpected server can indicate rogue DHCP.",
    "difficulty": "Medium"
  },
  {
    "question": "About how many watts does classic IEEE 802.3af PoE deliver at the PD?",
    "options": [
      "Only 4 W at the PD, the 802.3af maximum",
      "15.4 W at the PSE / ~12.95 W at the PD",
      "About 60 W at the PD, the 802.3af maximum",
      "About 90 W at the PD, the 802.3af maximum"
    ],
    "correct": 1,
    "explanation": "802.3af (PoE): 15.4 W at the PSE, about 12.95 W at the PD after cable loss. 802.3at (PoE+) ~30/25.5 W. 802.3bt (Type 3/4) rises to 60/90 W.",
    "difficulty": "Medium"
  },
  {
    "question": "When do you prefer traceroute over a simple ping?",
    "options": [
      "To encrypt traffic hop by hop, as if traceroute itself were a VPN",
      "To see which hops the path fails at or where latency jumps",
      "To assign access VLANs on each hop that traceroute prints",
      "To negotiate duplex and speed on each interface along the path"
    ],
    "correct": 1,
    "explanation": "Ping tests one destination. Traceroute lists the path (expired TTL) and shows whether the failure is LAN, ISP WAN, or the remote server.",
    "difficulty": "Easy"
  },
  {
    "question": "Is hiding the SSID (not broadcasting the network name) a strong defense?",
    "options": [
      "Yes, hiding the SSID equals authenticating the WLAN with WPA3-Enterprise and 802.1X",
      "No: the SSID still appears in data frames and gives a false sense of security",
      "Yes, it blocks every association, even when the client already knows the WLAN name",
      "It only works on 6 GHz, where a nameless beacon fully blocks association"
    ],
    "correct": 1,
    "explanation": "SSID-less beacons do not hide the network from anyone capturing probes or data. Use WPA2/WPA3 and 802.1X for real control. A hidden SSID still annoys legitimate clients.",
    "difficulty": "Medium"
  },
  {
    "question": "A DHCP Discover is sent as:",
    "options": [
      "Unicast straight to 8.8.8.8, Google's public DNS resolver, already inside the DHCP Discover",
      "Broadcast (source 0.0.0.0, destination 255.255.255.255) because the client has no IP yet",
      "OSPF multicast to 224.0.0.5 (AllSPFRouters), sent exactly as though it were a router hello",
      "IPv6 anycast toward the DHCP server before the client has been given any GUA address"
    ],
    "correct": 1,
    "explanation": "In DORA, Discover and Request are broadcasts. The client uses 0.0.0.0 as the source. Offer and Ack come from the server (sometimes also as broadcasts).",
    "difficulty": "Medium"
  },
  {
    "question": "Why do DHCP, DNS queries, and NTP use UDP instead of TCP?",
    "options": [
      "Because UDP always guarantees retransmission of every single datagram that is lost",
      "They are short transactions that do not need a reliable session; less overhead",
      "Because UDP encrypts the payload on its own, unlike TCP which stays in the clear",
      "Because TCP cannot use port 53, a number reserved only for UDP DNS datagrams"
    ],
    "correct": 1,
    "explanation": "UDP is connectionless with low overhead. The application handles retries (DHCP re-sends Discover; DNS can retry or query another server). DNS zone transfers may use TCP.",
    "difficulty": "Medium"
  },
  {
    "question": "Which statement best describes encapsulation going down the OSI model?",
    "options": [
      "Each layer strips the lower-layer header before it continues handing the data downward",
      "Each layer adds its header (and sometimes a trailer) to the upper-layer data",
      "Only the physical layer adds headers; layers 2, 3, and 4 merely forward the payload",
      "The switch always strips IP and the router always strips MAC while going down OSI"
    ],
    "correct": 1,
    "explanation": "The application hands data to L4, which adds TCP/UDP, L3 adds IP, L2 adds the Ethernet header and FCS, L1 serializes bits. On the way up, headers are removed.",
    "difficulty": "Medium"
  },
  {
    "question": "On a 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 network, traffic to the public Internet normally requires:",
    "options": [
      "A hub only, which already forwards RFC 1918 private addresses onto the Internet",
      "NAT/PAT or publicly routable addresses, plus a default gateway",
      "Disabling ARP on all hosts so private traffic leaves without any L2 resolution",
      "Changing every MAC to FF:FF:FF:FF:FF:FF and using that broadcast in place of NAT"
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
      "Configure OSPF and advertise each patch-panel subnet from inside the routing process",
      "Identify the pair/port on the patch panel and detect opens, shorts, or crossed pairs",
      "Upgrade the switch IOS from the cable tone plus the image stored on the tester",
      "Generate SSH host keys on the switch after the right pair is mapped on the patch panel"
    ],
    "correct": 1,
    "explanation": "Layer-1 tools: a toner/probe finds the cable in the panel; a tester checks continuity and wire map. It does not replace ping/DNS, but it avoids hours chasing the wrong pair.",
    "difficulty": "Easy"
  },
  {
    "question": "On public networks (cafe, airport), which habit reduces interception risk?",
    "options": [
      "Disable the laptop firewall so the captive portal stops inspecting the traffic",
      "Use VPN/HTTPS and avoid sensitive work on open portals without encryption",
      "Change the MAC to ff:ff:ff:ff:ff:ff so the access point cannot follow the session",
      "Force half duplex on the wireless NIC to shorten the window for interception"
    ],
    "correct": 1,
    "explanation": "Public Wi-Fi may be open or shared. VPNs encrypt to the concentrator; HTTPS protects the site. Avoid banking on captive portals without visible TLS.",
    "difficulty": "Easy"
  },
  {
    "question": "A ping to an IPv6 fe80:: address on Windows fails without a zone. What is missing?",
    "options": [
      "An APIPA 169.254.0.0/16 address on the same NIC, so fe80:: becomes a globally routable address",
      "The zone/interface identifier (fe80::x%eth0 / %13), because link-local is not unique on the node",
      "A GRE tunnel built to the fe80:: target, since link-local travels only when it is encapsulated",
      "Disabling NDP on that interface, since Neighbor Discovery is exactly what blocks the ping to fe80::"
    ],
    "correct": 1,
    "explanation": "Link-local exists on every interface. Without %zone the OS does not know which NIC to use. ping fe80::1%Ethernet or -6 with a zone id.",
    "difficulty": "Hard"
  },
  {
    "question": "On a UTP cable wiremap, pairs 1-2 are open and pairs 3-6 are fine. Which Ethernet speed is most likely, and why?",
    "options": [
      "10 Gb/s, because 10GBASE-T only needs two pairs and ignores the other two",
      "100 Mb/s (Fast Ethernet) may work; Gigabit needs all four pairs",
      "Only single-mode fiber can work, because Fast Ethernet does not exist on UTP",
      "No Ethernet speed works if any pair on the wiremap is left open"
    ],
    "correct": 1,
    "explanation": "10/100BASE-TX mainly uses pairs 1-2 and 3-6. 1000BASE-T requires all four pairs. A tester showing only two good pairs typically points to Fast Ethernet, not Gigabit.",
    "difficulty": "Hard"
  },
  {
    "question": "An AP advertises Wi-Fi 6E. Which extra band does it add compared with classic Wi-Fi 6?",
    "options": [
      "Only the 900 MHz band used by LoRa, and not the extra 6 GHz of Wi-Fi 6E",
      "The 6 GHz band (in addition to 2.4 and/or 5 GHz, depending on the radio)",
      "Bluetooth LE on 2.4 GHz only, without adding the Wi-Fi 6 GHz band at all",
      "Infrared IrDA only, with no extra radio spectrum compared with classic Wi-Fi 6"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 6E is 802.11ax in the 6 GHz band. It adds cleaner spectrum and wide channels with less legacy 2.4/5 GHz interference, but range is often shorter and clients must be 6E-capable.",
    "difficulty": "Hard"
  },
  {
    "question": "In CCST troubleshooting, the PC has correct IP, gateway, and DNS; ping to the gateway works; HTTPS and HTTP to a site fail; ping to 8.8.8.8 fails. Which hypothesis is strongest?",
    "options": [
      "Only a browser TLS certificate failure, with no IP path problem at all",
      "Forwarding/WAN/firewall problem upstream of the local gateway",
      "The switch console cable is unplugged, which cuts the PC off from the WAN",
      "STP elected the PC as root bridge and blocked the path to the Internet"
    ],
    "correct": 1,
    "explanation": "Local L3 is fine (IP/gateway/LAN ping). Failure to public IPs points to WAN path, NAT, or perimeter firewall — not DNS (an IP was used) and not TLS alone.",
    "difficulty": "Hard"
  },
  {
    "question": "Which statement about IEEE 802.3bt PoE (Type 3/4) is most accurate for support techs?",
    "options": [
      "It tops out at 15.4 W at the PSE, like 802.3af Type 1, with no Type 3 or Type 4",
      "It allows higher power (about 60 W / 90 W at the PSE) for demanding APs and cameras",
      "It only works on single-mode fiber, because 802.3bt cannot power copper UTP pairs",
      "It always replaces the PD external PSU, even with no classification or LLDP negotiation"
    ],
    "correct": 1,
    "explanation": "802.3bt (PoE++) raises power versus af/at. PSE-PD classification/negotiation still applies; a mismatched PD or bad cable may not get enough power.",
    "difficulty": "Hard"
  },
  {
    "question": "A switch port goes err-disabled after someone cascades a cheap hub. Which CCST cause is plausible?",
    "options": [
      "Missing DNS on the PC: with no name resolution, the switch err-disables the access port and drops the link",
      "A protection feature (for example BPDU Guard, loop, or link flap) disabled the port on an error condition",
      "Cat6 cannot carry Fast Ethernet, so the switch moves that port into the err-disabled state",
      "A fiber SFP was inserted into the RJ-45 jack, and the switch then marked that port err-disabled"
    ],
    "correct": 1,
    "explanation": "Err-disabled is a protective state. Hubs and loops can trigger unexpected BPDUs, collisions, or flaps; with BPDU Guard or storm control the port may err-disable. Fix the cause, then shutdown / no shutdown.",
    "difficulty": "Hard"
  },
  {
    "question": "In IPv6, a host has only FE80::/10, can ping on-link neighbors, but cannot open Internet sites. What is typically missing?",
    "options": [
      "A GUA (or ULA+NAT64) plus a default router via RA/DHCPv6",
      "A mandatory IPv4 APIPA 169.254 address, since IPv6 Internet uses it",
      "Disabling NDP so traffic can leave the link without a GUA or a router",
      "Changing the MAC to ff:ff:ff:ff:ff:ff so the router accepts IPv6 traffic"
    ],
    "correct": 0,
    "explanation": "Link-local works on the link. Off-link traffic needs a GUA (2000::/3) or a translation mechanism, plus a default router learned from Router Advertisement or DHCPv6.",
    "difficulty": "Hard"
  },
  {
    "question": "What distinguishes Wi-Fi 6E from Wi-Fi 6 (802.11ax) in terms of spectrum?",
    "options": [
      "6E removes the 5 GHz band and stays on 2.4 GHz only",
      "6E adds operation in the 6 GHz band",
      "6E is only a marketing name for 802.11ac",
      "6E requires WEP"
    ],
    "correct": 1,
    "explanation": "Wi-Fi 6 and 6E share 802.11ax PHY features; the “E” (Extension) means the 6 GHz band, with more wide channels and less legacy noise.",
    "difficulty": "Medium"
  },
  {
    "question": "Can a legacy 802.11ac (Wi-Fi 5) client join a 6 GHz-only SSID on a Wi-Fi 6E AP?",
    "options": [
      "Yes, automatically via DFS, giving the 802.11ac client 6 GHz radio",
      "No: it needs a 6 GHz / 6E-capable radio and driver",
      "Yes, if the 6 GHz channel is 1, 6, or 11, as on the 2.4 GHz plan",
      "Only if WPA3 is disabled: the 802.11ac client joins the 6 GHz SSID"
    ],
    "correct": 1,
    "explanation": "The 6 GHz band requires 6E client hardware. Wi-Fi 5/6 devices without a 6 GHz radio stay on the AP’s 2.4/5 GHz radios, if present.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a typical advantage of the 6 GHz band in dense offices?",
    "options": [
      "Better penetration through thick walls than the 2.4 GHz band in the same office",
      "Cleaner spectrum and wide channels with less legacy interference",
      "It removes the need for WPA on the SSID, because the 6 GHz band is open by design",
      "It works with no antennas on the AP or the client, since 6 GHz spectrum needs no RF"
    ],
    "correct": 1,
    "explanation": "6 GHz offers new, less crowded channels; wall penetration is usually worse than 2.4 GHz. Plan denser APs for coverage, not only peak rate.",
    "difficulty": "Medium"
  },
  {
    "question": "Access switch port Gi1/0/12 is err-disabled and syslog shows %PM-4-ERR_DISABLE: bpduguard. What is the most likely cause?",
    "options": [
      "The UTP cable has only 2 pairs connected, and the bpduguard syslog means that wiring fault",
      "A switch/hub (or a PC bridging) sent BPDUs on an access port with BPDU Guard enabled",
      "PoE exceeds the PSU budget, and IOS logs %PM-4-ERR_DISABLE: bpduguard for lack of power",
      "The client is missing DNS, so the switch puts Gi1/0/12 into err-disabled for that reason"
    ],
    "correct": 1,
    "explanation": "BPDU Guard err-disables access ports that receive BPDUs — typical when someone plugs in another switch. Fix the topology, then recover with errdisable recovery or shut/no shut.",
    "difficulty": "Hard"
  },
  {
    "question": "A Wi-Fi 6E AP requires WPA3 on the 6 GHz band. The client only supports WPA2. What happens on a 6 GHz-only SSID?",
    "options": [
      "It associates with WEP automatically, because the AP falls back from WPA3 to WEP on 6 GHz",
      "It will not associate: 6 GHz requires WPA3 (SAE); the client must be 6E and WPA3-capable",
      "It associates if the 6 GHz channel is DFS, even when the client is limited to WPA2 only",
      "It only works with IPv6: the WPA2 client joins the 6 GHz SSID when the host uses IPv6"
    ],
    "correct": 1,
    "explanation": "Wi-Fi Alliance requires WPA3 on 6 GHz. WPA2-only clients cannot join that SSID (they may still use 2.4/5 GHz SSIDs if the AP offers them).",
    "difficulty": "Hard"
  },
  {
    "question": "Cable tester: wire map OK, but certification fails with high NEXT between pairs. What is the best CCST interpretation?",
    "options": [
      "The access switch has no PoE, and that missing power is what makes the cable certifier fail the NEXT test",
      "Excessive crosstalk (poor twist/termination); typically fails Cat5e/Cat6 certification",
      "The client's DNS is wrong, and that failed name lookup is what the cable test reports as high NEXT",
      "It is only an access-VLAN problem on the switch, with no twist, termination, or crosstalk defect"
    ],
    "correct": 1,
    "explanation": "High NEXT means pair-to-pair interference — bad termination, untwist, or damaged cable. Re-terminate or replace; it is not a VLAN/DNS symptom.",
    "difficulty": "Hard"
  },
  {
    "question": "PC gets DHCP IP, ping to the gateway fails, and `arp -a` shows no gateway MAC. What is the most useful next troubleshooting step?",
    "options": [
      "Only change the Windows theme, treating the missing gateway ARP entry as a desktop appearance problem",
      "Check L2 on the segment (cable/VLAN/err-disabled port/ARP) before blaming DNS or the Internet",
      "Disable IPv6 on every company host, on the assumption that IPv6 is blocking the IPv4 gateway ARP reply",
      "Update the network printer firmware, as if the failed gateway ping were caused by the print driver"
    ],
    "correct": 1,
    "explanation": "No gateway ARP means no L2 path to the default gateway. Verify cable, correct VLAN, port status, and same broadcast domain — DNS/HTTP come later.",
    "difficulty": "Hard"
  },
  {
    "question": "PoE: a Class 4 (802.3at) AP will not power on a switch that is 802.3af-only. What is the best explanation?",
    "options": [
      "The access-point SSID is wrong, and that Wi-Fi failure stops the Class 4 AP from negotiating and receiving PoE",
      "802.3af (~15.4 W) can be insufficient for Class 4/at (~30 W); you need an at/bt PSE or a suitable injector",
      "The AP is missing a static route, so the 802.3af-only switch refuses to power the Class 4 radio",
      "Cat6 cable cannot carry PoE, so a Class 4 AP stays unpowered even when plugged into an 802.3at PSE"
    ],
    "correct": 1,
    "explanation": "PoE type/class caps available power. at/bt PDs on af-only ports may not get enough power. Cat5e/Cat6 carry PoE fine — the PSE is the limit.",
    "difficulty": "Hard"
  },
  {
    "question": "User joins the right Wi-Fi, gets an IP, but the captive portal never opens and Internet browsing fails. Ping to 8.8.8.8 works. Which CCST hypothesis is most plausible?",
    "options": [
      "Complete Layer 1 failure on the AP, which drops the radio and blocks frames, including the ping to 8.8.8.8",
      "DNS or captive-portal HTTP redirect/name resolution issue — not basic IP forwarding",
      "The switch lost every native VLAN, isolating the SSID and cutting IP forwarding all the way to 8.8.8.8",
      "The core cable is stuck at 10 Mbps, and that speed alone stops the captive portal and web browsing"
    ],
    "correct": 1,
    "explanation": "Successful ping to a public IP means basic forwarding works. Captive portals need DNS/HTTP redirect — bad DNS, strict HTTPS, or a blocked portal domain are common causes.",
    "difficulty": "Hard"
  },
  {
    "question": "Troubleshooting: `ipconfig` shows APIPA 169.254.x.x. What does this typically mean on a corporate Ethernet PC?",
    "options": [
      "DHCP worked and assigned the public address 169.254, which is valid for Internet access through the gateway",
      "The client got no DHCP lease (server/relay/VLAN/cable issue) and auto-configured IPv4 link-local",
      "The ISP BGP session is down, so the PC moved to 169.254 when BGP stopped advertising the default route",
      "Wi-Fi 6E is now mandatory, and without a 6E radio the Ethernet PC can only obtain 169.254.x.x"
    ],
    "correct": 1,
    "explanation": "169.254.0.0/16 is APIPA: the host gave up on DHCP. Check cable, access VLAN, interface up, DHCP server, and ip helper-address on the VLAN gateway.",
    "difficulty": "Hard"
  },
  {
    "question": "A PoE IP phone powers up and has voice, but the PC daisy-chained behind the phone has no network. Which check is most relevant?",
    "options": [
      "Only increase the phone's Wi-Fi radio power, because the daisy-chained PC depends on local wireless coverage",
      "Data VLAN on the switch (and phone), PC↔phone cable, and whether the port is access/trunk with the correct voice VLAN",
      "Disable Spanning Tree across the whole campus, because working voice proves STP is blocking only the data VLAN",
      "Rename the edge router hostname, because the PC behind the phone reaches the network by that router's configured name"
    ],
    "correct": 1,
    "explanation": "Phone+PC on one cable uses voice VLAN + data VLAN (or phone multi-VLAN). Voice OK / data dead points to data VLAN, PC cable, or phone config — not Wi-Fi.",
    "difficulty": "Hard"
  },
  {
    "question": "How does an IPv6 host typically learn its network prefix with SLAAC?",
    "options": [
      "Only via DHCPv4 relay, which returns the IPv6 prefix inside the lease",
      "From Router Advertisement (RA) messages sent by the router",
      "Only via reverse DNS (PTR), which returns the host's IPv6 network prefix",
      "Via broadcast ARP requests that the router answers with the IPv6 prefix"
    ],
    "correct": 1,
    "explanation": "With SLAAC, the host learns the prefix and parameters from the local router's Router Advertisement (ICMPv6); it may combine that with EUI-64/privacy addressing.",
    "difficulty": "Medium"
  },
  {
    "question": "Which practice best reduces phishing risk on corporate email?",
    "options": [
      "Disable all OS updates so the mail client ignores phishing messages",
      "Verify sender/URL and use MFA; report suspicious messages",
      "Share passwords only on internal chat so a coworker can check the links",
      "Open every .exe file in a user sandbox without checking the sender or URL"
    ],
    "correct": 1,
    "explanation": "Phishing targets human trust: verify sender and links, use MFA, and report to IT/SOC are practical first-line controls.",
    "difficulty": "Easy"
  },
  {
    "question": "Why enable STP PortFast on an access port facing a PC or printer?",
    "options": [
      "To elect that port as the STP root bridge so the PC or printer originates the network's BPDUs",
      "To skip listening/learning so the port goes forwarding faster and avoid DHCP/boot delays",
      "To disable BPDU filtering across the whole campus and let every switch accept BPDUs on all ports",
      "To force the access link into half duplex, lowering the speed and creating a collision domain for the PC"
    ],
    "correct": 1,
    "explanation": "PortFast (edge) skips listening/learning on end-host ports so they forward immediately. Pair with BPDU Guard; never use PortFast on links to switches.",
    "difficulty": "Medium"
  },
  {
    "question": "A copper link shows CRC/input errors and late collisions after one side was set to 100/full manually. What is the most likely cause?",
    "options": [
      "OSPF area mismatch, which creates CRC and late collisions",
      "DNS TTL too low, which causes CRC and late collisions",
      "Duplex mismatch (other side still auto/half)",
      "Wrong SNMP community, which makes the port count CRC errors"
    ],
    "correct": 2,
    "explanation": "Hard-setting speed/duplex on one end while the other auto-negotiates often yields duplex mismatch: CRCs, runts, and late collisions under load.",
    "difficulty": "Medium"
  },
  {
    "question": "What does switchport port-security primarily protect against on an access port?",
    "options": [
      "BGP AS-path prepending by upstream peers, used to lengthen the AS path those peers advertise",
      "OSPF neighbor flaps caused by an MTU mismatch on the routed interfaces, which resets the adjacency",
      "Unauthorized MAC addresses connecting to that port (limit/learn sticky MACs and violate action)",
      "DNS cache poisoning on the resolver, by injecting forged answers into cached host-name lookups"
    ],
    "correct": 2,
    "explanation": "Port security limits which MAC addresses may use an access port (static, dynamic, or sticky). On violation it can protect, restrict, or shut down the port — a basic Layer-2 access control for end hosts.",
    "difficulty": "Easy"
  },
  {
    "question": "DHCP snooping on an access switch is mainly used to:",
    "options": [
      "Accept DHCP offers only from trusted ports (usually uplinks to the real server) and drop rogue DHCP replies",
      "Replace DHCP with static addressing campus-wide, giving every host a fixed IP address and no dynamic lease",
      "Force every client into a private VLAN automatically, so that client cannot communicate with the rest of the LAN",
      "Encrypt all DHCP packets with IPsec between the client and the server, covering Discover, Offer, Request, and Ack"
    ],
    "correct": 0,
    "explanation": "DHCP snooping builds a binding table and treats only configured trusted ports as valid DHCP servers. Rogue offers from untrusted access ports are dropped, reducing MITM and wrong-gateway attacks.",
    "difficulty": "Medium"
  },
  {
    "question": "In classic Cisco VTP, what does Transparent mode do?",
    "options": [
      "Deletes all local VLANs and forces every switch in the domain into Client mode",
      "Only advertises VLANs learned from RADIUS and ignores those created in the local database",
      "Forwards VTP advertisements but does not update its own VLAN database from them",
      "Encrypts all VLAN trunks with MACsec automatically, using a session key on every trunk link"
    ],
    "correct": 2,
    "explanation": "A VTP Transparent switch relays VTP messages on trunks but keeps its own VLAN database local and does not learn or advertise VLAN changes into the VTP domain. Server creates/modifies; Client syncs from Server.",
    "difficulty": "Medium"
  },
  {
    "question": "In STP, which bridge becomes the root bridge of the spanning tree?",
    "options": [
      "The switch with the lowest Bridge ID (priority + MAC), after comparing Bridge IDs",
      "Always the switch with the highest port count, even when its Bridge ID is the highest",
      "The first switch that boots in the VLAN, even when its STP priority value is higher",
      "Only a multilayer router can be root; a Layer-2 switch is never elected as the root"
    ],
    "correct": 0,
    "explanation": "STP elects the root by lowest Bridge ID: configured priority (default 32768) plus the switch MAC. Lower priority wins; if tied, the lower MAC wins. Root ports then point toward that root.",
    "difficulty": "Easy"
  },
  {
    "question": "On Cisco devices, what is TFTP most commonly used for?",
    "options": [
      "Encrypting management sessions end-to-end like SSH, using Diffie-Hellman key exchange and a cipher on the CLI session",
      "Replacing OSPF as the interior routing protocol and advertising every route stored in the routing table",
      "Authenticating wireless clients with digital certificates that an enterprise RADIUS server must check",
      "Simple transfer of IOS images and configuration files (UDP 69), without built-in authentication or encryption"
    ],
    "correct": 3,
    "explanation": "TFTP (Trivial File Transfer Protocol) uses UDP 69 and is widely used to copy IOS images and running/startup configs to or from a server. It is lightweight but has no authentication or encryption; use it only on trusted management networks. FTP adds login and TCP reliability; SCP/SFTP are safer when available.",
    "difficulty": "Easy"
  },
  {
    "question": "What does configuring ip helper-address on a router interface typically enable?",
    "options": [
      "It turns the router into a DHCP server that invents leases locally, with no remote server",
      "DHCP relay: it forwards DHCP broadcasts from clients as unicast to a remote DHCP server",
      "It disables all broadcasts on that VLAN permanently, including ARP and DHCP requests",
      "It only translates IPv6 Neighbor Discovery to IPv4 ARP and does not relay DHCP"
    ],
    "correct": 1,
    "explanation": "ip helper-address enables DHCP relay (among other UDP helpers): the router receives a client DHCP broadcast on the LAN and forwards it as unicast to the configured DHCP server IP, so clients and the server can sit on different subnets. The router is not inventing leases unless it is also configured as a DHCP server.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a rogue access point (rogue AP) in a wireless environment?",
    "options": [
      "An official Cisco WLC that only serves guest SSIDs and is operated from the central wireless management platform",
      "A licensed access point that always uses WPA3-Enterprise and is registered and authorized on the wireless controller",
      "An unauthorized AP connected to the wired network (or broadcasting nearby), which can create security and interference risks",
      "Any AP that uses the 2.4 GHz band instead of 5 GHz, even when that access point is an authorized corporate access point on the LAN"
    ],
    "correct": 2,
    "explanation": "A rogue AP is an unauthorized wireless access point—often plugged into a corporate switch by a user, or an attacker’s evil twin. It can bypass NAC/802.1X, expose traffic, and interfere with the RF plan. Controllers and WIDS/WIPS help detect and contain rogues; hiding the SSID does not stop them.",
    "difficulty": "Easy"
  },
  {
    "question": "In 802.1X wireless (WPA2/WPA3-Enterprise), how does EAP-TLS typically authenticate the client compared with PEAP?",
    "options": [
      "EAP-TLS uses a client (and usually server) certificate; PEAP commonly tunnels an inner password method (e.g. MSCHAPv2) inside a TLS tunnel to the RADIUS server",
      "EAP-TLS only shares one pre-shared key for the whole SSID, like classic WPA2-Personal, with no client certificate and no TLS tunnel to the RADIUS server at all",
      "PEAP requires a client certificate on every station, while EAP-TLS never uses certificates, neither for the client nor for the RADIUS server",
      "Both methods disable RADIUS and authenticate only with the AP’s local user database, without MSCHAPv2, a TLS tunnel, or any client certificate"
    ],
    "correct": 0,
    "explanation": "EAP-TLS is certificate-based: the client presents a cert (and validates the server). PEAP builds a TLS tunnel to the authentication server and usually runs an inner password method such as MSCHAPv2, so clients need credentials more often than certificates. Both still use 802.1X with a RADIUS backend (e.g. ISE); neither is a shared PSK.",
    "difficulty": "Medium"
  },
  {
    "question": "What does Cisco CleanAir primarily help a wireless network do?",
    "options": [
      "Replace CAPWAP with a proprietary mesh that runs only on 900 MHz, and with no CAPWAP tunnels back to the wireless LAN controller",
      "Disable all non-Wi-Fi clients permanently without an AP, stopping those clients from associating to the WLAN at all",
      "Detect and classify non-Wi-Fi RF interferers (microwaves, Bluetooth, rogue jammers) so RRM/IT can mitigate them",
      "Encrypt every management frame with WEP by default, instead of classifying non-Wi-Fi interferers in the RF spectrum"
    ],
    "correct": 2,
    "explanation": "CleanAir uses spectrum analysis on capable APs to identify non-Wi-Fi interference sources that degrade Wi-Fi. Controllers/Catalyst Center can show interferers and drive RRM changes (channel/power). It is not a substitute for WPA3, CAPWAP, or hiding the SSID.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main goal of IEEE 802.11r (Fast Transition / Fast BSS Transition) for Wi-Fi clients?",
    "options": [
      "Speed up roaming between APs by reducing the time spent re-authenticating during a BSS transition",
      "Force every SSID to use only the 2.4 GHz band and shut off the 5 GHz radio on every access point",
      "Replace DHCP with static APIPA addresses whenever the client roams from one access point to another",
      "Turn off encryption whenever the client changes AP, leaving that client’s data traffic in the clear"
    ],
    "correct": 0,
    "explanation": "802.11r (FT) lets a client complete key handshake steps in a way that shortens roam time between APs in the same mobility domain—important for voice/video. It does not remove encryption, change DHCP behaviour, or limit the band to 2.4 GHz. 802.11k/v often complement FT with neighbor reports and assisted roaming.",
    "difficulty": "Medium"
  },
  {
    "question": "In a Cisco guest wireless design with auto-anchor (guest anchor), what is the role of the foreign controller versus the anchor controller?",
    "options": [
      "The foreign controller terminates the guest SSID locally on the campus WLC and never tunnels CAPWAP/EoIP to the anchor; the anchor only stores DHCP leases offline, with no guest VLAN or Internet egress in the DMZ",
      "Both controllers must be in the same building and share one management IP address, or guest clients cannot associate to the SSID or form a mobility tunnel between the campus and the DMZ",
      "The foreign controller is where the client associates; guest traffic is tunneled (typically CAPWAP/EoIP) to the anchor in the DMZ, which applies the guest VLAN/policy and often Internet egress",
      "The anchor controller only handles 2.4 GHz for guest clients in the DMZ; the foreign controller only handles 5 GHz on the campus, and neither tunnels traffic from the other band toward the Internet"
    ],
    "correct": 2,
    "explanation": "Auto-anchor (guest anchor) keeps guest clients associated to APs/WLCs in the campus (foreign) while tunneling their traffic to an anchor WLC in a DMZ/firewall zone. The anchor places guests on the guest VLAN and typically provides Internet access without letting them reach the internal LAN. It is not a band split, and the foreign side does not simply terminate guest traffic locally.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a DHCP starvation attack trying to achieve on a LAN, and which switch feature commonly mitigates it?",
    "options": [
      "Exhaust the DHCP server’s available IP pool by requesting many leases (often with spoofed MACs) so legitimate clients get no address; mitigate with DHCP snooping (and often port-security / rate limits)",
      "Flood the switch CAM table with fake MACs until the switch acts like a hub and floods every access port in the VLAN; mitigate only with spanning-tree PortFast, without DHCP snooping or DHCP rate limits",
      "Encrypt all DHCP Offer messages with WEP so clients cannot renew their lease or obtain an address; mitigate by disabling DHCP relay (ip helper-address) on the LAN routers, without enabling DHCP snooping",
      "Force every client to use APIPA 169.254.x.x permanently, with no lease from the DHCP server; mitigate by turning off ARP on the access switch so replies are blocked and renewal fails"
    ],
    "correct": 0,
    "explanation": "DHCP starvation floods Discover/Request traffic (frequently with many spoofed client MACs) so the server’s pool runs out and real users cannot get leases. DHCP snooping limits untrusted ports and builds a binding table; port-security and DHCP rate limiting also help. CAM overflow is a different attack (MAC flooding). Disabling DHCP relay or ARP is not the fix.",
    "difficulty": "Medium"
  },
  {
    "question": "What is a practical difference between CDP and LLDP when discovering neighbors on a switch or router?",
    "options": [
      "CDP works only on fiber-optic links; LLDP works only on twisted-pair copper, so a neighbor on an RJ-45 port is never discovered by CDP and never advertises capabilities",
      "CDP is Cisco-proprietary and enabled by default on many Cisco devices; LLDP is an open IEEE 802.1AB standard used for multivendor neighbor discovery",
      "LLDP elects the OSPF designated router on the segment; CDP elects the STP root bridge, and neither protocol advertises the neighbor identity on the local link",
      "Both protocols encrypt the entire neighbor table with IPsec by default, so CDP and LLDP advertisements cannot be captured on a SPAN port or inspected in clear text"
    ],
    "correct": 1,
    "explanation": "CDP (Cisco Discovery Protocol) is proprietary and commonly on by default on Cisco gear. LLDP (IEEE 802.1AB) is vendor-neutral and preferred in mixed environments. Both advertise identity and capabilities over the link; neither elects OSPF/STP roles nor encrypts the neighbor database with IPsec by default.",
    "difficulty": "Easy"
  },
  {
    "question": "A technician builds a copper Ethernet straight-through patch cord using TIA-568 standards. Which statement is correct?",
    "options": [
      "Straight-through always means pins 1–8 on one end map randomly to pins 8–1 on the other end",
      "You must use TIA-568A on one end and TIA-568B on the other end to make a straight-through cable",
      "Fiber OM4 LC-LC jumpers follow the same TIA-568A/B color code as copper Cat6",
      "Both ends use the same pinout standard (both TIA-568A or both TIA-568B); mixing A on one end and B on the other creates a crossover"
    ],
    "correct": 3,
    "explanation": "A straight-through cable terminates both ends with the same TIA-568 wiring (A-A or B-B). Mixing 568A on one end and 568B on the other produces a crossover (TX/RX pairs swapped). Random reverse pin mapping is not the definition of straight-through, and fiber jumpers do not use the copper 568A/B color scheme.",
    "difficulty": "Medium"
  },
  {
    "question": "What is 802.1Q tunneling (Q-in-Q / double tagging) typically used for?",
    "options": [
      "Encrypting every Ethernet frame with IPsec between two access PCs on the same user VLAN, with no outer service VLAN tag and without preserving the customer inner VLAN IDs across the provider network",
      "Replacing Spanning Tree with a single root bridge for the whole campus and the provider network, without adding an outer service VLAN tag to carry the customer tagged VLANs across that network",
      "Carrying a customer’s VLAN-tagged traffic across a provider network by adding an outer service VLAN tag, so the customer’s inner VLAN IDs are preserved end to end",
      "Forcing all access ports into the same native VLAN as the switch management SVI, with no double tagging and without keeping the customer inner VLAN IDs intact end to end across the provider"
    ],
    "correct": 2,
    "explanation": "Q-in-Q (IEEE 802.1ad style double tagging) lets a service provider wrap a customer’s 802.1Q frames with an outer tag. The provider switches on the outer VLAN; the customer’s inner tags stay intact across the metro/WAN handoff. It is not IPsec encryption, not an STP replacement, and not a way to force every access port onto the management VLAN.",
    "difficulty": "Medium"
  },
  {
    "question": "What does IEEE 802.11w (Protected Management Frames / PMF) protect in a Wi-Fi BSS?",
    "options": [
      "Selected unicast management frames (such as deauthentication and disassociation) so an attacker cannot easily forge them to kick clients offline",
      "Only the SSID broadcast in every beacon, turning the network into a hidden SSID by default, without protecting unicast deauthentication or disassociation frames",
      "The entire CAPWAP tunnel between the AP and the WLC with a second IPsec layer, without protecting unicast management frames such as deauthentication and disassociation",
      "DHCP Offer packets on the wired uplink of the AP, with no protection for the unicast deauthentication and disassociation management frames sent in the Wi-Fi BSS"
    ],
    "correct": 0,
    "explanation": "802.11w adds cryptographic protection to certain management frames (notably deauth/disassoc), reducing spoofed disconnect attacks. It does not hide the SSID by itself, does not wrap CAPWAP in extra IPsec, and does not secure wired DHCP on the AP uplink. WPA3 requires PMF; WPA2 can optionally enable it.",
    "difficulty": "Medium"
  },
  {
    "question": "In Wi-Fi (802.11), what is Dynamic Frequency Selection (DFS) mainly used for on 5 GHz (and 6 GHz where required)?",
    "options": [
      "Forcing every client to roam to 2.4 GHz whenever RSSI drops below −70 dBm, without detecting radar or vacating those regulated 5 GHz channels",
      "Detecting radar and other regulated incumbents so the AP can vacate or avoid those channels, which can cause a CAC wait or a channel change",
      "Encrypting management frames with AES-CCMP so beacons cannot be spoofed, without detecting radar or forcing the AP into a CAC wait or channel change",
      "Replacing CSMA/CA with a scheduled TDMA airtime plan on every AP, with no Channel Availability Check wait and no channel change when radar appears"
    ],
    "correct": 1,
    "explanation": "DFS (Dynamic Frequency Selection) lets APs use weather-radar and other regulated 5/6 GHz channels only if they can detect incumbents and leave the channel when required. That often means a Channel Availability Check (CAC) before use and a possible channel change mid-operation. It is not band steering, not 802.11w PMF, and not a TDMA scheduler.",
    "difficulty": "Medium"
  },
  {
    "question": "What is the practical difference between UPC and APC fiber connector polish styles?",
    "options": [
      "UPC is only for multimode fiber and APC is only for single-mode; mixing them always works optically, with no loss from a mismatched polished end-face",
      "APC adds a metal ferrule that doubles the launch power compared with UPC, without changing the end-face angle or lowering return loss back toward the laser",
      "UPC and APC differ only in the color of the strain-relief boot, with identical end-face geometry, so mating them never causes high loss or risk of damage",
      "APC uses an angled end-face that reflects light into the cladding, lowering return loss; UPC is flat (ultra polish) and should not be mated to APC"
    ],
    "correct": 3,
    "explanation": "UPC (Ultra Physical Contact) has a flat polished end-face; APC (Angled Physical Contact) is typically ~8° angled so reflected light goes into the cladding instead of back toward the laser—critical for analog/PON and many single-mode links. APC and UPC must not be mated: geometry mismatch causes high loss and possible damage. Boot color often hints (green APC, blue UPC) but color alone is not the definition, and polish style is not “multimode-only vs single-mode-only.”",
    "difficulty": "Medium"
  },
  {
    "question": "Compared with older PoE (IEEE 802.3af/at), what does IEEE 802.3bt (Type 3/Type 4, often called PoE++) mainly enable on a compatible switch port?",
    "options": [
      "Only powering devices over fiber SFP ports instead of copper RJ-45, without raising the wattage delivered on Ethernet pairs and without a Type 3 or Type 4 budget at the PSE",
      "Replacing the data pairs with dedicated DC conductors so Ethernet frames no longer share the cable, without raising the power budget at the PSE for cameras, APs, or thin clients",
      "Delivering substantially higher power (roughly up to ~60 W Type 3 / ~90 W Type 4 at the PSE) using more pairs, for devices such as PTZ cameras, access points, and thin clients",
      "Negotiating Layer 3 routing adjacency over the same pairs that carry DC power, without delivering about 60 W or 90 W to PTZ cameras, access points, or thin clients"
    ],
    "correct": 2,
    "explanation": "IEEE 802.3bt extends Power over Ethernet beyond 802.3af (~15 W) and 802.3at/PoE+ (~30 W) by using additional pairs and higher budgets (commonly cited ~60 W Type 3 and ~90 W Type 4 at the power-sourcing equipment). It still runs over copper Ethernet cabling with data and power sharing pairs after negotiation—not fiber SFPs, not “DC-only conductors instead of data,” and not a routing protocol.",
    "difficulty": "Medium"
  },
  {
    "question": "In Wi-Fi 6 (802.11ax), what is the main purpose of OFDMA (Orthogonal Frequency-Division Multiple Access)?",
    "options": [
      "Splitting a channel into resource units so an AP can serve multiple clients in the same transmit opportunity with smaller, scheduled allocations, improving efficiency for many small frames",
      "Forcing every client onto a single spatial stream so MU-MIMO is never used in the BSS, without splitting the channel into scheduled resource units for several stations in the same transmit opportunity",
      "Replacing WPA3 with an older WEP-based cipher suite for low-power IoT endpoints, with no resource units and without serving several clients in the same AP transmit opportunity",
      "Extending the 2.4 GHz band to 80 MHz-wide channels identical to 5 GHz VHT80 on every AP, without splitting the channel into smaller resource units scheduled for short frames"
    ],
    "correct": 0,
    "explanation": "OFDMA divides a Wi-Fi channel into smaller resource units (RUs) so one AP transmit/receive opportunity can address multiple stations with right-sized allocations—especially helpful under dense, short-packet traffic. It complements (does not disable) MU-MIMO; it is unrelated to WEP/WPA3 cipher choice; and it does not invent 80 MHz channels on 2.4 GHz like 5 GHz VHT80.",
    "difficulty": "Medium"
  },
  {
    "question": "On a Cisco access switch, what is the main goal of interface port security?",
    "options": [
      "Encrypting all frames on the port with MACsec so unauthorized switches cannot form an EtherChannel, without limiting which source MAC addresses may transmit on that interface",
      "Limiting which MAC addresses may send traffic on that port (and defining what happens on violation), to reduce unauthorized endpoint attachment",
      "Replacing STP with a MAC-learning blacklist that permanently disables VLANs on the uplink whenever an unknown MAC appears on the access port",
      "Forcing the port to operate only as a Layer 3 routed interface with a /30 mask, without limiting which MAC addresses may send traffic on that access interface"
    ],
    "correct": 1,
    "explanation": "Port security binds an access port to a limited set of allowed source MAC addresses (static, sticky, or dynamic learning up to a maximum) and applies a violation action (protect, restrict, or shutdown). It is about controlling which endpoints may use the port—not MACsec encryption of every frame, not disabling STP/VLANs on uplinks, and not converting the port into a routed /30.",
    "difficulty": "Easy"
  }
];
