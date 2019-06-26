import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "styles";

import { Divider, List, Column, Spacing } from "commons/ui";
import { Title, P, Caption } from "commons/text";

function History() {
  return (
    <View style={styles.container}>
      <Divider>
        <Title isBold>20 May 2019</Title>
      </Divider>

      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Stephanie Ramos</Title>
            <Spacing marginTop={5} />
            <Caption>Total $12.34</Caption>
          </Column>

          <P>Take away</P>
        </Column>
      </List>

      <Divider>
        <Title isBold>19 May 2019 (Wed)</Title>
      </Divider>
      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Stephanie Ramos</Title>
            <Spacing marginTop={5} />
            <Caption>Total $12.34</Caption>
          </Column>

          <P>Take away</P>
        </Column>
      </List>
      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Stephanie Ramos</Title>
            <Spacing marginTop={5} />
            <Caption>Total $12.34</Caption>
          </Column>

          <P>Take away</P>
        </Column>
      </List>
      <List>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Stephanie Ramos</Title>
            <Spacing marginTop={5} />
            <Caption>Total $12.34</Caption>
          </Column>

          <P>Take away</P>
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

History.navigationOptions = {
  headerTitle: "History",
  headerStyle: {
    elevation: 0
  }
};

export default History;
