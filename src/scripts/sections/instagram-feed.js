/**
 * Section: Instagram Feedx
 * ------------------------------------------------------------------------------
 * Only loads on scroll intersection
 *
 * @namespace instagram
 */
import Instafeed from 'instafeed.js';

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

export default () => {
  function createFeed() {
    const userFeed = new Instafeed({
      get: 'user',
      userId: api.userID,
      accessToken: api.accessToken,
      resolution: 'standard_resolution',
      limit: 8,
      clientId: 'Client',
      sortBy: 'most-recent',
      template: '<a class="instafeed__img"  target="_blank" href="\{\{link\}\}" style="background-image: url\(\{\{image\}\}\)"><span class="instafeed__overlay"><span class="instafeed__overlay-text">{{caption}}</span></span></a>',
    });
    userFeed.run();
  }

  function setObserver() {
    if (('IntersectionObserver' in window)) {
      const observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            createFeed();
            observer.unobserve(entry.target);
            return false;
          } else {
            return false;
          }
        });
      }, {rootMargin: '0px 0px -200px 0px'});
      document.querySelectorAll('.instafeed').forEach((instagram) => { observer.observe(instagram)});
    } else {
      createFeed();
    }
  }

  function init() {
    setObserver();
  }

  return init();
};
