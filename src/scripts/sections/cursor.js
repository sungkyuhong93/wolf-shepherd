import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';
// import {register} from '@shopify/theme-sections';

/**
 * DOM selectors.
 */
const selectors = {
  navTrigger: '[js-mobile-nav="toggle"]',
  mobileNav: '[js-nav="mobile"]',
  siteHeader: '[js-site-header="true"]',
  siteHeaderOverlay: '[js-site-header="overlay"]',
};

const cursor = document.querySelector('.cursor');

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

    // document.addEventListener('mousemove', mouseChaser);

    document.addEventListener('mousemove', ev => {
      cursor.classList.remove('cursor--hide');

      cursor.setAttribute('style', 'top: '+(ev.pageY)+'px; left: '+(ev.pageX)+'px;');

      if (ev.target.classList.contains('site-header__overlay')) {
        cursor.classList.add('cursor--close');
      } else {
        cursor.classList.remove('cursor--close');
      }

      window.setTimeout(() => {
        cursor.classList.add('cursor--hide');
      }, 500);
    });
  }

  function mouseChaser(ev) {
    console.log(ev);
    cursor.classList.remove('cursor--hide');

    cursor.setAttribute('style', 'top: '+(ev.pageY)+'px; left: '+(ev.pageX)+'px;');

    if (ev.target.classList.contains('site-header__overlay')) {
      cursor.classList.add('cursor--close');
    } else {
      cursor.classList.remove('cursor--close');
    }

    window.setTimeout(() => {
      cursor.classList.add('cursor--hide');
    }, 500);
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
    nodeSelectors.siteHeader.classList.remove(cssClasses.active);
    nodeSelectors.siteHeaderOverlay.classList.remove(cssClasses.active);
    document.querySelector('body').style.overflowY = 'initial';
  }

  function addActiveState() {
    nodeSelectors.mobileNav.classList.add(cssClasses.active);
    nodeSelectors.siteHeader.classList.add(cssClasses.active);
    nodeSelectors.siteHeaderOverlay.classList.add(cssClasses.active);
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
  return init();
};
