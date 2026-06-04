import { motion, AnimatePresence } from 'framer-motion';
import { Box, X } from 'lucide-react';
import { useEffect } from 'react';

interface ARViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelUrl: string;
  iosModelUrl?: string;
  title: string;
}

export default function ARViewerModal({ isOpen, onClose, modelUrl, iosModelUrl, title }: ARViewerModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-[90%] h-[75%] max-w-md bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(197,165,90,0.2)] border border-gold-500/30 flex flex-col"
          >
            {/* Header */}
            <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-[#FAF8F5] to-transparent">
              <h3 className="font-display font-light text-lg tracking-widest uppercase text-gold-700">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center border border-gold-500/20 text-text-primary hover:bg-white/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Model Viewer */}
            <div className="flex-1 w-full h-full relative bg-gradient-to-b from-[#FAF8F5] to-[#E8E4DE]">
              {/* @ts-expect-error: Web component not typed */}
              <model-viewer
                src={modelUrl}
                ios-src={iosModelUrl}
                alt={`3D model of ${title}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                class="w-full h-full bg-transparent"
              >
                <div slot="poster" className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
                </div>
                
                {/* Custom AR Button */}
                <button 
                  slot="ar-button" 
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-700 text-white px-6 py-3 rounded-full font-display tracking-widest text-sm uppercase shadow-lg hover:scale-105 transition-transform"
                >
                  <Box className="w-5 h-5" />
                  Masanda Gör
                </button>
              {/* @ts-expect-error: Web component not typed */}
              </model-viewer>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
