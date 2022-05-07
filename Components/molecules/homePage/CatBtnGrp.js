import * as React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'
import buttonStyle from "../../../styles/buttonStyle";
import { useFocusEffect } from '@react-navigation/native';
import {fetchByCat} from '../../../Service/FetchService';
const CatBtnGrp = () =>{
  const {categories,getProduct,error,callEndpoint,reset,getHeader,filterPageCat,header,isLoading} = useApi();
        const [clickedId, setClickedId] =  React.useState(-1);
        const [activeId, setActiveId] =  React.useState(0);
        const ref = React.useRef();
        const handleClick =(id) => {
           setClickedId(id);
          if(clickedId != id){
            reset();
            searchByCat();
            setActiveId(1)

          
        }else{

            setActiveId(1)
        }
          };


          const searchByCat=async()=>{
            console.debug(ref.current);
              try{
                await fetchByCat(ref.current,filterPageCat)
                .then(res =>{
                  getHeader(res[0]);
                 getProduct(res[1]);
               })
             }catch(ex){
               error(ex);
             }
            }
          
          useFocusEffect(
              React.useCallback(()=>{
                if(header.Type == "FILTERBYCAT"){
                   searchByCat();
                }
                return()=>{}
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