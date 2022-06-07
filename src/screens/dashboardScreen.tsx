import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {ArticleList} from '../components/articleList';

const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <ArticleList />
    </SafeAreaView>
  );
};

export default DashboardScreen;
