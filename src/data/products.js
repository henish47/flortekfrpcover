export const products = [
    // === SQUARE COVERS ===
    {
        id: "sq-18x18",
        name: "18x18\" Square Manhole Cover",
        category: "Square",
        image: "/images/square/FRP-18x18-2.5T-FW.png",
        images: [
            "/images/square/FRP-18x18-2.5T-FW.png",
        ],
        specs: { "Outer Size": "450x450mm (18x18\")", "Clear Opening": "380x380mm (15x15\")", "Load": "2.5 T" },
        features: ["Reinforced Core", "Non-Conductive", "Anti-Theft"],
        description: "Popular size for sewer lines, offering accessibility and strength."
    },
    {
        id: "sq-24x24",
        name: "24x24\" Square Manhole Cover",
        category: "Square",
        image: "/images/square/FRP-24x24-2.5T-FW.png",
        images: ["/images/square/FRP-24x24-2.5T-FW.png"],
        specs: { "Outer Size": "600x600mm (24x24\")", "Clear Opening": "500x500mm (20x20\")", "Load": "2.5 T / 5.0 T" },
        features: ["Industrial Grade", "Load Certified", "Long Lifespan"],
        description: "Full-size manhole cover for heavy-footfall commercial areas."
    },

    // === CIRCULAR COVERS ===
    {
        id: "circ-18",
        name: "18\" Circular Manhole Cover",
        category: "Circular",
        image: "/images/circular/FRP-18-2.5T-FW.png",
        images: [
            "/images/circular/FRP-18-2.5T-FW.png",
        ],
        specs: { "Outer Size": "450mm (18\")", "Clear Opening": "350mm (14\")", "Load": "2.5 T / 5.0 T" },
        features: ["Ergonomic Design", "Perfect Seal", "UV Stabilized"],
        description: "Mid-size round cover for residential inspection chambers."
    },
    {
        id: "circ-24",
        name: "24\" Circular Manhole Cover",
        category: "Circular",
        image: "/images/circular/Round 24 5T.jpg.jpeg",
        images: [
            "/images/circular/Round 24 5T.jpg.jpeg",
        ],
        specs: { "Outer Size": "600mm (24\")", "Clear Opening": "500mm (20\")", "Load": "5.0 T" },
        features: ["Roadway Safe", "Heavy Flow Support", "Professional Grade"],
        description: "Large circular cover designed for city infrastructure nodes."
    },

    // === RECTANGULAR COVERS ===
    {
        id: "rect-18x24",
        name: "18x24\" Rectangular Cover",
        category: "Rectangular",
        image: "/images/rectangular/FRP-18x24-2.5T-FW.png",
        images: ["/images/rectangular/FRP-18x24-2.5T-FW.png"],
        specs: { "Outer Size": "450x600mm (18x24\")", "Clear Opening": "350x500mm (14x20\")", "Load": "2.5 T / 5.0 T" },
        features: ["Multi-Utility", "Standard Format", "High Strength"],
        description: "Standard rectangular cover for cable trenches and linear pits."
    },
    {
        id: "rect-24x36",
        name: "24x36\" Rectangular Cover",
        category: "Rectangular",
        image: "/images/rectangular/24 X 36 FRP.PNG",
        images: ["/images/rectangular/24 X 36 FRP.PNG"],
        specs: { "Outer Size": "600x900mm (24x36\")", "Clear Opening": "500x800mm (20x32\")", "Load": "2.5 T / 5.0 T" },
        features: ["Cable Trench Load", "Bolt-down Option", "Max Length"],
        description: "Heavy-duty large rectangular cover for infrastructure hubs."
    },

    // === HEAVY DUTY ===
    {
        id: "hd-600x600-b125",
        name: "600x600mm Heavy Duty (B125/C250/D400)",
        category: "Heavy Duty",
        image: "/images/square/FRP-24x24-2.5T-FW.png",
        images: ["/images/square/FRP-24x24-2.5T-FW.png"],
        specs: { "Outer Size": "600x600mm", "Load": "12.5T to 40T", "Material": "Grade A FRP" },
        features: ["Industrial Titan", "Standard City Road Fit", "Ultra Durable"],
        description: "The bench-mark heavy-duty square cover for main road networks."
    },
    {
        id: "hd-600-circ",
        name: "600mm Heavy Duty Circular (B125)",
        category: "Heavy Duty",
        image: "/images/circular/FRP 600 BS EN_124_B125.png",
        images: ["/images/circular/FRP 600 BS EN_124_B125.png"],
        specs: { "Diameter": "600mm", "Load": "12.5 T (B125)", "Material": "Grade A FRP" },
        features: ["Highway Rated", "Max Impact Resistance", "Double Sealing"],
        description: "Heavy-duty circular cover for high-traffic road usage."
    },

    // === WATER GULLY ===
    {
        id: "wg-450-sq",
        name: "450x450mm Gully Grating",
        category: "Water Gully",
        image: "/images/watergully/GULLY  COVER - 18X18-GRAY.png",
        images: ["/images/watergully/GULLY  COVER - 18X18-GRAY.png"],
        specs: { "Outer Size": "450x450mm", "Cover Size": "395x395mm", "Load": "5T Load / 12.5T" },
        features: ["Max Intake", "Bolt-down Security", "Corrosion Proof"],
        description: "Large capacity drainage grate for industrial yards."
    },
    {
        id: "wg-380x680-rect",
        name: "380x680mm Rectangular Gully",
        category: "Water Gully",
        image: "/images/watergully/GULLY COVER _300X600_5T_GRAY.png",
        images: ["/images/watergully/GULLY COVER _300X600_5T_GRAY.png"],
        specs: { "Outer Size": "380x680mm", "Cover Size": "300x600mm", "Load": "Highway Duty" },
        features: ["Linear Grating", "Cast Iron Strength Profile", "Anti-Splash"],
        description: "Rectangular linear gully for roadside water management."
    },

    // === RECESSED COVERS ===
    {
        id: "rec-18x18",
        name: "18x18\" Recessed Manhole Cover",
        category: "Recessed",
        image: "/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg",
        images: ["/images/recessed/RECESS COVER _ 450X450_2.5T_GRAY.jpg"],
        specs: { "Clear Opening": "450x450mm (18x18\")", "Depth": "35 / 65 mm", "Load": "2.5 T / 5.0 T" },
        features: ["Concealed Design", "Heavy Duty Core", "Flush Installation"],
        description: "Premium recessed cover for malls and hotels, allowing floor continuity without compromising on utility access."
    },
    {
        id: "rec-24x24",
        name: "24x24\" Recessed Manhole Cover",
        category: "Recessed",
        image: "/images/recessed/recessed-cover-placeholder.png",
        images: ["/images/recessed/recessed-cover-placeholder.png"],
        specs: { "Clear Opening": "600x600mm (24x24\")", "Depth": "35 / 65 mm", "Load": "2.5 T / 5.0 T" },
        features: ["Structural Integrity", "Tile Matching", "Industrial Strength"],
        description: "Industrial grade recessed cover for large openings where a clean, uniform floor surface is required."
    }
];
