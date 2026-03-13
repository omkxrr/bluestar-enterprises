'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FiPackage, FiTruck, FiHome, FiClipboard, FiScissors, FiDroplet, FiArrowRight } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { GiHammerNails, GiFireBowl, GiSteelClaws } from 'react-icons/gi';
import { TbRulerMeasure, TbBuildingWarehouse } from 'react-icons/tb';
import { SERVICES } from '@/lib/constants';
import LogoSymbol from '@/components/LogoSymbol';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <HiOutlineSparkles size={26} />,
  clipboard: <FiClipboard size={26} />,
  package: <FiPackage size={26} />,
  truck: <FiTruck size={26} />,
  home: <FiHome size={26} />,
  ruler: <TbRulerMeasure size={26} />,
  hammer: <GiHammerNails size={26} />,
  flame: <GiFireBowl size={26} />,
  cylinder: <GiSteelClaws size={26} />,
  droplets: <FiDroplet size={26} />,
  scissors: <FiScissors size={26} />,
  warehouse: <TbBuildingWarehouse size={26} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <LogoSymbol size={350} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.06)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">What We Do</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-primary-200/80 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive value-added services to support your material requirements from procurement to delivery.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <Section className="py-16 lg:py-20 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <motion.div key={svc.title} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-400 group-hover:text-white transition-all duration-300">
                  {ICON_MAP[svc.icon] || <FiPackage size={26} />}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{svc.title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Process flow */}
      <Section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.02]" />
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/[0.03] rounded-full animate-morph pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-accent/[0.03] rounded-full animate-morph-delayed pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Process</span>
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">How We Work</motion.h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-secondary-400 max-w-xl mx-auto">A streamlined 4-step process designed for efficiency and reliability.</p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-accent to-gold" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: '01', title: 'Inquiry', desc: 'Share your material requirements with our team via phone, email, or WhatsApp.', icon: '📋', color: 'from-primary to-primary-600' },
                { step: '02', title: 'Consultation', desc: 'Our experts help select the right grade and form for your application.', icon: '🔬', color: 'from-primary-600 to-accent' },
                { step: '03', title: 'Processing', desc: 'Material sourcing, quality testing, and value-added processing as needed.', icon: '⚙️', color: 'from-accent to-accent-400' },
                { step: '04', title: 'Delivery', desc: 'Safe packaging and on-time delivery to your facility anywhere in India or globally.', icon: '🚀', color: 'from-accent-400 to-gold' },
              ].map((item, i) => (
                <motion.div key={item.step} variants={fadeUp} custom={i + 1} className="text-center relative group">
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] bg-gradient-to-br ${item.color} rounded-3xl rotate-45 flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                      <div className="-rotate-45 text-center">
                        <span className="text-[26px] sm:text-3xl block mb-0.5">{item.icon}</span>
                        <span className="text-white/80 text-[11px] font-bold tracking-wider">STEP</span>
                        <span className="text-white text-lg sm:text-xl font-heading font-bold block leading-none">{item.step}</span>
                      </div>
                    </div>
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] mx-auto bg-gradient-to-br ${item.color} rounded-3xl rotate-45 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                  </div>

                  <h3 className="font-heading font-bold text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-secondary-400 text-sm leading-relaxed max-w-[240px] mx-auto">{item.desc}</p>

                  {/* Arrow connector (mobile/tablet) */}
                  {i < 3 && (
                    <div className="hidden sm:block lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 text-accent text-xl">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-primary-200/80 mb-8 max-w-xl mx-auto">Contact us today for a customized quote and let us help you with your material needs.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/enquiry" className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg shadow-accent/20 inline-flex items-center gap-2 hover:-translate-y-0.5">
                Get a Quote <FiArrowRight size={16} />
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm hover:-translate-y-0.5">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
