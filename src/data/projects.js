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
      linkedin: "https://linkedin.com/in/vincent-darkmidget",
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
  // Build the projects array defensively: some browsers or loaders
  // may not expose `const` globals as `window` properties, so try
  // both identifier lookup and `window` fallback. Filter out any
  // undefined entries so the UI doesn't break.
  projects: (function(){
    // Primary approach: try to read well-known globals created by each
    // project file. If any are missing (for example due to loading
    // order differences or an updated manifest), fall back to scanning
    // `window` for any `PROJECT_` prefixed globals so no project is
    // accidentally omitted from the UI.
    const tryGet = (name) => {
      try {
        // eslint-disable-next-line no-undef
        if (typeof eval(name) !== 'undefined') return eval(name);
      } catch (e) {
        // ignore
      }
      return (typeof window !== 'undefined') ? window[name] : undefined;
    };

    const wellKnown = [
      'PROJECT_delivery_robot',
      'PROJECT_portfolio_website',
      'PROJECT_trading_search',
      'PROJECT_firefighter_display',
      'PROJECT_sand_e_beach_cleaning_robot',
      'PROJECT_3d_food_extruder',
      'PROJECT_lg_retail_innovation',
      'PROJECT_exercising_spark',
      'PROJECT_semicon_apc_plasma_etch',
      'PROJECT_lendah',
      'PROJECT_autonomous_navigation_predictive_control',
      'PROJECT_national_robotics_competition_2024'
    ];

    let list = wellKnown.map(tryGet).filter(p => p && typeof p === 'object');

    if (typeof window !== 'undefined') {
      // If we didn't find all projects, scan globals for any PROJECT_ entries
      // and include them (preserve existing order, then append extras).
      const foundKeys = new Set(list.map(p => p.id));
      const extras = Object.keys(window)
        .filter(k => k.indexOf('PROJECT_') === 0)
        .map(k => window[k])
        .filter(p => p && typeof p === 'object' && !foundKeys.has(p.id));

      if (extras.length) {
        console.warn('projects.js: appending', extras.length, 'additional PROJECT_ entries');
        list = list.concat(extras);
      }
    }

    return list;
  })()
};
