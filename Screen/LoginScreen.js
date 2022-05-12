/**
 * STEP 1 : CREATE TABLE WHEN START THE APP
 * STEP 2 : CHECK THE APP IF THERE IS INTERNET CONNECTION
 * STEP 3 : IF OFFLINE USE SQLITE SELECT ALL THE ITEM THAT YOU SAVE IN LOCAL DATABASE
 * STEP 4 : ELESE USE FETCH TO GET DATA FROM THE SERVER 
 * STEP 5 : SAVE EVERYTHING ON THE SQLITE WHEN ONLINE 
 * STEP 6 : UPDATE ALSO SQLITE AND SERVER WHEN ONLINE 
 * STEP 7 : IF THERE IS AN INTERNET AUTO FETCH DATA FROM CLIENT TO SERVER 
 * 
 * 
 * 
 * 
 * 
 * 
 */
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button
} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Login } from "../Service/URLstring";
import useApi from "../Service/ApiContext";
import useDetailOper from "../Service/DetailContext";
import NetInfo from '@react-native-community/netinfo';
import {createTable,insertItemFullVariation,insertItemSingleVariation,insertItem,
  getItem,getItemSingleVar,getItemMultiVar,selectItem,selectSale,createTableSale} from "../Service/SqliteService"

  
const LoginScreen =()=>{
  const{getToken,error,isConnected} = useApi();
  const{getStoreFid} = useDetailOper();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [connected, setConnected] = useState(false);

    
    const printTable = ()=>{
      selectItem(0);
    }

    const insert = () =>{
      insertItemFullVariation();
      insertItemSingleVariation();
      insertItem();
    }

    const printSale = async() =>{
      await getItem(3).then((value) =>{
        console.debug(JSON.stringify(value));
      })
      await getItemSingleVar(2).then((value) =>{
        console.debug(JSON.stringify(value));
      })
      await getItemMultiVar(1).then((value) =>{
        console.debug(JSON.stringify(value));
      })
    }
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

    React.useEffect(async()=>{
      await createTableSale();
      await createTable();
    },[])

    React.useEffect(()=>{
      const unsubscribe = NetInfo.addEventListener(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        isConnected(state.isConnected);
      });
      
      // To unsubscribe to these update, just use:
      return () => {
        // Unsubscribe to network state updates
        unsubscribe();
      };
    },[])
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'space-between'}}>
           <Button title="Print" onPress={()=>{printTable()}} />
             <Button title="Insert" onPress={()=>{insert()}} />
             <Button title="printSale" onPress={()=>{printSale()}} />
   
        </View>
            
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