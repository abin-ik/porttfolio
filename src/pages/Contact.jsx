import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        {/* Header */}
        <p className="section-label">Get In Touch</p>
        <h1 className="section-heading">Contact</h1>
        <p className="section-subheading mb-16">
          Have a project idea, a question, or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info (left) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
                Direct
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-xl">✉️</span>
                    <span>hello@example.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
                Online
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-xl">🐙</span>
                    <span>github.com/username</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-xl">💼</span>
                    <span>linkedin.com/in/username</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-slate-100 mb-2">⏱️ Availability</p>
              <p className="text-slate-400 text-sm">
                Currently available for new projects. Typical response time: &lt; 24 hours.
              </p>
            </div>
          </div>

          {/* Form (right) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-1.5">
                    Name <span className="text-indigo-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-1.5">
                    Email <span className="text-indigo-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project brief, question, etc."
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-1.5">
                  Message <span className="text-indigo-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget…"
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 text-sm">
                  ✓ Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 text-sm">
                  Something went wrong. Please email me directly at hello@example.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
