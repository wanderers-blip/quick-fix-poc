/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RNDemo from './Test';
import TestPages from './TestStorage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RNDemo);
