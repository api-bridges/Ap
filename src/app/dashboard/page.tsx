import { LayoutDashboard, Award, DollarSign, Eye, Clock, ArrowUpRight, ChevronRight, Zap } from 'lucide-react'
import Link from 'next/link'

const kpiCards = [
  { label: 'Active Sponsorships', value: '2', icon: Award, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { label: 'Total Investment', value: '$1,998/mo', icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
  { label: 'Total Impressions', value: '3.2M', icon: Eye, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Stream Hours', value: '248', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-400/10' },
]

const recentActivity = [
  { icon: Eye, text: 'Brand logo displayed on stream', time: '2 hours ago', color: 'text-blue-400' },
  { icon: Zap, text: 'New stream session started', time: '5 hours ago', color: 'text-green-400' },
  { icon: ArrowUpRight, text: 'Analytics report generated', time: 'Yesterday', color: 'text-orange-500' },
  { icon: DollarSign, text: 'Payment processed — $999', time: 'May 1, 2024', color: 'text-green-400' },
  { icon: Award, text: 'Profile updated', time: 'Apr 28, 2024', color: 'text-purple-400' },
]

const upcomingBenefits = [
  { title: 'Logo overlay on next live stream', due: 'May 20, 2024', tier: 'Adventurer' },
  { title: 'Monthly analytics report delivery', due: 'Jun 1, 2024', tier: 'Adventurer' },
  { title: 'Sponsored segment mention (2x)', due: 'Jun 5, 2024', tier: 'Adventurer' },
]

export default function DashboardPage() {
  const brandName = 'Your Brand'
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Dashboard Overview</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome back, <span className="text-orange-500">{brandName}</span></h1>
          <p className="text-gray-400 mt-1">{today}</p>
        </div>
        <Link href="/dashboard/sponsorships" className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          View Plans <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">{card.label}</span>
                <div className={`${card.bg} p-2 rounded-lg`}>
                  <Icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>
              <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-200 truncate">{item.text}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Benefits */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Upcoming Benefits</h2>
          <div className="space-y-3">
            {upcomingBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/60 rounded-lg border border-gray-700/50">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-200">{b.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">Due: {b.due}</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">{b.tier}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Unlock More Exposure</h3>
            </div>
            <p className="text-gray-400 text-sm">Upgrade to Expedition or Summit for premium placements, dedicated segments, and up to 12M+ monthly impressions.</p>
          </div>
          <Link href="/dashboard/sponsorships" className="flex-shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
            Upgrade Plan <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
