
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useMenu } from '../../context/MenuContext';
import MenuItemCard from '../UI/MenuItemCard';
import type { TranslationKey } from '../../i18n/translations';

import AllergenLegend from '../UI/AllergenLegend';
import { Info } from 'lucide-react';

export default function MainContent() {
  const { t } = useLanguage();
  const { filteredItems, activeCategory, activeSubcategory, subcategories } = useMenu();
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  return (
    <main className="container-mobile mt-4 px-4 relative">
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
              activeSubcategory === 'All' ? (
                // Group by subcategory based on the logically sorted `subcategories` array
                subcategories.filter(s => s !== 'All').map(sub => {
                  const itemsInSub = filteredItems.filter(item => item.subcategory === sub);
                  if (itemsInSub.length === 0) return null;
                  
                  return (
                    <div key={sub} className="mb-8 last:mb-0">
                      {/* Subcategory Sticky Header */}
                      <div className="flex items-center gap-3 mb-4 sticky top-14 z-20 bg-black/60 backdrop-blur-xl py-2 -mx-4 px-4 border-y border-white/5 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(197,165,90,0.8)]" />
                        <h3 className="font-display font-bold text-[12px] tracking-[0.25em] uppercase text-gold-100">
                          {t(sub as TranslationKey) || sub}
                        </h3>
                      </div>
                      
                      <div className="grid gap-4">
                        {itemsInSub.map(item => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                filteredItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))
              )
            ) : (
              <div className="text-center py-20 font-body text-xs text-text-tertiary">
                {t('emptyState')}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Allergens Button */}
      <div className="w-full flex justify-center mt-12 mb-6">
        <button 
          onClick={() => setIsLegendOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <Info className="w-4 h-4 text-gold-400" />
          <span className="font-display text-xs tracking-widest uppercase theme-text-muted">
            {t('allergensTitle') || 'Allergene & Zusatzstoffe'}
          </span>
        </button>
      </div>

      <AllergenLegend isOpen={isLegendOpen} onClose={() => setIsLegendOpen(false)} />

      {/* Branding Footer */}
      <div className="w-full flex flex-col items-center justify-center py-6 pb-32 opacity-60">
        <span className="text-[10px] font-display uppercase tracking-[0.3em] text-gold-600 mb-1">
          Crafted by
        </span>
        <span className="text-[12px] font-display font-bold tracking-[0.4em] text-white/80 drop-shadow-[0_0_8px_rgba(197,165,90,0.5)]">
          1618_DIGITAL
        </span>
      </div>
    </main>
  );
}
