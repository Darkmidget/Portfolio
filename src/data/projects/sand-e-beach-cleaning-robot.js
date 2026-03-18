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
2.  **Phase 2 (Active Development):** Integration of high-level autonomy, sensor fusion (LiDAR/IMU), and ROS 2-based navigation.

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

Currently, we are upgrading the proven Phase 1 chassis into a fully autonomous system. This involves a modular upgrade of the electronics stack to include perception and high-level compute.

### **Autonomy Upgrades**
- **Hardware Integration:** Mounting systems for **LiDAR** and **IMU** units to enable environmental awareness.
- **Onboard Compute:** Transitioning control from a simple RC receiver to an embedded processor (Raspberry Pi/CPU) for real-time navigation.
- **Software Stack:** Developing a **ROS 2-based** navigation stack with SLAM and path planning capabilities.
- **Sensing Redundancy:** Sensor fusion (LiDAR + IMU) improves robustness at the cost of integration complexity. We prioritized a minimal viable stack for initial pilots.

### 🚀 **Current Roadmap**
We are transitioning from Phase 1's teleoperation to Phase 2's full autonomy.

| Milestone | Status | Expected Delivery |
|-----------|--------|-------------------|
| ROS 2 Navigation Stack | 🟡 In Progress | Q1 2026 |
| Autonomous Obstacle Avoidance | 🟡 In Progress | Q2 2026 |
| Field Pilot Deployments | ⬜ Planned | Q3 2026 |

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

> **Challenge 3: Limited Computing Resources**
> - Field deployments require power-efficient computing for onboard autonomy.
> - **Solution**: Optimized navigation and control algorithms for edge deployment on embedded hardware (CPU/Arduino).

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
