import React from 'react';
import {Text,
  StyleSheet,
  View,
  Dimensions,
StatusBar} from 'react-native';

const {height,width}=Dimensions.get('window')

const HistoryComponent=()=>
{
return (
  <View style={{marginTop:StatusBar.currentHeight,padding:10,backgroundColor:"white",margin:5,borderRadius:10,height:height/2.5,elevation:2}}>

  <>
    <Text style={{fontSize:20}}>RestaurantName</Text>
    <Text style={{fontSize:15,color:'grey',marginBottom:10}}>Place</Text>
  </>

  <View style={{backgroundColor:"grey",width:width-30,height:0.5}}>
  </View>

  <View>
  <>
  <Text style={{...styles.header,marginTop:10}}>ITEMS</Text>
  <Text style={styles.values}>1x</Text>
  </>
  <>
  <Text style={styles.header}>ORDERED ON</Text>
  <Text style={styles.values}>10 june,2019</Text>
  </>
  <>
  <Text style={styles.header}>TOTAL AMOUNT</Text>
  <Text style={styles.values}>{"Rs."+200}</Text>
  </>

  </View>

  <View style={{backgroundColor:"grey",width:width-30,height:0.5}}>
  </View>

  </View>
);
}
const styles=StyleSheet.create(
{
    header:
    {
      fontSize:10,
      color:"grey"
    },
    values:
    {
      fontSize:15,
      marginBottom:10
    }
}
);

export default HistoryComponent;
