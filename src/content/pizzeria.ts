import type { SiteContent } from '../types.ts';

export const pizzeria: SiteContent = {
  id: 'pizzeria',
  name: { fr: 'Le Four à Bois', ar: 'الفرن الحطبي' },
  schemaType: 'Restaurant',
  tagline: { fr: 'Pizzas napolitaines cuites au feu de bois', ar: 'بيتزا نابولية تُطهى على نار الحطب' },
  hero: {
    title: { fr: 'Quatre-vingt-dix secondes, et c’est prêt.', ar: 'تسعون ثانية فقط، وتكون جاهزة.' },
    sub: {
      fr: 'Pâte fermentée 48 heures, four à bois à 450°C, tomates et mozzarella du jour. À emporter ou à table, toujours sortie du feu.',
      ar: 'عجين مخمّر لمدة 48 ساعة وفرن حطبي بحرارة 450 درجة، وطماطم وموزاريلا طازجة كل يوم. للتناول في المكان أو للأخذ، دائمًا ساخنة من النار.',
    },
    cta: { fr: 'Commander sur WhatsApp', ar: 'اطلب عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Four à pizza en pierre et son feu de bois, au milieu d’une salle lumineuse aux tables en chêne',
      ar: 'فرن بيتزا حجري بنار الحطب وسط قاعة مضيئة بطاولات خشبية',
    },
  },
  about: {
    title: { fr: 'Une recette, un four, pas de raccourcis', ar: 'وصفة واحدة، فرن واحد، بلا اختصارات' },
    body: {
      fr: [
        'Le Four à Bois a été construit brique par brique par un maçon napolitain venu spécialement pour ça. La pâte repose deux jours avant d’être étirée à la main.',
        'On ne travaille qu’avec des produits qu’on peut nommer : la ferme qui a fait la mozzarella, le producteur des tomates, le moulin de la farine.',
      ],
      ar: [
        'بُني "الفرن الحطبي" طوبة بطوبة على يد بنّاء نابولي قدِم خصيصًا لهذا الغرض. تُترك العجينة ترتاح يومين كاملين قبل أن تُمدَّد يدويًا.',
        'لا نعمل إلا بمنتجات نعرف مصدرها: المزرعة التي صنعت الموزاريلا، ومُنتِج الطماطم، ومطحنة الدقيق.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos pizzas', ar: 'بيتزاتنا' },
  services: [
    {
      name: { fr: 'Margherita', ar: 'مارغريتا' },
      desc: {
        fr: 'Tomate San Marzano, mozzarella fior di latte, basilic frais.',
        ar: 'طماطم سان مارزانو وموزاريلا فيور دي لاتي وريحان طازج.',
      },
      priceMad: 65,
    },
    {
      name: { fr: 'Marinara', ar: 'مارينارا' },
      desc: {
        fr: 'Tomate, ail, origan, huile d’olive, sans fromage.',
        ar: 'طماطم وثوم وأوريغانو وزيت الزيتون، بدون جبن.',
      },
      priceMad: 50,
    },
    {
      name: { fr: 'Quatre fromages', ar: 'بيتزا الأجبان الأربعة' },
      desc: {
        fr: 'Mozzarella, gorgonzola, parmesan, provolone.',
        ar: 'موزاريلا وغورغونزولا وبارميزان وبروفولوني.',
      },
      priceMad: 80,
    },
    {
      name: { fr: 'Merguez et poivrons', ar: 'مرقاز وفلفل' },
      desc: {
        fr: 'Merguez grillée, poivrons rouges, oignons confits.',
        ar: 'مرقاز مشوي وفلفل أحمر وبصل مكرمل.',
      },
      priceMad: 75,
    },
    {
      name: { fr: 'Tiramisu maison', ar: 'تيراميسو منزلي' },
      desc: { fr: 'Mascarpone, café, cacao amer.', ar: 'ماسكاربوني وقهوة وكاكاو مر.' },
      priceMad: 30,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Pâte fermentée 48h', ar: 'عجين مخمّر 48 ساعة' },
    { fr: 'Four à bois véritable', ar: 'فرن حطبي أصيل' },
    { fr: 'Options végétariennes', ar: 'خيارات نباتية' },
    { fr: 'Livraison rapide', ar: 'توصيل سريع' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'La meilleure pâte que j’aie mangée hors d’Italie.',
        ar: 'أفضل عجينة تذوقتها خارج إيطاليا.',
      },
      author: { fr: 'Amine, Marrakech', ar: 'أمين، مراكش' },
    },
    {
      quote: { fr: 'On sent vraiment le bois dans la croûte.', ar: 'تشعر حقًا بنكهة الحطب في القشرة.' },
      author: { fr: 'Laila, Fès', ar: 'ليلى، فاس' },
    },
  ],
  contact: {
    phone: '+212 5 24 77 88 99',
    whatsapp: '212677889900',
    email: 'contact@example.com',
    address: {
      fr: '5 place du Progrès, Guéliz, Marrakech',
      ar: '5 ساحة التقدم، جليز، مراكش',
    },
    hours: {
      fr: ['Tous les jours : 18h – 23h30'],
      ar: ['يوميًا: 18:00 – 23:30'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais commander ... pizzas pour ...',
      ar: 'السلام عليكم، أود طلب ... بيتزا لـ ...',
    },
  },
};
