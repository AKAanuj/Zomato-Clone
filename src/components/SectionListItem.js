import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import CounterComponent from "./CounterComponent";

const SectionListItem=({item,image,getCounter})=>
{
  function addName(counter)
  {
    counter.push(item.name);
    counter.push(item.price);
    counter.push(item.dish_id);
    getCounter(counter);
  }
  return (
    <View style={styles.itemStyle}>
    <View style={styles.restaurantDetails}>
    {image==null?null:<Image style={{width:74,borderRadius:12,height:74,marginRight:5,backgroundColor:"grey"}} source={image}/>}
    <View style={styles.price}>
    <Text style={{fontSize:15}}>{item.name}</Text>
    <Text style={{color:"red"}}>{item.price}</Text>
    </View>
    </View>
    <CounterComponent getCounter={addName}/>
    </View>
  );
}

const styles=StyleSheet.create(
  {
      itemStyle:
      {
        paddingBottom:50,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
      },
      restaurantDetails:
      {
        flex:1,
        marginBottom:12,
        marginLeft:10,
        flexDirection:'row',
        alignItems:"center"
      },
      price:
      {
        flexDirection:"column",
      }
  }
);

export default SectionListItem;
