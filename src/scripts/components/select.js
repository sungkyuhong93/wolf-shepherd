import $ from 'jquery';
import selectric from 'selectric';

theme.Select = (function() {

  /**
   * Initialise component.
   */
  function init() {
    setDropdown();
  }

  /**
   * Set click events on items.
   */
  function setDropdown() {
    $('.ajax-related__product-wrapper .selector-wrapper--size select').selectric({
      openOnFocus: true,
    });
  }

  init();

})();
