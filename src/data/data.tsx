import {Feed} from 'react-native-rss-parser';
import {FeedItemModel} from '../models/FeedItemModel';

export var ReadList: FeedItemModel[] = [];
export var Exclusions: string[] = [];
export var FeedList: Feed[] = [];
export var FeedListUrls: string[] = [
  'https://hotnews.ro/rss',
  'https://digi24.ro/rss',
  'https://sport.ro/rss',
  'https://protv.ro/rss',
];
export var ReadIdList: string[] = [];
