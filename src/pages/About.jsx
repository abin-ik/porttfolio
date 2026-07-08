import CTAButton from '../components/shared/CTAButton'

const TIMELINE = [
  {
    year: '2022 – 2025',
    role: 'Bachelor of Computer Applications (BCA), Kannur University',
    desc: 'Studied at Depaul Arts & Science College, Edathotty, Kannur, while building production ML and full-stack systems alongside coursework.',
  },
  {
    year: '2025 ',
    role: 'AI Engineer Intern, Tech By Heart Pvt. Ltd',
    desc: 'Deployed an AI vs Real Image Detection system (CNN + ViT ensemble via FastAPI), built an AI-powered Resume Analyzer used in live recruitment workflows, and fine-tuned a DialoGPT-based AI chatbot.',
  },
  {
    year: '2025',
    role: 'E-Commerce Platform for Supermarket — Full-Stack + AI Automation',
    desc: 'Built a production Amazon-style supermarket platform handling 25,000+ products, with a large-scale AI-powered image scraping/background-removal pipeline, an automated database sync agent, and n8n workflow orchestration.',
  },
  {
    year: 'Ongoing',
    role: 'Neural Networks From First Principles',
    desc: 'Deepening foundations in neural network mathematics — implementing forward and back-propagation from scratch in NumPy.',
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
            I'm an AI Engineer and Full-Stack Developer who enjoys building real-world software
            that solves business problems. My work spans artificial intelligence, backend systems,
            mobile applications, web development, automation, and cloud deployment.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I have built and deployed a production supermarket platform featuring Android and web
            applications, an admin dashboard, inventory and order management, payment integration,
            AI-powered shopping assistance, and intelligent automation. The platform supports more
            than 25,000 products and is actively used by a real business.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Beyond full-stack development, I build AI solutions including semantic search systems,
            vector-based retrieval, custom convolutional neural networks, neural networks from
            scratch, and workflow automation using modern AI tools. I enjoy understanding how AI
            works at a fundamental level, from mathematical concepts like derivatives and
            backpropagation to deploying AI applications in production.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            My goal is to create practical AI products that make businesses more efficient through
            intelligent automation and scalable software. I'm always exploring new technologies,
            solving challenging engineering problems, and building systems that have a real impact.
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
