import React from 'react';
//import { View } from 'react-native/types';

import {
  
  
  Text,TextInput,View,StyleSheet} from 'react-native';
  const CustomInput = ({value,setValue, placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            
            value={value}
            onChangeText={setValue}
            placeholder={ placeholder}
            style={styles.input}
            secureTextEntry={ secureTextEntry}
            />
            
            </View>
    );
  };
  const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width:'100%',
   //height:'11%',
    borderColor:'black',
    borderWidth:1,
    //borderRadius:5,
    alignContent:'center',
   paddingHorizontal:5,
    marginVertical:5,

  },
  input: {
     height: 60,
     padding: 10,
     fontSize:20,
   
   
  },});
  export default CustomInput;