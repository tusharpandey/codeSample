import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '../../utils/Button';
import * as Strings from '../../utils/Strings'
import styles from './ErrorComponentStyle'

class ErrorComponent extends React.Component {

  onRetry = () => {
    this.props.onRetry && this.props.onRetry()
  };

  render() {
    return (
      <View style={styles.view}>
        <CustomButton
          onPress={this.onRetry}
          title={Strings.PLEASE_TRY_AGAIN}
        />
      </View>
    )
  }
};
export default ErrorComponent;
