# Vincent Ho — Portfolio

A professional, data-driven portfolio website built with vanilla HTML, CSS, and JavaScript.  
Hosted on GitHub Pages — no build tools, no APIs, no tokens.

---

## Features

- ✅ **No dependencies, no build tools** — Pure HTML, CSS, JavaScript
- ✅ **No APIs or tokens** — Everything is static, safe to host on GitHub Pages
- ✅ **One data file** — Edit `src/data/projects.js` to manage all content
- ✅ **Project search & filtering** — By category, tags, or free text search
- ✅ **Markdown support** — Write project docs in Markdown, rendered automatically
- ✅ **Project editor tool** — Built-in form to generate project entries
- ✅ **Image & file support** — Easily link photos, documents, videos, PDFs
- ✅ **Responsive design** — Works on mobile, tablet, desktop
- ✅ **Dark theme** — Modern, professional styling with smooth animations
- ✅ **GitHub Pages ready** — Just push to deploy

---

## Quick Start

1. Clone the repo
2. Open `index.html` in a browser (or use Live Server in VS Code)
3. Edit `src/data/projects.js` to manage your content
4. Push to GitHub to deploy via GitHub Pages

---

## Features & How to Use

### 1. **Project Gallery with Search & Filters**
- **Page**: `projects.html`
- **How to use**: 
  - Search by project title, summary, tags, or category
  - Click filter buttons to show only projects in a specific category
  - Click any project card to see the full details and documentation

### 2. **Project Details with Markdown**
- **Page**: `project.html?id=<project-id>`
- **How to use**:
  - View full project documentation with formatted text, images, links, code blocks
  - Click GitHub or Demo links to external resources
  - See project status (completed, in-progress, planning, on-hold) with status badges

### 3. **Homepage Dashboard**
- **Page**: `index.html`
- **How to use**:
  - Hero section with quick call-to-action buttons
  - View featured projects (mark `featured: true` in `projects.js` to display)
  - See skills grouped by category
  - Quick project stats (total projects, completed, in progress, technologies)

### 4. **Built-in Project Editor Tool**
- **Page**: `editor.html` (⭐ Recommended for adding new projects)
- **How to use**:
  1. Fill in project details (title, category, status, date, tags)
  2. Write project documentation using the Markdown editor
  3. Use the **Markdown toolbar** for quick formatting:
     - **H** — Insert heading
     - **B** — Bold text
     - **I** — Italic text
     - **</> ** — Code (inline or block)
     - **• List** — Bullet list
     - **1. List** — Numbered list
     - **🔗** — Insert link
     - **🖼** — Insert image
     - **—** — Horizontal rule
     - **"** — Blockquote
  4. Drag & drop images to preview them (local preview only)
  5. Click **"Generate Code"** to create the project entry
  6. Copy to clipboard and paste into `src/data/projects.js`

### 5. **Contact Page**
- **Page**: `contact.html`
- **How to use**:
  - Displays your email and GitHub from `projects.js` profile data
  - Links are automatically formatted as cards
  - Update email/GitHub in `src/data/projects.js` profile section

---

## How to Add & Link Media Files

### Adding Project Images

#### **Option A: Using the Editor Tool (Easiest)**
1. Open `editor.html` in your browser
2. Drag & drop images into the drop zone to preview them
3. Note the filename
4. Create a folder: `resources/Pictures/<your-project-id>/` 
5. Manually save your images there
6. In the Markdown editor, insert: `![description](resources/Pictures/<your-project-id>/image.jpg)`
7. Generate and copy the code

#### **Option B: Adding Directly**

1. **Create a folder for your project images:**
   ```
   resources/Pictures/your-project-id/
   ```
   (Use the same `id` you set in `projects.js`)

2. **Add your images/files to that folder:**
   ```
   resources/Pictures/delivery-robot/
   ├── cover.jpg
   ├── robot-chassis.png
   ├── wiring-diagram.png
   └── final-assembly.jpg
   ```

3. **In `src/data/projects.js`, reference the images:**
   ```js
   {
     id: "delivery-robot",
     thumbnail: "resources/Pictures/delivery-robot/cover.jpg",  // Cover image
     content: `
   ## Overview
   This is the main content of the project.

   ![Robot Chassis](resources/Pictures/delivery-robot/robot-chassis.png)

   ### Hardware
   ![Wiring Diagram](resources/Pictures/delivery-robot/wiring-diagram.png)

   ![Final Assembly](resources/Pictures/delivery-robot/final-assembly.jpg)
     `
   }
   ```

### Supported File Types

#### **Images**
- `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- Use in Markdown: `![alt text](path/to/image.jpg)`
- Display in HTML: `<img src="path/to/image.jpg" alt="description">`

#### **Documents & Files**
- `.pdf`, `.doc`, `.docx`, `.xlsx`, `.csv`, `.zip`, `.txt`
- Link to them: `[Download PDF](resources/Documents/my-file.pdf)`
- Create folders: `resources/Documents/` or `resources/Files/`

#### **Code & Embedded Content**
- Use markdown code blocks:
  ```markdown
  ```python
  # Your code here
  print("Hello World")
  ```
  ```

#### **Videos**
- Place in: `resources/Videos/`
- Link to them: `[Watch Demo](resources/Videos/demo.mp4)`

#### **Diagrams & Architecture**
- `.png`, `.svg` work great
- Place in: `resources/Pictures/your-project-id/`
- Reference: `![Architecture](resources/Pictures/your-project-id/architecture.svg)`

---

## File Organization Recommendations

```
Portfolio/
├── README.md
├── index.html
├── projects.html
├── project.html
├── contact.html
├── editor.html
├── src/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── app.js
│   └── data/
│       └── projects.js              ← Edit this to add projects
├── resources/
│   ├── Pictures/
│   │   ├── self.png                 ← Profile picture
│   │   ├── delivery-robot/
│   │   │   ├── cover.jpg
│   │   │   ├── wiring.png
│   │   │   └── ...
│   │   ├── portfolio-website/
│   │   │   ├── screenshot.png
│   │   │   └── ...
│   │   └── trading-search/
│   │       └── ...
│   ├── Documents/                   ← Optional
│   │   └── resume.pdf
│   ├── Videos/                      ← Optional
│   │   └── robot-demo.mp4
│   └── Downloads/                   ← Optional
│       └── slides.pdf
└── .git/
```

---

## How to Add a New Project

### Step 1: Create Media Folders (if needed)
```bash
mkdir -p resources/Pictures/my-project
# Copy your images here
```

### Step 2: Generate Project Entry

**Using the Editor Tool (Recommended):**
1. Open `editor.html`
2. Fill in: title, category, status, date, tags
3. Write Markdown documentation
4. Link images: `![caption](resources/Pictures/my-project/image.jpg)`
5. Click **"Generate Code"**
6. Copy the output

**Or Edit Directly:**

1. Open `src/data/projects.js`
2. Copy an existing project or use the template at the top
3. Fill in all fields (see format below)

### Step 3: Paste into projects.js

```js
const PORTFOLIO_DATA = {
  profile: { /* ... */ },
  skills: [ /* ... */ ],
  projects: [
    // ... existing projects ...
    {
      id: "my-awesome-project",
      title: "My Awesome Project",
      status: "completed",
      category: "Web Dev",
      tags: ["React", "Node.js", "MongoDB"],
      thumbnail: "resources/Pictures/my-awesome-project/cover.jpg",
      date: "2025",
      summary: "Built a real-time collaboration tool for teams.",
      featured: true,
      links: {
        github: "https://github.com/yourusername/repo",
        demo: "https://my-project.com",
        other: "",
      },
      content: `
## Project Overview
Detailed description here...

![Feature Demo](resources/Pictures/my-awesome-project/screenshot.png)

### Technical Stack
- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB

## Key Features
- Real-time updates
- User authentication
- Dark mode support

## Challenges & Solutions
Describe any interesting challenges and how you solved them.

## Results
What was the outcome? Metrics? User feedback?
      `
    },
    // ... more projects ...
  ]
};
```

### Step 4: Commit & Push
```bash
git add .
git commit -m "Add new project: My Awesome Project"
git push origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages"
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Save

Your portfolio will be live at: `https://darkmidget.github.io/Portfolio`

---

## Project Data Format Reference

```js
{
  // Unique identifier (used in URLs and project cards)
  id: "project-slug",

  // Display title
  title: "Project Title",

  // Status: completed | in-progress | planning | on-hold
  status: "completed",

  // For grouping and filtering
  category: "Web Dev",

  // Technologies used
  tags: ["HTML", "CSS", "JavaScript"],

  // Path to cover image (displayed on cards)
  // Leave empty for default code icon
  thumbnail: "resources/Pictures/project-id/cover.jpg",

  // Year or date string
  date: "2025",

  // One-liner for project cards (3-4 lines max)
  summary: "A short description of the project.",

  // Show on homepage? true | false
  featured: true,

  // External links
  links: {
    github: "https://github.com/username/repo",      // GitHub repo
    demo: "https://project.com",                      // Live demo/website
    other: "",                                        // Any other link
  },

  // Full documentation in Markdown
  // Supports: headings, bold, italic, code, lists, links, images, blockquotes
  content: `
## Section 1
Content here...

## Section 2
More content...
  `
}
```

---

## Profile & Skills

Edit the `profile` and `skills` sections in `src/data/projects.js`:

```js
const PORTFOLIO_DATA = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    avatar: "resources/Pictures/self.png",      // Your profile picture
    links: {
      github: "https://github.com/yourusername",
      email: "your@email.com",
    }
  },

  skills: [
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "React", category: "Frameworks" },
    // ... add more skills
  ],

  projects: [ /* ... */ ]
};
```

---

## Markdown Support

The portfolio supports full Markdown syntax:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

[Link text](https://example.com)
![Image alt](resources/Pictures/project/image.jpg)

- Bullet point
- Another point

1. Numbered item
2. Another item

> Blockquote text

\`\`\`python
# Code block
print("Hello")
\`\`\`

Inline \`code\` example

---
```

---

## Customization

### Change Colors
Edit the CSS custom properties at the top of `src/css/main.css`:

```css
:root {
  --color-primary: #6366f1;           /* Main accent color */
  --color-accent: #06b6d4;            /* Secondary accent */
  --color-bg: #09090b;                /* Background */
  --color-text: #fafafa;              /* Text color */
  /* ... more variables ... */
}
```

### Change Profile Information
Edit `src/data/projects.js` — update the `profile` object.

### Add/Remove Navigation Links
Edit `renderNavbar()` function in `src/js/app.js` to add custom pages.

---

## Deployment to GitHub Pages

1. **Ensure GitHub Pages settings are enabled:**
   - Go to repo → Settings → Pages
   - Source: Main branch
   - Publish at the root (default)

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Your site will be live at:**
   ```
   https://darkmidget.github.io/Portfolio
   ```

---

Links:
      https://darkmidget.github.io/Portfolio/index.html
