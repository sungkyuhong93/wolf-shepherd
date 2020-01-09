/* Component used to allow the tab opening on the accordion section of the product's description. */

import $ from 'jquery';

theme.SlideTo = (function() {
  $('.slide-to').click(function(event) {
    event.preventDefault();
    const navHeight = $('.site-header').innerHeight();
    const slideLink = $(this).attr('data-slide');

    $('html, body').animate({
      scrollTop: $(slideLink).offset().top - navHeight
    }, 1500);
  });
})();


