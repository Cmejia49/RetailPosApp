import * as React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import useApi from '../../../Service/ApiContext';
import CatButton from '../../atoms/homePage/CatButton'

const CatBtnGrp = () =>{
  const{categories} = useApi();
        const [clickedId, setClickedId] =  React.useState(-1);
        const [activeId, setActiveId] =  React.useState(0);
        const handleClick = (event, id) => {
            setClickedId(id);
            if(clickedId === id){
            if(activeId == 0){
              setActiveId(1)
            }else{
              setActiveId(0)
            }
          }else{
              setActiveId(1)
          }
          };
        return (
          <>
            {categories.map((item,index) => (
            <View key={item.catId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <CatButton 
                  name={item.categoryName}
                  onPress={(event) => handleClick(event, item.catId)}/>
            </View>
            ))}
          </>
        ) 
}

export default CatBtnGrp;