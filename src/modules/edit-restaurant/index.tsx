import React from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Colors } from "styles";

import { Column, List } from "commons/ui";
import { Caption, P, Title, TitleHeader } from "commons/text";

type EditRestaurantProps = {};

function EditRestaurant(props: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageHeader}>
        <Text>edit Restuarant</Text>
      </View>

      <View style={styles.form}>
        <Column isColumn style={styles.formInput}>
          <Title style={styles.label}>Restaurant Name card</Title>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <Title style={styles.label}>Email</Title>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <Title style={styles.label}>Phone number</Title>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <Title style={styles.label}>Website</Title>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <Title style={styles.label}>Contact Name</Title>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Location")}
          >
            <Title style={styles.label}>Location</Title>
          </TouchableOpacity>
        </Column>
      </View>
    </ScrollView>
  );
}

EditRestaurant.navigationOptions = {
  headerTitle: <TitleHeader>Edit restaurant</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  headerRight: <View />
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHeader: {
    height: 180,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    padding: 15
  },
  formInput: {
    marginBottom: 15
  },
  label: {
    marginBottom: 5
  },
  textInput: {
    fontFamily: "SFUIText-Light",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Colors.smoke
  }
});

export default EditRestaurant;
