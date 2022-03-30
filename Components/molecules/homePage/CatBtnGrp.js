import * as React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'
import buttonStyle from "../../../styles/buttonStyle";
import { GetDetail } from '../../../Service/URLstring';
import textStyle from '../../../styles/textStyle';
const CatBtnGrp = () =>{
  const {categories,getProduct,error,callEndpoint} = useApi();
        const [clickedId, setClickedId] =  React.useState(0);
        const [activeId, setActiveId] =  React.useState(0);
        const handleClick = (categoryName, id) => {
            setClickedId(id);
            if(clickedId === id){
            if(activeId == 0){
              setActiveId(1)
              searchByCat(categoryName)
            }else{
              setActiveId(0)
            }
          }else{
              setActiveId(1)
              searchByCat(categoryName)
          }
          };

          const searchByCat=async(categoryName)=>{
            try {
              callEndpoint();
              const response = await fetch(GetDetail+"catName?catName="+categoryName);
              const json = await response.json();
              if(response.status == 200){
                  getProduct(json);
              }
           } catch (ex) {
            error(ex)
           } 
          }
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