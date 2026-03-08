'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Animated gradient top strip */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-gold animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />

      {/* Top info bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-800 to-primary-700 text-white/90">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-6 text-xs">
            <a href={`tel:${COMPANY.phone[0]}`} className="flex items-center gap-1.5 hover:text-accent-100 transition-colors">
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center"><FiPhone size={10} /></span> {COMPANY.phone[0]}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-accent-100 transition-colors">
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center"><FiMail size={10} /></span> {COMPANY.email}
            </a>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#25D366] hover:text-[#2FE672] transition-colors font-medium">
              <FaWhatsapp size={13} /> WhatsApp Us
            </a>
            <a href="https://www.instagram.com/thebluestarenterprises/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#E1306C] hover:text-[#F77737] transition-colors font-medium">
              <FaInstagram size={13} /> Instagram
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <p className="text-white/60 text-[11px] tracking-wide font-medium">Premium Nickel Alloy & Specialty Metals Supplier Since 2011</p>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(28,43,90,0.1)] border-b border-primary-50/50'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Bluestar Enterprises"
                  width={48}
                  height={48}
                  className="w-11 h-11 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-primary/5 scale-125 group-hover:scale-150 group-hover:bg-accent/10 transition-all duration-500" />
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-extrabold text-primary text-lg leading-tight block tracking-tight">
                  BLUESTAR
                </span>
                <span className="text-[9px] text-accent tracking-[0.3em] font-bold uppercase block">
                  Enterprises
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-semibold transition-colors group ${
                      isActive ? 'text-accent' : 'text-secondary-600 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-4/5 bg-gradient-to-r from-accent to-accent-400'
                        : 'w-0 bg-gradient-to-r from-primary to-accent group-hover:w-4/5'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/enquiry"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-400 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Get Quote
                <FiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-secondary-600 hover:text-primary transition-colors rounded-xl hover:bg-primary-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                  <Image src="/images/logo.png" alt="Bluestar" width={36} height={36} className="w-9 h-9" />
                  <div>
                    <span className="font-heading font-extrabold text-primary text-base block leading-tight">BLUESTAR</span>
                    <span className="text-[8px] text-accent tracking-[0.25em] font-bold uppercase">Enterprises</span>
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 text-secondary-400 hover:text-primary rounded-xl hover:bg-gray-50">
                  <FiX size={22} />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex-1 overflow-y-auto py-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-6 py-3.5 font-medium border-b border-gray-50 transition-colors ${
                          isActive
                            ? 'text-accent bg-accent/5 border-l-4 border-l-accent'
                            : 'text-secondary-700 hover:bg-primary-50 hover:text-primary'
                        }`}
                      >
                        {link.label}
                        <FiChevronRight size={16} className={isActive ? 'text-accent' : 'text-secondary-300'} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile footer */}
              <div className="p-5 border-t border-gray-100 bg-surface space-y-3">
                <Link
                  href="/enquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent to-accent-400 text-white font-bold rounded-xl transition-colors"
                >
                  Request a Quote <FiArrowRight size={16} />
                </Link>
                <div className="flex items-center justify-center gap-4 text-sm text-secondary-500">
                  <a href={`tel:${COMPANY.phone[0]}`} className="flex items-center gap-1.5 hover:text-primary">
                    <FiPhone size={14} /> Call
                  </a>
                  <span className="text-gray-200">|</span>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366]">
                    <FaWhatsapp size={14} /> WhatsApp
                  </a>
                  <span className="text-gray-200">|</span>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-primary">
                    <FiMail size={14} /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
