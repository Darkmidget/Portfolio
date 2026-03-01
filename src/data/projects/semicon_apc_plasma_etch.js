const PROJECT_semicon_apc_plasma_etch = {
  id: "semicon-apc-plasma-etch",
  title: "Next-Gen Plasma Etch: Advanced Real-Time Monitoring (Semicon Tech Zoomer)",
  status: "completed",
  category: "Semiconductor",
  tags: ["APC", "Plasma", "OES", "Virtual Metrology", "Machine Learning", "RIE"],
  thumbnail: "",
  date: "2025",
  summary: "Hybrid metrology framework linking plasma signals to wafer outcomes for closed-loop APC and reduced scrap.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Executive Summary & Problem Statement

During the Semicon Tech Zoomer Bootcamp, our team addressed a key fabrication bottleneck: the mismatch between machine (indirect) data and actual wafer outcomes. Indirect parameters (RF power, gas flow) often fail to reflect direct results such as etch rate, selectivity, and profile uniformity, causing delayed defect detection and yield loss.

## Group 9 Proposal: Smart Closed-Loop Monitoring

We proposed a Hybrid Metrology Framework that links "Cause" (plasma) with "Effect" (wafer profile) enabling a quasi-direct monitoring approach.

- **Trigger Mechanism**: Wafer surface temperature acts as the trigger. A deviation of $+5^{\circ}\text{C}$ from the golden recipe (measured via He backside pressure or IR sensors) initiates a deep-scan and data aggregation.
- **Multi-sensor Integration**:
  - Optical Emission Spectroscopy (OES) — chemical species and plasma intensity
  - RF Signal Monitoring — bias voltage and impedance for plasma instabilities
  - QMS (Exhaust Gas) — byproduct concentration to infer etch rate
- **ML-driven Correlation Models**: Use high-frequency sensor streams to predict Critical Dimension (CD) and etch depth without wafer removal (virtual metrology). This enables real-time APC to save wafers otherwise destined for scrap.

## Technical Deep Dive: Plasma Dry Etching

- **Process**: RF power ionizes CF₄/SF₆/Ar mixtures to achieve anisotropic etching via ion bombardment and chemical reactions (RIE).
- **Challenges**: Plasma-induced thermal flux can change material properties and cause undercutting; temperature-sensitive monitoring is critical to detect these drifts early.

## Implementation Outline

1. Continuous low-latency OES + RF + QMS capture.
2. Real-time He/backside pressure or IR temperature monitoring as trigger.
3. On trigger: aggregate buffered high-speed data, run the ML model, predict CD/etch depth, and decide APC actions.
4. APC actuators: small adjustments to gas flows, RF power, or pressure to recover the wafer run.

## Yield & Cost Impact

- Enables wafer rescue via APC, reducing scrap and lowering per-wafer losses.
- Early anomaly detection reduces downstream rework and cycle time.

## Key Learnings & Competencies

- Advanced Metrology: OES, in-situ interferometry, and WLSI for 3D profiling.
- Predictive Maintenance: identify MFC and RF generator anomalies early.
- Virtual Metrology & Digital Twins: COMSOL simulations + data-driven twins for scale.

## Notes
This work was completed as part of the Semicon Tech Zoomer Bootcamp (Group 9). The project combines experimental sensing strategy and ML-based virtual metrology to enable closed-loop APC in plasma etch processes.
  `
};
if (typeof window !== 'undefined') window.PROJECT_semicon_apc_plasma_etch = PROJECT_semicon_apc_plasma_etch;
