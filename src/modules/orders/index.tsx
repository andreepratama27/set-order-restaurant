import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from 'styles';

import {Divider, List, Column} from 'commons/ui';

import {Title, TitleHeader, P} from 'commons/text';

type OrderProps = {};

function ListBox(props: any) {
  return (
    <List style={styles.list}>
      <Column alignItems="center">
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: `https://randomuser.me/api/portraits/men/${Math.floor(
                Math.random() * 100,
              )}.jpg`,
            }}
            style={styles.avatar}
          />
        </View>
        <Column isColumn>
          <Title isSemibold>Emilia Vu</Title>
          <P>Wed, May 20, 2:30 AM, take away</P>
        </Column>
      </Column>

      <Column>
        <P>9:30 AM</P>
      </Column>
    </List>
  );
}

function Orders(props: OrderProps) {
  return (
    <View style={styles.container}>
      <Divider>
        <Title>New Orders</Title>
      </Divider>

      <ListBox />
      <ListBox />
      <Divider>
        <Title>20 May 2019 (Wed)</Title>
      </Divider>

      <ListBox />
      <ListBox />
    </View>
  );
}

Orders.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerTitle: <TitleHeader>Orders</TitleHeader>,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 80,
  },
  avatar: {
    borderRadius: 80,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Orders;
