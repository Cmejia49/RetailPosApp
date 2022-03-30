import React from'react'
import {View,Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FlalistTxt from '../../atoms/text/FlatlistTxt'

import containerStyle from '../../../styles/containerStyle'
import useSale from '../../../Service/SaleContext'
const ContentFlatlist = ({item}) =>{
const{getTotal,
getCost,getMargin,getQuantity,reset,} = useSale();
React.useEffect(()=>{

    getCost(item.itemCode)
    getQuantity(item.quantity)
    getTotal(item.price)
    getMargin();
    return()=>{reset()}

},[item])
const converter =(str)=>{
    if(str == null){
        return 0;
    }
    let s = '';
    const shopCode = "SDANTEMOJI"
    for(let i = 0;i<str.length;i++)
    {
        for(let j =0;j<shopCode.length;j++)
        {
            if(str.charAt(i) == shopCode.charAt(j))
            {
             
                  s+=''+shopCode.indexOf(shopCode.charAt(j))
            }
        }
    }
    return s;
}
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.flContentContainer}>
                <View style={{flex:1, flexWrap:'wrap',}}>
                <Text  
        
                 numberOfLines={1}
    adjustsFontSizeToFit style={{marginLeft:10}}>{item.productName}</Text>
          </View>
        <View style={{
            flex:1.2,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'flex-start',
            justifyContent:'space-evenly',
        }}>
                <FlalistTxt value={item.quantity}/>
                <FlalistTxt value={item.price}/>
                <FlalistTxt value={item.price*item.quantity}/>
                <FlalistTxt value={converter(item.itemCode)}/>
                <FlalistTxt value={(item.price * item.quantity - converter(item.itemCode)*item.quantity)}/>
    
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ContentFlatlist;