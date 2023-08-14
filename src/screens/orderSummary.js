import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalFont from '../utility/globalFont'
import { theme } from '../utility/theme'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PureButton from '../utility/PureButton';
import Icon from '../utility/icon';
import PaymentMethods from '../json/paymentMethods.json'

function OrderSummary({navigation}) {
    const [paymentType, setPaymentType] = useState(PaymentMethods.PaymentMethod);

    const navigateToAddress = () => {
        navigation.navigate('OrderStatus')
    }

    const checkBoxClickPayment = (ind, item) => {
        let arr = paymentType.map((item, index) => ind == index ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false })
        setPaymentType(arr);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.PRIMARY_BACKGROUND }}>
            <View style={{ marginTop: wp('15%'), margin: wp(5), flex: 1 }}>
                <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Medicines</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: -20, marginLeft: -30, marginTop: 5 }}>
                    <PureButton
                        title="Edit Medicine"
                        onPress={() => navigateToAddress()}
                        width="70%"
                        bgColor={theme.ORANGE}
                        titleColor={theme.PRIMARY_BUTTON_BLACK_LABEL}
                        titleStyle={globalFont.S14W600} />
                    <PureButton
                        title="Add Medicine"
                        onPress={() => navigateToAddress()}
                        width="70%"
                        bgColor={theme.ORANGE}
                        titleColor={theme.PRIMARY_BUTTON_BLACK_LABEL}
                        titleStyle={globalFont.S14W600} />
                </View>
                <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK, marginTop: 5 }]}>Prescription</Text>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={{ margin: 10 }}>
                        <Icon.AntIcon name="pluscircleo" size={wp(10)} color={theme.ORANGE} />
                    </TouchableOpacity>
                    <View style={{ width: wp(15), justifyContent: 'center' }}>
                        <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK, textAlign: 'center' }]}>Add Image</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp(7), marginBottom: hp(7) }}>
                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Payment Methods</Text>
                    {
                        paymentType.map((item, index) => (
                            <TouchableOpacity onPress={() => checkBoxClickPayment(index, item)}>
                                <View style={{ flexDirection: 'row', marginTop: hp(4), justifyContent: 'space-between' }}>
                                    <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK, alignSelf: 'flex-start' }]}>{item.Sign}</Text>
                                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>{item.Type}</Text>
                                    <View>
                                        <TouchableOpacity onPress={() => checkBoxClickPayment(index, item)} style={item.isSelected ? { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.ORANGE, borderWidth: 1, backgroundColor: theme.ORANGE } : { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.PRIMARY_BUTTON_BLACK, borderWidth: 1 }}>
                                            {
                                                item.isSelected && (
                                                    <Icon.EntypoIcon name={'check'} size={hp('2')} color={theme.PRIMARY_BUTTON_WHITE} />
                                                )
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {
                                    item.Type == 'Cash' && (
                                        <View style={styles.horizontalLine}></View>
                                    )
                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ backgroundColor: theme.BUTTON_GRAY, height: hp(7), marginRight: -17, marginLeft: -17 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Estimated Delivery</Text>
                        <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>24 - 25 May</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp(2) }}>
                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Delivery To</Text>
                    <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK }]}>Addresss</Text>
                </View>
                <PureButton
                    title="Continue"
                    onPress={() => navigateToAddress()}
                    width="98%"
                    bgColor={'#5385a2'}
                    titleColor={theme.PRIMARY_BUTTON_BLACK_LABEL}
                    titleStyle={globalFont.S16W600} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    horizontalLine: {
        borderWidth: 0.5,
        borderColor: '#E5E7EB',
        width: wp('100%'),
        backgroundColor: '#E5E7EB',
        marginTop: hp(1)
    }
})
export default OrderSummary