import { Button } from '@/components/ui/button'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Cookie Policy — Wisal',
  description: 'Wisal Cookie Policy',
}

export default function CookiePolicy() {
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
        <h1 className="text-5xl font-bold text-[#0A3A5C] mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. They help us recognize you, remember your preferences, and understand how you use Wisal. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p>Each cookie typically contains:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A unique identifier</li>
              <li>The domain that set the cookie</li>
              <li>An expiration date</li>
              <li>The path where the cookie is valid</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Essential Cookies (Always Active)</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
            </p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session cookies for user authentication</li>
              <li>Security cookies to prevent fraud</li>
              <li>Load balancing cookies for website performance</li>
              <li>Cookie consent preference cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Functional Cookies (Opt-In)</h3>
            <p>
              These cookies remember your choices and preferences to provide a personalized experience. They enable features like language selection, saved preferences, and form data retention.
            </p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Language preference cookies</li>
              <li>Theme preference (light/dark mode)</li>
              <li>User interface customization</li>
              <li>Saved form data for faster checkout</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Analytics Cookies (Opt-In)</h3>
            <p>
              These cookies help us understand how visitors use our website. They collect anonymous data about page views, user interactions, and traffic sources. This information helps us improve our website and user experience.
            </p>
            <p><strong>Services Used:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and traffic sources</li>
              <li><strong>Hotjar:</strong> Records user sessions and heatmaps (optional)</li>
              <li><strong>Mixpanel:</strong> Tracks user events and conversion funnels</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Marketing Cookies (Opt-In)</h3>
            <p>
              These cookies are used to track your activity across websites and display personalized advertisements. They help us understand your interests and show you relevant content and offers.
            </p>
            <p><strong>Services Used:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Facebook Pixel:</strong> Tracks conversions and enables retargeting</li>
              <li><strong>Google Ads:</strong> Enables conversion tracking and remarketing</li>
              <li><strong>LinkedIn Insight Tag:</strong> Tracks B2B conversions</li>
              <li><strong>Email Marketing Platforms:</strong> Tracks email campaign performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">3. Cookie Duration</h2>
            <p>Cookies have different lifespans depending on their purpose:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1 month to 2 years)</li>
              <li><strong>Analytics Cookies:</strong> Typically expire after 13 months</li>
              <li><strong>Marketing Cookies:</strong> Vary by platform (typically 30 days to 2 years)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">4. Third-Party Cookies</h2>
            <p>
              We use third-party services that may set their own cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Analyzes website traffic and user behavior</li>
              <li><strong>Google Ads:</strong> Tracks conversions and enables remarketing</li>
              <li><strong>Facebook Pixel:</strong> Tracks user actions and enables retargeting</li>
              <li><strong>LinkedIn Insight Tag:</strong> Tracks B2B conversions and audience insights</li>
              <li><strong>Hotjar:</strong> Records user sessions and heatmaps (optional)</li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">5. GDPR & GCC Compliance</h2>
            <p>
              Wisal complies with the General Data Protection Regulation (GDPR) and GCC data protection regulations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> We obtain explicit consent before setting non-essential cookies</li>
              <li><strong>Transparency:</strong> We clearly disclose what cookies we use and why</li>
              <li><strong>User Rights:</strong> You have the right to access, modify, or delete your cookie preferences</li>
              <li><strong>Data Minimization:</strong> We only collect data necessary for our stated purposes</li>
              <li><strong>Data Security:</strong> All cookie data is encrypted and securely stored</li>
              <li><strong>Right to Withdraw:</strong> You can withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">6. How to Manage Your Cookies</h2>
            
            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Cookie Consent Banner</h3>
            <p>
              When you first visit Wisal, you'll see a cookie consent banner at the bottom of the page. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accept All:</strong> Accept all cookies including analytics and marketing</li>
              <li><strong>Reject All:</strong> Reject all non-essential cookies</li>
              <li><strong>Customize:</strong> Choose which types of cookies to accept</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Browser Settings</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A3A5C] mt-6 mb-3">Opt-Out Tools</h3>
            <p>You can opt out of specific tracking services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#00BCD4] hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><strong>Facebook:</strong> <a href="https://www.facebook.com/ads/preferences" className="text-[#00BCD4] hover:underline">Facebook Ad Preferences</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/guest-controls" className="text-[#00BCD4] hover:underline">LinkedIn Cookie Settings</a></li>
              <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org" className="text-[#00BCD4] hover:underline">NAI Opt-out Tool</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">7. Do Not Track (DNT)</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature. While we respect DNT signals, we cannot guarantee that all third-party services honor this preference. If you have DNT enabled and want to opt out of tracking, please use the methods described in Section 6.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">8. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page. Your continued use of Wisal after any changes constitutes your acceptance of the updated Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">9. Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy or how we use cookies, please contact us:
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
