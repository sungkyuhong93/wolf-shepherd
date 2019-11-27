/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */

import $ from 'jquery';

const selectors = {
  accountOrders: '#accountOrders',
  showAccount: '#accountDetailsShow',
  showOrders: '#accountOrdersShow',
  orders: '#accountOrders',
  account: '#accountDetails',
};

function checkUrlHash() {
  const hash = window.location.hash;

  // Allow deep linking to recover password form
  if (hash === '#accountOrders') {
    showOrders();
  } else if (hash === '#account') {
    showAccount();
  }
}

/**
 *  Show orders
 */
function showOrders(evt) {
  if (evt) {
    // evt.preventDefault();
  }
  $(selectors.orders).addClass('is-active');
  $(selectors.account).removeClass('is-active');
  $(selectors.showOrders).addClass('active');
  $(selectors.showAccount).removeClass('active');
  $('#shopify-section-account-featured-collection').addClass('is-active');
  addMobileClass();
}

/**
 *  Show orders
 */
function showAccount(evt) {
  if (evt) {
    // evt.preventDefault();
  }
  $(selectors.account).addClass('is-active');
  $(selectors.orders).removeClass('is-active');
  $(selectors.showOrders).removeClass('active');
  $(selectors.showAccount).addClass('active');
  $('#shopify-section-account-featured-collection').removeClass('is-active');
  addMobileClass();
}

/**
 *  Hide nav
 */
function addMobileClass() {
  $('body').addClass('account-nav-hide');
}

/**
 *  Show Nav
 */
function showMobileNav() {
  $('body').removeClass('account-nav-hide');
}

if ($(selectors.accountOrders).length) {
  checkUrlHash();

  $(selectors.showOrders).on('click', showOrders);
  $(selectors.showAccount).on('click', showAccount);
  $('.account__breadcrumb').on('click', showMobileNav);
}