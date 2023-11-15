import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboardScreen';
import {ArticleScreen} from './src/screens/articleScreen';
import {PlatformColor, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './src/screens/settingsScreen';
import AddScreen from './src/screens/addScreen';
import {ArticleReaderScreen} from "./src/screens/articleReaderScreen";
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'DashboardScreen'}
                    screenOptions={{headerShown: true}}>

                    {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}> */}
                    <Stack.Screen name={'AddScreen'} component={AddScreen}/>
                    {/* </RootStack.Group> */}


                    <Stack.Screen name={'SettingsScreen'}
                                  component={SettingsScreen}
                                  options={({navigation}) => ({
                                      headerRight: () => <Pressable onPress={() => navigation.navigate('AddScreen')}>
                                          <Icon
                                              name={'add'}
                                              color={PlatformColor('systemBlue')}
                                              size={26}
                                          />
                                      </Pressable>
                                  })}/>

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
                            </Pressable>
                        })}
                    />

                    <Stack.Screen
                        name={'ArticleScreen'}
                        component={ArticleScreen}
                        options={{headerShown: false, title: ''}}
                    />
                    <Stack.Screen name={'ArticleReaderScreen'}
                                  component={ArticleReaderScreen}
                                  options={{headerShown: false, title: ''}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
