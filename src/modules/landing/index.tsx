import * as React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import styles from "./styles";

const bg = require("../../assets/img/bg.png");
const logo = require("../../assets/img/logo2x.png");

function Landing() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.images} />
      </View>

      <View style={styles.description}>
        <Text>Table and Food Reservations for Your restaurant</Text>
      </View>

      <View style={styles.description}>
        <Text>Button</Text>
      </View>
    </ImageBackground>
  );
}

Landing.navigationOptions = {
  header: null
};

export default Landing;
