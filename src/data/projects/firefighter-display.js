const PROJECT_firefighter_display = {
  id: "firefighter-display",
  title: "Adam & Eve — Firefighter HUD",
  status: "completed",
  category: "Hardware",
  tags: ["Raspberry Pi", "Thermal Imaging", "Embedded", "AI", "Optics", "3D Printing", "Safety", "Business", "Product", "Public Safety", "helmet"],
  thumbnail: "resources/Pictures/firefighter-display/cover.png",
  date: "2025",
  summary: "A compact, retrofittable thermal heads-up display (HUD) helmet retrofit for firefighters that provides a hands-free, real-time thermal overlay in zero-visibility environments.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Overview

Adam & Eve is a compact, retrofittable thermal heads-up display (HUD) designed to enhance firefighter safety and situational awareness in zero-visibility environments. Unlike traditional handheld thermal cameras that require head-down viewing and hinder mobility, this system integrates directly into existing SCBA masks and helmets to provide a hands-free, real-time thermal overlay.

## The Challenge

Firefighters in Singapore and globally face extreme risks due to near-zero visibility from smoke and darkness. Current thermal imaging solutions are often bulky, proprietary, or limited to high-ranking personnel, creating operational bottlenecks and increasing the risk of disorientation and injury.

## Technical Implementation

- **Helmet-Mounted IR Camera**: AXISFlying thermal camera (256x196, 25 fps) housed in a detachable, fire-retardant ABS casing.
- **In-Mask HUD**: Wirelessly streamed thermal feed (2.4 GHz Wi‑Fi) displayed on an LCD positioned in the mask's natural blind spot above the nose bridge.
- **AI Integration**: Raspberry Pi 5 processes the thermal feed using an AI algorithm to detect heat sources and victims through dense smoke.
- **Advanced Optics**: Custom optical path using polarizing film and specialized lenses provides a readable, high-contrast thermal image without obstructing peripheral vision.

## Key Results & Performance

- **Detection Accuracy**: Achieved an 83% success rate in object/person detection using the Intersection over Union (IoU) method.
- **Operational Durability**: Stable performance for 35–40 minutes before heat-induced latency, matching standard firefighting work-rest cycles.
- **Visual Clarity**: Readability tests with 60 participants confirmed high legibility in low-visibility conditions.
- **Ergonomics**: Limited visual occlusion to ensure critical thermal data is accessible without compromising environmental awareness.

## Cost & Market Penetration

The solution was designed for minimal disruption to existing systems and human behaviour. It is modular and non-destructive, allowing retrofitting into current SCBA masks and helmets with little to no change in user procedures. This low barrier to adoption, combined with relatively modest bill-of-materials (camera, Pi, small LCD, optics), supports cost-effective scaling and easier market penetration.

## Impact

This project establishes a foundation for next-generation protective gear that improves mission effectiveness and survivor outcomes by providing every responder with advanced "see-through-smoke" capabilities.

 
  `
};
if (typeof window !== 'undefined') window.PROJECT_firefighter_display = PROJECT_firefighter_display;