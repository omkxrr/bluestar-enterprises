'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheck, FiMessageCircle, FiPhone, FiMail, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { PRODUCTS, COMPANY } from '@/lib/constants';
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

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  const allImages = product
    ? (product.gallery && product.gallery.length > 0 ? [product.image, ...product.gallery] : [product.image])
    : [];

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % (allImages.length || 1));
  }, [allImages.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + (allImages.length || 1)) % (allImages.length || 1));
  }, [allImages.length]);

  // Auto-play slideshow
  useEffect(() => {
    if (allImages.length <= 1) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [allImages.length, goNext]);

  if (!product) {
    return (
      <section className="py-32 text-center bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-secondary-400 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-400 transition-all hover:-translate-y-0.5">
            <FiArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 4);
  const whatsappMsg = encodeURIComponent(`Hello, I am interested in ${product.name} (${product.grade}). Please share pricing and availability.`);

  return (
    <>
      {/* Breadcrumb Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-8 bottom-4 pointer-events-none hidden lg:block">
          <LogoSymbol size={280} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.05)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-2 text-sm text-primary-200/80 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white font-medium">{product.name}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white break-words">{product.name}</h1>
            <p className="text-primary-200/80 mt-2 text-lg break-words">{product.grade}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <Section className="py-16 lg:py-20 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Product image gallery */}
            <motion.div variants={fadeUp} custom={0}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white relative group">
                {/* Main image with crossfade */}
                <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[450px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={allImages[activeIndex]}
                        alt={`${product.name} - Image ${activeIndex + 1}`}
                        width={700}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-70 lg:opacity-0 lg:group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <FiChevronLeft size={20} />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-70 lg:opacity-0 lg:group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <FiChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Slide counter */}
                  {allImages.length > 1 && (
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                      {activeIndex + 1} / {allImages.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail strip */}
              {allImages.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        idx === activeIndex
                          ? 'border-accent shadow-md ring-2 ring-accent/30'
                          : 'border-gray-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} width={80} height={80} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-6">
                <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-3">Available Forms</h3>
                <div className="flex flex-wrap gap-2">
                  {product.forms.map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-sm text-secondary-600 font-medium shadow-sm break-words max-w-full">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product info */}
            <motion.div variants={fadeUp} custom={1}>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-2 break-words">{product.name}</h2>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm font-semibold break-words max-w-full">{product.grade}</span>
              <p className="text-secondary-500 leading-relaxed mt-5 text-base lg:text-lg">{product.description}</p>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-primary text-lg mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 group">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                        <FiCheck className="text-accent" size={12} />
                      </span>
                      <span className="text-secondary-500 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-primary text-lg mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-xl text-sm text-primary font-medium break-words max-w-full">{app}</span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-500/20 hover:-translate-y-0.5">
                  <FaWhatsapp size={20} /> Inquire on WhatsApp
                </a>
                <Link href="/enquiry" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-semibold rounded-xl hover:from-primary-400 hover:to-primary transition-all shadow-lg shadow-primary/15 hover:-translate-y-0.5">
                  <FiMessageCircle size={18} /> Request Quote
                </Link>
                <a href={`tel:${COMPANY.phone[0]}`} className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-white text-secondary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 hover:-translate-y-0.5">
                  <FiPhone size={18} /> Call Us
                </a>
              </div>

              <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm text-secondary-400 mb-2">Need help choosing the right grade?</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${COMPANY.phone[0]}`} className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-1.5">
                    <FiPhone size={14} /> {COMPANY.phone[0]}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-1.5">
                    <FiMail size={14} /> {COMPANY.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Specifications */}
      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} custom={0}>
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">Product Specifications</h2>
            <div className="sm:hidden space-y-3">
              <div className="rounded-xl border border-gray-200 bg-surface p-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Product Name</p>
                <p className="text-sm text-secondary-600 break-words">{product.name}</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-surface p-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Grade / Standard</p>
                <p className="text-sm text-secondary-600 break-words">{product.grade}</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-surface p-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Available Forms</p>
                <p className="text-sm text-secondary-600 break-words">{product.forms.join(', ')}</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-surface p-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Applications</p>
                <p className="text-sm text-secondary-600 break-words">{product.applications.join(', ')}</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-surface p-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Key Features</p>
                <p className="text-sm text-secondary-600 break-words">{product.features.join(', ')}</p>
              </div>
            </div>

            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[640px] text-sm">
                <tbody>
                  <tr className="border-b border-gray-100"><td className="px-6 py-4 font-semibold text-primary bg-surface w-48">Product Name</td><td className="px-6 py-4 text-secondary-600 break-words">{product.name}</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-6 py-4 font-semibold text-primary bg-surface w-48">Grade / Standard</td><td className="px-6 py-4 text-secondary-600 break-words">{product.grade}</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-6 py-4 font-semibold text-primary bg-surface w-48">Available Forms</td><td className="px-6 py-4 text-secondary-600 break-words">{product.forms.join(', ')}</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-6 py-4 font-semibold text-primary bg-surface w-48">Applications</td><td className="px-6 py-4 text-secondary-600 break-words">{product.applications.join(', ')}</td></tr>
                  <tr><td className="px-6 py-4 font-semibold text-primary bg-surface w-48">Key Features</td><td className="px-6 py-4 text-secondary-600 break-words">{product.features.join(', ')}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Related Products */}
      <Section className="py-16 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary">Related Products</h2>
            <Link href="/products" className="text-accent font-semibold text-sm hover:text-accent-400 flex items-center gap-1 transition-colors">View All <FiArrowRight size={14} /></Link>
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p, i) => (
              <motion.div key={p.slug} variants={fadeUp} custom={i} className="min-w-0">
                <Link href={`/products/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 hover:border-primary/10">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  </div>
                  <div className="p-4 min-w-0">
                    <h3 className="font-heading font-semibold text-primary text-base group-hover:text-accent transition-colors break-words">{p.name}</h3>
                    <span className="block text-xs text-secondary-400 break-words">{p.grade}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Back link */}
      <div className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm">
            <FiArrowLeft size={16} /> Back to All Products
          </Link>
        </div>
      </div>
    </>
  );
}
