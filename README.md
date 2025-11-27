# Wisal - WhatsApp AI Receptionist for Clinics

A production-ready B2B SaaS website for Wisal, an AI-powered WhatsApp receptionist designed specifically for clinics in Oman and the GCC region.

## 🎯 Overview

Wisal automates clinic operations by handling patient inquiries, appointment scheduling, and follow-ups through WhatsApp. The website is built to convert clinic decision-makers with emphasis on trust, clinical safety, and compliance.

### Key Features
- ✅ WhatsApp-first communication
- ✅ HIPAA-aligned design with PHI protection
- ✅ Multi-language support (Arabic & English)
- ✅ Clinic-specific workflows
- ✅ Enterprise-grade security
- ✅ GCC-compliant data residency

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
cd /home/code/wisal-saas

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
wisal-saas/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with SEO
│   ├── features/page.tsx           # Features page
│   ├── pricing/page.tsx            # Pricing page
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── blog/page.tsx               # Blog page
│   └── legal/
│       ├── privacy/page.tsx        # Privacy Policy
│       ├── terms/page.tsx          # Terms of Service
│       └── hipaa/page.tsx          # HIPAA Compliance
├── components/ui/                  # shadcn/ui components
├── public/
│   ├── images/                     # Logo and backgrounds
│   ├── sitemap.xml                 # SEO sitemap
│   └── robots.txt                  # Search engine directives
├── IMPLEMENTATION_NOTES.md         # Detailed implementation guide
└── README.md                       # This file
```

## 🎨 Design System

### Colors
- **Primary**: #0A3A5C (Deep Sapphire)
- **Accent**: #00BCD4 (Teal)
- **Text**: #13202A (Graphite)
- **Background**: #F5F7FA (Soft Gray)

### Typography
- Headlines: Poppins SemiBold
- Body: Inter Regular/Medium
- Arabic: Noto Naskh Arabic

## 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Main landing page with hero, benefits, features |
| Features | `/features` | Detailed feature breakdown |
| Pricing | `/pricing` | Three-tier pricing model |
| About | `/about` | Company mission, vision, team |
| Blog | `/blog` | Articles and insights |
| Contact | `/contact` | Contact form and information |
| Privacy Policy | `/legal/privacy` | Privacy and data handling |
| Terms of Service | `/legal/terms` | Terms and conditions |
| HIPAA Statement | `/legal/hipaa` | Compliance documentation |

## 💰 Pricing Tiers

### Core - $89/month
- Solo clinics
- 3,000 messages/month
- 1 workflow
- Google Calendar integration

### Growth - $149/month
- Multi-doctor clinics
- 10,000 messages/month
- Multiple workflows
- Human handover support

### Enterprise - Custom
- Multi-branch clinics
- Unlimited messages
- GCC data residency
- Dedicated support
- SLA guarantee

## 🔒 Security & Compliance

### HIPAA Alignment
- PHI detection and automatic redaction
- Audit logging for all activities
- Enterprise plans with compliant storage
- Business Associate Agreement (BAA) available

### Security Measures
- TLS 1.2+ encryption in transit
- AES-256 encryption at rest
- Role-based access control (RBAC)
- Multi-factor authentication
- Regular security audits

### Data Privacy
- No PHI storage by default
- GDPR-compliant data handling
- GCC data residency options
- Transparent privacy policy

## ♿ Accessibility

- WCAG AA compliance
- 4.5:1 contrast ratio
- Keyboard navigation
- Semantic HTML
- Alt text for all images

## 📊 Performance

- Lighthouse Score: >90 (desktop)
- Mobile Score: >70
- Page Size: <300KB gzip
- First Contentful Paint: <2s

## 🔍 SEO

- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt configuration
- Mobile-responsive design

## 🛠️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Docker
```bash
docker build -t wisal-saas .
docker run -p 3000:3000 wisal-saas
```

## 📚 Documentation

- **IMPLEMENTATION_NOTES.md** - Detailed technical documentation
- **HIPAA_COMPLIANCE.md** - Compliance guidelines
- **DEPLOYMENT_GUIDE.md** - Deployment instructions

## 🔄 Development Workflow

### Adding a New Page
1. Create file in `app/[page]/page.tsx`
2. Add metadata export
3. Implement component
4. Update navigation links
5. Add to sitemap.xml

### Updating Styling
- Use Tailwind CSS classes
- Follow design tokens
- Test on mobile devices
- Check accessibility

### Adding Components
- Use shadcn/ui components
- Create reusable components in `components/`
- Document component props
- Test responsiveness

## 📱 Mobile Optimization

- Responsive design (mobile-first)
- Touch-friendly buttons (min 44x44px)
- Optimized images
- Fast load times
- Readable font sizes

## 🌍 Internationalization (Future)

- Arabic language support
- RTL layout implementation
- Locale-specific content
- Currency and date formatting

## 📞 Support

- **Email**: support@wisal.ai
- **Phone**: +968 9123 4567
- **Address**: Muscat, Oman

## 📄 License

© 2025 Wisal. All rights reserved.

## 🤝 Contributing

For internal team members:
1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit for review
5. Deploy to production

## 📋 Checklist for Launch

- [x] All pages created and tested
- [x] Legal pages (Privacy, Terms, HIPAA)
- [x] SEO optimization
- [x] Mobile responsive
- [x] Accessibility compliance
- [x] Performance optimization
- [ ] Arabic translations
- [ ] Analytics setup
- [ ] Email integration
- [ ] Domain configuration

## 🚀 Next Steps

1. **Phase 2**: Arabic language support and RTL layout
2. **Phase 3**: Blog articles and content management
3. **Phase 4**: Backend integration and user authentication
4. **Phase 5**: Advanced analytics and reporting

---

**Last Updated**: November 27, 2025
**Version**: 1.0.0
