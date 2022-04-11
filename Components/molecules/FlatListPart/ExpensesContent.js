import React from'react'
import {View,Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
import moment from 'moment'
import containerStyle from '../../../styles/containerStyle'
import useExpenses from '../../../Service/ExpensesContext'


const ExpensesContent = ({item}) =>{
    const {getTotalValue,reset} = useExpenses();
    
    React.useEffect(()=>{
        getTotalValue(item.value);
        return()=>{reset()}
    },[item])
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.flContentContainer}>
                <View style={{flex:1, flexWrap:'wrap',}}>
                <Text  
        
                 numberOfLines={1}
    adjustsFontSizeToFit style={{marginLeft:10}}>{item.detail}</Text>
          </View>
        <View style={{
            flex:1.2,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'flex-start',
            justifyContent:'space-evenly',
        }}>
                <FlalistTxt value={item.value}/>
                <FlalistTxt value={moment(item.dateOfExpenses).format('MM/DD/YYYY')}/>
    
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ExpensesContent;