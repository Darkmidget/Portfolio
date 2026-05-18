const PROJECT_fpga_signal_processor = {
  id: "fpga-signal-processor",
  title: "FPGA Random Number Generator & Game of Life",
  status: "completed",
  category: "Electronics",
  tags: ["FPGA", "Verilog", "C++", "FeatherWing M4", "UART", "Conway's Game of Life", "CAD"],
  thumbnail: "resources/Pictures/fpga-signal-processor/cadd_design_of_prototype.jpg",
  date: "2026",
  summary: "Design and implement an FPGA-based hardware random seed generator connected via UART to a FeatherWing M4, running optimized C++ Conway's Game of Life graphics inside a CAD prototype enclosure.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Languages": "Verilog, C++",
    "Hardware": "FPGA Board, FeatherWing M4, TFT Display",
    "Toolchain": "Xilinx Vivado, Arduino IDE / C++, Fusion 360",
    "Interfaces": "UART Serial Protocol",
    "Status": "Completed"
  },
  contentFile: "src/data/projects/fpga-signal-processor/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_fpga_signal_processor = PROJECT_fpga_signal_processor;
