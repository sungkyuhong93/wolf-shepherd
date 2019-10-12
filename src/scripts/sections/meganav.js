import $ from 'jquery';
import {register} from '@shopify/theme-sections';

const selectors = { 
  $siteNavList : $('.site-nav li'),
  $siteDropdown : $('.meganav'),
}; 

const cssClasses = {
  openClass : 'site-nav__submenu--open',
};

register('megnav', {
  onLoad() {

    let section = this;

    selectors.$siteNavList.on('mouseenter', this.showMeganav);

    selectors.$siteDropdown.on('mouseleave mousedown', function(e) {
      if( e.type != 'mousedown' && e.originalEvent.buttons != 2 ){
        selectors.$siteDropdown.removeClass('meganav--show');
      }
    });

    $('.dropdown-open').on('click',function(){
      $('.site-nav li').removeClass(cssClasses.openClass);
      $(this).parent().parent().toggleClass(cssClasses.openClass);
      return false;
    });

    $('.dropdown-close').on('click',function(){
      $('.site-nav li').removeClass(cssClasses.openClass);
      return false;
    });

    $(window).resize(function(){
      section.positionArrow();
    });
    section.positionArrow();
    section.dupicateNav();
  },

  showMeganav() {
    let $this = $(this);
    let $parentId = $this.data('meganav-parent');

    selectors.$siteDropdown.removeClass('meganav--show');

    selectors.$siteDropdown.each(function(){
      let $childId = $(this).data('meganav-child');

      if( $parentId === $childId ) {
          $(this).addClass('meganav--show');
      }
    });
  },

  positionArrow() {
    $('.site-nav li[data-meganav-parent]').each(function(){
      let $thisMatch = $(this).data('meganav-parent'),
          $thisWidth = $(this).find("a").innerWidth(),
          $thisPos = $(this).offset().left,
          $newWidth = $thisWidth/2 + $thisPos -15;
      $(".meganav[data-meganav-child='"+$thisMatch+"']").find(".meganav__arrow").css("transform","translateX("+$newWidth+"px)");
    });
  },

  dupicateNav(){
    $('.meganav').each(function(){
      var $thisList = $(this).find(".meganav__list").html(),
        $thisMatch = $(this).data('meganav-child'),
        $thisColor = $(this).attr("style");

      $(".site-nav li[data-meganav-parent='"+$thisMatch+"']").addClass("site-nav--has-submenu").append("<div class='medium-up--hide site-nav__submenu' style='"+$thisColor+"'>"+$thisList+"</div>");
    });
  },

  
  onBlockSelect: function(e){
    var blockId     = e;
    $('#Meganav-' + blockId).addClass('meganav--show');
  },

  onBlockDeselect: function() {
    $('.meganav').removeClass('meganav--show');
  }
  
});