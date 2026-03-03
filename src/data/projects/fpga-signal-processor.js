const PROJECT_fpga_signal_processor = {
  id: "fpga-signal-processor",
  title: "FPGA Signal Processing Project",
  status: "in-progress",
  category: "Electronics",
  tags: ["FPGA", "Verilog", "VHDL", "RTL", "Simulation", "Vivado", "Quartus"],
  thumbnail: "",
  date: "2026",
  summary: "Design, implement and test an FPGA-based signal processing chain — RTL, simulation, synthesis and board bring-up.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Project Overview

This ongoing project explores building an FPGA-based signal processing pipeline. Work includes HDL development, simulation, synthesis, timing closure, and board bring-up on an FPGA development board.

## Goals

- Implement core DSP blocks (FIR/IIR filters, decimators/interpolators)
- Create AXI/stream interfaces and integrate with a soft-core or lightweight CPU
- Validate designs via simulation and on-hardware testing
- Optimize for timing, area, and power

## Milestones

1. Define system requirements and select target FPGA board.
2. Implement and simulate HDL modules (Verilog/VHDL) with testbenches.
3. Synthesize and run timing analysis; iterate for timing closure.
4. PCB/board bring-up (if applicable) and on-hardware measurements.

## Notes

- Will include schematics, example testbenches, synthesis reports, and lab test data as the project progresses.
  `

};
if (typeof window !== 'undefined') window.PROJECT_fpga_signal_processor = PROJECT_fpga_signal_processor;
