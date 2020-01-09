/**
 * Template: Articlecollectionslider
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
 * @namespace articlecollectionslider
 */


import Swiper from 'swiper';

/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    container: '.collection-carousel--article',
  };

  function init() {
    sliderRender(selectors.container);
  }

  function sliderRender(slider) {
    const swiper = new Swiper(slider, {
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
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};


