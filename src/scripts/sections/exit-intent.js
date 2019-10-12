import $ from 'jquery';
import _ from 'jquery.cookie';
import cssClasses from '../helpers/cssClasses';

/**
 * Export default exitIntent.
 */
export default () => {

  if (window.location.pathname === '/challenge' || window.location.pathname === '/contact' ) {
    return false;
  }

  // Seceltors
  const selectors = {
    modalActive: false,
    $masterTrigger: $('[js-modal="show"]'),
    $modal: $('#modal'),
    $modalClose: $('.modal__close-link, .modal__close'),
    modalOpenClass: 'modal--open',
    $sigupClose: $('.signup-success__close'),
    $signupsuccess: $('.signup-success'),
    cookieName: '__exit-intent',
    cookieExpire: 7,
    cookieExpireSignup: 300,
    _delayTimer: null,
    delayPopup: $('#modal').attr('data-exit-intent_delay') * 1000 || 0,
    delay: $('#modal').attr('data-exit-intent_popup_delay') * 1000 || 0,
    _html: document.documentElement,
  };

  function init() {
    contactSubmitted();
    // window.setTimeout(modalActive, selectors.delayPopup);
    window.setTimeout(exitIntent, selectors.delayPopup);
    selectors.$masterTrigger.on('click', modalForceOpen);
  }

  // function modalActive() {
  //   if (isDisabled()) { return; }
  //   modalOpen();
  // }

  function exitIntent() {
    if (isDisabled()) { return; }
    selectors._html.addEventListener('mouseleave', handleMouseleave);
    selectors._html.addEventListener('mouseenter', handleMouseenter);
    selectors._html.addEventListener('keydown', handleKeydown);
    selectors.$modalClose.on('click', modalClose);
  }

  function handleMouseleave(e) {
    if (e.clientY > selectors.sensitivity) { return; }
    selectors._delayTimer = window.setTimeout(modalOpen, selectors.delay);
  }

  function handleMouseenter() {
    if (!selectors._delayTimer) {
      return;
    }
    window.clearTimeout(selectors._delayTimer);
    selectors._delayTimer = null;
  }

  function handleKeydown(e) {
    if (e.keyCode === 27) { modalClose()}
  }

  function isDisabled() {
    return $.cookie(selectors.cookieName);
  }

  function modalClose() {
    selectors.modalActive = false;
    selectors.$modal.removeClass(cssClasses.active);
    $.cookie(selectors.cookieName, 'true', { expires: selectors.cookieExpire, path: '/' });
  }

  function modalOpen() {
    selectors.modalActive = true;
    selectors.$modal.addClass(cssClasses.active);
  }

  function modalForceOpen() {
    selectors.$modal.addClass(cssClasses.active);
  }

  // URL Contains /?customer_posted=true
  function contactSubmitted() {
    const name = 'customer_posted'
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    if (results === null) { return; }

    const resultsSplit = results[1] || 0;

    if (resultsSplit === 'true') {
      $.cookie(selectors.cookieName, 'true', { expires: selectors.cookieExpireSignup, path: '/' });
      signupSuccess();
    }
    selectors.$sigupClose.on('click', signupSuccessClose);
  }

  function signupSuccess() {
    selectors.$signupsuccess.addClass('active');

    window.setTimeout(() => {
      signupSuccessClose();
    }, 7000);
  }

  function signupSuccessClose() {
    selectors.$signupsuccess.removeClass('active');
  }

  return init();

};
