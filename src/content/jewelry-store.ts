import type { SiteContent } from '../types.ts';

export const jewelryStore: SiteContent = {
  id: 'jewelry-store',
  name: { fr: 'Bijouterie Ambre & Or', ar: 'مجوهرات العنبر والذهب' },
  schemaType: 'JewelryStore',
  tagline: {
    fr: 'Bijoux en or 18 carats, créations et réparations',
    ar: 'مجوهرات من الذهب عيار 18، تصاميم وإصلاحات',
  },
  hero: {
    title: { fr: 'Un bijou qui raconte quelque chose.', ar: 'مجوهرة تحكي شيئًا.' },
    sub: {
      fr: 'Colliers, bagues et bracelets en or 18 carats, créés dans notre atelier ou gravés à votre demande. Poinçon garanti, prix au gramme affiché.',
      ar: 'قلائد وخواتم وأساور من الذهب عيار 18، تُصنع في ورشتنا أو تُنقش حسب طلبكم. دمغة مضمونة وسعر الغرام معلن.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدًا' },
  },
  heroImage: {
    alt: {
      fr: 'Mains disposant des colliers fins en or et des bagues sur un plateau de velours bleu nuit, près d’une fenêtre',
      ar: 'يدان ترتبان قلائد ذهبية رفيعة وخواتم على صينية مخملية زرقاء داكنة قرب نافذة',
    },
  },
  about: {
    title: { fr: 'Orfèvres de père en fils', ar: 'صاغة أبًا عن جد' },
    body: {
      fr: [
        'La Bijouterie Ambre & Or est installée dans le quartier des orfèvres de Fès depuis trois générations. Chaque pièce passe par l’atelier avant de rejoindre la vitrine.',
        'Nous affichons le prix de l’or du jour, le poids et la façon séparément, pour que vous voyiez exactement ce que vous payez.',
      ],
      ar: [
        'تقع مجوهرات العنبر والذهب في حي الصاغة بفاس منذ ثلاثة أجيال. تمر كل قطعة من الورشة قبل أن تصل إلى الواجهة.',
        'نعلن سعر الذهب اليومي والوزن وثمن الصنعة كلًّا على حدة، لتروا بدقة ما تدفعون.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos créations et services', ar: 'تصاميمنا وخدماتنا' },
  services: [
    {
      name: { fr: 'Collier fin en or 18 carats', ar: 'قلادة رقيقة من الذهب عيار 18' },
      desc: {
        fr: 'Chaîne et pendentif, à partir de, selon le poids.',
        ar: 'سلسلة وتعليقة، ابتداءً من، حسب الوزن.',
      },
      priceMad: 2400,
    },
    {
      name: { fr: 'Bague de fiançailles sur mesure', ar: 'خاتم خطوبة حسب الطلب' },
      desc: {
        fr: 'Dessin avec vous, maquette en cire, réalisation en trois semaines.',
        ar: 'تصميم معكم ونموذج بالشمع وتنفيذ في ثلاثة أسابيع.',
      },
    },
    {
      name: { fr: 'Alliances (la paire)', ar: 'خاتما الزواج (الزوج)' },
      desc: {
        fr: 'Or jaune ou blanc, gravure incluse.',
        ar: 'ذهب أصفر أو أبيض مع النقش.',
      },
      priceMad: 3800,
    },
    {
      name: { fr: 'Gravure', ar: 'النقش' },
      desc: {
        fr: 'Prénom, date ou courte phrase, en français ou en arabe.',
        ar: 'اسم أو تاريخ أو عبارة قصيرة بالفرنسية أو بالعربية.',
      },
      priceMad: 80,
    },
    {
      name: { fr: 'Réparation et redimensionnement', ar: 'إصلاح وتغيير المقاس' },
      desc: {
        fr: 'Soudure, changement de taille, remise à neuf de vos bijoux anciens.',
        ar: 'لحام وتغيير المقاس وتجديد مجوهراتكم القديمة.',
      },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Nos garanties', ar: 'ضماناتنا' },
  highlights: [
    { fr: 'Poinçon officiel', ar: 'دمغة رسمية' },
    { fr: 'Prix au gramme affiché', ar: 'سعر الغرام معلن' },
    { fr: 'Atelier sur place', ar: 'ورشة في عين المكان' },
    { fr: 'Rachat d’or au cours du jour', ar: 'شراء الذهب بسعر اليوم' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ils ont refait la bague de ma grand-mère exactement comme dans mes souvenirs.',
        ar: 'أعادوا صنع خاتم جدتي تمامًا كما أتذكره.',
      },
      author: { fr: 'Asmae, Fès', ar: 'أسماء، فاس' },
    },
    {
      quote: {
        fr: 'Prix transparents, gravure parfaite. Nos alliances sont magnifiques.',
        ar: 'أثمنة شفافة ونقش متقن. خاتما زواجنا رائعان.',
      },
      author: { fr: 'Mounir et Siham, Meknès', ar: 'منير وسهام، مكناس' },
    },
  ],
  contact: {
    phone: '+212 5 35 63 77 20',
    whatsapp: '212677889900',
    email: 'contact@example.com',
    address: {
      fr: '2 derb des Orfèvres, Fès El Bali',
      ar: '2 درب الصاغة، فاس البالي',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 19h', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 10:00 – 19:00', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un rendez-vous pour une création de ... (budget : ...).',
      ar: 'السلام عليكم، أرغب في موعد لتصميم ... (الميزانية: ...).',
    },
  },
};
