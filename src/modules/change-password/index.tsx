import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Title, TitleHeader, Caption } from "commons/text";
import { Spacing } from "commons/ui";
import { Colors } from "styles";
import { Input } from "commons/input";

function ChangePassword(props: any) {
  return (
    <View style={styles.container}>
      <Spacing marginTop={15} />
      <Input placeholder="Current password" />
      <Input placeholder="New password" />
      <Input placeholder="Reenter new password" />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headerRight: {
    marginRight: 15
  }
});

ChangePassword.navigationOptions = {
  headerTitle: <TitleHeader>Change Password</TitleHeader>,
  headerRight: (
    <TouchableOpacity style={styles.headerRight}>
      <Caption>Save</Caption>
    </TouchableOpacity>
  ),
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
};

export default ChangePassword;
