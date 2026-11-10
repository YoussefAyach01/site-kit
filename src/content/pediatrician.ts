import type { SiteContent } from '../types.ts';

export const pediatrician: SiteContent = {
  id: 'pediatrician',
  name: { fr: 'Cabinet Pédiatrique Petits Pas', ar: 'عيادة الأطفال خطوة خطوة' },
  schemaType: 'MedicalClinic',
  tagline: { fr: 'Pédiatrie, en douceur dès la naissance', ar: 'طب الأطفال، برفق منذ الولادة' },
  hero: {
    title: {
      fr: 'Pour que chaque visite reste un bon souvenir.',
      ar: 'لتبقى كل زيارة ذكرى جميلة.',
    },
    sub: {
      fr: 'Suivi de croissance, vaccinations et conseils aux parents, dans un cabinet pensé pour rassurer les plus petits.',
      ar: 'متابعة النمو والتلقيحات ونصائح للوالدين، في عيادة صُممت لطمأنة الصغار.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Salle d’attente ludique avec coin lecture, jouets en bois et tapis coloré pour les enfants',
      ar: 'صالة انتظار مرحة بركن للقراءة وألعاب خشبية وسجادة ملونة للأطفال',
    },
  },
  about: {
    title: { fr: 'Un cabinet pensé pour les enfants', ar: 'عيادة مصممة من أجل الأطفال' },
    body: {
      fr: [
        'Petits Pas accompagne les familles de la naissance à l’adolescence, avec un suivi régulier qui permet de connaître chaque enfant au fil des visites.',
        'La salle d’attente, les coussins et les jouets sont choisis pour apaiser les enfants avant même d’entrer en consultation.',
      ],
      ar: [
        'ترافق عيادة خطوة خطوة العائلات من الولادة إلى سن المراهقة، بمتابعة منتظمة تتيح للطبيب التعرف على كل طفل مع تكرار الزيارات.',
        'صالة الانتظار والوسائد والألعاب اختيرت لتهدئة الأطفال حتى قبل دخولهم لغرفة الفحص.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos consultations', ar: 'استشاراتنا' },
  services: [
    {
      name: { fr: 'Consultation nouveau-né', ar: 'استشارة حديثي الولادة' },
      desc: {
        fr: 'Premier bilan, allaitement et conseils aux parents.',
        ar: 'الفحص الأول، الرضاعة ونصائح للوالدين.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Suivi de croissance', ar: 'متابعة النمو' },
      desc: {
        fr: 'Courbes de poids et taille, étapes du développement.',
        ar: 'منحنيات الوزن والطول، ومراحل النمو.',
      },
      priceMad: 220,
    },
    {
      name: { fr: 'Vaccination', ar: 'التلقيح' },
      desc: {
        fr: 'Calendrier vaccinal complet, carnet de santé tenu à jour.',
        ar: 'جدول تلقيح كامل، مع تحديث دفتر الصحة.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Consultation maladies courantes', ar: 'استشارة الأمراض الشائعة' },
      desc: {
        fr: 'Fièvre, toux, otites, troubles digestifs.',
        ar: 'الحمى، السعال، التهاب الأذن، اضطرابات هضمية.',
      },
      priceMad: 220,
    },
    {
      name: { fr: 'Consultation pour l’école', ar: 'استشارة من أجل المدرسة' },
      desc: {
        fr: 'Certificat d’aptitude et bilan avant la rentrée.',
        ar: 'شهادة الأهلية وفحص قبل الدخول المدرسي.',
      },
      priceMad: 180,
    },
  ],
  highlightsTitle: { fr: 'Ce que les parents apprécient', ar: 'ما يقدره الآباء' },
  highlights: [
    { fr: 'Rendez-vous rapides en cas de fièvre', ar: 'مواعيد سريعة في حالات الحمى' },
    { fr: 'Salle de jeu séparée', ar: 'ركن لعب منفصل' },
    { fr: 'Ligne directe pour urgences simples', ar: 'خط مباشر للحالات البسيطة المستعجلة' },
    { fr: 'Carnet de vaccination suivi', ar: 'متابعة دفتر التلقيح' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le docteur prend vraiment le temps d’expliquer, mon fils n’a plus peur des visites.',
        ar: 'الطبيبة تأخذ وقتها فعلاً في الشرح، ابني لم يعد يخاف من الزيارات.',
      },
      author: { fr: 'Sanaa, Tanger', ar: 'سناء، طنجة' },
    },
    {
      quote: {
        fr: 'Disponibles même un vendredi soir pour une fièvre qui nous inquiétait.',
        ar: 'كانوا متوفرين حتى مساء الجمعة من أجل حمى أقلقتنا.',
      },
      author: { fr: 'Walid, Tanger', ar: 'وليد، طنجة' },
    },
  ],
  contact: {
    phone: '+212 5 39 22 33 44',
    whatsapp: '212639223344',
    email: 'contact@example.com',
    address: {
      fr: '9 rue Ibn Khaldoun, Centre-ville, Tanger',
      ar: '9 زنقة ابن خلدون، وسط المدينة، طنجة',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h30', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:30', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un rendez-vous pour mon enfant (... ans) le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لطفلي (... سنوات) يوم ... على الساعة ...',
    },
  },
};
