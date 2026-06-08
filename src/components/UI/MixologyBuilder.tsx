import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FlaskConical, Droplets, Wind, GlassWater } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../i18n/LanguageContext';

interface MixologyProps {
  isOpen: boolean;
  onClose: () => void;
}

type MixType = 'cocktail' | 'hookah' | null;

const JUICES = [
  { id: 'j1', name: 'Orange' },
  { id: 'j2', name: 'Maracuja' },
  { id: 'j3', name: 'Mango' },
  { id: 'j4', name: 'Ananas' },
  { id: 'j5', name: 'Kirsche' },
  { id: 'j6', name: 'Cranberry' },
  { id: 'j7', name: 'Apfel' },
];

const SYRUPS = [
  { id: 's1', name: 'Kokos' },
  { id: 's2', name: 'Vanille' },
  { id: 's3', name: 'Karamell' },
  { id: 's4', name: 'Erdbeere' },
  { id: 's5', name: 'Lavendel' },
  { id: 's6', name: 'Heidelbeere' },
  { id: 's7', name: 'Limon Suyu' },
  { id: 's8', name: 'Limetten Saft' },
];

const TOBACCOS = [
  { id: 't1', name: 'Doppel Apfel' },
  { id: 't2', name: 'Traube Minze' },
  { id: 't3', name: 'Blaubeere' },
  { id: 't4', name: 'Pfirsich' },
  { id: 't5', name: 'Zitrone' },
  { id: 't6', name: 'Wassermelone' },
  { id: 't7', name: 'Maracuja' },
  { id: 't8', name: 'Ice' },
];

const MixologyBuilder: React.FC<MixologyProps> = ({ isOpen, onClose }) => {
  const { addItem } = useCart();
  const { t } = useLanguage();
  
  const [mixType, setMixType] = useState<MixType>(null);
  const [step, setStep] = useState(0);
  
  // Cocktail State
  const [selectedJuices, setSelectedJuices] = useState<string[]>([]);
  const [selectedSyrups, setSelectedSyrups] = useState<string[]>([]);
  const [withCream, setWithCream] = useState<boolean | null>(null);
  
  // Hookah State
  const [selectedTobaccos, setSelectedTobaccos] = useState<string[]>([]);

  // Common State
  const [signatureName, setSignatureName] = useState('');

  const handleJuiceToggle = (id: string) => {
    setSelectedJuices(prev => 
      prev.includes(id) 
        ? prev.filter(j => j !== id)
        : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const handleSyrupToggle = (id: string) => {
    setSelectedSyrups(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id)
        : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const handleTobaccoToggle = (id: string) => {
    setSelectedTobaccos(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const handleFinish = () => {
    if (!signatureName) return;
    
    if (mixType === 'cocktail') {
      const juiceNames = selectedJuices.map(id => JUICES.find(j => j.id === id)?.name).join(', ');
      const syrupNames = selectedSyrups.map(id => SYRUPS.find(s => s.id === id)?.name).join(', ');
      const creamText = withCream ? 'Mit Sahne' : 'Ohne Sahne';
      
      const customDrink = {
        id: `custom_cocktail_${Date.now()}`,
        category: 'drinks' as const,
        subcategory: 'Labor',
        name: signatureName,
        description: `Säfte: ${juiceNames}. Sirup/Asit: ${syrupNames}. ${creamText}.`,
        price: 10.90,
        tags: ['Custom', 'Labor'],
      };
      addItem(customDrink);
    } else {
      const tobaccoNames = selectedTobaccos.map(id => TOBACCOS.find(t => t.id === id)?.name).join(', ');
      
      const customHookah = {
        id: `custom_hookah_${Date.now()}`,
        category: 'shisha' as const,
        subcategory: 'LED Pfeife',
        name: signatureName,
        description: `Spezial LED Pfeife Mischung: ${tobaccoNames}.`,
        price: 21.90,
        tags: ['Custom', 'LED Pfeife'],
      };
      addItem(customHookah);
    }
    
    if (navigator.vibrate) navigator.vibrate([20, 50, 20]);
    onClose();
    
    setTimeout(() => {
      setMixType(null); setStep(0); setSelectedJuices([]); setSelectedSyrups([]); setWithCream(null); setSelectedTobaccos([]); setSignatureName('');
    }, 500);
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
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar relative z-10">
              <AnimatePresence mode="wait">
                
                {/* Step 0: Choose Path */}
                {step === 0 && (
                  <motion.div key="s0" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-4 py-4">
                    <button 
                      onClick={() => { setMixType('cocktail'); setStep(1); }}
                      className="p-6 rounded-2xl border border-gold-500/20 bg-gradient-to-br from-[#1a1613] to-[#0c0a09] hover:border-gold-500/50 transition-all group flex flex-col items-center gap-3"
                    >
                      <GlassWater className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <h3 className="font-display text-lg text-gold-200">{t('labor_cocktail_title')}</h3>
                        <p className="font-body text-xs text-white/50 mt-1">{t('labor_cocktail_desc')}</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => { setMixType('hookah'); setStep(1); }}
                      className="p-6 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-[#0a1618] to-[#050b0c] hover:border-cyan-400 transition-all group flex flex-col items-center gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                    >
                      {/* Ambient Neon Glow behind icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-fuchsia-500/10 rounded-full blur-xl group-hover:bg-fuchsia-400/20 transition-all" />
                      
                      <Wind className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-110 group-hover:text-cyan-300 transition-all relative z-10" />
                      
                      <div className="text-center relative z-10">
                        <h3 className="font-display text-lg text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">{t('labor_hookah_title')}</h3>
                        <p className="font-body text-xs text-cyan-200/50 mt-1">{t('labor_hookah_desc')}</p>
                      </div>
                    </button>
                  </motion.div>
                )}

                {/* --- COCKTAIL PATH --- */}
                {mixType === 'cocktail' && step === 1 && (
                  <motion.div key="c1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <div className="text-center mb-2">
                      <h3 className="font-display text-xl text-white/90">{t('labor_juices_title')}</h3>
                      <p className="text-xs text-gold-500/70">{t('labor_max_3_selection')} ({selectedJuices.length}/3)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {JUICES.map(j => (
                        <button 
                          key={j.id} 
                          onClick={() => handleJuiceToggle(j.id)} 
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedJuices.includes(j.id) ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_10px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50'}`}
                        >
                          <Droplets className={`w-4 h-4 ${selectedJuices.includes(j.id) ? 'text-gold-400' : 'text-white/30'}`} />
                          <span className={`font-body text-xs font-medium text-center ${selectedJuices.includes(j.id) ? 'text-gold-400' : 'text-white/70'}`}>{j.name}</span>
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setStep(2)}
                      disabled={selectedJuices.length === 0}
                      className="mt-4 w-full py-3 rounded-xl bg-gold-500 text-black font-bold uppercase tracking-wider disabled:opacity-50"
                    >
                      {t('labor_continue')}
                    </button>
                  </motion.div>
                )}

                {mixType === 'cocktail' && step === 2 && (
                  <motion.div key="c2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <div className="text-center mb-2">
                      <h3 className="font-display text-xl text-white/90">{t('labor_syrups_title')}</h3>
                      <p className="text-xs text-gold-500/70">{t('labor_max_2_selection')} ({selectedSyrups.length}/2)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {SYRUPS.map(s => (
                        <button 
                          key={s.id} 
                          onClick={() => handleSyrupToggle(s.id)} 
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedSyrups.includes(s.id) ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_10px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50'}`}
                        >
                          <span className={`font-body text-xs font-medium text-center ${selectedSyrups.includes(s.id) ? 'text-gold-400' : 'text-white/70'}`}>{s.name}</span>
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setStep(3)}
                      className="mt-4 w-full py-3 rounded-xl bg-gold-500 text-black font-bold uppercase tracking-wider"
                    >
                      {t('labor_continue')}
                    </button>
                  </motion.div>
                )}

                {mixType === 'cocktail' && step === 3 && (
                  <motion.div key="c3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-4 py-6">
                    <div className="text-center mb-2">
                      <h3 className="font-display text-xl text-white/90">{t('labor_cream_title')}</h3>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setWithCream(true)}
                        className={`flex-1 py-4 rounded-xl border transition-all ${withCream === true ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 bg-[#13100e]'}`}
                      >
                        <span className={`font-medium ${withCream === true ? 'text-gold-400' : 'text-white/70'}`}>{t('labor_with_cream')}</span>
                      </button>
                      <button 
                        onClick={() => setWithCream(false)}
                        className={`flex-1 py-4 rounded-xl border transition-all ${withCream === false ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 bg-[#13100e]'}`}
                      >
                        <span className={`font-medium ${withCream === false ? 'text-gold-400' : 'text-white/70'}`}>{t('labor_without_cream')}</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => setStep(4)}
                      disabled={withCream === null}
                      className="mt-4 w-full py-3 rounded-xl bg-gold-500 text-black font-bold uppercase tracking-wider disabled:opacity-50"
                    >
                      {t('labor_final_step')}
                    </button>
                  </motion.div>
                )}

                {/* --- HOOKAH PATH --- */}
                {mixType === 'hookah' && step === 1 && (
                  <motion.div key="h1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-3">
                    <div className="text-center mb-2">
                      <h3 className="font-display text-xl text-white/90">{t('labor_flavor_title')}</h3>
                      <p className="text-xs text-gold-500/70">{t('labor_max_2_selection')} ({selectedTobaccos.length}/2)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {TOBACCOS.map(t => (
                        <button 
                          key={t.id} 
                          onClick={() => handleTobaccoToggle(t.id)} 
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedTobaccos.includes(t.id) ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_10px_rgba(197,165,90,0.15)]' : 'border-gold-500/20 bg-[#13100e] hover:border-gold-500/50'}`}
                        >
                          <span className={`font-body text-xs font-medium text-center ${selectedTobaccos.includes(t.id) ? 'text-gold-400' : 'text-white/70'}`}>{t.name}</span>
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setStep(4)}
                      disabled={selectedTobaccos.length === 0}
                      className="mt-4 w-full py-3 rounded-xl bg-gold-500 text-black font-bold uppercase tracking-wider disabled:opacity-50"
                    >
                      {t('labor_final_step')}
                    </button>
                  </motion.div>
                )}

                {/* --- COMMON FINAL STEP --- */}
                {step === 4 && (
                  <motion.div key="final" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="flex flex-col gap-4 py-4">
                    <h3 className="font-display text-xl text-center text-white/90">{t('alchemist_name_title')}</h3>
                    <p className="text-center text-white/50 text-xs mb-2">{t('alchemist_name_desc')}</p>
                    
                    <input
                      type="text"
                      value={signatureName}
                      onChange={(e) => setSignatureName(e.target.value)}
                      placeholder={t('labor_name_placeholder') as string}
                      className="w-full bg-[#1a1613] border border-gold-500/30 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                    
                    <button 
                      onClick={handleFinish}
                      disabled={signatureName.trim().length === 0}
                      className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 text-black font-medium tracking-wider uppercase disabled:opacity-50 hover:opacity-90 flex items-center justify-center gap-2"
                    >
                      {t('btnAddToCart')} ({mixType === 'cocktail' ? '10.90€' : '21.90€'})
                    </button>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MixologyBuilder;
