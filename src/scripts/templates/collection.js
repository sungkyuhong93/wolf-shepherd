import {load} from '@shopify/theme-sections';
import stickyFilter from '../sections/sticky-filter';

document.addEventListener('DOMContentLoaded', () => {
  stickyFilter().init();
  load('*');
});