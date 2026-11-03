window.QUIZ_BANK = [
  {
    "question": "A new Cat6 run shows a correct wire map, but the certifier fails it on NEXT and the PC link drops under load. The installer used the right pins but paired 3 with 4 and 5 with 6. What is this fault?",
    "options": [
      "A split pair",
      "A reversed pair",
      "A short between two pins",
      "An open conductor on pin 8"
    ],
    "correct": 0,
    "explanation": "A split pair keeps pin-to-pin continuity (so a simple wire map passes), but the signals of one pair travel on two different twisted pairs, which destroys crosstalk cancellation.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "A tester reports 'reversed' on pins 1 and 2 of a freshly crimped cable. What happened?",
    "options": [
      "The cable is longer than 100 m",
      "The two wires of that pair were swapped at one end",
      "The cable is shielded but the jack is not",
      "The pair is fine; the tester needs calibration"
    ],
    "correct": 1,
    "explanation": "A reversed pair means the tip and ring of one pair are swapped at one end (1 goes to 2 and 2 to 1). Re-terminate that end in the correct T568 order.",
    "difficulty": "Easy",
    "domain": "1"
  },
  {
    "question": "A desk link only comes up at 100 Mb/s with a Gigabit switch and NIC. The tester shows pair 7-8 open. Why does it still work at 100 Mb/s?",
    "options": [
      "100BASE-TX uses all four pairs at a lower rate",
      "Auto-MDIX moves the data onto the shield",
      "100BASE-TX only needs pairs 1-2 and 3-6",
      "The switch converts the link to PoE"
    ],
    "correct": 2,
    "explanation": "100BASE-TX uses only two pairs, while 1000BASE-T needs all four. With one pair broken, auto-negotiation (or downshift) settles at 100 Mb/s.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "The certifier fails a link on NEXT only at the patch panel end. What is a common workmanship cause there?",
    "options": [
      "Pairs untwisted too far back when punched down",
      "The cable was labelled with a printed tag",
      "The panel is mounted on the wrong rack unit",
      "The cable jacket color does not match the panel"
    ],
    "correct": 0,
    "explanation": "For Cat6, the twist must be kept to within about 13 mm (0.5 in) of the termination. Untwisting more at the punch-down raises NEXT at that end.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "The channel test shows 112 m and fails insertion loss. What is the standard maximum channel length for twisted-pair Ethernet?",
    "options": [
      "90 m with no patch cords allowed",
      "150 m if the cable is Cat6A",
      "100 m, including patch cords",
      "200 m for 1000BASE-T only"
    ],
    "correct": 2,
    "explanation": "TIA/ISO allow a 100 m channel: up to 90 m of permanent link plus up to 10 m of patch and equipment cords in total. Longer runs need a switch or fiber.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "A user's link drops whenever the desk is moved. The cable tests fine while still. What do you suspect first?",
    "options": [
      "A DHCP scope that is too small",
      "A duplicate SSID nearby",
      "A wrong DNS suffix on the PC",
      "A loose or badly crimped connector"
    ],
    "correct": 3,
    "explanation": "Intermittent faults that follow movement point to the physical layer: a poorly crimped plug, a damaged keystone or a cable crushed under the desk. Re-terminate or swap with a known-good cord.",
    "difficulty": "Easy",
    "domain": "1"
  },
  {
    "question": "Which tool do you use to terminate solid-core Cat6 onto a 110-style keystone jack?",
    "options": [
      "An RJ-45 ratchet crimper",
      "A punch-down tool with a 110 blade",
      "A fiber cleaver with a diamond blade",
      "A tone generator probe"
    ],
    "correct": 1,
    "explanation": "Keystone jacks and patch panels use IDC contacts: the punch-down tool seats the wire and trims the excess. RJ-45 crimpers are for plugs on patch cords.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "A shielded (F/UTP) cabling system was installed, but the patch panel is not bonded to the rack ground. What is the risk?",
    "options": [
      "The cable will no longer carry PoE",
      "The shield can act as an antenna and add noise",
      "The jacks will not accept RJ-45 plugs",
      "The link will be forced to half duplex"
    ],
    "correct": 1,
    "explanation": "An unbonded shield is not drained to ground, so it can pick up and radiate interference, sometimes performing worse than UTP. Shielded systems must be bonded per TIA-607.",
    "difficulty": "Hard",
    "domain": "1"
  },
  {
    "question": "A cable tester's TDR shows a fault at 23 m on a 40 m run. How do you use this?",
    "options": [
      "Replace the whole 40 m run at once, without looking for the damage",
      "Look along the route about 23 m from the tester end",
      "Assume the far-end jack is faulty",
      "Re-crimp only the plug at the tester end of the run"
    ],
    "correct": 1,
    "explanation": "Time-domain reflectometry gives the distance to an open, short or impedance change. Measure along the route from the tester end to find damage such as a crushed cable or a staple.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "For a new 10GBASE-T run of 90 m in a busy bundle, which cable category should be specified?",
    "options": [
      "Cat6A",
      "Cat5e",
      "Cat3",
      "Cat6 at any length"
    ],
    "correct": 0,
    "explanation": "Cat6A supports 10GBASE-T to 100 m and limits alien crosstalk between cables in a bundle. Cat6 supports 10G only up to about 37–55 m depending on conditions.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "A switch shows a fiber uplink down at both ends. Both transceivers show Tx power but Rx is -40 dBm. What is a quick first check?",
    "options": [
      "Swap the Tx/Rx polarity of the duplex patch cord",
      "Upgrade the IOS on both switches first",
      "Change the VLAN on the uplink",
      "Disable spanning tree on both uplink ports"
    ],
    "correct": 0,
    "explanation": "Light is being sent but not received on either side, a typical sign of Tx connected to Tx. Flipping the duplex connector (or patch polarity) at one end usually restores the link.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "Calculate the expected loss of a 3 km single-mode link at 1310 nm: 0.35 dB/km fiber, two mated connector pairs at 0.5 dB each and two splices at 0.1 dB each.",
    "options": [
      "2.25 dB",
      "1.05 dB",
      "3.15 dB",
      "0.35 dB"
    ],
    "correct": 0,
    "explanation": "Fiber: 3 × 0.35 = 1.05 dB; connectors: 2 × 0.5 = 1.0 dB; splices: 2 × 0.1 = 0.2 dB. Total 2.25 dB, which the transceiver's power budget must exceed with margin.",
    "difficulty": "Hard",
    "domain": "2"
  },
  {
    "question": "A short 2 m single-mode patch joins two 1000BASE-ZX optics in the lab, and the link shows errors. Rx power is above the receiver maximum. What fixes it?",
    "options": [
      "Changing to a crossed RJ-45 cable between the two switches",
      "A longer multimode patch cord",
      "Cleaning only the transmitter end",
      "An inline attenuator to bring Rx into range"
    ],
    "correct": 3,
    "explanation": "Long-reach optics transmit so much power that a short link saturates the receiver. An attenuator (or a lower-power optic) brings Rx within the datasheet window.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "Why is a launch cable (dead-zone fiber) attached between the OTDR and the link under test?",
    "options": [
      "To boost the OTDR laser power",
      "So the first connector of the link can be measured",
      "To convert multimode into single-mode",
      "To filter out ambient room light that would distort the trace"
    ],
    "correct": 1,
    "explanation": "The OTDR is blind for some metres after its own connector (the dead zone). A launch cable moves the link's first connector beyond that zone; a receive cable does the same at the far end.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "On an OTDR trace you see a loss step with no reflective spike at 1.2 km, larger at 1550 nm than at 1310 nm. What is the most likely cause?",
    "options": [
      "A mated connector pair",
      "The open end of the fiber",
      "A ghost caused by the launch cable",
      "A tight bend (macrobend) in the cable"
    ],
    "correct": 3,
    "explanation": "Non-reflective events are splices or bends. A bend loses much more at 1550 nm than at 1310 nm, while a splice loses about the same at both wavelengths. Connectors show reflective spikes.",
    "difficulty": "Hard",
    "domain": "2"
  },
  {
    "question": "An OTDR shows a 'gainer' (apparent gain) at a splice when tested from one end. What is the correct way to get the real splice loss?",
    "options": [
      "Ignore the event because gains are impossible",
      "Replace the splice without measuring again",
      "Test only at 850 nm on single-mode",
      "Test from both ends and average the two readings"
    ],
    "correct": 3,
    "explanation": "Joining fibers with different backscatter coefficients makes one direction show a gain and the other an exaggerated loss. Bidirectional averaging gives the true splice loss.",
    "difficulty": "Hard",
    "domain": "2"
  },
  {
    "question": "Which handheld tool shines a visible red laser into a fiber to find breaks and tight bends near the closet?",
    "options": [
      "Toner and inductive probe",
      "Visual fault locator (VFL)",
      "Optical power meter and source",
      "Loopback plug"
    ],
    "correct": 1,
    "explanation": "A VFL injects visible red light; it glows through the jacket at breaks, bad connectors or tight bends over the first few kilometres. Never look into the fiber end with it on.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "A green connector is mated to a blue connector in a single-mode panel and the loss is very high. Why?",
    "options": [
      "An APC (angled) connector was mated to a UPC (flat) one",
      "Green means multimode and blue means single-mode",
      "The colors mean different wavelengths of light",
      "Blue connectors are only for copper links"
    ],
    "correct": 0,
    "explanation": "Green is APC (8° angle) and blue is UPC. Mating them leaves an air gap and misalignment, causing high loss and possible damage to the end faces.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "Old orange 62.5 µm multimode patch cords are used on a new aqua OM4 (50 µm) backbone. What is the effect?",
    "options": [
      "No effect, since all multimode fiber is identical",
      "Extra loss from the core size mismatch",
      "The link becomes single-mode automatically",
      "PoE can now flow over the fiber"
    ],
    "correct": 1,
    "explanation": "Light from a 62.5 µm core into a 50 µm core partly misses the smaller core, adding several dB of loss in that direction. Keep the same fiber type end to end.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "What is the first rule before connecting any fiber patch cord to a transceiver?",
    "options": [
      "Bend it tightly to check the jacket strength",
      "Look into the end to confirm light is present",
      "Inspect the end face with a scope and clean if needed",
      "Blow on the end face to remove dust"
    ],
    "correct": 2,
    "explanation": "'Inspect before you connect': view the end face with a fiber scope, clean with a proper cleaner if dirty, and inspect again. Never look into a fiber with the eye or blow on it.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "With a light source and power meter you set the reference, then measure a link at -2.8 dB. The calculated budget is 2.1 dB. What next?",
    "options": [
      "Swap the meter for a cable certifier",
      "Accept it, since any value under 3 dB passes",
      "Inspect and clean the connectors, then retest",
      "Replace the switch at the far end"
    ],
    "correct": 2,
    "explanation": "A loss 0.7 dB above the calculated value usually means a dirty or damaged connector or a bad splice. Clean and inspect each connection and retest before replacing anything.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "A 10GBASE-SR SFP+ is connected through OS2 single-mode fiber to a 10GBASE-LR at the far end. What happens?",
    "options": [
      "It works, because both ends run 10 Gb/s Ethernet",
      "The link negotiates down and runs at 1 Gb/s instead",
      "The link fails: 850 nm MMF vs 1310 nm SMF optics",
      "Only PoE is lost on the link"
    ],
    "correct": 2,
    "explanation": "SR optics use 850 nm on multimode, LR uses 1310 nm on single-mode. Both ends must use the same optic type and the fiber type that type expects.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Two BiDi SFPs on a single strand will not link. One is labelled 1310 nm Tx/1490 nm Rx. What must the other one be?",
    "options": [
      "The matching pair: 1490 nm Tx/1310 nm Rx",
      "A standard duplex LX transceiver",
      "Identical: 1310 nm Tx/1490 nm Rx",
      "Any SFP with the same vendor"
    ],
    "correct": 0,
    "explanation": "BiDi optics transmit and receive on different wavelengths over one fiber, so they are sold as complementary pairs (for example U and D types). Two identical units cannot talk.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "After inserting a third-party SFP, a Catalyst port goes err-disabled with a 'gbic-invalid' message. What does it indicate?",
    "options": [
      "The fiber is too long for the optic",
      "The access VLAN configured on the port is wrong",
      "The switch rejected the module as unsupported",
      "Spanning tree blocked the port after a loop"
    ],
    "correct": 2,
    "explanation": "Cisco switches check transceiver identity; an unsupported or unrecognised module can be err-disabled (gbic-invalid). Use a supported part from the Cisco TMG compatibility matrix.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Which command shows the Tx/Rx optical power and temperature of an SFP on IOS XE?",
    "options": [
      "show running-config | include vlan",
      "show ip interface brief",
      "show vlan brief",
      "show interfaces transceiver detail"
    ],
    "correct": 3,
    "explanation": "With DOM-capable optics, show interfaces transceiver (detail) lists temperature, voltage, bias current and Tx/Rx power with alarm thresholds.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "A technician needs the exact part number (PID) and serial of the SFPs in a switch for an RMA. Which command helps?",
    "options": [
      "show interfaces status",
      "show inventory",
      "show mac address-table",
      "show cdp neighbors"
    ],
    "correct": 1,
    "explanation": "show inventory lists the chassis, modules and transceivers with their PID, VID and serial number, which is what the RMA process asks for.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "A 1 m twinax cable with SFP+ ends links two switches in the same rack. What is it called?",
    "options": [
      "A fiber-to-copper media converter",
      "A Direct Attach Copper (DAC)",
      "An OTDR launch cable",
      "A rollover console cable"
    ],
    "correct": 1,
    "explanation": "A DAC is copper twinax with fixed SFP+ (or QSFP) ends, cheap and low-latency for short in-rack links. Active Optical Cables (AOC) do the same with fiber for longer reach.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "Before buying optics for a new switch, which source confirms which transceivers it supports?",
    "options": [
      "Any online marketplace listing for SFP modules",
      "The Cisco TMG compatibility matrix",
      "The DHCP server logs",
      "The colour of the switch front panel"
    ],
    "correct": 1,
    "explanation": "The Cisco TMG compatibility matrix lists the transceivers supported per platform and software release, including minimum versions and DOM support.",
    "difficulty": "Easy",
    "domain": "4"
  },
  {
    "question": "show power inline shows: Available 370 W, Used 362 W. A new 25 W camera gets no power. What is the cause?",
    "options": [
      "The port is in the wrong VLAN",
      "The camera needs a crossover cable",
      "The PoE budget is nearly exhausted",
      "The camera only works with fiber"
    ],
    "correct": 2,
    "explanation": "Only 8 W remain, less than the camera needs, so the switch denies power. Free budget (lower allocations via LLDP/CDP, move devices) or add a power supply.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "A switch allocates PoE by class. Twenty Class 4 APs are connected. How much budget is reserved at the PSE?",
    "options": [
      "20 × 15.4 W = 308 W",
      "20 × 60 W = 1200 W",
      "20 × 25.5 W = 510 W",
      "20 × 30 W = 600 W"
    ],
    "correct": 3,
    "explanation": "Class 4 (802.3at) reserves 30 W per port at the PSE (25.5 W at the device after cable loss). Without LLDP negotiation, the switch reserves the full class value.",
    "difficulty": "Hard",
    "domain": "5"
  },
  {
    "question": "Phones are Class 4 by hardware but really use about 7 W. How can you stop the switch reserving 30 W for each?",
    "options": [
      "Use crossover patch cords to the phones",
      "Disable PoE and use local power bricks",
      "Let CDP/LLDP power negotiation set the real allocation",
      "Move the phones to the native VLAN"
    ],
    "correct": 2,
    "explanation": "With CDP or LLDP-MED power negotiation, the device requests its actual need and the switch updates the allocation, freeing budget compared with static class-based reservation.",
    "difficulty": "Hard",
    "domain": "5"
  },
  {
    "question": "A new PTZ camera with heater needs 60 W, but the access switch only supports 802.3at. What is the simplest field fix?",
    "options": [
      "Use two patch cords in parallel to the camera",
      "Set the port to 100 Mb/s half duplex",
      "Swap the cable for Cat3 to reduce loss",
      "Install an 802.3bt midspan injector"
    ],
    "correct": 3,
    "explanation": "802.3at tops out at 30 W at the PSE. An 802.3bt (Type 3/4) midspan injector or a UPOE/bt switch port is needed for a 60 W device.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "When a PoE switch loses one of two power supplies, some phones reboot. What setting decides which ports keep power?",
    "options": [
      "The MTU value set on each interface",
      "The description field of each interface",
      "The spanning tree port cost",
      "The PoE priority of each port"
    ],
    "correct": 3,
    "explanation": "If the budget shrinks, the switch sheds power from the lowest-priority ports first. Set high priority for APs, cameras and emergency phones.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "show power inline Gi1/0/7 shows 'faulty'. A known-good phone also fails on that port. What do you check?",
    "options": [
      "The DNS servers handed out in the voice VLAN DHCP scope",
      "The cabling for shorts, then the port with a PoE tester",
      "The VTP domain name of the switch",
      "The phone's ring tone and display settings"
    ],
    "correct": 1,
    "explanation": "A 'faulty' state means the switch detected an error such as a short or overload. Test the cabling, then try the port with a PoE tester or a different device; the port may need power inline reset.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "A large bundle of cables carrying high-power PoE runs hot in a ceiling. Why does this matter?",
    "options": [
      "Heat changes the VLAN of the ports",
      "Heat increases insertion loss and can damage cables",
      "Warm cables carry more PoE power",
      "Hot cables need a different IP address"
    ],
    "correct": 1,
    "explanation": "Current through many conductors heats the bundle; higher temperature raises insertion loss and can exceed cable ratings. Use smaller bundles, better ventilation or cable rated for power.",
    "difficulty": "Easy",
    "domain": "5"
  },
  {
    "question": "A PC in a meeting room gets an address from the guest subnet instead of the staff subnet. What is the most likely switch-side mistake?",
    "options": [
      "The access port is in the wrong VLAN",
      "The PoE budget is exhausted",
      "The port duplex is set to full",
      "The switch has the wrong IOS version"
    ],
    "correct": 0,
    "explanation": "The VLAN on the access port decides which subnet the PC's DHCP request reaches. Check show interfaces switchport or show vlan brief and correct the access VLAN.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "One side of a link is hard-set to 100/full and the other is on auto. The auto side shows 'a-100 a-half'. What symptoms follow?",
    "options": [
      "Only broadcast and multicast traffic is affected on the link",
      "No errors, just slower throughput on both",
      "The link stays down until both are auto",
      "Late collisions on the half side, CRCs on the full side"
    ],
    "correct": 3,
    "explanation": "The auto side cannot negotiate with a fixed peer, so it detects 100 Mb/s but falls back to half duplex. The half side sees late collisions and the full side sees CRC/runts, with slow transfers.",
    "difficulty": "Hard",
    "domain": "6"
  },
  {
    "question": "A user connected a small home switch under their desk and the port is now err-disabled. Which feature most likely did this?",
    "options": [
      "BPDU Guard on a PortFast access port",
      "DHCP snooping on the VLAN",
      "Jumbo frames enabled on the uplink trunk",
      "NTP authentication with the core switch"
    ],
    "correct": 0,
    "explanation": "BPDU Guard err-disables an edge port when it receives a BPDU, which happens if a switch is plugged in. Remove the device and recover the port (shutdown/no shutdown or errdisable recovery).",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "You must find which switch port a wall jack is patched to, and the labels are missing. What is a quick method?",
    "options": [
      "Read the DHCP server's scope options",
      "Plug in a laptop and read LLDP/CDP",
      "Check the translations in the router's NAT table",
      "Ping the broadcast address of the subnet"
    ],
    "correct": 1,
    "explanation": "A laptop with an LLDP/CDP tool (or a link tester showing switch name and port) reveals the neighbour switch and interface. Alternatively, find the laptop's MAC in show mac address-table.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "Which standard defines labeling and administration of telecom cabling (identifiers for panels, ports and cables)?",
    "options": [
      "ANSI/TIA-606",
      "IEEE 802.3af",
      "ISO 9001 quality management",
      "IEC 61850"
    ],
    "correct": 0,
    "explanation": "ANSI/TIA-606 sets identifier formats and records for spaces, racks, panels, ports and cables, so any technician can trace a link from documentation.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "Where should a horizontal cable be labelled?",
    "options": [
      "Only at the patch panel end, since the desk end is visible",
      "In the middle of the run above the ceiling tiles",
      "Only on the documentation spreadsheet, never on the cable",
      "At both ends, within a short distance of each termination"
    ],
    "correct": 3,
    "explanation": "Label both ends of every cable near the termination (and the jack and panel port), using durable printed labels that match the records.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "A wall jack is labelled '2B-A12-24'. Following a typical TIA-606 style scheme, what does it most likely identify?",
    "options": [
      "Floor 2 room B, panel A12, port 24",
      "Building 2, VLAN 12, 24 users connected",
      "VLAN 2, subnet B, host 12, port 24",
      "A 24 m cable of category 2B"
    ],
    "correct": 0,
    "explanation": "Identifiers usually encode the telecom space, the panel and the port, so a jack can be traced straight to its patch panel position. The exact format comes from the site's labeling plan.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "What is the best way to bundle patch cords in a rack?",
    "options": [
      "Hook-and-loop (Velcro) straps, not over-tightened",
      "Duct tape wrapped around the whole bundle every metre",
      "Knotting cords together to save space in the rack",
      "Tight plastic zip ties every 10 cm"
    ],
    "correct": 0,
    "explanation": "Hook-and-loop straps hold bundles without crushing the cable; over-tightened zip ties deform the pairs and degrade performance, and they are hard to change later.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "As a rule of thumb, what is the minimum bend radius for an installed 4-pair UTP cable?",
    "options": [
      "Exactly 90 degrees at a sharp corner",
      "Any radius, because copper does not care",
      "About 1 times the cable diameter",
      "About 4 times the cable diameter"
    ],
    "correct": 3,
    "explanation": "TIA guidance is about 4× the outside diameter for installed UTP (fiber needs more, often 10–20×). Sharper bends change the twist and raise return loss and NEXT.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "A new 1U switch, a 2U patch panel with cable manager and a 1U shelf must fit in the rack. How many rack units are needed?",
    "options": [
      "3U",
      "2U",
      "4U",
      "6U"
    ],
    "correct": 2,
    "explanation": "1U + 2U + 1U = 4U. One rack unit is 44.45 mm (1.75 in); planning in U avoids surprises when installing.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Why should data cables not be run tightly bundled alongside mains power cables in the same tray without separation?",
    "options": [
      "Power cables make data cables heavier",
      "It slowly changes the color and texture of the data cable jackets",
      "It forces the switch ports into PoE mode",
      "Electrical noise can couple into the data pairs"
    ],
    "correct": 3,
    "explanation": "Mains cables generate electromagnetic interference that can couple into twisted pairs. Keep separation or use a divider/separate containment as the cabling standards recommend.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "After moving users, what should be updated before you close the ticket?",
    "options": [
      "Nothing, since the switch learns MAC addresses again",
      "Only the ticket title, to say 'done'",
      "The user's desktop wallpaper policy",
      "The patching records and port descriptions"
    ],
    "correct": 3,
    "explanation": "Out-of-date records make the next fault slower to fix. Update the cross-connect records, labels and switchport descriptions as part of the change.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "A rack has switches with front-to-back airflow, but one was mounted reversed. What is the problem?",
    "options": [
      "It changes the switch's management IP",
      "It makes the switch run at half duplex",
      "It reverses the PoE polarity on all of its access ports",
      "It blows hot exhaust into the cold aisle"
    ],
    "correct": 3,
    "explanation": "Mixing airflow directions recirculates hot air into intakes. Match the device airflow (or fan module) to the hot/cold aisle layout.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "Why leave a small, tidy service loop of cable behind a patch panel?",
    "options": [
      "To allow re-termination without a new pull",
      "To increase the cable's data rate",
      "To act as a PoE heat sink",
      "To reduce the number of labels needed on the panel and outlets"
    ],
    "correct": 0,
    "explanation": "A modest service loop gives slack to re-terminate or move the panel. It should be tidy and within bend-radius rules, not a large coil that adds length beyond 90 m.",
    "difficulty": "Easy",
    "domain": "3"
  },
  {
    "question": "Racks and cable trays in a telecom room must be bonded to the telecom grounding busbar. Which standard covers this?",
    "options": [
      "ANSI/TIA-607",
      "ANSI/TIA-568",
      "IEEE 802.1X",
      "IEEE 802.3bt"
    ],
    "correct": 0,
    "explanation": "TIA-607 covers the bonding and grounding of telecom infrastructure; TIA-568 covers the cabling itself and TIA-606 its administration.",
    "difficulty": "Medium",
    "domain": "3"
  },
  {
    "question": "An IP phone works, but the PC behind it lands in the voice VLAN subnet. What is the most likely port misconfiguration?",
    "options": [
      "PoE is disabled on the port",
      "Access and voice VLANs are swapped",
      "The switch has no default gateway",
      "The phone firmware is too new for the call manager"
    ],
    "correct": 1,
    "explanation": "The phone tags voice traffic with the voice VLAN, while the PC sends untagged frames that go into the access VLAN. If those two are swapped, the PC lands in the voice subnet.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "show interfaces status shows a port as 'err-disabled' after a user plugged in a second laptop through a mini-switch. Which feature is the likely cause besides BPDU Guard?",
    "options": [
      "Spanning tree PortFast on the uplink",
      "Port security exceeding its MAC limit",
      "The DHCP lease time configured on the Windows server",
      "The NTP stratum of the switch"
    ],
    "correct": 1,
    "explanation": "Port security with a low MAC limit (often 1 or 2) shuts the port on a violation when an extra device appears. Check show port-security interface and recover the port.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "In show interfaces status, a port with a cable plugged in shows 'notconnect'. What does that tell you?",
    "options": [
      "The port is in the wrong VLAN",
      "The port is blocked by spanning tree",
      "There is no Layer 1 link on that port",
      "The device has no IP address from the DHCP server yet"
    ],
    "correct": 2,
    "explanation": "'notconnect' means no link: check the cable, patching, the far-end device and its NIC. VLAN and IP problems show up only after the link is 'connected'.",
    "difficulty": "Easy",
    "domain": "6"
  },
  {
    "question": "A printer's IP is known but nobody knows which switch port it is on. Which commands find it on a Cisco switch?",
    "options": [
      "show version, then show clock",
      "show vlan brief, then show running-config | section interface",
      "show power inline, then show inventory",
      "show ip arp, then show mac address-table"
    ],
    "correct": 3,
    "explanation": "ARP gives the printer's MAC, and the MAC address table shows the port where it was learned. Follow the uplinks with CDP/LLDP until you reach an access port.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "A new AP on a trunk port gets its management IP, but clients on the staff SSID (VLAN 30) get no DHCP. Other SSIDs work. What do you check first?",
    "options": [
      "VLAN 30 on every trunk in the path",
      "The AP's antenna orientation",
      "The SSID beacon interval configured on the controller",
      "The AP's PoE class"
    ],
    "correct": 0,
    "explanation": "A per-VLAN failure on a trunk usually means that VLAN is missing from the allowed list or not created on a switch along the path. Check show interfaces trunk on every hop.",
    "difficulty": "Hard",
    "domain": "6"
  },
  {
    "question": "An access port counter shows rising input errors and CRCs, with both ends at 1000/full. What is the most likely cause?",
    "options": [
      "A wrong default gateway configured on the PC",
      "A physical cabling problem",
      "A DNS server that is too slow",
      "A full DHCP scope"
    ],
    "correct": 1,
    "explanation": "With duplex matching, CRC errors point to Layer 1: damaged or poor-quality cable, bad terminations or interference. Swap the patch cord and test the permanent link.",
    "difficulty": "Medium",
    "domain": "6"
  },
  {
    "question": "Before reconfiguring a switch on site, what should you do first?",
    "options": [
      "Erase the startup configuration",
      "Reboot it to clear the counters",
      "Back up the running configuration",
      "Disable all unused ports at once to reduce risk"
    ],
    "correct": 2,
    "explanation": "A backup of the running config lets you roll back if the change goes wrong. Work inside an approved change window when production is affected.",
    "difficulty": "Easy",
    "domain": "7"
  },
  {
    "question": "A link is down and you have a spare known-good patch cord. Why swap it in first?",
    "options": [
      "It upgrades the link speed",
      "It resets the switch port configuration to its defaults",
      "It quickly isolates whether the cord is the fault",
      "It clears the ARP cache on the PC"
    ],
    "correct": 2,
    "explanation": "Substituting a known-good part is a fast way to split the problem. If the link comes up, the old cord was bad; if not, move on to the jack, permanent link or port.",
    "difficulty": "Easy",
    "domain": "7"
  },
  {
    "question": "Which is a correct laser safety practice when working on live fiber?",
    "options": [
      "Look into the connector briefly to check for light",
      "Never look into a fiber; check with a power meter",
      "Cover the fiber end with a finger to block light",
      "Use a phone camera only at 1550 nm"
    ],
    "correct": 1,
    "explanation": "Infrared light is invisible and can damage the eye. Assume fibers are live, cap unused ends and check for light with a power meter, not your eye.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "Before handling a line card or SFP in a switch, what protects the hardware?",
    "options": [
      "Holding the module firmly by its gold contacts",
      "Rubber gloves only",
      "An ESD wrist strap connected to ground",
      "Working on a carpeted floor"
    ],
    "correct": 2,
    "explanation": "Electrostatic discharge can damage components without visible signs. Wear a grounded strap and handle modules by their edges or bail, not the contacts.",
    "difficulty": "Easy",
    "domain": "7"
  },
  {
    "question": "A user reports 'the network is slow'. What is a sound first step on site?",
    "options": [
      "Replace the access switch immediately",
      "Reboot the core router during business hours",
      "Reproduce the problem and define its scope",
      "Change the user's VLAN to test"
    ],
    "correct": 2,
    "explanation": "Confirm the symptom and its scope (one user, one floor, one application) before changing anything. This guides you to the right layer and avoids unneeded outages.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "Why take photos of the patch panel before re-patching a closet?",
    "options": [
      "They record how to restore the connections",
      "They improve the cable's NEXT performance",
      "Photos are needed to activate the switch licence",
      "The ticket system cannot close without an image"
    ],
    "correct": 0,
    "explanation": "A before photo is a cheap rollback record. Combined with updated patching records, it makes changes reversible and auditable.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "When working above a ceiling on a ladder to pull cable, which practice is correct?",
    "options": [
      "Keep three points of contact; limit pull tension",
      "Lean the ladder on a ceiling tile frame",
      "Pull the cable as hard as possible to save time on site",
      "Stand on the top step to reach further"
    ],
    "correct": 0,
    "explanation": "Use the ladder safely (three points of contact, never on the top steps). Exceeding the cable's pulling tension (about 110 N for 4-pair UTP) can stretch the pairs.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "A new desk run tests as a crossover: pins 1-2 at one end land on 3-6 at the other. How should a horizontal permanent link be wired?",
    "options": [
      "Any order, as long as pins 1 and 2 are correct",
      "T568A at the panel and T568B at the jack",
      "The same scheme (T568A or T568B) at both ends",
      "Crossover, so switches can connect to PCs"
    ],
    "correct": 2,
    "explanation": "Permanent links must be straight-through, using the same scheme at both ends (sites normally pick one). Auto-MDIX handles device crossover, not the cabling.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "A cable passes wire map and NEXT, but fails return loss at the far end, close to a cheap patch cord. What is the likely cause?",
    "options": [
      "Impedance mismatch from a poor cord or connector",
      "The cable is too short to be tested",
      "A VLAN mismatch between the two switches",
      "The certifier was set to the wrong Cat5e test limits"
    ],
    "correct": 0,
    "explanation": "Return loss measures reflections from impedance changes. Low-quality cords, mismatched category components or poor terminations reflect signal back; swap the cord and retest.",
    "difficulty": "Hard",
    "domain": "1"
  },
  {
    "question": "A certifier result shows 'PASS*' (asterisk) on a margin. How should you treat it?",
    "options": [
      "As a full failure that must be re-cabled",
      "As proof the link supports 40G",
      "As a marginal pass worth retesting",
      "As a sign the tester battery is low and must be charged"
    ],
    "correct": 2,
    "explanation": "An asterisk marks a result within the instrument's accuracy band. Many specifications accept it, but it deserves a re-termination or retest when margins matter.",
    "difficulty": "Medium",
    "domain": "1"
  },
  {
    "question": "Which fiber type uses an aqua jacket in modern installations?",
    "options": [
      "OS2 single-mode",
      "OM1 62.5 µm multimode",
      "OM3/OM4 multimode",
      "Plastic optical fiber (POF)"
    ],
    "correct": 2,
    "explanation": "Aqua is typical for OM3/OM4 (OM5 is lime green), yellow for single-mode OS1/OS2 and orange for older OM1/OM2. Colours help avoid mixing types.",
    "difficulty": "Easy",
    "domain": "2"
  },
  {
    "question": "The power meter shows a good reading at 1310 nm but the link uses 1550 nm optics. Why should you also test at 1550 nm?",
    "options": [
      "The meter cannot be referenced at 1310 nm",
      "1550 nm is only used for testing copper",
      "Loss from bends shows up more at 1550 nm",
      "At 1550 nm the connectors change type"
    ],
    "correct": 2,
    "explanation": "Single-mode links are usually tested at both wavelengths: bends and stress affect 1550 nm much more, while fiber attenuation is lower there.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "After cleaning, the scope still shows a pit in the core of a connector end face. What is the right action?",
    "options": [
      "Clean it ten more times with the same wipe",
      "Replace or re-polish the connector",
      "Mate it anyway, since pits do not matter",
      "Rotate the connector 180 degrees"
    ],
    "correct": 1,
    "explanation": "Pits, scratches or chips in the core cannot be cleaned away. Replace the patch cord or re-terminate; mating it can also damage the other end face.",
    "difficulty": "Medium",
    "domain": "2"
  },
  {
    "question": "An OTDR trace ends with a large reflective spike at 850 m, but the cable plan says 2.4 km. What does this suggest?",
    "options": [
      "A break or open connector at about 850 m",
      "The launch cable is too short",
      "A splice that is slightly lossy",
      "A normal end because OTDRs show half the length"
    ],
    "correct": 0,
    "explanation": "A strong reflection followed by noise marks the end of the fiber. If it appears before the documented length, there is a break or an open connection near that distance.",
    "difficulty": "Hard",
    "domain": "2"
  },
  {
    "question": "An AP powers up but runs with its radios limited and logs a power warning. show power inline shows it at 15.4 W. What is likely?",
    "options": [
      "It got less power than full mode needs",
      "The switch is in VTP transparent mode for that VLAN",
      "The AP needs a crossover cable",
      "The AP has the wrong SSID"
    ],
    "correct": 0,
    "explanation": "Many APs boot on 802.3af power but disable radios or ports until they get 802.3at/bt power. Check the port's class, LLDP negotiation and the switch's PoE capability.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "Which statement about Cisco perpetual PoE is correct?",
    "options": [
      "It doubles the switch's PoE budget",
      "PDs keep power during a switch reload",
      "It removes the need for PoE classes",
      "It works only on fiber ports"
    ],
    "correct": 1,
    "explanation": "Perpetual PoE keeps power on PoE ports while the switch control plane reloads, so phones and cameras do not reboot. Fast PoE restores power quickly after a power loss.",
    "difficulty": "Medium",
    "domain": "5"
  },
  {
    "question": "A camera works through a PoE injector. Where must the injector's 'data in' and 'PoE out' ports go?",
    "options": [
      "Data in to the camera, PoE out to the switch",
      "Both ports to the switch for redundancy",
      "Data in to the switch, PoE out to the camera",
      "Either way, since the injector is symmetric"
    ],
    "correct": 2,
    "explanation": "A midspan injector passes data from the switch and adds power towards the powered device. Reversing the ports can leave the camera unpowered.",
    "difficulty": "Easy",
    "domain": "5"
  },
  {
    "question": "A port with a 1G SFP in a 10G SFP+ slot stays down, though the optic is supported. What should you check?",
    "options": [
      "The SFP's colour code",
      "The DHCP option 43 value",
      "The spanning tree priority of the port in each VLAN",
      "Whether speed 1000 must be set"
    ],
    "correct": 3,
    "explanation": "Many SFP+ ports accept 1G SFPs, but some platforms or port groups need speed 1000 configured or support it only on certain ports. Check the platform documentation.",
    "difficulty": "Hard",
    "domain": "4"
  },
  {
    "question": "Why should dust caps be kept on unused SFP ports and optics?",
    "options": [
      "They improve PoE delivery",
      "They prevent spanning tree loops",
      "They mark the port as administratively down",
      "They keep dust off the optical surfaces"
    ],
    "correct": 3,
    "explanation": "Contamination is a leading cause of optical faults. Cap unused optics and ports, and clean the transceiver and patch cord before connecting.",
    "difficulty": "Medium",
    "domain": "4"
  },
  {
    "question": "After fixing a fault, what completes the job properly?",
    "options": [
      "Reboot the switch to be safe",
      "Leave as soon as the link LED is green",
      "Close the ticket with 'fixed' only, with no other notes",
      "Verify with the user and document it"
    ],
    "correct": 3,
    "explanation": "Confirm the service works for the user, then record the root cause, the fix and any changed labels or records, so the next technician benefits.",
    "difficulty": "Medium",
    "domain": "7"
  },
  {
    "question": "An uplink was moved and now the CDP log reports a duplex mismatch. What is the right fix?",
    "options": [
      "Disable CDP so the message stops",
      "Increase the port's spanning tree cost",
      "Change the native VLAN on both ends",
      "Make both ends match (auto/auto)"
    ],
    "correct": 3,
    "explanation": "Duplex mismatch comes from one side fixed and the other on auto (or both fixed differently). Configure both sides consistently, preferably auto/auto on modern gear.",
    "difficulty": "Medium",
    "domain": "6"
  }
];
