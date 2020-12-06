import React from 'react';
import {Text,StyleSheet,View,Dimensions,FlatList} from 'react-native';
import HistoryComponent from '../components/HistoryComponent';

const HistoryScreen=()=>
{
  const data=[{id:0,Name:"Anuj"}];
  //items:,orderedOn:,Amount:,id:-timestamp,place:,restaurantName:,
  return (
    <FlatList
    data={data}
    renderItem={({item})=>
    <>
      <HistoryComponent />
    </>
    }
    keyExtractor={item=>item.id}
    />
  );
}
export default HistoryScreen;
