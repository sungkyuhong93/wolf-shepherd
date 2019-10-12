import $ from 'jquery';

/* ================= Search Popup ================= */
theme.SearchPopup = (function() {

  if ($('.site-header__search-icon.full-screen-search').length) {

    $(document).on('keydown', () => {
      if (evt.keyCode === 27) {
        $('body > .search-hero').removeClass('search-hero--is-active');  
      }
    });

    $('.search-hero__close').on('click', () => {
      $('body > .search-hero').removeClass('search-hero--is-active');
    });

    $('.site-header__search-icon').on('click', () => {
      $('body > .search-hero').addClass('search-hero--is-active');
      $('.search-hero__inner .search__input').focus();
      return false;
    });

  } else {
    const $searchForm = $('.site-header__search-icon');
    const $searchFocus = $('.search-form input');
    $searchForm.on('click', () => {
      $searchForm.addClass('search-form--is-active');
      $searchFocus.focus();
      return false;
    });

    $searchFocus.on('blur', () => {
      $searchForm.removeClass('search-form--is-active');
    });
  }

})();
