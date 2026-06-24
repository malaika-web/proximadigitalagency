import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { servicesData, systemLayers } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { CheckCircle2 } from 'lucide-react';

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
function TypeWriter({ text, speed = 40 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const isDone = display.length === text.length;

  return (
    <span>
      {display}

      {/* THIN CURSOR (FIXED) */}
      {!isDone && (
        <span className="ml-[1px] font-light text-[14px] leading-none animate-pulse text-[#C084FC]">
          |
        </span>
      )}
    </span>
  );
}

/* ───────── FADE ───────── */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function Services() {
  return (
    <div
      className="font-poppins"
      style={{
        background:
          'linear-gradient(180deg, #fdf9ff 0%, #f7f0ff 40%, #fdf9ff 100%)',
        color: '#4B3D6E',
      }}
    >

      {/* ═════════ HERO ═════════ */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background:
            'linear-gradient(145deg, #0f0720 0%, #1a0533 45%, #0b0416 100%)',
        }}
      >
        {/* glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] blur-[150px] rounded-full"
            style={{ background: 'rgba(123,47,190,0.18)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[140px] rounded-full"
            style={{ background: 'rgba(192,132,252,0.08)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <FadeUp>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[11px] font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(123,47,190,0.15)',
                border: '1px solid rgba(123,47,190,0.3)',
                color: '#C084FC',
              }}
            >
              Our Services
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-[40px] md:text-[64px] font-black leading-[1.05] text-white">
              <TypeWriter text="Acquisition Systems for Every B2B Market" />
              <span
                className="block mt-4"
                style={{
                  background:
                    'linear-gradient(90deg,#9B59D4,#C084FC,#7B2FBE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Built to Scale
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/60 max-w-2xl mt-6">
              We build complete client acquisition infrastructure for SaaS, consulting,
              real estate, healthcare and more.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ═════════ SERVICES GRID ═════════ */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <FadeUp>
            <h2 className="text-center text-4xl font-black mb-14 text-[#1E0B38]">
              Our <span style={{ color: '#7B2FBE' }}>Services</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

            {servicesData.map((service, index) => {
              let image = service?.image;

              const slug = service?.slug?.toLowerCase() || '';
              if (slug.includes('web-development')) image = webDevImg;
              else if (slug.includes('ghl')) image = ghlImg;
              else if (slug.includes('voice')) image = voiceAgentImg;
              else if (slug.includes('meta')) image = metaGoogleImg;
              else if (slug.includes('n8n')) image = automationImg;
              else if (slug.includes('cold-email')) image = coldEmailImg;
              else if (slug.includes('monday')) image = mondayImplImg;
              else if (slug.includes('medical')) image = medicalBillingImg;
              else if (slug.includes('app-development')) image = appDevImg;

              return (
                <FadeUp key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-[28px] p-3"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      border: '1.5px solid #E4D9F5',
                      backdropFilter: 'blur(18px)',
                      boxShadow: '0 20px 50px rgba(123,47,190,0.08)',
                    }}
                  >
                    <ServiceCard service={{ ...service, image }} />
                  </motion.div>
                </FadeUp>
              );
            })}

          </div>

        </div>
      </section>

      {/* ═════════ FOUR LAYER SYSTEM ═════════ */}
<section
  className="py-24 relative overflow-hidden"
  style={{
    background: 'linear-gradient(135deg,#12071f,#1a0b2e,#0f061a)',
  }}
>

  {/* GRID BACKGROUND */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          'linear-gradient(rgba(123,47,190,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,190,0.35) 1px, transparent 1px)',
        backgroundSize: '70px 70px',
      }}
    />
  </div>

  {/* GLOW */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7B2FBE]/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9B59D4]/10 blur-[120px] rounded-full" />

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    <FadeUp>
      <h2 className="text-center text-4xl font-black mb-14 text-white">
        Four Layer <span className="text-[#C084FC]">System</span>
      </h2>
    </FadeUp>

    <div className="grid md:grid-cols-2 gap-6">

      {systemLayers.map((layer, i) => {

        const isPurple = i === 0 || i === 3;

        return (
          <FadeUp key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-[28px] p-8 border transition-all duration-300"
              style={{

                /* CARD 1 & 4 = PURPLE */
                background: isPurple
                  ? 'linear-gradient(135deg,#7B2FBE,#9B59D4)'
                  : 'white',

                /* BORDER */
                border: isPurple
                  ? '1px solid rgba(255,255,255,0.15)'
                  : '1px solid #E5D8F3',

                /* TEXT COLOR */
                color: isPurple ? 'white' : '#1E0B38',
              }}
            >

              <h3 className="text-xl font-bold mb-3">
                {layer.title}
              </h3>

              <p className={`text-sm mb-4 ${isPurple ? 'text-white/80' : 'text-[#5C4D72]'}`}>
                {layer.description}
              </p>

              <div className="space-y-2">
                {layer.features.map((f, idx) => (
                  <div key={idx} className="flex gap-2 items-start">

                    <CheckCircle2
                      className="w-4 h-4 mt-0.5"
                      style={{ color: '#7B2FBE' }}
                    />

                    <span className="text-sm">
                      {f}
                    </span>

                  </div>
                ))}
              </div>

            </motion.div>
          </FadeUp>
        );
      })}

    </div>
  </div>
</section>

      {/* ═════════ CTA (FINAL POLISH) ═════════ */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-[40px] p-12 relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg,#ffffff,#f3e8ff,#ffffff)',
              border: '1px solid rgba(123,47,190,0.25)',
              boxShadow: '0 20px 80px rgba(123,47,190,0.2)',
            }}
          >

            <h2 className="text-4xl font-black">
              <span style={{ color: '#1A0533' }}>
                Ready to Build Your
              </span>{' '}
              <span style={{ color: '#7B2FBE' }}>
                System?
              </span>
            </h2>

            <p className="mt-4 text-[#5C4D72]">
              Predictable pipeline automation for real growth.
            </p>

            <a
              href="https://calendly.com/sharjeel-qureshi/new-meeting"
              className="inline-block mt-8 px-8 py-4 rounded-2xl font-bold text-white"
              style={{
                background:
                  'linear-gradient(135deg,#7B2FBE,#9B59D4)',
                boxShadow: '0 0 30px rgba(123,47,190,0.5)',
              }}
            >
              Book Strategy Call
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Services;