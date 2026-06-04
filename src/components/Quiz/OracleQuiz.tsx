import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Compass, Sparkles, Star, Leaf, Flame, Palmtree, Crown, Cloud } from 'lucide-react';
import { menuData, type MenuItem } from '../../data/menu';
import { useLanguage } from '../../i18n/LanguageContext';


/* ─── Synthetic sound ─────────────────────────────────────────── */
const triggerSound = (type: 'tick' | 'chime' | 'sweep' | 'ethereal') => {
  const isEnabled = window.localStorage.getItem('huerrem_sound_enabled') !== 'false';
  if (!isEnabled) return;
  try {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AC();
    const now = ctx.currentTime;
    if (type === 'tick') {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.setValueAtTime(1200, now); o.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      g.gain.setValueAtTime(0.02, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      o.start(now); o.stop(now + 0.1);
    } else if (type === 'ethereal') {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(432, now);
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.03, now + 0.5); g.gain.exponentialRampToValueAtTime(0.001, now + 2);
      o.connect(g); g.connect(ctx.destination);
      o.start(now); o.stop(now + 2.5);
    } else if (type === 'sweep') {
      const o = ctx.createOscillator(); const g = ctx.createGain(); const f = ctx.createBiquadFilter();
      o.type = 'triangle'; o.frequency.setValueAtTime(150, now); o.frequency.exponentialRampToValueAtTime(400, now + 0.5);
      f.type = 'lowpass'; f.frequency.setValueAtTime(200, now); f.frequency.exponentialRampToValueAtTime(2000, now + 0.4);
      g.gain.setValueAtTime(0.001, now); g.gain.linearRampToValueAtTime(0.02, now + 0.2); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      o.connect(f); f.connect(g); g.connect(ctx.destination);
      o.start(now); o.stop(now + 0.6);
    }
  } catch (err) {
    console.debug('Audio error', err);
  }
};

/* ─── Astrolabe Loading Animation ──────────────────────────────── */
const AstrolabeLoader = () => (
  <div className="relative w-40 h-40 flex items-center justify-center perspective-[1000px]">
    {/* Ambient Core Glow */}
    <motion.div 
      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-gold-500/20 rounded-full blur-2xl"
    />
    
    {/* Outer Ring 3D */}
    <motion.div
      animate={{ rotateZ: 360, rotateX: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-[1px] border-gold-500/40 rounded-full"
      style={{ transformStyle: 'preserve-3d' }}
    />
    
    {/* Middle Ring 3D */}
    <motion.div
      animate={{ rotateZ: -360, rotateY: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-3 border-2 border-dashed border-gold-400/50 rounded-full"
      style={{ transformStyle: 'preserve-3d' }}
    />
    
    {/* Inner Ring */}
    <motion.div
      animate={{ rotateZ: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-8 border border-gold-300/60 rounded-full border-t-transparent"
    />
    
    {/* Core Star */}
    <motion.div
      animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
      transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      className="absolute flex items-center justify-center text-gold-300 drop-shadow-[0_0_15px_rgba(197,165,90,0.8)]"
    >
      <Compass className="w-10 h-10" />
    </motion.div>
  </div>
);

/* ─── Main component ─────────────────────────────────────────────── */
const OracleQuiz: React.FC = () => {
  const { lang, t } = useLanguage();


  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<MenuItem[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const q1Title = t('q1') || "Bugün hangi aurayı yansıtıyorsun?";
  const q2Title = t('q2') || "Hangi dokunuş ruhunu dinlendirir?";
  
  const questions = [
    {
      question: q1Title,
      options: [
        { text: t('q1a') || "Tatlı ve Enerjik", tag: 'sweet', icon: <Star className="w-6 h-6" /> },
        { text: t('q1b') || "Ferah ve Doğal", tag: 'fresh', icon: <Leaf className="w-6 h-6" /> },
        { text: t('q1c') || "Yoğun ve İddialı", tag: 'intense', icon: <Flame className="w-6 h-6" /> },
      ],
    },
    {
      question: q2Title,
      options: [
        { text: t('q2a') || "Egzotik Uzak Diyarlar", tag: 'exotic', icon: <Palmtree className="w-6 h-6" /> },
        { text: t('q2b') || "Klasik ve Zamansız", tag: 'classic', icon: <Crown className="w-6 h-6" /> },
        { text: t('q2c') || "Kremamsı ve Yumuşak", tag: 'creamy', icon: <Cloud className="w-6 h-6" /> },
      ],
    },
  ];

  const handleOpen = () => {
    setIsOpen(true); setCurrentStep(0); setAnswers([]); setRecommendations([]); setSelectedOptionIndex(null);
    triggerSound('ethereal');
    if (navigator.vibrate) navigator.vibrate([10, 15]);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerSound('sweep');
  };

  const calculateRecommendations = (ans: string[]) => {
    const tagMap: Record<string, string[]> = {
      sweet:   ['shisha', 'drinks'],
      fresh:   ['shisha', 'drinks'],
      intense: ['shisha', 'food'],
      exotic:  ['shisha', 'food'],
      classic: ['shisha', 'drinks'],
      creamy:  ['drinks', 'food'],
    };
    const relevantCats = new Set(ans.flatMap(a => tagMap[a] ?? []));
    const scored = menuData.map(item => ({
      item,
      score: (item.isSignature ? 2 : 0) + (relevantCats.has(item.category) ? 1 : 0),
    }));
    scored.sort((a, b) => b.score - a.score);
    const seen = new Set<string>();
    const picks: MenuItem[] = [];
    for (const { item } of scored) {
      if (!seen.has(item.category) && picks.length < 3) {
        picks.push(item); seen.add(item.category);
      }
    }
    setRecommendations(picks);
  };

  const handleAnswer = (tag: string, index: number) => {
    triggerSound('tick');
    if (navigator.vibrate) navigator.vibrate(10);
    setSelectedOptionIndex(index);
    
    setTimeout(() => {
      const newAnswers = [...answers, tag];
      setAnswers(newAnswers);
      setSelectedOptionIndex(null);
      
      if (currentStep < questions.length - 1) {
        setCurrentStep(p => p + 1);
        triggerSound('sweep');
      } else {
        setCurrentStep(questions.length);
        setIsCalculating(true);
        triggerSound('ethereal');
        
        setTimeout(() => {
          calculateRecommendations(newAnswers);
          setIsCalculating(false);
          triggerSound('sweep');
          if (navigator.vibrate) navigator.vibrate([30, 10, 50]);
        }, 3000);
      }
    }, 500); // Wait for click animation
  };

  const progressPct = currentStep < questions.length
    ? (currentStep / questions.length) * 100
    : 100;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpen}
        className="relative w-full p-[1px] rounded-2xl group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0 opacity-0 group-hover:opacity-100 animate-sweep transition-opacity duration-700" />
        
        <div className="relative bg-[#0c0a09]/80 backdrop-blur-md rounded-2xl border border-gold-500/20 py-4 px-5 flex items-center justify-between transition-all group-hover:bg-[#110e0c]/90 group-hover:border-gold-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-500/5 group-hover:scale-110 transition-transform">
              <Compass className="w-4 h-4 text-gold-500 animate-[spin_10s_linear_infinite]" />
            </div>
            <div className="text-left">
              <h4 className="font-display text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-gold-500/90 group-hover:text-gold-400 transition-colors">
                {t('oracleTitle')}
              </h4>
              <p className="font-body text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-text-tertiary mt-1 opacity-70">
                {t('oracleDesc')}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gold-500/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#020101]/95 backdrop-blur-3xl"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: '100%', opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="relative w-full max-w-md h-[85vh] sm:h-[600px] sm:rounded-[32px] rounded-t-[32px] overflow-hidden z-10 bg-[#080605] border border-gold-500/20 shadow-[0_0_80px_rgba(197,165,90,0.1)] pb-[env(safe-area-inset-bottom)] flex flex-col"
            >
              
              {/* Ethereal Background Glow */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 mix-blend-screen">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-gold-600/20 rounded-full blur-[80px]" 
                 />
                 <motion.div 
                   animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px]" 
                 />
              </div>

              {/* Progress Aura Top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                  initial={{ width: '0%', x: '-100%' }}
                  animate={{ width: '100%', x: `${(progressPct - 100)}%` }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>

              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-30 p-2 rounded-full text-gold-500/50 hover:text-gold-300 hover:bg-gold-500/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-20 flex-1 flex flex-col px-6 pt-12 pb-8 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {currentStep < questions.length ? (
                    /* ─── Question Step ─── */
                    <motion.div
                      key={`q-${currentStep}`}
                      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 flex flex-col justify-center max-w-xs mx-auto w-full"
                    >
                      <div className="text-center mb-10">
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          transition={{ type: 'spring', delay: 0.2 }}
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/10 mb-6"
                        >
                          <Sparkles className="w-5 h-5 text-gold-400" />
                        </motion.div>
                        <h3 className="font-display text-xl sm:text-2xl text-gold-100 leading-relaxed tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          {questions[currentStep].question}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-4">
                        {questions[currentStep].options.map((opt, i) => {
                          const isSelected = selectedOptionIndex === i;
                          return (
                            <motion.button
                              key={i}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                              whileHover={{ scale: 1.02, backgroundColor: 'rgba(197,165,90,0.1)' }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleAnswer(opt.tag, i)}
                              className={`relative w-full overflow-hidden rounded-2xl border ${isSelected ? 'border-gold-400 bg-gold-500/20' : 'border-gold-500/10 bg-white/5'} p-4 flex items-center gap-5 transition-all duration-300 group`}
                            >
                              {/* Selection Flash */}
                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 3] }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-gold-400 mix-blend-screen pointer-events-none"
                                  />
                                )}
                              </AnimatePresence>

                              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isSelected ? 'bg-gold-500 text-black' : 'bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 group-hover:text-gold-300'}`}>
                                {opt.icon}
                              </div>
                              <span className={`font-body text-sm sm:text-base tracking-wide transition-colors ${isSelected ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'}`}>
                                {opt.text}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>

                  ) : isCalculating ? (
                    /* ─── Calculating Step (Astrolabe Animation) ─── */
                    <motion.div
                      key="calculating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center"
                    >
                      <AstrolabeLoader />
                      
                      <motion.h3 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="font-display text-lg tracking-[0.3em] text-gold-400 uppercase mt-12 mb-2"
                      >
                        {t('oracleReading')}
                      </motion.h3>
                      <p className="font-body text-xs tracking-widest text-text-tertiary uppercase opacity-60">
                        {t('oracleMatching')}
                      </p>
                    </motion.div>

                  ) : (
                    /* ─── Result Step ─── */
                    <motion.div
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="flex-1 flex flex-col"
                    >
                      <div className="text-center mb-8 mt-4">
                        <h3 className="font-display text-2xl tracking-[0.2em] text-gold-400 uppercase drop-shadow-[0_0_15px_rgba(197,165,90,0.5)]">
                          {t('oracleSelected')}
                        </h3>
                        <div className="w-16 h-[1px] bg-gold-500/30 mx-auto mt-4 mb-2" />
                        <p className="font-body text-[10px] tracking-widest text-text-tertiary uppercase">
                          {t('oracleProfile')}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
                        {recommendations.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.2, type: 'spring', damping: 20 }}
                            className="relative bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl p-4 flex gap-4 items-center overflow-hidden group"
                          >
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold-500/50" />
                            
                            {/* Item Thumbnail */}
                            <div className="w-16 h-16 rounded-lg bg-black/50 overflow-hidden relative shrink-0">
                              <img src={item.imageUrl} alt={typeof item.name === 'string' ? item.name : item.name[lang] || item.name['TR']} className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <p className="text-[9px] font-display uppercase tracking-widest text-gold-500/80 mb-1">
                                {item.category}
                              </p>
                              <h4 className="font-display text-base text-gold-100 truncate">
                                {typeof item.name === 'string' ? item.name : item.name[lang] || item.name['TR']}
                              </h4>
                              <p className="text-xs text-white/50 mt-1 truncate font-body">
                                {typeof item.description === 'string' ? item.description : item.description[lang] || item.description['TR']}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        onClick={handleClose}
                        className="mt-auto w-full max-w-sm mx-auto bg-white text-black py-4 rounded-xl font-display text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      >
                        {t('oracleThanks')}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OracleQuiz;
