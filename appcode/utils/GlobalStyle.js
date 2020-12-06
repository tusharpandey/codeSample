import { StyleSheet, Dimensions } from 'react-native';

const globalStyle = StyleSheet.create({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
});

export default globalStyle;
