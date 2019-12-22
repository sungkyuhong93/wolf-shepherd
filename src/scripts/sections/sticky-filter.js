import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';
import jsWidth from '../helpers/screenWidths';

/**
 * Export default sticky filter.
 */
export default () => {

  // Selectors
  const target = $('.collection-filter__container');
  const windowWidth = $(window).width();

  function init() {
    if (!target.length) { return false; }
    if (windowWidth >= jsWidth.mobile) { return false; }
    setEventListeners();
  }

  function setEventListeners() {
    $(window).on('scroll', stickyFilter);
  }

  function stickyFilter() {
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