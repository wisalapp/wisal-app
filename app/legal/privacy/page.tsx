import { Button } from '@/components/ui/button'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Privacy Policy — Wisal',
  description: 'Wisal Privacy Policy',
}

export default function PrivacyPolicy() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-[#0A3A5C] mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">1. Introduction</h2>
            <p>
              Wisal ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, clinic name, and other contact information</li>
              <li><strong>Patient Data:</strong> Messages, appointment information, and health-related communications (encrypted)</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and other interaction metrics</li>
              <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Process your transactions and send related information</li>
              <li>Email you regarding updates, security alerts, and support messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If required by law or if we believe in good faith that disclosure is necessary</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and service providers</li>
              <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> We may disclose your information with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">6. GDPR & GCC Compliance</h2>
            <p>
              Wisal complies with the General Data Protection Regulation (GDPR) and GCC data protection regulations. You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> privacy@wisal.clinic</p>
              <p><strong>Address:</strong> Muscat, Oman</p>
              <p><strong>Phone:</strong> +968 9123 4567</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
