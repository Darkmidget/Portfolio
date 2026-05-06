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
  content: `
## Project Overview & Software Stack

The primary objective of this project was to design, simulate, and physically manufacture a high-current, dual-rail discrete linear voltage regulator. Rather than using off-the-shelf integrated regulator ICs, this project was built from discrete components to deeply explore power control theories, thermodynamic limits, and robust safety mechanisms. 

All circuit logic, transient analysis, and thermal modeling were extensively simulated using **LTSpice** before committing to physical PCB manufacturing. This software-first approach ensured that the theoretical models were sound before we tackled the physical thermodynamic realities.

## Core Design Specifications

The system is engineered to support two critical voltage rails, managing a theoretical continuous draw of **13A** per rail.

| Parameter | 10V Rail Specification | 5V Rail Specification |
| :--- | :--- | :--- |
| **Input Voltage ($V_{in}$)** | 12 V | 6 V |
| **Output Voltage ($V_{out}$)** | 10 V | 5 V |
| **Maximum Current ($I_{max}$)** | 13 A | 13 A |
| **Reference Voltage ($V_{ref}$)** | 5.8 V | 2.495 V |

Handling this amount of power safely using a linear topology (where $P_{dissipated} = (V_{in} - V_{out}) \times I_{load}$) required a meticulous approach to component selection, control logic, and physical PCB layout.

## Architecture & Component Selection

Designing a discrete regulator requires carefully chosen components that form a negative feedback loop to stabilize the output voltage.

### The Core Components
- **Error Amplifier:** An operational amplifier acts as the brain. It continuously compares the feedback voltage (from the load) against a highly stable reference.
- **Voltage Reference:** A **TL431** adjustable shunt regulator was selected to provide a precise, temperature-stable comparison level (5.8V and 2.495V).
- **Pass Transistor:** In the final iteration, a heavy-duty **PMOS Transistor (IRF4905S)** was chosen as the series regulating element to handle the massive current.

---

## Iteration 1: The NMOS Proof of Concept

Every robust engineering project starts with functional validation. Iteration 1 utilized an **NMOS transistor** as the primary pass element to test the fundamental error-amplifier logic.

### Why NMOS? (Pros & Cons)
* **Pros:** NMOS transistors typically have lower $R_{DS(on)}$ (on-resistance) and are generally cheaper and faster than PMOS equivalents.
* **Cons (The Technical Hurdle):** When used as a high-side linear regulator, the load is connected to the Source (SO) pin. As the transistor turns on, the source voltage rises. To keep the transistor conducting (keeping $V_{GS} > V_{th}$), the Gate voltage must be pushed significantly *higher* than the Source. If our input is 12V and we want an output close to that, the gate would need to be driven to 15V-20V.

**Conclusion:** The NMOS logic worked in simulation, but the necessity of pushing the gate higher than the source required complex charge pumps or bootstrap capacitors. This introduces significant complexity and unacceptable points of failure for a robust power supply.

![Iteration 1 - NMOS Circuit](resources/Pictures/linear-regulator-boost-converter/1_nmos_6vto5v.png)
*Figure: LTSpice circuit drawing of the initial NMOS configuration. The schematic highlights the error amplifier and the complex gate-drive requirements, illustrating how the control circuitry struggles to provide adequate gate voltage without a secondary, higher voltage rail.*

![Iteration 1 - PCB Layout](resources/Pictures/linear-regulator-boost-converter/1_2D_pcb_4_layer.png)
![Iteration 1 - 3D View](resources/Pictures/linear-regulator-boost-converter/1_3D_pcb_4_layer.png)
*Figures: Iteration 1 PCB. This early 4-layer design proved the fundamental logic but highlighted the drive-complexity limitations.*

---

## Iteration 2: Engineering for Production (PMOS & Bang-Bang)

To resolve the NMOS gate-drive complexity, Iteration 2 completely overhauled the architecture. The pass element was switched to a **PMOS transistor**. 

### Why PMOS Over NMOS?
A **PMOS transistor** configured as a high-side switch has its source connected to the input voltage (e.g., 12V). To turn it *on*, the gate simply needs to be pulled *lower* than the source (e.g., $V_{GS}$ < -4V). The op-amp or comparator can easily pull the gate toward ground to turn the transistor fully on. This elegantly eliminates the need for any complex voltage boosting circuitry and fundamentally increases the reliability of the system. Additionally, PMOS allows for excellent Low Dropout (LDO) performance, as it can conduct even when the input and output voltages are very close, constrained only by $R_{DS(on)}$.

### The Bang-Bang Control Topology
The most significant design evolution was abandoning traditional linear PID control in favor of a **Bang-Bang configuration** (hysteresis controller). 

* **Why Bang-Bang? (Pros & Cons)**
  * **Pros:** It is **unconditionally stable**. Traditional PID loops require complex frequency compensation and are highly susceptible to oscillations under varying loads. A bang-bang controller simply oscillates between an upper and lower threshold (fully ON or fully OFF), making it bulletproof against load transients.
  * **Cons:** The harsh ON/OFF switching generates significant high-frequency noise and Electromagnetic Interference (EMI), which can fail regulatory approval.

### Aggressive EMI Dampening for Faster Production Approval
To solve the EMI cons of the bang-bang topology, we integrated an aggressive dampening strategy. The circuit features a dense network of specifically calculated capacitors and resistors (RC snubbers). 

* **Why and How:** These components do not regulate voltage; they are there strictly to dampen the harsh switching signal edges and absorb inductive kickback. By removing parasitic oscillations and smoothing the ripple, we account for strict EMI standards. This ensures that in the future, these circuits can be easily approved by regulatory bodies (FCC/CE) and put into mass production much faster and easier.

![Iteration 2 - PMOS Circuit](resources/Pictures/linear-regulator-boost-converter/2_pmos_circuit.png)
*Figure: The revised Iteration 2 circuit drawing in LTSpice utilizing the PMOS pass element and the bang-bang control loop. Notice the simplified gate drive: the comparator can directly pull the PMOS gate low to turn it on, and the dense RC snubber networks placed around the switching nodes to mitigate EMI.*

### Transient Analysis & Simulation Outcomes
Before committing to hardware, we heavily relied on LTSpice to validate the bang-bang control loop and the effectiveness of the RC snubbers. 

![Transient Analysis](resources/Pictures/linear-regulator-boost-converter/2_circuit_sim_transient.png)
*Figure: LTSpice transient analysis. The simulation outcomes display the system's robust response to dynamic load changes.*

**Simulation Insights:**
- **Startup Transient:** The simulation confirmed a smooth and controlled voltage ramp-up without dangerous overshoot that could damage sensitive loads.
- **Ripple Voltage:** Due to the bang-bang nature, some output ripple is inevitable. The simulation helped us precisely tune the hysteresis thresholds to keep the peak-to-peak ripple well within acceptable limits for both the 10V and 5V rails.
- **EMI Dampening Verification:** The graph proves that the RC dampening network successfully rounds off the harsh switching edges, dampening the output ripple and entirely eliminating high-frequency, EMI-inducing oscillations.

---

## Final Hardware Integration: Iteration 2A & 2B

To mitigate manufacturing risks, the final physical realization of Iteration 2 was branched into two sub-iterations.

### Iteration 2A: The Flagship Design
Iteration 2A is the full integration version, featuring comprehensive safety suites:
- **Active Thermal Protection (Thermo):** Continuous temperature monitoring.
- **Amp Limiter Safety Cutoff:** A current-sense circuit that is hard-calibrated to physically cut off the circuit at approximately **30 Amps**. 
  * **Why:** If a dead-short occurs, pushing 30A+ through the board would instantly melt the traces or start a fire. The amp limiter forces the system to stop working for absolute safety.

![Iteration 2A - 2D Layout](resources/Pictures/linear-regulator-boost-converter/2A_2D_pcb_4_layer.png)
![Iteration 2A - 3D View](resources/Pictures/linear-regulator-boost-converter/2A_3D_pcb_4_layer.png)
*Figures: Iteration 2A PCB (Flagship). The 2D drawing showcases the dense component placement and massive polygon pours required for the 30A safety limiters and EMI dampening networks. The 3D view illustrates the scale of the power components and the heavy-duty connectors meant for high-current throughput.*

### Iteration 2B: The Strategic Backup
Iteration 2B serves as a fallback. It omits the complex, highly sensitive safety limiters.
* **Why:** If the intricate amp-limiter logic failed during manufacturing or initial testing, Iteration 2B guaranteed we still had a functional, albeit less protected, power delivery system.

![Iteration 2B - 2D Layout](resources/Pictures/linear-regulator-boost-converter/2B_2D_pcb_4_layer.png)
![Iteration 2B - 3D View](resources/Pictures/linear-regulator-boost-converter/2B_3D_pcb_4_layer.png)
*Figures: The Iteration 2B backup PCB drawing. With the complex safety logic removed, the 2D and 3D views highlight a much more streamlined routing strategy, focusing purely on raw power delivery.*

---

## Physical Architecture and Thermodynamics

Managing the extreme heat generated by a linear regulator at high currents dictated the entire physical form factor.

### The Massive Circular Footprint
To maximize passive surface-area cooling, the PCB was designed as a huge circular board. The physical footprint measures approximately **40cm by 40cm** (safely under the max 50cm x 50cm constraint). 
* **Why:** The enormous surface area provides the raw physical mass required to spread the thermal load across the copper planes before the components reach critical failure temperatures.

### 4-Layer Stackup and Copper PA Holes
We utilized a robust 4-layer PCB stackup:
1. **Layer 1 (Top):** Component placement and critical logic routing.
2. **Layer 2 (Internal):** Dedicated common ground plane for noise reduction.
3. **Layer 3 (Internal):** Voltage Planes (5V and 6V) acting as massive internal thermal heat sinks.
4. **Layer 4 (Bottom):** High-current power traces.

* **How Heat is Handled:** Heat is generated on Layer 1. To transfer this intense heat down to the internal planes and the bottom layer, the design utilizes **Copper PA Holes** (Thermal Vias). These heavily plated-through holes act as vertical copper heat pipes. A large physical heat sink is eventually attached directly to the bottom of the PCB to radiate this transferred heat into the ambient air.

---

## Experimental Results & Final Findings

Physical testing of Iteration 2A yielded critical real-world data regarding thermodynamics versus electrical capability.

### Measured Electrical Efficiency
| Parameter | 10V Rail Result | 5V Rail Result |
| :--- | :--- | :--- |
| **Measured Output** | 9.94 V | 4.80 V |
| **Voltage Error** | -0.06 V | -0.20 V |
| **Efficiency (Estimated)** | **82.6%** | **79.8%** |

### Critical Performance Outcomes & Lessons Learned

1. **Unprecedented Cost Efficiency:** Through careful component selection, the total cost of manufacturing the final Iteration 2 board was kept to an incredibly low **$7.50 USD**.
2. **The Thermal Bottleneck:** Physical stress testing revealed a physical flaw: the PCB itself struggled to transfer heat through the Copper PA holes to the attached bottom heatsink fast enough under extreme loads. 
3. **Proven Passive Resilience:** Despite the thermal transfer bottleneck, the system proved incredibly robust. It safely and continuously pushed **8 Amps** of current through the output for at least **5 straight minutes** purely on passive cooling without any components destroying themselves.
4. **The 30A Theoretical Maximum:** Transient and thermal simulations dictate that if given more budget or opportunity to resolve the physical thermal bottleneck—specifically by integrating an **active fan cooling system**—the electrical circuitry is perfectly capable of safely pushing current all the way up to its **30 Amp safety cutoff limit**.

### Final Summary
| Feature | Detailed Specification |
| :--- | :--- |
| **Software Used** | LTSpice for simulation and transient analysis |
| **Physical Dimensions** | Massive 40cm x 40cm footprint (Constraint: Max 50cm x 50cm) |
| **Total Build Cost** | ~$7.50 USD (Iteration 2 final) |
| **Safety Architecture** | Active thermal monitoring and a hard 30A Amp-Limiter cutoff |
| **Control Logic** | PMOS-driven, unconditionally stable Bang-Bang configuration |
| **EMI Mitigation** | Extensive RC dampening network for fast production approval |
| **Passive Performance** | 8A sustained for > 5 minutes without destruction |
| **Active Performance** | Capable of 30A maximum limit with forced-air active cooling |
  `
};
if (typeof window !== 'undefined') window.PROJECT_linear_regulator_boost_converter = PROJECT_linear_regulator_boost_converter;
