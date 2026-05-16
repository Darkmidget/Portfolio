const PROJECT_exercising_spark = {
  id: "exercising-spark",
  title: "Exercising Spark",
  status: "completed",
  category: "Mobile App",
  tags: ["Firebase", "Google Maps", "SQLite", "WebView"],
  thumbnail: "",
  date: "2020",
  summary: "A community-driven mobile app that connects neighbors for fitness activities, making exercise social and local.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Platform": "Mobile App",
    "Backend": "Firebase Realtime Database",
    "Authentication": "Firebase Auth",
    "Local Storage": "SQLite",
    "Mapping": "Google Maps API",
    "Features": "Real-time Chat, Radius-based Matchmaking"
  },
  contentFile: "src/data/projects/exercising-spark/content.md"
};
if (typeof window !== 'undefined') window.PROJECT_exercising_spark = PROJECT_exercising_spark;
