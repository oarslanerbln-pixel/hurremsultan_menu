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
    const subs = Array.from(new Set(
      allItems
        .filter(item => item.category === activeCategory)
        .map(item => item.subcategory)
        .filter((sub): sub is string => Boolean(sub))
    ));

    // Define logical ordering for Drinks
    const SUBCATEGORY_ORDER: Record<string, number> = {
      // Shisha
      'Signature Blends': 1,
      'Premium Blends': 2,
      'Classic': 3,
      'Pfeifen': 4,
      'HMD (Aufsätze)': 5,
      'Shisha Extras': 6,
      
      // Drinks
      'Sommer-Specials': 10,
      'Cocktails': 11,
      'Mocktails': 12,
      'Homemade Iced Tea': 13,
      'Shakes': 14,
      'Säfte': 15,
      'Softdrinks': 16,
      'Kaffeespezialitäten': 17,
      'Heiße Specials': 17.5,
      'Kaffee': 18,
      'Eistee': 19,
      'Wein & Sekt': 20,
      'Bier': 21,
      
      // Food
      'Vorspeisen': 30,
      'Bowls & Salate': 31,
      'Burger Gerichte': 32,
      'Hauptgerichte': 33,
      'Pasta Gerichte': 34,
      'Snacks': 35,
      'Dessert': 36,
      
      // Kombis
      'Kombis': 40,
    };

    subs.sort((a, b) => {
      const indexA = SUBCATEGORY_ORDER[a] !== undefined ? SUBCATEGORY_ORDER[a] : -1;
      const indexB = SUBCATEGORY_ORDER[b] !== undefined ? SUBCATEGORY_ORDER[b] : -1;
      
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });

    return ['All', ...subs];
  }, [allItems, activeCategory]);

  const filteredItems = useMemo(() => {
    const items = allItems.filter(item => {
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

    // Logical item sorting: Signature items first, then by price descending, then alphabetical
    return items.sort((a, b) => {
      if (a.isSignature && !b.isSignature) return -1;
      if (!a.isSignature && b.isSignature) return 1;
      
      if (b.price !== a.price) {
        return b.price - a.price;
      }
      
      const nameA = typeof a.name === 'string' ? a.name : (a.name.DE || '');
      const nameB = typeof b.name === 'string' ? b.name : (b.name.DE || '');
      return nameA.localeCompare(nameB);
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
