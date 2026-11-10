import type { SiteContent } from '../types.ts';

export const photographyStudio: SiteContent = {
  id: 'photography-studio',
  name: { fr: 'Studio Lumière Brute', ar: 'استوديو الضوء الخام' },
  schemaType: 'ProfessionalService',
  tagline: { fr: 'Portraits, produits et reportage d’événements', ar: 'بورتريه ومنتجات وتغطية مناسبات' },
  hero: {
    title: { fr: 'Des images qui ressemblent à ce que vous êtes.', ar: 'صور تشبه حقيقتكم.' },
    sub: {
      fr: 'Portraits de famille et professionnels, photos de produits pour boutiques en ligne, mariages et événements. Retouches soignées, livraison de la galerie en sept jours.',
      ar: 'بورتريه عائلي ومهني، وصور منتجات للمتاجر الإلكترونية، وحفلات زفاف ومناسبات. تعديل متقن وتسليم المعرض خلال سبعة أيام.',
    },
    cta: { fr: 'Réserver une séance', ar: 'احجزوا جلسة' },
  },
  heroImage: {
    alt: {
      fr: 'Photographe tenant un appareil argentique vintage dans un studio lumineux, avec des softboxes et des fonds en arrière-plan',
      ar: 'مصوّر يمسك كاميرا قديمة في استوديو مضيء، وخلفه صناديق إضاءة وخلفيات تصوير',
    },
  },
  about: {
    title: { fr: 'Un studio à la lumière naturelle', ar: 'استوديو بضوء طبيعي' },
    body: {
      fr: [
        'Lumière Brute est un studio de Marrakech tenu par deux photographes, l’un portraitiste, l’autre spécialiste de la photo de produit. Nous travaillons surtout à la lumière du jour, dans un atelier ouvert sur un patio.',
        'Pas de poses figées : nous prenons le temps de discuter avant la séance, et le résultat ressemble à une conversation plutôt qu’à une fiche d’identité.',
      ],
      ar: [
        '"الضوء الخام" استوديو بمراكش يديره مصوران، أحدهما متخصص في البورتريه والآخر في تصوير المنتجات. نعمل أساسًا بضوء النهار داخل ورشة مفتوحة على فناء.',
        'لا وضعيات جامدة: نأخذ الوقت للحديث قبل الجلسة، فتبدو النتيجة أقرب إلى حوار منها إلى بطاقة تعريف.',
      ],
    },
  },
  servicesTitle: { fr: 'Séances et tarifs', ar: 'الجلسات والأثمنة' },
  services: [
    {
      name: { fr: 'Portrait professionnel', ar: 'بورتريه مهني' },
      desc: {
        fr: 'Trente minutes, trois photos retouchées pour votre CV et vos réseaux.',
        ar: 'ثلاثون دقيقة وثلاث صور معدّلة لسيرتكم الذاتية وحساباتكم.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Séance famille ou couple', ar: 'جلسة عائلية أو للزوجين' },
      desc: {
        fr: 'Une heure en studio ou en extérieur, vingt photos retouchées.',
        ar: 'ساعة في الاستوديو أو في الخارج وعشرون صورة معدّلة.',
      },
      priceMad: 1200,
    },
    {
      name: { fr: 'Photo de produit (par article)', ar: 'تصوير منتج (للقطعة)' },
      desc: {
        fr: 'Fond blanc et mise en situation, fichiers prêts pour votre boutique en ligne.',
        ar: 'خلفية بيضاء ومشهد توظيفي وملفات جاهزة لمتجركم الإلكتروني.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Reportage de mariage', ar: 'تغطية حفل زفاف' },
      desc: {
        fr: 'Journée complète, deux photographes, galerie en ligne et album sur devis.',
        ar: 'يوم كامل ومصوران ومعرض إلكتروني وألبوم بعرض سعر.',
      },
    },
    {
      name: { fr: 'Événement d’entreprise', ar: 'مناسبة شركة' },
      desc: {
        fr: 'Conférences, lancements et soirées, livraison des photos sous 48 heures.',
        ar: 'مؤتمرات وإطلاقات وسهرات، وتسليم الصور خلال 48 ساعة.',
      },
      priceMad: 2500,
    },
  ],
  highlightsTitle: { fr: 'Notre manière de faire', ar: 'طريقتنا في العمل' },
  highlights: [
    { fr: 'Lumière naturelle', ar: 'ضوء طبيعي' },
    { fr: 'Galerie en 7 jours', ar: 'معرض خلال 7 أيام' },
    { fr: 'Retouches soignées incluses', ar: 'تعديل متقن مشمول' },
    { fr: 'Droits d’usage inclus', ar: 'حقوق الاستعمال مشمولة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Pour la première fois, j’aime ma photo de profil. On a parlé, ri, et le résultat est naturel.',
        ar: 'لأول مرة أحب صورة ملفي الشخصي. تحدثنا وضحكنا وكانت النتيجة طبيعية.',
      },
      author: { fr: 'Dalia, Marrakech', ar: 'داليا، مراكش' },
    },
    {
      quote: {
        fr: 'Nos photos de produits ont doublé le taux de clic de notre boutique en ligne.',
        ar: 'ضاعفت صور منتجاتنا نسبة النقر في متجرنا الإلكتروني.',
      },
      author: { fr: 'Hamza, créateur de bougies, Essaouira', ar: 'حمزة، صانع شموع، الصويرة' },
    },
  ],
  contact: {
    phone: '+212 5 24 38 41 52',
    whatsapp: '212611445566',
    email: 'contact@example.com',
    address: {
      fr: '27 derb Sidi Bouloukat, médina, Marrakech',
      ar: '27 درب سيدي بولوقات، المدينة العتيقة، مراكش',
    },
    hours: {
      fr: ['Mardi – Samedi : 10h – 18h', 'Dimanche et lundi : sur rendez-vous'],
      ar: ['الثلاثاء – السبت: 10:00 – 18:00', 'الأحد والاثنين: بموعد مسبق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite réserver une séance de ... pour le ... Quels sont vos tarifs et disponibilités ?',
      ar: 'السلام عليكم، أرغب في حجز جلسة ... بتاريخ ... ما هي أثمنتكم وأوقاتكم المتاحة؟',
    },
  },
};
