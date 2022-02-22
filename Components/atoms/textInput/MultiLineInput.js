import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { max } from 'react-native-reanimated';
import textInputStyle from '../../../styles/textInputStyle'
const MultiLineInput = () =>{
    const [value, onChangeText] = React.useState('Enter Here...');
    return(
        <TextInput   
        multiline
  numberOfLines={4}
  onChangeText={text => onChangeText(text)}
  value={value}
  maxLength={40}
   style={textInputStyle.multiLineInput}/>
    )
}

export default MultiLineInput;