import React from'react'
import {View,Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FlalistTxt from '../../atoms/text/FlatlistTxt'

import containerStyle from '../../../styles/containerStyle'
import useSale from '../../../Service/SaleContext'

const DamageContent = ({item}) =>{
    const{margin,getTotal,
        getCost,getMargin,getQuantity,cost,reset} = useSale();
        React.useEffect(()=>{
        
            getTotal(item.price)
            getCost(item.itemCode)
            getQuantity(item.quantity)
            getMargin();
            return()=>{
                reset();
            }
        },[margin])
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
                <FlalistTxt value={item.itemCode}/>
                <FlalistTxt value={cost * item.quantity}/>
    
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default DamageContent;