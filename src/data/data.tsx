import {Feed} from 'react-native-rss-parser';
import {FeedItemModel} from '../models/FeedItemModel';

export let ReadList: FeedItemModel[] = [];
export let Exclusions: string[] = [];
export let FeedList: Feed[] = [];
export let FeedListUrls: string[] = [
  // 'https://hotnews.ro/rss',
  'https://digi24.ro/rss',
  'https://www.gsp.ro/rss/fotbal-99.xml',
  'https://protv.ro/rss'
];
export let ReadIdList: string[] = [];
