import type { SiteContent } from '../types.ts';

export const petStore: SiteContent = {
  id: 'pet-store',
  name: { fr: 'Pattes & Compagnie', ar: 'أقدام وأصحاب' },
  schemaType: 'PetStore',
  tagline: {
    fr: 'Alimentation, accessoires et conseils pour animaux',
    ar: 'غذاء وإكسسوارات ونصائح للحيوانات الأليفة',
  },
  hero: {
    title: { fr: 'Tout pour ceux qui vous attendent à la porte.', ar: 'كل شيء لمن ينتظركم عند الباب.' },
    sub: {
      fr: 'Croquettes de qualité, jouets solides, paniers douillets et conseils d’une équipe qui a elle-même des chiens, des chats et un lapin.',
      ar: 'حبوب غذاء جيدة وألعاب متينة وأسرّة مريحة ونصائح من فريق يملك بنفسه كلابًا وقططًا وأرنبًا.',
    },
    cta: { fr: 'Poser une question', ar: 'اطرحوا سؤالًا' },
  },
  heroImage: {
    alt: {
      fr: 'Chiot golden retriever assis sur un panier moelleux entouré de jouets, devant des étagères de croquettes dans une animalerie lumineuse',
      ar: 'جرو غولدن ريتريفر جالس على سرير وثير تحيط به ألعاب، أمام رفوف أغذية في متجر حيوانات مضيء',
    },
  },
  about: {
    title: { fr: 'Une animalerie tenue par des passionnés', ar: 'متجر حيوانات يديره عشاق الحيوان' },
    body: {
      fr: [
        'Pattes & Compagnie a ouvert à Agadir il y a huit ans. Nous ne vendons pas d’animaux : nous nous occupons de ceux qui en ont déjà, et nous travaillons avec les refuges locaux pour les adoptions.',
        'Chaque croquette en rayon a été testée par nos propres animaux avant d’être proposée aux vôtres.',
      ],
      ar: [
        'افتتح "أقدام وأصحاب" بأكادير منذ ثماني سنوات. لا نبيع الحيوانات: نعتني بمن يملكها، ونتعاون مع الملاجئ المحلية في التبني.',
        'كل غذاء في الرفوف جرّبته حيواناتنا نحن قبل أن نقدمه لحيواناتكم.',
      ],
    },
  },
  servicesTitle: { fr: 'En boutique', ar: 'في المتجر' },
  services: [
    {
      name: { fr: 'Croquettes pour chien (sac de 12 kg)', ar: 'غذاء جاف للكلاب (كيس 12 كلغ)' },
      desc: {
        fr: 'Recette au poulet, sans colorants, pour chiens adultes.',
        ar: 'وصفة بالدجاج بلا ملوّنات، للكلاب البالغة.',
      },
      priceMad: 420,
    },
    {
      name: { fr: 'Croquettes pour chat (sac de 4 kg)', ar: 'غذاء جاف للقطط (كيس 4 كلغ)' },
      desc: {
        fr: 'Saumon et riz, pour chats stérilisés.',
        ar: 'سلمون وأرز، للقطط المعقّمة.',
      },
      priceMad: 260,
    },
    {
      name: { fr: 'Panier moelleux lavable', ar: 'سرير وثير قابل للغسل' },
      desc: {
        fr: 'Trois tailles, housse amovible passant en machine.',
        ar: 'ثلاثة مقاسات بغطاء قابل للنزع والغسل في الآلة.',
      },
      priceMad: 290,
    },
    {
      name: { fr: 'Jouets en corde et caoutchouc', ar: 'ألعاب حبل ومطاط' },
      desc: {
        fr: 'Résistants, sans plastique fragile.',
        ar: 'متينة وبلا بلاستيك هش.',
      },
      priceMad: 45,
      priceFrom: true,
    },
    {
      name: { fr: 'Toilettage', ar: 'تنظيف وتجميل الحيوان' },
      desc: {
        fr: 'Bain, brossage et coupe d’ongles, sur rendez-vous.',
        ar: 'استحمام وتمشيط وتقليم أظافر، بموعد مسبق.',
      },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous faire confiance', ar: 'لماذا تثقون بنا' },
  highlights: [
    { fr: 'Conseils d’une équipe d’éleveurs', ar: 'نصائح فريق متمرس' },
    { fr: 'Croquettes testées', ar: 'أغذية مُجرَّبة' },
    { fr: 'Partenaire des refuges', ar: 'شريك للملاجئ' },
    { fr: 'Livraison à domicile', ar: 'توصيل إلى المنزل' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Mon chien digère enfin ses croquettes. On m’a proposé trois marques à essayer, gratuitement.',
        ar: 'صار كلبي يهضم غذاءه أخيرًا. اقترحوا علي ثلاث علامات للتجربة مجانًا.',
      },
      author: { fr: 'Samir, Agadir', ar: 'سمير، أكادير' },
    },
    {
      quote: {
        fr: 'Ils ont aidé ma fille à choisir tout le nécessaire pour son premier chat.',
        ar: 'ساعدوا ابنتي على اختيار كل ما تحتاجه لقطتها الأولى.',
      },
      author: { fr: 'Houda, Inezgane', ar: 'هدى، إنزكان' },
    },
  ],
  contact: {
    phone: '+212 5 28 84 20 50',
    whatsapp: '212666778899',
    email: 'contact@example.com',
    address: {
      fr: '31 avenue des FAR, Agadir',
      ar: '31 شارع القوات المسلحة الملكية، أكادير',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h30 – 19h30', 'Dimanche : 10h – 14h'],
      ar: ['الاثنين – السبت: 9:30 – 19:30', 'الأحد: 10:00 – 14:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, j’ai un/une ... de ... ans. Quelles croquettes me conseillez-vous ?',
      ar: 'السلام عليكم، لدي ... عمره ... سنوات. ما الغذاء الذي تنصحونني به؟',
    },
  },
};
