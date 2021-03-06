import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import AppImage from './AppImage';
export const CustomImage = (props) => {
    return (
        <TouchableOpacity activeOpacity={.5} onPress={() => props.onPress && props.onPress()}>
            <Image
                source={props.source}
                style={props.style}
            />
        </TouchableOpacity>
    )
}
