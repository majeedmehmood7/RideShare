import React,{useState} from "react";
import { View,TextInput,StyleSheet, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Callout } from 'react-native-maps';
import PlacesRow from "./placesrow";
import MapViewDirections from 'react-native-maps-directions';
import { TouchableWithoutFeedback } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
const Trackpoint=()=>{
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [infoBoxData, setInfoBoxData] = useState({ distance: null, duration: null });
  const done=()=>{
    navigation.navigate('Carpooling',{ currentLocation, destination });
   }
  const handleCurrentLocationSelect = (data, details) => {
   
    setRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
    setCurrentLocation({
      name: data.structured_formatting.main_text,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
  };

  const handleDestinationSelect = (data, details) => {
    setDestination({
      name: data.structured_formatting.main_text,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
    if (currentLocation !== null) {
      setCoordinates([
        {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
        {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
      ]);
    }
    setShowInfoBox(true);
    setInfoBoxData({ distance: null, duration: null });
  };
  const renderMapCallout = () => {
    if (showInfoBox && infoBoxData.distance && infoBoxData.duration) {
      return (
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          title={destination.name}
        >
          <Callout>
            <View style={styles.infoBox}>
              <View style={styles.infoBoxIcon}>
                <Fontisto name="clock" style={{ fontSize: 20, color: "black" }} />
              </View>
              <View style={styles.infoBoxContent}>
                <Text style={styles.infoBoxText}>
                  Distance: {infoBoxData.distance} km
                </Text>
                <Text style={styles.infoBoxText}>
                  Duration: {infoBoxData.duration} mins
                </Text>
              </View>
            </View>
          </Callout>
        </Marker>
      );
    }
    return null;
  };
    return(
    
       
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Current Location'
      
      styles={{
        textInput:styles.textInput,
    container:{
        position:'absolute',
        top:0,
        left:10,
        right:10,
    },
    listView:{
     top:110,
     position:'absolute',
    },
    separator:{
      backgroundColor:'#efefef',
      height:3,
    }
      }}
      onPress={handleCurrentLocationSelect}
      suppressDefaultStyles
      fetchDetails={true}
 //currentLocation={true}
      currentLocationLabel="Current Location"
     // fetchDetails
      query={{
        key: 'AIzaSyAuc4tHnAfQFT3IZiVCkokEAOrxnpknBVk',
        language: 'en',
      }}
      enablePoweredByContainer={false}
      renderRow={(data)=><PlacesRow  data={data}/>}
      renderDescription={(data)=>data.description || data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
    />
         <GooglePlacesAutocomplete
      placeholder='Where To'
      styles={{
        textInput:styles.textInput,
        container:{
        position:'absolute',
        top:55,
        left:10,
        right:10,

    },
    separator:{
      backgroundColor:'#efefef',
      height:3,
    }
      }}
      onPress={handleDestinationSelect}
        fetchDetails={true}
    suppressDefaultStyles
     // fetchDetails
      query={{
        key: 'AIzaSyAuc4tHnAfQFT3IZiVCkokEAOrxnpknBVk',
        language: 'en',
      }}
      
      enablePoweredByContainer={false}
      renderRow={(data)=><PlacesRow  data={data}/>}
    />
  {/* circle near origin input */}
  <Fontisto name="map-marker" style={{ 
  fontSize: 10,
  
  left:13,
  top:17,
  color:'black',

        }}/>

 {/* line near origin input */}
 <View style={styles.line}/>

 {/* square near origin input */}
  <View style={styles.square}/>
  {region && (
        <><MapView style={styles.map} region={region}>
            {currentLocation !== null && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title={currentLocation.name} />
            )}
           
            {renderMapCallout()}
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
      onReady={(result) => {
                  setInfoBoxData({
                    distance: (result.distance / 1000).toFixed(2),
                    duration: Math.ceil(result.duration),
                  });
                }}
              />
  )}
 
</MapView>
          <TouchableWithoutFeedback onPress={done} >
<View style={{bottom:20,marginHorizontal:100,padding:7, backgroundColor:'black', alignItems:'center', borderRadius:10}}>
<Text style={{fontSize:20, color:'white'}} >Done</Text>
</View>
</TouchableWithoutFeedback></>
         )}
         
    </View>
   
   
    );
};
export default Trackpoint;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
 backgroundColor:'white',
  },
  map: {
    flex: 5,
top:190,
   
  },
  textInput:{
    padding:10,
   backgroundColor:'#e1e0e0',
    marginVertical:5,
    marginLeft:20,
  },
  calloutContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  calloutText: {
    fontSize: 14,
  },
  but:{marginVertical: 2,
    borderRadius: 100,
    paddingRight: 15,
    paddingTop:20,
    paddingLeft: 10,
 
    margin:60,
  },
  circle:{
    width:5,
    height:5,
    backgroundColor:'black',
    position:'absolute',
    top:20,
    left:15,
    borderRadius:5,
  },
  infoBox: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  infoBoxIcon: {
    marginRight: 10,
  },
  infoBoxContent: {
    flex: 1,
  },
  infoBoxText: {
    fontSize: 14,
  },
  line:{
    width:1,
    height:52,
    backgroundColor:'black',
    position:'absolute',
    top:26,
    left:16.5,
  
  },
  square:{
    width:7,
    height:7,
    backgroundColor:'black',
    position:'absolute',
    top:79,
    left:13.5,
    },
    })