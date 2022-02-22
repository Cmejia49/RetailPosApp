import React from 'react'
import { Pressable } from 'react-native'
import buttonStyle from '../../../styles/buttonStyle'
const FooterBtn = (props) =>{
    return(
        <Pressable 
        onPress={props.event}
        style={buttonStyle.cartFooterBtn}>
            {props.children}
        </Pressable>
    )
}

export default FooterBtn;