import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import {GetProductUrl} from '../../Service/URLstring'
import useApi from '../../Service/ApiContext';
import { useFocusEffect } from '@react-navigation/native';
import {fetchByName} from '../../Service/FetchService'
import debounce from 'lodash.debounce';
const SearchButton = ({name}) =>{
    const {getProduct,error,searchValue,reset,filterPageName,header,getHeader,token,callEndpoint} = useApi();

    	// highlight-starts
	const debouncedSave = React.useCallback(
		debounce(nextValue => getProduct(nextValue), 1000),
		[], // will be created only once initially
	);
	// highlight-ends
    const searchProduct = async()=>{
        try{
            await fetchByName(searchValue,filterPageName,token)
            .then(res =>{
                getHeader(res[0]);
                debouncedSave(res[1]);
             })
        }catch(ex){
            error(ex)
        }

    }

    useFocusEffect(
        React.useCallback(()=>{
            let isSubscribe = true;
            if(isSubscribe){
            if(header.Type ==="FILTERBYNAME"){
                searchProduct();
            }
        }
        return () => {
            isSubscribe = false;
            reset();
          };
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
    onPress={async()=>{
        callEndpoint();
       await reset();
       await searchProduct();
    }}
    />

    )
}

export default SearchButton;