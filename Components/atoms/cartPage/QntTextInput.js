import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
const QntTextInput = (props)=>{
    const [stockCount,setStockCount] = React.useState(0);
  return(
    <TextInput {...props}
textAlign={'center'} textAlignVertical={'center'}/>
  )
}

export default QntTextInput;