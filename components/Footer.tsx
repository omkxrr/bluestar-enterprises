'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiArrowUp, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/constants';
import LogoSymbol from './LogoSymbol';
import LogoPatternBackground from './ui/LogoPatternBackground';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Animated logo pattern background */}
      <LogoPatternBackground count={6} opacity={0.02} light />
      {/* Decorative logo watermark */}
      <div className="absolute -right-24 -top-24 opacity-[0.03] pointer-events-none">
        <LogoSymbol size={500} starColor="#ffffff" dotColor="#ffffff" />
      </div>
      <div className="absolute -left-16 -bottom-16 opacity-[0.02] pointer-events-none rotate-45">
        <LogoSymbol size={350} starColor="#ffffff" dotColor="#ffffff" />
      </div>

      {/* Newsletter / CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl font-bold mb-1">Need Specialty Metal Products?</h3>
              <p className="text-primary-200 text-sm">Contact us for competitive quotes and expert material guidance.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/enquiry" className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-400 transition-all">
                Get a Quote <FiArrowRight size={14} />
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <FaWhatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <Image src="/images/logo.png" alt="Bluestar Enterprises" width={40} height={40} className="w-10 h-10 transition-transform group-hover:scale-105" />
              <div>
                <span className="font-heading font-bold text-lg block leading-tight tracking-tight">BLUESTAR</span>
                <span className="text-[9px] text-primary-200 tracking-[0.2em] uppercase block">Enterprises</span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-5 max-w-xs">
              India&apos;s trusted supplier of premium nickel alloys, specialty metals &amp; high-performance alloy products for critical industrial applications since 2011.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-medium">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Social / Instagram */}
            <div className="mt-5">
              <a
                href="https://www.instagram.com/thebluestarenterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity group"
              >
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white/80">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group hover:translate-x-1 duration-200"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white/80">Our Products</h3>
            <ul className="space-y-2.5">
              {PRODUCTS.slice(0, 8).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-primary-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-200" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white/80">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phone[0]}`}
                className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors"
              >
                <FiPhone className="mt-0.5 flex-shrink-0 text-accent" size={15} />
                <div className="text-sm">
                  <p>{COMPANY.phone[0]}</p>
                  <p className="text-primary-300">{COMPANY.phone[1]}</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors"
              >
                <FiMail className="mt-0.5 flex-shrink-0 text-accent" size={15} />
                <span className="text-sm">{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-3 text-primary-200">
                <FiMapPin className="mt-0.5 flex-shrink-0 text-accent" size={15} />
                <p className="text-sm leading-relaxed">
                  {COMPANY.address.office.line1}<br />
                  {COMPANY.address.office.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-300 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-primary-300">
            <a href="https://www.instagram.com/thebluestarenterprises/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors flex items-center gap-1">
              <FaInstagram size={13} /> Instagram
            </a>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 p-2.5 bg-primary border border-primary-400 text-white rounded-xl shadow-xl hover:bg-accent transition-all hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}
