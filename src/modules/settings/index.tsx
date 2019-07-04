import React from 'react';
import {connect} from 'react-redux';
import {View, Switch} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from 'styles';

import {Divider, List, Column, Spacing} from 'commons/ui';
import {Title, TitleHeader, P, Caption} from 'commons/text';
import {doLogout} from 'redux/ducks/authRedux';
import Spinner from 'commons/spinner';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(doLogout());
  },
});

function Settings(props: any) {
  const {isLoading} = props.auth;

  return (
    <View style={styles.container}>
      <Spinner isVisible={isLoading} />
      <List onPress={() => props.navigation.navigate('Edit')}>
        <Column justifyContent="space-between">
          <Column isColumn>
            <Title isBold>Starbucks Coffee</Title>
            <Spacing marginTop={5} />
            <Caption>starbucks.melbourne@gmail.com</Caption>
          </Column>

          <Column isColumn justifyContent="center">
            <P>Edit</P>
          </Column>
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List
        style={styles.list}
        onPress={() => props.navigation.navigate('ChangePassword')}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Change Password</Title>
          </Column>
        </Column>
      </List>
      <List style={styles.list}>
        <Column justifyContent="space-between" alignItems="center">
          <Title>Notification</Title>

          <Switch />
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List style={styles.list}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Help</Title>
          </Column>
        </Column>
      </List>

      <List style={styles.list}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>About Setorder</Title>
          </Column>
        </Column>
      </List>

      <Spacing marginTop={10} marginBottom={10} />

      <List onPress={() => props.logout()}>
        <Column spaceBetween>
          <Column isColumn>
            <Title>Logout</Title>
          </Column>
        </Column>
      </List>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: '50@vs',
  },
});

Settings.navigationOptions = {
  headerTitle: <TitleHeader>Account settings</TitleHeader>,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
