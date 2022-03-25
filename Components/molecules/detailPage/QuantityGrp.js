import React from "react";
import { View,Text,Pressable } from "react-native";
import QntBtn from "../../atoms/detailsPage/QntBtn";
import QntBtnLabel from "../../atoms/detailsPage/QntBtnLabel";
import StockTxt from "../../atoms/detailsPage/StockTxt";
import buttonStyle from "../../../styles/buttonStyle";

import useDetailOper from "../../../Service/DetailContext"
import useApi from "../../../Service/ApiContext";
const QuantityGrp = () =>{
const{increment,decrement,quantity,stock} = useDetailOper()


    return(
        <View style={{flexDirection:'row'}}>
            <QntBtn
              onPress={()=>decrement()}
             style={buttonStyle.minusBtn}>
                <QntBtnLabel value={"-"}/>
            </QntBtn>
            <Text style={{paddingHorizontal:25,borderWidth:1, textAlignVertical:'center'}}>{quantity}</Text>
            <QntBtn
            onPress={()=>increment()}
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

export default QuantityGrp;