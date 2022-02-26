import * as React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedItem} from 'react-native-rss-parser';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FeedItemModel} from '../models/FeedItemModel';
// import { IArticle } from '../components/Article';

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

  // TODO either use this with reader view or something, or remove it
  function openBlacklistScreen() {
    navigation.navigate('Blacklist', feedItem);
  }
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
