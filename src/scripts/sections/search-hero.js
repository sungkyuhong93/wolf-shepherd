import $ from 'jquery';
import Navigation from '../sections/navigation';

/* ================= Search Popup ================= */
export default () => {

  const $searchForm = $('.site-header__search-icon');
  const $searchFocus = $('.site-header__search-icon .search-form input');

  function setEventListeners() {
    $(document).on('click', (ev) => {
      const $target = $(ev.target);
      if ($target.parents('.site-header__search-icon').length > 0 || $target.hasClass('site-header__search-icon')) {
        if ($target.hasClass('search-form--is-active')) {
          removeActiveState();
        } else {
          Navigation().removeActiveState();
          $searchForm.addClass('search-form--is-active');
          $searchFocus.focus();
        }
      } else {
        $searchForm.removeClass('search-form--is-active');
      }
    });
  }

  function removeActiveState() {
    $searchForm.removeClass('search-form--is-active');
  }

  function init() {
    setEventListeners();
    removeActiveState();
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
    removeActiveState,
  });
};
