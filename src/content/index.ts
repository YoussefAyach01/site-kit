import type { SiteContent } from '../types.ts';
import { restaurant } from './restaurant.ts';
import { barber } from './barber.ts';
import { dentist } from './dentist.ts';
import { gym } from './gym.ts';

export const TEMPLATES: readonly SiteContent[] = [restaurant, barber, dentist, gym];
