window.QUIZ_BANK = [
  {
    "question": "In an industrial control network, which security goal usually takes priority over the others?",
    "options": [
      "Compression of historian data",
      "Confidentiality of every data flow and file",
      "Anonymity of the operators",
      "Availability of the process and safety"
    ],
    "correct": 3,
    "explanation": "OT networks usually rank Availability first, then Integrity, then Confidentiality (AIC), because stopping the process can cost money or cause harm.",
    "difficulty": "Easy",
    "domain": "1"
  },
  {
    "question": "Why are OT systems often patched much less frequently than office PCs?",
    "options": [
      "Patches need vendor validation and a production stop",
      "They never connect to any network, so patches are pointless",
      "Operating systems in OT cannot be updated",
      "Antivirus already replaces every patch"
    ],
    "correct": 0,
    "explanation": "OT patches are usually certified by the automation vendor and applied in planned shutdowns, because an untested change can stop production.",
    "difficulty": "Easy",
    "domain": "1"
  },
  {
    "question": "In the Purdue model, where do PLCs that run the control logic normally sit?",
    "options": [
      "Level 1",
      "Level 3",
      "Level 0",
      "Level 4"
    ],
    "correct": 0,
    "explanation": "Level 0 holds sensors and actuators, Level 1 the basic controllers (PLC, DCS), Level 2 supervisory HMIs/SCADA and Level 3 site operations.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "Which systems belong to Purdue Level 4?",
    "options": [
      "Field sensors and drives",
      "Operator HMIs on the line",
      "ERP, email and business planning",
      "Safety relays and light curtains on the machine"
    ],
    "correct": 2,
    "explanation": "Level 4 is site business planning and logistics (email, ERP access, reporting). It is treated as an extension of the enterprise network.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "What is the main rule for traffic crossing an industrial DMZ (Level 3.5)?",
    "options": [
      "Only ICMP is blocked between the zones",
      "Any traffic may pass straight through if it is encrypted with HTTPS",
      "No session goes straight through; data is brokered",
      "Enterprise PCs may reach the PLCs directly on TCP port 502"
    ],
    "correct": 2,
    "explanation": "In an IDMZ no flow passes directly from enterprise to industrial zone: sessions terminate on brokers, jump hosts or mirrored servers (for example a replicated historian).",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "Business analysts need production data from the plant historian. What is the usual IDMZ design?",
    "options": [
      "Open a firewall rule from the office straight to the PLCs",
      "Put the analysts' PCs in the cell/area zone",
      "Mirror the historian into the IDMZ for them to query",
      "Bridge the office VLAN into the control VLAN"
    ],
    "correct": 2,
    "explanation": "A replicated or mirrored historian in the IDMZ lets enterprise users read data without any direct session into Levels 0–3.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "Which TCP port does Modbus TCP use by default?",
    "options": [
      "102",
      "44818",
      "20000",
      "502"
    ],
    "correct": 3,
    "explanation": "Modbus TCP listens on TCP 502. Port 102 is ISO-TSAP (S7comm, IEC 61850 MMS), 44818 is EtherNet/IP explicit messaging and 20000 is DNP3.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "Which statement about Modbus security is correct?",
    "options": [
      "Every Modbus TCP frame is signed with a certificate by default",
      "Modbus RTU encrypts data with AES-128",
      "Modbus requires a password from the client before each write",
      "Classic Modbus has no authentication or encryption"
    ],
    "correct": 3,
    "explanation": "Classic Modbus RTU/TCP sends commands in clear text with no authentication, so any host that reaches the device can read or write. Modbus/TCP Security adds TLS on a separate port.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "A Modbus client must read a 16-bit setpoint that it can also change. Which data type holds it?",
    "options": [
      "Coil",
      "Input register",
      "Discrete input",
      "Holding register"
    ],
    "correct": 3,
    "explanation": "Holding registers are 16-bit read/write values. Input registers are 16-bit read-only, coils are 1-bit read/write and discrete inputs are 1-bit read-only.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Which Modbus function code reads holding registers?",
    "options": [
      "03",
      "01",
      "05",
      "16"
    ],
    "correct": 0,
    "explanation": "Function 03 reads holding registers. 01 reads coils, 05 writes a single coil and 16 (0x10) writes multiple registers.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "On a Modbus RTU RS-485 bus, what identifies which device must answer a request?",
    "options": [
      "Its MAC address carried in the frame header",
      "Its IP address and TCP port 502",
      "The slave (unit) address in the first byte",
      "The VLAN tag added by the gateway"
    ],
    "correct": 2,
    "explanation": "Modbus RTU frames start with the slave address (1–247), followed by the function code, data and a CRC-16. There is no MAC or IP on the serial bus.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "A Modbus TCP-to-RTU gateway gets timeouts only for devices at the far end of a long RS-485 run. What should you check first?",
    "options": [
      "The DNS server configured on the Modbus gateway",
      "Termination and biasing at both bus ends",
      "The OSPF cost configured on the gateway uplink",
      "The TLS certificate installed on the far-end PLC"
    ],
    "correct": 1,
    "explanation": "Long RS-485 segments need 120 Ω termination at both ends and correct biasing; missing termination causes reflections that corrupt frames for distant nodes.",
    "difficulty": "Hard",
    "domain": "3"
  },
  {
    "question": "In EtherNet/IP, how is cyclic I/O data (implicit messaging) usually carried?",
    "options": [
      "TCP port 44818 inside a TLS session",
      "TCP port 502 with a CRC-16 trailer",
      "UDP port 2222, often as multicast",
      "Raw Layer 2 frames with Ethertype 0x8892"
    ],
    "correct": 2,
    "explanation": "EtherNet/IP implicit (Class 1) I/O uses UDP 2222, unicast or multicast. Explicit messaging uses TCP 44818. Ethertype 0x8892 is PROFINET RT.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "What does the RPI (Requested Packet Interval) set on an EtherNet/IP I/O connection?",
    "options": [
      "The maximum Ethernet frame size",
      "The number of CIP sessions the adapter allows",
      "The TCP retransmission timer",
      "How often the producer sends the I/O data"
    ],
    "correct": 3,
    "explanation": "The RPI is the agreed update rate of a CIP I/O connection, for example every 10 ms. A smaller RPI means more packets per second on the network.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "What is the difference between CIP explicit and implicit messaging?",
    "options": [
      "Explicit is multicast video; implicit is voice",
      "Explicit uses UDP; implicit always uses TCP",
      "Explicit needs PROFINET; implicit needs Modbus RTU",
      "Explicit is request/response; implicit is cyclic I/O"
    ],
    "correct": 3,
    "explanation": "Explicit messages are on-demand request/response transactions (configuration, diagnostics) over TCP. Implicit messages carry real-time I/O cyclically over UDP.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "The producer/consumer model in CIP means that:",
    "options": [
      "Every consumer polls the producer in turn",
      "Only one consumer can read each tag",
      "One producer can send data that many devices consume",
      "Each consumer must acknowledge every packet it gets"
    ],
    "correct": 2,
    "explanation": "With producer/consumer, a device produces data once (for example via multicast) and any number of consumers use it, instead of each consumer polling separately.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "EtherNet/IP multicast I/O floods every port of a flat Layer 2 cell and slows older drives. Which fix is standard?",
    "options": [
      "IGMP snooping with an active IGMP querier in the VLAN",
      "Disable spanning tree on all IE switches",
      "Raise the MTU to 9000 bytes everywhere",
      "Turn on port security allowing one MAC per port"
    ],
    "correct": 0,
    "explanation": "IGMP snooping limits multicast to ports that joined the group, but in a Layer 2-only cell it needs an IGMP querier (often on the IE or distribution switch) to keep memberships alive.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "How does PROFINET RT carry its cyclic real-time data?",
    "options": [
      "Inside ISO-TSAP sessions on TCP port 102",
      "Directly in Ethernet frames, Ethertype 0x8892",
      "In UDP port 2222 multicast packets to all cells",
      "Over MQTT topics published to a central broker"
    ],
    "correct": 1,
    "explanation": "PROFINET RT skips the IP/UDP stack for cyclic data and uses Layer 2 frames with Ethertype 0x8892, usually with 802.1Q priority. That is why it cannot be routed.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Which file describes a PROFINET device's modules and parameters to the engineering tool?",
    "options": [
      "GSDML file",
      "MIB file",
      "EDS file",
      "YANG module"
    ],
    "correct": 0,
    "explanation": "PROFINET devices ship a GSDML (XML-based General Station Description) file. EDS files play the same role for EtherNet/IP and DeviceNet.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "A replaced PROFINET IO-Device does not start exchanging data. What does the IO-Controller identify it by?",
    "options": [
      "The serial number printed on its rating label",
      "Its DHCP lease and hostname",
      "Its burned-in MAC address only",
      "Its PROFINET device name (set via DCP)"
    ],
    "correct": 3,
    "explanation": "PROFINET addresses devices by name. The controller finds the device name through DCP and then assigns the IP; a new device without the right name (or topology-based naming) stays silent.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Which PROFINET variant is needed for tightly synchronized motion control with jitter below 1 µs?",
    "options": [
      "PROFINET IRT (Conformance Class C)",
      "PROFINET RT over Wi-Fi",
      "PROFINET over Modbus TCP",
      "PROFINET NRT over routed UDP"
    ],
    "correct": 0,
    "explanation": "IRT (Isochronous Real-Time, Conformance Class C) reserves time slots in hardware-supported switches and achieves sub-microsecond jitter for motion. RT (Class A/B) is enough for most I/O.",
    "difficulty": "Hard",
    "domain": "3"
  },
  {
    "question": "What is PROFIsafe?",
    "options": [
      "A safety layer over a 'black channel' network",
      "A firewall made only for PROFINET traffic",
      "An encrypted VPN tunnel between two PLCs",
      "A PROFINET cable with extra shielding"
    ],
    "correct": 0,
    "explanation": "PROFIsafe adds safety measures (counters, watchdog, CRC, identifiers) on top of PROFINET or PROFIBUS, treating the network as an untrusted black channel. It is functional safety, not cybersecurity.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Which ring redundancy protocol is standardized in IEC 62439-2 and widely used with PROFINET?",
    "options": [
      "DLR",
      "REP",
      "HSRP",
      "MRP"
    ],
    "correct": 3,
    "explanation": "MRP (Media Redundancy Protocol, IEC 62439-2) has one ring manager that blocks a port until the ring breaks. DLR is ODVA's EtherNet/IP ring and REP is Cisco's.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "What does Cisco REP (Resilient Ethernet Protocol) do in a ring of IE switches?",
    "options": [
      "Duplicates every frame on two separate LANs",
      "Blocks one port per segment and unblocks it on failure",
      "Replaces all the VLANs with a single routed segment",
      "Encrypts frames between ring neighbours"
    ],
    "correct": 1,
    "explanation": "REP organises a segment of switches, keeps one alternate port blocked to avoid a loop and unblocks it quickly when a link fails. It is faster than classic STP in rings.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Why does PRP (IEC 62439-3) give zero recovery time after a link failure?",
    "options": [
      "The controller retransmits lost frames faster than the RPI",
      "The switches pre-compute a loop-free backup path with OSPF LFA",
      "The ring manager unblocks its blocked port within 1 ms",
      "Each frame goes on two separate LANs; the receiver drops the copy"
    ],
    "correct": 3,
    "explanation": "A PRP doubly attached node sends every frame on LAN A and LAN B at once; the receiver keeps the first copy and discards the second, so a single failure loses nothing.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "How does HSR differ from PRP?",
    "options": [
      "HSR sends both copies around a single ring",
      "HSR needs two fully separate and parallel networks",
      "HSR only works over wireless links",
      "HSR is a routing protocol for OT WANs"
    ],
    "correct": 0,
    "explanation": "HSR (High-availability Seamless Redundancy) sends the two copies in opposite directions around one ring of HSR-capable nodes. PRP uses two independent parallel LANs.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "A single-attached PLC must join a PRP network. Which device connects it to both LANs?",
    "options": [
      "A media converter",
      "A RedBox (redundancy box)",
      "A Wi-Fi workgroup bridge (WGB)",
      "A PoE injector"
    ],
    "correct": 1,
    "explanation": "A RedBox attaches single-attached nodes (SAN) to PRP or HSR, sending and receiving the duplicate frames on their behalf.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Which ring protocol was defined by ODVA for EtherNet/IP devices with embedded two-port switches?",
    "options": [
      "MRP",
      "PRP",
      "DLR",
      "REP"
    ],
    "correct": 2,
    "explanation": "DLR (Device Level Ring) lets EtherNet/IP devices with two ports form a ring; a ring supervisor sends beacons and unblocks its port when the ring breaks.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Which feature is typical of an industrial Ethernet (IE) switch compared with an office switch?",
    "options": [
      "DIN-rail mounting and wide temperature range",
      "A built-in wireless controller",
      "Only 10 Mb/s ports for legacy compatibility",
      "Mandatory fan cooling"
    ],
    "correct": 0,
    "explanation": "IE switches are ruggedised: DIN-rail or panel mount, fanless, extended temperature, vibration resistance, dual power inputs and alarm relays.",
    "difficulty": "Easy",
    "domain": "4"
  },
  {
    "question": "What is the alarm relay contact on many IE switches used for?",
    "options": [
      "Resetting the switch remotely with a Modbus write",
      "Powering field sensors with 24 V",
      "Signalling faults such as power loss to a PLC",
      "Synchronising clocks to the grandmaster"
    ],
    "correct": 2,
    "explanation": "The dry-contact alarm relay changes state on configured faults (power supply loss, port down, temperature) so a PLC input or warning light can react.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "A machine builder ships ten identical cells, all using 192.168.1.0/24. How can they join one plant network without readdressing?",
    "options": [
      "Put all ten cells in the same VLAN and let ARP sort it out",
      "Use Layer 2 NAT (1:1) on the cell switches",
      "Use PROFIsafe on the cell uplinks to the plant",
      "Disable ARP on the controllers of each line"
    ],
    "correct": 1,
    "explanation": "Layer 2 NAT on IE switches maps each cell's private addresses 1:1 to unique plant addresses, so identical machine images can be deployed repeatedly.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "Why might a long production line use a ring topology instead of a redundant star?",
    "options": [
      "Rings always give lower end-to-end latency than any star",
      "A ring needs far less cabling along a long line",
      "Rings remove the need for any redundancy protocol",
      "Stars cannot carry real-time industrial protocols"
    ],
    "correct": 1,
    "explanation": "Along a long line, chaining switches into a ring costs much less cabling than running two uplinks from every switch to the distribution, while still surviving one link failure.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "What protocol does a substation or motion system use when it needs sub-microsecond clock accuracy?",
    "options": [
      "Syslog timestamps",
      "NTP over the internet",
      "SNTP from a PC",
      "IEEE 1588 PTP"
    ],
    "correct": 3,
    "explanation": "IEEE 1588 Precision Time Protocol reaches sub-microsecond accuracy with hardware timestamping; NTP is usually in the millisecond range.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "In PTP, how is the grandmaster clock chosen?",
    "options": [
      "By the lowest IP address configured on the VLAN",
      "By the Best Master Clock Algorithm (BMCA)",
      "By the switch with the most active ports",
      "By the NTP stratum of the PLC"
    ],
    "correct": 1,
    "explanation": "Clocks exchange Announce messages and the BMCA compares priority1, clock class, accuracy, variance, priority2 and identity to elect the best grandmaster.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "What does a PTP transparent clock switch do?",
    "options": [
      "Becomes grandmaster when GPS fails",
      "Terminates PTP and starts a new domain",
      "Adds its residence time to a correction field",
      "Blocks Sync messages on access ports"
    ],
    "correct": 2,
    "explanation": "A transparent clock measures how long each PTP event message stayed inside the switch and writes it into the correctionField, so queuing delay does not spoil accuracy. A boundary clock instead terminates and regenerates PTP.",
    "difficulty": "Hard",
    "domain": "5"
  },
  {
    "question": "Which PTP profile is used in IEC 61850 substations?",
    "options": [
      "The ITU-T telecom profile",
      "The Power Profile (IEEE C37.238 / IEC 61850-9-3)",
      "The IEEE 802.1AS audio-video bridging profile",
      "The default profile with NTP fallback"
    ],
    "correct": 1,
    "explanation": "Substations use the Power Profile (IEEE C37.238, IEC/IEEE 61850-9-3), with Layer 2 transport and peer-to-peer delay. Factories usually use the default profile (CIP Sync).",
    "difficulty": "Hard",
    "domain": "5"
  },
  {
    "question": "In IEC 62443, what is a conduit?",
    "options": [
      "A cable tray for shielded OT cabling",
      "A controlled communication path between zones",
      "A backup copy of PLC programs",
      "A redundant power feed to a control cabinet"
    ],
    "correct": 1,
    "explanation": "IEC 62443 groups assets with similar security needs into zones; conduits are the communication channels between zones, where controls such as firewalls are applied.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "What do IEC 62443 Security Levels (SL 1–4) describe?",
    "options": [
      "How many firewalls the plant must buy for each zone",
      "The maximum number of user accounts allowed per zone",
      "The safety integrity level (SIL) required for a machine",
      "Protection against more capable attackers"
    ],
    "correct": 3,
    "explanation": "SL 1 protects against casual or accidental violation and SL 4 against sophisticated attackers with extensive resources. SLs are set as targets per zone and conduit.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "Which IEC 62443 part lists the technical security requirements for a control system as a whole?",
    "options": [
      "62443-4-1",
      "62443-2-1",
      "62443-3-3",
      "62443-1-1"
    ],
    "correct": 2,
    "explanation": "62443-3-3 defines system security requirements and security levels. 4-1 covers the vendor's secure development lifecycle, 4-2 component requirements and 2-1 the asset owner's security program.",
    "difficulty": "Hard",
    "domain": "6"
  },
  {
    "question": "Why is passive monitoring preferred to active scanning for OT asset inventory?",
    "options": [
      "Passive tools always find more open TCP ports",
      "Active scans are illegal in every industrial plant by law",
      "Passive monitoring needs no access to the network at all",
      "Some PLCs can crash or misbehave when scanned"
    ],
    "correct": 3,
    "explanation": "Fragile or old controllers may hang under aggressive scans. Passive tools such as Cisco Cyber Vision learn assets from mirrored traffic and deep packet inspection of industrial protocols.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "What does ISA-95 mainly standardize?",
    "options": [
      "Encryption algorithms required for PLC firmware updates",
      "Cable colors and connector pinouts for factory Ethernet",
      "Integration between enterprise systems and manufacturing control",
      "The radio channels and power levels allowed for wireless sensors in plants"
    ],
    "correct": 2,
    "explanation": "ISA-95 (IEC 62264) defines the functions, levels and data models used to integrate business systems (Level 4, ERP) with manufacturing operations (Level 3, MOM/MES).",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "In the Purdue model, which level contains sensors, valves and motors themselves?",
    "options": [
      "Level 0",
      "Level 2",
      "Level 3",
      "Level 1"
    ],
    "correct": 0,
    "explanation": "Level 0 is the physical process: sensors, actuators, valves, motors. Controllers that read and drive them are at Level 1.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "Where would you normally place the plant historian, the domain controller for OT and patch servers for the line?",
    "options": [
      "Level 3, site operations in the industrial zone",
      "Level 4, in the enterprise data center next to the ERP",
      "Level 1, next to the PLCs in each cell",
      "Level 0, on the process instrument network"
    ],
    "correct": 0,
    "explanation": "Level 3 (site operations) hosts plant-wide services such as the historian, OT AD, patch and antivirus servers and engineering workstations, still inside the industrial zone.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "Why do Cisco/Rockwell CPwE designs keep each cell/area zone small, with its own VLAN?",
    "options": [
      "To contain broadcasts, faults and real-time traffic locally",
      "To avoid needing any firewall at the IDMZ",
      "To give each cell its own different spanning tree root bridge",
      "To allow PROFINET RT to be routed between areas"
    ],
    "correct": 0,
    "explanation": "Small cell/area zones limit broadcast and multicast domains, keep time-critical I/O local and stop a fault or storm in one cell from spreading to the whole plant.",
    "difficulty": "Hard",
    "domain": "2"
  },
  {
    "question": "What makes OPC UA attractive for IT/OT data exchange?",
    "options": [
      "It only works between devices of a single vendor",
      "Layer 2 frames that need no IP addressing at all",
      "It replaces fieldbus wiring with 4–20 mA loops",
      "Built-in security and a rich information model"
    ],
    "correct": 3,
    "explanation": "OPC UA is vendor-neutral, uses a structured information model and includes authentication, signing and encryption. Its binary protocol uses TCP 4840 by default.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "How does MQTT deliver sensor data from many edge devices?",
    "options": [
      "Publishers send to topics on a broker; subscribers receive",
      "Each client polls every single sensor in a fixed round-robin cycle",
      "Devices multicast raw frames with Ethertype 0x88B8",
      "Sensors write directly into the ERP database tables"
    ],
    "correct": 0,
    "explanation": "MQTT is publish/subscribe over TCP (1883, or 8883 with TLS): devices publish to topics on a broker and any subscribed client receives the messages.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "What does MQTT QoS 2 guarantee?",
    "options": [
      "The message is delivered at most once, with no retry or acknowledgement",
      "The message is delivered exactly once to the receiver",
      "The broker compresses the payload before forwarding",
      "The message is encrypted end to end without TLS"
    ],
    "correct": 1,
    "explanation": "QoS 0 is at most once, QoS 1 at least once (duplicates possible) and QoS 2 exactly once using a four-step handshake. QoS has nothing to do with encryption.",
    "difficulty": "Hard",
    "domain": "3"
  },
  {
    "question": "Which protocol is typical between a utility SCADA master and remote outstations, using TCP/UDP 20000?",
    "options": [
      "BACnet/IP",
      "PROFINET IRT",
      "Modbus RTU",
      "DNP3"
    ],
    "correct": 3,
    "explanation": "DNP3 is widely used in electric and water utilities for master–outstation telemetry, with event buffering and timestamps; over IP it uses port 20000.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "In an IEC 61850 substation, how are GOOSE trip messages carried?",
    "options": [
      "MQTT topics with QoS 2 to the control room",
      "TCP sessions to the MMS server listening on port 102",
      "Layer 2 multicast frames with high priority",
      "SNMP traps sent to the network manager"
    ],
    "correct": 2,
    "explanation": "GOOSE messages are published directly as Layer 2 multicast (Ethertype 0x88B8) with VLAN priority and repeated quickly, to meet protection times of a few milliseconds.",
    "difficulty": "Hard",
    "domain": "3"
  },
  {
    "question": "Which protocol is mainly found in building automation (HVAC, lighting) and uses UDP 47808?",
    "options": [
      "IEC 60870-5-104",
      "BACnet/IP",
      "EtherCAT",
      "CC-Link IE"
    ],
    "correct": 1,
    "explanation": "BACnet/IP is the common building automation protocol, using UDP 47808 (0xBAC0). IEC 104 is for power grid telecontrol over TCP 2404.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Why can't standard office firewalls alone protect industrial protocols well?",
    "options": [
      "They cannot filter any traffic at all on TCP port 502",
      "They only work with IPv6 industrial devices",
      "They often cannot inspect commands like PLC writes",
      "They block all multicast traffic automatically"
    ],
    "correct": 2,
    "explanation": "A port-based rule cannot tell a Modbus read from a write or a CIP 'stop PLC' command. Industrial-aware firewalls and IDS use DPI to allow or alert per function.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "Which IEC 62443 part is aimed at product vendors' secure development practices?",
    "options": [
      "62443-3-2",
      "62443-2-4",
      "62443-4-1",
      "62443-3-3"
    ],
    "correct": 2,
    "explanation": "62443-4-1 defines the secure product development lifecycle for suppliers. 3-2 covers risk assessment and zone/conduit design, and 2-4 requirements for service providers.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "During an IEC 62443-3-2 assessment, what is the result for each zone and conduit?",
    "options": [
      "A mandatory list of brand names",
      "A target security level (SL-T)",
      "An insurance premium for the plant",
      "A fixed MTBF value for its switches"
    ],
    "correct": 1,
    "explanation": "62443-3-2 partitions the system into zones and conduits and, from the risk assessment, assigns each a target security level (SL-T) that later guides the required controls.",
    "difficulty": "Hard",
    "domain": "6"
  },
  {
    "question": "Which of these is one of the seven IEC 62443 foundational requirements (FR)?",
    "options": [
      "Maximum cable length",
      "Restricted data flow",
      "Vendor lock-in",
      "Annual audit fees"
    ],
    "correct": 1,
    "explanation": "The FRs are identification and authentication control, use control, system integrity, data confidentiality, restricted data flow, timely response to events and resource availability.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "A vendor needs remote access to a PLC for support. Which approach fits OT good practice?",
    "options": [
      "A permanent port forward on the plant internet router to the PLC",
      "A 4G modem fitted inside the machine control cabinet",
      "Sharing the engineering laptop password with the vendor",
      "A jump host in the IDMZ with MFA, approval and session logging"
    ],
    "correct": 3,
    "explanation": "Remote access should terminate in the IDMZ (or a ZTNA service), require MFA and approval per session, be time-limited and recorded. Hidden modems and port forwards bypass every control.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "Which malware is known for targeting a safety instrumented system (SIS) in a petrochemical plant?",
    "options": [
      "WannaCry ransomware",
      "Triton (Trisis)",
      "Emotet banking trojan",
      "Mirai"
    ],
    "correct": 1,
    "explanation": "Triton/Trisis targeted Schneider Triconex safety controllers in 2017. Stuxnet targeted Siemens PLCs in centrifuges; Industroyer targeted power grid protocols.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "What does a data diode provide between the OT network and the enterprise?",
    "options": [
      "Automatic patching of OT hosts from IT servers",
      "Faster TCP throughput thanks to hardware offload",
      "Strictly one-way physical data flow out of OT",
      "Two-way traffic but with stronger encryption"
    ],
    "correct": 2,
    "explanation": "A data diode enforces one-way transfer in hardware (for example by having only a transmit fiber), so data can leave OT while nothing, not even acknowledgements, can come back in.",
    "difficulty": "Hard",
    "domain": "7"
  },
  {
    "question": "What is Cisco Cyber Vision mainly used for in an industrial network?",
    "options": [
      "Discovering OT assets and flows from traffic for security",
      "Pushing new PLC firmware to every controller in the plant at once",
      "Synchronising clocks with IEEE 1588 boundary clocks",
      "Replacing the IDMZ firewall with a switch feature"
    ],
    "correct": 0,
    "explanation": "Cyber Vision sensors, often embedded in IE switches, use DPI on industrial protocols to build an asset inventory, map communications, spot vulnerabilities and detect anomalies.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "An operator plugs a personal USB stick into an HMI. Which OT risk does this most directly create?",
    "options": [
      "A spanning tree loop in the cell network switches",
      "Malware entering past network security controls",
      "A duplex mismatch on the HMI uplink",
      "A PTP grandmaster election in the area"
    ],
    "correct": 1,
    "explanation": "Removable media bypass firewalls and segmentation; Stuxnet spread this way. Plants use USB policies, kiosk scanning stations and device control.",
    "difficulty": "Easy",
    "domain": "7"
  },
  {
    "question": "What is an allow-list (whitelisting) approach on an OT HMI?",
    "options": [
      "Running only approved executables and blocking the rest",
      "Allowing every program that carries a valid code signature",
      "Letting users install software after a warning",
      "Blocking only the IP addresses on a threat feed"
    ],
    "correct": 0,
    "explanation": "Application allow-listing suits OT hosts whose software rarely changes: only known, approved programs may run, which stops most malware without frequent signature updates.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "Which wireless technology is designed as a self-organising 2.4 GHz mesh for process instruments?",
    "options": [
      "Bluetooth Low Energy beacons",
      "LoRaWAN on 868 MHz",
      "WirelessHART (IEC 62591)",
      "Wi-Fi 6 in the 6 GHz band"
    ],
    "correct": 2,
    "explanation": "WirelessHART uses IEEE 802.15.4 radios at 2.4 GHz with time-synchronised channel hopping in a mesh, aimed at process field instruments. ISA100.11a is a similar standard.",
    "difficulty": "Medium",
    "domain": "8"
  },
  {
    "question": "A water utility needs battery sensors spread over many kilometres that send a few bytes per hour. Which fits best?",
    "options": [
      "Wi-Fi 6 access points on every pole",
      "LoRaWAN in the sub-GHz band",
      "PROFINET over copper to each site",
      "Ethernet/IP over a DLR fiber ring"
    ],
    "correct": 1,
    "explanation": "LoRaWAN (868 MHz in Europe) offers long range and years of battery life for tiny, infrequent payloads, which suits remote metering. NB-IoT or LTE-M are licensed cellular alternatives.",
    "difficulty": "Medium",
    "domain": "8"
  },
  {
    "question": "AGVs moving across a warehouse need their onboard Ethernet devices connected over Wi-Fi. What is the usual Cisco building block?",
    "options": [
      "A PoE injector on the vehicle charger",
      "A workgroup bridge (WGB) on each vehicle",
      "An IE switch running PRP towards two access points",
      "A mesh root AP inside each AGV"
    ],
    "correct": 1,
    "explanation": "A WGB is a client radio that bridges the wired devices on the vehicle to the WLAN. For fast-moving vehicles needing very low handoff times, Cisco Ultra-Reliable Wireless Backhaul (URWB) is used.",
    "difficulty": "Hard",
    "domain": "8"
  },
  {
    "question": "What is the main benefit of running analytics at the edge (fog) in a plant?",
    "options": [
      "Lower latency and less raw data sent upstream",
      "Making every PLC scan cycle faster than one microsecond",
      "Turning Layer 2 traffic into routed traffic",
      "Removing the need for any network security"
    ],
    "correct": 0,
    "explanation": "Edge computing (for example Cisco IOx apps on IE switches or IR routers) processes data close to the machines, reacts faster and sends only filtered results to the cloud or data center.",
    "difficulty": "Medium",
    "domain": "8"
  },
  {
    "question": "Which QoS approach do industrial designs usually apply to time-critical I/O and PTP?",
    "options": [
      "Mark I/O as scavenger so it never blocks office data",
      "Put all traffic in one best-effort queue for fairness",
      "Police PTP to 64 kb/s on every port to protect the uplinks",
      "Trust and prioritise their DSCP/CoS markings over bulk traffic"
    ],
    "correct": 3,
    "explanation": "IE switch templates trust the CIP or PROFINET markings and place PTP event messages and real-time I/O in priority queues, so file transfers and video cannot delay them.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "A small unmanaged switch was added inside a machine cabinet. What problem does this commonly cause?",
    "options": [
      "It forces every PLC in the cabinet into half duplex mode",
      "It doubles the PoE budget of the cabinet",
      "It converts PROFINET frames into Modbus",
      "No IGMP snooping, loop protection or visibility"
    ],
    "correct": 3,
    "explanation": "Unmanaged switches flood multicast I/O, cannot run ring or loop protection, give no diagnostics and cannot be monitored, so a loop or storm there is hard to find.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "Which media is usually chosen for links between buildings or near large drives in a plant?",
    "options": [
      "Unshielded Cat5e patch cords",
      "Coaxial cable with BNC connectors and T-pieces",
      "Fiber optic, immune to electrical noise",
      "Flat RJ-11 telephone cable"
    ],
    "correct": 2,
    "explanation": "Fiber does not pick up EMI from motors and drives and avoids ground potential differences between buildings, so it is preferred for backbones and noisy areas.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Which connector is common for industrial Ethernet in harsh, vibrating environments?",
    "options": [
      "M12, D- or X-coded",
      "BNC coaxial plug",
      "DB-25 serial plug",
      "RJ-11 phone jack"
    ],
    "correct": 0,
    "explanation": "Circular M12 connectors seal against dust and water (IP67) and lock against vibration. D-coding is used for 100 Mb/s and X-coding for Gigabit.",
    "difficulty": "Easy",
    "domain": "4"
  },
  {
    "question": "Which PTP messages does a slave use to measure the path delay in end-to-end mode?",
    "options": [
      "Hello and Keepalive",
      "Announce and Signaling messages",
      "Delay_Req and Delay_Resp",
      "Pdelay_Req only"
    ],
    "correct": 2,
    "explanation": "With the end-to-end mechanism, Sync/Follow_Up give the master's time and the slave sends Delay_Req; the master answers Delay_Resp, letting the slave compute the mean path delay. Peer-to-peer uses Pdelay messages.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "What does a PTP boundary clock do?",
    "options": [
      "Acts as slave on one port and master on others",
      "Forwards PTP unchanged and only counts frames",
      "Always becomes the grandmaster of the domain",
      "Translates PTP into NTP for older PLCs on the line"
    ],
    "correct": 0,
    "explanation": "A boundary clock synchronises to the upstream master on one port and serves as master on its downstream ports, splitting a large network into smaller timing hops.",
    "difficulty": "Hard",
    "domain": "5"
  },
  {
    "question": "Why do PTP networks rely on hardware timestamping in switches and devices?",
    "options": [
      "Software timestamps cannot be sent over UDP",
      "Hardware timestamps make PTP encrypted",
      "It lets PTP replace spanning tree on rings",
      "Software stacks add variable delay that ruins accuracy"
    ],
    "correct": 3,
    "explanation": "Timestamping at the PHY/MAC removes the unpredictable latency of operating system queues and interrupts, which is needed for sub-microsecond accuracy.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "Which statement best describes the IT/OT convergence challenge?",
    "options": [
      "OT devices never use TCP/IP, so they cannot be connected",
      "IT and OT use the same patching and change windows",
      "Shared IP networks must meet OT uptime and safety needs",
      "OT security is solved once the plant has antivirus"
    ],
    "correct": 2,
    "explanation": "Plants now share Ethernet/IP with IT, but OT keeps different priorities: deterministic traffic, long lifecycles, safety and uptime. Designs and teams must respect both.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "What is a typical lifetime for a PLC or DCS installed in a plant?",
    "options": [
      "1 to 2 years, like office laptops",
      "15 to 25 years",
      "6 months",
      "3 to 4 years"
    ],
    "correct": 1,
    "explanation": "Control systems are often run for decades, so networks must support old devices, legacy protocols and operating systems long out of vendor support.",
    "difficulty": "Easy",
    "domain": "1"
  },
  {
    "question": "In zone design, where should a safety instrumented system (SIS) usually be placed?",
    "options": [
      "In the same flat VLAN as the office printers",
      "In its own zone with tightly controlled conduits",
      "In the IDMZ, so vendors can reach it easily",
      "On the guest Wi-Fi network to simplify remote checks"
    ],
    "correct": 1,
    "explanation": "An SIS has the highest consequence of compromise, so it is placed in a separate zone (often with a higher SL-T) and only minimal, monitored conduits to the BPCS.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "A PRP network carries traffic from a doubly attached IED. On LAN A a switch shows the frames but LAN B shows none. What is the effect?",
    "options": [
      "No data loss, but redundancy is gone until B is fixed",
      "Every frame is now delivered twice",
      "The IED stops sending on both LANs until B is back",
      "PRP automatically converts to HSR mode"
    ],
    "correct": 0,
    "explanation": "PRP keeps working with one LAN, so the application sees nothing; however a second failure on LAN A would now cause loss, so LAN B must be supervised and fixed.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "Why is 'protected' or 'secure' Express Setup on an IE switch not enough after commissioning?",
    "options": [
      "It disables all industrial protocols after one day",
      "It forces the switch into unmanaged mode",
      "It removes the switch from the PROFINET topology and the ring",
      "Defaults still need hardening (passwords, SNMP, ports)"
    ],
    "correct": 3,
    "explanation": "Quick-setup wizards get the switch working, but good practice still requires unique credentials, SNMPv3 instead of default communities, disabling unused ports and services, and logging.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "What best describes IO-Link in a machine?",
    "options": [
      "It is a point-to-point link from a master to a single sensor",
      "It is a ring protocol for IE switches",
      "It is the encrypted version of Modbus TCP for sensors",
      "It is a PTP profile for power substations"
    ],
    "correct": 0,
    "explanation": "IO-Link (IEC 61131-9) is a point-to-point, three-wire connection between an IO-Link master port and one smart sensor or actuator, carrying process data and parameters. The master then connects upward over PROFINET or EtherNet/IP.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Why does EtherCAT need dedicated slave hardware rather than ordinary switches between devices?",
    "options": [
      "It uses fiber only and cannot run on copper",
      "It needs a Wi-Fi controller for every segment",
      "Slaves process the frame on the fly as it passes through",
      "It relies on TCP retransmissions for timing"
    ],
    "correct": 2,
    "explanation": "In EtherCAT one frame travels through all slaves, each reading and inserting its data on the fly in hardware before forwarding it. Ordinary switches would break this processing chain.",
    "difficulty": "Hard",
    "domain": "3"
  },
  {
    "question": "Which practice best limits damage if an engineering workstation in one cell is infected?",
    "options": [
      "Use the same admin password on all PLCs for faster support",
      "Segment cells and allow only needed flows between them",
      "Leave Telnet enabled for vendor troubleshooting",
      "Connect all cells directly to the enterprise network"
    ],
    "correct": 1,
    "explanation": "Segmentation with least-privilege conduits (for example zone firewalls or SGT-based policy on IE switches) keeps an infection in one cell from reaching the others.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "Which port does EtherNet/IP explicit messaging use for unconnected and connected CIP requests?",
    "options": [
      "UDP 2222 multicast only",
      "UDP 47808 to a broadcast address",
      "TCP 4840 with OPC UA security",
      "TCP 44818"
    ],
    "correct": 3,
    "explanation": "Explicit messaging (configuration, tag reads, diagnostics) uses TCP 44818 and UDP 44818 for some discovery. Cyclic I/O uses UDP 2222.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Cyber Vision shows an engineering laptop sending 'program download' to a PLC outside any change window. What is the right first action?",
    "options": [
      "Reboot the PLC to clear the new program right away",
      "Verify with operations whether the change was authorised",
      "Ignore it because the laptop is inside the cell zone",
      "Block all CIP traffic on the plant core switch"
    ],
    "correct": 1,
    "explanation": "An unexpected program change is a high-value OT alert, but blind blocking or rebooting can stop production. First confirm with operations and the change process, then contain if it was not authorised.",
    "difficulty": "Hard",
    "domain": "7"
  },
  {
    "question": "Which device sits at the top of a cell/area zone and links it to the plant distribution in CPwE?",
    "options": [
      "A Layer 3 switch acting as the cell gateway",
      "A Wi-Fi access point running in bridge mode",
      "A PLC with two Ethernet ports",
      "An unmanaged five-port switch in the cabinet"
    ],
    "correct": 0,
    "explanation": "Each cell/area VLAN normally has its default gateway on a Layer 3 distribution switch (or Layer 3 IE switch), which routes between cells and toward Level 3 while keeping Layer 2 local.",
    "difficulty": "Medium",
    "domain": "4"
  }
];
