import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppImage from '../../utils/AppImage';
import AppColor from '../../utils/Color';
import { CustomImage } from '../../utils/CustomImage';
import globalStyle from '../../utils/GlobalStyle';

const Item = ({ index, title, titleHint, isExpanded, color, onItemClick, subItems, tip, messageHint }) => (
    <View style={styles.card}>
        <TouchableOpacity style={styles.item} activeOpacity={.5} onPress={() => onItemClick(index)}>
            <Text style={{ ...styles.title, color: color }}>{title + " " + titleHint}</Text>
            <CustomImage source={isExpanded ? AppImage.up_arrow : AppImage.down_arrow} style={styles.arrow} />
        </TouchableOpacity>

        {isExpanded &&
            <View>
                <SubItemSeperator />
                <FlatList
                    ListFooterComponent={tip == undefined ? ItemFooter(messageHint) : ItemSeperatorWithTip(tip, messageHint)}
                    data={subItems}
                    ItemSeparatorComponent={SubItemSeperator}
                    renderItem={({ item, index }) => {
                        return <Text style={{ ...globalStyle.app_padding }}>{item.title}</Text>
                    }}
                    keyExtractor={item => item.id}
                />
            </View>}

    </View>
);

const ItemFooter = (text) => {
    return (
        <View>
            <SubItemSeperator />
            <View style={{
                height: 50,
                ...globalStyle.app_border,
                ...globalStyle.app_margin,
                borderColor: AppColor.lightblue,
                backgroundColor: AppColor.lightblue,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>{text}</Text>
            </View>
        </View>)
}

const ItemSeperatorWithTip = (tip, message) => {
    return (<View>
        <SubItemSeperator />

        <View style={{
            height: 50,
            ...globalStyle.app_border,
            ...globalStyle.app_margin,
            borderColor: AppColor.lightblue,
            backgroundColor: AppColor.lightblue,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>{message}</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: AppColor.app_bg_color }}>

            <View style={{
                marginTop: 10,
                ...globalStyle.app_border,
                ...globalStyle.app_padding,
                borderColor: AppColor.tipColor,
                backgroundColor: AppColor.tipColor,
                justifyContent: 'center'
            }}>
                <View style={{
                    ...globalStyle.tip_border,
                    borderColor: AppColor.tipbgColor,
                    backgroundColor: AppColor.tipbgColor,
                    width: 60,
                }}>
                    <Text style={{
                        color: AppColor.white,
                        textAlign: 'center',
                    }}>{'TIP'}</Text></View>
                <Text style={{ marginTop: 10, color: AppColor.white }}>{tip}</Text>
            </View>
        </View>

    </View>)
}

const ItemSeperator = () => {
    return (<View style={{ height: 10 }} />)
}

const SubItemSeperator = () => {
    return (<View style={{ height: 1, backgroundColor: AppColor.grey }} />)
}

class ItemListing extends Component {
    render() {
        return (
            <FlatList
                ItemSeparatorComponent={ItemSeperator}
                ListHeaderComponent={this.props.ListHeaderComponent}
                data={this.props.data}
                renderItem={({ item, index }) => {
                    return <Item
                        onItemClick={this.props.onItemClick}
                        index={index}
                        subItems={item.subItems}
                        title={item.title}
                        titleHint={item.titleHint}
                        color={item.color}
                        tip={item.tip}
                        messageHint={item.messageHint}
                        isExpanded={item.isExpanded} />
                }}
                keyExtractor={item => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        ...globalStyle.app_border,
        ...globalStyle.item_border_color,
    },
    item: {
        ...globalStyle.app_padding,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        flex: 1,
    },
    arrow: {
        width: 10,
        height: 10,
    },
});
export default ItemListing;