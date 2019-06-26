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
import { Caption, P, Title } from "commons/text";

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
          <P style={styles.label}>Email</P>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <P style={styles.label}>Phone number</P>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <P style={styles.label}>Website</P>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <P style={styles.label}>Contact Name</P>
          <TextInput placeholder="Input Name" style={styles.textInput} />
        </Column>
        <Column isColumn style={styles.formInput}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Location")}
          >
            <P style={styles.label}>Location</P>
          </TouchableOpacity>
        </Column>
      </View>
    </ScrollView>
  );
}

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
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Colors.smoke
  }
});

export default EditRestaurant;
