import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Flame, Receipt, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ServiceDial() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleAction = (action: string) => {
    // In a real app, this would trigger an API call or socket event
    console.log(`Action triggered: ${action}`);
    if (navigator.vibrate) navigator.vibrate([10, 20, 10]);
    setIsOpen(false);
    
    // Simulate premium backend response (< 500ms)
    setTimeout(() => {
      const msg = action === 'waiter' ? 'Garson çağrıldı' : action === 'coals' ? 'Köz talebi iletildi' : 'Hesap istendi';
      setToastMessage(msg);
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
      setTimeout(() => setToastMessage(null), 3000);
    }, 400);
  };

  const toggleDial = () => {
    if (navigator.vibrate) navigator.vibrate(10);
    setIsOpen(!isOpen);
  };

  const actions = [
    { id: 'waiter', icon: Bell, label: t('serviceCallWaiter'), color: 'text-gold-600', bg: 'bg-gold-500/10' },
    { id: 'coals', icon: Flame, label: t('serviceRequestCoals'), color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'bill', icon: Receipt, label: t('serviceRequestBill'), color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
  ];

  return (
    <div className="fixed bottom-[6.5rem] right-4 z-45 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
            className="flex flex-col items-end gap-3 mb-4 pointer-events-auto"
          >
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: (actions.length - 1 - i) * 0.05 }}
                  onClick={() => handleAction(action.id)}
                  className="flex items-center gap-3 bg-[#1A1713]/85 backdrop-blur-xl border border-gold-500/25 py-2.5 px-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(197,165,90,0.15)] transition-all"
                >
                  <span className="font-display text-[11px] tracking-widest uppercase font-bold text-text-primary">
                    {action.label}
                  </span>
                  <div className={`w-8 h-8 rounded-full ${action.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${action.color}`} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleDial}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,165,90,0.3)] transition-all duration-300 pointer-events-auto relative z-50 ${
          isOpen ? 'bg-[#1A1713]/90 border border-gold-500/30 rotate-180 backdrop-blur-md' : 'bg-gradient-to-br from-gold-400 to-gold-600 hover:scale-105'
        }`}
        aria-label={t('serviceTitle')}
      >
        <div className="absolute inset-0 rounded-full border border-white/20" />
        {isOpen ? (
          <X className="w-6 h-6 text-gold-500" />
        ) : (
          <Bell className="w-6 h-6 text-white animate-icon-float" />
        )}
      </button>

      {/* Premium Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-0 z-[100] flex items-center gap-3 bg-[#1A1713]/95 backdrop-blur-xl border border-gold-500/30 py-3 px-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(197,165,90,0.15)] pointer-events-none whitespace-nowrap"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
            <span className="font-display text-[10px] tracking-widest uppercase font-bold text-gold-500">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
