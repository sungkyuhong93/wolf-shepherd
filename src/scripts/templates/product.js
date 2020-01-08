import {load} from '@shopify/theme-sections';
import ProductSlider from '../sections/product-slider';
import '../sections/product';
import '../sections/product-miniform';

import '../sections/size-guide';
import SwatchProduct from '../sections/swatch-product';

document.addEventListener('DOMContentLoaded', () => {
  ProductSlider().init();
  SwatchProduct({
    container: '[js-swatch-product="main"]',
    updateSlider: true,
  }).init();
  SwatchProduct({
    container: '[data-section-type="product-miniform"]',
    updateSlider: false,
  }).init();

  load('*');
});
