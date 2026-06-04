import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  isVisible: boolean;
}

const PARTICLES = [
  { y: 15, dur: 0.2, del: 0.1 },
  { y: 45, dur: 0.8, del: 0.5 },
  { y: 25, dur: 0.4, del: 0.8 },
  { y: 50, dur: 0.9, del: 0.2 },
  { y: 10, dur: 0.1, del: 0.6 },
  { y: 35, dur: 0.6, del: 0.3 }
];

const IntroScreen: React.FC<IntroScreenProps> = ({ isVisible }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // 1. Ring and ambient glow appear
      setTimeout(() => setPhase(1), 200);
      // 2. Logo text elegantly blurs in
      setTimeout(() => setPhase(2), 1200);
      // 3. Premium particle sweep
      setTimeout(() => setPhase(3), 2500);
      // 4. Exit starts
      setTimeout(() => setPhase(4), 4500);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#020101]"
        >
          {/* Deep Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: phase >= 1 ? 0.3 : 0, scale: phase >= 1 ? 1 : 0.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(218,165,32,0.15)_0%,_transparent_50%)] pointer-events-none mix-blend-screen"
          />

          <div className="relative flex flex-col items-center justify-center w-full max-w-lg px-8">
            
            {/* Elegant 3D Golden Ring */}
            <motion.div
              initial={{ rotateX: 70, rotateY: 10, scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { rotateX: 60, rotateY: 0, scale: 1, opacity: 0.8 } : {}}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[280px] h-[280px] rounded-full border border-gold-500/30 border-t-gold-400"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div
              initial={{ rotateX: -60, rotateZ: -45, scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { rotateX: -60, rotateZ: 0, scale: 1.1, opacity: 0.5 } : {}}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-gold-600/40"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Logo Text Container */}
            <div className="relative flex flex-col items-center justify-center z-10">
              {/* Premium Glow behind text */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: phase >= 2 ? 0.6 : 0, width: phase >= 2 ? '100%' : '0%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px] bg-gold-400/20 blur-xl rounded-full"
              />

              {/* Top Text: HÜRREM SULTAN */}
              <motion.h1
                initial={{ opacity: 0, y: 10, filter: 'blur(12px)', scale: 0.95 }}
                animate={{ 
                  opacity: phase >= 2 ? 1 : 0, 
                  y: phase >= 2 ? -15 : 10,
                  filter: phase >= 2 ? 'blur(0px)' : 'blur(12px)',
                  scale: phase >= 2 ? 1 : 0.95
                }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] uppercase bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 text-transparent bg-clip-text text-center drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]"
              >
                Hürrem Sultan
              </motion.h1>

              {/* Bottom Text: PREMIUM LOUNGE */}
              <motion.h2
                initial={{ opacity: 0, y: -10, letterSpacing: '0.2em' }}
                animate={{ 
                  opacity: phase >= 2 ? 0.8 : 0, 
                  y: phase >= 2 ? 15 : -10,
                  letterSpacing: phase >= 2 ? '0.6em' : '0.2em'
                }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                className="font-body font-light text-[10px] sm:text-[12px] uppercase text-white/90 text-center"
              >
                Premium Lounge
              </motion.h2>
            </div>

            {/* Sparkle Particles */}
            {phase >= 2 && (
              <div className="absolute inset-0 pointer-events-none">
                {PARTICLES.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, x: (i - 3) * 30, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -50 - p.y, scale: [0, 1, 0] }}
                    transition={{ duration: 2 + p.dur, delay: 0.5 + p.del, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] mix-blend-screen"
                  />
                ))}
              </div>
            )}

            {/* Cinematic Light Sweep / Flare */}
            <motion.div
              initial={{ x: '-200%', opacity: 0, skewX: 30 }}
              animate={phase >= 3 ? { x: '200%', opacity: [0, 0.8, 0] } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-md pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
