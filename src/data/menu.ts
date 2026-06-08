export type MenuCategory = 'shisha' | 'drinks' | 'food' | 'kombis';

export interface MenuItem {
  id: string;
  name: string | Record<string, string>;
  price: number;
  description: string | Record<string, string>;
  category: MenuCategory;
  subcategory: string;
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
    category: 'shisha',
    subcategory: 'Extras',
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
    imageUrl: '/images/specials/mango-matcha-fusion-transparent.png',
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
    imageUrl: '/images/specials/lila-mango-traum-transparent.png',
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
    imageUrl: '/images/specials/strawberry-matcha-chill-transparent.png',
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
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd8',
    name: { DE: 'Fritz Cola Zero', EN: 'Fritz Cola Zero', TR: 'Fritz Cola Zero' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd9',
    name: { DE: 'Coca-Cola', EN: 'Coca-Cola', TR: 'Coca-Cola' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd10',
    name: { DE: 'Coca-Cola Zero', EN: 'Coca-Cola Zero', TR: 'Coca-Cola Zero' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd11',
    name: { DE: 'Fanta 1, 3', EN: 'Fanta 1, 3', TR: 'Fanta 1, 3' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd12',
    name: { DE: 'Sprite', EN: 'Sprite', TR: 'Sprite' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd13',
    name: { DE: 'Mineralwasser', EN: 'Mineral Water', TR: 'Maden Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,7l (8.20 €)', EN: '0.2l (3.20 €) | 0.7l (8.20 €)', TR: '0,2l (3.20 €) | 0,7l (8.20 €)' },
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
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd15',
    name: { DE: 'Stilles Wasser', EN: 'Still Water', TR: 'Su' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,7l (8.20 €)', EN: '0.2l (3.20 €) | 0.7l (8.20 €)', TR: '0,2l (3.20 €) | 0,7l (8.20 €)' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd16',
    name: { DE: 'Schweppes Ginger Ale', EN: 'Schweppes Ginger Ale', TR: 'Schweppes Zencefilli Gazoz' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd17',
    name: { DE: 'Schweppes Wild Berry 1, 3, 9', EN: 'Schweppes Wild Berry 1, 3, 9', TR: 'Schweppes Wild Berry 1, 3, 9' },
    price: 3.60,
    description: { DE: '0,2l', EN: '0.2l', TR: '0,2l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd18',
    name: { DE: 'Rixdorfer Fassbrause 1, 3, 9', EN: 'Rixdorfer Fassbrause 1, 3, 9', TR: 'Rixdorfer Fassbrause 1, 3, 9' },
    price: 4.20,
    description: { DE: '0,33l', EN: '0.33l', TR: '0,33l' },
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  {
    id: 'd19',
    name: { DE: 'Club-Mate 1, 9', EN: 'Club-Mate 1, 9', TR: 'Club-Mate 1, 9' },
    price: 4.60,
    description: { DE: '0,33l', EN: '0.33l', TR: '0,33l' },
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
    category: 'drinks',
    subcategory: 'Softdrinks',
  },
  // Mock Drinks retained
  {
    id: 'd21',
    name: { DE: 'Oreo Shake', EN: 'Oreo Shake', TR: 'Oreo Shake' },
    price: 7.90,
    description: { DE: 'Cremiger Milchshake mit echten Oreo-Keksen und Vanilleeis.', EN: 'Creamy milkshake with real Oreo cookies and vanilla ice cream.', TR: 'Gerçek Oreo bisküvileri ve vanilyalı dondurma ile kremsi milkshake.' },
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy']
  },
  {
    id: 'd22',
    name: { DE: 'Nutella Shake', EN: 'Nutella Shake', TR: 'Nutella Shake' },
    price: 7.90,
    description: { DE: 'Schokoladiger Traum mit Nutella, Milch und Sahne.', EN: 'Chocolate dream with Nutella, milk and cream.', TR: 'Nutella, süt ve krema ile çikolata rüyası.' },
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy']
  },
  {
    id: 'd23',
    name: { DE: 'Mango Lassi', EN: 'Mango Lassi', TR: 'Mango Lassi' },
    price: 6.90,
    description: { DE: 'Fruchtig-cremiger indischer Klassiker mit reifer Mango.', EN: 'Fruity-creamy Indian classic with ripe mango.', TR: 'Olgun mango ile meyvemsi-kremsi Hint klasiği.' },
    category: 'drinks',
    subcategory: 'Shakes',
    tags: ['sweet', 'creamy', 'exotic']
  },
  {
    id: 'd24',
    name: { DE: 'Virgin Mojito', EN: 'Virgin Mojito', TR: 'Virgin Mojito' },
    price: 6.90,
    description: { DE: 'Frische Minze, Limette und Soda - erfrischend ohne Alkohol.', EN: 'Fresh mint, lime and soda - refreshing without alcohol.', TR: 'Taze nane, limon ve soda - alkolsüz serinletici.' },
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
    category: 'drinks',
    subcategory: 'Cocktails',
    tags: ['fresh', 'fruity', 'exotic']
  },
  {
    id: 'd26',
    name: { DE: 'Türkischer Kaffee', EN: 'Turkish Coffee', TR: 'Türk Kahvesi' },
    price: 4.50,
    description: { DE: 'Im Cezve zubereitet - stark und aromatisch.', EN: 'Prepared in a cezve - strong and aromatic.', TR: 'Cezvede hazırlanmış - sert ve aromatik.' },
    category: 'drinks',
    subcategory: 'Kaffeespezialitäten',
    tags: ['intense', 'classic']
  },
  {
    id: 'd27',
    name: { DE: 'Cappuccino', EN: 'Cappuccino', TR: 'Cappuccino' },
    price: 4.00,
    description: { DE: 'Espresso mit aufgeschäumter Milch.', EN: 'Espresso with frothed milk.', TR: 'Köpüklü süt ile espresso.' },
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
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_2',
    name: { DE: 'Apfelsaft', EN: 'Apple Juice', TR: 'Elma Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_3',
    name: { DE: 'Maracujasaft', EN: 'Passion Fruit Juice', TR: 'Çarkıfelek Meyvesi Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_4',
    name: { DE: 'Mangosaft', EN: 'Mango Juice', TR: 'Mango Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_5',
    name: { DE: 'KiBa (Kirsch-Bananen-Saft)', EN: 'KiBa (Cherry-Banana Juice)', TR: 'KiBa (Vişne-Muz Suyu)' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_6',
    name: { DE: 'Kirschnektar', EN: 'Cherry Nectar', TR: 'Vişne Nektarı' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_7',
    name: { DE: 'Bananennektar', EN: 'Banana Nectar', TR: 'Muz Nektarı' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_8',
    name: { DE: 'Cranberrysaft', EN: 'Cranberry Juice', TR: 'Kızılcık Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
    category: 'drinks',
    subcategory: 'Säfte',
  },
  {
    id: 'd_juice_9',
    name: { DE: 'Ananassaft', EN: 'Pineapple Juice', TR: 'Ananas Suyu' },
    price: 3.20,
    description: { DE: '0,2l (3.20 €) | 0,4l (4.90 €)', EN: '0.2l (3.20 €) | 0.4l (4.90 €)', TR: '0,2l (3.20 €) | 0,4l (4.90 €)' },
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
    category: 'drinks',
    subcategory: 'Heiße Specials',
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
    category: 'drinks',
    subcategory: 'Heiße Specials',
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
    category: 'drinks',
    subcategory: 'Heiße Specials',
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
    category: 'drinks',
    subcategory: 'Heiße Specials',
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
    category: 'drinks',
    subcategory: 'Heiße Specials',
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
    imageUrl: '/images/specials/dragonfruit-sunset-transparent.png',
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
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic', 'creamy']
  },
  {
    id: 'f2',
    name: { DE: 'Sigara Böreği', EN: 'Sigara Böreği', TR: 'Sigara Böreği' },
    price: 7.50,
    description: { DE: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.', EN: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.', TR: 'Knusprige Yufka-Röllchen gefüllt mit Schafskäse und Petersilie.' },
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f3',
    name: { DE: 'Mercimek Çorbası', EN: 'Mercimek Çorbası', TR: 'Mercimek Çorbası' },
    price: 5.90,
    description: { DE: 'Türkische rote Linsensuppe mit Zitrone und Minze.', EN: 'Türkische rote Linsensuppe mit Zitrone und Minze.', TR: 'Türkische rote Linsensuppe mit Zitrone und Minze.' },
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['classic']
  },
  {
    id: 'f4',
    name: { DE: 'Falafel Teller', EN: 'Falafel Teller', TR: 'Falafel Teller' },
    price: 8.90,
    description: { DE: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.', EN: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.', TR: 'Knusprige Kichererbsen-Bällchen mit Tahin-Sauce und Salat.' },
    category: 'food',
    subcategory: 'Vorspeisen',
    tags: ['crispy']
  },
  {
    id: 'f5',
    name: { DE: 'Adana Kebab', EN: 'Adana Kebab', TR: 'Adana Kebab' },
    price: 14.90,
    description: { DE: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.', EN: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.', TR: 'Würziger Hackfleischspieß vom Grill mit Reis und Salat.' },
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
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['meat', 'crispy']
  },
  {
    id: 'f7',
    name: { DE: 'Beyti Sarma', EN: 'Beyti Sarma', TR: 'Beyti Sarma' },
    price: 15.90,
    description: { DE: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.', EN: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.', TR: 'Gerollter Kebab in Lavash mit Tomaten-Butter-Sauce und Joghurt.' },
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['meat', 'creamy']
  },
  {
    id: 'f8',
    name: { DE: 'Pide Kaşarlı', EN: 'Pide Kaşarlı', TR: 'Pide Kaşarlı' },
    price: 10.90,
    description: { DE: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.', EN: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.', TR: 'Türkische Pizza mit Käse – knusprig aus dem Steinofen.' },
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f9',
    name: { DE: 'Lahmacun', EN: 'Lahmacun', TR: 'Lahmacun' },
    price: 7.90,
    description: { DE: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.', EN: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.', TR: 'Hauchdünner türkischer Fladen mit Hackfleisch und Kräutern.' },
    category: 'food',
    subcategory: 'Hauptgerichte',
    tags: ['classic', 'crispy']
  },
  {
    id: 'f10',
    name: { DE: 'Pommes Frites', EN: 'Pommes Frites', TR: 'Pommes Frites' },
    price: 5.50,
    description: { DE: 'Knusprige Pommes mit Ketchup oder Mayo.', EN: 'Knusprige Pommes mit Ketchup oder Mayo.', TR: 'Knusprige Pommes mit Ketchup oder Mayo.' },
    category: 'food',
    subcategory: 'Snacks',
    tags: ['crispy']
  },
  {
    id: 'f11',
    name: { DE: 'Nachos Supreme', EN: 'Nachos Supreme', TR: 'Nachos Supreme' },
    price: 8.90,
    description: { DE: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.', EN: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.', TR: 'Tortilla-Chips mit Käse, Jalapeños und Sour Cream.' },
    category: 'food',
    subcategory: 'Snacks',
    tags: ['crispy']
  },
  {
    id: 'f12',
    name: { DE: 'Cheese Burger', EN: 'Cheese Burger', TR: 'Cheese Burger' },
    price: 9.90,
    description: { DE: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.', EN: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.', TR: 'Saftiges Rindfleisch-Patty mit Cheddar, Salat und Sauce.' },
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
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    includes: ['1× Classic Hookah', '1× Türkischer Tee', '1× Vorspeise nach Wahl']
  },
  {
    id: 'k4 – Friends',
    name: { DE: 'Kombi 4 – Friends', EN: 'Kombi 4 – Friends', TR: 'Kombi 4 – Friends' },
    price: 44.90,
    description: { DE: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.', EN: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.', TR: 'Perfekt für zwei Personen. Zwei Classic Shishas, Softdrinks und reichlich Nachos.' },
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
    category: 'kombis',
    subcategory: 'Hürrem Kombis',
    isSignature: true,
    includes: ['2× Premium Hookah', '2× Signature Shakes', '1× Vorspeise nach Wahl'],
    badge: { DE: 'PREMIUM', EN: 'PREMIUM', TR: 'PREMIUM' }
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
