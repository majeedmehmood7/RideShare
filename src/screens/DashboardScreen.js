import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const CAROUSEL_HEIGHT = viewportHeight * 0.3; // Set carousel height to 30% of window height

const originalData = [
  { id: 1, image: require('../../assets/point.png') },
  { id: 2, image: require('../../assets/bikepool.png') },
  { id: 3, image: require('../../assets/carpool.png') },
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([...originalData, ...originalData, ...originalData]); // Use 3 copies of the original data
  const [currentIndex, setCurrentIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.carouselImage} source={item.image} />
      </View>
    );
  };

  const onSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const snapNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const snapPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        enableSnap={true}
        loop={true}
        autoplay={false}
        contentContainerCustomStyle={styles.carouselContainer}
        containerCustomStyle={styles.carousel}
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.searchBox}>
        <View style={styles.inputBox}>
          <FontAwesome name={'search'} size={27} color='black' />
          <Text style={styles.inputText} onPress={() => navigation.navigate('TrackPoints')}>
            {'  '}
            Request For a Ride
            {'                   '}
          </Text>
          <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color='black' />
            <Text style={styles.timeText}>Time</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16} color='black' />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 300,
  },
  searchBox: {
    position: 'absolute',
    top: CAROUSEL_HEIGHT,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#d9d9d9',
  },
  carouselContainer: {
    height: CAROUSEL_HEIGHT,
  },
  carousel: {
    marginTop: 5,
  },
  carouselImage: {
    height: CAROUSEL_HEIGHT,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
    flex: 1, 
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingRight: 10,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  timeText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
