import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Colors } from "styles";

import { Divider, List, Column } from "commons/ui";

import { Title, TitleHeader, P } from "commons/text";

type OrderProps = {};

function Orders(props: OrderProps) {
  return (
    <View style={styles.container}>
      <Divider>
        <Title isBold>New Orders</Title>
      </Divider>

      <List style={styles.list}>
        <Column spaceBetween>
          <Title>Kenny Williams</Title>
          <P>Now</P>
        </Column>
      </List>

      <List style={styles.list}>
        <Column spaceBetween>
          <Title>Emilia Vu</Title>
          <Column isColumn>
            <P>9:30 AM</P>
          </Column>
        </Column>
        <P>Wed, May 20, 2:30 AM, take away</P>
      </List>

      <Divider>
        <Title isBold>20 May 2019 (Wed)</Title>
      </Divider>

      <List style={styles.list}>
        <Column spaceBetween>
          <Title>Emilia Vu</Title>
          <P>9:30 AM</P>
        </Column>
        <P>Wed, May 20, 2:30 AM, take away</P>
      </List>

      <List style={styles.list}>
        <Column spaceBetween alignItems="center">
          <Title>Emilia Vu</Title>
          <P>9:30 AM</P>
        </Column>
        <P>Wed, May 20, 2:30 AM, take away</P>
      </List>
    </View>
  );
}

Orders.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  headerTitle: <TitleHeader>Orders</TitleHeader>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
});

export default Orders;
