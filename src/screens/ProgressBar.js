import React from 'react';
import { View, StyleSheet, Text, Modal, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const ProgressBar = () => {
  const progress = 50; // Example progress value, you can replace it with your own logic

  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          // Add other map configurations as needed
        />
        {/* Progress Bar */}
        <Modal transparent={true} visible={true}>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{`${progress}% Complete`}</Text>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
   height:650,
   width:400,
  },
  progressBarContainer: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 50,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
   // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
  },
  progressBar: {
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  progressText: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 + 30,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ProgressBar;
