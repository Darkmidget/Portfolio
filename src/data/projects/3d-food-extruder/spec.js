const PROJECT_3d_food_extruder = {
  id: "3d-food-extruder",
  title: "3D Food Extruder",
  status: "completed",
  category: "Robotics",
  tags: ["Arduino", "3D Printing", "Upcycling", "Embedded"],
  thumbnail: "",
  date: "2019",
  summary: "An upcycling system that converts surplus produce into printable food paste and 3D-prints custom edible shapes.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Hardware Base": "Salvaged Optical CD Drives (X, Y, Z axes)",
    "Controllers": "Dual Arduino UNO (Core & Slave)",
    "Extrusion System": "3D-printed Syringe Holder + Rack-and-Pinion",
    "Cooling": "Peltier module with heat sinks in Styrofoam box",
    "Safety": "Tension-spring Z-axis load balancing",
    "Awards": "Finalist, IKEA Young Designer Award"
  },
  contentFile: "src/data/projects/3d-food-extruder/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_3d_food_extruder = PROJECT_3d_food_extruder;
