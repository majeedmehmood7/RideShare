import React from  'react';
import {Text, View,StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PlacesRow=({data})=>{
    console.log(data);
    return(
        <View style={styles.row}>
<View style={styles.iconcontainer}>
{data.description==='Home'
?<Entypo name='home' size={20}  color={'white'}/>:
  data.description==='Work' ?<MaterialIcons name='work' size={20}  color={'white'}/>


:<Entypo name='location-pin' size={20} color={'white'}  />}
 
</View>
<Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    );
};
export default PlacesRow;
const styles = StyleSheet.create({
    iconcontainer: {
    backgroundColor: '#a2a2a2',
    padding:5,
    borderRadius:50,
    marginRight:15,
  },
  row :{
flexDirection:'row',
alignItems:'center',
marginVertical:10,
  },
  locationText:{

  },
})