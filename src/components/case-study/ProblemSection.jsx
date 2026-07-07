export default function ProblemSection({ problem }) {
  return (
    <section className="mb-16">
      <p className="section-label">The Problem</p>
      <h2 className="text-2xl font-bold text-slate-100 mb-4">What needed solving?</h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-slate-300 leading-relaxed text-lg">
          {problem ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
             incididunt ut labore et dolore magna aliqua. The core challenge was understanding 
             the problem domain, identifying bottlenecks, and designing a solution that could 
             scale to real-world demands. Ut enim ad minim veniam, quis nostrud exercitation.`}
        </p>
      </div>
    </section>
  )
}
