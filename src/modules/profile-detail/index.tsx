import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {NavigationScreenProp} from 'react-navigation';

import {Column, Spacing, List} from 'commons/ui';
import {Title, Caption, TitleHeader} from 'commons/text';
import Avatar from 'commons/avatar';

import {Colors} from 'styles';

import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

type ProfileProps = {
  navigation: NavigationScreenProp<any, any>;
};

function ProfileDetail(props: ProfileProps) {
  const [modal, setModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnClosePage}
        onPress={() => props.navigation.goBack()}>
        <Icon size={32} name="ios-close" color={Colors.dark} />
      </TouchableOpacity>

      <Modal
        isVisible={modal}
        style={styles.modal}
        swipeDirection={['down']}
        onSwipeComplete={() => setModal(false)}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => setModal(false)}>
              <Icon size={28} name="ios-close" />
            </TouchableOpacity>
            <Title isBold>Customer Type</Title>
          </View>
        </View>
        <View style={styles.modalBody}>
          <List style={styles.list}>
            <Title>First time</Title>
          </List>
          <List style={styles.list}>
            <Title>Visits sometimes</Title>
          </List>
          <List style={styles.list}>
            <Title>Regular guest</Title>
          </List>
        </View>
      </Modal>

      <Column
        style={styles.header}
        justifyContent="center"
        alignItems="center"
        isColumn>
        <Avatar
          source={{uri: 'https://placehold.it/300x300'}}
          width={60}
          height={60}
          borderRadius={50}
        />

        <Spacing marginBottom={15} />
        <Title isBold>Kenny William</Title>
        <TouchableOpacity
          style={styles.guestType}
          onPress={() => setModal(true)}>
          <Caption>Regular Guest</Caption>
          <Spacing />
          <EvilIcon name="chevron-down" size={20} />
        </TouchableOpacity>
      </Column>

      <Column style={styles.information} isColumn>
        <Caption>Phone Number</Caption>
        <Title>+61 411032323</Title>
      </Column>

      <Spacing marginTop={15} />

      <Column style={styles.description} isColumn>
        <Caption>Like to order</Caption>
        <Spacing marginBottom={8} />
        <Title>Americano</Title>
        <Spacing marginBottom={5} />
        <Title>Burrito chicken special</Title>
        <Spacing marginBottom={5} />
        <Title>Chicken Salad</Title>
      </Column>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    height: 180,
    backgroundColor: Colors.light,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  information: {
    backgroundColor: Colors.light,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
  },
  description: {
    padding: 15,
    backgroundColor: Colors.light,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalWrapper: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  list: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  btnClose: {
    marginRight: 15,
  },
  btnClosePage: {
    zIndex: 1,
    position: 'absolute',
    top: 15,
    left: 15,
    width: 30,
    height: 30,
  },
  guestType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

ProfileDetail.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTransparent: true,
  headerLeft: <View />,
};

export default ProfileDetail;
