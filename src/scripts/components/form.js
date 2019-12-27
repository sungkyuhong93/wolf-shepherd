import $ from 'jquery';
import cssClasses from '../helpers/cssClasses';

const selectors = {
  form: '[js-form="true"]',
  input: '[js-form="true"] input',
  textarea: '[js-form="true"] textarea',
  autofill: 'input:-internal-autofill-selected',
};

theme.Type = (function() {
  const nodeSelectors = {
    input: document.querySelectorAll(selectors.input),
    textarea: document.querySelectorAll(selectors.textarea),
  };

  // Remove empty p tags
  function handleBlur(e) {
    const input = e.target;
    const inputValue = e.target.value;
    const labelName = input.id;
    const label = document.querySelector(`.slick-form label[for=${labelName}]`);
    inputActive(inputValue, label);
  }

  function handleFocus(e) {
    const input = e.target;
    const labelName = input.id;
    const label = document.querySelector(`.slick-form label[for=${labelName}]`);
    label.classList.add(cssClasses.active);
  }

  function inputActive(input, label) {
    if (input) {
      label.classList.add(cssClasses.active);
    } else {
      label.classList.remove(cssClasses.active);
    }
  }

  function setEventListeners() {
    nodeSelectors.input.forEach((element, index) => {
      element.addEventListener('blur', handleBlur);
      element.addEventListener('focus', handleFocus);
    });

    nodeSelectors.textarea.forEach((element, index) => {
      // element.addEventListener('blur', handleBlur);
      // element.addEventListener('focus', handleFocus);
    });
  }

  function checkoutfill() {
    window.setTimeout(() => { 
      const $autofill = $('input:-internal-autofill-selected');

      $autofill.each(function() {
        const $this = $(this);
        const labelName = $this.attr('id');
        const $label = $(`.slick-form label[for=${labelName}]`);
        $label.addClass(cssClasses.active);
      });
     }, 300);
  }

  function init() {
    checkoutfill();
    setEventListeners();
    nodeSelectors.input.forEach((element, index) => {
      const labelName = element.id;

      if (labelName !== '') {
        const inputValue = element.value;
        const label = document.querySelector(`.slick-form label[for=${labelName}]`);
        inputActive(inputValue, label);
      }
    });
  }

  init();
})();
