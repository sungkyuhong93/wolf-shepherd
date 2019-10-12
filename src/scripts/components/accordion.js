import $ from 'jquery';

theme.Accordion = (function() {

	var $title      = $(".accordion__title"),
		$content    = $('.accordion__content'),
		activeClass = 'accordion__content--is-active',
		activeClassParent = 'accordion__item--is-active';
	

	$title.bind('click', accordionOpen);

	function accordionOpen(){
		var $this = $(this);
			toggleData = $this.attr('data-toggle');

		$content.removeClass(activeClass);
		$content.parent().removeClass(activeClassParent);
		$('#'+toggleData).addClass(activeClass);
		$('#'+toggleData).parent().addClass(activeClassParent);
	}

})();


