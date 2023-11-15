import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, PlatformColor, Pressable, StyleSheet, Text, View} from 'react-native';
import {ReadList} from '../data/data';
import {FeedItemModel} from '../models/feedItemModel';
import {formatRelative} from 'date-fns';
import {enGB} from 'date-fns/locale';

export const Article = (props: { item: FeedItemModel }) => {
    const navigation = useNavigation();
    const item: FeedItemModel = props.item;
    const source = item.source;
    const [logoUrl, setLogoUrl] = useState<string>(source.logoUrl);
    const published = item.item.published;
    const [displayPublished, setDisplayPublished] = useState('');
    const [isRead, setIsRead] = useState(false);

    const markRead = () => {
        ReadList.push(item);
        setIsRead(true);
    };

    const openArticle = () => {
        // navigation.navigate('ArticleScreen', item);
        navigation.navigate('ArticleReaderScreen', item);
        markRead();
    };

    const computeDate = () => {
        const articleDate = new Date(published);
        const now = new Date();
        let formattedDate = formatRelative(articleDate, now, {locale: enGB});
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        setDisplayPublished(formattedDate);
    };

    const computeFavicon = () => {
        if (logoUrl === undefined) {
            // TODO Should cache icon
            setLogoUrl('https://www.google.com/s2/favicons?domain=' + source.url);
        } else {
            setLogoUrl(item.source.logoUrl);
        }
    };

    useEffect(computeDate, []);
    useEffect(computeFavicon, []);

    function openBlacklistScreen() {
        navigation.navigate('Blacklist', item);
    }

    return (
        <Pressable
            onPress={openArticle}
            onLongPress={openBlacklistScreen}
            style={{marginBottom: 10}}>
            <View style={{margin: 5}}>
                <Text
                    style={[styles.title, isRead ? styles.read : {}]}
                    numberOfLines={2}>
                    {item.item.title.trim()}
                </Text>
                <Text
                    style={[styles.text, isRead ? styles.read : {}]}
                    numberOfLines={3}>
                    {item.item.description.trim()}
                </Text>
                <View style={styles.info}>
                    <Image source={{uri: logoUrl}} style={styles.logo}/>
                    <View style={styles.infoContainer}>
                        <Text numberOfLines={1} style={styles.source}>{source.name}</Text>
                        <Text style={styles.date}>{displayPublished}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    title: {fontFamily: 'Avenir', fontSize: 16, fontWeight: '500'},
    text: {fontFamily: 'Avenir'},
    read: {color: PlatformColor('systemGray')},
    logo: {
        flex: 1,
        minHeight: 16,
        minWidth: 16,
        maxHeight: 16,
        maxWidth: 16,
        height: 16,
        width: 16,
        marginRight: 4,
        alignSelf: 'center',
    },
    source: {
        fontFamily: 'Avenir',
        fontWeight: '100',
        color: 'white',
        flex: 1,
        marginLeft: 4,
    },
    date: {
        fontFamily: 'Avenir',
        fontWeight: '100',
        color: 'white',
        alignSelf: 'flex-end',
        marginRight: 3,
        paddingLeft: 20
    },
    info: {flex: 1, flexDirection: 'row', marginTop: 4},
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: PlatformColor('systemBlue'),
        borderRadius: 10,
        paddingHorizontal: 3
    },
});
