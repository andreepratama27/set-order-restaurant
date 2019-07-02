import React from "react";
import { View, Switch } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles";

import { Divider, List, Column, Spacing } from "commons/ui";
import { Title, TitleHeader, P, Caption } from "commons/text";

function Settings(props: any) {
  return (
    <View style={styles.container}>
      <List onPress={() => props.navigation.navigate("Edit")}>
        <Column spaceBetween>
          <Column isColumn>
            <Title isBold>Starbucks Coffee</Title>
            <Spacing marginTop={5} />
            <Caption>starbucks.melbourne@gmail.com</Caption>
          </Column>

          <Column isColumn justifyContent="center">
            <P>Edit</P>
          </Column>
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List
        style={styles.list}
        onPress={() => props.navigation.navigate("ChangePassword")}
      >
        <Column spaceBetween>
          <Column isColumn>
            <Title>Change Password</Title>
          </Column>
        </Column>
      </List>
      <List style={styles.list}>
        <Column spaceBetween alignItems="center">
          <Title>Notification</Title>

          <Switch />
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List style={styles.list}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Help</Title>
          </Column>
        </Column>
      </List>

      <List style={styles.list}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>About Setorder</Title>
          </Column>
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Logout</Title>
          </Column>
        </Column>
      </List>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: "50@vs"
  }
});

Settings.navigationOptions = {
  headerTitle: <TitleHeader>Account settings</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
};

export default Settings;
