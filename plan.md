# Portfolio Website — Build Plan

## Goal
Build a fully functional multi-page React portfolio (not a single-scroll template) for a
full-stack + AI/ML developer targeting freelance clients. Phase 1: scaffold everything with
placeholder content/colors. Phase 2 (later, manual): fill real content + polish design.

## Stack
- Vite + React + React Router
- Tailwind CSS
- Deploy target: Vercel (static, + one serverless function for contact form)
- No auth, no database needed for Phase 1

## Task: Scaffold the full project structure below with placeholder/dummy content
and rough colors in every file. Every route must render and link correctly.
Do not worry about final design or copy — that's a later manual pass.

## Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── supermarket/
│   │   │   ├── ai-assistant/
│   │   │   ├── cnn-detector/
│   │   │   └── automation/
│   │   └── og-image.png
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageWrapper.jsx
│   │   ├── shared/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── StatusBadge.jsx        (Live / Prototype / Concept tag)
│   │   │   ├── TechStackPill.jsx
│   │   │   └── CTAButton.jsx
│   │   └── case-study/
│   │       ├── CaseStudyLayout.jsx    (Problem → Solution → Stack → Results)
│   │       ├── ProblemSection.jsx
│   │       ├── SolutionSection.jsx
│   │       ├── StackSection.jsx
│   │       ├── ResultsSection.jsx
│   │       └── ScreenshotGallery.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx               (grid + filter by tag/status)
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── projects/
│   │       ├── SupermarketPlatform.jsx
│   │       ├── AiShoppingAssistant.jsx
│   │       ├── CnnImageDetector.jsx
│   │       ├── NeuralNetworkScratch.jsx
│   │       ├── AutomationWorkflows.jsx
│   │       └── Concepts.jsx           (RAG Auditor, GymVerse, Website Generator)
│   │
│   ├── data/
│   │   └── projects.js                (single source of truth for all project metadata)
│   │
│   ├── router/
│   │   └── AppRouter.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── api/
│   └── contact.js                     (Vercel serverless function, sends email)
│
├── tailwind.config.js
├── vite.config.js
├── package.json
└── vercel.json
```

## Routes (React Router)
- `/` → Home
- `/projects` → Projects grid
- `/projects/supermarket-platform`
- `/projects/ai-shopping-assistant`
- `/projects/cnn-image-detector`
- `/projects/neural-network-scratch`
- `/projects/automation-workflows`
- `/projects/concepts`
- `/services`
- `/about`
- `/contact`

## Home Page (single scroll) — sections in order
1. Hero (headline + CTA button)
2. Highlights (top 3 project cards, pulled from `data/projects.js`, link out to case study pages)
3. Services (short list, links to `/services`)
4. Skills/Stack (grouped: Backend, AI/ML, Automation, Frontend)
5. About (short blurb, links to `/about`)
6. Contact (form + direct links)

## `data/projects.js` — shape for each project object
```js
{
  slug: "supermarket-platform",
  title: "AI-Powered Supermarket Platform",
  status: "Live",          // "Live" | "Prototype" | "Concept"
  tags: ["E-commerce", "AI/ML", "Backend"],
  summary: "Short one-line description for cards.",
  stack: ["Django", "FastAPI", "Docker", "Nginx", "Sentence-Transformers"],
  thumbnail: "/images/projects/supermarket/thumb.png",
  featured: true
}
```
Include entries for all projects: Supermarket Platform, AI Shopping Assistant,
CNN Image Detector, Neural Network From Scratch, Automation Workflows, and one
combined "Concepts" entry for planned projects (RAG Auditor, GymVerse, Website Generator).

## Shared Components — requirements
- `Navbar.jsx` — sticky, links to all top-level routes, mobile menu
- `Footer.jsx` — contact links, copyright
- `ProjectCard.jsx` — reused on Home (highlights) and Projects grid; takes a project object as prop
- `StatusBadge.jsx` — colored tag: Live (green), Prototype (yellow), Concept (gray)
- `CaseStudyLayout.jsx` — reusable wrapper used by every individual project page,
  accepts sections as children/props (Problem, Solution, Stack, Results, Screenshots)

## Contact Form
- Simple form (name, email, message) on `/contact`
- Submits to `api/contact.js` (Vercel serverless function) which sends an email
  (placeholder logic fine for now — e.g. console.log or Resend/Formspree stub)

## Design Notes for Phase 1 (placeholder only)
- Use a basic Tailwind color palette (e.g. slate/indigo) as placeholder — final palette
  and typography will be decided in a later polish pass
- Every page should render without errors and be reachable via Navbar links
- Use dummy lorem-ipsum-style text where real copy isn't ready yet, but keep real
  project titles/slugs/status/tags accurate per `data/projects.js`

## Explicitly Out of Scope for This Phase
- Final visual design/branding
- Final written case-study copy
- Supabase or any database
- Authentication
- Blog/CMS functionality

## Deliverable
A working Vite React app, deployable to Vercel with zero errors, with all routes,
components, and data file scaffolded per the structure above, using placeholder
content and colors — ready for manual content + design pass afterward.
