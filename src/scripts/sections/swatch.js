import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';

/**
 * Export default AjaxCart.
 */
export default () => {

  const $swatch = $('.swatch-product');
  const $swatchColor = $('.product-form .swatch-product--color');
  const $swatchColorMini = $('.product-form-mini .swatch-product--color');
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
  }

  function updateColor() {
    const $this = $(this);
    const swatchColor = $this.attr('data-swatch-value');
    const swatchColorLower = $this.attr('data-swatch-value').toLowerCase();

    $('.product-form-mini [js-swatch="color"]').html(swatchColor);
    $('.product-form-mini__form-toggle [js-swatch="color"]').removeClass();
    $('.product-form-mini__form-toggle [js-swatch="color"]').addClass(`product-form-mini--${swatchColorLower}`);
  }

  function updateSize() {
    const $this = $(this);
    const swatchColor = $this.attr('data-swatch-value');

    $('[js-swatch="size"]').html(swatchColor);
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


