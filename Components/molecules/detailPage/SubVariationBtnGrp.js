import React from 'react'
import { View,Pressable,Text } from 'react-native'

import VarationTxt from '../../atoms/detailsPage/VariationTxt'
import VariationBtn from '../../atoms/detailsPage/VariationBtn'
import buttonStyle from "../../../styles/buttonStyle";
import useDetailOper from '../../../Service/DetailContext';

const SubVariationBtnGrp = () =>{
  const {subVariation,subVariationClick} = useDetailOper();
    const [clickedId, setClickedId] =  React.useState(-1);
    const [activeId, setActiveId] =  React.useState(0);
    const handleClick = (name, id) => {
      setClickedId(id);
      if(clickedId != id){

        setActiveId(1)
        subVariationClick(id,name)

      
      }else{

        setActiveId(0)
        setClickedId(-1)
        subVariationClick(-1,'')
      }

    };
    return (
      <>
      {subVariation != undefined ?(
        <>
     {subVariation.map((sub,i) => (
          <VariationBtn
            key={sub.variationValueId}
            onPress={(event) => {
              handleClick(sub.variationValueName, i)
            }}
            style={(i == clickedId && activeId == 1 )? buttonStyle.buttonActive : buttonStyle.variationBtn}
          >
             <VarationTxt value={sub.variationValueName}/>
          </VariationBtn>
        ))}
        </>
      ):(
        <></>
      )}
      </>
    ) 
}

export default SubVariationBtnGrp;