const PROJECT_national_robotics_competition_2024 = {
  id: "national-robotics-competition-2024",
  title: "National Robotics Competition (NRC) 2024 — 1st Place",
  status: "completed",
  category: "Robotics",
  tags: ["Autonomous", "Smorphi", "Open-Loop", "Path Mapping", "Shape-Shifting"],
  thumbnail: "resources/Pictures/national-robotics-competition-2024/cover.jpg",
  date: "2024",
  summary: "1st Place (Smorphi Autonomous & Pilot Challenge) — high-speed minimalist autonomous navigation with shape-shifting robot.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: ""
  },
  content: `
## Executive Summary
I led my team to a 1st Place finish in the 2024 National Robotics Competition by rethinking the standard approach to autonomous navigation. While most teams relied on complex sensor arrays, we developed a "High-Speed Minimalist" workflow for the Smorphi — a unique robot utilizing a Tetris-based architecture capable of shape-shifting into various polyomino configurations to maximize area coverage.

## Technical Innovations

- **Zero-Sensor Autonomous Logic:** Challenged the necessity of hardware complexity by bypassing wheel encoders and sensors entirely. We focused on high-precision open-loop command execution to prioritize speed and deployment efficiency.

- **1:1 Path-Mapping Application:** Built a custom application to draw the 1:1 layout of the arena (map was revealed on competition day). The app translated visual paths into precise movement command sequences for the Smorphi, dramatically shortening setup time.

- **Dynamic Shape-Shifting:** Optimized the robot's Tetris-like transformations to navigate tight corners and maximize cleaned area, ensuring full coverage in record time.

- **Pilot-Operator Communication Bridge:** Designed a communication protocol focused on cognitive load management that filtered and relayed only mission-critical information to the driver during the piloted segment.

## Key Results

- **Rank:** 1st Place in autonomous and pilot category.
- **Efficiency:** Reduced programming/setup time from hours to minutes using the custom mapping interface.
- **Reliability:** Demonstrated that a minimalist software-first approach can outperform sensor-heavy hardware under time pressure.

## Tech

Open-Loop Motion Control, Custom Mapping Interface, Shape-Shifting Kinematics, Real-time Command Sequencing

`
};
if (typeof window !== 'undefined') window.PROJECT_national_robotics_competition_2024 = PROJECT_national_robotics_competition_2024;
