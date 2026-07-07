import { Link } from 'react-router-dom'
import { getProjectBySlug } from '../../data/projects'
import StatusBadge from '../../components/shared/StatusBadge'
import TechStackPill from '../../components/shared/TechStackPill'
import CTAButton from '../../components/shared/CTAButton'

const project = getProjectBySlug('concepts')

const CONCEPT_DETAILS = [
  {
    title: 'RAG Auditor',
    emoji: '🔍',
    description:
      'A CLI tool for auditing Retrieval-Augmented Generation pipelines. Evaluates hallucination rate, context coverage, and answer faithfulness using automated test suites and LLM-as-judge scoring.',
    stack: ['Python', 'LangChain', 'OpenAI API', 'Click', 'Rich'],
    status: 'Concept',
  },
  {
    title: 'GymVerse',
    emoji: '💪',
    description:
      'An AI-powered fitness platform that generates personalised workout and nutrition plans based on user goals, body metrics, and equipment availability — then adapts week-over-week based on progress data.',
    stack: ['React', 'Next.js', 'FastAPI', 'Supabase', 'OpenAI API'],
    status: 'Concept',
  },
  {
    title: 'Website Generator',
    emoji: '🌐',
    description:
      'An agentic system that takes a short creative brief and autonomously generates a fully functional, deployed website — including custom design, copywriting, image generation, and hosting on a subdomain.',
    stack: ['Python', 'LangChain', 'React', 'Vite', 'Vercel API', 'DALL-E'],
    status: 'Concept',
  },
]

export default function Concepts() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-300">Concepts</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatusBadge status="Concept" />
            {project?.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            Concept Projects
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Three planned projects at various stages of ideation — detailed briefs, defined tech stacks,
            and clear product visions ready to move into development.
          </p>
        </header>

        <div className="border-t border-slate-800 mb-16" />

        {/* Concept cards */}
        <div className="space-y-10">
          {CONCEPT_DETAILS.map(({ title, emoji, description, stack, status }) => (
            <div key={title} className="card p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{emoji}</span>
                  <h2 className="text-xl font-bold text-slate-100">{title}</h2>
                </div>
                <StatusBadge status={status} />
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">{description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {stack.map((tech) => (
                  <TechStackPill key={tech} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-slate-100 mb-3">Interested in collaborating?</h2>
          <p className="text-slate-400 text-sm mb-6">
            These concepts are open for discussion — if any of them solve a problem you're facing, let's talk.
          </p>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  )
}
