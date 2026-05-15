import Link from 'next/link'
import { Mail, Phone, MapPin, PlayCircle, Camera, MessageCircle, Globe, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Zap className="w-6 h-6 text-orange-500" />
              <span>Live<span className="text-orange-500">31</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">24/7 wilderness live-streaming connecting adventurers with brands through authentic outdoor sponsorship.</p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /><span>hello@live31.com</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /><span>+1 (555) 31-LIVE</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /><span>Pacific Northwest, USA</span></div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link href="/members" className="hover:text-orange-400 transition-colors">Team</Link></li>
              <li><Link href="/gallery" className="hover:text-orange-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-orange-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Sponsors */}
          <div>
            <h3 className="font-semibold text-white mb-3">Sponsors</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/login" className="hover:text-orange-400 transition-colors">Brand Login</Link></li>
              <li><Link href="/#packages" className="hover:text-orange-400 transition-colors">Packages</Link></li>
              <li><Link href="/#why-sponsor" className="hover:text-orange-400 transition-colors">Benefits</Link></li>
              <li><Link href="/social" className="hover:text-orange-400 transition-colors">Social</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Live31. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://youtube.com" className="text-gray-400 hover:text-orange-400 transition-colors"><PlayCircle className="w-5 h-5" /></Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-orange-400 transition-colors"><Camera className="w-5 h-5" /></Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-orange-400 transition-colors"><MessageCircle className="w-5 h-5" /></Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-orange-400 transition-colors"><Globe className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
