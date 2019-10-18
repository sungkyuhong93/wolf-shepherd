import $ from 'jquery';
import {register} from '@shopify/theme-sections';
import cssClasses from '../helpers/cssClasses';

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
      $(target).toggleClass(cssClasses.active);
      return false;
    });
  },

  onBlockSelect: (blockId) => {
    $(`#Meganav-${blockId}`).addClass(cssClasses.active);
  },

  onBlockDeselect: () => {
    $('.meganav').removeClass(cssClasses.active);
  },
});
