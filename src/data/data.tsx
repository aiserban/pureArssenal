import {Feed} from 'react-native-rss-parser';
import {FeedItemModel} from '../models/feedItemModel';

export const ReadList: FeedItemModel[] = [];
export const Exclusions: string[] = [];
export const FeedList: Feed[] = [];
export const FeedListUrls: string[] = [
    'https://hotnews.ro/rss',
    'https://digi24.ro/rss',
    'https://www.gsp.ro/rss/fotbal-99.xml',
    // 'https://protv.ro/rss',  // buggy
    'https://feeds.arstechnica.com/arstechnica/technology-lab',
    'https://www.wired.com/feed/category/science/latest/rss'
];
export const ReadIdList: string[] = [];
