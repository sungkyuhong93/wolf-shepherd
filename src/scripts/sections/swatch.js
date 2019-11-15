import $ from 'jquery';

theme.Swatch = (function() {

  const $swatch = $('.swatch-product');
  const $swatchColor = $('.swatch-product--color');

  $swatch.on('click', swatchChange);
  $swatchColor.on('click', updateSlider);

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
    
    $('.swatch__header span').html(swatchColor);
    // $this.parent().find('.swatch-product').removeClass('swatch-product--active');
    // $this.addClass('swatch-product--active');
    // $this.parent().parent().find('select').val(swatchValue).trigger('change');
  }

})();


