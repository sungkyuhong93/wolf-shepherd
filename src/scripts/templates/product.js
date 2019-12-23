import {load} from '@shopify/theme-sections';
import ProductSlider from '../sections/product-slider';
import '../sections/size-guide';

import '../components/slide-to';

document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  load('*');
});
