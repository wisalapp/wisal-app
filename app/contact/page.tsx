import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Contact — Wisal',
  description: 'Get in touch with the Wisal team',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0A3A5C] to-[#00BCD4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-lg text-[#0A3A5C]">Wisal</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition font-medium">Home</a>
            <a href="/features" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Features</a>
            <a href="/pricing" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Pricing</a>
            <a href="/about" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">About</a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Contact</a>
          </nav>

          <a href="/contact">
            <Button className="bg-[#0A3A5C] hover:bg-[#082a47] text-white">
              Start Free Trial
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0A3A5C] mb-6 leading-tight">
            Get in Touch
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition">
              <Mail className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-2">Email</h3>
              <a href="mailto:info@wisal.clinic" className="text-gray-600 hover:text-[#00BCD4] transition">
                info@wisal.clinic
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition">
              <Phone className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-2">Phone</h3>
              <a href="tel:+96891234567" className="text-gray-600 hover:text-[#00BCD4] transition">
                +968 9123 4567
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition">
              <MapPin className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-2">Location</h3>
              <p className="text-gray-600">
                Muscat, Oman
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition">
              <Clock className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-2">Hours</h3>
              <p className="text-gray-600">
                24/7 Support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-12 text-center">Send us a Message</h2>
          
          <Card className="p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your clinic name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+968 XXXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]">
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A3A5C] mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                ></textarea>
              </div>

              <Button className="w-full bg-[#0A3A5C] hover:bg-[#082a47] text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 2 hours during business hours. For urgent matters, please call us directly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                Yes! We offer a 14-day free trial with full access to all features. No credit card required.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Can I schedule a demo?</h3>
              <p className="text-gray-600">
                Absolutely! Contact us and we'll schedule a personalized demo with one of our specialists.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">What's your support availability?</h3>
              <p className="text-gray-600">
                We provide 24/7 support via email and phone. Our team is always ready to help.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          <Button className="bg-[#00BCD4] hover:bg-[#00a8c4] text-[#0A3A5C] font-semibold px-8 py-3 text-lg">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
