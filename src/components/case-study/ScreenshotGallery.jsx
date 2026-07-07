import { useState } from 'react'

/**
 * ScreenshotGallery — renders a list of screenshot images.
 * Falls back to placeholder boxes if no screenshots are provided.
 *
 * Props:
 *   screenshots — array of { src, alt, caption? }
 */
export default function ScreenshotGallery({ screenshots = [] }) {
  const [lightbox, setLightbox] = useState(null)

  const placeholders = [
    { src: '', alt: 'Screenshot placeholder 1', caption: 'Dashboard overview' },
    { src: '', alt: 'Screenshot placeholder 2', caption: 'Feature detail view' },
    { src: '', alt: 'Screenshot placeholder 3', caption: 'Mobile responsive layout' },
  ]

  const items = screenshots.length > 0 ? screenshots : placeholders

  return (
    <section className="mb-16">
      <p className="section-label">Screenshots</p>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Visual Walkthrough</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <button
            key={i}
            className="group relative bg-slate-800 rounded-xl overflow-hidden aspect-video border border-slate-700 hover:border-indigo-500/50 transition-all text-left"
            onClick={() => img.src && setLightbox(img)}
            aria-label={img.alt}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-slate-600 text-sm font-mono">[ screenshot ]</span>
              </div>
            )}
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 px-3 py-2">
                <p className="text-slate-300 text-xs">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}
    </section>
  )
}
