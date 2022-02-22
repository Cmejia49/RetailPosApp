import React from "react";
import { Pressable } from "react-native";
import buttonStyle from "../../../styles/buttonStyle";
const VariationBtn = (props,{onPress}) =>{
    return(
        <Pressable 
            {...props}
        >
            {props.children}
        </Pressable>
    )
}

export default VariationBtn;