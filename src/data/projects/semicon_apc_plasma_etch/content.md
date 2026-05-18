## Executive Summary & Problem Statement

During the Semicon Tech Zoomer Bootcamp, our team addressed a key fabrication bottleneck: the mismatch between machine (indirect) data and actual wafer outcomes. Indirect parameters (RF power, gas flow) often fail to reflect direct results such as etch rate, selectivity, and profile uniformity, causing delayed defect detection and yield loss.

![Semicon Tech Zoomer Bootcamp - Closed-Loop APC Monitoring](resources/Pictures/semicon_apc_plasma_etch/cover.png)

## Group 9 Proposal: Smart Closed-Loop Monitoring

We proposed a Hybrid Metrology Framework that links "Cause" (plasma) with "Effect" (wafer profile) enabling a quasi-direct monitoring approach.

![Group 9 Closed-Loop Monitoring Framework Proposal](resources/Pictures/semicon_apc_plasma_etch/poster.png)

- **Trigger Mechanism**: Wafer surface temperature acts as the trigger. A deviation of $+5^{\circ}\text{C}$ from the golden recipe (measured via He backside pressure or IR sensors) initiates a deep-scan and data aggregation.
- **Multi-sensor Integration**:
  - Optical Emission Spectroscopy (OES) — chemical species and plasma intensity
  - RF Signal Monitoring — bias voltage and impedance for plasma instabilities
  - QMS (Exhaust Gas) — byproduct concentration to infer etch rate
- **ML-driven Correlation Models**: Use high-frequency sensor streams to predict Critical Dimension (CD) and etch depth without wafer removal (virtual metrology). This enables real-time APC to save wafers otherwise destined for scrap.

## Technical Deep Dive: Plasma Dry Etching

- **Process**: RF power ionizes CF₄/SF₆/Ar mixtures to achieve anisotropic etching via ion bombardment and chemical reactions (RIE).
- **Challenges**: Plasma-induced thermal flux can change material properties and cause undercutting; temperature-sensitive monitoring is critical to detect these drifts early.

![CAD Model of the Plasma Etching Chamber](resources/Pictures/semicon_apc_plasma_etch/CAD_of_etching%20chamber.jpg)

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

## Bootcamp Experience & Team Gallery

We had the opportunity to present our closed-loop APC architecture to industry experts and collaborate closely with semiconductor mentors.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
  <div style="text-align: center;">
    ![Tech Zoomer Group Photo](resources/Pictures/semicon_apc_plasma_etch/tech_zoomer_grp_photo.jpeg)
    <p><small>Group 9 & bootcamp peers at the Semicon Tech Zoomer event</small></p>
  </div>
  <div style="text-align: center;">
    ![Photo with Mentor](resources/Pictures/semicon_apc_plasma_etch/photo_with_mentor.jpeg)
    <p><small>Pitching and refining our ML metrology pipeline with our mentor</small></p>
  </div>
</div>

## Notes
This work was completed as part of the Semicon Tech Zoomer Bootcamp (Group 9). The project combines experimental sensing strategy and ML-based virtual metrology to enable closed-loop APC in plasma etch processes.
