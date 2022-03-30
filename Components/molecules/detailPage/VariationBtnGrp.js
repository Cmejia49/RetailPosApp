import React from 'react'
import { View,Pressable,Text } from 'react-native'

import VarationTxt from '../../atoms/detailsPage/VariationTxt'
import VariationBtn from '../../atoms/detailsPage/VariationBtn'
import buttonStyle from "../../../styles/buttonStyle";
import useDetailOper from '../../../Service/DetailContext';

const VariationBtnGrp = () =>{
    const {variationClick,variation} = useDetailOper();
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
      {variation != undefined ? (
        <>
      {variation.map((item,i) => (
          <VariationBtn
            key={item.variationValueId}
            onPress={(event) => {
              handleClick(event, i)
              variationClick(i,item.variationValueName)
            }}
            style={(i == clickedId && activeId == 1 )? buttonStyle.buttonActive : buttonStyle.variationBtn}
          >
             <VarationTxt value={item.variationValueName}/>
          </VariationBtn>
        ))}
        </>
        ):(
          <></>)}
      </>
    ) 
}

export default VariationBtnGrp;