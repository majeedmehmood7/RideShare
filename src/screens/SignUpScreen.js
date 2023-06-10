import React,{useState} from 'react';
//import { View } from 'react-native/types';
//import Logo from '../assets/Logo_1.png';

import { Text,View,StyleSheet,Linking, useWindowDimensions,ScrollView} from 'react-native';
 import CustomInput from '../components/CustomInput';
 import CustomButton from '../components/CustomButton';
import Navigation from '../navigations';
import {useNavigation} from '@react-navigation/native';
 

 
  const SignUpScreen = () => {
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[University,setuniversity]=useState('');
    const[passwordRepeat,setpasswordRepeat]=useState('');
   const[Department,setDepartment]=useState('');
   const navigation = useNavigation();

   const  onPrivacyPressed=()=>{
    console.warn("Privacy");
   }
   const OnLoginPressed=()=>{
     navigation.navigate('SignIn Screen');
       }
   const OnRegisterPressed=()=>{
 navigation.navigate('Dashboard Screen');
   }
   const  onTermsOfUsePressed=()=>{
    console.warn("Privacy");
   }
    return (
      <ScrollView>
      <View style={styles.root}>

          <Text style={styles.title}>Create Your Account</Text>
          <CustomInput
            placeholder="Enter Your ID"
            value={username}
            setValue={setusername} />

          <CustomInput
            placeholder="University"
            value={University}
            setValue={setuniversity}
           />
         <CustomInput
            placeholder="Department"
            value={Department}
            setValue={setDepartment}
           />
             <CustomInput
            placeholder="Password"
            value={password}
            setValue={setpassword}
            secureTextEntry={true} />
           
           <CustomInput
            placeholder="Confirm Password"
            value={passwordRepeat}
            setValue={setpasswordRepeat}
            style={color="blue"}
            secureTextEntry={true} />
          
          <CustomButton  text="Register" onPress={OnRegisterPressed}/>
          <Text style={styles.text}>By registring,you confirm that you accept our{' '}
           <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{' '}and{' '}<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy.</Text></Text> 
          
          <Text disabled style={styles.input1} >Already Have an Account</Text>
       <CustomButton
     text="Login"
     onPress={OnLoginPressed}
    //style={color="red"}
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
      color:'gray',
    //  marginVertical:1,
    fontSize:19,
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
  export default SignUpScreen ;