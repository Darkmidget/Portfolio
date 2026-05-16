const PROJECT_linear_regulator_boost_converter = {
  id: "linear-regulator-boost-converter",
  title: "Linear Regulator & Boost Converter",
  status: "completed",
  category: "Electronics",
  tags: ["Power Electronics", "Simulation", "Linear Regulator", "Boost Converter", "LTSpice", "PCB", "High Current", "Protection Circuits", "EMI Damping", "Bang-Bang Control"],
  thumbnail: "resources/Pictures/linear-regulator-boost-converter/cover.png",
  date: "2026",
  summary: "Design, simulate and build a high-current dual-rail linear voltage regulator and a boost converter. Features a robust bang-bang configuration for unconditional stability, active thermal protection, and a detailed 4-layer PCB evolution from NMOS to PMOS topologies.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Software Used": "LTSpice",
    "Physical Dimensions": "40cm x 40cm (Max 50cm x 50cm)",
    "Total Build Cost": "~$7.50 USD",
    "Safety Architecture": "Active thermal monitoring & 30A Amp-Limiter cutoff",
    "Control Logic": "PMOS-driven Bang-Bang (Unconditionally Stable)",
    "EMI Mitigation": "RC dampening network",
    "Passive Performance": "8A sustained (> 5 mins)",
    "Active Performance": "30A max limit (with forced-air cooling)",
    "Debugging Tools": "Logic Analyzer & Digital Microscope"
  },
  contentFile: "src/data/projects/linear-regulator-boost-converter/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_linear_regulator_boost_converter = PROJECT_linear_regulator_boost_converter;
