import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, Target, ChevronDown, ChevronUp, Linkedin, Calendar, BarChart3, ShieldCheck, Cpu } from 'lucide-react';

// Exact imports matched with your asset filenames
import imgEvents from '../assets/event and bussiness coaching.PNG';
import imgHealthcare from '../assets/healthcea saa and consulting.PNG';
import imgCabinet from '../assets/cabinet manufacturing.PNG';
import imgFinance from '../assets/financial data.PNG';
import imgFitness from '../assets/fitness bussiness.PNG';
import imgMedical from '../assets/medical Aesthetic.PNG';

const caseStudies = [
  {
    id: 1,
    title: 'Events and Business Coaching',
    subtitle: 'Building a Fully Automated Event Growth Infrastructure',
    image: imgEvents,
    bottleneck: 'Manual lead management bottlenecks.',
    strategy: 'Engineered custom landing pages and cold outreach.',
    result: ['Automated growth system', '10+ hours saved weekly', 'Pipeline visibility'],
  },
  {
    id: 2,
    title: 'Healthcare SaaS and Consulting',
    subtitle: 'Generating 25+ Qualified Meetings',
    image: imgHealthcare,
    bottleneck: 'Inconsistent deal flow.',
    strategy: 'Deployed segmented outbound framework.',
    result: ['25+ meetings in 3 months', 'Zero lead leakage'],
  },
  {
    id: 3,
    title: 'Cabinet Manufacturing',
    subtitle: 'Building a Predictable B2B Pipeline',
    image: imgCabinet,
    bottleneck: 'Over-reliance on referrals.',
    strategy: 'Engineered cold email acquisition system.',
    result: ['35+ B2B meetings booked', 'US/Canada expansion'],
  },
  {
    id: 4,
    title: 'Financial Data Intelligence',
    subtitle: 'Transforming Raw Data into Outreach',
    image: imgFinance,
    bottleneck: 'Raw data was unusable.',
    strategy: 'Built AI-based enrichment workflow.',
    result: ['15,000+ records enriched', 'Higher sales accuracy'],
  },
  {
    id: 5,
    title: 'Fitness Business Coaching',
    subtitle: 'Creating an Automated Acquisition Engine',
    image: imgFitness,
    bottleneck: 'No scalable outreach system.',
    strategy: 'Automated full funnel system.',
    result: ['Predictable lead flow', 'Automated bookings 24/7'],
  },
  {
    id: 6,
    title: 'Medical Aesthetics Sales',
    subtitle: 'Scaling High-Ticket Visibility',
    image: imgMedical,
    bottleneck: 'No digital acquisition system.',
    strategy: 'Built Meta ads + trust content.',
    result: ['Inbound leads flowing consistently', 'Brand credibility established'],
  },
];

export default function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="bg-[#F7F5FF] min-h-screen pb-20 font-sans">

      {/* HEADER */}
      <div
        className="
        relative pt-32 pb-24 
        bg-[#030305] text-white 
        text-center overflow-hidden
        "
        style={{
          backgroundImage:
          'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg,#1a1a1a 1px, transparent 1px)',
          backgroundSize:'40px 40px'
        }}
      >
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
          className="text-5xl md:text-7xl font-black mb-6 leading-normal"
        >
          <span className="text-white">
            Real Systems Behind
          </span>
          {' '}
          <span
            className="
            text-transparent bg-clip-text 
            bg-gradient-to-r 
            from-purple-400 to-purple-600
            "
          >
            Proven Client Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3}}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          A breakdown of real world execution from cold outreach systems to full stack automation
          built to generate measurable business results.
        </motion.p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study)=>(
            <motion.div
              key={study.id}
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:.5, delay:study.id*.1 }}
              whileHover={{ y:-12, scale:1.02 }}
              className="
              group bg-white 
              rounded-[28px]
              overflow-hidden
              border border-gray-100
              shadow-lg
              hover:shadow-[0_25px_50px_rgba(123,47,190,.25)]
              transition-all duration-500
              flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="
                  w-full h-full object-cover
                  transition duration-700
                  group-hover:scale-110
                  "
                />
                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-purple-900/50
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                " />
              </div>

              {/* BODY */}
              <div className="p-6 flex flex-col flex-1 group-hover:bg-purple-50/40 transition">
                <h3 className="
                text-lg font-bold
                text-[#1A0533]
                group-hover:text-[#7B2FBE]
                transition
                "
                >
                  {study.title}
                </h3>

                <p className="text-sm text-gray-500 mb-5">
                  {study.subtitle}
                </p>

                <button
                  onClick={() => setExpandedId(expandedId===study.id ? null : study.id)}
                  className="
                  text-sm font-bold
                  text-[#7B2FBE]
                  flex items-center gap-1
                  mt-auto
                  hover:gap-3
                  transition
                  "
                >
                  {expandedId===study.id ? 'Show Less' : 'View More'}
                  {expandedId===study.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                </button>

                <AnimatePresence>
                  {expandedId===study.id && (
                    <motion.div
                      initial={{ opacity:0, height:0 }}
                      animate={{ opacity:1, height:'auto' }}
                      exit={{ opacity:0, height:0 }}
                      transition={{ duration:.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3 text-sm">
                        <div className="flex gap-2">
                          <Zap size={15} className="text-red-500"/>
                          <p className="text-gray-700">
                            <b>Bottleneck:</b> {study.bottleneck}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Target size={15} className="text-[#7B2FBE]"/>
                          <p className="text-gray-700">
                            <b>Strategy:</b> {study.strategy}
                          </p>
                        </div>

                        {study.result.map((r,i)=>(
                          <div key={i} className="flex gap-2">
                            <CheckCircle2 size={15} className="text-emerald-500" />
                            <span className="text-gray-700">{r}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ADDITIONAL INDUSTRY LEVEL STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        <div className="bg-[#1A0533] rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2FBE]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left divider-x divider-gray-800">
            <div className="flex flex-col items-center md:items-start">
              <div className="p-3 rounded-2xl bg-white/5 mb-4 text-purple-400">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white tracking-tight">15k+</h4>
              <p className="text-purple-200/60 text-sm mt-2 font-medium uppercase tracking-wider">Data Records Enriched</p>
            </div>

            <div className="flex flex-col items-center md:items-start border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-10">
              <div className="p-3 rounded-2xl bg-white/5 mb-4 text-emerald-400">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white tracking-tight">100%</h4>
              <p className="text-emerald-200/60 text-sm mt-2 font-medium uppercase tracking-wider">Predictable Lead Pipeline</p>
            </div>

            <div className="flex flex-col items-center md:items-start md:pl-6">
              <div className="p-3 rounded-2xl bg-white/5 mb-4 text-fuchsia-400">
                <Cpu size={24} />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white tracking-tight">10+ Hrs</h4>
              <p className="text-fuchsia-200/60 text-sm mt-2 font-medium uppercase tracking-wider">Saved Weekly Per Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CASE-STUDY RELEVANT CTA */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Left Card */}
            <div className="rounded-[24px] p-8 md:p-10 bg-white border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1A0533]">Want results like these engineered for your business?</h3>
                <p className="text-[#5C4D72] text-sm leading-relaxed mb-6">Every case study above started with a bottleneck. We replace manual workflows and fragmented acquisition with predictable, scalable systems.</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7B2FBE]/70">Custom Infrastructure Architecture</span>
            </div>

            {/* Right Card with Gradient */}
            <div className="relative rounded-[24px] p-8 md:p-10 overflow-hidden border border-[#7B2FBE]/30 shadow-lg flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #5a0f8a 100%)' }}>
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-fuchsia-500/20 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Let's replicate this velocity.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">Let's analyze your current client acquisition bottlenecks and design an automated system optimized for your industry.</p>
                
                <div className="flex flex-wrap gap-3">
                  {/* Schedule Call Link */}
                  <a 
                    href="https://calendly.com/sharjeel-qureshi/new-meeting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#7B2FBE] hover:bg-gray-100 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Systems Audit
                  </a>

                  {/* LinkedIn Link */}
                  <a 
                    href="https://www.linkedin.com/company/proxima-digital-llc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 hover:bg-white/20 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    View Live Operations
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}