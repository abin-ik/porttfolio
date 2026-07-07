export default function SolutionSection({ solution }) {
  return (
    <section className="mb-16">
      <p className="section-label">The Solution</p>
      <h2 className="text-2xl font-bold text-slate-100 mb-4">How it was built</h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-slate-300 leading-relaxed text-lg">
          {solution ||
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. The approach involved a careful architectural design, 
             iterative prototyping, and continuous testing against real-world data. Each 
             component was built with modularity and maintainability in mind, enabling rapid 
             iteration without accumulating technical debt.`}
        </p>
      </div>
    </section>
  )
}
