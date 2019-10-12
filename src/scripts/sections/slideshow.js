import $ from 'jquery';
import _ from 'slick-carousel';

theme.Slideshow = (function() {

  const $slideshow = $('.hero-main__slider');

  function slickRender() {
    $slideshow.slick(getSliderSettings());
  }

  function getSliderSettings() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
    }
  }

  function init() {
    slickRender();
  }

  init();

  return {
    sliderSettings: getSliderSettings
  }

})();

theme.SlideshowSection = function SlideshowSection() {};

theme.SlideshowSection.prototype = $.extend({}, theme.SlideshowSection.prototype, {
	onBlockSelect: function(e){
		var blockId     = parseInt(e.detail.blockId),
		    $blockClass = $('.slideshow__slide--' + blockId),
		    slideIndex  = $blockClass.attr('data-slick-index');
		$('.slideshow').slick("goTo", slideIndex);
	},
  onSelect: function() {
	  $('.slideshow').slick(theme.Slideshow.sliderSettings());
  }
});