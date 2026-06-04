import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import { menuData, type MenuCategory, type MenuItem } from '../data/menu';

interface MenuContextType {
  allItems: MenuItem[];
  filteredItems: MenuItem[];
  activeCategory: MenuCategory;
  setCategory: (cat: MenuCategory) => void;
  activeSubcategory: string;
  setSubcategory: (sub: string) => void;
  searchQuery: string;
  setSearch: (q: string) => void;
  activeTags: string[];
  toggleTag: (tag: string) => void;
  subcategories: string[];
}

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('shisha');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const setCategory = (cat: MenuCategory) => {
    setActiveCategory(cat);
    setActiveSubcategory('All');
    setSearchQuery('');
    setActiveTags([]);
  };

  const setSubcategory = (sub: string) => {
    setActiveSubcategory(sub);
  };

  const setSearch = (q: string) => {
    setSearchQuery(q);
  };

  const toggleTag = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const subcategories = useMemo(() => {
    return ['All', ...Array.from(new Set(
      menuData.filter(item => item.category === activeCategory).map(item => item.subcategory)
    ))];
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    return menuData.filter(item => {
      const catMatch = item.category === activeCategory;
      const subMatch = activeSubcategory === 'All' || item.subcategory === activeSubcategory;
      const itemName = typeof item.name === 'string' ? item.name : (item.name.DE || '');
      const itemDesc = typeof item.description === 'string' ? item.description : (item.description.DE || '');
      
      const searchMatch = !searchQuery.trim() ||
        itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itemDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const tagMatch = activeTags.length === 0 ||
        activeTags.every(tag => {
          if (tag === 'signature') return item.isSignature;
          return item.tags?.includes(tag);
        });
      return catMatch && subMatch && searchMatch && tagMatch;
    });
  }, [activeCategory, activeSubcategory, searchQuery, activeTags]);

  return (
    <MenuContext.Provider value={{
      allItems: menuData,
      filteredItems,
      activeCategory,
      setCategory,
      activeSubcategory,
      setSubcategory,
      searchQuery,
      setSearch,
      activeTags,
      toggleTag,
      subcategories,
    }}>
      {children}
    </MenuContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used within MenuProvider');
  return ctx;
}
