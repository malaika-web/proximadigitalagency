import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import { companyInfo } from '../data/servicesData';

const footerLinks = {
  services: [
    { to: '/services/saas', label: 'SaaS Growth System' },
    { to: '/services/real-estate', label: 'Real Estate Lead Gen' },
    { to: '/services/consulting', label: 'Consulting and Coaching' },
    { to: '/services/tech-b2b', label: 'Tech and B2B' },
    { to: '/services/local-services', label: 'Local B2B Services' },
    { to: '/services/healthcare', label: 'Healthcare Practice Growth' },
  ],
  company: [
    { to: '/team', label: 'Our Team' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/contact', label: 'Contact' },
  ],
  resources: [
    { to: '/contact', label: 'Get Started' },
    { to: 'https://calendly.com/sharjeel-qureshi/new-meeting', label: 'Book a Call', external: true },
  ],
};

function Footer() {
  return (
    <footer className="relative bg-[#1A0533] w-full overflow-hidden text-white">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B2FBE]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <img
                  className="object-contain transition-all duration-300 hover:opacity-90 drop-shadow-[0_0_18px_rgba(139,0,255,0.3)]"
                  style={{ height: '38px', filter: 'brightness(0) invert(1)' }}
                  src={logo}
                  alt="Proxima Digital"
                />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                {companyInfo.description}
              </p>

              <div className="flex gap-3">
                {[
                  { href: companyInfo.socialLinks?.linkedin || '#', label: 'LinkedIn', Icon: Linkedin },
                  { href: companyInfo.socialLinks?.instagram || '#', label: 'Instagram', Icon: Instagram },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-[#7B2FBE]/50 hover:bg-[#7B2FBE]/15 hover:shadow-[0_0_20px_rgba(123,47,190,0.2)] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em]">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2 space-y-5">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em]">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em]">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-3.5 h-3.5 text-white/30 group-hover:text-[#9B59D4] transition-colors" />
                  {companyInfo.email}
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <Phone className="w-3.5 h-3.5 text-white/30 group-hover:text-[#9B59D4] transition-colors" />
                  {companyInfo.phone}
                </a>
                <div className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="pt-3">
                  <Button
                    href="https://calendly.com/sharjeel-qureshi/new-meeting"
                    size="sm"
                    showArrow
                  >
                    Book a Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center md:text-left">
              &copy; {new Date().getFullYear()} {companyInfo.name}. Building acquisition infrastructure for
              predictable growth.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
