/**
 * Template: Articlecollectionslider
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
 * @namespace articlecollectionslider
 */


import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';

/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    $container: $('.social_sharing_header'),
    $article: $('.article__body'),
  };

  function init() {
    if (!selectors.$container.length) { return false; }
    setEventListeners();
  }

  function setEventListeners() {
    $(window).on('scroll', stickyShare);
  }

  function stickyShare() {
    const scrollTop = $(window).scrollTop();
    const headerHieght = document.querySelector('.site-header').offsetHeight;
    const headerOffestTop = selectors.$container.offset().top - headerHieght - 40;
    const article = {
      offset: selectors.$article.offset().top,
      height: selectors.$article.height(),
    }
    const articleTotal = article.offset + article.height - 200;

    if (scrollTop >= headerOffestTop) {
      stickyActive(headerHieght);
    } else {
      stickyUnstuck();
    }

    if (scrollTop >= articleTotal) {
      stickyLocked(headerHieght);
    } else {
      stickyUnlock();
    }
  }

  function stickyActive() {
    selectors.$container.addClass(cssClasses.active);
  }

  function stickyUnstuck() {
    selectors.$container.removeClass(cssClasses.active);
  }

  function stickyLocked() {
    selectors.$container.addClass(cssClasses.locked);
  }

  function stickyUnlock() {
    selectors.$container.removeClass(cssClasses.locked);
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};


