import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import CarpoolScreen from '../screens/CarbikepoolScreen1';
import CarpoolingScreen2 from '../screens/carpoolscreen2';
import Trackpoint from '../screens/Trackpointscreen1';
import SearchResults from '../screens/SearchResults';
import StartRide from '../screens/StartRide';
import StartRideButtonclick from '../screens/StartRideButtonclick';
import FirstScreen from '../screens/firstscreen';
import SecondScreen from '../screens/Secondscreen';
import PassengerDriver from '../screens/passengerDriverscreen';
import PersonalDetails from '../screens/PersonalDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from  'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="firstScreen" component={FirstScreen} />
          <Stack.Screen name="PDScreen" component={PassengerDriver} />
          <Stack.Screen name="Personal" component={PersonalDetails} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TrackPoints" component={Trackpoint} />
        <Stack.Screen name="Carpooling" component={CarpoolScreen} />
        <Stack.Screen name="CarpoolingScreen2" component={CarpoolingScreen2} />
        <Stack.Screen name="Results" component={SearchResults} />
        <Stack.Screen name="ride" component={StartRide} />
        <Stack.Screen name="start" component={StartRideButtonclick} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          display: 'flex',
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Animatable.View
              animation={focused ? 'zoomIn' : undefined}
              duration={500}
              style={[styles.tabBarItem, focused && styles.tabBarItemSelected]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="home-outline" color={color} size={size} />
                {focused && <Text style={styles.tabBarText}>{" "}Home</Text>}
              </View>
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Animatable.View
              animation={focused ? 'pulse' : undefined}
              iterationCount="infinite"
              duration={1000}
              style={[styles.tabBarItem, focused && styles.tabBarItemSelected]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="chat" color={color} size={size} />
                {focused && <Text style={styles.tabBarText}>{" "}Chat</Text>}
              </View>
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Animatable.View
              animation={focused ? 'rubberBand' : undefined}
              duration={500}
              style={[styles.tabBarItem, focused && styles.tabBarItemSelected]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="person-outline" color={color} size={size} />
                {focused && <Text style={styles.tabBarText}>{" "}Profile</Text>}
              </View>
            </Animatable.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Navigation;
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    borderTopWidth: 0,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  tabBarItemSelected: {
    backgroundColor: 'white',
    borderRadius: 100,
    animation: 'bounceIn',
    animation: 'zoomIn',
    animation: 'pulse',
    iterationCount: 'infinite',
   
    width: 100,
    //height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    color: 'black',
  },});
