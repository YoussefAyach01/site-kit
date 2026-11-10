import type { SiteContent } from '../types.ts';

export const realEstateAgency: SiteContent = {
  id: 'real-estate-agency',
  name: { fr: 'Agence Les Clés d’Anfa', ar: 'وكالة مفاتيح أنفا العقارية' },
  schemaType: 'RealEstateAgent',
  tagline: { fr: 'Vente, location et gestion immobilière', ar: 'بيع وكراء وتدبير عقاري' },
  hero: {
    title: { fr: 'Trouvez la porte qui s’ouvre pour vous.', ar: 'اعثروا على الباب الذي يفتح لكم.' },
    sub: {
      fr: 'Appartements, villas et locaux commerciaux à Casablanca. Visites organisées selon votre emploi du temps, estimation gratuite, accompagnement jusqu’à la remise des clés.',
      ar: 'شقق وفيلات ومحلات تجارية بالدار البيضاء. زيارات حسب وقتكم، وتقدير مجاني، ومرافقة حتى تسليم المفاتيح.',
    },
    cta: { fr: 'Organiser une visite', ar: 'نظّموا زيارة' },
  },
  heroImage: {
    alt: {
      fr: 'Main d’une agente tenant un trousseau de clés devant une maison moderne en bois et pierre au coucher du soleil',
      ar: 'يد وكيلة عقارية تمسك مفاتيح أمام منزل عصري من الخشب والحجر وقت الغروب',
    },
  },
  about: {
    title: { fr: 'Une agence de quartier, un réseau de confiance', ar: 'وكالة حيّ وشبكة ثقة' },
    body: {
      fr: [
        'Les Clés d’Anfa est une agence familiale installée depuis 2009 entre Anfa et Maârif. Nous connaissons chaque rue, chaque immeuble et le prix réel du mètre carré.',
        'Pas de promesses gonflées : nous estimons au prix du marché, nous vérifions les titres fonciers avant toute mise en vente.',
      ],
      ar: [
        '"مفاتيح أنفا" وكالة عائلية تعمل منذ 2009 بين أنفا والمعاريف. نعرف كل شارع وكل عمارة والثمن الحقيقي للمتر المربع.',
        'لا وعود مبالغ فيها: نقدّر بثمن السوق، ونتحقق من الرسوم العقارية قبل أي عرض للبيع.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Estimation de votre bien', ar: 'تقدير ثمن عقاركم' },
      desc: {
        fr: 'Visite et avis de valeur écrit sous 48 heures, sans engagement.',
        ar: 'زيارة ورأي مكتوب حول القيمة خلال 48 ساعة دون أي التزام.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Mise en vente (mandat)', ar: 'عرض للبيع (وكالة)' },
      desc: {
        fr: 'Photos professionnelles, annonces, visites filtrées. Commission de 2,5 % à la vente.',
        ar: 'صور احترافية وإعلانات وزيارات مُنتقاة. عمولة 2,5 % عند البيع.',
      },
    },
    {
      name: { fr: 'Recherche pour acheteur', ar: 'بحث لفائدة مشترٍ' },
      desc: {
        fr: 'Nous cherchons selon vos critères et vous présentons uniquement les biens pertinents.',
        ar: 'نبحث حسب معاييركم ونعرض عليكم فقط العقارات المناسبة.',
      },
    },
    {
      name: { fr: 'Mise en location', ar: 'عرض للكراء' },
      desc: {
        fr: 'Sélection des locataires, rédaction du bail et état des lieux. Un mois de loyer.',
        ar: 'انتقاء المكترين وتحرير عقد الكراء ومحضر المعاينة. مقابل شهر كراء.',
      },
    },
    {
      name: { fr: 'Gestion locative', ar: 'تدبير الكراء' },
      desc: {
        fr: 'Encaissement des loyers, suivi des travaux et relevé mensuel.',
        ar: 'استخلاص الكراء ومتابعة الأشغال وكشف شهري.',
      },
      priceMad: 300,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Estimation gratuite', ar: 'تقدير مجاني' },
    { fr: 'Titres fonciers vérifiés', ar: 'رسوم عقارية موثّقة' },
    { fr: 'Visites sur rendez-vous', ar: 'زيارات بموعد' },
    { fr: 'Accompagnement notarial', ar: 'مرافقة لدى الموثق' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Appartement vendu en trois semaines, au prix annoncé dès le départ. Très honnête.',
        ar: 'بيعت الشقة في ثلاثة أسابيع بالثمن المعلن منذ البداية. صدق كبير.',
      },
      author: { fr: 'Loubna, Casablanca', ar: 'لبنى، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils m’ont fait visiter huit biens en une matinée et j’ai trouvé le bon.',
        ar: 'أروني ثمانية عقارات في صباح واحد ووجدت المناسب منها.',
      },
      author: { fr: 'Omar, Rabat', ar: 'عمر، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 22 88 99 11',
    whatsapp: '212688991122',
    email: 'contact@example.com',
    address: {
      fr: '3 boulevard d’Anfa, Casablanca',
      ar: '3 شارع أنفا، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h30 – 19h', 'Dimanche : visites sur rendez-vous'],
      ar: ['الاثنين – السبت: 9:30 – 19:00', 'الأحد: زيارات بموعد'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je cherche à ... un bien à ... (budget : ...). Pouvez-vous me rappeler ?',
      ar: 'السلام عليكم، أرغب في ... عقار بمنطقة ... (الميزانية: ...). هل يمكنكم الاتصال بي؟',
    },
  },
};
