const PROJECT_firefighter_display = {
  id: "firefighter-display",
  title: "Adam & Eve — Firefighter HUD",
  status: "completed",
  category: "Hardware",
  tags: ["Raspberry Pi", "Thermal Imaging", "Embedded", "AI", "Optics", "3D Printing", "Safety", "Business", "Product", "Public Safety", "helmet", "Electrical", "Mechanical"],
  thumbnail: "resources/Pictures/firefighter-display/cover.png",
  date: "2025",
  summary: "A compact, retrofittable thermal heads-up display (HUD) helmet retrofit for firefighters that provides a hands-free, real-time thermal overlay in zero-visibility environments.",
  featured: false,  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Processing Unit": "Raspberry Pi 5",
    "Thermal Camera": "AXISFlying (256x196, 25 fps)",
    "AI Engine": "RPi-based Human Detection",
    "Detection Accuracy": "83% (IoU method)",
    "Connectivity": "2.4 GHz Wi-Fi Streaming",
    "Battery Life": "35–40 minutes (Matching standard fire cycles)",
    "Awards": "Best Prototype (Adam & Eve HUD)"
  },
  contentFile: "src/data/projects/firefighter-display/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_firefighter_display = PROJECT_firefighter_display;
