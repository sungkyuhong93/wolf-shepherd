/**
 * Template: Article
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
 * @namespace article
 */


import $ from 'jquery';
import _ from 'slick-carousel';

/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    $container: $('.article__slider'),
  };

  function init() {
    slickRender(selectors.$container);
  }

  function slickRender(slider) {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: true,
      prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
      nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
    });
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};
