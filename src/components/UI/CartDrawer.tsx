import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../i18n/LanguageContext';

const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, totalAmount, clearCart } = useCart();
  const { lang } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-black/80 backdrop-blur-xl border-l border-gold-500/20 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold-500/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold-400" />
                <h2 className="font-display text-xl text-gold-200 uppercase tracking-widest">
                  Lounge Cart
                </h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-white/60 hover:text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-white/20" />
                  </div>
                  <p className="text-white/40 font-body">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => {
                  const name = typeof item.name === 'string' ? item.name : item.name[lang] || item.name['EN'];
                  return (
                    <motion.div 
                      layout
                      key={item.cartId}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/50 shrink-0 border border-gold-500/10">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/10 text-xs">No img</div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <h3 className="font-body text-sm font-medium text-white line-clamp-2 pr-2">{name}</h3>
                          <button onClick={() => removeItem(item.cartId)} className="text-white/30 hover:text-red-400 transition-colors" aria-label="Remove item">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gold-300 font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 bg-black/40 rounded-full px-2 py-1 border border-white/5">
                            <button 
                              onClick={() => updateQuantity(item.cartId, -1)}
                              className="text-white/60 hover:text-white p-1"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-white text-xs w-4 text-center font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, 1)}
                              className="text-white/60 hover:text-white p-1"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gold-500/20 bg-black/40 backdrop-blur-md">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60 font-body">Total Amount</span>
                  <span className="text-xl font-display text-gold-300">€{totalAmount.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 text-black font-medium tracking-wider uppercase hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
                  onClick={() => {
                    alert('Order sent to the table! (This is a UI demo)');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                >
                  Confirm Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
