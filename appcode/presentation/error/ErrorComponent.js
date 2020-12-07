import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '../../utils/CustomButton';
import AppString from '../../utils/Strings'
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
          title={AppString.PLEASE_TRY_AGAIN}
        />
      </View>
    )
  }
};
export default ErrorComponent;
