import { useRef } from 'react';
import { MapPin, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useConcept } from '../../context/ConceptContext';

interface BrandHeaderProps {
  onSecretMenuOpen: () => void;
}

export default function BrandHeader({ onSecretMenuOpen }: BrandHeaderProps) {
  const { t } = useLanguage();
  const { concept } = useConcept();
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePressStart = () => {
    pressTimer.current = setTimeout(() => {
      onSecretMenuOpen();
      if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
    }, 1500); // 1.5 seconds hold to unlock
  };

  const handlePressEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <header className="text-center relative z-20 pt-10 pb-4">
      {/* Floating Silk Fabric Background Animation above the text */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[150%] h-48 pointer-events-none z-0 opacity-90 mix-blend-screen overflow-hidden">
        {/* Elegant Red Silk */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotateZ: [-5, 5, -5],
            scaleX: [1, 1.1, 1],
            skewX: [-2, 2, -2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-r from-transparent via-[#8B0000]/60 to-transparent blur-[25px] rounded-[100%]"
        />
        {/* White Silk overlay */}
        <motion.div
          animate={{
            y: [10, -20, 10],
            rotateZ: [3, -4, 3],
            scaleX: [1.1, 0.9, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[20px] rounded-[100%]"
        />
        {/* Dark Shadow Ribbon for depth */}
        <motion.div
          animate={{
            y: [5, -5, 5],
            x: [-15, 15, -15],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-gradient-to-r from-transparent via-black/80 to-transparent blur-[15px] rounded-[100%]"
        />
      </div>

      {concept === 'world-cup' && (
        <div className="absolute top-4 right-6 text-emerald-400 flex flex-col items-center animate-pulse drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] z-20">
          <Trophy className="w-6 h-6 mb-1" />
          <span className="text-[7px] font-display font-bold tracking-widest uppercase">VIP Cup</span>
        </div>
      )}
      <div className="container-mobile relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 15, filter: 'blur(15px)', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-0 relative select-none"
          onPointerDown={handlePressStart}
          onPointerUp={handlePressEnd}
          onPointerLeave={handlePressEnd}
          onContextMenu={(e) => e.preventDefault()} // Prevent context menu on mobile long press
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.95, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
            className="font-brand font-normal text-4xl sm:text-[3.5rem] leading-none uppercase text-gold drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
          >
            Hürrem
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -20, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-handwriting text-shimmer text-[4.5rem] sm:text-[6.5rem] leading-tight -mt-4 mr-4 transform drop-shadow-[0_10px_25px_rgba(0,0,0,1)]"
          >
            {t('brand_sultan')}
          </motion.span>
        </motion.h1>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6 mb-4 shadow-[0_0_15px_rgba(218,165,32,0.8)]" 
        />
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="flex items-center justify-center gap-1.5 font-body text-[9px] font-bold tracking-[0.3em] uppercase text-gold-700 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          <MapPin className="w-3 h-3 text-gold-500" />
          <span>{t('tagline')}</span>
        </motion.div>
      </div>
    </header>
  );
}
