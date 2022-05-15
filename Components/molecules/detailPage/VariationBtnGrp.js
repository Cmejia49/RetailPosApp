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
    const handleClick = (name, id) => {
      setClickedId(id);
      if(clickedId != id){

        setActiveId(1)
        variationClick(id,name)

      
      }else{

        setActiveId(0)
        setClickedId(-1)
        variationClick(-1,'')
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
              handleClick(item.variationValueName, i)
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