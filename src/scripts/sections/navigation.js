import cssClasses from '../helpers/cssClasses';

/**
 * DOM selectors.
 */
const selectors = {
  navTrigger: '[js-mobile-nav="toggle"]',
  mobileNav: '[js-nav="mobile"]',
  siteHeader: '[js-site-header="true"]',
  siteHeaderOverlay: '[js-site-header="overlay"]',
  meganavTrigger: '[js-meganav="trigger"]',
  siteNavitem: '.site-nav__item',
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
    meganavTrigger: document.querySelectorAll(selectors.meganavTrigger),
  };

  /**
   * Set click events on items.
   */
  function setClickEvents() {
    nodeSelectors.navTrigger.addEventListener('click', toggleActiveState);
    nodeSelectors.siteHeaderOverlay.addEventListener('click', removeActiveState);
    document.documentElement.addEventListener('keydown', handleKeydown);
    
    nodeSelectors.meganavTrigger.forEach((element) => {
      element.addEventListener('focus', handleMeganav);
    });

    nodeSelectors.siteNavitem.forEach((element) => {
      element.addEventListener('blur', handleMeganavClear);
    });

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
      removeAllMeganav();
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

  function handleMeganav(element) {
    removeAllMeganav(element);
    $(element.target).parent().addClass(cssClasses.active);
  }

  function handleMeganavClear(element) {
    $(element.target).removeClass(cssClasses.active);
  }

  function removeAllMeganav() {
    $('[js-meganav="trigger"]').parent().removeClass(cssClasses.active);
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
