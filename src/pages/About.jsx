import CTAButton from '../components/shared/CTAButton'

const TIMELINE = [
  {
    year: '2024–Present',
    role: 'Freelance Full-Stack & AI/ML Developer',
    desc: 'Building end-to-end AI-powered web applications for clients across e-commerce, logistics, and SaaS.',
  },
  {
    year: '2023',
    role: 'AI Integration Lead',
    desc: 'Led the AI/ML workstream for a supermarket platform — semantic search, product recommendations, and chatbot integration.',
  },
  {
    year: '2022',
    role: 'Backend Developer',
    desc: 'Designed and maintained Django REST APIs, Celery task queues, and PostgreSQL schemas for a high-traffic platform.',
  },
  {
    year: '2021',
    role: 'Self-Directed Learning',
    desc: 'Deep-dived into machine learning fundamentals — built neural networks from scratch, trained CNN models, and explored NLP.',
  },
]

const VALUES = [
  { emoji: '🎯', title: 'Precision', desc: 'Clean, deliberate code over hacky solutions.' },
  { emoji: '🚀', title: 'Delivery', desc: 'Reliable shipping — scope, timeline, quality.' },
  { emoji: '🔍', title: 'Curiosity', desc: 'Always learning; always improving the craft.' },
  { emoji: '🤝', title: 'Clarity', desc: 'Transparent communication throughout every project.' },
]

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label">About Me</p>
          <h1 className="section-heading">Full-Stack &amp; AI/ML Developer</h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm a developer who sits at
            the intersection of software engineering and machine intelligence — comfortable
            building production backends, training custom models, and shipping polished user interfaces.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            My work spans Django/FastAPI backends, PyTorch CNN models, LangChain RAG pipelines,
            and React frontends. I care about code that scales, systems that are observable,
            and products that genuinely solve problems.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {VALUES.map(({ emoji, title, desc }) => (
            <div key={title} className="card p-5 text-center">
              <span className="text-2xl block mb-2">{emoji}</span>
              <p className="font-semibold text-slate-100 text-sm mb-1">{title}</p>
              <p className="text-slate-500 text-xs">{desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <p className="section-label">Experience</p>
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Timeline</h2>
          <div className="relative pl-6 border-l border-slate-800 space-y-10">
            {TIMELINE.map(({ year, role, desc }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-950" />
                <p className="text-xs font-mono text-indigo-400 mb-1">{year}</p>
                <h3 className="font-semibold text-slate-100 mb-1">{role}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <CTAButton to="/contact">Work With Me</CTAButton>
          <CTAButton to="/projects" variant="secondary">View Projects</CTAButton>
        </div>
      </div>
    </div>
  )
}
