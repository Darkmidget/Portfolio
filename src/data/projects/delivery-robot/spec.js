const PROJECT_delivery_robot = {
  id: "delivery-robot",
  title: "Delivery Robot",
  status: "completed",
  category: "Robotics",
  tags: ["Python", "ROS", "C/C++", "Arduino", "Raspberry Pi", "LIDAR", "GPS"],
  thumbnail: "resources/Pictures/delivery-robot/cover.png",
  date: "2020",
  summary: "Autonomous delivery robot prototype demonstrating waypoint navigation, sensor fusion, and remote operation.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Software Stack": "ROS (slam_gmapping, AMCL, move_base) on Lubuntu",
    "Hardware": "Raspberry Pi, Arduino Mega, VESC motor controllers",
    "Sensors": "Hokuyo UST-20LX LIDAR, VMU931 IMU, ZED-F9P GPS",
    "Communication": "XBee Wireless (XCTU configured)",
    "Navigation": "Waypoint recording & autonomous return-to-origin",
    "Mechanical": "Brushless DC motors, Autodesk Fusion 360 designed parts"
  },
  contentFile: "src/data/projects/delivery-robot/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_delivery_robot = PROJECT_delivery_robot;
