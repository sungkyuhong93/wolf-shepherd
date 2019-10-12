import $ from 'jquery';
import {formatMoney} from '@shopify/theme-currency';
import {misc as icons} from '../helpers/svg-map';

theme.AjaxCart = (function() {

  if (theme.ajaxCart === false) {
    return false;
  }

  const selectors = {
    $form: $('form[action="/cart/add"]'),
    $cartCount: $('#CartCount, .cart-ajax__subtitle-counter'),
    $cartList: $('.cart-ajax__list'),
    $cartBody: $('.cart-ajax__wrapper'),
    $cartTotalPrice: $('.cart-ajax--total-price'),
    $cartClose: $('.cart-ajax__close'),
    $cartToggleBtn: $('#Cart-icon'),
    $subTotalClass: $('.js-cart-subtotal'),
    $cartItems: $('.js-cart-item-count'),
  };

  const cartPage = window.location.pathname;
  var cartOpened = false;

  /* ----------------------------------------------------
  Add to cart functions
  -----------------------------------------------------*/
  selectors.$form.on('submit', function(event) {
    event.preventDefault();

    const $this = $(this);
    const formData = $this.serialize();
    const $error = $this.find('.error');
    addToCart(formData, $error);
  });

  /* ----------------------------------------------------
  change cart functions and triggers
  -----------------------------------------------------*/ 
  $(document).on('click', '.cart-ajax__remove', function() {
    const $this = $(this);
    cartValueTrigger($this, 'remove');
  });

  $(document).on('focusout', '.cart-ajax .quantity-wrapper input', function() {
    const $this = $(this);
    cartValueTrigger($this);
  });

  $(document).on('click', '.cart-ajax .quantity-wrapper', function() {
    const $this = $(this);
    cartValueTrigger($this);
  });

  $(document).on('click', '.cart-item__remove', function() {
    const $this = $(this);
    cartValueTrigger($this, 'remove');
  });

  $(document).on('focusout', '.cart-item__quanity .quantity-wrapper input', function() {
    const $this = $(this);
    cartValueTrigger($this);
  });

  $(document).on('click', '.cart-item__quanity .quantity-wrapper', function() {
    const $this = $(this);
    cartValueTrigger($this);
  });

  /* ----------------------------------------------------
  Cart open and close functions
  -----------------------------------------------------*/
  selectors.$cartToggleBtn.on('click', (event) => {
    event.preventDefault();
    cartRender();
  });

  $(document).on('mouseup', (event) => {
    if (!selectors.$cartBody.is(event.target) && selectors.$cartBody.has(event.target).length === 0) { 
      cartClose();
    }
  });

  selectors.$cartClose.on('click', () => {
    cartClose();
  });


  function cartValueTrigger(element, remove) {
    const variantId = element.closest('.cart-data').attr('data-id');
    const lineNo = element.closest('.cart-data').attr('data-line');
    const input = element.parent().find('input');
    const sendQuantity = parseInt(input.val());

    if (remove === 'remove') {
      changeCart(lineNo, 0, variantId);
    } else {
      changeCart(lineNo, sendQuantity, variantId);
    }
  }

  /* ----------------------------------------------------
  Below are all the functions for Add to cart, update cart and get cart data
  -----------------------------------------------------*/
  function addToCart(formData, $error) {
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: formData,
      dataType: 'json',
      beforeSend: () => {
        $error.addClass('error--hide');
      },
      success: () => {
        cartRender();
      },
      error: (XMLHttpRequest) => {
        const data = eval(`(${XMLHttpRequest.responseText})`);
        const response = data.description;

        $error.html(response).removeClass('error--hide');
      },
    });
  }

  function changeCart(lineNo, quantity, variantId) {
    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: `quantity=${quantity}&line=${lineNo}`,
      dataType: 'json',
      beforeSend: () => {
        if (quantity === 0 && cartPage === '/cart') {
          $(`.cart__row--${variantId}`).fadeOut().remove();
        }
      },
      success: () => {
        cartRender();
      },
    });
  }

  function getCartJSON(callback, x, y) {
    $.getJSON('/cart.js', (cart) => {
      callback(cart, x, y);
    });
  }

  /* ----------------------------------------------------
  Below are all the functions update the cart display - Ajax and cart page
  -----------------------------------------------------*/
  function cartRender() {
    if (cartPage === '/cart') {
      getCartJSON(updateCartTotal);
      getCartJSON(updateLineItems);
    } else {
      getCartJSON(cartBuild);
      if (cartOpened !== true ) {
        cartOpen();
      }
    }
    getCartJSON(cartCounter);
  }

  // Ajax Cart Open
  function cartOpen() {
    selectors.$cartBody.addClass('cart-ajax--show');
    cartOpened = true;
  }

  // Ajax Cart Close
  function cartClose() {
    selectors.$cartBody.removeClass('cart-ajax--show');
    cartOpened = false;
  }

  function cartCounter(cart) {
    $('#CartCount, .cart-ajax__subtitle-counter').html(cart.item_count);
    if (cart.item_count === 0) {
      selectors.$cartCount.removeClass('cart-count--show');
    } else {
      selectors.$cartCount.addClass('cart-count--show');
    }
  }

  function cartBuild(cart) {
    const items = cart.items;
    const cartTotal = formatMoney(cart.total_price, theme.moneyFormat);

    selectors.$cartList.html('');
    selectors.$cartTotalPrice.html(`<span class=money>${cartTotal}</span>`);

    $.each(items, (i, item) => {
      const cartRow = createMarkup(item, i);
      selectors.$cartList.append(cartRow);
    });

    relateProducts(cart);
  }

  function createMarkup(cart, loopCount) {

    const cartVariantTitle = cart.variant_title === null ? '' : cart.variant_title ;
    const cartVariantPrice = formatMoney(cart.price, theme.moneyFormat);
    const cartLinePrice = formatMoney(cart.line_price, theme.moneyFormat);
    const loopCounter = loopCount + 1;

    const cartRow =  `
          <div class="cart-ajax__row cart-data" data-line="${loopCounter}" data-id="${cart.id}">
            <div class="cart-ajax__row__column">
              <a href="${cart.url}" class="js-click-gtm cart-ajax__row__image" style="background-image: url(${cart.image})"></a>
            </div>
            <div class="cart-ajax__row__column">
              <a href="${cart.url}" class="js-click-gtm h6 cart-ajax__row__title">
                ${cart.product_title}
                <small class="cart-ajax__row__variant">${cartVariantTitle}</small>
              </a>
              <span class="cart-ajax__row__unit-price">${cartVariantPrice}/un</span>
              <span class="cart-ajax__row__money">${cartLinePrice}</span>
              <div class="quantity-wrapper">
                <div class="quantity-wrapper__minus js--quantity" data-increment="false">-</div>
                <input type="number" value="${cart.quantity}" min="0">
                <div class="quantity-wrapper__plus js--quantity" data-increment="true">+</div>
              </div>
              <div class="cart-ajax__remove">${icons.remove}</div>
            </div>
          </div>`;

    return cartRow;
  }

  function relateProducts(cart) {

    const relateProductsArray = []; 

    if ($(window).width() < 750) {
      return false;
    }

    $.each(cartUpsell, (i, item) => {

      const collectionItem = item;
      const collectionItemVar = collectionItem.variants[0].id;
      var relateBoo = false;

      $.each(cart.items, (i, cartItem) => {
        if (cartItem.id === collectionItemVar) {
          relateBoo = true;
        }
      });

      if (relateBoo === false) {
        const relatedProductImage = `<div class="cart-ajax__related__product-image" style="background-image:url(${collectionItem.featured_image})"></div>`;
        const relatedProductTitle = `<h5 class="cart-ajax__related__product-title">${collectionItem.title}</h5><p class="cart-ajax__related__product-price">${formatMoney(collectionItem.price, theme.moneyFormat)}</p>`;
        const relatedProduct = `<a href="/products/${collectionItem.handle}" class="cart-ajax__related__product-wrapper">${relatedProductImage}${relatedProductTitle}</a>`;
        relateProductsArray.push(relatedProduct);
      }
    });

    if (relateProducts.length === 0) {
      $('.cart-ajax__related-title').addClass('cart-ajax__related-title--hide');
    } else {
      $('.cart-ajax__related-title').removeClass('cart-ajax__related-title--hide');
    }

    $('.cart-ajax__related').html(relateProducts);
  }

  // Cart Page
  function updateCartTotal(cart) {
    $('.js-cart-subtotal').html(formatMoney(cart.total_price));
    $('.js-cart-item-count').html(cart.item_count);
  }

  function updateLineItems(cartdata) {
    $.each(cartdata.items, (i, item) => {
      const linePrice = formatMoney(item.original_line_price);
      const lineQuantity = item.quantity;
      const newLineData = i + 1;

      $(`.cart__row--${item.id} .cart__line-total`).html(linePrice);
      $(`.cart__row--${item.id} .cart-ajax__quantity__input`).val(lineQuantity);
      $(`.cart__row--${item.id} .cart-data`).attr('data-line', newLineData);
    });
  }

})();
