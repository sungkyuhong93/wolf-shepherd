import $ from 'jquery';

theme.Video = (function() {

  $('.video-block__image').on('click', function(ev) {

    var autoplay = '';

    $(this).parent().closest('.video-block').addClass('active');

    if ($(this).parent().find('.video.vimeo')[0]) {
      autoplay = '&autoplay=1';
    } else if ($(this).parent().find('.video.youtube')[0]) {
      autoplay = '?autoplay=1';
    }

    $(this).parent().find('.video')[0].src += autoplay;
    ev.preventDefault();

  });

})();