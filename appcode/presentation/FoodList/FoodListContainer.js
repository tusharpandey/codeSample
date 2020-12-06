import React from 'react';
import FoodListComponent from "./FoodListComponent";
import GetApprovedFoodUseCase from '../../domain/GetApprovedFoodUseCase';
import { Button, View } from 'react-native';

class FoodListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaderState: false,
      errorState: false,
    }
  }

  getFoodList = async () => {
    this.setState({ loaderState: true, errorState: false })
    let useCase = new GetApprovedFoodUseCase()
    let response = await useCase.getApprovedFood()
    this.setState({ loaderState: false, errorState: (response.error != undefined) ? false : true })
  }

  componentDidMount() {
    this.getFoodList()
  }

  render() {
    return (
      <FoodListComponent
        onRetry={() => this.getFoodList()}
        errorState={this.state.errorState}
        loaderState={this.state.loaderState}
      />)
  }
};
export default FoodListContainer;
