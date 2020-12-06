import React from 'react';
import {Dimensions,Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {withNavigation} from 'react-navigation';

const OpenCart=({style,orderDetails,navigation})=>
{
  const {width}=Dimensions.get("window")
  return (
      <TouchableOpacity style={{...style,alignItems:"center",justifyContent:"center"}}
      onPress={()=>navigation.navigate("Finalize",{order:orderDetails})}>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"rgb(255,120,135)",height:40,marginBottom:5,borderRadius:7}}>
        <View style={{flex:1.3}}></View>
          <Text style={{flex:2,color:"white",fontSize:20}}>View Cart</Text>
          <Icon style={{flex:0.3,marginLeft:10}} name="chevron-right" size={24} color={"white"}/>
        </View>
      </TouchableOpacity>
  );
}


export default withNavigation(OpenCart);
