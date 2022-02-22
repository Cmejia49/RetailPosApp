import React from 'react'
import {View} from 'react-native'
import Summary from '../../molecules/checkouPage/Summary'
import Date from '../../molecules/dateReport/Date'
import Button from '../../atoms/button/Button'

const Content = () =>{
    return(
        <View style={{flex:1, margin:20}}>
            <Date value={"01-02-01"}/>
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
                <Button value={"EXACT AMOUNT"}/>
            </View>
        </View>
    )
}

export default Content;