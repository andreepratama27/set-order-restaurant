import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {Title, TitleHeader} from 'commons/text';
import {Button} from 'commons/button';
import {Input} from 'commons/input';

import Spinner from 'commons/spinner';
import {doLogin} from 'redux/ducks/authRedux';

import {Colors} from 'styles';
import styles from './styles';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(doLogin());
  },
});

function Signin(props: any) {
  const {isLoading} = props.auth;

  return (
    <View style={styles.container}>
      <Spinner isVisible={isLoading} />

      <View style={styles.inputWrapper}>
        <Input placeholder="Email" />
        <Input placeholder="Password" noBorder />
      </View>

      <View style={styles.btnWrapper}>
        <Button bgColor={Colors.warning} onPress={() => props.login()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
