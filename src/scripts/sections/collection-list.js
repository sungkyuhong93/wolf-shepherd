import {register} from '@shopify/theme-sections';
import Swiper from 'swiper';

register('collection-list', {

  onLoad() {
    this.cleanSlide(this.id);
  },

  cleanSlide(id) {
    const target = `.collection-list--${id}`;
    const swiper = new Swiper(target, {
      slidesPerView: 3,
      // loop: true,
      freeMode: true,
      breakpoints: {
        // when window width is >= 320px
        300: {
          slidesPerView: 1.3, 
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
        660: {
          slidesPerView: 2.3,
          centeredSlides: false,
        },
        960: {
          slidesPerView: 3,
          centeredSlides: false,
        }
      }
    });
  },
});
