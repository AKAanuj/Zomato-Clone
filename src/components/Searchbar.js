import React,{useState} from 'react';
import {TextInput,StyleSheet,View} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
const Searchbar=({query,onQueryChange,onQuerySubmit})=>
{
	return (
		<View style={styles.background}>
		<EvilIcons name="search" style={styles.iconStyle} color="black"/>
		<TextInput style={styles.inputStyle}
		placeholder="Search"
		text={query}
		autoCapitalize="none"
		autoCorrect={false}
		onChangeText={newquery=>onQueryChange(newquery)}
		onEndEditing={()=>onQuerySubmit()}/>
		</View>
		);
}
const styles=StyleSheet.create(
{
	background:
	{
		elevation:4,
		flexDirection:'row',
		marginVertical:10,
		backgroundColor:'#F0EEEE',
		height:50,
		borderRadius:10,
		marginHorizontal:15,
		alignItems:'stretch',
	},
	inputStyle:
	{
		flex:1,
	},
	iconStyle:
	{
		marginHorizontal:10,
		alignSelf:'center',
		fontSize:40
	}
});
export default Searchbar;
