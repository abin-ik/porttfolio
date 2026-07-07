import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold text-slate-100 hover:text-indigo-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-indigo-500">&lt;</span>
          Dev
          <span className="text-indigo-500">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm py-2 px-4">
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-indigo-400 bg-indigo-500/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm py-2.5 w-full justify-center mt-2"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
