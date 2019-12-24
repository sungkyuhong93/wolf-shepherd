import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import cssClasses from '../helpers/cssClasses';
import Search from '../sections/search-hero';

register('site-header-section', {
  onLoad() {
    this.init();
  },

  init() {
    this.setEventListeners();
  },

  setEventListeners() {
    $('[js-open="dropdown"]').on('click', function(ev) {
      ev.preventDefault();
      const target = $(this).attr('data-open');
      $(this).toggleClass(cssClasses.active);
      $(target).toggleClass(cssClasses.active);
      return false;
    });

    $('.site-nav__item').on('mouseover', function() {
      Search().removeActiveState();
    })
  },

  onBlockSelect: (blockId) => {
    $(`#Meganav-${blockId}`).addClass(cssClasses.active);
  },

  onBlockDeselect: () => {
    $('.meganav').removeClass(cssClasses.active);
  },
});
