import React from "react";
import { Text } from "react-native";
import textStyle from "../../../styles/textStyle";
const FlalistTxt = ({value}) =>{
    return(
        <Text adjustsFontSizeToFit={true}style={textStyle.flatlistTxt}>{value}</Text>
    )
}

export default FlalistTxt;