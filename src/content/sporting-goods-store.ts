import type { SiteContent } from '../types.ts';

export const sportingGoodsStore: SiteContent = {
  id: 'sporting-goods-store',
  name: { fr: 'Terrain Libre Sport', ar: 'ملعب حر للرياضة' },
  schemaType: 'SportingGoodsStore',
  tagline: { fr: 'Running, fitness, basket et sports collectifs', ar: 'جري ولياقة وكرة سلة ورياضات جماعية' },
  hero: {
    title: { fr: 'Équipez-vous, puis sortez jouer.', ar: 'تجهّزوا ثم اخرجوا للعب.' },
    sub: {
      fr: 'Chaussures de course et de salle, ballons, textile technique et accessoires. Nos vendeurs sont des sportifs et testent ce qu’ils vendent.',
      ar: 'أحذية للجري والقاعة وكرات وملابس تقنية وإكسسوارات. بائعونا رياضيون يجرّبون ما يبيعونه.',
    },
    cta: { fr: 'Demander un conseil', ar: 'اطلبوا نصيحة' },
  },
  heroImage: {
    alt: {
      fr: 'Table en bois chargée d’un ballon de basket, de chaussures de sport, de chaussettes et de vêtements techniques, dans un magasin lumineux',
      ar: 'طاولة خشبية عليها كرة سلة وأحذية رياضية وجوارب وملابس تقنية داخل متجر مضيء',
    },
  },
  about: {
    title: { fr: 'Un magasin tenu par des sportifs', ar: 'متجر يديره رياضيون' },
    body: {
      fr: [
        'Terrain Libre Sport a ouvert à Tanger en 2014, fondé par un ancien joueur de basket et une coureuse de semi-marathon. Le magasin sponsorise trois clubs de quartier.',
        'Nous analysons votre foulée sur tapis avant de vous proposer des chaussures de course. Le bon choix évite la blessure et fait gagner de l’argent.',
      ],
      ar: [
        'افتتح "ملعب حر للرياضة" بطنجة سنة 2014، أسسه لاعب كرة سلة سابق وعدّاءة نصف ماراثون. يرعى المتجر ثلاثة أندية للحي.',
        'نحلل خطواتكم على المضمار قبل اقتراح أحذية الجري. الاختيار الصحيح يجنّب الإصابة ويوفر المال.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos rayons', ar: 'أقسامنا' },
  services: [
    {
      name: { fr: 'Chaussures de running', ar: 'أحذية الجري' },
      desc: {
        fr: 'Analyse de foulée offerte, plusieurs marques, à partir de.',
        ar: 'تحليل الخطوة مجاني وعدة علامات، ابتداءً من.',
      },
      priceMad: 650,
    },
    {
      name: { fr: 'Ballons et équipement collectif', ar: 'كرات ومعدات جماعية' },
      desc: {
        fr: 'Basket, foot, handball, tailles officielles, tarif club dès dix pièces.',
        ar: 'سلة وقدم وكرة يد بمقاسات رسمية، وثمن خاص للأندية ابتداءً من عشر قطع.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Textile technique', ar: 'ملابس تقنية' },
      desc: {
        fr: 'T-shirts respirants, shorts, collants et vestes coupe-vent.',
        ar: 'قمصان تسمح بالتهوية وسراويل قصيرة وطويلة وسترات واقية من الريح.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Équipement fitness maison', ar: 'معدات لياقة منزلية' },
      desc: {
        fr: 'Haltères, tapis, élastiques et bancs, conseils de programme inclus.',
        ar: 'دمبل وسجاجيد وأحزمة مطاطية ومقاعد مع نصائح برنامج تدريبي.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Équipement pour clubs', ar: 'تجهيز الأندية' },
      desc: {
        fr: 'Maillots floqués, ballons et chasubles, devis sous 48 heures.',
        ar: 'قمصان مطبوعة وكرات وسترات تدريب، عرض سعر خلال 48 ساعة.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Analyse de foulée offerte', ar: 'تحليل الخطوة مجانًا' },
    { fr: 'Vendeurs sportifs', ar: 'بائعون رياضيون' },
    { fr: 'Tarifs spéciaux clubs', ar: 'أثمنة خاصة للأندية' },
    { fr: 'Échange sous 30 jours', ar: 'استبدال خلال 30 يومًا' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ils ont filmé ma foulée et trouvé la paire qui a mis fin à mes douleurs au genou.',
        ar: 'صوّروا خطواتي ووجدوا الحذاء الذي أنهى آلام ركبتي.',
      },
      author: { fr: 'Abdelali, Tanger', ar: 'عبد العالي، طنجة' },
    },
    {
      quote: {
        fr: 'Notre club a équipé quinze joueurs à prix coûtant. Service impeccable.',
        ar: 'جهّز ناديّنا خمسة عشر لاعبًا بسعر التكلفة. خدمة ممتازة.',
      },
      author: { fr: 'Jawad, entraîneur, Tétouan', ar: 'جواد، مدرب، تطوان' },
    },
  ],
  contact: {
    phone: '+212 5 39 33 44 55',
    whatsapp: '212611220033',
    email: 'contact@example.com',
    address: {
      fr: '60 boulevard Mohammed V, Tanger',
      ar: '60 شارع محمد الخامس، طنجة',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 20h', 'Dimanche : 15h – 19h'],
      ar: ['الاثنين – السبت: 10:00 – 20:00', 'الأحد: 15:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je cherche des chaussures de ... (pointure ...). Pouvez-vous me conseiller ?',
      ar: 'السلام عليكم، أبحث عن حذاء ... (المقاس ...). هل يمكنكم نصحي؟',
    },
  },
};
