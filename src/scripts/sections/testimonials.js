import $ from 'jquery';
import _ from 'slick-carousel';
import {register} from '@shopify/theme-sections';

register('testimonials', {
  onLoad() {
    console.log('testie')
    this.init();
  },

  init() {
    this.slickRender();
  },

  slickRender() {
    const $slideshow = $('.testimonials__slider');
    $slideshow.slick(this.getSliderSettings());
  },

  getSliderSettings() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: true,
    };
  },

  onBlockSelect: (blockId) => { 
    const $blockClass = $(`.testimonials__slide--${blockId}`).closest('.slick-slide');
    const slideIndex = $blockClass.attr('data-slick-index');
    $('.testimonials__slider').slick('goTo', slideIndex);
  },

  onSelect: () => {
  },
});
