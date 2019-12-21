/**
 * Component: Quick Add
 * ------------------------------------------------------------------------------
 * A quick add file that contains scripts to function.
 *
 * @namespace quickView
 */
import $ from 'jquery';
import Variants from '@shopify/theme-variants';
import {formatMoney} from '@shopify/theme-currency';

/**
 * DOM selectors.
 */
const selectors = {
  container: '[js-quick-add="container"]',
  addToCart: '[js-quick-add="addToCart"]',
  addToCartText: '[data-add-to-cart-text]',
  originalSelectorId: '[data-product-select]',
  productJson: '[data-product-json]',
  singleOptionSelector: '[data-single-option-selector]',
  comparePrice: '[data-compare-price]',
  comparePriceText: '[data-compare-text]',
  priceWrapper: '[data-price-wrapper]',
  productPrice: '[data-product-price]',
};

const cssClasses = {
  activeThumbnail: 'active-thumbnail',
  hide: 'hide',
};

/**
 * Create a new quick add object.
 * @param {object} config - Settings object defined when instantiating.
 */
export default () => {

  /**
   * DOM node selectors.
   */
  const nodeSelectors = {
    container: document.querySelectorAll(selectors.container),
    addToCart: document.querySelectorAll(selectors.addToCart),
  };


  /**
   * Initialise component.
   */
  function init() {
    setTriggerEvents();
  }

  /**
   * Set trigger listeners.
   */
  function setTriggerEvents() {
    [...nodeSelectors.container].forEach((item) => {
      createSelector(item);
    });
  }

  function createSelector(item) {
    const $item = $(item);
    const productSingleObject = JSON.parse(
      $(item).find(selectors.productJson).html(),
    );

    const options = {
      $container: $item,
      enableHistoryState: false,
      singleOptionSelector: $item.find(selectors.singleOptionSelector),
      originalSelectorId: $item.find(selectors.originalSelectorId),
      product: productSingleObject,
    };

    const variants = new Variants(options);

    $item.on(
      `variantChange`,
      updateAddToCartState.bind(item, $item),
    );

    $item.on(
      `variantPriceChange`,
      updateProductPrices.bind(item, $item),
    );
  }

  function updateAddToCartState(target, item) {
    const $target = $(target);
    const variant = item.variant;
    if (variant) {
      $(selectors.priceWrapper, $target).removeClass(cssClasses.hide);
    } else {
      $(selectors.addToCart, $target).prop('disabled', true);
      $(selectors.addToCartText, $target).html(
        theme.strings.unavailable,
      );
      $(selectors.priceWrapper, $target).addClass(cssClasses.hide);
      return;
    }

    if (variant.available) {
      $(selectors.addToCart, $target).prop('disabled', false);
      $(selectors.addToCartText, $target).html(theme.strings.addToCart);
    } else {
      $(selectors.addToCart, $target).prop('disabled', true);
      $(selectors.addToCartText, $target).html(theme.strings.soldOut);
    }
  }

  /**
   * Updates the DOM with specified prices
   *
   * @param {string} productPrice - The current price of the product
   * @param {string} comparePrice - The original price of the product
   */
  function updateProductPrices(target, item) {
    const $target = $(target);
    const variant = item.variant;
    const $comparePrice = $(selectors.comparePrice, $target);
    const $compareEls = $comparePrice.add(
      selectors.comparePriceText,
      $target,
    );

    $(selectors.productPrice, $target).html(
      formatMoney(variant.price, theme.moneyFormat),
    );

    if (variant.compare_at_price > variant.price) {
      $comparePrice.html(
        `Was ${formatMoney(variant.compare_at_price, theme.moneyFormat)}`,
      );
      $compareEls.removeClass(cssClasses.hide);
    } else {
      $comparePrice.html('');
      $compareEls.addClass(cssClasses.hide);
    }
  }

  /**
   * Expose public interface.
   */
  return Object.freeze({
    init,
  });
};
