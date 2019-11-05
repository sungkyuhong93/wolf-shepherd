/* Cart popup being displayed when the user clicks on the cart icon */

import $ from 'jquery';
import {formatMoney} from '@shopify/theme-currency';

/**
 * Export default AjaxCart.
 */
export default () => {

  const selectors = {
    $freeShipping: $('[js-freeshipping="info"]'),
    $freeShippingBar: $('[js-freeshipping="bar"'),
  };

  function init() {
    getCartJSON(freeShippingCheck);
  }

  function getCartJSON(callback, x, y) {
    $.getJSON('/cart.js', (cart) => {
      callback(cart, x, y);
    });
  }

  // Free Shipping
  function freeShippingCheck(cart) {
    const freeShippingTheshold = theme.ajaxCart.freeShippingTheshold * 100;
    const cartTotal = cart.total_price;
    const valueUntilFree = freeShippingTheshold - cartTotal;
    const percentUntilFree = `${cartTotal / freeShippingTheshold * 100}%`;
    const formatValueUntilFree = formatMoney(valueUntilFree, theme.moneyFormat);
    const freeShippingText = `You are ${formatValueUntilFree} away from free shipping`;

    if (valueUntilFree <= 0) {
      selectors.$freeShipping.html('Free shipping on this order');
      selectors.$freeShippingBar.css('width', percentUntilFree);
    } else {
      selectors.$freeShipping.html(freeShippingText);
      selectors.$freeShippingBar.css('width', percentUntilFree);
    }

    eventBus();
  }

  function eventBus() {
    $(document).trigger('Freeshipping:success', [false]);
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};
