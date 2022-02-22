import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import textInputStyle from '../../../styles/textInputStyle'

const AmountInput = ({value}) =>{
    return(
        <TextInput style={textInputStyle.inputTxt} value={value}/>
    )
}

export default AmountInput;