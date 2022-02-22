import React from 'react'
import { Text } from 'react-native'
import textStyle from '../../../styles/textStyle'
const DateLabel = ({value}) =>{
    return(
        <Text style={textStyle.dateLabel}>{value}</Text>
    )
}

export default DateLabel;