import React from 'react'
import { Text } from 'react-native'
import textStyle from '../../../styles/textStyle'
const DateTxt = ({value}) =>{
    return(
        <Text style={textStyle.dateTxt}>{value}</Text>
    )
}

export default DateTxt;