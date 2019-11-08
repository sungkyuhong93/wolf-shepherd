import {load} from '@shopify/theme-sections';
import '../sections/slideshow';
import '../sections/newsletter';
import '../sections/testimonials';
import '../sections/collection-list';
import '../sections/video';

import '../sections/collection-page';
import '../sections/swatch';

document.addEventListener('DOMContentLoaded', () => {
  load('*');
});