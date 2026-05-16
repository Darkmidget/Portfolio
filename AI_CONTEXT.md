# AI Context & Project Structure

This file provides future AI coding assistants with a clear understanding of the project's folder structure, architecture, and data flow. Use this reference to write more accurate code modifications and better comprehend dependencies.

## 📂 Folder Structure

- **`/` (Root)**: Contains main HTML views (e.g., `index.html`, `project.html`, `editor.html`, `analytics.html`).
- **`/.github/workflows/`**: CI/CD automation. Notably, `analytics-export.yml` runs weekly to aggregate analytics data.
- **`/analytics-exports/`**: JSON snapshots containing anonymous visitor statistics pushed by GitHub Actions.
- **`/resources/`**: Static assets. `resources/Pictures/<project-id>/` houses images for each individual project.
- **`/src/data/`**: The core data layer.
  - `projects.js`: Central configuration for the user's Profile, Skills, and project array aggregation logic.
  - `/projects/`: Contains individual JS files for each project (e.g., `delivery-robot.js`) defining a global variable.
  - `/projects/manifest.json`: Array dictating the specific project files to be loaded.
  - `/projects/loader.js`: Async loader that fetches the manifest, injects all individual project scripts, loads `projects.js`, and finally boots `app.js`.
- **`/src/js/`**: Core frontend business logic and class definitions (e.g., `analytics.js` for privacy-centric local tracking).
- **`/src/scripts/js/`**: Extra lightweight UI utilities and helpers (e.g., `scripts.js`).
- **`/tools/`**: Local developer scripts (Node.js). E.g., `update-project-manifest.js` quickly adds a newly created project to the manifest.

## 🏗️ Architecture & Design Principles

1. **Decoupled Data Rendering**: The frontend dynamically renders HTML views based entirely on JavaScript data objects, ensuring that data is easily managed without touching structural HTML.
2. **Privacy-First Analytics**: Tracking is handled completely client-side utilizing browser `localStorage` and optionally pushing aggregated data via a GitHub Gist API or GitHub Actions. No database or third-party tracking services are implemented.
3. **Automated Loading**: Instead of manually mapping scripts, the frontend dynamically maps available projects using `/src/data/projects/loader.js` and `manifest.json`.

## 🛠️ Standard Procedure: Adding a New Project

When instructed to create or update a project, strictly follow these steps:
1. Generate a new file formatted as `src/data/projects/<project-id>.js`.
2. Populate the global object based on the template in `src/data/projects.js`.
3. Register the file to the system by executing: `node tools/update-project-manifest.js <project-id>.js`.
4. Ensure that any newly referenced images are logically path-mapped to `resources/Pictures/<project-id>/`.