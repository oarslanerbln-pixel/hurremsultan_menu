import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Diamond, LayoutTemplate, Lock, Delete } from 'lucide-react';
import type { MenuItem } from '../../data/menu';
import { useConcept, type UIConcept } from '../../context/ConceptContext';

interface SecretMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const secretItems: MenuItem[] = [
  {
    id: 's1',
    category: 'shisha',
    subcategory: 'VIP',
    name: '24K Gold Flake Shisha',
    description: 'Exclusive gold-infused tobacco blend, served with a 24-karat gold mouthpiece and champagne base.',
    price: 250,
    tags: ['Off-Menu', 'Ultra Premium'],
    intensity: 3,
  },
  {
    id: 's2',
    category: 'shisha',
    subcategory: 'VIP',
    name: 'Harem Reserve',
    description: 'A secret blend aged for 12 months in oak barrels. Highly limited availability.',
    price: 180,
    tags: ['Limited Edition'],
    intensity: 4,
  }
];

const SecretMenu: React.FC<SecretMenuProps> = ({ isOpen, onClose }) => {
  const { concept, setConcept } = useConcept();
  const concepts: { id: UIConcept; label: string }[] = [
    { id: 'neo-classic', label: 'Neo-Classic (Default)' },
    { id: 'brutalist', label: 'Brutalist Luxury' },
    { id: 'skeuomorphic', label: 'Skeuomorphic Velvet' },
    { id: 'avant-garde', label: 'Avant-Garde' },
    { id: 'cyber-gold', label: 'Cyber-Gold' },
    { id: 'ottoman-palace', label: 'Ottoman Palace (Royal)' },
    { id: 'monolithic-matte', label: 'Monolithic Matte (Old Money)' },
  ];

  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setPin('');
        setIsUnlocked(false);
        setHasError(false);
      }, 300);
    }
  }, [isOpen]);

  const verifyPin = async (inputPin: string) => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(inputPin);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      const targetHash = import.meta.env.VITE_ADMIN_PIN_HASH || '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c';
      
      if (targetHash && hashHex === targetHash) {
        if (navigator.vibrate) navigator.vibrate([30, 30, 30]);
        setTimeout(() => setIsUnlocked(true), 200);
      } else {
        if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
        setHasError(true);
        setTimeout(() => {
          setPin('');
          setHasError(false);
        }, 600);
      }
    } catch (err) {
      console.error('Crypto error', err);
      setHasError(true);
      setTimeout(() => {
        setPin('');
        setHasError(false);
      }, 600);
    }
  };

  const handlePinPress = (num: string) => {
    if (pin.length >= 4 || hasError) return;
    if (navigator.vibrate) navigator.vibrate(10);
    
    const newPin = pin + num;
    setPin(newPin);
    
    if (newPin.length === 4) {
      verifyPin(newPin);
    }
  };

  const handlePinDelete = () => {
    if (pin.length > 0 && !hasError) {
      if (navigator.vibrate) navigator.vibrate(10);
      setPin(pin.slice(0, -1));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end md:justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060504]/90 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: '100%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '100%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#12100C] border border-gold-500/40 rounded-[2rem] shadow-[0_0_50px_rgba(197,165,90,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 pt-10 pb-6 text-center relative border-b border-gold-500/20">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Kapat"
                title="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
              
              {!isUnlocked ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-black mx-auto flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Lock className="w-6 h-6 text-white/40" />
                  </div>
                  <h2 className="font-display text-2xl text-white/90 mb-2">
                    Admin Access
                  </h2>
                  <p className="font-body text-[10px] text-white/40 tracking-[0.3em] uppercase">
                    Enter PIN to Continue
                  </p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 mx-auto flex items-center justify-center mb-6 border border-gold-500/30 shadow-[0_0_20px_rgba(197,165,90,0.2)]">
                    <Diamond className="w-8 h-8 text-gold-400" />
                  </div>
                  <h2 className="font-display text-3xl text-gold-100 mb-2 drop-shadow-[0_0_10px_rgba(197,165,90,0.3)]">
                    The Connoisseur
                  </h2>
                  <p className="font-body text-[10px] text-gold-400/80 tracking-[0.3em] uppercase">
                    Owner Dashboard & Reserves
                  </p>
                </>
              )}
            </div>

            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                <motion.div 
                  key="numpad"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-8 flex flex-col items-center"
                >
                  {/* PIN Display */}
                  <div className={`flex gap-4 mb-10 transition-transform ${hasError ? 'animate-shake' : ''}`}>
                    {[0, 1, 2, 3].map(i => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          pin.length > i 
                            ? (hasError ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-gold-500 shadow-[0_0_10px_rgba(197,165,90,0.5)] scale-110')
                            : 'bg-white/10 border border-white/20'
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Numpad */}
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <button
                        key={num}
                        onClick={() => handlePinPress(num.toString())}
                        className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-2xl text-white/90 hover:bg-white/10 hover:border-gold-500/50 hover:text-gold-400 transition-all active:scale-95"
                      >
                        {num}
                      </button>
                    ))}
                    <div /> {/* Empty space */}
                    <button
                      onClick={() => handlePinPress('0')}
                      className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-2xl text-white/90 hover:bg-white/10 hover:border-gold-500/50 hover:text-gold-400 transition-all active:scale-95"
                    >
                      0
                    </button>
                    <button
                      onClick={handlePinDelete}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 transition-all active:scale-95"
                      aria-label="Sil"
                      title="Sil"
                    >
                      <Delete className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {hasError && (
                    <motion.p 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="mt-6 font-body text-xs text-red-400 uppercase tracking-widest"
                    >
                      Incorrect PIN
                    </motion.p>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col max-h-[70vh]"
                >
                  {/* Dev Tools: Concept Switcher (Moved to Top) */}
                  <div className="p-6 border-b border-gold-500/20 bg-black/40">
                    <div className="flex items-center gap-2 mb-4">
                      <LayoutTemplate className="w-4 h-4 text-gold-500" />
                      <h3 className="font-display text-sm text-gold-500 uppercase tracking-widest">
                        Konsept Testi
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {concepts.map(c => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setConcept(c.id);
                            if (navigator.vibrate) navigator.vibrate(10);
                          }}
                          className={`text-left px-3 py-3 rounded-xl border font-body text-[10px] tracking-wider uppercase transition-all flex flex-col justify-center min-h-[60px] ${
                            concept === c.id
                              ? 'bg-gold-500/20 border-gold-500 text-gold-400 shadow-[0_0_15px_rgba(197,165,90,0.2)]'
                              : 'bg-black/20 border-white/10 text-white/50 hover:bg-white/5 hover:border-gold-500/30'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Items */}
                  <div className="p-6 flex flex-col gap-6 overflow-y-auto no-scrollbar pb-10">
                    {secretItems.map(item => (
                      <div key={item.id} className="relative group">
                        <div className="absolute inset-0 bg-gold-500/5 rounded-xl blur-lg transition-opacity opacity-0 group-hover:opacity-100" />
                        <div className="relative p-5 rounded-xl border border-gold-500/20 bg-black/40 backdrop-blur-md flex flex-col gap-3">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h4 className="font-display text-lg text-gold-100">{typeof item.name === 'string' ? item.name : item.name.TR}</h4>
                              <div className="flex gap-2 mt-1">
                                {item.tags?.map(tag => (
                                  <span key={tag} className="px-2 py-0.5 rounded text-[8px] font-body font-bold tracking-widest uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <span className="font-display text-xl text-gold-300">€{item.price}</span>
                          </div>
                          <p className="font-body text-xs text-white/60 leading-relaxed">
                            {typeof item.description === 'string' ? item.description : item.description.TR}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Footer */}
            <div className="p-6 bg-black/50 border-t border-gold-500/20 text-center relative z-10">
              <p className="font-body text-[9px] text-white/40 tracking-widest uppercase">
                {isUnlocked ? "Hürrem Admin Interface" : "Authorized Personnel Only"}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SecretMenu;
