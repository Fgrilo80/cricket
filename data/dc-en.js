window.QUIZ_BANK = [
  {
    "question": "On Nexus switches, which command must be entered before OSPF can be configured?",
    "options": [
      "feature ospf",
      "router ospf enable-all",
      "ip routing ospf",
      "install license ospf"
    ],
    "correct": 0,
    "explanation": "NX-OS is modular: features (ospf, bgp, pim, vpc, lacp, interface-vlan…) must be enabled before their commands appear.",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "1.1.a"
  },
  {
    "question": "In a VXLAN EVPN fabric, what is MP-BGP used for?",
    "options": [
      "Electing the spanning tree root bridge",
      "Building the underlay adjacency on every physical link only",
      "Carrying MAC/IP host routes in the EVPN family",
      "Synchronising vPC peer MAC tables"
    ],
    "correct": 2,
    "explanation": "MP-BGP L2VPN EVPN advertises host MAC/IP (type-2) and prefix (type-5) routes between VTEPs, usually with spines as route reflectors.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.1.b"
  },
  {
    "question": "Which PIM mode is commonly used in a VXLAN flood-and-learn or EVPN underlay for BUM traffic?",
    "options": [
      "No multicast; BUM is always dropped",
      "PIM dense mode flooding to every interface",
      "PIM sparse mode with anycast RP on spines",
      "PIM on access ports toward servers"
    ],
    "correct": 2,
    "explanation": "Multicast replication for BUM uses PIM-SM (or bidir) in the underlay, with anycast RPs on spines; ingress replication is the alternative.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.1.c"
  },
  {
    "question": "Two Nexus switches in a vPC pair run HSRP. How is traffic to the virtual MAC handled?",
    "options": [
      "The vPC peer link carries all of it",
      "Only the HSRP active peer forwards, the other drops it",
      "Both peers forward it (active-active)",
      "HSRP is not supported with vPC"
    ],
    "correct": 2,
    "explanation": "With vPC, the standby also routes packets sent to the HSRP vMAC, so both peers forward and the peer link is not used for it.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.1.d"
  },
  {
    "question": "Which vPC element carries heartbeat messages to detect a dual-active condition?",
    "options": [
      "The vPC peer link itself",
      "The peer-keepalive link",
      "The member port channel to the host",
      "The management VRF ACL"
    ],
    "correct": 1,
    "explanation": "Peer-keepalive (often over mgmt0) checks that the peer is alive; the peer link carries control (CFS) and some data traffic.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "The vPC peer link fails while the keepalive is still up. What does the secondary peer do?",
    "options": [
      "Suspends its vPC member ports",
      "Becomes primary and keeps all vPC ports up",
      "Reboots to rejoin the domain",
      "Disables the keepalive link"
    ],
    "correct": 0,
    "explanation": "To avoid split brain, the secondary suspends its vPC member ports (and SVIs) while the primary keeps forwarding.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "What does Rapid PVST+ provide compared with classic PVST+?",
    "options": [
      "A single tree for all VLANs in the fabric",
      "Faster convergence using RSTP per VLAN",
      "Layer 3 routing between VLANs",
      "Automatic LACP negotiation"
    ],
    "correct": 1,
    "explanation": "Rapid PVST+ runs an 802.1w instance per VLAN, with proposal/agreement for sub-second convergence on point-to-point links.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "Which LACP mode on both sides results in no port channel forming?",
    "options": [
      "on / on",
      "active / active",
      "active / passive (with rate fast)",
      "passive / passive"
    ],
    "correct": 3,
    "explanation": "At least one side must be active to send LACPDUs; passive-passive never negotiates. 'on' is static and does not use LACP.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.2"
  },
  {
    "question": "What does a VTEP do in a VXLAN fabric?",
    "options": [
      "Encapsulates and decapsulates VXLAN",
      "Runs the spanning tree root election",
      "Assigns VSANs to Fibre Channel ports",
      "Stores the APIC configuration database"
    ],
    "correct": 0,
    "explanation": "VXLAN Tunnel Endpoints (leaf NVE interfaces) map VLANs to VNIs and add the outer UDP/IP headers toward remote VTEPs.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "In VXLAN EVPN, what does distributed anycast gateway provide?",
    "options": [
      "One central router for all subnets",
      "The same gateway on every leaf",
      "HSRP between two spines",
      "A gateway only on border leafs"
    ],
    "correct": 1,
    "explanation": "Each leaf is the first-hop gateway for its local hosts with the same anycast MAC (fabric forwarding), giving optimal routing and mobility.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Which EVPN route type advertises IP prefixes (e.g. external routes) into the fabric?",
    "options": [
      "Type 4",
      "Type 2",
      "Type 3",
      "Type 5"
    ],
    "correct": 3,
    "explanation": "Type-2 carries MAC/IP of hosts, type-3 inclusive multicast (BUM), type-4 Ethernet segment, type-5 IP prefix routes.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "Why is ARP suppression used in VXLAN EVPN?",
    "options": [
      "It moves ARP processing to the spines",
      "It blocks all ARP to stop spoofing attacks",
      "It replaces IP addressing with MAC-only forwarding",
      "Leafs answer ARP from EVPN data, cutting flooding"
    ],
    "correct": 3,
    "explanation": "With learned MAC/IP bindings from type-2 routes, the local leaf replies to ARP requests instead of flooding them across the fabric.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.3"
  },
  {
    "question": "How does an ACI fabric discover new leaf and spine switches?",
    "options": [
      "Through vCenter host profiles",
      "Manual CLI on every switch with a static IP",
      "DHCP from the WAN router in the campus",
      "LLDP discovery and APIC registration"
    ],
    "correct": 3,
    "explanation": "Switches are found via LLDP and DHCP from the APIC (infra VLAN/TEP pool); the admin registers them with node IDs and names.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.4.a"
  },
  {
    "question": "In ACI access policies, which object ties a VLAN pool to a domain?",
    "options": [
      "The contract subject",
      "The bridge domain subnet",
      "The domain",
      "The tenant VRF"
    ],
    "correct": 2,
    "explanation": "Domains reference VLAN pools and are linked to AAEPs; AAEPs attach to interface policy groups so VLANs are allowed on ports.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.4.b"
  },
  {
    "question": "An EPG static port binding fails with an 'invalid VLAN' fault. What is a likely cause?",
    "options": [
      "The VLAN is not in the pool",
      "The bridge domain has no subnet",
      "The contract is missing a filter",
      "The VRF is in unenforced mode"
    ],
    "correct": 0,
    "explanation": "The chain interface → policy group → AAEP → domain → VLAN pool must include the VLAN, and the EPG must be associated with that domain.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.4.b"
  },
  {
    "question": "What does ACI VMM integration with vCenter do?",
    "options": [
      "Maps EPGs to port groups on a VDS",
      "Moves virtual machines between hosts automatically",
      "Installs ESXi on the leaf switches",
      "Backs up the vCenter database to the APIC"
    ],
    "correct": 0,
    "explanation": "The APIC creates a VDS in vCenter; each EPG associated with the VMM domain appears as a port group, with dynamic VLAN assignment.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.4.c"
  },
  {
    "question": "In ACI, a leaf receives a packet for an unknown destination IP in the same VRF. Where is it sent by default?",
    "options": [
      "To the spine proxy (COOP database)",
      "Flooded to every leaf in the fabric",
      "Dropped silently at once",
      "To the APIC for a lookup"
    ],
    "correct": 0,
    "explanation": "Leafs send unknown unicast to the spine anycast proxy TEP; spines hold the COOP endpoint database and forward to the right leaf.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.5"
  },
  {
    "question": "Under the NIST cloud model, which service model gives the customer virtual machines but not the OS licence management of the provider?",
    "options": [
      "PaaS",
      "SaaS",
      "IaaS",
      "FaaS only"
    ],
    "correct": 2,
    "explanation": "IaaS provides compute, storage and network; the customer manages OS and applications. PaaS adds runtime; SaaS delivers the full app.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.6"
  },
  {
    "question": "Which NIST deployment model is used exclusively by a single organisation, on or off premises?",
    "options": [
      "Private cloud",
      "Public cloud",
      "Community cloud",
      "Hybrid cloud"
    ],
    "correct": 0,
    "explanation": "Private cloud is for one organisation; community is shared by organisations with common concerns; hybrid combines two or more.",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "1.6"
  },
  {
    "question": "Which NX-OS feature allows upgrading a Nexus switch with minimal data plane disruption?",
    "options": [
      "Erasing the startup configuration",
      "ISSU",
      "Rebooting into the loader prompt",
      "Replacing the supervisor first"
    ],
    "correct": 1,
    "explanation": "ISSU upgrades the control plane while the data plane keeps forwarding (on supported platforms/paths); check the compatibility first.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "1.7.a"
  },
  {
    "question": "What is EPLD on a Nexus switch?",
    "options": [
      "A licence for extra ports on the chassis",
      "A routing protocol for data centre links",
      "Hardware logic upgraded separately",
      "The vPC primary election process"
    ],
    "correct": 2,
    "explanation": "Electronic Programmable Logic Devices hold hardware functions; EPLD images are upgraded separately and usually need a reload.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.7.b"
  },
  {
    "question": "How are individual NX-OS bug fixes applied without a full upgrade?",
    "options": [
      "Editing the running config only",
      "Downgrading to the previous release",
      "SMU patches",
      "Reinstalling the BIOS on the switch"
    ],
    "correct": 2,
    "explanation": "SMUs are installed with 'install add / activate / commit' to fix specific defects in the running release.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.7.c"
  },
  {
    "question": "Which NX-OS feature lets you roll back to a previous configuration snapshot?",
    "options": [
      "write erase and reload the switch",
      "copy startup-config tftp",
      "Checkpoint and rollback",
      "reload in 10 with save"
    ],
    "correct": 2,
    "explanation": "'checkpoint' saves the running config; 'rollback running-config checkpoint NAME' restores it (atomic, best-effort or stop-at-first-failure).",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.8"
  },
  {
    "question": "Which feature copies traffic from source ports to a destination port for an analyser?",
    "options": [
      "CFS",
      "NetFlow",
      "LLDP",
      "SPAN"
    ],
    "correct": 3,
    "explanation": "SPAN mirrors packets (ERSPAN sends them over GRE to a remote analyser); NetFlow exports flow records, not packets.",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "1.9"
  },
  {
    "question": "What is an advantage of model-driven streaming telemetry over SNMP polling?",
    "options": [
      "It needs no external collector at all",
      "It uses fewer YANG models per device",
      "It only works over serial links",
      "Devices push data at short intervals"
    ],
    "correct": 3,
    "explanation": "Telemetry streams structured data (gRPC/gNMI, YANG paths) periodically or on change, at scale and with low latency.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.10"
  },
  {
    "question": "What does Nexus Dashboard provide for a data centre?",
    "options": [
      "A Fibre Channel zoning tool only",
      "A blade server chassis manager only",
      "A platform for fabric services",
      "A replacement for NX-OS"
    ],
    "correct": 2,
    "explanation": "Nexus Dashboard hosts services such as Fabric Controller, Insights and Orchestrator to manage and analyse NX-OS and ACI fabrics.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "1.11"
  },
  {
    "question": "How can Cisco UCS C-Series rack servers be managed?",
    "options": [
      "CIMC, Intersight or UCSM",
      "Only from the APIC GUI in the fabric",
      "Only from a serial console cable",
      "Through vPC peer links"
    ],
    "correct": 0,
    "explanation": "CIMC gives standalone management; servers can also be connected to Fabric Interconnects (UCSM or Intersight Managed Mode) or Intersight standalone.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.1"
  },
  {
    "question": "Why use MAC, WWN and UUID pools in UCS service profiles?",
    "options": [
      "Identities move with the profile",
      "They speed up the CPU and memory",
      "They replace VLANs in the fabric",
      "They license the server for UCS Manager"
    ],
    "correct": 0,
    "explanation": "Stateless computing: identities come from pools in the profile, so a profile can move to another blade without changing upstream configuration.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.2.a"
  },
  {
    "question": "What is the difference between an initial and an updating service profile template in UCS Manager?",
    "options": [
      "Initial templates update profiles on every change",
      "Updating templates push changes to bound profiles",
      "They are identical in every release",
      "Updating templates cannot use pools"
    ],
    "correct": 1,
    "explanation": "Profiles from an updating template stay bound and inherit changes (which may reboot servers); initial templates only seed profiles once.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "2.2.b"
  },
  {
    "question": "In UCS, what is a vHBA?",
    "options": [
      "A RAID controller setting",
      "A virtual Ethernet NIC with a MAC",
      "A hypervisor storage driver",
      "A virtual FC adapter with a WWPN"
    ],
    "correct": 3,
    "explanation": "vHBAs are defined in the service profile, get WWNN/WWPN from pools and connect to VSANs through the Fabric Interconnects.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.2.d"
  },
  {
    "question": "A UCS blade must boot from a SAN LUN. What is required in the service profile?",
    "options": [
      "A boot policy with SAN targets",
      "A local disk policy set to any configuration",
      "A BIOS policy disabling virtualization",
      "An empty vNIC list"
    ],
    "correct": 0,
    "explanation": "The boot policy lists the vHBA and the target WWPN/LUN; zoning and LUN masking on the storage must allow the initiator.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "2.2.e"
  },
  {
    "question": "What is Intersight Managed Mode (IMM) for UCS X-Series?",
    "options": [
      "Managing servers only from local CIMC",
      "Intersight managing FIs and servers",
      "An ACI mode for leaf switches",
      "A storage array firmware mode"
    ],
    "correct": 1,
    "explanation": "In IMM, Intersight manages FIs, chassis and servers using pools, policies and server profiles; UCS X-Series requires it (no UCSM).",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.3"
  },
  {
    "question": "What does a host firmware package in UCS ensure?",
    "options": [
      "Automatic VLAN creation on uplinks",
      "Faster DIMM speeds",
      "Consistent firmware versions",
      "Licence activation for each blade"
    ],
    "correct": 2,
    "explanation": "Firmware packages (or Intersight firmware policies) define BIOS, adapter and controller versions applied when the profile is associated.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.4"
  },
  {
    "question": "Which UCS Manager backup type can restore the whole system on a replaced Fabric Interconnect pair?",
    "options": [
      "Tech-support file",
      "Logical configuration export only",
      "System event log export",
      "Full state backup"
    ],
    "correct": 3,
    "explanation": "Full state is a binary snapshot for disaster recovery; all-configuration, logical and system exports are XML for importing settings.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.5"
  },
  {
    "question": "How can you capture traffic from a UCS server vNIC for analysis?",
    "options": [
      "Export a full state backup",
      "Enable debug logging in the BIOS",
      "Use the KVM console of the server",
      "A traffic monitoring session on the FI"
    ],
    "correct": 3,
    "explanation": "UCS Manager traffic monitoring sessions mirror vNIC/vHBA or uplink traffic to a destination port on the FI.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "2.6"
  },
  {
    "question": "What is a VSAN on Cisco MDS and Nexus switches?",
    "options": [
      "A vPC domain for storage ports",
      "A VLAN that carries iSCSI traffic only",
      "A storage array volume on a disk",
      "A virtual SAN fabric"
    ],
    "correct": 3,
    "explanation": "VSANs isolate Fibre Channel fabrics on shared hardware; each runs its own fabric services (FSPF, zoning, name server).",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "3.1.i"
  },
  {
    "question": "During Fibre Channel fabric initialisation, what does the principal switch do?",
    "options": [
      "Holds every zone member's data",
      "Assigns domain IDs to switches",
      "Encrypts all FC frames",
      "Elects the vPC primary"
    ],
    "correct": 1,
    "explanation": "Principal switch selection happens per VSAN; it allocates domain IDs, which form the first byte of each FCID.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.a"
  },
  {
    "question": "What are the three parts of an FCID?",
    "options": [
      "VSAN, VLAN and port",
      "Domain, area and port",
      "WWNN, WWPN and LUN",
      "Site, rack and slot number"
    ],
    "correct": 1,
    "explanation": "The 24-bit FCID is domain (switch), area and port; it is assigned at fabric login (FLOGI).",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.c"
  },
  {
    "question": "What is the purpose of zoning in a Fibre Channel SAN?",
    "options": [
      "Assign FCIDs to the hosts",
      "Limit which initiators see which targets",
      "Bundle ISLs into a port channel",
      "Set the MTU of the VSAN uplinks"
    ],
    "correct": 1,
    "explanation": "Zones (usually single-initiator, single-target, or smart zoning) limit communication; zonesets are activated per VSAN.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.e"
  },
  {
    "question": "What does enhanced zoning add over basic zoning?",
    "options": [
      "A fabric-wide change lock",
      "Zones that span several VSANs",
      "Encryption of zone members",
      "Automatic LUN masking on arrays"
    ],
    "correct": 0,
    "explanation": "Enhanced zoning uses a session lock so only one admin edits at a time, then commits atomically; basic zoning can overwrite changes.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "3.1.e"
  },
  {
    "question": "Which command shows the devices logged in to the Fibre Channel name server?",
    "options": [
      "show zone active",
      "show flogi interface status",
      "show fcns database",
      "show vsan membership"
    ],
    "correct": 2,
    "explanation": "The FCNS database lists FCIDs, WWPNs and FC4 types for the VSAN; 'show flogi database' lists local logins.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.f"
  },
  {
    "question": "Why use device aliases in an MDS fabric?",
    "options": [
      "Replacing zones with VSANs",
      "Faster FC frame forwarding",
      "Extra buffer credits on each ISL",
      "Names for WWPNs, shared by CFS"
    ],
    "correct": 3,
    "explanation": "Device aliases map names to pWWNs and are distributed fabric-wide via CFS, so zones are readable and easy to update when HBAs change.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.g"
  },
  {
    "question": "What does NPV mode on a UCS Fabric Interconnect or Nexus switch do?",
    "options": [
      "Blocks all FLOGIs from the hosts",
      "Turns the switch into a full FC switch",
      "Proxies host logins to the core",
      "Runs FSPF to the core switches"
    ],
    "correct": 2,
    "explanation": "In NPV the edge switch proxies FLOGIs as FDISCs to an NPIV-enabled core, avoiding domain ID use and interop issues.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "3.1.h"
  },
  {
    "question": "What must be enabled on the core switch for NPV edge switches to connect?",
    "options": [
      "feature lacp",
      "feature npv",
      "feature fport-channel-trunk only",
      "feature npiv"
    ],
    "correct": 3,
    "explanation": "NPIV lets one F port accept multiple N port logins (FDISC); the core needs NPIV while the edge runs NPV.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.h"
  },
  {
    "question": "Why bundle ISLs between two MDS switches into a SAN port channel?",
    "options": [
      "More bandwidth and resilience",
      "To merge two VSANs into one",
      "To disable zoning between the switches",
      "To assign new domain IDs to both"
    ],
    "correct": 0,
    "explanation": "A SAN port channel appears as one logical ISL: traffic is balanced and a member failure does not trigger FSPF reconvergence.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.b"
  },
  {
    "question": "What does CFS do on MDS and Nexus switches?",
    "options": [
      "Compresses FC frames on long links",
      "Shares feature config across switches",
      "Creates VSANs automatically on boot",
      "Monitors fan speed in the chassis"
    ],
    "correct": 1,
    "explanation": "Cisco Fabric Services distributes and locks configuration (device alias, NTP, port security, etc.) across the fabric.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.1.d"
  },
  {
    "question": "Which protocol carries SCSI commands over a standard TCP/IP network?",
    "options": [
      "iSCSI",
      "FCoE",
      "NFS",
      "FSPF"
    ],
    "correct": 0,
    "explanation": "iSCSI uses TCP 3260; FCoE carries FC frames directly over lossless Ethernet; NFS is file-level storage.",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "3.2"
  },
  {
    "question": "What is the key difference between NFS and iSCSI storage?",
    "options": [
      "NFS needs Fibre Channel switches",
      "NFS is file; iSCSI is block",
      "iSCSI only runs on InfiniBand",
      "They are the same protocol"
    ],
    "correct": 1,
    "explanation": "NFS is a network file system (NAS); iSCSI gives the host a block device that it formats itself.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.2"
  },
  {
    "question": "What should be checked before a nondisruptive MDS software upgrade?",
    "options": [
      "That every zone is deactivated",
      "The 'show install all impact' output",
      "That all ISLs are shut down",
      "That the FCNS database is cleared"
    ],
    "correct": 1,
    "explanation": "'show install all impact' reports whether modules upgrade hitlessly; dual supervisors and compatible versions allow nondisruptive upgrades.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "3.3"
  },
  {
    "question": "Which MDS feature analyses SCSI/NVMe I/O performance per flow?",
    "options": [
      "SAN Analytics",
      "Port security",
      "Device alias",
      "Zone merge"
    ],
    "correct": 0,
    "explanation": "SAN Analytics (with SAN Insights in Nexus Dashboard) inspects frames on supported modules to report latency, IOPS and errors per initiator-target-LUN.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "3.4"
  },
  {
    "question": "What does the Embedded Event Manager (EEM) do on NX-OS?",
    "options": [
      "Balances traffic over ISLs",
      "Upgrades software every week",
      "Runs actions on defined events",
      "Syncs the vPC config to the peer"
    ],
    "correct": 2,
    "explanation": "EEM applets match events (syslog, counters, CLI) and run actions such as CLI commands or scripts.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.1.a"
  },
  {
    "question": "Which NX-OS feature runs jobs (such as config backups) at set times?",
    "options": [
      "EEM tracking",
      "Scheduler",
      "Checkpoint",
      "POAP"
    ],
    "correct": 1,
    "explanation": "feature scheduler defines jobs and schedules (e.g. daily copy running-config to a server).",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.1.b"
  },
  {
    "question": "What is the difference between Bash shell and Guest Shell on NX-OS?",
    "options": [
      "They are the same environment with other names",
      "Guest Shell is an isolated container",
      "Guest Shell needs an external server",
      "Bash only runs Python 2 scripts"
    ],
    "correct": 1,
    "explanation": "Bash gives native Linux access to the switch; Guest Shell is a CentOS-based LXC container for running apps and Python safely.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.1.c"
  },
  {
    "question": "What does NX-API CLI let a script do?",
    "options": [
      "Read SNMP traps from the switch",
      "Replace NX-OS with Linux",
      "Configure only the BIOS settings",
      "Send CLI over HTTPS, get JSON"
    ],
    "correct": 3,
    "explanation": "NX-API (feature nxapi) accepts JSON-RPC/ins_api requests with show or config commands and returns structured output.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.1.d"
  },
  {
    "question": "On-box Python on NX-OS uses which module to run CLI commands?",
    "options": [
      "requests",
      "netmiko",
      "paramiko",
      "cli"
    ],
    "correct": 3,
    "explanation": "The on-box cli module provides cli(), clid() (JSON) and clip(); off-box tools like netmiko use SSH.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.1.e"
  },
  {
    "question": "Why is Ansible popular for data centre network automation?",
    "options": [
      "It needs an agent on each switch",
      "It is agentless, using YAML playbooks",
      "It only works with UCS servers",
      "It compiles playbooks to firmware"
    ],
    "correct": 1,
    "explanation": "Ansible connects to devices with network_cli or httpapi (e.g. cisco.nxos, cisco.aci collections), using idempotent modules.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.2.a"
  },
  {
    "question": "What does POAP do on a new Nexus switch?",
    "options": [
      "Creates a vPC peer link to its neighbour",
      "Joins an ACI fabric automatically",
      "Uses DHCP to fetch image and config",
      "Runs Terraform from the bootflash"
    ],
    "correct": 2,
    "explanation": "Power-On Auto Provisioning uses DHCP options to find a script server, then the script fetches image and configuration.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "4.2.c"
  },
  {
    "question": "What does Terraform's 'plan' step do with the ACI provider?",
    "options": [
      "Backs up the APIC config first",
      "Applies all changes at once",
      "Deletes and recreates the tenant",
      "Shows the planned changes"
    ],
    "correct": 3,
    "explanation": "terraform plan compares desired state with state/real objects; apply then creates, updates or destroys resources.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.2.f"
  },
  {
    "question": "Which interfaces can automate Cisco Intersight?",
    "options": [
      "Only SNMP get requests",
      "Only the web GUI",
      "REST API, SDKs and Terraform",
      "Only the serial console of each server"
    ],
    "correct": 2,
    "explanation": "Intersight exposes an OpenAPI REST interface with API keys, SDKs, a Terraform provider and Ansible modules.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "4.2.g"
  },
  {
    "question": "Why do AI/ML training clusters need lossless Ethernet features like PFC and ECN?",
    "options": [
      "RoCEv2 traffic suffers from drops",
      "GPUs use only Fibre Channel",
      "They need spanning tree on all links",
      "To reduce the MAC table size on leafs"
    ],
    "correct": 0,
    "explanation": "RDMA over Converged Ethernet expects no loss; PFC pauses per priority and ECN/DCQCN signals congestion before drops.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "4.3"
  },
  {
    "question": "Which protocol is preferred for device administration AAA because it can authorise each command?",
    "options": [
      "TACACS+",
      "RADIUS",
      "LDAP",
      "SNMPv2c"
    ],
    "correct": 0,
    "explanation": "TACACS+ separates authentication, authorisation and accounting and supports per-command authorisation.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "5.1.a"
  },
  {
    "question": "In ACI, what must exist for two EPGs to communicate?",
    "options": [
      "A contract between them",
      "A shared VLAN ID on both",
      "The same IP subnet",
      "A static route on the leaf"
    ],
    "correct": 0,
    "explanation": "ACI is whitelist by default: one EPG provides and another consumes a contract whose subjects and filters allow traffic.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "5.1.b"
  },
  {
    "question": "What does microsegmentation (uSeg EPG) in ACI allow?",
    "options": [
      "Encrypting the whole fabric",
      "Splitting a leaf into two switches",
      "Grouping endpoints by attributes",
      "Creating VSANs for the VMs"
    ],
    "correct": 2,
    "explanation": "uSeg EPGs classify endpoints by attributes (IP, MAC, VM name, OS…) so policy applies even within the same BD/port group.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "5.1.b"
  },
  {
    "question": "Which first-hop security feature blocks rogue DHCP servers on access ports?",
    "options": [
      "Storm control",
      "DHCP snooping",
      "BPDU guard",
      "UDLD"
    ],
    "correct": 1,
    "explanation": "DHCP snooping trusts only uplink ports for server messages and builds a binding table used by DAI and IP Source Guard.",
    "difficulty": "Easy",
    "exam": "dccor",
    "domain": "5.1.c"
  },
  {
    "question": "Why configure a keychain on NX-OS routing protocols?",
    "options": [
      "To speed up convergence",
      "To encrypt user data",
      "To store local passwords",
      "To rotate auth keys"
    ],
    "correct": 3,
    "explanation": "Keychains hold multiple keys with send/accept lifetimes, allowing hitless rollover for OSPF, EIGRP, BGP or HSRP authentication.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "5.1.d"
  },
  {
    "question": "What does MACsec provide on a link between two Nexus switches?",
    "options": [
      "End-to-end IPsec tunnels",
      "Layer 2 link encryption",
      "DHCP protection on the link",
      "Faster LACP negotiation"
    ],
    "correct": 1,
    "explanation": "MACsec (802.1AE) encrypts frames on each link at line rate, with keys from MKA (pre-shared key or 802.1X).",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "5.1.e"
  },
  {
    "question": "What does port security on an MDS switch do?",
    "options": [
      "Creates zones automatically",
      "Encrypts the FC frames",
      "Limits ISL bandwidth",
      "Binds WWNs to ports"
    ],
    "correct": 3,
    "explanation": "Port security restricts which devices (pWWN/nWWN/sWWN) may log in on which interfaces; violating logins are rejected.",
    "difficulty": "Medium",
    "exam": "dccor",
    "domain": "5.3.a"
  },
  {
    "question": "How does fabric binding differ from port security on MDS?",
    "options": [
      "It encrypts traffic on ISLs",
      "It controls hosts on F ports",
      "It controls which switches join",
      "It replaces zoning in the VSAN"
    ],
    "correct": 2,
    "explanation": "Fabric binding authorises switch WWNs (and domain IDs) on E/TE ports, preventing unauthorised switches from merging into the fabric.",
    "difficulty": "Hard",
    "exam": "dccor",
    "domain": "5.3.c"
  }
];
