const PROJECT_linear_regulator_boost_converter = {
  id: "linear-regulator-boost-converter",
  title: "Linear Regulator & Boost Converter",
  status: "in-progress",
  category: "Electronics",
  tags: ["Power Electronics", "Simulation", "Linear Regulator", "Boost Converter", "LTSpice", "PCB"],
  thumbnail: "",
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

This ongoing electronics project covers the simulation, design and prototyping of two power-supply stages:

- A precision linear voltage regulator (LDO-style) focusing on low-noise, good transient response and thermal design.
- A switching boost converter to step up a lower battery voltage to a stable rail while optimizing efficiency and stability.

## Goals

- Simulate regulator and converter using circuit simulation tools.
- Design stable compensation networks and PCB layout for thermal and EMI control.
- Build and test prototypes; measure efficiency, ripple, load regulation and thermal performance.

## Milestones

1. Schematic and initial LTspice simulation for the linear regulator.
2. Schematic and control loop design for boost converter; verify stability and transient response in simulation.
3. PCB layout, fabrication and assembly.
4. Lab testing and iterative improvements.

## Notes

- This entry will be updated with schematics, BOM, test results and firmware (if needed) as the project progresses.
  `

};
if (typeof window !== 'undefined') window.PROJECT_linear_regulator_boost_converter = PROJECT_linear_regulator_boost_converter;
