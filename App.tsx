import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboardScreen';
import {ArticleScreen} from './src/screens/articleScreen';
import {Button, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlatformColor} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  Icon.loadFont();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={'DashboardScreen'}>
        <Stack.Screen
          name={'DashboardScreen'}
          component={DashboardScreen}
          options={{
            headerLeft: () => {
              return (
                <Pressable
                  onPress={() => {
                    console.log('clicked');
                  }}>
                  <Icon
                    name={'cog-outline'}
                    color={PlatformColor('systemBlue')}
                    size={26}
                  />
                </Pressable>
              );
            },
          }}
        />
        <Stack.Screen
          name={'ArticleScreen'}
          component={ArticleScreen}
          options={{headerShown: false, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
