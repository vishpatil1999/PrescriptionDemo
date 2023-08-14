import React from 'react'
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../utility/theme';
import prescrition from '../json/prescription.json'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrescriptionImage from '../assets/prescription.png'
import Icon from '../utility/icon';
import globalFont from '../utility/globalFont';
import PureButton from '../utility/PureButton';

function MyPrescription() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.PRIMARY_BACKGROUND }}>
      <View style={{ marginTop: wp('15%'), margin: wp(5), flex: 1 }}>
        <View style={{ marginBottom: hp(20) }}>
          {
            prescrition.Prescription.map((item, index) => (
              <View style={{ flexDirection: 'row', borderColor: theme.BUTTON_GRAY, borderWidth: 2, margin: 5, borderRadius: 5 }}>
                <View style={{ margin: hp(3) }}>
                  <Image style={{ width: wp(20), height: hp(10) }} source={PrescriptionImage} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginTop: hp(3) }}>
                    <Text style={[globalFont.S16W700, { color: '#9e9e9e' }]}>{item.Type}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={[globalFont.S14W600, { color: theme.PRIMARY_BUTTON_BLACK }]}>{item.Date}</Text>
                      <Text style={[globalFont.S14W600, { color: '#9e9e9e', marginStart: 5 }]}>{item.Time}</Text>
                    </View>
                    <View style={{ marginTop: hp(4) }}>
                      <Text style={[globalFont.S14W600, { color: item.Status == 'Submitted' ? theme.ORANGE : item.Status == 'Approved' ? 'green' : theme.HOT }]}>{item.Status}</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: hp(3), marginStart: wp(7) }}>
                    <TouchableOpacity>
                      <Icon.AntIcon name="delete" size={hp(3)} color={theme.ORANGE} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
        {/* <View style={{ justifyContent: 'space-between', margin: 5, paddingHorizontal: wp(10) }}> */}
        <PureButton
          title="Add New Prescription"
          onPress={() => navigateToAddress()}
          width="99%"
          bgColor={'#5385a2'}
          titleColor={theme.PRIMARY_BUTTON_BLACK_LABEL}
          titleStyle={globalFont.S16W600} />
        {/* </View> */}
      </View>
    </SafeAreaView>
  )
}
export default MyPrescription;