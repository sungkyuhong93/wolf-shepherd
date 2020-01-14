import $ from 'jquery';

/**
 * Export default SwatchCollectionImage.
 */
export default () => {

  // Selectors
  const selectors = {
    container: document.querySelectorAll('.collection-grid-item'),
  };

  function init() {
    selectors.container.forEach((container) => {
      const trigger = container.querySelector('[js-swatch-slider="trigger"]');
      if (trigger !== null ) {
        trigger.addEventListener('click', () => {
          swatchSlide(container);
        });
      }
    });
  }

  function swatchSlide(container) {
    const swatches = container.querySelectorAll('[js-swatch-image="trigger"]');
    const counter = getCount();
    console.log(counter)
    var i = 0;
    
    for (i = 0; i < counter; i++) {
      // console.log(swatches[i])
      swatchCopy(swatches[i], container)
    }
  }

  function swatchCopy(swatch, container) {
    const wrapper = container.querySelector('.swatch__wrapper');
    wrapper.appendChild(swatch);
  }

  function getCount() {
    if (window.innerWidth < 748) {
      return 2;
    } else {
      return 4;
    }
  }

  /**
   * Return immutable object.
   */
  return Object.freeze({
    init,
  });
};


