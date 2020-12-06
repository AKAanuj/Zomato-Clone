import React from 'react';
import {View,Image,Text,StyleSheet,StatusBar} from 'react-native';
import LocationComponent from '../components/LocationComponent';

const FavoriteScreen=()=>
{
  return (
    <View style={styles.topViewStyle}>
    <LocationComponent />
    <Image source={require("../../assets/favimage.png")}/>
    <Text style={styles.textStyle}>You haven't marked any favourites yet.</Text>
    </View>
  );
}

const styles=StyleSheet.create(
  {
    topViewStyle:
    {
      marginTop:StatusBar.currentHeight,
      flex:1,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-between"
    },
    textStyle:
    {
      flex:0.7,
      color:"grey"
    }
  }
);

export default FavoriteScreen;
