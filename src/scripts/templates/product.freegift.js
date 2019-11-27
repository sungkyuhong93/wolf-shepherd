import {load} from '@shopify/theme-sections';
import ProductSlider from '../sections/product-slider';
import '../sections/size-guide';


document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  load('*');
});
