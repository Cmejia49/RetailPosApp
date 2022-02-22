import React from "react";
import { Text } from "react-native";
import textStyle from "../../../styles/textStyle";
const FlalistTxt = ({value}) =>{
    return(
        <Text style={textStyle.flatlistTxt}>{value}</Text>
    )
}

export default FlalistTxt;