import type { SiteContent } from '../types.ts';

export const skincareStore: SiteContent = {
  id: 'skincare-store',
  name: { fr: 'L’Argan Pur', ar: 'الأركان الصافي' },
  schemaType: 'Store',
  tagline: { fr: 'Soins naturels de la peau, formules simples', ar: 'عناية طبيعية بالبشرة بتركيبات بسيطة' },
  hero: {
    title: { fr: 'Moins de produits, une peau plus calme.', ar: 'منتجات أقل، وبشرة أهدأ.' },
    sub: {
      fr: 'Sérums, huiles et crèmes aux listes d’ingrédients courtes, formulés avec de l’argan et des plantes du Maroc. Diagnostic de peau offert en boutique.',
      ar: 'سيرومات وزيوت وكريمات بقوائم مكوّنات قصيرة، مصنوعة من الأركان ونباتات مغربية. تشخيص مجاني للبشرة في المتجر.',
    },
    cta: { fr: 'Demander un conseil', ar: 'اطلبوا استشارة' },
  },
  heroImage: {
    alt: {
      fr: 'Flacons compte-gouttes et pots de crème sur un comptoir en marbre clair, avec une plante et des vases en arrière-plan',
      ar: 'قوارير بقطّارة وعلب كريم فوق منضدة رخامية فاتحة، مع نبتة ومزهريات في الخلفية',
    },
  },
  about: {
    title: { fr: 'Des formules courtes, des ingrédients nommés', ar: 'تركيبات قصيرة ومكوّنات معروفة' },
    body: {
      fr: [
        'L’Argan Pur est une boutique d’Essaouira créée par une pharmacienne et une cultivatrice de coopérative d’argan. Chaque produit contient moins de dix ingrédients, tous expliqués sur l’étiquette.',
        'Nous ne promettons pas de miracles. Nous vous aidons à bâtir une routine de trois gestes, adaptée à votre peau et à votre budget.',
      ],
      ar: [
        '"الأركان الصافي" متجر بالصويرة أسسته صيدلانية ومنتجة من تعاونية للأركان. يحتوي كل منتج على أقل من عشرة مكوّنات، كلها مشروحة على الملصق.',
        'لا نعد بمعجزات. نساعدكم على بناء روتين من ثلاث خطوات يناسب بشرتكم وميزانيتكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'منتجاتنا' },
  services: [
    {
      name: { fr: 'Sérum hydratant à l’acide hyaluronique', ar: 'سيروم مرطّب بحمض الهيالورونيك' },
      desc: {
        fr: 'Flacon de 30 ml, peaux sèches et mixtes.',
        ar: 'قارورة 30 مل، للبشرة الجافة والمختلطة.',
      },
      priceMad: 240,
    },
    {
      name: { fr: 'Huile d’argan cosmétique pure', ar: 'زيت أركان تجميلي صافٍ' },
      desc: {
        fr: 'Pressée à froid en coopérative, 50 ml.',
        ar: 'معصور على البارد في تعاونية، 50 مل.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Crème de jour SPF 30', ar: 'كريم نهاري بعامل حماية 30' },
      desc: {
        fr: 'Texture légère, filtre minéral, sans parfum.',
        ar: 'قوام خفيف ومرشّح معدني وبلا عطر.',
      },
      priceMad: 260,
    },
    {
      name: { fr: 'Nettoyant doux au rhassoul', ar: 'منظّف لطيف بالغاسول' },
      desc: {
        fr: 'Argile du Maroc et eau de fleur d’oranger, 150 ml.',
        ar: 'طين مغربي وماء الزهر، 150 مل.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Diagnostic de peau', ar: 'تشخيص البشرة' },
      desc: {
        fr: 'Analyse en boutique et routine personnalisée, sur rendez-vous.',
        ar: 'تحليل في المتجر وروتين مخصص، بموعد مسبق.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Moins de dix ingrédients', ar: 'أقل من عشرة مكوّنات' },
    { fr: 'Sans parfum de synthèse', ar: 'بلا عطور صناعية' },
    { fr: 'Argan de coopérative', ar: 'أركان من تعاونية' },
    { fr: 'Formats d’essai', ar: 'أحجام للتجربة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Trois produits au lieu de huit, et ma peau n’a jamais été aussi calme.',
        ar: 'ثلاثة منتجات بدل ثمانية، وبشرتي لم تكن يومًا أهدأ.',
      },
      author: { fr: 'Hajar, Essaouira', ar: 'هاجر، الصويرة' },
    },
    {
      quote: {
        fr: 'Le diagnostic m’a fait économiser : on m’a dit ce dont je n’avais pas besoin.',
        ar: 'التشخيص جعلني أوفّر: قالوا لي ما لا أحتاج إليه.',
      },
      author: { fr: 'Manal, Agadir', ar: 'منال، أكادير' },
    },
  ],
  contact: {
    phone: '+212 5 24 47 36 25',
    whatsapp: '212622334455',
    email: 'contact@example.com',
    address: {
      fr: '5 rue Mohammed Zerktouni, Essaouira',
      ar: '5 زنقة محمد الزرقطوني، الصويرة',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 19h', 'Dimanche : 11h – 16h'],
      ar: ['الاثنين – السبت: 10:00 – 19:00', 'الأحد: 11:00 – 16:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, j’ai une peau ... et je cherche une routine simple. Pouvez-vous me conseiller ?',
      ar: 'السلام عليكم، بشرتي ... وأبحث عن روتين بسيط. هل يمكنكم نصحي؟',
    },
  },
};
