import * as React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import CatButton from '../../atoms/homePage/CatButton'

const CatBtnGrp = ({ buttons }) =>{
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
            {buttons.map(item => (
                 <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
              <CatButton 
               key={item.id}
               name={item.title}
               onPress={(event) => handleClick(event, item.id)}/>
               </View>
            ))}
          </>
        ) 
}

export default CatBtnGrp;