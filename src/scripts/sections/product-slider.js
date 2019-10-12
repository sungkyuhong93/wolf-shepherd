import $ from 'jquery';
import _ from 'slick-carousel';

export default () => {

  function slickRender() {
    $('.main-product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider-nav',
    });

    $('.product-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-product-slider',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      vertical: false,
      verticalSwiping: false,
    });
  }

  function init() {
    slickRender();
  }

  /**
   * Public interface.
   */
  return Object.freeze({
    init,
  });

};
