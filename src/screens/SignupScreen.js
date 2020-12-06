import React,{useState} from 'react';
import {Text,
  TextInput,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Platform,StatusBar,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Firebase from '../api/firebaseconfig';

const {height,width}=Dimensions.get("window");
const SignupScreen=(props)=>
{
  const [borderState,changeborderState]=useState("email");
  const [email,enterEmail] = useState("");
  const [password,enterPassword] = useState("");
  const [confirmPassword,enterConfirmPassword] = useState("");
  const Signup=()=>
  {
    if(confirmPassword==password)
    {
  Firebase.auth()
          .createUserWithEmailAndPassword(email,password)
          .then(()=>{Alert.alert("Sign up successful!");
          props.navigation.navigate("Login");})
          .catch(error=>Alert.alert(""+error))
  }
  else {
    Alert.alert("Password and Confirm Password must be same");
  }
}

  return (
      <View style={styles.background}>
      <StatusBar backgroundColor="red"/>
        <View style={styles.logintab}>
        <Text style={styles.logintext}>Sign Up</Text>

        <View style={{alignItems:"center",marginTop:20}}>

        <View style={{marginBottom:20,marginHorizontal:30,height:50,alignItems:"center",flexDirection:"row",borderWidth:2,borderRadius:10,borderColor:borderState=="email"?"red":"#dddddd"}}>
        <Icon style={{marginHorizontal:10}} name="person" size={24} color="#dddddd"/>
          <TextInput
          onChangeText={value=>enterEmail(value)}
          onFocus={()=>changeborderState('email')}
          style={{flex:1}}
          placeholder="Email"/>
        </View>

        <View style={{marginBottom:20,marginHorizontal:30,alignItems:"center",height:50,flexDirection:"row",borderWidth:2,borderRadius:10,borderColor:borderState=="password"?"red":"#dddddd"}}>
        <Icon style={{marginHorizontal:10}} name="lock" size={24} color="#dddddd"/>
          <TextInput
          secureTextEntry
          onChangeText={value=>enterPassword(value)}
          style={{flex:1}}
          onFocus={()=>changeborderState('password')}
          placeholder="Password"/>
        </View>

        <View style={{marginHorizontal:30,alignItems:"center",height:50,flexDirection:"row",borderWidth:2,borderRadius:10,borderColor:borderState=="confirmpassword"?"red":"#dddddd"}}>
        <Icon style={{marginHorizontal:10}} name="lock" size={24} color="#dddddd"/>
          <TextInput
          secureTextEntry
          onChangeText={value=>enterConfirmPassword(value)}
          style={{flex:1}}
          onFocus={()=>changeborderState('confirmpassword')}
          placeholder="Confirm Password"/>
        </View>

        </View>

        <TouchableHighlight style={{...styles.loginbuttonstyle,elevation:10}} underlayColor="red" onPress={()=>Signup()}>
        <View style={{flex:1,alignItems:"center"}}>
            <Text style={{color:"white",fontSize:10,fontWeight:"bold"}}>Sign Up</Text>
        </View>
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
export default SignupScreen;
