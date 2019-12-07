import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#191920',
      },
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);
export default Routes;
