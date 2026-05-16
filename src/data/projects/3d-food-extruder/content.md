## Project Overview

The 3D Food Extruder is an innovative upcycling system designed to combat food wastage by converting "ugly" or unsold produce into customizable, 3D-printed food products. By dehydrating surplus fruits and vegetables into powder and rehydrating them into a printable paste, the project extends the shelf life of perishables while transforming waste into value.

## The Challenge

Food waste is a critical global and local issue; in Singapore alone, over 800,000 tonnes of food were wasted in a single year, with significant amounts of edible "ugly" produce discarded by retailers simply due to appearance. The goal was to create an accessible hardware and software solution to repurpose this waste into a sustainable food source.

## Technical Implementation

- **Repurposed Hardware:** The extruder's X, Y, and Z axes were engineered using salvaged optical CD drives, demonstrating a commitment to sustainable, low-cost manufacturing.
- **Custom Extrusion System:** Developed a 3D-printed syringe holder and a rack-and-pinion mechanism driven by stepper motors to precisely deposit food paste.
- **Dual-Controller Architecture:** Utilized two Arduino UNOs (Core and Slave) to coordinate the complex movements of the three axes and the extrusion head simultaneously.
- **Integrated Peltier Cooling Box:** Built a custom styrofoam cooling chamber with a Peltier module and heat sinks to rapidly solidify the printed food for structural integrity.

## Engineering & Problem Solving

- **Load Management:** To prevent stepper motor stalling caused by the weight of the extruder head, a tension-spring system was implemented to provide upward force and balance the Z-axis load.
- **Precision Alignment:** Devised a specialized washer and nut mounting system that allowed for micro-adjustments in height and plane alignment across all axes.
- **Design for Manufacturability:** Optimized acrylic components by replacing fixed screw holes with adjustable slots, allowing for post-assembly alignment without risking material fatigue.

## Awards & Recognition

Finalist, IKEA Young Designer Award: This project was recognized for its sustainable approach to food waste and innovative use of upcycled materials, earning a position as a finalist in this prestigious design competition.
