import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const CounterComponent=({getCounter})=>
{
  const [counter,setCounter]=useState(0);
  const reduceCounter=(counter)=>
  {
    if(counter>0)
    {
    setCounter(counter-1);
    getCounter([counter-1]);
    }
  }
  const increaseCounter=(counter)=>
  {
    if(counter<10)
    {
    setCounter(counter+1);
    getCounter([counter+1]);
    }
  }
  return (
		<View style={styles.counterStyle}>
		<TouchableOpacity style={{flex:1}} onPress={()=>reduceCounter(counter)}>
		<Icon name="minus" size={16} style={{alignSelf:"center",color:"red"}}/>
		</TouchableOpacity>
		<View style={{flex:1,backgroundColor:"rgb(255,240,240)"}}>
		<Text style={{alignSelf:"center"}}>
		{counter}
		</Text>
		</View>
		<TouchableOpacity style={{flex:1}} onPress={()=>increaseCounter(counter)}>
		<Icon name="plus" size={16} style={{alignSelf:"center",color:"red"}}/>
		</TouchableOpacity>
		</View>
		);
}

const styles=StyleSheet.create(
  {
    counterStyle:
    {
      marginRight:10,
      borderWidth:1.6,
      borderRadius:8,
      alignItems:"center",
      backgroundColor:"white",
      flexDirection:"row",
      width:80,
    },
  }
)

export default CounterComponent;
