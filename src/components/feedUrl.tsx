import * as React from 'react';
import {Animated, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import {FeedListUrls} from '../data/data';


export const FeedUrl = (props: { url }) => {
    const url = props.url;
    const deleteFeed = () => {
        alert('Pressed')
        const index = FeedListUrls.indexOf(url);
        alert(index.toString());
        if (index >= 0) {
            FeedListUrls.splice(index, 1);
            alert('Feed removed');
        }
    }

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-50, 1],
            outputRange: [0, 10],
        });

        return (
            <RectButton style={styles.rectButton} onPress={close}>
                <Animated.Text
                    onPress={deleteFeed}
                    style={[
                        {
                            transform: [{translateX: trans}],
                            // textAlign: 'right'
                            // flex: 1
                        },
                    ]}>
                    Delete
                </Animated.Text>
            </RectButton>
        );
    }

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <Text style={styles.text}>{url}</Text>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Avenir',
        flex: 1
    },
    rightAction: {
        backgroundColor: 'red',
        flex: 1,
        height: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    rectButton: {
        // flex: 1,
        height: 80,
        paddingVertical: 0,
        paddingHorizontal: 20,
        // justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    // separator: {
    //     backgroundColor: 'rgb(200, 199, 204)',
    //     height: StyleSheet.hairlineWidth,
    // },
    // fromText: {
    //     fontWeight: 'bold',
    //     backgroundColor: 'transparent',
    // },
    // messageText: {
    //     color: '#999',
    //     backgroundColor: 'transparent',
    // },
    // dateText: {
    //     backgroundColor: 'transparent',
    //     position: 'absolute',
    //     right: 20,
    //     top: 10,
    //     color: '#999',
    //     fontWeight: 'bold',
    // },
});