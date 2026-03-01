const PROJECT_autonomous_navigation_predictive_control = {
  id: "autonomous-navigation-predictive-control",
  title: "Autonomous Navigation & Predictive Control",
  status: "completed",
  category: "Robotics",
  tags: ["ROS2 Humble", "MPPI", "Model Predictive Control", "Groot2", "PyTrees", "Gazebo", "Digital Twin", "Perception", "Behavior Trees"],
  thumbnail: "resources/Pictures/autonomous-navigation-predictive-control/cover.png",
  date: "2025",
  summary: "High-performance navigation stack using ROS2 and MPPI with behavior-tree decision logic and a Gazebo digital twin.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: ""
  },
  content: `
## Overview
This project was completed as an internship and independent project focused on building a high-performance autonomous navigation stack.

- Optimized Navigation Stack: Developed a high-performance navigation pipeline using **ROS2 Humble** and **MPPI (Model Predictive Path Integral)** controllers to produce smooth, dynamically-feasible trajectories.
- High-Speed Tracking: Achieved precise trajectory tracking and agile dynamic obstacle avoidance, improving reliability in fluid environments.

## Intelligent Autonomy & Decision Logic

- Behavior Tree Architecture: Engineered complex decision-making logic using **Groot2** and **PyTrees**, moving beyond simple state machines for more robust robot behavior.
- Frontier Exploration: Integrated autonomous self-mapping capabilities so the robot can explore and digitize unknown areas without manual intervention.

## Digital Twin & Perception

- High-Fidelity Simulation: Built a Gazebo simulation environment (digital twin) to validate kinematics and sensor fusion—accelerating development and reducing hardware risk.
- 3D Spatial Awareness: Developed perception pipelines for 3D object identification, enabling landmark-based self-alignment and high-precision task execution.

## Notes / Pro-Tips

- Metrics: Add any measured results (e.g., mapping time reduction, top tracking speed, or success rates) to strengthen the "So What?" factor.
- Visuals: Include a screenshot of the Behavior Tree from Groot2 and a short screen recording of the Gazebo simulation demonstrating navigation and obstacle avoidance.

## Tech

ROS2 Humble, MPPI / MPC, PyTrees, Groot2, Gazebo, Python, C++

`};
if (typeof window !== 'undefined') window.PROJECT_autonomous_navigation_predictive_control = PROJECT_autonomous_navigation_predictive_control;

