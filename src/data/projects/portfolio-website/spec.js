const PROJECT_portfolio_website = {
  id: "portfolio-website",
  title: "Portfolio Website",
  status: "in-progress",
  category: "Web Dev",
  tags: ["HTML", "CSS", "JavaScript"],
  thumbnail: "",
  date: "2025",
  summary: "Personal portfolio website to showcase projects and track development progress. Built with vanilla web technologies, hosted on GitHub Pages.",
  featured: false,
  links: {
    github: "https://github.com/Darkmidget/Portfolio",
    demo: "",
    other: "",
  },
  specs: {
    "Technology": "Vanilla HTML5 / CSS3 / JS (ES6+)",
    "Frameworks": "Zero (No build tools, no frameworks)",
    "Hosting": "GitHub Pages",
    "Design": "Modern Dark Theme, CSS Custom Properties",
    "Features": "Markdown Parsing, Search & Filter, Built-in Editor",
    "Dependencies": "None"
  },
  contentFile: "src/data/projects/portfolio-website/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_portfolio_website = PROJECT_portfolio_website;
