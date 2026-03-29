const PROJECT_tunable_gelatin_dra = {
  id: "tunable-gelatin-dra",
  title: "Tunable Gelatin-based Dielectric Resonator Antenna (DRA)",
  status: "completed",
  category: "Electromagnetic Waves",
  tags: [
    "RF Design",
    "Antennas",
    "Dielectrics",
    "CST Studio",
    "Simulations",
    "Material Science",
    "Wearables"
  ],
  thumbnail: "resources/Pictures/gelatin-dra/thumbnail.jpg",
  date: "2024",
  summary: "A journey exploring the possibility of creating a gelatin with a tunable dielectric constant for the purpose of making a durable, 75% smaller Dielectric Resonating Antenna (DRA).",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Project Vision: The 900 MHz "Jelly" Antenna
This project, developed for the **Electromagnetic Waves** module, explores the frontier of soft-matter RF engineering. Our goal was to create a biocompatible, bendy, and biodegradable (3Bs) antenna module for real-time health monitoring, specifically for wound-care patches.

![Jelly Antenna Poster - Project Overview](resources/Pictures/gelatin-dra/poster.jpg)

The mission was simple but ambitious: utilize sustainable materials to create a **Dielectric Resonator Antenna (DRA)** that outperforms traditional metallic counterparts in wearables.

---

## Phase 1: Material Fabrication & Dielectric Tuning
The innovation lies in our ability to harness the naturally high dielectric constant of water (\\epsilon_r \\approx 80) and optimize it by creating a stable hydrogel (gelatin) matrix. 

### Adjusting the Water-to-Impurity Ratio
The primary scientific question was: *How can we precisely shift the dielectric constant to hit a specific 900 MHz resonance?* 

We discovered that by starting with high-purity water and then **adjusting the ratio of impurities (gelatin and additives)**, we could effectively "tune" the material properties. Through rigorous experimentation, we achieved a stable dielectric constant of **\\kappa \\approx 67**, providing the perfect balance between miniaturization and radiation efficiency.

![Hydrogel Material Samples & Fabrication](resources/Pictures/gelatin-dra/fabrication.jpg)

---

## Phase 2: Prototype 1 - Proving the Concept
Our journey began with **Prototype 1**, designed to verify the feasibility of our hydrogel resonator. We used a simple feed mechanism to excite the resonant mode within the block.

![Prototype 1 - The First Hardware Build](resources/Pictures/gelatin-dra/prototype_1_image.jpg)

### Testing & Initial Results
We tested the prototype using a Vector Network Analyzer (VNA) and confirmed resonance in the 900 MHz band. While the signal had some noise, the existence of a clear return loss dip proved our scientific hypothesis.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="text-align: center;">
    ![Prototype 1 Measurement Setup](resources/Pictures/gelatin-dra/prototype_1_resonance_test.jpg)
    <p><small>Measurement Setup</small></p>
  </div>
  <div style="text-align: center;">
    ![Prototype 1 S11 Results](resources/Pictures/gelatin-dra/prototype_1_resonance_900mhz.jpg)
    <p><small>Initial S11 Plot</small></p>
  </div>
</div>

---

## Phase 3: Digital Twin - CST Simulation & Optimization
To move from a bulky prototype to a wearable patch, we leveraged **CST Studio Suite** for advanced electromagnetic simulations. We created a "digital twin" of our antenna to optimize the geometry and feed placement.

### Parameter Sweeps & Size Reduction
We performed massive **parameter sweeps** to find the optimal size of the substrate and the DRA length. This iterative optimization allowed us to achieve a **75% reduction in size** from our initial iteration.

![CST Studio Parameter Sweep Logic](resources/Pictures/gelatin-dra/parameter_sweep_substrate_size.jpg)
![CST 3D Modeling & Theoretical Output](resources/Pictures/gelatin-dra/theoretical_sim_output.jpg)

By simulating the **electric field (E-field) distribution**, we ensured that energy was correctly focused within the gelatin resonator, maximizing gain and efficiency.

![3D Simulation Model of Optimized Prototype](resources/Pictures/gelatin-dra/prototype_2_cst_sim.jpg)

---

## Phase 4: Prototype 2 - The Refined Final Build
The result of our simulation journey was **Prototype 2**: a compact, durable, and highly efficient modular antenna.

![Prototype 2 - Refined Miniaturized Device](resources/Pictures/gelatin-dra/prototype_2_image.jpg)

### Advanced Performance Analysis
We didn't just stop at resonance; we conducted a deep dive into **dielectric loss analysis** to ensure the antenna could maintain efficiency even when bent or subjected to moisture.

![Dielectric Loss & Impedance Analysis](resources/Pictures/gelatin-dra/prototype_2_loss_analysis.jpg)

### Final Results: Near-Perfect Performance
The measurements on the final prototype were exceptional, showing a near-perfect match between theory and reality.

- **Return Loss ($S_{11}$)**: Achieved a sharp **-20.74 dB at 900 MHz**.
- **Gain & Pattern**: **1.929 dBi** with an omnidirectional far-field pattern.
- **Bandwidth**: **63 MHz** (wide enough for robust IoT data transmission).

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="text-align: center;">
    ![Prototype 2 Far-Field Pattern](resources/Pictures/gelatin-dra/prototype_2_far_field_sim.jpg)
    <p><small>Radiation Pattern</small></p>
  </div>
  <div style="text-align: center;">
    ![Final Verified Resonance Plot](resources/Pictures/gelatin-dra/prototype_2_resonance_900mhz_noise.jpg)
    <p><small>Final Verified Resonance</small></p>
  </div>
</div>

---

## Final Reflections: The Journey What We Learned
This research journey for the **Electromagnetic Waves** module taught us that sustainability and high-performance electronics are not mutually exclusive. 

The core lesson was that **material tunability** is a powerful design tool; by simply adjusting the water-to-impurity ratios, we can create custom-fit RF solutions for the next generation of eco-friendly, wearable medical devices.
`
};
