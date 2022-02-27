import {FeedItem} from 'react-native-rss-parser';

export interface FeedItemModel {
  item: FeedItem;
  source: {
    name: string;
    url: string;
    logoUrl: string;
  };
}
