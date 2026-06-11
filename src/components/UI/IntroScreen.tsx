import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  isVisible: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ isVisible }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Phase 1: Golden drop starts falling (Faster)
      setTimeout(() => setPhase(1), 100);
      // Phase 2: Drop hits the center, ripple starts
      setTimeout(() => setPhase(2), 500);
      // Phase 3: Frosted glass melts away, revealing typography
      setTimeout(() => setPhase(3), 900);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050505] will-change-[opacity,transform]"
        >
          {/* Cinematic Video Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
              src="/intro_video.mp4" 
            />
            {/* Vignette & Dark mask for elegance and shadow around the edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,5,5,0.9)_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>

          {/* Sharp Typography Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
              animate={phase >= 1 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center will-change-[opacity,transform,filter] w-full px-4"
            >
              <h1 className="font-display font-light text-4xl leading-tight sm:text-6xl md:text-7xl uppercase text-white text-center tracking-[0.1em] sm:tracking-[0.3em] drop-shadow-[0_0_20px_rgba(218,165,32,0.6)] px-2">
                Hürrem Sultan
              </h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 15, letterSpacing: '0.1em' }}
                animate={phase >= 2 ? { opacity: 0.9, y: 0, letterSpacing: '0.4em' } : {}}
                transition={{ duration: 2.0, delay: 0.8, ease: "easeOut" }}
                className="font-body font-light text-[10px] sm:text-sm uppercase text-gold-300 text-center mt-4 sm:mt-6 px-4"
              >
                Premium Lounge
              </motion.h2>
            </motion.div>

            {/* Subtle inner shine over the text */}
            <motion.div
              initial={{ x: '-150%', opacity: 0, skewX: -20 }}
              animate={phase >= 2 ? { x: '150%', opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-gold-200 to-transparent mix-blend-overlay pointer-events-none"
            />
          </div>

          {/* Very light mask fade out */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={phase >= 1 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 bg-black pointer-events-none will-change-[opacity]"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;

