import * as React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'
import buttonStyle from "../../../styles/buttonStyle";
import { GetDetail } from '../../../Service/URLstring';
import textStyle from '../../../styles/textStyle';
const CatBtnGrp = () =>{
  const {categories,getProduct,error,callEndpoint,reset,getHeader,filterPageCat,header,getCatName,catName} = useApi();
        const [clickedId, setClickedId] =  React.useState(-1);
        const [activeId, setActiveId] =  React.useState(0);

        const handleClick =(id) => {
            setClickedId(id);
            console.debug(clickedId + " ad" + activeId);
            if(clickedId === id){
            if(activeId == 0){
              reset();
              searchByCat();
              setActiveId(1)

            }else{
              setActiveId(0)
            }
          }else{
            reset();
            searchByCat();
              setActiveId(1)
          }
          };

          const searchByCat=async()=>{
            try {
              console.debug("searchByCat"+catName);
              const response = await fetch(GetDetail+"CatName?CatName="+catName+"&PageNumber="+filterPageCat+"&Type=FILTERBYCAT&PageSize=2");
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
            if(header.Type == "FILTERBYCAT" || activeId != 0){
              callEndpoint();
              searchByCat();
            }
          },[filterPageCat])
        return (
          <>
            {categories.map((item,i) => (
            <View key={item.catId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <CatButton 
                  onPress={() =>{
                    getCatName(item.categoryName);
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