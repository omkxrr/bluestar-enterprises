'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoSymbol from '@/components/LogoSymbol';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Rotating logo with pulsing dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <LogoSymbol size={80} />
            </motion.div>
            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-heading font-bold text-primary text-lg tracking-tight">
                BLUESTAR
              </p>
              <p className="text-[9px] text-accent tracking-[0.3em] font-bold uppercase">
                Enterprises
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
