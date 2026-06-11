import { useState, useEffect, lazy, Suspense } from 'react';
import { Crown } from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';

// Contexts
import { LanguageProvider } from './i18n/LanguageContext';
import { MenuProvider } from './context/MenuContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

// Core Components
import IntroScreen from './components/UI/IntroScreen';
import CartDrawer from './components/UI/CartDrawer';
import SpecialEventButton from './components/UI/SpecialEventButton';
import WishlistPanel from './components/UI/WishlistPanel';
import AmbientBackground from './components/UI/AmbientBackground';
import ServiceDial from './components/UI/ServiceDial';

// Layout Components
import TopActionBar from './components/Layout/TopActionBar';
import BrandHeader from './components/Layout/BrandHeader';
import FilterBar from './components/Layout/FilterBar';
import MainContent from './components/Layout/MainContent';
import BottomNav from './components/Layout/BottomNav';

// Lazy-loaded heavy components
const Background3D = lazy(() => import('./components/3D/Background3D'));
const SecretMenu = lazy(() => import('./components/UI/SecretMenu'));
const OracleQuiz = lazy(() => import('./components/Quiz/OracleQuiz'));
const MixologyBuilder = lazy(() => import('./components/UI/MixologyBuilder'));

// Main App inner — uses context hooks
function AppInner() {
  const { t } = useLanguage();
  const [isCompact, setIsCompact] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isSecretMenuOpen, setIsSecretMenuOpen] = useState(false);
  const [isMixologyOpen, setIsMixologyOpen] = useState(false);

  // Intro timer
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

  return (
    <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen overflow-x-hidden pb-44 relative bg-transparent selection:bg-gold-500/30 selection:text-gold-900">
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
            <TopActionBar onOpenMixology={() => setIsMixologyOpen(true)} />
            <BrandHeader onSecretMenuOpen={() => setIsSecretMenuOpen(true)} />

            {/* Special Actions (Events & Quiz) */}
            <div className="container-mobile flex flex-col gap-3 mt-6 pb-4">
              <SpecialEventButton />
              <Suspense fallback={null}>
                <OracleQuiz />
              </Suspense>
            </div>

            <FilterBar isCompact={isCompact} />
            <MainContent />
            <WishlistPanel />
            <CartDrawer />
            <ServiceDial />

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

            <BottomNav isCompact={isCompact} />
            
            {/* Modals & Overlays */}
            <Suspense fallback={null}>
              <SecretMenu isOpen={isSecretMenuOpen} onClose={() => setIsSecretMenuOpen(false)} />
              <MixologyBuilder isOpen={isMixologyOpen} onClose={() => setIsMixologyOpen(false)} />
            </Suspense>
          </div>
        </div>
      </CartProvider>
    </WishlistProvider>
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
