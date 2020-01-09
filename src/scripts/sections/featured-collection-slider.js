import {register} from '@shopify/theme-sections';
import Swiper from 'swiper';

register('featured-collection-section', {
  onLoad() {
    this.init();
  },

  init() {
    this.cleanSlide(this.id);
  },

  cleanSlide(id) {
    const target = `.collection-carousel--${id}`;
    const swiper = new Swiper(target, {
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
          centeredSlides: true,
          centeredSlidesBounds: true,
          freeModeSticky: true,
        },
        790: {
          slidesPerView: 4,
          spaceBetween: 16,
          centeredSlides: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  },
});

