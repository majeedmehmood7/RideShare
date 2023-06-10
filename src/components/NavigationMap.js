// import React,{useState,useRef} from "react";
// import MapView, { Marker } from 'react-native-maps';
// import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
// import MapViewDirections from 'react-native-maps-directions';
// import imagepath from "./imagepath";

// const NavMap=()=>{
//     const [state,setstate]=useState({
//        pickupCords:{ latitude:30.7046,
//         longitude:76.7179,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//     },

// droplocationCors:{
//     latitude:30.7333,
//     longitude:76.7994,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
// }})
// const mapRef=useRef()
// const {pickupCords,droplocationCors}=state
// const onlocation=()=>{

// }
// const GOOGLE_MAPS_APIKEY = 'AIzaSyAuc4tHnAfQFT3IZiVCkokEAOrxnpknBVk';
//     return(
//         <><View style={styles.container}>
//             <MapView
//                 ref={mapRef}
//                 style={StyleSheet.absoluteFill}
//                 initialRegion={pickupCords}
//             >
//                 <Marker
//                     coordinate={droplocationCors}
//                     //  image={imagepath.isgreenmarker}
//                     strokeWidth={6} />
//                 <Marker
//                     coordinate={pickupCords}
//                     // image={imagepath.iscurloc}
//                     strokeWidth={6} />
//                 <MapViewDirections
//                     origin={pickupCords}
//                     destination={droplocationCors}
//                     apikey={GOOGLE_MAPS_APIKEY}
//                     strokeWidth={3}
//                     strokeColor="black"
//                     optimizeWaypoints={true}
//                     enablePoweredByContainer={false}
//                     onReady={result => {
//                         mapRef.current.fitToCoordinates(result.coordinates, {
//                             edgePadding: {
//                                 right: 30,
//                                 bottom: 300,
//                                 left: 30,
//                                 top: 100
//                             }
//                         });
//                     } } />
//             </MapView>
//         </View><View style={styles.bottomCard} >
//             <Text>Where are you going....?</Text>
//             <TouchableOpacity
//             onPress={onlocation}
//             style={styles.inputstyle}><Text>Choose your location</Text></TouchableOpacity>
//         </View></>
//     );
// };
// export default NavMap;
// const styles =StyleSheet.create({
//     inputstyle:{
//         backgroundColor:'white',
//         borderRadius:4,
//         borderWidth:1,
//         alignItems:'center',
//         height:48,
//         justifyContent:'center',
//         marginTop:
//     },
//     bottomCard:{
// backgroundColor:'white',
// width:'100%',
// padding:30,
// borderTopEndRadius:24,
// borderTopStartRadius:24,
//     },
//     container:{
//         flex:1,
       
//     },
// });