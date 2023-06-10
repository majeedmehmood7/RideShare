import { StyleSheet, View, Image, Text, TextInput, ScrollView,Dimensions, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../components/CustomButton';
import React, { useRef, useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import PoolTypes from '../components/Carbikepooltypes';
import MapViewDirections from 'react-native-maps-directions';

const CarpoolScreen = ({ route }) => {
  const { currentLocation, destination } = route.params;
  
  
  const Done = () => {
    navigation.navigate('ride', { currentLocation, destination });
  }
  const mapRef = useRef(null);
  const [isMapReady, setMapReady] = useState(false);
  useEffect(() => {
    if (isMapReady && mapRef.current && currentLocation && destination) {
      const coordinates = [
        {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
        {
          latitude: destination.latitude,
          longitude: destination.longitude,
        },
      ];

      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      //  animated: true,
        zoomLevel: 32, // Adjust the zoom level as per your preference
      });
    }
  }, [isMapReady,currentLocation, destination]);
  const navigation = useNavigation();
 
  const handleMapReady = () => {
    setMapReady(true);
  };
  return (
    <>
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView ref={mapRef} style={styles.map} onMapReady={handleMapReady}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title={currentLocation.name}
             
            />
          )}
          {destination && (
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              title={destination.name}
              
            />
          )}
          {currentLocation !== null && destination !== null && (
    <MapViewDirections
      origin={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      }}
      destination={{
        latitude: destination.latitude,
        longitude: destination.longitude,
      }}
      apikey="AIzaSyAuc4tHnAfQFT3IZiVCkokEAOrxnpknBVk"
      strokeWidth={4}
      strokeColor="black"
    />
  )}
</MapView>
      </View>
     <View style={styles.view1}>
        <Entypo name="chevron-left" style={{ fontSize: 40 }} color='black' />
        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'black', fontSize: 18 }}>Pools</Text>
          <Text style={{ textAlign: 'center' }}>Find Carpools for different routes</Text>
        </View>
        <Entypo name="chevron-right" style={{ fontSize: 40 }} color='black' />
      </View><View style={styles.inputBox}>
      </View>
      <PoolTypes/>
      <View style={styles.but}>
        <CustomButton text="Request"
           onPress={Done}

        /></View>
    

     </View></>



  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
   padding:10,
   backgroundColor:'white'
  },
  
  but: {
    // width:50,
    // marginVertical: 2,
     borderRadius: 100,
    // paddingRight: 15,
    // paddingTop0,
     // paddingLeft: 10,
   textAlign:'center',
     paddingBottom:20,
    marginEnd:50,
    marginStart:50,
     // margin:90,
    
    },
  mapContainer: {
    height: Dimensions.get('window').height - 500,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  view1: {
   flexDirection: 'row',
   // padding: 10,
   marginBottom:1,
  paddingTop:1,
    justifyContent: 'space-between',
   //  margin:15,
  },
  
  inputBox: {
    // backgroundColor:'#d9d9d9',
    margin: 1,
    // marginTop:10,
    // marginBottom:140,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: 'white',

  },


})
export default CarpoolScreen;