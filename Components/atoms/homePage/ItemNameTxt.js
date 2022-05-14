import * as React from 'react';
import { Text } from 'react-native';
import textStyle from '../../../styles/textStyle';
const ItemNameTxt = ({name}) =>{
    return(
        <Text style={textStyle.itemNameTxt}>{name}</Text>
    )
}

export default ItemNameTxt;