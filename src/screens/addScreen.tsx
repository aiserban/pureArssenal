import * as React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FeedListUrls } from '../data/data'
import { AddFeed } from '../components/addFeed'

const AddScreen = ({navigation}) => {
    const [input, setInput] = useState('');

    return (
        <SafeAreaView>
            <AddFeed/>
        </SafeAreaView>
    )
}

export default AddScreen;