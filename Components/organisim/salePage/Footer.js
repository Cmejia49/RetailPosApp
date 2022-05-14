import React from 'react'
import {View,Text} from 'react-native'
import useSale from '../../../Service/SaleContext'
import containerStyle from '../../../styles/containerStyle'
import textStyle from '../../../styles/textStyle'

const Footer =()=>{
const{totalCost,totalQnt,total,totalMargin,totalPrice} = useSale();

    return(
        <View style={containerStyle.summaryContainer}>
        <View style={containerStyle.innerSummary}>
      <View style={{
          flex:1,
          flexWrap:'wrap',
      }}>
      <Text style={textStyle.summaryLabel} >
          Total
        </Text>
      </View>
    <View style={{
        flex:1.2,
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
    }}>

        <Text style={textStyle.summaryTxt}>{totalQnt}</Text> 
        <Text style={textStyle.summaryTxt}>{totalPrice}</Text> 
        <Text style={textStyle.summaryTxt}>{total}</Text> 
        <Text style={textStyle.summaryTxt}>{totalCost}</Text> 
        <Text style={textStyle.summaryTxt}>{totalMargin}</Text> 
    </View>
  </View>
        </View>
    )
}

export default Footer;