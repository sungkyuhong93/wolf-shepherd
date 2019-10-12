import {load} from '@shopify/theme-sections';
import '../sections/slideshow';
import '../sections/newsletter';
import '../sections/testimonials';
import '../sections/video';

import '../sections/featured-collection-slider';
import '../sections/collection-page';
import '../sections/product-slider';
import '../sections/swatch';
import '../sections/size-guide';

import '../components/accordion';

document.addEventListener('DOMContentLoaded', () => {
  load('*');
});