import React from 'react'
import {View,Text} from 'react-native'
import useExpenses from '../../../Service/ExpensesContext'
import containerStyle from '../../../styles/containerStyle'
import textStyle from '../../../styles/textStyle'

const Footer =()=>{
    const{totalValue} = useExpenses();
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

        <Text style={textStyle.summaryTxt}>{totalValue}</Text> 
    </View>
  </View>
        </View>
    )
}

export default Footer;