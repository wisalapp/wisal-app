import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, MessageSquare, Calendar, Shield, Users, BarChart3, Zap, Lock } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Wisal — WhatsApp AI Receptionist for Clinics',
  description: 'Always connected. Always caring. Answer messages, book appointments, and escalate to staff — all on WhatsApp.',
}

export default function Home() {
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

      {/* Hero Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4 bg-[#00BCD4]/10 text-[#00BCD4] border-[#00BCD4]/20">
                ✨ Trusted by clinics across Oman & GCC
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-[#0A3A5C] mb-6 leading-tight">
                Wisal — Your WhatsApp AI Receptionist
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Always connected. Always caring. Answer messages, book appointments, and escalate to staff — all on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/contact">
                  <Button className="bg-[#0A3A5C] hover:bg-[#082a47] text-white px-8 py-3 text-lg w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                </a>
                <a href="/features">
                  <Button variant="outline" className="border-[#0A3A5C] text-[#0A3A5C] hover:bg-[#0A3A5C]/5 px-8 py-3 text-lg w-full sm:w-auto">
                    Learn More
                  </Button>
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">24/7 AI-powered patient support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Automatic appointment booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">GDPR & GCC compliant</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/691f11a2a2272e187e112782/attachments/9555aacb-1787-4541-8c80-e21de88bb001-gemini-image-hunowmkbob-0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251127%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251127T055207Z&X-Amz-Expires=86400&X-Amz-Signature=e11ba185ff389c80472f4bb968bc96e313327ed924762f32b2d4e0ebf9ccefcc&X-Amz-SignedHeaders=host&x-id=GetObject"
                  alt="Wisal AI Receptionist"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00BCD4]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#0A3A5C]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3A5C] mb-4">
              Powerful Features for Modern Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline patient communication and clinic operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Smart Messaging', desc: 'AI-powered responses to patient inquiries' },
              { icon: Calendar, title: 'Auto Scheduling', desc: 'Patients book appointments 24/7' },
              { icon: Shield, title: 'Secure & Compliant', desc: 'GDPR, GCC, and HIPAA compliant' },
              { icon: Users, title: 'Team Escalation', desc: 'Seamless handoff to your staff' },
              { icon: BarChart3, title: 'Analytics', desc: 'Track patient interactions and metrics' },
              { icon: Zap, title: 'Fast Setup', desc: 'Get started in minutes, not weeks' },
              { icon: Lock, title: 'Data Privacy', desc: 'End-to-end encrypted communications' },
              { icon: CheckCircle2, title: 'Multi-Language', desc: 'Support for Arabic and English' },
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition">
                <feature.icon className="w-8 h-8 text-[#00BCD4] mb-4" />
                <h3 className="font-semibold text-[#0A3A5C] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">500+</div>
              <p className="text-gray-300">Clinics Using Wisal</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">1M+</div>
              <p className="text-gray-300">Messages Processed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">99.9%</div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of clinics across the GCC using Wisal to improve patient communication and reduce administrative burden.
          </p>
          <a href="/contact">
            <Button className="bg-[#0A3A5C] hover:bg-[#082a47] text-white px-8 py-3 text-lg">
              Start Your Free Trial
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
