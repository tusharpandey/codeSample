import React from 'react';
import { View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import AppImage from './AppImage';
import { CustomImage } from './CustomImage';
import globalStyle from './GlobalStyle';
import AppString from './Strings';

function InputComponent(props) {
    return (
        <View style={styles.inputComponentContainer}>

            <CustomImage
                source={AppImage.search}
                style={styles.icon} />

            <TextInput style={styles.inputComponent}
                underlineColorAndroid="transparent"
                placeholder={AppString.INPUT_FIELD_HINT}
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={props.handleSearching} />
        </View>
    );
}

const styles = StyleSheet.create({

    inputComponentContainer: {
        flexDirection: 'row',
        ...globalStyle.width,
        ...globalStyle.input_field_border,
        ...globalStyle.app_border,
        alignItems: 'center',
        ...globalStyle.input_field_padding,
        height: 50,
    },
    inputComponent: {
        flex: 1,
    },
    icon: {
        width: 13, height: 13, marginRight: 10,
    }
});

export default InputComponent;