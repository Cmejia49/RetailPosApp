import React from "react";
import { View } from "react-native";
import LabelTxt from "../../atoms/text/LabelTxt";
import AmountInput from "../../atoms/textInput/AmountInput";
import containerStyle from "../../../styles/containerStyle";

const Summary =() =>{
    return(
        <View style={containerStyle.middleContainer}>
            <LabelTxt>Number of Item:</LabelTxt>
            <LabelTxt>6</LabelTxt>
            <LabelTxt>Total Payment:</LabelTxt>
            <LabelTxt>$2600</LabelTxt>
            <LabelTxt>Amount Received</LabelTxt>
            <AmountInput value={"$0.00"}/>
        </View>
    )
}

export default Summary;