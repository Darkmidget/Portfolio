/* ========================================
   PORTFOLIO DATA - projects.js
   ========================================
   This is the ONLY file you need to edit to manage your portfolio.
   
   HOW TO ADD A NEW PROJECT:
   1. Copy the template object below
   2. Fill in your details
   3. Add images to: resources/Pictures/<your-project-id>/
   4. Commit & push to GitHub

   HOW TO USE THE EDITOR:
   - Open editor.html in your browser
   - Fill in the form + write markdown
   - Click "Generate Code" and paste the output here

   TEMPLATE (copy this):
   ─────────────────────────────────────────
   {
     id: "my-project-slug",
     title: "My Project Title",
     status: "completed",       // completed | in-progress | planning | on-hold
     category: "Web Dev",       // your category
     tags: ["HTML", "CSS"],
     thumbnail: "",             // e.g. "resources/Pictures/my-project/cover.jpg"
     date: "2025",
     summary: "A short one-liner about the project.",
     featured: false,           // true = shows on homepage
     links: {
       github: "",
       demo: "",
       other: "",
     },
     content: `
## Overview
Write your project documentation in **Markdown** here.

- Supports bullet lists
- **Bold**, *italic*, \`inline code\`
- [Links](https://example.com)
- ![Images](path/to/image.jpg)

### Section
More details...
     `
   },
   ─────────────────────────────────────────
   ======================================== */

const PORTFOLIO_DATA = {

  // ─── Profile ─────────────────────────────
  profile: {
    name: "Vincent Ho",
    title: "Software Developer & Engineer",
    bio: "Building solutions through code and engineering. Passionate about robotics, web development, and solving complex problems with technology.",
    avatar: "resources/Pictures/self.png",
    links: {
      github: "https://github.com/Darkmidget",
      email: "vincentho322001@gmail.com",
    }
  },

  // ─── Skills ──────────────────────────────
  skills: [
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "HTML/CSS", category: "Languages" },
    { name: "C/C++", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "Git", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Arduino", category: "Tools" },
    { name: "Raspberry Pi", category: "Tools" },
    { name: "Linux", category: "Tools" },
    { name: "Node.js", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: "Express", category: "Frameworks" },
    { name: "Robotics", category: "Domains" },
    { name: "Web Development", category: "Domains" },
    { name: "Embedded Systems", category: "Domains" },
  ],

  // ─── Projects ────────────────────────────
  projects: [
    {
      id: "delivery-robot",
      title: "Delivery Robot",
      status: "completed",
      category: "Robotics",
      tags: ["Python", "Arduino", "Hardware", "Raspberry Pi"],
      thumbnail: "",
      date: "2020",
      summary: "Autonomous delivery robot built during polytechnic studies. Integrated software control with hardware engineering for path planning and obstacle avoidance.",
      featured: true,
      links: {
        github: "",
        demo: "",
        other: "",
      },
      content: `
## Introduction

The Delivery Robot project focuses on the development of an **Autonomous Mobile Robot (AMR)** designed for both indoor and outdoor package delivery. The primary goal was to create a service robot capable of transporting a **30kg payload** to specified target locations autonomously or semi-autonomously. The project serves as an application of "Robotics: Industry, Collaborative and Service Robots," emphasizing the robot's role in providing essential services to humans in real-world environments.

## Software

The software stack is built upon a **Linux (Lubuntu v16.04)** environment running on a **Raspberry Pi 3 Model B**. Key components and development tasks included:
- **Operating System Optimization**: Custom resizing of the PI_ROOT partition and the implementation of shell scripts that automatically execute upon bootup to ensure the robot is operational immediately after powering on.
- **Navigation & Localization**:
  - **Autonomous Waypoint Navigation System**: The core logic for pathfinding and goal-reaching.
  - **GPS Software**: Integrated with high-precision receiver boards for accurate outdoor positioning.
- **Communication Protocols**:
  - **CAN-BUS Communication**: Facilitates high-speed, reliable data exchange between internal hardware modules.
  - **XCTU**: Used for the configuration and testing of XBee wireless communication modules.
- **Motor Control**: Utilization of **VESC Tools** for precise tuning and configuration of the brushless motor controllers.
- **User Interface**: Setup of an **HDMI LCD touchscreen** with a custom-designed splash screen for status monitoring and user interactions.
- **Development**: Core programs were developed in C++ and compiled into custom executables to optimize processing speed on the Raspberry Pi.

## Hardware

The hardware architecture is centered around a custom-built electronics base, often referred to as the "briefcase design."
- **Processing Units**: **Raspberry Pi 3 Model B** serves as the primary controller, while an **Arduino Mini Beetle (Pro Micro ATMEGA32U4)** handles secondary peripheral tasks.
- **Sensors**:
  - **LIDAR & IMU**: For spatial awareness, obstacle detection, and orientation tracking.
  - **GPS**: Equipped with **ZED-F9P receiver boards** for high-accuracy localization.
- **Communication Systems**:
  - **Wireless Telemetry**: **XBEE Pro S2C** modules paired with an **8 dbi Directional Panel Antenna** and a **6 Turn Axial Mode Helical Antenna** for long-range connectivity.
  - **Remote Control**: **APEM 3000 series Joystick**, **TANGO 20/20A**, and a **Fat Shark Nexwave RF 5.8 Receiver** for manual override and remote operation.
- **Actuation & Power**:
  - **Brushless Motors**: High-torque motors driven by **VESC** controllers.
  - **Mechanisms**: Solenoids are utilized for package release or specialized locking functions.
  - **Power System**: A **Unicell 12.6V 10Ah Battery** powers the system, managed by **Pololu Step-Down Regulators** (12V 15A and 5V 5A) to provide stable voltage to various components.

## Journey

The project’s journey involved the transition from hardware assembly and component testing to a fully realized autonomous delivery platform. A milestone demonstration was conducted in **March 2020**, showcasing the robot's ability to navigate outdoor terrains while carrying a payload.
The development process highlight several key areas of growth:
- Refining the **Autonomous Waypoint Navigation** to handle real-world obstacles and varying terrain.
- Establishing a stable communication link for remote operation and telemetry in congested outdoor environments.
- Integrating complex sensor data (LIDAR, GPS, and IMU) through a centralized CAN-BUS system to ensure seamless operational flow.
- Optimizing the robot’s physical and software design to handle the significant 30kg payload safely.

## Group

The project was a large-scale collaborative effort by the following team members:
- **Camilla Anne Tiongson Concepcion**
- **Edwin Tan Yong Hao**
- **Goh Ming Quan**
- **Ho Yong Zhan Vincent**
- **Leaw Jun Ting Xavier**
- **Ng Wei Kang**
- **Ong Jian Han**
- **Owen Chen Yiren MacAlevey**
- **Phang Chee Sam**
- **Soo Jia Jun**

The team was supported by supervisors including **Ms. Jacqueline Oh** and **Dr. Antonio Acosta Calderon**.
      `
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      status: "in-progress",
      category: "Web Dev",
      tags: ["HTML", "CSS", "JavaScript"],
      thumbnail: "",
      date: "2025",
      summary: "Personal portfolio website to showcase projects and track development progress. Built with vanilla web technologies, hosted on GitHub Pages.",
      featured: true,
      links: {
        github: "https://github.com/Darkmidget/Portfolio",
        demo: "",
        other: "",
      },
      content: `
## Overview

A professional portfolio website built from scratch using HTML, CSS, and JavaScript. Designed to be easy to maintain — just edit one data file to add new projects.

## Features

- **Dark theme** with modern design
- **Project gallery** with search and category filtering
- **Markdown documentation** for each project
- **Built-in editor tool** for generating project entries
- **Responsive design** that works on all devices
- **Zero dependencies** — no build tools, no frameworks, no API keys

## Tech Stack

- Vanilla HTML5 / CSS3 / JavaScript (ES6+)
- GitHub Pages for hosting
- CSS Custom Properties for theming
- CSS Grid & Flexbox for layouts
      `
    },
    {
      id: "trading-search",
      title: "Trading Search",
      status: "planning",
      category: "Finance",
      tags: ["Python", "Data Analysis"],
      thumbnail: "",
      date: "2025",
      summary: "Research project exploring trading analysis tools and search algorithms for financial data.",
      featured: false,
      links: {
        github: "",
        demo: "",
        other: "",
      },
      content: `
## Overview

Early-stage research into trading analysis and financial data search tools.

## Goals

- Develop analysis utilities for market data
- Explore algorithmic approaches to pattern recognition
- Build a personal toolkit for financial research
      `
    },
  ]
};
