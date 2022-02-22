import * as React from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';


import Index from "./navigations/Index"
export default function App(){
  return(
    <Index/>
  )
}


