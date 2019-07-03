import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Button} from 'commons/button';
import {Column, List, Spacing} from 'commons/ui';
import {Title, TitleHeader, Caption, P} from 'commons/text';

import {Colors} from 'styles';

function OrderDetail(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
              <Caption>Wed, May 20, 2:30 AM, take away</Caption>
            </Column>
          </Column>

          <Column>
            <P>Info</P>
          </Column>
        </List>

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

      <View style={styles.bottomWrapper}>
        <Button bgColor={Colors.warning}>
          <Title isBold>Accept Order</Title>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  content: {
    backgroundColor: Colors.light,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  bottomWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

OrderDetail.navigationOptions = {
  headerTitle: <TitleHeader>Order details</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
};

export default OrderDetail;
