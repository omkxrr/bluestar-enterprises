'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FiDroplet, FiZap, FiSettings, FiAnchor, FiArrowRight } from 'react-icons/fi';
import { GiChemicalDrop, GiFactory, GiMedicines } from 'react-icons/gi';
import { IoAirplaneOutline } from 'react-icons/io5';
import { INDUSTRIES, PRODUCTS } from '@/lib/constants';
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

const ICON_MAP: Record<string, React.ReactNode> = {
  droplets: <FiDroplet size={28} />,
  flask: <GiChemicalDrop size={28} />,
  anchor: <FiAnchor size={28} />,
  zap: <FiZap size={28} />,
  factory: <GiFactory size={28} />,
  fuel: <FiSettings size={28} />,
  plane: <IoAirplaneOutline size={28} />,
  pill: <GiMedicines size={28} />,
};

function getRecommendedProducts(industryName: string) {
  return PRODUCTS.filter((p) =>
    p.applications.some((a) => a.toLowerCase().includes(industryName.toLowerCase().split(' ')[0]))
  ).slice(0, 3);
}

export default function IndustriesPage() {
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
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Sectors</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Industries We Serve</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-primary-200/80 mt-4 max-w-2xl mx-auto text-lg">
            Premium nickel alloys and specialty metals for the most demanding industrial applications.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <Section className="py-16 lg:py-20 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const recommended = getRecommendedProducts(ind.name);
              return (
                <motion.div key={ind.name} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 card-hover group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-accent/5 text-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-400 group-hover:text-white transition-all duration-300">
                      {ICON_MAP[ind.icon] || <FiSettings size={28} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-primary mb-2">{ind.name}</h3>
                      <p className="text-secondary-500 text-sm leading-relaxed mb-4">{ind.description}</p>
                      {recommended.length > 0 && (
                        <div>
                          <p className="text-xs text-secondary-400 font-semibold uppercase tracking-wide mb-2">Recommended Products</p>
                          <div className="flex flex-wrap gap-2">
                            {recommended.map((p) => (
                              <Link key={p.slug} href={`/products/${p.slug}`} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-xl text-xs text-primary font-medium hover:bg-accent hover:text-white hover:border-accent transition-all">
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">Need Materials for Your Industry?</h2>
            <p className="text-primary-200/80 mb-8 max-w-xl mx-auto">Our metallurgical experts can help you select the right material for your specific application.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/enquiry" className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg shadow-accent/20 inline-flex items-center gap-2 hover:-translate-y-0.5">
                Request a Quote <FiArrowRight size={16} />
              </Link>
              <Link href="/products" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm hover:-translate-y-0.5">Browse Products</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
