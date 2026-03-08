'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY, PRODUCTS } from '@/lib/constants';
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

export default function EnquiryPage() {
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
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Enquiry</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Request a Quote</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-primary-200/80 mt-4 max-w-2xl mx-auto text-lg">
            Fill in the form below and our team will get back to you with a competitive quote within 24 hours.
          </motion.p>
        </div>
      </section>

      <Section className="py-16 lg:py-20 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Enquiry Form */}
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-primary mb-6">Enquiry Form</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    const msg = encodeURIComponent(
                      `--- QUOTE REQUEST ---\nName: ${fd.get('name')}\nCompany: ${fd.get('company')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nProduct: ${fd.get('product')}\nQuantity: ${fd.get('quantity')}\n\nAdditional Details:\n${fd.get('message')}`
                    );
                    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eq-name" className="block text-sm font-medium text-secondary-600 mb-1.5">Full Name *</label>
                      <input id="eq-name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="eq-company" className="block text-sm font-medium text-secondary-600 mb-1.5">Company Name *</label>
                      <input id="eq-company" name="company" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eq-email" className="block text-sm font-medium text-secondary-600 mb-1.5">Email *</label>
                      <input id="eq-email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="eq-phone" className="block text-sm font-medium text-secondary-600 mb-1.5">Phone *</label>
                      <input id="eq-phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="+91-XXXXXXXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eq-product" className="block text-sm font-medium text-secondary-600 mb-1.5">Product Required *</label>
                      <select id="eq-product" name="product" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all bg-white">
                        <option value="">Select a product</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.slug} value={p.name}>{p.name} ({p.grade})</option>
                        ))}
                        <option value="Other">Other (specify in details)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eq-quantity" className="block text-sm font-medium text-secondary-600 mb-1.5">Quantity / Specs</label>
                      <input id="eq-quantity" name="quantity" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all" placeholder="e.g., 500 kg, Ø25mm x 3m" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="eq-message" className="block text-sm font-medium text-secondary-600 mb-1.5">Additional Details</label>
                    <textarea id="eq-message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all resize-none" placeholder="Specifications, grade, form, delivery timeline, etc." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg shadow-accent/20 hover:-translate-y-0.5">
                    <FiSend size={16} /> Submit via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-5">
                <h3 className="font-heading font-semibold text-primary mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href={`tel:${COMPANY.phone[0]}`} className="flex items-center gap-3 text-sm text-secondary-500 hover:text-accent transition-colors">
                    <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiPhone className="text-accent" size={14} /></span> {COMPANY.phone[0]}
                  </a>
                  <a href={`tel:${COMPANY.phone[1]}`} className="flex items-center gap-3 text-sm text-secondary-500 hover:text-accent transition-colors">
                    <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiPhone className="text-accent" size={14} /></span> {COMPANY.phone[1]}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-secondary-500 hover:text-accent transition-colors">
                    <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiMail className="text-accent" size={14} /></span> {COMPANY.email}
                  </a>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary-500 hover:text-[#25D366] transition-colors">
                    <span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaWhatsapp className="text-[#25D366]" size={14} /></span> WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-5">
                <h3 className="font-heading font-semibold text-primary mb-4">Office Address</h3>
                <div className="flex items-start gap-3 text-sm text-secondary-500">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><FiMapPin className="text-accent" size={14} /></span>
                  <span>{COMPANY.address.office.line1}, {COMPANY.address.office.line2}, {COMPANY.address.office.city}, {COMPANY.address.office.state}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-semibold text-primary mb-4">Working Hours</h3>
                <div className="flex items-center gap-3 text-sm text-secondary-500">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiClock className="text-accent" size={14} /></span>
                  <div>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
