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

/**
 * Browser detect and return a string
 * - https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator
 * @returns {String} browser string.
 */
export function getBrowser() {
  const userAgent = window.navigator.userAgent;

  // The order matters here, and this may report false positives for unlisted browsers.
  if (userAgent.indexOf('Firefox') > -1) {
    // 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0'
    return 'Firefox';
  } else if (userAgent.indexOf('Opera') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('Trident') > -1) {
    // 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko'
    return 'Internet Explorer';
  } else if (userAgent.indexOf('Edge') > -1) {
    // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
    return 'Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36'
    return 'Chrome';
  } else if (userAgent.indexOf('Safari') > -1) {
    // 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306'
    return 'Safari';
  }

  return 'unknown';
}

