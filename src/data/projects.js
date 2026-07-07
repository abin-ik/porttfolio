/**
 * projects.js — single source of truth for all project metadata.
 * Status values: "Live" | "Prototype" | "Concept"
 */

const projects = [
  {
    slug: "supermarket-platform",
    title: "AI-Powered Supermarket Platform",
    status: "Live",
    tags: ["E-commerce", "AI/ML", "Backend"],
    summary:
      "A full-stack supermarket platform with AI-driven product recommendations, semantic search, and automated inventory management.",
    stack: ["Django", "FastAPI", "Docker", "Nginx", "Sentence-Transformers", "PostgreSQL", "Redis"],
    thumbnail: "/images/projects/supermarket/thumb.png",
    featured: true,
  },
  {
    slug: "ai-shopping-assistant",
    title: "AI Shopping Assistant",
    status: "Prototype",
    tags: ["AI/ML", "NLP", "Chatbot"],
    summary:
      "A conversational AI assistant that helps users find products, compare prices, and navigate a supermarket catalogue using natural language.",
    stack: ["Python", "LangChain", "OpenAI API", "FastAPI", "React", "TailwindCSS"],
    thumbnail: "/images/projects/ai-assistant/thumb.png",
    featured: true,
  },
  {
    slug: "cnn-image-detector",
    title: "CNN Image Detector",
    status: "Prototype",
    tags: ["AI/ML", "Computer Vision", "Deep Learning"],
    summary:
      "A convolutional neural network trained to classify and detect objects in supermarket product images with high accuracy.",
    stack: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib", "FastAPI"],
    thumbnail: "/images/projects/cnn-detector/thumb.png",
    featured: true,
  },
  {
    slug: "neural-network-scratch",
    title: "Neural Network From Scratch",
    status: "Prototype",
    tags: ["AI/ML", "Deep Learning", "Education"],
    summary:
      "A fully hand-rolled neural network implementation using only NumPy — no ML frameworks — for learning and teaching purposes.",
    stack: ["Python", "NumPy", "Matplotlib", "Jupyter Notebook"],
    thumbnail: "/images/projects/supermarket/thumb.png",
    featured: false,
  },
  {
    slug: "automation-workflows",
    title: "Automation Workflows",
    status: "Live",
    tags: ["Automation", "Backend", "DevOps"],
    summary:
      "A collection of production automation pipelines for data ingestion, report generation, and system health monitoring.",
    stack: ["Python", "Celery", "Redis", "Docker", "GitHub Actions", "FastAPI"],
    thumbnail: "/images/projects/automation/thumb.png",
    featured: false,
  },
  {
    slug: "concepts",
    title: "Concept Projects",
    status: "Concept",
    tags: ["AI/ML", "SaaS", "Automation"],
    summary:
      "A collection of planned projects: RAG Auditor (LLM evaluation CLI), GymVerse (AI fitness platform), and Website Generator (AI site builder).",
    stack: ["Python", "LangChain", "React", "Next.js", "Supabase"],
    thumbnail: "/images/projects/ai-assistant/thumb.png",
    featured: false,
    concepts: [
      {
        title: "RAG Auditor",
        description:
          "A CLI tool that audits Retrieval-Augmented Generation pipelines for hallucinations, coverage, and answer quality.",
        tags: ["AI/ML", "NLP", "CLI"],
      },
      {
        title: "GymVerse",
        description:
          "An AI-powered fitness platform that generates personalised workout and nutrition plans, tracks progress, and adapts over time.",
        tags: ["AI/ML", "SaaS", "Mobile"],
      },
      {
        title: "Website Generator",
        description:
          "An AI agent that takes a brief and autonomously generates a fully functional, deployed website with custom design and copy.",
        tags: ["AI/ML", "Automation", "SaaS"],
      },
    ],
  },
]

export default projects

/** Helpers */
export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
export const getProjectsByTag = (tag) =>
  projects.filter((p) => p.tags.includes(tag))
export const getAllTags = () =>
  [...new Set(projects.flatMap((p) => p.tags))].sort()
