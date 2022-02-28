import * as React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import imageStyle from '../../styles/imageStyle';
const ItemImage = ({source}) =>{
    return(
        <Image source={source} style={imageStyle.detailImg}/>
    )
}
export default ItemImage;