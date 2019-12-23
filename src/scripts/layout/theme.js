import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';

import {load} from '@shopify/theme-sections';
import Navigation from '../sections/navigation';
import Search from '../sections/search-hero';
import AjaxCart from '../sections/ajax-cart';
import Instafeed from '../sections/instagram-feed';
import GiftWrap from '../sections/giftwrapping';
import QuickAdd from '../sections/quick-add';
import Swatch from '../sections/swatch';
import SwatchCollectionImage from '../sections/swatch-collection-image';
import VideoModal from '../sections/video-modal';
import '../sections/product';
import '../sections/product-miniform';

import '../sections/site-header';
import '../sections/sticky-nav';
import '../sections/featured-collection-slider';
import '../sections/list-collections';
import '../sections/collection-page';
import '../sections/features';
import '../sections/reviews';
import '../sections/testimonials';

import Accordion from '../components/accordion';
import '../components/form';
import '../components/type';
import '../components/quantity';
import Loadpage from '../components/loadpage';

document.addEventListener('DOMContentLoaded', () => {
  Loadpage().init();
  AjaxCart().init();
  Swatch().init();
  GiftWrap().init();
  QuickAdd().init();
  Navigation().init();
  Search().init();
  VideoModal();
  SwatchCollectionImage().init();

  if (document.querySelector('.accordion') !== null) {
    Accordion('.accordion', {
      singleOpen: true,
    }).init();
    Accordion('.accordion').showInitialItem();
  }

  Instafeed();

  load('*');

  if (Shopify.theme.role == 'unpublished') {
    console.log(Shopify.theme);
  }

});

// Common a11y fixes
focusHash();
bindInPageLinks();
