import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import {Title, TitleHeader} from 'commons/text';
import {Button} from 'commons/button';
import {Input} from 'commons/input';
import Spinner from 'commons/spinner';

import {Colors} from 'styles';
import styles from './styles';

import {doLogin} from 'redux/ducks/authRedux';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(doLogin());
  },
});

function Join(props: any) {
  const {isLoading} = props.auth;

  return (
    <View style={styles.container}>
      <Spinner isVisible={isLoading} />

      <View>
        <View style={styles.inputWrapper}>
          <Input placeholder="Restaurant name" />
          <Input placeholder="Restaurant webiste" noBorder />
        </View>

        <View style={styles.inputWrapper}>
          <Input placeholder="Contact Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" noBorder />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button bgColor={Colors.warning} onPress={() => props.login()}>
          <Title isBold>Send Request</Title>
        </Button>
      </View>
    </View>
  );
}

Join.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerTitle: <TitleHeader>Join SetOrder</TitleHeader>,
  headerRight: <View />,
};

export default connect(mapStateToProps, mapDispatchToProps)(Join);
