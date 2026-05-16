const PROJECT_tunable_gelatin_dra = {
  id: "tunable-gelatin-dra",
  title: "Tunable Gelatin-based Dielectric Resonator Antenna (DRA)",
  status: "completed",
  category: "Electromagnetic Waves",
  tags: [
    "RF Design",
    "Antennas",
    "Dielectrics",
    "CST Studio",
    "Simulations",
    "Material Science",
    "Wearables"
  ],
  thumbnail: "resources/Pictures/gelatin-dra/thumbnail.jpg",
  date: "2024",
  summary: "A journey exploring the possibility of creating a gelatin with a tunable dielectric constant for the purpose of making a durable, 75% smaller Dielectric Resonating Antenna (DRA).",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Center Frequency": "900 MHz",
    "Return Loss (S11)": "-20.74 dB",
    "Gain": "1.929 dBi",
    "Bandwidth": "63 MHz",
    "Dielectric Matrix": "Tunable Hydrogel (Gelatin + Water, κ ≈ 67)",
    "Size Reduction": "75% smaller vs traditional DRA",
    "Simulation Tool": "CST Studio Suite",
    "Primary Goal": "Soft-matter biocompatible RF for wearables"
  },
  contentFile: "src/data/projects/tunable-gelatin-dra/content.md"
};

if (typeof window !== 'undefined') window.PROJECT_tunable_gelatin_dra = PROJECT_tunable_gelatin_dra;
