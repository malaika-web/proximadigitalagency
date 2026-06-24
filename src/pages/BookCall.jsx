import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';
import Button from '../components/Button';

// ============= BOOK CALL PAGE =============
// Hosts the official Calendly scheduler for Proxima Digital.
// Falls back gracefully if Calendly is offline.
const CALENDLY_URL = 'https://calendly.com/sharjeel-qureshi/new-meeting';

function BookCall() {
  return (
    <main className="bg-[#030305] min-h-screen text-white relative overflow-x-hidden">
      <AmbientBackground />

      <div className="relative z-10 section-container pt-32 pb-20">
        {/* Header controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors group font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" /> Secure Discovery Scheduler
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge inline-flex mx-auto mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Book a Call
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-5 leading-[1.05] text-balance">
            Select a <span className="text-gradient-purple">Date & Time</span>
          </h1>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            Choose a slot with our system architects to audit your current B2B operations pipeline and design a
            predictable acquisition system for your business.
          </p>
        </div>

        {/* Calendly embed */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 blur-xl opacity-60" />
            <div className="relative rounded-[32px] p-2 bg-[#1A0533] border border-[#7B2FBE]/30 shadow-[0_25px_60px_-15px_rgba(123,47,190,0.25)] overflow-hidden">
            <div className="bg-white rounded-[26px] h-[680px] md:h-[760px] overflow-hidden">
              <iframe
                src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=8b00ff&background_color=ffffff&text_color=111827`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Select a Date & Time - Proxima Digital"
                className="rounded-[26px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Helper row */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-xs text-white/40 leading-relaxed">
            Can't find a time that works?{' '}
            <Link to="/contact" className="text-purple-300 hover:text-white underline-offset-2 hover:underline transition-colors">
              Send us a message
            </Link>{' '}
            and we'll find a slot that fits.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={CALENDLY_URL}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4 mr-1" /> Open in new tab
            </Button>
            <Button to="/services" variant="ghost" size="sm">
              Explore services first
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookCall;
