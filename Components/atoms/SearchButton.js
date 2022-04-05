import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import {GetDetail} from '../../Service/URLstring'
import useApi from '../../Service/ApiContext';

const SearchButton = ({name}) =>{
    const {getProduct,error,searchValue,reset,filterPageName,header,getHeader} = useApi();
    const search = async()=>{
        console.debug(searchValue);
        try {
            const response = await fetch(GetDetail+"name?ItemName="+searchValue+"&PageNumber="+filterPageName+"&Type=FILTERBYNAME&PageSize=2");
            const json = await response.json();
            const head = await JSON.parse(response.headers.get("x-pagination"));
            getHeader(head);
            console.debug(head);
            getProduct(json)
         } catch (ex) {
          error(ex)
         } 
    }

    React.useEffect(()=>{
        if(header.Type ==="FILTERBYNAME"){
            search();
        }
    },[filterPageName])
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
        search();
    }}
    />

    )
}

export default SearchButton;