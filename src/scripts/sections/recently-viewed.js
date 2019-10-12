import $ from 'jquery';
import {formatMoney} from '@shopify/theme-currency';
import {getSizedImageUrl} from '@shopify/theme-images';

theme.recentlyViewed = (function() {
  // Product Template must contain
  //   {% unless product == empty %}
  //     <script type="application/json" data-product-json>
  //       {{ product | json }}
  //     </script>
  //   {% endunless %}


  // Recently Viewed Products
  const productJson = JSON.parse(
    document.querySelector("[data-product-json]").innerHTML
  );
  let storedProducts = JSON.parse(localStorage.getItem("storedProducts"));

  addProductEntry();

  function addProductEntry() {

    if (storedProducts === null) storedProducts = [];
    const currentProductID = productJson.id;
    const currentProductHandle = productJson.handle;
    const product = {
      handle: currentProductHandle,
      id: currentProductID,
    };
    if (JSON.parse(localStorage.getItem("product")) != currentProductHandle) {
      localStorage.setItem("product", JSON.stringify(product));
    }
    let productExists = false;
    for (var i = storedProducts.length; i--;) {
      var curProduct = storedProducts[i];

      if (curProduct.handle === product.handle) {
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      storedProducts.push(product);
    }
    if (localStorage.getItem(storedProducts)) {
      localStorage.getItem("storedProducts", JSON.stringify(storedProducts));
    } else {
      localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
    }
  }


  const savedProductsArr = JSON.parse(localStorage.getItem("storedProducts"));
  if (savedProductsArr === null) { return false; }
  const savedProductsArrReverse = savedProductsArr.reverse();

  let index = 0;
  if (savedProductsArr === null) {
    const elem = document.querySelector('#shopify-section-recently-viewed');
    elem.parentNode.removeChild(elem);
  } else {
    savedProductsArrReverse.some((product, index) => {

      const liveProduct = $('.recently-viewed').attr('data-handle');
      const recentProduct = product.handle;

      if( liveProduct === recentProduct ) {return false}

      $('.recently-viewed').addClass('is-active');
      getStoredProducts(product);
      index++;
      return index === 3;
    });
  }

  function getStoredProducts(product) {
    const productAjaxURL = "/products/" + product.handle + ".js";
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: productAjaxURL,
      success: function (data) {
        const soldOut = false;
        const onSale = false;
        if (data.available === false) {
          const soldOut = true;
        };
        if (data.compare_at_price > data.price) {
          const onSale = true;
        };
        const context = {
          title: data.title,
          url: data.url,
          image: getSizedImageUrl(data.featured_image, '880x'),
          compare_price: formatMoney(data.compare_at_price, theme.moneyFormat),
          price: formatMoney(data.price, theme.moneyFormat),
          firstSKU: data.variants[0].sku,
          productAvailable: data.available,
          soldOut: soldOut,
          onSale: onSale
        };
        const template = `<div class="collection-grid-item__match-height grid__item small--one-half medium-up--one-third">

          <div class="collection-grid-item">
        
            <a href="${ context.url }" class="collection-grid-item__image-wrapper">
        
                <img 
                src="${ context.image }" 
                alt="${ context.title }}"  
                class="collection-grid-item__no-hover" />
        
            </a>
        
            <div class="collection-grid-item__text-wrapper">
              
              <a href="${ context.url }">
                <h3 class="h4 collection-grid-item__title">${ context.title }</h3>
        
                <p class="collection-grid-item__price">
                  ${ context.price }
                </p>
              </a>
            </div>
          </div>
        </div>`;
        $(template).appendTo("#recently-viewed");
      },
      error: function (data, error) {
        console.dir(data);
      }
    });

    // List of all entries
    //  console.log(localStorage.getItem("storedProducts"));
    // Last entry inserted
    //  console.log(localStorage.getItem("product"));

  }

})();