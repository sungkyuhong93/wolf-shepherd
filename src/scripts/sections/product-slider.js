import $ from 'jquery';
import _ from 'slick-carousel';
import Drift from 'drift-zoom';
import jsWidth from '../helpers/screenWidths';

const selectors = {
  zoomImage: '[js-product-gallery="zoom"]',
  zoomPane: '[js-product-gallery="zoomPane"]',
};

export default () => {

  const nodeSelectors = {
    zoomImage: document.querySelectorAll(selectors.zoomImage),
    zoomPane: document.querySelector(selectors.zoomPane),
  };

   /**
   * Options for Drift zoom.
   */
  const zoomOptions = {
    touchBoundingBox: true,
    paneContainer: nodeSelectors.zoomPane,
    zoomFactor: 2,
  };

  /**
   * Instance globals.
   */
  const zoomImages = {};

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
      dots: true,
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

    setZoomEvents();
  }

  function setZoomEvents() {
    const windowWidth = $(window).width();

    if (windowWidth >= jsWidth.tablet) {
      [...nodeSelectors.zoomImage].forEach((element, index) => {
        // console.log(element);
        zoomImages[index] = new Drift(element.querySelector('img'), zoomOptions);
      });
    }
  }

  /**
   * Public interface.
   */
  return Object.freeze({
    init,
  });

};
