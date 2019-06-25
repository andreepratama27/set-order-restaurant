import { createAppContainer, createStackNavigator } from "react-navigation";

import Landing from "modules/landing";
import Signin from "modules/signin";

const GuestNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Signin: {
      screen: Signin
    }
  },
  {
    initialRouteName: "Signin"
  }
);

const AppNavigator = createAppContainer(GuestNavigator);

export default AppNavigator;
