import * as React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native';
import {FeedItemModel} from '../models/FeedItemModel';

export const ArticleScreen = ({route, navigation}: any) => {
  const feedItem: FeedItemModel = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: feedItem.item.links[0].url}}
        mediaPlaybackRequiresUserAction={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
