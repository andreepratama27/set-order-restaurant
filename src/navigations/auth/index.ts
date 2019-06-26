import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Orders from "modules/orders";
import History from "modules/history";
import Settings from "modules/settings";
import EditRestaurant from "modules/edit-restaurant";
import Location from "modules/location";

const ModalConfig = createStackNavigator(
  {
    Location: {
      screen: Location
    }
  },
  {
    initialRouteName: "Location",
    mode: "modal",
    navigationOptions: {
      header: null
    }
  }
);

const TabConfig = createBottomTabNavigator(
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
      screen: createStackNavigator(
        {
          Settings: {
            screen: Settings
          },
          Edit: {
            screen: EditRestaurant
          }
        },
        {}
      )
    }
  },
  {
    initialRouteName: "Orders",
    navigationOptions: {
      header: null
    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    Root: TabConfig,
    Modal: ModalConfig
  },
  {
    initialRouteName: "Root",
    navigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createAppContainer(AuthNavigator);

export default AppNavigator;
