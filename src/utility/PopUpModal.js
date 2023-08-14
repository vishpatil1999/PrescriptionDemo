import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import Icons from '../commonComponents/Icons';
// import { globalFont, glabalColor } from '../constants/globalTheme';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from './icon';
import {theme} from './theme';
import globalFont from './globalFont';

function PopUpModal({buttonOne, buttonTwo, closemodel, showModal, buttonOneLable, buttonTwoLable, tittle, subTitle, isCancle }) {
    const [showModalFalse, setshowModalFalse] = useState(showModal)

    const onCloseModal = () => {
        setshowModalFalse(false)
        setTimeout(() => {
            closemodel(false)
        }, 100);
    }
    const onButtonOneClick = () => {
        onCloseModal()
        setTimeout(() => {
            buttonOne()
        }, 300);
    }
    const onButtonTwoClick = () => {
        onCloseModal()
        setTimeout(() => {
            buttonTwo()
        }, 300);
    }
    return (
        <Modal
            isVisible={showModal}
            animationIn="bounceInUp"
            animationInTiming={500}
            backdropOpacity={0.5}
            onBackButtonPress={onCloseModal}
            onBackdropPress={onCloseModal}
        >
            <View style={{ backgroundColor: '#ffffff', borderRadius: 8 }}>
                <View style={styles.container}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 12,
                        }}>
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon.EvilIcon name={'camera'} size={60} color={theme.PRIMARY_TEXT_LABEL} />
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 12,
                        }}>
                        <Text style={[styles.title, globalFont.S16W600, { color: theme.PRIMARY_TEXT_LABEL }]}>{tittle}</Text>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            //marginVertical: 8,
                        }}>
                        <Text style={[globalFont.S12W400, { backgroundColor: 'white', color: theme.TEXT_GRAY, textAlign: 'center' }]}>
                            {subTitle}
                        </Text>
                    </View>
                    <View style={{ width: wp('90%'), flexDirection: 'row', marginVertical: 12, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => onButtonTwoClick()}>
                            <View style={{ width: wp('45%') }}>
                                <Text style={[globalFont.S14W400, { textAlign: 'center', padding: 2, color: theme.PRIMARY_TEXT_LABEL }]}>{buttonTwoLable}</Text>
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderLeftWidth: 1,
                                borderLeftColor: 'black',
                                // marginHorizontal: 55,
                                height: 25,
                            }} />
                        <TouchableOpacity onPress={() => onButtonOneClick()}>
                            <View style={{ width: wp('45%') }}>
                                <Text style={[globalFont.S14W600, { textAlign: 'center', padding: 2, color: theme.PRIMARY_TEXT_LABEL }]}>{buttonOneLable}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

}

export default PopUpModal;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 6,
    },
    title: {
        fontSize: 16,
    },
    label: {
        //color: 'black',
        //fontSize: 13.5,
        textAlign: 'center',
    },
    options: {
        fontSize: 14,
        textAlign: 'center',
        //justifyContent: 'center',
        padding: 2
    },
});

