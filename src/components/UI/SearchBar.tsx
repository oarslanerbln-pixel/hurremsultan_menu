import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMenu } from '../../context/MenuContext';
import { useLanguage } from '../../i18n/LanguageContext';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearch } = useMenu();
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div 
      className={`relative flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        searchQuery.length > 0
          ? 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-4 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-white/10 px-1 py-1'
      }`}
      layout
    >
      {/* Search icon */}
      <motion.div
        animate={{ 
          opacity: searchQuery.length > 0 ? 1 : 0.4,
          scale: searchQuery.length > 0 ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
        className="mr-2 shrink-0"
      >
        <Search className="w-4 h-4 text-gold-500" />
      </motion.div>

      <input
        ref={inputRef}
        type="search"
        value={searchQuery}
        onChange={e => setSearch(e.target.value)}
        placeholder={t('searchPlaceholder')}
        className="w-full bg-transparent border-0 focus:outline-none font-body text-[16px] font-light text-text-primary placeholder:text-text-tertiary/60 py-2.5 pr-8 transition-colors caret-gold"
        aria-label="Search menu items"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />

      {/* Gold underline expand on focus — only in non-pill mode */}
      {searchQuery.length === 0 && (
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gold-500 origin-left pointer-events-none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%' }}
        />
      )}

      {/* Clear button */}
      <AnimatePresence>
        {searchQuery.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 90 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSearch('')}
            className="absolute right-2 w-7 h-7 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-600 hover:bg-gold-500/20 transition-colors text-sm leading-none"
            aria-label="Clear search"
          >
            ×
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBar;
