import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import globalFont from '../utility/globalFont';
import { theme } from '../utility/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from '../utility/icon'
import patientDetails from '../json/patientDetails.json'
import PatientAdd from '../json/patientAdd.json'
import PaymentMethods from '../json/paymentMethods.json'
import PureButton from '../utility/PureButton';

function PatientAddress({ navigation }) {
    const [isSelected, SetIsSelected] = useState(false);
    const [patientD, setPatientD] = useState(patientDetails.PatientDetails);
    const [patientAdd, setPateintAdd] = useState(PatientAdd.PatientAddress);
    const [paymentType, setPaymentType] = useState(PaymentMethods.PaymentMethod)

    // checkbox click 
    const checkBoxClick = (ind, item) => {
        let arr = patientD.map((item, index) => ind == index ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false })
        setPatientD(arr);
    };

    const checkBoxClickAddress = (ind, item) => {
        let arr = patientAdd.map((item, index) => ind == index ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false })
        setPateintAdd(arr);
    };

    const navigateToAddress = () => {
        navigation.navigate('OrderSummary')
    }

    const checkBoxClickPayment = (ind, item) => {
        let arr = paymentType.map((item, index) => ind == index ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false })
        setPaymentType(arr);
    };
    return (
        <SafeAreaView style={{ flex: 1, alignContent: 'center', backgroundColor: theme.PRIMARY_BUTTON_WHITE }}>
            <View style={{ marginTop: wp('15%'), margin: wp(4), flex: 1 }}>
                <View>
                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Patient</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <TouchableOpacity style={{ margin: 10 }}>
                                <Icon.AntIcon name="pluscircleo" size={wp(10)} color={theme.ORANGE} />
                            </TouchableOpacity>
                            <View style={{ width: wp(15), justifyContent: 'center' }}>
                                <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK, textAlign: 'center' }]}>Add Patient</Text>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, width: '100%' }}>
                            {
                                patientD.map((item, index) => (
                                    <View style={{ backgroundColor: theme.ORANGE, width: wp(40), height: hp(15), borderRadius: 5, padding: wp(4), marginEnd: wp(5), marginStart: wp(4) }}>
                                        <View>
                                            <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_WHITE }]}>{item.name}</Text>
                                            <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_WHITE }]}>{item.relation}</Text>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_WHITE }]}>Edit</Text>
                                            <TouchableOpacity onPress={() => checkBoxClick(index, item)} style={item.isSelected ? { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.PRIMARY_BUTTON_WHITE, borderWidth: 1, backgroundColor: theme.PRIMARY_BUTTON_WHITE } : { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.PRIMARY_BUTTON_WHITE, borderWidth: 1 }}>
                                                {
                                                    item.isSelected && (
                                                        <Icon.EntypoIcon name={'check'} size={hp('2')} color={theme.ORANGE} />
                                                    )
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
                <View style={{ marginTop: wp(3) }}>
                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Address</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: hp(4) }}>
                            <TouchableOpacity style={{ margin: 10 }}>
                                <Icon.AntIcon name="pluscircleo" size={wp(10)} color={theme.ORANGE} />
                            </TouchableOpacity>
                            <View style={{ width: wp(15), justifyContent: 'center' }}>
                                <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK, textAlign: 'center' }]}>Add Address</Text>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, width: '100%' }}>
                            {
                                patientAdd.map((item, index) => (
                                    <View style={{ backgroundColor: theme.ORANGE, width: wp(40), borderRadius: 5, padding: wp(4), marginEnd: wp(5), marginStart: wp(4) }}>
                                        <View>
                                            <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_WHITE }]}>{item.AddressType}</Text>
                                            <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_WHITE }]}>{item.Address}</Text>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_WHITE }]}>Edit</Text>
                                            <TouchableOpacity onPress={() => checkBoxClickAddress(index, item)} style={item.isSelected ? { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.PRIMARY_BUTTON_WHITE, borderWidth: 1, backgroundColor: theme.PRIMARY_BUTTON_WHITE } : { width: wp(5), height: hp(2.5), borderRadius: 10, borderColor: theme.PRIMARY_BUTTON_WHITE, borderWidth: 1 }}>
                                                {
                                                    item.isSelected && (
                                                        <Icon.EntypoIcon name={'check'} size={hp('2')} color={theme.ORANGE} />
                                                    )
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
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
                <PureButton
                    title="Continue"
                    onPress={() => navigateToAddress()}
                    width="95%"
                    bgColor={'#4ca6eb'}
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
export default PatientAddress;