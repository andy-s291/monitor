// import React navigation dan screen lain
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import CreateIssueScreen from './src/screens/CreateIssueScreen';

// membuat stack navigator
const navigator = createStackNavigator(
  {
    // membuat navigation ke screens
    Home: HomeScreen,
    Emergency: EmergencyScreen,
    CreateIssue: CreateIssueScreen,
  },
  {
    // set initial page to home screen
    initialRouteName: 'Home',
  },
);

// export app container
export default createAppContainer(navigator);
