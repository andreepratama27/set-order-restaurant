import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {Title, TitleHeader} from 'commons/text';
import {Button} from 'commons/button';
import {Input} from 'commons/input';

import {Colors} from 'styles';
import styles from './styles';

function Join() {
  return (
    <View style={styles.container}>
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
        <Button bgColor={Colors.warning}>
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

export default Join;