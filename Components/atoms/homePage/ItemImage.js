import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import imageStyle from '../../../styles/imageStyle';
const ItemImage = ({source}) =>{
    return(
        <Image source={source} style={imageStyle.cardImg}/>
    )
}
export default ItemImage;