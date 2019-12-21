import cssClasses from '../helpers/cssClasses';

/**
 * DOM selectors.
 */
const selectors = {
  navTrigger: '[js-mobile-nav="toggle"]',
  mobileNav: '[js-nav="mobile"]',
  siteHeader: '[js-site-header="true"]',
  siteHeaderOverlay: '[js-site-header="overlay"]',
};

export default () => {

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    navTrigger: document.querySelector(selectors.navTrigger),
    mobileNav: document.querySelector(selectors.mobileNav),
    siteHeader: document.querySelector(selectors.siteHeader),
    siteHeaderOverlay: document.querySelector(selectors.siteHeaderOverlay),
  };

  /**
   * Set click events on items.
   */
  function setClickEvents() {
    nodeSelectors.navTrigger.addEventListener('click', toggleActiveState);
    nodeSelectors.siteHeaderOverlay.addEventListener('click', removeActiveState);
    document.documentElement.addEventListener('keydown', handleKeydown);
  }

  function toggleActiveState() {
    if (nodeSelectors.mobileNav.classList.contains(cssClasses.active)) {
      removeActiveState();
    } else {
      addActiveState();
    }
  }

  function handleKeydown(ev) {
    if (ev.keyCode === 27) {
      removeActiveState();
    }
  }

  function removeActiveState() {
    nodeSelectors.mobileNav.classList.remove(cssClasses.active);
    document.querySelector('body').style.overflowY = 'initial';
  }

  function addActiveState() {
    nodeSelectors.mobileNav.classList.add(cssClasses.active);
    document.querySelector('body').style.overflowY = 'hidden';
  }

  /**
   * Initialise component.
   */
  function init() {
    setClickEvents();
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
    removeActiveState,
  });
};
