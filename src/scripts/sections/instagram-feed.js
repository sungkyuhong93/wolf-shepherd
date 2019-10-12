/**
 * Section: Image slider
 * ------------------------------------------------------------------------------
 * Large component displaying image galleries in a carousel.
 *
 * @namespace imageSlider
 */
import {register} from '@shopify/theme-sections';
import Instafeed from 'instafeed.js';
import cssClasses from '../helpers/cssClasses';

/**
 * DOM selectors.
 */
const selectors = {
  id: 'instafeed-section',
  container: '#instafeed',
  loadButton: '[js-instafeed="load-more"]',
};

/**
 * Instagram API key and UserID
 */
const api = {
  userID: '477921807',
  accessToken: '477921807.bc6d9e2.d0c8c34bbe464ef9b3fd1b34a8dfc502',
};

const config = {
  cellSelector: '.instafeed__img',
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true,
  cellAlign: 'center',
};

/**
 * Image slider section constructor.
 * Executes on page load as well as Theme Editor `section:load` events.
 * @param {string} container - Selector for the section container DOM element.
 */
register('instafeed', {

  setNodeSelectors() {
    this.loadButton = document.querySelector(selectors.loadButton);
  },

  init() {
    this.setNodeSelectors();
    this.createFeed();
  },

  createFeed() {
    const self = this;
    let userFeed = new Instafeed({
      get: 'user',
      userId: api.userID,
      accessToken: api.accessToken,
      resolution: 'standard_resolution',
      limit: 8,
      clientId: 'Client',
      sortBy: 'most-recent',
      template: '<a class="instafeed__img"  target="_blank" href="\{\{link\}\}" style="background-image: url\(\{\{image\}\}\)"><span class="instafeed__overlay"><span class="instafeed__overlay-text">{{caption}}</span></span></a>',
      after() {
        self.createSlider();
      },
    });

    userFeed.run();

    if (self.loadButton != null) {
      self.loadButton.addEventListener('click', () => {
        if (userFeed.hasNext()) {
          userFeed.next();
        } else {
          self.loadButton.classList.add(cssClasses.hidden)
        }
      });
    }

  },

  /**
   * Construct section events
   */
  onLoad() {
    this.init();
  },

  createSlider() {
    const namespace = `#${selectors.id}`;
    const instasection = document.querySelector(namespace);
    instasection.classList.add('active');
    if (this.loadButton == null) {
    //   const instaSlider = new Carousel(namespace, config);
    //   instaSlider.init();
    }
  },
});
