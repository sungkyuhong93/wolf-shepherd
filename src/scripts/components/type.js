import $ from 'jquery';

theme.Type = (function() {
  // Remove empty p tags
  $('p, h2, span').each(function() {
    const $this = $(this);

    if ($this.html().replace(/\s|&nbsp;/g, '').length === 0) {
      $this.remove();
    }
  });
})();
