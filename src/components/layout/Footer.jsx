import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-slate-100 mb-2">
              <span className="text-indigo-500">&lt;</span>Dev
              <span className="text-indigo-500">/&gt;</span>
            </p>
            <p className="text-slate-500 text-sm">
              Full-Stack &amp; AI/ML Developer building intelligent systems and scalable web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                ['/', 'Home'],
                ['/projects', 'Projects'],
                ['/services', 'Services'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  hello@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {year} Portfolio. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm font-mono">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
