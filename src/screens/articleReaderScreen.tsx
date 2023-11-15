import * as React from 'react';
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import {FeedItemModel} from '../models/feedItemModel';
import {Readability} from "@mozilla/readability";
import * as htmlparser2 from "htmlparser2";
// import {JSDOM} from "jsdom"


export const ArticleReaderScreen = ({route}: never) => {
    const feedItem: FeedItemModel = route["params"];
    const [html, setHtml] = useState('');

    useEffect(() => {
        fetch(feedItem.item.links[0].url).then(res => {
            res.text().then(text => {
                // const doc = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
                // const parsed = new Readability(doc).parse();
                // setHtml(parsed.textContent)
            })
        }).catch(err => {
            console.log('ERROR' + err);
        })
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                source={{uri: feedItem.item.links[0].url}}
                // source={{html: html}}
                mediaPlaybackRequiresUserAction={true}
                originWhitelist={['*']}
            />
        </SafeAreaView>
    );
};

