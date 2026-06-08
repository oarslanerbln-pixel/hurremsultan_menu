
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useMenu } from '../../context/MenuContext';
import type { MenuCategory } from '../../data/menu';
import { categoriesList } from '../../data/categories';

interface BottomNavProps {
  isCompact: boolean;
}

// Synthetic sound triggers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const playSound = (_type: 'tick' | 'sweep') => {};

// Category glow/indicator functions
const getNavGlow = (key: MenuCategory): string => {
  switch (key) {
    case 'shisha': return 'nav-glow-shisha';
    case 'drinks': return 'nav-glow-drinks';
    case 'food': return 'nav-glow-food';
    case 'kombis': return 'nav-glow-kombis';
    default: return '';
  }
};

const getNavIndicator = (key: MenuCategory): string => {
  switch (key) {
    case 'shisha': return 'nav-indicator-shisha';
    case 'drinks': return 'nav-indicator-drinks';
    case 'food': return 'nav-indicator-food';
    case 'kombis': return 'nav-indicator-kombis';
    default: return '';
  }
};

export default function BottomNav({ isCompact }: BottomNavProps) {
  const { t } = useLanguage();
  const { activeCategory, setCategory } = useMenu();

  const handleCategoryClick = (category: MenuCategory) => {
    setCategory(category);
    playSound('sweep');
    if (navigator.vibrate) navigator.vibrate([10, 15]);
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full z-40 pb-[env(safe-area-inset-bottom)] transition-all duration-500 pointer-events-none ${isCompact ? 'bg-black/40 backdrop-blur-2xl border-t border-white/5 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <nav className="w-full max-w-screen-sm mx-auto h-[4.5rem] flex justify-around items-center px-2 pointer-events-auto relative">
        {categoriesList.map(cat => {
          const IconComponent = cat.icon;
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className="flex flex-col items-center justify-center gap-1.5 w-16 h-full relative cursor-pointer"
              aria-label={t(cat.labelKey)}
            >
              {/* Category-specific glow background */}
              {isActive && (
                <motion.div
                  layoutId="nav-category-glow"
                  className={`absolute inset-0 m-auto w-12 h-12 rounded-full ${getNavGlow(cat.key)} blur-md pointer-events-none z-0`}
                />
              )}
              {/* Icon with float animation when active */}
              <div className={isActive ? 'animate-icon-float' : ''}>
                <IconComponent className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                  isActive ? 'text-gold-600 scale-110 drop-shadow-sm' : 'text-text-tertiary/60 hover:text-gold-500/80'
                }`} />
              </div>
              <span className={`text-[8px] font-body tracking-[0.15em] uppercase relative z-10 transition-all duration-300 ${
                isActive ? 'text-gold-700 font-bold' : 'text-text-tertiary/60'
              }`}>
                {t(cat.labelKey)}
              </span>
              {/* Category-colored indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="active-dock-indicator"
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-b-full ${getNavIndicator(cat.key)}`}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
