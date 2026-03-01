const PROJECT_self_powered_iot_forest_monitoring_sensor = {
  id: "self-powered-iot-forest-monitoring-sensor",
  title: "Self-Powered IoT Forest Monitoring Sensor",
  status: "completed",
  category: "Hardware",
  tags: [
    "IoT",
    "RF",
    "Energy Harvesting",
    "Materials",
    "3D Printing",
    "Composite",
    "PETG"
  ],
  thumbnail: "",
  date: "2026",
  summary:
    "Modular self-powered IoT sensor for off-grid forest monitoring with low-frequency RF transmission and a PETG + CaCO3 composite enclosure.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: ""
  },
  content: `
## Project Overview

Self-Powered IoT Forest Monitoring Sensor

This project developed a modular, self-powered IoT sensor designed to overcome connectivity and power limitations of forest monitoring systems. The device integrates a custom thermal trigger and a specialized wireless communication stack to provide reliable fire detection in off-grid environments.

## Key Contributions

1. **Wireless Communication & Digital-to-RF Transmission**

- **Low-Frequency Data Transmission:** Developed a custom digital-to-radio converter enabling data transmission in the 30–50 MHz range. This frequency was chosen for superior signal penetration through dense forest canopy while keeping power consumption minimal.
- **Sustainability & MRV:** The system supports Nature-Based Solutions (NBS) by enabling real-time Monitoring, Reporting, and Verification (MRV) of carbon stocks in remote, off-grid regions.
- **RF Burst Power Modeling:** Performed time-varying power simulations to model capacitor discharge during periodic RF transmission bursts (30 mA spikes), ensuring the energy-harvesting subsystem sustains communication without premature voltage failure.

2. **Material Innovation: PETG + $CaCO_{3}$ Composite**

- **Composite Design:** Proposed and produced a 10:1 PETG : $CaCO_{3}$ composite to improve structural integrity of the sensor housing.
- **Mechanical Improvements:** The addition of $CaCO_{3}$ particles provides micro-reinforcement that increases stiffness and impact resistance compared to pure PETG, improving protection against falling debris and wildlife interactions.
- **Environmental Resilience:** The composite demonstrated superior moisture resistance with a measured water absorption of 1.33% versus 2.82% for pure PETG — critical for long-term outdoor deployment.

3. **Manufacturing & 3D Printing Process**

- **Filament Production:** Managed end-to-end filament manufacturing: grinding PETG to increase surface area, mixing with $CaCO_{3}$, and producing filament via a custom extruder.
- **Process Optimization:** Introduced a vacuum drying step prior to extrusion to remove moisture from hygroscopic PETG and prevent porosity and printing defects.
- **Mechanical Validation:** Conducted ASTM D638 "dog-bone" tensile tests on the composite using a Universal Testing Machine. Results showed reduced ductility compared to pure PETG but improved real-world durability for protecting electronics in harsh forest environments.

## Notes

This project balances low-power RF engineering, sustainable monitoring goals, and material/process innovations to enable long-lived, off-grid environmental sensors.
  `

};
if (typeof window !== 'undefined') window.PROJECT_self_powered_iot_forest_monitoring_sensor = PROJECT_self_powered_iot_forest_monitoring_sensor;
