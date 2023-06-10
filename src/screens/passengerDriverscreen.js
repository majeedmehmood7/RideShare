import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity , Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from "../../assets/pic.png"
const PassengerDriver=()=>{
    const navigation = useNavigation();
    const click=()=>{
        navigation.navigate('Personal');
    }
return(
    <View style={styles.container}>
    <Text style={styles.title}>Are you a Passenger or a Driver?</Text>
    <Image source={Logo} style={[styles.Logo, {height : 200}]} resizeMode="contain"/>
    
    <TouchableOpacity style={styles.resendButton} onPress={click}>
        <Text style={styles.resendButtonText}>Passenger</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton} onPress={click}>
        <Text style={styles.resendButtonText}>Driver</Text>
      </TouchableOpacity>  

  
        
        
 </View>
);
};
export default PassengerDriver;
const styles = StyleSheet.create({
    textInput:{
        width:'80%',
        height:'70%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 30,
      
      },
    button: {
      backgroundColor: 'black',
    width: '80%', 
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 7,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      buttonText: {
        fontSize: 20,
        fontWeight: '50',
        color: 'white',
        marginLeft: 10,
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
      margin : 10,
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