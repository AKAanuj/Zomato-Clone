import React,{useState} from 'react';
import {Text,
  TextInput,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Platform,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Firebase from '../api/firebaseconfig';

const {height,width}=Dimensions.get("window");
const LoginScreen=(props)=>
{
  const [borderState,changeborderState]=useState("email");
  const [email,enterEmail] = useState("");
  const [password,enterPassword] = useState("");

  const Authenticate=()=>
  {
  Firebase.auth()
          .signInWithEmailAndPassword(email,password)
          .then(()=>props.navigation.navigate("tabNavigator"))
          .catch(error=>console.log(error))
  }

  return (
      <View style={styles.background}>
      <StatusBar backgroundColor="red"/>
        <View style={styles.logintab}>
        <Text style={styles.logintext}>Log In</Text>

        <View style={{alignItems:"center",marginTop:20}}>

        <View style={{marginBottom:20,marginHorizontal:30,height:50,alignItems:"center",flexDirection:"row",borderWidth:2,borderRadius:10,borderColor:borderState=="email"?"red":"#dddddd"}}>
        <Icon style={{marginHorizontal:10}} name="person" size={24} color="#dddddd"/>
          <TextInput
          onChangeText={value=>enterEmail(value)}
          onFocus={()=>changeborderState('email')}
          style={{flex:1}}
          placeholder="Email"/>
        </View>

        <View style={{marginHorizontal:30,alignItems:"center",height:50,flexDirection:"row",borderWidth:2,borderRadius:10,borderColor:borderState=="password"?"red":"#dddddd"}}>
        <Icon style={{marginHorizontal:10}} name="lock" size={24} color="#dddddd"/>
          <TextInput
          secureTextEntry
          onChangeText={value=>enterPassword(value)}
          style={{flex:1}}
          onFocus={()=>changeborderState('password')}
          placeholder="Password"/>
        </View>

        </View>

        <TouchableHighlight style={{...styles.loginbuttonstyle,elevation:10}} underlayColor="red" onPress={()=>Authenticate()}>
        <View style={{flex:1,alignItems:"center"}}>
            <Text style={{color:"white",fontSize:10,fontWeight:"bold"}}>Log In</Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="transparent" onPress={()=>props.navigation.navigate("Signup")}>
        <Text style={{marginBottom:10,color:"grey",fontSize:12}}>Don't have an account yet? Sign Up</Text>
        </TouchableHighlight>

        </View>
      </View>
  );
}

const styles=StyleSheet.create(
  {
      background:
      {
        width:width,
        height:height+30,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
      },
      logintab:
      {
        borderWidth:1,
        borderColor:"#dddddd",
        marginTop:50,
        alignItems:"center",
        height:height/1.5,
        width:width/1.2,
        backgroundColor:"white",
        elevation:10,
        borderRadius:10,
        justifyContent:"space-around"
      },
      logintext:
      {
        fontSize:18,
        fontWeight:"bold",
        color:"rgb(210,90,90)",
      },
      loginbuttonstyle:
      {
        marginHorizontal:30,
        borderRadius:10,
        height:50,
        flexDirection:"row",
        backgroundColor:"rgb(200,50,50)",
        alignItems:"center",
        justifyContent:"center"
      }
  }
);
export default LoginScreen;
