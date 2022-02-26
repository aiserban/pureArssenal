import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboardScreen';
import {ArticleScreen} from './src/screens/articleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={'DashboardScreen'}>
        <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
        <Stack.Screen name={'ArticleScreen'} component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
