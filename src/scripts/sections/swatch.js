import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';

/**
 * Export default AjaxCart.
 */
export default () => {

  const $swatch = $('.swatch-product');
  const $swatchColor = $('.product-form .swatch-product--color');
  const $swatchColorMini = $('.product-form-mini .swatch-product--color');
  const $swatchWidth = $('.product-form .swatch-product--width');
  const $swatchWidthMini = $('.product-form-mini .swatch-product--width');
  const $swatchSize = $('.swatch-product--size');
  const $miniSwatchOpen = $('.product-form-mini__form-toggle');
  const $miniSwatchClose = $('.product-form-mini__details__tab');
  const $sizeToggle = $('[js-size-toggle="trigger"]');

  function init() {
    $swatch.on('click', swatchChange);
    $swatchColor.on('click', updateSlider);
    $swatchSize.on('click', updateSize);
    $swatchColorMini.on('click', updateColor);
    $miniSwatchOpen.on('click', openMiniSwatch);
    $miniSwatchClose.on('click', closeMiniSwatch);
    $sizeToggle.on('click', toggleSize);
    $swatchWidth.on('click', widthSwatch);
    $swatchWidthMini.on('click', widthSwatchMini);

    runSoldout();
  }

  function runSoldout() {
    if ($('.product-form .swatch-product--color').length) {
      const swatchColor = $('.product-form .swatch-product--color.swatch-product--active').attr('data-swatch-color');
      const swatchColorClean = swatchColor.replace('.', '-');
      updateSoldOut(swatchColor, '.product-form');
      updateSoldOut(swatchColor, '.product-form-mini');
    } else {
      updateSoldOutSize('.product-form');
      updateSoldOutSize('.product-form-mini');
    }
  }

  function swatchChange() {
    const $this = $(this);
    const swatchValue = $this.attr('data-swatch-value');
    
    $this.parent().find('.swatch-product').removeClass('swatch-product--active');
    $this.addClass('swatch-product--active');
    $this.parent().parent().find('select').val(swatchValue).trigger('change');
  }

  function updateSlider() {
    const $this = $(this);
    const swatchValue = $this.attr('data-slider');
    const swatchColor = $this.attr('data-swatch-value');
    
    $('.product-images__container').removeClass(cssClasses.active);
    $(`#${swatchValue}`).addClass(cssClasses.active);
    $('.product-form [js-swatch="color"]').html(swatchColor);
    updateSoldOut(swatchColor, '.product-form');
  }

  function updateColor() {
    const $this = $(this);
    const swatchColor = $this.attr('data-swatch-value');
    const swatchColorLower = $this.attr('data-swatch-value').toLowerCase();

    $('.product-form-mini [js-swatch="color"]').html(swatchColor);
    $('.product-form-mini__form-toggle [js-swatch="color"]').removeClass();
    $('.product-form-mini__form-toggle [js-swatch="color"]').addClass(`product-form-mini--${swatchColorLower}`);
    updateSoldOut(swatchColor, '.product-form-mini');
  }

  function updateSize() {
    const $this = $(this);
    const swatchSize = $this.attr('data-swatch-value');

    $('[js-swatch="size"]').html(swatchSize);
  }

  function widthSwatch() {
    const swatchColor = $('.product-form .swatch-product--color.swatch-product--active').attr('data-swatch-color');
    updateSoldOut(swatchColor, '.product-form');
  }

  function widthSwatchMini() {
    const swatchColor = $('.product-form-mini .swatch-product--color.swatch-product--active').attr('data-swatch-color');
    updateSoldOut(swatchColor, '.product-form-mini');
  }

  function updateSoldOut(color, container) {
    const options = document.querySelectorAll(`${container} [data-product-select] option`);
    const swatches = document.querySelectorAll(`${container} .swatch-product`);
    swatches.forEach((swatch) => {
      swatch.classList.remove(cssClasses.disabled);
      swatch.classList.remove(cssClasses.loaded);
    });

    options.forEach((option) => {
      const currentColor = option.dataset.color;

      if (option.dataset.width) {
        const currentWidth = option.dataset.width;
        const width = document.querySelector(`${container} .swatch-product--width.swatch-product--active`);
        const widthValue = width.dataset.swatchValue;
        if (currentColor === color) {
          if (currentWidth === widthValue) {
            runSwatchUpdate(option, container);  
          }
        }
      } else if (currentColor === color) {
        runSwatchUpdate(option, container);
      }
    });
  }

  function updateSoldOutSize(container) {
    const options = document.querySelectorAll(`${container} [data-product-select] option`);
    const swatches = document.querySelectorAll(`${container} .swatch-product`);

    swatches.forEach((swatch) => {
      swatch.classList.remove(cssClasses.disabled);
      swatch.classList.remove(cssClasses.loaded);
    });

    options.forEach((option) => {
      const available = option.dataset.available;
      const size = option.dataset.color.replace('.', '-').toLowerCase();
      const targetSwatch = document.querySelector(`${container} .swatch-product--${size}`);
      targetSwatch.classList.add(cssClasses.loaded);

      if (available !== 'true') {
        targetSwatch.classList.add(cssClasses.disabled);
      }

    });
  }

  function runSwatchUpdate(option, container) {
    const available = option.dataset.available;
    const size = option.dataset.size.replace('.', '-');
    const targetSwatch = document.querySelector(`${container} .swatch-product--${size}`);
    targetSwatch.classList.add(cssClasses.loaded);

    if (available !== 'true') {
      targetSwatch.classList.add(cssClasses.disabled);
    }
  }

  function openMiniSwatch() {
    const $details = $('.product-form-mini__details');
    $details.addClass(cssClasses.active);
  }

  function closeMiniSwatch() {
    const $details = $('.product-form-mini__details');
    $details.removeClass(cssClasses.active);
  }

  function eventBus() {
    $(document).trigger('Swatch:switch', [false]);
  }

  function toggleSize() {
    $sizeToggle.toggleClass(cssClasses.active);
    $('.product-form .swatch__wrapper--size').toggleClass(cssClasses.active);
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
    eventBus,
  });
};


