import { createAppContainer, createStackNavigator } from "react-navigation";

import Landing from "modules/landing";
import Signin from "modules/signin";
import Join from "modules/join";

const GuestNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Signin: {
      screen: Signin
    },
    Join: {
      screen: Join
    }
  },
  {
    initialRouteName: "Landing"
  }
);

const AppNavigator = createAppContainer(GuestNavigator);

export default AppNavigator;
