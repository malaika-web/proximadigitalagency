import { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';

const navLinks = [
  { to: '/', label: 'Home' },
  {
    label: 'Services',
    isDropdown: true,
    items: [
      { to: '/services', label: 'All Services' },
      { to: '/services/web-development', label: 'Web Development' },
      { to: '/services/ghl-services', label: 'GoHighLevel (GHL)' },
      { to: '/services/ai-voice-agents', label: 'AI Voice Agents' },
      { to: '/services/meta-google-ads', label: 'Meta & Google Ads' },
      { to: '/services/n8n-automation', label: 'n8n Automation' },
      { to: '/services/cold-email', label: 'Cold Email Marketing' },
      { to: '/services/monday-implementation', label: 'Monday.com Setup' },
      { to: '/services/medical-billing', label: 'Medical Billing' },
      { to: '/services/app-development', label: 'App Development' },
    ],
  },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut', staggerChildren: 0.03 },
  },
  exit: { opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.15 } },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(123,47,190,0.10)]' : ''
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-[28px] saturate-[1.3]'
            : 'bg-white/85 backdrop-blur-[20px]'
        }`}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9B8E8] to-transparent" />

      <div
        className={`relative mx-auto flex items-center justify-between transition-all duration-500 px-6 md:px-10 ${
          scrolled ? 'h-[64px]' : 'h-[80px]'
        }`}
      >

<NavLink to="/" className="relative z-10 flex items-center gap-2.5 group">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    className="relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FBE]/20 to-[#C084FC]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <img
      className="relative object-contain transition-all duration-300"
      style={{ height: scrolled ? '30px' : '36px', width: 'auto' }}
      src={logo}
      alt="Proxima Digital"
    />
  </motion.div>
</NavLink>
        <nav className="hidden md:flex items-center gap-0.5 h-full">
          {navLinks.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.label} ref={dropdownRef} className="relative h-full flex items-center">
                  <Link
                    to="/services"
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold tracking-tight rounded-xl transition-all duration-300 ${
                      isServicesActive
                        ? 'text-[#7B2FBE] bg-[#F0E8FF]'
                        : 'text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF]'
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-10"
                          onClick={() => setDropdownOpen(false)}
                        />
                        <motion.div
                          ref={dropdownRef}
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={() => setDropdownOpen(false)}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 min-w-[280px] bg-white rounded-2xl border border-[#E4D9F5] shadow-[0_16px_48px_rgba(123,47,190,0.12)] overflow-hidden py-2"
                        >
                          <div className="px-1">
                            {item.items.map((subItem) => (
                              <motion.div key={subItem.label} variants={dropdownItemVariants}>
                                <Link
                                  to={subItem.to}
                                  onClick={() => setDropdownOpen(false)}
                                  className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                    location.pathname === subItem.to
                                      ? 'text-[#7B2FBE] bg-[#F0E8FF]'
                                      : 'text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF]'
                                  }`}
                                >
                                  <span>{subItem.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#7B2FBE]" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive: active }) =>
                  `relative px-4 py-2 text-[13px] font-semibold tracking-tight rounded-xl transition-all duration-300 ${
                    active
                      ? 'text-[#7B2FBE] bg-[#F0E8FF]'
                      : 'text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF]'
                  }`
                }
              >
                {({ isActive: active }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-[#F0E8FF] border border-[#C9B8E8]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            href="https://calendly.com/sharjeel-qureshi/new-meeting"
            size={scrolled ? 'sm' : 'md'}
            showArrow
          >
            Book a Call
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-10 h-10 rounded-xl flex items-center justify-center text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF] transition-all duration-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#1E0B38]/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white/98 backdrop-blur-[40px] border-l border-[#E4D9F5] z-40 md:hidden pt-24 pb-8 px-6 overflow-y-auto shadow-[-8px_0_40px_rgba(123,47,190,0.10)]"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.isDropdown ? (
                      <>
                        <Link
                          to="/services"
                          onClick={() => setMobileOpen(false)}
                          className={`block px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ${
                            isServicesActive
                              ? 'text-[#7B2FBE] bg-[#F0E8FF] border border-[#C9B8E8]'
                              : 'text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF] border border-transparent'
                          }`}
                        >
                          All Services
                        </Link>
                        <div className="ml-4 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-[#C9B8E8] pl-3">
                          {item.items.slice(1).map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                location.pathname === sub.to
                                  ? 'text-[#7B2FBE] bg-[#F0E8FF]'
                                  : 'text-[#7C6FA0] hover:text-[#7B2FBE] hover:bg-[#F0E8FF]'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive: active }) =>
                          `block px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ${
                            active
                              ? 'text-[#7B2FBE] bg-[#F0E8FF] border border-[#C9B8E8]'
                              : 'text-[#4B3D6E] hover:text-[#7B2FBE] hover:bg-[#F0E8FF] border border-transparent'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-[#E4D9F5]">
                <Button
                  href="https://calendly.com/sharjeel-qureshi/new-meeting"
                  size="md"
                  className="w-full"
                  showArrow
                >
                  Book a Strategy Call
                </Button>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 block text-center text-xs text-[#7C6FA0] hover:text-[#7B2FBE] transition-colors"
                >
                  Or send us a message
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;