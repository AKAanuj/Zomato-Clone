import React,{useState,useEffect} from 'react';
import {Dimensions,Text,
        ScrollView,
        SectionList,
        StyleSheet,
        View,
        TouchableOpacity,
        Image,
        StatusBar} from 'react-native';
import RatingReviewCard from "../components/RatingReviewCard";
import zomato from "../api/zomato";
import SectionListItem from "../components/SectionListItem";
import OpenCart from "../components/Menu/OpenCart";

const {height,width} = Dimensions.get("window");
const RestaurantMenu=({navigation})=>
{
  const restaurantReviews=navigation.getParam('reviews');
  const restaurantTitle=navigation.getParam('title');
  const restaurantRating=navigation.getParam('rating');
  const restaurantColor=navigation.getParam('rating_color');
  const restaurantImage=navigation.getParam('image');
  const restaurantDesc=navigation.getParam('desc');

  const [dishData,getDishes]=useState([]);
  const [openCartButton,changeCartButtonState]=useState(false);

  const order={};
  const getCounter=(datafromchild)=>
  {
    order[datafromchild[3]]={quantity:datafromchild[0],dish_name:datafromchild[1],price:datafromchild[2]};
    if(datafromchild[0]==0)
    {
      console.log("deleted");
      delete order[datafromchild[3]];
    }
    if(Object.getOwnPropertyNames(order).length==0)
    {
      changeCartButtonState(false);
    }
    else {
        changeCartButtonState(true);
    }
    console.log(Object.getOwnPropertyNames(order).length);
    console.log("------------------------------------");
  }
  console.log(openCartButton);

  function getRestaurantData()
  {
  zomato().then(response=>
    {
      let data=[];
      for(let i=0;i<response.data.daily_menus.length;i++)
      {
        let dishNames=[];
        let res=response.data.daily_menus[i];
        let title="";
        for(let j=0;j<res.daily_menu.dishes.length;j++)
        {
          dishNames.push({dish_id:res.daily_menu.dishes[j].dish.dish_id,
                        name:res.daily_menu.dishes[j].dish.name,
                        price:res.daily_menu.dishes[j].dish.price});
        }
        data.push({title:"Recommended",data:dishNames});
      }
      data.unshift({title:"Anuj",data:[{dish_id:0}]});
      getDishes(data);
      console.log("run");
    }).catch(error=>
    {
      console.log(error);
    });
  }

  useEffect(()=>getRestaurantData(),[]);

  return (
    <View style={styles.cuisinesListStyle}>
    <View style={styles.backgroundImage}>
    <Image source={{uri:restaurantImage ? restaurantImage:null}} style={{flex:1,width:width}}/>
    </View>

    <View style={styles.detailsCard}>
        <>
        <SectionList
        stickySectionHeadersEnabled
        sections={dishData}
        renderSectionHeader={({section})=>
          section.title=="Anuj" ? null:
          <View style={{height:20,backgroundColor:"rgb(255,250,245)",borderRadius:20}}></View>
        }
        renderItem={({item})=>item.dish_id==0?<View style={{flexDirection:'row',marginTop:10,justifyContent:"space-between"}}>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:20,marginLeft:10}}>{restaurantTitle}</Text>
        <Text style={{fontSize:10,marginLeft:10}}>{restaurantDesc}</Text>
        </View>
        <RatingReviewCard style={styles.ratingreviewCard} price="100" reviews={restaurantReviews} rating={restaurantRating} rating_color={"#"+restaurantColor}/>
        </View>:
        <SectionListItem item={item} getCounter={getCounter}/>
      }

        keyExtractor={(item,index)=>index}
        />
        </>

    </View>

    <View style={{flexDirection:"row",backgroundColor:"white",justifyContent:"center"}}>
    {openCartButton ? <OpenCart orderDetails={order} style={{width:width-10,height:55}}/> : null }
    </View>

    </View>

  );
}

const styles=StyleSheet.create(
  {
    ratingreviewCard:
    {
      marginBottom:10,
      marginRight:20,
      elevation:6,
      backgroundColor:"white",
      height:80,
      width:60,
      alignItems:"center",
      borderRadius:10,
      flexDirection:"column"
    },
  restaurantName:
  {
    marginLeft:20,
    marginTop:10,
    fontSize:20,
    fontWeight:"bold"
  },
  cuisinesListStyle:
  {
    //marginTop:StatusBar.currentHeight,
    justifyContent:"space-between",
    height:height,
    flexDirection:"column"
  },
  detailsCard:
  {
    position:"absolute",
    paddingBottom:70,
    top:StatusBar.currentHeight+35,
    width:width,
    height:height,
    borderRadius:15,
    backgroundColor:"rgb(255,250,245)",
  },
  backgroundImage:
  {
    height:height/4
  }
}
);

export default RestaurantMenu;
