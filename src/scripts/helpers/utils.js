/**
 * Helper: Utils
 * ------------------------------------------------------------------------------
 * Frame utility functions.
 *
 * @namespace utils
 */
import breakpoints from '../helpers/breakpoints';

/**
 * Check if width is dektop up
 */
export function isDesktop() {
  const mediaQuery = {
    desktopUp: `(min-width: ${breakpoints.large})`,
  };

  return (window.matchMedia(mediaQuery.desktopUp).matches);
}

/**
 * Check if width is dektop up
 */
export function isMediumUp() {
  const mediaQuery = {
    desktopUp: `(min-width: ${breakpoints.medium})`,
  };

  return (window.matchMedia(mediaQuery.desktopUp).matches);
}
