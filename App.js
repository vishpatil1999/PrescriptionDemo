import React from 'react'
import { SafeAreaView } from 'react-native'
import UploadPrescription from './src/screens/uploadPrescription'
import RootProvider from './src/routes'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
       <RootProvider></RootProvider>
    </SafeAreaView>
  )
}
