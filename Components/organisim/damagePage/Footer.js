import React from 'react'
import {View,Text} from 'react-native'
import containerStyle from '../../../styles/containerStyle'
import textStyle from '../../../styles/textStyle'
import useSale from '../../../Service/SaleContext'
import useDamage from '../../../Service/DamageContext'
const Footer =()=>{
    const {totalCost}=useDamage();
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
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
    }}>
 
        <Text style={textStyle.summaryTxt}>{totalCost}</Text> 
    </View>
  </View>
        </View>
    )
}

export default Footer;