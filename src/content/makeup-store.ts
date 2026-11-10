import type { SiteContent } from '../types.ts';

export const makeupStore: SiteContent = {
  id: 'makeup-store',
  name: { fr: 'Poudre & Rose', ar: 'بودرة ووردة' },
  schemaType: 'Store',
  tagline: { fr: 'Maquillage, pinceaux et conseils beauté', ar: 'مكياج وفرش ونصائح تجميل' },
  hero: {
    title: { fr: 'Le bon rose pour votre peau.', ar: 'اللون الوردي المناسب لبشرتكم.' },
    sub: {
      fr: 'Teintes testées sur toutes les carnations, pinceaux de qualité professionnelle et essais gratuits en boutique. Repartez avec le bon produit du premier coup.',
      ar: 'درجات مجرّبة على كل أنواع البشرة، وفرش بجودة احترافية، وتجارب مجانية في المتجر. تغادرون بالمنتج المناسب من أول مرة.',
    },
    cta: { fr: 'Réserver un essai', ar: 'احجزوا تجربة' },
  },
  heroImage: {
    alt: {
      fr: 'Produits de maquillage rangés sur un tissu rose : poudrier, rouges à lèvres, palette, fond de teint et pinceaux en bois',
      ar: 'منتجات مكياج مرتبة على قماش وردي: علبة بودرة وأحمر شفاه وباليت وكريم أساس وفرش خشبية',
    },
  },
  about: {
    title: { fr: 'Du conseil avant la vente', ar: 'النصيحة قبل البيع' },
    body: {
      fr: [
        'Poudre & Rose est une boutique de Rabat fondée par une maquilleuse professionnelle fatiguée d’entendre « cette teinte n’existe pas pour votre peau ».',
        'Ici, chaque fond de teint est proposé en vingt-quatre nuances, et nous les testons avec vous à la lumière du jour avant que vous n’achetiez.',
      ],
      ar: [
        '"بودرة ووردة" متجر بالرباط أسّسته خبيرة مكياج احترافية سئمت من عبارة "هذا اللون غير متوفر لبشرتك".',
        'هنا يُعرض كل كريم أساس بأربع وعشرين درجة، ونجرّبها معكم في ضوء النهار قبل أن تشتروا.',
      ],
    },
  },
  servicesTitle: { fr: 'Produits et services', ar: 'المنتجات والخدمات' },
  services: [
    {
      name: { fr: 'Fond de teint fluide (24 teintes)', ar: 'كريم أساس سائل (24 درجة)' },
      desc: {
        fr: 'Tenue 12 heures, finition naturelle, 30 ml.',
        ar: 'يدوم 12 ساعة بلمسة طبيعية، 30 مل.',
      },
      priceMad: 210,
    },
    {
      name: { fr: 'Rouge à lèvres crémeux', ar: 'أحمر شفاه كريمي' },
      desc: {
        fr: 'Douze coloris, du nude au bordeaux profond.',
        ar: 'اثنا عشر لونًا، من النود إلى العنابي الداكن.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Set de pinceaux visage (5 pièces)', ar: 'طقم فرش للوجه (5 قطع)' },
      desc: {
        fr: 'Manches en bois, poils synthétiques doux, pochette incluse.',
        ar: 'مقابض خشبية وشعيرات صناعية ناعمة مع حقيبة.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Palette yeux neutre', ar: 'باليت عيون بألوان محايدة' },
      desc: {
        fr: 'Quatre tons mats et satinés pour le jour comme le soir.',
        ar: 'أربع درجات مطفأة ولامعة للنهار والمساء.',
      },
      priceMad: 160,
    },
    {
      name: { fr: 'Séance de maquillage conseil', ar: 'جلسة مكياج واستشارة' },
      desc: {
        fr: 'Quarante-cinq minutes pour apprendre un look du quotidien, sur rendez-vous.',
        ar: 'خمس وأربعون دقيقة لتعلّم إطلالة يومية، بموعد مسبق.',
      },
      priceMad: 200,
    },
  ],
  highlightsTitle: { fr: 'Ce qui nous distingue', ar: 'ما يميزنا' },
  highlights: [
    { fr: '24 teintes de fond de teint', ar: '24 درجة لكريم الأساس' },
    { fr: 'Essais gratuits', ar: 'تجارب مجانية' },
    { fr: 'Produits non testés sur les animaux', ar: 'منتجات غير مُختبَرة على الحيوانات' },
    { fr: 'Conseils d’une maquilleuse pro', ar: 'نصائح خبيرة مكياج' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Enfin un fond de teint qui correspond à ma peau. On l’a trouvé en dix minutes.',
        ar: 'أخيرًا كريم أساس يناسب بشرتي. وجدناه في عشر دقائق.',
      },
      author: { fr: 'Khadija, Rabat', ar: 'خديجة، الرباط' },
    },
    {
      quote: {
        fr: 'La séance conseil m’a appris plus que dix tutoriels en ligne.',
        ar: 'جلسة الاستشارة علّمتني أكثر من عشرة دروس على الإنترنت.',
      },
      author: { fr: 'Rim, Salé', ar: 'ريم، سلا' },
    },
  ],
  contact: {
    phone: '+212 5 37 20 30 40',
    whatsapp: '212633445566',
    email: 'contact@example.com',
    address: {
      fr: '23 avenue Fal Ould Oumeir, Agdal, Rabat',
      ar: '23 شارع فال ولد عمير، أكدال، الرباط',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 20h', 'Dimanche : 14h – 19h'],
      ar: ['الاثنين – السبت: 10:00 – 20:00', 'الأحد: 14:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite réserver un essai fond de teint. Quand êtes-vous disponibles ?',
      ar: 'السلام عليكم، أرغب في حجز تجربة كريم أساس. متى تكونون متاحين؟',
    },
  },
};
