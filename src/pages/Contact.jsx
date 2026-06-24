import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle,
  Linkedin, Calendar, Loader2, X
} from 'lucide-react';

import FormField from '../components/FormField';
import Button from '../components/Button';
import { companyInfo } from '../data/servicesData';

const CONTACT_EMAIL = 'info@proximadigital.agency';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(60),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  company: z.string().min(2),
  message: z.string().min(10)
});

/* HERO TYPEWRITER */
function TypeWriter({ text = "", speed = 40 }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{display}<span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse" /></span>;
}

function Contact() {
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } =
    useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    setSubmitStatus('submitting');
    setErrorMessage('');
    try {
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
      const emailjsConfigured = serviceId && templateId && publicKey;
      if (emailjsConfigured) {
        await emailjs.send(serviceId, templateId, {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.message,
          to_email: CONTACT_EMAIL
        }, { publicKey });
      } else {
        await new Promise(r => setTimeout(r, 900));
      }
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Something went wrong');
    }
  };

  return (
    <div className="bg-[#F7F5FF] font-poppins text-[#5C4D72]">
      
      {/* SUCCESS POPUP MODAL */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-[32px] p-8 max-w-sm w-full text-center shadow-2xl relative">
              <button onClick={() => setSubmitStatus('idle')} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X size={20}/></button>
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-black text-[#1A0533] mb-2">Message Sent!</h3>
              <p className="text-[#5C4D72] text-sm">Your email has been sent to Proxima Digital. We will contact you soon.</p>
              <button onClick={() => setSubmitStatus('idle')} className="mt-6 w-full py-3 bg-[#7B2FBE] text-white rounded-full font-bold">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative pt-28 md:pt-32 pb-14 overflow-hidden bg-[#030305] text-white">
        <div className="absolute top-0 right-[-10%] w-[650px] h-[650px] bg-[#8b00ff]/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
            <span className="text-white"><TypeWriter text="Build a Predictable Pipeline With Our B2B Growth System" /></span>
          </h1>
          <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto">Let us discuss how we can build your complete acquisition infrastructure and generate consistent, qualified sales opportunities.</p>
        </div>
      </section>

      <section className="relative py-20 bg-[#F7F5FF] border-y border-[#E0D8F0] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[24px] p-8 md:p-10 bg-white border border-[#E0D8F0]">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1A0533]">Contact Proxima</h2>
                  <p className="text-[#5C4D72] text-sm leading-relaxed">Reach out to discuss your growth strategy. We typically respond within 24 hours.</p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Office', content: '30 N Gould St, Sheridan, WY 82801' },
                    { icon: Mail, label: 'Email', content: CONTACT_EMAIL },
                    { icon: Phone, label: 'Phone', content: companyInfo.phone },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[20px] bg-[#F7F5FF] border border-[#E0D8F0] p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F0E8FF] border border-[#C9B8E8] flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-[#7B2FBE]" />
                        </div>
                        <span className="text-xs font-bold text-[#7B2FBE] uppercase tracking-[0.15em]">{item.label}</span>
                      </div>
                      <p className="text-[#5C4D72] text-sm pl-[52px] leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] p-8 md:p-10 bg-white border border-[#E0D8F0]">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1A0533]">Send Us a Message</h2>
                <p className="text-[#5C4D72] text-sm leading-relaxed">Fill in the form below and we will get back to you shortly.</p>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <p className="text-sm font-bold text-red-800">Failed to send. Please try again.</p>
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormField id="name" label="Name" type="text" placeholder="Your name" register={register} error={errors.name} required />
                <FormField id="email" label="Email" type="email" placeholder="you@domain.com" register={register} error={errors.email} required />
                <FormField id="company" label="Company" type="text" placeholder="Company name" register={register} error={errors.company} required />
                <FormField id="message" label="Message" type="textarea" rows={5} placeholder="Tell us about your project..." register={register} error={errors.message} required />
                <button type="submit" disabled={isSubmitting || submitStatus === 'submitting'} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#7B2FBE] text-white rounded-full font-bold">
                  {submitStatus === 'submitting' ? <Loader2 className="animate-spin" /> : <Send size={18} />} Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
       {/* BOTTOM CTA CARDS (LIGHT) */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-[24px] p-8 md:p-10 bg-[#F7F5FF] border border-[#E0D8F0] hover:border-[#7B2FBE] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1A0533]">Let us plan your next launch.</h3>
              <p className="text-[#5C4D72] text-sm leading-relaxed">A fast response from our team means your idea moves from concept to execution with momentum.</p>
            </div>
            <div className="relative rounded-[24px] p-8 md:p-10 overflow-hidden border border-[#7B2FBE]/30" style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #5a0f8a 100%)' }}>
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-fuchsia-500/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Need a faster reply?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">For urgent requests, message us on LinkedIn or book a call directly.</p>
                <div className="flex flex-wrap gap-3">
                  <Button href="https://www.linkedin.com/company/proxima-digital-llc/" variant="light" size="sm" icon={<Linkedin className="w-4 h-4" />} iconPosition="left">LinkedIn</Button>
                  <Button href="https://calendly.com/sharjeel-qureshi/new-meeting" variant="secondary" size="sm" icon={<Calendar className="w-4 h-4" />} iconPosition="left" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">Schedule Call</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;