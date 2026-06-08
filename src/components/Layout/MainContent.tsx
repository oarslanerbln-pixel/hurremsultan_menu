
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useMenu } from '../../context/MenuContext';
import MenuItemCard from '../UI/MenuItemCard';

export default function MainContent() {
  const { t } = useLanguage();
  const { filteredItems, activeCategory, activeSubcategory } = useMenu();

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
  );
}
