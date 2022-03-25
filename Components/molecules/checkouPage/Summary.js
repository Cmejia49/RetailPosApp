import React from "react";
import { View } from "react-native";
import LabelTxt from "../../atoms/text/LabelTxt";
import AmountInput from "../../atoms/textInput/AmountInput";
import containerStyle from "../../../styles/containerStyle";
import useTheme from "../../../Service/ThemeContext";

const Summary =() =>{
    const{amtReceive, getChange,total,totalItem} = useTheme()

    return(
        <View style={containerStyle.middleContainer}>
            <LabelTxt>Number of Item:</LabelTxt>
            <LabelTxt>{totalItem}</LabelTxt>
            <LabelTxt>Total Payment:</LabelTxt>
            <LabelTxt>${total}</LabelTxt>
            <LabelTxt>Amount Received</LabelTxt>
            <AmountInput 
             onChangeText={x => getChange(x)}
             value={amtReceive}/>
        </View>
    )
}

export default Summary;