import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wind,
  Coffee,
  Utensils,
  Crown,
  Info,
  MapPin,
  FlaskConical
} from 'lucide-react';
import type { MenuCategory } from './data/menu';
import type { TranslationKey } from './i18n/translations';

// Contexts
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { MenuProvider, useMenu } from './context/MenuContext';
import { WishlistProvider } from './context/WishlistContext';

// Components
import MenuItemCard from './components/UI/MenuItemCard';
import IntroScreen from './components/UI/IntroScreen';
import SearchBar from './components/UI/SearchBar';
import SpecialEventButton from './components/UI/SpecialEventButton';
import WishlistPanel from './components/UI/WishlistPanel';
import AmbientBackground from './components/UI/AmbientBackground';
import ServiceDial from './components/UI/ServiceDial';

// Lazy-loaded heavy components
const Background3D = lazy(() => import('./components/3D/Background3D'));
const SecretMenu = lazy(() => import('./components/UI/SecretMenu'));
const OracleQuiz = lazy(() => import('./components/Quiz/OracleQuiz'));
const MixologyBuilder = lazy(() => import('./components/UI/MixologyBuilder'));

// Synthetic sound triggers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const playSound = (_type: 'tick' | 'sweep') => {
  // Sound is removed to keep it cleaner, keeping function signature empty just in case
};

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

// Language Switcher Component
function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const langs = ['TR', 'EN', 'DE'] as const;

  return (
    <div className="flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => { setLang(l); if (navigator.vibrate) navigator.vibrate(10); }}
          className={`relative px-3 py-1.5 rounded-full font-display text-[10px] sm:text-xs font-bold tracking-[0.1em] transition-all duration-300 ${
            lang === l 
              ? 'text-black bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_10px_rgba(197,165,90,0.5)] scale-105' 
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// Main App inner — uses context hooks
function AppInner() {
  const { t, lang } = useLanguage();
  const {
    filteredItems,
    activeCategory,
    setCategory,
    activeSubcategory,
    setSubcategory,
    subcategories,
  } = useMenu();

  const [isCompact, setIsCompact] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isSecretMenuOpen, setIsSecretMenuOpen] = useState(false);
  const [isMixologyOpen, setIsMixologyOpen] = useState(false);
  const chipsScrollRef = useRef<HTMLDivElement>(null);
  
  // Secret Menu Long Press Logic
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePressStart = () => {
    pressTimer.current = setTimeout(() => {
      setIsSecretMenuOpen(true);
      if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
    }, 1500); // 1.5 seconds hold to unlock
  };

  const handlePressEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  // Intro timer — extended for more premium feel
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 4800);
    return () => clearTimeout(introTimer);
  }, []);

  // Scroll detection — with compact mode
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsCompact(y > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: MenuCategory) => {
    setCategory(category);
    playSound('sweep');
    if (navigator.vibrate) navigator.vibrate([10, 15]);
  };

  const handleSubcategoryClick = (sub: string) => {
    setSubcategory(sub);
    playSound('tick');
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const handleInfoClick = () => {
    playSound('tick');
    if (navigator.vibrate) navigator.vibrate([20, 10]);
    alert(`${t('infoTitle')}\n\n${t('infoBody')}`);
  };

  const categoriesList = [
    { key: 'shisha' as MenuCategory, labelKey: 'catShisha' as const, icon: Wind },
    { key: 'drinks' as MenuCategory, labelKey: 'catDrinks' as const, icon: Coffee },
    { key: 'food' as MenuCategory, labelKey: 'catFood' as const, icon: Utensils },
    { key: 'kombis' as MenuCategory, labelKey: 'catKombis' as const, icon: Crown },
  ];

  return (
    <div className="min-h-screen pb-44 relative bg-transparent selection:bg-gold-500/30 selection:text-gold-900">
      <AmbientBackground />
      <IntroScreen isVisible={showIntro} />
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      {/* Main UI */}
      <div
        className={`transition-opacity duration-[2000ms] ease-in-out z-10 relative ${
          showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >


        {/* Top Action Bar: Lang | Mixology | Info */}
        <div className="container-mobile pt-5 flex justify-end items-center z-30 relative gap-3">

          <LanguageSwitcher />

          <button
            onClick={() => { setIsMixologyOpen(true); if (navigator.vibrate) navigator.vibrate(15); playSound('sweep'); }}
            className="w-9 h-9 rounded-full border border-gold-500/25 bg-[#1A1713]/80 backdrop-blur-md flex items-center justify-center hover:border-gold-500/50 text-gold-700 transition-colors shadow-sm relative group"
            aria-label="The Alchemist"
          >
            <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-pulse pointer-events-none" />
            <FlaskConical className="w-4 h-4" />
          </button>

          <button
            onClick={handleInfoClick}
            className="w-9 h-9 rounded-full border border-gold-500/25 bg-[#1A1713]/80 backdrop-blur-md flex items-center justify-center hover:border-gold-500/50 text-gold-700 transition-colors shadow-sm"
            aria-label="Info"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Header — scrolls away naturally */}
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

        {/* Special Actions (Events & Quiz) - Scrolls away naturally */}
        <div className="container-mobile flex flex-col gap-3 mt-6 pb-4">
          <SpecialEventButton />
          <Suspense fallback={null}>
            <OracleQuiz />
          </Suspense>
        </div>

        {/* Sticky Filter Bar: Search + Quick Filters + Subcategory Tabs */}
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
                      {t(categoriesList.find(c => c.key === activeCategory)?.labelKey || 'catShisha')}
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
            <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth -webkit-overflow-scrolling-touch pb-1">
              <div ref={chipsScrollRef} className="flex gap-5 overflow-x-auto no-scrollbar">
                {subcategories.map(sub => (
                  <button
                    key={sub}
                    onClick={() => handleSubcategoryClick(sub)}
                    className={`py-2 px-3 rounded-full relative font-display text-[12px] sm:text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap shrink-0 ${
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
                        <div className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <main className="container-mobile mt-4 px-4 relative">
          
          {/* Menu Items */}
          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeCategory + '-' + activeSubcategory}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col relative z-10"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                    <MenuItemCard key={item.id} item={item} />
                  ))
                ) : (
                  <div className="text-center py-20 font-body text-xs text-text-tertiary">
                    {t('emptyState')}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Wishlist Panel */}
        <WishlistPanel />

        {/* Service Dial (Garson, Köz, Hesap) */}
        <ServiceDial />

        {/* Lazy loaded modals & heavy components */}
        <Suspense fallback={null}>
          <OracleQuiz />
          <SecretMenu isOpen={isSecretMenuOpen} onClose={() => setIsSecretMenuOpen(false)} />
          <MixologyBuilder isOpen={isMixologyOpen} onClose={() => setIsMixologyOpen(false)} />
        </Suspense>

        {/* Footer */}
        <footer className="pt-20 pb-[calc(8rem+env(safe-area-inset-bottom))] text-center container-mobile border-t border-[#2A241A] mt-16">
          <div className="w-10 h-px bg-gold-500/50 mx-auto mb-6" />
          <p className="font-body text-[8px] font-semibold tracking-[0.25em] uppercase text-text-tertiary leading-relaxed">
            {t('estLine')}
          </p>
          <p className="font-body text-[8px] font-light tracking-widest uppercase text-text-tertiary mt-2">
            {t('vatLine')}
          </p>
          <Crown className="w-4 h-4 text-gold-500/20 mx-auto mt-6" />
        </footer>

        {/* Bottom Nav — Dynamic Transparent to Glass on Scroll */}
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
        
        {/* Modals & Overlays */}
        <Suspense fallback={null}>
          <SecretMenu isOpen={isSecretMenuOpen} onClose={() => setIsSecretMenuOpen(false)} />
          <MixologyBuilder isOpen={isMixologyOpen} onClose={() => setIsMixologyOpen(false)} />
        </Suspense>

        <ServiceDial />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MenuProvider>
        <WishlistProvider>
          <AppInner />
        </WishlistProvider>
      </MenuProvider>
    </LanguageProvider>
  );
}

export default App;
