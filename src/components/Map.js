import { StyleSheet, View, Image, Text, TextInput, ScrollView, Button, Dimensions } from 'react-native';
import { useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Animatable from 'react-native-animatable';

const Map = () => {
  const mapRef = useRef()
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAuc4tHnAfQFT3IZiVCkokEAOrxnpknBVk';
 
  return (
  
 <Animatable.View style={styles.container} animation="fadeIn">
     <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showUserLocation={true}>
        <MapViewDirections
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
          optimizeWaypoints={true}
          enablePoweredByContainer={false}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100
              }
            })
          }}
        />
      </MapView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent:'center',
    borderWidth: 1,
    borderColor: '#ccc',
  //  margin: 10,
    backgroundColor: '#f2f2f2',
  },
  map: {
    height: Dimensions.get('window').height * 0.4,
    width: '100%',
  },

})
export default Map;