import React from "react";
import { View,Text,Pressable } from "react-native";
import QntBtn from "../../atoms/detailsPage/QntBtn";
import QntBtnLabel from "../../atoms/detailsPage/QntBtnLabel";
import QntTextInput from "../../atoms/detailsPage/QntTextInput";
import StockTxt from "../../atoms/detailsPage/StockTxt";
import buttonStyle from "../../../styles/buttonStyle";

import useTheme from "../../../Service/ThemeContext";

const CartQntGrp = ({quantity,id,stock}) =>{
    const {increment,decrement} = useTheme();

    return(
        <View style={{flexDirection:'row'}}>
            <QntBtn
              onPress={()=>decrement(id)}
             style={buttonStyle.minusBtn}>
                <QntBtnLabel value={"-"}/>
            </QntBtn>
            <Text style={{paddingHorizontal:25,borderWidth:1, textAlignVertical:'center'}}>{quantity}</Text>
            <QntBtn
            onPress={()=>increment(id)}
            style={buttonStyle.addBtn}>
                <QntBtnLabel value={"+"}/>
            </QntBtn>
            <View style={{flexDirection:'row', margin:5,alignItems:'flex-end'}}
                    textAlignVertical={'bottom'}
                    >
            <StockTxt value={stock}/>
            </View>
        </View>
    )
}

export default CartQntGrp;