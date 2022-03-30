import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Animated } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import {GetDetail} from '../../Service/URLstring'
import buttonStyle from '../../styles/buttonStyle';
import useApi from '../../Service/ApiContext';
const SearchButton = ({name, onPress}) =>{
    const {searchValue,getProduct,error,callEndpoint} = useApi();
    const search = async()=>{
        try {
            callEndpoint();
            const response = await fetch(GetDetail+"name?name=bags");
            const json = await response.json();
            if(response.status == 200){
                getProduct(json);
            }
         } catch (ex) {
          error(ex)
         } 
    }
    return(
    <AntDesign.Button
     name = {name}
     size={24} 
     backgroundColor = 'rgba(255, 255, 255,0.65)'
     color='black'
     iconStyle={
     {marginRight: 0,
      fontWeight:'bold',
     }
    }
    onPress={()=>search()}
    />

    )
}

export default SearchButton;