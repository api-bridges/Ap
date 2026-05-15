'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/members', label: 'Team' },
  { href: '/social', label: 'Social' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <Zap className="w-6 h-6 text-orange-500" />
            <span>Live<span className="text-orange-500">31</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  pathname === link.href ? 'text-orange-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Brand Login
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium py-2 transition-colors hover:text-orange-400 ${
                pathname === link.href ? 'text-orange-400' : 'text-gray-300'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full text-center px-4 py-2 text-sm font-medium border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-white transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Brand Login
          </Link>
        </div>
      )}
    </nav>
  )
}
