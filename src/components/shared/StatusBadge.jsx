export default function StatusBadge({ status }) {
  const variants = {
    Live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Prototype: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Concept: 'bg-slate-700/50 text-slate-400 border-slate-600',
  }

  const dots = {
    Live: 'bg-emerald-400',
    Prototype: 'bg-amber-400',
    Concept: 'bg-slate-500',
  }

  const classes = variants[status] ?? variants.Concept
  const dotClass = dots[status] ?? dots.Concept

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${classes}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      {status}
    </span>
  )
}
