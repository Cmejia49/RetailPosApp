import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { max } from 'react-native-reanimated';
import textInputStyle from '../../../styles/textInputStyle'
import useExpenses from '../../../Service/ExpensesContext'
const MultiLineInput = () =>{
   const {getDetail,detail} = useExpenses()
    return(
        <TextInput   
        multiline
  numberOfLines={4}
  onChangeText={text => getDetail(text)}
  value={detail}
  maxLength={40}
   style={textInputStyle.multiLineInput}/>
    )
}

export default MultiLineInput;