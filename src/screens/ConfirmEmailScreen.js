import React,{useState} from 'react';
//import { View } from 'react-native/types';
//import Logo from '../assets/Logo_1.png';

import {
  
  
  Text,View,StyleSheet,Linking, useWindowDimensions,ScrollView} from 'react-native';
 import CustomInput from '../components/CustomInput';
 import CustomButton from '../components/CustomButton';
 import {useNavigation} from '@react-navigation/native';
 
 
  const ConfirmEmailScreen = () => {
   
    const[code,setcode]=useState('');
    const navigation = useNavigation();

    const OnRegisterPressed=()=>{
      console.warn("user is registered");
     }
    
     const  OnConfirmPressed=()=>{
      console.warn("code is confirmed");
     }
     const  onSignInPress=()=>{
      navigation.navigate('SignIn Screen');
       }
       const  onResendPress=()=>{
        console.warn("Resend code");
       }
    return (
      <ScrollView>
      <View style={styles.root}>

          <Text style={styles.title}>Confirm Your Email</Text>
          
             <CustomInput
            placeholder="Confirmation Code"
            value={code}
            setValue={setcode}
            secureTextEntry={true} />
           
          
          
          <CustomButton  text="Confirm" onPress={OnConfirmPressed}/>
        
           
          <Text
           style={[styles.link,styles.text]}
            onPress={onResendPress}
           >Resend Code</Text>
        
      <CustomButton
            text="Back to Login"
            onPress={onSignInPress}
          
         />
      
        </View>
        </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:10,
        //height:30,
    },
    link:{
        color:'blue',
            },
    text1:{
      height:90,
    },
  
    input1:{
      height: 40,
  textAlign:"center",
      padding: 9,

      fontSize:21,
    },
    title:{
        fontSize:23,
        fontWeight:'bold',
        color:'black',
        margin:20,

    },
    text:{
      color:'blue',
    //  marginVertical:1,
    fontSize:19,
    fontWeight:'bold',
    },
    link:{
color:'blue',
    },
   input:{
    fontSize:30,
   textAlign:'center',
   color:'black',
  fontWeight:"bold",
  marginTop:120,
   },});
  export default ConfirmEmailScreen ;