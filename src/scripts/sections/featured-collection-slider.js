// import $ from 'jquery';
// import _ from 'slick-carousel';

// theme.CollectionSlider = (function() {

//   $('.collection-carousel').slick({
//     arrows: true,
//     vertical: false,
//     prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
//     nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });

// })();

import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import _ from 'slick-carousel';

const selectors = {
  $slider: $('.collection-carousel'),
};

register('featured-collection-section', {
  onLoad() {
    this.init();
  },

  onSelect() {
    this.cleanSlick();
  },

  init() {
    this.cleanSlick();
  },

  getSliderSettings() {
    return {
      arrows: true,
      vertical: false,
      prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
      nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      responsive: [
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
  },

  cleanSlick() {
    const section = this;
    $('.collection-carousel').slick(section.getSliderSettings());
  },
});

