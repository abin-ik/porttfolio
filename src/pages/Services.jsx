import CTAButton from '../components/shared/CTAButton'

const SERVICES = [
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    points: [
      'REST API design and development (Django / FastAPI)',
      'PostgreSQL schema design and query optimisation',
      'Docker containerisation and deployment',
      'Redis caching and background task queues (Celery)',
      'Nginx reverse-proxy configuration',
    ],
    startingAt: 'From $800',
  },
  {
    icon: '🤖',
    title: 'AI / ML Integration',
    points: [
      'LLM integration (OpenAI, Anthropic, local models)',
      'RAG pipeline design and evaluation',
      'Semantic search with vector embeddings',
      'Computer vision model training (PyTorch)',
      'Custom ML pipeline from data to deployment',
    ],
    startingAt: 'From $1,200',
  },
  {
    icon: '🔄',
    title: 'Automation Workflows',
    points: [
      'Data ingestion and ETL pipelines',
      'Scheduled report generation',
      'GitHub Actions CI/CD setup',
      'Webhook integrations and event-driven systems',
      'Business process automation scripts',
    ],
    startingAt: 'From $600',
  },
  {
    icon: '🖥️',
    title: 'Full-Stack Web Applications',
    points: [
      'React + Vite frontend development',
      'Tailwind CSS responsive UI design',
      'Full-stack MVP development (React + Django/FastAPI)',
      'SaaS product scaffolding',
      'Vercel / Railway / VPS deployment',
    ],
    startingAt: 'From $1,500',
  },
]

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        {/* Header */}
        <p className="section-label">What I Offer</p>
        <h1 className="section-heading">Services</h1>
        <p className="section-subheading mb-16">
          Specialised development services for startups, scale-ups, and individuals who need
          a reliable technical partner — from early MVP to production-grade systems.
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map(({ icon, title, points, startingAt }) => (
            <div key={title} className="card p-8">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{icon}</span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  {startingAt}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-100 mb-4">{title}</h2>
              <ul className="space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-indigo-500 mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-16">
          <p className="section-label">How It Works</p>
          <h2 className="text-2xl font-bold text-slate-100 mb-8">My Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {['Discovery', 'Proposal', 'Build', 'Deliver'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <p className="font-semibold text-slate-100 mb-1">{step}</p>
                <p className="text-slate-500 text-xs">
                  {[
                    'Understand your goals and constraints.',
                    'Clear scope, timeline, and pricing.',
                    'Regular updates, transparent progress.',
                    'Clean code, docs, and deployment support.',
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Ready to start a project?</h2>
          <p className="text-slate-400 mb-8">
            Let's discuss your requirements and find the best approach together.
          </p>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>
      </div>
    </div>
  )
}
