import type { SiteContent } from '../types.ts';

export const obGynClinic: SiteContent = {
  id: 'ob-gyn-clinic',
  name: { fr: 'Cabinet de Gynécologie Néma', ar: 'عيادة أمراض النساء نعمى' },
  schemaType: 'MedicalClinic',
  tagline: { fr: 'Gynécologie et suivi de grossesse', ar: 'أمراض النساء ومتابعة الحمل' },
  hero: {
    title: {
      fr: 'Un suivi gynécologique à l’écoute, à chaque étape.',
      ar: 'متابعة نسائية تُصغي إليكِ في كل مرحلة.',
    },
    sub: {
      fr: 'Consultations gynécologiques, suivi de grossesse et échographies, dans un cabinet pensé pour la confidentialité et le confort.',
      ar: 'استشارات نسائية ومتابعة حمل وفحوصات بالموجات فوق الصوتية، في عيادة تحترم الخصوصية والراحة.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزي موعدك' },
  },
  heroImage: {
    alt: {
      fr: 'Salon de consultation chaleureux avec fauteuils en velours vert, bureau en bois et bibliothèque',
      ar: 'صالة استشارة دافئة بكراسي مخملية خضراء ومكتب خشبي ورفوف كتب',
    },
  },
  about: {
    title: { fr: 'Une écoute avant tout', ar: 'الإصغاء أولاً' },
    body: {
      fr: [
        'Le cabinet Néma accompagne les femmes à chaque étape de leur vie gynécologique : consultations de routine, contraception, ménopause et suivi de grossesse.',
        'Chaque rendez-vous commence par une discussion sans jugement, dans un espace pensé pour la confidentialité et la sérénité.',
      ],
      ar: [
        'ترافق عيادة نعمى النساء في كل مرحلة من حياتهن النسائية: استشارات روتينية، وسائل منع الحمل، سن اليأس ومتابعة الحمل.',
        'يبدأ كل موعد بحوار بدون أحكام مسبقة، في فضاء صُمم لاحترام الخصوصية والطمأنينة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos consultations', ar: 'استشاراتنا' },
  services: [
    {
      name: { fr: 'Consultation gynécologique', ar: 'استشارة أمراض النساء' },
      desc: {
        fr: 'Examen de routine, dépistage et contraception.',
        ar: 'فحص روتيني، كشف مبكر ووسائل منع الحمل.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Suivi de grossesse', ar: 'متابعة الحمل' },
      desc: {
        fr: 'Consultations mensuelles du premier au neuvième mois.',
        ar: 'استشارات شهرية من الشهر الأول إلى التاسع.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Échographie obstétricale', ar: 'فحص بالموجات فوق الصوتية للحمل' },
      desc: {
        fr: 'Suivi de la croissance et du bien-être du bébé.',
        ar: 'متابعة نمو الجنين وسلامته.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Frottis de dépistage', ar: 'مسحة عنق الرحم' },
      desc: {
        fr: 'Dépistage du col de l’utérus, résultat sous 10 jours.',
        ar: 'الكشف عن أمراض عنق الرحم، والنتيجة خلال 10 أيام.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Consultation ménopause', ar: 'استشارة سن اليأس' },
      desc: {
        fr: 'Accompagnement hormonal et conseils au quotidien.',
        ar: 'مرافقة هرمونية ونصائح يومية.',
      },
      priceMad: 350,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi Néma', ar: 'لماذا نعمى' },
  highlights: [
    {
      fr: 'Rendez-vous le jour même pour urgences légères',
      ar: 'مواعيد في نفس اليوم للحالات الطفيفة المستعجلة',
    },
    { fr: 'Salle d’attente séparée et discrète', ar: 'صالة انتظار منفصلة وهادئة' },
    { fr: 'Échographe nouvelle génération', ar: 'جهاز موجات فوق صوتية حديث' },
    { fr: 'Équipe entièrement féminine', ar: 'طاقم نسائي بالكامل' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'J’ai suivi toute ma grossesse ici, toujours rassurée après chaque visite.',
        ar: 'تابعت حملي بأكمله هنا، وكنت أخرج مطمئنة بعد كل زيارة.',
      },
      author: { fr: 'Houda, Meknès', ar: 'هدى، مكناس' },
    },
    {
      quote: {
        fr: 'Une équipe qui prend le temps d’expliquer sans jamais me faire sentir pressée.',
        ar: 'طاقم يأخذ وقته في الشرح دون أن يشعرني بالاستعجال أبداً.',
      },
      author: { fr: 'Imane, Meknès', ar: 'إيمان، مكناس' },
    },
  ],
  contact: {
    phone: '+212 5 35 40 50 60',
    whatsapp: '212635405060',
    email: 'contact@example.com',
    address: {
      fr: '27 avenue des FAR, Ville Nouvelle, Meknès',
      ar: '27 شارع القوات المسلحة الملكية، المدينة الجديدة، مكناس',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour ... le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد من أجل ... يوم ... على الساعة ...',
    },
  },
};
