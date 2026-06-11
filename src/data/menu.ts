export type MenuCategory = 'shisha' | 'drinks' | 'food' | 'kombis';

export interface MenuItem {
  id: string;
  name: string | Record<string, string>;
  price: number;
  description: string | Record<string, string>;
  category: MenuCategory;
  subcategory?: string;
  isSignature?: boolean;
  imageUrl?: string;
  tags?: string[]; // For quiz matching
  includes?: string[]; // For combinations
  badge?: string | Record<string, string>; // Small badge (e.g. "BELIEBT", "TOP DEAL")
  intensity?: 1 | 2 | 3 | 4 | 5; // Strength/intensity rating for Shishas (1 = Hafif, 5 = Çok Ağır)
  arModelUrl?: string; // Android/Web AR model (.glb)
  arIosModelUrl?: string; // iOS AR model (.usdz)
  themeColor?: string; // Hex color for intelligent ambient lighting
  flavorProfile?: {
    sweetness: number; // 0-100
    sourness: number;  // 0-100
    freshness: number; // 0-100
    strength: number;  // 0-100
  };
}

export const menuData: MenuItem[] = [
    // --- Hookah / Shisha ---
  {
    id: 's1',
    name: { DE: 'Doppel Apfel', EN: 'Double Apple', TR: 'Çift Elma' },
    price: 16.90,
    description: { 
      DE: 'Ein klassischer Favorit! Der intensive Geschmack von saftigen roten und grünen Äpfeln mit einer feinen Anis-Note. Perfekt für Liebhaber traditioneller Shisha Aromen.', 
      EN: 'A classic favorite! The intense taste of juicy red and green apples with a fine anise note. Perfect for lovers of traditional shisha flavors.', 
      TR: 'Klasik bir favori! Sulu kırmızı ve yeşil elmaların ince bir anason notasıyla yoğun tadı. Geleneksel nargile aroması sevenler için mükemmel.' 
    },
    imageUrl: '/images/shisha/shisha_concept_apple.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['classic', 'intense'],
    intensity: 5,
  },
  {
    id: 's2',
    name: { DE: 'Apfel Minze', EN: 'Apple Mint', TR: 'Elma Nane' },
    price: 16.90,
    description: { 
      DE: 'Fruchtiger Apfel trifft auf erfrischende Minze - eine perfekte Kombination für einen belebenden Rauchgenuss.', 
      EN: 'Fruity apple meets refreshing mint - a perfect combination for an invigorating smoking experience.', 
      TR: 'Meyvemsi elma ferahlatıcı nane ile buluşuyor - canlandırıcı bir nargile keyfi için mükemmel bir kombinasyon.' 
    },
    imageUrl: '/images/shisha/shisha_concept_apple_mint.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['classic', 'fresh', 'fruity'],
    intensity: 4,
  },
  {
    id: 's3',
    name: { DE: 'Traube Minze', EN: 'Grape Mint', TR: 'Üzüm Nane' },
    price: 16.90,
    description: { 
      DE: 'Die Süße von saftigen Trauben vereint mit kühler Frische der Minze, ein absolutes Highlight für jeden Shisha-Liebhaber.', 
      EN: 'The sweetness of juicy grapes combined with the cool freshness of mint, an absolute highlight for every shisha lover.', 
      TR: 'Sulu üzümlerin tatlılığı, nanenin serinletici ferahlığıyla birleşiyor, her nargile sever için kesinlikle denenmesi gereken bir lezzet.' 
    },
    imageUrl: '/images/shisha/shisha_concept_grape_mint.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['classic', 'fresh', 'sweet'],
    intensity: 3,
  },
  {
    id: 's4',
    name: { DE: 'Black Nana', EN: 'Black Nana', TR: 'Black Nana' },
    price: 16.90,
    description: { 
      DE: 'Ein starker, intensiver Geschmack von schwarzen Trauben, kombiniert mit kühler Minz-Note. Perfekt für Liebhaber kräftiger und kühler Aromen.', 
      EN: 'A strong, intense taste of black grapes, combined with a cool mint note. Perfect for lovers of strong and cool flavors.', 
      TR: 'Siyah üzümlerin ferahlatıcı nane notasıyla harmanlanmış güçlü ve yoğun tadı. Keskin ve serinletici aroma sevenler için ideal.' 
    },
    imageUrl: '/images/shisha/shisha_concept_black_nana.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['intense', 'fresh', 'dark'],
    intensity: 4,
  },
  {
    id: 's5',
    name: { DE: 'Sternstaub', EN: 'Stardust', TR: 'Yıldız Tozu' },
    price: 16.90,
    description: { 
      DE: 'Ein faszinierender Mix aus süßen, fruchtigen Noten und der spritzigen Frische von Grapefruit. Ein Hauch von Exotik, der deine Sinne verzaubert.', 
      EN: 'A fascinating mix of sweet, fruity notes and the sparkling freshness of grapefruit. A touch of exoticism that enchants your senses.', 
      TR: 'Tatlı, meyvemsi notaların ve greyfurtun canlı ferahlığının büyüleyici bir karışımı. Duyularınızı büyüleyecek egzotik bir dokunuş.' 
    },
    imageUrl: '/images/shisha/shisha_concept_sternstaub.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['sweet', 'exotic', 'fruity'],
    intensity: 3,
  },
  {
    id: 's6',
    name: { DE: 'Luftschloss', EN: 'Castle in the Air', TR: 'Hayal Şatosu' },
    price: 16.90,
    description: { 
      DE: 'Ein erfrischender Geschmack von saftiger Wassermelone kombiniert mit einem Spritzer von Limette - klare, fruchtige und unglaublich erfrischend.', 
      EN: 'A refreshing taste of juicy watermelon combined with a splash of lime - clear, fruity and incredibly refreshing.', 
      TR: 'Sulu karpuzun ferahlatıcı tadı, bir miktar misket limonu ile harmanlanıyor - net, meyvemsi ve inanılmaz derecede ferahlatıcı.' 
    },
    imageUrl: '/images/shisha/shisha_concept_luftschloss.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['fresh', 'fruity', 'sweet'],
    intensity: 2,
  },
  {
    id: 's7',
    name: { DE: 'Limette Minze', EN: 'Lime Mint', TR: 'Misket Limonu Nane' },
    price: 16.90,
    description: { 
      DE: 'Die spritzige Frische von Limetten kombiniert mit der kühlen Note von Minze. Eine echte Erfrischung für heiße Tage.', 
      EN: 'The sparkling freshness of limes combined with the cool note of mint. A real refreshment for hot days.', 
      TR: 'Misket limonu ferahlığının, nanenin serinletici notasıyla birleşimi. Sıcak günler için gerçek bir ferahlık.' 
    },
    imageUrl: '/images/shisha/shisha_concept_lime_mint.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['fresh', 'citrus'],
    intensity: 3,
  },
  {
    id: 's8',
    name: { DE: 'Lemon Chill', EN: 'Lemon Chill', TR: 'Limon Chill' },
    price: 16.90,
    description: { 
      DE: 'Frischer Zitronengeschmack mit einem eisigen Abgang, der für einen angenehm kühlen Rauch sorgt.', 
      EN: 'Fresh lemon taste with an icy finish that provides a pleasantly cool smoke.', 
      TR: 'Rahatlatıcı, serin bir içim sağlayan, buz gibi bir bitişe sahip taze limon tadı.' 
    },
    imageUrl: '/images/shisha/shisha_concept_lemon_chill.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['fresh', 'citrus', 'ice'],
    intensity: 3,
  },
  {
    id: 's9',
    name: { DE: 'Blueberry', EN: 'Blueberry', TR: 'Yaban Mersini' },
    price: 16.90,
    description: { 
      DE: 'Ein harmonischer Mix aus saftigen Blaubeeren und süßen aromatischen Trauben - perfekt für ein fruchtig-erfrischendes Raucherlebnis.', 
      EN: 'A harmonious mix of juicy blueberries and sweet aromatic grapes - perfect for a fruity-refreshing smoking experience.', 
      TR: 'Sulu yaban mersinleri ve tatlı aromatik üzümlerin uyumlu karışımı - meyvemsi ve ferahlatıcı bir nargile deneyimi için mükemmel.' 
    },
    imageUrl: '/images/shisha/shisha_concept_blueberry.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['fruity', 'sweet'],
    intensity: 2,
  },
  {
    id: 's10',
    name: { DE: 'Nasty Girl', EN: 'Nasty Girl', TR: 'Nasty Girl' },
    price: 16.90,
    description: { 
      DE: 'Eine süße Kombination aus reifer Erdbeere und saftiger Wassermelone und ein fruchtiger Mix, der begeistert.', 
      EN: 'A sweet combination of ripe strawberry and juicy watermelon and a fruity mix that inspires.', 
      TR: 'Olgun çilek ve sulu karpuzun tatlı bir kombinasyonu; sizi büyüleyecek meyvemsi bir karışım.' 
    },
    imageUrl: '/images/shisha/shisha_concept_nasty_girl.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['sweet', 'fruity'],
    intensity: 2,
  },
  {
    id: 's11',
    name: { DE: 'Love 66', EN: 'Love 66', TR: 'Love 66' },
    price: 16.90,
    description: { 
      DE: 'Eine Mischung aus Wassermelone, Honigmelone, Minze und Passionsfrucht. Perfekte Balance aus süßen und blumigen Noten, sehr sanft.', 
      EN: 'A blend of watermelon, honeydew melon, mint and passion fruit. Perfect balance of sweet and floral notes, very smooth.', 
      TR: 'Karpuz, kavun, nane ve çarkıfelek meyvesinin bir karışımı. Tatlı ve çiçeksi notaların mükemmel dengesi, içimi oldukça yumuşak.' 
    },
    imageUrl: '/images/shisha/shisha_concept_love66.png',
    category: 'shisha',
    subcategory: 'Premium Blends',
    tags: ['sweet', 'fruity', 'exotic'],
    intensity: 2,
  },
  {
    id: 's12',
    name: { DE: 'Pfirsich Minze', EN: 'Peach Mint', TR: 'Şeftali Nane' },
    price: 16.90,
    description: { 
      DE: 'Der saftige Geschmack von reifen Pfirsichen, perfekt ergänzt durch die Frische von Minze - ein echter Klassiker.', 
      EN: 'The juicy taste of ripe peaches, perfectly complemented by the freshness of mint - a real classic.', 
      TR: 'Nanenin ferahlığıyla mükemmel bir şekilde tamamlanan olgun şeftalilerin sulu tadı - gerçek bir klasik.' 
    },
    imageUrl: '/images/shisha/shisha_concept_peach_mint.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['sweet', 'fresh', 'fruity'],
    intensity: 3,
  },
  {
    id: 's13',
    name: { DE: 'Falim Red', EN: 'Falim Red', TR: 'Falım Red' },
    price: 16.90,
    description: { 
      DE: 'Ein intensiver, fruchtiger Mix aus süßen Erdbeernoten und dem charakteristischen Aroma des türkischen Kaugummis. Orientalisches Flair.', 
      EN: 'An intense, fruity mix of sweet strawberry notes and the characteristic aroma of Turkish chewing gum. Oriental flair.', 
      TR: 'Tatlı çilek notaları ve Türk sakızının (Falım) karakteristik aromasının yoğun, meyveli bir karışımı. Oryantal bir esinti.' 
    },
    imageUrl: '/images/shisha/shisha_concept_falim_red.png',
    category: 'shisha',
    subcategory: 'Premium Blends',
    tags: ['sweet', 'fruity', 'exotic'],
    intensity: 3,
  },
  {
    id: 's14',
    name: { DE: 'Ice Kaktus', EN: 'Ice Cactus', TR: 'Buzlu Kaktüs' },
    price: 16.90,
    description: { 
      DE: 'Ein einzigartiger Mix aus fruchtigem Kaktus und einer kühlen, eisigen Note - für ein außergewöhnliches Geschmackserlebnis.', 
      EN: 'A unique mix of fruity cactus and a cool, icy note - for an extraordinary taste experience.', 
      TR: 'Meyvemsi kaktüs ve serin, buz gibi bir notanın eşsiz bir karışımı - sıra dışı bir lezzet deneyimi için.' 
    },
    imageUrl: '/images/shisha/shisha_concept_ice_kaktus.png',
    category: 'shisha',
    subcategory: 'Premium Blends',
    tags: ['fresh', 'ice', 'exotic'],
    intensity: 3,
  },
  {
    id: 's15',
    name: { DE: 'African Queen', EN: 'African Queen', TR: 'African Queen' },
    price: 16.90,
    description: { 
      DE: 'Eine exotische Mischung aus Waldbeeren, Trauben und weiteren erlesenen Früchten - süß, fruchtig und herrlich erfrischend.', 
      EN: 'An exotic mixture of wild berries, grapes and other exquisite fruits - sweet, fruity and wonderfully refreshing.', 
      TR: 'Orman meyveleri, üzüm ve diğer seçkin meyvelerin egzotik bir karışımı - tatlı, meyvemsi ve harika bir şekilde ferahlatıcı.' 
    },
    imageUrl: '/images/shisha/shisha_concept_african_queen.png',
    category: 'shisha',
    subcategory: 'Premium Blends',
    tags: ['sweet', 'fruity', 'exotic'],
    intensity: 3,
  },
  {
    id: 's16',
    name: { DE: 'Raffaello', EN: 'Raffaello', TR: 'Raffaello' },
    price: 16.90,
    description: { 
      DE: 'Der süße, cremige Geschmack von Kokos und Mandeln, inspiriert vom beliebten Dessert - ein Genuss, der auf der Zunge zergeht.', 
      EN: 'The sweet, creamy taste of coconut and almonds, inspired by the popular dessert - a treat that melts on the tongue.', 
      TR: 'Sevilen tatlıdan ilham alan Hindistan cevizi ve bademin tatlı, kremsi tadı - ağızda eriyen bir lezzet.' 
    },
    imageUrl: '/images/shisha/shisha_concept_raffaello.png',
    category: 'shisha',
    subcategory: 'Premium Blends',
    tags: ['sweet', 'creamy'],
    intensity: 2,
  },
  {
    id: 's17',
    name: { DE: 'Ice Apfel', EN: 'Ice Apple', TR: 'Buzlu Elma' },
    price: 16.90,
    description: { 
      DE: 'Knackige, frische Äpfel mit einer eisigen Note, die für ein angenehm kühles Rauchvergnügen sorgen.', 
      EN: 'Crisp, fresh apples with an icy note that provide a pleasantly cool smoking pleasure.', 
      TR: 'Keyifli ve serin bir içim sağlayan, buz gibi notasıyla çıtır, taze elmalar.' 
    },
    imageUrl: '/images/shisha/shisha_concept_ice_apfel.png',
    category: 'shisha',
    subcategory: 'Classic',
    tags: ['fresh', 'ice', 'fruity'],
    intensity: 3,
  },
  {
    id: 's18',
    name: { DE: 'Hürrem Spezial Hookah', EN: 'Hürrem Special Hookah', TR: 'Hürrem Özel Nargile' },
    price: 19.90,
    description: { 
      DE: 'Erlebe unsere exklusive Hürrem LED-Shisha mit dem hochwertigen Quasar Kopf. Wähle deinen individuellen Tabakmix aus zwei Sorten ganz nach deinem Geschmack.', 
      EN: 'Experience our exclusive Hürrem LED shisha with the high-quality Quasar bowl. Choose your individual tobacco mix from two varieties entirely according to your taste.', 
      TR: 'Özel Hürrem LED nargilemizi yüksek kaliteli Quasar lüle ile deneyimleyin. İki çeşit tütün ile tamamen damak zevkinize özel karışımınızı oluşturun.' 
    },
    imageUrl: '/images/shisha/shisha_concept_led.png',
    category: 'shisha',
    subcategory: 'Signature Blends',
    isSignature: true,
    tags: ['premium', 'exclusive'],
    arModelUrl: '/models/hookah.glb',
    arIosModelUrl: '',
    themeColor: '#FFD700',
    intensity: 3,
  },
  {
    id: 's19',
    name: { DE: 'Neuer Kopf', EN: 'New Bowl', TR: 'Yeni Lüle' },
    price: 10.00,
    description: { 
      DE: 'Frischer Tabakkopf für deine Shisha mit dem Geschmack deiner Wahl.', 
      EN: 'Fresh tobacco bowl for your shisha with the flavor of your choice.', 
      TR: 'Nargileniz için seçtiğiniz aroma ile hazırlanmış taze lüle.' 
    },
    imageUrl: '/images/shisha/shisha_concept_led.png',
    category: 'shisha',
    tags: ['extra'],
  },

    // --- Drinks / Getränke ---
  // Sommer-Specials
  {
    id: 'd1',
    name: { DE: 'GOLDEN MANGO MACCHIATTO P, A, H', EN: 'GOLDEN MANGO MACCHIATTO P, A, H', TR: 'GOLDEN MANGO MACCHIATTO P, A, H' },
    price: 7.50,
    description: { 
      DE: 'Die perfekte Fusion aus Orient und Okzident: Eine fruchtig-süße Basis aus goldenem Mangopüree, geschichtet mit eiskalter, cremiger Milch und abgerundet durch einen kräftigen, frisch gebrühten Espresso-Shot. Ein erfrischendes Geschmackserlebnis voller Energie.', 
      EN: 'The perfect fusion of Orient and Occident: A fruity-sweet base of golden mango puree, layered with ice-cold, creamy milk and rounded off by a strong, freshly brewed espresso shot. A refreshing taste experience full of energy.', 
      TR: 'Doğu ve Batı\'nın mükemmel füzyonu: Altın rengi mango püresinden oluşan meyvemsi tatlı bir taban, buz gibi, kremsi sütle katmanlanmış ve sert, taze demlenmiş bir espresso shot ile tamamlanmış. Enerji dolu serinletici bir lezzet deneyimi.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__golden_mango_macchiatto.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['sweet', 'creamy', 'coffee']
  },
  {
    id: 'd2',
    name: { DE: 'ICED STRAWBERRY VELVET 9, A, H', EN: 'ICED STRAWBERRY VELVET 9, A, H', TR: 'ICED STRAWBERRY VELVET 9, A, H' },
    price: 7.50,
    description: { 
      DE: 'Ein samtig-cremiger Sommertraum im Glas. Fruchtiges Erdbeer-Püree trifft auf sanfte, gekühlte Milch und die edle, herbe Note von feinstem Espresso. Intensiv, fruchtig und unbeschreiblich cremig.', 
      EN: 'A velvety, creamy summer dream in a glass. Fruity strawberry puree meets gentle, chilled milk and the noble, tart note of finest espresso. Intense, fruity and indescribably creamy.', 
      TR: 'Bardakta kadifemsi, kremsi bir yaz rüyası. Meyvemsi çilek püresi, hafif, soğutulmuş süt ve en ince espressonun asil, mayhoş notasıyla buluşuyor. Yoğun, meyveli ve tarif edilemez derecede kremsi.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__iced_strawberry_velvet.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['sweet', 'creamy', 'coffee']
  },
  {
    id: 'd3',
    name: { DE: 'MANGO MATCHA FUSION', EN: 'MANGO MATCHA FUSION', TR: 'MANGO MATCHA FUSION' },
    price: 7.50,
    description: { 
      DE: 'Erlebe die perfekte Balance aus fruchtig-süßer Mango und der cremigen Energie von feinstem Matcha.', 
      EN: 'Experience the perfect balance of fruity-sweet mango and the creamy energy of finest matcha.', 
      TR: 'Meyvemsi tatlı mango ile en ince matchanın kremsi enerjisinin mükemmel dengesini deneyimleyin.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__mango_matcha_fusion.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['sweet', 'creamy', 'matcha']
  },
  {
    id: 'd4',
    name: { DE: 'LILA MANGO TRAUM', EN: 'LILA MANGO TRAUM', TR: 'LILA MANGO TRAUM' },
    price: 7.50,
    description: { 
      DE: 'Sieht magisch aus, schmeckt auch so! Fruchtige Mango trifft auf die samtige, sanfte Süße von lila Süßkartoffel-Pulver. Der absolute Eyecatcher!', 
      EN: 'Looks magical, tastes like it too! Fruity mango meets the velvety, gentle sweetness of purple sweet potato powder. The absolute eye-catcher!', 
      TR: 'Sihirli görünüyor, tadı da öyle! Meyveli mango, mor tatlı patates tozunun kadifemsi, hafif tatlılığıyla buluşuyor. Göz alıcı bir lezzet!' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__lila_mango_traum.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['sweet', 'exotic']
  },
  {
    id: 'd5',
    name: { DE: 'STRAWBERRY MATCHA CHILL', EN: 'STRAWBERRY MATCHA CHILL', TR: 'STRAWBERRY MATCHA CHILL' },
    price: 7.50,
    description: { 
      DE: 'Die ultimative Erfrischung: Fruchtige Erdbeeren treffen auf eine intensiv-cremige Matcha-Milchstraße. Dein neuer Lieblings-Drink für die perfekte Auszeit.', 
      EN: 'The ultimate refreshment: Fruity strawberries meet an intensely creamy matcha milky way. Your new favorite drink for the perfect time out.', 
      TR: 'Nihai ferahlık: Meyveli çilekler yoğun kremsi bir matcha samanyoluyla buluşuyor. Mükemmel bir mola için yeni favori içeceğiniz.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__strawberry_matcha_chill.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['sweet', 'matcha', 'creamy']
  },
  {
    id: 'd6',
    name: { DE: 'Iced Latte G', EN: 'Iced Latte G', TR: 'Iced Latte G' },
    price: 6.90,
    description: { 
      DE: 'Kalt servierter Latte Macchiato - perfekt für heiße Tage.', 
      EN: 'Latte Macchiato served cold - perfect for hot days.', 
      TR: 'Soğuk servis edilen Latte Macchiato - sıcak günler için mükemmel.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__iced_latte.webp',
    category: 'drinks',
    subcategory: 'Sommer-Specials',
    tags: ['coffee', 'creamy', 'ice']
  },
  // Softdrinks
  {
    id: 'd7',
    name: { DE: 'Fritz Cola', EN: 'Fritz Cola', TR: 'Fritz Cola' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd8',
    name: { DE: 'Fritz Cola Zero', EN: 'Fritz Cola Zero', TR: 'Fritz Cola Zero' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd9',
    name: { DE: 'Coca-Cola', EN: 'Coca-Cola', TR: 'Coca-Cola' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__coca_cola.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd10',
    name: { DE: 'Coca-Cola Zero', EN: 'Coca-Cola Zero', TR: 'Coca-Cola Zero' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__coca_cola_zero.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd11',
    name: { DE: 'Fanta 1, 3', EN: 'Fanta 1, 3', TR: 'Fanta 1, 3' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__fanta.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd12',
    name: { DE: 'Sprite', EN: 'Sprite', TR: 'Sprite' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__sprite.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd13',
    name: { DE: 'Mineralwasser', EN: 'Mineral Water', TR: 'Maden Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,7l (8.20 €)', EN: '0.2l (3.20 €) | 0.7l (8.20 €)', TR: '0,2l (3.20 €) | 0,7l (8.20 €)' },
    imageUrl: '/images/menury_originals/softdrinks__mineralwasser.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd14',
    name: { DE: 'Churchill 0,2l', EN: 'Churchill 0.2l', TR: 'Churchill 0,2l' },
    price: 2.20,
    description: { 
      DE: 'Mineralwasser mit einem Hauch Salz und frischer Zitrone.', 
      EN: 'Mineral water with a hint of salt and fresh lemon.', 
      TR: 'Tuz ve taze limon dokunuşuyla maden suyu (Churchill).' 
    },
    imageUrl: '/images/menury_originals/softdrinks__churchill_02l.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd15',
    name: { DE: 'Stilles Wasser', EN: 'Still Water', TR: 'Su' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,7l (8.20 €)', EN: '0.2l (3.20 €) | 0.7l (8.20 €)', TR: '0,2l (3.20 €) | 0,7l (8.20 €)' },
    imageUrl: '/images/menury_originals/softdrinks__stilles_wasser.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd16',
    name: { DE: 'Schweppes Ginger Ale', EN: 'Schweppes Ginger Ale', TR: 'Schweppes Zencefilli Gazoz' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__schweppes_ginger_ale.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd17',
    name: { DE: 'Schweppes Wild Berry 1, 3, 9', EN: 'Schweppes Wild Berry 1, 3, 9', TR: 'Schweppes Wild Berry 1, 3, 9' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    imageUrl: '/images/menury_originals/softdrinks__schweppes_wild_berry.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd18',
    name: { DE: 'Rixdorfer Fassbrause 1, 3, 9', EN: 'Rixdorfer Fassbrause 1, 3, 9', TR: 'Rixdorfer Fassbrause 1, 3, 9' },
    price: 4.20,
    description: { DE: '0,33l', EN: '0.33l', TR: '0,33l' },
    imageUrl: '/images/menury_originals/softdrinks__rixdorfer_fassbrause.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd19',
    name: { DE: 'Club-Mate 1, 9', EN: 'Club-Mate 1, 9', TR: 'Club-Mate 1, 9' },
    price: 4.60,
    description: { DE: '0,33l', EN: '0.33l', TR: '0,33l' },
    imageUrl: '/images/menury_originals/softdrinks__club_mate.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd20',
    name: { DE: 'Elephant Bay', EN: 'Elephant Bay', TR: 'Elephant Bay' },
    price: 4.60,
    description: { 
      DE: '0,33l - Erhältlich in den Sorten: Granatapfel, Peach, Peach Zero, Mango-Ananas. Für die Sorten bitte unser Personal fragen.', 
      EN: '0.33l - Available in the following flavors: Pomegranate, Peach, Peach Zero, Mango-Pineapple. Please ask our staff for the varieties.', 
      TR: '0,33l - Nar, Şeftali, Şeftali Zero, Mango-Ananas çeşitleri mevcuttur. Çeşitler için lütfen personelimize danışın.' 
    },
    imageUrl: '/images/menury_originals/softdrinks__elephant_bay.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  // Mock Drinks retained
  {
    id: 'd21',
    name: { DE: 'Oreo Shake', EN: 'Oreo Shake', TR: 'Oreo Shake' },
    price: 7.90,
    description: { DE: 'Cremiger Milchshake mit echten Oreo-Keksen und Vanilleeis.', EN: 'Creamy milkshake with real Oreo cookies and vanilla ice cream.', TR: 'Gerçek Oreo bisküvileri ve vanilyalı dondurma ile kremsi milkshake.' },
    imageUrl: '/images/drinks/oreo_shake.png',
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy']
  },
  {
    id: 'd22',
    name: { DE: 'Nutella Shake', EN: 'Nutella Shake', TR: 'Nutella Shake' },
    price: 7.90,
    description: { DE: 'Schokoladiger Traum mit Nutella, Milch und Sahne.', EN: 'Chocolate dream with Nutella, milk and cream.', TR: 'Nutella, süt ve krema ile çikolata rüyası.' },
    imageUrl: '/images/drinks/nutella_shake.png',
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy']
  },
  {
    id: 'd23',
    name: { DE: 'Mango Lassi', EN: 'Mango Lassi', TR: 'Mango Lassi' },
    price: 6.90,
    description: { DE: 'Fruchtig-cremiger indischer Klassiker mit reifer Mango.', EN: 'Fruity-creamy Indian classic with ripe mango.', TR: 'Olgun mango ile meyvemsi-kremsi Hint klasiği.' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy', 'exotic']
  },
  {
    id: 'd24',
    name: { DE: 'Virgin Mojito', EN: 'Virgin Mojito', TR: 'Virgin Mojito' },
    price: 6.90,
    description: { DE: 'Frische Minze, Limette und Soda - erfrischend ohne Alkohol.', EN: 'Fresh mint, lime and soda - refreshing without alcohol.', TR: 'Taze nane, limon ve soda - alkolsüz serinletici.' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Cocktails',
    tags: ['fresh'],
    arModelUrl: '/models/hookah.glb', // Placeholder for drink model
  },
  {
    id: 'd25',
    name: { DE: 'Passion Fruit Cooler', EN: 'Passion Fruit Cooler', TR: 'Passion Fruit Cooler' },
    price: 7.50,
    description: { DE: 'Exotische Passionsfrucht mit Limette und Crushed Ice.', EN: 'Exotic passion fruit with lime and crushed ice.', TR: 'Limon ve kırık buz ile egzotik çarkıfelek meyvesi.' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Cocktails',
    tags: ['fresh', 'fruity', 'exotic']
  },
  {
    id: 'd26',
    name: { DE: 'Türkischer Kaffee', EN: 'Turkish Coffee', TR: 'Türk Kahvesi' },
    price: 4.50,
    description: { DE: 'Im Cezve zubereitet - stark und aromatisch.', EN: 'Prepared in a cezve - strong and aromatic.', TR: 'Cezvede hazırlanmış - sert ve aromatik.' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['intense', 'classic']
  },
  {
    id: 'd27',
    name: { DE: 'Cappuccino', EN: 'Cappuccino', TR: 'Cappuccino' },
    price: 4.00,
    description: { DE: 'Espresso mit aufgeschäumter Milch.', EN: 'Espresso with frothed milk.', TR: 'Köpüklü süt ile espresso.' },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__cappuccino.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['creamy']
  },


  
  // Säfte
  {
    id: 'd_juice_1',
    name: { DE: 'Orangensaft', EN: 'Orange Juice', TR: 'Portakal Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_2',
    name: { DE: 'Apfelsaft', EN: 'Apple Juice', TR: 'Elma Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_3',
    name: { DE: 'Maracujasaft', EN: 'Passion Fruit Juice', TR: 'Çarkıfelek Meyvesi Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_4',
    name: { DE: 'Mangosaft', EN: 'Mango Juice', TR: 'Mango Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_5',
    name: { DE: 'KiBa (Kirsch-Bananen-Saft)', EN: 'KiBa (Cherry-Banana Juice)', TR: 'KiBa (Vişne-Muz Suyu)' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_6',
    name: { DE: 'Kirschnektar', EN: 'Cherry Nectar', TR: 'Vişne Nektarı' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_7',
    name: { DE: 'Bananennektar', EN: 'Banana Nectar', TR: 'Muz Nektarı' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_8',
    name: { DE: 'Cranberrysaft', EN: 'Cranberry Juice', TR: 'Kızılcık Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_9',
    name: { DE: 'Ananassaft', EN: 'Pineapple Juice', TR: 'Ananas Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Säfte',
  },

  // Heiße Specials
  {
    id: 'd_hs_1',
    name: { DE: 'Chai Latte', EN: 'Chai Latte', TR: 'Chai Latte' },
    price: 4.50,
    description: { 
      DE: 'Aromatischer Gewürztee kombiniert mit Milch und einem cremigen Milchschaum - würzig und beruhigend.', 
      EN: 'Aromatic spiced tea combined with milk and creamy milk froth - spicy and soothing.', 
      TR: 'Süt ve kremsi süt köpüğü ile harmanlanmış aromatik baharat çayı - baharatlı ve rahatlatıcı.' 
    },
    imageUrl: '',
    category: 'drinks',
    tags: ['creamy', 'spicy']
  },
  {
    id: 'd_hs_2',
    name: { DE: 'Matcha Latte', EN: 'Matcha Latte', TR: 'Matcha Latte' },
    price: 4.90,
    description: { 
      DE: 'Feiner, japanischer Grüntee, cremig aufgeschäumt - für alle, die den besonderen Geschmack lieben.', 
      EN: 'Fine Japanese green tea, frothily creamed - for all who love a special taste.', 
      TR: 'İnce Japon yeşil çayı, kremsi köpüklü - özel bir tat sevenler için.' 
    },
    imageUrl: '/images/menury_originals/heisse_specials__matcha_latte.webp',
    category: 'drinks',
    tags: ['creamy', 'matcha']
  },
  {
    id: 'd_hs_3',
    name: { DE: 'White Chocolate', EN: 'White Chocolate', TR: 'Beyaz Çikolata' },
    price: 4.90,
    description: { 
      DE: 'Cremige weiße Schokolade, (AUF WUNSCH mit Sahne und zerkrüsselten Spekulatius) - perfekt für süße Genussmomente.', 
      EN: 'Creamy white chocolate (ON REQUEST with cream and crushed speculoos) - perfect for sweet moments of pleasure.', 
      TR: 'Kremsi beyaz çikolata (İSTEĞE BAĞLI olarak krema ve parçalanmış speculoos bisküvisi ile) - tatlı keyif anları için mükemmel.' 
    },
    imageUrl: '/images/menury_originals/heisse_specials__white_chocolate.webp',
    category: 'drinks',
    tags: ['creamy', 'sweet']
  },
  {
    id: 'd_hs_4',
    name: { DE: 'Dark Chocolate', EN: 'Dark Chocolate', TR: 'Bitter Çikolata' },
    price: 4.90,
    description: { 
      DE: 'Intensive dunkle Schokolade, (AUF WUNSCH mit Sahne) - ein Traum für Schokoladenliebhaber.', 
      EN: 'Intense dark chocolate (ON REQUEST with cream) - a dream for chocolate lovers.', 
      TR: 'Yoğun bitter çikolata (İSTEĞE BAĞLI olarak krema ile) - çikolata severler için bir rüya.' 
    },
    imageUrl: '/images/menury_originals/heisse_specials__dark_chocolate.webp',
    category: 'drinks',
    tags: ['intense', 'sweet']
  },
  {
    id: 'd_hs_5',
    name: { DE: 'Sahlep', EN: 'Sahlep', TR: 'Sahlep' },
    price: 4.50,
    description: { 
      DE: 'Ein traditionelles, cremiges Heißgetränk mit feiner Vanillenote und einem Hauch Zimt.', 
      EN: 'A traditional, creamy hot drink with a fine vanilla note and a hint of cinnamon.', 
      TR: 'İnce vanilya notası ve bir tutam tarçın ile geleneksel, kremsi bir sıcak içecek.' 
    },
    imageUrl: '/images/menury_originals/heisse_specials__sahlep.webp',
    category: 'drinks',
    tags: ['creamy', 'classic']
  },

  // Homemade Iced Tea
  {
    id: 'd_hit_1',
    name: { DE: 'Yuzu', EN: 'Yuzu', TR: 'Yuzu' },
    price: 6.90,
    description: { 
      DE: 'Ein erfrischender Eistee mit der feinherben Zitrusnote der asiatischen Yuzu-Frucht - ein wahrer Genuss für Liebhaber exotischer Aromen.', 
      EN: 'A refreshing iced tea with the fine tart citrus note of the Asian yuzu fruit - a real treat for lovers of exotic flavors.', 
      TR: 'Asya yuzu meyvesinin mayhoş narenciye notasıyla ferahlatıcı bir soğuk çay - egzotik aroma sevenler için gerçek bir lezzet.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['fresh', 'citrus']
  },
  {
    id: 'd_hit_2',
    name: { DE: 'Peach', EN: 'Peach', TR: 'Şeftali' },
    price: 6.90,
    description: { 
      DE: 'Fruchtiger Eistee mit dem süßen Geschmack von reifen Pfirsichen.', 
      EN: 'Fruity iced tea with the sweet taste of ripe peaches.', 
      TR: 'Olgun şeftalilerin tatlı lezzetiyle meyvemsi soğuk çay.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['sweet', 'fruity']
  },
  {
    id: 'd_hit_3',
    name: { DE: 'Wildberry', EN: 'Wildberry', TR: 'Orman Meyveli' },
    price: 6.90,
    description: { 
      DE: 'Aromatischer Mix aus Waldbeeren, perfekt für Beerenliebhaber.', 
      EN: 'Aromatic mix of wild berries, perfect for berry lovers.', 
      TR: 'Orman meyvelerinin aromatik karışımı, meyve tutkunları için mükemmel.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['fruity', 'sweet']
  },
  {
    id: 'd_hit_4',
    name: { DE: 'Sweet Melon', EN: 'Sweet Melon', TR: 'Sweet Melon' },
    price: 6.90,
    description: { 
      DE: 'Süßer und erfrischender Eistee mit der sommerlichen Note von Wassermelone.', 
      EN: 'Sweet and refreshing iced tea with the summery note of watermelon.', 
      TR: 'Karpuzun yaz esintisini taşıyan tatlı ve ferahlatıcı soğuk çay.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['sweet', 'fresh']
  },
  {
    id: 'd_hit_5',
    name: { DE: 'Acai Strawberry', EN: 'Acai Strawberry', TR: 'Acai Çilek' },
    price: 6.90,
    description: { 
      DE: 'Exotische Acai-Beeren kombiniert mit der Süße frischer Erdbeeren.', 
      EN: 'Exotic acai berries combined with the sweetness of fresh strawberries.', 
      TR: 'Egzotik acai meyvelerinin taze çileklerin tatlılığıyla birleşimi.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['fruity', 'exotic']
  },
  {
    id: 'd_hit_6',
    name: { DE: 'Cotton Candy', EN: 'Cotton Candy', TR: 'Pamuk Şeker' },
    price: 6.90,
    description: { 
      DE: 'Ein verspielter Eistee mit dem süßen Geschmack von Zuckerwatte - ein echtes Highlight.', 
      EN: 'A playful iced tea with the sweet taste of cotton candy - a real highlight.', 
      TR: 'Pamuk şekerin tatlı lezzetine sahip eğlenceli bir soğuk çay - gerçek bir favori.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['sweet']
  },
  {
    id: 'd_hit_7',
    name: { DE: 'Kaktus Feige', EN: 'Prickly Pear', TR: 'Frenk İnciri' },
    price: 6.90,
    description: { 
      DE: 'Ein exotischer Genuss mit dem einzigartigen Aroma von Kaktusfeigen.', 
      EN: 'An exotic treat with the unique aroma of prickly pears.', 
      TR: 'Frenk incirinin eşsiz aromasıyla egzotik bir lezzet.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
    tags: ['exotic', 'fresh']
  },

  // Fresh Homemade
  {
    id: 'd_fh_1',
    name: { DE: 'Hibiscus Orange Limo', EN: 'Hibiscus Orange Lemonade', TR: 'Hibiskus Portakal Limonata' },
    price: 6.90,
    description: { 
      DE: 'Orangensaft mit Hibiskustee und ein Hauch von Limettensaft - fruchtig und erfrischend.', 
      EN: 'Orange juice with hibiscus tea and a hint of lime juice - fruity and refreshing.', 
      TR: 'Hibiskus çayı ve bir dokunuş misket limonu suyu ile portakal suyu - meyvemsi ve ferahlatıcı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fresh', 'fruity', 'citrus']
  },
  {
    id: 'd_fh_2',
    name: { DE: '53', EN: '53', TR: '53' },
    price: 6.90,
    description: { 
      DE: 'Ein exotischer Mix aus Maracujasaft, Rohrzucker, Jasmintee und frischer Minze - pure Harmonie im Glas.', 
      EN: 'An exotic mix of passion fruit juice, cane sugar, jasmine tea and fresh mint - pure harmony in a glass.', 
      TR: 'Çarkıfelek meyvesi suyu, esmer şeker, yasemin çayı ve taze naneden oluşan egzotik bir karışım - bardakta saf uyum.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['exotic', 'fresh']
  },
  {
    id: 'd_fh_3',
    name: { DE: 'Blue Wonder', EN: 'Blue Wonder', TR: 'Mavi Mucize' },
    price: 6.90,
    description: { 
      DE: 'Jasmin- und blauer Blütentee treffen auf Aloe Vera und frische Blaubeeren - ein wahrer Genuss für die Sinne.', 
      EN: 'Jasmine and blue blossom tea meet aloe vera and fresh blueberries - a real treat for the senses.', 
      TR: 'Yasemin ve mavi çiçek çayı, aloe vera ve taze yaban mersini ile buluşuyor - duyularınız için gerçek bir şölen.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fresh', 'exotic']
  },
  {
    id: 'd_fh_4',
    name: { DE: 'Softy Gold G', EN: 'Softy Gold G', TR: 'Softy Gold G' },
    price: 6.90,
    description: { 
      DE: 'Cremige Kombination aus frischen Mangostücken, Joghurt, Zucker und Milch - tropisch und samtig.', 
      EN: 'Creamy combination of fresh mango pieces, yogurt, sugar and milk - tropical and velvety.', 
      TR: 'Taze mango parçaları, yoğurt, şeker ve sütün kremsi kombinasyonu - tropikal ve kadifemsi.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['creamy', 'sweet', 'exotic']
  },
  {
    id: 'd_fh_5',
    name: { DE: 'Aloe Vera', EN: 'Aloe Vera', TR: 'Aloe Vera' },
    price: 6.90,
    description: { 
      DE: 'Reiner Aloe-Vera-Drink für eine erfrischende und gesunde Auszeit.', 
      EN: 'Pure aloe vera drink for a refreshing and healthy break.', 
      TR: 'Ferahlatıcı ve sağlıklı bir mola için saf aloe vera içeceği.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fresh', 'healthy']
  },
  {
    id: 'd_fh_6',
    name: { DE: 'Berry Yakult Peach Limo G', EN: 'Berry Yakult Peach Lemonade G', TR: 'Orman Meyveli Yakult Şeftali Limonata G' },
    price: 7.40,
    description: { 
      DE: 'Frische Beeren, kombiniert mit Yakult und Whitepeach - eine spritzige und fruchtige Spezialität.', 
      EN: 'Fresh berries combined with Yakult and white peach - a tangy and fruity specialty.', 
      TR: 'Yakult ve beyaz şeftali ile birleştirilmiş taze meyveler - canlı ve meyvemsi bir spesiyal.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fruity', 'fresh']
  },
  {
    id: 'd_fh_7',
    name: { DE: 'Pink Lover', EN: 'Pink Lover', TR: 'Pink Lover' },
    price: 7.40,
    description: { 
      DE: 'Eine bezaubernde Mischung aus Mineralwasser, frischem Zitronensaft und Drachenfruchtpüree - perfekt für Liebhaber außergewöhnlicher Getränke.', 
      EN: 'An enchanting blend of mineral water, fresh lemon juice and dragon fruit puree - perfect for lovers of extraordinary drinks.', 
      TR: 'Maden suyu, taze limon suyu ve ejder meyvesi püresinin büyüleyici karışımı - sıra dışı içecekleri sevenler için mükemmel.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fresh', 'exotic']
  },
  {
    id: 'd_fh_8',
    name: { DE: 'Rosé G', EN: 'Rosé G', TR: 'Rosé G' },
    price: 7.40,
    description: { 
      DE: 'Frische Beeren, Kokosnussmilch, Holunderblütensirup, Hibiskustee.', 
      EN: 'Fresh berries, coconut milk, elderflower syrup, hibiscus tea.', 
      TR: 'Taze meyveler, Hindistan cevizi sütü, mürver çiçeği şurubu, hibiskus çayı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
    tags: ['fruity', 'creamy', 'sweet']
  },

  // --- Food / Yemekler ---
  {
    id: 'f1',
    name: { DE: 'Hummus', EN: 'Hummus', TR: 'Hummus' },
    price: 6.90,
    description: { DE: 'Cremiger Kichererbsen-Dip mit Olivenöl und Paprika.', EN: 'Cremiger Kichererbsen-Dip mit Olivenöl und Paprika.', TR: 'Cremiger Kichererbsen-Dip mit Olivenöl und Paprika.' },
    imageUrl: '/images/menury_originals/vorspeisen__hummus.webp',
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic', 'creamy']
  },
  {
    id: 'f2',
    name: { DE: 'Sigara Böreği', EN: 'Sigara Böreği', TR: 'Sigara Böreği' },
    price: 7.50,
    description: { DE: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.', EN: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.', TR: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.' },
    imageUrl: '',
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f3',
    name: { DE: 'Mercimek Çorbası', EN: 'Mercimek Çorbası', TR: 'Mercimek Çorbası' },
    price: 5.90,
    description: { DE: 'Türkische rote Linsensuppe mit Zitrone und Minze.', EN: 'Türkische rote Linsensuppe mit Zitrone und Minze.', TR: 'Türkische rote Linsensuppe mit Zitrone und Minze.' },
    imageUrl: '',
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic']
  },
  {
    id: 'f4',
    name: { DE: 'Falafel Teller', EN: 'Falafel Teller', TR: 'Falafel Teller' },
    price: 8.90,
    description: { DE: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.', EN: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.', TR: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.' },
    imageUrl: '/images/food/falafel_teller.png',
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['crispy']
  },
  {
    id: 'f5',
    name: { DE: 'Adana Kebab', EN: 'Adana Kebab', TR: 'Adana Kebab' },
    price: 14.90,
    description: { DE: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.', EN: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.', TR: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.' },
    imageUrl: '/images/food/adana_kebab.png',
    category: 'food',
    subcategory: 'Hauptgerichte',
    isSignature: true,
    tags: ['meat', 'intense'],
    arModelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Using valid external model for demo
    arIosModelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.usdz',
  },
  {
    id: 'f6',
    name: { DE: 'Chicken Wings', EN: 'Chicken Wings', TR: 'Chicken Wings' },
    price: 11.90,
    description: { DE: 'Knusprige Chicken Wings mit BBQ-Sauce und Cole Slaw.', EN: 'Knusprige Chicken Wings mit BBQ-Sauce und Cole Slaw.', TR: 'Knusprige Chicken Wings mit BBQ-Sauce und Cole Slaw.' },
    imageUrl: '/images/food/chicken_wings.png',
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['meat', 'crispy']
  },
  {
    id: 'f7',
    name: { DE: 'Beyti Sarma', EN: 'Beyti Sarma', TR: 'Beyti Sarma' },
    price: 15.90,
    description: { DE: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.', EN: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.', TR: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.' },
    imageUrl: '/images/food/beyti_sarma.png',
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['meat', 'creamy']
  },
  {
    id: 'f8',
    name: { DE: 'Pide Kaşarlı', EN: 'Pide Kaşarlı', TR: 'Pide Kaşarlı' },
    price: 10.90,
    description: { DE: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.', EN: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.', TR: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.' },
    imageUrl: '',
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f9',
    name: { DE: 'Lahmacun', EN: 'Lahmacun', TR: 'Lahmacun' },
    price: 7.90,
    description: { DE: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.', EN: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.', TR: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.' },
    imageUrl: '/images/food/lahmacun.png',
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f10',
    name: { DE: 'Pommes Frites', EN: 'Pommes Frites', TR: 'Pommes Frites' },
    price: 5.50,
    description: { DE: 'Knusprige Pommes mit Ketchup oder Mayo.', EN: 'Knusprige Pommes mit Ketchup oder Mayo.', TR: 'Knusprige Pommes mit Ketchup oder Mayo.' },
    imageUrl: '/images/food/pommes_frites.png',
    category: 'food',
    subcategory: 'Snacks',
    tags: ['crispy']
  },
  {
    id: 'f11',
    name: { DE: 'Nachos Supreme', EN: 'Nachos Supreme', TR: 'Nachos Supreme' },
    price: 8.90,
    description: { DE: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.', EN: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.', TR: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.' },
    imageUrl: '/images/food/nachos_supreme.png',
    category: 'food',
    subcategory: 'Snacks',
    tags: ['crispy']
  },
  {
    id: 'f12',
    name: { DE: 'Cheese Burger', EN: 'Cheese Burger', TR: 'Cheese Burger' },
    price: 9.90,
    description: { DE: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.', EN: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.', TR: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.' },
    imageUrl: '/images/food/cheese_burger.png',
    category: 'food',
    subcategory: 'Snacks',
    tags: ['meat']
  },

  // --- Kombis ---
  {
    id: 'k1',
    name: { DE: 'Kombi 1', EN: 'Kombi 1', TR: 'Kombi 1' },
    price: 19.90,
    description: { DE: 'Classic Shisha und ein erfrischender Softdrink.', EN: 'Classic Shisha und ein erfrischender Softdrink.', TR: 'Classic Shisha und ein erfrischender Softdrink.' },
    imageUrl: '',
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    includes: ['1× Classic Hookah', '1× Softdrink (0,33l)'],
    badge: { DE: 'BELIEBT', EN: 'POPULAR', TR: 'POPÜLER' }
  },
  {
    id: 'k2',
    name: { DE: 'Kombi 2', EN: 'Kombi 2', TR: 'Kombi 2' },
    price: 24.90,
    description: { DE: 'Classic Shisha kombiniert mit einem unserer leckeren Signature Shakes.', EN: 'Classic Shisha kombiniert mit einem unserer leckeren Signature Shakes.', TR: 'Classic Shisha kombiniert mit einem unserer leckeren Signature Shakes.' },
    imageUrl: '',
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    includes: ['1× Classic Hookah', '1× Signature Shake'],
    badge: { DE: 'TOP DEAL', EN: 'TOP DEAL', TR: 'TOP DEAL' }
  },
  {
    id: 'k3',
    name: { DE: 'Kombi 3', EN: 'Kombi 3', TR: 'Kombi 3' },
    price: 22.90,
    description: { DE: 'Classic Shisha, traditioneller türkischer Çay und eine köstliche Vorspeise nach Wahl.', EN: 'Classic Shisha, traditioneller türkischer Çay und eine köstliche Vorspeise nach Wahl.', TR: 'Classic Shisha, traditioneller türkischer Çay und eine köstliche Vorspeise nach Wahl.' },
    imageUrl: '',
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    includes: ['1× Classic Hookah', '1× Türkischer Tee', '1× Vorspeise nach Wahl']
  },
  {
    id: 'k4 – Friends',
    name: { DE: 'Kombi 4 – Friends', EN: 'Kombi 4 – Friends', TR: 'Kombi 4 – Friends' },
    price: 44.90,
    description: { DE: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.', EN: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.', TR: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.' },
    imageUrl: '',
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    isSignature: true,
    includes: ['2× Classic Hookah', '2× Softdrinks', '1× Nachos Supreme'],
    badge: { DE: 'FÜR 2', EN: 'FÜR 2', TR: 'FÜR 2' }
  },
  {
    id: 'k5 – Royal',
    name: { DE: 'Kombi 5 – Royal', EN: 'Kombi 5 – Royal', TR: 'Kombi 5 – Royal' },
    price: 54.90,
    description: { DE: 'Das ultimative VIP-Lounge-Erlebnis mit Premium Shishas, Shakes ve Vorspeisen.', EN: 'Das ultimative VIP-Lounge-Erlebnis mit Premium Shishas, Shakes ve Vorspeisen.', TR: 'Das ultimative VIP-Lounge-Erlebnis mit Premium Shishas, Shakes ve Vorspeisen.' },
    imageUrl: '',
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    isSignature: true,
    includes: ['2× Premium Hookah', '2× Signature Shakes', '1× Vorspeise nach Wahl'],
    badge: { DE: 'PREMIUM', EN: 'PREMIUM', TR: 'PREMIUM' }
  },
  // --- New Softdrinks ---
  {
    id: 'd_sd_moloko',
    name: { DE: 'Moloko', EN: 'Moloko', TR: 'Moloko' },
    price: 4.60,
    description: { 
      DE: '0,25l - Für alle Sorten bitte unser Personal fragen.\nZusatzstoffe: (1) mit Farbstoff, (2) mit Konservierungsstoffen, (3) mit Antioxidationsmitteln, (13) koffeinhaltig.', 
      EN: '0.25l - Please ask our staff for all varieties.\nAdditives: (1) with colorant, (2) with preservatives, (3) with antioxidants, (13) caffeinated.', 
      TR: '0,25l - Tüm çeşitler için lütfen personelimize danışın.\nKatkı maddeleri: (1) renklendirici, (2) koruyucu, (3) antioksidan, (13) kafein içerir.' 
    },
    imageUrl: '/images/menury_originals/softdrinks__moloko.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd_sd_redbull',
    name: { DE: 'RedBull', EN: 'RedBull', TR: 'RedBull' },
    price: 4.90,
    description: { 
      DE: 'Erfrischende Vielfalt mit dem vollen Energy-Kick – ob klassisch, zuckerfrei oder in fruchtigen Editionen wie Blaubeere, Kokos-Blaubeere, Kiwi-Apfel, Wassermelone, Grapefruit oder Fuji-Apfel. Für alle Sorten bitte unser Personal fragen.', 
      EN: 'Refreshing variety with the full energy kick – whether classic, sugar-free or in fruity editions like blueberry, coconut-blueberry, kiwi-apple, watermelon, grapefruit or Fuji-apple. Please ask our staff for all varieties.', 
      TR: 'Tam enerji veren ferahlatıcı çeşitlilik – klasik, şekersiz veya yaban mersini, hindistan cevizi-yaban mersini, kivi-elma, karpuz, greyfurt veya fuji-elma gibi meyveli çeşitleriyle. Tüm çeşitler için lütfen personelimize danışın.' 
    },
    imageUrl: '/images/menury_originals/energydrink__redbull.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd_sd_28black',
    name: { DE: '28 Black (Schwarze Dose)', EN: '28 Black', TR: '28 Black' },
    price: 4.90,
    description: { 
      DE: 'Fruchtig, erfrischend und ohne Taurin – erhältlich in Sorten wie Acai, Sour Mango-Kiwi oder Sour Cherry. Für alle Sorten bitte unser Personal fragen.', 
      EN: 'Fruity, refreshing and without taurine – available in flavors like Acai, Sour Mango-Kiwi or Sour Cherry. Please ask our staff for all varieties.', 
      TR: 'Meyvemsi, ferahlatıcı ve taurinsiz – Acai, Ekşi Mango-Kivi veya Ekşi Vişne gibi çeşitleri mevcuttur. Tüm çeşitler için lütfen personelimize danışın.' 
    },
    imageUrl: '/images/menury_originals/energydrink__28_black_schwarze_dose.webp',
    category: 'drinks',
    subcategory: 'Softdrinks',
  },

  // --- New Teas ---
  {
    id: 'd_tea_cay',
    name: { DE: 'Türkischer Cay groß', EN: 'Large Turkish Tea', TR: 'Büyük Türk Çayı' },
    price: 3.20,
    description: { 
      DE: 'Klassischer türkischer Schwarztee, kräftig im Geschmack und traditionell serviert.', 
      EN: 'Classic Turkish black tea, strong in taste and traditionally served.', 
      TR: 'Klasik Türk siyah çayı, yoğun lezzetli ve geleneksel sunumlu.' 
    },
    imageUrl: '/images/menury_originals/traditionell__tuerkischer_cay_gross.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['classic', 'intense']
  },
  {
    id: 'd_tea_kamille',
    name: { DE: 'BIO Kamille Tee mit Honig', EN: 'BIO Chamomile Tea with Honey', TR: 'Ballı BIO Papatya Çayı' },
    price: 4.50,
    description: { 
      DE: 'Milder Kräutertee mit beruhigender Wirkung und angenehmem, blumigem Aroma.', 
      EN: 'Mild herbal tea with a calming effect and pleasant, floral aroma.', 
      TR: 'Sakinleştirici etkisi ve hoş çiçeksi aromasıyla hafif bitki çayı.' 
    },
    imageUrl: '/images/menury_originals/kraeuter_und_bluetentees__bio_kamille_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'floral', 'sweet']
  },
  {
    id: 'd_tea_salbei',
    name: { DE: 'BIO Salbei Tee mit Honig', EN: 'BIO Sage Tea with Honey', TR: 'Ballı BIO Adaçayı' },
    price: 4.50,
    description: { 
      DE: 'Ein wohltuender Tee aus aromatischem Salbei, ideal für kalte Tage.', 
      EN: 'A soothing tea made from aromatic sage, ideal for cold days.', 
      TR: 'Aromatik adaçayından yapılan rahatlatıcı bir çay, soğuk günler için ideal.' 
    },
    imageUrl: '/images/menury_originals/kraeuter_und_bluetentees__bio_salbei_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'fresh']
  },
  {
    id: 'd_tea_sencha',
    name: { DE: 'BIO Japanischer Sencha Tee mit Honig', EN: 'BIO Japanese Sencha Tea with Honey', TR: 'Ballı BIO Japon Sencha Çayı' },
    price: 4.50,
    description: { 
      DE: 'Ein fein-herber Grüntee mit zarten Noten, direkt aus Japan.', 
      EN: 'A fine-tart green tea with delicate notes, directly from Japan.', 
      TR: 'Doğrudan Japonya\'dan, zarif notalara sahip hafif mayhoş yeşil çay.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__bio_japanischer_sencha_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'fresh']
  },
  {
    id: 'd_tea_hotbeauty',
    name: { DE: 'BIO Hot Beauty Tee mit Honig', EN: 'BIO Hot Beauty Tea with Honey', TR: 'Ballı BIO Hot Beauty Çayı' },
    price: 5.20,
    description: { 
      DE: 'Ein luxuriöser Tee aus Rosenknospen, getrockneten Longan-Früchten und roten Datteln – zart und exotisch.', 
      EN: 'A luxurious tea made from rose buds, dried longan fruits and red dates – delicate and exotic.', 
      TR: 'Gül tomurcukları, kurutulmuş longan meyveleri ve kırmızı hurmalardan yapılan lüks çay – zarif ve egzotik.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__bio_hot_beauty_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'floral', 'exotic']
  },
  {
    id: 'd_tea_fourseason',
    name: { DE: 'BIO Four Season Tee mit Honig', EN: 'BIO Four Season Tea with Honey', TR: 'Ballı BIO Four Season Çayı' },
    price: 5.20,
    description: { 
      DE: 'Eine würzige Mischung aus getrockneter Feige, Datteln, Nelke und Zitrone – perfekt für Genießer.', 
      EN: 'A spicy blend of dried fig, dates, cloves and lemon – perfect for connoisseurs.', 
      TR: 'Kuru incir, hurma, karanfil ve limonun baharatlı bir karışımı – gurmeler için mükemmel.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__bio_four_season_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'spicy']
  },
  {
    id: 'd_tea_bluedream',
    name: { DE: 'Blue Dream Tee mit Honig', EN: 'Blue Dream Tea with Honey', TR: 'Ballı Blue Dream Çayı' },
    price: 5.20,
    description: { 
      DE: 'Ein süßer Früchtetraum aus Blaubeeren, Honig und Süßholz, der sowohl fruchtig als auch wohltuend ist.', 
      EN: 'A sweet fruit dream made from blueberries, honey and licorice, which is both fruity and soothing.', 
      TR: 'Yaban mersini, bal ve meyankökünden oluşan, hem meyvemsi hem de rahatlatıcı tatlı bir meyve rüyası.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__blue_dream_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['sweet', 'fruity']
  },
  {
    id: 'd_tea_mango',
    name: { DE: 'Sweet Mango Tee mit Honig', EN: 'Sweet Mango Tea with Honey', TR: 'Ballı Sweet Mango Çayı' },
    price: 5.20,
    description: { 
      DE: 'Tropische Mangostücke, verfeinert mit Honig, Minze und einem Hauch Mangosaft – für einen exotischen Genussmoment.', 
      EN: 'Tropical mango pieces, refined with honey, mint and a hint of mango juice – for an exotic moment of pleasure.', 
      TR: 'Bal, nane ve bir miktar mango suyu ile tatlandırılmış tropikal mango parçaları – egzotik bir keyif anı için.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__sweet_mango_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['sweet', 'fruity', 'exotic']
  },
  {
    id: 'd_tea_apple',
    name: { DE: 'Orient Apple Tee mit Honig', EN: 'Orient Apple Tea with Honey', TR: 'Ballı Orient Apple Çayı' },
    price: 5.20,
    description: { 
      DE: 'Ein warmer Apfeltee mit Noten von Zimt, Nelken und einem Hauch Agavensirup – orientalischer Flair in jeder Tasse.', 
      EN: 'A warm apple tea with notes of cinnamon, cloves and a hint of agave syrup – oriental flair in every cup.', 
      TR: 'Tarçın, karanfil ve bir dokunuş agav şurubu notalarıyla sıcak bir elma çayı – her fincanda oryantal bir esinti.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__orient_apple_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['sweet', 'fruity', 'spicy']
  },
  {
    id: 'd_tea_blossom',
    name: { DE: 'BIO Blossom Tee mit Honig', EN: 'BIO Blossom Tea with Honey', TR: 'Ballı BIO Blossom Çayı' },
    price: 5.20,
    description: { 
      DE: 'Eine blumige Mischung aus Rosenblüten, Kirschblüten, Kornblumenblüten, Orangenblüten und Lavendel – ein wahres Blütenmeer.', 
      EN: 'A floral mixture of rose petals, cherry blossoms, cornflower petals, orange blossoms and lavender – a true sea of flowers.', 
      TR: 'Gül yaprakları, kiraz çiçekleri, peygamber çiçeği yaprakları, portakal çiçekleri ve lavantanın çiçeksi karışımı – adeta bir çiçek denizi.' 
    },
    imageUrl: '/images/menury_originals/exklusiv_and_aromatisch__bio_blossom_tee_mit_honig.webp',
    category: 'drinks',
    subcategory: 'Teas',
    tags: ['bio', 'floral', 'sweet']
  },

  // --- New Coffees ---
  {
    id: 'd_coffee_espresso',
    name: { DE: 'Espresso', EN: 'Espresso', TR: 'Espresso' },
    price: 2.80,
    description: { 
      DE: 'Ein kräftiger, italienischer Klassiker mit intensivem Aroma.', 
      EN: 'A strong, Italian classic with an intense aroma.', 
      TR: 'Yoğun aromalı, güçlü bir İtalyan klasiği.' 
    },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__espresso.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['intense', 'classic']
  },
  {
    id: 'd_coffee_crema',
    name: { DE: 'Cafe Crema', EN: 'Cafe Crema', TR: 'Cafe Crema' },
    price: 3.40,
    description: { 
      DE: 'Sanfter Kaffeegenuss mit einer cremigen Note.', 
      EN: 'Gentle coffee enjoyment with a creamy note.', 
      TR: 'Kremsi bir dokunuşla yumuşak kahve keyfi.' 
    },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__cafe_crema.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['creamy', 'classic']
  },
  {
    id: 'd_coffee_latte',
    name: { DE: 'Latte Macchiato', EN: 'Latte Macchiato', TR: 'Latte Macchiato' },
    price: 4.60,
    description: { 
      DE: 'Ein eleganter Genuss aus geschichtetem Espresso, Milch und Milchschaum', 
      EN: 'An elegant treat of layered espresso, milk and milk foam', 
      TR: 'Katmanlı espresso, süt ve süt köpüğünden oluşan zarif bir lezzet' 
    },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__latte_macchiato.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['creamy', 'classic']
  },
  {
    id: 'd_coffee_mokka',
    name: { DE: 'Türkischer Mokka', EN: 'Turkish Mokka', TR: 'Türk Kahvesi' },
    price: 3.60,
    description: { 
      DE: 'Kräftiger, aromatischer Kaffee nach traditioneller türkischer Art zubereitet.', 
      EN: 'Strong, aromatic coffee prepared in the traditional Turkish way.', 
      TR: 'Geleneksel Türk usulü hazırlanan sert, aromatik kahve.' 
    },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__tuerkischer_mokka.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['intense', 'classic']
  },
  // --- Fresh Homemade ---
  {
    id: 'd_fh_1',
    name: { DE: 'Hibiscus Orange Limo', EN: 'Hibiscus Orange Limo', TR: 'Hibiscus Orange Limo' },
    price: 6.90,
    description: { 
      DE: 'Orangensaft mit Hibiskustee und ein Hauch von Limettensaft - fruchtig und erfrischend.', 
      EN: 'Orange juice with hibiscus tea and a hint of lime juice - fruity and refreshing.', 
      TR: 'Portakal suyu, ebegümeci çayı ve bir dokunuş misket limonu - meyvemsi ve ferahlatıcı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_2',
    name: { DE: '53', EN: '53', TR: '53' },
    price: 6.90,
    description: { 
      DE: 'Ein exotischer Mix aus Maracujasaft, Rohrzucker, Jasmintee und frischer Minze - pure Harmonie im Glas.', 
      EN: 'An exotic mix of passion fruit juice, cane sugar, jasmine tea and fresh mint - pure harmony in a glass.', 
      TR: 'Çarkıfelek meyvesi suyu, esmer şeker, yasemin çayı ve taze nanenin egzotik karışımı - bardakta saf uyum.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_3',
    name: { DE: 'Blue Wonder', EN: 'Blue Wonder', TR: 'Blue Wonder' },
    price: 6.90,
    description: { 
      DE: 'Jasmin- und blauer Blütentee treffen auf Aloe Vera und frische Blaubeeren - ein wahrer Genuss für die Sinne.', 
      EN: 'Jasmine and blue blossom tea meet aloe vera and fresh blueberries - a real treat for the senses.', 
      TR: 'Yasemin ve mavi çiçek çayı, aloe vera ve taze yaban mersini ile buluşuyor - duyular için gerçek bir şölen.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_4',
    name: { DE: 'Softy Gold', EN: 'Softy Gold', TR: 'Softy Gold' },
    price: 6.90,
    description: { 
      DE: 'Cremige Kombination aus frischen Mangostückchen, Joghurt, Zucker und Milch - tropisch und samtig.', 
      EN: 'Creamy combination of fresh mango pieces, yogurt, sugar and milk - tropical and velvety.', 
      TR: 'Taze mango parçaları, yoğurt, şeker ve sütün kremsi kombinasyonu - tropikal ve kadifemsi.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_5',
    name: { DE: 'Aloe Vera', EN: 'Aloe Vera', TR: 'Aloe Vera' },
    price: 6.90,
    description: { 
      DE: 'Reiner Aloe-Vera-Drink für eine erfrischende und gesunde Auszeit.', 
      EN: 'Pure aloe vera drink for a refreshing and healthy break.', 
      TR: 'Ferahlatıcı ve sağlıklı bir mola için saf aloe vera içeceği.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_6',
    name: { DE: 'Berry Yakult Peach Limo', EN: 'Berry Yakult Peach Limo', TR: 'Berry Yakult Peach Limo' },
    price: 7.40,
    description: { 
      DE: 'Frische Beeren, kombiniert mit Yakult und Whitepeach - eine spritzige und fruchtige Spezialität.', 
      EN: 'Fresh berries combined with Yakult and white peach - a sparkling and fruity specialty.', 
      TR: 'Yakult ve beyaz şeftali ile birleştirilmiş taze meyveler - canlı ve meyveli bir spesiyalite.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_7',
    name: { DE: 'Pink Lover', EN: 'Pink Lover', TR: 'Pink Lover' },
    price: 7.40,
    description: { 
      DE: 'Eine bezaubernde Mischung aus Mineralwasser, frischem Zitronensaft und Drachenfruchtpüree.', 
      EN: 'An enchanting mixture of mineral water, fresh lemon juice and dragon fruit puree.', 
      TR: 'Maden suyu, taze limon suyu ve ejder meyvesi püresinin büyüleyici bir karışımı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },
  {
    id: 'd_fh_8',
    name: { DE: 'Rosé', EN: 'Rosé', TR: 'Rosé' },
    price: 7.40,
    description: { 
      DE: 'Frische Beeren, Kokosnussmilch, Holunderblütensirup, Hibiskustee.', 
      EN: 'Fresh berries, coconut milk, elderflower syrup, hibiscus tea.', 
      TR: 'Taze meyveler, hindistan cevizi sütü, mürver çiçeği şurubu, ebegümeci çayı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Fresh Homemade',
  },

  // --- Smoothies ---
  {
    id: 'd_sm_1',
    name: { DE: 'Very Berry', EN: 'Very Berry', TR: 'Very Berry' },
    price: 7.90,
    description: { 
      DE: 'Erdbeeren, Himbeeren, Beerenmix, Acai-Beeren, Kokosmilch, Gurke.', 
      EN: 'Strawberries, raspberries, mixed berries, acai berries, coconut milk, cucumber.', 
      TR: 'Çilek, ahududu, karışık orman meyveleri, acai meyvesi, hindistan cevizi sütü, salatalık.' 
    },
    imageUrl: '/images/menury_originals/smoothies__very_berry.webp',
    category: 'drinks',
    subcategory: 'Smoothies',
  },
  {
    id: 'd_sm_2',
    name: { DE: 'Green Goddess', EN: 'Green Goddess', TR: 'Green Goddess' },
    price: 7.90,
    description: { 
      DE: 'Mango, Mandelmilch, Spinat, Banane.', 
      EN: 'Mango, almond milk, spinach, banana.', 
      TR: 'Mango, badem sütü, ıspanak, muz.' 
    },
    imageUrl: '/images/menury_originals/smoothies__green_goddess.webp',
    category: 'drinks',
    subcategory: 'Smoothies',
  },
  {
    id: 'd_sm_3',
    name: { DE: 'Pink Punch', EN: 'Pink Punch', TR: 'Pink Punch' },
    price: 7.90,
    description: { 
      DE: 'Himbeere, Ananas, Kokosmilch, Banane, Mango.', 
      EN: 'Raspberry, pineapple, coconut milk, banana, mango.', 
      TR: 'Ahududu, ananas, hindistan cevizi sütü, muz, mango.' 
    },
    imageUrl: '/images/menury_originals/smoothies__pink_punch.webp',
    category: 'drinks',
    subcategory: 'Smoothies',
  },
  {
    id: 'd_sm_4',
    name: { DE: 'Orange Glow', EN: 'Orange Glow', TR: 'Orange Glow' },
    price: 7.90,
    description: { 
      DE: 'Karotten, Banane, Orangen, Mango, Maracuja.', 
      EN: 'Carrots, banana, oranges, mango, passion fruit.', 
      TR: 'Havuç, muz, portakal, mango, çarkıfelek meyvesi.' 
    },
    imageUrl: '/images/menury_originals/smoothies__orange_glow.webp',
    category: 'drinks',
    subcategory: 'Smoothies',
  },
  {
    id: 'd_sm_5',
    name: { DE: 'Pina Colada', EN: 'Pina Colada', TR: 'Pina Colada' },
    price: 7.90,
    description: { 
      DE: 'Banane, Kokoswasser, Kokosmilch, Ananas.', 
      EN: 'Banana, coconut water, coconut milk, pineapple.', 
      TR: 'Muz, hindistan cevizi suyu, hindistan cevizi sütü, ananas.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Smoothies',
  },

  // --- Homemade Iced Tea (Additional) ---
  {
    id: 'd_hit_6',
    name: { DE: 'Cotton Candy', EN: 'Cotton Candy', TR: 'Cotton Candy' },
    price: 6.90,
    description: { 
      DE: 'Ein verspielter Eistee mit dem süßen Geschmack von Zuckerwatte - ein echtes Highlight.', 
      EN: 'A playful iced tea with the sweet taste of cotton candy - a real highlight.', 
      TR: 'Pamuk şekerin tatlı lezzetiyle eğlenceli bir soğuk çay - tam bir hit.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
  },
  {
    id: 'd_hit_7',
    name: { DE: 'Kaktus Feige', EN: 'Cactus Fig', TR: 'Kaktüs İnciri' },
    price: 6.90,
    description: { 
      DE: 'Ein exotischer Genuss mit dem einzigartigen Aroma von Kaktusfeigen.', 
      EN: 'An exotic treat with the unique aroma of cactus figs.', 
      TR: 'Kaktüs incirinin eşsiz aromasıyla egzotik bir keyif.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Homemade Iced Tea',
  },
  // --- Missing Kaffeespezialitäten & Hot Drinks ---
  {
    id: 'd_coffee_cappuccino',
    name: { DE: 'Cappuccino', EN: 'Cappuccino', TR: 'Cappuccino' },
    price: 3.80,
    description: { 
      DE: 'Ein klassischer Espresso mit viel aufgeschäumter Milch und Milchschaumkrone.', 
      EN: 'A classic espresso with plenty of frothed milk and a milk foam crown.', 
      TR: 'Bol köpüklü süt ve süt köpüğü tacı ile klasik bir espresso.' 
    },
    imageUrl: '/images/menury_originals/kaffeespezialitaeten__cappuccino.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['creamy', 'classic']
  },
  {
    id: 'd_coffee_milchkaffee',
    name: { DE: 'Milchkaffee', EN: 'Café au Lait', TR: 'Sütlü Kahve' },
    price: 4.20,
    description: { 
      DE: 'Große Tasse Kaffee mit viel heißer Milch für einen sanften Start in den Tag.', 
      EN: 'Large cup of coffee with lots of hot milk for a gentle start to the day.', 
      TR: 'Güne yumuşak bir başlangıç için bol sıcak sütlü büyük fincan kahve.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['creamy', 'mild']
  },
  {
    id: 'd_coffee_icedlatte',
    name: { DE: 'Iced Latte', EN: 'Iced Latte', TR: 'Buzlu Latte' },
    price: 4.80,
    description: { 
      DE: 'Kalter Espresso mit eiskalter Milch und Eiswürfeln - die perfekte Erfrischung.', 
      EN: 'Cold espresso with ice-cold milk and ice cubes - the perfect refreshment.', 
      TR: 'Buz gibi süt ve buz küpleriyle soğuk espresso - mükemmel serinlik.' 
    },
    imageUrl: '/images/menury_originals/sommer_specials__iced_latte.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['cold', 'refreshing']
  },
  {
    id: 'd_coffee_icedcaramel',
    name: { DE: 'Iced Caramel Macchiato', EN: 'Iced Caramel Macchiato', TR: 'Buzlu Karamel Macchiato' },
    price: 5.20,
    description: { 
      DE: 'Iced Latte verfeinert mit Vanillesirup und einem großzügigen Karamell-Drizzle.', 
      EN: 'Iced Latte refined with vanilla syrup and a generous caramel drizzle.', 
      TR: 'Vanilya şurubu ve bol karamel sosu ile tatlandırılmış buzlu latte.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['cold', 'sweet']
  },
  {
    id: 'd_hot_chai',
    name: { DE: 'Chai Latte', EN: 'Chai Latte', TR: 'Chai Latte' },
    price: 4.50,
    description: { 
      DE: 'Würziger indischer Schwarztee mit Gewürzen, aufgegossen mit heißer, geschäumter Milch.', 
      EN: 'Spicy Indian black tea with spices, infused with hot, frothed milk.', 
      TR: 'Sıcak köpüklü sütle demlenmiş, baharatlı Hint siyah çayı.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['spicy', 'creamy', 'tea']
  },
  {
    id: 'd_hot_matcha',
    name: { DE: 'Matcha Latte', EN: 'Matcha Latte', TR: 'Matcha Latte' },
    price: 4.80,
    description: { 
      DE: 'Fein gemahlener japanischer Grüntee, cremig aufgeschlagen mit heißer Milch.', 
      EN: 'Finely ground Japanese green tea, whipped creamily with hot milk.', 
      TR: 'Sıcak sütle kremsi bir şekilde çırpılmış ince öğütülmüş Japon yeşil çayı.' 
    },
    imageUrl: '/images/menury_originals/heisse_specials__matcha_latte.webp',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['bio', 'creamy']
  },
  {
    id: 'd_hot_choco',
    name: { DE: 'Heiße Schokolade', EN: 'Hot Chocolate', TR: 'Sıcak Çikolata' },
    price: 4.20,
    description: { 
      DE: 'Cremige, heiße Schokolade aus feinster Kakaobohne - ein Trost für die Seele.', 
      EN: 'Creamy hot chocolate made from the finest cocoa beans - comfort for the soul.', 
      TR: 'En kaliteli kakao çekirdeklerinden yapılmış kremsi sıcak çikolata - ruhunuzu ısıtır.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['sweet', 'creamy']
  },
  {
    id: 'd_hot_sahlep',
    name: { DE: 'Sahlep', EN: 'Sahlep', TR: 'Salep' },
    price: 4.50,
    description: { 
      DE: 'Traditionelles heißes, cremiges Wintergetränk aus Orchideenwurzelmehl, garniert mit Zimt.', 
      EN: 'Traditional hot, creamy winter drink made from orchid root flour, garnished with cinnamon.', 
      TR: 'Tarçınla süslenmiş, orkide kökü tozundan yapılan geleneksel sıcak ve kremsi kış içeceği.' 
    },
    imageUrl: '',
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['traditional', 'sweet']
  }



];

// Quiz Questions mapped for tags
export const quizQuestions = [
  {
    id: 'q1',
    question: 'Hangi tat profili sana daha yakın?',
    options: [
      { text: 'Tatlı ve Meyveli 🍓', tag: 'sweet' },
      { text: 'Ferah ve Naneli ❄️', tag: 'fresh' },
      { text: 'Yoğun ve Karakterli ☕', tag: 'intense' },
    ]
  },
  {
    id: 'q2',
    question: 'Bugün ruh halin nasıl?',
    options: [
      { text: 'Egzotik maceralar arıyorum 🌴', tag: 'exotic' },
      { text: 'Klasiklerden şaşmam 🏛️', tag: 'classic' },
      { text: 'Yumuşak ve kremsi 🥥', tag: 'creamy' },
    ]
  }
];
