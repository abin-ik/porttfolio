import { useState, useMemo } from 'react'
import projects, { getAllTags } from '../data/projects'
import ProjectCard from '../components/shared/ProjectCard'

const ALL = 'All'
const STATUSES = [ALL, 'Live', 'Prototype', 'Concept']

export default function Projects() {
  const [activeTag, setActiveTag] = useState(ALL)
  const [activeStatus, setActiveStatus] = useState(ALL)

  const tags = [ALL, ...getAllTags()]

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const tagMatch = activeTag === ALL || p.tags.includes(activeTag)
      const statusMatch = activeStatus === ALL || p.status === activeStatus
      return tagMatch && statusMatch
    })
  }, [activeTag, activeStatus])

  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        {/* Header */}
        <p className="section-label">Portfolio</p>
        <h1 className="section-heading">All Projects</h1>
        <p className="section-subheading mb-10">
          A complete collection of projects — from production systems to research prototypes and planned concepts.
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Tag filter */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                  activeTag === tag
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Status filter */}
          <div className="flex gap-2 sm:ml-auto">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                  activeStatus === s
                    ? 'bg-slate-700 border-slate-600 text-slate-100'
                    : 'border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No projects match the selected filters.</p>
          </div>
        )}

        <p className="mt-6 text-slate-600 text-sm">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>
    </div>
  )
}
