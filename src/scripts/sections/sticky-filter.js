import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';

/**
 * Export default sticky filter.
 */
export default () => {

  // Selectors
  const target = $('.collection-filter__container');
  
  function init() {
    setEventListeners();
  }

  function setEventListeners() {
    $(window).on('scroll', stickyFilter);
  }

  function stickyFilter() {
    if (!target.length) { return false; }

    const scrollTop = $(window).scrollTop();
    const headerHieght = document.querySelector('.site-header').offsetHeight;
    const headerOffestTop = target.offset().top - headerHieght;

    if (scrollTop >= headerOffestTop) {
      stickyActive(headerHieght);
    } else {
      stickyUnstuck();
    }
  }

  function stickyActive(headerHieght) {
    target.addClass(cssClasses.active);
    $('.collection-filter').css('top', headerHieght);
  }

  function stickyUnstuck() {
    target.removeClass(cssClasses.active);
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
  });
};