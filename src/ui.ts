import type { Lang, Localized } from './types.ts';

export const UI: Record<string, Localized<string>> = {
  skip: { fr: 'Aller au contenu', ar: 'انتقل إلى المحتوى' },
  navAbout: { fr: 'À propos', ar: 'من نحن' },
  navServices: { fr: 'Tarifs', ar: 'الأسعار' },
  navContact: { fr: 'Contact', ar: 'اتصل بنا' },
  langSwitch: { fr: 'العربية', ar: 'Français' },
  langSwitchLabel: { fr: 'Lire ce site en arabe', ar: 'قراءة الموقع بالفرنسية' },
  currency: { fr: 'MAD', ar: 'درهم' },
  onQuote: { fr: 'Sur devis', ar: 'حسب الطلب' },
  testimonials: { fr: 'Ils en parlent', ar: 'آراء الزبناء' },
  contactTitle: { fr: 'Nous trouver', ar: 'كيف تجدنا' },
  hours: { fr: 'Horaires', ar: 'أوقات العمل' },
  address: { fr: 'Adresse', ar: 'العنوان' },
  call: { fr: 'Appeler', ar: 'اتصل' },
  whatsapp: { fr: 'Écrire sur WhatsApp', ar: 'راسلنا على واتساب' },
  rights: { fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.' },
  nav: { fr: 'Navigation principale', ar: 'التنقل الرئيسي' },
};

export function t(key: string, lang: Lang): string {
  const entry = UI[key];
  if (!entry) throw new Error(`Missing UI string: ${key}`);
  return entry[lang];
}
