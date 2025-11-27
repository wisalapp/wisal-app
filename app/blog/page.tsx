import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Footer } from '@/app/components/footer'

export const metadata = {
  title: 'Blog — Wisal',
  description: 'Latest insights and tips for clinic management with AI',
}

const blogPosts = [
  {
    id: 1,
    title: 'How AI Receptionists Are Transforming Healthcare in the GCC',
    excerpt: 'Discover how artificial intelligence is revolutionizing patient communication and appointment management across Gulf clinics.',
    content: 'AI-powered receptionists are changing the way clinics operate. From handling patient inquiries 24/7 to managing appointment bookings automatically, these systems are improving patient satisfaction while reducing staff workload. In the GCC region, where healthcare demand is rapidly growing, AI solutions like Wisal are becoming essential tools for modern clinics.',
    author: 'Dr. Ahmed Al-Mansouri',
    date: 'November 20, 2025',
    category: 'Healthcare Technology',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Reducing No-Shows: The Impact of Automated Appointment Reminders',
    excerpt: 'Learn how WhatsApp-based appointment reminders can reduce no-show rates by up to 40% in your clinic.',
    content: 'No-shows are a significant challenge for clinics, leading to lost revenue and inefficient scheduling. Automated WhatsApp reminders sent 24 hours before appointments have proven to reduce no-show rates dramatically. Patients prefer WhatsApp communication, making it the perfect channel for appointment confirmations and reminders.',
    author: 'Fatima Al-Zahra',
    date: 'November 15, 2025',
    category: 'Clinic Management',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'GDPR & GCC Compliance: What Clinics Need to Know',
    excerpt: 'Understanding data protection regulations and how to ensure your clinic remains compliant with international standards.',
    content: 'Data protection is crucial in healthcare. Whether you\'re operating under GDPR in Europe or GCC regulations in the Middle East, patient data security is paramount. Wisal is built with compliance in mind, ensuring all patient communications and data are encrypted and securely stored according to international standards.',
    author: 'Legal Team',
    date: 'November 10, 2025',
    category: 'Compliance',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Patient Communication Best Practices in 2025',
    excerpt: 'Explore the latest strategies for effective patient engagement and communication in modern healthcare.',
    content: 'Effective patient communication goes beyond just sending messages. It\'s about being responsive, personalized, and available when patients need you. WhatsApp has become the preferred communication channel for patients globally, with 98% of messages being read within 3 minutes. Clinics that leverage this channel see improved patient satisfaction and loyalty.',
    author: 'Dr. Mohammed Al-Balushi',
    date: 'November 5, 2025',
    category: 'Patient Care',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Scaling Your Clinic: How Automation Enables Growth',
    excerpt: 'Discover how AI automation allows clinics to handle more patients without proportionally increasing staff.',
    content: 'As your clinic grows, managing patient communications becomes increasingly complex. Automation is the key to scaling without burning out your team. By automating routine tasks like appointment scheduling, reminders, and initial inquiries, your staff can focus on providing quality patient care. This leads to better patient outcomes and higher staff satisfaction.',
    author: 'Samir Al-Rashid',
    date: 'October 28, 2025',
    category: 'Business Growth',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'The Future of Healthcare: AI and Human Touch',
    excerpt: 'Why the best healthcare solutions combine artificial intelligence with human expertise and compassion.',
    content: 'AI is not meant to replace healthcare professionals—it\'s meant to augment them. The most successful clinics are those that use AI to handle routine tasks while empowering their staff to focus on patient care. Wisal is designed with this philosophy in mind, ensuring that AI handles the administrative burden while humans provide the care and empathy that patients deserve.',
    author: 'Dr. Layla Al-Harbi',
    date: 'October 20, 2025',
    category: 'Healthcare Innovation',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop'
  }
]

export default function Blog() {
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

          <Button className="bg-[#0A3A5C] hover:bg-[#082a47] text-white">
            Start Free Trial
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0A3A5C] mb-6 leading-tight">
            Wisal Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Insights, tips, and best practices for modern clinic management with AI
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition group cursor-pointer">
                {/* Image */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0A3A5C] mb-3 line-clamp-2 group-hover:text-[#00BCD4] transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 text-[#00BCD4] hover:text-[#0A3A5C] transition font-medium text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3A5C] to-[#082a47] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Clinic?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of clinics across the GCC using Wisal to improve patient communication and reduce administrative burden.
          </p>
          <Button className="bg-[#00BCD4] hover:bg-[#00a8c4] text-[#0A3A5C] font-semibold px-8 py-3 text-lg">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
