import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, Button, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import PickupDestinationInfo from "./PickupDestinationInfo";

const StartRide = ({ route }) => {
  const { currentLocation, destination } = route.params;
  const navigation = useNavigation();

  const startride = () => {
    navigation.navigate('start', { currentLocation, destination });
  }

  return (
    <><View contentContainerStyle={styles.container}>
      <View style={styles.example}>
        <Text style={styles.exampleText}>Meet Driver at Pickup Point</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.onTripText}>On Trip</Text>
        <Entypo name="share" style={styles.shareIcon} color='royalblue' />
        <Text style={styles.shareLocationText}>Share Location</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.userInfoContainer}>
        <FontAwesome name="user-circle" size={60} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Fahad Khan</Text>
          <Text style={styles.carInfo}>Honda Civic</Text>
          <Text style={styles.carNumber}>KPR 3340</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.currentTripContainer}>
        <Text style={styles.currentTripText}>Current Trip</Text>
        <PickupDestinationInfo currentLocation={currentLocation} destination={destination} />
        <Text style={styles.changeLocationText}>Change Location</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentTitle}>Payment</Text>
          <Text style={styles.paymentAmount}>PKR 300</Text>
        </View>
        <View style={styles.paymentMethod}>
          <Image style={styles.paymentIcon} source={require('../../assets/cash.png')} />
          <Text style={styles.paymentMethodText}>Cash</Text>
          <Text style={styles.switchText}>Switch</Text>
        </View>

      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: 'skyblue' }]}>
          <View style={styles.buttonContent}>
            <Ionicons name="chatbubble-ellipses-outline" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Message Driver</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: 'skyblue' }]}>
          <View style={styles.buttonContent}>
            <Ionicons name="call-outline" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Call Driver</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View><TouchableOpacity onPress={startride} style={[styles.buttonStyle, { backgroundColor: 'black' }]}>
        <Text style={styles.buttonText}>Start Ride</Text>
      </TouchableOpacity><TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "lightgray" }]}>
        <Text style={styles.cancelRideText}>Cancel Ride</Text>
      </TouchableOpacity></>
 
  );
};

export default StartRide;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    margin: 4,
    paddingBottom: 30,
  },
  example: {
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 20,
  },
  exampleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  onTripText: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
  shareIcon: {
    fontSize: 19,
    marginLeft:140,
  },
  shareLocationText: {
    fontSize: 13,
    color: 'royalblue',
  },
  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userIcon: {
    fontSize: 25,
  },
  buttonContent:{flexDirection:'row'},
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  carInfo: {
    fontSize: 13,
    color: 'gray',
    marginLeft: 5,
  },
  carNumber: {
    fontSize: 13,
    padding: 5,
    height: 30,
    borderRadius: 5,
    width: 80,
    backgroundColor: 'lightgray',
    color: 'black',
    marginLeft: 5,
  },
  currentTripContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  currentTripText: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    paddingBottom: 4,
  },
  changeLocationText: {
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'justify',
    marginHorizontal:15,
    top:5,
  },
  paymentContainer: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 5,
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
 //   padding: 10,
  },
  paymentTitle: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
  paymentAmount: {
    fontSize: 13,
    color: 'black',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 1,
  },
  paymentIcon: {
    width: 52,
    height: 30,
    marginRight: 5,
  },
  paymentMethodText: {
    fontSize: 13,
    color: 'black',
  },
  switchText: {
    fontSize: 15,
    color: 'royalblue',
    marginLeft: 180,
   // flexDirection:'row',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  //  marginTop: 10,
  },
  buttonStyle: {
 //  padding: 5,
margin:3,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
  buttonIcon: {
    fontSize: 20, color: 'white', marginRight: 5 
  },
  fixToText: {
    margin: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginBottom: 5,
  },
  cancelRideButton: {
   margin: 3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginBottom: 5,
  },
  cancelRideText: {
    color: 'red',
    fontSize: 13,
  },
});