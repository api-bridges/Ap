'use client'
import { useState } from 'react'
import { PlayCircle, Tv, Camera, MessageCircle, Globe, Music } from 'lucide-react'

type Platform = {
  name: string
  handle: string
  icon: React.ElementType
  color: string
  description: string
  tags: string[]
  count: string
  countLabel: string
}

const platforms: Platform[] = [
  {
    name: 'YouTube',
    handle: '@Live31Adventure',
    icon: PlayCircle,
    color: 'from-red-600 to-red-800',
    description: 'Full expedition VODs, highlight reels, and behind-the-scenes content. Our largest platform for long-form adventure storytelling.',
    tags: ['Long-form content', 'Expedition series', 'VOD library'],
    count: '842K',
    countLabel: 'Subscribers',
  },
  {
    name: 'Twitch',
    handle: 'live31adventure',
    icon: Tv,
    color: 'from-purple-600 to-purple-800',
    description: 'The home of our live 24/7 wilderness streams. Interactive chat, live Q&As, and real-time brand integration during active expeditions.',
    tags: ['24/7 Live stream', 'Chat interaction', 'Stream alerts'],
    count: '312K',
    countLabel: 'Followers',
  },
  {
    name: 'Instagram',
    handle: '@live31',
    icon: Camera,
    color: 'from-pink-600 via-purple-600 to-orange-500',
    description: 'Daily posts, Reels, and Stories from the trail. High-engagement visual content that drives brand discovery.',
    tags: ['Daily posts', 'Reels', 'Stories'],
    count: '680K',
    countLabel: 'Followers',
  },
  {
    name: 'X / Twitter',
    handle: '@Live31',
    icon: MessageCircle,
    color: 'from-gray-700 to-gray-900',
    description: 'Real-time expedition updates, gear opinions, and community conversation. Direct brand mention opportunities.',
    tags: ['Live updates', 'Community chat', 'Trending content'],
    count: '218K',
    countLabel: 'Followers',
  },
  {
    name: 'Facebook',
    handle: 'Live31Adventure',
    icon: Globe,
    color: 'from-blue-600 to-blue-800',
    description: 'Community groups, live streaming, and long-form posts for our most engaged older demographic of outdoor enthusiasts.',
    tags: ['Community groups', 'Live events', 'Long-form posts'],
    count: '195K',
    countLabel: 'Followers',
  },
  {
    name: 'TikTok',
    handle: '@live31',
    icon: Music,
    color: 'from-teal-500 via-gray-900 to-pink-600',
    description: 'Viral short-form clips, quick trail tips, and brand integration snippets optimized for maximum reach and discovery.',
    tags: ['Viral clips', 'Trail tips', 'Trending sounds'],
    count: '1.1M',
    countLabel: 'Followers',
  },
]

const aggregateStats = [
  { value: '3.3M+', label: 'Total Followers' },
  { value: '2.5M+', label: 'Monthly Reach' },
  { value: '8.4%', label: 'Avg Engagement' },
  { value: '6', label: 'Platforms' },
]

export default function SocialPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Follow the Adventure</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Live31 reaches millions across every major platform. Find us where you stream.
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="bg-gray-900 border-y border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aggregateStats.map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Our Platforms</h2>
            <p className="text-gray-400 text-lg">We go live everywhere so your brand reaches every outdoor enthusiast, no matter where they watch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors">
                <div className={`h-20 bg-gradient-to-br ${platform.color} flex items-center px-6 gap-3`}>
                  <platform.icon className="w-8 h-8 text-white" />
                  <div>
                    <p className="text-white font-black text-lg leading-none">{platform.name}</p>
                    <p className="text-white/70 text-sm">{platform.handle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-orange-500">{platform.count}</span>
                    <span className="text-gray-500 text-sm">{platform.countLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Stay in the Loop</h2>
          <p className="text-gray-400 text-lg mb-8">
            Get expedition updates, behind-the-scenes content, and sponsorship opportunities delivered straight to your inbox.
          </p>
          {subscribed ? (
            <div className="bg-orange-500/10 border border-orange-500 rounded-xl p-6">
              <p className="text-orange-400 font-bold text-lg">You&apos;re subscribed! 🎉</p>
              <p className="text-gray-400 text-sm mt-1">Thanks for joining. Adventure dispatches incoming.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
