import * as React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';

import SearchButton from '../atoms/SearchButton';
import SearchInput from '../atoms/SearchInput';
const SearchForm  = () =>{
    return(
        <View style={{flexDirection:'row'}}>
            <SearchButton name={"search1"}/>
            <SearchInput/>
        </View>
    )
}

export default SearchForm;