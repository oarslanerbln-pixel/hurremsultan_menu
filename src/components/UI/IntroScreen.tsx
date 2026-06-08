import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  isVisible: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ isVisible }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Phase 1: Golden drop starts falling
      setTimeout(() => setPhase(1), 200);
      // Phase 2: Drop hits the center, ripple starts
      setTimeout(() => setPhase(2), 1000);
      // Phase 3: Frosted glass melts away, revealing typography
      setTimeout(() => setPhase(3), 1600);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
        >
          {/* Deep elegant background glow behind everything */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,25,15,1)_0%,_rgba(10,10,10,1)_100%)]" />

          {/* Sharp Typography Layer (Hidden behind glass initially) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={phase >= 3 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-3xl sm:text-5xl md:text-6xl uppercase text-white text-center tracking-[0.25em] sm:tracking-[0.4em] indent-[0.25em] sm:indent-[0.4em]"
            >
              Hürrem Sultan
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={phase >= 3 ? { opacity: 0.7 } : {}}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="font-body font-light text-[10px] sm:text-xs uppercase text-gold-300 text-center tracking-[0.8em] indent-[0.8em] mt-6"
            >
              Premium Lounge
            </motion.h2>

            {/* Subtle inner shine over the text */}
            <motion.div
              initial={{ x: '-150%', opacity: 0, skewX: -20 }}
              animate={phase >= 3 ? { x: '150%', opacity: [0, 0.3, 0] } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay pointer-events-none"
            />
          </div>

          {/* Frosted Glass Layer */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={phase >= 3 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 backdrop-blur-[40px] bg-black/30 flex items-center justify-center pointer-events-none"
          >
            {/* The Golden Drop */}
            <motion.div
              initial={{ y: '-60vh', opacity: 0, scaleY: 2.5 }}
              animate={
                phase === 1 
                  ? { y: 0, opacity: 1, scaleY: 1 } 
                  : phase >= 2 
                    ? { opacity: 0, scale: 0 } 
                    : {}
              }
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="absolute w-[3px] h-[30px] rounded-full bg-gradient-to-b from-white via-gold-300 to-gold-600 shadow-[0_0_20px_rgba(218,165,32,1)]"
            />

            {/* The Ripple Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase >= 2 
                  ? { 
                      scale: [0, 3, 8], 
                      opacity: [0, 1, 0], 
                      borderWidth: ['8px', '2px', '0px'] 
                    } 
                  : {}
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-32 h-32 rounded-full border-gold-300 shadow-[0_0_30px_rgba(218,165,32,0.8)] mix-blend-screen"
            />
            
            {/* Secondary Ripple for depth */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase >= 2 
                  ? { 
                      scale: [0, 2, 6], 
                      opacity: [0, 0.6, 0], 
                      borderWidth: ['4px', '1px', '0px'] 
                    } 
                  : {}
              }
              transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
              className="absolute w-32 h-32 rounded-full border-white mix-blend-screen"
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
