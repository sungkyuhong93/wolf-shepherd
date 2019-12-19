/**
 * Mixin: Bind
 * -----------------------------------------------------------------------------
 * Mixin to set, remove and detect a class from a defined target.
 * - Useful to avoid multiple event binds when initialising components.
 *
 */
import {extendDefaults} from '../helpers/utils';

/**
 * Create a new bind object.
 * @param {HTMLElement} element - HTML element to bind with a class.
 */
export default (element, config) => {

  /**
   * Instance defaults settings.
   */
  const defaults = {
    className: 'post-init',
  };

  /**
   * Instance settings.
   */
  const settings = extendDefaults(defaults, config);

  /**
   * Set bind class on target.
   */
  function set() {
    if (!element.length) {
      element.classList.add(settings.className);
      return;
    }

    [...element].forEach((item) => {
      item.classList.add(settings.className);
    });
  }

  /**
   * Remove bind class on target.
   */
  function remove() {
    if (!element.length) {
      element.classList.remove(settings.className);
      return;
    }

    [...element].forEach((item) => {
      item.classList.remove(settings.className);
    });
  }

  /**
   * Check if element has already been initialised.
   */
  function isSet() {
    if (!element.length) {
      return element.classList.contains(settings.className);
    }

    return [...element].every((item) => {
      return item.classList.contains(settings.className);
    });
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    isSet,
    remove,
    set,
  });
};
