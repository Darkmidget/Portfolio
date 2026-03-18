const PROJECT_autonomous_navigation_predictive_control = {
  id: "autonomous-navigation-predictive-control",
  title: "Autonomous Navigation & Predictive Control",
  status: "completed",
  category: "Work / Internship",
  tags: ["ROS2 Humble", "MPPI", "Model Predictive Control", "Groot2", "PyTrees", "Gazebo", "Digital Twin", "Perception", "Behavior Trees", "3D Point Cloud Processing", "Semantic Mapping", "Frontier Navigation", "Hardware Integration"],
  thumbnail: "resources/Pictures/autonomous-navigation-predictive-control/cover.png",
  date: "2025",
  summary: "High-performance navigation stack using ROS2 and MPPI with behavior-tree decision logic and a Gazebo digital twin.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: ""
  },
  content: `
## The Mission: Redefining Early-Stage Robotics at Griffin Labs

My journey began as an R&D Intern at **Griffin Labs**, stepping into a project where the robot was still on the drawing board. Tasked with developing a high-performance autonomy stack for a specialized (and currently confidential) application, I learned that in cutting-edge robotics, you don’t wait for hardware—you build the future in parallel.

### 1. The Digital Twin: Bridging the Prototype Gap
With the physical hardware still being assembled, I initiated a **simulation-first development strategy**. I built a high-fidelity **Gazebo Digital Twin**, integrating raw STL sketches from the hardware team before the first bolt was even tightened.
- **Key Insight**: Simulation isn't just for testing; it’s a design tool. By mapping out the **IMU and sensor bridges** virtually, I was able to tell the hardware team exactly where the sensors needed to be mounted for optimal feedback, accelerating our overall development timeline by months.

### 2. Giving the Robot "Eyes": Perception & Frontier Autonomy
Once the virtual environment was stable, the goal was clear: **Total Autonomy.** I implemented a **Frontier Exploration** system that allowed the robot to navigate and map confined, unknown environments without human intervention.
- **Semantic Intelligence**: I integrated a perception pipeline that leveraged **cloud-based semantic data**, allowing the robot to not just "see" obstacles, but to **understand context**. It could identify specific work zones and determine exactly how to orient itself for complex manipulation tasks.

### 3. Solving the Hard Problems: 3D Point Cloud Manipulation
One of my most significant technical challenges was developing a way for the robot to work with **inner surfaces**. I engineered a solution that fused **3D Point Cloud scans** with semantic centroids:
- **Centroid-Based Tracing**: I developed an algorithm that meshed point clouds and identified "inner surfaces" by filtering surface normals that pointed toward the semantic centroid.
- **Precision Pathing**: This allowed the robotic arms to automatically generate and follow tracing paths in spaces too narrow for manual programming.

### 4. The Shift to Reality: Reliability 
The most valuable part of my internship came when I transitioned my "perfect" simulation code onto physical hardware. I quickly realized that a simulation that works 100% of the time often leads to hardware that works only 50%.
- **The Mentor's Challenge**: My senior developer, **Charan** & **Roy** , challenged me to move beyond "functional" code to **"reliable" code**. He emphasized that in professional robotics, **Safety, predictability and repeatability** are everything.
- **Stress-Testing the Real World**: I spent the latter half of my internship recreating edge cases and debugging the hardware-software bridge to ensure the robot could reliably navigate tight, narrow spaces (like the test toilet environments) under any condition.

### Current State & Key Learnings
- **The Power of Simulation-Driven Design**: Reducing hardware risk via early digital prototyping.
- **The Reliability Mindset**: Learning that "working once" is just the start; "working a thousand times" is the goal.
- **Confidential Reality**: While full media and specific technical details are under NDA until **April 2026**, the algorithms I developed are now integrated into Griffin Labs' core autonomy stack.

## Tech Stack
**ROS2 Humble, Gazebo, Python, MPPI / MPC, 3D Point Cloud Processing, Semantic Mapping, Behavior Trees (Groot2/PyTrees)**
`};
if (typeof window !== 'undefined') window.PROJECT_autonomous_navigation_predictive_control = PROJECT_autonomous_navigation_predictive_control;

