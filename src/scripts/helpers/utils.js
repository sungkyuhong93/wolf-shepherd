/**
 * Helper: Utils
 * ------------------------------------------------------------------------------
 * Frame utility functions.
 *
 * @namespace utils
 */
// import breakpoints from '../helpers/breakpoints';

// /**
//  * Check if width is dektop up
//  */
// export function isDesktop() {
//   const mediaQuery = {
//     desktopUp: `(min-width: ${breakpoints.large})`,
//   };

//   return (window.matchMedia(mediaQuery.desktopUp).matches);
// }

// /**
//  * Check if width is dektop up
//  */
// export function isMediumUp() {
//   const mediaQuery = {
//     desktopUp: `(min-width: ${breakpoints.medium})`,
//   };

//   return (window.matchMedia(mediaQuery.desktopUp).matches);
// }

/**
 * Combine two objects using properties as the override.
 * @param {object} defaults - Defaults options defined in script.
 * @param {object} properties - Options defined by user.
 * @return {object} - Defaults modified options.
 */
export function extendDefaults(defaults, properties) {
  for (const property in properties) {
    if (properties != null && typeof properties !== 'undefined') {
      defaults[property] = properties[property];
    }
  }

  return defaults;
}

/**
 * Shortcut function to add an event listener.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param {String} event -The event type.
 * @param {Node} elem - The element to attach the event to (optional, defaults to window).
 * @param {Function} callback - The callback to run on the event.
 * @param {Boolean} capture - If true, forces bubbling on non-bubbling events.
 */
export function on(event, elem = window, callback, capture = false) {

  /**
   * If only a string is passed into the element parameter.
   */
  if (typeof elem === 'string') {
    document.querySelector(elem).addEventListener(event, callback, capture);
    return;
  }

  /**
   * If an element is not defined in parameters, then shift callback across.
   */
  if (typeof elem === 'function') {
    window.addEventListener(event, elem);
    return;
  }

  /**
   * Default listener.
   */
  elem.addEventListener(event, callback, capture);
}

