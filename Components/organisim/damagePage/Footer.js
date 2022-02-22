import React from 'react'
import {View,Text} from 'react-native'
import containerStyle from '../../../styles/containerStyle'
import textStyle from '../../../styles/textStyle'

const Footer =({value1,value2,value3,value4})=>{
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

        <Text style={textStyle.summaryTxt}>60</Text> 
        <Text style={textStyle.summaryTxt}>900</Text> 
        <Text style={textStyle.summaryTxt}>ESSS</Text> 
        <Text style={textStyle.summaryTxt}>3500</Text> 
    </View>
  </View>
        </View>
    )
}

export default Footer;