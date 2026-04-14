import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import ReactLenis from 'lenis/react'
import { useRef } from 'react'

export interface ImageItem {
  src: string
  title: string
  slug: string
}

interface Props {
  images: ImageItem[]
  onImageClick: (slug: string) => void
}

function StickyCard({
  i, title, src, progress, range, targetScale, onClick,
}: {
  i: number
  title: string
  src: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  onClick: () => void
}) {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 18 + 120}px)`,
          boxShadow: '0 12px 48px rgba(28,25,23,0.10), 0 4px 16px rgba(28,25,23,0.06)',
        }}
        className="relative origin-top overflow-hidden cursor-pointer group rounded-xl
                   h-[62vh] w-[88vw]
                   sm:h-[68vh] sm:w-[72vw]
                   md:h-[72vh] md:w-[58vw]
                   lg:h-[76vh] lg:w-[46vw]"
        onClick={onClick}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.58) 0%, rgba(28,25,23,0.08) 45%, transparent 70%)' }}
        />
        {/* Title reveal */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="font-heading text-white text-2xl sm:text-3xl font-light tracking-wide leading-tight">
            {title}
          </p>
          <p className="font-body text-white/55 text-xs tracking-[0.22em] uppercase mt-2">
            View story →
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function ImagesScrollingAnimation({ images, onImageClick }: Props) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[55vh] pt-[10vh]"
      >
        {images.map(({ src, title, slug }, i) => {
          const targetScale = Math.max(0.55, 1 - (images.length - i - 1) * 0.05)
          return (
            <StickyCard
              key={`${slug}-${i}`}
              i={i}
              src={src}
              title={title}
              progress={scrollYProgress}
              range={[i / images.length, 1]}
              targetScale={targetScale}
              onClick={() => onImageClick(slug)}
            />
          )
        })}
      </main>
    </ReactLenis>
  )
}
