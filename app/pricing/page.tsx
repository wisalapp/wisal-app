import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Pricing — Wisal',
  description: 'Simple, transparent pricing for clinics of all sizes',
}

export default function Pricing() {
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
            💰 Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0A3A5C] mb-6 leading-tight">
            Simple, Transparent Pricing
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your clinic. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#0A3A5C] mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small clinics</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#0A3A5C]">OMR 99</span>
                <span className="text-gray-600">/month</span>
              </div>

              <a href="/contact">
                <Button className="w-full bg-[#0A3A5C] hover:bg-[#082a47] text-white mb-8">
                  Get Started
                </Button>
              </a>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Up to 500 messages/month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Basic AI responses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Appointment booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
              </ul>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 hover:shadow-lg transition border-2 border-[#00BCD4] relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00BCD4] text-white">
                Most Popular
              </Badge>
              
              <h3 className="text-2xl font-bold text-[#0A3A5C] mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">For growing clinics</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#0A3A5C]">OMR 299</span>
                <span className="text-gray-600">/month</span>
              </div>

              <a href="/contact">
                <Button className="w-full bg-[#00BCD4] hover:bg-[#00a8c4] text-[#0A3A5C] font-semibold mb-8">
                  Get Started
                </Button>
              </a>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Up to 5,000 messages/month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Advanced AI responses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Smart appointment booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Team escalation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Custom workflows</span>
                </li>
              </ul>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#0A3A5C] mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large healthcare networks</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#0A3A5C]">Custom</span>
              </div>

              <a href="/contact">
                <Button className="w-full bg-[#0A3A5C] hover:bg-[#082a47] text-white mb-8">
                  Contact Sales
                </Button>
              </a>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Unlimited messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">24/7 phone support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-700">On-premise option</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A3A5C] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees! You only pay the monthly subscription. We handle all the technical setup for you.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">What happens if I exceed my message limit?</h3>
              <p className="text-gray-600">We'll notify you when you're approaching your limit. You can upgrade anytime, or we can discuss custom pricing for your needs.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Do you offer annual discounts?</h3>
              <p className="text-gray-600">Yes! Annual plans come with a 20% discount. Contact our sales team for more details.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3">Is there a free trial?</h3>
              <p className="text-gray-600">Absolutely! Get a 14-day free trial with full access to all features. No credit card required.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Clinic?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 14-day trial today. No credit card required.
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
