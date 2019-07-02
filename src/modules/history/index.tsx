import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from 'styles';

import {Divider, List, Column, Spacing} from 'commons/ui';
import {Title, TitleHeader, P, Caption} from 'commons/text';

function ListBox() {
  return (
    <List style={styles.list}>
      <Column spaceBetween>
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
            <Title>Stephanie Ramos</Title>
            <Spacing marginTop={5} />
            <Caption>Total $12.34</Caption>
          </Column>
        </Column>

        <P>Take away</P>
      </Column>
    </List>
  );
}

function History() {
  return (
    <View style={styles.container}>
      <Divider>
        <Title isBold>20 May 2019</Title>
      </Divider>

      <ListBox />

      <Divider>
        <Title isBold>19 May 2019 (Wed)</Title>
      </Divider>

      <ListBox />
      <ListBox />
      <ListBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  list: {
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

History.navigationOptions = {
  headerTitle: <TitleHeader>History</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
};

export default History;
