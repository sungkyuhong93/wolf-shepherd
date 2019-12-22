import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import _ from 'slick-carousel';

register('collection-list', {

  onLoad() {
    return false;
    this.eventListeners();
  },

  eventListeners() {
    this.slickCheck();

    $(window).resize(() => {
      this.slickCheck();
    });
  },

  slickCheck() {
    this.addSlider();
  },

  getSliderSettings() {
    return {
      vertical: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow slick-prev"></div>',
      nextArrow: '<div class="slick-arrow slick-next"></div>',
      responsive: [
        {
          breakpoint: 9999,
          settings: 'unslick',
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            centerMode: true,
            centerPadding: '20%',
            speed: 300,
            touchThreshold: 30,
          },
        },
      ],
    };
  },

  addSlider() {
    const section = this;
    const $slider = $(`.collection-list--${this.id}`);
    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('reinit');
    } else {
      $slider.slick(section.getSliderSettings());
    }
  },
});
