import * as React from 'react';
import { View,TouchableWithoutFeedback,Text,Image } from 'react-native';
import 'react-native-gesture-handler';
import useApi from "../../../Service/ApiContext";
import ItemImage from '../../atoms/homePage/ItemImage';
import ItemNameTxt from'../../atoms/homePage/ItemNameTxt';
import ItemPriceTxt from '../../atoms/homePage/ItemPriceTxt';
import containerStyle from '../../../styles/containerStyle';
import {ipAddress} from '../../../Service/URLstring';
import imageStyle from '../../../styles/imageStyle';
import ExpoFastImage from 'expo-fast-image'

const ProductCard = ({item,onPress}) =>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={containerStyle.cardContainer}>
            <View  style={containerStyle.cardImgContainer}>
            <ExpoFastImage
                uri={ipAddress+"/wwwroot/uploads/"+item.imageName}
                cacheKey={item.itemId}
                style={imageStyle.cardImg}
            />
            </View>
            <View  style={containerStyle.cardInfoContainer}>
                <ItemNameTxt  name={item.itemName}/>
                <ItemPriceTxt name="$150.00"/>
            </View>
        </View>
      </TouchableWithoutFeedback>
        )
}

export default ProductCard;