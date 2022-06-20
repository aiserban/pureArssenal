import * as React from 'react';
import { FlatList, Text } from 'react-native';

export const FeedUrlList = (props: { data: string[] }) => {
    const data = props.data;

    return (
        <FlatList extraData={data} data={data} renderItem={({ item }) => { return <Text>{item}</Text> }} />
    )
}