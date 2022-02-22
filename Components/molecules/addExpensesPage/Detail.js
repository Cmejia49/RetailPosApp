import React from "react";
import { View,Text,TouchableWithoutFeedback,Keyboard } from "react-native";
import AmountInput from "../../atoms/textInput/AmountInput";
import containerStyle from "../../../styles/containerStyle";
import MultiLineInput from "../../atoms/textInput/MultiLineInput";
import textStyle from "../../../styles/textStyle";
const Detail =() =>{
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={containerStyle.middleContainer}>
                <Text style={textStyle.detailTxt}>Enter Amount:</Text>
            <AmountInput value={"$0.00"}/>
            <Text style={textStyle.detailTxt}>Enter Detail:</Text>
            <MultiLineInput/>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Detail;