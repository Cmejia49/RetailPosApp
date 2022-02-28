import React from 'react'
import { View } from 'react-native'

import DateBtn from '../../atoms/button/DateBtn'
import DateTxt from '../../atoms/button/DateTxt'
import DateLabel from '../../atoms/button/DateLabel'
import { AntDesign } from '@expo/vector-icons'; 
const DateGrp = (props) =>{
    return(
        <View>
            <DateBtn onPress = {props.onPress}>
              <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                  <AntDesign name="calendar" size={25} color="black" margin={10} />
                    <DateTxt value={props.text}/>
              </View>
            </DateBtn>  
        </View>
    )
}

export default DateGrp;