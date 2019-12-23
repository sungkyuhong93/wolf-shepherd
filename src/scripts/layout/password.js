/**
 * Layout: Password
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the product template.
 *
 * @namespace product
 */

import '../../styles/templates/password.scss';

import $ from 'jquery';


/**
 * Export default exitIntent.
 */
document.addEventListener('DOMContentLoaded', () => {
  $('#login-open').on('click', function(){
    $('#modal').addClass('is-active');
  })
});