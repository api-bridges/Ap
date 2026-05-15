import Link from 'next/link'
import { Radio, Award, Globe, Camera, Map, Users, Heart, Eye, Share2, TrendingUp, Check, ArrowRight, Backpack } from 'lucide-react'

const stats = [
  { value: '24/7', label: 'Continuous Streaming' },
  { value: '50+', label: 'Destinations' },
  { value: '2.5M+', label: 'Monthly Audience' },
  { value: '12M+', label: 'Annual Views' },
]

const features = [
  { icon: Radio, title: 'Live Wilderness Streaming', desc: 'Uninterrupted 24/7 live coverage from the most remote and breathtaking locations on earth.' },
  { icon: Award, title: 'Brand Integration', desc: 'Seamless, authentic brand placement that resonates with our adventure-driven audience.' },
  { icon: Globe, title: 'Multi-Platform Reach', desc: 'Your brand reaches audiences across YouTube, Twitch, Instagram, and more simultaneously.' },
  { icon: Camera, title: 'Authentic Storytelling', desc: 'Real expeditions, real challenges, real stories — no studios, no scripts, just wilderness.' },
  { icon: Map, title: 'Expedition Planning', desc: 'Every trip is a meticulously planned adventure into uncharted or iconic natural destinations.' },
  { icon: Users, title: 'Audience Engagement', desc: 'A highly engaged community of outdoor enthusiasts who trust our recommendations.' },
]

const whySponsor = [
  { icon: Heart, title: 'Authentic Audience Connection', desc: 'Our viewers are passionate outdoor enthusiasts who trust our content and brand recommendations.' },
  { icon: Eye, title: 'Prime Brand Placement', desc: 'Your logo and messaging woven naturally into stunning wilderness content watched by millions.' },
  { icon: Share2, title: 'Multi-Platform Amplification', desc: 'Every expedition generates clips, posts, reels, and highlights across all major social platforms.' },
  { icon: TrendingUp, title: 'Measurable Impact', desc: 'Detailed analytics and reporting so you know exactly how your sponsorship is performing.' },
  { icon: Backpack, title: 'Expedition Ready Brands', desc: 'Position your brand alongside real, demanding outdoor conditions that prove product quality.' },
]

const steps = [
  { num: '01', title: 'Choose Your Package', desc: 'Select the sponsorship tier that fits your brand goals and budget.' },
  { num: '02', title: 'We Integrate Your Brand', desc: 'Our team works with you to create authentic brand touchpoints across all content.' },
  { num: '03', title: 'We Go Live', desc: 'Your brand is featured across live streams, social posts, and expedition content.' },
  { num: '04', title: 'You Get Results', desc: 'Receive detailed reports on reach, engagement, and brand lift from every expedition.' },
]

const packages = [
  {
    name: 'Starter',
    price: '$499',
    period: '/mo',
    highlight: false,
    features: [
      'Logo placement on stream overlays',
      '2 dedicated social posts/month',
      'Monthly performance report',
      'Brand mention in 4 streams',
      'Access to content library',
    ],
  },
  {
    name: 'Adventurer',
    price: '$999',
    period: '/mo',
    highlight: false,
    features: [
      'Everything in Starter',
      'Product feature in 2 streams',
      'Dedicated story segments',
      'Weekly performance reports',
      'Co-branded content creation',
      'Priority audience Q&A placement',
    ],
  },
  {
    name: 'Expedition',
    price: '$1,999',
    period: '/mo',
    highlight: true,
    tag: 'Most Popular',
    features: [
      'Everything in Adventurer',
      'Dedicated expedition segment',
      'Product field testing footage',
      'Custom branded overlay design',
      'Bi-weekly strategy calls',
      'Cross-platform campaign',
      'Influencer collaboration',
    ],
  },
  {
    name: 'Summit',
    price: '$4,999',
    period: '/mo',
    highlight: false,
    features: [
      'Everything in Expedition',
      'Title sponsorship of expedition',
      'Exclusive product integration',
      'Documentary-style feature',
      'Dedicated account manager',
      'Custom expedition planning',
      'Press release & PR support',
      'Unlimited platform access',
    ],
  },
]

export default function HomePage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">LIVE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            LIVE FROM THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              WILDERNESS
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            24/7 Authentic Adventure Sponsorship — connecting your brand with millions of passionate outdoor enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2"
            >
              Become a Sponsor <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#packages"
              className="px-8 py-4 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-bold rounded-xl transition-colors text-lg"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 border-y border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We bring brands into the wilderness through live, unscripted adventure content that authentically showcases your products in action.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                <f.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section id="why-sponsor" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">Why Sponsor Live31?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Adventure audiences are among the most loyal and purchase-driven communities online. Here&apos;s why forward-thinking brands choose us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySponsor.map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Get your brand into the wild in four simple steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                  <div className="text-5xl font-black text-orange-500/20 mb-3">{step.num}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">Sponsorship Packages</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the level of adventure exposure that fits your brand&apos;s ambitions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl p-6 flex flex-col border transition-colors ${
                  pkg.highlight
                    ? 'bg-orange-500/10 border-orange-500 shadow-lg shadow-orange-500/10'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                }`}
              >
                {pkg.highlight && pkg.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {pkg.tag}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-500">{pkg.price}</span>
                    <span className="text-gray-400 text-sm">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    pkg.highlight
                      ? 'bg-orange-500 hover:bg-orange-400 text-white'
                      : 'border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Sponsor the Wild?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Join forward-thinking brands who are reaching millions of passionate outdoor enthusiasts through authentic wilderness content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2"
            >
              Start Sponsoring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-bold rounded-xl transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
