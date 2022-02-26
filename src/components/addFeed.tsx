import * as React from 'react';
import {Text, View, TextInput, Button, Pressable} from 'react-native';
import {getFeed} from '../parser/parser';
import {FeedListUrls} from '../data/data';
import {useState} from 'react';

export const AddFeed = (props: any) => {
  const [url, onChangeText] = useState('');
  const [result, setResult] = useState('');
  const [buttonDisabled, disableButton] = useState(true);

  // TODO Check if the feed exists as either HTTP or HTTPS before adding
  const addFeed = () => {
    if (!FeedListUrls.includes(url.toLowerCase())) {
      FeedListUrls.push(url.toLowerCase());
    }
    console.log(FeedListUrls);
  };

  const search = () => {
    disableButton(true);
    getFeed(url)
      .then(feed => {
        setResult(feed.title);
        disableButton(false);
      })
      .catch(err => {
        disableButton(true);
        setResult('');
      });
  };

  return (
    <View>
      <TextInput
        placeholder={'Feed or website URL'}
        autoCorrect={false}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
      />
      <Button title="Search" onPress={search} />
      <View>
        <Pressable>
          <Text>{result}</Text>
        </Pressable>
      </View>
      <Button onPress={addFeed} title={'Add feed'} disabled={buttonDisabled} />
    </View>
  );
};
