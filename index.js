/**
 * This allows the usage of the function crypto.getRandomValues,
 * which is used to generate UUIDs.
 */
import 'react-native-get-random-values';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
