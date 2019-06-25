import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Colors } from "styles";

import { Title, P } from "commons/text";

type OrderProps = {};

const Divider = styled.View`
  height: 40px;
  justify-content: center;
  background-color: ${Colors.smoke};
  padding-left: 15px;
`;

const Column = styled.View`
  flex-direction: row;
  justify-content: ${props =>
    props.spaceBetween ? "space-between" : "flex-start"};
`;

const List = styled.View`
  background-color: ${Colors.light};
  height: 60px;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

function Orders(props: OrderProps) {
  return (
    <View style={styles.container}>
      <Divider>
        <Title isBold>New Orders</Title>
      </Divider>

      <List>
        <Column spaceBetween>
          <Title>Kenny Williams</Title>
          <P>Now</P>
        </Column>
        <P>Wed, May 20, 2:30 AM, table for 2</P>
      </List>

      <List>
        <Column spaceBetween>
          <Title>Emilia Vu</Title>
          <P>9:30 AM</P>
        </Column>
        <P>Wed, May 20, 2:30 AM, take away</P>
      </List>

      <Divider>
        <Title isBold>20 May 2019 (Wed)</Title>
      </Divider>
      <List>
        <Column spaceBetween>
          <Title>Emilia Vu</Title>
          <P>9:30 AM</P>
        </Column>
        <P>Wed, May 20, 2:30 AM, take away</P>
      </List>
      <List>
        <Column spaceBetween>
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
    elevation: 0
  },
  headerTitle: "Orders"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  }
});

export default Orders;
