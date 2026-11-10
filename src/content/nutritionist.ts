import type { SiteContent } from '../types.ts';

export const nutritionist: SiteContent = {
  id: 'nutritionist',
  name: { fr: 'Table Grenade', ar: 'مائدة الرمان' },
  schemaType: 'Nutritionist',
  tagline: { fr: 'Nutrition et accompagnement alimentaire', ar: 'تغذية ومرافقة غذائية' },
  hero: {
    title: { fr: 'Manger mieux, sans se priver.', ar: 'تناولوا طعاماً أفضل، دون حرمان.' },
    sub: {
      fr: 'Bilans nutritionnels, plans alimentaires sur mesure et suivi de poids, diabète ou troubles digestifs, avec des produits que vous trouvez déjà au marché.',
      ar: 'فحوصات غذائية وخطط أكل مخصصة ومتابعة للوزن والسكري ومشاكل الهضم، باستخدام منتجات تجدونها في السوق أصلاً.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدكم' },
  },
  heroImage: {
    alt: {
      fr: 'Bureau en bois avec carnet ouvert, plateau de figues, grenade coupée, légumes et bol de fruits secs sous une lumière chaude',
      ar: 'مكتب خشبي بدفتر مفتوح وصحن تين ورمان مقطوع وخضر ووعاء فواكه جافة تحت ضوء دافئ',
    },
  },
  about: {
    title: { fr: 'Des conseils qui tiennent compte de votre table', ar: 'نصائح تراعي مائدتكم' },
    body: {
      fr: [
        'Table Grenade accompagne particuliers et sportifs vers une alimentation équilibrée, construite autour des produits marocains de saison plutôt que de substituts importés.',
        'Chaque plan est écrit à la main avec vous, en tenant compte de vos horaires, de votre budget et de ce que mange le reste de la famille.',
      ],
      ar: [
        'ترافق مائدة الرمان الأفراد والرياضيين نحو غذاء متوازن، مبني على المنتجات المغربية الموسمية بدل البدائل المستوردة.',
        'تُكتب كل خطة يدوياً معكم، مع مراعاة أوقاتكم وميزانيتكم وما تأكله بقية العائلة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos consultations', ar: 'استشاراتنا' },
  services: [
    {
      name: { fr: 'Bilan nutritionnel initial', ar: 'الفحص الغذائي الأولي' },
      desc: {
        fr: 'Analyse des habitudes, mesures et objectifs.',
        ar: 'تحليل العادات والقياسات والأهداف.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Plan alimentaire personnalisé', ar: 'خطة غذائية شخصية' },
      desc: {
        fr: 'Menus adaptés à vos goûts et à votre emploi du temps.',
        ar: 'قوائم طعام تناسب أذواقكم وجدولكم.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Suivi mensuel', ar: 'متابعة شهرية' },
      desc: { fr: 'Ajustement du plan selon vos résultats.', ar: 'تعديل الخطة حسب نتائجكم.' },
      priceMad: 250,
    },
    {
      name: { fr: 'Nutrition sportive', ar: 'تغذية رياضية' },
      desc: {
        fr: 'Plans pour prise de masse, sèche ou endurance.',
        ar: 'خطط لزيادة الكتلة أو التنشيف أو التحمل.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Rééquilibrage post-grossesse', ar: 'إعادة التوازن بعد الحمل' },
      desc: {
        fr: 'Accompagnement doux, sans régime strict.',
        ar: 'مرافقة لطيفة دون حمية صارمة.',
      },
      priceMad: 300,
    },
  ],
  highlightsTitle: { fr: 'Notre approche', ar: 'منهجنا' },
  highlights: [
    { fr: 'Produits marocains de saison', ar: 'منتجات مغربية موسمية' },
    { fr: 'Pas de régimes extrêmes', ar: 'لا حميات قاسية' },
    { fr: 'Suivi par WhatsApp entre les séances', ar: 'متابعة عبر واتساب بين الجلسات' },
    { fr: 'Consultations en ligne possibles', ar: 'استشارات عن بعد ممكنة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'J’ai perdu 8 kilos en mangeant presque les mêmes plats qu’avant, juste mieux équilibrés.',
        ar: 'خسرت 8 كيلوغرامات وأنا آكل تقريباً نفس الأطباق السابقة، لكن بتوازن أفضل.',
      },
      author: { fr: 'Sanae, Marrakech', ar: 'سناء، مراكش' },
    },
    {
      quote: {
        fr: 'Le premier plan alimentaire qui tient compte de mes horaires de nuit.',
        ar: 'أول خطة غذائية تأخذ بعين الاعتبار أوقات عملي الليلية.',
      },
      author: { fr: 'Anas, Marrakech', ar: 'أنس، مراكش' },
    },
  ],
  contact: {
    phone: '+212 5 24 33 44 55',
    whatsapp: '212624334455',
    email: 'contact@example.com',
    address: {
      fr: '5 rue de la Liberté, Guéliz, Marrakech',
      ar: '5 زنقة الحرية، جليز، مراكش',
    },
    hours: {
      fr: ['Lundi – Vendredi : 10h – 18h', 'Samedi : 10h – 14h'],
      ar: ['الاثنين – الجمعة: 10:00 – 18:00', 'السبت: 10:00 – 14:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour un bilan nutritionnel le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لفحص غذائي يوم ... على الساعة ...',
    },
  },
};
