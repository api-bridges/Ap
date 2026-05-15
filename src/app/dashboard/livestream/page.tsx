import { Video, MapPin, Clock, Eye, MessageSquare, Users } from 'lucide-react'

const upcomingStreams = [
  {
    date: 'May 22, 2024',
    location: 'Rocky Mountain National Park, CO',
    duration: '6–8 hours',
    notes: 'Logo overlay full stream, 3x verbal mentions, gear spotlight segment',
  },
  {
    date: 'May 30, 2024',
    location: 'Zion Canyon, UT',
    duration: '4–5 hours',
    notes: 'Brand banner at start/end, 2x mentions, sponsored gear segment',
  },
  {
    date: 'Jun 7, 2024',
    location: 'Glacier National Park, MT',
    duration: '8–10 hours',
    notes: 'Full logo placement, 4x mentions, dedicated sponsored segment (60s)',
  },
]

const recentPerformance = [
  {
    title: 'Desert Canyon Traverse',
    date: 'May 10, 2024',
    viewers: '11,200',
    peakViewers: '14,800',
    watchHours: '38,400',
    brandMentions: 6,
  },
  {
    title: 'Alpine Summit Push',
    date: 'Apr 28, 2024',
    viewers: '9,400',
    peakViewers: '12,100',
    watchHours: '28,200',
    brandMentions: 5,
  },
  {
    title: 'Coastal Wilderness Trail',
    date: 'Apr 15, 2024',
    viewers: '7,800',
    peakViewers: '10,300',
    watchHours: '21,060',
    brandMentions: 4,
  },
]

export default function LivestreamPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Video className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Live Stream</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Live Stream Hub</h1>
        <p className="text-gray-400 mt-1">Monitor your brand integration across all live streams</p>
      </div>

      {/* Stream Status */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold uppercase tracking-widest text-sm">LIVE</span>
            </div>
            <h2 className="text-xl font-bold text-white">Rocky Mountain Dawn Patrol</h2>
            <p className="text-gray-400 mt-1">Live from Rocky Mountain National Park · Started 2h 14m ago</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-right">
            <div>
              <p className="text-2xl font-bold text-white">8,420</p>
              <p className="text-xs text-gray-400">Current Viewers</p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <p className="text-sm font-semibold text-orange-400">Logo Overlay</p>
            <p className="text-xs text-gray-400">Active — Bottom Right</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <p className="text-sm font-semibold text-orange-400">Mentions</p>
            <p className="text-xs text-gray-400">2 this session</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-orange-400">Next Segment</p>
            <p className="text-xs text-gray-400">~45 min</p>
          </div>
        </div>
      </div>

      {/* Upcoming Streams */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Upcoming Streams</h2>
        <div className="space-y-4">
          {upcomingStreams.map((s, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="font-medium text-white">{s.date}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="w-3 h-3" /> {s.duration}
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                <MapPin className="w-3 h-3 flex-shrink-0" /> {s.location}
              </div>
              <p className="text-xs text-gray-500 bg-gray-800 rounded px-2 py-1">{s.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Performance */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Stream Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentPerformance.map((s, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <h3 className="font-semibold text-white text-sm mb-1 truncate">{s.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{s.date}</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Eye className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-gray-400">Viewers</span>
                  </div>
                  <p className="text-sm font-bold text-white">{s.viewers}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Users className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-gray-400">Peak</span>
                  </div>
                  <p className="text-sm font-bold text-white">{s.peakViewers}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Clock className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-gray-400">Watch Hrs</span>
                  </div>
                  <p className="text-sm font-bold text-white">{s.watchHours}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <MessageSquare className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-gray-400">Mentions</span>
                  </div>
                  <p className="text-sm font-bold text-orange-400">{s.brandMentions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
