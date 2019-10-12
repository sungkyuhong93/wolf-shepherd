import $ from 'jquery';
import {register} from '@shopify/theme-sections';

theme.Navigation = (function() {

  var $hamburger        = $('#Hamburger'),
      $Header           = $('#Header'),
      $mobileOverlay    = $('.mobile-overlay'),
      $mobileHeader     = $('.mobile-header'),
      body = document.querySelector('.body');
      // slideOut = new Hammer(body);

  $hamburger.on('click', mobileNavigation);
  // slideOut.on("swipeleft swiperight", mobileNavigationSlideGesture);

  function mobileNavigation() {
    $('body').toggleClass('js--mobile-menu-open')
  };

  function mobileNavigationSlideGesture(ev) {
    var $target = $(ev.target);
    if (!$target.parents('.slick-slider').length) {
      if (ev.type == "swiperight") {
        $('body').addClass('js--mobile-menu-open')
      }else if(ev.type == "swipeleft") {
        $('body').removeClass('js--mobile-menu-open')
      }
    }
  }
  
})();
