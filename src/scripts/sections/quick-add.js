/**
 * Component: Quick Add
 * ------------------------------------------------------------------------------
 * A quick add file that contains scripts to function.
 *
 * @namespace quickView
 */
import $ from 'jquery';
import AjaxCart from '../sections/ajax-cart';

/**
 * DOM selectors.
 */
const selectors = {
  addToCart: '[js-quick-add="addToCart"]',
};

/**
 * Create a new quick add object.
 * @param {object} config - Settings object defined when instantiating.
 */
export default () => {

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    addToCart: document.querySelectorAll(selectors.addToCart),
  };

  /**
   * Initialise component.
   */
  function init() {
    setTriggerEvents();
  }

  /**
   * Set trigger listeners.
   */
  function setTriggerEvents() {
    [...nodeSelectors.addToCart].forEach((item) => {
      item.addEventListener('click', () => {
        handleAddToCart(item);
      }, false);
    });
  }


  /**
   * Remove loading state.
   */
  function removeAddState() {
    // nodeSelectors.viewport.classList.remove(cssClasses.loading);
  }

  /**
   * Remove loading state.
   */
  function addCompleteState() {
    // nodeSelectors.viewport.classList.remove(cssClasses.loading);
  }

  /**
   * Set loading state.
   */
  function setAddingState() {
    // nodeSelectors.viewport.classList.add(cssClasses.loading);
    // nodeSelectors.body.innerHTML = loaders.ballPulse;
  }

  /**
   * Handle add to cart event and set loading state.
   * @param {object} event - Click and key down event.
   */
  function handleAddToCart(item) {
    const data = {
      quantity: item.dataset.quantity,
      id: item.dataset.productId,
    };
    const $error = $('.modal-quick-view__footer .error');
    AjaxCart().addToCart(data, $error);
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
  });
};
