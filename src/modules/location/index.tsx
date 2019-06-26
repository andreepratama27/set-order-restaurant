import React from "react";
import { View, Text } from "react-native";

function Location() {
  return (
    <View>
      <Text>Location</Text>
    </View>
  );
}

Location.navigationOptions = {
  headerStyle: {
    elevation: 0
  }
};

export default Location;
