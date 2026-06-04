import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  isVisible: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ isVisible }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Phase 1: Line draws in
      setTimeout(() => setPhase(1), 400);
      // Phase 2: Text fades in
      setTimeout(() => setPhase(2), 1200);
      // Phase 3: Light sweep and exit
      setTimeout(() => setPhase(3), 2800);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050505]"
        >
          {/* Ambient subtle glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 0.4 : 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,165,90,0.15)_0%,_transparent_60%)] pointer-events-none"
          />

          <div className="relative flex flex-col items-center justify-center w-full max-w-sm px-8">
            
            {/* The elegant central line */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent absolute top-1/2 left-0 origin-center"
            />

            {/* Top Text (HÜRREM SULTAN) */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
              animate={{ 
                opacity: phase >= 2 ? 1 : 0, 
                y: phase >= 2 ? -25 : 15,
                filter: phase >= 2 ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute font-display font-light text-2xl sm:text-3xl tracking-[0.3em] uppercase text-gold-300 drop-shadow-[0_0_15px_rgba(197,165,90,0.4)] whitespace-nowrap"
            >
              Hürrem Sultan
            </motion.div>

            {/* Bottom Text (PREMIUM LOUNGE) */}
            <motion.div
              initial={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
              animate={{ 
                opacity: phase >= 2 ? 0.7 : 0, 
                y: phase >= 2 ? 25 : -15,
                filter: phase >= 2 ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="absolute font-body font-light text-[10px] sm:text-xs tracking-[0.5em] uppercase text-white/80 whitespace-nowrap"
            >
              Premium Lounge
            </motion.div>

            {/* Cinematic Light Sweep */}
            <motion.div
              initial={{ left: '-100%', opacity: 0 }}
              animate={phase >= 2 ? { left: '200%', opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-[50px] h-[150px] bg-white/20 skew-x-[30deg] blur-[20px] pointer-events-none"
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
