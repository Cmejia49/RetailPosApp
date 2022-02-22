import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from 'react-native';
const HeaderCartBtn = (props) =>{
    return(
        <AntDesign.Button name="shoppingcart"  
        borderWidth={1} 
        size={24} 
        backgroundColor = "#FFFFFF" 
        color="black"
        iconStyle={
        {marginRight: 5,}
        } 
        onPress={props.onPress}
        >
            {props.children}
        </AntDesign.Button>
    )   
  
}

export default HeaderCartBtn;