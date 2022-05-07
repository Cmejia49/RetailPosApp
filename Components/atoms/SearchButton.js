import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import {GetProductUrl} from '../../Service/URLstring'
import useApi from '../../Service/ApiContext';
import { useFocusEffect } from '@react-navigation/native';
import {fetchByName} from '../../Service/FetchService'
const SearchButton = ({name}) =>{
    const {getProduct,error,searchValue,reset,filterPageName,header,getHeader} = useApi();

    const searchProduct = async()=>{
        console.debug(searchValue)
        try{
            await fetchByName(searchValue,filterPageName)
            .then(res =>{
                getHeader(res[0]);
               getProduct(res[1]);
             })
        }catch(ex){
            error(ex)
        }

    }

    useFocusEffect(
        React.useCallback(()=>{
            if(header.Type ==="FILTERBYNAME"){
                searchProduct();
            }
        },[filterPageName])
        );
    return(
    <AntDesign.Button
     name = {name}
     size={24} 
     backgroundColor = 'rgba(255, 255, 255,0.65)'
     color='black'
     iconStyle={
     {marginRight: 0,
      fontWeight:'bold',
     }
    }
    onPress={()=>{
        reset();
        searchProduct();
    }}
    />

    )
}

export default SearchButton;