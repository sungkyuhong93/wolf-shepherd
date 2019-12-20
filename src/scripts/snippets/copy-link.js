/**
 * Template: Copy link
 * ------------------------------------------------------------------------------
 *
 * @namespace Copylink
 */


import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';


/**
 * Export default article slider
 */
export default () => {

  const selectors = {
    copyLink: '[js-copy-link="trigger"]',
  };

  const nodeSelectors = {
    copyLink: document.querySelectorAll(selectors.copyLink),
  };

  function init() {
    setEventListeners();
  }

  function setEventListeners() {
    nodeSelectors.copyLink.forEach((element, index) => {
      element.addEventListener('click', handleCopy);
    });
  }

  function handleCopy() {
    const url = this.dataset.url;
    const $temp = $('<input>');
    $('body').append($temp);
    $temp.val(url).select();
    document.execCommand('copy');
    $temp.remove();

    tooltip(this);
  }

  function tooltip(target) {
    // const tool = $(this).children('copy__tooltip');
    $(target).addClass(cssClasses.active);
    setTimeout(function(){ 
      $(target).removeClass(cssClasses.active);
    }, 1500);


    // $('body').append($temp);
    // $temp.val(url).select();
    // document.execCommand('copy');
    // $temp.remove();

    // tooltip();
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};
