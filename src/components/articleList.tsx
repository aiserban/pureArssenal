import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';
import {FeedListUrls, Exclusions} from '../data/data';
import {FeedItemModel} from '../models/FeedItemModel';
import {getFeedItemModels} from '../parser/parser';
import {Article} from './article';

export const ArticleList = (props: any) => {
  const [itemList, setItemList] = useState<FeedItemModel[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loader displayed on page
  const [isRefreshing, setIsRefreshing] = useState(false); // Loader displayed at the top

  const getData = async () => {
    const items = await getFeedItemModels(FeedListUrls);
    setItemList(items);
    setIsLoading(false);
    console.log('Feed list has been updated.');
  };

  const refresh = async () => {
    setIsRefreshing(true);
    await getData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

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
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }>
        {itemList.map(item => {
          return (
            <Article
              key={item.item.id}
              item={item}
              source={item.parent.name}
              sourceUrl={item.parent.url}
              logo={item.parent.logoUrl}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

// todo should not get items in exclussions, need to filter them after we have a list
// export const FilterOutExclussions = async (): Promise<FeedItem[]> => {
//     let curratedArticles: FeedItem[] = []

//     for (let index = 0; index < FeedListUrls.length; index++) {
//         const url = FeedListUrls[index];

//         let items = await getFeedItems(url);
//         if (Exclussions.length !== 0) {
//             items.forEach((article: FeedItem) => {
//                 // TODO should split words first
//                 if (!Exclussions.some(word => article.title.toLowerCase().includes(word.toLowerCase()))) {
//                     curratedArticles.push(article);
//                 }
//             })
//         }
//         else {
//             curratedArticles = curratedArticles.concat(items);
//         }

//     }
//     console.log(curratedArticles[0].published);
//     console.log(new Date(curratedArticles[0].published));
//     curratedArticles.sort((a, b) => {
//         return new Date(b.published).getTime() - new Date(a.published).getTime();
//     });

//     return curratedArticles;
// }
