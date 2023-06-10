import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const PickupDestinationInfo = ({ currentLocation, destination }) => {
  const [pickupPlaceName, setPickupPlaceName] = useState('');
  const [destinationPlaceName, setDestinationPlaceName] = useState('');

  useEffect(() => {
    const apiKey = 'AIzaSyC6WNMIQNFpckNE1lGY8RC8Di6vo4zma14'; // Replace with your own API key
    const pickupUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.latitude},${currentLocation.longitude}&key=${apiKey}`;
    const destinationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${destination.latitude},${destination.longitude}&key=${apiKey}`;

    // Make requests to get the place names of the pickup and destination locations
    Promise.all([fetch(pickupUrl), fetch(destinationUrl)])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        const pickupPlaceName = data[0].results[0].formatted_address;
        const destinationPlaceName = data[1].results[0].formatted_address;
        setPickupPlaceName(pickupPlaceName);
        setDestinationPlaceName(destinationPlaceName);
      })
      .catch(error => {
        console.error(error);
      });
  }, [currentLocation, destination]);

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
      ⚫Current Location:{"                                             "}
       
        {currentLocation.latitude}, {currentLocation.longitude}
      </Text>
      <Text style={{ color: 'black' }}>{pickupPlaceName}</Text>
    
      <Text style={{ top: 4, fontSize: 16, fontWeight: 'bold', color: 'black' }}>
      ⚫Destination Location:{"                                               "}
        {destination.latitude}, {destination.longitude}
      </Text>
      <Text style={{ top: 4, color: 'black' }}>{destinationPlaceName}</Text>
    </View>
  );
};

export default PickupDestinationInfo;
