import * as React from 'react';
import { Text } from 'react-native';
import textStyle from '../../../styles/textStyle';
const ItemPriceTxt = ({name}) =>{
    return(
        <Text style={textStyle.itemPriceTxt}>{name}</Text>
    )
}
export default ItemPriceTxt;