import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboardScreen';
import {ArticleScreen} from './src/screens/articleScreen';
import {Button, Pressable, Settings} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlatformColor} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SettingsScreen from './src/screens/settingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  Icon.loadFont();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={'DashboardScreen'}>
                <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />

        <Stack.Screen
          name={'DashboardScreen'}
          component={DashboardScreen}
          options={({navigation}) => ({
            headerLeft: () => <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
                      <Icon
                    name={'cog-outline'}
                    color={PlatformColor('systemBlue')}
                    size={26}
                  />
            </Pressable>,
          })}
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
