import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button
} from "react-native";
import { Grid, Col } from "react-native-easy-grid";

import { Title } from "commons/text";

import { Colors } from "styles";

import * as Icon from "assets/icons";

class BottomTab extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon = (routeName, active, routeIndex) => {
    let iconComponent;
    let focused = active === routeIndex;

    if (routeName === "Orders") {
      iconComponent = focused ? Icon.order.active : Icon.order.default;
    } else if (routeName === "History") {
      iconComponent = focused ? Icon.history.active : Icon.history.default;
    } else {
      iconComponent = focused ? Icon.settings.active : Icon.settings.default;
    }

    return (
      <>
        <View style={styles.iconWrapper}>
          <Image source={iconComponent} style={styles.icon} />
        </View>

        <Title size={12} style={focused ? styles.iconActive : styles.iconText}>
          {routeName}
        </Title>
      </>
    );
  };

  render() {
    const { onTabPress, navigation } = this.props;
    const {
      state: { routes, index: activeRouteIndex }
    } = navigation;

    return (
      <View style={styles.tab}>
        <Grid>
          {routes.map((route, routeKey) => (
            <Col style={styles.cols} key={routeKey}>
              <TouchableOpacity
                style={styles.center}
                onPress={() => onTabPress({ route })}
              >
                {this.renderIcon(route.routeName, activeRouteIndex, routeKey)}
              </TouchableOpacity>
            </Col>
          ))}
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 55,
    paddingRight: 55,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
    width: "100%",
    height: 62
  },
  cols: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconWrapper: {
    width: 18,
    height: 18
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  iconText: {
    marginTop: 5
  },
  iconActive: {
    marginTop: 5,
    color: Colors.warning
  }
});

export default BottomTab;
