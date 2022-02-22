import React from'react'
import {View,Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FlalistTxt from '../../atoms/text/FlatlistTxt'

import containerStyle from '../../../styles/containerStyle'
const ContentFlatlist = (props) =>{
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.flContentContainer}>
                <View style={{flex:1, flexWrap:'wrap',}}>
                <Text style={{marginLeft:props.margin}}>{props.value}</Text>
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
        </TouchableWithoutFeedback>
    )
}

export default ContentFlatlist;