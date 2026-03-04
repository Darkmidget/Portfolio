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
## Overview

Sand‑E is a mission-ready autonomous robot designed to automate beach cleaning on challenging sandy terrain. As **Project Lead**, I spearheaded the transition from a classroom prototype to a high-profile, field-tested system that garnered press coverage in the [Straits Times](https://www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand). The robot addresses critical ecological challenges and labour shortages by automating repetitive cleaning tasks on unstructured outdoor environments.

<!-- {img}
**[What does Sand-E look like?**](#) 
- Show the robot's full chassis with key components labeled (wheels, gripper, sensor array)
- Visual scale reference showing its compact design suitable for beach deployment
- This image demonstrates mechanical design and 3D-printed components
-->

## Role & Core Contributions

### **Project Lead (Technical Direction & Team Leadership)**
- Directed overall technical roadmap from concept to field deployment, coordinating cross-functional teams across mechanical, electronics, and software domains.
- Led team of \_\_ \_\_\_ students to deliver a functional prototype capable of autonomous operation on sandy terrain.
- Managed stakeholder communications with SUTD DAI pillar, SOAR student club, and Polymate alumni startup for resource integration.

### **Mechanical & Electronics Engineering**
- Led **CAD design** in SolidWorks, creating a modular chassis optimized for sandy terrain traversal (large-diameter wheels with low pressure distribution).
  - Successfully **repurposed and modified a mechanical trolley** into a robust mission platform, integrating a vertical sweeper and conveyor-based collection mechanism.
- **Sensor Integration**: Designed mounting systems for LiDAR, cameras, and IMU units, enabling perception stack for obstacle detection and navigation.
- **Embedded Electronics**: Managed integration of microcontrollers, motor drivers, and power distribution system supporting continuous field operation.

> **Key Achievement:** Transformed a basic trolley concept into a deployable robot through mechanical redesign and strategic component selection.

<!-- {img}
**[Inside the robot's mechanical design]**(#) 
- Show CAD renders or 3D prints of key components (wheel assembly, sweeper & conveyor, sensor mount)
- This demonstrates hands-on mechanical engineering and 3D printing expertise
-->

### **Strategic Collaboration & Resource Integration**
- Coordinated cross-pillar collaboration between SUTD DAI, SOAR student club, and Polymate startup to accelerate development.
- Secured mentorship from industry experts and integrated donated/off-the-shelf components to maximize prototyping efficiency.

## Public Demonstration & Impact

In **January 2025**, Sand‑E made a successful public debut at **Pasir Ris Park**, where it demonstrated its ability to traverse sandy terrain and collect debris during a beach clean-up event. The demonstration was attended by **SUTD leadership, government representatives, and local community members**, validating the robot's practical utility.

<!-- {img}
**[Sand-E in action at Pasir Ris Beach]**(#) 
- Show real or high-quality render of the robot deployed at the beach during demonstration
- Include visual context of sandy terrain, debris collection, and team deployment
- This demonstrates real-world deployment experience and public impact
-->

The project was featured in the **Straits Times** and received recognition from SUTD for its technical innovation and social impact. By automating manual beach cleaning tasks, Sand‑E demonstrates the potential for **robotics to solve environmental challenges** while reducing labour burden.

## Current Progress & Roadmap

### 🚀 **Active Development: Autonomous Navigation**
- **Transitioning from teleoperation to full autonomy**: Developing ROS 2-based navigation stack with SLAM and path planning capabilities.
- **Perception Pipeline**: Integrating multi-sensor fusion (camera + LiDAR + IMU) for robust environmental perception on unstructured terrain.
- **Debris Identification**: Exploring computer vision approaches to differentiate debris from natural objects (sand, shells).

<!-- {img}
**[ROS 2 Architecture and Navigation Stack]**(#) 
- System architecture diagram showing sensor inputs, ROS 2 nodes, and control loops
- Visual representation of navigation stack (SLAM, path planning, obstacle avoidance)
- Demonstrates technical depth in robotics software engineering
-->

### 📋 **Implementation Timeline**
| Milestone | Status | Expected Delivery |
|-----------|--------|-------------------|
| ROS 2 Navigation Stack | 🟡 In Progress | Q1 2026 |
| Autonomous Obstacle Avoidance | 🟡 In Progress | Q2 2026 |
| Debris Identification ML Model | ⬜ Planned | Q2 2026 |
| Field Pilot Deployments | ⬜ Planned | Q3 2026 |

## **Planning Process**

A structured planning approach guided Sand‑E from concept to field trials. Key phases and deliverables:

- **Requirements & Use Cases:** Defined operational envelope (beach slopes, sand types, debris sizes), stakeholder needs (speed, throughput, safety), and constraints (transportability, battery life, budget).
- **Concept & Feasibility:** Rapid CAD mockups and off-the-shelf component surveys to validate chassis concepts and topology for sand mobility.
- **Detailed Design & Sizing:** Selected driveline, actuator, and powertrain components using physics-based sizing and margining (powers, torques, gear ratios, battery capacity).
- **Prototype & Iteration:** Built modular subassemblies for quick swap testing (wheel modules, gripper, sensor mast) and ran controlled sandbox experiments.
- **Field Validation & Scaling:** Staged pilot tests at Pasir Ris Park with progressive autonomy, instrumented logging, and stakeholder demos.

Each phase included measurable acceptance criteria (e.g., 80% debris pickup success in a 5 m test strip, sustained 30-minute runtime with mission profile).

## **Motor Specification & Electrical Design**

Below is a concise summary of how motors and electrical subsystems were specified, with representative example values used during prototyping.

- **Drive motors (example configuration):** Brushless DC (BLDC) hub-mounted motors with planetary gearbox.
- **Drive motors (actual prototype):** 12 V DC 795-series motors fitted with a 3-stage planetary gearbox (total reduction ~263:1).
  - Motor type: 12 V DC hobby 795 motor (high-reduction gearing used for torque multiplication)
  - Gear reduction: 263:1 (3-stage planetary)
  - Effect of gearing: gearbox multiplies motor torque by ~263 (mechanical losses apply; expect usable torque reduced by gearbox efficiency, typically 70–90%)
  - Wheel diameter: 300 mm (0.3 m) in current prototype
  - Resulting wheel torque: motor_torque * 263 (example: a small DC motor nominal torque multiplied by 263 provides high stall torque for slow, high-traction crawl)
  - Top speed: gearbox reduces speed substantially — system optimized for low-speed, high-torque operation rather than top speed

Notes: the 795 + 263:1 configuration was chosen to prioritise high wheel torque at low RPM for crawling through loose sand and to simplify control using a 12 V power system. Exact torque figures depend on the specific 795 motor revision and measured motor constants; use bench testing to determine continuous thermal limits and safe operating currents.

- **Controller (prototype):** simple 43A-rated DC motor driver per channel (no ESC). Drive motors were run open-loop without encoders in the prototype.

- **Actuators & Sweeper/Conveyor:** Brush/roller motor for the vertical sweeper and a medium-torque DC gearmotor for the conveyor. The prototype does not use encoders on the drive motors; the sweeper/conveyor are controlled open-loop. Where jam detection is implemented, it is handled via current sensing rather than encoder feedback.

- **Motor controllers & sensing:** The prototype uses simple 43A-rated DC motor drivers (no ESCs or advanced CAN/UART closed-loop motor controllers). Control is implemented via open-loop PWM with current monitoring for stall/overcurrent protection; regenerative braking is disabled for sand environment safety.

- **Battery & power budgeting (prototype):** 12 V nominal battery to match the 12 V drive motors (options: 12 V lead-acid, 3S Li-ion with step-up/regulation as needed, or a 4S Li-ion with regulator depending on final motor voltage tolerance).
  - Typical capacity: 20–30 Ah for longer field trials, smaller packs for short demos.
  - Onboard DC-DC regulators supply lower-voltage rails (5 V, 3.3 V) for sensors and microcontrollers; motor drivers draw directly from the 12 V bus.

- **Electrical safety & filtering:** Inrush limiting, battery management system (BMS) for cell balancing, EMI filtering for sensors (camera/LiDAR), and waterproof connectors with strain relief.

- **Sizing method (how motors were specified):**
  1. Estimate vehicle mass fully loaded (m).
  2. Define desired acceleration and top speed for mission profile.
  3. Compute required tractive force: F = m*a + F_rr + F_slope, where F_rr is rolling resistance on sand (empirically measured or conservatively estimated) and F_slope accounts for grade.
  4. Convert force to torque at wheel: T = F * (wheel_radius).
  5. Add safety margin (typically 1.5–2x) and choose motor/gearbox pair that meets continuous torque and thermal limits.

This approach prioritises reliable continuous operation over aggressive peak performance to avoid overheating when crawling through sand.

## **Design Considerations & Trade-offs**

Key mechanical, electrical, and software trade-offs that shaped Sand‑E's design:

- **Traction vs. Transportability:** Large-diameter, low-pressure wheels improve sand mobility but increase volume and weight for transport. We selected foldable/modular wheel mounts to balance the two.
- **Power vs. Weight:** Higher battery capacity extends runtime but increases mass, which in turn increases traction requirements. We iteratively tuned battery size to balance runtime and mobility.
- **Compute Power vs. Energy Use:** Advanced perception (multi-camera + LiDAR + CNN inference) needs a Jetson-class SBC for performance; we optimized pipelines (lower-resolution models, event-driven sensing) to reduce energy draw in the field.
- **Ingress & Reliability:** Sand and salt require sealed enclosures (IP65+) and sacrificial external covers. Critical connectors were chosen for corrosion resistance and ease of replacement.
- **Sensing Redundancy:** Multi-sensor fusion (LiDAR + GPS + IMU) improves robustness at the cost of integration complexity. We prioritized a minimal viable fusion stack for initial pilots.

## **CAD Images (layman-friendly)**

Add primary CAD render at resources/Pictures/sand-e/cad.png (editor-only tips hidden).

<!--
Suggested images and simple captions (editor-only):

- Hero: resources/Pictures/sand-e/cad.png — "Full assembly showing the chassis, wheels, gripper, and sensor mast."
- Exploded view: resources/Pictures/sand-e/cad-exploded.png — "Exploded parts view to show how major assemblies fit together."
- Close-up: resources/Pictures/sand-e/cad-gripper.png — "Gripper mechanism and actuator mounting detail."

How to add images (editor-only):
- Place high-quality PNG or SVG files in resources/Pictures/sand-e/.
- Use descriptive filenames (e.g., cad.png, cad-exploded.png, cad-gripper.png).
- For the website, include a short caption (1–2 sentences) that explains what the image shows in plain language.

Editor-only primary image placeholder:
- resources/Pictures/sand-e/cad.png

-->

## **Testing & Validation Plan**

- **Bench tests:** Motor load testing, thermal profiling, current draw validation, and sweeper/conveyor cycle life tests (throughput, wear, and mesh/clogging validation).
- **Sandbox tests:** Controlled sand boxes with adjustable compaction to validate mobility, wheel slip characteristics, and motor thermal behaviour.
- **Instrumented field trials:** Deploy with data logging enabled (ROS 2 bag files) to evaluate SLAM robustness, navigation reliability, and debris pick success rates.
- **User/Stakeholder trials:** Observe human team workflows during public demos and collect feedback for ergonomics and operational constraints.

These tests form a feedback loop that informs iterative changes to gearing, wheel design, and perception algorithms.

### 🎯 **Pilot Testing & Real-World Validation**
- Planning systematic pilot deployments at partner beaches to:
  - Refine AI perception and navigation on **sandy, unstructured environments**
  - Optimize cleaning efficiency and battery life
  - Gather data for continuous system improvement

## Technical Skills & Outcomes

### **Hands-on Robotics Engineering**
- Industry-level proficiency in **mechanical CAD design** (Fusion360), **3D printing** (FDM), and **embedded electronics** integration.
- Practical experience with **ROS 2** for robotics middleware, **SLAM**, and **autonomous navigation** stacks.

### **Cross-disciplinary Team Leadership**
- Successfully coordinated efforts between *SOAR student club**, **SUTD Marketing & Communication teams** and **Polymate alumni startup** to achieve rapid iteration and deployment.

### **Professional Impact**
- **Press Coverage**: Featured in [Straits Times](https://www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand) for technical innovation and social impact.
- **Stakeholder Engagement**: Presented to SUTD leadership and government representatives, demonstrating ability to communicate technical work to diverse audiences.
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

> **Challenge 2: Debris Differentiation**
> - Distinguishing trash from natural objects (seashells, seaweed, sand) requires robust vision systems.
> - **Current Approach**: Developing CNN-based classification pipeline with transfer learning from synthetic training data.

> **Challenge 3: Limited Computing Resources**
> - Field deployments require power-efficient computing for onboard autonomy.
> - **Solution**: Optimized perception and navigation algorithms for edge deployment on embedded hardware (NVIDIA Jetson/Arduino).

## Acknowledgements

This project was a testament to **collaborative innovation**, made possible through:
- **Polymate** — Technical mentorship and resource integration.
- **SOAR Student Club** — Robotics community support.
- **SUTD Marketing & Communication teams** — assistance with event planning, hosting, and small project funding for public demonstrations.
- **FABLAB** — provided fabrication machinery, workshop access, and technical expertise during prototyping and assembly.
- **SUTD DAI Pillar** — initial trolley design of the chassis.


---

*Sand‑E represents the intersection of **robotics, sustainability, and impact-driven engineering**. As the platform matures, I'm excited to contribute my robotics expertise to solve real-world problems in autonomous systems and environmental technology.*
  `
};
if (typeof window !== 'undefined') window.PROJECT_sand_e_beach_cleaning_robot = PROJECT_sand_e_beach_cleaning_robot;
