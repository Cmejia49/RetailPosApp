import React from 'react'
import { Text } from 'react-native'
import textStyle from '../../../styles/textStyle'
const ItemPriceTxt = ({value}) =>{
    return(
        <Text style={textStyle.detailPriceTxt}>{value}</Text>
    )
}

export default ItemPriceTxt