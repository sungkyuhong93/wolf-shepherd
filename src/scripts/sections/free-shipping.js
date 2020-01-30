/* Cart popup being displayed when the user clicks on the cart icon */

import $ from 'jquery';
import {formatMoney} from '@shopify/theme-currency';
import AjaxCart from '../sections/ajax-cart';

/**
 * Export default FreeGift.
 */
export default () => {

  const selectors = {
    $freeShipping: $('[js-freeshipping="info"]'),
    $freeShippingBar: $('[js-freeshipping="bar"'),
  };

  const config = {
    freeGiftProductId: theme.ajaxCart.freeGiftProductId,
    freeGiftProductHandle: theme.ajaxCart.freeGiftProductHandle,
  }

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
    const freeShippingMessage = theme.ajaxCart.freeShippingMessage;
    const cartTotal = cart.total_price;
    const valueUntilFree = freeShippingTheshold - cartTotal;
    const percentUntilFree = `${cartTotal / freeShippingTheshold * 100}%`;
    const formatValueUntilFree = handleFormatValueUntilFree(valueUntilFree);
    const freeShippingText = freeShippingMessage.replace('$value$', formatValueUntilFree);
    const giftItemValue = giftItemValueCheck(cart);
    const valueUntilFreeMinusSneakyGift = valueUntilFree + giftItemValue;


    if (valueUntilFreeMinusSneakyGift <= 0) {
      selectors.$freeShipping.html('Free gift on this order');
      selectors.$freeShippingBar.css('width', percentUntilFree);
      isGiftInCart(cart);
    } else {
      selectors.$freeShipping.html(freeShippingText);
      selectors.$freeShippingBar.css('width', percentUntilFree);
      isGiftInCartRemove(cart);
    }

    eventBus();
  }

  function handleFormatValueUntilFree(valueUntilFree) {
    if (valueUntilFree >= 0) {
      return formatMoney(valueUntilFree, theme.moneyFormat).replace('.00','');
    } else {
      return formatMoney(0, theme.moneyFormat).replace('.00','');
    }
  }

  /**
   * Check if Gift should be added.
   */
  function isGiftInCart(cart) {
    const items = cart.items;
    var giftInCart = false;

    if (items.length) {
      $.each(items, (i, item) => {
        if (item.variant_id === config.freeGiftProductId) {
          giftInCart = true;
        }
      });

      if (giftInCart === false) {
        handleAddGift();
      }
    }
  }

  /**
   * Handle add to cart event and build cart.
   */
  function handleAddGift() {
    if(!config.freeGiftProductId) {
      return false;
    }

    const data = {
      quantity: 1,
      id: config.freeGiftProductId,
    };

    const $error = $('');
    AjaxCart().addToCart(data, $error);
  }

  /**
   * Handle remove from cart event and build cart.
   */
  function giftItemValueCheck(cart) {
    const items = cart.items;
    var giftFinalPrice = 0;

    if (items.length) {
      $.each(items, (i, item) => {
        if (item.variant_id === config.freeGiftProductId) {
          giftFinalPrice = item.final_line_price;
        }
      });
    }

    return giftFinalPrice;
  }


  /**
   * Check if Gift should be removed.
   */
  function isGiftInCartRemove(cart) {
    const items = cart.items;
    var giftInCart = false;

    if (items.length) {
      $.each(items, (i, item) => {
        if (item.variant_id === config.freeGiftProductId) {
          giftInCart = true;
        }
      });

      if (giftInCart === true) {
        handleRemoveGift();
      }
    }
  }

  /**
   * Handle remove from cart event and build cart.
   */
  function handleRemoveGift() {
    const data = {
      quantity: 0,
      id: config.freeGiftProductId,
    };

    removeFromCart(data);
  }

  function removeFromCart(formData) {
    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: formData,
      dataType: 'json',
      success: () => {
        AjaxCart().cartRender();
      },
      error: (response) => {
      }
    });
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
