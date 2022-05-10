import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import textInputStyle from '../../../styles/textInputStyle'

const AmountInput = (props) =>{
    return(
        <TextInput 
        placeholder='ENTER AMOUNT'
        style={textInputStyle.inputTxt}
        {...props}
        />
    )
}

export default AmountInput;