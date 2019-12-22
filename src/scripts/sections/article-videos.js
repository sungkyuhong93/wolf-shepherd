/**
 * Template: Articlecollectionslider
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
 * @namespace articlecollectionslider
 */


import $ from 'jquery';

/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    $allVideos: $(".article iframe[src*='youtube.com']"),
  };


  function init() {
    if (selectors.$allVideos.length === 0) {
      return false;
    } else {
      videoResize();
    }
  }

  function videoResize() {
    selectors.$allVideos.each(function() {
      $(this).wrap( "<div class='rte__video-wrapper'></div>" );
    });
  }


  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};


