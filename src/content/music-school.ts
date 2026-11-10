import type { SiteContent } from '../types.ts';

export const musicSchool: SiteContent = {
  id: 'music-school',
  name: { fr: 'Conservatoire Libre Mélodie', ar: 'معهد ملودي الحر للموسيقى' },
  schemaType: 'EducationalOrganization',
  tagline: { fr: 'Piano, guitare, oud et chant, tous niveaux', ar: 'بيانو وغيتار وعود وغناء، لكل المستويات' },
  hero: {
    title: { fr: 'Jouer son premier morceau en trois mois.', ar: 'عزف أول مقطوعة خلال ثلاثة أشهر.' },
    sub: {
      fr: 'Cours individuels et en petits groupes, de six ans à soixante-dix ans. Instruments prêtés pour les débutants, auditions publiques deux fois par an.',
      ar: 'دروس فردية وفي مجموعات صغيرة، من سن السادسة إلى السبعين. آلات مُعارة للمبتدئين وحفلات عامة مرتين في السنة.',
    },
    cta: { fr: 'Réserver un cours d’essai', ar: 'احجزوا حصة تجريبية' },
  },
  heroImage: {
    alt: {
      fr: 'Mains d’un élève jouant du piano dans une salle ensoleillée, avec une guitare acoustique et une partition en arrière-plan',
      ar: 'يدا متعلم تعزفان على البيانو في قاعة مشمسة، وخلفه غيتار أكوستيك وورقة نوتة',
    },
  },
  about: {
    title: { fr: 'Une école où l’on joue dès le premier cours', ar: 'مدرسة يُعزف فيها منذ الحصة الأولى' },
    body: {
      fr: [
        'Le Conservatoire Libre Mélodie a ouvert à Casablanca en 2010, fondé par une pianiste diplômée du conservatoire de Rabat et un joueur d’oud de Tétouan.',
        'Nous mêlons musique classique, andalouse et actuelle. Chaque élève travaille un morceau qu’il aime dès le premier mois, sans attendre la fin du solfège.',
      ],
      ar: [
        'افتُتح معهد ملودي الحر بالدار البيضاء سنة 2010 على يد عازفة بيانو خريجة معهد الرباط وعازف عود من تطوان.',
        'نمزج بين الموسيقى الكلاسيكية والأندلسية والمعاصرة. يشتغل كل متعلم على مقطوعة يحبها منذ الشهر الأول دون انتظار نهاية السولفيج.',
      ],
    },
  },
  servicesTitle: { fr: 'Cours et tarifs mensuels', ar: 'الدروس والأثمنة الشهرية' },
  services: [
    {
      name: { fr: 'Piano (cours individuel, 4 séances)', ar: 'بيانو (درس فردي، 4 حصص)' },
      desc: {
        fr: 'Quarante-cinq minutes par semaine, piano mis à disposition.',
        ar: 'خمس وأربعون دقيقة أسبوعيًا مع بيانو متاح للتدرب.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Guitare (cours individuel, 4 séances)', ar: 'غيتار (درس فردي، 4 حصص)' },
      desc: {
        fr: 'Classique, folk ou électrique, guitare prêtée au début.',
        ar: 'كلاسيكي أو فولك أو كهربائي، مع غيتار مُعار في البداية.',
      },
      priceMad: 550,
    },
    {
      name: { fr: 'Oud et musique andalouse', ar: 'العود والموسيقى الأندلسية' },
      desc: {
        fr: 'Séances individuelles avec un maître d’oud, quatre par mois.',
        ar: 'حصص فردية مع أستاذ عود، أربع في الشهر.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Chant (petit groupe de 5)', ar: 'غناء (مجموعة صغيرة من 5)' },
      desc: {
        fr: 'Technique vocale et répertoire, deux séances par semaine.',
        ar: 'تقنية الصوت والريبرتوار، حصتان في الأسبوع.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Éveil musical (6–9 ans)', ar: 'التربية الموسيقية (6–9 سنوات)' },
      desc: {
        fr: 'Rythme, chant et découverte des instruments, en groupe.',
        ar: 'إيقاع وغناء واكتشاف الآلات داخل مجموعة.',
      },
      priceMad: 300,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous rejoindre', ar: 'لماذا تنضمون إلينا' },
  highlights: [
    { fr: 'Premier cours d’essai offert', ar: 'الحصة التجريبية الأولى مجانية' },
    { fr: 'Instruments prêtés', ar: 'آلات مُعارة' },
    { fr: 'Auditions deux fois par an', ar: 'حفلات مرتين في السنة' },
    { fr: 'De 6 à 70 ans', ar: 'من 6 إلى 70 سنة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ma fille a joué son premier morceau en deux mois. Elle réclame son cours chaque semaine.',
        ar: 'عزفت ابنتي أول مقطوعة في شهرين. وتطلب حصتها كل أسبوع.',
      },
      author: { fr: 'Najat, Casablanca', ar: 'نجاة، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'À cinquante ans, je me suis mis à l’oud. Mon professeur ne m’a jamais fait sentir en retard.',
        ar: 'في الخمسين بدأت العزف على العود. ولم يشعرني أستاذي يومًا بأنني متأخر.',
      },
      author: { fr: 'Abderrahim, Mohammedia', ar: 'عبد الرحيم، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 27 18 36',
    whatsapp: '212600334455',
    email: 'contact@example.com',
    address: {
      fr: '19 rue Jean Jaurès, Gauthier, Casablanca',
      ar: '19 زنقة جان جوريس، كوتييه، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 14h – 20h30', 'Samedi : 9h – 18h'],
      ar: ['الاثنين – الجمعة: 14:00 – 20:30', 'السبت: 9:00 – 18:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un cours d’essai de ... pour un élève de ... ans. Quels créneaux avez-vous ?',
      ar: 'السلام عليكم، أرغب في حصة تجريبية في ... لمتعلم عمره ... سنوات. ما هي الأوقات المتاحة؟',
    },
  },
};
