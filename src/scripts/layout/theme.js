import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
// import {cookiesEnabled} from '@shopify/theme-cart';

import {load} from '@shopify/theme-sections';
import Navigation from '../sections/navigation';
import Search from '../sections/search-hero';
import AjaxCart from '../sections/ajax-cart';
import Instafeed from '../sections/instagram-feed';
import VideoModal from '../sections/video-modal';
import ExitIntent from '../sections/exit-intent';
import GiftWrap from '../sections/giftwrapping';

import '../sections/product';
import '../sections/product-miniform';
import QuickAdd from '../sections/quick-add';
import Swatch from '../sections/swatch';
import SwatchCollectionImage from '../sections/swatch-collection-image';

import '../sections/site-header';
import '../sections/featured-collection-slider';
import '../sections/features';
import '../sections/reviews';
import '../sections/sticky-nav';
import '../sections/list-collections';
import '../sections/testimonials';
import '../sections/collection-page';

import Accordion from '../components/accordion';
import '../components/form';
import '../components/slide-to';
import '../components/type';
import '../components/quantity';
import Loadpage from '../components/loadpage';

import stickyFilter from '../sections/sticky-filter';

import Article from '../snippets/article-slider';
import CopyLink from '../snippets/copy-link';
import ArticleCollectionSlider from '../sections/article-collection-slider';
import ArticleVideos from '../sections/article-videos';
import articleStickyShare from '../sections/article-sticky-share';

document.addEventListener('DOMContentLoaded', () => {
  Loadpage().init();
  AjaxCart().init();
  Swatch().init();
  GiftWrap().init();
  QuickAdd().init();
  Navigation().init();
  Search().init();
  ExitIntent();
  VideoModal();
  SwatchCollectionImage().init();

  if (document.querySelector('.accordion') !== null) {
    Accordion('.accordion', {
      singleOpen: true,
    }).init();
    Accordion('.accordion').showInitialItem();
  }

  Article().init();
  ArticleCollectionSlider().init();
  articleStickyShare().init();
  ArticleVideos().init();
  stickyFilter().init();
  CopyLink().init();

  Instafeed();

  load('*');

  if (Shopify.theme.role == 'unpublished') {
    console.log(Shopify.theme);
  }

});

// Common a11y fixes
focusHash();
bindInPageLinks();
