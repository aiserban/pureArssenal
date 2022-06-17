import * as React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FeedListUrls } from '../data/data'

const AddScreen = ({navigation}) => {
    const [url, setUrl] = useState('');

    const addFeed = () => {
        console.log(url);
        if (!FeedListUrls.includes(url.toLowerCase())) {
            FeedListUrls.push(url.toLowerCase());
        }
        console.log(FeedListUrls);
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <TextInput placeholder='https://cnn.com/rss' onChangeText={setUrl}/>
            <Button title='Add' onPress={addFeed}/>
        </SafeAreaView>
    )
}

export default AddScreen;