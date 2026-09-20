export type Lang = 'fr' | 'ar';
export const LANGS: readonly Lang[] = ['fr', 'ar'];

export interface Localized<T> {
  fr: T;
  ar: T;
}

export type TemplateId = 'restaurant' | 'barber' | 'dentist' | 'gym';

export interface ServiceItem {
  name: Localized<string>;
  desc: Localized<string>;
  /** Price in MAD. Omit for "on quote". */
  priceMad?: number;
}

export interface SiteContent {
  id: TemplateId;
  /** Used for the <title> and JSON-LD. */
  name: Localized<string>;
  /** schema.org type, e.g. Restaurant, HealthClub. */
  schemaType: string;
  tagline: Localized<string>;
  hero: { title: Localized<string>; sub: Localized<string>; cta: Localized<string> };
  about: { title: Localized<string>; body: Localized<string[]> };
  servicesTitle: Localized<string>;
  services: ServiceItem[];
  highlightsTitle: Localized<string>;
  highlights: Localized<string>[];
  testimonials: { quote: Localized<string>; author: Localized<string> }[];
  contact: {
    phone: string;
    /** International digits only, no plus, e.g. 212600000000. */
    whatsapp: string;
    email: string;
    address: Localized<string>;
    hours: Localized<string[]>;
    /** Message pre-filled when a visitor taps the WhatsApp button. */
    whatsappMessage: Localized<string>;
  };
}
