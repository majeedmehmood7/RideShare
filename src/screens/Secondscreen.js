import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const [otp, setOTP] = useState('');
  const navigation = useNavigation();

  const handleOTPChange = (text) => {
    setOTP(text);
  };

  const handleVerifyOTP = () => {
    // Perform OTP verification logic here
    console.log('Verifying OTP:', otp);
    navigation.navigate('PDScreen');
  };

  const handleResendOTP = () => {
    // Perform OTP resend logic here
    console.log('Resending OTP...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          placeholder="Enter Your OTP"
          keyboardType="number-pad"
          value={otp}
          onChangeText={handleOTPChange}
        />
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '70',
    color: 'black',
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '80%', // Adjusted to provide more spacing
  },
  otpInput: {
    width : '100%',
    fontWeight:'bold',
    borderColor :'black',
    fontSize: 20,
    // borderWidth: 0,
    // borderBottomEndRadius:2,
    // borderBottomEndRadius :2,
    // borderRadius:5,
    borderBottomWidth: 1,
    paddingHorizontal:10,
    marginVertical:5,
  },
  verifyButton: {
     backgroundColor: 'black',
    width: '80%', // Adjusted to provide more spacing
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 7,
  },
  verifyButtonText: {
    fontSize: 20,
    fontWeight: '80',
    color: 'white',
    textAlign: 'center',
  },
  resendButton: {
    margin : 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderWidth : 2,
    borderColor : 'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },
  resendButtonText: {
    fontSize: 20,
    fontWeight: '80',
    color: 'black',
    textAlign:'center',
  },
});

export default OTPScreen;
