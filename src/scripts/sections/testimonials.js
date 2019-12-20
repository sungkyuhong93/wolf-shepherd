import $ from 'jquery';
import _ from 'slick-carousel';
import {register} from '@shopify/theme-sections';
import jsWidth from '../helpers/screenWidths';
import cssClasses from '../helpers/cssClasses';

register('testimonials', {
  onLoad() {
    this.init();
  },

  init() {
    this.slickRender();
    this.slickTriggers();
  },

  slickRender() {
    const slideshowName = `.testimonials__slider--${this.id}`;
    const $slideshow = $(slideshowName);
    $slideshow.slick(this.getSliderSettings());

    $('.testimonials__images').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: slideshowName,
      dots: true,
      centerMode: false,
      focusOnSelect: true,
    });
  },
  
  getSliderSettings() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
      nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
      fade: true,
      cssEase: 'ease-in-out',
      speed: 1000,
      dots: false,
      asNavFor: '.testimonials__images',
      responsive: [
        {
          breakpoint: jsWidth.tabletdown,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 750,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ]
    };
  },

  slickTriggers() {
    // const $nav = $(`.testimonials__images--${this.id} .testimonials__image-container`);
    // const sectionId = this.id;

    // $nav.on('click', function() {
    //   const slideIndex = parseInt($(this).attr('data-slide-id')) - 1;
    //   $(`.testimonials__slider--${sectionId}`).slick('goTo', slideIndex);

    //   $nav.removeClass(cssClasses.active);
    //   $(this).addClass(cssClasses.active);

    // });

    // $nav.slick(this.getNavSettings($slideshow));

    // const $blockClass = $(`.testimonials__slide--${blockId}`).closest('.slick-slide');

  },


  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });

  onBlockSelect: (blockId) => {
    const $blockClass = $(`.testimonials__slide--${blockId}`).closest('.slick-slide');
    const slideIndex = $blockClass.attr('data-slick-index');
    $('.testimonials__slider').slick('goTo', slideIndex);
  },

  onSelect: () => {
  },
});
