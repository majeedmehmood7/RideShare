/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import {
  SafeAreaView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
  } from 'react-native'
import { create } from 'react-test-renderer';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
// import ForgetPasswordscreen from './src/screens/ForgetPasswordScreen';
import Navigation from './src/navigations';
import PickupDestinationInfo from './src/screens/PickupDestinationInfo';
import Map from './src/components/Map';
import DashboardScreen from './src/screens/DashboardScreen';
import CarpoolScreen from './src/screens/CarbikepoolScreen1';

const App=() => {
  
const androidPermission =async ()=>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'TMS App Camera Permission',
        message:
          'TMS App needs access to your location ' +
          'so you can take awesome vehicles.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
useEffect (() => {
  if(Platform.OS=== 'android'){
    androidPermission();
  }else{
    // IOS request
    Geolocation.requestAuthorization();
  }
},[])

  return (
    <SafeAreaView style={styles.root}>
 
  <Navigation/> 
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  },
});

export default App;
// import React from "react";
// import {
    
//     Text, View,
//     } from 'react-native';
//     import Icon from 'react-native-vector-icons/FontAwesome';
//     const App=() =>{
//       return(
//         <View>
//           <Text>JIYAmn</Text>
//           <Icon name="glass" style={{fontSize:50}}/>
//         </View>
//       )
//     }
//     export default App;