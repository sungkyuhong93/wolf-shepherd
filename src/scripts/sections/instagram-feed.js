/**
 * Section: Instagram Feedx
 * ------------------------------------------------------------------------------
 * Only loads on scroll intersection
 *
 * @namespace instagram
 */
import Instafeed from 'instafeed.js';
import $ from 'jquery';
import _ from 'slick-carousel';
import jsWidth from '../helpers/screenWidths';

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
      template: '<div class="instafeed__contianer"><a class="instafeed__img" target="_blank" href="\{\{link\}\}" style="background-image: url\(\{\{image\}\}\)"><span class="instafeed__overlay"><span class="instafeed__overlay-text">{{caption}}</span></span></a></div>',
      success: (data) => {
        // read the feed data and create owr own data struture.
        const images = data.data;
        let i;
        for (i = 0; i < images.length; i++) {
          // const image = images[i];
          // console.log(image)
        }
      },
      after: () => {
        createSlider();
      },
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

  /**
   * Create slick slider
   */
  function createSlider() {
    $('#instafeed').slick({
      arrows: true,
      vertical: false,
      prevArrow: '<div class="slick-arrow slick-prev wolf-arrow"></div>',
      nextArrow: '<div class="slick-arrow slick-next wolf-arrow wolf-arrow--right"></div>',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      responsive: [
        {
          breakpoint: jsWidth.mac13,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '15%',
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '15%',
          },
        }
      ],
    });
  }

  function init() {
    setObserver();
  }

  return init();
};
