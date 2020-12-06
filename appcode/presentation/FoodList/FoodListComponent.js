import React from 'react';
import {
  ActivityIndicator, Button,
  SafeAreaView, View, TouchableNativeFeedback, Text
} from 'react-native';
import styles from './FoodListStyle'
import ErrorComponent from '../error/ErrorComponent';

class FoodListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let loaderState = this.props.loaderState;
    let errorState = this.props.errorState

    return (
      <View style={{ flex: 1 }}>

        {!errorState && <View style={styles.view}>

        </View>}

        {errorState && <ErrorComponent onRetry={() => this.props.onRetry} />}

        {loaderState && <ActivityIndicator size="large" style={styles.loaderStyle} />}

      </View>
    )
  }
};
export default FoodListComponent;
