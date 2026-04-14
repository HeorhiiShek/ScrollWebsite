export interface Story {
  slug: string
  title: string
  date: string
  thumbnail: string
  heroImage: string
  body: BodyBlock[]
}

export type BodyBlock =
  | { type: 'text';  content: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; src: string; poster?: string }
  | { type: 'link';  href: string; label: string }

export const stories: Story[] = [
  {
    slug: 'the-jacket',
    title: 'The Jacket',
    date: 'November 2023',
    thumbnail: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&crop=center',
    heroImage:  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1400&h=900&fit=crop',
    body: [
      { type: 'text', content: 'There are pieces of clothing that carry weight far beyond fabric. This jacket was one of them. I found it at a market on a cold Tuesday morning, folded beneath three others, priced at almost nothing.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=600&fit=crop', caption: 'The market, early morning' },
      { type: 'text', content: 'The brand behind it had been making outerwear in Eastern Europe since 1987. Most people outside the region have never heard of them. They deserve to be.' },
      { type: 'link', href: 'https://example.com', label: 'Read more about the brand' },
    ],
  },
  {
    slug: 'rooftop-tbilisi',
    title: 'Rooftop, Tbilisi',
    date: 'June 2023',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop&crop=center',
    heroImage:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop',
    body: [
      { type: 'text', content: 'The night we got access to the rooftop was completely unplanned. A door that should have been locked was not. We stayed until the city turned gold.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&h=600&fit=crop', caption: 'Looking west, 23:00' },
      { type: 'text', content: 'Tbilisi insists on being felt rather than photographed. That is why so few photos from that trip survived.' },
    ],
  },
  {
    slug: 'studio-session',
    title: 'Studio Session',
    date: 'February 2024',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=1000&fit=crop&crop=center',
    heroImage:  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&h=900&fit=crop',
    body: [
      { type: 'text', content: 'Six hours in a studio with two microphones, one engineer, and no agenda. The best music I have ever been part of came from not having a plan.' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop' },
      { type: 'text', content: 'We named the session after the street outside. The recordings are still sitting on a hard drive somewhere.' },
    ],
  },
  {
    slug: 'last-train',
    title: 'Last Train',
    date: 'August 2022',
    thumbnail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=1000&fit=crop&crop=center',
    heroImage:  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1400&h=900&fit=crop',
    body: [
      { type: 'text', content: 'Missed the second-to-last train home. Caught the very last one. Forty-five minutes sitting alone in a car watching the city recede into darkness.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop', caption: 'Platform 4, 23:47' },
      { type: 'text', content: 'Sometimes the delay is the point.' },
    ],
  },
  {
    slug: 'the-bookshop',
    title: 'The Bookshop',
    date: 'March 2024',
    thumbnail: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=1000&fit=crop&crop=center',
    heroImage:  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1400&h=900&fit=crop',
    body: [
      { type: 'text', content: "The kind of bookshop that doesn't organise its shelves by genre. Everything is by instinct — the owner's, not yours. Spent three hours there and left with four books I would never have chosen for myself." },
      { type: 'link', href: 'https://example.com', label: 'Find bookshops like this' },
    ],
  },
]
