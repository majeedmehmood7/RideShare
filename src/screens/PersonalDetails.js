import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('HomeScreen');
  };

  return (


    
    <View style={styles.container}>
    <Text style={styles.title}>Well Come To Ride Share</Text>
    <Text style={styles.title2}>let's get Acquainted</Text>
      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="First Name"
          keyboardType="phone-pad"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Last Name"
          keyboardType="phone-pad"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleClick}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  nextButton: {
    backgroundColor: 'black',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: '80',
    color: 'white',
    textAlign: 'center',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '70%',
  },
  phoneNumberInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 14,
    fontSize: 20,
  },
  title : {
    fontSize: 25,
    fontWeight: '80',
    color: 'black',
    textAlign: 'center',
    marginBottom : 7,

  },

  title2 :{
    marginTop : 7,
    fontSize: 17,
    fontWeight: '80',
    color: 'black',
    textAlign: 'center',
    marginBottom : 7,

  }
});

export default PersonalDetails;
