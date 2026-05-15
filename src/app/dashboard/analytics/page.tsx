'use client'

import { BarChart2, TrendingUp, Eye, Clock, Users } from 'lucide-react'

const weeklyData = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 85 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 75 },
  { day: 'Sat', value: 100 },
  { day: 'Sun', value: 70 },
]

const platforms = [
  { name: 'YouTube', pct: 45, color: 'bg-red-500' },
  { name: 'Twitch', pct: 30, color: 'bg-purple-500' },
  { name: 'Instagram', pct: 15, color: 'bg-pink-500' },
  { name: 'Others', pct: 10, color: 'bg-gray-500' },
]

const exposureLogs = [
  { date: 'May 10', stream: 'Desert Canyon Traverse', impressions: '420K', mentions: 6, reach: '380K' },
  { date: 'May 8', stream: 'Rocky Mountain Dawn', impressions: '380K', mentions: 4, reach: '340K' },
  { date: 'May 4', stream: 'Alpine Meadow Hike', impressions: '310K', mentions: 3, reach: '270K' },
  { date: 'Apr 28', stream: 'Alpine Summit Push', impressions: '450K', mentions: 5, reach: '410K' },
  { date: 'Apr 22', stream: 'Redwood Forest Walk', impressions: '290K', mentions: 3, reach: '250K' },
  { date: 'Apr 15', stream: 'Coastal Wilderness Trail', impressions: '360K', mentions: 4, reach: '320K' },
  { date: 'Apr 10', stream: 'Cascades Ridge Run', impressions: '270K', mentions: 2, reach: '230K' },
  { date: 'Apr 3', stream: 'Mojave Desert Night', impressions: '410K', mentions: 5, reach: '370K' },
  { date: 'Mar 28', stream: 'Smoky Mountain Trek', impressions: '320K', mentions: 4, reach: '280K' },
  { date: 'Mar 20', stream: 'Glacier Overlook', impressions: '390K', mentions: 5, reach: '350K' },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BarChart2 className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Analytics</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Brand Analytics</h1>
        <p className="text-gray-400 mt-1">Track your brand exposure and audience engagement</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: 'Total Impressions', value: '3.2M', change: '+12%', icon: Eye, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Avg Viewers', value: '8,420', change: '+8%', icon: Users, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'Watch Hours', value: '24,680', change: '+15%', icon: Clock, color: 'text-green-400', bg: 'bg-green-400/10' },
          { label: 'Engagement Rate', value: '4.7%', change: '+0.3%', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10' },
        ].map((m) => {
          const Icon = m.icon
          return (
            <div key={m.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">{m.label}</span>
                <div className={`${m.bg} p-2 rounded-lg`}>
                  <Icon className={`w-4 h-4 ${m.color}`} />
                </div>
              </div>
              <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
              <p className="text-xs text-green-400 mt-1">{m.change} vs last month</p>
            </div>
          )
        })}
      </div>

      {/* Weekly Chart */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Weekly Performance</h2>
        <div className="flex items-end gap-3 h-40">
          {weeklyData.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-orange-500 rounded-t-md transition-all hover:bg-orange-400"
                style={{ height: `${d.value}%` }}
                title={`${d.day}: ${d.value}%`}
              />
              <span className="text-xs text-gray-400">{d.day}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">Relative impression volume (normalized) — Last 7 days</p>
      </div>

      {/* Platform Breakdown */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Platform Traffic Breakdown</h2>
        <div className="space-y-3">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-4">
              <span className="text-sm text-gray-300 w-24 flex-shrink-0">{p.name}</span>
              <div className="flex-1 bg-gray-800 rounded-full h-2">
                <div className={`${p.color} h-2 rounded-full`} style={{ width: `${p.pct}%` }} />
              </div>
              <span className="text-sm font-medium text-white w-10 text-right">{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exposure Log */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Exposure Log</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                {['Date', 'Stream', 'Impressions', 'Mentions', 'Reach'].map((h) => (
                  <th key={h} className="text-left text-gray-400 font-medium pb-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {exposureLogs.map((row, i) => (
                <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                  <td className="py-2.5 pr-4 text-gray-400 whitespace-nowrap">{row.date}</td>
                  <td className="py-2.5 pr-4 text-gray-200">{row.stream}</td>
                  <td className="py-2.5 pr-4 text-blue-400 font-medium">{row.impressions}</td>
                  <td className="py-2.5 pr-4 text-orange-400 font-medium">{row.mentions}</td>
                  <td className="py-2.5 text-green-400 font-medium">{row.reach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
