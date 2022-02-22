import React from 'react'
import {View} from 'react-native'
import Detail from '../../molecules/addExpensesPage/Detail'
import Date from '../../molecules/dateReport/Date'

const Content = () =>{
    return(
        <View style={{flex:1, margin:20}}>
            <Date value={"01-02-01"}/>
            <Detail/>
        </View>
    )
}

export default Content;