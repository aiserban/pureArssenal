/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Icon from "react-native-vector-icons/Ionicons";

Icon.loadFont().catch(err => {
    console.log(err);
})

AppRegistry.registerComponent(appName, () => App);
