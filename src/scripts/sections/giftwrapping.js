/**
 * Component: Gift Wrap
 * ------------------------------------------------------------------------------
 * An Gift Wrap file that contains scripts to function.
 *
 * @namespace quickView
 */
import $ from 'jquery';
import AjaxCart from '../sections/ajax-cart';
import FreeShipping from '../sections/free-shipping';
import cssClasses from '../helpers/cssClasses';

/**
 * DOM selectors.
 */
const selectors = {
  container: '[js-gift-wrap="container"]',
  addGiftWrap: '[js-gift-wrap="true"]',
  removeGiftWrap: '[js-gift-wrap="false"]',
};

/**
 * Create a new Gift Wrap object.
 * @param {object} config - Settings object defined when instantiating.
 */
export default () => {

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    container: document.querySelector(selectors.container),
    addGiftWrap: document.querySelectorAll(selectors.addGiftWrap),
    removeGiftWrap: document.querySelectorAll(selectors.removeGiftWrap),
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
    [...nodeSelectors.addGiftWrap].forEach((item) => {
      item.addEventListener('click', () => {
        handleAddGiftWrap(item);
      }, false);
    });

    [...nodeSelectors.removeGiftWrap].forEach((item) => {
      item.addEventListener('click', () => {
        handleRevmoveGiftWrap(item);
      }, false);
    });
  }

  function addToCart(formData) {
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: formData,
      dataType: 'json',
      beforeSend: () => {
        setAddingState();
      },
      success: () => {
        addCompleteState();
      },
    });
  }

  function removeFromCart(formData) {
    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: formData,
      dataType: 'json',
      beforeSend: () => {
        setAddingState();
      },
      success: () => {
        removeAddState();
      },
    });
  }

  /**
   * Remove loading state.
   */
  function removeAddState() {
    FreeShipping().init();
    AjaxCart().updateTotals();
    nodeSelectors.container.classList.remove(cssClasses.loading);
    nodeSelectors.container.classList.remove(cssClasses.hidden);
  }

  /**
   * Remove loading state.
   */
  function addCompleteState() {
    FreeShipping().init();
    AjaxCart().updateTotals();
    nodeSelectors.container.classList.remove(cssClasses.loading);
    nodeSelectors.container.classList.add(cssClasses.hidden);
  }

  /**
   * Set loading state.
   */
  function setAddingState() {
    nodeSelectors.container.classList.add(cssClasses.loading);
  }

  /**
   * Handle add to cart event and set loading state.
   * @param {object} event - Click and key down event.
   */
  function handleAddGiftWrap(item) {
    const data = {
      quantity: item.dataset.quantity,
      id: item.dataset.productId,
    };

    addToCart(data);
  }

  function handleRevmoveGiftWrap(item) {
    const data = {
      quantity: 0,
      id: item.dataset.productId,
    };
    removeFromCart(data);
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
  });
};
