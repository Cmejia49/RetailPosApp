import React from 'react'
import {View} from 'react-native'
import Summary from '../../molecules/checkouPage/Summary'
import Date from '../../molecules/dateReport/Date'
import Button from '../../atoms/button/Button'
import useTheme from '../../../Service/ThemeContext';
const Content = () =>{
    const{getChange,total,date} =useTheme();

    
    return(
        <View style={{flex:1, margin:20}}>
            <Date value={date}/>
            <Summary/>
            <View style={{ 
                flex:1,
            marginTop:20,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height:4,
          },
          shadowOpacity:1,
          shadowRadius:4,
          elevation:24, }}>
                <Button value={"EXACT AMOUNT"}
                 onPress={()=>getChange(total.toString())}/>
            </View>
        </View>
    )
}

export default Content;