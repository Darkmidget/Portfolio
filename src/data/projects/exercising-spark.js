const PROJECT_exercising_spark = {
  id: "exercising-spark",
  title: "Exercising Spark",
  status: "completed",
  category: "Mobile App",
  tags: ["Firebase", "Google Maps", "SQLite", "WebView"],
  thumbnail: "",
  date: "2020",
  summary: "A community-driven mobile app that connects neighbors for fitness activities, making exercise social and local.",
  featured: true,
  links: {
    github: "",
    demo: "",
    other: "",
  },
  content: `
## Overview

Exercising Spark is a community-driven mobile application designed to combat sedentary lifestyles by connecting residents within the same HDB neighborhood for fitness activities. The app helps users find exercise companions, fostering both physical health and social integration within the community.

## The Problem

Many people are less active due to lack of motivation or companions. Finding like-minded neighbors with similar schedules and sports interests can be difficult.

## Key Features

- **Location-Based Matchmaking:** Custom search radius (e.g., up to 15km) to discover nearby users interested in exercising.
- **Real-Time Global Chat:** Coordinate meetups and discuss fitness goals in real-time using Firebase Realtime Database.
- **Personalized Profiles:** Users list preferred exercises, gender, and a short bio to find compatible partners.
- **Interactive Maps:** Google Maps integration for location detection and visualizing nearby activity hubs.
- **Integrated Sports Resource:** Built-in Web View for searching sports-related information and activity ideas.

## Technical Implementation

- **Backend & Authentication:** Firebase Authentication and Realtime Database for secure login, live chat, and presence.
- **Local Data:** SQLite used for efficient local storage of preferences and offline support.
- **Location Services:** Google Maps API for latitude/longitude detection and mapping.
- **UI/UX:** Custom splash screen, media integration, and a dynamic "Search Radius" slider.

## Impact

Exercising Spark lowers the barrier to a healthy lifestyle by making companionship accessible and encouraging social bonding through shared sporting interests.
  `

};
if (typeof window !== 'undefined') window.PROJECT_exercising_spark = PROJECT_exercising_spark;
