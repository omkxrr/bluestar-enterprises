'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '@/lib/constants';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const message = encodeURIComponent('Hello, I am interested in your alloy products. Please share more details.');
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const bubbleTimer = setTimeout(() => setShowBubble(true), 4000);
      return () => clearTimeout(bubbleTimer);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Chat popup card */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="w-[calc(100vw-48px)] max-w-[300px] bg-white rounded-2xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className="bg-[#075E54] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaWhatsapp size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Bluestar Enterprises</p>
                    <p className="text-white/70 text-xs">Typically replies within minutes</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>
                {/* Chat body */}
                <div className="p-4 bg-[#ECE5DD] min-h-[100px]">
                  <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                    <p className="text-sm text-gray-800">
                      👋 Hello! How can we help you today? Ask us about our alloy products.
                    </p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">just now</p>
                  </div>
                </div>
                {/* Start chat button */}
                <div className="p-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl transition-colors"
                  >
                    <FiMessageCircle size={16} />
                    Start Chat
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Auto-show chat bubble */}
          <AnimatePresence>
            {showBubble && !expanded && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-gray-100 max-w-[200px] cursor-pointer"
                onClick={() => { setShowBubble(false); setExpanded(true); }}
              >
                <p className="text-sm text-gray-700 font-medium">Need help? Chat with us! 💬</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <button
            onClick={() => { setExpanded(!expanded); setShowBubble(false); }}
            className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 group"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/30 animate-pulse" />
            <FaWhatsapp size={30} className="text-white relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
