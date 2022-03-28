import React from 'react'
import {View} from 'react-native'
import useTheme from '../../../Service/ThemeContext'
import Detail from '../../molecules/addExpensesPage/Detail'
import Date from '../../molecules/dateReport/Date'

const Content = () =>{
    const {date} = useTheme();
    return(
        <View style={{flex:1, margin:20}}>
            <Date value={date}/>
            <Detail/>
        </View>
    )
}

export default Content;