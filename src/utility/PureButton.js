import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from './icon';

function PureButton({ title, onPress, width, bgColor, titleColor, titleStyle, height, icon }) {
    return (
        <View style={{ alignItems: 'center', width: width, flex: 1 }}>

            <TouchableOpacity style={[styles.commonStyle, { width: width, backgroundColor: bgColor }]} onPress={onPress}>
                {
                    icon == ' ' ?
                        null
                        : <View style={{ alignSelf: 'center' }}>
                            <Icon.FontIcon name={icon?.iconName} size={icon?.iconSize} color={icon?.iconColor} />
                        </View>
                }
                <Text style={[titleStyle, { color: titleColor, padding: 15 }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PureButton

const styles = StyleSheet.create({
    commonStyle: {
        borderRadius: 10,
        margin: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})