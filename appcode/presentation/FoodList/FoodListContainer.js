import React from 'react';
import FoodListComponent from "./FoodListComponent";
import GetApprovedFoodUseCase from '../../domain/GetApprovedFoodUseCase';
import { goBack } from '../../utils/navigation/NavigationService';
import DATA from './DataSet';

class FoodListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaderState: false,
      errorState: false,
      data: DATA
    }
  }

  onBackPress = () => {
    goBack()
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

  onItemClick = (index) => {
    let dataSet = this.state.data
    dataSet[index] = { ...dataSet[index], isExpanded: !dataSet[index].isExpanded };
    this.setState({ data: dataSet })
  }

  render() {
    return (
      <FoodListComponent
        data={this.state.data}
        onItemClick={(message) => this.onItemClick(message)}
        onBackPress={() => this.onBackPress()}
        onRetry={() => this.getFoodList()}
        errorState={this.state.errorState}
        loaderState={this.state.loaderState}
      />)
  }
};
export default FoodListContainer;
