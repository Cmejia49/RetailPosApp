import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Animated } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

import buttonStyle from '../../styles/buttonStyle';
import textStyle from '../../styles/textStyle';
const CatButton = ({name, onPress}) =>{
    return(
    <Pressable style={buttonStyle.catBtn}
        onPress={onPress}
    >
        <Text style={textStyle.catTxt}>{name}</Text>
    </Pressable>
    )
}

export default CatButton;