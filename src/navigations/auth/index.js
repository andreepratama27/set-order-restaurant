import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Orders from 'modules/orders';
import History from 'modules/history';
import Settings from 'modules/settings';
import EditRestaurant from 'modules/edit-restaurant';
import Location from 'modules/location';

import ChangePassword from 'modules/change-password';

import BottomTab from '../BottomTab';

const ModalConfig = createStackNavigator(
  {
    Location: {
      screen: Location,
    },
  },
  {
    initialRouteName: 'Location',
    navigationOptions: {
      header: null,
    },
    mode: 'modal',
  },
);

const TabConfig = createBottomTabNavigator(
  {
    Orders: {
      screen: createStackNavigator({
        Orders: {
          screen: Orders,
        },
      }),
    },
    History: {
      screen: createStackNavigator({
        History: {
          screen: History,
        },
      }),
    },
    Settings: {
      screen: createStackNavigator(
        {
          Settings: {
            screen: Settings,
          },
          Edit: {
            screen: EditRestaurant,
            navigationOptions: {
              mode: 'modal',
            },
          },
          ChangePassword: {
            screen: ChangePassword,
          },
        },
        {},
      ),
    },
  },
  {
    initialRouteName: 'Orders',
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      showLabel: false,
    },
    tabBarComponent: props => <BottomTab {...props} />,
  },
);

const AuthNavigator = createStackNavigator(
  {
    Root: TabConfig,
    Modal: ModalConfig,
  },
  {
    initialRouteName: 'Root',
    navigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createAppContainer(AuthNavigator);

export default AppNavigator;
