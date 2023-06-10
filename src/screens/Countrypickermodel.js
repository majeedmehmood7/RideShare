// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import CountryPicker from 'react-native-country-picker-modal';
// import SvgUri from 'react-native-svg-uri';
// const Countrypickermodal = ({ onSelect, countryCode }) => {
//     const [country, setCountry] = useState(null);
//     const [showPicker, setShowPicker] = useState(false);
  
//     const handleCountrySelect = (selectedCountry) => {
//       setCountry(selectedCountry);
//       setShowPicker(false);
//       onSelect(selectedCountry);
//     };
  
//     return (
//       <TouchableOpacity
//         style={styles.container}
//         onPress={() => setShowPicker(true)}
//       >
//         <View style={styles.countryContent}>
//           {country && country.flag && (
//             <SvgUri
//               uri={country.flag}
//               width={24}
//               height={24}
//               style={styles.flagIcon}
//             />
//           )}
//           <View style={styles.countryInfo}>
//             {country && (
//               <View style={styles.countryCodeContainer}>
//                 {country.flag && (
//                   <SvgUri
//                     uri={country.flag}
//                     width={16}
//                     height={16}
//                     style={styles.smallFlagIcon}
//                   />
//                 )}
//               </View>
//             )}
//             {country && (
//               <View style={styles.countryCodeContainer}>
//                 <Text style={styles.countryCode}>{country.callingCode[0]}</Text>
//               </View>
//             )}
//           </View>
//         </View>
//         {showPicker && (
//           <CountryPicker
//             withFilter
//             withFlag
//             withCountryNameButton
//             withCallingCode
//             withCloseButton
//             withAlphaFilter
//             onSelect={handleCountrySelect}
//             onClose={() => setShowPicker(false)}
//             countryCode={countryCode}
//             visible
//           />
//         )}
//       </TouchableOpacity>
//     );
//   };
//   export default Countrypickermodal;
//   const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: 'gray',
//       padding: 10,
//     },
//     countryContent: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     flagIcon: {
//       marginRight: 10,
//     },
//     countryInfo: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     countryCodeContainer: {
//       marginRight: 5,
//     },
//     smallFlagIcon: {
//       width: 16,
//       height: 16,
//     },
//     countryCode: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//   });
  