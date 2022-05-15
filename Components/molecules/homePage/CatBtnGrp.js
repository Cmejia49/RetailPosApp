import * as React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'
import buttonStyle from "../../../styles/buttonStyle";
import { useFocusEffect } from '@react-navigation/native';
import {fetchByCat,fetchProduct} from '../../../Service/FetchService';
import debounce from 'lodash.debounce';
const CatBtnGrp = () =>{
  const {categories,getProduct,error,callEndpoint,reset,getHeader,filterPageCat,header,isLoading,token,page} = useApi();
        const [clickedId, setClickedId] =  React.useState(-1);
        const [activeId, setActiveId] =  React.useState(0);
        const ref = React.useRef();
        
	// highlight-starts
	const debouncedSave = React.useCallback(
		debounce(nextValue => getProduct(nextValue), 1000),
		[], // will be created only once initially
	);
	// highlight-ends
        const handleClick = async(id) => {
           setClickedId(id);
          if(clickedId != id){
            callEndpoint();
            setActiveId(1)
            await reset();
            await searchByCat();

          
        }else{
          callEndpoint();
            setActiveId(0)
            setClickedId(-1)
            await reset();
            await sige();
        }
          };

          const sige = async () => {
            try{
                await fetchProduct(page,token).then(res =>{
                         getHeader(res[0]);
                         debouncedSave(res[1]);
                      }).catch(err=>{
                        error(err)
                      })
               }catch(ex){
                      error(ex);
               }
           
              
         }

          const searchByCat=async()=>{
            console.debug(ref.current);
              try{
                await fetchByCat(ref.current,filterPageCat,token)
                .then(res =>{
                  getHeader(res[0]);
                  debouncedSave(res[1]);
               })
             }catch(ex){
               error(ex);
             }
            }
          
          useFocusEffect(
              React.useCallback(()=>{
                let isSubscribe = true;
                if(isSubscribe){
                if(header.Type == "FILTERBYCAT"){
                   searchByCat();
                }
              }
              return () => {
                isSubscribe = false;
              };
              },[filterPageCat])
              )
              
        return (
          <>

            {categories.map((item,i) => (
            <View key={item.catId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <CatButton 
                  onPress={() =>{
                     ref.current = item.categoryName;
                     handleClick(i);
                  }}
                  style={(i == clickedId && activeId == 1 )? buttonStyle.buttonActive : buttonStyle.variationBtn}>
                    <Text>{item.categoryName}</Text>
                    </CatButton>

            </View>
            ))}
          </>
        ) 
}

export default CatBtnGrp;