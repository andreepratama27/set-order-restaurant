import React, { Component } from "react";
import AppNavigator from "./src/navigations/auth";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
