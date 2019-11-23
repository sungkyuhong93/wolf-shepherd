import {load} from '@shopify/theme-sections';
import '../sections/slideshow';
import '../sections/newsletter';
import '../sections/collection-list';

document.addEventListener('DOMContentLoaded', () => {
  load('*');
});