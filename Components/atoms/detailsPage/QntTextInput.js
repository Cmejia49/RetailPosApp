import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import textInputStyle from '../../../styles/textInputStyle';
const QntTextInput = (props)=>{
    const [stockCount,setStockCount] = React.useState(0);
  return(
    <TextInput {...props}
    style={textInputStyle.qntTxtInput}
    showSoftInputOnFocus={false} keyboardType="numeric"
textAlign={'center'} textAlignVertical={'center'}/>
  )
}

export default QntTextInput;