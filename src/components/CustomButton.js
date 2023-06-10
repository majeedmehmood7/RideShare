import React from 'react';


import {Text,TextInput,View,Button,StyleSheet, Pressable} from 'react-native';
  const CustomButton = ({onPress,text}) => {
    return (
        <Pressable onPress={onPress} 
        style={styles.container}>
        <Text
        style={[styles.text,styles.input]}>
      {text}</Text>
            </Pressable>
    );
  };
  const styles = StyleSheet.create({
    container : {
       
      width:'100%',
      margin:10,
      padding:14,
      marginVertical :5,
      alignItems:'center',
      borderRadius:6
  },

  container_PRIMARY: {
    backgroundColor: 'black',
  },

  container_signup: {
    backgroundColor: 'black',
  },
  text: {
      color:'white',
      fontWeight:'bold',
  },
  text_TERTIARY: {
    color: 'gray',
  

},});
  export default CustomButton;