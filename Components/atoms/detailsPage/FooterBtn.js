import React from 'react'
import { Pressable } from 'react-native'
import buttonStyle from '../../../styles/buttonStyle'
const FooterBtn = (props) =>{
    return(
        <Pressable {...props} style={buttonStyle.footerBtn}>
            {props.children}
        </Pressable>
    )
}

export default FooterBtn;