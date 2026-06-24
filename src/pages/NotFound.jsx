import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertTriangle, Sparkles } from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';
import Button from '../components/Button';

// ============= 404 NOT FOUND PAGE =============
// Renders for any unknown route, includes helpful links and
// a simple "go back" action using the browser history.
function NotFound() {
  const location = useLocation();
  const previousPath = location.state?.from || '/';

  return (
    <main className="bg-[#272742] min-h-screen text-white relative overflow-x-hidden flex items-center">
      <AmbientBackground />

      <div className="relative z-10 section-container py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block mb-8"
          >
            <div className="absolute -inset-6 rounded-full bg-purple-500/10 blur-2xl" />
            <h1 className="relative text-[140px] md:text-[200px] font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-[#7B2FBE] via-[#9B59D4] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(123,47,190,0.5)]">
                404
              </span>
            </h1>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="badge inline-flex mx-auto mb-6"
          >
            <AlertTriangle className="w-3.5 h-3.5" /> Page Not Found
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight text-balance"
          >
            This route <span className="text-gradient-purple">doesn't exist</span> in our acquisition system.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            The page you're looking for has been moved, removed, or never existed. Let's get you back to building
            predictable growth.
          </motion.p>

          {/* Helpful links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button to="/" variant="primary" size="lg" showArrow icon={<Home className="w-4 h-4" />} iconPosition="left">
              Back to Home
            </Button>
            <Button
              to={previousPath}
              variant="secondary"
              size="lg"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Go Back
            </Button>
          </motion.div>

          {/* Quick nav cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.6, staggerChildren: 0.08 } },
            }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {[
              { to: '/services', label: 'Services' },
              { to: '/case-studies', label: 'Case Studies' },
              { to: '/team', label: 'Our Team' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <motion.div key={item.to} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link
                  to={item.to}
                  className="group block rounded-2xl p-4 bg-white/[0.03] border border-white/[0.06] hover:border-[#8b00ff]/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 text-xs text-white/30 font-mono"
          >
            <Search className="inline w-3 h-3 mr-1" /> Requested: {location.pathname}
          </motion.p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
