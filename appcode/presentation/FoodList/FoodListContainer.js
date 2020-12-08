import React from 'react';
import FoodListComponent from "./FoodListComponent";
import GetApprovedFoodUseCase from '../../domain/GetApprovedFoodUseCase';
import { goBack } from '../../utils/navigation/NavigationService';
import DATA from './DataSet2';
import { isEmptyText } from '../../utils/TextUtil';
import { uniqueIDGenerator } from '../../utils/Util';

class FoodListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaderState: false,
      errorState: false,
      data: this.getDataSet()
    }
  }

  getDataSet() {
    let dataSet = JSON.parse(JSON.stringify(DATA))
    let categories = dataSet.categories;
    categories.map((item, index) => {
      item.isExpanded = false
      item.id = uniqueIDGenerator(index) + ""
    })
    return dataSet.categories
  }

  onBackPress = () => {
    goBack()
  }

  handleSearching = (searchText) => {
    if (isEmptyText(searchText)) {
      this.setState({ data: this.getDataSet() })
      return
    }
    let dataSet = this.getDataSet()
    let dataSetToUpload = []
    dataSet.map((item) => {
      let title_ = item.category.categoryName.toUpperCase()
      let searchText_ = searchText.toUpperCase()

      if (title_.includes(searchText_)) {
        dataSetToUpload.push(item)
      }
    })
    this.setState({ data: dataSetToUpload })
  }

  getFoodList = async () => {
    this.setState({ loaderState: true, errorState: false })
    let useCase = new GetApprovedFoodUseCase()
    let response = await useCase.getApprovedFood()
    this.setState({ loaderState: false, errorState: (response.error != undefined) ? false : true })
  }

  componentDidMount() {
    // this.getFoodList()
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
        handleSearching={(searchText) => this.handleSearching(searchText)}
        onItemClick={(message) => this.onItemClick(message)}
        onBackPress={() => this.onBackPress()}
        onRetry={() => this.getFoodList()}
        errorState={this.state.errorState}
        loaderState={this.state.loaderState}
      />)
  }
};
export default FoodListContainer;
