import React from'react'
import { Pressable, Text } from 'react-native'
import buttonStyle from '../../../styles/buttonStyle'
import textStyle from '../../../styles/textStyle'
const Button = (props) =>{
    return(
        <Pressable style={buttonStyle.defBtn} onPress={props.onPress}>
            <Text style={textStyle.buttonTxT}>{props.value}</Text>
        </Pressable>
    )
}
export default Button;