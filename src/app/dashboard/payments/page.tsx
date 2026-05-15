import { DollarSign, CreditCard, Download, CheckCircle, Clock } from 'lucide-react'

const payments = [
  { date: 'May 1, 2024', description: 'Adventurer Plan — Monthly', amount: '$999.00', status: 'paid' },
  { date: 'Apr 1, 2024', description: 'Adventurer Plan — Monthly', amount: '$999.00', status: 'paid' },
  { date: 'Mar 1, 2024', description: 'Adventurer Plan — Monthly', amount: '$999.00', status: 'paid' },
  { date: 'Jun 1, 2024', description: 'Adventurer Plan — Monthly', amount: '$999.00', status: 'pending' },
  { date: 'Feb 1, 2024', description: 'Adventurer Plan — Monthly', amount: '$999.00', status: 'paid' },
  { date: 'Jan 1, 2024', description: 'Adventurer Plan — Onboarding', amount: '$999.00', status: 'paid' },
]

export default function PaymentsPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <DollarSign className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Payments</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Billing & Payments</h1>
        <p className="text-gray-400 mt-1">View your payment history and manage billing</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <p className="text-sm text-gray-400 mb-1">Total Invested</p>
          <p className="text-2xl font-bold text-green-400">$11,988</p>
          <p className="text-xs text-gray-500 mt-1">Since Jan 2024</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <p className="text-sm text-gray-400 mb-1">Next Payment</p>
          <p className="text-2xl font-bold text-orange-500">$999</p>
          <p className="text-xs text-gray-500 mt-1">Due Jun 1, 2024</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <p className="text-sm text-gray-400 mb-1">Active Tier</p>
          <p className="text-2xl font-bold text-white">Adventurer</p>
          <p className="text-xs text-gray-500 mt-1">$999/month</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Payment Method</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">VISA</div>
          <div>
            <p className="text-white font-medium">•••• •••• •••• 4242</p>
            <p className="text-gray-400 text-sm">Expires 12/26</p>
          </div>
          <div className="ml-auto">
            <CreditCard className="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <button className="mt-3 text-sm text-orange-400 hover:text-orange-300 transition-colors">
          Update payment method →
        </button>
      </div>

      {/* Payment History */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Payment History</h2>
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-lg transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 font-medium pb-3 pr-4">Date</th>
                <th className="text-left text-gray-400 font-medium pb-3 pr-4">Description</th>
                <th className="text-left text-gray-400 font-medium pb-3 pr-4">Amount</th>
                <th className="text-left text-gray-400 font-medium pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {payments.map((p, i) => (
                <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                  <td className="py-3 pr-4 text-gray-300 whitespace-nowrap">{p.date}</td>
                  <td className="py-3 pr-4 text-gray-300">{p.description}</td>
                  <td className="py-3 pr-4 text-white font-medium">{p.amount}</td>
                  <td className="py-3">
                    {p.status === 'paid' ? (
                      <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
