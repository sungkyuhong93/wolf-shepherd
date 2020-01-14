/**
 * Component: Collection Grid Item
 * ------------------------------------------------------------------------------
 * A Collection Grid item file that contains scripts to function.
 *
 * @namespace collectionGridItem
 */
// import $ from 'jquery';
import Swiper from 'swiper';


/**
 * DOM selectors.
 */
const selectors = {
  swatchSlider: '[js-swatch-slider="true"]',
};

/**
 * Create a new quick add object.
 * @param {object} config - Settings object defined when instantiating.
 */
export default () => {

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    swatchSlider: document.querySelectorAll(selectors.swatchSlider),
  };


  /**
   * Initialise component.
   */
  function init() {
    console.log('watch is running')
    setTriggerEvents();
  }

  /**
   * Set trigger listeners.
   */
  function setTriggerEvents() {
    createSlider();
  }

  function createSlider() {
    const swiper = new Swiper('[js-swatch-slider="true"]', {
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        // when window width is >= 320px
        300: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
          // centeredSlidesBounds: true,
        },
        790: {
          slidesPerView: 5,
          spaceBetween: 10,
          centeredSlides: false,
        }
      }
    });

    console.log('Swipe on')
  }


  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
  });
};
