import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, MessageSquare, X, ChevronRight, Crown } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const SpecialEventButton: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Form State
  const [eventType, setEventType] = useState('Doğum Günü');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp / Email message
    const subject = `Spezielle Wünsche / Rezervasyon Talebi: ${eventType}`;
    const body = `Merhaba, özel bir etkinlik için rezervasyon talebim var:\n\nEtkinlik Tipi: ${eventType}\nKişi Sayısı: ${guests}\nTarih: ${date || 'Belirtilmedi'}\nÖzel İstekler: ${notes || 'Yok'}\n\nLütfen benimle iletişime geçin.`;
    
    // Instead of showing a tacky whatsapp logo, we just redirect gracefully.
    // Use mailto: for this premium feel. (Could also use wa.me but mail is more formal)
    window.location.href = `mailto:info@huerrem.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  };

    return (
    <>
      {/* Trigger Button — Premium VIP Card Style */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="relative w-full p-[1px] rounded-2xl group overflow-hidden"
      >
        {/* Animated glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0 opacity-0 group-hover:opacity-100 animate-sweep transition-opacity duration-700" />
        
        {/* Button Inner */}
        <div className="relative bg-[#0c0a09]/80 backdrop-blur-md rounded-2xl border border-gold-500/20 py-4 px-5 flex items-center justify-between transition-all group-hover:bg-[#110e0c]/90 group-hover:border-gold-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-500/5 group-hover:scale-110 transition-transform">
              <Crown className="w-4 h-4 text-gold-500" />
            </div>
            <div className="text-left">
              <h4 className="font-display text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-gold-500/90 group-hover:text-gold-400 transition-colors">
                {t('specialEvent')}
              </h4>
              <p className="font-body text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-text-tertiary mt-1 opacity-70">
                {t('specialEventDesc')}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gold-500/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#060504]/90 backdrop-blur-3xl"
            />
            
            {/* Modal Body - Bottom Sheet */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm rounded-t-[32px] sm:rounded-[32px] bg-[#0c0a09]/95 border border-gold-500/30 shadow-[0_0_60px_rgba(197,165,90,0.15)] overflow-hidden backdrop-blur-2xl pb-[env(safe-area-inset-bottom)]"
            >
              {/* Header */}
              <div className="px-6 pt-8 pb-6 border-b border-gold-500/20 text-center relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gold-500/50 hover:text-gold-400 hover:bg-gold-500/10 rounded-full transition-colors"
                  aria-label="Kapat"
                  title="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-12 h-12 rounded-full bg-gold-500/10 mx-auto flex items-center justify-center mb-4 border border-gold-500/30">
                  <Crown className="w-6 h-6 text-gold-500 drop-shadow-[0_0_5px_rgba(197,165,90,0.8)]" />
                </div>
                <h3 className="font-display text-2xl text-white/95 mb-1 drop-shadow-sm">{t('specialEvent')}</h3>
                <p className="font-body text-[10px] text-gold-500/70 tracking-widest uppercase">
                  {t('specialEventDesc')}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-5">
                
                {/* Event Type */}
                <div>
                  <label className="block font-body text-[10px] tracking-widest uppercase text-gold-500/80 mb-2">
                    {t('eventType')}
                  </label>
                  <div className="relative">
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full appearance-none bg-[#13110E] border border-gold-500/20 rounded-lg px-4 py-3 font-body text-sm text-white/90 focus:outline-none focus:border-gold-500/50 focus:bg-[#1a1613] transition-all shadow-inner"
                      aria-label={t('eventType')}
                    >
                      <option value="Doğum Günü" className="bg-[#13110E] text-white/90">🎂 {t('eventBirthday')}</option>
                      <option value="İş Yemeği" className="bg-[#13110E] text-white/90">💼 {t('eventBusiness')}</option>
                      <option value="Yıl Dönümü" className="bg-[#13110E] text-white/90">🥂 {t('eventAnniversary')}</option>
                      <option value="Özel Kapatma" className="bg-[#13110E] text-white/90">🎪 {t('eventVIP')}</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-gold-500/50 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Date */}
                  <div className="flex-1">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-gold-500/80 mb-2">
                      {t('date')}
                    </label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3 w-4 h-4 text-gold-500/60" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#13110E] border border-gold-500/20 rounded-lg pl-9 pr-3 py-3 font-body text-sm text-white/90 focus:outline-none focus:border-gold-500/50 focus:bg-[#1a1613] transition-all shadow-inner [color-scheme:dark]"
                        required
                        aria-label={t('date')}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="w-24">
                    <label className="block font-body text-[10px] tracking-widest uppercase text-gold-500/80 mb-2">
                      {t('guests')}
                    </label>
                    <div className="relative flex items-center">
                      <Users className="absolute left-3 w-4 h-4 text-gold-500/60" />
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-[#13110E] border border-gold-500/20 rounded-lg pl-9 pr-3 py-3 font-body text-sm text-white/90 focus:outline-none focus:border-gold-500/50 focus:bg-[#1a1613] transition-all shadow-inner"
                        aria-label={t('guests')}
                        placeholder="2"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-body text-[10px] tracking-widest uppercase text-gold-500/80 mb-2">
                    {t('detailsReq')}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gold-500/60" />
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="..."
                      rows={3}
                      className="w-full bg-[#13110E] border border-gold-500/20 rounded-lg pl-9 pr-3 py-3 font-body text-sm text-white/90 focus:outline-none focus:border-gold-500/50 focus:bg-[#1a1613] transition-all shadow-inner resize-none placeholder:text-white/20"
                      aria-label={t('detailsReq')}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 rounded-xl font-body text-[11px] tracking-[0.2em] uppercase font-bold text-black bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_8px_20px_rgba(197,165,90,0.3)] hover:shadow-[0_8px_30px_rgba(197,165,90,0.5)] transition-all"
                >
                  {t('submitReq')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpecialEventButton;
