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
    if (navigator.vibrate) navigator.vibrate([30, 20]);
  };

  return (
    <div className={`sticky top-0 z-30 pt-3 pb-1.5 transition-all duration-500 ${isCompact ? 'bg-black/50 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="container-mobile flex flex-col gap-2">

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
                <span
                  className="font-brand text-sm font-normal"
                  style={{
                    background: 'linear-gradient(135deg, hsl(43,55%,45%) 0%, hsl(43,75%,68%) 50%, hsl(43,50%,50%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.2em',
                  }}
                >
                  Hürrem
                </span>
                <span className="font-body text-[8px] tracking-widest uppercase text-text-tertiary/60">
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

        {/* Subcategory tabs — underline style, fine dining */}
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth py-1 relative">
          {/* Fade gradient right edge */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(8,6,4,0.85))' }} />

          <div ref={chipsScrollRef} className="flex gap-6 px-4 border-b border-white/5">
            {subcategories.map(sub => {
              const isActive = activeSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => handleSubcategoryClick(sub)}
                  className={`filter-tab ${isActive ? 'active' : 'text-text-tertiary/50 hover:text-text-tertiary'}`}
                >
                  {sub === 'All' ? t('subAll') : (t(sub as TranslationKey) || sub)}
                  {/* Animated underline for active */}
                  {isActive && (
                    <motion.div
                      layoutId={`filter-underline-${lang}`}
                      className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(197,165,90,0.8), transparent)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
