import * as React from 'react';
import { Image } from 'react-native';
import imageStyle from '../../../styles/imageStyle';
const ItemImage = ({source}) =>{
    return(
        <Image source={source} style={imageStyle.cardImg}/>
    )
}
export default ItemImage;