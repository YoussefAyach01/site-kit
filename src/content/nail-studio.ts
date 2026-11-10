import type { SiteContent } from '../types.ts';

export const nailStudio: SiteContent = {
  id: 'nail-studio',
  name: { fr: 'Nail Bar Velours', ar: 'ستوديو الأظافر المخملي' },
  schemaType: 'NailSalon',
  tagline: { fr: 'Manucure et pose d’ongles', ar: 'مانيكير وتركيب أظافر' },
  hero: {
    title: { fr: 'Des mains qu’on remarque.', ar: 'أيادٍ يلاحظها الجميع.' },
    sub: {
      fr: 'Manucure, pédicure et poses semi-permanentes dans un salon pensé pour la détente, avec plus de quarante teintes en stock.',
      ar: 'مانيكير وباديكير وتركيب شبه دائم في صالون مصمم للاسترخاء، مع أكثر من أربعين درجة لون متوفرة.',
    },
    cta: { fr: 'Réserver une place', ar: 'احجزوا مكانكم' },
  },
  heroImage: {
    alt: {
      fr: 'Table en travertin avec rangées de vernis à ongles, lampe plissée allumée et fauteuils en bouclette terracotta',
      ar: 'طاولة من الترافرتين بصفوف من طلاء الأظافر ومصباح مطوي مضاء وكراسي مخملية بلون طيني',
    },
  },
  about: {
    title: {
      fr: 'Un salon qui prend soin de vos ongles, pas seulement de leur couleur',
      ar: 'صالون يعتني بأظافركم، لا بلونها فقط',
    },
    body: {
      fr: [
        'Nail Bar Velours a été pensé comme un salon de maison : fauteuils moelleux, lumière douce, et une équipe formée aux techniques de pose longue durée.',
        'Chaque prestation commence par un soin de la cuticule et de la peau, pour des ongles sains sous le vernis.',
      ],
      ar: [
        'صُمم ستوديو الأظافر المخملي كصالون منزلي: كراسي مريحة وضوء لطيف وفريق مدرّب على تقنيات التركيب طويل الأمد.',
        'تبدأ كل خدمة بعناية بالجلدة والبشرة المحيطة، لأظافر صحية تحت الطلاء.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Manucure classique', ar: 'مانيكير كلاسيكي' },
      desc: {
        fr: 'Limage, cuticules et pose de vernis au choix.',
        ar: 'برد وتهذيب الجلدة وطلاء حسب الاختيار.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Semi-permanent', ar: 'طلاء شبه دائم' },
      desc: {
        fr: 'Tient jusqu’à trois semaines sans écaillage.',
        ar: 'يدوم حتى ثلاثة أسابيع دون تقشر.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Pose gel/capsules', ar: 'تركيب جل/كبسولات' },
      desc: {
        fr: 'Rallongement et renforcement, forme au choix.',
        ar: 'إطالة وتقوية بالشكل الذي تختارونه.',
      },
      priceMad: 280,
    },
    {
      name: { fr: 'Pédicure spa', ar: 'باديكير سبا' },
      desc: { fr: 'Bain, gommage, massage et vernis.', ar: 'نقع وتقشير وتدليك وطلاء.' },
      priceMad: 220,
    },
    {
      name: { fr: 'Nail art', ar: 'فن الأظافر' },
      desc: {
        fr: 'Motifs personnalisés, selon modèle ou inspiration.',
        ar: 'رسومات مخصصة حسب نموذج أو إلهام.',
      },
      priceMad: 50,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nos clientes reviennent', ar: 'لماذا تعود زبوناتنا' },
  highlights: [
    { fr: 'Plus de 40 teintes en stock', ar: 'أكثر من 40 درجة لون متوفرة' },
    { fr: 'Matériel stérilisé entre chaque cliente', ar: 'أدوات معقمة بين كل زبونة' },
    { fr: 'Thé et café offerts', ar: 'شاي وقهوة مجاناً' },
    { fr: 'Réservation en ligne', ar: 'حجز عبر الإنترنت' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Mon semi-permanent tient vraiment trois semaines, c’est la première fois.',
        ar: 'طلائي شبه الدائم يدوم فعلاً ثلاثة أسابيع، هذه أول مرة.',
      },
      author: { fr: 'Oumaima, Rabat', ar: 'أميمة، الرباط' },
    },
    {
      quote: {
        fr: 'Le salon le plus propre et le plus calme où je sois allée.',
        ar: 'أنظف وأهدأ صالون زرته على الإطلاق.',
      },
      author: { fr: 'Nawal, Rabat', ar: 'نوال، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 37 22 33 44',
    whatsapp: '212637223344',
    email: 'contact@example.com',
    address: {
      fr: '27 avenue Allal Ben Abdellah, Rabat',
      ar: '27 شارع علال بن عبد الله، الرباط',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 20h', 'Dimanche : 10h – 16h'],
      ar: ['الاثنين – السبت: 9:00 – 20:00', 'الأحد: 10:00 – 16:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une place pour une manucure/pédicure le ... à ...h.',
      ar: 'السلام عليكم، أود حجز مكان لمانيكير/باديكير يوم ... على الساعة ...',
    },
  },
};
