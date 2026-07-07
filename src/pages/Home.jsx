import { Link } from 'react-router-dom'
import projects, { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/shared/ProjectCard'
import CTAButton from '../components/shared/CTAButton'
import { useState } from 'react'

// ─── Section: Hero ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-800/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="section-label mb-4">Full-Stack &amp; AI/ML Developer</p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 mb-6 leading-tight">
          Building{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Intelligent
          </span>{' '}
          Systems That Scale
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and build full-stack web applications and AI/ML systems — from
          backend APIs and computer vision pipelines to LLM integrations and
          production automation workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton to="/projects">View My Work</CTAButton>
          <CTAButton to="/contact" variant="secondary">Get In Touch</CTAButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#highlights"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}

// ─── Section: Highlights ─────────────────────────────────────────────────────
function HighlightsSection() {
  const featured = getFeaturedProjects()

  return (
    <section id="highlights" className="bg-slate-950">
      <div className="section-container">
        <p className="section-label">Featured Work</p>
        <h2 className="section-heading">Highlights</h2>
        <p className="section-subheading mb-12">
          A selection of projects spanning AI/ML, backend engineering, and scalable web platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton to="/projects" variant="secondary">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Services ───────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    desc: 'Scalable REST APIs, microservices, and data pipelines built with Django, FastAPI, and Docker.',
  },
  {
    icon: '🤖',
    title: 'AI/ML Integration',
    desc: 'LLM integrations, RAG pipelines, semantic search, and custom model training for production.',
  },
  {
    icon: '🔄',
    title: 'Automation Workflows',
    desc: 'End-to-end automation for data ingestion, reporting, and business process orchestration.',
  },
  {
    icon: '🖥️',
    title: 'Full-Stack Web Apps',
    desc: 'Modern React frontends paired with robust backends — from MVP to production-ready.',
  },
]

function ServicesSection() {
  return (
    <section id="services" className="bg-slate-900/50">
      <div className="section-container">
        <p className="section-label">What I Do</p>
        <h2 className="section-heading">Services</h2>
        <p className="section-subheading mb-12">
          From idea to deployment — I cover the full spectrum of modern software development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="card p-6">
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="text-base font-semibold text-slate-100 mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton to="/services" variant="secondary">
            Full Services List
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Skills/Stack ────────────────────────────────────────────────────
const SKILLS = {
  Backend: ['Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
  'AI / ML': ['PyTorch', 'Sentence-Transformers', 'LangChain', 'OpenAI API', 'OpenCV', 'NumPy', 'Pandas'],
  Automation: ['Celery', 'GitHub Actions', 'Python scripts', 'REST webhooks', 'Cron'],
  Frontend: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'React Router'],
}

function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950">
      <div className="section-container">
        <p className="section-label">Technical Expertise</p>
        <h2 className="section-heading">Skills &amp; Stack</h2>
        <p className="section-subheading mb-12">
          A curated toolkit for building full-stack and AI-powered applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="card p-5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-4">
                {group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: About ───────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-slate-900/50">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">About Me</p>
          <h2 className="section-heading">Who I Am</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I'm a full-stack and AI/ML developer with a passion for building systems that
            solve real problems at scale. From production backends serving thousands of
            daily users to custom neural networks trained from scratch, I thrive at the
            intersection of software engineering and machine intelligence.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Currently available for freelance projects — whether you need an AI integration,
            a scalable API, or an end-to-end web application, let's build something great together.
          </p>
          <CTAButton to="/about" variant="secondary">
            More About Me
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Contact ─────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-slate-950">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-8">
              Have a project in mind? I'm open to freelance engagements, consulting,
              and collaboration. Drop me a message and I'll get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span className="text-lg">✉️</span> hello@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span className="text-lg">🐙</span> github.com/username
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span className="text-lg">💼</span> linkedin.com/in/username
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="home-name" className="block text-sm text-slate-400 mb-1.5">
                Name
              </label>
              <input
                id="home-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="home-email" className="block text-sm text-slate-400 mb-1.5">
                Email
              </label>
              <input
                id="home-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="home-message" className="block text-sm text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="home-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm">✓ Message sent! I'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try emailing directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Home page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
