import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FlaskConical, Droplets, Flame, Check, Sparkles } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../i18n/LanguageContext';

interface MixologyProps {
  isOpen: boolean;
  onClose: () => void;
}

const BASES = [
  { id: 'b1', name: 'Premium Cin', type: 'alcohol' },
  { id: 'b2', name: 'Rus Votkası', type: 'alcohol' },
  { id: 'b3', name: 'Esmer Rom', type: 'alcohol' },
  { id: 'b4', name: 'Ferah Tonik', type: 'mocktail' },
  { id: 'b5', name: 'Kızılcık Suyu', type: 'mocktail' },
];

const FRUITS = [
  { id: 'f1', name: 'Taze Çilek', icon: '🍓' },
  { id: 'f2', name: 'Orman Meyveleri', icon: '🫐' },
  { id: 'f3', name: 'Narenciye Dilimleri', icon: '🍋' },
  { id: 'f4', name: 'Egzotik Çarkıfelek', icon: '🥭' },
];

const SYRUPS = [
  { id: 's1', name: 'Mürver Çiçeği Özü' },
  { id: 's2', name: 'Madagaskar Vanilyası' },
  { id: 's3', name: 'Ateşli Tarçın' },
  { id: 's4', name: 'Klasik Karamel' },
];

const GARNISHES = [
  { id: 'g1', name: '24K Altın Yaprak' },
  { id: 'g2', name: 'Tütsülenmiş Biberiye' },
  { id: 'g3', name: 'Kurutulmuş Gül Yaprağı' },
  { id: 'g4', name: 'Himalaya Tuzu Çerçevesi' },
];

const MixologyBuilder: React.FC<MixologyProps> = ({ isOpen, onClose }) => {
  const { toggle } = useWishlist();
  const { t } = useLanguage();
  
  const [step, setStep] = useState(1);
  const [base, setBase] = useState<string | null>(null);
  const [fruit, setFruit] = useState<string | null>(null);
  const [syrup, setSyrup] = useState<string | null>(null);
  const [garnish, setGarnish] = useState<string | null>(null);
  const [signatureName, setSignatureName] = useState('');
  
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleFinish = () => {
    if (!signatureName) return;
    
    // Add custom cocktail to wishlist
    const customDrink = {
      id: `custom_${Date.now()}`,
      category: 'drinks' as const,
      subcategory: 'Mixology',
      name: signatureName,
      description: `Özel Karışım: ${BASES.find(b=>b.id===base)?.name}, ${FRUITS.find(f=>f.id===fruit)?.name}, ${SYRUPS.find(s=>s.id===syrup)?.name}, ${GARNISHES.find(g=>g.id===garnish)?.name}.`,
      price: 25, // Fixed premium price for custom cocktails
      tags: ['Custom', 'Signature'],
    };
    
    toggle(customDrink);
    if (navigator.vibrate) navigator.vibrate([20, 50, 20]);
    onClose();
    
    // Reset state after closing
    setTimeout(() => {
      setStep(1); setBase(null); setFruit(null); setSyrup(null); setGarnish(null); setSignatureName('');
    }, 500);
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return base !== null;
      case 2: return fruit !== null;
      case 3: return syrup !== null;
      case 4: return garnish !== null;
      case 5: return signatureName.trim().length > 0;
      default: return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060504]/90 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-sm bg-[#0c0a09]/95 backdrop-blur-2xl border border-gold-500/30 rounded-[2rem] shadow-[0_20px_60px_rgba(197,165,90,0.15)] overflow-hidden flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            {/* Ambient Background Glow inside modal */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2rem]">
               <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-gold-600/10 rounded-full blur-3xl mix-blend-screen" />
               <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-gold-400/10 rounded-full blur-3xl mix-blend-screen" />
            </div>

            {/* Header */}
            <div className="px-6 pt-8 pb-4 text-center relative z-10 border-b border-gold-500/10">
              <button
                onClick={onClose}
                aria-label="Kapat"
                className="absolute top-6 right-6 p-2 text-gold-500/50 hover:text-gold-400 transition-colors bg-gold-500/10 hover:bg-gold-500/20 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="w-12 h-12 rounded-full bg-gold-500/10 mx-auto flex items-center justify-center mb-4 border border-gold-500/20 shadow-[0_0_15px_rgba(197,165,90,0.15)]">
                <FlaskConical className="w-6 h-6 text-gold-500" />
              </div>
              
              <h2 className="font-display text-2xl text-white/95 mb-1">{t('alchemist_title')}</h2>
              <p className="font-body text-[9px] text-gold-600 tracking-[0.3em] uppercase font-bold">
                {t('alchemist_subtitle')}
              </p>
              
              {/* Progress */}
              <div className="flex gap-1 justify-center mt-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${step >= i ? 'w-6 bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_8px_rgba(197,165,90,0.6)]' : 'w-2 bg-gold-500/20'}`} />
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar relative z-10">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Base */}
                {step === 1 && (
                  <motion.div key="s1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <h3 className="font-display text-xl text-center text-white/90 mb-2">1. Baz Seçimi</h3>
                    {BASES.map(b => (
                      <button key={b.id} onClick={() => setBase(b.id)} className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all ${base === b.id ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_15px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50 hover:bg-[#1a1613]'}`}>
                        <span className={`font-body text-sm font-medium ${base === b.id ? 'text-gold-400' : 'text-white/70'}`}>{b.name}</span>
                        {base === b.id && <Check className="w-4 h-4 text-gold-500 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]" />}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Fruit */}
                {step === 2 && (
                  <motion.div key="s2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <h3 className="font-display text-xl text-center text-white/90 mb-2">2. Taze Notalar</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {FRUITS.map(f => (
                        <button key={f.id} onClick={() => setFruit(f.id)} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${fruit === f.id ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_15px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50 hover:bg-[#1a1613]'}`}>
                          <span className="text-2xl drop-shadow-md">{f.icon}</span>
                          <span className={`font-body text-xs font-medium text-center ${fruit === f.id ? 'text-gold-400' : 'text-white/70'}`}>{f.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Syrup */}
                {step === 3 && (
                  <motion.div key="s3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <h3 className="font-display text-xl text-center text-white/90 mb-2">3. Sihirli Özler</h3>
                    {SYRUPS.map(s => (
                      <button key={s.id} onClick={() => setSyrup(s.id)} className={`p-4 rounded-xl border text-left flex gap-3 items-center transition-all ${syrup === s.id ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_15px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50 hover:bg-[#1a1613]'}`}>
                        <Droplets className={`w-4 h-4 ${syrup === s.id ? 'text-gold-500' : 'text-gold-700/50'}`} />
                        <span className={`font-body text-sm font-medium flex-1 ${syrup === s.id ? 'text-gold-400' : 'text-white/70'}`}>{s.name}</span>
                        {syrup === s.id && <Check className="w-4 h-4 text-gold-500 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]" />}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 4: Garnish */}
                {step === 4 && (
                  <motion.div key="s4" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <h3 className="font-display text-xl text-center text-white/90 mb-2">4. Son Dokunuş</h3>
                    {GARNISHES.map(g => (
                      <button key={g.id} onClick={() => setGarnish(g.id)} className={`p-4 rounded-xl border text-left flex gap-3 items-center transition-all ${garnish === g.id ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_15px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50 hover:bg-[#1a1613]'}`}>
                        <Flame className={`w-4 h-4 ${garnish === g.id ? 'text-gold-500' : 'text-gold-700/50'}`} />
                        <span className={`font-body text-sm font-medium flex-1 ${garnish === g.id ? 'text-gold-400' : 'text-white/70'}`}>{g.name}</span>
                        {garnish === g.id && <Check className="w-4 h-4 text-gold-500 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]" />}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 5: Name & Finish */}
                {step === 5 && (
                  <motion.div key="s5" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-5 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/10 mx-auto flex items-center justify-center border border-gold-500/30 shadow-[0_0_30px_rgba(197,165,90,0.2)] mt-2">
                      <Sparkles className="w-8 h-8 text-gold-500 drop-shadow-[0_0_8px_rgba(197,165,90,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white/90 mb-2">{t('alchemist_name_title')}</h3>
                      <p className="font-body text-[10px] text-gold-500/70 uppercase tracking-widest">{t('alchemist_name_desc')}</p>
                    </div>
                    
                    <input 
                      type="text" 
                      value={signatureName}
                      onChange={e => setSignatureName(e.target.value)}
                      placeholder="Örn: Alex's Elixir"
                      className="w-full bg-[#13100e]/80 border border-gold-500/30 rounded-xl px-4 py-4 font-handwriting text-3xl text-center text-gold-400 placeholder-gold-500/20 focus:outline-none focus:border-gold-500 focus:bg-black/40 shadow-inner transition-all"
                    />
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer / Action */}
            <div className="px-6 pb-6 pt-4 relative z-10 border-t border-gold-500/10 bg-[#0c0a09]">
              {step < 5 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="w-full py-4 rounded-xl font-body text-xs tracking-[0.2em] uppercase font-bold text-white bg-gold-600 shadow-[0_0_20px_rgba(197,165,90,0.3)] disabled:opacity-30 disabled:shadow-none hover:bg-gold-500 hover:shadow-[0_0_30px_rgba(197,165,90,0.5)] transition-all"
                >
                  {t('alchemist_continue')}
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  disabled={!isStepValid()}
                  className="w-full py-4 rounded-xl font-body text-xs tracking-[0.2em] uppercase font-bold text-black bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_25px_rgba(197,165,90,0.4)] disabled:opacity-30 hover:shadow-[0_0_40px_rgba(197,165,90,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5 text-black" />
                  İmzanı At ve İste
                </button>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MixologyBuilder;
