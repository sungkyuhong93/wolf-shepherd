import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import _ from 'slick-carousel';
import jsWidth from '../helpers/screenWidths';

register('featured-collection-section', {
  onLoad() {
    this.init();
  },

  onSelect() {
    this.cleanSlick();
  },

  init() {
    this.cleanSlick(this.id);
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
      adaptiveHeight: false,
      speed: 600,
      touchThreshold: 30,
      responsive: [
        {
          breakpoint: jsWidth.tabletdown,
          settings: {
            arrows: false,
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

  cleanSlick(id) {
    const section = this;
    $(`.collection-carousel--${id}`).slick(section.getSliderSettings());
  },
});

