import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, SectionList, Text, View } from 'react-native';
import { FeedListUrls } from '../data/data';

const SettingsScreen = ({navigation}) => {
  const [data, setData] = useState(['']);
  const isFocused = useIsFocused();

  const refreshData = () => {
    console.log('Refreshing');
    setData(FeedListUrls);
  }

  console.log('Is focused: ' + isFocused)

  useEffect(refreshData, [])

  return (
    <View>
      <FlatList extraData={data} data={data} renderItem={({item}) => {return <Text>{item}</Text>}} />
    </View>

  );
};

export default SettingsScreen;
