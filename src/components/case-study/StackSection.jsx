import TechStackPill from '../shared/TechStackPill'

export default function StackSection({ stack = [] }) {
  return (
    <section className="mb-16">
      <p className="section-label">Tech Stack</p>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Tools &amp; Technologies</h2>
      {stack.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechStackPill key={tech} tech={tech} />
          ))}
        </div>
      ) : (
        <p className="text-slate-400">Stack details coming soon.</p>
      )}
    </section>
  )
}
