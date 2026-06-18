import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useMenu } from '../../context/MenuContext';
import type { TranslationKey } from '../../i18n/translations';

import SearchBar from '../UI/SearchBar';
import { categoriesList } from '../../data/categories';

interface FilterBarProps {
  isCompact: boolean;
}

// Synthetic sound triggers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const playSound = (_type: 'tick' | 'sweep') => {};

export default function FilterBar({ isCompact }: FilterBarProps) {
  const { t, lang } = useLanguage();
  const {
    activeCategory,
    activeSubcategory,
    setSubcategory,
    subcategories,
  } = useMenu();
  const chipsScrollRef = useRef<HTMLDivElement>(null);

  const handleSubcategoryClick = (sub: string) => {
    setSubcategory(sub);
    playSound('tick');
    if (navigator.vibrate) navigator.vibrate([30, 20]); // Stronger haptic vibration
  };

  return (
    <div className={`sticky top-0 z-30 pt-3 pb-2 transition-all duration-500 ${isCompact ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="container-mobile flex flex-col gap-2.5">
        {/* Compact brand on scroll */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence>
            {isCompact && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-1 w-full flex items-center justify-between px-4 pb-1"
              >
                <span className="font-brand text-sm tracking-[0.25em] uppercase text-gold font-normal drop-shadow-[0_0_8px_rgba(197,165,90,0.5)]">
                  Hürrem
                </span>
                <span className="font-body text-[8px] tracking-widest uppercase text-text-tertiary">
                  {t(categoriesList.find((c: { key: string, labelKey: string }) => c.key === activeCategory)?.labelKey || 'catShisha')}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search bar */}
        <div className="px-4">
          <SearchBar />
        </div>

        {/* Subcategory tabs — with pill background on active */}
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth -webkit-overflow-scrolling-touch py-2">
          <div ref={chipsScrollRef} className="flex gap-5 px-4">
            {subcategories.map(sub => (
              <button
                key={sub}
                onClick={() => handleSubcategoryClick(sub)}
                className={`py-2 px-4 rounded-full relative font-display text-[12px] sm:text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeSubcategory === sub
                    ? 'text-gold-800'
                    : 'text-text-tertiary hover:text-gold-600'
                }`}
              >
                {sub === 'All' ? t('subAll') : (t(sub as TranslationKey) || sub)}
                {activeSubcategory === sub && (
                  <>
                    {/* Premium Glow Active Background */}
                    <motion.div
                      layoutId={`active-sub-bg-${lang}`}
                      className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/40 rounded-full shadow-[0_0_15px_rgba(197,165,90,0.3)] -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                    {/* Elegant under glow */}
                    <div className="absolute inset-x-0 -bottom-[3px] h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
