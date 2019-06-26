import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "styles";

import { Divider, List, Column, Spacing } from "commons/ui";
import { Title, P, Caption } from "commons/text";

function Settings(props: any) {
  return (
    <View style={styles.container}>
      <Divider>
        <Title isBold>Account Settings</Title>
      </Divider>

      <List onPress={() => props.navigation.navigate("Edit")}>
        <Column spaceBetween>
          <Column isColumn>
            <Title isBold>Starbucks Coffee</Title>
            <Spacing marginTop={5} />
            <Caption>starbucks.melbourne@gmail.com</Caption>
          </Column>

          <Column isColumn>
            <P>Edit</P>
          </Column>
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Help</Title>
          </Column>
        </Column>
      </List>

      <List>
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
            <Title>Change Password</Title>
          </Column>
        </Column>
      </List>

      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Notification</Title>
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
