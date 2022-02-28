import React from "react";
import { Text } from "react-native";
import textStyle from "../../../styles/textStyle";

const CartTxt = ({value}) =>{
    return(
        <Text style={textStyle.itemNameTxt}>{value}</Text>
    )
}

export default CartTxt;