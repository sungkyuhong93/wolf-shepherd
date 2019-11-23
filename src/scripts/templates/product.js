import {load} from '@shopify/theme-sections';

import '../sections/product';
import '../sections/product-miniform';
import ProductSlider from '../sections/product-slider';
import '../sections/size-guide';

import '../components/accordion';


document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  load('*');
});
