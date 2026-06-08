import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { MenuItem } from '../data/menu';

export interface CartItem extends MenuItem {
  cartId: string; // Unique ID for cart item (in case we add variations later)
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalAmount: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: MenuItem, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, cartId: item.id, quantity }];
    });
    
    // Tiny haptic feedback if supported
    if (navigator.vibrate) navigator.vibrate(15);
  };

  const removeItem = (cartId: string) => {
    setItems(prev => prev.filter(i => i.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setItems(prev => prev.map(i => {
      if (i.cartId === cartId) {
        const newQuantity = Math.max(0, i.quantity + delta);
        return { ...i, quantity: newQuantity };
      }
      return i;
    }).filter(i => i.quantity > 0)); // Auto-remove if quantity goes to 0
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalAmount = useMemo(() => 
    items.reduce((sum, item) => sum + (item.price * item.quantity), 0), 
  [items]);

  const totalItems = useMemo(() => 
    items.reduce((sum, item) => sum + item.quantity, 0), 
  [items]);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      totalAmount,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
