import React from 'react'
import { Pressable } from 'react-native'

const QntBtn = (props) =>{
    return(
        <Pressable
        {...props}>
            {props.children}
        </Pressable>
    )
}

export default QntBtn;