/* Component used to allow the tab opening on the accordion section of the product's description. */

import $ from 'jquery';

theme.Accordion = (function() {
  const $title = $('.accordion__title');
  const $content = $('.accordion__content');
  const activeClass = 'accordion__content--is-active';
  const activeClassParent = 'accordion__item--is-active';

  $title.bind('click', accordionOpen);

  function accordionOpen() {
    const $this = $(this);
    const toggleData = $this.attr('data-toggle');

    $content.removeClass(activeClass);
    $content.parent().removeClass(activeClassParent);
    $(`#${toggleData}`).addClass(activeClass);
    $(`#${toggleData}`).parent().addClass(activeClassParent);
  }

})();


