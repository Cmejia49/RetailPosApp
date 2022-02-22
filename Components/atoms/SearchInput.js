
import * as React from 'react';
import {TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import textInputStyle from '../../styles/textInputStyle';
const SearchInput = ({value}) =>{
    return(
    <TextInput style={textInputStyle.srchTxtInput} 
        placeholder="Search for..."
    />
    )
}

export default SearchInput;