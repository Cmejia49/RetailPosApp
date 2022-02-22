import React from'react'
import {View,Text} from 'react-native'
import FlalistTxt from '../../atoms/text/FlatlistTxt'

import containerStyle from '../../../styles/containerStyle'
const HeadeFlatlist = (props) =>{
    return(
        <View style={containerStyle.flHeaderContainer}>
                <View style={{flex:1, flexWrap:'wrap',}}>
                <Text style={{marginLeft:10}}>{props.value}</Text>
          </View>
        <View style={{
            flex:1,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'flex-start',
            justifyContent:'space-evenly',
        }}>

            {props.children}
        </View>
        </View>
    )
}

export default HeadeFlatlist;