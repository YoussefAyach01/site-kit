import type { SiteContent } from '../types.ts';

export const hairSalon: SiteContent = {
  id: 'hair-salon',
  name: { fr: 'Salon L’Arche', ar: 'صالون القوس' },
  schemaType: 'HairSalon',
  tagline: { fr: 'Coiffure et coloration', ar: 'تصفيف وصبغ الشعر' },
  hero: {
    title: { fr: 'Une coupe qui vous ressemble.', ar: 'قصة تشبهكم فعلاً.' },
    sub: {
      fr: 'Coupes, colorations et soins capillaires dans un cadre feutré, par une équipe qui prend le temps de vous écouter avant de couper.',
      ar: 'قص وصبغ وعناية بالشعر في أجواء هادئة، مع فريق يأخذ وقته للاستماع إليكم قبل القص.',
    },
    cta: { fr: 'Réserver un rendez-vous', ar: 'احجزوا موعدكم' },
  },
  heroImage: {
    alt: {
      fr: 'Poste de coiffure avec miroir en arche rétroéclairé, fauteuil en cuir brun et flacons ambrés sur une tablette en bois',
      ar: 'محطة تصفيف بمرآة مقوسة مضاءة من الخلف وكرسي جلدي بني وقناني عنبرية على رف خشبي',
    },
  },
  about: {
    title: { fr: 'Le même salon depuis dix ans, juste plus beau', ar: 'نفس الصالون منذ عشر سنوات، لكن أجمل' },
    body: {
      fr: [
        'Salon L’Arche a ouvert il y a dix ans dans un petit local, avant de s’installer dans cet espace pensé comme un salon de maison : arches, lumière chaude, cuir patiné.',
        'Nos coiffeurs se forment chaque année aux techniques de coloration et de coupe actuelles, mais gardent toujours une conversation avant les ciseaux.',
      ],
      ar: [
        'افتتح صالون القوس قبل عشر سنوات في محل صغير، قبل أن ينتقل إلى هذا الفضاء المصمم كصالون منزلي: أقواس وضوء دافئ وجلد عتيق.',
        'يتدرب حلاقونا كل سنة على تقنيات الصبغ والقص الحديثة، لكنهم يحافظون دائماً على حوار قبل المقص.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Coupe femme', ar: 'قص للنساء' },
      desc: { fr: 'Shampoing, coupe et brushing inclus.', ar: 'غسل وقص وتصفيف مشمولان.' },
      priceMad: 180,
    },
    {
      name: { fr: 'Coupe homme', ar: 'قص للرجال' },
      desc: {
        fr: 'Coupe classique ou dégradé, finitions à la tondeuse.',
        ar: 'قص كلاسيكي أو متدرج مع لمسات نهائية بالماكينة.',
      },
      priceMad: 100,
    },
    {
      name: { fr: 'Coloration complète', ar: 'صبغ كامل' },
      desc: {
        fr: 'Application racine à pointes, soin inclus.',
        ar: 'تطبيق من الجذور إلى الأطراف مع عناية مرافقة.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Balayage', ar: 'باليّاج' },
      desc: { fr: 'Mèches dégradées pour un effet naturel.', ar: 'خصل متدرجة لمظهر طبيعي.' },
      priceMad: 550,
    },
    {
      name: { fr: 'Soin profond kératine', ar: 'عناية عميقة بالكيراتين' },
      desc: {
        fr: 'Lissage et nutrition pour cheveux abîmés.',
        ar: 'فرد وتغذية للشعر المتضرر.',
      },
      priceMad: 400,
    },
  ],
  highlightsTitle: { fr: 'Ce qu’on vous garantit', ar: 'ما نضمنه لكم' },
  highlights: [
    { fr: 'Consultation avant chaque coupe', ar: 'استشارة قبل كل قصة' },
    { fr: 'Produits professionnels haut de gamme', ar: 'منتجات احترافية فاخرة' },
    { fr: 'Rendez-vous en soirée disponibles', ar: 'مواعيد مسائية متوفرة' },
    { fr: 'Espace calme, musique douce', ar: 'فضاء هادئ وموسيقى لطيفة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'La première coloration qui tient vraiment trois mois sans racines visibles.',
        ar: 'أول صبغة تدوم فعلاً ثلاثة أشهر دون ظهور الجذور.',
      },
      author: { fr: 'Salma, Casablanca', ar: 'سلمى، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ambiance feutrée, personnel adorable, résultat impeccable.',
        ar: 'أجواء هادئة وطاقم لطيف ونتيجة لا تشوبها شائبة.',
      },
      author: { fr: 'Driss, Casablanca', ar: 'إدريس، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 66 77 88',
    whatsapp: '212622667788',
    email: 'contact@example.com',
    address: {
      fr: '9 rue Jean Jaurès, Racine, Casablanca',
      ar: '9 زنقة جان جوريس، الراسين، الدار البيضاء',
    },
    hours: {
      fr: ['Mardi – Samedi : 9h30 – 19h30', 'Dimanche – Lundi : fermé'],
      ar: ['الثلاثاء – السبت: 9:30 – 19:30', 'الأحد والاثنين: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une coupe/coloration le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد قص/صبغ يوم ... على الساعة ...',
    },
  },
};
