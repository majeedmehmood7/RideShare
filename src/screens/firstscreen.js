import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const FirstScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal
  const navigation = useNavigation();

  // Function to handle next button press
  const handleNextPress = () => {
    // Perform validation or any other logic here
    console.log('Phone Number:', phoneNumber);
    setShowModal(true); // Show the modal
  };

  const click = () => {
    navigation.navigate('SecondScreen');
  };

  // Function to handle the modal close
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Us via Phone Number</Text>
      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}

          
        />
 

      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>How would you like to get the code?</Text>
            <TouchableOpacity onPress={click} style={styles.button}>
              <FontAwesome name="whatsapp" size={24} color="white" />
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={click} style={styles.button1}>
              <AntDesign name="mail" size={24} color="black" />
              <Text style={styles.buttonText1}>Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily : 'Poppins-Regular'
  },
  title: {
    fontSize: 20,
    fontWeight: '70',
    color: 'black',
    marginBottom: 20,
    fontFamily : 'Poppins-Regular'

  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    fontFamily : 'Poppins-Regular',
    width: '80%', // Adjusted to provide more spacing
  },
  phoneNumberInput: {
        width : '100%',
        fontFamily :'Poppins-Black',
        fontWeight:'bold',
        borderColor :'black',
        fontSize: 20,
        fontFamily : 'Poppins-Regular',
        // borderWidth: 0,
        // borderBottomEndRadius:2,
        // borderBottomEndRadius :2,
        // borderRadius:5,
        borderBottomWidth: 1,
        paddingHorizontal:10,
        marginVertical:5,

  },
  nextButton: {
    backgroundColor: 'black',
    width: '80%', // Adjusted to provide more spacing
    paddingHorizontal: 10,
    fontFamily : 'Poppins-Regular',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 7,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: '80',
    fontFamily : 'Poppins-Regular',
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 12,
    borderWidth: 2,
    borderColor : 'black',
    borderRadius: 8,
    marginBottom: 8,
  },

  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderWidth: 2,
    borderColor : 'black',
    borderRadius: 8,
    marginBottom: 8,
  },




  buttonText: {
    fontSize: 19,
    fontWeight: '60',
    color: 'white',
    marginLeft: 10,
  },

  buttonText1: {
    fontSize: 19,
    fontWeight: '60',
    color: 'black',
    marginLeft: 10,
  }, 
  closeButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default FirstScreen;
