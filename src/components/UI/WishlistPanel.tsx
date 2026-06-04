import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Sparkles, Check, Send } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../i18n/LanguageContext';

const WishlistPanel: React.FC = () => {
  const { items, toggle, clear, total, count } = useWishlist();
  const { lang, t } = useLanguage();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
    setTimeout(() => {
      setIsCheckingOut(false);
      clear();
      if (navigator.vibrate) navigator.vibrate([30, 100, 30]);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          key="wishlist-panel"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180, mass: 0.9 }}
          className="fixed left-0 right-0 z-45 mx-auto max-w-[480px] bottom-[calc(4rem+env(safe-area-inset-bottom))]"
        >
          <div
            role="region"
            aria-label="Wishlist Panel"
            aria-expanded="true"
            className="mx-3 rounded-2xl border border-gold-500/25 overflow-hidden bg-[#15120F]/90 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(197,165,90,0.15)] backdrop-blur-[40px]"
          >
            {/* Animated shimmer top border */}
            <div className="wishlist-top-shimmer" />

            {/* Header */}
            <div className="flex justify-between items-center px-4 pt-3 pb-2 border-b border-gold-500/15">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold-500 opacity-60" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-gold-700 font-light">
                  {t('wishlistTitle')}
                </span>
                <span className="font-body text-[9px] text-text-tertiary">
                  · {count} {t('wishlistItems')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={clear}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-text-tertiary hover:text-gold-500 hover:bg-gold-500/10 transition-all"
                  aria-label={t('wishlistClear')}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Items list */}
            <div className="px-4 py-2 flex flex-col gap-1.5 max-h-40 overflow-y-auto no-scrollbar">
              <AnimatePresence initial={false}>
                {items.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: 10, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-between items-center py-1.5 group/item"
                  >
                    <span className="font-display text-[11px] font-light text-text-primary uppercase tracking-wider flex-1 truncate pr-2">
                      {typeof item.name === 'string' ? item.name : (item.name[lang] || item.name.DE)}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="font-display text-[11px] text-gold-500 tabular-nums"
                        aria-label={`${item.price.toFixed(2)} Euro`}
                      >
                        {item.price.toFixed(2).replace('.', ',')} €
                      </span>
                      <button
                        onClick={() => toggle(item)}
                        className="w-6 h-6 flex items-center justify-center rounded-full text-text-tertiary/50 hover:text-gold-500 hover:bg-gold-500/10 transition-all opacity-0 group-hover/item:opacity-100"
                        aria-label={`Remove ${typeof item.name === 'string' ? item.name : item.name.DE}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Total footer */}
            <div className="flex flex-col border-t border-gold-500/15 bg-gold-500/[0.03]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="font-display text-[9px] tracking-[0.2em] uppercase text-text-tertiary">
                  {t('wishlistTotal')}
                </span>
                <span className="font-display text-lg text-gold-700 tracking-wider font-medium">
                  {total.toFixed(2).replace('.', ',')} €
                </span>
              </div>
              <div className="px-4 pb-3">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-gold-600 to-gold-400 text-[#0A0908] font-display text-xs tracking-widest uppercase py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(197,165,90,0.3)] transition-opacity"
                >
                  <AnimatePresence mode="wait">
                    {isCheckingOut ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        <span>{lang === 'TR' ? 'Sipariş Alındı' : lang === 'DE' ? 'Bestellung erhalten' : 'Order Received'}</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{lang === 'TR' ? 'Siparişi Gönder' : lang === 'DE' ? 'Bestellung abschicken' : 'Send Order'}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WishlistPanel;
