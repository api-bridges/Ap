import { Heart, Leaf, Users, Compass } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    desc: 'We never fake the wilderness. Every stream, every stumble, every summit is real and unscripted — because our audience deserves nothing less.',
  },
  {
    icon: Leaf,
    title: 'Respect for Nature',
    desc: 'Leave no trace isn\'t just a guideline — it\'s our ethos. We document and protect the wild spaces we depend on.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'From solo backpackers to brand partners, everyone in the Live31 ecosystem is part of a community united by a love of the outdoors.',
  },
  {
    icon: Compass,
    title: 'Adventure',
    desc: 'We believe that pushing beyond comfort zones — in the wild and in business — is where the most meaningful growth happens.',
  },
]

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Platform Launch',
    year: '2024',
    status: 'current',
    items: [
      'Live31 platform goes live',
      'First 10 sponsor partnerships',
      'Pacific Northwest expedition series',
      'Multi-platform streaming infrastructure',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Regional Tours',
    year: '2025',
    status: 'upcoming',
    items: [
      'Rocky Mountain expedition arc',
      'Appalachian Trail series',
      '25+ brand sponsor network',
      'Mobile app launch',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Global Expedition',
    year: '2026',
    status: 'future',
    items: [
      'International wilderness destinations',
      'Multi-continent live events',
      '100+ global brand partners',
      'Live31 Creator Program launch',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Documentary Series',
    year: '2027',
    status: 'future',
    items: [
      'Streaming platform documentary deal',
      'Award-qualifying expedition films',
      'Educational content partnerships',
      'Live31 Foundation for wilderness conservation',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Born in the wilderness, built for the world — Live31 is where raw adventure meets authentic brand connection.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-black text-orange-500 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Live31 exists to bridge the gap between outdoor adventure and authentic brand storytelling. We believe the wilderness is the world&apos;s greatest stage — and the brands we partner with deserve to be on it. Our mission is to create the most trusted, most watched, and most impactful adventure sponsorship platform on earth.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-black text-orange-500 mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where every outdoor brand has a chance to prove itself in the field — and every adventure lover can discover gear, products, and companies they can truly trust. We envision Live31 as the global standard for wilderness content and the go-to platform for outdoor-focused brand partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-6">
                Founder Story
              </div>
              <h2 className="text-4xl font-black text-white mb-6">
                From Trail Guide to<br />
                <span className="text-orange-500">Adventure Platform</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Alex Rivera spent over a decade leading wilderness expeditions through some of the most remote corners of North America. As a professional wilderness guide, he watched countless brands attempt clumsy, inauthentic outdoor advertising — and knew there had to be a better way.
                </p>
                <p>
                  In the fall of 2021, during a solo expedition through the Cascades, Alex spent 31 consecutive days in the wilderness — livestreaming his journey with nothing but a satellite uplink and a story to tell. What started as a personal challenge exploded into a viral phenomenon, drawing over 200,000 viewers on its final day.
                </p>
                <p>
                  That solo trip became the seed of Live31. Alex returned from the wilderness with a clear vision: build a platform where authentic outdoor adventure and meaningful brand partnerships could coexist and thrive. By 2024, that vision had become a reality — a full-scale live adventure platform reaching millions of viewers across every major platform.
                </p>
                <p className="text-orange-400 font-semibold italic">
                  &ldquo;The wilderness doesn&apos;t care about your brand deck. It only respects what actually works.&rdquo; — Alex Rivera
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-orange-900/40 via-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">
                    AR
                  </div>
                  <p className="text-white font-bold text-xl">Alex Rivera</p>
                  <p className="text-orange-400 text-sm">Founder & Lead Adventurer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">Core Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide every expedition, every partnership, and every piece of content we create.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">Our Roadmap</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;re just getting started. Here&apos;s where Live31 is headed in the years ahead.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase) => (
              <div
                key={phase.phase}
                className={`rounded-xl p-6 border ${
                  phase.status === 'current'
                    ? 'bg-orange-500/10 border-orange-500'
                    : 'bg-gray-900 border-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-bold ${phase.status === 'current' ? 'text-orange-400' : 'text-gray-500'}`}>
                    {phase.phase}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    phase.status === 'current'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {phase.year}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className={`text-sm flex items-start gap-2 ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-500'}`}>
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${phase.status === 'current' ? 'bg-orange-500' : 'bg-gray-600'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
