import * as React from 'react';
import {Text, View, TextInput, Button, Pressable} from 'react-native';
import {getFeed} from '../parser/parser';
import {FeedListUrls} from '../data/data';
import {useState} from 'react';

export const AddFeed = (props: any) => {
  const [url, onChangeText] = useState('https://hotnews.ro/rss');
  const [result, setResult] = useState('');
  const [buttonDisabled, disableButton] = useState(true);

  // TODO Check if the feed exists as either HTTP or HTTPS before adding
  const addFeed = () => {
    if (!FeedListUrls.includes(url.toLowerCase())) {
      FeedListUrls.push(url.toLowerCase());
      alert('Successfully subscribed to this feed');
    }
    console.log(FeedListUrls);
  };

  const search = () => {
    disableButton(true);
    console.log(url);
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
        autoComplete={'off'}
        autoFocus={true}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
        defaultValue={url} // TODO Remove this
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
