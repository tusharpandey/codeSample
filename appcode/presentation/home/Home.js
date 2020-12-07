import React from 'react';
import {
  View, Button
} from 'react-native';
import { CustomButton } from '../../utils/CustomButton';
import { navigate } from '../../utils/navigation/NavigationService';
import AppString from '../../utils/Strings';
import styles from './HomeStyle'

class Home extends React.Component {

  _onPress = () => {
    navigate("foodlist")
  };

  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.view}>
          <CustomButton
            onPress={this._onPress}
            title={AppString.APPROVED_FOOD_LIST}
          />
        </View>
      </View>
    )
  }
};
export default Home;
