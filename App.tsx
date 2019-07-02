import React, {Component} from 'react';
import AuthNavigator from './src/navigations/auth';
import GuestNavigator from './src/navigations/guest';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <AuthNavigator />;
  }
}
