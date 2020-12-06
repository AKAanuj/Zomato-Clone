import React,{useState,useEffect} from 'react';
import {Text,StyleSheet,View,FlatList,Platform,StatusBar} from 'react-native';
import Searchbar from '../components/Searchbar';
import axios from 'axios';
import RestaurantsListItem from "../components/RestaurantsListItem";
import RestaurantMenu from "./RestaurantMenu";

let start=0;
let restaurantDataObject=[];
const SearchScreen=(props)=>
{
	const numResults=20;
	const key="b88d4aa175cedd16f2ca4e83494af1d8";

	const [refresh,refreshState]=useState(false);
	const [errorMessage,getErrorMessage]=useState("");
	const [query,newQuery]=useState("");
	const [resultObtained,changeResultObtained]=useState(null);
	//{restaurants:[{restaurant:{featured_image:"https://b.zmtcdn.com/data/pictures/1/19008511/d768ff1f24bed00357131be90b026b0f.jpg",title:"Not Specified",id:"0",desc:"Not Specified",price:"0",user_rating:{aggregate_rating:"",rating_color:"green"}}}]}
	const api=()=>
	{
		const response=axios({
      method: "GET",
      url: "https://developers.zomato.com/api/v2.1/search",
      headers: {
        "user-key": key,
        "content-type": "application/json"
      },
      params:
      {
      	entity_id:"11502",
      	entity_type:"city",
				start:start,
      }
    })
      .then(response => {
        //console.log(response.data);
				let data=makeRestaurantDetailsObject(response.data);
				restaurantDataObject.push(...data);
				console.log(restaurantDataObject.length);
				changeResultObtained(restaurantDataObject);
      	})
      .catch(error => {
      	getErrorMessage(error.getErrorMessage);
      });
	}
  //prepare a list of objects for FlatList data.
	function makeRestaurantDetailsObject(results)
  {
		const data=[];
    for(i=0;i<results.restaurants.length;i++)
    {
      data.push({title:results.restaurants[i].restaurant.name,
      id:results.restaurants[i].restaurant.id,
      desc:results.restaurants[i].restaurant.cuisines,
      price:results.restaurants[i].restaurant.average_cost_for_two,
      rating:results.restaurants[i].restaurant.user_rating.aggregate_rating,
      featured_image:results.restaurants[i].restaurant.featured_image,
			rating_color:results.restaurants[i].restaurant.user_rating.rating_color,
			reviews:results.restaurants[i].restaurant.all_reviews_count});
    }
		return data;
  }
	const handleLoadMore=()=>
	{
		start+=numResults;
		api();
	}
	useEffect(()=>{
	api();
	},[]);

	const provideData=()=>
	{
		if(resultObtained!=null)
			{
				return resultObtained;
			}
	}

	return (
		<View style={{justifyContent:"space-between",backgroundColor:'white'}}>
		<StatusBar backgroundColor="black"/>
		<View>
		<Searchbar query={query}
		onQueryChange={newTerm=>newQuery(newTerm)}
		onQuerySubmit={api}/>
		{errorMessage ?<Text>{errorMessage}</Text>:null}
		</View>
		<View>
    <FlatList
		showsVerticalScrollIndicator={false}
		data={provideData()}
		onEndReached={()=>handleLoadMore()}
		onEndReachedThreshold={5}
		onRefresh={()=>api()}
		refreshing={refresh}
		renderItem={({item}) =>
		<RestaurantsListItem onPress={()=>props.navigation.navigate("Menu",{reviews:item.reviews,title:item.title,desc:item.desc,rating:item.rating,image:item.featured_image,rating_color:item.rating_color})}
		style={{height:120,borderColor:"white",borderWidth:1,backgroundColor:"white",flexDirection:'row',justifyContent:"space-between"}}
		id={item.id}
    title={item.title}
    price={item.price}
    rating={item.rating}
    desc={item.desc}
    image={item.featured_image}
		rating_color={item.rating_color}
    />}
		/>
		</View>
    </View>
		);
	}

export default SearchScreen;
