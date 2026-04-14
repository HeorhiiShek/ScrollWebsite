import { useParams, Link, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import BodyRenderer from '../components/BodyRenderer'

export default function Story() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const storyIndex = stories.findIndex(s => s.slug === slug)
  const story = stories[storyIndex]

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-14">
        <p className="font-heading text-3xl text-ink font-light">Story not found.</p>
        <Link to="/" className="font-body text-xs text-muted tracking-[0.15em] uppercase hover:text-ink transition-colors duration-300">
          ← Back home
        </Link>
      </div>
    )
  }

  const nextStory = stories[(storyIndex + 1) % stories.length]

  return (
    <article className="pt-14 pb-24 bg-bg">

      {/* Hero image */}
      <div className="w-full relative" style={{ height: 'clamp(280px, 55vh, 640px)' }}>
        <img
          src={story.heroImage}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(245,242,236,0.6) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8">

        {/* Back link */}
        <button
          onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
          className="mt-10 mb-8 font-body text-xs text-muted tracking-[0.18em] uppercase
                     hover:text-ink transition-colors duration-300 flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Title + date */}
        <header className="mb-12 pb-8" style={{ borderBottom: '1px solid rgba(28,25,23,0.08)' }}>
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-[-0.01em] text-ink leading-tight mb-3">
            {story.title}
          </h1>
          <time className="font-body text-xs text-muted tracking-[0.18em] uppercase">
            {story.date}
          </time>
        </header>

        {/* Body */}
        <BodyRenderer blocks={story.body} />

        {/* Next story */}
        <div className="mt-20 pt-10" style={{ borderTop: '1px solid rgba(28,25,23,0.08)' }}>
          <p className="font-body text-xs text-muted tracking-[0.18em] uppercase mb-4">Next story</p>
          <Link
            to={`/stories/${nextStory.slug}`}
            className="group flex items-center justify-between gap-4
                       hover:text-gold transition-colors duration-300"
          >
            <span className="font-heading text-2xl sm:text-3xl font-light text-ink group-hover:text-gold transition-colors duration-300">
              {nextStory.title}
            </span>
            <span className="text-gold text-xl shrink-0">→</span>
          </Link>
        </div>

      </div>
    </article>
  )
}
