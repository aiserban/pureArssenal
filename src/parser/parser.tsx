import * as rssParser from 'react-native-rss-parser';
import {Feed} from 'react-native-rss-parser';
import {FeedItemModel} from '../models/FeedItemModel';
import {removeHtml} from "../utils";

export const getFeed = async (url: string) => {
    return fetch(url)
        .then(response => response.text())
        .then(responseData => rssParser.parse(responseData));
};

// todo not sure if this should be here
// probably better off as a mapper function somewhere else
export const getFeedItemModels = async (urls: string[]) => {
    let feeds: Feed[] = [];

    // get Feeds, feed contains items (e.g. Hotnews > all news articles)
    await Promise.all(
        urls.map(async url => {
            await getFeed(url).then(feed => {
                feeds = feeds.concat(feed);
            });
        }),
    );

    // get all the articles in each feed and map them
    let feedItemModels: FeedItemModel[] = [];
    feeds.forEach(feed => {
        feedItemModels = feedItemModels.concat(
            feed.items.map(item => {
                const model: FeedItemModel = {
                    item: (() => {
                        const tmp = item;
                        // some feeds don't provide a GUID field for items, so we default to their url
                        if (tmp.id === undefined) {
                            tmp.id = item.links[0].url;
                        }
                        tmp.description = removeHtml(tmp.description);
                        return tmp;
                    })(),
                    source: {
                        name: feed.title,
                        url: feed.links[0].url,
                        logoUrl: feed.image.url,
                    },
                };
                return model;
            }),
        );
    });

    // sort by date descending
    feedItemModels.sort((a, b) => {
        return (
            new Date(b.item.published).getTime() -
            new Date(a.item.published).getTime()
        );
    });

    // feedItemModels.forEach(item => {
    //   insert(item);
    // })
    return feedItemModels;
};
