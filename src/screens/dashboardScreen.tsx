import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {ArticleList} from '../components/articleList';

const DashboardScreen = () => {
    useIsFocused();

    return (
        <SafeAreaView>
            <ArticleList/>
        </SafeAreaView>
    );
};

export default DashboardScreen;
