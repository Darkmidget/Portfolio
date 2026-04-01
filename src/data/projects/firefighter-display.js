const PROJECT_firefighter_display = {
  id: "firefighter-display",
  title: "Adam & Eve — Firefighter HUD",
  status: "completed",
  category: "Hardware",
  tags: ["Raspberry Pi", "Thermal Imaging", "Embedded", "AI", "Optics", "3D Printing", "Safety", "Business", "Product", "Public Safety", "helmet", "Electrical", "Mechanical"],
  thumbnail: "resources/Pictures/firefighter-display/cover.png",
  date: "2025",
  summary: "A compact, retrofittable thermal heads-up display (HUD) helmet retrofit for firefighters that provides a hands-free, real-time thermal overlay in zero-visibility environments.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Overview

Adam & Eve is a compact, retrofittable thermal heads-up display (HUD) designed to enhance firefighter safety and situational awareness in zero-visibility environments. Unlike traditional handheld thermal cameras that require head-down viewing and hinder mobility, this system integrates directly into existing SCBA masks and helmets to provide a hands-free, real-time thermal overlay.

## Empathy Study & Identifying the Problem

To truly understand the challenges firefighters face, our journey began at a local fire station. We conducted an in-depth empathy study where we donned the full firefighter suit to experience firsthand the physical toll and constraints they operate under. This immersive experience allowed us to learn about their background, daily operations, and the hidden problems that rarely make it online.

![Visit to the Firestation](resources/Pictures/firefighter-display/visit_to_firestation.png)
![Empathy Study](resources/Pictures/firefighter-display/wearing_the_equipment_for%20empathy%20study.png)

During our investigation, we uncovered a critical pain point: **their gas masks get completely foggy after just a few runs**. This severely limits their vision when they need it most. 

![The Foggy Gas Mask Problem](resources/Pictures/firefighter-display/Problem_foggy_gas_mask.png)

## Collaboration with Dräger

Determined to address this issue, we wrote a proposal and reached out to Dräger via email. They were impressed by our initiative, and we were officially invited and sponsored by them to visit their factory and warehouse. There, we gained a deeper understanding of their existing life-saving products and explored what we could experiment with to build a practical solution.

![Visit to Dräger](resources/Pictures/firefighter-display/invitation_to_drager.png)

## Ideation & Rough Design

With an idea in mind, we started mapping out our rough design. We noticed that most existing solutions suffered from major integration problems, resulting in exorbitantly expensive proprietary systems. 

Our core idea was to develop a prototype that allows firefighters to "see through" the foggy gas mask without the massive price tag. More importantly, it had to be entirely hands-free.

![Rough Idea of Design](resources/Pictures/firefighter-display/rough_idea_of_design.png)

## Prototyping & Development

We moved quickly into prototyping. One of our early experiments involved 3D printing with clear PETG materials to test visibility and structural integrity.

![3D Printing Clear PETG](resources/Pictures/firefighter-display/3D_printed_clear_petg.png)

A critical hurdle was creating our own lens to simulate the optical path. We needed the image projection to be highly legible despite the challenging conditions. After multiple iterations, we managed to get the simulated projection image exactly where we wanted it.

![Simulation for Projection](resources/Pictures/firefighter-display/usage%20of_simulation_for_projection.png)
![MVP of Projection](resources/Pictures/firefighter-display/Mvp_of_projection.png)

## The Final Prototype

After extensive testing and refinement, we developed our final hardware prototype. It fits perfectly onto the existing gas masks actively used by firefighters in Singapore. 

![3D Printed Prototype](resources/Pictures/firefighter-display/3d_printed_prototype.png)
![Add-on Prototype for Existing Gas Mask](resources/Pictures/firefighter-display/add_on_prototype_for_existing_gas_mask.png)

## Thermal Visual Effectiveness

The following videos demonstrate the real-time thermal overlay within the gas mask, showcasing the clarity and responsiveness of the HUD even in challenging visibility conditions.

<div class="video-grid">
  <div class="video-item">
    <video controls loop muted>
      <source src="resources/Videos/firefighter-display/demo_firefighter_0.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="video-caption">HUD Thermal Visual Demo 1</div>
  </div>
  <div class="video-item">
    <video controls loop muted>
      <source src="resources/Videos/firefighter-display/demo_firefighter.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="video-caption">HUD Thermal Visual Demo 2</div>
  </div>
</div>

We presented our finalized prototype at the competition and proudly **won the "Best Prototype" award**! 

## Technical Implementation

- **Helmet-Mounted IR Camera**: AXISFlying thermal camera (256x196, 25 fps) housed in a detachable, fire-retardant ABS casing.
- **In-Mask HUD**: Wirelessly streamed thermal feed (2.4 GHz Wi‑Fi) displayed on an LCD positioned in the mask's natural blind spot above the nose bridge.
- **AI Integration**: Raspberry Pi 5 processes the thermal feed using an AI algorithm to detect heat sources and victims through dense smoke.

  ![Human Detection using RPi](resources/Pictures/firefighter-display/human_detection_using_rpi.png)

- **Advanced Optics**: Custom optical path using polarizing film and specialized lenses provides a readable, high-contrast thermal image without obstructing peripheral vision.

## Key Results & Performance

- **Detection Accuracy**: Achieved an 83% success rate in object/person detection using the Intersection over Union (IoU) method.
- **Operational Durability**: Stable performance for 35–40 minutes before heat-induced latency, matching standard firefighting work-rest cycles.
- **Visual Clarity**: Readability tests with 30 participants confirmed high legibility in low-visibility conditions.
- **Ergonomics**: Limited visual occlusion to ensure critical thermal data is accessible without compromising environmental awareness.

## Cost & Market Penetration

The solution was designed for minimal disruption to existing systems and human behaviour. It is modular and non-destructive, allowing retrofitting into current SCBA masks and helmets with little to no change in user procedures. This low barrier to adoption, combined with relatively modest bill-of-materials (camera, Pi, small LCD, optics), supports cost-effective scaling and easier market penetration.

## Impact

This project establishes a foundation for next-generation protective gear that improves mission effectiveness and survivor outcomes by providing every responder with advanced "see-through-smoke" capabilities.
  `
};
if (typeof window !== 'undefined') window.PROJECT_firefighter_display = PROJECT_firefighter_display;