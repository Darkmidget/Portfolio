const PROJECT_sand_e_beach_cleaning_robot = {
  id: "sand-e-beach-cleaning-robot",
  title: "Sand‑E — Beach Cleaning Robot",
  status: "in-progress",
  category: "Robotics",
  tags: ["CAD", "3D Printing", "Mechanical Design", "Electronics", "ROS2", "Autonomy", "Embedded"],
  thumbnail: "resources/Pictures/sand-e/cover.png",
  date: "2026",
  summary: "A mission-ready autonomous robot that traverses sandy terrain and autonomously collects debris, achieving press coverage in Straits Times and field testing at Pasir Ris Park.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "https://www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand",
  },
  specs: {
    "Status": "Phase 2 (Autonomous Migration)",
    "Compute (Active)": "Intel Core i9 Mini PC",
    "Software Stack": "ROS 2 (Humble/Jazzy)",
    "Driveline": "12V 795 DC motors + 263:1 Planetary Gearboxes",
    "Localization": "Multi-constellation GNSS + IMU Sensor Fusion",
    "Navigation": "Mapless Navigation (ROS 2)",
    "Control Interface": "Cloud-Based Web UI",
    "Safety Systems": "LiDAR Obstacle Detection",
    "Mechanical Base": "Modified Professional Mechanical Trolley",
    "Press Coverage": "Featured in Straits Times"
  },
  contentFile: "src/data/projects/sand-e-beach-cleaning-robot/content.md"
};

if (typeof window !== 'undefined') window.PROJECT_sand_e_beach_cleaning_robot = PROJECT_sand_e_beach_cleaning_robot;
