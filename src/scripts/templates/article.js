import {load} from '@shopify/theme-sections';
import Article from '../snippets/article-slider';
import CopyLink from '../snippets/copy-link';
import ArticleCollectionSlider from '../sections/article-collection-slider';
import ArticleVideos from '../sections/article-videos';
import articleStickyShare from '../sections/article-sticky-share';


document.addEventListener('DOMContentLoaded', () => {
  Article().init();
  ArticleCollectionSlider().init();
  articleStickyShare().init();
  ArticleVideos().init();
  CopyLink().init();
  load('*');
});
