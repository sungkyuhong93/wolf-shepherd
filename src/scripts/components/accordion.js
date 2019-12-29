/**
 * Component: Accordion
 * ------------------------------------------------------------------------------
 * ARIA accessible accordion to show/hide content in a tabbed layout.
 *
 * @namespace accordion
 */
import debounce from 'lodash-es/debounce';

import cssClasses from '../helpers/cssClasses';
import {extendDefaults, on} from '../helpers/utils';
import bind from '../mixins/bind';
import $ from 'jquery';

/**
 * DOM selectors.
 */
const selectors = {
  control: '[js-accordion="control"]',
  item: '[js-accordion="item"]',
  content: '[js-accordion="content"]',
};

/**
 * Export a new accordion instance.
 * @param {string} selector - The accordion item.
 * @param {object} config - Configuration.
 */
export default (selector, config) => {

  /**
   * Instance default settings.
   */
  const defaults = {
    aria: true,
    singleOpen: true,
    showInitial: false,
    showAll: false,
    responsive: [],
  };

  /**
   * Instance settings.
   */
  const settings = extendDefaults(defaults, config);

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    container: document.querySelector(selector),
    controls: [...document.querySelector(selector).querySelectorAll(selectors.control)],
    items: [...document.querySelector(selector).querySelectorAll(selectors.item)],
  };

  /**
   * Initialise component bind.
   */
  const binder = bind(nodeSelectors.container);

  /**
   * Initialise component.
   */
  function init() {

    if (binder.isSet()) {
      return;
    }

    if (settings.aria) {
      setARIA();
    }

    if (settings.showAll) {
      showAllItems();
    }

    if (settings.showInitial) {
      showInitialItem();
    }

    if (settings.responsive.length) {
      setResponsiveEvents();
    }

    setClickEvents();
    binder.set();
  }

  /**
   * Set click events on items.
   */
  function setClickEvents() {
    nodeSelectors.controls.forEach((item) => {
      on('click', item, (event) => onItemClick(event, item.parentNode));
      lastNodeMargin(item.parentNode);
    });
  }

  /**
    * Handle toggle event on accordion control click.
    * @param {Event} event - Click event.
    * @param {HTMLElement} element - The accordion item.
    */
  function onItemClick(event, element) {
    event.preventDefault();
    toggleElement(element);
  }

  function lastNodeMargin(container) {
    if (container.querySelector('.accordion__content').lastElementChild) {
      const lastChild = container.querySelector('.accordion__content').lastElementChild;
      lastChild.style.marginBottom = '0px';
    }
  }

  /**
   * Show targeted item and set ARIA values.
   * @param {HTMLElement} element - The accordion item.
   */
  function showItem(element) {
    element.classList.add(cssClasses.active);
    $(element).children('.accordion__content').slideDown();

    if (settings.aria) {
      updateARIA(element, true);
    }
  }

  /**
   * Hide targeted item and set ARIA values.
   * @param {HTMLElement} element - The accordion item.
   */
  function hideItem(element) {
    $(element).children('.accordion__content').slideUp();
    element.classList.remove(cssClasses.active);

    if (settings.aria) {
      updateARIA(element, false);
    }
  }

  /**
   * Check if item is active.
   * @param {HTMLElement} element - The accordion item.
   */
  function isItemActive(element) {
    return element.classList.contains(cssClasses.active);
  }

  /**
   * Hide all unselected items.
   * @param {HTMLElement} element - The accordion item.
   */
  function hideUnselected(element) {
    nodeSelectors.items.forEach((item) => {
      if (isItemActive(item) && item !== element) {
        hideItem(item);
      }
    });
  }

  /**
   * Show all items on init.
   */
  function showAllItems() {
    nodeSelectors.items.forEach((element) => {
      showItem(element);
    });
  }

  /**
   * Show initial item on init.
   */
  function showInitialItem() {
    nodeSelectors.items.forEach((element, index) => {
      if (index === 0) {
        showItem(element);
        return;
      }

      hideItem(element);
    });
  }

  /**
   * Hide all items.
   */
  function hideAllItems() {
    nodeSelectors.items.forEach((item) => {
      hideItem(item);
    });
  }

  /**
   * Toggle targeted item.
   * @param {HTMLElement} element - The accordion item.
   */
  function toggleElement(element) {
    if (settings.singleOpen) {
      hideUnselected(element);
    }

    if (isItemActive(element)) {
      hideItem(element);
      return;
    }

    showItem(element);
  }

  /**
   * Create ARIA attributes.
   */
  function setARIA() {
    nodeSelectors.container.setAttribute('role', 'tablist');
    nodeSelectors.container.setAttribute('aria-label', 'Accordion Control Group Buttons');

    nodeSelectors.items.forEach((item) => {
      if (isItemActive(item)) {
        updateARIA(item, true);
        return;
      }
      updateARIA(item, false);
    });
  }

  /**
   * Update ARIA.
   * @param {HTMLElement} element - The accordion item.
   * @param {Boolean} value - Aria value.
   */
  function updateARIA(element, value) {
    element.setAttribute('aria-selected', value);
    element.querySelector(selectors.control).setAttribute('aria-expanded', value);
    element.querySelector(selectors.content).setAttribute('aria-hidden', !value);

    if (!itemHasContentId(element)) {
      updateARIAContentId(element);
    }
  }

  /**
   * Check if ARIA control contains content id.
   * @param {HTMLElement} element - The accordion item.
   */
  function itemHasContentId(element) {
    return element.querySelector(selectors.control).hasAttribute('aria-controls');
  }

  /**
   * Update ARIA content id.
   * @param {HTMLElement} element - Click The accordion item.
   */
  function updateARIAContentId(element) {
    const contentId = element.querySelector(selectors.content).id;
    element.querySelector(selectors.control).setAttribute('aria-controls', contentId);
  }

  /**
   * Set window resize events for responsive initialisation.
   */
  function setResponsiveEvents() {
    handleResizeEvent();
    on('resize', debounce(handleResizeEvent, 250));
  }

  /**
   * Handle resize events through debounce callback.
   * - Execute mobile callbacks.
   */
  function handleResizeEvent() {
    settings.responsive.forEach((query) => {
      if (window.matchMedia(`(min-width: ${query.breakpoint})`).matches) {
        reinit(query.settings);
        return;
      }
      reinit(settings);
    });
  }

  /**
   * Reinitialise component with options.
   * @param {Object} options - Options to use instead of defined settings.
   */
  function reinit(options) {
    if (options.showAll) {
      showAllItems();
    } else {
      hideAllItems();
    }
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
    hideAllItems,
    showAllItems,
    showInitialItem,
  });
};
