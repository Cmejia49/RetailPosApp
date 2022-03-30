
import * as React from 'react';
import {TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import textInputStyle from '../../styles/textInputStyle';
import useApi from '../../Service/ApiContext';
const SearchInput = () =>{
    const {search,searchValue}=useApi();
    return(
    <TextInput style={textInputStyle.srchTxtInput} 
        placeholder="Search for..."
        onChangeText={x => search(x)}
        value={searchValue}
    />
    )
}

export default SearchInput;