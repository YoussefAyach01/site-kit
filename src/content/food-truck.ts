import type { SiteContent } from '../types.ts';

export const foodTruck: SiteContent = {
  id: 'food-truck',
  name: { fr: 'La Roulotte Épicée', ar: 'العربة التوابلية' },
  schemaType: 'FastFoodRestaurant',
  tagline: { fr: 'Street food marocaine, revisitée', ar: 'أكل الشارع المغربي بلمسة عصرية' },
  hero: {
    title: { fr: 'La cantine qui change de rue chaque jour.', ar: 'المطبخ المتنقل الذي يغيّر شارعه كل يوم.' },
    sub: {
      fr: 'Tacos, sandwichs et bols généreux, préparés minute depuis notre camion en bois. Suivez-nous pour savoir où on s’arrête aujourd’hui.',
      ar: 'طاكوس وسندويتشات وأطباق سخية، تُحضَّر لحظيًا من شاحنتنا الخشبية. تابعونا لمعرفة أين سنتوقف اليوم.',
    },
    cta: { fr: 'Commander sur WhatsApp', ar: 'اطلب عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Camion de street-food en bois avec comptoir ouvert, tabourets hauts et plantes sur le trottoir',
      ar: 'شاحنة طعام خشبية بنافذة مفتوحة وكراسي عالية ونباتات على الرصيف',
    },
  },
  about: {
    title: { fr: 'De la friteuse de quartier au camion', ar: 'من مقلاة الحي إلى الشاحنة' },
    body: {
      fr: [
        'La Roulotte Épicée est née d’un stand de sandwichs tenu par Hamza pendant ses études. Le succès a suivi, puis le camion, aménagé à la main avec des amis menuisiers.',
        'On change le menu selon les produits de saison trouvés au marché du matin, et on cuisine tout à la commande, devant vous.',
      ],
      ar: [
        'انطلقت "العربة التوابلية" من كشك سندويتشات كان يديره حمزة خلال دراسته. تبعه النجاح، ثم الشاحنة التي جُهّزت يدويًا بمساعدة أصدقاء نجارين.',
        'نغيّر القائمة حسب منتجات الموسم التي نجدها في سوق الصباح، ونطبخ كل شيء عند الطلب أمام أعينكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Au menu aujourd’hui', ar: 'في القائمة اليوم' },
  services: [
    {
      name: { fr: 'Taco poulet mariné', ar: 'طاكوس دجاج متبل' },
      desc: {
        fr: 'Poulet mariné aux épices, sauce maison, crudités.',
        ar: 'دجاج متبل بالتوابل، صلصة منزلية، خضر طازجة.',
      },
      priceMad: 35,
    },
    {
      name: { fr: 'Sandwich kefta grillée', ar: 'سندويتش كفتة مشوية' },
      desc: {
        fr: 'Kefta grillée au charbon, oignons confits, frites maison.',
        ar: 'كفتة مشوية على الفحم وبصل مكرمل وبطاطا مقلية منزلية.',
      },
      priceMad: 30,
    },
    {
      name: { fr: 'Bol végétarien', ar: 'طبق نباتي' },
      desc: {
        fr: 'Légumes rôtis, houmous, boulgour, tahini citronné.',
        ar: 'خضر مشوية وحمص وبرغل وطحينة بالليمون.',
      },
      priceMad: 40,
    },
    {
      name: { fr: 'Limonade maison', ar: 'ليموناضة منزلية' },
      desc: {
        fr: 'Citron et menthe, pressée le jour même, sans sucre ajouté.',
        ar: 'ليمون ونعناع، تُعصر في نفس اليوم، بدون سكر مضاف.',
      },
      priceMad: 15,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Cuisiné minute', ar: 'يُطبخ لحظيًا' },
    { fr: 'Produits de saison', ar: 'منتجات الموسم' },
    { fr: 'Emplacement suivi sur Instagram', ar: 'الموقع متوفر على إنستغرام' },
    { fr: 'Options végétariennes', ar: 'خيارات نباتية' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Meilleur taco de la ville, et on sait toujours où les trouver.',
        ar: 'أفضل طاكوس في المدينة، ونعرف دائمًا أين نجدهم.',
      },
      author: { fr: 'Reda, Casablanca', ar: 'رضا، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Le bol végétarien est devenu mon déjeuner du mercredi.',
        ar: 'صار الطبق النباتي غداء يوم الأربعاء بالنسبة لي.',
      },
      author: { fr: 'Nadia, Rabat', ar: 'نادية، الرباط' },
    },
  ],
  contact: {
    phone: '+212 6 61 22 33 44',
    whatsapp: '212661223344',
    email: 'contact@example.com',
    address: {
      fr: 'Position mise à jour chaque jour sur Instagram, Casablanca',
      ar: 'الموقع يُحدَّث يوميًا عبر إنستغرام، الدار البيضاء',
    },
    hours: {
      fr: ['Mardi – Dimanche : 12h – 21h', 'Lundi : fermé'],
      ar: ['الثلاثاء – الأحد: 12:00 – 21:00', 'الاثنين: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais commander ... Où êtes-vous garés aujourd’hui ?',
      ar: 'السلام عليكم، أود طلب ... أين تتوقفون اليوم؟',
    },
  },
};
