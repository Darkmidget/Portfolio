## The Mission: Redefining Early-Stage Robotics at Griffin Labs

My journey began as an R&D Intern at **Griffin Labs**, stepping into a project where the robot was still on the drawing board. Tasked with developing a high-performance autonomy stack for a specialized (and currently confidential) application, I learned that in cutting-edge robotics, you don’t wait for hardware—you build the future in parallel.

### 1. Building the Digital Twin: Simulation-Driven Hardware Optimization
**Summary:** Faced with a hardware-less start, I co-developed a Gazebo digital twin and toilet simulation to resolve sensor placement ambiguities. This simulation-first approach allowed us to experiment with LiDAR positioning in a 3D environment, securing the director's final approval for the physical mounting configuration before the robot was even built.

- **CAD-to-Simulation Pipeline:** Using initial CAD drawings provided by the full-time engineering team, I worked with a fellow intern to build a functional **Gazebo Digital Twin**. While they converted the robot's CAD into a Gazebo model, I focused on creating the **virtual toilet simulation**, modeling the tight workspace constraints.
- **3D Sensor Optimization:** We combined our work to test various LiDAR mounting positions. By iterating in simulation, we ensured the sensors could capture all critical toilet features without blind spots.
- **Informing the Final Build:** Our 3D environment experiments finalized the hardware layout. The director approved the mounting points based on our simulation results, allowing the team to proceed with the physical build while I transitioned to developing the core autonomy stack.

### 2. Giving the Robot "Eyes": Perception & Frontier Autonomy
Once the virtual environment was stable, the goal was clear: **Total Autonomy.** The objective was to enable the robot to autonomously clean a toilet given a generic prompt like *"clean a toilet at this specific location."*

- **Autonomous Feature Discovery**: To achieve this, the first step was for the robot to identify the unique layout and features of the environment. I implemented a system where the robot identifies the number of **toilet bowls, urinals, and sinks** that require cleaning.
- **Frontier Exploration**: I utilized a **greedy approach and frontier exploration** within the defined toilet boundaries. The robot would autonomously navigate the unknown space, identifying "frontiers" (the boundary between known and unknown areas) to systematically map the entire room and locate all targets.
- **Semantic Intelligence**: I integrated a perception pipeline that leveraged **cloud-based semantic data**, allowing the robot to not just "see" obstacles, but to **understand context**. It could identify specific work zones and determine exactly how to orient itself for complex manipulation tasks.

![Simulation Run for Exploring toilet](resources/Pictures/toilet-cleaning-robot/simulation_run_for_exploring_toilet.jpg)
*Initial frontier exploration run to map the toilet environment and identify floor boundaries.*

![Simulation run for Exploring toilet 2](resources/Pictures/toilet-cleaning-robot/simulation_run_for_exploring_toilet_2.jpg)
*Advanced mapping phase where the robot identifies key fixtures like toilet bowls and urinals for task prioritization.*


### 3. Strategic Positioning: Mission-Oriented Navigation
Once the fixtures are identified, the robot must determine the optimal stance to perform its cleaning tasks. Finding a basin is one thing; positioning the base so the robotic arms have the necessary reach and leverage is the real challenge.

- **AI-Driven Point of Interest (POI) Detection**: I implemented a workflow where the robot uses **Cloud-based AI (Claude)** to process visual data and identify key "mission points" that require attention. 
- **Optimal Stance Calculation**: To ensure successful manipulation, I developed a positioning algorithm that identifies the "sweet spot" in front of each task. The robot navigates to a pose that aligns its body and arms perfectly with the target fixture, preventing self-collision and maximizing arm workspace.
- **Multi-Mission Workflow**: I created a specific workflow to manage the transitions between these points of interest. This allows the robot to autonomously sequence its movements from one basin to the next, maintaining operational efficiency throughout the entire cleaning cycle.

<div class="video-item">
  <video controls loop muted>
    <source src="resources/Videos/toilet-cleaning-robot/simulated_navigation_from_basin_to_basin.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Simulated Navigation from Basin to Basin: Autonomous navigation between mission-critical points of interest, demonstrating strategic positioning for arm-based manipulation.</div>
</div>


### 4. Precision Arm Manipulation: Inner Surface Cleaning & Toolpath Generation
**Summary:** Once positioned, the robot must execute the actual cleaning. I developed a manipulation pipeline that allows the robot to identify and clean the inner surfaces of toilet bowls, urinals, and basins, regardless of their shape, size, or 3D orientation.

- **Dynamic Surface Identification**: The robot correctly identifies the inner surface of the target fixture using its 3D perception stack. This process is robust to various geometries and positions in the 3D workspace.
- **End-Effector Aware Tracing**: The system accounts for the specific tool (end-effector) equipped for different surfaces. It generates a precise toolpath that traces the surface, reaching into every corner and covering every edge.
- **High-Coverage Cleaning**: The goal of the pipeline is to achieve a minimum of **95% surface coverage**. As long as the area is within the reach of the robotic arms, the system will attempt to clean every spot, ensuring high-quality results across diverse fixtures.

![Toolpath for Urinal Cleaning](resources/Pictures/toilet-cleaning-robot/toolpath_2_clean_for_urinal.jpg)
*Visualization of the generated toolpath for cleaning the inner surface of a urinal, ensuring total coverage of the interior geometry.*

<div class="video-item">
  <video controls loop muted>
    <source src="resources/Videos/toilet-cleaning-robot/simulated_arm_cleaning_basin_FFx8.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Simulated Arm Cleaning Basin (X8 Fast Forward): Simulation demonstrating the robotic arm tracing the inner surface of a basin, adapting its movement based on the specific end-effector and fixture shape.</div>
</div>


### 5. The Shift to Reality: Reliability 
The most valuable part of my internship came when I transitioned my "perfect" simulation code onto physical hardware. I quickly realized that a simulation that works 100% of the time often leads to hardware that works only 50%.
- **The Mentor's Challenge**: My senior developer, **Charan** & **Roy** , challenged me to move beyond "functional" code to **"reliable" code**. He emphasized that in professional robotics, **Safety, predictability and repeatability** are everything.
- **Stress-Testing the Real World**: I spent the latter half of my internship recreating edge cases and debugging the hardware-software bridge to ensure the robot could reliably navigate tight, narrow spaces (like the test toilet environments) under any condition.

<div class="video-item">
  <video controls loop muted>
    <source src="resources/Videos/toilet-cleaning-robot/reality_localisation_Navigation_FFx8.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Reality Localization & Navigation (X8 Fast Forward): Testing the autonomy stack on physical hardware, ensuring reliable navigation in tight toilet environments.</div>
</div>

### Current State & Key Learnings
- **The Power of Simulation-Driven Design**: Reducing hardware risk via early digital prototyping.
- **The Reliability Mindset**: Learning that "working once" is just the start; "working a thousand times" is the goal.
- **Confidential Reality**: While full media and specific technical details are under NDA until **April 2026**, the algorithms I developed are now integrated into Griffin Labs' core autonomy stack.

## Tech Stack
**ROS2 Humble, Gazebo, Python, MPPI / MPC, 3D Point Cloud Processing, Semantic Mapping, Behavior Trees (Groot2/PyTrees), Claude AI Integration**
