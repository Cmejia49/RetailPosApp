import * as React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'
import buttonStyle from "../../../styles/buttonStyle";
import { GetDetail } from '../../../Service/URLstring';
import textStyle from '../../../styles/textStyle';
const CatBtnGrp = () =>{
  const {categories,getProduct,error,callEndpoint,reset,getHeader,filterPage} = useApi();
        const [clickedId, setClickedId] =  React.useState(0);
        const [activeId, setActiveId] =  React.useState(0);
        const [catName,setCatName] = React.useState('');
        const handleClick = (categoryName, id) => {
            setClickedId(id);
            setCatName(categoryName)
            if(clickedId === id){
            if(activeId == 0){
              reset();
              setActiveId(1)
              searchByCat();
            }else{
              setActiveId(0)
            }
          }else{
            reset();
              setActiveId(1)
              searchByCat();
          }
          };

          const searchByCat=async()=>{
            try {
              callEndpoint();
              const response = await fetch(GetDetail+"catName?catName="+catName+"&PageNumber="+filterPage+"&Type=FILTER&PageSize=2");
              const json = await response.json();
              const  head = await JSON.parse(response.headers.get("x-pagination"));
              console.debug(head);
              if(response.status == 200){
                  getProduct(json)
                  getHeader(head);
              }
           } catch (ex) {
            error(ex)
           } 
          }

          React.useEffect(()=>{
            searchByCat()
          },[filterPage])
        return (
          <>
            {categories.map((item,i) => (
            <View key={item.catId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <CatButton 
                  onPress={(event) =>{
                    handleClick(item.categoryName,i)
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