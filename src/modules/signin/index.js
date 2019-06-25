import React from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { Title } from "commons/text";
import { Primary } from "commons/button";
import { Input } from "commons/input";

import styles from "./styles";

function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input placeholder="Email" />
        <Input placeholder="Password" noBorder />
      </View>

      <View style={styles.btnWrapper}>
        <Primary>
          <Title>Sign In</Title>
        </Primary>
        <Text style={styles.forgotPwd}>Forgot your password</Text>
      </View>
    </View>
  );
}

export default Signin;
