'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

type GalleryItem = {
  id: number
  title: string
  category: string
  description: string
  gradient: string
  featured?: boolean
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Cascade Summit', category: 'Landscape', description: 'The breathtaking summit of the North Cascades at golden hour — a 4-day alpine approach finally rewarded.', gradient: 'from-blue-900 via-indigo-800 to-purple-900', featured: true },
  { id: 2, title: 'Basecamp Nights', category: 'Camping', description: 'Setting up camp at 8,000 feet under a sky ablaze with stars. Cold, remote, and absolutely worth it.', gradient: 'from-gray-900 via-blue-950 to-indigo-900' },
  { id: 3, title: 'Rapid Descent', category: 'Adventure', description: 'Class IV whitewater on the Rogue River — the most adrenaline-packed day of the Oregon expedition.', gradient: 'from-teal-900 via-cyan-800 to-blue-900' },
  { id: 4, title: 'Midnight Ridgeline', category: 'Night', description: 'A moonlit ridgeline traverse under the Milky Way. Zero artificial light for 40 miles in any direction.', gradient: 'from-gray-950 via-indigo-950 to-blue-950' },
  { id: 5, title: 'Gear Check', category: 'Behind the Scenes', description: 'Pre-expedition gear layout before a 12-day backcountry trip. Every ounce is intentional.', gradient: 'from-orange-950 via-amber-900 to-yellow-900' },
  { id: 6, title: 'Valley Fog', category: 'Landscape', description: 'A sea of fog fills the valley below as we break through the clouds just before sunrise.', gradient: 'from-gray-800 via-slate-700 to-gray-900' },
  { id: 7, title: 'Fire Ring Stories', category: 'Camping', description: 'Evening dispatches from the trail — sharing the day\'s events live with our community around the fire.', gradient: 'from-red-950 via-orange-900 to-amber-950' },
  { id: 8, title: 'Ice Crossing', category: 'Adventure', description: 'Crossing a glacial ice field in the early morning — every step deliberate, every foothold tested.', gradient: 'from-cyan-900 via-sky-800 to-blue-900' },
  { id: 9, title: 'Bioluminescent Bay', category: 'Night', description: 'A rare bioluminescent encounter during a coastal paddle — nature\'s own light show.', gradient: 'from-teal-950 via-green-900 to-emerald-950' },
  { id: 10, title: 'The Edit Suite', category: 'Behind the Scenes', description: 'Cutting footage in a tent at altitude. Our mobile production setup handles everything from field.', gradient: 'from-gray-900 via-zinc-800 to-gray-950' },
  { id: 11, title: 'Desert Spires', category: 'Landscape', description: 'Red rock formations rising 600 feet above the desert floor — a surreal alien landscape at dusk.', gradient: 'from-red-900 via-orange-800 to-amber-900' },
  { id: 12, title: 'River Camp', category: 'Camping', description: 'Camp on a gravel bar beside the river, listening to the current all night — pure wilderness sleep.', gradient: 'from-green-950 via-emerald-900 to-teal-950' },
]

const categories = ['All', 'Landscape', 'Camping', 'Adventure', 'Night', 'Behind the Scenes']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">
            A visual journey through our expeditions — from alpine summits to desert canyons.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`relative rounded-xl overflow-hidden group cursor-pointer text-left ${
                  item.featured && activeCategory === 'All' ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-xs text-orange-400 font-semibold mb-0.5">{item.category}</p>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/20 font-black text-xl text-center px-4">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">No items in this category.</div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-56 bg-gradient-to-br ${selected.gradient} relative`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">{selected.category}</span>
              <h3 className="text-white font-black text-2xl mt-1 mb-3">{selected.title}</h3>
              <p className="text-gray-400 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
