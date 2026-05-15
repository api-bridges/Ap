'use client'

import { useState } from 'react'
import { User, Upload, Save } from 'lucide-react'

const initialForm = {
  brandName: 'Your Brand',
  website: 'https://yourbrand.com',
  industry: 'Outdoor & Adventure',
  companySize: '11–50',
  contactName: 'Jane Smith',
  contactEmail: 'jane@yourbrand.com',
  contactPhone: '+1 (555) 000-0000',
  bio: 'We create premium outdoor gear designed for serious adventurers. Our mission is to help people explore more of the world with confidence.',
}

export default function ProfilePage() {
  const [form, setForm] = useState(initialForm)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <User className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">Profile</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Brand Profile</h1>
        <p className="text-gray-400 mt-1">Update your brand information and contact details</p>
      </div>

      {/* Avatar */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Brand Logo</h2>
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">YB</span>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
              <Upload className="w-4 h-4" /> Upload Logo
            </button>
            <p className="text-xs text-gray-500 mt-2">PNG, JPG or SVG up to 2MB. Recommended: 400×400px</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-6">
        <h2 className="text-lg font-semibold text-white">Brand Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Brand Name</label>
            <input
              name="brandName"
              value={form.brandName}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Website</label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Industry</label>
            <input
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Company Size</label>
            <select
              name="companySize"
              value={form.companySize}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            >
              {['1–10', '11–50', '51–200', '201–500', '500+'].map((s) => (
                <option key={s} value={s}>{s} employees</option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Contact Name</label>
              <input
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Contact Email</label>
              <input
                name="contactEmail"
                type="email"
                value={form.contactEmail}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-400 mb-1.5">Contact Phone</label>
              <input
                name="contactPhone"
                value={form.contactPhone}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Bio / Description</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">{form.bio.length}/500 characters</p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          {saved && <span className="text-sm text-green-400">✓ Changes saved</span>}
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}
