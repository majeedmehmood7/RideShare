import React,{useState,useEffect} from "react";
import { Text, View, StyleSheet,Image,Button , ScrollView} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import PickupDestinationInfo from "./PickupDestinationInfo";
import CustomButton from '../components/CustomButton';
// import Share from 'react-native-share';
const CarpoolingScreen2 =  () => {
    const [pickupPlaceName, setPickupPlaceName] = useState('');
 const Separator = () => <View style={styles.separator} />;
    const [destinationPlaceName, setDestinationPlaceName] = useState('');
  useEffect(() => {
  const apiKey='AIzaSyC6WNMIQNFpckNE1lGY8RC8Di6vo4zma14';
  const pickupLatitude = 24.804253925195148;
  const pickupLongitude = 67.12225924724774;
  const destinationLatitude =24.79461033837493;
  const destinationLongitude= 67.13598209664752;
  const pickupUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pickupLatitude},${pickupLongitude}&key=${apiKey}`;
  const destinationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${destinationLatitude},${destinationLongitude}&key=${apiKey}`;
  
  // Make requests to get the place names of the pickup and destination locations
  Promise.all([fetch(pickupUrl), fetch(destinationUrl)])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const pickupPlaceName = data[0].results[0].formatted_address;
      const destinationPlaceName = data[1].results[0].formatted_address;
      console.log('Pickup location:', pickupPlaceName);
    console.log('Destination location:', destinationPlaceName);
  })
  .catch(error => {
    console.error(error);
});
}, []);
    const navigation = useNavigation();
const [state, setstate] = useState({
    pickupcords: {
      latitude: 24.804253925195148,
      longitude: 67.12225924724774,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    droplocationCords: {
      latitude: 24.79461033837493,
      longitude: 67.13598209664752,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  }
  )
  const [pickupLocation, setPickupLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const { pickupcords, droplocationCords } = state
    
    const result=()=>{
        navigation.navigate('Results')
            }
    return (
        <> 
        <View style={styles.container}>
        
            <View style={styles.example}>
                <Text style={{ color: 'white', fontSize: 19, margin: 3 }}>Reaching Destination in</Text>
                <Text style={{ color: 'white', fontSize: 24, margin: 5 }}>16 min</Text>
                <ProgressBar progress={0.5} color="white" style={{ backgroundColor: 'gray' }} />
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>On Trip</Text>
                <Entypo      name="share" style={{ fontSize: 30,paddingLeft:150 }} color='royalblue' />
                <Text style={{ fontSize: 19, color: 'royalblue' }}>Share Location</Text>

            </View>
            <View style={{ flex: 1, bottom:7, paddingRight: 8, paddingLeft: 8}}>

                <View
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                    }}
                />
            </View>
            <View  style={{flex:0,justifyContent:'space-between',padding:10, flexDirection:'row'}}>
               <FontAwesome name="user-circle" style={{ fontSize: 70,}}/>
               <View style={{  flexDirection:'column',}}>
                <Text style={{fontSize:18, alignSelf:'center' , fontWeight:'bold',color:'black'}}>{"  "}Fahad Khan</Text>
                <Text style={{fontSize:13, alignSelf:'center' ,color:'gray'}}>{"  "}Honda Civic</Text>
                <Text style={{fontSize:13, alignSelf:'center',padding:5, height:30,borderRadius:5, width:80,backgroundColor:"lightgray" , color:'black'}}>{"  "}KPR 3340</Text>
                </View>
                <Ionicons  onPress={result} name="call" alignSelf='center'color='royalblue' style={{ fontSize: 25,paddingLeft:130 }}/>
                <Ionicons  name="chatbox-ellipses" color='royalblue' alignSelf='center'style={{ fontSize: 25 }}/>
            </View>
            <View style={{ flex: 300, paddingRight: 8, paddingLeft: 8 }}>

<View
    style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        

     // top:10,
        // paddingRight:10,
    }}
/>
</View>
<View style={{ 
       paddingLeft:10,
       paddingBottom:40,}}>
<Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold',top:10,paddingBottom:15,borderTopColor:'white' }}>Trip Route</Text>
{/* <Text style={{ fontSize: 18 ,fontWeight:'bold',color:'black'}}>{'  '}PAF-KIET</Text> */}
<PickupDestinationInfo/>





   
<View style={styles.circle}/>

{/* line near origin input */}
 <View style={styles.line}/>

{/* square near origin input */}
 <View style={styles.square}/>
 
 </View>

 <Text style={{color:'royalblue', flex:1,top:40, paddingBottom:1,fontWeight:'bold', fontSize:16}}>Change Location</Text> 


 
 
<View style={styles.cont}>
<View style={styles.text}>
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>Payment</Text>
                
                <Text style={{ fontSize: 19, color: 'black' }}>PKR 300</Text>
                
            </View>
            <View style={styles.text}>
            <Image style={{}} source={require('../../assets/cash.png')}/>
            <Text style={{ fontSize: 19, color: 'black' }}>Cash</Text>
            <Text style={{ fontSize: 19, color: 'royalblue' }}>switch</Text>
</View>
 <View style={styles.fixToText}>
        <CustomButton
         text="End My Trip"
        
        />
        
      </View>
</View>

          
 
 
        </View>
        </>
    );
};
export default CarpoolingScreen2;
const styles = StyleSheet.create({

    con: {
        flex: 1,
        padding: 10,

    }, 
    cont:{padding:1,
    paddingBottom:250,
    paddingTop:1,
    
  },
    circle:{
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:58,
        left:15,
        borderRadius:15,
      },
      emer:{borderRadius:5,
    backgroundColor:'red',},
      end:{borderRadius:5,},
      fixToText: {
        marginVertical: 2,
    borderRadius: 100,
    paddingRight: 15,
    // paddingTop:1,
    paddingLeft: 10,
 marginBottom:70,
   // margin:70,
      },
      line:{
        width:1,
        height:57,
        backgroundColor:'#c4c4c4',
        position:'absolute',
        top:60,
        left:17,
      
      },
      square:{
    width:5,
    height:5,
    backgroundColor:'black',
    position:'absolute',
    top:120,
    left:15,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
   
      },
    container: {
        flex: 1,
        // bottom: 30,
        // margin: 1,
        // marginBottom: 400,
       backgroundColor:'white',



    },
    text: {
        bottom: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',




        padding: 10,

    },
    example: {
        // marginVertical: 1,
        fontSize: 10,
        backgroundColor: 'black',
       padding: 10,
       paddingLeft:10,
       paddingBottom:50,
     
    },
})