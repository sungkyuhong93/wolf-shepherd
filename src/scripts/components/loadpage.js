/**
 * Component: LoadPage
 * ------------------------------------------------------------------------------
 *
 * @namespace loadPage
 */
import $ from "jquery";


/**
 * Export a new store selector instance.
 */
export default () => {

  /**
   * Initialise component.
   */
  function init() {
    setTimeout(function(){ 
      document.querySelector('#MainContent').classList.add('is-loaded');
      document.querySelector('.cart-ajax__wrapper').classList.add('is-loaded');
    }, 500);
  }

  /**
   * Expose public interface
   */
  return Object.freeze({
    init,
  });
};