import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const HeaderSrchBtn = ({onPress}) =>{
    return(
        <AntDesign.Button  name="search1"
        borderWidth={1} 
        size={24}
        backgroundColor = "#FFFFFF" 
        color="#000"
        iconStyle={
        {
         margin:0,
         marginRight:0
        }
        } 
        onPress={onPress}
        />
    )
}

export default HeaderSrchBtn;