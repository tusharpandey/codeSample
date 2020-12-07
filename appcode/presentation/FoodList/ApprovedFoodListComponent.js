import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
// import { Image } from 'react-native-elements';
import AppImage from '../../utils/AppImage';
import { CustomImage } from '../../utils/CustomImage';
import globalStyle from '../../utils/GlobalStyle';
import styles from './ApprovedFoodListStyle'
import AppString from '../../utils/Strings'
import AppColor from '../../utils/Color';
import InputComponent from '../../utils/InputComponent';
import ItemListing from './ItemListing';

class ApprovedFoodListComponent extends Component {

    render() {
        return (
            <View style={{ flex: 1, ...globalStyle.app_padding, backgroundColor: AppColor.app_bg_color }}>

                <ItemListing
                    data={this.props.data}
                    onItemClick={this.props.onItemClick}
                    ListHeaderComponent={<View style={{ marginBottom: 10 }}>
                        <CustomImage
                            onPress={this.props.onBackPress}
                            source={AppImage.close}
                            style={styles.cross_button_style}
                        />
                        <Text style={styles.page_title_text_style}>{AppString.APPROVED_FOOD_LIST}</Text>
                        <InputComponent />
                    </View>
                    } />
                <View style={styles.message_button_container}>
                    <CustomImage
                        source={AppImage.message}
                        style={styles.message_button_style}
                    />
                </View>
            </View>
        );
    }
}

export default ApprovedFoodListComponent;