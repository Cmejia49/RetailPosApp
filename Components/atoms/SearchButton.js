import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Animated } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

import buttonStyle from '../../styles/buttonStyle';
const SearchButton = ({name, onPress}) =>{
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
    onPress={onPress}
    />

    )
}

export default SearchButton;