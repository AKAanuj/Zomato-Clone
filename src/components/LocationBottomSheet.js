import React,{useState} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {BottomSheet} from 'react-native-elements';

const LocationBottomSheet=()=>
{
  const [visible,setVisible]=useState(true);
  return (
    <BottomSheet isVisible={visible}>
    <View style={{flex:1,backgroundColor:"black"}}>
    <Text style={{color:"white"}}>Anuj</Text>
    </View>
    </BottomSheet>
  );
}
export default LocationBottomSheet;
