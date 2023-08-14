import React, { useRef } from 'react';
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import globalFont from '../utility/globalFont';
import UploadPrescription from '../screens/uploadPrescription';
import { theme } from '../utility/theme';
import PatientAddress from '../screens/patientAddress';
import OrderSummary from '../screens/orderSummary';
import OrderStatus from '../screens/orderStatus';
import MyPrescription from '../screens/myPrescription';

const Stack = createNativeStackNavigator();
const StackOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: [globalFont.S16W700],
};
const RootProvider = () => {
    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef();
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute().name;
            }}>
            <Stack.Navigator screenOptions={StackOptions}>
                <Stack.Screen
                    name="UploadPrescription"
                    component={UploadPrescription}
                    options={{
                        title: 'Upload Prescription',
                        headerTintColor: theme.PRIMARY_TEXT_LABEL,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="PatientAddress"
                    component={PatientAddress}
                    options={{
                        title: 'Select Patient & Address',
                        headerTintColor: theme.PRIMARY_TEXT_LABEL,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="OrderSummary"
                    component={OrderSummary}
                    options={{
                        title: 'Order Summary',
                        headerTintColor: theme.PRIMARY_TEXT_LABEL,
                        headerTransparent: true,
                        headerTitleAlign: 'left'
                    }}
                />
                <Stack.Screen
                    name="OrderStatus"
                    component={OrderStatus}
                    options={{
                        title: 'Order Status',
                        headerTintColor: theme.PRIMARY_TEXT_LABEL,
                        headerTransparent: true,
                        headerTitleAlign: 'left'
                    }}
                />
                <Stack.Screen
                    name="MyPrescription"
                    component={MyPrescription}
                    options={{
                        title: 'Order Status',
                        headerTintColor: theme.PRIMARY_TEXT_LABEL,
                        headerTransparent: true,
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootProvider;
