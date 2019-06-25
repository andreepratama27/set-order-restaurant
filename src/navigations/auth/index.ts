import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Orders from "modules/orders";
import History from "modules/history";
import Settings from "modules/settings";

const AuthNavigator = createBottomTabNavigator(
  {
    Orders: {
      screen: createStackNavigator({
        Orders: {
          screen: Orders
        }
      })
    },
    History: {
      screen: createStackNavigator({
        History: {
          screen: History
        }
      })
    },
    Settings: {
      screen: createStackNavigator({
        Settings: {
          screen: Settings
        }
      })
    }
  },
  {
    initialRouteName: "Orders"
  }
);

const AppNavigator = createAppContainer(AuthNavigator);

export default AppNavigator;
