import React from 'react';
import {Text,Image,TouchableOpacity,StyleSheet,View} from 'react-native';

const RestaurantsListItem=({style,onPress,image,title,rating,desc,price,rating_color})=>
{
	return (
		<TouchableOpacity style={style} onPress={onPress}>
		<Image style={{marginHorizontal:8,borderRadius:10,width:80,height:80}} source={{uri:image ? image:null}}/>
		<View style={styles.descriptionStyle}>
		<Text style={styles.titleStyle}>{title}</Text>
		<Text style={styles.descStyle}>{desc}</Text>
		<Text style={styles.priceStyle}>{"\u20B9"}{Math.round(price/2)} for one</Text>
		</View>
		<View style={{marginHorizontal:4,height:30,width:30,borderRadius:5,justifyContent:"center",flexDirection:"row",backgroundColor:"#".concat(rating_color)}}>
		<Text style={styles.ratingStyle}>{rating}</Text>
		</View>
		</TouchableOpacity>
		);
}
const styles=StyleSheet.create(
	{
		ratingStyle:
		{
			fontWeight:"bold",
			color:"white",
			fontSize:10,
			alignSelf:"center",
		},
		descriptionStyle:
		{
			paddingLeft:2,
			flex:1,
			flexDirection:'column',
			alignItems:'flex-start'
		},
		titleStyle:
		{
			fontWeight:"bold",
			fontSize:18,
			alignSelf:"flex-start",
			color:"black"
		},
		priceStyle:
		{
			color:"lightgrey",
			fontSize:11
		},
		descStyle:
		{
			color:"grey",
			fontSize:12,
		}
	}
	);
export default RestaurantsListItem;
