/* Component used to allow the tab opening on the accordion section of the product's description. */

import $ from 'jquery';

theme.SlideTo = (function() {
  $('.slide-to').click(function(ev) {
    const navHeight = $('.site-header').innerHeight();

    // if ($(window).width() < 992) {
    //   // code for small viewports
    //   var navHeight = 65;
    // } else if ($(window).width() < 1320) {
    //   // code for large viewports
    //   var navHeight = 71;
    // } else {
    //   var navHeight = 80;
    // }

    ev.preventDefault();

    const slideLink = $(this).attr('href');

    $('.slide-to').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $(slideLink).offset().top - navHeight
    }, 1000);

  });

})();


