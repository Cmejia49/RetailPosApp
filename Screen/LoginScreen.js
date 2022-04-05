
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Login } from "../Service/URLstring";
import useApi from "../Service/ApiContext";
import useDetailOper from "../Service/DetailContext";
const LoginScreen =()=>{
  const{getToken,error} = useApi();
  const{getStoreFid} = useDetailOper();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const userLogin = async () =>{
      try {
        const response = await fetch(Login,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            Username:email,
            Password:password
          })
        });
        const json = await response.json();
        if(response.status === 200){
          await SecureStore.setItemAsync("Token", JSON.stringify(json));
          getToken(json.jwtToken)
          getStoreFid(json.storeFid);
        
        }
      
       } catch (ex) {
         error(ex)
       } 
    }
    return (
      <View style={styles.container}>
      
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username."
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
   
        <TouchableOpacity onPress={()=>userLogin()} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#fff",
      borderWidth:1.5,
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#000",
    },

    loginText:{
      color:"#fff"
    }
  });

  export default LoginScreen;