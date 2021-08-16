// import React navigation dan screen lain
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import CreateIssueScreen from './src/screens/CreateIssueScreen';
import LoginScreen from './src/screens/LoginScreen';

// membuat stack navigator
const navigator = createStackNavigator(
  {
    // membuat navigation ke screens
    Home: HomeScreen,
    Emergency: EmergencyScreen,
    CreateIssue: CreateIssueScreen,
    Login : LoginScreen,
  },
  {
    // set initial page to home screen
    initialRouteName: 'Login',
  },
);

// export app container
export default createAppContainer(navigator);
