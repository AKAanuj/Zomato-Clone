import React from 'react';
import {Image,
  Text,
  StyleSheet,
  View,
   StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const LocationComponent=()=>
{
  return (
    <View style={styles.locationBar}>
    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
    <Icon name="location-on" size={32} style={{marginLeft:10,color:"rgb(230,100,120)"}}/>
    <Text style={{fontSize:20}}>Moga</Text>
    </View>
    <Image source={require("../../assets/Anuj.png")} style={{marginRight:10,width:32,height:32,borderRadius:32/2}} />
    </View>
  );
}

const styles=StyleSheet.create(
  {
    locationBar:
    {
      flexDirection:"row",
      justifyContent:"space-between",
    }
  }
);

export default LocationComponent;
