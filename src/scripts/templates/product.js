import {load} from '@shopify/theme-sections';

// import Swatch from '../sections/swatch';
import ProductSlider from '../sections/product-slider';
import '../sections/size-guide';

import '../components/accordion';


document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  // Swatch().init();
  load('*');
});
