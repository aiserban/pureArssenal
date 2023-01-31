import {Feed} from 'react-native-rss-parser';
import {FeedItemModel} from '../models/FeedItemModel';

export const ReadList: FeedItemModel[] = [];
export const Exclusions: string[] = [];
export const FeedList: Feed[] = [];
export const FeedListUrls: string[] = [
    // 'https://hotnews.ro/rss',
    'https://digi24.ro/rss',
    'http://rss.cnn.com/rss/edition.rss',
    'https://www.gsp.ro/rss/fotbal-99.xml',
    'https://protv.ro/rss'
];
export const ReadIdList: string[] = [];
