import * as React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import {FeedItemModel} from '../models/FeedItemModel';

export const ArticleScreen = ({route}: never) => {
    const feedItem: FeedItemModel = route["params"];

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                source={{uri: feedItem.item.links[0].url}}
                mediaPlaybackRequiresUserAction={true}
                originWhitelist={['*']}
            />
        </SafeAreaView>
    );
};

