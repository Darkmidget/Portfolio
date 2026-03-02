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
  content: `
## Project Title
LendAh — Bridging Generations, Investing in the Future.

## Problem Statement
Many developed nations hold a large portion of national wealth in the accounts of single retirees and older generations. These funds frequently sit stagnant in low-yield accounts, reducing capital circulation and limiting resources available to younger generations who face rising education costs and liquidity constraints.

## The Solution
LendAh is a social-fintech platform that unlocks stagnant capital by connecting wealthy retirees with university students. Retirees can fund educational milestones and provide mentorship; students receive accessible funding tied to verified progress updates.

## Project Status
This project has ended. Activities concluded in 2020.

## Key Features
- **Educational Reinvestment Portal**: Retirees browse student profiles and fund tuition or milestones.
- **Progress-Transparency Loop**: Students send regular verified updates (grades, projects, reflections) to their backers.
- **Bank-as-Monitor**: An integrated banking layer verifies enrollment and monitors transactions to ensure funds are used for education.
- **Fraud Prevention & Security**: AWS-backed identity verification and traceable transaction flows.

## Target Audience
- **Primary Lenders**: Single retirees with high disposable income seeking purposeful reinvestment.
- **Primary Borrowers**: University students needing funding and willing to share progress with backers.

## Technology Stack (AWS-centric)
- Backend & Logic: AWS Lambda (serverless transaction processing)
- Data Management: Amazon DynamoDB (profiles, investment history, progress logs)
- Security & Identity: Amazon Cognito and AWS IAM (role-based access)
- Frontend: AWS Amplify (web/mobile hosting)
- Monitoring: Amazon CloudWatch (system health and anomaly detection)

## Economic & Social Impact
LendAh aims to re-circulate dormant capital into education, easing student financial burdens and stimulating economic activity. It also provides retirees with purpose and social connection through mentorship and measurable impact.

## Architecture & README Tips

## Notes
 
  `
};

if (typeof window !== 'undefined') window.PROJECT_lendah = PROJECT_lendah;
