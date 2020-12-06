import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Home from './appcode/presentation/home/Home';
import AppNavigator from './AppNavigator';
class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
};
export default App;
