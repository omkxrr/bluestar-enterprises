'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView as useInViewObs } from 'react-intersection-observer';
import {
  FiArrowRight,
  FiShield,
  FiAward,
  FiSettings,
  FiTrendingUp,
  FiLink,
  FiHeadphones,
  FiCheckCircle,
  FiPhone,
  FiStar,
  FiPlay,
} from 'react-icons/fi';
import {
  FaOilCan,
  FaFlask,
  FaAnchor,
  FaBolt,
  FaIndustry,
  FaGasPump,
  FaPlane,
  FaCapsules,
  FaQuoteLeft,
  FaWhatsapp,
  FaStar,
} from 'react-icons/fa';
import { COMPANY, PRODUCTS, STATS, WHY_CHOOSE_US, INDUSTRIES, TESTIMONIALS } from '@/lib/constants';
import LogoSymbol from '@/components/LogoSymbol';
import MagneticButton from '@/components/ui/MagneticButton';
import LogoPatternBackground from '@/components/ui/LogoPatternBackground';

// ─── Animation variants ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Section Heading ─────────────────────────────────────────────────
function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${light ? 'text-accent-200' : 'text-accent'}`}>
        {subtitle}
      </span>
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`section-divider ${center ? 'mx-auto' : ''} mb-5`} />
      {description && (
        <p className={`max-w-2xl text-base lg:text-lg leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-primary-200' : 'text-secondary-400'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// ─── Animated Section Wrapper ─────────────────────────────────────────
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Icon mapper ─────────────────────────────────────────────────────
const whyIcons: Record<string, React.ReactNode> = {
  shield: <FiShield size={26} />,
  award: <FiAward size={26} />,
  settings: <FiSettings size={26} />,
  trending: <FiTrendingUp size={26} />,
  link: <FiLink size={26} />,
  headphones: <FiHeadphones size={26} />,
};

const industryIcons: Record<string, React.ReactNode> = {
  droplets: <FaOilCan size={26} />,
  flask: <FaFlask size={26} />,
  anchor: <FaAnchor size={26} />,
  zap: <FaBolt size={26} />,
  factory: <FaIndustry size={26} />,
  fuel: <FaGasPump size={26} />,
  plane: <FaPlane size={26} />,
  pill: <FaCapsules size={26} />,
};

// ═══════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax with motion values (no React re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 50, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Derived transforms for each parallax layer
  const logoWatermarkX = useTransform(springX, (v) => v * 12);
  const logoWatermarkY = useTransform(springY, (v) => v * 12);
  const floatingLogoX = useTransform(springX, (v) => v * -6);

  // Mouse parallax handler (only sets motion values, no state)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[94vh] flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Background with scroll parallax */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: heroY }}
        >
          <Image
            src="/images/hero_industrial_hall.jpg"
            alt="Industrial facility"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary/80" />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Animated floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-particle absolute rounded-full bg-white/[0.06]"
              style={{
                width: `${8 + i * 6}px`,
                height: `${8 + i * 6}px`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${12 + i * 3}s`,
              }}
            />
          ))}
        </div>

        {/* 3D Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block perspective-1000">
          {/* Floating cube wireframe */}
          <div className="absolute top-[15%] right-[12%] w-20 h-20 border border-white/[0.08] rotate-45 animate-tilt-float" />
          <div className="absolute top-[20%] right-[14%] w-14 h-14 border border-accent/[0.12] rotate-12 animate-tilt-float" style={{ animationDelay: '1s' }} />
          {/* Floating ring */}
          <div className="absolute bottom-[25%] right-[20%] w-28 h-28 border-2 border-white/[0.05] rounded-full animate-orbit" />
          {/* Small dots */}
          <div className="absolute top-[40%] right-[8%] w-3 h-3 bg-accent/30 rounded-full animate-float-slow" />
          <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-white/20 rounded-full animate-float-delayed" />
          <div className="absolute top-[30%] left-[5%] w-2 h-2 bg-accent/20 rounded-full animate-pulse" />
        </div>

        {/* Morphing blob background */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/[0.06] animate-morph blur-2xl pointer-events-none hidden sm:block" />
        <div className="absolute bottom-32 left-[5%] w-56 h-56 bg-primary-300/[0.08] animate-morph-delayed blur-2xl pointer-events-none hidden sm:block" />

        {/* Decorative logo watermark - Layer 2 (mouse parallax) */}
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block will-change-transform"
          style={{
            x: logoWatermarkX,
            y: logoWatermarkY,
          }}
        >
          <motion.div
            animate={{ rotate: 360, y: [-10, 10, -10], scale: [1, 1.03, 1] }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <LogoSymbol size={450} starColor="rgba(255,255,255,0.06)" dotColor="rgba(139,35,50,0.1)" />
          </motion.div>
        </motion.div>

        {/* Floating animated logo - left side */}
        <motion.div
          className="absolute left-[8%] bottom-[20%] pointer-events-none hidden xl:block will-change-transform"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -360],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
          style={{ opacity: 0.08, x: floatingLogoX }}
        >
          <LogoSymbol size={180} starColor="rgba(255,255,255,0.8)" dotColor="rgba(139,35,50,0.6)" />
        </motion.div>

        {/* Logo pattern background in hero */}
        <LogoPatternBackground count={6} opacity={0.025} light />

        {/* Content */}
        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ opacity: heroOpacity }}>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] backdrop-blur-md rounded-full text-white/80 text-xs font-semibold tracking-wide mb-7 border border-white/10">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Trusted Supplier Since 2011
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.08] mb-3 text-shadow-hero"
            >
              Premium{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-100 to-accent-200">
                  Nickel Alloys
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/0 rounded-full" />
              </span>
              <br />
              &amp; Specialty Metals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-accent-200/90 text-sm sm:text-base font-semibold tracking-wide mb-6"
            >
              Reliable Industrial Components &amp; Supply Partner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-primary-100/90 leading-relaxed max-w-2xl mb-10 font-medium"
            >
              India&apos;s premier supplier of Hastelloy, Inconel, Monel, Titanium &amp; high-performance alloy products
              for Oil &amp; Gas, Chemical, Marine, Aerospace and Power industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticButton strength={4}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-400 transition-all shadow-xl shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  View Products <FiArrowRight />
                </Link>
              </MagneticButton>
              <MagneticButton strength={4}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.08] backdrop-blur-md text-white font-bold rounded-xl border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-0.5"
                >
                  Contact Us <FiPhone size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton strength={4}>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/90 backdrop-blur-md text-white font-bold rounded-xl hover:bg-[#25D366] transition-all hover:-translate-y-0.5"
                >
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </MagneticButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex items-center gap-6 sm:gap-8 flex-wrap"
            >
              {['ISO 9001:2015', 'Mill Test Certified', 'Global Export'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-primary-200/70 text-xs font-medium">
                  <FiCheckCircle className="text-accent-300" size={14} />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── COMPANY INTRODUCTION ──────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-white relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div variants={fadeUp} custom={0}>
              <SectionHeading
                subtitle="About Us"
                title="Decades of Excellence in Specialty Metals"
                center={false}
              />
              <p className="text-secondary-500 leading-relaxed mb-6 text-base lg:text-lg">
                {COMPANY.description}
              </p>
              <p className="text-secondary-400 leading-relaxed mb-8">
                From Hastelloy and Inconel to Titanium and Duplex steels, we supply a comprehensive
                range of high-performance alloys in pipes, tubes, plates, sheets, bars, fittings,
                flanges, and fasteners — meeting the most demanding industrial specifications.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'Founded', value: '2011' },
                  { label: 'Alloy Grades', value: '50+' },
                  { label: 'Clients Served', value: '500+' },
                  { label: 'Industries', value: '8+' },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-surface rounded-2xl border border-gray-100 hover:border-primary/10 transition-colors">
                    <span className="text-2xl font-bold gradient-text font-heading">{item.value}</span>
                    <p className="text-xs text-secondary-400 mt-0.5 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn More About Us <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Image grid */}
            <motion.div variants={fadeUp} custom={2} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/overview_machinery.jpg"
                      alt="Industrial machinery"
                      width={300}
                      height={400}
                      className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/mosaic_components_large.jpg"
                      alt="Alloy components"
                      width={300}
                      height={260}
                      className="w-full h-36 lg:h-44 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/mosaic_pipes_large.jpg"
                      alt="Metal pipes"
                      width={300}
                      height={260}
                      className="w-full h-36 lg:h-44 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/industry_pipes_context.jpg"
                      alt="Industry pipes"
                      width={300}
                      height={400}
                      className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-primary to-primary-600 text-white rounded-2xl p-5 shadow-2xl shadow-primary/25 hidden lg:flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <FiAward size={22} className="text-accent-200" />
                </div>
                <div>
                  <span className="text-2xl font-bold font-heading">13+</span>
                  <p className="text-xs text-primary-200">Years of Trust</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── STATS COUNTER ─────────────────────────────────────────────── */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        {/* Logo watermark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-star-pulse pointer-events-none">
          <LogoSymbol size={300} starColor="rgba(255,255,255,0.03)" dotColor="rgba(139,35,50,0.06)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((stat, i) => (
              <StatsCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ─────────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-surface relative">
        <div className="absolute inset-0 dot-pattern" />
        <LogoPatternBackground count={5} opacity={0.02} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Products"
            title="Premium Alloy Product Range"
            description="We supply a comprehensive range of nickel alloys & specialty metals in diverse forms — pipes, tubes, plates, sheets, round bars, fittings, flanges, and fasteners."
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {PRODUCTS.map((product, i) => (
              <motion.div key={product.slug} variants={fadeUp} custom={i}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,43,90,0.12)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] text-white/80 font-medium">{product.grade}</span>
                    </div>
                    {/* Quick action overlay on hover */}
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-primary shadow-sm">
                        View Details
                      </span>
                      <span className="px-3 py-1.5 bg-[#25D366] rounded-lg text-xs font-semibold text-white shadow-sm">
                        WhatsApp
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-secondary-400 text-sm line-clamp-2 mb-3">{product.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                      View Details <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none hidden lg:block">
          <LogoSymbol size={600} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Bluestar"
            title="Why Leading Industries Trust Us"
            description="Combining deep metallurgical expertise with customer-focused service to deliver consistent quality across every order."
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group p-7 rounded-2xl bg-surface border border-gray-100 hover:bg-white card-hover hover:border-primary/10"
              >
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-primary/5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-600 flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-5">
                  {whyIcons[item.icon] || <FiShield size={26} />}
                </div>
                <h3 className="font-heading font-semibold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-secondary-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── INDUSTRIES SERVED ─────────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />
        <LogoPatternBackground count={6} opacity={0.02} light />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Industries"
            title="Serving Critical Industries"
            description="Our alloy products are trusted in the world's most demanding industrial environments."
            light
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                custom={i}
                className="group p-5 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.1] hover:border-accent/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent-200 mx-auto mb-3 group-hover:scale-110 group-hover:bg-accent/25 transition-all duration-300">
                  {industryIcons[ind.icon] || <FaIndustry size={26} />}
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{ind.name}</h3>
                <p className="text-primary-200/70 text-xs leading-relaxed">{ind.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Explore Industries <FiArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        {/* Decorative floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/[0.03] rounded-full animate-morph pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/[0.03] rounded-full animate-morph-delayed pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Trusted by leading companies across India for consistent quality and reliable service."
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className={`relative bg-white rounded-3xl p-8 card-hover border border-gray-100 ${
                  i === 1 ? 'md:-translate-y-4' : ''
                }`}
              >
                {/* Accent top bar */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-accent to-gold rounded-b-full" />

                {/* Large quote mark */}
                <div className="absolute -top-4 right-6 w-10 h-10 bg-gradient-to-br from-accent to-accent-400 rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                  <FaQuoteLeft className="text-white" size={16} />
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5 mb-5 mt-2">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} className="text-amber-400" size={14} />
                  ))}
                </div>

                <p className="text-secondary-600 leading-relaxed mb-6 text-[15px] italic">&ldquo;{t.text}&rdquo;</p>

                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-bold text-base ring-2 ring-primary/10 ring-offset-2">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-secondary-400 text-xs font-medium">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── FEATURED VIDEO ────────────────────────────────────────────── */}
      <AnimatedSection className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Featured On"
            title="Bluestar Enterprises on IndiaMART"
            description="Watch our feature video showcasing our manufacturing capabilities, product range, and commitment to quality."
          />

          <motion.div variants={fadeUp} custom={0} className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Video container with decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/10 to-gold/10 rounded-[28px] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-200">
                <div className="relative pt-[56.25%] bg-primary-900">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/l2gpC7X0qj4"
                    title="Bluestar Enterprises - Featured on IndiaMART"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Video info badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { icon: <FiAward size={16} />, text: 'IndiaMART Verified Supplier' },
                { icon: <FiShield size={16} />, text: 'TrustSEAL Certified' },
                { icon: <FiStar size={16} />, text: '4.8★ Buyer Rating' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-gray-100 text-sm text-secondary-600 font-medium">
                  <span className="text-accent">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/quote_metal_texture.jpg"
            alt="Metal texture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary/85" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        {/* Logo watermark */}
        <motion.div
          className="absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
          animate={{ rotate: 360, y: [-8, 8, -8] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <LogoSymbol size={300} starColor="rgba(255,255,255,0.04)" dotColor="rgba(139,35,50,0.06)" />
        </motion.div>
        <LogoPatternBackground count={4} opacity={0.02} light />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-accent-200">Get Started</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need High-Performance Alloy Products?
            </h2>
            <p className="text-primary-100/80 text-lg mb-10 max-w-2xl mx-auto">
              Get competitive quotes on Hastelloy, Inconel, Monel, Titanium &amp; specialty metals.
              Our experts are ready to help you find the right material for your application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton strength={5}>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-400 transition-all shadow-xl shadow-accent/25 text-lg hover:-translate-y-0.5"
                >
                  Request a Quote <FiArrowRight />
                </Link>
              </MagneticButton>
              <MagneticButton strength={5}>
                <a
                  href={`tel:${COMPANY.phone[0]}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.08] backdrop-blur-md text-white font-semibold rounded-xl border border-white/15 hover:bg-white/15 transition-all text-lg hover:-translate-y-0.5"
                >
                  <FiPhone /> Call Us Now
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ─── Stats Card Sub-Component ────────────────────────────────────────
function StatsCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInViewObs({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => { setMounted(true); }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center relative"
    >
      <div className="text-4xl sm:text-5xl font-bold text-white font-heading mb-1">
        {mounted && inView ? (
          <CountUp end={stat.value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        <span className="text-accent-300">{stat.suffix}</span>
      </div>
      <p className="text-primary-200/70 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
}
