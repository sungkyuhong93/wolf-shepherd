/**
 * Template: Articlecollectionslider
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
 * @namespace articlecollectionslider
 */


import $ from 'jquery';
import _ from 'slick-carousel';
import jsWidth from '../helpers/screenWidths';

/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    $container: $('.collection-carousel--article'),
  };

  function init() {
    slickRender(selectors.$container);
  }

  function slickRender(slider) {
    slider.slick(getSliderSettings());
  }

  function getSliderSettings() {
    return {
      arrows: true,
      vertical: false,
      prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
      nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: jsWidth.mac13,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '32%',
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '25%',
          },
        },
      ],
    }
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};


