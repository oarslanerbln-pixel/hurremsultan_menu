import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface BrandHeaderProps {
  onSecretMenuOpen: () => void;
}

export default function BrandHeader({ onSecretMenuOpen }: BrandHeaderProps) {
  const { t } = useLanguage();
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
    <header className="text-center relative z-20 pt-7 pb-4">
      <div className="container-mobile">
        <h1 
          className="flex flex-col items-center justify-center gap-0 relative select-none"
          onPointerDown={handlePressStart}
          onPointerUp={handlePressEnd}
          onPointerLeave={handlePressEnd}
          onContextMenu={(e) => e.preventDefault()} // Prevent context menu on mobile long press
        >
          <span className="font-brand font-normal text-4xl sm:text-[3.5rem] tracking-[0.3em] indent-[0.3em] leading-none uppercase text-gold">
            Hürrem
          </span>
          <span 
            className="font-handwriting text-shimmer text-[4.5rem] sm:text-[6rem] leading-tight -mt-4 mr-4 transform -rotate-2"
          >
            {t('brand_sultan')}
          </span>
        </h1>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5 mb-4" />
        <div className="flex items-center justify-center gap-1.5 font-body text-[9px] font-bold tracking-[0.3em] uppercase text-gold-700">
          <MapPin className="w-3 h-3 text-gold-500" />
          <span>{t('tagline')}</span>
        </div>
      </div>
    </header>
  );
}
