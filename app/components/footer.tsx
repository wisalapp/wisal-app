import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A3A5C] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-[#00BCD4] rounded-lg flex items-center justify-center">
                <span className="text-[#0A3A5C] font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-lg">Wisal</span>
            </div>
            <p className="text-gray-300 text-sm">Your WhatsApp AI Receptionist for Clinics</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/legal/privacy" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="/legal/hipaa" className="hover:text-white transition">HIPAA</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@wisal.clinic" className="hover:text-white transition">info@wisal.clinic</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+96891234567" className="hover:text-white transition">+968 9123 4567</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Muscat, Oman</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Wisal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
