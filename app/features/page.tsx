import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, MessageSquare, Calendar, Shield, Users, BarChart3, Zap, Lock, Smartphone, Globe, Headphones, Gauge } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Features — Wisal',
  description: 'Discover all the powerful features of Wisal AI Receptionist',
}

export default function Features() {
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
          <Badge className="mb-4 bg-[#00BCD4]/10 text-[#00BCD4] border-[#00BCD4]/20">
            ✨ Powerful AI Features
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0A3A5C] mb-6 leading-tight">
            Everything You Need to Succeed
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Wisal combines cutting-edge AI with healthcare expertise to deliver the perfect patient communication solution
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: 'AI-Powered Messaging',
                desc: 'Intelligent responses to patient inquiries using natural language processing. Understands context and provides accurate information 24/7.'
              },
              {
                icon: Calendar,
                title: 'Automatic Appointment Booking',
                desc: 'Patients can book, reschedule, or cancel appointments directly through WhatsApp without human intervention.'
              },
              {
                icon: Smartphone,
                title: 'WhatsApp Integration',
                desc: 'Native WhatsApp Business API integration. Reach patients where they already are - 98% of messages read within 3 minutes.'
              },
              {
                icon: Users,
                title: 'Smart Escalation',
                desc: 'Seamlessly hand off complex queries to your team. Maintain conversation history and context.'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                desc: 'Track patient interactions, response times, booking rates, and satisfaction metrics in real-time.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                desc: 'End-to-end encryption, GDPR compliant, GCC regulations adherence, and HIPAA certification.'
              },
              {
                icon: Globe,
                title: 'Multi-Language Support',
                desc: 'Seamless Arabic and English support. Automatically detects patient language preference.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast Setup',
                desc: 'Get started in minutes. No complex integrations or technical knowledge required.'
              },
              {
                icon: Lock,
                title: 'Data Privacy',
                desc: 'All patient data encrypted and securely stored. Full compliance with healthcare data protection standards.'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                desc: 'Dedicated support team available round the clock to help you succeed.'
              },
              {
                icon: Gauge,
                title: 'Performance Monitoring',
                desc: 'Real-time dashboards showing system performance, uptime, and response metrics.'
              },
              {
                icon: CheckCircle2,
                title: 'Customizable Workflows',
                desc: 'Tailor the AI behavior to match your clinic\'s specific needs and processes.'
              },
            ].map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition">
                <feature.icon className="w-10 h-10 text-[#00BCD4] mb-4" />
                <h3 className="text-xl font-semibold text-[#0A3A5C] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of Wisal with a free 14-day trial. No credit card required.
          </p>
          <a href="/contact">
            <Button className="bg-[#00BCD4] hover:bg-[#00a8c4] text-[#0A3A5C] font-semibold px-8 py-3 text-lg">
              Start Free Trial
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
