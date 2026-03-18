const PROJECT_linear_regulator_boost_converter = {
  id: "linear-regulator-boost-converter",
  title: "Linear Regulator & Boost Converter",
  status: "in-progress",
  category: "Electronics",
  tags: ["Power Electronics", "Simulation", "Linear Regulator", "Boost Converter", "LTSpice", "PCB"],
  thumbnail: "resources/Pictures/linear-regulator-boost-converter/cover.png",
  date: "2026",
  summary: "Design, simulate and build a linear voltage regulator and a boost converter for a compact power supply. Focus on stability, efficiency and PCB implementation.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Project Overview

In this project, I am designing, simulating, and building a precision linear voltage regulator system. My primary task was to create a **6V to 5V linear regulator**, while working closely with my teammate **Rooney**, who is experienced in PCB design and is focused on the **4V to 5V** regulator stage. Our final objective is to combine both designs into a single, high-performance power supply unit.

## Circuit Simulation

The first step involved simulating the circuit to ensure stability and proper voltage regulation. Below is the simulation of the 6V to 5V regulator.

![6V to 5V Linear Regulator Simulation](resources/Pictures/linear-regulator-boost-converter/6v_to_5v_linear_regulator_multisim.png)

## PCB Design & Iteration 1

We have completed the first iteration of the integrated design, focusing on a **4-layer PCB stackup** to handle high current loads and manage heat effectively.

### 4-Layer Stackup Strategy
The PCB is organized to optimize signal integrity, power delivery, and thermal performance:
- **Layer 1:** Signal traces and primary components.
- **Layer 2:** Dedicated common ground plane for noise reduction and stable reference.
- **Layer 3:** **Voltage Plane (5V and 6V)**. This layer acts as an expansive thermal heat relief and copper pour area, strategically designed to dissipate heat away from the IC chips, especially for traces handling high current.
- **Layer 4:** **Power Traces (5V and 6V)**. Dedicated routing for the regulated voltage rails to ensure clean delivery.

![2D View of Initial Iteration](resources/Pictures/linear-regulator-boost-converter/4_layer_pcb_2D_A.png)
![3D View of Initial Iteration](resources/Pictures/linear-regulator-boost-converter/4_layer_pcb_3D_A.png)

### Thermal Management & Reliability
Heat generation is a critical factor when dealing with higher power loads and current. Our design includes several features to protect the IC chips from premature failure:
- **Thermal Vias and Holes:** Strategically placed in areas of massive heat generation to transmit heat through the layers.
- **Thermal Pads and Relief Pads:** Designed to wick heat away from the ICs, preventing overheating and ensuring long-term reliability.
- **Copper Pours:** Expansive copper pours are used on the 6V and 5V voltage rails to act as heat sinks, providing additional surface area for cooling.

These considerations ensure that the regulator can handle higher current loads without compromising the integrity of the electronic components.
  `

};
if (typeof window !== 'undefined') window.PROJECT_linear_regulator_boost_converter = PROJECT_linear_regulator_boost_converter;
