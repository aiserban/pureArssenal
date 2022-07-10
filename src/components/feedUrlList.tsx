import * as React from 'react';
import { FlatList, Text } from 'react-native';
import { FeedUrl } from './feedUrl';

export const FeedUrlList = (props: { data: string[] }) => {
    const data = props.data;

    return (
        <FlatList extraData={data} data={data} renderItem={({ item }) => { return <FeedUrl url={item} /> }} />
    )
}