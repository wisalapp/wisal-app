import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Heart, Globe } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'About — Wisal',
  description: 'Learn about Wisal and our mission to transform healthcare',
}

export default function About() {
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
            About Wisal
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're on a mission to transform healthcare in the GCC by making clinic operations smarter, faster, and more patient-centric.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-8">Our Story</h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Wisal was founded with a simple observation: clinics across the GCC were struggling with patient communication. 
              Receptionists were overwhelmed with messages, appointments were being missed, and patients were frustrated with slow responses.
            </p>
            
            <p>
              We realized that AI could solve this problem. By combining cutting-edge artificial intelligence with deep healthcare expertise, 
              we created Wisal — a WhatsApp AI receptionist that works 24/7 to support clinics and delight patients.
            </p>
            
            <p>
              Today, Wisal powers communication for hundreds of clinics across Oman, UAE, Saudi Arabia, and beyond. 
              We're proud to be trusted by leading healthcare providers in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <Heart className="w-10 h-10 text-[#00BCD4] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A3A5C] mb-3">Patient First</h3>
              <p className="text-gray-600">
                Everything we do is focused on improving patient care and experience.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <Target className="w-10 h-10 text-[#00BCD4] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A3A5C] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product to service.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-[#00BCD4] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A3A5C] mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our customers to understand and solve their challenges.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <Globe className="w-10 h-10 text-[#00BCD4] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A3A5C] mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to stay ahead of healthcare technology trends.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-12 text-center">Our Team</h2>
          
          <p className="text-gray-600 text-lg text-center mb-12">
            Wisal is built by a team of healthcare professionals, AI engineers, and business leaders 
            who are passionate about transforming healthcare in the GCC.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Ahmed Al-Mansouri', role: 'CEO & Co-founder', bio: 'Healthcare entrepreneur with 15+ years of experience' },
              { name: 'Fatima Al-Zahra', role: 'CTO & Co-founder', bio: 'AI specialist with expertise in NLP and machine learning' },
              { name: 'Mohammed Al-Balushi', role: 'Head of Product', bio: 'Product leader focused on healthcare innovation' },
            ].map((member, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-lg transition">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A3A5C] to-[#00BCD4] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-[#0A3A5C] mb-1">{member.name}</h3>
                <p className="text-[#00BCD4] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Transforming Healthcare</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Wisal difference today.
          </p>
          <a href="/contact">
            <Button className="bg-[#00BCD4] hover:bg-[#00a8c4] text-[#0A3A5C] font-semibold px-8 py-3 text-lg">
              Get Started
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
