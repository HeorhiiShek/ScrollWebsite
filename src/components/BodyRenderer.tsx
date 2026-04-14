import { BodyBlock } from '../data/stories'

interface Props {
  blocks: BodyBlock[]
}

export default function BodyRenderer({ blocks }: Props) {
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        if (block.type === 'text') {
          return (
            <p
              key={i}
              className="font-body text-ink font-light text-base sm:text-lg leading-[1.85] tracking-[0.01em]"
            >
              {block.content}
            </p>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={i} className="my-10">
              <img
                src={block.src}
                alt={block.caption ?? ''}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: '520px' }}
              />
              {block.caption && (
                <figcaption className="mt-3 font-body text-xs text-muted tracking-[0.1em] uppercase text-center">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )
        }

        if (block.type === 'video') {
          // Detect YouTube/Vimeo embed URLs vs direct video files
          const isEmbed = block.src.includes('youtube') || block.src.includes('vimeo')
          return (
            <div key={i} className="my-10 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              {isEmbed ? (
                <iframe
                  src={block.src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={block.src}
                  poster={block.poster}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )
        }

        if (block.type === 'link') {
          return (
            <a
              key={i}
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm tracking-[0.12em] uppercase
                         text-ink border-b border-gold pb-0.5
                         hover:text-gold transition-colors duration-300"
            >
              {block.label}
              <span className="text-gold">↗</span>
            </a>
          )
        }

        return null
      })}
    </div>
  )
}
