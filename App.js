import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import details from './details';
import home from './home';

const RootStack = createStackNavigator(
  {
    Details: details,
    Home: home,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
