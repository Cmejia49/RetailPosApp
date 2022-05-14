import React from "react";
import { View,Text,TouchableWithoutFeedback,Keyboard } from "react-native";
import AmountInput from "../../atoms/textInput/AmountInput";
import containerStyle from "../../../styles/containerStyle";
import MultiLineInput from "../../atoms/textInput/MultiLineInput";
import useExpenses from "../../../Service/ExpensesContext"
const Detail =() =>{
    const {getValue ,value} = useExpenses()
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={containerStyle.middleContainer}>
                <AmountInput 
             onChangeText={x => getValue(x)}
             value={value}/>
            <MultiLineInput/>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Detail;