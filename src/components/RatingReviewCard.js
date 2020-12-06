import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const RatingReviewCard=({style,rating,rating_color,reviews})=>
{
  return (
    <View style={style}>
    <View style={{flex:1,borderTopLeftRadius:10,borderTopRightRadius:10,width:60,alignItems:"center",backgroundColor:rating_color}}>
    <Text style={{...styles.ratingPart}}>
    {rating==null?"NA":rating}
    </Text>
    </View>

    <View style={{flex:1,alignItems:"center",backgroundColor:"white"}}>
    <Text style={styles.reviewPart}>{reviews==null?"NA":reviews}</Text>
    <Text style={{color:"grey",fontSize:7}}>REVIEWS</Text>
    </View>


    </View>
  );
}

const styles=StyleSheet.create(
  {
    ratingPart:{
      color:"white",
      fontSize:20,
    },
    reviewPart:
    {
      paddingTop:4,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      color:"black",
      fontSize:10,
    }
  }
);

export default RatingReviewCard;
