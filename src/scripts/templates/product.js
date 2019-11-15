import {load} from '@shopify/theme-sections';

import '../sections/product';
import '../sections/swatch';
import ProductSlider from '../sections/product-slider';
import '../sections/size-guide';
import '../sections/testimonials';
// import '../sections/recently-viewed';

import '../components/accordion';


document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  // ProductSlider().initRelatedViewed();
  load('*');
});
