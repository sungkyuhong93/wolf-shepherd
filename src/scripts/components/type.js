import $ from 'jquery';

theme.Type = (function() {
  // Remove empty p tags
  $('p').each(function() {
    const $this = $(this);

    if ($this.html().replace(/\s|&nbsp;/g, '').length === 0) {
      $this.remove();
    }
  });
})();
