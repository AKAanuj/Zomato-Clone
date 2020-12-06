import React from 'react';
import {Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FinalizeOrderScreen=({navigation})=>
{
  const order=navigation.getParam("order");
  console.log([order]);
  const {height,width}=Dimensions.get("window");
  let totalPrice=0;
  let currency="";
  const data=[];
  data.forEach((item)=>totalPrice+=item.price)
  for(const [key,value] of Object.entries(order))
  {
    totalPrice+=value.quantity*Number(value.price.substr(0,value.price.length-3,value.price));
    currency=value.price.substr(value.price.length-3);
    data.push(value);
  }
  totalPrice+=currency;
  console.log(data);

  return (
    <>
    <View style={{height:100,flexDirection:"row",justifyContent:"center",backgroundColor:"rgb(50,50,255)"}}>
    <View style={{justifyContent:"space-evenly",flex:1}}>
    <Text style={{color:"white",marginHorizontal:10}}>DELIVERY AT</Text>

    <View style={{flexDirection:"row"}}>
    <Icon name="check-square" size={24} style={{color:"white",marginHorizontal:10}}/>
    <Text style={{color:"white"}}>Place</Text>
    </View>
    </View>

    <TouchableWithoutFeedback>
    <Text style={{color:"white",alignSelf:"center",marginRight:10}}>CHANGE</Text>
    </TouchableWithoutFeedback>
    </View>

    <View style={{flex:1,backgroundColor:"rgb(255,245,245)",height:height,justifyContent:"flex-start"}}>
        <View>
        <FlatList
        style={{marginTop:10}}
        data={data}
        keyExtractor={item=>item.dish_name}
        renderItem={({item})=>
          <View style={{flexDirection:"row",marginBottom:10,justifyContent:"space-between",marginHorizontal:10}}>
            <Text style={{flex:4,fontSize:16,marginRight:10}}>{""+item.quantity+" x "+item.dish_name+" "}</Text>
            <Text style={{flex:1,fontSize:16}}>{item.price}</Text>
          </View>
        }/>
        </View>

      <View style={{marginHorizontal:5,paddingHorizontal:5,backgroundColor:"rgb(200,255,200)",justifyContent:"space-between",marginVertical:20,height:40,borderWidth:1,alignItems:"center",borderRadius:5,flexDirection:"row",borderColor:"green"}}>
      <Text style={{color:"green",fontSize:16}}>Total</Text>
      <Text style={{color:"green",fontSize:16}}>{totalPrice}</Text>
      </View>

      <View style={{position:"absolute",bottom:0,width:width,backgroundColor:"white",height:90,justifyContent:"center"}}>
        <TouchableOpacity>
          <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"rgb(255,120,135)",height:80,margin:5,borderRadius:10}}>
            <Text style={{color:"white",fontSize:25}}>Make Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>

    </>
  )
}

export default FinalizeOrderScreen;
