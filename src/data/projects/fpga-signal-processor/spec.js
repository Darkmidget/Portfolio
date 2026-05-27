const PROJECT_fpga_signal_processor = {
  id: "fpga-signal-processor",
  title: "FPGA Random Number Generator & Game of Life (V1 & V2)",
  status: "completed",
  category: "Electronics",
  tags: ["FPGA", "Verilog", "C++", "FeatherWing M4", "UART", "SPI", "Conway's Game of Life", "CAD"],
  thumbnail: "resources/Pictures/fpga-signal-processor/rendered.png",
  date: "2026",
  summary: "Design and implement an FPGA-based hardware random seed generator for Conway's Game of Life. V1 uses a FeatherWing M4 and C++ graphics via UART. V2 is a fully integrated hardware-accelerated Verilog implementation running natively on the FPGA.",
  featured: false,
  links: {
    github: "https://github.com/Darkmidget/PRNG_V2",
    demo: "",
    other: "",
  },
  specs: {
    "Languages": "Verilog, C++, PowerShell",
    "Hardware": "FPGA Board, FeatherWing M4, TFT Display",
    "Toolchain": "Xilinx Vivado, Arduino IDE / C++, Fusion 360",
    "Interfaces": "UART, Custom SPI",
    "Status": "Completed"
  },
  contentFile: "src/data/projects/fpga-signal-processor/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_fpga_signal_processor = PROJECT_fpga_signal_processor;
