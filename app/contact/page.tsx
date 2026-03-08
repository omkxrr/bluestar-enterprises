'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiChevronDown, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY, FAQS } from '@/lib/constants';
import LogoSymbol from '@/components/LogoSymbol';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const contactCards = [
    { icon: <FiPhone size={22} />, title: 'Call Us', lines: COMPANY.phone, action: `tel:${COMPANY.phone[0]}` },
    { icon: <FiMail size={22} />, title: 'Email Us', lines: [COMPANY.email], action: `mailto:${COMPANY.email}` },
    { icon: <FaWhatsapp size={22} />, title: 'WhatsApp', lines: [COMPANY.phone[0]], action: `https://wa.me/${COMPANY.whatsapp}` },
    { icon: <FiClock size={22} />, title: 'Working Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'], action: null },
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <LogoSymbol size={300} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.06)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Get In Touch</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Contact Us</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-primary-200/80 mt-4 max-w-2xl mx-auto text-lg">
            Get in touch with our team for inquiries, quotations, or technical support.
          </motion.p>
        </div>
      </section>

      {/* Contact info cards */}
      <Section className="py-16 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c, i) => (
              <motion.div key={c.title} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 text-accent rounded-xl flex items-center justify-center mx-auto mb-4">{c.icon}</div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">{c.title}</h3>
                {c.lines.map((l, idx) => (
                  c.action ? (
                    <a key={`${c.title}-${idx}`} href={c.action} target={c.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block text-secondary-500 text-sm hover:text-accent transition-colors">{l}</a>
                  ) : (
                    <p key={`${c.title}-${idx}`} className="text-secondary-500 text-sm">{l}</p>
                  )
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Address & Contact Form */}
      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Addresses */}
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Our Locations</h2>
              {Object.values(COMPANY.address).map((addr) => (
                <div key={addr.title} className="mb-5 p-5 bg-surface rounded-2xl border border-gray-100 hover:border-primary/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiMapPin className="text-accent" size={16} />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{addr.title}</h3>
                      <p className="text-secondary-500 text-sm leading-relaxed">{addr.line1}<br />{addr.line2}<br />{addr.city}<br />{addr.state}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 mt-4 shadow-sm">
                <iframe
                  title="Bluestar Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7!2d73.86!3d18.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzM3LjQiTiA3M8KwNTEnMzcuMiJF!5e0!3m2!1sen!2sin!4v1&q=Chakan+MIDC+Pune"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} custom={1}>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const msg = encodeURIComponent(
                    `Name: ${fd.get('name')}\nCompany: ${fd.get('company')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\n\nMessage:\n${fd.get('message')}`
                  );
                  window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-600 mb-1.5">Full Name *</label>
                    <input id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-600 mb-1.5">Company</label>
                    <input id="company" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-600 mb-1.5">Email *</label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-600 mb-1.5">Phone</label>
                    <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="+91-XXXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-600 mb-1.5">Message *</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg shadow-accent/20 hover:-translate-y-0.5">
                  <FiSend size={16} /> Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="py-16 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-2xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</motion.h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface/50 transition-colors">
                  <span className="font-medium text-primary text-sm pr-4">{faq.q}</span>
                  <FiChevronDown className={`text-accent flex-shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <div className="px-6 pb-4">
                        <p className="text-secondary-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
