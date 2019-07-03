import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from 'styles';

import {Divider, List, Column} from 'commons/ui';

import {Title, TitleHeader, Caption, P} from 'commons/text';

type OrderProps = {};

function ListBox(props: any) {
  return (
    <List
      style={styles.list}
      onPress={() => props.navigation.navigate('OrderDetail')}>
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
          <Caption>Wed, May 20, 2:30 AM, take away</Caption>
        </Column>
      </Column>

      <Column style={styles.dateTime}>
        <Caption>9:30 AM</Caption>
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

      <ListBox {...props} />
      <ListBox {...props} />
      <Divider>
        <Title>20 May 2019 (Wed)</Title>
      </Divider>

      <ListBox {...props} />
      <ListBox {...props} />
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
    justifyContent: 'space-between',
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
  dateTime: {
    paddingTop: 15,
  },
});

export default Orders;
