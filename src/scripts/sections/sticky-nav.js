import $ from 'jquery';

theme.StickNav = (function() {

	var activeClass = 'header-fixed--active',
		$header     = $('.header-fixed') || null;

  	$(window).on('scroll', stickyNavigation);

  	function stickyNavigation() {
  		if ($header.length > 0) {
			var scrollTop        = $(window).scrollTop(),
				headerOffestTop = $header.offset().top;

			if( scrollTop > headerOffestTop ){
				$header.addClass(activeClass);
			} else {
				$header.removeClass(activeClass);
			}
		}
 	}

  return stickyNavigation;

})();


