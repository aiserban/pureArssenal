import * as React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FeedListUrls } from '../data/data'

const AddScreen = ({navigation}) => {
    const [input, setInput] = useState('');

    // TODO: It's not good enough. http://a is considered a good url
    // TODO: Should also check if valid rss
    const isValidUrl = () => {
        console.log('Checking url');
        try {
            new URL('', input.toLowerCase());
            return true;
        } catch (error) {
            return false;
        }
    }

    const addFeed = () => {
        if (!FeedListUrls.includes(input.toLowerCase())) {
            if (isValidUrl()){
                FeedListUrls.push(input.toLowerCase());
                navigation.goBack();
            }
            else {
                alert('Input is not a valid URL');
            }
        }
        console.log(FeedListUrls);
    }

    return (
        <SafeAreaView>
            <TextInput placeholder='https://cnn.com/rss' onChangeText={setInput} autoCapitalize={'none'}/>
            <Button title='Add' onPress={addFeed}/>
        </SafeAreaView>
    )
}

export default AddScreen;