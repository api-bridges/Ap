'use client'

import { useState } from 'react'
import { Settings, Bell, Lock, Shield, AlertTriangle } from 'lucide-react'

interface ToggleProps {
  enabled: boolean
  onChange: () => void
}

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        enabled ? 'bg-orange-500' : 'bg-gray-700'
      }`}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    weeklyReports: true,
    streamAlerts: true,
    paymentReminders: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    analyticsSharing: false,
    marketingEmails: false,
  })

  const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' })
  const [pwSaved, setPwSaved] = useState(false)
  const [showDanger, setShowDanger] = useState(false)

  function toggleNotif(key: keyof typeof notifications) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function togglePrivacy(key: keyof typeof privacy) {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    if (passwords.newPass !== passwords.confirm) return
    await new Promise((r) => setTimeout(r, 600))
    setPasswords({ current: '', newPass: '', confirm: '' })
    setPwSaved(true)
    setTimeout(() => setPwSaved(false), 3000)
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Settings className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Settings</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
        <p className="text-gray-400 mt-1">Manage your preferences, security, and account</p>
      </div>

      {/* Notifications */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          {[
            { key: 'email' as const, label: 'Email Notifications', desc: 'Receive updates and alerts via email' },
            { key: 'sms' as const, label: 'SMS Alerts', desc: 'Get critical alerts via text message' },
            { key: 'weeklyReports' as const, label: 'Weekly Reports', desc: 'Receive a summary of your brand performance every Monday' },
            { key: 'streamAlerts' as const, label: 'Stream Alerts', desc: 'Get notified when a live stream starts' },
            { key: 'paymentReminders' as const, label: 'Payment Reminders', desc: 'Reminders before upcoming billing dates' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <Toggle enabled={notifications[item.key]} onChange={() => toggleNotif(item.key)} />
            </div>
          ))}
        </div>
      </div>

      {/* Privacy */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-white">Privacy Settings</h2>
        </div>
        <div className="space-y-4">
          {[
            { key: 'profileVisibility' as const, label: 'Profile Visibility', desc: 'Allow Live31 to display your brand name publicly as a sponsor' },
            { key: 'analyticsSharing' as const, label: 'Analytics Sharing', desc: 'Share anonymized analytics data to improve our platform' },
            { key: 'marketingEmails' as const, label: 'Marketing Emails', desc: 'Receive promotional offers and adventure updates from Live31' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <Toggle enabled={privacy[item.key]} onChange={() => togglePrivacy(item.key)} />
            </div>
          ))}
        </div>
      </div>

      {/* Password Change */}
      <form onSubmit={handlePasswordChange} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-white">Change Password</h2>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Current Password</label>
          <input
            type="password"
            value={passwords.current}
            onChange={(e) => setPasswords((p) => ({ ...p, current: e.target.value }))}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">New Password</label>
            <input
              type="password"
              value={passwords.newPass}
              onChange={(e) => setPasswords((p) => ({ ...p, newPass: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Confirm New Password</label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords((p) => ({ ...p, confirm: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {pwSaved && <span className="text-sm text-green-400">✓ Password updated</span>}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>

      {/* Danger Zone */}
      <div className="bg-gray-900 border border-red-900/60 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-semibold text-red-400">Danger Zone</h2>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Permanently delete your account and all associated data. This action cannot be undone. Your active sponsorships will be cancelled and no refund will be issued.
        </p>
        {!showDanger ? (
          <button
            onClick={() => setShowDanger(true)}
            className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Delete Account
          </button>
        ) : (
          <div className="bg-red-950/40 border border-red-800 rounded-lg p-4">
            <p className="text-sm text-red-300 mb-3 font-medium">Are you absolutely sure? This cannot be undone.</p>
            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Yes, delete my account
              </button>
              <button onClick={() => setShowDanger(false)} className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
