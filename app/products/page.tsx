'use client';

import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FiSearch, FiArrowRight, FiGrid, FiList, FiPhone, FiX } from 'react-icons/fi';
import { PRODUCTS, COMPANY } from '@/lib/constants';
import LogoSymbol from '@/components/LogoSymbol';
import LogoPatternBackground from '@/components/ui/LogoPatternBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    if (!search.trim()) return PRODUCTS;
    const q = search.toLowerCase();
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.grade.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <LogoPatternBackground count={5} opacity={0.02} light />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <LogoSymbol size={350} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.06)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent-200 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Products</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Premium Alloy Products</h1>
            <p className="text-primary-200/80 max-w-2xl text-lg">Browse our comprehensive range of nickel alloys, specialty metals, and high-performance alloy products.</p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <div className="sticky top-16 lg:top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <div className="relative w-full flex-1 max-w-md">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-300" size={17} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products by name, grade..."
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-300 hover:text-secondary-600">
                  <FiX size={16} />
                </button>
              )}
            </div>
            <div className="hidden sm:flex items-center gap-1 bg-surface rounded-xl p-1">
              <button onClick={() => setView('grid')} className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-secondary-400 hover:text-secondary-600'}`}>
                <FiGrid size={17} />
              </button>
              <button onClick={() => setView('list')} className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white text-primary shadow-sm' : 'text-secondary-400 hover:text-secondary-600'}`}>
                <FiList size={17} />
              </button>
            </div>
            <span className="hidden md:block text-sm text-secondary-400 font-medium">{filtered.length} products</span>
          </div>
        </div>
      </div>

      {/* Product Grid/List */}
      <Section className="py-16 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-secondary-400 text-lg mb-4">No products found matching &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch('')} className="text-primary font-semibold hover:text-accent transition-colors">Clear Search</button>
            </div>
          ) : view === 'grid' ? (
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p, i) => (
                <motion.div key={p.slug} variants={fadeUp} custom={i} className="min-w-0">
                  <Link href={`/products/${p.slug}`} className="group block min-w-0 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,43,90,0.12)]">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                      <span className="absolute bottom-3 left-4 right-4 text-[11px] text-white/80 font-medium line-clamp-1">{p.grade}</span>
                      {/* Quick action overlay */}
                      <div className="absolute inset-0 bg-primary/60 hidden sm:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-primary shadow-sm">View Details</span>
                        <span className="px-3 py-1.5 bg-[#25D366] rounded-lg text-xs font-semibold text-white shadow-sm">WhatsApp</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-primary text-lg mb-2 group-hover:text-accent transition-colors break-words">{p.name}</h3>
                      <p className="text-secondary-400 text-sm line-clamp-2 mb-3">{p.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                        View Details <FiArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={stagger} className="space-y-4">
              {filtered.map((p, i) => (
                <motion.div key={p.slug} variants={fadeUp} custom={i} className="min-w-0">
                  <Link href={`/products/${p.slug}`} className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 hover:border-primary/10">
                    <div className="relative w-full sm:w-48 h-40 sm:h-40 flex-shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="p-5 flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-primary text-lg group-hover:text-accent transition-colors break-words">{p.name}</h3>
                      <p className="text-accent text-sm font-medium mb-2 break-words">{p.grade}</p>
                      <p className="text-secondary-400 text-sm line-clamp-2">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.applications.slice(0, 3).map((a) => (
                          <span key={a} className="px-2.5 py-1 bg-surface text-xs text-secondary-500 rounded-lg font-medium">{a}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary mb-3">Can&apos;t Find What You Need?</h2>
          <p className="text-secondary-400 mb-6">Contact us for custom requirements and special alloy grades.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enquiry" className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5">
              Request Quote <FiArrowRight size={16} />
            </Link>
            <a href={`tel:${COMPANY.phone[0]}`} className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-400 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5">
              <FiPhone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
