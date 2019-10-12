import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import _ from 'slick-carousel';

const selectors = { 
  $notificationBar : $('.notification-bar__carousel')
}  

register('notification-bar', {

  onLoad() {
    this.cleanSlick();
  },

  getSliderSettings(){
    return {
      vertical:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow slick-prev"></div>',
      nextArrow: '<div class="slick-arrow slick-next"></div>'
    }
  },

  cleanSlick(){
    let section = this;
    if(selectors.$notificationBar.hasClass('slick-initialized')) {
      selectors.$notificationBar.slick('reinit'); 
    } else{
      selectors.$notificationBar.slick(section.getSliderSettings()); 
    }
  },

  onBlockSelect: function(e){
    let blockId     = parseInt(e),
        $blockClass = $('.notification-bar-' + blockId),
        slideIndex  = $blockClass.closest('.slick-slide').attr('data-slick-index');

    selectors.$notificationBar.slick("goTo", slideIndex);
  }

});