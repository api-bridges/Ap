import { Award, CheckCircle, ArrowUpRight, Star } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '$499',
    per: '/mo',
    current: false,
    features: [
      'Logo in stream overlay',
      '1–2 verbal mentions per stream',
      'Basic analytics report',
      'Up to 500K monthly impressions',
      'Email support',
    ],
  },
  {
    name: 'Adventurer',
    price: '$999',
    per: '/mo',
    current: true,
    features: [
      'Everything in Starter',
      'Dedicated brand segment (30s)',
      'Social media shoutout (2x/mo)',
      'Up to 3.2M monthly impressions',
      'Monthly strategy call',
      'Priority support',
    ],
  },
  {
    name: 'Expedition',
    price: '$1,999',
    per: '/mo',
    current: false,
    features: [
      'Everything in Adventurer',
      'Custom branded adventure',
      'Product integration on-stream',
      'Up to 8M monthly impressions',
      'Co-branded content creation',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Summit',
    price: '$4,999',
    per: '/mo',
    current: false,
    features: [
      'Everything in Expedition',
      'Title sponsorship of expeditions',
      'Exclusive naming rights',
      '12M+ monthly impressions',
      'Custom multi-platform campaign',
      'Executive partnership access',
    ],
  },
]

export default function SponsorshipsPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Sponsorships</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Sponsorship Plans</h1>
        <p className="text-gray-400 mt-1">Manage your current plan and explore upgrade options</p>
      </div>

      {/* Current Plan Summary */}
      <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/40 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">Current Plan</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Adventurer Plan</h2>
            <p className="text-gray-300 mt-1">$999/mo · Active since January 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Next billing</p>
            <p className="text-lg font-semibold text-white">June 1, 2024</p>
            <p className="text-orange-400 font-bold text-xl">$999</p>
          </div>
        </div>
      </div>

      {/* Value Explanation */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-3">Your Sponsorship Value</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          As an Adventurer sponsor, your brand is woven authentically into every live adventure stream. Our audience of outdoor enthusiasts sees your brand not as an ad — but as part of the journey. Every dollar invested reaches engaged, loyal viewers who trust our recommendations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Avg Viewer Trust Score', value: '9.2/10' },
            { label: 'Audience Retention', value: '78%' },
            { label: 'Brand Recall Rate', value: '64%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Comparison */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Compare Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 border flex flex-col ${
                tier.current
                  ? 'bg-orange-500/10 border-orange-500 ring-1 ring-orange-500/50'
                  : 'bg-gray-900 border-gray-800'
              }`}
            >
              {tier.current && (
                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full self-start mb-3 font-medium">Current Plan</span>
              )}
              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <div className="mt-1 mb-4">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-400 text-sm">{tier.per}</span>
              </div>
              <ul className="space-y-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {tier.current ? (
                  <span className="block text-center py-2 text-orange-400 text-sm font-medium border border-orange-500/40 rounded-lg">Active</span>
                ) : (
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Upgrade <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Ready to Scale Your Exposure?</h3>
        <p className="text-gray-400 text-sm mb-4">Upgrading is seamless. Contact our partnerships team to discuss a custom plan or move to a higher tier today.</p>
        <a href="mailto:partnerships@live31.com" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
          Contact Partnerships Team <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
