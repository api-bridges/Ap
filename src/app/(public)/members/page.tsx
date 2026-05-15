import Link from 'next/link'
import { MessageCircle, Camera, Globe } from 'lucide-react'

type Member = {
  name: string
  role: string
  initials: string
  gradient: string
  bio: string
  social: { twitter?: string; instagram?: string; linkedin?: string }
}

const members: Member[] = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Lead Adventurer',
    initials: 'AR',
    gradient: 'from-orange-500 to-orange-700',
    bio: 'Former wilderness guide with 12+ years leading expeditions across North America. Alex founded Live31 after his viral 31-day solo Cascades livestream in 2021. He leads every major expedition personally.',
    social: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Partnerships',
    initials: 'SC',
    gradient: 'from-blue-500 to-blue-700',
    bio: 'Sarah brings 8 years of brand partnership experience from top outdoor companies. She builds and manages all sponsor relationships, ensuring every collaboration is authentic and mutually beneficial.',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Marcus Webb',
    role: 'Technical Director',
    initials: 'MW',
    gradient: 'from-purple-500 to-purple-700',
    bio: 'Marcus is the engineering genius behind our field production setup. He built the satellite streaming infrastructure that makes 24/7 remote livestreaming possible from the most remote locations on earth.',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Priya Patel',
    role: 'Content Strategist',
    initials: 'PP',
    gradient: 'from-pink-500 to-rose-600',
    bio: 'Priya shapes every story we tell. With a background in documentary filmmaking, she ensures that brand integration feels natural and that every expedition has a compelling narrative arc for our audience.',
    social: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Jordan Lee',
    role: 'Wilderness Guide',
    initials: 'JL',
    gradient: 'from-green-500 to-emerald-700',
    bio: 'A certified wilderness first responder and Leave No Trace master educator, Jordan keeps the team safe in the field and ensures every expedition respects the ecosystems we move through.',
    social: { instagram: '#' },
  },
  {
    name: 'Emma Torres',
    role: 'Brand Manager',
    initials: 'ET',
    gradient: 'from-amber-500 to-yellow-600',
    bio: 'Emma manages the Live31 brand identity across every platform and touchpoint. From visual consistency to tone of voice, she ensures Live31 always looks and sounds exactly right.',
    social: { twitter: '#', instagram: '#', linkedin: '#' },
  },
]

export default function MembersPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Meet the Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The adventurers, storytellers, and technologists behind every Live31 expedition.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.name} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-xl shrink-0`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-orange-400 text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="flex gap-3">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-colors">
                      <Camera className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Join the Adventure</h2>
          <p className="text-gray-400 text-lg mb-8">
            We&apos;re always looking for passionate adventurers, skilled technologists, and creative storytellers to join the Live31 mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
