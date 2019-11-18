import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

import {load} from '@shopify/theme-sections';
import Navigation from '../sections/navigation';
import AjaxCart from '../sections/ajax-cart';
import Instafeed from '../sections/instagram-feed';
import VideoModal from '../sections/video-modal';
import ExitIntent from '../sections/exit-intent';
import GiftWrap from '../sections/giftwrapping';
import QuickAdd from '../sections/quick-add';

import '../sections/notification-bar';
import '../sections/site-header';
import '../sections/featured-collection-slider';
import '../sections/features';
import '../sections/reviews';
import '../sections/sticky-nav';
import '../sections/emoji';
import '../sections/search-hero';
import '../sections/list-collections';
import '../sections/testimonials';

import '../components/type';
import '../components/quantity';

document.addEventListener('DOMContentLoaded', () => {
  AjaxCart().init();
  GiftWrap().init();
  QuickAdd().init();
  Navigation();
  ExitIntent();
  Instafeed();
  VideoModal();
  load('*');
});

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
