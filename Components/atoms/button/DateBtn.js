import React from 'react'
import { Pressable } from 'react-native'
import buttonStyle from '../../../styles/buttonStyle'
const DateBtn = (props) =>{
    return(
        <Pressable style={buttonStyle.dateBtn}>{props.children}</Pressable>
    )
}

export default DateBtn;