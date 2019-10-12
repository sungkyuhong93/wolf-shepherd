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
import '../sections/navigation';
import '../sections/notification-bar';
import '../sections/meganav';
import '../sections/sticky-nav';
import '../sections/ajax-cart';
import '../sections/emoji';
import '../sections/instagram-feed';
import '../sections/search-hero';
import ExitIntent from '../sections/exit-intent';

import '../components/type';
import '../components/quantity';

document.addEventListener('DOMContentLoaded', () => {
  ExitIntent();
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
