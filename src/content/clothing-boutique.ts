import type { SiteContent } from '../types.ts';

export const clothingBoutique: SiteContent = {
  id: 'clothing-boutique',
  name: { fr: 'Maison Lina', ar: 'بوتيك لينا' },
  schemaType: 'ClothingStore',
  tagline: { fr: 'Prêt-à-porter féminin, pièces choisies', ar: 'ملابس نسائية جاهزة بقطع مختارة' },
  hero: {
    title: { fr: 'Des vêtements qu’on garde des années.', ar: 'ملابس تبقى معكم سنوات.' },
    sub: {
      fr: 'Matières naturelles, coupes simples, petites séries. Une boutique où l’on prend le temps d’essayer et de composer une tenue qui vous ressemble.',
      ar: 'خامات طبيعية وقصّات بسيطة وسلاسل صغيرة. بوتيك نأخذ فيه الوقت للتجريب وتكوين إطلالة تشبهكم.',
    },
    cta: { fr: 'Venir essayer', ar: 'تعالوا للتجريب' },
  },
  heroImage: {
    alt: {
      fr: 'Portant de vêtements en lin et en laine dans des tons neutres près d’une grande baie vitrée, avec un panier et des fleurs séchées',
      ar: 'شماعة ملابس من الكتان والصوف بألوان محايدة قرب نافذة زجاجية كبيرة، مع سلة وزهور مجففة',
    },
  },
  about: {
    title: { fr: 'Une petite boutique, un œil exigeant', ar: 'بوتيك صغير وذوق دقيق' },
    body: {
      fr: [
        'Maison Lina est née à Marrakech en 2016 du désir de proposer autre chose que la mode rapide : des pièces durables, confectionnées par des ateliers que nous visitons nous-mêmes.',
        'Chaque collection tient sur un seul portant. Peu de modèles, mais ceux-là, nous les portons.',
      ],
      ar: [
        'وُلد "بوتيك لينا" بمراكش سنة 2016 من رغبة في تقديم بديل للموضة السريعة: قطع متينة تصنعها ورشات نزورها بأنفسنا.',
        'كل مجموعة تتسع لشماعة واحدة. نماذج قليلة، لكننا نرتديها نحن أيضًا.',
      ],
    },
  },
  servicesTitle: { fr: 'La boutique', ar: 'البوتيك' },
  services: [
    {
      name: { fr: 'Robe en lin lavé', ar: 'فستان من الكتان المغسول' },
      desc: {
        fr: 'Coupe droite, poches, trois coloris de saison.',
        ar: 'قصّة مستقيمة بجيوب وثلاثة ألوان للموسم.',
      },
      priceMad: 690,
    },
    {
      name: { fr: 'Gilet en laine mérinos', ar: 'سترة من صوف المارينو' },
      desc: {
        fr: 'Tricot épais, boutons en corne, tombé souple.',
        ar: 'نسيج سميك وأزرار من القرن وانسدال مرن.',
      },
      priceMad: 890,
    },
    {
      name: { fr: 'Jean droit taille haute', ar: 'جينز مستقيم بخصر عالٍ' },
      desc: {
        fr: 'Coton épais, délavage naturel, disponible du 34 au 46.',
        ar: 'قطن سميك وغسل طبيعي، من المقاس 34 إلى 46.',
      },
      priceMad: 520,
    },
    {
      name: { fr: 'Retouches sur place', ar: 'تعديلات في عين المكان' },
      desc: {
        fr: 'Ourlets et ajustements offerts pour tout achat.',
        ar: 'تقصير وتعديلات مجانية مع كل عملية شراء.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Conseil en tenue', ar: 'استشارة في الأناقة' },
      desc: {
        fr: 'Une heure pour composer une garde-robe de base, sur rendez-vous.',
        ar: 'ساعة لتكوين خزانة ملابس أساسية، بموعد مسبق.',
      },
    },
  ],
  highlightsTitle: { fr: 'Notre engagement', ar: 'التزامنا' },
  highlights: [
    { fr: 'Matières naturelles', ar: 'خامات طبيعية' },
    { fr: 'Petites séries', ar: 'سلاسل صغيرة' },
    { fr: 'Retouches offertes', ar: 'تعديلات مجانية' },
    { fr: 'Échange sous 14 jours', ar: 'استبدال خلال 14 يومًا' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ma robe en lin a deux ans et paraît toujours neuve. Ça change des vêtements jetables.',
        ar: 'فستاني الكتاني عمره سنتان وما يزال يبدو جديدًا. شيء مختلف عن الملابس التي تُرمى.',
      },
      author: { fr: 'Ghita, Marrakech', ar: 'غيثة، مراكش' },
    },
    {
      quote: {
        fr: 'On m’a conseillée sans jamais me pousser à acheter. Je reviens chaque saison.',
        ar: 'نصحوني دون أن يدفعوني للشراء. أعود كل موسم.',
      },
      author: { fr: 'Salwa, Casablanca', ar: 'سلوى، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 24 33 22 11',
    whatsapp: '212611223355',
    email: 'contact@example.com',
    address: {
      fr: '17 rue de la Liberté, Guéliz, Marrakech',
      ar: '17 شارع الحرية، جيليز، مراكش',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 19h30', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 10:00 – 19:30', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, avez-vous encore ... en taille ... ? Je peux passer demain.',
      ar: 'السلام عليكم، هل ما زال لديكم ... بالمقاس ... ؟ يمكنني المرور غدًا.',
    },
  },
};
