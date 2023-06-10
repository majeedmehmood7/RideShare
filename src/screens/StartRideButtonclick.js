
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useRef, useEffect,useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
const StartRideButtonclick=({ route }) => {
  const { currentLocation, destination } = route.params;
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
return(
  
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
  
      <View style={styles.rowContainer}>
        <Text style={styles.onTripText}>On Trip</Text>
        <View style={styles.shareContainer}>
          <Entypo name="share" style={styles.shareIcon} color="royalblue" />
          <Text style={styles.shareText}>Share Location</Text>
        </View>
      </View>

      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Image Selector */}
      <View style={styles.imageSelectorContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Fahad.jpeg')} />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>Fahad Khan</Text>
          {/* Message and Call Icons */}
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Ionicons name="chatbox-outline" style={styles.icon} color="royalblue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="call-outline" style={styles.icon} color="royalblue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
  // padding:10,
   backgroundColor:'white',
 //  marginBottom:40,
  },
  mapContainer: {
    height: Dimensions.get('window').height - 400,
   //marginBottom: 20,
  },
  map: {
    flex: 1,
  },
 
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingTop:100,
  },
  onTripText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    fontSize: 24,
    marginRight: 5,
  },
  shareText: {
    fontSize: 18,
    color: 'royalblue',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    marginTop: 20,
  },
  imageSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
});
export default StartRideButtonclick;