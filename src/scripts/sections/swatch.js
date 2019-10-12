import $ from 'jquery';

theme.Swatch = (function() {

  const $swatch = $('.swatch-product');

  $swatch.on('click', swatchChange);

  function swatchChange() {
    const $this = $(this);
    const swatchValue = $this.attr('data-swatch-value');

    $this.parent().find('.swatch-product').removeClass('swatch-product--active');
    $this.addClass('swatch-product--active');
    $this.parent().parent().find('select').val(swatchValue).trigger('change');
  }

})();


