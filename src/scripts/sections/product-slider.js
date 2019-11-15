import $ from 'jquery';
import _ from 'slick-carousel';

export default () => {

  function slickRender(slider, nav) {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: nav,
    });

    nav.slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: slider,
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      vertical: false,
      verticalSwiping: false,
    });
  }

  function slickLoop() {
    $.each($('.product-images__container'), function() {
      const slider = $(this).attr('data-slider');
      const nav = $(this).attr('data-nav');
      const $slider = $(`#${slider}`);
      const $nav = $(`#${nav}`);
      slickRender($slider, $nav);
    });
  }

  function init() {
    slickLoop();
  }

  /**
   * Public interface.
   */
  return Object.freeze({
    init,
  });

};
