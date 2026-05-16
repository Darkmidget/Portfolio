const PROJECT_lendah = {
  id: "lendah",
  title: "LendAh",
  status: "completed",
  category: "Social Fintech",
  tags: ["AWS", "Serverless", "Fintech", "Education", "Social Impact"],
  thumbnail: "resources/Pictures/lendah/cover.jpg",
  date: "2020",
  summary: "Bridging generations by enabling retirees to finance and mentor university students.",
  featured: false,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  specs: {
    "Compute": "AWS Lambda (Serverless)",
    "Database": "Amazon DynamoDB",
    "Identity": "Amazon Cognito",
    "Hosting": "AWS Amplify",
    "Security": "AWS IAM Role-based access",
    "Monitoring": "Amazon CloudWatch"
  },
  contentFile: "src/data/projects/lendah/content.md"
};

if (typeof window !== 'undefined') window.PROJECT_lendah = PROJECT_lendah;
