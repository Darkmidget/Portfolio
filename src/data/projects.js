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
    PROJECT_delivery_robot,
    PROJECT_portfolio_website,
    PROJECT_trading_search,
    PROJECT_firefighter_display,
  ]
};
