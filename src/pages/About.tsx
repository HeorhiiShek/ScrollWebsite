export default function About() {
  return (
    <div
      className="min-h-screen bg-bg flex items-center justify-center px-6 pt-14"
    >
      <div className="max-w-sm w-full flex flex-col items-center text-center gap-7">

        {/* Portrait */}
        <div
          className="w-28 h-28 rounded-full overflow-hidden"
          style={{ boxShadow: '0 4px 24px rgba(28,25,23,0.10)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl font-light tracking-[0.06em] text-ink">
          Gosha
        </h1>

        {/* Bio */}
        <p className="font-body text-base font-light text-ink leading-[1.8] tracking-[0.01em]" style={{ color: '#4a4540' }}>
          A short sentence about who you are. What you do, where you are, what this site is about. Keep it under three lines.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-300"
          >
            Instagram
          </a>
          <span style={{ color: '#c9a96e', fontSize: '0.5rem' }}>●</span>
          <a
            href="mailto:your@email.com"
            className="font-body text-xs tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-300"
          >
            Email
          </a>
        </div>

      </div>
    </div>
  )
}
