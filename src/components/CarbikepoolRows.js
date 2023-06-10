import React from "react";
import {Text,View,Image,StyleSheet,Platform} from 'react-native';
import PoolTypes from "./Carbikepooltypes";
import CustomButton from "./CustomButton";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
const CarbikepoolRows=()=>{
  const navigation = useNavigation();
  const Done = () => {
    navigation.navigate('ride');
  }
return(
   <View style={styles.cont}><View style={styles.containter}>
        <Image style={styles.image} source={require('../../assets/UberX.jpeg')} />
        <View style={styles.middlecontainer}>
            <Text style={styles.type}>
                Honda Civic{' '}
              
            </Text>
           
            <Text style={styles.time}>
                {' '}8:03PM - Departure {' '}
            </Text>
            <Text style={{color:'black'}}> <Ionicons name={'person'} size={16} />
                {'  '}3</Text>

        </View>
        <View style={styles.rightcontainer}>
            <Ionicons color={'green'} name={'pricetag'} size={18} />
            <Text style={styles.price}>
              PKR 300
            </Text>
        </View>
    </View><View style={styles.containter}>
            <Image style={styles.image} source={require('../../assets/bike.png')} />
            <View style={styles.middlecontainer}>
                <Text style={styles.type}>
                    CD 70{' '}
                   
                </Text>
                <Text style={styles.time}>
                    {' '}8:03PM - Departure {' '}
                </Text>
                <Text style={{color:'black'}}> <Ionicons name={'person'} size={16} />
                {'  '}3</Text>
            </View>
            <View style={styles.rightcontainer}>
                <Ionicons color={'green'} name={'pricetag'} size={18} />
                <Text style={styles.price}>
                PKR 350
                </Text>
            </View>
        </View>
        <View style={styles.containter}>
<Image style={styles.image} source={require('../../assets/UberXL.jpeg')}/>
    <View style={styles.middlecontainer}>
<Text style={styles.type}>
Suzuki Cultus{' '}

</Text>
<Text style={styles.time}>
    {' '}8:03PM - Departure{'   '}
</Text>
<Text style={{color:'black'}}> <Ionicons name={'person'} size={16}  />
                {'  '}3</Text>
    </View>
    <View style={styles.rightcontainer}>
        <Ionicons color={'green'} name={'pricetag'} size={18} />
    <Text style={styles.price}>
    PKR 400
    </Text>
    </View>
</View>

</View>
);
}
export default CarbikepoolRows;
const styles = StyleSheet.create({
  image: {
height:50,
width:80,
paddingHorizontal:10,
resizeMode:'contain',
  },
  but: {
    // width:50,
    // marginVertical: 2,
     borderRadius: 100,
    // paddingRight: 15,
    // paddingTop0,
     // paddingLeft: 10,
   textAlign:'center',
    // paddingTop:20,
    marginEnd:50,
    marginStart:50,
     // margin:90,
    
    },
  cont:{
//  padding:5,
//   marginStart:5,
//   marginEnd:5,
//    paddingTop:10,
//  paddingBottom:10,
// paddingTop:5,

  },
  containter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center' ,
    backgroundColor:'white',
    margin:8,
  
  },
  rightcontainer :{
    width:100,
    alignItems:'flex-end',
    flexDirection:'row',
    //marginLeft:3,
  },
  middlecontainer:{
    flex:1,
   // marginHorizontal:1,
    marginBottom:10,
   
  },
  time:{ color:'#5d5d5d',
 
 // flexDirection:'row',
},
  type:{
    fontWeight:'bold',
    fontSize:15,
    color:'black',
    resizeMode:'contain',
    
  },
  price:{
    fontWeight:'bold',
    fontSize:15,
    marginLeft:9,
    marginStart:12,
    marginEnd:12,
    color:'royalblue',
  }
,})