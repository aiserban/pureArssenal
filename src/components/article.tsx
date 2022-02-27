import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, PlatformColor} from 'react-native';

import {ReadList} from '../data/data';
import {StyleSheet} from 'react-native';
import {FeedItemModel} from '../models/feedItemModel';

export const Article = (props: {item: FeedItemModel}) => {
  const navigation = useNavigation();
  const item: FeedItemModel = props.item;
  const source = item.source;
  const [logoUrl, setLogoUrl] = useState<string>(source.logoUrl);
  const published = item.item.published;
  const [displayPublished, setDisplayPublished] = useState('');
  const [isRead, setIsRead] = useState(false);

  const markRead = () => {
    ReadList.push(item);
    setIsRead(true);
  };

  const openArticle = () => {
    navigation.navigate('ArticleScreen', item);
    markRead();
  };

  // TODO Handle days other day today
  const computeDate = () => {
    const date = new Date(published);
    const hours = date.getHours();
    let minutes;

    if (date.getMinutes() < 10) {
      minutes = '0' + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }
    setDisplayPublished(hours + ':' + minutes);

    if (item.item.id === undefined) {
      console.log(source.name);
    }
  };

  const computeFavicon = () => {
    if (logoUrl === undefined) {
      // TODO Should cache icon
      setLogoUrl('https://www.google.com/s2/favicons?domain=' + source.url);
    } else {
      setLogoUrl(item.source.logoUrl);
    }
  };

  useEffect(computeDate, []);
  useEffect(computeFavicon, []);

  function openBlacklistScreen() {
    navigation.navigate('Blacklist', item);
  }

  return (
    <Pressable
      onPress={openArticle}
      onLongPress={openBlacklistScreen}
      style={{marginBottom: 10}}>
      <View style={{margin: 5}}>
        <Text
          style={[styles.title, isRead ? styles.read : {}]}
          numberOfLines={2}>
          {item.item.title.trim()}
        </Text>
        <Text
          style={[styles.text, isRead ? styles.read : {}]}
          numberOfLines={3}>
          {item.item.description.trim()}
        </Text>
        <View style={styles.info}>
          <Image source={{uri: logoUrl}} style={styles.logo} />
          <View style={styles.sourceDateContainer}>
            <Text style={styles.source}>{source.name}</Text>
            <Text style={styles.date}>{displayPublished}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {fontFamily: 'Avenir', fontWeight: '700'},
  text: {fontFamily: 'Avenir'},
  read: {color: PlatformColor('systemGray')},
  logo: {
    flex: 1,
    minHeight: 16,
    minWidth: 16,
    maxHeight: 16,
    maxWidth: 16,
    height: 16,
    width: 16,
    marginRight: 4,
    alignSelf: 'center',
  },
  source: {
    fontFamily: 'Avenir',
    fontWeight: '100',
    color: 'white',
    flex: 1,
    marginLeft: 4,
  },
  date: {
    fontFamily: 'Avenir',
    fontWeight: '100',
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 25,
  },
  info: {flex: 1, flexDirection: 'row', marginTop: 4},
  sourceDateContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: PlatformColor('systemBlue'),
  },
});
