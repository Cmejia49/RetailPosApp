import React from 'react'
import { Text } from 'react-native'
import textStyle from '../../../styles/textStyle'
const ItemNameTxt = ({value}) =>{
    return(
        <Text style={textStyle.detailNameTxt}>{value}</Text>
    )
}

export default ItemNameTxt