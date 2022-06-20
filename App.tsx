import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboardScreen';
import { ArticleScreen } from './src/screens/articleScreen';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PlatformColor } from 'react-native';
import SettingsScreen from './src/screens/settingsScreen';
import AddScreen from './src/screens/addScreen';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

export default function App() {
  Icon.loadFont();

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName={'DashboardScreen'}
        screenOptions={{ headerShown: true }}>

        {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}> */}
          <Stack.Screen name={'AddScreen'} component={AddScreen} />
        {/* </RootStack.Group> */}


        <Stack.Screen name={'SettingsScreen'}
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerRight: () => <Pressable onPress={() => navigation.navigate('AddScreen')}>
              <Icon
                name={'add'}
                color={PlatformColor('systemBlue')}
                size={26}
              />
            </Pressable>
          })} />

        <Stack.Screen
          name={'DashboardScreen'}
          component={DashboardScreen}
          options={({ navigation }) => ({
            headerLeft: () => <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
              <Icon
                name={'cog-outline'}
                color={PlatformColor('systemBlue')}
                size={26}
              />
            </Pressable>
          })}
        />

        <Stack.Screen
          name={'ArticleScreen'}
          component={ArticleScreen}
          options={{ headerShown: false, title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
