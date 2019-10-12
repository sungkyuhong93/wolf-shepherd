import $ from 'jquery';

theme.Testimonials = (function() {

	$('.quotes-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots:true
	});

})();