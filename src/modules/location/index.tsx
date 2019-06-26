import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from "react-native";

import { Title } from "commons/text";
import { Column, Spacing } from "commons/ui";

import { Colors } from "styles";

const closeIcon = require("../../assets/img/close.png");

function Location() {
  return (
    <View style={styles.container}>
      <Title isBold size={20}>
        Set your restaurant location
      </Title>

      <Spacing marginBottom={30} />

      <View>
        <Column isColumn>
          <Title>Country / Region</Title>
          <TextInput style={styles.textInput} />
        </Column>

        <Spacing marginBottom={20} />

        <Column isColumn>
          <Title>Street Address</Title>
          <TextInput style={styles.textInput} />
        </Column>

        <Spacing marginBottom={20} />

        <Column isColumn>
          <Title>City</Title>
          <TextInput style={styles.textInput} />
        </Column>

        <Spacing marginBottom={20} />

        <Column isColumn>
          <Title>Postal Code</Title>
          <TextInput style={styles.textInput} />
        </Column>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textInput: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  headerRight: {
    marginRight: 15
  },
  headerLeft: {
    width: 15,
    height: 15,
    marginLeft: 15
  }
});

Location.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0
  },
  headerLeft: (
    <TouchableOpacity>
      <Image source={closeIcon} style={styles.headerLeft} />
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={styles.headerRight}>
      <Title color={Colors.text}>Save and exit</Title>
    </View>
  )
};

export default Location;
