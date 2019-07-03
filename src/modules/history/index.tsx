import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import {Colors} from 'styles';

import {Divider, List, Column, Spacing} from 'commons/ui';
import {Title, TitleHeader, P, Caption} from 'commons/text';

function ListBox(props: any) {
  return (
    <List style={styles.list} onPress={props.onPress}>
      <Column justifyContent="space-between">
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

        <Caption>Take away</Caption>
      </Column>
    </List>
  );
}

function History(props: any) {
  const [modal, setModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        isVisible={modal}
        swipeDirection={['down']}
        onSwipeComplete={() => setModal(false)}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => setModal(false)}>
              <Icon size={28} name="ios-close" />
            </TouchableOpacity>
            <Title isBold>Order list</Title>

            <View style={styles.headerDesc}>
              <Caption>Table for 2</Caption>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.listWrapper}>
              <Column
                justifyContent="space-between"
                alignItems="center"
                style={styles.menu}>
                <Column alignItems="center">
                  <Title color={Colors.info} isBold>
                    1
                  </Title>
                  <Spacing marginRight={15} />
                  <Column isColumn>
                    <Title>Burrito chicken special</Title>
                    <Caption>Small</Caption>
                  </Column>
                </Column>

                <Caption>$13.99</Caption>
              </Column>
              <Column
                justifyContent="space-between"
                alignItems="center"
                style={styles.menu}>
                <Column alignItems="center">
                  <Title color={Colors.info} isBold>
                    4
                  </Title>
                  <Spacing marginRight={15} />
                  <Column isColumn>
                    <Title>Burrito chicken special</Title>
                    <Caption>Small</Caption>
                  </Column>
                </Column>

                <Caption>$13.99</Caption>
              </Column>

              <Column
                justifyContent="space-between"
                alignItems="center"
                style={[styles.menu]}>
                <Column
                  justifyContent="space-between"
                  alignItems="center"
                  style={styles.fullWidth}>
                  <Column alignItems="center">
                    <Spacing marginRight={25} />
                    <Column isColumn>
                      <Title>Tax and Fees</Title>
                    </Column>
                  </Column>

                  <Caption>$13.99</Caption>
                </Column>
              </Column>

              <Column
                justifyContent="space-between"
                alignItems="center"
                style={[styles.menu, styles.noBorder, styles.noPadding]}>
                <Column
                  justifyContent="space-between"
                  alignItems="center"
                  style={[styles.fullWidth]}>
                  <Column alignItems="center">
                    <Spacing marginRight={25} />
                    <Column isColumn>
                      <Title isBold>Total</Title>
                    </Column>
                  </Column>

                  <Title color={Colors.dark} isBold>
                    $54.99
                  </Title>
                </Column>
              </Column>
            </View>
          </View>
        </View>
      </Modal>
      <Divider>
        <Title isBold>20 May 2019</Title>
      </Divider>

      <ListBox onPress={() => setModal(true)} />

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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: Colors.light,
  },
  modalHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  btnClose: {
    marginRight: 15,
  },

  listWrapper: {
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  menu: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  fullWidth: {
    width: '100%',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  noPadding: {
    paddingBottom: 0,
  },
  headerDesc: {
    position: 'absolute',
    right: 15,
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
