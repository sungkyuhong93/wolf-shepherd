import $ from 'jquery';

theme.Swatch = (function() {

  const $swatch = $('.swatch-product');
  const $swatchColor = $('.product-form .swatch-product--color');
  const $swatchColorMini = $('.product-form-mini .swatch-product--color');
  const $swatchSize = $('.swatch-product--size');

  $swatch.on('click', swatchChange);
  $swatchColor.on('click', updateSlider);
  $swatchSize.on('click', updateSize);
  $swatchColorMini.on('click', updateColor);

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

    $('.product-images__container').removeClass('is-active');
    $(`#${swatchValue}`).addClass('is-active');

    $('.product-form [js-swatch="color"]').html(swatchColor);
  }

  function updateColor() {
    const $this = $(this);
    const swatchColor = $this.attr('data-swatch-value');
    $('.product-form-mini [js-swatch="color"]').html(swatchColor);
  }

  function updateSize() {
    const $this = $(this);
    const swatchColor = $this.attr('data-swatch-value');

    $('[js-swatch="size"]').html(swatchColor);
  }

})();


