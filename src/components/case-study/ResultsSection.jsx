export default function ResultsSection({ results = [] }) {
  const placeholderResults = [
    { metric: '95%', label: 'Uptime in production' },
    { metric: '40%', label: 'Reduction in manual effort' },
    { metric: '3×', label: 'Faster data processing' },
    { metric: '100+', label: 'Daily active users' },
  ]

  const items = results.length > 0 ? results : placeholderResults

  return (
    <section className="mb-16">
      <p className="section-label">Results</p>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Impact &amp; Outcomes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map(({ metric, label }) => (
          <div
            key={label}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center"
          >
            <p className="text-3xl font-bold text-indigo-400 mb-1">{metric}</p>
            <p className="text-slate-400 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
