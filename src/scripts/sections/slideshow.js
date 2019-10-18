import $ from 'jquery';
import _ from 'slick-carousel';
import {register} from '@shopify/theme-sections';

register('slideshow', {
  onLoad() {
    this.init();
  },

  init() {
    this.slickRender();
  },

  slickRender() {
    const $slideshow = $('.slideshow__container');
    $slideshow.slick(this.getSliderSettings());
  },

  getSliderSettings() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
    };
  },

  onBlockSelect: (blockId) => { 
    const $blockClass = $(`.slideshow__slide--${blockId}`).closest('.slick-slide');
    const slideIndex  = $blockClass.attr('data-slick-index');
    $('.slideshow__container').slick('goTo', slideIndex);
  },

  onSelect: () => {
    // $('.slideshow__container').slick(this.getSliderSettings());
  },
});
