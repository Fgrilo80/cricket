window.QUIZ_BANK = [
  {
    "question": "A lecture hall seats 400 students, each with a laptop and a phone. Which requirement drives the AP count most?",
    "options": [
      "The number of wired switch ports in the comms room",
      "The total floor area in square metres only",
      "The colour of the ceiling tiles in the hall",
      "Client density and airtime per user"
    ],
    "correct": 3,
    "explanation": "In high-density spaces, capacity (clients per radio and airtime), not coverage, sets the number of APs.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.1.a"
  },
  {
    "question": "A hospital will use Wi-Fi voice badges. Which design target is typical for voice coverage?",
    "options": [
      "Coverage only at the nurses' stations",
      "-85 dBm, since voice traffic needs very little signal to work",
      "Any signal level, as long as the SSID is visible",
      "-67 dBm or better, with a second AP audible"
    ],
    "correct": 3,
    "explanation": "Voice designs usually aim for about -67 dBm primary signal, around 25 dB SNR and overlap so a second AP is heard for roaming.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.1.b"
  },
  {
    "question": "A warehouse has 12 m high racks and aisles. Which AP choice often works best?",
    "options": [
      "APs with external directional antennas aimed down the aisles",
      "Only internal omni APs mounted flat on the ceiling, 12 m above the floor",
      "One high-power AP in the middle of the building",
      "Outdoor mesh APs placed on the roof"
    ],
    "correct": 0,
    "explanation": "Directional (patch) antennas can shape coverage along aisles between racks; omni APs high up spread energy where it is not needed.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.1.c"
  },
  {
    "question": "A design must support location of assets to within a few metres. How does this change the AP layout?",
    "options": [
      "Only the 2.4 GHz band is enabled to reach further",
      "Fewer APs are needed than for a comparable data-only design",
      "APs are all placed in a single line down the middle",
      "APs also go on the perimeter, not just inside"
    ],
    "correct": 3,
    "explanation": "Location needs several APs hearing each client from different angles (perimeter and staggered placement), so density is usually higher.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.1.d"
  },
  {
    "question": "Corporate laptops need 802.1X while guests need simple access. What design impact does this have?",
    "options": [
      "One open SSID shared by staff and guests",
      "Separate WLANs, each with its own security",
      "WEP for guests to keep their access simple",
      "No impact, since security does not affect RF design"
    ],
    "correct": 1,
    "explanation": "Each security model usually means its own SSID (WPA3/WPA2-Enterprise vs guest portal or OWE). Keep the SSID count low to save airtime.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.1.e"
  },
  {
    "question": "Which building material usually attenuates Wi-Fi the most?",
    "options": [
      "A plasterboard office partition with an insulation core",
      "A concrete wall with metal reinforcement",
      "An ordinary interior wooden door",
      "A clear glass window without coating"
    ],
    "correct": 1,
    "explanation": "Reinforced concrete and metal cause high loss (often 15–25 dB or more). Drywall and wood cause a few dB.",
    "difficulty": "Easy",
    "exam": "wlsd",
    "domain": "1.2"
  },
  {
    "question": "A new office has low-E coated windows. What should the designer expect?",
    "options": [
      "Interference on 2.4 GHz only from the coating",
      "No change, as glass is transparent to all RF",
      "Better signal outside because the coating reflects it outward",
      "High attenuation through the glass"
    ],
    "correct": 3,
    "explanation": "Metallic low-E coatings strongly attenuate RF, which helps containment but blocks coverage from outside.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.2"
  },
  {
    "question": "What does a Layer 1 site survey look for?",
    "options": [
      "The firmware version of each existing AP",
      "SSID names, their security settings and the beacon intervals",
      "The DHCP lease time on each VLAN",
      "Non-Wi-Fi RF sources such as microwaves"
    ],
    "correct": 3,
    "explanation": "A Layer 1 (spectrum) survey uses a spectrum analyser to find RF energy and interferers. A Layer 2 survey looks at 802.11 networks.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.3"
  },
  {
    "question": "A spectrum analyser shows a continuous 100% duty cycle signal across channel 6 in one area. What is the impact?",
    "options": [
      "It boosts throughput by adding energy to the channel",
      "Only clients using WPA3 with protected management frames are affected",
      "Wi-Fi on channel 6 there is unusable while it lasts",
      "None, because Wi-Fi ignores non-802.11 signals"
    ],
    "correct": 2,
    "explanation": "A constant high duty cycle source (e.g. a video camera transmitter or jammer) keeps CCA busy, so 802.11 devices cannot transmit.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "1.3"
  },
  {
    "question": "What is an 'AP-on-a-stick' (APoS) survey?",
    "options": [
      "A pre-deployment survey with a temporary real AP",
      "A survey done only in software from the floor plan and wall types",
      "Walking the site after deployment with a phone",
      "A survey of AP stock levels in the warehouse"
    ],
    "correct": 0,
    "explanation": "The surveyor mounts the planned AP model at planned spots and height, measures its real coverage and refines placement before install.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.4"
  },
  {
    "question": "Why use the same AP model and antenna in a pre-deployment survey as in the final design?",
    "options": [
      "Coverage depends on the radio and antenna pattern",
      "Survey tools only work with Cisco AP models and antennas",
      "It makes the survey software free of charge",
      "Different models cannot be powered by PoE"
    ],
    "correct": 0,
    "explanation": "Gain, pattern and receiver sensitivity differ between models, so measurements only apply to the hardware used.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.4"
  },
  {
    "question": "What is the main purpose of a post-deployment survey?",
    "options": [
      "Count how many people use the building each day",
      "Choose the AP mounting points before any of the cabling is run",
      "Verify that the live network meets the design requirements",
      "Configure the controller's management interface"
    ],
    "correct": 2,
    "explanation": "It validates coverage, overlap, SNR, channel plan and roaming against requirements and finds gaps to fix.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.5"
  },
  {
    "question": "A post-deployment survey with a laptop shows -65 dBm everywhere, but phones roam badly. What is a likely gap?",
    "options": [
      "Post-deployment surveys cannot measure signal",
      "The laptop used WPA3 while phones use WPA2",
      "The survey device hears better than the phones do",
      "The building has too few power outlets near the AP locations"
    ],
    "correct": 2,
    "explanation": "Client devices differ; phones often receive several dB weaker than a survey adapter. Validate with the real client or apply an offset.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "1.5"
  },
  {
    "question": "What is a predictive survey?",
    "options": [
      "A software model of coverage from floor plans",
      "A walk-through measuring a temporary AP on a tripod",
      "A spectrum scan for interference sources",
      "A survey done by the users' phones after go-live"
    ],
    "correct": 0,
    "explanation": "Tools such as Ekahau or Hamina simulate APs on a calibrated floor plan with wall attenuation. Accuracy depends on the input data.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.6"
  },
  {
    "question": "A predictive design looks perfect, but the floor plan was never scaled. What happens?",
    "options": [
      "The tool adjusts the scale automatically from Wi-Fi",
      "Only the channel numbers are affected",
      "All distances and coverage results are wrong",
      "Nothing, because walls set the scale"
    ],
    "correct": 2,
    "explanation": "Path loss is computed from distance, so an unscaled or wrongly scaled map makes every prediction unreliable.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "1.6"
  },
  {
    "question": "Which metric in Ekahau or Hamina best shows if clients will hear two APs for roaming?",
    "options": [
      "Channel width",
      "Primary SSID count",
      "Secondary signal strength",
      "Data rate of the strongest AP"
    ],
    "correct": 2,
    "explanation": "A secondary (second strongest) signal heatmap shows overlap; voice designs often require it above about -67 dBm.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.7"
  },
  {
    "question": "What does Chanalyzer (or a spectrum analyser view) add that a Wi-Fi scanner cannot?",
    "options": [
      "It lists DHCP leases per SSID",
      "It decrypts WPA2 traffic between clients on the same SSID",
      "It measures cable length to each AP",
      "It shows raw RF energy and duty cycle"
    ],
    "correct": 3,
    "explanation": "Spectrum tools display waterfall, density and duty cycle so non-Wi-Fi interferers are visible.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "1.7"
  },
  {
    "question": "A new tri-radio Wi-Fi 6E AP needs full features. What should the switch port provide?",
    "options": [
      "Enough PoE class and multigigabit speed",
      "A 10 Mb/s port with no PoE",
      "Only a fibre port without any power delivery",
      "A console cable to the controller"
    ],
    "correct": 0,
    "explanation": "Check each AP's power class; under-powered APs may disable radios or USB. Multigig avoids an uplink bottleneck.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.1"
  },
  {
    "question": "What is the maximum standard copper cable run from switch to AP?",
    "options": [
      "500 metres",
      "100 metres",
      "30 metres",
      "1,000 metres"
    ],
    "correct": 1,
    "explanation": "Twisted-pair Ethernet is specified to 100 m (90 m permanent link plus patch cords). Longer runs need fibre or extenders.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.1"
  },
  {
    "question": "A company wants a Catalyst 9800 controller with Catalyst Center assurance for its APs. Which licensing must be planned?",
    "options": [
      "No licences, since 9800 controllers are free",
      "Per-AP subscription tiers",
      "One licence for the controller hardware only",
      "A separate licence for each SSID"
    ],
    "correct": 1,
    "explanation": "Catalyst 9800 uses Smart Licensing with per-AP subscription tiers (Essentials/Advantage); advanced features need the higher tier.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.2"
  },
  {
    "question": "A small branch has 10 APs and no local server. Which logical architecture can avoid a separate controller?",
    "options": [
      "Two dedicated 9800-80 appliances",
      "Embedded Wireless Controller on a Catalyst AP",
      "An anchor controller in the DMZ",
      "A Mobility Express licence installed on the access switch"
    ],
    "correct": 1,
    "explanation": "EWC runs the controller function on a Catalyst 9100 AP for small sites; larger sites use appliance, cloud or switch-embedded controllers.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.2"
  },
  {
    "question": "What does RRM's Transmit Power Control (TPC) do?",
    "options": [
      "Assigns non-overlapping channels to the APs in each RF group",
      "Adjusts AP power to the planned overlap",
      "Detects rogue APs and contains them",
      "Encrypts management frames between APs"
    ],
    "correct": 1,
    "explanation": "TPC lowers or raises power based on how APs hear each other; DCA handles channels and CHD detects coverage holes.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.3.a"
  },
  {
    "question": "What does AI-Enhanced RRM in Catalyst Center add to classic RRM?",
    "options": [
      "A new radio band reserved for Cisco devices",
      "Cloud analytics of RF history to tune RRM",
      "Manual channel planning with no automation",
      "Removal of DCA and TPC from the controller"
    ],
    "correct": 1,
    "explanation": "AI-Enhanced RRM uses historical data and AI to recommend or apply better RRM parameters (DCA, TPC, DBS) while the WLC still runs RRM.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "2.3.a"
  },
  {
    "question": "Why apply a separate RF profile to the APs in a large auditorium?",
    "options": [
      "To bypass 802.1X only in the auditorium",
      "To give the auditorium its own SSID name",
      "To set its own data rates and power limits",
      "To use a different controller software release"
    ],
    "correct": 2,
    "explanation": "RF profiles group APs with tailored settings (data rates, TPC min/max, DCA channels, RxSOP) for high-density or special areas.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.3.b"
  },
  {
    "question": "What does Receiver Start of Packet Detection Threshold (RxSOP) do?",
    "options": [
      "Changes the channel when noise rises",
      "Raises the AP transmit power for far clients",
      "Ignores frames weaker than a set level",
      "Blocks clients without WPA3 support"
    ],
    "correct": 2,
    "explanation": "Raising RxSOP (e.g. to -80 dBm) shrinks the effective cell in high density by not decoding weak frames. Set it too high and coverage suffers.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "2.3.c"
  },
  {
    "question": "For a data-only office design, which common target is used?",
    "options": [
      "About -70 dBm with around 20 dB SNR",
      "-90 dBm with 5 dB SNR",
      "-40 dBm everywhere in the building",
      "No signal target, only a channel plan"
    ],
    "correct": 0,
    "explanation": "Data networks often target around -70 dBm and 20 dB SNR; voice and location need tighter targets.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.4.a"
  },
  {
    "question": "Which design choice helps video calls on the WLAN most?",
    "options": [
      "Prefer 5/6 GHz with WMM and end-to-end QoS",
      "Use only 2.4 GHz with 40 MHz channels",
      "Disable WMM to reduce overhead",
      "Allow 1 and 2 Mb/s data rates for range"
    ],
    "correct": 0,
    "explanation": "Video needs capacity and low delay: clean 5/6 GHz channels, WMM queues and consistent DSCP/UP mapping. Low legacy rates waste airtime.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.4.b"
  },
  {
    "question": "Which Cisco platform provides indoor location services and analytics from the APs?",
    "options": [
      "Cisco Webex Control Hub",
      "Cisco Spaces",
      "Cisco Unity Connection",
      "Cisco Secure Firewall"
    ],
    "correct": 1,
    "explanation": "Cisco Spaces (successor to CMX for most uses) takes location data from controllers/APs for wayfinding, analytics and asset tracking.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.4.c"
  },
  {
    "question": "In a stadium design, why disable the lowest data rates?",
    "options": [
      "Slow frames use more airtime and enlarge cells",
      "Low rates are not supported by any client",
      "It removes the need for more APs",
      "It turns on 802.11r roaming automatically"
    ],
    "correct": 0,
    "explanation": "Beacons and frames at 1–6 Mb/s take far longer on air; raising the minimum mandatory rate shrinks cells and saves capacity.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "2.5"
  },
  {
    "question": "Which channel width is usually best in a very high-density 5 GHz deployment?",
    "options": [
      "160 MHz, for the highest per-client speed",
      "20 MHz, for more non-overlapping channels",
      "80 MHz on every AP to fill the band",
      "40 MHz in 2.4 GHz for extra capacity"
    ],
    "correct": 1,
    "explanation": "Narrow channels give more channels for reuse and reduce co-channel interference, which matters more than peak speed in dense areas.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.5"
  },
  {
    "question": "In a Cisco mesh, what is the difference between a RAP and a MAP?",
    "options": [
      "They are the same role with different antennas",
      "A RAP is indoor only; a MAP is outdoor only",
      "A MAP is the controller; a RAP is the switch",
      "A RAP is wired; a MAP connects over the air"
    ],
    "correct": 3,
    "explanation": "The Root AP has the wired uplink; Mesh APs join through the backhaul radio, hop by hop, to a RAP.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.6.a"
  },
  {
    "question": "Why limit the number of mesh hops in a design?",
    "options": [
      "Controllers reject MAPs beyond the first hop",
      "More hops force the whole mesh to use the 2.4 GHz band only",
      "Each wireless hop reduces throughput and adds latency",
      "Hops increase the PoE budget needed by the RAP"
    ],
    "correct": 2,
    "explanation": "Backhaul is shared per hop, so throughput drops roughly with each hop; Cisco recommends few hops (often 3–4).",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "2.6.a"
  },
  {
    "question": "A camera is cabled to the Ethernet port of an outdoor MAP. What feature must be enabled for it to work?",
    "options": [
      "FlexConnect local switching",
      "Ethernet bridging",
      "Band select on the WLAN",
      "Aironet IE in the SSID settings"
    ],
    "correct": 1,
    "explanation": "Ethernet bridging lets wired devices behind a MAP (or between RAP and MAP) bridge across the mesh, with VLAN tagging as needed.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.6.b"
  },
  {
    "question": "A forklift has several wired devices that need Wi-Fi access while moving. Which solution fits?",
    "options": [
      "A workgroup bridge (WGB) on the forklift",
      "A RAP mounted on the forklift",
      "An EWC controller installed on the forklift itself",
      "A second SSID for each device"
    ],
    "correct": 0,
    "explanation": "A WGB associates as a client and bridges its wired devices; roaming settings on the WGB tune how it moves between APs.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "2.6.c"
  },
  {
    "question": "What defines a mobility group on Catalyst 9800 controllers?",
    "options": [
      "WLCs that share a group name and client context",
      "All of the APs that use the same RF profile on one floor of the building",
      "Every SSID that uses the same VLAN on the controller",
      "APs that share one PoE switch in the wiring closet"
    ],
    "correct": 0,
    "explanation": "Members of a mobility group share the group name and peer with each other, so clients roam with context (keys, policy) between them.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.1"
  },
  {
    "question": "In a guest design, which mobility role does the DMZ controller play?",
    "options": [
      "Primary AP",
      "Foreign",
      "Mesh root",
      "Anchor"
    ],
    "correct": 3,
    "explanation": "Guest WLAN traffic is tunnelled from the foreign (or export) controller where the client associates to the anchor in the DMZ.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.1"
  },
  {
    "question": "What must match for two 9800 WLCs to form a mobility tunnel?",
    "options": [
      "The SSIDs' passphrases only",
      "The number and models of the APs each controller has joined",
      "Peer IPs, MACs and group, plus reachability",
      "The controllers' host names in DNS"
    ],
    "correct": 2,
    "explanation": "Each WLC is configured with the other's management IP, MAC and group; CAPWAP control (UDP 16666) and data (16667) must pass between them.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "3.1"
  },
  {
    "question": "Which standard lets a client do fast transition by pre-building keys with the target AP?",
    "options": [
      "802.11e",
      "802.11h",
      "802.11r",
      "802.11d"
    ],
    "correct": 2,
    "explanation": "802.11r (FT) shortens the 802.1X/PSK key exchange at roam time. 802.11k gives neighbour lists and 802.11v helps steer clients.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "What does 802.11k add to roaming?",
    "options": [
      "The AP gives the client a neighbour report",
      "It encrypts all broadcast frames with a separate group key",
      "It lets the AP change the client's IP address",
      "It reserves a channel only for voice clients"
    ],
    "correct": 0,
    "explanation": "Neighbour reports let the client scan only a few channels, which speeds up its roaming decision.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "Legacy clients fail to join after FT is enabled on an SSID. What is a common fix?",
    "options": [
      "Disable WMM on the WLAN entirely",
      "Use FT adaptive or a separate SSID",
      "Set the minimum mandatory data rate to 1 Mb/s",
      "Move every client to 2.4 GHz only"
    ],
    "correct": 1,
    "explanation": "Some old drivers reject the FT AKM in beacons. Adaptive FT (for supported clients) or mixed mode/separate SSID keeps them working.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "Phones stay connected to a far AP at -80 dBm instead of roaming. Which controller feature can help?",
    "options": [
      "Band select, which delays 2.4 GHz probe responses",
      "Optimized roaming, with an RSSI threshold",
      "Aggressive load balancing on every WLAN",
      "Raising the AP's transmit power to the maximum"
    ],
    "correct": 1,
    "explanation": "Optimized roaming drops or refuses clients whose RSSI is below a set level, pushing them to a better AP. Higher power makes sticky clients worse.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "What is the difference between Layer 2 and Layer 3 roaming between WLCs?",
    "options": [
      "There is no difference on Catalyst 9800",
      "L2 roaming always needs a new DHCP address for the client",
      "L3 roaming is only possible inside one AP",
      "In L3, the new WLC has a different client subnet"
    ],
    "correct": 3,
    "explanation": "If the client VLAN exists on both WLCs it is a L2 roam (entry moved). Otherwise the original WLC stays anchor and traffic is tunnelled (L3/symmetric).",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "Why enable 802.11v BSS Transition Management in a dense office?",
    "options": [
      "It doubles the channel width automatically",
      "The AP can suggest a better AP to the client",
      "It replaces 802.1X with a shared key",
      "It turns off roaming so that clients stay stable on one AP"
    ],
    "correct": 1,
    "explanation": "BTM lets the network send a request listing preferred APs; compliant clients use it to roam or balance load.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "3.2"
  },
  {
    "question": "In symmetric mobility tunnelling, how does traffic flow after an inter-controller L3 roam?",
    "options": [
      "Each AP switches the traffic locally",
      "Upstream goes directly to the router, downstream via the anchor",
      "Traffic is dropped until the client gets a new IP",
      "Both directions go through the anchor WLC"
    ],
    "correct": 3,
    "explanation": "With symmetric tunnelling (default on 9800), the foreign tunnels both directions to the anchor, avoiding uRPF issues.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.3"
  },
  {
    "question": "show wireless mobility summary shows a peer with control path up but data path down. What is the likely cause?",
    "options": [
      "UDP 16667 blocked or an MTU problem",
      "A wrong SSID passphrase configured on the peer controller",
      "Too many APs joined to the peer controller",
      "The peer has RRM disabled"
    ],
    "correct": 0,
    "explanation": "Control uses UDP 16666 and data UDP 16667 (CAPWAP). A firewall or fragmentation problem on the data port breaks the data path only.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "3.3"
  },
  {
    "question": "How can you validate that guest clients are really anchored to the DMZ WLC?",
    "options": [
      "Look at the AP's PoE draw on the switch",
      "Ping the AP's management IP from a laptop",
      "Count the SSIDs broadcast in the lobby with a phone app",
      "Check the client's mobility role on both WLCs"
    ],
    "correct": 3,
    "explanation": "The client detail should show 'Export Foreign' on the foreign and 'Export Anchor' on the anchor, with the IP from the DMZ VLAN.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.3"
  },
  {
    "question": "What does a site tag do on a Catalyst 9800?",
    "options": [
      "Holds the controller's management certificate",
      "Assigns SSIDs to APs for each floor",
      "Defines the radio channels and power levels for each band",
      "Binds APs to an AP join and flex profile"
    ],
    "correct": 3,
    "explanation": "The site tag carries the AP join profile and, for FlexConnect, the flex profile. The policy tag maps WLANs to policies; the RF tag sets RF profiles.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.4"
  },
  {
    "question": "Why does Cisco recommend grouping APs that roam among each other into the same site tag?",
    "options": [
      "APs in different site tags use different bands",
      "Different site tags cannot share an SSID or a policy profile at all",
      "Roams inside one site tag stay on one WNCd",
      "It removes the need for mobility groups"
    ],
    "correct": 2,
    "explanation": "On 9800, each site tag maps to a WNCd process; intra-process roams are more efficient, so large site tags should cover roaming domains.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "3.4"
  },
  {
    "question": "Which three tags must each AP have on a Catalyst 9800?",
    "options": [
      "VLAN, SSID and RADIUS tags",
      "Mobility, guest and anchor tags",
      "Policy, site and RF tags",
      "Primary, secondary and tertiary tags"
    ],
    "correct": 2,
    "explanation": "The policy tag maps WLAN profiles to policy profiles, the site tag binds join/flex profiles, and the RF tag binds 2.4/5/6 GHz RF profiles.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "3.4"
  },
  {
    "question": "What does LAG on a Catalyst 9800 appliance provide?",
    "options": [
      "Separate VLANs for each AP model",
      "A second controller that takes over on failure",
      "Automatic channel planning across all APs",
      "Bundled ports for bandwidth and redundancy"
    ],
    "correct": 3,
    "explanation": "Link aggregation bundles uplinks into one port-channel to the switch; if one link fails traffic continues on the others.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.1.a"
  },
  {
    "question": "What happens to APs and clients after a failover in a 9800 SSO pair?",
    "options": [
      "All APs rejoin and every client has to reauthenticate from scratch",
      "They stay connected, as the standby has their state",
      "Only APs on 2.4 GHz stay connected",
      "Clients must manually reconnect to the SSID"
    ],
    "correct": 1,
    "explanation": "Stateful switchover syncs AP and client state to the hot standby, so failover is seamless for most sessions.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.1.b"
  },
  {
    "question": "Which link carries state sync between two 9800 appliances in an SSO pair?",
    "options": [
      "The dedicated redundancy port (RP) link",
      "The service port used for out-of-band management",
      "The console cable between both units",
      "A CAPWAP tunnel through one of the APs"
    ],
    "correct": 0,
    "explanation": "SSO uses the RP port (direct or over L2) plus a redundancy management interface for gateway checks; same model and software are required.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "4.1.b"
  },
  {
    "question": "What is N+1 controller redundancy?",
    "options": [
      "One shared backup WLC for several primaries",
      "Each WLC has exactly one AP as a spare",
      "A WLC with N radios and one spare radio module",
      "Two WLCs in SSO for every site"
    ],
    "correct": 0,
    "explanation": "In N+1, APs have a primary WLC and a shared backup listed as secondary; after a failure they rejoin it (with a short outage, unlike SSO).",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.1.c"
  },
  {
    "question": "How can guest access survive the loss of the single DMZ anchor?",
    "options": [
      "Make every AP a guest anchor",
      "Point the guest WLAN to the foreign WLC itself as its own anchor",
      "Enable FlexConnect local switching on the anchor",
      "Two anchors for the WLAN, with priorities"
    ],
    "correct": 3,
    "explanation": "Multiple anchors per WLAN can share load or act as primary/backup by anchor priority; clients move to a surviving anchor.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "4.1.c"
  },
  {
    "question": "After a WLC failure, the backup has room for only half the APs. How do you keep the most important ones up?",
    "options": [
      "Set higher AP priority on critical APs",
      "Lower the transmit power on those APs so they use less capacity",
      "Give critical APs a shorter host name",
      "Disable RRM on the backup controller"
    ],
    "correct": 0,
    "explanation": "With AP failover priority enabled, a full WLC drops lower-priority APs to admit higher-priority ones (critical, high, medium, low).",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.2.a"
  },
  {
    "question": "Where do you set primary, secondary and tertiary controllers for APs on a 9800?",
    "options": [
      "In the RF profile for 5 GHz",
      "In the WLAN's layer 2 security settings",
      "In the AP join profile or per-AP HA settings",
      "In the DHCP option 43 of each client"
    ],
    "correct": 2,
    "explanation": "AP HA settings list the controllers by name and IP in order; option 43 or DNS help initial discovery, not fallback order.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.2.b"
  },
  {
    "question": "APs fail over to the secondary WLC, then return to the primary in the middle of the day and drop clients. What setting avoids this?",
    "options": [
      "Raise RxSOP on every RF profile",
      "Lower the CAPWAP heartbeat timer to one second on every AP",
      "Move the APs to a different site tag",
      "Disable AP fallback or plan it"
    ],
    "correct": 3,
    "explanation": "AP fallback moves APs back when the primary returns, which resets clients. Turning it off keeps them on the secondary until a planned move.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "4.2.b"
  },
  {
    "question": "How can AP failover between WLCs be made faster?",
    "options": [
      "Increase the DHCP lease time on the AP management VLAN",
      "Lower the AP heartbeat timers",
      "Use 40 MHz channels on the 5 GHz radios",
      "Turn off CleanAir on the APs"
    ],
    "correct": 1,
    "explanation": "Shorter heartbeat (and fast heartbeat) intervals let APs detect a lost primary sooner and move to the next controller.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.2.b"
  },
  {
    "question": "In an EWC network, what happens if the AP running the active controller fails?",
    "options": [
      "The APs convert to autonomous mode with a default config",
      "All APs stop serving clients permanently",
      "Another capable AP takes over the role",
      "The cloud takes over every SSID"
    ],
    "correct": 2,
    "explanation": "EWC elects an active and a standby among capable APs; the standby takes over the controller function after a failure.",
    "difficulty": "Medium",
    "exam": "wlsd",
    "domain": "4.2.c"
  },
  {
    "question": "When is EWC a poor choice for a site?",
    "options": [
      "When all APs are Catalyst 9100 models",
      "When the site has fewer than ten APs",
      "When it exceeds EWC's AP or client scale",
      "When the site has no on-premises server or data centre"
    ],
    "correct": 2,
    "explanation": "EWC scales to a limited number of APs and clients and has fewer features; larger sites need an appliance, cloud or switch-embedded 9800.",
    "difficulty": "Hard",
    "exam": "wlsd",
    "domain": "4.2.c"
  },
  {
    "question": "A FlexConnect AP loses its WAN link to the WLC. What mode is it in, and what still works?",
    "options": [
      "Connected; all traffic is still tunnelled to the WLC as usual",
      "Standalone; locally switched WLANs keep serving clients",
      "Bridge; the AP turns into a mesh RAP for the branch",
      "Sniffer; the AP only captures frames until the link returns"
    ],
    "correct": 1,
    "explanation": "In standalone mode, locally switched WLANs continue and new clients can join if local authentication is possible. Central switching stops.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.1"
  },
  {
    "question": "On a Catalyst 9800, where is local switching for a FlexConnect WLAN enabled?",
    "options": [
      "In the RF tag for the branch APs' 5 GHz radio",
      "In the policy profile, by disabling central switching",
      "In the AP join profile under CAPWAP timers",
      "In the WLAN profile under the Layer 2 security tab"
    ],
    "correct": 1,
    "explanation": "The policy profile controls central or local switching, DHCP and authentication; the site tag must carry a flex profile with the VLANs.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.1"
  },
  {
    "question": "Why put branch FlexConnect APs in the same flex profile/group?",
    "options": [
      "So they can use one shared management IP address on the WAN",
      "They share keys so clients roam fast between them",
      "It turns them into a single AP with more radios",
      "It makes their traffic bypass the branch switch completely"
    ],
    "correct": 1,
    "explanation": "Grouped APs share client keys (CCKM/OKC/FT caches) and settings like local auth and VLANs, so roaming in standalone mode is fast.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.2.a"
  },
  {
    "question": "A centrally switched WLAN must still let branch users print locally. What fits?",
    "options": [
      "Moving the printer to the controller's own VLAN",
      "Disabling CAPWAP DTLS on the branch APs and the WLC",
      "Split tunnelling with a Flex ACL for the local subnet",
      "Using a second SSID that is open to everyone in the building"
    ],
    "correct": 2,
    "explanation": "Split tunnelling sends traffic matching the ACL out locally (NAT/PAT on the AP) while the rest is tunnelled to the WLC.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "1.2.b"
  },
  {
    "question": "What lets FlexConnect clients keep authenticating while the WLC is unreachable?",
    "options": [
      "Increasing the AP's CAPWAP heartbeat timer to one hour",
      "An anchor controller placed in the DMZ of the head office",
      "Local authentication with a backup RADIUS at the branch",
      "Setting the WLAN to WPA3-Personal with SAE only at night"
    ],
    "correct": 2,
    "explanation": "Fault tolerance features let APs authenticate via a local RADIUS server or the AP's internal server (local EAP) in standalone mode.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.2.b"
  },
  {
    "question": "With VLAN-based central switching, what happens when ISE returns a VLAN not defined on the FlexConnect AP?",
    "options": [
      "The client traffic is switched centrally at the WLC",
      "The client is blocked and must reauthenticate",
      "The AP creates the VLAN on the branch switch itself",
      "The client stays on the native VLAN of the AP's trunk port"
    ],
    "correct": 0,
    "explanation": "VLAN-based central switching keeps local switching for known VLANs and tunnels clients to the WLC when the returned VLAN is missing locally.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "1.2.c"
  },
  {
    "question": "What does FlexConnect Smart AP image upgrade save?",
    "options": [
      "Flash space, because the image is stored on the switch instead",
      "Controller licences, by upgrading only APs with the old image",
      "AP power, since each AP reboots at a separate random time",
      "WAN bandwidth: one master AP per model downloads, then shares"
    ],
    "correct": 3,
    "explanation": "One AP per model in the group pulls the image across the WAN; the others get it locally from that master AP.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.2.d"
  },
  {
    "question": "What does an OfficeExtend AP give a home worker?",
    "options": [
      "A public hotspot that neighbours can also join with a code",
      "The corporate SSID at home over a secure tunnel to the WLC",
      "A faster home broadband connection to the internet provider",
      "A local controller that manages the user's home router"
    ],
    "correct": 1,
    "explanation": "OEAP is a teleworker AP that joins the WLC over DTLS-protected CAPWAP across the internet and can also offer a personal SSID.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "1.3"
  },
  {
    "question": "Voice traffic is marked DSCP EF (46). Which 802.11 user priority and WMM access category does it map to?",
    "options": [
      "UP 4, Video (AC_VI), after the WLC remarks it to AF41",
      "UP 0, Best Effort (AC_BE), with a higher retry limit",
      "UP 1, Background (AC_BK)",
      "UP 6, Voice (AC_VO)"
    ],
    "correct": 3,
    "explanation": "The common mapping puts EF in UP 6 / AC_VO. The WLC maps DSCP to UP downstream and UP/DSCP to the CAPWAP outer header.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "2.1"
  },
  {
    "question": "Voice packets arrive at the WLC marked EF but leave the AP as best effort. What should you check first?",
    "options": [
      "The DHCP lease time on the voice VLAN of the branch",
      "The AP's antenna gain setting in the RF profile",
      "The number of SSIDs on the AP radio at that site",
      "The switch ports trusting DSCP and the WLAN QoS policy"
    ],
    "correct": 3,
    "explanation": "Markings are lost if a switch port rewrites them (no trust) or if the WLAN/policy profile caps QoS (e.g. Silver). Check the whole path.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "2.1"
  },
  {
    "question": "Which WLAN QoS level on a Cisco WLC is intended for voice?",
    "options": [
      "Gold, which is meant for video streaming and conferencing",
      "Bronze, which is the lowest and saves airtime for others",
      "Silver",
      "Platinum"
    ],
    "correct": 3,
    "explanation": "Platinum = voice, Gold = video, Silver = best effort, Bronze = background. The level caps the highest marking clients can get.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "2.2"
  },
  {
    "question": "How can a WLC limit each guest client to 2 Mb/s?",
    "options": [
      "A per-client rate limit in the QoS policy",
      "Reducing the AP channel width to 20 MHz on every radio",
      "Disabling WMM on the guest WLAN to slow clients down",
      "Assigning the guest VLAN to a slower uplink port on the switch"
    ],
    "correct": 0,
    "explanation": "Per-client (and per-SSID) bandwidth contracts or QoS policies limit upstream and downstream rates on the 9800.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "2.2"
  },
  {
    "question": "What does AVC on a Catalyst 9800 do?",
    "options": [
      "Encrypts video streams between the AP and the WLC with a stronger key",
      "Recognises apps with NBAR2 to show and control them",
      "Assigns voice clients to the least busy channel in the RF group",
      "Converts multicast video into unicast for every client automatically"
    ],
    "correct": 1,
    "explanation": "Application Visibility and Control classifies traffic by deep packet inspection and lets you mark, rate limit or drop by app.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "2.3"
  },
  {
    "question": "Users stream video and slow business apps on the WLAN. How can AVC help without blocking video?",
    "options": [
      "Move business users to the 2.4 GHz band only",
      "Drop all UDP traffic on the WLAN during office hours",
      "Mark the streaming apps down or rate-limit them",
      "Turn off AVC so NBAR2 stops using controller CPU"
    ],
    "correct": 2,
    "explanation": "An AVC policy can remark streaming to a lower class or limit its rate, keeping business apps responsive.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "2.3"
  },
  {
    "question": "Which protocol do wireless clients use to join a multicast group, which the WLC snoops?",
    "options": [
      "IGMP (MLD for IPv6)",
      "PIM sparse mode between clients and their default router",
      "CAPWAP control messages sent from client to AP",
      "ARP requests for the group's multicast MAC address"
    ],
    "correct": 0,
    "explanation": "Clients send IGMP/MLD reports; with snooping, the WLC tracks memberships and forwards only wanted groups.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.1"
  },
  {
    "question": "With multicast-multicast mode on a WLC, how does it send multicast to APs?",
    "options": [
      "As a separate unicast copy to every AP on the controller",
      "Once to a multicast group address that the APs join",
      "Only to the AP with the strongest client signal",
      "Through a GRE tunnel to the core router first"
    ],
    "correct": 1,
    "explanation": "Multicast-multicast mode sends one CAPWAP multicast stream to the AP multicast group; the wired network must support multicast routing.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.1"
  },
  {
    "question": "Why can multicast hurt Wi-Fi performance?",
    "options": [
      "It disables WPA2 encryption on the WLAN",
      "It always uses 160 MHz channels and blocks all of the neighbouring APs",
      "It forces every client to roam to a new AP",
      "It goes at a low basic rate with no ACKs"
    ],
    "correct": 3,
    "explanation": "802.11 multicast goes at a mandatory (often low) rate so all clients can hear it, using much airtime, and is not acknowledged.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.2"
  },
  {
    "question": "Multicast is enabled globally on the 9800 but a WLAN's clients do not get the stream. What else is often needed?",
    "options": [
      "A static route to 224.0.0.0/4 on the AP",
      "An anchor controller for the multicast source",
      "The WLAN set to 2.4 GHz only",
      "IGMP snooping and the right VLAN on the WLAN"
    ],
    "correct": 3,
    "explanation": "Check global multicast mode, IGMP/MLD snooping, the client VLAN mapping and that the wired network delivers the group to the WLC.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.3"
  },
  {
    "question": "Students cannot see an Apple TV on another VLAN. What feature solves this on the WLC?",
    "options": [
      "Band select",
      "mDNS gateway",
      "Aironet IE",
      "DHCP option 82"
    ],
    "correct": 1,
    "explanation": "Bonjour uses link-local mDNS that does not cross subnets. The mDNS gateway caches and forwards services between VLANs, with policies.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.4"
  },
  {
    "question": "With hundreds of Bonjour devices in a campus, how can mDNS be kept under control?",
    "options": [
      "Policies limiting the services each user sees",
      "Allow all services to every client on every VLAN of the whole campus",
      "Disable IGMP snooping so mDNS floods freely",
      "Move all Apple devices to the guest SSID"
    ],
    "correct": 0,
    "explanation": "mDNS service lists, location-specific services and policies (e.g. per user or location) avoid huge lists and reduce load.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "3.4"
  },
  {
    "question": "What does Multicast Direct (VideoStream) do?",
    "options": [
      "Converts multicast to unicast per client",
      "Sends all multicast at the lowest data rate twice, for reliability",
      "Blocks multicast video on every WLAN by default",
      "Routes multicast between two WLCs over PIM"
    ],
    "correct": 0,
    "explanation": "Unicast frames are sent at the client's rate with ACKs, which makes video reliable; admission control limits the number of streams.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "3.5"
  },
  {
    "question": "How does a Catalyst 9800 usually send location data to Cisco Spaces today?",
    "options": [
      "Over SNMP traps sent from every AP to the cloud directly",
      "By e-mailing a CSV export from the WLC to Spaces every night",
      "Through a Cisco Spaces Connector, or direct cloud link",
      "By copying the WLC running configuration to Spaces by TFTP"
    ],
    "correct": 2,
    "explanation": "Spaces gets data via the Spaces Connector (on-prem VM or docker) or a direct WLC connection; CMX on-prem used NMSP from the WLC.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.1"
  },
  {
    "question": "Which protocol carries location data between a WLC and CMX?",
    "options": [
      "CAPWAP data",
      "NMSP",
      "RADIUS accounting",
      "NetFlow v9"
    ],
    "correct": 1,
    "explanation": "Network Mobility Services Protocol (TCP 16113) carries RSSI, client and tag data from the WLC to CMX/MSE.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.1"
  },
  {
    "question": "Location shows a laptop jumping between floors. What is a common cause?",
    "options": [
      "APs on several floors hear it at similar RSSI",
      "The laptop uses WPA3 instead of WPA2 on the SSID",
      "The DHCP server gives the laptop a short lease",
      "The WLC has too many mobility peers configured"
    ],
    "correct": 0,
    "explanation": "RSSI-based location can confuse floors when signals leak through; floor settings, AP placement and attenuation data help.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.2.a"
  },
  {
    "question": "What must be enabled for active RFID tags to be tracked by CMX or Spaces?",
    "options": [
      "RFID tag tracking on the WLC",
      "802.11r fast transition on every WLAN",
      "Band select on the 2.4 GHz radios",
      "AVC on the WLAN used by the tags"
    ],
    "correct": 0,
    "explanation": "The WLC must collect tag data (RFID tracking with timers) and send it over NMSP or the connector.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.2.b"
  },
  {
    "question": "Which AP capability lets the location service place a microwave oven on the map?",
    "options": [
      "DTLS encryption",
      "WMM power save",
      "OKC key caching",
      "CleanAir detection"
    ],
    "correct": 3,
    "explanation": "CleanAir classifies non-Wi-Fi interferers; with several APs reporting, location services can locate the source.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.2.c"
  },
  {
    "question": "Why is locating a rogue AP more useful than just detecting it?",
    "options": [
      "It stops the rogue from using any channel",
      "It lets the WLC adopt the rogue as a managed AP",
      "Staff can find and remove the device physically",
      "It automatically blocks the rogue's DHCP server"
    ],
    "correct": 2,
    "explanation": "Detection says a rogue exists; location narrows where it is so it can be traced and removed or reclassified.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "4.2.d"
  },
  {
    "question": "Location of phones is poor, while laptops are accurate. What might explain it?",
    "options": [
      "Phones always connect at 6 GHz only and never probe 5 GHz",
      "Phones probe rarely and use MAC randomisation",
      "Laptops send stronger beacons than APs",
      "Phones cannot be seen by CleanAir"
    ],
    "correct": 1,
    "explanation": "Location needs frequent probes or data frames; idle phones probe rarely and random MACs break tracking of unassociated devices.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "4.2.e"
  },
  {
    "question": "What is the 'detect and locate' function in Cisco Spaces?",
    "options": [
      "A tool that measures AP cable lengths",
      "A firewall that blocks unknown wireless clients",
      "A map view of devices and clients on floors",
      "A feature that changes AP channels by location"
    ],
    "correct": 2,
    "explanation": "Detect and Locate shows clients, interferers, rogues and tags on maps imported from the WLC or Catalyst Center.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.1.a"
  },
  {
    "question": "A retailer wants dwell time and repeat-visitor counts per store. Which Spaces capability fits?",
    "options": [
      "Location analytics",
      "Captive portal with social login only",
      "wIPS signatures",
      "Rogue containment"
    ],
    "correct": 0,
    "explanation": "Spaces analytics report visits, dwell time, repeat visitors and footfall trends from location data.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.1.b"
  },
  {
    "question": "What does the presence service count?",
    "options": [
      "The number of RFID tags with low batteries",
      "Only clients that passed 802.1X on the corporate SSID",
      "The number of APs joined to each WLC",
      "Devices nearby, including ones not connected"
    ],
    "correct": 3,
    "explanation": "Presence uses probes and associations to classify passers-by, visitors and connected devices at a site.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.1.c"
  },
  {
    "question": "A shop wants a branded splash page with terms of use on its guest Wi-Fi via Spaces. What must the WLAN redirect to?",
    "options": [
      "The Spaces captive portal URL, with a pre-auth ACL",
      "The WLC's internal web server, with WPA3-Enterprise",
      "The ISE posture portal for corporate laptops",
      "No redirect, since Spaces injects the page in beacons"
    ],
    "correct": 0,
    "explanation": "The WLAN uses web auth redirecting to the Spaces portal; a pre-auth ACL or URL filter allows access to Spaces before login.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.1.d"
  },
  {
    "question": "What is the role of the Cisco Spaces Connector?",
    "options": [
      "It is a RADIUS server for guest logins at each branch",
      "It replaces the WLC for small branch offices",
      "It relays WLC data securely to Spaces",
      "It is an AP that only scans for rogues"
    ],
    "correct": 2,
    "explanation": "The connector runs on-prem, collects data from controllers (and services like IoT) and forwards it over a secure tunnel to Spaces.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.1.e"
  },
  {
    "question": "Guests log in with a social media account on the captive portal but the page never loads. What should you check?",
    "options": [
      "That the AP has a static IP address",
      "That 802.11r fast transition is turned on for the guest WLAN",
      "That the pre-auth ACL allows the social domains",
      "That RRM DCA runs every ten minutes"
    ],
    "correct": 2,
    "explanation": "Before authentication, the client must reach the portal and the social provider's OAuth URLs; missing entries in the walled garden break login.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "5.2"
  },
  {
    "question": "How does location make guest services 'location-aware'?",
    "options": [
      "Portal content or offers change by user location",
      "The SSID name changes automatically on each floor of the venue",
      "Guests get a VLAN based on their phone model",
      "The AP lowers power when guests are nearby"
    ],
    "correct": 0,
    "explanation": "Spaces can choose portal pages, notifications or rules by zone, floor or site.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.2"
  },
  {
    "question": "Location accuracy is poor across a floor. Which fix is most likely to help?",
    "options": [
      "Increase AP transmit power to the maximum on every radio",
      "Check AP placement, heights and map scale",
      "Disable 5 GHz so clients use 2.4 GHz",
      "Reduce the number of APs to lower interference"
    ],
    "correct": 1,
    "explanation": "Accuracy depends on correct AP positions, height, orientation, map scale and enough APs hearing each client; calibration helps too.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "5.3"
  },
  {
    "question": "How is high availability provided for the Spaces Connector?",
    "options": [
      "Two SSIDs pointing to the same connector",
      "One connector with a larger disk and more memory allocated",
      "A backup copy of the connector on USB",
      "Two connectors in an active/standby pair"
    ],
    "correct": 3,
    "explanation": "Connectors can be deployed in HA pairs; if the active fails, the standby takes over the data path to Spaces.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.4"
  },
  {
    "question": "The Spaces Connector HA pair shows both nodes active and data duplicates. What is the likely issue?",
    "options": [
      "The guest portal has two languages",
      "The WLC has two management VLANs configured on its uplink",
      "The connector uses too much CPU",
      "The nodes cannot see each other"
    ],
    "correct": 3,
    "explanation": "If HA heartbeats fail, both nodes may assume active. Restore connectivity between nodes or the virtual IP configuration.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "5.4"
  },
  {
    "question": "How is aWIPS managed when using Catalyst Center?",
    "options": [
      "Through a CLI script on each AP",
      "Only through a separate MSE appliance in the data centre",
      "Catalyst Center enables it and shows alarms",
      "It cannot be used with Catalyst Center"
    ],
    "correct": 2,
    "explanation": "Catalyst Center can enable Advanced wIPS on Catalyst 9800 APs and show attack signatures and alarms (Rogue and aWIPS app).",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "5.5"
  },
  {
    "question": "What does the WLC send to ISE to help it profile wireless clients?",
    "options": [
      "DHCP and HTTP attributes via RADIUS accounting",
      "Full packet captures of every client session on the WLAN",
      "The client's saved Wi-Fi passwords",
      "SNMP walks of every switch port"
    ],
    "correct": 0,
    "explanation": "With device sensor/profiling enabled, the WLC includes DHCP options and HTTP user agent in RADIUS accounting so ISE can classify devices.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.1"
  },
  {
    "question": "After ISE profiles a device as an IP phone, it should move to the voice VLAN. What makes this happen?",
    "options": [
      "The client must reboot to pick up the new VLAN",
      "An ISE CoA triggers reauthorisation",
      "The AP changes the VLAN on its own after a day of traffic",
      "The WLC reads the phone's model from CDP"
    ],
    "correct": 1,
    "explanation": "When the profile changes, ISE sends a RADIUS Change of Authorization so the WLC re-applies authorisation (VLAN, ACL, QoS).",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "6.1"
  },
  {
    "question": "In Central Web Authentication with ISE, what happens first when a guest connects?",
    "options": [
      "The WLC shows its own built-in login page",
      "The guest enters a WPA2 PSK printed on a sign on the wall",
      "MAB to ISE returns a redirect URL and ACL",
      "The guest is put straight on the internet VLAN"
    ],
    "correct": 2,
    "explanation": "CWA: MAB to ISE, ISE returns url-redirect and a redirect ACL; after portal login, ISE sends CoA and the final policy.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.2.a"
  },
  {
    "question": "What does an ISE self-registration guest portal allow?",
    "options": [
      "Guests create their own accounts",
      "Guests use the corporate 802.1X credentials of their host",
      "Guests bypass the captive portal entirely",
      "Guests choose their own VLAN"
    ],
    "correct": 0,
    "explanation": "Self-registration lets visitors fill in a form and receive credentials (SMS/e-mail), with optional sponsor approval.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.2.a"
  },
  {
    "question": "How does Local Web Authentication differ from CWA?",
    "options": [
      "LWA needs no web page at all",
      "LWA uses 802.1X with client certificates only",
      "In LWA the WLC runs the web login itself",
      "LWA works only on FlexConnect APs"
    ],
    "correct": 2,
    "explanation": "With LWA, the WLC intercepts HTTP and presents its own (or external) portal, then authenticates the user via RADIUS or local DB.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.2.b"
  },
  {
    "question": "In ISE native supplicant provisioning for BYOD, what does the user's device receive?",
    "options": [
      "A guest password valid for one hour",
      "A static IP address and a printed QR code for the SSID",
      "A Wi-Fi profile and certificate for EAP-TLS",
      "A VPN client that replaces Wi-Fi"
    ],
    "correct": 2,
    "explanation": "The NSP flow onboards the device: it downloads a wizard or profile, gets a certificate from the ISE CA and reconnects with EAP-TLS.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "6.2.c"
  },
  {
    "question": "Guests see a certificate warning on the WLC's web auth page. What fixes it?",
    "options": [
      "Install a trusted cert for the web auth name",
      "Disable HTTPS so the page loads over HTTP",
      "Change the guest SSID to WPA3-Personal",
      "Use a shorter virtual IP address for the web auth page"
    ],
    "correct": 0,
    "explanation": "Install a CA-signed certificate matching the virtual IP's host name (or use a trusted certificate on the external portal).",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.2.d"
  },
  {
    "question": "FlexConnect local-auth branch APs must still use ISE for 802.1X while the WAN is up. Where does authentication run?",
    "options": [
      "On the branch switch's local user database",
      "Only on the client device itself",
      "Centrally via the WLC to ISE",
      "Nowhere, as FlexConnect cannot use 802.1X"
    ],
    "correct": 2,
    "explanation": "By default FlexConnect authenticates centrally; local authentication or a local RADIUS is used as a fallback or by design.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.3"
  },
  {
    "question": "ISE returns a VLAN, an ACL name and a QoS level for a user. What is this called?",
    "options": [
      "Band steering",
      "Static VLAN mapping per SSID",
      "RRM-based policy",
      "AAA override"
    ],
    "correct": 3,
    "explanation": "With AAA override enabled, RADIUS attributes from ISE override the WLAN defaults per user or device.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "6.4"
  },
  {
    "question": "ISE returns an ACL name but the user's traffic is not filtered. What is the likely cause?",
    "options": [
      "The SSID is hidden from the beacons",
      "The user has a long password",
      "The AP uses 80 MHz channels",
      "The ACL is not defined on the WLC"
    ],
    "correct": 3,
    "explanation": "A named ACL must be defined on the controller (and pushed to Flex APs) with the exact same name, and AAA override must be enabled.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "6.4"
  },
  {
    "question": "Which Catalyst Center feature gives scheduled reports on client counts and AP usage?",
    "options": [
      "Reports",
      "Plug and Play",
      "Software image management",
      "Template editor"
    ],
    "correct": 0,
    "explanation": "The Reports function builds scheduled or on-demand reports (client, AP, rogue, compliance) in formats such as CSV or PDF.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.1"
  },
  {
    "question": "A rogue AP on the wired network broadcasts the corporate SSID. How should a WLC rule classify it?",
    "options": [
      "Ignored, since it is not on the WLC",
      "Friendly, because it uses the same SSID",
      "Unclassified, as SSID does not matter",
      "Malicious, with containment considered"
    ],
    "correct": 3,
    "explanation": "An SSID spoof plus a wired connection is a high-risk rogue; rules can classify it malicious and, where legal, contain it.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.2.a"
  },
  {
    "question": "Why must rogue containment be used with care?",
    "options": [
      "It permanently disables the rogue's hardware",
      "It uses no airtime at all",
      "It works only on 2.4 GHz radios",
      "It can hit neighbours and be illegal"
    ],
    "correct": 3,
    "explanation": "Containment sends deauth frames against the rogue's clients; against neighbours' networks it can break the law. Use it only on your own airspace threats.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "7.2.a"
  },
  {
    "question": "Where in Catalyst Center do you view rogue and aWIPS threats across sites?",
    "options": [
      "The software image repository",
      "The Plug and Play device list",
      "The network hierarchy settings page for each site",
      "The Rogue and aWIPS dashboard"
    ],
    "correct": 3,
    "explanation": "The Rogue Management and aWIPS application shows threats, trends and allows rules and containment actions.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.2.b"
  },
  {
    "question": "Which WLC view shows non-Wi-Fi interference such as Bluetooth or microwaves detected by APs?",
    "options": [
      "CleanAir interferer reports",
      "The client roaming history",
      "The AP join statistics",
      "The mobility tunnel summary"
    ],
    "correct": 0,
    "explanation": "CleanAir-capable APs classify interferers and report severity, duty cycle and affected channels to the WLC.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.3.a"
  },
  {
    "question": "How does Catalyst Center help with RF interferers?",
    "options": [
      "It removes interferers by powering down nearby devices",
      "Heatmaps and AI insights show where and when they hit",
      "It moves APs physically with motors",
      "It changes the building materials in the map"
    ],
    "correct": 1,
    "explanation": "Assurance shows interferer events on floor maps, their impact on Air Quality and trends, and links to RRM changes.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.3.b"
  },
  {
    "question": "A client cannot join and you need to see each step on the 9800. Which tool helps most?",
    "options": [
      "show ap summary",
      "show running-config on the WLC",
      "A ping from the WLC to the default gateway",
      "RadioActive tracing for the client MAC"
    ],
    "correct": 3,
    "explanation": "RadioActive (RA) tracing collects detailed debugs for one MAC across processes (association, auth, DHCP, mobility).",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.4.a"
  },
  {
    "question": "Where in ISE do you check why an 802.1X wireless login failed?",
    "options": [
      "RADIUS Live Logs",
      "The certificate store only",
      "The guest sponsor portal",
      "The backup and restore page"
    ],
    "correct": 0,
    "explanation": "Live Logs show each authentication with the failure reason, matched policy and steps.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.4.b"
  },
  {
    "question": "ISE Live Logs show 'Supplicant stopped responding to ISE'. What is a likely cause?",
    "options": [
      "The AP is in FlexConnect mode",
      "The client rejects the ISE certificate",
      "The SSID uses 20 MHz channels",
      "The WLC is part of an SSO pair"
    ],
    "correct": 1,
    "explanation": "Clients often silently drop the EAP exchange when they reject the server certificate; install the CA on clients or fix the certificate.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "7.4.b"
  },
  {
    "question": "Which Catalyst Center Assurance feature shows a single client's onboarding events and health over time?",
    "options": [
      "Device 360 for the core switch",
      "Client 360",
      "Command Runner",
      "Image repository"
    ],
    "correct": 1,
    "explanation": "Client 360 shows onboarding phases (association, authentication, DHCP), RF quality, roaming and issues for one client.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "7.4.c"
  },
  {
    "question": "Why use TACACS+ rather than RADIUS for WLC admin access?",
    "options": [
      "It authorises each command and encrypts the body",
      "It is the only protocol that supports admin passwords",
      "It is faster for 802.1X wireless clients",
      "It needs no server at all"
    ],
    "correct": 0,
    "explanation": "TACACS+ separates AAA, supports per-command authorisation and accounting and encrypts the full body; RADIUS encrypts only the password.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "8.1"
  },
  {
    "question": "What should exist in case the TACACS+ servers are unreachable?",
    "options": [
      "No account, so nobody can log in",
      "A local fallback admin account",
      "An open guest SSID for admins",
      "SNMP v1 write access"
    ],
    "correct": 1,
    "explanation": "Configure the method list with local as a fallback and keep the local credentials secured.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "8.1"
  },
  {
    "question": "Why enable 802.1X on the switch ports where APs connect?",
    "options": [
      "To make the APs join the WLC faster after a reboot",
      "So only authenticated APs get access",
      "To give APs more PoE power",
      "To encrypt client traffic on the air"
    ],
    "correct": 1,
    "explanation": "The AP acts as a supplicant (EAP-FAST, PEAP or EAP-TLS) so an attacker cannot simply plug into an AP port.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "8.2"
  },
  {
    "question": "Where are the AP's 802.1X supplicant credentials configured on a 9800?",
    "options": [
      "In the RF profile",
      "In the WLAN profile",
      "In the AP join profile",
      "In the mobility group settings"
    ],
    "correct": 2,
    "explanation": "The AP join profile holds AP management settings, including 802.1X EAP type and credentials pushed to joined APs.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "8.2"
  },
  {
    "question": "What does a control plane ACL on the WLC protect?",
    "options": [
      "Traffic between two APs on the same switch",
      "Client traffic between two SSIDs",
      "Traffic destined to the controller itself",
      "Only multicast traffic to clients"
    ],
    "correct": 2,
    "explanation": "A CP ACL filters management and control traffic to the WLC (SSH, HTTPS, SNMP, CAPWAP) from untrusted sources.",
    "difficulty": "Medium",
    "exam": "wlsi",
    "domain": "8.3"
  },
  {
    "question": "After applying a control plane ACL, all APs disconnect. What was likely missed?",
    "options": [
      "Denying SSH from the admin subnet",
      "Permitting ICMP from the internet",
      "Permitting CAPWAP UDP 5246/5247",
      "Allowing NTP from clients"
    ],
    "correct": 2,
    "explanation": "APs use CAPWAP control (5246) and data (5247); the ACL must permit them (and DHCP, DNS, RADIUS as needed) before the implicit deny.",
    "difficulty": "Hard",
    "exam": "wlsi",
    "domain": "8.3"
  }
];
