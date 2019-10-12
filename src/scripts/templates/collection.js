import {load} from '@shopify/theme-sections';

import '../sections/featured-collection-slider';
import '../sections/collection-page';
import '../sections/swatch';

document.addEventListener('DOMContentLoaded', () => {
  load('*');
});