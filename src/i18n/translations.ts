export type Language = 'TR' | 'EN' | 'DE';

export const translations = {
  TR: {
    // Brand
    tagline: 'Premium Lounge · Berlin',
    estLine: 'EST. 2024 · HÜRREM SULTAN · BERLIN',
    vatLine: 'Tüm fiyatlara KDV dahildir · Tara · Tadına Bak',

    // Nav categories
    catShisha: 'Nargile',
    catDrinks: 'İçecek',
    catFood: 'Yemek',
    catKombis: 'Kombiler',

    // Subcategory
    subAll: 'TÜMÜ',

    // Search & filters
    searchPlaceholder: 'Ara...',
    filterSignature: 'İmza',
    filterFresh: 'Ferah',
    filterSweet: 'Tatlı',

    // Wishlist
    wishlistTitle: 'Seçtiklerim',
    wishlistItems: 'ürün',
    wishlistTotal: 'Toplam',
    wishlistClear: 'Temizle',
    wishlistEmpty: 'Henüz ürün seçilmedi',

    // Empty state
    emptyState: 'Bu kategoride henüz ürün bulunmuyor.',

    // Info dialog
    infoTitle: 'Hürrem Sultan Premium Lounge · Berlin',
    infoBody: 'Rezervasyon ve VIP Masa Hattı: +49 30 2234567\nAdres: Kurfürstendamm, Berlin',

    // Quiz
    quizLabel: 'USTURLAP · SORU',
    quizTitle: "Sultan'ın Lezzet Keşfi",
    quizSubtitle: 'Usturlap çarkı döndü ve saray mutfağından sizin için bu özel kombinasyonu seçti:',
    quizClose: 'Kapat ve Menüye Dön',
    quizCatShisha: 'Nargile',
    quizCatDrinks: 'İçecek',
    quizCatFood: 'Yemek',

    // Quiz questions
    q1: 'Hangi tat profili sana daha yakın?',
    q1a: 'Tatlı ve Meyveli 🍓',
    q1b: 'Ferah ve Naneli ❄️',
    q1c: 'Yoğun ve Karakterli ☕',
    q2: 'Bugün ruh halin nasıl?',
    q2a: 'Egzotik maceralar arıyorum 🌴',
    q2b: 'Klasiklerden şaşmam 🏛️',
    q2c: 'Yumuşak ve kremsi 🥥',

    // Intro
    introPremium: 'Premium Lounge',
    intro_tagline: 'Geleneklerin ve Geleceğin Buluşması',
    brand_sultan: 'Sultan',

    // Buttons & UI
    specialEvent: 'Özel İstekler',
    specialEventDesc: 'VIP Etkinlik & Organizasyon',
    eventType: 'Etkinlik Tipi',
    eventBirthday: 'Doğum Günü',
    eventBusiness: 'İş Yemeği',
    eventAnniversary: 'Yıl Dönümü',
    eventVIP: 'VIP Kapatma',
    date: 'Tarih',
    guests: 'Kişi Sayısı',
    detailsReq: 'Detaylar & İstekler',
    submitReq: 'Talebi İlet (İletişim)',
    oracleTitle: 'Lezzet Pusulası',
    oracleDesc: 'Ruhunuza Özel Seçimler',
    oracleReading: 'Ruhunuz Okunuyor...',
    oracleMatching: 'Auranıza en uygun lezzetler eşleştiriliyor.',
    oracleSelected: 'Sizin İçin Seçilenler',
    oracleProfile: 'Lezzet Profiliniz',
    oracleThanks: 'Teşekkürler, Kapat',

    btnAddToCart: 'Siparişe Ekle',
    btnRemoveFromCart: 'Sepetten Çıkar',

    intensityLabel: 'Sertlik:',
    intensityLight: 'Hafif',
    intensityMedium: 'Orta',
    intensityHeavy: 'Ağır',

    // Subcategories Translation Fallbacks
    'Classic': 'Klasik',
    'Premium Blends': 'Premium Harmanlar',
    'Russian Darkblend': 'Rus Darkblend',
    'Ice Bazooka': 'Buzlu Bazuka',
    'Softdrinks': 'Soğuk İçecekler',
    'Signature Shakes': 'İmza Shakeler',
    'Cocktails': 'Kokteyller',
    'Heiße Getränke': 'Sıcak İçecekler',
    'Vorspeisen': 'Başlangıçlar',
    'Hauptgerichte': 'Ana Yemekler',
    'Snacks': 'Atıştırmalıklar',
    'Hürrem Kombis': 'Hürrem Kombileri',
    
    // Alchemist
    alchemist_title: 'The Alchemist',
    alchemist_subtitle: 'Kendi İmzanı Yarat',
    alchemist_name_title: 'Eserini İsimlendir',
    alchemist_name_desc: 'Başyapıtın barmene iletilecek',
    alchemist_continue: 'Devam Et',

    // Services
    serviceTitle: 'Hizmetler',
    serviceCallWaiter: 'Garson Çağır',
    serviceRequestCoals: 'Köz İste',
    serviceRequestBill: 'Hesap İste',
  },

  EN: {
    tagline: 'Premium Lounge · Berlin',
    estLine: 'EST. 2024 · HÜRREM SULTAN · BERLIN',
    vatLine: 'All prices incl. VAT · Scan · Enjoy',

    catShisha: 'Shisha',
    catDrinks: 'Drinks',
    catFood: 'Food',
    catKombis: 'Combos',

    subAll: 'ALL',

    searchPlaceholder: 'Search...',
    filterSignature: 'Signature',
    filterFresh: 'Fresh',
    filterSweet: 'Sweet',

    wishlistTitle: 'My Selection',
    wishlistItems: 'items',
    wishlistTotal: 'Total',
    wishlistClear: 'Clear',
    wishlistEmpty: 'No items selected yet',

    emptyState: 'No items in this category yet.',

    infoTitle: 'Hürrem Sultan Premium Lounge · Berlin',
    infoBody: 'Reservations & VIP Table Line: +49 30 2234567\nAddress: Kurfürstendamm, Berlin',

    quizLabel: 'ASTROLABE · QUESTION',
    quizTitle: "Sultan's Taste Discovery",
    quizSubtitle: 'The astrolabe wheel has turned and selected this special combination from the palace kitchen for you:',
    quizClose: 'Close & Return to Menu',
    quizCatShisha: 'Shisha',
    quizCatDrinks: 'Drink',
    quizCatFood: 'Food',

    q1: 'Which flavor profile suits you?',
    q1a: 'Sweet & Fruity 🍓',
    q1b: 'Cool & Minty ❄️',
    q1c: 'Intense & Bold ☕',
    q2: "What's your mood today?",
    q2a: 'Looking for exotic adventures 🌴',
    q2b: 'I stick to classics 🏛️',
    q2c: 'Soft and creamy 🥥',

    introPremium: 'Premium Lounge',
    intro_tagline: 'The Meeting of Traditions and Future',
    brand_sultan: 'Sultan',

    specialEvent: 'Special Requests',
    specialEventDesc: 'VIP Events & Organization',
    eventType: 'Event Type',
    eventBirthday: 'Birthday',
    eventBusiness: 'Business Lunch',
    eventAnniversary: 'Anniversary',
    eventVIP: 'VIP Booking',
    date: 'Date',
    guests: 'Guests',
    detailsReq: 'Details & Requests',
    submitReq: 'Send Request',
    oracleTitle: 'Taste Compass',
    oracleDesc: 'Tailored to Your Soul',
    oracleReading: 'Reading your soul...',
    oracleMatching: 'Matching flavors to your aura.',
    oracleSelected: 'Selected for You',
    oracleProfile: 'Your Taste Profile',
    oracleThanks: 'Thank you, Close',

    btnAddToCart: 'Add to Order',
    btnRemoveFromCart: 'Remove',

    intensityLabel: 'Intensity:',
    intensityLight: 'Light',
    intensityMedium: 'Medium',
    intensityHeavy: 'Strong',

    'Classic': 'Classic',
    'Premium Blends': 'Premium Blends',
    'Russian Darkblend': 'Russian Darkblend',
    'Ice Bazooka': 'Ice Bazooka',
    'Softdrinks': 'Soft Drinks',
    'Signature Shakes': 'Signature Shakes',
    'Cocktails': 'Cocktails',
    'Heiße Getränke': 'Hot Drinks',
    'Vorspeisen': 'Starters',
    'Hauptgerichte': 'Main Courses',
    'Snacks': 'Snacks',
    'Hürrem Kombis': 'Hürrem Combos',

    alchemist_title: 'The Alchemist',
    alchemist_subtitle: 'Create Your Signature',
    alchemist_name_title: 'Name Your Creation',
    alchemist_name_desc: 'Your masterpiece will be sent to the bartender',
    alchemist_continue: 'Continue',

    // Services
    serviceTitle: 'Services',
    serviceCallWaiter: 'Call Waiter',
    serviceRequestCoals: 'Request Coals',
    serviceRequestBill: 'Request Bill',
  },

  DE: {
    tagline: 'Premium Lounge · Berlin',
    estLine: 'SEIT 2024 · HÜRREM SULTAN · BERLIN',
    vatLine: 'Alle Preise inkl. MwSt. · Scan · Genießen',

    catShisha: 'Shisha',
    catDrinks: 'Getränke',
    catFood: 'Speisen',
    catKombis: 'Kombis',

    subAll: 'ALLE',

    searchPlaceholder: 'Suchen...',
    filterSignature: 'Signature',
    filterFresh: 'Frisch',
    filterSweet: 'Süß',

    wishlistTitle: 'Meine Auswahl',
    wishlistItems: 'Artikel',
    wishlistTotal: 'Gesamt',
    wishlistClear: 'Leeren',
    wishlistEmpty: 'Noch keine Artikel ausgewählt',

    emptyState: 'Noch keine Artikel in dieser Kategorie.',

    infoTitle: 'Hürrem Sultan Premium Lounge · Berlin',
    infoBody: 'Reservierungen & VIP-Tischlinie: +49 30 2234567\nAdresse: Kurfürstendamm, Berlin',

    quizLabel: 'ASTROLAB · FRAGE',
    quizTitle: 'Sultans Geschmacksentdeckung',
    quizSubtitle: 'Das Astrolabrad hat sich gedreht und diese besondere Kombination aus der Palastküche für dich ausgewählt:',
    quizClose: 'Schließen & zurück zum Menü',
    quizCatShisha: 'Shisha',
    quizCatDrinks: 'Getränk',
    quizCatFood: 'Speise',

    q1: 'Welches Geschmacksprofil passt zu dir?',
    q1a: 'Süß & Fruchtig 🍓',
    q1b: 'Kühl & Minzig ❄️',
    q1c: 'Intensiv & Kräftig ☕',
    q2: 'Wie ist deine Stimmung heute?',
    q2a: 'Ich suche exotische Abenteuer 🌴',
    q2b: 'Ich bleibe bei Klassikern 🏛️',
    q2c: 'Sanft und cremig 🥥',

    introPremium: 'Premium Lounge',
    intro_tagline: 'Die Begegnung von Traditionen und Zukunft',
    brand_sultan: 'Sultan',

    specialEvent: 'Spezielle Wünsche',
    specialEventDesc: 'VIP Event & Organisation',
    eventType: 'Ereignistyp',
    eventBirthday: 'Geburtstag',
    eventBusiness: 'Geschäftsessen',
    eventAnniversary: 'Jubiläum',
    eventVIP: 'VIP Reservierung',
    date: 'Datum',
    guests: 'Gäste',
    detailsReq: 'Details & Wünsche',
    submitReq: 'Anfrage Senden',
    oracleTitle: 'Geschmackskompass',
    oracleDesc: 'Speziell für deine Seele',
    oracleReading: 'Deine Seele wird gelesen...',
    oracleMatching: 'Aromen werden auf deine Aura abgestimmt.',
    oracleSelected: 'Für dich ausgewählt',
    oracleProfile: 'Dein Geschmacksprofil',
    oracleThanks: 'Danke, Schließen',

    btnAddToCart: 'Zum Bestellschein',
    btnRemoveFromCart: 'Entfernen',

    intensityLabel: 'Stärke:',
    intensityLight: 'Leicht',
    intensityMedium: 'Mittel',
    intensityHeavy: 'Stark',

    'Classic': 'Klassisch',
    'Premium Blends': 'Premium Blends',
    'Russian Darkblend': 'Russian Darkblend',
    'Ice Bazooka': 'Ice Bazooka',
    'Softdrinks': 'Softdrinks',
    'Signature Shakes': 'Signature Shakes',
    'Cocktails': 'Cocktails',
    'Heiße Getränke': 'Heiße Getränke',
    'Vorspeisen': 'Vorspeisen',
    'Hauptgerichte': 'Hauptgerichte',
    'Snacks': 'Snacks',
    'Hürrem Kombis': 'Hürrem Kombis',

    alchemist_title: 'The Alchemist',
    alchemist_subtitle: 'Kreiere deine Signatur',
    alchemist_name_title: 'Benenne deine Kreation',
    alchemist_name_desc: 'Dein Meisterwerk wird an den Barkeeper gesendet',
    alchemist_continue: 'Weiter',

    // Services
    serviceTitle: 'Service',
    serviceCallWaiter: 'Kellner rufen',
    serviceRequestCoals: 'Kohle bestellen',
    serviceRequestBill: 'Rechnung bitte',
  },
} as const;

export type TranslationKey = keyof typeof translations['TR'];
