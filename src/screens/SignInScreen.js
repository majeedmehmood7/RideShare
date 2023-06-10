import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, View, StyleSheet, Linking, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
// import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();
  const {height}=useWindowDimensions();
  // const createUser = () => {
  //   auth()
  // .createUserWithEmailAndPassword(username, password)
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });}
  const OnSignuppressed = () => {
    //validate user
    navigation.navigate('SignUp Screen');
  }
  const OnSignInPressed=()=>{
    navigation.navigate('Dashboard Screen');
  }
 
  const OnForgetpassword = () => {
    //validate user
    navigation.navigate('Forget Password Screen');
  }

  return (
    <ScrollView>
      <View style={styles.root}>
      <Image style={[styles.logo,{height:height*0.3}]} resizeMode='contain' source={require('../../assets/logo.png')}/>
        <Text style={[styles.input, styles.in1]}>Log into Your Account</Text>
        <CustomInput
          placeholder="Enter Your ID"
          value={username}
          setValue={setusername} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setpassword}
          secureTextEntry={true} />

        <Text style={styles.text}
          onPress={OnForgetpassword}>
          {'                                                '} Forget Password
        </Text>
        <CustomButton text="Login"
         onPress={OnSignInPressed}
        // onPress={()=>{createUser();}}

        />
        <Text disabled style={styles.input1} >Don't Have an Account</Text>
       
        <CustomButton
          text="Signup"
          onPress={OnSignuppressed}
        //style={styles.color}
        />
        </View>
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
 
  root: {
    alignItems: 'center',
    padding: 10,
   // bottom:10,
    backgroundColor:'white',
  },
  text: {
    fontSize: 19,
    color: 'blue',


  },
  in1: {
    margin: 10,
  },
  logo: {
    width: '90%',
    maxWidth: 300,
    maxHeight:160,
  
    // top:10,
  },
  input1: {
    height: 60,
    textAlign: "center",
    padding: 15,

    fontSize: 23,
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    marginTop: 20,
  },
});
export default SignInScreen;