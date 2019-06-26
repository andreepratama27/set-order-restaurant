import * as React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import { Title } from "commons/text";
import { Button } from "commons/button";
import { Spacing } from "commons/ui";

import { Colors } from "styles";
import styles from "./styles";

const bg = require("../../assets/img/bg.png");
const logo = require("../../assets/img/logo2x.png");

function Landing(props: any) {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.images} />

        <Title
          color={Colors.light}
          style={[styles.textCenter, { top: -15 }]}
          size={18}
        >
          For restaurant
        </Title>
      </View>

      <View style={styles.description}>
        <Title color={Colors.light} size={20} style={styles.textCenter}>
          Table and Food Reservations for Your restaurant
        </Title>
      </View>

      <View>
        <Button
          bgColor={Colors.warning}
          onPress={() => props.navigation.navigate("Signin")}
        >
          <Title isBold>Sign In</Title>
        </Button>

        <Spacing marginBottom={5} marginTop={5} />

        <Button onPress={() => props.navigation.navigate("Join")}>
          <Title isBold>Join</Title>
        </Button>
      </View>
    </ImageBackground>
  );
}

Landing.navigationOptions = {
  header: null
};

export default Landing;
