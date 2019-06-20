import { createAppContainer, createStackNavigator } from "react-navigation";
import Landing from "modules/landing";

const GuestNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    }
  },
  {
    initialRouteName: "Landing"
  }
);

const AppNavigator = createAppContainer(GuestNavigator);

export default AppNavigator;
