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
  content: `
## Overview

Autonomous delivery robot developed during polytechnic studies. The project combined ROS-based autonomy, embedded hardware, and a custom remote-control GUI to produce a robot capable of mapping, navigating waypoints, and returning to base.

## Key Contributions & Features

- **Autonomous Navigation**: Implemented a waypoint navigation system using ROS that records waypoints during manual drive and enables the robot to autonomously trace its path back to the origin.
- **Sensor Fusion**: Integrated Hokuyo LIDAR, VMU931 IMU, and ZED-F9P GPS for real-time obstacle detection, localization, and robust mapping.
- **Remote Control Interface**: Developed a Raspberry Pi-powered base-station GUI providing live camera feed, GPS tracking on an interactive map, and motor control via XBee wireless communication.

## Technical Stack

- **Software**: ROS (slam_gmapping, AMCL, move_base), Python, C++ on Lubuntu. Used XCTU for XBee configuration and Autodesk Fusion 360 for simple mechanical parts.
- **Hardware**: Raspberry Pi, Arduino Mega, VESC motor controllers, Brushless DC motors with Hall sensors, LiFePo & Li-ion batteries.
- **Sensors & Communication**: Hokuyo UST-20LX LIDAR, VMU931 IMU, ZED-F9P GPS, XBee modules, and an FPV camera system.

## Outcomes & Challenges

- **Precision Engineering**: Calibrated GPS inputs and implemented map-cropping/registration algorithms to improve tracking accuracy within the GUI.
- **Cross-Disciplinary Integration**: Successfully combined software, electronics, and mechanical design despite the team coming from diverse, non-robotics backgrounds.
- **Professional Impact**: Delivered a functional prototype capable of autonomous return-to-base maneuvers after reaching a target location.

## Journey, Leadership & Team

This was a collaborative student project that emphasized iterative prototyping, real-time sensor processing, and system integration.

- **Leadership**: Served as Project Lead, responsible for ROS architecture, core algorithm development, and coordinating the software integration effort.

Roles included ROS integration, embedded control, GUI development, and mechanical design.
  `
};
if (typeof window !== 'undefined') window.PROJECT_delivery_robot = PROJECT_delivery_robot;
