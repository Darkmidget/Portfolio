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
  content: `
## Evolution from RC to Autonomy

Sand‑E is currently undergoing a strategic evolution, transitioning from a proven, **remote-controlled (RC) prototype** to a fully **autonomous mission-ready system**. The project is structured in two distinct phases:

1.  **Phase 1 (Completed Jan 2025):** Development of the robust mechanical chassis and teleoperated control system. This version achieved successful field testing and press coverage.
2.  **Phase 2 (Active Development):** Transitioning to full autonomy using **GPS/IMU sensor fusion**, high-performance **Intel i9 compute**, and a **ROS 2** navigation stack for systematic grid-based beach cleaning.

![Sand-E Robot Overview](resources/Pictures/sand-e/overview.png)

## Demonstration Video (Phase 1)

<video width="100%" controls preload="metadata" poster="resources/Pictures/sand-e/cover.png" style="border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
  <source src="resources/Videos/sand-e/sand-e-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **Phase 1: The Remote-Controlled Prototype (2024 – Jan 2025)**

The initial objective was to build a rugged, high-traction mechanical platform capable of traversing loose sand. This phase was purely teleoperated, focusing on mechanical reliability rather than advanced perception.

### **Role & Core Contributions (Phase 1)**
- Directed overall technical roadmap from concept to field deployment, coordinating cross-functional teams across mechanical, electronics, and software domains.
- Led team of 27 students to deliver a functional prototype capable of teleoperated operation on sandy terrain.
- Managed stakeholder communications with SUTD DAI pillar, SOAR student club, and Polymate alumni startup for resource integration.

### **Mechanical Engineering & CAD Design**
- Developed the complete mechanical design exclusively in **Fusion360**, creating a modular chassis optimized for sandy terrain traversal.
- **Trolley Repurposing:** Successfully modified a professional mechanical trolley into a robot chassis, integrating a vertical sweeper and conveyor-based collection mechanism.

> **Key Achievement:** Transformed a basic trolley concept into a deployable robot through mechanical redesign and strategic component selection.

![Primary CAD Render of the Sand-E Assembly](resources/Pictures/sand-e/cad.png)
*Full assembly showing the chassis and collection mechanism designed in Fusion 360.*

### **Planning & Conceptual Ideation**
The design process involved rapid iteration of chassis topology and collection mechanisms through sketches and low-fidelity prototyping.

- **Requirements & Use Cases:** Defined operational envelope (beach slopes, sand types, debris sizes), stakeholder needs (speed, throughput, safety), and constraints (transportability, battery life, budget).
- **Concept & Feasibility:** Rapid CAD mockups and off-the-shelf component surveys to validate chassis concepts and topology for sand mobility.
- **Detailed Design & Sizing:** Selected driveline, actuator, and powertrain components using physics-based sizing and margining (powers, torques, gear ratios, battery capacity).
- **Prototype & Iteration:** Built modular subassemblies for quick swap testing (wheel modules, gripper, sweeper/conveyor) and ran controlled sandbox experiments.

![Early Planning and Ideas 1](resources/Pictures/sand-e/Plans_and_ideas1.png)
![Early Planning and Ideas 2](resources/Pictures/sand-e/plans_and_ideas2.png)
![Early Planning and Ideas 3](resources/Pictures/sand-e/plans_and_ideas3.png)
![Early Planning and Ideas 4](resources/Pictures/sand-e/plans_and_ideas4.png)

### **RC Electronics & Motor Specification**
The Phase 1 electronics were streamlined for remote operation, featuring high-torque motors, motor drivers, and battery management, but **no sensors**.

- **Drive System:** 12V DC 795-series motors with high-reduction planetary gearboxes (~263:1) for maximum torque on sand.
  - Motor type: 12 V DC hobby 795 motor (high-reduction gearing used for torque multiplication)
  - Gear reduction: 263:1 (3-stage planetary)
  - Effect of gearing: gearbox multiplies motor torque by ~263 (mechanical losses apply; expect usable torque reduced by gearbox efficiency, typically 70–90%)
  - Wheel diameter: 300 mm (0.3 m) in current prototype
  - Resulting wheel torque: motor_torque * 263 (example: a small DC motor nominal torque multiplied by 263 provides high stall torque for slow, high-traction crawl)
  - Top speed: gearbox reduces speed substantially — system optimized for low-speed, high-torque operation rather than top speed
- **Control:** Simple 43A DC motor drivers run open-loop via remote control (PWM).
- **Power:** 12V bus powered by high-capacity Li-ion/Lead-acid packs.
  - Typical capacity: 20–30 Ah for longer field trials, smaller packs for short demos.
  - Onboard DC-DC regulators supply lower-voltage rails (5 V, 3.3 V) for microcontrollers; motor drivers draw directly from the 12 V bus.

![Motor Specification Calculations](resources/Pictures/sand-e/Plans_calculations_motor_spec.png)
*Detailed technical calculations for tractive force and torque requirements.*

### **Phase 1 Testing & Successful Debut**
The RC version was rigorously tested in sandbox environments and on-site at Pasir Ris Beach before its public demonstration.

- **Bench tests:** Motor load testing, thermal profiling, current draw validation, and sweeper/conveyor cycle life tests (throughput, wear, and mesh/clogging validation).
- **Sandbox tests:** Controlled sand boxes with adjustable compaction to validate mobility, wheel slip characteristics, and motor thermal behaviour.
- **Field Validation & Scaling:** Staged pilot tests at Pasir Ris Park with progressive autonomy, instrumented logging, and stakeholder demos.

![The Electronics and Integration Team](resources/Pictures/sand-e/v1_electronics_team.png)
*The team during the initial integration and testing of the V1 RC control system.*
![Initial Bench Testing of Electronics](resources/Pictures/sand-e/initial_testing_of_electronics.png)
*Benchtop verification of the motor drive and RC control system.*

![Simplified Electronics Block Diagram](resources/Pictures/sand-e/simplification_of_electronics.png)
*High-level overview of the initial RC electrical architecture (Phase 1).*

![Sandbox Testing at SUTD](resources/Pictures/sand-e/more_testing_SUTD.png)
*Validating mobility and debris collection efficiency in a controlled sand environment.*

![On-site Testing at Pasir Ris Beach](resources/Pictures/sand-e/testing_onsite_before_actual_event.png)
*Successful field trial at Pasir Ris Beach prior to the official debut.*

**Public Impact:** In **January 2025**, the RC robot made a successful public debut at **Pasir Ris Park**, where it demonstrated its ability to traverse sandy terrain and collect debris during a beach clean-up event. The demonstration was attended by **SUTD leadership, government representatives, and local community members**. The project was featured in the **Straits Times** and received recognition from SUTD for its technical innovation and social impact. By automating manual beach cleaning tasks, Sand‑E demonstrates the potential for **robotics to solve environmental challenges** while reducing labour burden.

### **Demo Day Highlights (Pasir Ris Park)**
<video width="100%" controls preload="metadata" style="border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
  <source src="resources/Videos/sand-e/Demo_day.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **Phase 2: Transition to Autonomy (Active Development)**

The Phase 2 upgrade focuses on evolving the proven Phase 1 chassis into a high-performance autonomous system. This involves a complete overhaul of the electronics and software stack to enable GPS-guided navigation and industrial-grade reliability.

![Phase 2 Electronics Stack](resources/Pictures/sand-e/phase2_electronics.png)
*The upgraded Phase 2 electronics stack featuring high-performance compute and advanced sensor arrays.*

### **High-Performance Compute & ROS 2**
*   **Onboard Processor:** Transitioning from simple microcontrollers to a **Mini PC (Intel Core i9)**. This provides the necessary throughput for real-time sensor processing and ROS 2 orchestration.
*   **Software Stack:** Full implementation of **ROS 2**, enabling modular node-based communication for navigation, safety, and debris collection logic.

### **Navigation & Sensor Fusion**
*   **Localization:** Utilizing a combination of **Multi-constellation GNSS** and **IMU** data.
*   **Sensor Fusion:** Implementing sensor fusion algorithms to merge GPS global positioning with IMU inertial data, ensuring stable localization even in vast, featureless beach environments.
*   **Safety Sensing:** Integrating a **LiDAR** unit for basic obstacle detection and safety, ensuring the robot pauses operation if humans or animals enter its immediate proximity.
*   **Mission Strategy:** Executing an **aerial sweep (grid-based)** pattern based on map coordinates to ensure 100% coverage of the target beach area.

### **Power Systems & Reliability**
*   **Energy Management:** Upgrading to high-density battery packs with calculated power budgets to maximize "lifetime per charge" for long-duration autonomous missions.
*   **Mechanical Hardening:** Iterative design improvements to minimize sand ingress into critical gears and linkages—reducing the need for frequent "deep maintenance."
*   **Autonomy Goal:** The end-goal is a "set-and-forget" system that minimizes human intervention, both in operation and in maintenance.

### 🚀 **Current Roadmap**
We are rapidly advancing toward the first fully autonomous field trial.

| Milestone | Status | Expected Delivery |
|-----------|--------|-------------------|
| i9 Compute & ROS 2 Setup | ✅ Completed | Feb 2026 |
| GPS + IMU Sensor Fusion | 🟡 In Progress | Q1 2026 |
| Autonomous Aerial Sweep Pattern | 🟡 In Progress | Q2 2026 |
| High-Capacity Battery Integration | ⬜ Planned | Q2 2026 |
| Full Autonomous Field Pilot | ⬜ Planned | Q3 2026 |

### 🎯 **Pilot Testing & Real-World Validation**
- Planning systematic pilot deployments at partner beaches to:
  - Refine autonomous navigation and control on **sandy, unstructured environments**
  - Optimize cleaning efficiency and battery life
  - Gather data for continuous system improvement

## Technical Skills & Outcomes

### **Applied Robotics Engineering**
- Evolution of a system through the full product lifecycle: from **pure Mechanical/RC** to **Autonomous Sensing**.
- Expertise in **Mechanical Design** (Fusion360), **Electronics Integration**, and **System Scaling**.
- Practical experience with **ROS 2** for robotics middleware, **SLAM**, and **autonomous navigation** stacks.

### **Cross-disciplinary Team Leadership**
- Successfully coordinated efforts between **SOAR student club**, **SUTD Marketing & Communication teams** and **Polymate alumni startup** to achieve rapid iteration and deployment.

### **Professional Impact**
- **Press Coverage**: Featured in [Straits Times](https://www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand).
- **Stakeholder Presentation**: Validated utility to SUTD leadership and government representatives.
- **Team Development**: Trained multiple team members in robotics workflows, CAD, electronics, and autonomous systems.

### **Deliverables**
✅ Functional robot prototype capable of traversing sandy terrain  \\ 
✅ Field-tested at Pasir Ris Beach with successful public demonstration  \\ 
✅ Press coverage and institutional recognition  \\ 
✅ Technical roadmap for full autonomy and scaling to additional deployments  \\ 

## Key Technical Challenges to Overcome

> **Challenge 1: Robot Stability on Sandy Terrain**
> - Sand creates unstable, shifting ground that compromises standard wheel-based mobility.
> - **Solution**: Designed large-diameter, low-pressure wheels with optimized contact area and adjustable wheel pressure distribution.

> **Challenge 2: Mechanical Debris Separation**
> - Collecting small debris while filtering out shifting sand is mechanically complex in unstructured environments.
> - **Solution**: Developed a modular mesh-based conveyor system and optimized the sweeper geometry to maximize debris lift while allowing sand to pass through.

> **Challenge 3: Transitioning to High-Level Compute**
> - Moving from RC to full autonomy requires significantly more power and processing capability.
> - **Solution**: Integrated a high-performance **Intel i9 Mini PC** and transitioned to **ROS 2**, allowing for complex sensor fusion and grid-based path planning while maintaining modularity.

> **Challenge 4: Sand Ingress and Maintenance**
> - Fine sand particles pose a constant threat to mechanical linkages and gearboxes during extended autonomous runs.
> - **Solution**: Redesigning seals and adopting "low-maintenance" mechanical components to minimize the frequency of robot deep maintenance and ensure reliable autonomous operation.

## Acknowledgements
- **Polymate** — Technical mentorship.
- **SOAR Student Club** — Robotics community support.
- **SUTD DAI Pillar & FABLAB** — Fabrication and chassis support.
- **SUTD Marketing & Communication teams** — assistance with event planning, hosting, and small project funding for public demonstrations.


---

*Sand‑E represents the intersection of **robotics, sustainability, and iterative engineering**. I am currently leading the transition to make this award-winning platform fully autonomous.*
`
};

if (typeof window !== 'undefined') window.PROJECT_sand_e_beach_cleaning_robot = PROJECT_sand_e_beach_cleaning_robot;
