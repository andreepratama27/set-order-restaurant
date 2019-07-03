import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import {Button} from 'commons/button';
import {Column, List, Spacing} from 'commons/ui';
import {Title, TitleHeader, Caption, P} from 'commons/text';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from 'styles';
import styles from './styles';

type OrderDetailProps = {
  navigation: NavigationScreenProp<any, any>;
};

function OrderDetail(props: OrderDetailProps) {
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

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProfileDetail')}>
            <Icon name="ios-information-circle" size={25} />
          </TouchableOpacity>
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

      <Spacing marginTop={15} />

      <Column
        style={styles.notification}
        isColumn
        justifyContent="center"
        alignItems="center">
        <Title isBold size={12}>
          Having issues with this order ?
        </Title>
        <View style={styles.notificationBadge}>
          <Title size={12} color={Colors.info}>
            Call SetOrder +61 4110385392
          </Title>
        </View>
      </Column>

      <View style={styles.bottomWrapper}>
        <Button
          bgColor={Colors.warning}
          borderRadius={'0px'}
          onPress={() => props.navigation.navigate('AcceptOrder')}>
          <Title isBold>Accept Order</Title>
        </Button>
      </View>
    </View>
  );
}

OrderDetail.navigationOptions = {
  headerTitle: <TitleHeader>Order details</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerRight: <View />,
};

export default OrderDetail;
