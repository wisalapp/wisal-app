import { Button } from '@/components/ui/button'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'HIPAA Statement — Wisal',
  description: 'Wisal HIPAA Compliance Statement',
}

export default function HIPAAStatement() {
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
        <h1 className="text-5xl font-bold text-[#0A3A5C] mb-8">HIPAA Compliance Statement</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">1. HIPAA Compliance Overview</h2>
            <p>
              Wisal is committed to maintaining the privacy and security of Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations. This statement outlines our commitment to HIPAA compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">2. Business Associate Agreement</h2>
            <p>
              Wisal can serve as a Business Associate (BA) under HIPAA. We are prepared to enter into a Business Associate Agreement (BAA) with covered entities and other business associates who use our services to process, store, or transmit PHI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">3. Administrative Safeguards</h2>
            <p>
              We have implemented comprehensive administrative safeguards including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designated Security Officer responsible for HIPAA compliance</li>
              <li>Regular security awareness and training programs</li>
              <li>Workforce security policies and procedures</li>
              <li>Information access management controls</li>
              <li>Security incident procedures and response protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">4. Physical Safeguards</h2>
            <p>
              Our physical security measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facility access controls and monitoring</li>
              <li>Workstation security and use policies</li>
              <li>Workstation use and security standards</li>
              <li>Device and media controls</li>
              <li>Secure data center infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">5. Technical Safeguards</h2>
            <p>
              We employ advanced technical safeguards to protect PHI:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Audit controls and logging of all access to PHI</li>
              <li>Integrity controls to ensure PHI is not altered</li>
              <li>Transmission security protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">6. Data Encryption</h2>
            <p>
              All PHI is encrypted using industry-standard encryption protocols:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.2+ encryption for data in transit</li>
              <li>Secure key management and rotation procedures</li>
              <li>Encrypted backups and disaster recovery systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">7. Access Controls</h2>
            <p>
              We maintain strict access controls to ensure only authorized personnel can access PHI:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Role-based access control (RBAC)</li>
              <li>Multi-factor authentication (MFA)</li>
              <li>Unique user identification</li>
              <li>Emergency access procedures</li>
              <li>Automatic logoff after inactivity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">8. Audit Controls and Logging</h2>
            <p>
              We maintain comprehensive audit logs and monitoring:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All access to PHI is logged and monitored</li>
              <li>Audit logs are retained for a minimum of 6 years</li>
              <li>Regular review of audit logs for suspicious activity</li>
              <li>Automated alerts for unauthorized access attempts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">9. Breach Notification</h2>
            <p>
              In the event of a suspected breach of PHI, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Immediately investigate the breach</li>
              <li>Notify affected individuals without unreasonable delay</li>
              <li>Notify the covered entity and relevant authorities</li>
              <li>Maintain documentation of the breach and response</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">10. Business Associate Agreement</h2>
            <p>
              To use Wisal for processing PHI, a Business Associate Agreement must be executed. Please contact us to request a BAA template or to discuss your specific requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3A5C] mb-4">11. Contact Information</h2>
            <p>
              For questions about our HIPAA compliance or to request a Business Associate Agreement, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> compliance@wisal.clinic</p>
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
