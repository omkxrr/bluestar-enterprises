'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { COMPANY, WHY_CHOOSE_US, TIMELINE } from '@/lib/constants';
import {
  FiShield, FiAward, FiSettings, FiTrendingUp, FiLink, FiHeadphones,
} from 'react-icons/fi';
import LogoSymbol from '@/components/LogoSymbol';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

const whyIcons: Record<string, React.ReactNode> = {
  shield: <FiShield size={24} />, award: <FiAward size={24} />, settings: <FiSettings size={24} />,
  trending: <FiTrendingUp size={24} />, link: <FiLink size={24} />, headphones: <FiHeadphones size={24} />,
};

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <LogoSymbol size={350} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.06)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Story &amp; Vision</h1>
            <p className="text-primary-200/80 max-w-2xl text-lg">Learn about our journey of delivering premium specialty metals to industries worldwide since 2011.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <Section className="py-20 bg-white relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} custom={0}>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Who We Are</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">Bluestar Enterprises</h2>
              <div className="section-divider mb-6" />
              <p className="text-secondary-500 leading-relaxed mb-4 text-lg">{COMPANY.description}</p>
              <p className="text-secondary-400 leading-relaxed mb-6">
                From Hastelloy and Inconel to Titanium and Duplex steels, we supply a comprehensive range
                of high-performance alloys in pipes, tubes, plates, sheets, bars, fittings, flanges, and fasteners.
              </p>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-bold text-lg">SK</div>
                <div>
                  <p className="font-semibold text-primary">{COMPANY.founder}</p>
                  <p className="text-sm text-secondary-400">Founder &amp; Managing Director</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/overview_machinery.jpg" alt="Bluestar facility" width={600} height={400} className="w-full h-[400px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-20 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} custom={0} className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-[0.06] pointer-events-none">
                <LogoSymbol size={200} starColor="#fff" dotColor="#fff" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-100/90 leading-relaxed relative z-10">
                To be India&apos;s most reliable supplier of specialty metals and nickel alloys, delivering consistent
                quality, competitive pricing, and unmatched service to critical industries worldwide.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-secondary-500 leading-relaxed">
                To become a globally recognized name in specialty metal distribution, expanding our reach
                to serve industries across continents while maintaining our commitment to quality and trust.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Strengths</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">Why Choose Bluestar</h2>
            <div className="section-divider mx-auto" />
          </div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="p-6 rounded-2xl bg-surface border border-gray-100 card-hover hover:border-primary/10 group">
                <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-600 flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-4">
                  {whyIcons[item.icon] || <FiShield size={24} />}
                </div>
                <h3 className="font-heading font-semibold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-secondary-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-48 h-48 bg-primary/[0.03] rounded-full animate-morph pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-accent/[0.03] rounded-full animate-morph-delayed pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Journey</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">Year by Year Growth</h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-secondary-400 max-w-xl mx-auto">From humble beginnings to industry leadership — our story of continuous progress.</p>
          </div>

          {/* Vertical timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-gold md:-translate-x-px" />

            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              const milestoneIcons = ['🏢', '🌍', '🏆', '📈', '🚀'];
              return (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  custom={i}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    // On desktop, alternate sides
                    isLeft ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-white border-[3px] border-accent shadow-lg shadow-accent/20 z-10 top-6" />

                  {/* Connector line (desktop only) */}
                  <div className={`hidden md:block absolute top-[30px] w-8 h-0.5 bg-gradient-to-r ${
                    isLeft ? 'from-accent to-transparent right-1/2 mr-2' : 'from-transparent to-accent left-1/2 ml-2'
                  }`} />

                  {/* Content card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/[0.04] border border-gray-100 hover:shadow-xl hover:border-primary/10 transition-all duration-300 group relative overflow-hidden">
                      {/* Accent bar */}
                      <div className={`absolute top-0 ${isLeft ? 'md:right-0' : 'left-0'} left-0 w-1 md:w-1 h-full bg-gradient-to-b from-primary via-accent to-gold rounded-full`} />

                      <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        {/* Year badge */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex flex-col items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <span className="text-2xl leading-none">{milestoneIcons[i] || '⭐'}</span>
                          <span className="text-[11px] font-bold text-white/90 mt-0.5">{item.year}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-bold text-primary text-lg mb-1.5">{item.title}</h3>
                          <p className="text-secondary-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-200/80 mb-8 text-lg">Get in touch with our team for competitive pricing on specialty metals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enquiry" className="px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5">
              Request Quote <FiArrowRight />
            </Link>
            <a href={`tel:${COMPANY.phone[0]}`} className="px-7 py-3.5 bg-white/[0.08] text-white font-semibold rounded-xl border border-white/15 hover:bg-white/15 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5">
              <FiPhone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
