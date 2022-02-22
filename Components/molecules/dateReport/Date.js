import React from "react";
import { View } from "react-native";
import LabelTxt from "../../atoms/text/LabelTxt";
import textStyle from "../../../styles/textStyle";
import containerStyle from "../../../styles/containerStyle";
const Date = (props) =>{
    return(
        <View style={containerStyle.dateContainer}>
            <LabelTxt style={textStyle.defTxt}>Date: {props.value}</LabelTxt>
        </View>
    )
}

export default Date;