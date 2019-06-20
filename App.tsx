import React, { Component } from "react";
import AppNavigator from "./src/navigations/guest";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
