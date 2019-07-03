import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import {Button} from 'commons/button';
import {Title} from 'commons/text';

import {Colors} from 'styles';

const ImgServing = require('../../assets/img/order-serving.png');

type AcceptOrderType = {
  navigation: NavigationScreenProp<any, any>;
};

function AcceptOrder(props: AcceptOrderType) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image source={ImgServing} style={styles.images} />
        </View>
        <Title style={styles.desc}>
          Please make sure you start serving the meal within 5 - 10 minutes
          after the guest arrives
        </Title>
      </View>

      <View style={styles.bottomWrapper}>
        <Button
          bgColor={Colors.warning}
          borderRadius={'0px'}
          onPress={() => props.navigation.popToTop()}>
          <Title isBold>Got It</Title>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    width: 260,
  },
  desc: {
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  imageWrapper: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 25,
  },
  images: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

AcceptOrder.navigationOptions = {
  header: null,
};

export default AcceptOrder;
