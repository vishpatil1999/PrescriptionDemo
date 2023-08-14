import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../utility/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalFont from '../utility/globalFont';
import PureButton from '../utility/PureButton';

function OrderStatus() {
    const MapProgress = (props) => {
        if (!props.data || props.data.lenght === 0) return null;

        // const firstItem = props.data.shift();
        return (
            <View style={{ flex: 1 }}>
                {props.data.map((item) => (
                    <View style={{ height: hp(20) }}>
                        <View style={item.isCurrent ? styles.verticalLine : styles.Line}></View>
                        <View style={styles.verticalWrap}>
                            <View style={styles.itemWrap}>
                                <View style={item.isCurrent ? styles.firstPoint : styles.Point}></View>
                                <View style={{ marginLeft: 10, flex: 1, marginTop: 6 }}>
                                    <Text>{item.title}</Text>
                                    <View style={{ marginTop: 20, width: wp(60) }}>
                                        <Text>{item.letter}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.PRIMARY_BACKGROUND }}>
            <View style={{
                marginTop: wp('15%'),
                marginHorizontal: 20
            }}>
                <View style={[styles.cardShadow, styles.card, { backgroundColor: '#FFFFFF' }]}>
                    <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>We have recieved your order ! </Text>
                    <Text style={[globalFont.S14W400, { color: theme.PRIMARY_BUTTON_BLACK }]}>We will get in touch with you shortly</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={[globalFont.S16W700, { color: theme.PRIMARY_BUTTON_BLACK }]}>Order Id: 547963</Text>
                        <Text style={[globalFont.S14W400, { color: theme.PRIMARY_BUTTON_BLACK }]}>Estimated Delivery Date :24-27 May</Text>
                    </View>
                    <View style={{ margin: 10, flexDirection: 'row' }}>
                        <MapProgress data={[...data]} />
                    </View>
                    <View>
                        <TouchableOpacity style={{width:wp(60),height:hp(6),backgroundColor:'#5385a2',alignSelf:'center',padding:10,borderRadius:10}}>
                            <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_WHITE ,textAlign:'center'}]}>Call Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        //IOS
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center',
        // Android
        elevation: 3,
        padding: 10
    },
    card: {
        borderRadius: 8,
        width: '100%',
        marginVertical: 10,
    },
    verticalLine: {
        backgroundColor: '#5385a2',
        width: 2,
        height: '95%',
        position: 'absolute',
        marginLeft: 35,
        // marginTop: 20,
    },
    Line: {
        backgroundColor: '#9e9e9e',
        width: 2,
        height: '95%',
        position: 'absolute',
        marginLeft: 35,
        // marginTop: 20,
    },
    verticalWrap: {
        justifyContent: 'space-between',
        height: '100%',
    },
    itemWrap: {
        width: 200,
        // height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointWrap: {
        backgroundColor: 'black',
        height: 20,
        width: 20,
        marginLeft: 5,
        alignItems: 'center',
    },
    firstPoint: {
        backgroundColor: '#5385a2',
        width: wp(5), height: hp(2.5), borderRadius: 15,
        marginLeft: 6,
        marginTop: hp(-10)
    },
    Point: {
        backgroundColor: '#9e9e9e',
        width: wp(5), height: hp(2.5), borderRadius: 15,
        marginLeft: 6,
        marginTop: hp(-10)
    },
    markerText: { color: 'white' },
    currentMarker: { color: 'green' },
});

const data = [
    { title: 'Call with Pharmacist', letter: 'Our pharmacists are required to confirm the medicines in your prescription on call', isCurrent: true },
    { title: 'Free doctor consultation', isCurrent: false },
    { title: 'Track Your order', isCurrent: false }
];
export default OrderStatus;
