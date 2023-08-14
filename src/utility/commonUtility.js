import { Platform, PermissionsAndroid, Linking, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, RESULTS, PERMISSIONS } from 'react-native-permissions';

export async function requestCamera() {
    try {
        if (Platform.OS === 'android') {
            const res = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'Allow Excellon Sales App to access your camera?',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (res === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } else {
            const res = await request(PERMISSIONS.IOS.CAMERA);
            if (res === RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        }
    } catch (err) {
        return false;
    }
}

export async function openCamera(options) {
    return new Promise(async (resolve, reject) => {
        try {
            const hasCameraAccess = await requestCamera();
            if (hasCameraAccess) {
                const _options = {
                    storageOptions: {
                        skipBackup: true,
                        path: 'images',
                    },
                    maxHeight: 2560,
                    maxWidth: 1440
                };
                setTimeout(() => {
                    launchCamera(_options, response => {
                        if (response.didCancel) {
                            reject('cancelled');
                        } else if (response.errorMessage) {
                            Alert.alert('Camera Error', response.errorMessage);
                            reject(response.errorMessage);
                        } else if (response.assets?.length > 0) {
                            resolve(response.assets[0]);
                        } else {
                            Alert.alert('Camera Error', JSON.stringify(response));
                        }
                    });
                }, 500);
            } else {
                Alert.alert(
                    'Allow Camera Permission',
                    'Excellon Sales App will need camera access to capture image.',
                );
                reject('Excellon Sales App will need camera access to capture image.');
            }
        } catch (err) {
            Alert.alert('Camera Error', err?.message);
            reject(err?.message);
        }
    });
}

export async function galleryClickImage(options) {
    return new Promise(async (resolve, reject) => {
        try {
            const _options = options ?? {
                mediaType: 'photo',
                maxWidth: 1080,
                maxHeight: 1080,
                quality: 1,
            };
            setTimeout(() => {
                launchImageLibrary(_options, async response => {
                    if (response.didCancel) {
                        reject('cancelled');
                    } else if (response.errorMessage) {
                        Alert.alert('Gallery Error', response.errorMessage);
                        reject(response.errorMessage);
                    } else if (response.assets?.length > 0) {
                        resolve(response.assets[0]);
                    } else {
                        Alert.alert('Gallery Error', JSON.stringify(response));
                    }
                });
            }, 500);
        } catch (err) {
            Alert.alert('Gallery Error', err?.message);
            reject(err?.message);
        }
    }
    );
}

export async function galleryforMultipleImageClick() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await DocumentPicker.pickMultiple({
                type: [
                    DocumentPicker.types.images
                ],
                presentationStyle: 'fullScreen',
            });
            resolve(res);
            //console.log("JSON.stringify(res):", JSON.stringify(res));

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                //console.log("user cancle document picker", err);
            } else {
                throw err;
            }
        }
    }
    );
}