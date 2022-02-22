import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Animated } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

import ItemImage from '../../atoms/homePage/ItemImage';
import ItemNameTxt from'../../atoms/homePage/ItemNameTxt';
import ItemPriceTxt from '../../atoms/homePage/ItemPriceTxt';
import containerStyle from '../../../styles/containerStyle';
const ProductCard = (props) =>{
    return(
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={containerStyle.cardContainer}>
            <View style={containerStyle.cardImgContainer}>
             <ItemImage source={props.imgSrc}/> 
            </View>
            <View style={containerStyle.cardInfoContainer}>
                <ItemNameTxt name="Red Shoes"/>
                <ItemPriceTxt name="$150.00"/>
            </View>
        </View>
      </TouchableWithoutFeedback>
        )
}

export default ProductCard;