import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import { menuData as localMenuData, type MenuCategory, type MenuItem } from '../data/menu';

declare global {
  interface Window {
    wpApiSettings?: {
      root: string;
      nonce?: string;
    };
  }
}

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
  isLoading: boolean;
}

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [allItems, setAllItems] = useState<MenuItem[]>(localMenuData);
  const [isLoading, setIsLoading] = useState(() => !!(typeof window !== 'undefined' && window.wpApiSettings?.root));
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('shisha');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    // Check if we are running inside WordPress
    if (window.wpApiSettings && window.wpApiSettings.root) {
      // Use our custom REST endpoint which perfectly maps MotoPress data
      const apiUrl = `${window.wpApiSettings.root}huerrem/v1/menu`;
      
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            // Data is already mapped correctly by our custom PHP endpoint
            setAllItems(data as MenuItem[]);
          }
        })
        .catch(err => {
          console.error("Failed to fetch menu from WordPress:", err);
          // Fallback to local data on error
          setAllItems(localMenuData);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

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
      allItems.filter(item => item.category === activeCategory).map(item => item.subcategory)
    ))];
  }, [allItems, activeCategory]);

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
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
  }, [allItems, activeCategory, activeSubcategory, searchQuery, activeTags]);

  return (
    <MenuContext.Provider value={{
      allItems,
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
      isLoading,
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
