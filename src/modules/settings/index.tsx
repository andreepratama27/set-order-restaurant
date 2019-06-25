import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "styles";

function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  }
});

Settings.navigationOptions = {
  headerTitle: "History",
  headerStyle: {
    elevation: 0
  }
};

export default Settings;
