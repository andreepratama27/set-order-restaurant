import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {Title, TitleHeader} from 'commons/text';
import {Button} from 'commons/button';
import {Input} from 'commons/input';

import {Colors} from 'styles';
import styles from './styles';

function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input placeholder="Email" />
        <Input placeholder="Password" noBorder />
      </View>

      <View style={styles.btnWrapper}>
        <Button bgColor={Colors.warning}>
          <Title isBold>Sign In</Title>
        </Button>
        <Text style={styles.forgotPwd}>Forgot your password</Text>
      </View>
    </View>
  );
}

Signin.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerTitle: <TitleHeader>Sign In</TitleHeader>,
  headerRight: <View />,
};

export default Signin;
