import React from "react";
import { View } from "react-native";

import QntBtn from "../../atoms/detailsPage/QntBtn";
import QntBtnLabel from "../../atoms/detailsPage/QntBtnLabel";
import QntTextInput from "../../atoms/detailsPage/QntTextInput";
import StockTxt from "../../atoms/detailsPage/StockTxt";

import buttonStyle from "../../../styles/buttonStyle";
const QuantityGrp = (props) =>{
    const [stockCount = 12, setStockCount] = React.useState(0);

    const increment = () =>{
      setStockCount(stockCount + 1);
    }
    const decrement = () =>{
      setStockCount(stockCount - 1)
    }
    return(
        <View style={{flexDirection:'row'}}>
            <QntBtn
             onPress={decrement}
             style={buttonStyle.minusBtn}>
                <QntBtnLabel value={"-"}/>
            </QntBtn>
            <QntTextInput 
                {...props}
                onChangeText={newText => setStockCount(newText)}
               defaultValue={stockCount + ""}/>
            <QntBtn
              onPress={increment} 
            style={buttonStyle.addBtn}>
                <QntBtnLabel value={"+"}/>
            </QntBtn>
            <View style={{flexDirection:'row', margin:5,alignItems:'flex-end'}}
                    textAlignVertical={'bottom'}
                    >
            <StockTxt value={"500"}/>
            </View>
        </View>
    )
}

export default QuantityGrp;