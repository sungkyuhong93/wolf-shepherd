import $ from 'jquery';
import _ from 'slick-carousel';

theme.CollectionSlider = (function() {

  $('.collection-carousel').slick({
    arrows: true,
    vertical: false,
    prevArrow: '<div class="slick-arrow slick-prev"> < </div>',
    nextArrow: '<div class="slick-arrow slick-next"> > </div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

})();
