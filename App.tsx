import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Heading, TextInput, Icon, Button, Examples} from '@shoutem/ui';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Examples />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
