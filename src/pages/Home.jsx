import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  Cpu, ArrowRight, Zap, TrendingUp, Layers,
  Sparkles, Star, CheckCircle2, BarChart3, Mail, Code2
} from 'lucide-react';

import cmp1 from '../assets/cmp1.PNG';
import cmp2 from '../assets/cmp2.PNG';
import cmp3 from '../assets/cmp3.PNG';
import cmp4 from '../assets/cmp4.PNG';
import cmp5 from '../assets/cmp5.PNG';
import cmp6 from '../assets/cmp6.PNG';
import cmp7 from '../assets/cmp7.PNG';
import cmp8 from '../assets/cmp8.PNG';
import cmp9 from '../assets/cmp9.PNG';
import cmp10 from '../assets/cmp10.PNG';

import RotatingText from '../components/RotatingText';

function Counter({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const incrementTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

// ─── Configurations & Mock Data ──────────────────────────────────────────────

const rotatingHeadline = [
  'Web Development',
  'GHL Services',
  'AI Voice Agents',
  'Meta & Google Ads',
  'n8n Automation',
  'Cold Email',
  'Monday.com',
  'Medical Billing',
  'App Development'
];

const auditCards = [
  { title: 'Paid Channels',   desc: 'Paid ads generate traffic, but leads fall off rapidly without algorithmic validation layers.' },
  { title: 'Cold Outreach',   desc: 'Outreach triggers initial replies, but dissolves without automated follow-up structures.' },
  { title: 'Funnel Assets',   desc: 'Funnels are built out, yet conversions stall because messaging misses high-intent buyer pain points.' },
  { title: 'Revenue Flow',    desc: 'Deals happen at random - the organization operates without multi-month revenue predictability.' },
  { title: 'Sales Execution', desc: 'Closing teams spend hours manually organizing pipelines instead of running high-value client calls.' },
];

const enginePillars = [
  { num: '01', title: 'Algorithmic Cold Outreach',     desc: 'Hyper-personalized multi-channel sequences that penetrate enterprise decision-makers.', icon: <Mail className="w-5 h-5" /> },
  { num: '02', title: 'High-Intent Paid Systems',       desc: 'Laser-targeted Google & Meta optimization layers for high-value accounts.',               icon: <TrendingUp className="w-5 h-5" /> },
  { num: '03', title: 'High-Converting Funnel Assets',  desc: 'Dynamic VSL architectures and micro landing pages that convert cold traffic.',             icon: <Layers className="w-5 h-5" /> },
  { num: '04', title: 'Autonomous CRM Workflows',       desc: 'Advanced AI validation filters for qualified pipeline routing.',                            icon: <Cpu className="w-5 h-5" /> },
];

const roadmapStages = [
  { num: '1', phase: 'PHASE 01', title: 'Infrastructure Audit',  desc: 'Map internal data architecture and locate drops.' },
  { num: '2', phase: 'PHASE 02', title: 'Tech Stack Build',       desc: 'Construct custom multi-channel structures and filters.' },
  { num: '3', phase: 'PHASE 03', title: 'Conversion Funnels',     desc: 'Engineer landing pages and dynamic VSL asset layers.' },
  { num: '4', phase: 'PHASE 04', title: 'Workflow Automation',    desc: 'Deploy AI filters and dynamic data routing models.' },
  { num: '5', phase: 'PHASE 05', title: 'System Activation',      desc: 'Trigger integrated engine mechanics to scale pipelines.' },
];

const valueProps = [
  { num: '01', title: 'Architectural Rigor',   desc: 'Predictive algorithmic node pipelines built for enterprise scalability.',   icon: <BarChart3 className="w-6 h-6" /> },
  { num: '02', title: 'Complete Alignment',     desc: 'Outbound, funnels, and workflows under a unified ecosystem.',               icon: <CheckCircle2 className="w-6 h-6" /> },
  { num: '03', title: 'High-Velocity Data',     desc: 'AI routing and filtering mechanics at lightning speeds.',                   icon: <Zap className="w-6 h-6" /> },
  { num: '04', title: 'Predictable Alpha',      desc: 'Multi-month predictable revenue acquisition models.',                      icon: <TrendingUp className="w-6 h-6" /> },
];

const testimonials = [
  { company: 'Ancienttree Cabinet',  tag: 'Furniture & Manufacturing', quote: 'Within 90 days we started generating consistent US distributor inquiries. Their automation infrastructure alone saved us hours every week.', author: 'Jenny Shen',     role: 'Owner' },
  { company: 'Pravaah Consulting',   tag: 'AI Consulting',             quote: 'Sharjeel from Proxima built a complete outbound system targeting CTOs and enterprise decision-makers. Quality of conversations improved immediately.', author: 'Pretish',          role: 'Owner' },
  { company: 'Consultia USA',        tag: 'Business Consulting',       quote: 'They did not just execute marketing. They built a complete acquisition system. We started getting qualified discovery calls within weeks.', author: 'Jorge Schcolnik', role: 'Principal' },
  { company: 'Rock Bottom Lasers',   tag: 'Industrial Equipment',      quote: 'Proxima built us a targeted outreach and CRM automation system that keeps every lead tracked from first contact to closed deal.', author: 'Vin Wells',        role: 'Owner' },
  { company: 'Kiora Marketing',      tag: 'Marketing Agency',          quote: 'Proxima connected our entire acquisition stack into one cohesive system. Our conversion rates improved significantly across every channel.', author: 'Cobi',              role: 'Owner' },
  { company: 'Growth Concierge',     tag: 'Coaching & Growth',         quote: 'The GoHighLevel automation system they built is exceptional. Leads get qualified automatically and nurtured without any manual effort.', author: 'Andrea Beach',    role: 'Founder' },
];

const stats = [
  { value: '50',  label: 'US-Based Clients' },
  { value: '3',   label: 'Avg Pipeline Growth' },
  { value: '90',   label: 'Days to Results' },
  { value: '100', label: 'Done-For-You' },
];

// ─── Custom Cyberpunk Keyframes & Core Mechanics (Enhanced Contrast & Particle Glow) ───
const hyperStyles = `
@keyframes cyclicOrbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes cyclicOrbitReverse {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}
@keyframes electricLightning {
  0%, 100% { filter: drop-shadow(0 0 15px rgba(168,85,247,0.75)) drop-shadow(0 0 30px rgba(168,85,247,0.45)); opacity: 0.95; }
  50% { filter: drop-shadow(0 0 35px rgba(192,132,252,1)) drop-shadow(0 0 60px rgba(147,51,234,0.85)); opacity: 1; }
}
@keyframes lightningDashFast {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -120; }
}
@keyframes subGlow {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(192,132,252,0.25)); }
  50% { filter: drop-shadow(0 0 45px rgba(192,132,252,0.55)); }
}
@keyframes continuousMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animated-orbit-wrapper {
  animation: cyclicOrbit 40s linear infinite;
}
.counter-rotate-node {
  animation: cyclicOrbit 40s linear infinite reverse;
}
.electric-lightning-glow {
  animation: electricLightning 1.5s ease-in-out infinite;
}
.lightning-dash-line-1 {
  stroke-dasharray: 12 18;
  animation: lightningDashFast 2s linear infinite;
}
.lightning-dash-line-2 {
  stroke-dasharray: 6 12;
  animation: lightningDashFast 1.5s linear infinite reverse;
}
.luxury-node-container { animation: subGlow 5s ease-in-out infinite; }
.marquee-track {
  display: flex;
  width: max-content;
  gap: 2rem;
  animation: continuousMarquee 40s linear infinite;
}
`;

// ─── Reusable Fade-In Content Container ──────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Animated Electric Orbit Console Component ───────────────────────────────
function PremiumElectricOrbit() {
  return (
    <>
      <style>{hyperStyles}</style>
      <div className="relative flex items-center justify-center select-none luxury-node-container" style={{ width: 520, height: 520 }}>
        
        {/* Subtle Tech Matrix Mesh Background */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        {/* Deep Underlay Radiant Cosmic Purple Aura */}
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-purple-600/30 pointer-events-none" />

        {/* ─── SVG GEOMETRIC ORBIT LAYER (High-Contrast & Multiple Glow Rings) ─── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none electric-lightning-glow" viewBox="0 0 520 520" fill="none">
          {/* Inner High-Contrast Sharp Tracking Curve */}
          <circle cx="260" cy="260" r="110" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.5" />
          
          {/* Outer Main Electric Pulsing Axis Loop (Thicker, Darker Curve) */}
          <circle cx="260" cy="260" r="185" stroke="rgba(192, 132, 252, 0.7)" strokeWidth="2.5" className="lightning-dash-line-1" />
          
          {/* Secondary Fast Core Energy Ring */}
          <circle cx="260" cy="260" r="150" stroke="rgba(216, 180, 254, 0.45)" strokeWidth="1.5" className="lightning-dash-line-2" />
          
          {/* Cross Orthogonal Connecting Laser Pipelines */}
          <line x1="260" y1="20" x2="260" y2="500" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" />
          <line x1="20" y1="260" x2="500" y2="260" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" />

          {/* ─── DYNAMIC ELECTRIC LIGHTNING BALLS (PARTICLES) ─── */}
          {/* Orbit Ball 1 */}
          <g style={{ transformOrigin: '260px 260px', animation: 'cyclicOrbit 12s linear infinite' }}>
            <circle cx="260" cy="75" r="5" fill="#E9D5FF" filter="drop-shadow(0 0 8px #A855F7)" />
          </g>
          {/* Orbit Ball 2 */}
          <g style={{ transformOrigin: '260px 260px', animation: 'cyclicOrbitReverse 8s linear infinite' }}>
            <circle cx="260" cy="110" r="4" fill="#F3E8FF" filter="drop-shadow(0 0 6px #C084FC)" />
          </g>
          {/* Orbit Ball 3 */}
          <g style={{ transformOrigin: '260px 260px', animation: 'cyclicOrbit 18s linear infinite' }}>
            <circle cx="445" cy="260" r="5.5" fill="#FFFFFF" filter="drop-shadow(0 0 10px #A855F7)" />
          </g>
        </svg>

        {/* ─── CENTRAL PURE GLASS WHITE HUB (COMPACT / CHOTA SIZE) ─── */}
        <div className="absolute z-30 flex flex-col items-center justify-center rounded-2xl bg-white border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(168,85,247,0.55)] transition-transform duration-500 hover:scale-105" style={{ width: 115, height: 115 }}>
          <span className="text-xl font-black text-[#0F051D] tracking-tighter">Proxima</span>
          <span className="text-[9px] font-bold text-[#A855F7] tracking-[0.25em] uppercase mt-0.5">Digital</span>
          <div className="w-7 h-[2px] mt-2.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#C084FC]" />
        </div>

        {/* ─── AUTO ROTATING CORE NODE CONTAINER ─── */}
        <div className="absolute inset-0 w-full h-full animated-orbit-wrapper z-20">
          
          {/* NODE 1: Development (Top Position) */}
          <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
            <div className="counter-rotate-node">
              <motion.div 
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex flex-col items-center justify-center text-center w-[130px] p-3 rounded-2xl bg-[#0B0416]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.3)]"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-[#C084FC] mb-2">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <span className="block text-[11px] font-bold text-white tracking-tight">Development</span>
                <span className="block text-[9px] text-white/40 mt-0.5">Web & App Layer</span>
              </motion.div>
            </div>
          </div>

          {/* NODE 2: Growth Ads (Right Position) */}
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
            <div className="counter-rotate-node">
              <motion.div 
                whileHover={{ x: 3, scale: 1.02 }}
                className="flex flex-col items-center justify-center text-center w-[130px] p-3 rounded-2xl bg-[#0B0416]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.3)]"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-[#C084FC] mb-2">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <span className="block text-[11px] font-bold text-white tracking-tight">Growth Ads</span>
                <span className="block text-[9px] text-white/40 mt-0.5">Meta & Google</span>
              </motion.div>
            </div>
          </div>

          {/* NODE 3: GHL & AI (Bottom Position) */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
            <div className="counter-rotate-node">
              <motion.div 
                whileHover={{ y: 3, scale: 1.02 }}
                className="flex flex-col items-center justify-center text-center w-[130px] p-3 rounded-2xl bg-[#0B0416]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.3)]"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-[#C084FC] mb-2">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="block text-[11px] font-bold text-white tracking-tight">GHL & AI</span>
                <span className="block text-[9px] text-white/40 mt-0.5">Automated Engine</span>
              </motion.div>
            </div>
          </div>

          {/* NODE 4: Cold Outreach (Left Position) */}
          <div className="absolute left-[20px] top-1/2 -translate-y-1/2">
            <div className="counter-rotate-node">
              <motion.div 
                whileHover={{ x: -3, scale: 1.02 }}
                className="flex flex-col items-center justify-center text-center w-[130px] p-3 rounded-2xl bg-[#0B0416]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.3)]"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-[#C084FC] mb-2">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="block text-[11px] font-bold text-white tracking-tight">Cold Outreach</span>
                <span className="block text-[9px] text-white/40 mt-0.5">Targeted Volume</span>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

// ─── Trust Infinite Logo Slide Component ─────────────────────────────────────
function TrustSlider({ logos }) {
  const doubleLogos = [...logos, ...logos];
  return (
    <section className="py-14 border-b relative" style={{ background: '#FAF8FF', borderColor: '#E4D9F5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#FAF8FF] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#FAF8FF] to-transparent" />
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex gap-14 items-center shrink-0"
            >
              {doubleLogos.map((logo, idx) => (
                <div key={idx} className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img src={logo} alt="Enterprise Client Logo" className="max-h-8 object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Continuous Testimonial Track Component ──────────────────────────────────
function ReviewsSlider({ reviews }) {
  const tripleReviews = [...reviews, ...reviews, ...reviews];
  return (
    <section className="py-24 border-y relative overflow-hidden bg-white">
      <div className="absolute w-[400px] h-[400px] rounded-full top-[-10%] right-[-5%] pointer-events-none blur-[120px]" style={{ background: 'rgba(192,132,252,0.1)' }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeUp className="text-center mb-16">
          <span className="text-[11px] font-bold text-[#7B2FBE] tracking-widest uppercase bg-[#F0E8FF] px-3 py-1 rounded-full border border-[#C9B8E8]">Testimonials</span>
          <h2 className="text-[34px] md:text-[44px] font-black text-[#1E0B38] mt-3">Why Operations Trust Proxima</h2>
        </FadeUp>
        
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          
          <div className="marquee-track">
            {tripleReviews.map((item, idx) => (
              <div key={idx} className="w-[360px] md:w-[410px] shrink-0 p-8 rounded-3xl border border-[#E4D9F5] bg-[#FDFBFF] hover:border-[#7B2FBE] hover:shadow-[0_15px_40px_rgba(123,47,190,0.06)] transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xs bg-gradient-to-br from-[#7B2FBE] to-[#9B59D4]">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#1E0B38]">{item.author}</h5>
                    <p className="text-[11px] text-[#7C6FA0]">{item.role} | {item.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3.5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-[#7B2FBE] text-[#7B2FBE]" />)}
                </div>
                <p className="text-xs text-[#4B3D6E] leading-relaxed italic">"{item.quote}"</p>
                <span className="inline-block mt-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F0E8FF] text-[#7B2FBE] border border-[#E4D9F5]">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Integrated Layout Assembly ─────────────────────────────────────────
function Home() {
  const [activeRoadmapStage, setActiveRoadmapStage] = useState(0);
  const clientLogos = [cmp1, cmp2, cmp3, cmp4, cmp5, cmp6, cmp7, cmp8, cmp9, cmp10];
  const heroRef = useRef(null);

  useEffect(() => {
    const stageLoop = setInterval(() => {
      setActiveRoadmapStage((prev) => (prev + 1) % roadmapStages.length);
    }, 4000);
    return () => clearInterval(stageLoop);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden font-poppins text-[#4B3D6E]" style={{ background: '#FCFAFF' }}>
      <style>{hyperStyles}</style>

      {/* ─── ULTRALUXE CYBERPUNK HERO HERO CONSOLE ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#070210]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[15%] w-[750px] h-[750px] rounded-full blur-[170px]" style={{ background: 'rgba(147,51,234,0.18)' }} />
          <div className="absolute bottom-[-10%] right-[5%] w-[550px] h-[550px] rounded-full blur-[140px]" style={{ background: 'rgba(192,132,252,0.09)' }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <h1 className="text-[38px] sm:text-[50px] md:text-[58px] font-black tracking-tight leading-[1.1] text-white">
              <span className="block">Strategic Systems &</span>
              <span className="block mt-2 text-white/50 font-bold text-[28px] sm:text-[38px] md:text-[44px]">Engineered Ecosystems For</span>
              <span className="block mt-3 min-h-[70px] bg-gradient-to-r from-[#9B59D4] via-[#C084FC] to-[#7B2FBE] bg-clip-text text-transparent">
                <RotatingText texts={rotatingHeadline} interval={2800} />
              </span>
            </h1>

            <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
              We eliminate disjointed marketing operations. Our framework architects custom acquisition workflows, cold target pathways, conversion logic, and automated workflows into one unified engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://calendly.com/sharjeel-qureshi/new-meeting" target="_blank" rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-2xl text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] shadow-[0_4px_25px_rgba(123,47,190,0.35)] hover:shadow-[0_4px_40px_rgba(123,47,190,0.55)] hover:scale-[1.01]"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-xs tracking-wider uppercase text-white/80 border border-white/15 hover:border-[#7B2FBE] hover:bg-white/5 transition-all duration-300"
              >
                Explore Systems
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="flex -space-x-2">
                {clientLogos.slice(0, 4).map((img, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0314] overflow-hidden bg-white/10">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 font-medium">Powering infrastructure pipelines for 50+ scaling enterprises</p>
            </div>
          </motion.div>

          {/* Core Target Element: Lightning Glowing Auto-Orbit Machine */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <PremiumElectricOrbit />
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST SLIDER BAR ─── */}
      <TrustSlider logos={clientLogos} />

      {/* ─── DATA METRICS SECTION ─── */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-[#7B2FBE] to-[#8F3ED6]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.05} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">
                  <Counter value={item.value} />+
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wider">{item.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONVERSION HOOK CARDS ─── */}
      <section className="py-28 relative overflow-hidden border-b border-[#E4D9F5] bg-gradient-to-b from-[#F9F6FF] to-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeUp className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-black text-[#1E0B38] leading-tight max-w-3xl mx-auto">
              Your Growth Problem Is Not Marketing.{' '}
              <span className="bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] bg-clip-text text-transparent">It Is Lack of System.</span>
            </h2>
            <p className="text-[#7C6FA0] text-sm mt-4 max-w-xl mx-auto">
              Most businesses operate with fragmented nodes  structural leaks break execution loops. Here is where conversions drop off.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditCards.map((card, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="flex flex-col h-full rounded-3xl p-8 bg-white border border-[#E4D9F5] hover:border-[#C9B8E8] shadow-[0_4px_15px_rgba(123,47,190,0.02)] hover:shadow-[0_12px_35px_rgba(123,47,190,0.07)] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black text-[#7B2FBE] bg-[#F3EBFF] border border-[#E4D9F5]">
                    0{idx + 1}
                  </div>
                  <h4 className="text-[17px] font-bold text-[#1E0B38] mt-5 mb-2">{card.title}</h4>
                  <p className="text-xs text-[#7C6FA0] leading-relaxed mb-6">{card.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-[#F3EBFF] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#7B2FBE]">
                      System Integration Node
                    </span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM CORE PILLARS ─── */}
      <section className="py-28 relative overflow-hidden bg-[#0F051D] border-b border-[#2A1442]">
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeUp className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-black text-white">
              The <span className="bg-gradient-to-r from-[#C084FC] to-[#9B59D4] bg-clip-text text-transparent">Proxima Engine</span>
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">
              One central architecture syncing outreach data pools with core workflows to fully automate business pipeline cycles.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {enginePillars.map((pillar, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-[#7B2FBE]/50 shadow-inner transition-all duration-300 min-h-[200px] flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-3xl pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C084FC]">
                        {pillar.icon}
                      </div>
                      <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase">
                        NODE {pillar.num}
                      </span>
                    </div>
                    <h4 className="text-[17px] font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP LAUNCH Map ─── */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#FBF9FF] to-[#FAF6FF]">
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeUp className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-black text-[#1E0B38]">
              The <span className="bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] bg-clip-text text-transparent">30-Day</span> Launch Map
            </h2>
            <p className="text-[#7C6FA0] text-sm mt-3 max-w-md mx-auto">
              A systematic 5 phase optimization engineering architecture designed for acceleration.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {roadmapStages.map((stage, idx) => {
              const isActive = activeRoadmapStage === idx;
              return (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="flex flex-col gap-3 h-full">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-black border transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] text-white border-transparent shadow-lg' 
                        : 'bg-white border-[#C9B8E8] text-[#7B2FBE]'
                    }`}>
                      {stage.num}
                    </div>
                    
                    <div className={`p-6 rounded-2xl h-full border transition-all duration-500 ${
                      isActive 
                        ? 'bg-white border-[#7B2FBE] shadow-[0_10px_30px_rgba(123,47,190,0.08)]' 
                        : 'bg-white/60 border-[#E4D9F5]'
                    }`}>
                      <span className={`text-[9px] font-mono font-bold block mb-2 tracking-widest ${isActive ? 'text-[#7B2FBE]' : 'text-[#A89DC4]'}`}>
                        {stage.phase}
                      </span>
                      <h4 className="text-xs font-bold text-[#1E0B38] mb-1.5">{stage.title}</h4>
                      <p className="text-[11px] text-[#7C6FA0] leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS BENCHMARKS ─── */}
      <section className="py-28 relative overflow-hidden bg-white border-t border-[#E4D9F5]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-black text-[#1E0B38]">
              Why Operations Scale With <span className="bg-gradient-to-r from-[#7B2FBE] to-[#C084FC] bg-clip-text text-transparent">Proxima</span>
            </h2>
            <p className="text-[#7C6FA0] text-sm mt-3">Four baseline fundamentals engineered into every setup.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <FadeUp className="md:col-span-5">
              <div className="group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[400px] bg-[#120724] h-full shadow-xl">
                <div className="absolute inset-0 opacity-20 bg-radial-gradient from-[#8B00FF] to-transparent pointer-events-none" />
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-mono font-black text-white/10">01</span>
                  <div className="px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider bg-white/10 border border-white/10 text-[#C084FC]">
                    Baseline Core
                  </div>
                </div>
                <div className="mt-8">
                  <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/10 text-[#C084FC] mb-5">
                    {valueProps[0].icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{valueProps[0].title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{valueProps[0].desc}</p>
                </div>
              </div>
            </FadeUp>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.slice(1).map((item, idx) => (
                <FadeUp key={idx} delay={(idx + 1) * 0.05}>
                  <div className="p-7 rounded-[28px] bg-[#FAF8FF] border border-[#E4D9F5] hover:border-[#7B2FBE] hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div className="p-2.5 w-fit rounded-xl bg-white border border-[#E4D9F5] text-[#7B2FBE]">
                      {item.icon}
                    </div>
                    <div className="mt-6">
                      <span className="text-xs font-mono font-bold text-[#C9B8E8] block mb-1">{item.num}</span>
                      <h4 className="text-sm font-bold text-[#1E0B38] mb-1.5">{item.title}</h4>
                      <p className="text-xs text-[#7C6FA0] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp delay={0.3} className="sm:col-span-2">
                <div className="rounded-[24px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#F5EEFF] to-[#EDE0FF] border border-[#D4BFED]">
                  <div>
                    <h5 className="text-sm font-bold text-[#1E0B38]">Ready to build your acquisition infrastructure?</h5>
                    <p className="text-xs text-[#7C6FA0] mt-0.5">Request a zero-commitment architectural review.</p>
                  </div>
                  <a href="https://calendly.com/sharjeel-qureshi/new-meeting" target="_blank" rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGO MARQUEE SLIDER ─── */}
      <ReviewsSlider reviews={testimonials} />

      {/* ─── FINAL FOOTER CTA CONSOLE ─── */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#F7F3FF]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="relative rounded-[40px] p-10 md:p-16 text-center overflow-hidden bg-[#0F051D] border border-white/5 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#7B2FBE]/20 rounded-full blur-[100px] pointer-events-none" />
              
              
              
              <h2 className="text-[30px] md:text-[44px] font-black text-white tracking-tight leading-tight mb-4">
                Ready to Build a{' '}
                <span className="bg-gradient-to-r from-[#C084FC] via-[#9B59D4] to-[#7B2FBE] bg-clip-text text-transparent">Predictable Pipeline?</span>
              </h2>
              
              <p className="text-xs md:text-sm text-white/50 max-w-xl mx-auto leading-relaxed mb-8">
                Stop operating fragmented growth workflows. Deploy a unified structural asset stack that feeds your pipeline loops automatically every week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/sharjeel-qureshi/new-meeting" target="_blank" rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] rounded-2xl text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all duration-300"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/15 hover:border-white/30 rounded-2xl text-white/70 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

export default Home;