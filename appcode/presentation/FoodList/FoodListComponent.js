import React from 'react';
import {
  ActivityIndicator, View
} from 'react-native';
import styles from './FoodListStyle'
import ErrorComponent from '../error/ErrorComponent';
import ApprovedFoodListComponent from './ApprovedFoodListComponent';

class FoodListComponent extends React.Component {

  render() {

    let loaderState = this.props.loaderState;
    let errorState = this.props.errorState

    return (
      <View style={{ flex: 1 }}>

        {!errorState && <View style={styles.view}>
          <ApprovedFoodListComponent
            data={this.props.data}
            handleSearching={this.props.handleSearching}
            onItemClick={this.props.onItemClick}
            onBackPress={this.props.onBackPress} />
        </View>}

        {errorState && <ErrorComponent onRetry={() => this.props.onRetry} />}

        {loaderState && <ActivityIndicator size="large" style={styles.loaderStyle} />}

      </View>
    )
  }
};
export default FoodListComponent;
