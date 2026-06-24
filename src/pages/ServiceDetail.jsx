import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import CTASection from '../components/CTASection';
import { ArrowLeft, CheckCircle2, Zap, Star } from 'lucide-react';

import webDevImg from '../assets/webdevelopment.png';
import ghlImg from '../assets/ghl.png';
import voiceAgentImg from '../assets/voice agent.png';
import metaGoogleImg from '../assets/meta google ads.png';
import automationImg from '../assets/Automation.png';
import coldEmailImg from '../assets/cold email.png';
import mondayImplImg from '../assets/monday implementation.png';
import medicalBillingImg from '../assets/medical billing.png';
import appDevImg from '../assets/app development.png';

/* ───────── TYPEWRITER ───────── */
function TypeWriter({ text = "", speed = 35 }) {
  const [display, setDisplay] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const t = setTimeout(() => {
        setDisplay(text.slice(0, i + 1));
        setI(i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [i, text, speed]);

  return (
    <span>
      {display}
      <span className="inline-block w-[2px] h-[1em] bg-white ml-[3px] animate-pulse" />
    </span>
  );
}

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function ServiceDetail() {
  const { slug } = useParams();
  const rawService = servicesData.find(s => s.slug === slug);

  if (!rawService) {
    return (
      <main className="bg-[#030305] min-h-screen flex items-center justify-center text-white font-poppins">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
          <p className="text-white/60 mb-8">The service you are looking for does not exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9B59D4] text-white rounded-full font-bold hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  let targetImage = rawService.image;
  const slugLower = slug?.toLowerCase() || '';

  if (slugLower.includes('web-development')) targetImage = webDevImg;
  else if (slugLower.includes('ghl')) targetImage = ghlImg;
  else if (slugLower.includes('voice')) targetImage = voiceAgentImg;
  else if (slugLower.includes('meta')) targetImage = metaGoogleImg;
  else if (slugLower.includes('n8n')) targetImage = automationImg;
  else if (slugLower.includes('cold-email')) targetImage = coldEmailImg;
  else if (slugLower.includes('monday')) targetImage = mondayImplImg;
  else if (slugLower.includes('medical')) targetImage = medicalBillingImg;
  else if (slugLower.includes('app-development')) targetImage = appDevImg;

  const service = { ...rawService, image: targetImage };

  return (
    <div className="bg-[#F7F5FF] font-poppins text-[#5C4D72]">

      {/* SPLIT-LAYOUT HERO: Left Text + Right Image */}
      <header className="relative pt-28 md:pt-32 pb-12 md:pb-16 bg-[#030305] text-white overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#8b00ff]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Text Content */}
            <div className="pt-6 md:pt-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#7B2FBE]/15 border border-[#7B2FBE]/30 text-[11px] font-bold text-[#C084FC] uppercase tracking-widest">
                  OUR SERVICES
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-all text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                  <TypeWriter text={service.title} />
                </span>
              </h1>

              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* RIGHT: Service Image */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-[24px] overflow-hidden border border-[#7B2FBE]/20 bg-[#0B0A13]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* KEY FEATURES + BENEFITS */}
      <section className="py-20 bg-[#F7F5FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-[#1A0533]">Key Features</h2>

              <div className="space-y-4 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all group">
                    <CheckCircle2 className="w-5 h-5 text-[#7B2FBE] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#1A0533]">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-black mb-6 text-[#1A0533]">Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all group">
                    <Zap className="w-5 h-5 text-[#7B2FBE] mb-3" />
                    <p className="text-sm text-[#5C4D72] font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Process Section */}
              {service.process && service.process.length > 0 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-black mb-6 text-[#1A0533]">Our Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 border border-[#7B2FBE]/20 text-[#7B2FBE] flex items-center justify-center text-xs font-bold">
                            {step.step}
                          </span>
                          <h3 className="font-bold text-[#1A0533] text-sm">{step.title}</h3>
                        </div>
                        <p className="text-xs text-[#5C4D72] leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <div className="rounded-[24px] p-8 sticky top-28 border border-white/20"
                style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #5a0f8a 100%)' }}>
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/20 text-white">Quick Facts</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2 font-bold">Timeline</p>
                    <p className="text-2xl font-black text-white">{service.timelineMonths} months</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2 font-bold">Target Audience</p>
                    <p className="text-sm font-bold text-white/90">{service.targetAudience}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-20 bg-white border-t border-[#E4D9F5]">
          <div className="max-w-6xl mx-auto px-6">
            <FadeUp className="text-center mb-14">
              <span className="text-[11px] font-bold text-[#7B2FBE] tracking-widest uppercase bg-[#F0E8FF] px-3 py-1 rounded-full border border-[#C9B8E8]">Results</span>
              <h2 className="text-[32px] md:text-[40px] font-black text-[#1E0B38] mt-3">Case Studies</h2>
              <p className="text-[#7C6FA0] text-sm mt-2">Real results from real implementations</p>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.caseStudies.map((cs, idx) => (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-[#F9F6FF] to-white border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all group">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 fill-[#7B2FBE] text-[#7B2FBE]" />
                      <span className="text-[13px] font-bold text-[#7B2FBE]">{cs.metric}</span>
                    </div>
                    <h3 className="font-bold text-[#1A0533] mb-2">{cs.company}</h3>
                    <p className="text-xs text-[#5C4D72] leading-relaxed">{cs.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title={`Ready to Get Started with ${service.title}?`}
        subtitle={`Let us discuss how ${service.title} can transform your business and create predictable growth.`}
        primaryButton={{ label: "Book a Consultation", href: "https://calendly.com/sharjeel-qureshi/new-meeting" }}
        secondaryButton={{ label: "Contact Us", to: "/contact" }}
        tone="dark"
      />
    </div>
  );
}

export default ServiceDetail;