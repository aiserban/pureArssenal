import * as React from 'react';
import {useState, useEffect} from 'react';
import {
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    View,
} from 'react-native';
import {FeedListUrls} from '../data/data';
import {FeedItemModel} from '../models/feedItemModel';
import {getFeedItemModels} from '../parser/parser';
import {Article} from './article';

export const ArticleList = () => {
    const [itemList, setItemList] = useState<FeedItemModel[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Loader displayed on page
    const [isRefreshing, setIsRefreshing] = useState(false); // Loader displayed at the top

    const getData = async () => {
        const items = await getFeedItemModels(FeedListUrls);
        console.log(items);
        setItemList(items);
        setIsLoading(false);
        console.log('Feed list has been updated.' + FeedListUrls.toString());
    };

    const refresh = async () => {
        setIsRefreshing(true);
        await getData();
        setIsRefreshing(false);
    };

    useEffect(() => {
        refresh();
    }, [FeedListUrls.length]);  // TODO Bad check here, as you can add 1 and remove 1 and the length will stay the same

    return (
        <View>
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}
                />
            )}
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={refresh}/>
                }>
                {itemList.map(item => {
                    if (item.item.id && item.item.description) {
                        return (
                            <Article
                                key={item.item.id}
                                item={item}
                                // source={item.parent.name}
                                // sourceUrl={item.parent.url}
                                // logo={item.parent.logoUrl}
                            />
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
};
