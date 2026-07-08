import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import TechStackPill from './TechStackPill'

/**
 * ProjectCard — reusable card for use on Home highlights and Projects grid.
 * Accepts a `project` object from data/projects.js.
 */
export default function ProjectCard({ project }) {
  const { slug, title, status, tags, summary, stack, thumbnail, liveUrl } = project

  return (
    <Link to={`/projects/${slug}`} className="card block group">
      {/* Thumbnail */}
      <div className="relative h-48 bg-slate-800 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : null}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} />
        </div>
        {/* Live site badge */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 left-3 flex items-center gap-1 text-xs font-medium text-white bg-emerald-600/90 hover:bg-emerald-500 px-2 py-0.5 rounded transition-colors"
          >
            Visit Live Site ↗
          </a>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-semibold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {summary}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
          {stack.slice(0, 4).map((tech) => (
            <TechStackPill key={tech} tech={tech} />
          ))}
          {stack.length > 4 && (
            <span className="tech-pill text-slate-500">+{stack.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
