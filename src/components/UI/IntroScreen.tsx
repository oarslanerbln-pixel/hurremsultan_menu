import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  isVisible: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ isVisible }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setPhase(1), 200);   // Typography reveal
      setTimeout(() => setPhase(2), 900);   // Subtitle + divider
      setTimeout(() => setPhase(3), 1800);  // Tagline
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden will-change-[opacity,transform]"
          style={{ background: 'radial-gradient(ellipse at 50% 45%, hsl(43, 20%, 7%) 0%, hsl(0, 0%, 3%) 70%)' }}
        >
          {/* Cinematic Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
              src="/intro_video.mp4"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,2,1,0.92)_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          </div>

          {/* Animated Silk Wave — Fine Dining Sweep */}
          <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[200%] h-28 animate-silk-wave"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(197,165,90,0.06) 40%, rgba(197,165,90,0.14) 50%, rgba(197,165,90,0.06) 60%, transparent 100%)',
                filter: 'blur(20px)',
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[200%] h-40 animate-silk-wave"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 60%, transparent 100%)',
                filter: 'blur(30px)',
                animationDelay: '1.5s',
                animationDuration: '7s',
              }}
            />
          </div>

          {/* Typography Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">

            {/* Main Brand Mark */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(16px)' }}
              animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="will-change-[opacity,transform,filter]"
            >
              {/* Script wordmark */}
              <h1
                className="font-brand font-normal leading-none select-none"
                style={{
                  fontSize: 'clamp(3.5rem, 14vw, 6rem)',
                  background: 'linear-gradient(135deg, hsl(43,55%,48%) 0%, hsl(43,75%,72%) 45%, hsl(43,50%,52%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(197,165,90,0.3))',
                  letterSpacing: '0.02em',
                }}
              >
                Hürrem
              </h1>
            </motion.div>

            {/* SULTAN — spaced caps */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={phase >= 1 ? { opacity: 1, letterSpacing: '0.55em' } : {}}
              transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
              className="font-display font-light text-white/85 select-none will-change-[opacity]"
              style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', marginTop: '-0.1rem' }}
            >
              SULTAN
            </motion.div>

            {/* Hairline divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
              className="h-px w-20 my-5 origin-center will-change-transform"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(197,165,90,0.7), transparent)' }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 2 ? { opacity: 0.85, y: 0 } : {}}
              transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
              className="font-body font-light uppercase tracking-[0.38em] text-gold-400/80 will-change-[opacity,transform]"
              style={{ fontSize: 'clamp(0.55rem, 2vw, 0.7rem)' }}
            >
              Premium Lounge Experience
            </motion.p>

            {/* Location tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={phase >= 3 ? { opacity: 0.5, y: 0 } : {}}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="font-editorial text-white/50 mt-3 select-none will-change-[opacity]"
              style={{ fontSize: 'clamp(0.65rem, 2.2vw, 0.8rem)', fontStyle: 'italic', letterSpacing: '0.15em' }}
            >
              ◆ Berlin · Est. 2019 ◆
            </motion.p>
          </div>

          {/* Shine sweep over text */}
          <motion.div
            initial={{ x: '-150%', opacity: 0, skewX: -20 }}
            animate={phase >= 2 ? { x: '150%', opacity: [0, 0.45, 0] } : {}}
            transition={{ duration: 2.8, delay: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/2 h-full pointer-events-none z-20"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(197,165,90,0.08), rgba(255,255,255,0.04), transparent)' }}
          />

          {/* Black mask fade-in → fade-out */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={phase >= 1 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 bg-black pointer-events-none will-change-[opacity]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
