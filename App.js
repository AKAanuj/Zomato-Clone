import SearchScreen from './src/screens/SearchScreen';
import {Platform,StatusBar,Image,View,Text} from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from "react-native-vector-icons/Feather";
import Ficon from "react-native-vector-icons/MaterialIcons";
import FavoriteScreen from './src/screens/FavoriteScreen';
import RestaurantMenu from './src/screens/RestaurantMenu';
import SectionListItem from './src/components/SectionListItem';
import HistoryScreen from './src/screens/HistoryScreen';
import FinalizeOrderScreen from './src/screens/FinalizeOrderScreen';
import LocationBottomSheet from "./src/components/LocationBottomSheet";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const tabNavigator=createMaterialBottomTabNavigator(
{
	Orders:{
		screen:SearchScreen,
		navigationOptions:
		{
			tabBarLabel:<Text style={{fontFamily:"sans-serif-thin",fontWeight:"bold"}}>Orders</Text>,
			tabBarIcon:({focused})=>
			(
				<Icon name={"shopping-bag"} size={24} style={{color:focused ? "red": "grey"}}/>
			),
		},
	},
	Favorites:{
		screen:FavoriteScreen,
		navigationOptions:
		{
			tabBarLabel:<Text style={{fontFamily:"sans-serif-thin",fontWeight:"bold"}}>Favorites</Text>,
			tabBarIcon:({focused})=>
			(
				<Icon name={"heart"} size={24} style={{color:focused ? "red": "grey"}}/>
			),
		},
	},
	History:{
		screen:HistoryScreen,
		navigationOptions:
		{
			title:"History",
			tabBarLabel:<Text style={{fontFamily:"sans-serif-thin",fontWeight:"bold"}}>History</Text>,
			tabBarIcon:({focused})=>
			(
				<Ficon name={"history"} size={25} style={{color:focused ? "red": "grey"}}/>
			),
		},
	},
},
{
	initialRouteName:"Orders",
	activeColor:"grey",
	inactiveColor:"grey",
	barStyle:{backgroundColor:"white",elevation:20},
}
);

const navigator=createStackNavigator(
	{
		tabNavigator:{
			screen:tabNavigator,
		},
		Menu:{
			screen:RestaurantMenu,
		},
		Finalize:FinalizeOrderScreen,
		Login:LoginScreen,
		Signup:SignupScreen,
	},
	{
		initialRouteName:"Login",
		headerMode:"none"
	}
);
export default createAppContainer(navigator);
