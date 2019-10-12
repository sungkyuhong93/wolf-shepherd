import $ from 'jquery';

theme.SizeGuide =  new function(){

  var selectors = {
    $sizeGuideTrigger  : $('.js--size-guide'),
    $sizeGuideClose    : $('.size-guide__close, .size-guide__background'),
    $sizeGuidePanel    : $('.size-guide__wrapper'),
    activeClass        : 'size-guide--show',
    $mesurementsToggle : $('.size-guide__toggle')
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

  var openSizeGuide = function(){
    selectors.$sizeGuidePanel.addClass(selectors.activeClass);
  }

  var closeSizeGuide = function(){
    selectors.$sizeGuidePanel.removeClass(selectors.activeClass);
  }

  var mesurementsToggle = function(x){
    var $this = x,
        size = $this.attr('data-size');

    selectors.$mesurementsToggle.removeClass('active');
    $this.addClass('active');

    $('.size-guide__measurement').hide();
    $('.' + size).show();
  }

}();  