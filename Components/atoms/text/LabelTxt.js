import React from 'react';
import { Text } from 'react-native';
import textStyle from '../../../styles/textStyle';
const LabelTxt = (props) =>{
    return(
       <Text style={textStyle.dateTxt}{...props}/>
    )
};

export default LabelTxt;