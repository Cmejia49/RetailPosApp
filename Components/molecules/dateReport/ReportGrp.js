import React from 'react'
import { View } from 'react-native'

import DateBtn from '../../atoms/button/DateBtn'
import DateTxt from '../../atoms/button/DateTxt'
import DateLabel from '../../atoms/button/DateLabel'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
const ReportGrp = () =>{
    return(
        <View>
              <DateBtn>
              <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                  <AntDesign name="calendar" size={25} color="black" margin={10} />
                    <DateTxt value={"Today"}/>
                    <MaterialIcons name="keyboard-arrow-down" size={25} color="black" stleic/>
                  </View>
              </DateBtn>  
        </View>
    )
}

export default ReportGrp;