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

Autonomous delivery robot project developed at Singapore Polytechnic. This project combined software development with hardware engineering to create a working robot capable of navigating and delivering items.

## Software

- **Path Planning**: Implemented algorithms for autonomous navigation
- **Computer Vision**: Used camera module for object detection and route recognition
- **Control System**: Python-based control loop for motor management and sensor data processing

## Hardware

- Raspberry Pi 4 as the main controller
- Arduino for motor and sensor interfacing
- Ultrasonic sensors for obstacle detection
- DC motors with encoders for precise movement
- Custom 3D-printed chassis

## Journey

The project was a collaborative effort that taught valuable lessons in:
- Integration of software and hardware systems
- Real-time sensor data processing
- Team collaboration and project management
- Iterative prototyping and testing

## Team

Built as a group project, combining different skill sets across software and mechanical engineering.
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
