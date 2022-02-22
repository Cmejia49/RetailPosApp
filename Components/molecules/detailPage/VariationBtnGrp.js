import React from 'react'
import { View,Pressable,Text } from 'react-native'

import VarationTxt from '../../atoms/detailsPage/VariationTxt'
import VariationBtn from '../../atoms/detailsPage/VariationBtn'
import buttonStyle from "../../../styles/buttonStyle";

const VariationBtnGrp = ({buttons}) =>{
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
     {buttons.map((buttonLabel, i) => (
          <VariationBtn
            key={i}
            onPress={(event) => handleClick(event, i)}
            style={(i == clickedId && activeId == 1 )? buttonStyle.buttonActive : buttonStyle.variationBtn}
          >
             <VarationTxt value={buttonLabel}/>
          </VariationBtn>
        ))}
      </>
    ) 
}

export default VariationBtnGrp;