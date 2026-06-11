
import { FlaskConical, Info, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useCart } from '../../context/CartContext';

interface TopActionBarProps {
  onOpenMixology: () => void;
}

// Synthetic sound triggers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const playSound = (_type: 'tick' | 'sweep') => {
  // Sound is removed to keep it cleaner
};

export default function TopActionBar({ onOpenMixology }: TopActionBarProps) {
  const { t, lang, setLang } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const langs = ['DE', 'TR', 'EN', 'FR', 'RU', 'ES'] as const;

  const handleInfoClick = () => {
    playSound('tick');
    if (navigator.vibrate) navigator.vibrate([20, 10]);
    alert(`${t('infoTitle')}\n\n${t('infoBody')}`);
  };

  return (
    <div className="container-mobile pt-5 flex justify-end items-center z-30 relative gap-3">
      {/* Language Switcher */}
      <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] overflow-x-auto no-scrollbar max-w-[50vw]">
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => { setLang(l); if (navigator.vibrate) navigator.vibrate(10); }}
            className={`relative px-2 sm:px-3 py-1.5 rounded-full font-display text-[9px] sm:text-xs font-bold tracking-[0.1em] transition-all duration-300 shrink-0 ${
              lang === l 
                ? 'text-black bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_10px_rgba(197,165,90,0.5)] scale-105' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <button
        onClick={() => { onOpenMixology(); if (navigator.vibrate) navigator.vibrate(15); playSound('sweep'); }}
        className="w-9 h-9 rounded-full border border-gold-500/25 bg-[#1A1713]/80 backdrop-blur-md flex items-center justify-center hover:border-gold-500/50 text-gold-700 transition-colors shadow-sm relative group"
        aria-label="The Alchemist"
      >
        <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-pulse pointer-events-none" />
        <FlaskConical className="w-5 h-5 animate-neon-pulse-slow text-gold-400" />
      </button>

      <button
        onClick={handleInfoClick}
        className="w-9 h-9 rounded-full border border-gold-500/25 bg-[#1A1713]/80 backdrop-blur-md flex items-center justify-center hover:border-gold-500/50 text-gold-700 transition-colors shadow-sm"
        aria-label="Info"
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Cart Button */}
      <button
        onClick={() => { setIsCartOpen(true); if (navigator.vibrate) navigator.vibrate(15); }}
        className="w-9 h-9 rounded-full border border-gold-500/25 bg-[#1A1713]/80 backdrop-blur-md flex items-center justify-center hover:border-gold-500/50 text-gold-300 transition-colors shadow-sm relative group"
        aria-label="Open Cart"
      >
        <ShoppingBag className="w-4 h-4" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-gold-500 text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
