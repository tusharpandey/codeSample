import React from 'react';
import {
  SafeAreaView, View, Button
} from 'react-native';
// import { Button } from 'react-native-elements';
import * as Strings from '../../utils/Strings'
import styles from './ErrorComponentStyle'

class ErrorComponent extends React.Component {

  onRetry = () => {
    this.props.onRetry && this.props.onRetry()
  };

  render() {
    return (
      <View>
        <View style={styles.view}>
          <Button
            onPress={this.onRetry}
            title={Strings.PLEASE_TRY_AGAIN}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
};
export default ErrorComponent;
