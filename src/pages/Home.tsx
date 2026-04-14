import { useNavigate } from 'react-router-dom'
import { ImagesScrollingAnimation } from '../components/ui/images-scrolling-animation'
import { stories } from '../data/stories'

// Triple the array to create the illusion of an infinite scroll loop.
// User can add more real stories later to reduce the repetition.
const loopedImages = [
  ...stories,
  ...stories,
  ...stories,
].map(s => ({ src: s.thumbnail, title: s.title, slug: s.slug }))

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="pt-14">
      <ImagesScrollingAnimation
        images={loopedImages}
        onImageClick={(slug) => navigate(`/stories/${slug}`)}
      />
    </div>
  )
}
