import Hammer from 'hammerjs';
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
   * Global Variables
   */
  const slideOut = new Hammer(nodeSelectors.mobileNav);
  const slideOutBackground = new Hammer(nodeSelectors.siteHeaderOverlay);
  // setting up a few vars to keep track of things.
  // at issue is these values need to be encapsulated
  // in some scope other than global.
  let lastPosX = 0;
  let isDragging = false;

  /**
   * Set click events on items.
   */
  function setClickEvents() {
    nodeSelectors.navTrigger.addEventListener('click', toggleActiveState);
    nodeSelectors.siteHeaderOverlay.addEventListener('click', removeActiveState);
    document.documentElement.addEventListener('keydown', handleKeydown);

    // add a "PAN" recognizer to it (all directions)
    // slideOut.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL, threshold: 0 }));
    // slideOut.on('pan', handleDrag);
    // slideOutBackground.on('swiperight touch', removeActiveState);
  }

  function handleDrag(ev) {
    // for convience, let's get a reference to our object
    const elem = ev.target;

    // DRAG STARTED
    // here, let's snag the current position
    // and keep track of the fact that we're dragging
    if (!isDragging) {
      isDragging = true;
      lastPosX = elem.offsetRight;
      elem.style.transition = '0s';
    }

    // we simply need to determine where the x,y of this
    // object is relative to where it's "last" known position is
    const posX = ev.deltaX + lastPosX;

    // move our element to that position
    if (posX < 0 && posX > -300) {
      elem.style.right = `${posX}px`;
    }

    // DRAG ENDED
    // this is where we simply forget we are dragging
    if (ev.isFinal) {
      isDragging = false;
      elem.style.transition = '0.2s';
      if (posX > -150) {
        addActiveState();
      } else {
        removeActiveState();
      }
    }
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
