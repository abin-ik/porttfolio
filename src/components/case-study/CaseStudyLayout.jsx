import { Link } from 'react-router-dom'
import StatusBadge from '../shared/StatusBadge'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import StackSection from './StackSection'
import ResultsSection from './ResultsSection'
import ScreenshotGallery from './ScreenshotGallery'

/**
 * CaseStudyLayout — reusable template used by every individual project page.
 *
 * Props:
 *   project       — the project object from data/projects.js (required)
 *   problem       — problem statement string (optional, defaults to lorem ipsum)
 *   solution      — solution narrative string (optional, defaults to lorem ipsum)
 *   results       — array of { metric, label } objects (optional)
 *   screenshots   — array of { src, alt, caption? } objects (optional)
 *   children      — any additional content after Results (optional)
 */
export default function CaseStudyLayout({
  project,
  problem,
  solution,
  results,
  screenshots,
  children,
}) {
  if (!project) return null

  const { title, status, tags, stack, summary, liveUrl } = project

  return (
    <article className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-300">{title}</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatusBadge status={status} />
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed mb-6">
            {summary}
          </p>

          {liveUrl && (
            
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Visit Live Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </header>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-16" />

        {/* Sections */}
        <ProblemSection problem={problem} />
        <SolutionSection solution={solution} />
        <StackSection stack={stack} />
        <ResultsSection results={results} />
        <ScreenshotGallery screenshots={screenshots} />

        {/* Extra content slot */}
        {children}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </article>
  )
}