import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalFont from '../utility/globalFont';
import { theme } from '../utility/theme';
import Icon from '../utility/icon';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PopUpModal from '../utility/PopUpModal';
import { galleryClickImage, openCamera } from '../utility/commonUtility';
import PureButton from '../utility/PureButton';
import moment from 'moment';

function UploadPrescription({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('🇮🇳 +91');
  const [emoji, setEmoji] = useState('🇮🇳');
  const [mobileLength, setMobileLength] = useState(0);
  const [pic, setPic] = useState([]);
  const [imagePopup, setImagePopup] = useState(false);
  const [personName, setPersonName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('')
  const [pdetail, setPdetails] = useState('')
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  console.log("Date picker visible", isDatePickerVisible);
  const requestCamera = async () => {
    const result = await openCamera()
    console.log("result:camera:--", result)
    saveImageData(result, 'camera')
  };
  const galleryClick = async () => {
    const result = await galleryClickImage()
    console.log("result:gallery:--", result)
    saveImageData(result, 'gallery')
  }

  const saveImageData = async (result, type) => {
    console.log("saveImageData result", result)
    console.log("saveImageData type", type)

    if (type === 'gallery') {
      setPic(result)

    } else {
      console.log("&&&&&&&", result)
      if (result.didCancel === true) {
        pic && (
          pic.map((item, index) => {
            setPic(...pic)
            console.log("PIC:___________++++++++++", pic)
          }))
      } else {
        console.log(")))))))", result)
        setPic(result)
      }
    }

  }

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    const Date = moment(date).format('MM/DD/YYYY')
    setDate(Date);
    setDatePickerVisible(false)
  };

  const hideTimePicker = () => {
    setDatePickerVisible(false);
  }

  const navigateToAddress = () => {
    navigation.navigate('PatientAddress')
  }
  return (
    <SafeAreaView style={{ flex: 1, alignContent: 'center', backgroundColor: theme.PRIMARY_BUTTON_WHITE }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View
          style={{
            margin: wp(5),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.searchSection}>
            <Icon.FontIcon style={styles.searchIcon} name="user-circle-o" size={20} color="#000" />
            <TextInput
              style={[styles.input, globalFont.S14W400,
              {
                backgroundColor: theme.BUTTON_GRAY,
                borderColor: theme.BUTTON_GRAY,
                // width: wp('90%'),
              }]}
              value={personName}
              onChangeText={text => {
                setPersonName(text);
              }}
              placeholder="Select Person"
              placeholderTextColor={theme.TEXT_BLACK}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputViewStyle}>
            <TextInput
              style={[
                styles.phoneInput,
                globalFont.S14W400,
                {
                  backgroundColor: theme.BUTTON_GRAY,
                  borderColor: theme.BUTTON_GRAY,
                  width: wp('20%'),
                },
              ]}
              value={countryCode}
              placeholderTextColor={theme.TEXT_BLACK} />
            <TextInput
              style={[
                styles.phoneInput,
                globalFont.S14W400,
                {
                  backgroundColor: theme.BUTTON_GRAY,
                  borderColor: theme.BUTTON_GRAY,
                  width: wp('60%'),
                },
              ]}
              onChangeText={text => {
                setMobile(text);
              }}
              value={mobile}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor={theme.TEXT_BLACK}
            />
          </View>
          <View style={{ marginBottom: hp(3) }}>
            <TextInput
              style={[
                styles.phoneInput,
                globalFont.S14W400,
                {
                  backgroundColor: theme.BUTTON_GRAY,
                  borderColor: theme.BUTTON_GRAY,
                  width: wp('90%'),
                },
              ]}
              value={title}
              onChangeText={text => {
                setTitle(text);
              }}
              placeholder="Title"
              placeholderTextColor={theme.TEXT_BLACK}
            />
          </View>
          <View style={[styles.inputSearchBox, globalFont.S14W400, { backgroundColor: theme.BUTTON_GRAY, borderColor: theme.BUTTON_GRAY }]}>
            <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={{ width: wp("10%"), justifyContent: 'center', }} >
              <View>
                <Icon.FeatherIcon name="calendar" size={hp(3)} color={theme.PRIMARY_TEXT_LABEL} />
              </View>
            </TouchableOpacity>
            <TextInput
              style={[globalFont.S14W400, { color: theme.TEXT_BLACK, width: wp('80%'), paddingVertical: 12 }]}
              value={date}
              placeholder="MM/DD/YYYY"
              // onChangeText={setDate}
              editable={false}
            />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={(date) => {
                console.log("on Time confirm");
                handleConfirm(date)
              }}
              maximumDate={new Date()}
              onCancel={() => hideTimePicker()}
            />
          </View>
          <View style={[{ backgroundColor: theme.BUTTON_GRAY, marginTop: hp('2%'), borderRadius: 10, marginBottom: hp(3) }]}>
            <TextInput
              style={[styles.textInput, globalFont.S14W400]}
              value={pdetail}
              caretHidden={false}
              keyboardType={Platform.OS === 'android' ? 'email-address' : 'ascii-capable'}
              onChangeText={text => setPdetails(text)}
              multiline={true}
              underlineColorAndroid='transparent'
              placeholderTextColor={theme.TEXT_BLACK}
              placeholder='Enter prescription description'
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => setImagePopup(true)}>
              <View style={[styles.DrivingLicenceTextInput, { backgroundColor: theme.BUTTON_GRAY, borderColor: theme.BUTTON_GRAY, justifyContent: 'center' }]} >
                {pic == '' ?
                  <Icon.IonIcon name="camera-outline" size={hp('4%')} color='#6B7280' style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} />
                  :
                  <Image
                    source={pic}
                    style={styles.profileImg}
                  //resizeMode={'contain'}
                  />
                }
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: 'space-between', margin: 5, paddingHorizontal: wp(10) }}>
          <PureButton
            title="Upload Prescription"
            onPress={() => navigateToAddress()}
            width="99%"
            bgColor={'#5385a2'}
            titleColor={theme.PRIMARY_BUTTON_BLACK_LABEL}
            titleStyle={globalFont.S16W600} />
        </View>
      </ScrollView>
      {
        imagePopup && (
          <PopUpModal
            buttonOne={() => requestCamera()}
            buttonTwo={() => galleryClick()}
            showModal={imagePopup}
            buttonOneLable={'CAMERA'}
            buttonTwoLable={'GALLERY'}
            tittle={'SELECT IMAGE FOR UPLOADING'}
            subTitle={'For better image experience please capture photo in horizontal OR in landscape mode'}
            closemodel={() => setImagePopup(false)}
          />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputViewStyle: {
    flexDirection: 'row',
    marginBottom: hp(3),
    justifyContent: 'space-between',
    width: '100%'
  },
  phoneInput: {
    // marginLeft: 10,
    borderRadius: 10,
    height: hp(7),
    paddingStart: wp(3),
    alignSelf: 'center',
  },
  buttonTitleStyle: {
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticleLine: {
    height: '80%',
    width: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#D1D5DB',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BUTTON_GRAY,
    borderRadius: 10,
    marginBottom: hp(3),
    marginTop: hp(5)
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    // backgroundColor: '#fff',
    // color: '#424242',
    borderRadius: 10,
    height: hp(7),
    // paddingStart: wp(3),
    alignSelf: 'center',
  },
  inputSearchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
    paddingLeft: 12,
    width: wp('90%'),
    marginBottom: hp(3)
  },
  textInput: {
    height: hp('15%'),
    width: wp('90%'),
    flexDirection: 'row',
    borderRadius: 10,
    textAlignVertical: 'top',
    ...Platform.select({
      ios: {
        padding: 20,
        marginTop: hp('1%')
      },
      android: {
        padding: 13
      }
    })
  },
  DrivingLicenceTextInput: {
    height: hp('12%'),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "3%",
    position: 'relative',
    width: wp('90%')
  },
  profileImg: {
    width: wp(15),
    height: hp(8),
    borderRadius: 12,
    //borderColor: ' #E5E7EB',
    //borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },

});
export default UploadPrescription;
