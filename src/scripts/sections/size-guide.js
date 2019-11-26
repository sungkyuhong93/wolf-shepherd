import $ from 'jquery';

theme.SizeGuide = (function() {

  const selectors = {
    $sizeGuideTrigger: $('.js--size-guide'),
    $sizeGuideClose: $('.size-guide__close, .size-guide__background'),
    $sizeGuidePanel: $('.size-guide__wrapper'),
    activeClass: 'size-guide--show',
    $mesurementsToggle: $('.size-guide__toggle'),
  };

  selectors.$sizeGuideTrigger.on('click', function(event){
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    openSizeGuide();
  });

  selectors.$sizeGuideClose.on('click', function(event){
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    closeSizeGuide();
  });

  selectors.$mesurementsToggle.on('click', function(event){
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    mesurementsToggle($(this));
  });

  function openSizeGuide() {
    selectors.$sizeGuidePanel.addClass(selectors.activeClass);
  }

  function closeSizeGuide(){
    selectors.$sizeGuidePanel.removeClass(selectors.activeClass);
  }

  function mesurementsToggle(x){
    var $this = x,
        size = $this.attr('data-size');

    selectors.$mesurementsToggle.removeClass('active');
    $this.addClass('active');

    $('.size-guide__measurement').hide();
    $('.' + size).show();
  }
})();  