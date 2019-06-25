import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "styles";

function History() {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  }
});

History.navigationOptions = {
  headerTitle: "History",
  headerStyle: {
    elevation: 0
  }
};

export default History;
