import type { SiteContent } from '../types.ts';

export const interiorDesigner: SiteContent = {
  id: 'interior-designer',
  name: { fr: 'Atelier Lumière', ar: 'أتيليه النور' },
  schemaType: 'InteriorDesigner',
  tagline: { fr: 'Architecture d’intérieur sur mesure', ar: 'تصميم داخلي مخصص' },
  hero: {
    title: {
      fr: 'Repensez chaque pièce, du plan à la dernière étagère.',
      ar: 'أعيدوا تصور كل غرفة، من المخطط إلى آخر رف.',
    },
    sub: {
      fr: 'Plans d’aménagement, choix des matériaux et suivi de chantier pour un intérieur cohérent, pensé pour votre façon de vivre.',
      ar: 'مخططات تهيئة واختيار للمواد ومتابعة للأشغال من أجل داخل منسجم مصمم حسب أسلوب حياتكم.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Table d’atelier en bois couverte d’échantillons de tissus, de nuanciers de peinture et d’un ordinateur portable affichant un plan d’aménagement',
      ar: 'طاولة مرسم خشبية مغطاة بعينات أقمشة ودفاتر ألوان وحاسوب محمول يعرض مخطط تهيئة',
    },
  },
  about: {
    title: {
      fr: 'Un seul fil conducteur, du premier croquis à la pose finale',
      ar: 'خيط واحد موجّه، من أول رسم إلى آخر تركيب',
    },
    body: {
      fr: [
        'Atelier Lumière accompagne particuliers et petits commerces dans la refonte complète de leurs espaces : plans, matières, mobilier et éclairage pensés ensemble.',
        'Nous travaillons avec un réseau d’artisans et de fournisseurs de confiance, pour que le projet tienne les délais et le budget annoncés.',
      ],
      ar: [
        'يرافق أتيليه النور الأفراد والمحلات الصغيرة في إعادة تصميم فضاءاتهم بشكل كامل: مخططات ومواد وأثاث وإنارة مدروسة معاً.',
        'نعمل مع شبكة من الحرفيين والموردين الموثوقين، لنضمن احترام الآجال والميزانية المعلنة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Consultation et plan d’aménagement', ar: 'استشارة ومخطط تهيئة' },
      desc: {
        fr: 'Visite du lieu, relevé de mesures et premières pistes d’agencement.',
        ar: 'زيارة الموقع وأخذ القياسات ووضع أولى أفكار التهيئة.',
      },
      priceMad: 800,
    },
    {
      name: { fr: 'Sélection matériaux et mobilier', ar: 'اختيار المواد والأثاث' },
      desc: {
        fr: 'Planche d’ambiance, revêtements, mobilier et éclairage choisis ensemble.',
        ar: 'لوحة أجواء وتغطيات وأثاث وإنارة يتم اختيارها معاً.',
      },
    },
    {
      name: { fr: 'Suivi de chantier', ar: 'متابعة الأشغال' },
      desc: {
        fr: 'Coordination des artisans et vérification de chaque étape.',
        ar: 'تنسيق الحرفيين والتحقق من كل مرحلة.',
      },
    },
    {
      name: { fr: 'Home staging', ar: 'تهيئة قبل البيع أو الكراء' },
      desc: {
        fr: 'Valoriser un bien avant mise en vente ou location.',
        ar: 'إبراز قيمة العقار قبل عرضه للبيع أو الكراء.',
      },
      priceMad: 3500,
    },
    {
      name: { fr: 'Décoration clé en main', ar: 'ديكور جاهز بالكامل' },
      desc: {
        fr: 'Du plan à la pose, projet livré entièrement meublé et décoré.',
        ar: 'من المخطط إلى التركيب، مشروع يُسلَّم مفروشاً ومزيناً بالكامل.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi travailler avec nous', ar: 'لماذا تعملون معنا' },
  highlights: [
    { fr: 'Une seule interlocutrice sur tout le projet', ar: 'مرجع واحد طوال المشروع' },
    { fr: 'Réseau d’artisans vérifiés', ar: 'شبكة حرفيين موثوقين' },
    { fr: 'Budget détaillé avant chaque étape', ar: 'ميزانية مفصلة قبل كل مرحلة' },
    { fr: 'Visite 3D avant travaux', ar: 'معاينة ثلاثية الأبعاد قبل الأشغال' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Notre salon ne ressemble plus du tout à l’ancien, dans le bon sens du terme.',
        ar: 'صالوننا لم يعد يشبه القديم إطلاقاً، وهذا بالمعنى الإيجابي.',
      },
      author: { fr: 'Leila, Anfa', ar: 'ليلى، أنفا' },
    },
    {
      quote: {
        fr: 'Projet livré dans les délais, avec des choix de matières qu’on n’aurait jamais trouvés seuls.',
        ar: 'تم تسليم المشروع في الوقت المحدد، مع اختيارات للمواد ما كنا لنجدها بمفردنا.',
      },
      author: { fr: 'Youssef, Racine', ar: 'يوسف، الراسين' },
    },
  ],
  contact: {
    phone: '+212 5 22 55 66 77',
    whatsapp: '212655667788',
    email: 'contact@example.com',
    address: {
      fr: '19 rue Jean Jaurès, Racine, Casablanca',
      ar: '19 زنقة جان جوريس، الراسين، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h30', 'Samedi sur rendez-vous'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:30', 'السبت بموعد مسبق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un rendez-vous pour un projet d’aménagement de ...',
      ar: 'السلام عليكم، أرغب في موعد لمشروع تهيئة ...',
    },
  },
};
