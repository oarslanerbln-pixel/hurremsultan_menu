import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Heart, Box, X, Sparkles, Plus } from 'lucide-react';
import { type MenuItem } from '../../data/menu';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';
import { useConcept } from '../../context/ConceptContext';
import { getAssetUrl } from '../../utils/paths';
import { worldCupFlags } from '../../data/worldCupData';
import ARViewerModal from './ARViewerModal';
import IceShatterEffect from './IceShatterEffect';
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation';

interface MenuItemCardProps {
  item: MenuItem;
}

const INTENSITY_COLORS = [
  'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]',
  'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]',
  'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.4)]',
  'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]',
  'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'
];

const INTENSITY_HEIGHTS = [
  'h-[9px]',   // 1
  'h-[12px]',  // 2
  'h-[15px]',  // 3
  'h-[18px]',  // 4
  'h-[21px]',  // 5
];

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const isSignature = item.isSignature;
  const { toggle, has } = useWishlist();
  const { addItem } = useCart();
  const { lang } = useLanguage();
  const { concept } = useConcept();
  const isWishlisted = has(item.id);
  const [isExpanded, setIsExpanded] = useState(false);

  // Ref for in-view detection
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });

  // Get localized strings or fallback to DE if missing
  const itemName = typeof item.name === 'string' ? item.name : item.name?.[lang] || item.name?.DE || '';
  const itemDesc = typeof item.description === 'string' ? item.description : item.description?.[lang] || item.description?.DE || '';

  const [isAROpen, setIsAROpen] = React.useState(false);

  // Device orientation for Parallax
  const orientation = useDeviceOrientation();
  const parallaxX = orientation.gamma ? Math.min(Math.max(orientation.gamma / 2, -20), 20) : 0;
  const parallaxY = orientation.beta ? Math.min(Math.max((orientation.beta - 45) / 2, -20), 20) : 0;

  // Initialize random particle values once to avoid pure render violations
  const [particlesConfig] = React.useState(() => {
    if (!isSignature && item.category !== 'shisha') return [];
    return [...Array(5)].map(() => ({
      left: 15 + Math.random() * 70,
      tx: (Math.random() - 0.5) * 40,
      ty: 80 + Math.random() * 60,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2
    }));
  });

  // Initialize random particle values for the modal
  const [modalParticlesConfig] = React.useState(() => {
    return [...Array(12)].map(() => ({
      x: (Math.random() - 0.5) * 250, 
      y: (Math.random() - 0.5) * 250 - 50,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
  });

  // Smart Recommendations (Pairings) disabled in this version for cleaner UI

  return (
    <>
    <motion.article
      ref={ref}
      layout
      animate={isInView
        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
        : { opacity: 0, y: 12, filter: 'blur(6px)' }
      }
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.985 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, { offset }) => {
        const swipe = offset.x;
        if (swipe < -75) {
          // Swipe left - Add to wishlist
          if (!isWishlisted) {
            toggle(item);
            if (navigator.vibrate) navigator.vibrate(20);
          }
        } else if (swipe > 75) {
          // Swipe right - Info/Details
          if (navigator.vibrate) navigator.vibrate(10);
        }
      }}
      className={`relative flex flex-col gap-2 overflow-hidden cursor-pointer transition-all duration-300 group theme-card`}
      style={{ willChange: 'opacity, transform, filter' }}
    >
      {/* Signature accent line */}
      {isSignature && (
        <div className="signature-accent-line" />
      )}

      {/* Cyber-Gold Scanner Line */}
      {concept === 'cyber-gold' && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-400 opacity-50 blur-[1px] animate-cyber-scan pointer-events-none" />
      )}

      {/* Neo-Classic Shine Sweep */}
      {concept === 'neo-classic' && (
        <div className="absolute inset-0 w-12 bg-white/10 opacity-0 group-hover:opacity-100 blur-[10px] animate-sweep-shine pointer-events-none" />
      )}

      {/* Gold glow on hover & wishlist state */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 pointer-events-none rounded-sm"
        animate={{ opacity: isWishlisted ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Signature corner glow */}
      {isSignature && (
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-gold-500/10 to-transparent blur-2xl pointer-events-none" />
      )}

      {/* Item Image */}
      {item.imageUrl && (
        <motion.div 
          layoutId={`image-container-${item.id}`}
          className="relative w-full aspect-[3/4] sm:aspect-[4/5] mb-4 rounded-xl overflow-hidden bg-black/40 z-10 cursor-pointer group shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(true);
            if (navigator.vibrate) navigator.vibrate(15);
          }}
          whileTap={{ scale: 0.96, rotate: -1 }}
        >
          {/* Ambient blurred background */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-50 scale-125 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />

          {/* LED Glow specifically for Hürrem Spezial Hookah (s18) */}
          {item.id === 's18' && (
            <div className="absolute inset-0 pointer-events-none z-10 mix-blend-color-dodge opacity-80 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-fuchsia-500/40 blur-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl" />
            </div>
          )}
          
          <motion.img 
            src={getAssetUrl(item.imageUrl)} 
            alt={itemName} 
            className="relative w-full h-full object-cover object-[center_30%] transition-transform duration-[800ms] ease-out group-hover:scale-105 drop-shadow-[0_0_15px_rgba(218,165,32,0.3)] brightness-90 contrast-[1.15] saturate-[1.1]" 
            loading="lazy"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
            }}
          />

          {/* Light Sweep Effect (Işık Vurma) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-0 bottom-0 left-[-150%] w-3/4 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-sweep" />
          </div>

          {/* Floating Magical Particles (Uçuşan Tanecikler) - Signature ve Tüm Nargileler için */}
          {(isSignature || item.category === 'shisha') && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
              {particlesConfig.map((config, i) => (
                <div
                  key={i}
                  className="absolute bottom-[-10px] w-1.5 h-1.5 bg-gold-300 rounded-full blur-[1px] animate-float-particle"
                  style={{
                    left: `${config.left}%`,
                    ['--tx' as string]: `${config.tx}px`,
                    ['--ty' as string]: `-${config.ty}px`,
                    ['--delay' as string]: `${config.delay}s`,
                    ['--duration' as string]: `${config.duration}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Subtle gradient to blend image into background */}
          <div className="absolute inset-0 z-10 pointer-events-none theme-image-gradient" />
        </motion.div>
      )}

      {/* Title & Badge Row */}
      <div className="flex justify-between items-start gap-4 relative z-10">
        <div className="flex-1">
          {item.badge && (
            <span className="inline-block mb-2 text-[10px] uppercase tracking-widest font-bold theme-badge">
              {typeof item.badge === 'string' ? item.badge : item.badge[lang]}
            </span>
          )}
          <h3 className="theme-card-title flex items-center gap-3 flex-wrap">
            {itemName}
            {concept === 'world-cup' && worldCupFlags[item.id] && (
              <img 
                src={`https://flagcdn.com/w40/${worldCupFlags[item.id]}.png`}
                srcSet={`https://flagcdn.com/w80/${worldCupFlags[item.id]}.png 2x`}
                alt={`${worldCupFlags[item.id]} flag`}
                className="h-5 w-auto rounded-[2px] shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-pulse" 
                title="World Cup Edition"
              />
            )}
          </h3>
        </div>

        {/* Price + Heart */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span 
            className="font-display tracking-wider theme-price-pill"
            aria-label={`${item.price.toFixed(2)} Euro`}
          >
            {item.price.toFixed(2).replace('.', ',')} €
          </span>

          {/* Wishlist heart button — 44px touch target */}
          <div className="flex gap-1 mt-1">
            <motion.button
              onClick={e => {
                e.stopPropagation();
                toggle(item);
                if (navigator.vibrate) navigator.vibrate(15);
              }}
              whileTap={{ scale: 0.75, rotate: -10 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 14 }}
              className="w-10 h-10 -m-1 flex items-center justify-center focus:outline-none touch-target"
              aria-label={isWishlisted ? `Remove ${itemName} from selection` : `Add ${itemName} to selection`}
            >
              <Heart
                className={`w-[16px] h-[16px] transition-all duration-300 ${
                  isWishlisted
                    ? 'text-gold-500 fill-gold-500 drop-shadow-[0_0_6px_rgba(197,165,90,0.5)]'
                    : 'text-[#D8D2CA] group-hover:text-gold-500/50'
                }`}
              />
            </motion.button>

            {/* Add to Cart button */}
            <motion.button
              onClick={e => {
                e.stopPropagation();
                addItem(item);
              }}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 -m-1 flex items-center justify-center focus:outline-none bg-gold-500/10 rounded-full border border-gold-500/20 hover:bg-gold-500/20 transition-colors"
              aria-label={`Add ${itemName} to cart`}
            >
              <Plus className="w-[16px] h-[16px] text-gold-300" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className={`relative z-10 ${isSignature ? 'w-[95%] mt-2' : 'w-[88%] mt-0.5'}`}>
        {isSignature && (
          <div className="w-8 h-px bg-gold-500/40 mb-2" />
        )}
        <p className={`font-body font-light text-text-secondary leading-relaxed tracking-wide ${
          isSignature ? 'text-[12px] italic' : 'text-[11px]'
        }`}>
          {itemDesc}
        </p>

        {/* Intensity bar chart (Shisha only) */}
        {item.intensity !== undefined && (
          <div className="flex items-center gap-2.5 mt-3 pt-2.5 border-t border-gold-500/10 w-fit">
            <span className="font-display text-[8px] uppercase tracking-widest text-text-tertiary">
              Sertlik:
            </span>
            <div className="flex gap-[3px] items-end">
              {[1, 2, 3, 4, 5].map((level) => {
                const isActive = level <= item.intensity!;
                const colorClass = isActive ? INTENSITY_COLORS[level - 1] : 'bg-gold-500/15 text-transparent';
                const heightClass = INTENSITY_HEIGHTS[level - 1];
                return (
                  <div 
                    key={level} 
                    className={`w-[4px] rounded-sm transition-all duration-300 ${colorClass.split(' ')[0]} ${heightClass} ${isActive ? 'intensity-bar active' : 'intensity-bar'}`}
                  />
                );
              })}
            </div>
            <span className="font-body text-[8px] font-medium tracking-wider uppercase ml-0.5 text-gold-600/80">
              {item.intensity <= 2 ? translations[lang].intensityLight : item.intensity === 3 ? translations[lang].intensityMedium : translations[lang].intensityHeavy}
            </span>
          </div>
        )}
      </div>

      {/* AR Button */}
      {item.arModelUrl && (
        <div className="relative z-10 mt-3 border-t border-gold-500/10 pt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsAROpen(true);
            }}
            className="flex items-center gap-2 text-[10px] font-display font-bold tracking-[0.2em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center">
              <Box className="w-3.5 h-3.5" />
            </div>
            Masanda Gör (AR)
          </button>
        </div>
      )}

      {/* Kombi includes */}
      {item.includes && item.includes.length > 0 && (
        <div className="flex flex-wrap gap-x-1 gap-y-0 pt-1.5 relative z-10">
          {item.includes.map((inc, i) => (
            <span
              key={i}
              className="text-[9px] font-display font-light tracking-[0.2em] text-text-tertiary uppercase"
            >
              {inc}{i < item.includes!.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      )}
    </motion.article>

    {item.arModelUrl && createPortal(
      <ARViewerModal 
        isOpen={isAROpen}
        onClose={() => setIsAROpen(false)}
        modelUrl={item.arModelUrl}
        iosModelUrl={item.arIosModelUrl}
        title={itemName}
      />,
      document.body
    )}

    {/* Rich Item Detail Modal */}
    {createPortal(
      <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(false);
          }}
        >
          {/* Ambient Background with Theme Color glow */}
          <div 
            className="absolute inset-0 transition-colors duration-1000 theme-bg"
            style={{
              opacity: 0.95,
              backdropFilter: 'blur(30px)'
            }}
          />

          <motion.div
            layoutId={`card-${item.id}`}
            className="relative w-full max-w-[420px] rounded-[2rem] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              x: parallaxX,
              y: parallaxY,
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsExpanded(false)}
              aria-label="Kapat"
              className="absolute -top-12 right-0 z-[110] w-10 h-10 rounded-full bg-black/5 backdrop-blur-md flex items-center justify-center text-black/50 hover:text-black hover:bg-black/10 transition-all border border-black/10 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Header - Centered & Sized */}
            {item.imageUrl && (
              <motion.div 
                layoutId={`image-container-${item.id}`}
                className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center overflow-visible z-50 pointer-events-none"
              >
                {/* Aura for Special Drinks */}
                {isSignature && <IceShatterEffect />}

                {/* Flying Particles over the Image */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {modalParticlesConfig.map((config, i) => (
                    <motion.div
                      key={`modal-particle-${i}`}
                      className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-gold-400 blur-[1px]"
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 0.8, 0], 
                        scale: [0, 1.5, 0], 
                        x: config.x, 
                        y: config.y
                      }}
                      transition={{ 
                        duration: config.duration, 
                        repeat: Infinity, 
                        delay: config.delay,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                <motion.img 
                  src={getAssetUrl(item.imageUrl)} 
                  alt={itemName} 
                  className={`relative z-10 w-full h-full object-contain mix-blend-multiply ${isSignature ? 'scale-[1.15]' : 'scale-[1.1]'}`} 
                  animate={{ 
                    y: [-15, 15, -15],
                    rotateZ: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)',
                    maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)'
                  }}
                />
              </motion.div>
            )}

            {/* Glassmorphism Content Area - Apple Vision Pro Style */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full theme-modal p-6 relative z-40 ${item.imageUrl ? "pt-12 mt-[-1.5rem]" : "pt-8 mt-4"} max-h-[55vh] sm:max-h-[60vh] overflow-y-auto overflow-x-hidden no-scrollbar`}
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="font-display text-2xl uppercase tracking-widest theme-text leading-tight flex items-center gap-3 flex-wrap">
                  {itemName}
                  {concept === 'world-cup' && worldCupFlags[item.id] && (
                    <img 
                      src={`https://flagcdn.com/w80/${worldCupFlags[item.id]}.png`}
                      alt={`${worldCupFlags[item.id]} flag`}
                      className="h-7 w-auto rounded-[2px] shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse" 
                      title="World Cup Edition"
                    />
                  )}
                </h2>
                <span className="text-gold-700 font-display text-xl tracking-wider shrink-0 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                  {item.price.toFixed(2)}€
                </span>
              </div>

              {/* Detailed Description */}
              <p className="font-body text-[14px] theme-text-muted leading-relaxed font-light mb-6">
                {itemDesc}
              </p>

              {/* Flavor Profile Stats / Ingredients (If available) */}
              {item.flavorProfile && (
                <div className="mb-8 space-y-3 bg-black/5 p-4 rounded-2xl border border-black/5">
                  <h4 className="font-display text-[10px] uppercase tracking-[0.2em] text-gold-700 mb-2 flex items-center gap-2 font-bold">
                    <Sparkles className="w-3 h-3" />
                    Flavor Profile
                  </h4>
                  
                  {Object.entries(item.flavorProfile).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="font-body text-[10px] uppercase tracking-wider text-gray-500 w-20 text-right font-medium">
                        {key}
                      </span>
                      <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(item);
                    if (navigator.vibrate) navigator.vibrate([20, 10]);
                  }}
                  className={`flex-1 py-4 rounded-2xl font-display uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 ${
                    isWishlisted 
                      ? 'bg-black/20 dark:bg-white/10 theme-text border theme-border'
                      : 'theme-accent-bg text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  {isWishlisted ? translations[lang].btnRemoveFromCart : translations[lang].btnAddToCart}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};

export default MenuItemCard;
