import { StyleSheet, Dimensions } from 'react-native';
import AppColor from './Color';

const globalStyle = StyleSheet.create({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    app_padding: {
        paddingHorizontal: 18,
        paddingVertical: 13,
    },

    app_margin: {
        marginHorizontal: 18,
        marginVertical: 13,
    },

    input_field_padding: {
        paddingHorizontal: 13,
        paddingVertical: 8,
    },

    input_field_border: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: AppColor.input_bg_color,
        backgroundColor: AppColor.input_bg_color,
    }

});

export default globalStyle;
